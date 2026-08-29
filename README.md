# Lab Notes

Public **lab notebook** (learn in public). Homelab study, shared.

Silicon Valley × China frontier AI — deep, real, readable — plus a light scoreboard (Gemini / Claude / ChatGPT / Grok). English is canonical.

## GitHub + Cloudflare

| Layer | Place | Job |
|-------|--------|-----|
| Source | **GitHub** `Hskim-droid/lab-notes` | markdown + Astro |
| Edge | **Cloudflare Pages** | build from `main` |
| Factory (private) | `content-hub` | refinery — not this repo |

SNS = teaser + link here. Do not dump private `content-hub/research`.

## Cloudflare Pages

Connect GitHub repo `lab-notes`. Build `npm run build`. Output `dist`. Node 20+. Then set `site` in `astro.config.mjs` to the real `*.pages.dev`.

## Publish (human gate)

```bash
bash /Users/claire/claude-workspace/lab-notes/scripts/import-from-hub.sh <slug>
cd /Users/claire/claude-workspace/lab-notes
npm run build
git add src/content/posts/
git commit -m "publish: <slug>"
```

## Dev

```bash
npm install
npm run dev
npm run build
```
