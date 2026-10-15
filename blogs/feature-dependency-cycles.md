---
title: "The Dependency Cycle Our Frontend Linter Couldn’t See"
slug: feature-dependency-cycles
description: "How a feature-level dependency cycle led us to move product-specific logic, clarify shared ownership, and enforce a focused ESLint boundary."
date: "2026-10-15"
author: "Mohamed Omar Farook"
---

# The Dependency Cycle Our Frontend Linter Couldn’t See

Our Next.js application followed a feature-based architecture. Each feature owned its components, hooks, API integration, models, and utilities. Routes were thin wrappers around feature entry points, and related code generally stayed together.

This worked well as the application grew. Changes could usually be made within a single module, without navigating unrelated parts of the application or adding to global directories containing every component and hook.

But during an architecture review, we found a dependency cycle that our existing lint rules didn’t report. Two product modules depended on a shared order-placement workflow. That workflow, in turn, imported APIs from both product modules.

The imports were individually reasonable. The workflow needed product details, and the product modules already exposed APIs to retrieve them. At the feature level, however, the dependency ran in both directions.

We had organized code into features without defining how those features were allowed to depend on one another. We decided to address that gap without replacing the existing architecture or restructuring the entire application.

*Names and examples below are simplified to focus on the dependency relationships.*

## The cycle between features

The application kept feature implementations under a top-level `modules/` directory, with routes importing their entry points.

As the application evolved, three kinds of features emerged. Page features owned standalone workflows mounted by routes. Section features provided functionality embedded within another page, such as an alert dialog or a standing-order form. Shared business features provided workflows consumed by several pages; order placement was the clearest example.

All three lived under `modules/`. The structure didn’t distinguish page-owned features from capabilities intended to be reused, and nothing prevented a reusable feature from importing implementation details from the pages consuming it.

The `place-order` module contained order tabs, review dialogs, order submission, and step-up verification. Both product modules consumed this functionality. It also owned product-specific higher-order components that retrieved details using APIs from those same product modules.

```text
modules/products-a ──► modules/place-order
modules/products-b ──► modules/place-order

modules/place-order ──► modules/products-a/api
modules/place-order ──► modules/products-b/api
```

Importing an existing API avoided duplicating data-fetching logic. But it also meant that the shared workflow knew about the features using it.

This did not require a circular dependency between individual files. One file in `products-a` could import an order tab from `place-order`, while a different file in `place-order` imported `ProductsApi`. Following those imports would not necessarily lead back to the original file.

The [`import/no-cycle` rule](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md) checks for a dependency path back to a source module. It doesn’t combine the files under each feature directory into a single unit of ownership. It could therefore pass while our feature dependency graph contained a cycle.

The investigation also found inconsistent public entry points. Some modules exposed an `index.ts` barrel, others exported a container through `index.tsx`, and several had no public entry point. Consumers frequently imported internal hooks, components, and API classes directly. Those implementation details had become part of each module’s effective public interface.

We decided to distinguish page-oriented features under `modules/` from reusable business capabilities under `shared/`. Generic UI would remain under `components/`.

The new directory came with one dependency rule: code in `shared/` and `components/` must not import page features under `modules/`, with exceptions for existing cross-cutting hooks and utilities.

We didn’t prohibit every dependency between modules. Our immediate goal was to stop reusable capabilities from reaching back into the features consuming them. Moving `place-order` into `shared/` therefore required removing its product-module dependencies first.

## Moving product-specific ownership

We separated the dependency refactor from the directory move. Changing the relationships while the code remained in its original location made the later move easier to reason about.

The first change involved the product-specific higher-order components. Previously, `place-order` owned both the reusable order tab and the wrappers that fetched each product’s data. We moved those wrappers into their respective product modules.

The resulting composition looked conceptually like this:

```tsx
// modules/products-a: imports omitted
const ProductOrderTab = withProductData(OrderTab)
```

The product module owned `withProductData`, including its API dependency. The shared `OrderTab` remained responsible for the reusable order-tab behavior. Each product module composed that behavior with its own data fetching.

This added responsibility to the product modules, but it placed that responsibility where the product-specific knowledge already belonged. The shared workflow no longer needed to select an API based on which page rendered it.

After the refactor and directory move, the ownership looked like this:

```text
modules/products-a
  ├── owns ProductsApi
  ├── owns withProductData
  └── imports shared/place-order/OrderTab

modules/products-b
  ├── owns ProductsApi
  ├── owns withProductData
  └── imports shared/place-order/OrderTab
```

## Making the review dialog presentational

The review dialog required more work. It imported both product APIs to retrieve current details and a standing-order hook to determine whether a manual purchase would affect an existing order. It fetched data, calculated a cancellation warning, and rendered the purchase review.

We initially considered injecting a product-specific fetcher into the dialog. That would have removed the direct API import, but our existing data-fetching hook still depended on response types defined in the product modules. Using that hook would have retained a type-level dependency even after removing the API dependency.

That limitation belonged to our hook’s contract; it wasn’t an inherent problem with injecting a fetcher. For this refactor, we chose to move the data fetching into the product modules and pass the results to the dialog.

The dialog received product details and loading state through props. We also moved the standing-order lookup and warning calculation outside it. The product modules used the existing hook, calculated the warning through a pure helper, and passed the value down.

The relevant inputs looked like this, with other dialog props omitted:

```tsx
<ReviewOrderDialog
  productDetails={productDetails}
  isLoading={isLoading}
  cancellationWarning={warning}
/>
```

The dialog no longer needed to know where the data came from. It still presented the purchase for review, while the modules owning the data prepared its inputs.

Preserving cache identity was an important constraint. Previously, the dialog and product details panel used matching SWR keys so they could share cached data. Moving the fetching could have changed that relationship if we changed the keys or the fetching lifecycle.

We kept the same cache keys; request timing also depends on when the fetching hooks run.

The resulting dialog was also easier to test. Instead of mocking product APIs and the standing-order hook inside its tests, we could supply data directly through props. We tested the warning calculation separately.

The business logic still existed, but its ownership was clearer. The product modules prepared data, the pure helper calculated the warning, and the dialog displayed the result.

## Dependencies the migration exposed

We introduced `shared/` incrementally. The initial plan was to move two relatively simple sections before tackling order placement: a pair of offer UI components and an alert-creation feature. We initially classified both as clean moves. That assessment was wrong.

The alert submission hook imported a cache mutator from the standalone alerts page module. Once the creation feature moved to `shared/`, that import crossed the new boundary.

Our dependency search had missed it because a prefix matched both the singular feature name, `alert`, and the plural page name, `alerts`. The relevant import was excluded from the results. Searches intended to exclude a module’s own imports need to match the full path segment, especially when names overlap.

The submission hook needed to invalidate the alerts list after creating or updating an alert. The list page needed the same SWR cache identity and mutator. Those operations weren’t inherently owned by the page just because their implementation happened to live there.

We extracted the cache key and mutator into a shared cache module. Both consumers could then use them without a dependency from shared code back into a page feature:

```text
modules/alerts/hooks
  └──► shared/alert/alertsCache
                    ▲
                    │
shared/alert/useSubmitAlert
```

This was a small ownership change, but moving the directory alone would not have resolved it. We had to decide which part of the existing page implementation was actually shared infrastructure.

Order placement exposed two more gaps in the migration checks. After removing the known product and standing-order dependencies, we found that the order tab also imported a permission helper from `modules/auth.ts`. Our earlier checks had focused on the expected feature dependencies and missed this import. Because the helper was only used by order placement, we moved it alongside that capability.

We also missed an old order-placement path in a top-level utility directory that the initial import rewrite hadn’t covered. TypeScript caught that reference.

These findings changed how we approached the remaining checks. We needed to inspect all imports crossing the proposed boundary, including helpers outside feature directories, instead of searching only for dependencies we already expected to find.

## Enforcing the boundary with ESLint

Once the relevant dependencies were removed, we introduced lint enforcement. We already used `eslint-plugin-import`, including `import/no-cycle`, so we used `import/no-restricted-paths` to restrict the direction between directories.

The essential configuration below is a fragment of the ESLint `rules` object. Its paths assume lint runs from the application root. If lint runs elsewhere in a monorepo, set the rule’s `basePath` to the application directory explicitly.

```js
'import/no-restricted-paths': [
  'error',
  {
    zones: [
      {
        target: './shared',
        from: './modules',
        except: ['./hooks', './utils'],
        message:
          'shared/ must not import from modules/. Invert the dependency.',
      },
      {
        target: './components',
        from: './modules',
        except: ['./hooks', './utils'],
        message: 'components/ must not import from modules/.',
      },
    ],
  },
],
```

The exceptions allowed `modules/hooks` and `modules/utils`, which were existing cross-cutting directories. Those directories might eventually move outside `modules/`, but relocating them wasn’t necessary to address the immediate problem.

Before relying on the rule, we introduced a deliberate forbidden import from `shared/` into a page feature and ran lint. One concern was whether our existing configuration would resolve the TypeScript aliases correctly. The rule reported the violation without additional resolver configuration in our setup.

The rule checks resolved file paths. Other projects may need resolver configuration for their aliases.

We also caught an exception-path mistake. With `from: './modules'`, the correct exceptions were `['./hooks', './utils']`. Using `['./modules/hooks', './modules/utils']` didn’t exempt the intended directories because these exceptions are relative to `from`. The [rule documentation](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md) explains both path resolution and exception handling.

Deliberately testing a forbidden import helped us distinguish a working boundary from a configuration that merely looked correct.

### A component in the wrong layer

One remaining violation involved an account sidebar. It lived under the generic `components/` directory but imported a hook from an account feature.

On inspection, the sidebar was application layout functionality with a single consumer. We moved it into the existing `layouts/` directory rather than moving the account feature into `shared/` or adding another prop-injection layer.

That location better reflected its responsibility. It also sat outside the protected generic-component layer; the rule was never intended to prevent application layouts from composing features.

After resolving the remaining violations, we enabled the rule as an error. Reviewers still needed to judge ownership, but they no longer had to remember to check every import against this boundary manually.

## Where we stopped

Several broader improvements came up during the migration. We kept them separate from the dependency rule because they had different costs and weren’t all necessary to protect the shared workflow.

### Keeping the standing-order feature together

The standing-order feature owned both a standalone management page and a creation form embedded in product pages. Our initial proposal was to move the form into `shared/` while leaving the page under `modules/`.

But the form depended on much of the feature’s implementation: hooks, APIs, models, validation schemas, utilities, and several components. Splitting it would have required a substantial refactor across create, edit, and cancel workflows.

Initially, the split also appeared necessary because order placement depended on the standing-order hook. Once we moved that dependency into the product modules, nothing in shared order placement needed to import from the standing-order feature.

The remaining relationship was a product module importing another module. Our rule still permitted that composition. We decided not to make splitting the standing-order feature a prerequisite for enforcing the boundary; its migration cost and regression risk were no longer justified by the immediate goal.

Not every reusable section needed to move into `shared/` for this rule to provide value.

### Allowing some feature-to-feature dependencies

The rule does not prevent `modules/A` from importing `modules/B`. It therefore does not detect every possible feature-level cycle. It protects the particular boundary between reusable capabilities and page features that had caused our problem.

A stricter architecture could prohibit sibling-feature imports, require every reusable section to move into `shared/`, and enforce public entry points. That could provide stronger isolation, but it would require a larger migration.

We also left the inconsistent exports and deep imports as a separate concern. We documented a preference for public module entry points without making conversion of every barrel or container export part of this change. The new rule doesn’t enforce those conventions.

### Accepting more composition in the product modules

The product modules now prepare more data and perform more composition. Shared components receive more dependencies through props. Existing cross-cutting utility directories remain exceptions, so the rule does not establish complete transitive isolation from feature code.

These are costs of the approach. ESLint also cannot decide whether a capability has the right domain owner or whether an abstraction is premature. Those judgments still belong in architectural review.

I wouldn’t necessarily introduce a strict dependency framework at the beginning of the next codebase. A capability can reasonably start inside one workflow and become shared only when another workflow needs it. Predicting every shared capability upfront would create abstractions before their requirements were clear.

I would establish the distinction between page-owned code and reusable capabilities earlier, and investigate when a shared workflow starts importing APIs from the pages that render it. Frequent imports of internal hooks and components are another reason to revisit ownership, even when lint passes.

For this application, moving product-specific fetching to its consumers and giving shared cache operations a shared home resolved the dependency we had identified. ESLint now rejects direct imports from `shared/` and `components/` into page features, apart from the documented utility exceptions.
