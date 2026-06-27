# Developer Portfolio

A one-page developer portfolio, built as plain HTML/CSS/JS — no build step, no framework, deploys anywhere static files are welcome.

**Design concept:** the whole page is framed as a code editor. The hero is a "bio.ts" file, projects are styled like GitHub repo cards, experience reads like a `git log`, testimonials are "passing tests", and a status bar at the bottom (like an IDE) shows your availability, current section, and the time.

Everything in here is **placeholder content** — that's expected. Swap it for your real info using the guide below.

---

## 1. Preview it locally

No build step needed. Either:

- Just double-click `index.html`, or
- Run a tiny local server (recommended, avoids occasional browser quirks with local files):
  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## 2. File structure

```
.
├── index.html        all page content + structure
├── css/style.css      all styling (colors/fonts are CSS variables at the top)
├── js/script.js       typewriter effect, scrollspy, clock, mobile nav, contact form
├── assets/favicon.svg
└── README.md
```

## 3. What to personalize

Every spot that needs your info is marked with an `<!-- EDIT: ... -->` comment in `index.html`. Search for `EDIT` in your editor, or work through this list:

| Section | What to change |
|---|---|
| Nav | `resume.pdf` link → your real résumé file or link |
| Hero | The `bio.ts` block: name, role, focus areas, location, status |
| Hero | Headline + intro paragraph |
| About | Bio text, the 3 meta rows, the 4 stat numbers |
| Stack | Swap any tools/languages you don't use |
| Projects | 4 repo cards — name, description, tags, language dot, live/code links |
| Experience | 3 commit entries — role, company, description, dates |
| Testimonials | 3 quotes — real client/colleague quotes if you have them, otherwise delete the section |
| Contact | Email, GitHub, LinkedIn, Twitter links |
| Footer | Your name |

**Tip:** if you don't have 4 projects or 3 testimonials yet, just delete the extra `<article class="repo-card">` or `<figure class="test-card">` blocks — the grids reflow automatically.

### Contact form

Right now the form opens the visitor's email client with a pre-filled message (see `js/script.js`, the bottom section) — it works immediately with zero setup, no backend required.

If you'd rather receive submissions directly without the email-client redirect, the easiest free option is [Formspree](https://formspree.io):
1. Create a free Formspree form, get your endpoint URL.
2. In `index.html`, change the `<form id="contactForm">` tag to add `action="https://formspree.io/f/YOUR_ID" method="POST"`.
3. In `js/script.js`, delete the `contactForm.addEventListener('submit', ...)` block so the form submits normally instead of triggering mailto.

## 4. Deploy it

### Option A — GitHub Pages (free, simplest)
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
Then in your GitHub repo: **Settings → Pages → Source: Deploy from branch → main / (root)**. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a minute or two.

> If you want it at the root of `https://YOUR_USERNAME.github.io` (no `/YOUR_REPO/` path), name the repo exactly `YOUR_USERNAME.github.io`.

### Option B — Netlify / Vercel (also free, slightly faster custom domains)
Drag-and-drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo on [vercel.com/new](https://vercel.com/new) — no build command needed, just set the output to the project root.

## 5. Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via the `<link>` tags in `index.html` — free to use, no attribution required.
- Respects `prefers-reduced-motion` (disables the typing effect for visitors who've asked for less motion).
- Mobile nav collapses below 760px; all grids reflow down to one column below ~980px.
- This is an original build inspired by the *brief* of a sleek, project-focused portfolio — not a copy of any purchased template's code or assets.

---

Send over your real info (name, bio, projects, experience, links, headshot if you want one) whenever you're ready, and it can all be dropped in.
