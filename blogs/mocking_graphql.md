---
title: "GraphQL Mocking in Next.js: MSW Baselines, Playwright Overrides"
slug: graphql-mocking-nextjs
description: "How we kept reusable MSW GraphQL handlers while moving mock resolution into Next.js and per-test overrides into Playwright."
date: "2026-09-06"
author: "Mohamed Omar Farook"
---

# GraphQL Mocking in Next.js: MSW Baselines, Playwright Overrides

_How we kept shared MSW handlers while moving baseline resolution into a Next.js App Router Route Handler and per-test overrides into Playwright._

Our Next.js application already had reusable GraphQL mocks. The problem wasn’t defining more mocks. It was making them reliable for E2E tests while still letting an individual Playwright test change one response.

We eventually kept the MSW handlers but changed how requests reached them. Mock-mode traffic now goes through `/api/graphql`, while Playwright intercepts the operation a test wants to change. **MSW owns the shared baseline; Playwright owns the per-test deviation.**

Operation names and data in the examples below are illustrative.

## Why the interception model stopped fitting

The previous setup registered the same handlers with `setupWorker()` in the browser and `setupServer()` in the Next.js runtime. Mocking depended on those interceptors catching requests addressed to the configured GraphQL API.

```text
Previous setup — shared handlers, two interception environments

Browser requests ──> MSW Service Worker ──> shared handlers
Next.js requests ──> MSW Node interception ──> shared handlers

Requests without a mocked response could continue to the network.
```

Worker readiness was an explicit dependency of application startup. We had already tried coordinating rendering with initialization; the provider immediately before the migration awaited `worker.start()` and withheld its children until that promise resolved.

Even with that history of readiness handling, we observed initial requests escaping mocks and attempting to reach the real backend during some Playwright UI-mode reruns. We had made readiness explicit, but had not pinned down the precise lifecycle sequence behind those escaped requests. We wanted to remove that dependency from the E2E request path.

Separately, in our Next.js environment, requests we expected the Node-side MSW setup to intercept escaped and attempted a real connection. We did not establish a framework-internal cause for that behavior.

Per-test overrides introduced another constraint. A test might need `UpdateProduct` to fail while all the queries required to render the page kept their normal responses. We wanted Playwright’s routing to own that exception, but [`page.route()` does not intercept requests intercepted by a Service Worker](https://playwright.dev/docs/api/class-page#page-route).

So we needed two things: initial requests had to hit the mocks consistently, and a test had to be able to change one operation without redefining everything else. A mutation-error test should not have to duplicate every successful query response needed to reach the Save button.

We could have continued investigating interception and worker lifecycle behavior. That remained a valid option. We chose to make the destination of mock requests explicit because it also gave Playwright a boundary for per-test overrides. The decision addressed both constraints while retaining the handlers we already trusted.

## Preserving handlers while changing the request boundary

Interception and resolution serve different purposes. Interception gains control of a request; resolution matches it to a handler and produces a response.

The reusable part of MSW for us was its GraphQL handler layer: operation matching, fixtures, response shapes, and resolvers that could read request variables. Those handlers described the default environment that let a page load and a user complete a workflow.

We could have replaced them with a switch over operation names inside a route. That would give us an explicit endpoint, but it would also move response definitions into another implementation and duplicate behavior we already maintained. The interception problems did not give us a reason to discard the handler abstraction.

The question became whether we could keep the resolution layer and simply change how requests reached it.

That led us to `/api/graphql`.

## Mock-only resolution and explicit harness failures

We repurposed an existing `/api/graphql` stub as a mock-only [Next.js Route Handler](https://nextjs.org/docs/app/api-reference/file-conventions/route). When mock mode is enabled, configuration changes the GraphQL client’s URL to this endpoint on the application’s origin. With mocking disabled, the client continues targeting the real upstream directly.

The endpoint is the destination of a baseline mock request. It does not need an interceptor to prevent that request from reaching the backend.

Inside the route, we read the body and construct a JSON `Request` for MSW. We call each handler’s `run()` method in order and return the first result containing a response. This excerpt shows that resolution loop; the mock-mode guard and handler import are omitted:

```ts
const mockRequest = new Request('http://localhost/api/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: await request.text(),
});

for (const handler of handlers) {
  const result = await handler.run({
    request: mockRequest,
    requestId: crypto.randomUUID(),
  });

  if (result?.response) {
    return new NextResponse(await result.response.text(), {
      status: result.response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

return NextResponse.json(
  { errors: [{ message: 'No mock handler matched this operation' }] },
  { status: 501 }
);
```

The localhost URL supplies an absolute URL for handler matching; constructing the `Request` does not send another HTTP request. The migration reused the existing handler definitions without changing them.

Our installed MSW version, 2.11.1, declares `handler.run()` public, but invoking handlers directly is a lower-level integration than `setupWorker()` or `setupServer()`. [MSW RequestHandler source](https://github.com/mswjs/msw/blob/v2.11.1/src/core/handlers/RequestHandler.ts)

A missing handler is a harness failure: the mock environment cannot supply the state the test depends on. An intentional GraphQL error is an application scenario: the test asks whether the interface handles an operation’s failure.

If no handler produces a response, the endpoint returns HTTP `501` with a JSON error. Deliberate operation failures use HTTP `200` with GraphQL `errors`. That makes a missing baseline handler immediately distinguishable from an error the test asked for. An unmatched operation is never forwarded to the upstream as a fallback.

The `501` status is a harness convention, not guidance for GraphQL APIs. The route also returns it when called with mocking disabled. The final implementation has no upstream forwarding branch and is not a production proxy.

## Playwright overrides, ownership, and timing

The Playwright configuration starts, or reuses, a separately running Next.js development server. The test runner cannot directly mutate an in-memory handler collection in that application process. Importing an MSW server and calling `server.use()` in a test would affect the test process’s instance.

An application-side override API was possible: a test could ask the Next.js server to change an operation’s response before exercising the UI. But then we would need to decide which test owned that change, how long it lasted, how it was reset after a failure, and how parallel tests avoided changing each other’s responses.

That coordination was unnecessary for the browser requests we needed to control. Playwright already controlled each test’s browser page, so we placed overrides there. The shared handlers stayed in the application process, and the response that made a scenario unusual stayed with the test.

```text
Mock mode — per-test routing over a shared baseline

Browser GraphQL request
          │
          ▼
Playwright page.route()
          │
          ├── targeted operation ──> fulfill test response
          │
          └── other operations ──> continue HTTP request
                                           │
                                           ▼
                               Next.js POST /api/graphql
                                           │
                                           ▼
                                 shared MSW handlers
```

All the relevant operations use the same endpoint. The helper inspects the JSON POST body’s `operationName` to select the operation to override. For example, this is the routing behavior behind a mutation failure:

```ts
await page.route('**/api/graphql', async (route) => {
  const body = route.request().postDataJSON();

  if (body?.operationName === 'UpdateProduct') {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        errors: [{ message: 'Service unavailable' }],
        data: null,
      }),
    });
  } else {
    await route.continue();
  }
});
```

`UpdateProduct` receives the Playwright response without reaching Next.js. Other operations, such as `GetProducts`, continue to `/api/graphql` and resolve against the baseline. The test only supplies the response that differs from normal behavior.

We wrapped the routing logic in helpers such as `failOperation()` and `overrideOperation()`, so tests describe the scenario rather than the routing mechanics.

A test about one mutation now only defines what is unusual about that mutation. It doesn’t maintain a second copy of all the data required to render the page.

Timing remains explicit. For a browser query triggered by initial rendering, register the override before navigation:

```ts
await failOperation(page, 'GetProducts');
await page.goto('/');
```

For a mutation triggered only by a later interaction, the page can first load the baseline:

```ts
await page.goto('/');
await failOperation(page, 'UpdateProduct');
await page.getByRole('button', { name: 'Save' }).click();
```

These examples generalize the two arrangements in our tests. In the initial-query case, navigation in a shared `beforeEach` would be too early: by the time the test registered the override, the query could already have resolved against the baseline. The initial-query failure test therefore uses a separate group without that automatic navigation.

The rule is simple: register the override before the request you want to control.

## Trade-offs and the browser/server boundary

The GraphQL calls covered here originate in the browser through React Query and the GraphQL client. If a query moves entirely into a React Server Component or another server-side execution path, `page.route()` cannot override that outgoing GraphQL request. Even if the server calls `/api/graphql`, that server-to-server request is outside the page’s routing boundary. We would need to revisit override ownership alongside that fetching change.

Direct handler execution is an adapter we now own. It passes JSON request bodies to MSW and returns response bodies and statuses, without preserving arbitrary headers. It also bypasses the normal interception lifecycle. MSW handlers can retain state, including one-time usage, so direct execution should not be treated as a pure function. That makes the adapter something we need to verify when upgrading MSW.

The override helper assumes a JSON POST body containing `operationName`. That fits the requests covered here; a different transport or operation-identification scheme would require adapting the helper.

These mocked E2E tests exercise frontend behavior without validating the real backend contract or reproducing the production network path. Removing worker readiness from the mock path also leaves the usual requirement for a correctly configured application server.

## What the separation taught us

The useful abstraction in MSW for us was the reusable handler layer. Once we separated that layer from network interception, we could change the execution path without rewriting the default responses. The migration made this concrete: the application’s interception setup was removed while the shared handler definitions were retained.

The second lesson was about ownership. The Next.js application could resolve the shared baseline, while Playwright could control a browser request for one test. Following those existing boundaries avoided introducing an application-side scenario registry and a protocol for mutating it from another process. Using two mechanisms was an acceptable cost because each had a specific responsibility.

The request path also became easier to debug. When something goes wrong, there are only a few questions to answer: did Playwright fulfill the request, did it reach `/api/graphql`, and did an MSW handler produce a response? For these tests, we can answer those questions without depending on the real GraphQL backend.

This pattern emerged because several constraints appeared together: worker initialization needed coordination, we had seen Node-side requests escape interception, Playwright needed operation-specific overrides, and the MSW handlers themselves were still useful.

If conventional MSW interception already works for your application and tests, adding a mock Route Handler probably buys you very little. In our case, changing where request control lived let us keep the handlers that were working and replace the execution path that was causing problems.
