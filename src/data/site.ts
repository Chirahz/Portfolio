// Site-wide settings. Edit these before going live.
export const site = {
  name: 'CJ — UX',
  title: 'CJ — Senior UX designer & researcher, Nairobi',
  description:
    'Senior UX designer and researcher with 8+ years advancing financial inclusion through digital financial products.',
  // TODO: replace with the address you want messages to reach.
  email: 'hello@example.com',
  // Optional: a form endpoint (Formspree, Basin, etc). When empty, the contact
  // form falls back to opening the visitor's email app with the message filled in.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  linkedin: 'https://www.linkedin.com/in/chira-joseph/',
  // Put your CV in /public (e.g. public/cj-cv.pdf) and set this to '/cj-cv.pdf'.
  // While empty, the Experience page offers "Ask for my CV" (opens the contact sheet).
  cv: '',
  city: 'Nairobi',
  timezone: 'Africa/Nairobi',
};

export const nav = [
  { href: '/#work', label: 'Work', match: '/work' },
  { href: '/experience', label: 'Experience', match: '/experience' },
  { href: '#contact', label: 'Contact', contact: true },
];
