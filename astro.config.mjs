import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cj-portfolio.vercel.app',
  trailingSlash: 'never',
  build: { format: 'directory' },
});
