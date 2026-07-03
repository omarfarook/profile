# Agent Development Guide

This file defines deterministic instructions for future coding agents working in this repository.

## Repository Purpose

This repository is a personal profile website for Mohamed Omar Farook.

It is a Next.js App Router project deployed on Vercel. The app renders a small static-style profile site with these public routes:

- `/`
- `/aboutme`
- `/mycv`
- `/contactme`

## Runtime And Package Manager

- Use `pnpm`, not `npm` or `yarn`.
- The project declares `packageManager: pnpm@10.28.1`.
- The project declares `engines.node: 24.x`.
- Keep `pnpm-lock.yaml` committed and in sync with `package.json`.
- Keep `pnpm-workspace.yaml` valid for pnpm 9 and pnpm 10. It must include:

```yaml
packages:
  - .
```

This is required because Vercel may select pnpm 9. Without a non-empty `packages` field, Vercel install fails with `packages field missing or empty`.

## Standard Commands

Run these commands from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm build
```

For local development:

```sh
pnpm dev
```

There is no test script, lint script, or formatter script configured at the time this guide was written. Do not claim tests or lint passed unless an explicit script is added and run.

## Project Structure

- `app/` contains App Router route entries and global layout.
- `app/layout.js` defines metadata, viewport settings, Google Tag Manager, fonts, and wraps all pages with `components/layout`.
- `app/globals.css` contains global CSS and the fixed background image.
- `components/` contains UI components. Most component folders follow this pattern:
  - `index.js` for markup and behavior.
  - `style.js` for Emotion styled components.
- `constant/index.js` contains profile text, contact links, EmailJS identifiers, and button labels.
- `constant/style.js` contains shared color/style constants.
- `public/` contains static assets, images, JavaScript/CSS vendor files, favicons, and resume PDFs.
- `docs/` contains supporting project documentation.

## Coding Conventions

- Use JavaScript files with `.js` extensions.
- Follow the existing semicolon-light style. Do not reformat unrelated files.
- Use relative imports consistent with nearby files.
- Use `@emotion/styled` for component-level styles when editing an existing component folder.
- Keep reusable profile/contact copy in `constant/index.js`.
- Keep reusable visual constants in `constant/style.js`.
- Use Next.js `Link` for internal navigation.
- Use `useRouter`, `usePathname`, browser events, `window`, or state only inside files marked with `'use client'`.
- Page files under `app/` should stay small and import their page component from `components/`.
- Add or update `metadata` exports in route files when adding public pages.
- Keep static asset references root-relative, for example `/bg.jpg` or `/Resume-mvm.pdf`.

## Client And Server Component Rules

- Treat `app/layout.js` and route files as server components unless client APIs are required.
- Components that use React state, effects, Next navigation hooks, direct DOM events, or `window.open` must start with `'use client'`.
- Existing client components include navigation, layout wrapper, home actions, contact form, and mailer behavior.

## Routing Rules

When adding a new public route:

1. Add `app/<route>/page.js`.
2. Add a matching component under `components/<route-name>/`.
3. Add navigation links in both `components/nav-bar/index.js` and `components/mobile-nav/index.js` when the route should be user-visible.
4. Export route metadata from the page file.
5. Run `pnpm build` and confirm the route appears in the build output.

## Styling Rules

- Preserve the current layout model unless the task explicitly requests redesign.
- Desktop navigation is handled by `components/nav-bar`.
- Mobile navigation is handled by `components/mobile-nav`.
- The home page uses `.fixed-bg` from `app/globals.css` for the background image.
- Prefer updating existing styled components over adding new global CSS.
- Avoid broad global CSS changes unless a cross-page behavior is intentionally being changed.
- Verify responsive behavior when changing widths, fixed positioning, navigation, or full-height sections.

## Contact Form Rules

- The contact form uses `emailjs-com` in `components/mailer/index.js`.
- EmailJS constants currently live in `constant/index.js`.
- Do not rename EmailJS fields or constants unless also verifying the EmailJS template compatibility.
- Keep form submit behavior deterministic:
  - Disable the submit input while sending.
  - Show `Sending...`, `Mail Sent`, or `Try again` based on result.
  - Reset fields after `RESET_INTERVAL`.

## Asset Rules

- Static files are served from `public/`.
- Resume downloads currently reference `/Resume-mvm.pdf`.
- Do not delete old resume PDFs unless explicitly requested.
- Use clear, stable file names for new public assets.
- If replacing an image or PDF that is referenced in code, update every reference and verify with `pnpm build`.

## Dependency Rules

- Before adding a dependency, check whether the existing dependency set already covers the task.
- Use exact project patterns before introducing a new framework or styling method.
- If dependencies change, run:

```sh
pnpm install
pnpm build
```

- Commit `package.json` and `pnpm-lock.yaml` together when dependency changes are intentional.

## Verification Checklist

For code changes, run the smallest relevant checks plus `pnpm build` before finalizing.

Required for most changes:

```sh
pnpm build
```

Required when dependencies or lockfile change:

```sh
pnpm install --frozen-lockfile
pnpm build
```

Required when visual layout, navigation, responsive behavior, or interactive UI changes:

- Start `pnpm dev`.
- Open the affected routes.
- Check desktop and mobile viewport behavior.
- Confirm there is no overlap, clipping, or blank content.

## Git Rules

- Do not revert user changes unless explicitly requested.
- Keep commits focused on one logical change.
- Before committing, run:

```sh
git status --short
git diff --stat
```

- If committing, use concise imperative commit messages, for example:

```text
Fix pnpm workspace config
Update contact form copy
Add portfolio route
```

## Deterministic Agent Output

When reporting completed work, use this exact shape unless higher-priority agent instructions require a different response format:

```text
Done.

Changed:
- <file>: <short concrete change>

Verified:
- <command>: <result>

Notes:
- <important caveat or "None">
```

When reporting a blocker, use this exact shape unless higher-priority agent instructions require a different response format:

```text
Blocked.

Reason:
- <specific blocker>

What I checked:
- <file/command/source>

Next required action:
- <specific action needed from the user or environment>
```

Do not include speculative claims. If a command was not run, state that it was not run.
