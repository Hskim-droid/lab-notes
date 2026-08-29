import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lab-notes.pages.dev',
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
