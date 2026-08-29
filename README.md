# Lab Notes

Public lab notebook. Homelab study, shared.

**Live:** https://lab-notes-8k8.pages.dev/

Not a news site. Not a hardware-shopping blog. Notes from studying frontier AI (Silicon Valley **and** China) plus a light scoreboard: Gemini / Claude / ChatGPT / Grok.

## What’s here

| Path | What |
|------|------|
| `src/content/posts/` | Published notes (markdown). This is the product. |
| `src/pages/` | Site chrome (index, about). |
| `.github/workflows/` | Build → GitHub Pages + Cloudflare Pages on `main`. |

Private refinery (`content-hub`) is **not** in this repo. Only human-approved exports get imported.

## Local

```bash
npm install
npm run dev
npm run build
```

## Publish a note

1. Review a refinery/line export.
2. `bash scripts/import-from-hub.sh <slug> [path.md]`
3. Edit the markdown until it reads like a note, not a pipeline log.
4. Commit to `main` → Cloudflare deploys.
