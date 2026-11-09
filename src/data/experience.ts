// Everything on the Experience page. Replace anything in [brackets] with your own words.

export const roles = [
  {
    dates: 'Jun 2024 – now',
    title: 'Assistant Manager, UI/UX',
    org: 'KCB Bank Group',
    summary: 'Leading design across KCB Mobile, internet banking and partner platforms such as KCB × PayPal, Buni and Safiri.',
    link: { label: 'See KCB × PayPal', href: '/work/kcb-paypal' },
  },
  {
    dates: '[20XX – 2024]',
    title: '[Your role]',
    org: 'Vodacom · M-Pesa Africa',
    summary: '[One line on what you designed for M-Pesa and who it served.]',
    link: { label: 'See [related case]', href: '/#work' },
  },
  {
    dates: '[20XX – 20XX]',
    title: '[Your role]',
    org: 'Twiga Foods',
    summary: '[One line on the product and the people it served.]',
    link: { label: 'See [related case]', href: '/#work' },
  },
  {
    dates: '[20XX – 20XX]',
    title: 'UX consultant',
    org: 'AgNexus Africa',
    summary: '[One line on the engagement and the outcome.]',
  },
  {
    dates: '[20XX]',
    title: 'Design apprentice',
    org: 'Fuenfwerken Design AG (5w.design), Berlin',
    summary: '[What you learned in Berlin and still use.]',
  },
] as { dates: string; title: string; org: string; summary: string; link?: { label: string; href: string } }[];

export const practice = [
  {
    title: 'Research',
    body: 'Finding out what people need before anything gets built.',
    methods: 'Field research · usability testing · synthesis',
  },
  {
    title: 'UX strategy',
    body: 'Turning findings into journeys, structure and priorities a team can act on.',
    methods: 'Journey maps · IA · service design',
  },
  {
    title: 'Design leadership',
    body: '[How you lead: reviews, mentoring, working with product and engineering.]',
    methods: '[Team rituals · design reviews · stakeholder work]',
  },
];

export const why =
  'I design for people the financial system tends to leave out: first-time account holders, small traders and commuters who still pay in cash.';

export const credentials = [
  { name: 'PRINCE2 Agile', from: 'AXELOS · [year]' },
  { name: 'ALX AI', from: 'ALX · [year]' },
  { name: 'Human-Centred Design (HCD)', from: '[Issuer] · [year]' },
  { name: 'BSc Computer Technology', from: '[University] · [year]' },
];
