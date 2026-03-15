export const tickerRow1 = [
  'SaaS Platform · Delivered in 7 Days',
  'AI Tool · $0 → Live',
  'Investor Demo · Sprint-Built',
  '50+ Launches',
  'Day 1 to Day 7 · Nothing Wasted',
  'No Hiring Cycles · No Agency Bloat',
]

export const tickerRow2 = [
  'Real Code · Real Infrastructure',
  'Production-Ready MVPs',
  'No Equity Taken',
  'Non-Technical? We\'re Your Tech Co-Founder',
  'From Idea · To Product · In 7 Days',
  'YC · Techstars · IndieHackers',
]

export const problemCards = [
  { icon: 'Clock', stat: 12, suffix: ' wks', unit: 'avg hiring time', title: 'Slow Hiring', desc: 'Finding engineers costs $10,000+ in recruiters alone', accentColor: '#FFB800' },
  { icon: 'AlertTriangle', stat: 73, suffix: '%', unit: 'miss deadlines', title: 'Freelancer Risk', desc: 'Inconsistent quality, missed deadlines, poor communication', accentColor: '#FF3B3B' },
  { icon: 'DollarSign', stat: 150, suffix: 'K', unit: 'agency avg cost', title: 'Agency Overhead', desc: '3-6 month timelines at enterprise pricing for an MVP', accentColor: '#FF3B3B' },
  { icon: 'Users', stat: 67, suffix: '%', unit: 'lack tech skills', title: 'Co-founder Gap', desc: 'Non-technical founders can\'t move without technical help', accentColor: '#4A5578' },
  { icon: 'TrendingUp', stat: 89, suffix: '%', unit: 'of investors want', title: 'Investor Pressure', desc: 'Investors now require working prototypes — decks alone won\'t do', accentColor: '#FFB800' },
  { icon: 'Zap', stat: 6, suffix: ' mo', unit: 'avg time wasted', title: 'Momentum Loss', desc: 'Market moves, enthusiasm fades, capital evaporates', accentColor: '#4A5578' },
]

export const processSteps = [
  { day: 1, label: 'Discovery & Intake', output: 'Scope locked, team assigned', detail: 'Founder brief, goal alignment, scope lock, tech stack selection, team assignment' },
  { day: 2, label: 'Architecture & Design', output: 'Wireframes, DB schema, API contracts', detail: 'System architecture, UI/UX wireframes, database schema, API contracts defined' },
  { day: 3, label: 'Core Build Sprint I', output: 'Backend scaffolding, core logic', detail: 'Backend scaffolding, database setup, core logic implementation begins' },
  { day: 4, label: 'Core Build Sprint II', output: 'Frontend + API integration', detail: 'Frontend development, component build-out, integration of key APIs and services' },
  { day: 5, label: 'Integration & QA', output: 'Full system tested', detail: 'Full system integration, testing, bug fixes, performance review' },
  { day: 6, label: 'Content & Marketing', output: 'Copy, SEO, onboarding flow', detail: 'Copy, onboarding flow, landing page, basic SEO, social proof elements' },
  { day: 7, label: 'Deployment & Handoff', output: 'Live product + documentation', detail: 'Production deployment, domain setup, handoff documentation, client walkthrough' },
]

export const services = [
  { title: 'SaaS MVPs', examples: 'Subscription tools, B2B platforms, productivity apps, workflow software', wide: true },
  { title: 'AI-Powered Tools', examples: 'GPT wrappers, classification systems, document processors, AI agents', wide: false },
  { title: 'Internal Dashboards', examples: 'Operations dashboards, analytics views, admin panels, reporting tools', wide: false },
  { title: 'Automation Systems', examples: 'Zapier-alternative flows, webhook systems, scheduled jobs, data pipelines', wide: false },
  { title: 'Landing Pages & Waitlists', examples: 'Pre-launch pages, investor-facing sites, lead capture funnels', wide: false },
  { title: 'Investor Demo Prototypes', examples: 'Interactive demos, proof-of-concept builds, clickable feature showcases', wide: true },
]

export const pricing = [
  {
    name: 'Starter MVP', price: '$2,500', featured: false, label: null,
    features: [
      { name: 'Landing page + waitlist', value: true },
      { name: 'Basic SaaS scaffold', value: true },
      { name: 'Core features', value: '3' },
      { name: 'UI components', value: 'Standard' },
      { name: 'Team allocation', value: 'Shared' },
      { name: 'Post-launch support', value: '7 days' },
      { name: 'Deliverable', value: 'Codebase' },
    ],
  },
  {
    name: 'Advanced MVP', price: '$5,500', featured: true, label: 'MOST POPULAR',
    features: [
      { name: 'Full SaaS or dashboard', value: true },
      { name: 'Auth + database + APIs', value: true },
      { name: 'Core features', value: '8' },
      { name: 'UI/UX', value: 'Custom branded' },
      { name: 'Team allocation', value: 'Dedicated' },
      { name: 'Post-launch support', value: '14 days' },
      { name: 'Deliverable', value: 'Code + docs' },
    ],
  },
  {
    name: 'AI MVP', price: '$8,500', featured: false, label: 'MOST POWERFUL',
    features: [
      { name: 'AI-powered product', value: true },
      { name: 'LLM / API integrations', value: true },
      { name: 'Core features', value: 'Full set' },
      { name: 'UI/UX', value: 'Premium' },
      { name: 'Team allocation', value: 'AI engineer lead' },
      { name: 'Post-launch support', value: '30 days' },
      { name: 'Deliverable', value: 'Full handoff' },
    ],
  },
]

export const customers = [
  { title: 'Early-Stage Founders', tag: 'EARLY STAGE', need: 'MVP to validate concept or pitch investors — without burning runway' },
  { title: 'Solo & Indie Makers', tag: 'INDIE', need: 'Ship quickly without a full build team, test market response fast' },
  { title: 'Non-Technical Founders', tag: 'NON-TECH', need: 'Translate vision into working software, no engineering background needed' },
  { title: 'Agencies & Consultancies', tag: 'AGENCIES', need: 'White-label rapid build capacity without expanding headcount' },
  { title: 'Hackathon Teams', tag: 'HACKATHON', need: 'Turn a hackathon concept into a real product within days of the event' },
  { title: 'Accelerator Cohorts', tag: 'ACCELERATOR', need: 'Hit milestones fast — YC, Techstars, and local accelerators' },
]

export const marketStats = [
  { value: 3, prefix: '$', suffix: 'T+', label: 'Global startup ecosystem value', color: '#00FFE0' },
  { value: 5, prefix: '', suffix: 'M+', label: 'New tech startups launched per year', color: '#A8FF3E' },
  { value: 50, prefix: '$', suffix: 'B+', label: 'MVP development addressable market', color: '#FFB800' },
  { value: 10, prefix: '$', suffix: 'K', label: 'Max of underserved pricing band we own', color: '#00FFE0' },
  { value: 10000, prefix: '', suffix: '+', label: 'Accelerator programs globally', color: '#A8FF3E' },
  { value: 100000, prefix: '', suffix: '+', label: 'Founder clients created per year', color: '#FFB800' },
]

export const competitors = [
  { them: 'Freelancers: cheap but slow and unreliable', us: 'A coordinated team that operates like a seasoned startup' },
  { them: 'Agencies: professional but expensive and slow', us: 'Agency quality at a fraction of the cost and time' },
  { them: 'No-code tools: fast but limited in capability', us: 'Real code, real infrastructure, unlimited scalability' },
  { them: 'Technical co-founders: ideal but hard to find', us: 'Your technical co-founder for the sprint — without equity' },
  { them: 'Building in-house: full control but months away', us: '7 days to a working product your team can then own' },
]

export const teamDomains = [
  {
    number: '01',
    name: 'TECHNOLOGY TEAM',
    color: '#00FFE0',
    roles: [
      { title: 'Full-Stack Engineer', desc: 'End-to-end architecture, coordinates technical decisions' },
      { title: 'Backend Engineer', desc: 'APIs, databases, server infrastructure, performance' },
      { title: 'DevOps / Infra', desc: 'CI/CD pipelines, cloud deployment, monitoring' },
    ],
  },
  {
    number: '02',
    name: 'DESIGN TEAM',
    color: '#A8FF3E',
    roles: [
      { title: 'UI/UX Designer', desc: 'User flows, wireframes, interaction design, prototyping' },
      { title: 'Brand / Visual Designer', desc: 'Visual identity, component systems, design tokens' },
    ],
  },
  {
    number: '03',
    name: 'PRODUCT TEAM',
    color: '#FFB800',
    roles: [
      { title: 'Product Manager', desc: 'Scope definition, sprint planning, stakeholder alignment' },
      { title: 'QA Lead', desc: 'Testing strategy, bug triage, quality assurance' },
    ],
  },
  {
    number: '04',
    name: 'GROWTH TEAM',
    color: '#FF3B3B',
    roles: [
      { title: 'Growth Marketer', desc: 'Launch strategy, acquisition channels, analytics' },
      { title: 'Copywriter', desc: 'Product copy, landing pages, onboarding flows' },
    ],
  },
]

export const navLinks = [
  { label: 'How It Works', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Investors', href: '#investors' },
]
