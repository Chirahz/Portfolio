import p1 from '../assets/work/p1.jpg';
import p2 from '../assets/work/p2.jpg';
import p3 from '../assets/work/p3.jpg';
import p4 from '../assets/work/p4.jpg';
import p5 from '../assets/work/p5.jpg';
import p6 from '../assets/work/p6.jpg';

export type Platform = 'mobile' | 'web' | 'research';

export interface Project {
  slug: string;
  title: string;
  platform: Platform;
  field: string;
  image: ImageMetadata;
  alt: string;
  /** one line: the problem and who it's for — shown under the title */
  line: string;
  role: string;
  year: string;
  /** true when the case study page exists */
  live: boolean;
}

// Write each `line` in your own words; [bracketed] role and year show in grey until filled in.
export const projects: Project[] = [
  { slug: 'kcb-paypal', title: 'KCB × PayPal', platform: 'mobile', field: 'Payments', image: p1,
    alt: 'A woman in a café smiling at her phone, laptop and notebook on the table', line: 'Linking PayPal to KCB Mobile so customers can move their balances into a Kenyan bank account.', role: '[Lead UX designer]', year: '[2024]',
    live: true },
  { slug: 'safiri', title: 'Safiri', platform: 'mobile', field: 'Transport', image: p2,
    alt: 'An older woman paying a matatu conductor by card at a busy Nairobi stage', line: 'Cashless fare collection for Kenya’s matatus, for commuters and conductors.', role: '[Your role]', year: '[2025]',
    live: false },
  { slug: 'buni-developer-portal', title: 'Buni developer portal', platform: 'web', field: 'Developer platform', image: p3,
    alt: 'A developer working at two monitors in a bright, plant-filled office', line: 'Making KCB’s API developer portal easier to understand and build on.', role: '[Your role]', year: '[2025]',
    live: false },
  { slug: 'kcb-mobile-onboarding', title: 'KCB Mobile onboarding', platform: 'mobile', field: 'Onboarding', image: p4,
    alt: 'A man photographing his ID card with his phone at a wooden table', line: 'Opening a KCB account on your phone, then upgrading to Premium.', role: '[Your role]', year: '[2025]',
    live: false },
  { slug: 'internet-banking-study', title: 'Internet banking study', platform: 'research', field: 'Internet banking', image: p5,
    alt: 'Two researchers reviewing a dashboard on a laptop in front of a wall of sticky notes', line: 'A usability study for the KCB internet banking redesign.', role: '[Your role]', year: '[2026]',
    live: false },
  { slug: 'mno-float-management', title: 'MNO float management', platform: 'web', field: 'Operations', image: p6,
    alt: 'A mobile money agent checking float on her phone at her kiosk', line: 'An automated portal for managing float with mobile network operators.', role: '[Your role]', year: '[2025]',
    live: false },
];

export const platformLabel: Record<Platform, string> = {
  mobile: 'Mobile', web: 'Web', research: 'Research',
};

export const projectHref = (p: Project) => (p.live ? `/work/${p.slug}` : null);
