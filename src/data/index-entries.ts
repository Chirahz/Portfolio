// Everything on the Index page (/work). The six projects from the home page come in
// automatically; `notes` rows are smaller pieces that won't get a full case study.
// Replace anything in [brackets] with your own words — it shows in grey until you do.
import { projects } from './projects';

export type Area = 'Payments' | 'Banking' | 'Mobile money' | 'Transport' | 'Platforms' | 'Research';
export const areas: Area[] = ['Payments', 'Banking', 'Mobile money', 'Transport', 'Platforms', 'Research'];

export type Status = 'case' | 'progress' | 'notes';

export interface Entry {
  slug: string;
  title: string;
  client: string;
  area: Area;
  role: string;
  year: string;
  line: string;
  status: Status;
  image?: ImageMetadata;
  alt?: string;
  /** shown when a row without a case study is opened */
  notes?: string[];
}

const areaOf: Record<string, Area> = {
  'kcb-paypal': 'Payments',
  safiri: 'Transport',
  'buni-developer-portal': 'Platforms',
  'kcb-mobile-onboarding': 'Banking',
  'internet-banking-study': 'Research',
  'mno-float-management': 'Mobile money',
};

const fromProjects: Entry[] = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  client: 'KCB Bank Group',
  area: areaOf[p.slug] ?? 'Banking',
  role: p.role,
  year: p.year,
  line: p.line,
  status: p.live ? 'case' : 'progress',
  image: p.image,
  alt: p.alt,
  notes: p.live ? undefined : ['[What you did on this project, in one line.]', '[What changed because of it.]'],
}));

const notesRows: Entry[] = [
  {
    slug: 'jedco-bank-to-wallet',
    title: 'JEDCO bank-to-wallet',
    client: 'KCB South Sudan',
    area: 'Payments',
    role: '[Your role]',
    year: '[2025]',
    line: 'Sending money from a bank account straight to a mobile wallet, for customers in South Sudan.',
    status: 'notes',
    notes: ['[What you designed — e.g. the “Send to wallet” journey.]', '[What changed, or what you learned.]'],
  },
  {
    slug: 'enterprise-statements',
    title: 'Enterprise statements portal',
    client: 'KCB Bank Group',
    area: 'Banking',
    role: '[Your role]',
    year: '[2025]',
    line: 'One place for business customers to get their account statements, whichever channel they use.',
    status: 'notes',
    notes: ['[What you designed.]', '[What changed, or what you learned.]'],
  },
  {
    slug: 'transaction-reports',
    title: 'Transaction reports',
    client: '[Client]',
    area: 'Banking',
    role: '[Your role]',
    year: '[2025]',
    line: 'A mobile journey for small businesses to pull, filter and share their transaction reports.',
    status: 'notes',
    notes: ['[What you designed.]', '[What changed, or what you learned.]'],
  },
];

// Case studies first, then newest first by year (placeholder years keep their order).
const rank: Record<Status, number> = { case: 0, progress: 1, notes: 2 };
const yearNum = (y: string) => Number(y.replace(/\D/g, '').slice(0, 4)) || 0;
export const entries: Entry[] = [...fromProjects, ...notesRows]
  .map((e, i) => ({ e, i }))
  .sort((a, b) => rank[a.e.status] - rank[b.e.status] || yearNum(b.e.year) - yearNum(a.e.year) || a.i - b.i)
  .map(({ e }) => e);
