// Everything on the Experience page. Replace anything in [brackets] with your own words —
// bracketed text shows in pencil grey on the site so it's easy to spot what's unfinished.

// Your photo for the top of the page (portrait, ideally you at work — a workshop, field
// research, a whiteboard). Drop it in src/assets/ and import it here, e.g.:
//   import me from '../assets/me.jpg';
//   export const photo: ImageMetadata | null = me;
// While this is null the page shows a marked placeholder instead of a stand-in photo.
export const photo: ImageMetadata | null = null;

export const why =
  'I design for people the financial system tends to leave out: first-time account holders, small traders and commuters who still pay in cash.';

// Three things a hiring manager should remember. Only use figures you can stand behind.
export const highlights = [
  { value: '8+ years', label: 'designing digital financial products in Kenya, from mobile money to banking apps' },
  { value: '[add result]', label: '[e.g. customers onboarded through a journey you redesigned]' },
  { value: '[add result]', label: '[e.g. a partner launch you led, such as KCB × PayPal]' },
];

export type Role = {
  dates: string;
  title: string;
  org: string;
  points: string[];          // 2–3 short lines: what you led, for whom, what changed
  tags?: string[];           // products / areas
  link?: { label: string; href: string };
};

export const roles: Role[] = [
  {
    dates: 'Jun 2024 – now',
    title: 'Assistant Manager, UI/UX',
    org: 'KCB Bank Group',
    points: [
      'Leading design across KCB Mobile and internet banking, from account opening to everyday payments.',
      'Partner and platform work: KCB × PayPal, the Buni developer portal, Safiri fare collection and MNO float management.',
      '[What changed because of your work — one line, with a figure if you have one.]',
    ],
    tags: ['Mobile banking', 'Payments', 'Developer platforms', 'Operations tools'],
    link: { label: 'See KCB × PayPal', href: '/work/kcb-paypal' },
  },
  {
    dates: '[20XX – 2024]',
    title: '[Your role]',
    org: 'Vodacom · M-Pesa Africa',
    points: [
      '[What you designed for M-Pesa and who it served.]',
      '[What changed — adoption, task success, support load…]',
    ],
    tags: ['Mobile money'],
    link: { label: 'See [related case]', href: '/#work' },
  },
  {
    dates: '[20XX – 20XX]',
    title: '[Your role]',
    org: 'Twiga Foods',
    points: [
      '[The product and the people it served — e.g. vendors ordering stock on credit.]',
      '[What changed.]',
    ],
    tags: ['[B2B commerce]'],
    link: { label: 'See [related case]', href: '/#work' },
  },
  {
    dates: '[20XX – 20XX]',
    title: 'UX consultant',
    org: 'AgNexus Africa',
    points: ['[The engagement and the outcome.]'],
  },
  {
    dates: '[20XX]',
    title: 'Design apprentice',
    org: 'Fuenfwerken Design AG (5w.design), Berlin',
    points: ['[What you learned in Berlin and still use.]'],
  },
];

export const practice = [
  {
    title: 'Research & insight',
    body: 'Finding out what people actually need, in the field and in the numbers, before anything gets built.',
    methods: 'Field research · usability testing · synthesis',
  },
  {
    title: 'Product & service strategy',
    body: 'Turning findings into journeys, structure and priorities that product, risk and engineering can act on.',
    methods: 'Journey maps · service design · roadmapping',
  },
  {
    title: 'Leading teams & stakeholders',
    body: '[How you lead: reviews, mentoring, aligning business, compliance and partners.]',
    methods: '[Design reviews · stakeholder workshops · partner launches]',
  },
];

export const domains = [
  'Mobile money',
  'Mobile & internet banking',
  'Cross-border payments',
  'Transport fare collection',
  'Developer platforms & APIs',
  'Agent & float operations',
];

export const credentials = [
  { name: 'PRINCE2 Agile', from: 'AXELOS · [year]' },
  { name: 'ALX AI', from: 'ALX · [year]' },
  { name: 'Human-Centred Design (HCD)', from: '[Issuer] · [year]' },
  { name: 'BSc Computer Technology', from: '[University] · [year]' },
];
