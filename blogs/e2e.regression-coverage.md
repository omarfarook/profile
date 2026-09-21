---
title: "Why We Added E2E Regression Coverage While Extending a Shared Workflow"
slug: e2e-regression-shared-workflow
description: "How regression coverage shortened the feedback loop while we extended a production workflow built on shared frontend paths."
date: "2026-09-20"
author: "Mohamed Omar Farook"
---

# Why We Added E2E Regression Coverage While Extending a Shared Workflow

We were extending an existing production workflow to support a new product variant.

On the surface, the change looked additive: support another product, introduce its fields and validation, and update the relevant views. But the existing and new variants would use the same capture page, form infrastructure, and many of the same sections. Selecting a product dynamically changed what the user saw, what was required, and how parts of the form behaved.

Supporting the new variant meant modifying code paths already used by the existing production workflow. We added E2E regression coverage early in the extension, then ran it as we continued changing the shared workflow.

The suite exposed regressions in submission and field visibility while the work was still underway. That timing was what made it useful: we found the unintended effects while the changes were still fresh in our heads.

## The new feature changed the existing workflow

The existing workflow was already being used in production to capture and manage trades. The new product variant used that same workflow, sharing much of its underlying implementation:

- form state and schema infrastructure;
- trade and pricing sections;
- common fields;
- reference data;
- submission infrastructure.

Product selection determined which additional fields and behaviours applied. Conceptually, the change looked like this:

```text
Trade capture
├── Existing product
└── New product variant
```

Our concern was how changes to the shared capture path would affect existing users. Changes to validation, field visibility, section structure, or submission behaviour could affect users who had nothing to do with the new product.

## We had lower-level coverage, but no automated coverage for this workflow

The application already had tests around presentation components, hooks, mappers, validation logic, and calculations. Dependencies were mocked where appropriate. Those tests checked individual component states, responses, transformations, and validation rules.

What we didn’t have for trade capture was an automated answer to a different question: could a user still complete an existing trade when all of those pieces were assembled?

A representative journey involved navigating to capture, loading reference data, selecting a product, and interacting with the resulting form. Validation and calculated values then had to work together with submission. Regression of that assembled workflow still depended substantially on manual QA.

The extension would modify several of those pieces together. We wanted automated coverage that would let us run the existing journey as we made those changes, without waiting for a broader manual regression cycle.

## What the browser tests covered

We added Playwright coverage around representative behaviours in the existing workflow: creating a trade, product-dependent field visibility, validation during the workflow, calculated volume information, attachments and remarks, confirmation and cancellation, and read-only behaviour for settled trades.

We kept the lifecycle scenarios as separate tests rather than constructing one large E2E test. The settled-trade scenario started from an already-settled fixture; it checked the frontend’s behaviour in that state, rather than performing settlement.

Detailed schema rules, calculation permutations, mapper transformations, hooks, and isolated component states remained lower-level testing responsibilities. The browser tests exercised representative paths through the composed application, where those pieces had to work together.

Our external boundaries were controlled as well. Authentication was stubbed, and GraphQL responses went through the in-process mocking setup I described in my previous article on [GraphQL mocking in Next.js](/blog/graphql-mocking-nextjs).

So when I refer to E2E here, I mean browser-level tests spanning the frontend application workflow. They weren’t verifying the identity provider, real backend services, and infrastructure together. A passing test showed that the frontend could complete the scenario against those controlled responses; it didn’t establish that the real services would behave the same way.

## The regressions we found during the extension

We ran regression checks on the existing workflow after each implementation task. One of the regressions we caught involved validation.

The two products didn’t have identical requirements. Some fields required for the existing product weren’t required for the new variant, but both products shared the form and schema infrastructure.

While adapting that infrastructure, we introduced changes that affected validation for the existing product. An existing trade journey reached the submit step and failed because the shared validation no longer reflected that product’s requirements.

Another regression came from restructuring the form. Supporting the new variant required separating information that had previously been grouped together into pricing details and product-specific details. That restructuring unintentionally changed field visibility in the existing workflow.

The regression suite exposed both problems while the extension was still underway. We could investigate the impact of an individual task with a smaller change surface and the relevant code still fresh in our heads.

Manual QA probably would have caught at least some of these regressions. I can’t claim the tests prevented production incidents. What changed was when we discovered the problems: we didn’t need to finish the new workflow and enter a broader regression cycle to find them.

## Why we chose workflow coverage

A form-level integration test could have caught some of the validation regressions without launching a browser. Individual conditional-validation rules were cheaper to exercise directly against the schema. Calculation edge cases were better covered close to the calculation, and component-specific visibility could often be tested at component level.

If the risk had been confined to one of those boundaries, I would have extended that coverage. Browser tests bring execution and maintenance costs, so a regression being detectable through the UI isn’t enough reason to test it there.

Our gap was broader. The journey depended on navigation, reference data, dynamic form composition, validation, derived UI, and submission. We already had coverage of many of those pieces individually, but lacked representative coverage of their composition.

We wanted detailed coverage below the workflow and representative coverage across it. That left plenty of behaviour outside the browser suite: every validation combination, calculation edge case, or backend response wasn’t a separate browser scenario. The lower-level tests still mattered when a workflow test passed, and they could help narrow down the cause when it failed.

## What the coverage cost us

My estimate for establishing the initial coverage is roughly half a day to two days, with AI assisting with some of the Playwright test authoring.

AI reduced the mechanical effort required to produce the tests, but it didn’t decide what belonged in them. We still had to identify the important journeys, choose the right assertions, review the generated tests, and decide which behaviours belonged at lower levels.

Early on, the trade-capture tests exposed CI reliability issues. We addressed them with route warmup, timeout adjustments, and changes to the page-object helpers. Some of those fixes improved the shared Playwright setup across multiple routes, so I wouldn’t attribute all of that infrastructure work to these regression scenarios.

As the suite has grown, the ongoing cost I’ve noticed is CI execution time. Cheaper test authoring shouldn’t automatically result in more E2E tests. Every additional browser scenario still has an execution and maintenance cost, and the behaviour it protects needs to justify that cost.

## When I would use this approach again

I wouldn’t automatically add browser regression coverage for an isolated UI change, a change that doesn’t touch shared execution paths, or deterministic logic that can be protected more cheaply with unit tests. If the risky boundary were a single form already well protected by integration tests, I would extend those tests instead.

For another shared workflow extension, I would start by identifying the existing behaviour at risk and choosing the cheapest testing boundary that would tell us if we broke it.

In this case, we needed to add another product variant, restructure shared sections, and change conditional validation. Representative browser coverage let us keep making those changes while checking that the existing journey still worked. When we unintentionally changed that behaviour, we found out while the work was still underway.
