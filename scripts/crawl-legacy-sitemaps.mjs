#!/usr/bin/env node
/**
 * Fetch Yoast / WordPress sitemaps from legacy domains and write discovered
 * URLs plus mapping status to exports/legacy-sitemap-urls.json.
 *
 * Run: npm run crawl-legacy-sitemaps
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { loadSrcModule } from "./lib/vite-ssr-load.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const outFile = join(root, "exports", "legacy-sitemap-urls.json");

const LEGACY_DOMAINS = [
  {
    host: "iot-fabrikken.uk",
    sitemapCandidates: ["/sitemap_index.xml", "/wp-sitemap.xml", "/sitemap.xml"],
  },
  {
    host: "iot-fabrikken.com",
    sitemapCandidates: ["/sitemap_index.xml", "/wp-sitemap.xml", "/sitemap.xml"],
  },
  {
    host: "iot-fabrikken.de",
    sitemapCandidates: ["/sitemap_index.xml", "/wp-sitemap.xml", "/sitemap.xml"],
  },
  {
    host: "iot-fabrikken.se",
    sitemapCandidates: ["/sitemap_index.xml", "/wp-sitemap.xml", "/sitemap.xml"],
  },
];

async function fetchText(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "IoT-Fabrikken-redirect-audit/1.0" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/gi)].map((m) => m[1].trim());
}

async function resolveSitemapIndex(baseUrl, candidates) {
  for (const path of candidates) {
    try {
      const xml = await fetchText(`${baseUrl}${path}`);
      const locs = extractLocs(xml);
      if (locs.length === 0) continue;
      const childSitemaps = locs.filter((loc) => loc.endsWith(".xml"));
      if (childSitemaps.length > 0) return childSitemaps;
      return [baseUrl + path];
    } catch {
      // try next candidate
    }
  }
  return [];
}

async function collectUrlsFromDomain(domain) {
  const baseUrl = `https://${domain.host}`;
  const result = {
    host: domain.host,
    fetchedAt: new Date().toISOString(),
    sitemaps: [],
    urls: [],
    error: null,
  };

  try {
    const sitemapUrls = await resolveSitemapIndex(baseUrl, domain.sitemapCandidates);
    result.sitemaps = sitemapUrls;

    const urlSet = new Set();
    for (const sitemapUrl of sitemapUrls) {
      try {
        const xml = await fetchText(sitemapUrl);
        for (const loc of extractLocs(xml)) {
          if (loc.startsWith(baseUrl) || loc.startsWith(`https://www.${domain.host}`)) {
            urlSet.add(loc.replace(`https://www.${domain.host}`, baseUrl));
          }
        }
      } catch (err) {
        result.error = `Failed child sitemap ${sitemapUrl}: ${err.message}`;
      }
    }
    result.urls = [...urlSet].sort();
  } catch (err) {
    result.error = err.message;
  }

  return result;
}

function pathnameFromUrl(url, host) {
  try {
    const u = new URL(url);
    if (!u.hostname.replace(/^www\./, "").endsWith(host.replace(/^www\./, ""))) return null;
    return u.pathname.endsWith("/") ? u.pathname : `${u.pathname}/`;
  } catch {
    return null;
  }
}

async function main() {
  const { resolveLegacyPath, LEGACY_HOST_LOCALE } =
    await loadSrcModule("src/data/legacyWordPressPaths.ts");
  const { resolveCaseSlug, legacyCaseSlugAliases, localizeRedirectTarget } =
    await loadSrcModule("src/data/redirects.ts");

  const domains = [];
  for (const domain of LEGACY_DOMAINS) {
    console.log(`Crawling ${domain.host}…`);
    const data = await collectUrlsFromDomain(domain);
    domains.push(data);
    console.log(`  ${data.urls.length} URL(s)${data.error ? ` (warning: ${data.error})` : ""}`);
  }

  const mapped = [];
  const unmapped = [];

  function localizeTarget(target) {
    return localizeRedirectTarget(target);
  }

  function suggestTarget(pathname, host) {
    if (pathname.includes("/wp-content/")) {
      return { target: null, note: "asset — do not redirect to HTML" };
    }

    const locale = LEGACY_HOST_LOCALE[host];
    const staticTarget = resolveLegacyPath(host, pathname);
    if (staticTarget) {
      return { target: localizeTarget(staticTarget), note: "legacyWordPressPaths" };
    }

    const caseMatch = pathname.match(/^\/case\/([^/]+)\/$/);
    if (caseMatch) {
      const slug = caseMatch[1];
      const resolved = resolveCaseSlug(legacyCaseSlugAliases[slug] ?? slug, locale);
      return {
        target: localizeTarget(
          `https://iot-fabrikken.com/${locale}/case-studies/${resolved}/`,
        ),
        note: "case singular CPT",
      };
    }

    const casesMatch = pathname.match(/^\/cases\/([^/]+)\/$/);
    if (casesMatch) {
      const slug = casesMatch[1];
      const resolved = resolveCaseSlug(legacyCaseSlugAliases[slug] ?? slug, locale);
      return {
        target: localizeTarget(
          `https://iot-fabrikken.com/${locale}/case-studies/${resolved}/`,
        ),
        note: "cases detail",
      };
    }

    const projekteMatch = pathname.match(/^\/projekte\/([^/]+)\/$/);
    if (projekteMatch) {
      const slug = projekteMatch[1];
      const resolved = resolveCaseSlug(legacyCaseSlugAliases[slug] ?? slug, "de");
      return {
        target: localizeTarget(
          `https://iot-fabrikken.com/de/case-studies/${resolved}/`,
        ),
        note: "DE projekte detail",
      };
    }

    return { target: null, note: "needs manual mapping" };
  }

  for (const domain of domains) {
    for (const url of domain.urls) {
      const pathname = pathnameFromUrl(url, domain.host);
      if (!pathname) continue;
      const { target, note } = suggestTarget(pathname, domain.host);
      const entry = { url, pathname, host: domain.host, target, note };
      if (target) mapped.push(entry);
      else unmapped.push(entry);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    domains,
    summary: {
      totalUrls: domains.reduce((n, d) => n + d.urls.length, 0),
      mapped: mapped.length,
      unmapped: unmapped.length,
    },
    mapped,
    unmapped,
  };

  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, JSON.stringify(report, null, 2) + "\n", "utf8");

  console.log(`\nWrote ${outFile}`);
  console.log(`  total:    ${report.summary.totalUrls}`);
  console.log(`  mapped:   ${report.summary.mapped}`);
  console.log(`  unmapped: ${report.summary.unmapped}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
