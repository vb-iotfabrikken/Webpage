// @ts-check
import { fileURLToPath } from 'node:url';
import { readdir, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://iot-fabrikken.com';

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { isHiddenPath, isLivePath, LAUNCH_LIVE_ONLY } from './src/data/launch';
import { getLangFromPath, isIndexedLocale } from './src/data/lang';

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
    '/en/about/d-maerket/': '/en/about/d-label/',

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
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    sitemap({
      // English-first launch: only indexed locales (currently just `en`) and
      // pages on the soft-launch allowlist belong in the sitemap. Untranslated
      // locales still serve English via the i18n fallback, so they are kept
      // out until their translations ship (see INDEXED_LOCALES in lang.ts).
      // Re-add the `i18n` alternates block here once more locales are indexed.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const excludedSegments = ['/thank-you', '/thanks', '/404', '/draft', '/preview'];
        if (excludedSegments.some((seg) => pathname.includes(seg))) return false;
        if (!isIndexedLocale(getLangFromPath(pathname))) return false;
        return isLivePath(pathname);
      },
    }),
    pruneHiddenPages(),
  ]
});
