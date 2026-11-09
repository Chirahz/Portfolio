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
  linkedin: 'https://www.linkedin.com/',
  city: 'Nairobi',
  timezone: 'Africa/Nairobi',
};

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '#contact', label: 'Contact', contact: true },
];
