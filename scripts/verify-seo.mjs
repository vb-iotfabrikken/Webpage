/**
 * Post-build SEO verification. Run after `astro build`:
 *
 *   npm run build && npm run verify:seo
 *
 * Static checks against dist/ (no live server needed):
 *   1. Every sitemap <loc> maps to an existing HTML file (static-site
 *      equivalent of "returns 200").
 *   2. Sitemap <url> entries carry <lastmod> and, when they have locale
 *      alternates, an hreflang="x-default" alternate.
 *   3. robots.txt is present, references the sitemap and contains no
 *      leftover blanket "Disallow: /".
 *   4. Every real page (redirect stubs excluded) has exactly one canonical
 *      tag with an absolute site URL.
 *   5. No unintended noindex: key pages must be indexable, no sitemap URL
 *      may be noindex, and a site-wide noindex regression fails the build.
 *
 * Exits non-zero on any failure.
 */

import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://iot-fabrikken.com';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.resolve(ROOT, process.argv[2] ?? 'dist');

/** Pages that must never be noindex (exact URL paths). */
const MUST_INDEX = ['/en/', '/da/', '/de/', '/sv/', '/en/modules/', '/en/sensors/'];

/**
 * Only Astro-emitted pages are checked for canonicals/noindex: locale trees,
 * the root redirect stub and 404.html. Other HTML in dist/ comes from static
 * assets in public/ and is reported as a warning.
 */
const PAGE_PATH = /^\/(en|da|de|sv)\//;

const failures = [];
const warnings = [];

function fail(msg) {
  failures.push(msg);
}

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function collectHtmlFiles(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await collectHtmlFiles(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

/** dist file path for a site-absolute URL. */
function distFileForUrl(loc) {
  const pathname = new URL(loc).pathname;
  const rel = pathname.endsWith('/')
    ? `${pathname}index.html`
    : /\.[a-z0-9]+$/i.test(pathname)
      ? pathname
      : `${pathname}/index.html`;
  return path.join(DIST, ...rel.replace(/^\/+/, '').split('/'));
}

// ---------------------------------------------------------------------------
// 1 + 2. Sitemap
// ---------------------------------------------------------------------------

async function checkSitemap() {
  const indexFile = path.join(DIST, 'sitemap-index.xml');
  if (!(await exists(indexFile))) {
    fail('sitemap-index.xml is missing from dist/.');
    return new Set();
  }

  const indexXml = await readFile(indexFile, 'utf8');
  const sitemapLocs = [...indexXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  if (sitemapLocs.length === 0) fail('sitemap-index.xml references no sitemap files.');

  const sitemapUrls = new Set();
  for (const smLoc of sitemapLocs) {
    const smFile = path.join(DIST, path.basename(new URL(smLoc).pathname));
    if (!(await exists(smFile))) {
      fail(`Sitemap file referenced by the index is missing: ${path.basename(smFile)}`);
      continue;
    }
    const xml = await readFile(smFile, 'utf8');
    const urlBlocks = xml.match(/<url>.*?<\/url>/gs) ?? [];
    if (urlBlocks.length === 0) fail(`${path.basename(smFile)} contains no <url> entries.`);

    for (const block of urlBlocks) {
      const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
      if (!loc) {
        fail(`A <url> entry in ${path.basename(smFile)} has no <loc>.`);
        continue;
      }
      sitemapUrls.add(loc);

      if (!loc.startsWith(SITE_URL)) fail(`Sitemap URL is not on ${SITE_URL}: ${loc}`);

      if (!(await exists(distFileForUrl(loc)))) {
        fail(`Sitemap URL has no matching file in dist/ (would 404): ${loc}`);
      }

      if (!block.includes('<lastmod>')) fail(`Sitemap entry missing <lastmod>: ${loc}`);

      const hasAlternates = block.includes('<xhtml:link');
      if (hasAlternates && !block.includes('hreflang="x-default"')) {
        fail(`Sitemap entry has locale alternates but no x-default: ${loc}`);
      }
    }
  }
  return sitemapUrls;
}

// ---------------------------------------------------------------------------
// 3. robots.txt
// ---------------------------------------------------------------------------

async function checkRobots() {
  const robotsFile = path.join(DIST, 'robots.txt');
  if (!(await exists(robotsFile))) {
    fail('robots.txt is missing from dist/.');
    return;
  }
  const robots = await readFile(robotsFile, 'utf8');
  const lines = robots.split(/\r?\n/).map((l) => l.trim());
  if (lines.some((l) => /^disallow:\s*\/\s*$/i.test(l))) {
    fail('robots.txt contains a blanket "Disallow: /" (staging leftover).');
  }
  if (!lines.some((l) => /^sitemap:\s*\S+/i.test(l))) {
    fail('robots.txt does not reference a sitemap.');
  }
}

// ---------------------------------------------------------------------------
// 4 + 5. Canonicals and noindex across all built HTML
// ---------------------------------------------------------------------------

async function checkPages(sitemapUrls) {
  const htmlFiles = await collectHtmlFiles(DIST);
  if (htmlFiles.length === 0) {
    fail('No HTML files found in dist/ — did the build run?');
    return;
  }

  let realPages = 0;
  let realNoindex = 0;
  let redirectStubs = 0;

  for (const file of htmlFiles) {
    const rel = path.relative(DIST, file).split(path.sep).join('/');
    const urlPath = `/${rel.replace(/index\.html$/, '')}`;

    const html = await readFile(file, 'utf8');
    const isRedirectStub = /<meta\s+http-equiv="refresh"/i.test(html);
    const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);

    if (isRedirectStub) {
      // Localization stubs, the root stub and legacy-URL redirects from
      // redirects.ts — noindex with a canonical pointing at the target.
      redirectStubs += 1;
      continue;
    }

    const isPage = PAGE_PATH.test(urlPath) || urlPath === '/404.html';
    if (!isPage) {
      warnings.push(`Stray HTML in dist/ (not an Astro page, from public/?): ${urlPath}`);
      continue;
    }
    realPages += 1;

    const canonicals = html.match(/<link\s+rel="canonical"[^>]*>/gi) ?? [];
    if (canonicals.length !== 1) {
      fail(`${urlPath} has ${canonicals.length} canonical tags (expected exactly 1).`);
    } else {
      const href = canonicals[0].match(/href="([^"]*)"/)?.[1] ?? '';
      if (!href.startsWith(`${SITE_URL}/`)) {
        fail(`${urlPath} canonical is not an absolute ${SITE_URL} URL: "${href}"`);
      }
    }

    if (noindex) {
      realNoindex += 1;
      if (MUST_INDEX.includes(urlPath)) fail(`Key page is noindex: ${urlPath}`);
      const loc = `${SITE_URL}${urlPath}`;
      if (sitemapUrls.has(loc)) fail(`Noindex page is listed in the sitemap: ${loc}`);
    }
  }

  // A site-wide noindex regression (e.g. staging flag left on) noindexes
  // nearly everything. Thin placeholders and untranslated locales legitimately
  // noindex a large share of a full (ungated) build, hence the high threshold;
  // key pages are additionally guarded by MUST_INDEX above.
  if (realPages > 0 && realNoindex / realPages > 0.9) {
    fail(
      `${realNoindex} of ${realPages} pages are noindex — looks like a site-wide staging noindex.`,
    );
  }

  console.log(
    `Checked ${htmlFiles.length} HTML file(s): ${realPages} page(s), ${redirectStubs} redirect stub(s), ` +
      `${realNoindex} intentionally noindex (thin/untranslated placeholders).`,
  );
}

// ---------------------------------------------------------------------------

if (!(await exists(DIST))) {
  console.error(`dist directory not found at ${DIST} — run \`npm run build\` first.`);
  process.exit(1);
}

const sitemapUrls = await checkSitemap();
await checkRobots();
await checkPages(sitemapUrls);

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ~ ${w}`);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} SEO check failure(s):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}

console.log('\nAll SEO checks passed: sitemap, robots.txt, canonicals, noindex.');
