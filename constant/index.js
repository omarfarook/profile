export const MAIL_ID = 'omar@omarfarook.com'
export const PHONE_NO = '+65 96567792'
export const GITHUB_URL = 'https://github.com/omarfarook'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mohamed-omar-farook-v-m-46070473/'
export const GITHUB_NAME = 'omarfarook.github'
export const LINKEDIN_NAME = 'omarfarook.linkedin'
export const NAME = 'Mohamed Omar Farook'
export const ROLE = 'Senior Software Engineer'
export const HEADLINE = 'Senior Software Engineer focused on Frontend Architecture, React, Next.js, TypeScript, and GraphQL'
export const RESET_INTERVAL = 3000
export const ABOUT_ME = 'I am a Singapore-based Senior Software Engineer with 10+ years of experience building enterprise applications across banking, energy, and e-commerce. I specialize in scalable frontend architecture, React, Next.js, TypeScript, GraphQL, reusable UI platforms, automated testing, and maintainable application design.'
export const SUMMARY = 'I build and modernize enterprise frontend applications with React, Next.js, TypeScript, GraphQL, reusable UI systems, and reliable test automation.'
export const AboutMe = 'More About Me'
export const DOWNLOAD_CV = 'Download My CV'

export const PROOF_POINTS = [
  '10+ years building enterprise applications across banking, energy, and e-commerce',
  'Frontend architecture for React, Next.js, TypeScript, GraphQL, Angular, and micro-frontend platforms',
  'Reusable UI foundations, Playwright automation, RFCs, mentoring, and cross-functional delivery'
]

export const CORE_EXPERTISE = [
  'Frontend Architecture',
  'React, Next.js, TypeScript, and GraphQL',
  'Playwright, Test Automation, and CI/CD',
  'Keycloak, OAuth2, and RBAC',
  'Reusable UI Platforms and Design Systems',
  'Technical Leadership and Cross-functional Collaboration'
]

export const WORK_CASE_STUDIES = [
  {
    slug: 'etrm-businesspro-frontend-foundations',
    title: 'ETRM and BusinessPro Frontend Foundations',
    domain: 'Energy technology',
    context: 'Flo Energy needed reliable frontend foundations across trading workflows, pricing, authentication, and market data visualization after repository and platform changes.',
    role: 'Delivered customer-facing frontend capabilities while strengthening architecture, test reliability, and team alignment through RFCs and guild sessions.',
    approach: [
      'Implemented Keycloak authentication and RBAC for enterprise access control.',
      'Resolved Playwright CI failures caused by authentication and GraphQL mocking challenges.',
      'Authored frontend architecture RFCs to clarify module boundaries and long-term maintainability.'
    ],
    impact: 'Improved frontend delivery confidence by restoring dependable E2E coverage and giving the team clearer architectural direction.',
    stack: ['React', 'TypeScript', 'GraphQL', 'Keycloak', 'Playwright']
  },
  {
    slug: 'react-modernization-enterprise-banking',
    title: 'React Modernization for Enterprise Banking',
    domain: 'Banking and wealth management',
    context: 'A critical wealth-management workflow needed to move from legacy Appway screens to a modern React frontend without losing business capability.',
    role: 'Helped establish the frontend project foundation and delivered reusable UI patterns for data-heavy enterprise workflows.',
    approach: [
      'Migrated critical workflow screens while maintaining feature parity.',
      'Built reusable table, filter, global search, sorting, pagination, and Formik-integrated form components.',
      'Applied TDD and code review practices across frontend delivery.'
    ],
    impact: 'Reduced repeated UI work and improved maintainability for future banking application development.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'Formik']
  },
  {
    slug: 'reusable-widget-framework-banking-platforms',
    title: 'Reusable Widget Framework for Banking Platforms',
    domain: 'Enterprise banking',
    context: 'Multiple banking teams needed reusable customer-management widgets that could work across products while consuming different data sources.',
    role: 'Led frontend widget design and implementation across the UI team for shared Angular and micro-frontend capabilities.',
    approach: [
      'Designed reusable widgets that integrated multiple data sources behind a consistent user experience.',
      'Built a configurable drag-and-drop form builder for dynamic business forms.',
      'Worked with product leads to identify reusable platform-level components.'
    ],
    impact: 'Enabled shared frontend capabilities across enterprise banking platforms and reduced duplicated component implementation.',
    stack: ['Angular', 'AngularJS', 'Micro-frontends', 'TDD']
  },
  {
    slug: 'commerce-frontend-performance-seo',
    title: 'Commerce Frontend Performance and SEO',
    domain: 'B2B and retail e-commerce',
    context: 'Commerce platforms needed responsive storefront delivery, SAP Commerce CMS integration, better rendering performance, and stronger SEO support.',
    role: 'Led and contributed to frontend delivery across B2B and retail e-commerce implementations with backend, QA, and design teams.',
    approach: [
      'Customized Angular Spartacus storefronts on SAP Commerce Hybris.',
      'Implemented SSR and State Transfer to improve application performance and SEO.',
      'Improved frontend performance through asynchronous CMS content rendering.'
    ],
    impact: 'Improved page rendering behavior and helped teams deliver scalable commerce experiences across responsive web surfaces.',
    stack: ['Angular', 'Spartacus', 'SAP Commerce', 'SSR', 'State Transfer']
  }
]

export const CASE_STUDY_DETAILS = [
  {
    slug: 'etrm-businesspro-frontend-foundations',
    title: 'ETRM and BusinessPro Frontend Foundations',
    eyebrow: 'Energy technology',
    summary: 'Strengthened frontend foundations across trading, pricing, authentication, and market-data workflows while improving automated test reliability.',
    context: 'Flo Energy platforms required dependable frontend delivery across customer-facing workflows where authentication, GraphQL data, and CI stability directly affected release confidence.',
    role: 'Senior Software Engineer responsible for product delivery, frontend architecture RFCs, authentication implementation, and test reliability improvements.',
    sections: [
      {
        title: 'Problem',
        points: [
          'Repository migration disrupted reliable Playwright end-to-end coverage.',
          'Authentication and authorization flows needed to support enterprise access patterns.',
          'Frontend module boundaries needed clearer direction as the codebase scaled.'
        ]
      },
      {
        title: 'Approach',
        points: [
          'Implemented Keycloak authentication and RBAC in frontend workflows.',
          'Resolved authentication and GraphQL mocking issues that blocked Playwright reliability in CI.',
          'Authored RFCs to make frontend boundaries, ownership, and maintainability more explicit.'
        ]
      },
      {
        title: 'Impact',
        points: [
          'Restored confidence in CI E2E testing for critical user flows.',
          'Improved frontend architectural consistency across product work.',
          'Shared testing and architecture practices through RFCs and internal guild sessions.'
        ]
      }
    ],
    stack: ['React', 'TypeScript', 'GraphQL', 'Keycloak', 'Playwright', 'CI/CD']
  },
  {
    slug: 'react-modernization-enterprise-banking',
    title: 'React Modernization for Enterprise Banking',
    eyebrow: 'Banking and wealth management',
    summary: 'Modernized legacy banking workflows into React while creating reusable UI foundations for enterprise data-heavy screens.',
    context: 'A critical wealth-management workflow needed to migrate from legacy Appway screens to a React frontend while preserving feature parity and reducing future delivery cost.',
    role: 'Senior Software Engineer contributing to project setup, reusable UI architecture, form foundations, and quality practices.',
    sections: [
      {
        title: 'Problem',
        points: [
          'Legacy workflows were difficult to extend and maintain.',
          'Data-heavy screens needed consistent tables, filtering, sorting, pagination, and form patterns.',
          'The team needed a maintainable frontend foundation for future banking workflows.'
        ]
      },
      {
        title: 'Approach',
        points: [
          'Established React, TypeScript, MUI, Redux Toolkit, RTK Query, Formik, and TDD foundations.',
          'Built reusable table and form components for common enterprise workflow needs.',
          'Reviewed code and mentored junior developers with a focus on testability and maintainability.'
        ]
      },
      {
        title: 'Impact',
        points: [
          'Reduced duplicated UI implementation across repeated workflow patterns.',
          'Improved maintainability for future feature development.',
          'Delivered critical application flows while maintaining feature parity with legacy screens.'
        ]
      }
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'MUI', 'Formik', 'TDD']
  },
  {
    slug: 'reusable-widget-framework-banking-platforms',
    title: 'Reusable Widget Framework for Banking Platforms',
    eyebrow: 'Enterprise banking',
    summary: 'Designed shared Angular and micro-frontend widgets for customer-management workflows used across enterprise banking platforms.',
    context: 'Multiple banking teams needed reusable customer-management capabilities that could be embedded across products while integrating with different data sources and business workflows.',
    role: 'Senior Developer leading frontend widget design and implementation across the UI team, including reusable components, form-building capabilities, and cross-team technical alignment.',
    sections: [
      {
        title: 'Problem',
        points: [
          'Teams were solving similar customer-management UI problems separately across banking platforms.',
          'Widgets needed to consume data from different sources while preserving a consistent user experience.',
          'Business users needed more flexibility to configure dynamic forms without repeated engineering work.'
        ]
      },
      {
        title: 'Approach',
        points: [
          'Designed a reusable widget framework based on Angular and micro-frontend architecture.',
          'Built shared widgets for customer-management workflows with configurable data integration points.',
          'Developed a drag-and-drop form builder so dynamic forms could be assembled with less custom UI code.'
        ]
      },
      {
        title: 'Impact',
        points: [
          'Reduced duplicated frontend implementation across teams with shared widget patterns.',
          'Improved consistency for customer-management experiences across enterprise banking applications.',
          'Helped product and engineering teams move faster on repeated workflow and form requirements.'
        ]
      }
    ],
    stack: ['Angular', 'AngularJS', 'Micro-frontends', 'Reusable widgets', 'Dynamic forms', 'TDD']
  },
  {
    slug: 'commerce-frontend-performance-seo',
    title: 'Commerce Frontend Performance and SEO',
    eyebrow: 'B2B and retail e-commerce',
    summary: 'Improved commerce storefront delivery through Angular Spartacus customization, SAP Commerce integration, SSR, State Transfer, and asynchronous rendering.',
    context: 'Commerce teams needed responsive storefronts that integrated with SAP Commerce CMS while improving rendering behavior, SEO readiness, and delivery predictability across product requirements.',
    role: 'Senior frontend engineer leading and contributing to Angular commerce delivery with design, backend, QA, and project stakeholders.',
    sections: [
      {
        title: 'Problem',
        points: [
          'Commerce pages depended on CMS-driven content and needed stronger rendering behavior for users and search engines.',
          'Storefront work required coordination across frontend, backend, QA, design, and project delivery timelines.',
          'Responsive and cross-browser behavior had to remain dependable across customer-facing web surfaces.'
        ]
      },
      {
        title: 'Approach',
        points: [
          'Customized Angular Spartacus storefronts on SAP Commerce Hybris for B2B commerce workflows.',
          'Implemented server-side rendering and State Transfer to improve first render behavior and SEO support.',
          'Improved content rendering with asynchronous CMS loading patterns and responsive frontend implementation.'
        ]
      },
      {
        title: 'Impact',
        points: [
          'Improved storefront rendering behavior for CMS-driven commerce pages.',
          'Strengthened SEO readiness through SSR and State Transfer implementation.',
          'Supported predictable delivery by coordinating frontend implementation across design, backend, QA, and project stakeholders.'
        ]
      }
    ],
    stack: ['Angular', 'Spartacus', 'SAP Commerce', 'SSR', 'State Transfer', 'Responsive web']
  }
]
