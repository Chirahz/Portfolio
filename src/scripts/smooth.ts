// Inertial smooth scrolling (Lenis), re-created on every page.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { onPage, reducedMotion } from './page';

declare global { interface Window { lenis?: Lenis } }

onPage(() => {
  if (reducedMotion()) return;
  const lenis = new Lenis({
    lerp: 0.085,            // heavier glide than the default 0.1
    wheelMultiplier: 0.9,
    smoothWheel: true,
    syncTouch: false,       // phones keep their native scroll
  });
  window.lenis = lenis;
  let id = 0;
  const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
  id = requestAnimationFrame(raf);

  // in-page anchors (e.g. "Work" → /#work) glide instead of jumping
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null;
    if (!a || a.pathname !== location.pathname) return;
    const target = a.hash && document.querySelector(a.hash);
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target as HTMLElement, { offset: -24, duration: 1.2 });
  };
  document.addEventListener('click', onClick);

  return () => {
    cancelAnimationFrame(id);
    document.removeEventListener('click', onClick);
    lenis.destroy();
    window.lenis = undefined;
  };
});
