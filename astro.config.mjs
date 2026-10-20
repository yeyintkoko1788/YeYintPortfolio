import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL and BASE_PATH let the same build deploy to a root domain (Netlify, Vercel,
// Cloudflare Pages) or to GitHub Pages under /YeYintPortfolio.
const site = process.env.SITE_URL ?? "https://yeyintkoko1788.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "auto" },
});
