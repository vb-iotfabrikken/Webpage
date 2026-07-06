#!/usr/bin/env node
/**
 * Emit exports/redirect-inventory.csv from src/data/redirects.ts.
 * Run: npm run export-redirects
 */
import { readFile } from "node:fs/promises";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { loadSrcModule } from "./lib/vite-ssr-load.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const outFile = join(root, "exports", "redirect-inventory.csv");
const crawlFile = join(root, "exports", "legacy-sitemap-urls.json");

function csvEscape(value) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

async function loadCrawlSupplements() {
  try {
    const raw = await readFile(crawlFile, "utf8");
    const report = JSON.parse(raw);
    return (report.unmapped ?? []).map((row) => ({
      source: row.url,
      target: "",
      category: "cross-domain",
      status: "proposed",
      sourceHost: row.host,
      note: row.note,
    }));
  } catch {
    return [];
  }
}

async function main() {
  const { getAllRedirectEntries } = await loadSrcModule("src/data/redirects.ts");
  const rows = getAllRedirectEntries();
  const existingSources = new Set(rows.map((r) => r.source));

  for (const row of await loadCrawlSupplements()) {
    if (!existingSources.has(row.source)) {
      rows.push(row);
      existingSources.add(row.source);
    }
  }

  rows.sort((a, b) => {
    const hostA = a.sourceHost ?? "";
    const hostB = b.sourceHost ?? "";
    if (hostA !== hostB) return hostA.localeCompare(hostB);
    if (a.status !== b.status) return a.status.localeCompare(b.status);
    return a.source.localeCompare(b.source);
  });

  const header = "source,target,category,status,source_host";
  const body = rows
    .map((row) =>
      [
        csvEscape(row.source),
        csvEscape(row.target),
        csvEscape(row.category),
        csvEscape(row.status),
        csvEscape(row.sourceHost ?? ""),
      ].join(","),
    )
    .join("\n");

  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, `${header}\n${body}\n`, "utf8");

  const configured = rows.filter((r) => r.status === "configured").length;
  const proposed = rows.filter((r) => r.status === "proposed").length;
  console.log(`Wrote ${rows.length} rows to ${outFile}`);
  console.log(`  configured: ${configured}`);
  console.log(`  proposed:   ${proposed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
