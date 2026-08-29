import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lab-notes-8k8.pages.dev',
  base: '/',
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
