// @ts-check
import { fileURLToPath } from 'node:url';
import { mkdir, readdir, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://iot-fabrikken.com';

// Stamped into every sitemap entry as <lastmod>. The whole site is statically
// rebuilt on deploy, so build time is the honest modification date.
const BUILD_TIMESTAMP = new Date().toISOString();

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { ANALYTICS_WAVE_LIVE, isHiddenPath, isLivePath, LAUNCH_LIVE_ONLY } from './src/data/launch';
import { getSiteRedirectMap } from './src/data/redirects';
import { getLangFromPath, isPageIndexed, canonicalizePath, routePath } from './src/data/lang';

const isAstroDev = process.argv.includes('dev');

/**
 * In dev, case-study pages live under `src/pages/[lang]/case-studies/` but
 * `langPath("case-studies")` emits `/de/referenzen/` and `/sv/projekt/`.
 * Production relocates built HTML to those localized paths; dev does not.
 */
function devCaseStudyRewrites() {
  return {
    name: 'dev-case-study-rewrites',
    apply: 'serve',
    configureServer(/** @type {import('vite').ViteDevServer} */ server) {
      server.middlewares.use((req, _res, next) => {
        if (!req.url) return next();
        const [pathname, search = ''] = req.url.split('?');
        const suffix = search ? `?${search}` : '';
        if (pathname === '/de/referenzen' || pathname.startsWith('/de/referenzen/')) {
          req.url = pathname.replace(/^\/de\/referenzen/, '/de/case-studies') + suffix;
        } else if (pathname === '/sv/projekt' || pathname.startsWith('/sv/projekt/')) {
          req.url = pathname.replace(/^\/sv\/projekt/, '/sv/case-studies') + suffix;
        }
        next();
      });
    },
  };
}

/**
 * Translate an emitted locale URL path into its localized form via the route
 * registry. `/de/modules/indoor-climate/` -> `/de/module/raumklima/`. English
 * maps to itself, and paths already emitted with localized segments (dynamic
 * [slug] routes) round-trip unchanged, so this is safe to apply to every page.
 * @param {string} pathname
 * @returns {string}
 */
function localizeUrlPath(pathname) {
  const match = pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);
  if (!match) return pathname;
  const lang = /** @type {import('./src/data/lang').Lang} */ (match[1]);
  const rest = (match[2] ?? '/').replace(/^\/+/, '').replace(/\/+$/, '');
  const canonical = canonicalizePath(rest, lang);
  return routePath(canonical, lang);
}

/**
 * Translate an emitted locale URL path into its canonical English-segment form.
 * `/de/module/raumklima/` -> `/de/modules/indoor-climate/`. Used to write a
 * redirect stub at the old English-segment path for dynamic [slug] pages, which
 * emit their localized segment directly (so the relocation pass never sees the
 * English path). English maps to itself.
 * @param {string} pathname
 * @returns {string}
 */
function canonicalizeUrlPath(pathname) {
  const match = pathname.match(/^\/(en|da|de|sv)(\/.*)?$/);
  if (!match) return pathname;
  const lang = /** @type {import('./src/data/lang').Lang} */ (match[1]);
  const rest = (match[2] ?? '/').replace(/^\/+/, '').replace(/\/+$/, '');
  const canonical = canonicalizePath(rest, lang);
  const trimmed = canonical.replace(/^\/+/, '').replace(/\/+$/, '');
  return `/${lang}${trimmed ? `/${trimmed}` : ''}/`.replace(/\/{2,}/g, '/');
}

/** True when a file already exists at the given absolute path. */
async function fileExists(/** @type {string} */ full) {
  try {
    await readFile(full);
    return true;
  } catch {
    return false;
  }
}

/** Minimal client-side redirect stub written at a page's former English path. */
function redirectStubHtml(/** @type {string} */ target) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <meta http-equiv="refresh" content="0;url=${target}" />
    <link rel="canonical" href="${SITE_URL}${target}" />
    <meta name="robots" content="noindex,follow" />
  </head>
  <body>
    <p>This page has moved to <a href="${target}">${target}</a>.</p>
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </body>
</html>
`;
}

/**
 * Relocate fixed-filename pages (hub index.astro, dedicated module landings,
 * etc.) from their emitted English-segment path to the localized path dictated
 * by the route registry, and leave a redirect stub at the old path. Dynamic
 * [slug] pages already emit localized segments, so they round-trip unchanged.
 * The emitted HTML already carries the localized canonical/hreflang/links, so
 * moving the file is safe. Also rewrites sitemap <loc> entries to match.
 *
 * Runs after @astrojs/sitemap (whose URLs are built from Astro's English-segment
 * route list) and before pruneHiddenPages.
 */
function localizeFixedPages() {
  return {
    name: 'localize-fixed-pages',
    hooks: {
      'astro:build:done': async (/** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger }) => {
        const outDir = fileURLToPath(dir);

        /** @type {string[]} */
        const indexFiles = [];
        async function collect(/** @type {string} */ currentDir) {
          for (const entry of await readdir(currentDir, { withFileTypes: true })) {
            const full = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              await collect(full);
              continue;
            }
            if (entry.name === 'index.html') indexFiles.push(full);
          }
        }
        await collect(outDir);

        let moved = 0;
        let stubbed = 0;
        for (const full of indexFiles) {
          const rel = path.relative(outDir, full).split(path.sep).join('/');
          const urlPath = `/${rel.replace(/index\.html$/, '')}`;
          const localized = localizeUrlPath(urlPath);

          if (localized !== urlPath) {
            // Fixed-name page emitted at the English-segment path: relocate the
            // real page to its localized path and leave a stub at the old path.
            const newRel = `${localized.replace(/^\/+/, '')}index.html`;
            const newFull = path.join(outDir, ...newRel.split('/'));
            const html = await readFile(full, 'utf8');
            await mkdir(path.dirname(newFull), { recursive: true });
            await writeFile(newFull, html);
            await rm(full, { force: true });
            await writeFile(full, redirectStubHtml(localized));
            moved += 1;
            continue;
          }

          // Dynamic [slug] page already emitted at its localized path: leave a
          // stub at the canonical English-segment path (which Astro never
          // emits for da/de/sv) so old English-segment URLs still resolve in
          // one hop. Skip when nothing differs (English locale, untranslated
          // segments) or a real page already occupies the English path.
          const canonical = canonicalizeUrlPath(urlPath);
          if (canonical === urlPath) continue;
          const stubRel = `${canonical.replace(/^\/+/, '')}index.html`;
          const stubFull = path.join(outDir, ...stubRel.split('/'));
          if (await fileExists(stubFull)) continue;
          await mkdir(path.dirname(stubFull), { recursive: true });
          await writeFile(stubFull, redirectStubHtml(urlPath));
          stubbed += 1;
        }
        if (moved > 0 || stubbed > 0) {
          logger.info(
            `Localized URLs: relocated ${moved} fixed page(s) and wrote ${moved + stubbed} redirect stub(s).`,
          );
        }

        // Rewrite every absolute site URL in the sitemap to its localized path.
        // @astrojs/sitemap builds both <loc> entries and its i18n
        // <xhtml:link rel="alternate" hreflang="…" href="…"> alternates from
        // Astro's English-segment route list, so both must be localized to stay
        // consistent with the relocated pages and the HTML hreflang tags.
        const sitemapFile = path.join(outDir, 'sitemap-0.xml');
        try {
          const xml = await readFile(sitemapFile, 'utf8');
          let rewritten = 0;
          const originRe = new RegExp(
            `${SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(/[^"<\\s]*)`,
            'g',
          );
          const cleaned = xml.replace(originRe, (whole, pathname) => {
            const localized = localizeUrlPath(pathname);
            if (localized !== pathname) {
              rewritten += 1;
              return `${SITE_URL}${localized}`;
            }
            return whole;
          });

          // Mirror the HTML <head>: every <url> that carries locale alternates
          // also gets an x-default alternate pointing at the English URL.
          // @astrojs/sitemap only emits the configured locale codes, so the
          // x-default entry is injected here after localization. When the
          // alternate group has no English member (dynamic localized slugs
          // group without their English equivalent), the English URL is
          // derived from the route registry instead.
          let injected = 0;
          const withDefaults = cleaned.replace(/<url>.*?<\/url>/gs, (block) => {
            if (block.includes('hreflang="x-default"')) return block;
            if (!block.includes('<xhtml:link')) return block;
            let enHref = block.match(
              /<xhtml:link\b(?=[^>]*hreflang="en")[^>]*\bhref="([^"]*)"[^>]*\/?>/,
            )?.[1];
            if (!enHref) {
              const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
              const match = loc ? new URL(loc).pathname.match(/^\/(en|da|de|sv)(\/.*)?$/) : null;
              if (!match) return block;
              const lang = /** @type {import('./src/data/lang').Lang} */ (match[1]);
              const rest = (match[2] ?? '/').replace(/^\/+/, '').replace(/\/+$/, '');
              enHref = `${SITE_URL}${routePath(canonicalizePath(rest, lang), 'en')}`;
            }
            injected += 1;
            return block.replace(
              '</url>',
              `<xhtml:link rel="alternate" hreflang="x-default" href="${enHref}"/></url>`,
            );
          });
          if (rewritten > 0 || injected > 0) {
            await writeFile(sitemapFile, withDefaults);
            logger.info(
              `Localized URLs: rewrote ${rewritten} sitemap URL(s) and injected ${injected} x-default alternate(s).`,
            );
          }
        } catch {
          // No sitemap emitted — nothing to do.
        }
      },
    },
  };
}

// Second-wave gate: when ANALYTICS_WAVE_LIVE is false, strip internal dashboard
// and cookie policy HTML from dist even if getStaticPaths was bypassed or
// LAUNCH_LIVE_ONLY is false (defense in depth for Railway and local builds).
function isAnalyticsWaveOutputPath(/** @type {string} */ relPath) {
  const normalized = relPath.split(path.sep).join('/');
  if (normalized.includes('/internal/')) return true;
  if (normalized.includes('/legal/cookies')) return true;
  return false;
}

function pruneAnalyticsWavePages() {
  return {
    name: 'prune-analytics-wave-pages',
    hooks: {
      'astro:build:done': async (/** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger }) => {
        if (ANALYTICS_WAVE_LIVE) {
          logger.info('Analytics wave live — keeping internal and cookie policy pages.');
          return;
        }

        const outDir = fileURLToPath(dir);
        let removed = 0;

        async function walk(/** @type {string} */ currentDir) {
          for (const entry of await readdir(currentDir, { withFileTypes: true })) {
            const full = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              await walk(full);
              continue;
            }
            if (!entry.name.endsWith('.html')) continue;
            const rel = path.relative(outDir, full);
            if (isAnalyticsWaveOutputPath(rel)) {
              await rm(full, { force: true });
              removed += 1;
            }
          }
        }

        await walk(outDir);
        if (removed > 0) await removeEmptyDirs(outDir);
        logger.info(`Analytics wave gate: pruned ${removed} second-wave page(s) from the build output.`);
      },
    },
  };
}

// Soft-launch gate: after the build completes, delete every page that is not
// on the live allowlist (src/data/launch.ts) so only the approved pages ship
// to Railway. Hidden routes still build (keeping fallbacks/links resolvable at
// dev time) but are pruned from the static output here. Independently of the
// gate, the sitemap is always reconciled against emitted noindex pages so it
// never advertises a non-indexable URL (even in local/full builds).
function pruneHiddenPages() {
  return {
    name: 'prune-hidden-pages',
    hooks: {
      'astro:build:done': async (/** @type {{ dir: URL, logger: { info: (msg: string) => void } }} */ { dir, logger }) => {
        const outDir = fileURLToPath(dir);
        let removed = 0;
        // Canonical URLs of pages that carry a `noindex` robots tag
        // (untranslated locales + thin "content on the way" placeholders).
        // These must be dropped from the sitemap so it never advertises a
        // non-indexable URL.
        const noindexLocs = new Set();

        // Walk the emitted HTML (including redirect stubs, which are not in the
        // build-done `pages` list); delete anything not on the allowlist when
        // the gate is on, and collect noindex URLs either way.
        async function walk(/** @type {string} */ currentDir) {
          for (const entry of await readdir(currentDir, { withFileTypes: true })) {
            const full = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              await walk(full);
              continue;
            }
            if (!entry.name.endsWith('.html')) continue;
            const rel = path.relative(outDir, full).split(path.sep).join('/');
            if (LAUNCH_LIVE_ONLY && isHiddenPath(`/${rel}`)) {
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
        if (LAUNCH_LIVE_ONLY) {
          await removeEmptyDirs(outDir);
          logger.info(`Soft-launch gate: pruned ${removed} hidden page(s) from the build output.`);
        } else {
          logger.info('Soft-launch gate disabled (LAUNCH_LIVE_ONLY = false) — shipping all pages.');
        }

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

  // All path renames: src/data/redirects.ts (library/blog, cases, sensors, events, …).
  redirects: getSiteRedirectMap(),

  vite: {
    plugins: [tailwindcss(), ...(isAstroDev ? [devCaseStudyRewrites()] : [])],
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
        const excludedSegments = ['/thank-you', '/thanks', '/404', '/draft', '/preview', '/internal/'];
        if (excludedSegments.some((seg) => pathname.includes(seg))) return false;
        if (!isPageIndexed(pathname, getLangFromPath(pathname))) return false;
        return isLivePath(pathname);
      },
      serialize: (item) => {
        item.lastmod = BUILD_TIMESTAMP;
        return item;
      },
    }),
    localizeFixedPages(),
    pruneAnalyticsWavePages(),
    pruneHiddenPages(),
  ]
});
