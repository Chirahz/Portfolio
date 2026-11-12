// Shared-image transition between a work card and its case hero.
// Only the clicked card is named, so the other cards fade with the page
// instead of hanging around as orphan snapshots.
const NAME = 'work-hero';

const tag = (el: HTMLElement | null | undefined) => {
  if (!el) return;
  el.style.setProperty('view-transition-name', NAME);
  el.style.setProperty('view-transition-class', 'work-image');
};
const untagAll = (doc: Document = document) =>
  doc.querySelectorAll<HTMLElement>('[style*="view-transition-name"]').forEach((el) => {
    el.style.removeProperty('view-transition-name');
    el.style.removeProperty('view-transition-class');
  });

let prevPath = location.pathname;

document.addEventListener('astro:before-preparation', (e: any) => {
  const to: URL = e.to;
  const from: URL = e.from;
  untagAll();
  // home → case: name the clicked card's photo
  const card = (e.sourceElement as HTMLElement | undefined)?.closest?.('a.card-hit') as HTMLElement | null;
  if (card && to.pathname.startsWith('/work/')) { tag(card.querySelector<HTMLElement>('.frame')); return; }
  // case → home (back button or "All projects"): name the hero so it shrinks back into its card
  if (from.pathname.startsWith('/work/') && to.pathname === '/') tag(document.querySelector<HTMLElement>('[data-work-hero]'));
});

document.addEventListener('astro:after-swap', () => {
  const path = location.pathname;
  if (path.startsWith('/work/') && prevPath === '/') {
    tag(document.querySelector<HTMLElement>('[data-work-hero]'));
  } else if (path === '/' && prevPath.startsWith('/work/')) {
    tag(document.querySelector<HTMLElement>(`a.card-hit[href="${prevPath}"] .frame`));
  }
});

document.addEventListener('astro:page-load', () => {
  prevPath = location.pathname;
  // clear once the morph is done so the next navigation starts clean
  setTimeout(() => untagAll(), 1200);
});
