import { ExperienceItem, ProjectItem, SkillCategory, OpportunityTemplate } from '../types.ts';

export const RESUME_INFO = {
  name: 'Kathir Venkatachalam',
  title: 'Full-Stack & Senior Frontend Engineer',
  email: 'kathirmw54@gmail.com',
  phone: '+91 9626019429',
  location: 'Tamil Nadu, India',
  languages: [
    { language: 'English', proficiency: 'Fluent' },
    { language: 'Tamil', proficiency: 'Native' }
  ],
  education: {
    degree: 'Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE)',
    institution: 'Sri Krishna College of Engineering and Technology, Coimbatore',
    graduated: '2019'
  },
  resumePdfUrl: `${import.meta.env.BASE_URL}assets/aistudio/Kathir_Venkatachalam_-_Resume_1e5b1a39.pdf`,
  summary:
    'Full-Stack & Senior Frontend Engineer with over 8 years of production experience building high-scale enterprise SaaS products, combining 7 years of deep frontend specialization (JavaScript, Ember.js, modern web architecture) with robust backend systems engineering (Java, MySQL). Proven impact across flagship enterprise solutions including Zoho ERP, Zoho Books, and Zoho Inventory, specializing in client-side state architecture, web performance tuning, REST API design, and database optimization for international enterprise clients.',
  metrics: [
    { label: 'Production Experience', value: '8+ Years', detail: 'Enterprise SaaS scale' },
    { label: 'Flagship Products', value: '3 Major Suites', detail: 'Zoho ERP, Books & Inventory' },
    { label: 'Global Active Reach', value: 'Millions', detail: 'Daily business workflows' },
    { label: 'UI Latency Target', value: '<100ms', detail: 'Optimized rendering & payloads' }
  ],
  socialLinks: {
    email: 'kathirmw54@gmail.com',
    phone: '+91 9626019429',
    linkedin: 'https://www.linkedin.com/in/kathir-venkatachalam',
    twitter: 'https://x.com'
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'zoho-fullstack-2025',
    role: 'Full-Stack / Backend Engineer',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: 'August 2025 – Present',
    startDate: 'Aug 2025',
    endDate: 'Present',
    isCurrent: true,
    summary:
      'Architecting and scaling full-stack capabilities across Zoho ERP and the Zoho Finance Suite (Zoho Books, Zoho Inventory), uniting modern web interfaces with resilient Java backend services.',
    highlights: [
      'Build and scale full-stack capabilities across Zoho ERP and the Zoho Finance Suite (Zoho Books, Zoho Inventory), connecting modern web frontends to resilient Java services.',
      'Designed and implemented automated spam mitigation and fraud detection mechanisms at the onboarding stage, cutting dummy organization creation without introducing UI friction for legitimate users.',
      'Partnered directly with UI engineers to design clean, contract-first REST endpoints that optimized payload size and reduced client-side rendering latency.',
      'Mitigated database lock contention using fine-grained row-level locking strategies and optimized MySQL transactional write paths for high-frequency operations.'
    ],
    technologies: ['Java', 'MySQL', 'RESTful APIs', 'Anti-Abuse Systems', 'Rate Limiting', 'Contract-First REST', 'Microservices']
  },
  {
    id: 'zoho-senior-frontend-2019',
    role: 'Senior Frontend Engineer',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: 'May 2019 – August 2025',
    startDate: 'May 2019',
    endDate: 'Aug 2025',
    isCurrent: false,
    summary:
      'Led frontend architecture and UI modules for Zoho flagship enterprise finance applications, serving millions of active global businesses with sub-100ms transactional responsiveness.',
    highlights: [
      'Owned and delivered end-user interface modules for Zoho ERP, Zoho Inventory, and Zoho Books, serving millions of active global businesses.',
      'Architected large-scale Single Page Applications using Ember.js, establishing reusable design patterns, robust state machines, and clean data-flow architectures.',
      'Engineered high-frequency transactional UIs including multi-currency payables and bulk item replenishment with virtualized lists and DOM recycling.',
      'Bridged product management, accounting compliance, and UX design to transform intricate enterprise workflows into intuitive, performant user interfaces.',
      'Established modular UI component library standards with strict accessibility (WCAG AA), responsive styling, and automated regression testing.'
    ],
    technologies: ['JavaScript (ES6+)', 'Ember.js', 'SPA State Architecture', 'DOM Optimization', 'HTML5 / SCSS', 'Responsive Web Apps', 'Webpack', 'CI/CD']
  },
  {
    id: 'zoho-frontend-intern-2018',
    role: 'Frontend Developer Intern',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: 'August 2018 – April 2019',
    startDate: 'Aug 2018',
    endDate: 'Apr 2019',
    isCurrent: false,
    summary:
      'Engineered client-side form validation, cross-browser UI components, and unit test suites across core finance application user journeys.',
    highlights: [
      'Implemented modular UI components, cross-browser styling, and client-side form validation mechanisms for finance application workflows.',
      'Collaborated with senior engineers on bug fixing, accessibility standards, and unit test coverage across key customer-facing flows.',
      'Enhanced responsive layouts for cross-device compatibility across desktop and mobile tablet screens.'
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Form Validation', 'Cross-Browser Testing', 'Git']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'anti-abuse-shield',
    title: 'Self-Serve Onboarding & Anti-Abuse Shield',
    role: 'Full-Stack Engineer',
    category: 'Full-Stack',
    company: 'Zoho Corporation',
    period: '2025 – Present',
    shortDescription:
      'Seamless enterprise onboarding paired with real-time heuristic validation to block bot-driven tenant proliferation across the Zoho ecosystem.',
    challenge:
      'Rapid influx of automated bot registrations was flooding database storage with dummy organizations, draining compute resources and skewing customer acquisition metrics, all while genuine enterprise users required zero onboarding friction.',
    solution:
      'Architected a multi-layered verification barrier integrating client-side pre-validation heuristics, non-intrusive behavioral telemetry, and backend rate-limiting tokens powered by high-throughput Java services and MySQL indexing.',
    architectureDetails: [
      'Client-side behavioral heuristics measuring organic interaction patterns without CAPTCHA friction.',
      'Sliding-window token bucket rate-limiting algorithms deployed at the API gateway layer.',
      'Asynchronous scoring pipeline that quarantines suspicious tenants while instantly provisioning legitimate business accounts.',
      'Contract-first REST endpoints reducing initial payload overhead by 40%.'
    ],
    impactMetrics: [
      'Drastically reduced dummy and bot-driven organization creation',
      'Zero drop in legitimate enterprise signup conversion rates',
      'Protected critical cloud database write quotas and background provisioning pipelines'
    ],
    technologies: ['Java', 'MySQL', 'RESTful APIs', 'Rate Limiting', 'Behavioral Telemetry', 'Security']
  },
  {
    id: 'multi-currency-payables',
    title: 'High-Frequency Multi-Currency Transaction Engine & Payables UI',
    role: 'Senior Frontend Engineer',
    category: 'Frontend',
    company: 'Zoho Books / Zoho ERP',
    period: '2022 – 2025',
    shortDescription:
      'Sub-100ms financial transaction interface supporting international multi-currency conversions, complex tax ledgers, and keyboard-driven data entry.',
    challenge:
      'International accounting teams enter hundreds of invoice line items consecutively. Traditional DOM updates triggered layout thrashing and input lag when calculating exchange rates, tax percentages, and discount distributions.',
    solution:
      'Designed an Ember.js transactional state machine with optimistic updates, local memoized currency lookup tables, and virtualized DOM tables that keep input lag below 16ms per keystroke.',
    architectureDetails: [
      'Deterministic client-side state machine isolating calculated lines from presentation rendering.',
      'Custom virtualized table scrolling thousands of line items without memory leaks.',
      'Double-entry validation rules running client-side with instant visual error hints.',
      'Automated sync with background Java exchange rate synchronization microservice.'
    ],
    impactMetrics: [
      'Sub-100ms response time on ledger line computations',
      'Handled high-volume monthly reconciliation for multi-national corporate accounts',
      '99.9% keyboard accessibility allowing accountants to navigate entirely without a mouse'
    ],
    technologies: ['JavaScript (ES6+)', 'Ember.js', 'State Machines', 'Virtual Scrolling', 'DOM Optimization', 'SCSS']
  },
  {
    id: 'bulk-item-replenishment',
    title: 'Bulk Item Inventory Replenishment & Stock Matrix',
    role: 'Senior Frontend Engineer',
    category: 'Architecture',
    company: 'Zoho Inventory',
    period: '2020 – 2022',
    shortDescription:
      'Enterprise inventory restocking workstation supporting massive multi-warehouse SKU matrices with bulk editing, automated reorder points, and offline resilience.',
    challenge:
      'Enterprise warehouse managers needed to restock tens of thousands of variant products across distributed warehouses simultaneously without browser tab crashes or payload timeouts.',
    solution:
      'Engineered chunked data-flow architecture with client-side diffing, lazy-loaded variant sub-trees, and batched REST mutations synchronized with backend MySQL row-level locking.',
    architectureDetails: [
      'Hierarchical tree-state data model handling parent-variant relationships across warehouses.',
      'Batched atomic dispatch mechanism sending optimized JSON diffs instead of full entity states.',
      'Debounced calculation engine for real-time freight and tax projections.',
      'Graceful error recovery with individual row rollbacks instead of complete submission failure.'
    ],
    impactMetrics: [
      'Enabled real-time batch operations on 10,000+ SKUs in a single session',
      'Reduced network payload sizes by 65% via delta-based transmission',
      'Adopted across thousands of warehouse distribution centers worldwide'
    ],
    technologies: ['JavaScript', 'Ember.js', 'State Architecture', 'REST Payloads', 'MySQL Row-Level Locking', 'Performance']
  },
  {
    id: 'enterprise-design-system',
    title: 'Enterprise Design System & Shared State Lifecycle',
    role: 'Senior Frontend Engineer',
    category: 'Performance',
    company: 'Zoho Finance Suite',
    period: '2019 – 2023',
    shortDescription:
      'Unified component architecture and state management standards governing 3 flagship applications, ensuring strict WCAG accessibility and UI consistency.',
    challenge:
      'Multiple independent teams working on Zoho Books, Zoho Inventory, and Zoho ERP were duplicating UI components and introducing inconsistent UX, accessibility gaps, and diverging state models.',
    solution:
      'Created a shared core library of Ember.js components with strict type contracts, keyboard trap prevention, WCAG AA compliance, and high-performance render benchmarks.',
    architectureDetails: [
      'Headless logic hooks separating accounting validation rules from visual themes.',
      'Strict accessibility compliance: ARIA live regions, focus management, and high-contrast support.',
      'Centralized automated CI/CD component regression tests and visual diffing.',
      'Contract-first endpoint mock server for rapid parallel frontend-backend delivery.'
    ],
    impactMetrics: [
      'Cut frontend feature delivery cycles by 35% across 3 major product teams',
      'Achieved 100% WCAG AA compliance across all critical payment and invoicing flows',
      'Standardized enterprise UI patterns across hundreds of views'
    ],
    technologies: ['Component-Driven Architecture', 'JavaScript', 'Accessibility (WCAG AA)', 'CI/CD', 'Webpack', 'Postman']
  }
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    description: '7+ years mastering high-scale single page applications, state lifecycles, and rendering performance.',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Expert', experienceYears: '8+ yrs', focus: 'Modern syntax, async patterns, event loops, DOM performance' },
      { name: 'Ember.js', level: 'Expert', experienceYears: '7+ yrs', focus: 'Enterprise SPA architecture, services, router lifecycles, Ember Data' },
      { name: 'Component-Driven Architecture', level: 'Expert', experienceYears: '7+ yrs', focus: 'Design systems, reusable contracts, atomic components' },
      { name: 'State Management & State Machines', level: 'Expert', experienceYears: '6+ yrs', focus: 'Deterministic state transitions, optimistic updates, cache layers' },
      { name: 'DOM Optimization & Performance', level: 'Expert', experienceYears: '7+ yrs', focus: 'Virtualization, layout thrashing prevention, <100ms render targets' },
      { name: 'HTML5, CSS3 & SCSS', level: 'Expert', experienceYears: '8+ yrs', focus: 'Responsive web apps, flex/grid layouts, tokenized styling' },
      { name: 'Modern Frameworks (React / TS)', level: 'Proficient', experienceYears: '3+ yrs', focus: 'Modern component paradigms, hooks, TypeScript type safety' }
    ]
  },
  {
    category: 'Backend & Systems Engineering',
    description: 'Architecting resilient Java services, secure gateway controls, and clean API contracts.',
    skills: [
      { name: 'Java', level: 'Advanced', experienceYears: '3+ yrs', focus: 'Backend services, multi-threading, concurrency, business logic' },
      { name: 'RESTful API Design', level: 'Expert', experienceYears: '6+ yrs', focus: 'Contract-first endpoints, JSON payloads, pagination, caching' },
      { name: 'Anti-Abuse & Rate Limiting', level: 'Advanced', experienceYears: '2+ yrs', focus: 'Token buckets, heuristic validation, tenant protection, security' },
      { name: 'Payload & Latency Tuning', level: 'Advanced', experienceYears: '4+ yrs', focus: 'Delta updates, compression, client-server contract optimization' }
    ]
  },
  {
    category: 'Databases & Data Management',
    description: 'High-volume relational data storage, transactions, and concurrency handling.',
    skills: [
      { name: 'MySQL', level: 'Advanced', experienceYears: '4+ yrs', focus: 'Schema design, indexes, transactional integrity, foreign keys' },
      { name: 'Query Optimization', level: 'Advanced', experienceYears: '4+ yrs', focus: 'EXPLAIN analysis, index tuning, avoiding full table scans' },
      { name: 'Row-Level Locking', level: 'Advanced', experienceYears: '3+ yrs', focus: 'Concurrency control, deadlock prevention in high-frequency writes' }
    ]
  },
  {
    category: 'Tooling, Testing & Practices',
    description: 'Production-grade engineering workflows from local dev to continuous deployment.',
    skills: [
      { name: 'Git & Version Control', level: 'Expert', experienceYears: '8+ yrs', focus: 'Branching models, merge conflict resolution, code reviews' },
      { name: 'Webpack & Bundlers', level: 'Advanced', experienceYears: '6+ yrs', focus: 'Asset pipelines, code splitting, tree shaking, bundle size reduction' },
      { name: 'Postman & API Testing', level: 'Expert', experienceYears: '6+ yrs', focus: 'API contract verification, collection automation, integration mocks' },
      { name: 'CI/CD Pipelines', level: 'Advanced', experienceYears: '5+ yrs', focus: 'Automated test runners, build verifications, zero-downtime releases' },
      { name: 'End-to-End Delivery', level: 'Expert', experienceYears: '8+ yrs', focus: 'Ownership from PRD to production monitoring and maintenance' }
    ]
  }
];

export const OPPORTUNITY_TEMPLATES: OpportunityTemplate[] = [
  {
    id: 'fullstack-role',
    title: 'Full-Stack / Lead Role',
    roleLabel: 'Full-Stack Engineer',
    subject: 'Opportunity: Full-Stack / Senior Engineer Role at [Company Name]',
    body: `Hi Kathir,

I came across your portfolio and was impressed by your 8+ years of experience scaling enterprise SaaS products at Zoho, specifically your work connecting modern web frontends with robust Java services and anti-abuse systems.

We have an open position for a Full-Stack / Lead Engineer at [Company Name] and would love to explore whether this aligns with your career goals.

Key highlights of the role:
- Team: [Team / Division]
- Primary Stack: [Tech Stack, e.g., TypeScript / Java / React]
- Location: [Remote / Hybrid / On-site]
- Scope: [Brief description of the challenge/product]

Would you be open for a quick 15-20 minute introductory call this week?

Best regards,
[Your Name]
[Your Role / Company]
[Phone / LinkedIn]`
  },
  {
    id: 'senior-frontend',
    title: 'Senior Frontend Engineer Role',
    roleLabel: 'Senior Frontend Engineer',
    subject: 'Opportunity: Senior Frontend Engineer at [Company Name]',
    body: `Hi Kathir,

I reviewed your portfolio and track record architecting large-scale Single Page Applications for Zoho ERP and Books. Your depth in client-side state architecture, performance tuning (<100ms render targets), and component systems is a great match for what we are building.

We are currently looking for a Senior Frontend Engineer to lead [Product/Feature Area] at [Company Name].

Could we connect for a brief introductory conversation? Please let me know your availability for the coming days.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Role / Company]`
  },
  {
    id: 'architecture-consulting',
    title: 'Architecture & Performance Consulting',
    roleLabel: 'Consulting / Advisory',
    subject: 'Consulting Inquiry: Web Architecture & Performance Optimization',
    body: `Hi Kathir,

We are looking for an experienced technical consultant to advise on:
- [ ] SPA State Architecture & DOM Performance Tuning
- [ ] REST API Contract Optimization & Latency Reduction
- [ ] Enterprise Anti-Abuse & Rate-Limiting Design

We noticed your extensive experience across Zoho flagship products and would like to discuss an advisory engagement.

Please let us know if you are open to consulting projects and when would be convenient for a preliminary scoping discussion.

Best regards,
[Your Name]
[Company / Organization]`
  },
  {
    id: 'general-inquiry',
    title: 'General Opportunity / Tech Chat',
    roleLabel: 'General Connect',
    subject: 'Connecting regarding opportunities for Kathir Venkatachalam',
    body: `Hi Kathir,

I came across your portfolio and resume and wanted to reach out regarding exciting technical opportunities we have that could be a strong match for your skills.

I'd love to learn more about what you are looking for in your next role and share what we are working on.

Best,
[Your Name]
[Company / Title]`
  }
];
