# Ye Yint Ko Ko, portfolio

A static portfolio site for a senior Android engineer. Astro 5, TypeScript, plain CSS, about 90 lines of
vanilla JavaScript. No client framework, no runtime dependencies in the browser. Boska (Fontshare) is
self-hosted.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check, then build to dist/
npm run preview    # serve dist/ locally
```

Node 22 or newer.

## Configure it

| What | Where |
| --- | --- |
| Email, LinkedIn, GitHub, location, time zone, site description | `src/data/site.ts` |
| Projects, skills, experience, education | `src/data/content.ts` |
| Page copy that is not data (intro, about) | `src/components/Intro.astro`, `About.astro` |
| Colours, type scale, spacing | the `:root` block in `src/styles/global.css` |
| Photographs | `public/img/` (credits are in `site.ts` and print in the footer) |
| Social image | `public/og.png`, 1200 by 630 |

The phone number on the CV is deliberately not published. The contact mechanism is a `mailto:` link with a
prefilled subject, so there is no form backend and no secret to protect.

## Deploy

**GitHub Pages (configured).** In the repository settings, set Pages to "GitHub Actions" and push to `main`.
`.github/workflows/deploy.yml` builds with `BASE_PATH=/YeYintPortfolio` and publishes `dist/`.

**Netlify, Vercel or Cloudflare Pages.** Build command `npm run build`, output directory `dist`, and set
`SITE_URL` to the final URL (for example `https://yeyint.dev`). Leave `BASE_PATH` unset.

**Custom domain on GitHub Pages.** Set `SITE_URL` to the domain, drop `BASE_PATH` from the workflow, and add
the domain in the repository's Pages settings.

`SITE_URL` feeds the canonical link, social tags, structured data and sitemap.

## Content rules

Everything on the page comes from the CV. Where the CV gives no number, none is shown: the only figure is
"more than 1M Google Play downloads" for Saya. Do not add metrics, screenshots or architecture details
that are not yours to publish. The diagrams in "Selected work" list components named in the CV and are not
wiring diagrams.

## Notes

- Interaction is progressive: with JavaScript off, every project is expanded and every diagram is shown.
- `prefers-reduced-motion` removes travel and fades; content stays.
- The background photographs are atmosphere from Unsplash (via Lorem Picsum), credited in the footer. They
  are not project screenshots. Replace them with your own photographs if you have them.
