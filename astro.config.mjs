// @ts-check
import { fileURLToPath } from 'node:url';
import { readdir, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://iot-fabrikken.com';

import { defineConfig } from 'astro/config';

import { articles as articleCatalog } from './src/data/library/catalog';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { isHiddenPath, isLivePath, LAUNCH_LIVE_ONLY } from './src/data/launch';
import { getLangFromPath, isPageIndexed } from './src/data/lang';

// Soft-launch gate: after the build completes, delete every page that is not
// on the live allowlist (src/data/launch.ts) so only the approved pages ship
// to Railway. Hidden routes still build (keeping fallbacks/links resolvable at
// dev time) but are pruned from the static output here.
function pruneHiddenPages() {
  return {
    name: 'prune-hidden-pages',
    hooks: {
      'astro:build:done': async (/** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger }) => {
        if (!LAUNCH_LIVE_ONLY) {
          logger.info('Soft-launch gate disabled (LAUNCH_LIVE_ONLY = false) — shipping all pages.');
          return;
        }

        const outDir = fileURLToPath(dir);
        let removed = 0;
        // Canonical URLs of pages that survive pruning but carry a `noindex`
        // robots tag (untranslated locales + thin "content on the way"
        // placeholders). These must be dropped from the sitemap so it never
        // advertises a non-indexable URL.
        const noindexLocs = new Set();

        // Walk the emitted HTML (including redirect stubs, which are not in the
        // build-done `pages` list) and delete anything not on the allowlist.
        async function walk(/** @type {string} */ currentDir) {
          for (const entry of await readdir(currentDir, { withFileTypes: true })) {
            const full = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              await walk(full);
              continue;
            }
            if (!entry.name.endsWith('.html')) continue;
            const rel = path.relative(outDir, full).split(path.sep).join('/');
            if (isHiddenPath(`/${rel}`)) {
              await rm(full, { force: true });
              removed += 1;
              continue;
            }
            const html = await readFile(full, 'utf8');
            if (/<meta\s+name="robots"\s+content="noindex/i.test(html)) {
              const loc = `${SITE_URL}/${rel.replace(/index\.html$/, '')}`;
              noindexLocs.add(loc);
            }
          }
        }

        await walk(outDir);
        await removeEmptyDirs(outDir);
        logger.info(`Soft-launch gate: pruned ${removed} hidden page(s) from the build output.`);

        // Reconcile the sitemap: @astrojs/sitemap runs before this hook, so its
        // file already exists. Strip any <url> whose <loc> is noindex.
        const sitemapFile = path.join(outDir, 'sitemap-0.xml');
        try {
          const xml = await readFile(sitemapFile, 'utf8');
          let dropped = 0;
          const cleaned = xml.replace(/<url>.*?<\/url>/gs, (block) => {
            const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
            if (loc && noindexLocs.has(loc)) {
              dropped += 1;
              return '';
            }
            return block;
          });
          if (dropped > 0) {
            await writeFile(sitemapFile, cleaned);
            logger.info(`Soft-launch gate: removed ${dropped} noindex URL(s) from the sitemap.`);
          }
        } catch {
          // No sitemap emitted (e.g. sitemap integration disabled) — nothing to do.
        }
      },
    },
  };
}

/** Recursively delete directories left empty after pruning. */
async function removeEmptyDirs(/** @type {string} */ dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    await removeEmptyDirs(full);
    if ((await readdir(full)).length === 0) await rmdir(full);
  }
}

const SITE_LOCALES = ['en', 'da', 'de', 'sv'];

// The article catalogue moved from /library/ to /articles/. Enumerate an
// explicit 301 for every old article URL (catalogue stubs + published MDX) so
// static hosts emit a real redirect stub for each — Astro does not reliably
// prerender redirect stubs for spread/dynamic patterns in `output: 'static'`.
const landingDir = fileURLToPath(new URL('./src/content/landingpages', import.meta.url));
const landingSlugs = readdirSync(landingDir)
  .filter((f) => /\.(md|mdx)$/.test(f))
  .map((f) => f.replace(/\.(md|mdx)$/, ''));
const articleSlugs = Array.from(
  new Set([...articleCatalog.map((a) => a.slug), ...landingSlugs]),
);

/** Legacy /library/ and /blog/ URLs → /articles/ for every locale prefix. */
const legacyArticlesRedirects = Object.fromEntries(
  SITE_LOCALES.flatMap((lang) => [
    [`/${lang}/library/`, `/${lang}/articles/`],
    [`/${lang}/library/tags/`, `/${lang}/articles/tags/`],
    ...articleSlugs.map((slug) => [`/${lang}/library/${slug}/`, `/${lang}/articles/${slug}/`]),
    [`/${lang}/blog/`, `/${lang}/articles/`],
    [`/${lang}/blog/welcome-to-the-iot-fabrikken-blog/`, `/${lang}/articles/`],
    [`/${lang}/blog/en-15757-in-practice/`, `/${lang}/articles/en-15757-in-practice/`],
    [`/${lang}/blog/rollout-in-varde-municipality/`, `/${lang}/articles/rollout-in-varde-municipality/`],
  ]),
);

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Path-prefixed locales (/en/, /da/, /de/, /sv/). English is the canonical
  // source. Until a translated page exists for a locale, requests fall back to
  // the English equivalent so no locale URL 404s while translation is in
  // progress. Real per-locale pages override the fallback automatically.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da', 'de', 'sv'],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'rewrite',
    },
    fallback: {
      da: 'en',
      de: 'en',
      sv: 'en',
    },
  },

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
    '/en/cases/': '/en/case-studies/',
    '/da/cases/': '/da/case-studies/',
    '/da/case-studies/varde-kommune-3/': '/da/case-studies/varde-kommune/',
    '/en/case-studies/norddjurs-kommune/': '/en/case-studies/norddjurs-municipality/',
    '/en/case-studies/varde-kommune/': '/en/case-studies/varde-municipality/',
    '/en/case-studies/gribskov-kommune/': '/en/case-studies/gribskov-municipality/',
    '/en/about/d-label/': '/en/about/trust-center/',
    '/en/about/d-maerket/': '/en/about/trust-center/',

    // Sensor catalogue slug changes and removed products
    '/en/sensors/gateway/': '/en/sensors/cloud-connector/',
    '/en/sensors/motion-pir/': '/en/sensors/motion/',
    '/en/sensors/push-button/': '/en/sensors/touch/',
    '/en/sensors/full/': '/en/sensors/',
    '/en/sensors/mini/': '/en/sensors/',
    '/en/sensors/full-plus-pir/': '/en/sensors/',
    '/en/sensors/series-a/': '/en/sensors/',
    '/en/sensors/series-b/': '/en/sensors/',
    '/en/sensors/series-c/': '/en/sensors/',
    '/en/shop/products/gateway/': '/en/shop/products/cloud-connector/',
    '/en/shop/products/motion-pir/': '/en/shop/products/motion/',
    '/en/shop/products/push-button/': '/en/shop/products/touch/',
    '/en/shop/products/full/': '/en/shop/products/',
    '/en/shop/products/mini/': '/en/shop/products/',
    '/en/shop/products/full-plus-pir/': '/en/shop/products/',
    '/en/shop/products/series-a/': '/en/shop/products/',
    '/en/shop/products/series-b/': '/en/shop/products/',
    '/en/shop/products/series-c/': '/en/shop/products/',

    // Sensor compare moved from /sensors/compare/ to /compare/
    '/en/sensors/compare/': '/en/compare/',
    '/da/sensors/compare/': '/da/compare/',
    '/de/sensors/compare/': '/de/compare/',
    '/sv/sensors/compare/': '/sv/compare/',

    // The Library was renamed to Articles (single canonical content catalogue).
    ...legacyArticlesRedirects,

    // Pricing plans and enterprise were merged into a single pricing page.
    '/en/pricing/plans/': '/en/pricing/',
    '/en/pricing/enterprise/': '/en/pricing/',
    '/da/pricing/plans/': '/da/pricing/',
    '/da/pricing/enterprise/': '/da/pricing/',
    '/de/pricing/plans/': '/de/pricing/',
    '/de/pricing/enterprise/': '/de/pricing/',
    '/sv/pricing/plans/': '/sv/pricing/',
    '/sv/pricing/enterprise/': '/sv/pricing/',

    // Locale-scoped event pages — detail exists in DE only; hub covers other locales.
    '/en/events/archivistica/': '/en/events/',
    '/da/events/archivistica/': '/da/events/',
    '/sv/events/archivistica/': '/sv/events/',

    // Locale-scoped event pages — detail exists in one locale only; hub covers others.
    '/en/events/worktech26-stockholm/': '/en/events/',
    '/da/events/worktech26-stockholm/': '/da/events/',
    '/de/events/worktech26-stockholm/': '/de/events/',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          da: 'da',
          de: 'de',
          sv: 'sv',
        },
      },
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const excludedSegments = ['/thank-you', '/thanks', '/404', '/draft', '/preview'];
        if (excludedSegments.some((seg) => pathname.includes(seg))) return false;
        if (!isPageIndexed(pathname, getLangFromPath(pathname))) return false;
        return isLivePath(pathname);
      },
    }),
    pruneHiddenPages(),
  ]
});
