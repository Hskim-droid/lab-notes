import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hskim-droid.github.io',
  base: '/lab-notes',
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
