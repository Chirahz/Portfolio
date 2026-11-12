// Page lifecycle for client-side navigation (Astro <ClientRouter />).
// Bundled scripts run once, so anything page-specific registers here instead:
// `fn` runs on every page load and gets an AbortSignal that fires just before
// the next page swaps in — pass it to window/document listeners so nothing leaks.
export function onPage(fn: (signal: AbortSignal) => void | (() => void)) {
  document.addEventListener('astro:page-load', () => {
    const ctrl = new AbortController();
    const cleanup = fn(ctrl.signal);
    document.addEventListener(
      'astro:before-swap',
      () => { ctrl.abort(); if (typeof cleanup === 'function') cleanup(); },
      { once: true },
    );
  });
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
