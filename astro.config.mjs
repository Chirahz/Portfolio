import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cj-portfolio.vercel.app',
  trailingSlash: 'never',
  // fetch a case page's HTML while its card is hovered, so the click feels instant
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { format: 'directory' },
});
