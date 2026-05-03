// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iot-fabrikken.com',

  // The site is English-only today but the IA is prefixed with /en/ so that
  // future locales (/da/, /sv/, /de/) can be added without URL churn. The root
  // path (`/`) is redirected to `/en/` by two mechanisms: (1) Astro's build-time
  // `redirects` manifest (emitted as 301s on hosts that honour it — Netlify,
  // Vercel, Cloudflare) and (2) a `<meta http-equiv="refresh">` plus a
  // client-side `window.location.replace()` in `src/pages/index.astro` as a
  // fallback for pure static hosts.

  redirects: {
    '/': '/en/',

    // Danish legacy slugs mapped to the anglicised English slugs so older
    // documents or inbound links still resolve. When the /da/ tree ships these
    // will be replaced by proper /da/... routes that use the Danish slugs
    // natively.
    '/en/case-studies/norddjurs-kommune/': '/en/case-studies/norddjurs-municipality/',
    '/en/case-studies/varde-kommune/': '/en/case-studies/varde-municipality/',
    '/en/case-studies/gribskov-kommune/': '/en/case-studies/gribskov-municipality/',
    '/en/about/d-maerket/': '/en/about/d-label/',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});
