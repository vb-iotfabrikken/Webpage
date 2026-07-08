#!/usr/bin/env node
/**
 * Emit spreadsheet-ready legacy migration map from exports/legacy-sitemap-urls.json.
 *
 * Run: npm run export-legacy-migration-map
 */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { loadSrcModule } from "./lib/vite-ssr-load.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const crawlFile = join(root, "exports", "legacy-sitemap-urls.json");
const csvFile = join(root, "exports", "legacy-migration-map.csv");
const mdFile = join(root, "exports", "legacy-migration-map.md");
const reviewFile = join(root, "exports", "legacy-migration-review.csv");

function csvEscape(value) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

/** Prefer www for .com sitemap URLs; keep other hosts as crawled. */
function preferredOldUrl(url, host) {
  if (host !== "iot-fabrikken.com") return url;
  try {
    const u = new URL(url);
    u.hostname = "www.iot-fabrikken.com";
    return u.toString();
  } catch {
    return url;
  }
}

function apexDuplicateUrl(url, host) {
  if (host !== "iot-fabrikken.com") return null;
  try {
    const u = new URL(url);
    if (u.hostname === "iot-fabrikken.com") return null;
    u.hostname = "iot-fabrikken.com";
    return u.toString();
  } catch {
    return null;
  }
}

function resolveFinalTarget(url, redirectMap, maxHops = 10) {
  let current = url;
  for (let i = 0; i < maxHops; i++) {
    let pathname;
    try {
      pathname = new URL(current).pathname;
    } catch {
      break;
    }
    const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const next = redirectMap[normalized];
    if (!next) break;
    if (/^https?:\/\//i.test(next)) {
      current = next;
    } else {
      current = `https://iot-fabrikken.com${next.startsWith("/") ? next : `/${next}`}`;
    }
  }
  return current;
}

function classifyNote(entry, legacyCaseSlugAliases) {
  const { pathname, note: crawlNote, target } = entry;

  if (pathname === "/ret-titlen-her/") {
    return "ATTENTION: no good match — suggestion: homepage";
  }

  const caseMatch = pathname.match(/^\/case\/([^/]+)\/$/);
  if (caseMatch) {
    const slug = caseMatch[1];
    if (legacyCaseSlugAliases[slug]) {
      return "case study — slug alias";
    }
    return "case study — direct match";
  }

  if (
    pathname.includes("case-kategori") ||
    pathname.includes("l_kategori") ||
    pathname.includes("/category/") ||
    pathname.includes("/author/")
  ) {
    return "closest relevant page";
  }

  if (pathname.includes("jobopslag")) {
    return "closest relevant page";
  }

  if (
    pathname.includes("thank-you") ||
    pathname.includes("tak-for") ||
    pathname.includes("danke-fuer") ||
    pathname.includes("tack-for")
  ) {
    return "closest relevant page";
  }

  if (pathname === "/epbd/") {
    return "closest relevant page";
  }

  if (pathname.includes("vdi-6022")) {
    return "closest relevant page";
  }

  if (pathname === "/sitemap/") {
    return "closest relevant page";
  }

  if (
    pathname === "/indeklima-maaler/" ||
    pathname === "/raumklima-messgerat/" ||
    pathname === "/indoor-climate-sensor/" ||
    pathname === "/inomhusklimatmatare/"
  ) {
    return "closest relevant page";
  }

  if (
    crawlNote === "case singular CPT" ||
    crawlNote === "cases detail" ||
    crawlNote === "DE projekte detail"
  ) {
    return "case study — direct match";
  }

  if (pathname === "/" && target.match(/\/(en|da|de|sv)\/$/)) {
    return "direct match";
  }

  return "direct match";
}

function needsReview(note, pathname) {
  if (note.startsWith("ATTENTION:")) return true;
  if (note === "case study — slug alias") return true;
  if (note === "closest relevant page") return true;
  if (pathname === "/" || pathname === "/sitemap/") return true;
  return false;
}

function reviewReason(note, pathname) {
  if (note.startsWith("ATTENTION:")) return "WordPress placeholder — no equivalent page";
  if (note === "case study — slug alias") return "Verify slug alias content match";
  if (
    pathname.includes("case-kategori") ||
    pathname.includes("l_kategori") ||
    pathname.includes("/category/")
  ) {
    return "Taxonomy archive → hub (no filtered equivalent)";
  }
  if (pathname.includes("/author/")) return "Author archive → about";
  if (pathname.includes("jobopslag")) return "Closed job listing → careers hub";
  if (
    pathname.includes("thank-you") ||
    pathname.includes("tak-for") ||
    pathname.includes("danke") ||
    pathname.includes("tack-for")
  ) {
    return "Form thank-you → contact";
  }
  if (pathname === "/epbd/") return "Topic landing → articles hub";
  if (pathname.includes("vdi-6022")) return "Long-form article URL → articles hub";
  if (pathname === "/sitemap/") return "HTML sitemap page retired → locale home";
  if (pathname === "/") return "Domain root → locale home";
  if (note === "closest relevant page") return "Closest relevant page — confirm target";
  return note;
}

function buildRows(mapped, legacyCaseSlugAliases, redirectMap) {
  const rows = [];

  for (const entry of mapped) {
    const oldUrl = preferredOldUrl(entry.url, entry.host);
    const newUrl = resolveFinalTarget(entry.target, redirectMap);
    const note = classifyNote(entry, legacyCaseSlugAliases);

    rows.push({
      oldUrl,
      newUrl,
      note,
      host: entry.host,
      pathname: entry.pathname,
      isApexDuplicate: false,
    });

    const apex = apexDuplicateUrl(oldUrl, entry.host);
    if (apex) {
      rows.push({
        oldUrl: apex,
        newUrl,
        note: `${note} (apex host duplicate)`,
        host: entry.host,
        pathname: entry.pathname,
        isApexDuplicate: true,
      });
    }
  }

  rows.sort((a, b) => {
    if (a.host !== b.host) return a.host.localeCompare(b.host);
    return a.oldUrl.localeCompare(b.oldUrl);
  });

  return rows;
}

function validateChains(rows, redirectMap) {
  const chains = [];

  for (const row of rows) {
    let pathname;
    try {
      pathname = new URL(row.newUrl).pathname;
    } catch {
      continue;
    }

    const hashIdx = pathname.indexOf("#");
    const pathOnly = hashIdx >= 0 ? pathname.slice(0, hashIdx) : pathname;
    const normalized = pathOnly.endsWith("/") ? pathOnly : `${pathOnly}/`;

    if (redirectMap[normalized] || redirectMap[pathOnly.replace(/\/$/, "")]) {
      chains.push({
        oldUrl: row.oldUrl,
        newUrl: row.newUrl,
        redirectsTo: redirectMap[normalized] ?? redirectMap[pathOnly.replace(/\/$/, "")],
      });
    }
  }

  return chains;
}

async function main() {
  const { legacyCaseSlugAliases, getSiteRedirectMap } = await loadSrcModule("src/data/redirects.ts");

  const raw = await readFile(crawlFile, "utf8");
  const report = JSON.parse(raw);

  if ((report.unmapped ?? []).length > 0) {
    console.error(
      `Error: ${report.unmapped.length} unmapped URL(s) in ${crawlFile}. Run crawl-legacy-sitemaps first.`,
    );
    process.exit(1);
  }

  const redirectMap = getSiteRedirectMap();
  const rows = buildRows(report.mapped, legacyCaseSlugAliases, redirectMap);
  const chains = validateChains(rows, redirectMap);

  const reviewRows = rows.filter((r) => !r.isApexDuplicate && needsReview(r.note, r.pathname));

  const csvHeader = "Old URL,New URL,Note";
  const csvBody = rows
    .map((r) => [csvEscape(r.oldUrl), csvEscape(r.newUrl), csvEscape(r.note)].join(","))
    .join("\n");

  const mdLines = [
    "# Legacy migration redirect map",
    "",
    `Generated from \`exports/legacy-sitemap-urls.json\` (${report.summary.totalUrls} sitemap URLs, ${rows.length} rows with www/apex duplicates).`,
    "",
    "| Old URL | New URL | Note |",
    "|---------|---------|------|",
    ...rows.map((r) => `| ${r.oldUrl} | ${r.newUrl} | ${r.note} |`),
  ];

  const reviewHeader = "Old URL,New URL,Note,Review reason";
  const reviewBody = reviewRows
    .map((r) =>
      [
        csvEscape(r.oldUrl),
        csvEscape(r.newUrl),
        csvEscape(r.note),
        csvEscape(reviewReason(r.note, r.pathname)),
      ].join(","),
    )
    .join("\n");

  await mkdir(dirname(csvFile), { recursive: true });
  await writeFile(csvFile, `${csvHeader}\n${csvBody}\n`, "utf8");
  await writeFile(mdFile, `${mdLines.join("\n")}\n`, "utf8");
  await writeFile(reviewFile, `${reviewHeader}\n${reviewBody}\n`, "utf8");

  console.log(`Wrote ${rows.length} rows to ${csvFile}`);
  console.log(`Wrote ${mdFile}`);
  console.log(`Wrote ${reviewRows.length} review row(s) to ${reviewFile}`);

  if (chains.length > 0) {
    console.error(`\nChain validation FAILED — ${chains.length} destination(s) redirect again:`);
    for (const c of chains) {
      console.error(`  ${c.newUrl} → ${c.redirectsTo}`);
    }
    process.exit(1);
  }

  console.log("\nChain validation: OK (0 redirect chains detected)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
