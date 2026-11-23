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
  // index → case: grow the floating preview (desktop) or the row thumbnail (phones)
  const row = (e.sourceElement as HTMLElement | undefined)?.closest?.('[data-morph="peek"]') as HTMLElement | null;
  if (row && to.pathname.startsWith('/work/')) {
    const peek = document.querySelector<HTMLElement>('[data-peek-el].is-on');
    const thumb = row.querySelector<HTMLElement>('.row-thumb');
    tag(peek ?? (thumb && thumb.offsetParent ? thumb : null));
    return;
  }
  // case → home (back button or "All projects"): name the hero so it shrinks back into its card
  if (from.pathname.startsWith('/work/') && (to.pathname === '/' || to.pathname === '/work')) tag(document.querySelector<HTMLElement>('[data-work-hero]'));
});

document.addEventListener('astro:after-swap', () => {
  const path = location.pathname;
  if (path.startsWith('/work/') && (prevPath === '/' || prevPath === '/work')) {
    tag(document.querySelector<HTMLElement>('[data-work-hero]'));
  } else if (path === '/' && prevPath.startsWith('/work/')) {
    tag(document.querySelector<HTMLElement>(`a.card-hit[href="${prevPath}"] .frame`));
  } else if (path === '/work' && prevPath.startsWith('/work/')) {
    // back to the index: shrink into the row's thumbnail where one is showing (grid view, phones)
    const t = document.querySelector<HTMLElement>(`.row[data-slug="${prevPath.slice(6)}"] .row-thumb`);
    if (t && getComputedStyle(t).display !== 'none') tag(t);
  }
});

document.addEventListener('astro:page-load', () => {
  prevPath = location.pathname;
  // clear once the morph is done so the next navigation starts clean
  setTimeout(() => untagAll(), 1200);
});
