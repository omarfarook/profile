# Personal Website Recommendations

## Current Repo Summary

This repo is a compact Next.js personal profile site. It currently has:

- A home page with name, summary, about CTA, and CV download.
- An about page with a short bio and contact/social links.
- A CV page that renders a long resume-style document.
- A contact page with an EmailJS form.
- A fixed desktop side navigation and a mobile icon navigation.
- Static assets for profile photo, background image, AWS badge, favicon, and resume PDFs.

The current site works more like an online resume than a senior frontend engineer portfolio. It communicates availability and experience, but it does not yet prove seniority through project outcomes, technical depth, architecture decisions, quality practices, leadership, or product impact.

## Positioning Recommendation

For a senior frontend engineer, the website should answer one question quickly:

> Can this person lead frontend work that improves product quality, engineering speed, and user experience?

The site should position you as:

- A senior frontend engineer with strong React, Next.js, Angular, React Native, TypeScript, Redux Toolkit, RTK Query, MUI, testing, and AWS exposure.
- A builder of scalable UI systems, reusable component frameworks, and performance-sensitive user experiences.
- A technical leader who can mentor engineers, review code, shape frontend architecture, and deliver critical flows.
- A product-minded engineer who can connect frontend implementation to business outcomes.

Recommended headline:

> Senior Frontend Engineer building scalable React, Next.js, and design-system driven products.

Recommended subheadline:

> I help teams deliver reliable, accessible, and high-performance web applications through strong frontend architecture, reusable UI platforms, and pragmatic engineering leadership.

## Ideal Site Structure

### 1. Home

The home page should become a strong one-screen introduction, not just a greeting.

Recommended content:

- Name and senior role.
- Clear positioning statement.
- 3 proof points.
- Primary CTA: View Work.
- Secondary CTA: Download Resume or Contact.

Example proof points:

- 10+ years building web and mobile applications across banking, retail, and commerce.
- Led reusable widget and component platform work across enterprise products.
- Mentored engineers, reviewed code, and delivered critical flows with testing and clean-code practices.

Recommended sections:

- Hero.
- Selected work.
- Technical strengths.
- Leadership highlights.
- Contact CTA.

### 2. Work / Case Studies

This is the biggest missing piece. A senior portfolio should show evidence, not only list employers.

Create 3 to 5 case studies. They do not need to expose confidential client details. Use anonymized descriptions where needed.

Recommended case studies from the current CV:

- Banking platform reusable widget framework.
- Wealth management internal application setup with React, MUI, TypeScript, Redux Toolkit, RTK Query, Formik, and testing.
- Retail e-commerce performance improvement through asynchronous CMS rendering.
- Angular SSR and StateTransfer implementation for SEO and performance.
- B2B commerce application with SAP Commerce CMS integration.

Each case study should follow this structure:

- Context: What product, team, and business problem?
- Role: What exactly did you own?
- Constraints: Legacy system, compliance, multi-team dependencies, design system limits, performance targets, etc.
- Approach: Architecture, libraries, state management, testing, reusable components.
- Impact: Time saved, defects reduced, performance improved, delivery accelerated, adoption increased.
- Lessons: What tradeoffs did you make?

Example case study title:

> Reusable Widget Framework for Enterprise Banking Products

Example summary:

> Led frontend work on a reusable Angular widget framework used across banking platforms, reducing duplicated UI effort and creating a consistent user experience across product teams.

### 3. About

The current about page is too generic. It should explain how you work.

Recommended angle:

- Your engineering principles.
- Your collaboration style.
- Your leadership style.
- The kind of problems you are strongest at solving.

Suggested sections:

- What I do best.
- How I work with product and design.
- How I raise frontend quality.
- What I am looking for next.

Avoid generic phrases such as:

- Clean, creative, user-friendly experiences.
- Beautiful and powerful applications.
- Innovative and proven team player.

Replace them with concrete claims:

- I design reusable UI systems for complex workflows.
- I reduce frontend delivery risk with typed contracts, testable components, and reviewable architecture.
- I mentor developers through code reviews, pairing, and clear frontend standards.

### 4. Resume

The current `/mycv` route renders a full resume as HTML. This is useful, but it should not be the main portfolio experience.

Recommended changes:

- Keep the PDF download.
- Replace the long HTML resume page with a scannable resume summary page.
- Add experience cards with company, role, timeline, responsibilities, and impact bullets.
- Link related experience entries to case studies.
- Keep one canonical resume PDF, for example `/resume.pdf`.

Recommended resume summary sections:

- Current role.
- Selected impact.
- Skills.
- Experience.
- Certifications.
- Education.

### 5. Projects

If most work is confidential, create technical demos that prove frontend skill.

Recommended demo ideas:

- Design system playground: buttons, forms, tables, filters, pagination, modals, theme tokens.
- Data table demo: sorting, filtering, global search, pagination, URL state, accessibility, keyboard navigation.
- Form architecture demo: Formik or React Hook Form, schema validation, async submit, error states.
- Frontend performance demo: before/after Core Web Vitals optimizations.
- Next.js app demo: server components, metadata, routing, caching, SEO, image optimization.

Each demo should include:

- Live link.
- GitHub link.
- Technical notes.
- Tradeoffs.
- Screenshots or short GIF/video.

### 6. Writing

A senior frontend engineer benefits from technical writing. It shows judgment, not just syntax.

Recommended topics:

- Building reusable data table components in React.
- Form architecture for enterprise applications.
- RTK Query patterns for large apps.
- MUI customization strategy for client design systems.
- Frontend testing strategy beyond snapshots.
- Migrating legacy frontend code safely.
- Performance optimization for CMS-driven pages.
- Lessons from building frontend platforms in banking and retail.

Start with 3 short articles. They can be 700 to 1200 words each.

### 7. Contact

The contact page should be simple and reliable.

Recommended contact actions:

- Email link.
- LinkedIn link.
- GitHub link.
- Resume download.

The form is optional. If kept, it must be secure, accessible, spam-resistant, and reliable. A broken or suspicious contact form is worse than a simple email link.

## Short-Term Recommendations

These are the highest-return changes for the current repo.

### Content

- Update role from `Front End Developer` to `Senior Frontend Engineer`.
- Update summary from `7+ years` to current experience, if accurate.
- Rewrite the home hero around senior-level impact.
- Add a `/work` page with 3 initial case study summaries.
- Add a `/skills` or homepage skills section grouped by category:
  - Core: React, Next.js, TypeScript, JavaScript, HTML, CSS.
  - State and data: Redux Toolkit, RTK Query.
  - UI: MUI, responsive design, design systems.
  - Testing: React Testing Library, TDD, unit testing.
  - Mobile: React Native.
  - Cloud and delivery: AWS, CI/CD awareness.
- Replace generic about copy with a concrete engineering narrative.
- Use one canonical resume PDF and remove old public resume versions after confirming they are not needed.

### UX and Design

- Make the first viewport immediately communicate seniority, domain, and proof.
- Add a clear navigation item for `Work`.
- Avoid making the CV the main proof of experience.
- Improve mobile navigation labels or accessible names. Icon-only navigation is hard to understand without labels.
- Avoid disabling zoom with `userScalable: false`; users should be able to zoom for accessibility.
- Improve responsive layout so content does not depend on floats and fixed viewport heights.
- Add visible focus states for keyboard users.

### SEO and Metadata

- Replace old `my-profile.omarfarook.now.sh` metadata titles with the current domain.
- Improve the root description. `My Profile` is too weak.
- Add page-specific descriptions.
- Add Open Graph and Twitter metadata.
- Add structured data for a person/profile page.
- Add a sitemap and robots config if deploying publicly.

### Engineering

- Fix typo in `components/home/style.js`: `ustify-content` should be `justify-content`.
- Remove unused imports such as `LIGHT_RED` where it is not used.
- Remove unused `Component` import from `components/my-cv/index.js`.
- Fix duplicate `name="message"` in `components/mailer/index.js`.
- Fix `htmlFor="Subject"` so it matches the input id.
- Fix typo `id="eailid"` to `id="emailid"`.
- Move EmailJS identifiers out of `constant/index.js` and into environment variables where possible.
- Review whether `mailer.js` is used. If unused, remove it or wire it through a Next.js route handler safely.
- Remove tracked `.DS_Store` and add `.DS_Store` to `.gitignore` if not already present.
- Remove old `jquery` and `nprogress` static files if unused.
- Pin major dependency versions instead of using `latest`.
- Add linting, formatting, and type checking.

## Medium-Term Recommendations

These changes will turn the site into a credible senior portfolio.

### Build a Case Study System

Create structured case study data:

- title
- slug
- client/domain
- role
- timeline
- stack
- problem
- solution
- impact
- lessons

Render this through reusable components. This keeps content maintainable and lets you add new work without redesigning pages.

Suggested routes:

- `/work`
- `/work/banking-widget-framework`
- `/work/wealth-management-platform`
- `/work/ecommerce-performance`

### Add Evidence

For each case study, include at least one of:

- Architecture diagram.
- Component/system diagram.
- Screenshots with sensitive data removed.
- Performance numbers.
- Before/after comparison.
- Code snippets.
- Testing strategy.
- Design-system examples.

If you cannot share client visuals, create neutral diagrams and anonymized mock screens.

### Improve Visual Identity

The current design uses a fixed profile/sidebar layout. It feels resume-like and slightly dated. A senior portfolio should feel precise, modern, and content-first.

Recommended design direction:

- Full-width responsive layout.
- Strong typography.
- Clean neutral background.
- One restrained accent color.
- Clear section hierarchy.
- Project cards with concrete outcomes.
- Real profile photo used intentionally, not as the dominant design element.

Avoid:

- Overly decorative gradients.
- Full-page fixed background images behind important text.
- Long blocks of centered text.
- CV pages that mimic printed paper too closely.

### Add Technical Writing

Add a `/writing` route with MDX or content files.

Recommended initial articles:

- `How I Approach Reusable Frontend Architecture`
- `Building Enterprise Forms That Stay Maintainable`
- `What Makes a Data Table Component Production-Ready`

Writing does not need to be frequent. It needs to be thoughtful and specific.

### Add Quality Tooling

Recommended setup:

- ESLint.
- Prettier.
- TypeScript migration, even gradual.
- Unit tests for reusable components.
- Playwright smoke tests for main pages.
- GitHub Actions build check.
- Lighthouse or Core Web Vitals checks.

## Long-Term Recommendations

These are strategic improvements that build reputation over time.

### Make the Website a Professional Asset

Long-term, the site should become more than a resume. It should become a public proof system for your engineering judgment.

Add:

- Deep case studies.
- Architecture notes.
- Reusable component demos.
- Engineering principles.
- Speaking, mentoring, or leadership notes.
- Open-source contributions or small utilities.

### Create a Personal Frontend Lab

Build small but polished demos that show the kind of work senior frontend engineers are expected to lead.

Ideas:

- Accessible enterprise data grid.
- Workflow builder.
- Design token explorer.
- Complex form wizard.
- Dashboard with URL-synced filters.
- Performance comparison playground.
- Micro-frontend integration demo.

Each demo should be production-quality enough to discuss in an interview.

### Build Search and Content Indexing

As content grows, add:

- Search.
- Tags.
- Related articles.
- Related case studies.
- Reading time.
- RSS feed.

### Track Outcomes

Use privacy-friendly analytics to understand:

- Which case studies people read.
- Whether visitors download the resume.
- Which CTAs work.
- Whether recruiters land on the right pages.

Possible tools:

- Vercel Analytics.
- Plausible.
- Umami.

### Keep the Resume and Website in Sync

Create a single source of truth for:

- Experience.
- Skills.
- Projects.
- Certifications.
- Contact links.

This could be a local JSON/TS data file used by both the site and resume page.

## Suggested Information Architecture

Recommended navigation:

- Home
- Work
- About
- Writing
- Resume
- Contact

Recommended homepage order:

1. Hero with positioning and CTAs.
2. Proof points.
3. Selected work.
4. Technical strengths.
5. Leadership and collaboration.
6. Writing or technical notes.
7. Contact CTA.

## Suggested Homepage Copy

### Hero

```text
Senior Frontend Engineer building scalable React, Next.js, and enterprise UI systems.
```

```text
I help product teams deliver reliable, accessible, and high-performance web applications through reusable frontend architecture, strong testing practices, and pragmatic technical leadership.
```

### Proof Points

```text
10+ years across banking, retail, commerce, and mobile applications.
```

```text
Led reusable component and widget platforms for enterprise products.
```

```text
Mentored frontend engineers through code reviews, standards, and delivery ownership.
```

### CTA Labels

- View Work
- Download Resume
- Contact Me

## Suggested Case Study Topics

### Enterprise Banking Widget Framework

Focus:

- Micro-frontend or reusable widget strategy.
- Angular architecture.
- Cross-platform reuse.
- Coordination with product teams.
- Review process and quality standards.

### Wealth Management Frontend Platform

Focus:

- React, TypeScript, MUI, Redux Toolkit, RTK Query, Formik.
- Base project setup.
- Reusable widgets.
- Table, filter, search, sorting, pagination patterns.
- Testing and mentorship.

### E-Commerce Performance and CMS Rendering

Focus:

- React components.
- Asynchronous CMS content rendering.
- Performance improvements.
- Large-scale retail delivery.
- Cross-browser and responsive behavior.

### Angular SSR and SEO Improvement

Focus:

- Server-side rendering.
- StateTransfer.
- SEO and performance.
- Third-party integrations.
- Product detail and shopping-path flows.

## Recommended Tech Direction

### Keep

- Next.js.
- React.
- Emotion if you prefer CSS-in-JS and want to keep the current style direction.
- Static resume PDF download.

### Consider Adding

- TypeScript.
- MDX for case studies and writing.
- `next/image` for optimized images.
- Route-level metadata.
- A data-driven content layer.
- Playwright smoke tests.
- Analytics.

### Consider Removing

- Unused jQuery and nprogress files.
- Unused `mailer.js` if not wired into the app.
- Old resume PDFs.
- Tracked `.DS_Store`.
- `latest` dependency versions.

## Security and Privacy Notes

- Public contact forms attract spam. Use a server-side route with validation and rate limiting if you keep the form.
- Do not expose private service identifiers if avoidable.
- Avoid publishing personal phone number prominently unless you intentionally want direct calls.
- Use a professional email as the primary contact channel.
- Keep confidential client work anonymized.

## Accessibility Recommendations

- Do not disable pinch zoom.
- Ensure all icon-only links have accessible labels.
- Add focus styles.
- Use semantic landmarks: `header`, `nav`, `main`, `footer`.
- Ensure color contrast passes WCAG AA.
- Make the contact form labels match input ids.
- Add form validation messages, not only required attributes.
- Ensure mobile navigation can be closed with keyboard and Escape.

## Performance Recommendations

- Use `next/image` for profile and background imagery.
- Avoid large fixed background images behind text on mobile.
- Remove unused static scripts.
- Self-host or optimize fonts if needed.
- Add Lighthouse checks before release.
- Keep the homepage lightweight and content-first.

## Suggested Implementation Roadmap

### Phase 1: Foundation

- Update copy and role positioning.
- Add `Work` navigation.
- Add a basic `/work` page.
- Create 3 anonymized case study summaries.
- Clean metadata.
- Fix accessibility issues in form and navigation.
- Remove unused files.

### Phase 2: Portfolio Proof

- Build full case study pages.
- Add reusable project cards.
- Add technical skills section.
- Add outcome-based experience cards.
- Add one or two diagrams.
- Add analytics.

### Phase 3: Senior Signal

- Add writing section.
- Add technical demos.
- Add test coverage and CI.
- Migrate key files to TypeScript.
- Add content source of truth.

### Phase 4: Long-Term Reputation

- Publish deeper architecture articles.
- Add open-source utilities or demos.
- Keep case studies updated with measurable impact.
- Turn interview-relevant experience into clear public proof.

## Priority Checklist

- [ ] Change role to `Senior Frontend Engineer`.
- [ ] Rewrite hero copy.
- [ ] Add `/work`.
- [ ] Add 3 case study summaries.
- [ ] Convert resume page into a scannable experience page.
- [ ] Keep one canonical resume PDF.
- [ ] Improve metadata and SEO.
- [ ] Fix contact form accessibility bugs.
- [ ] Remove unused files.
- [ ] Add linting and formatting.
- [ ] Add TypeScript gradually.
- [ ] Add CI build check.

## Final Recommendation

The strongest version of this site should not say only "I have experience." It should show how you think, how you lead frontend work, and what outcomes your engineering decisions create.

The immediate priority is to add proof: case studies, concrete impact, and senior-level positioning. The long-term priority is to turn the website into a living portfolio of frontend architecture, product delivery, and technical leadership.
