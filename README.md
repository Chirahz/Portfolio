# CJ — portfolio

Astro static site. Notebook direction: cream ruled paper, Fraunces + Caveat.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live
- `src/data/site.ts` — email, LinkedIn, optional form endpoint
- `src/data/projects.ts` — the six projects on the landing (title, tags, photo, `live` flag)
- `src/content/cases/*.md` — case studies (frontmatter only; one file per case)
- `src/assets/work/` — project photos
- `src/styles/global.css` — tokens (light + dark), ruled paper, motion curves

## Adding a case study
1. Copy `src/content/cases/kcb-paypal.md` to `<slug>.md` and fill it in.
2. In `src/data/projects.ts`, set `live: true` on the matching project.

## Contact form
Set `PUBLIC_FORM_ENDPOINT` (e.g. a Formspree URL) in Vercel → Settings → Environment Variables.
Without it, the form opens the visitor's email app with the message filled in.

## Deploy
Import the GitHub repo in Vercel. It detects Astro automatically — no settings needed.
