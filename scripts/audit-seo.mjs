#!/usr/bin/env node
/**
 * SEO audit — scans i18n and hub data for missing/weak meta fields.
 * Output: exports/seo-audit.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const i18nDir = path.join(root, "src", "data", "i18n");
const hubsDir = path.join(root, "src", "data", "hubs");
const outPath = path.join(root, "exports", "seo-audit.json");

const TITLE_MIN = 30;
const TITLE_MAX = 65;
const DESC_MIN = 70;
const DESC_MAX = 160;

/** @typedef {{ severity: 'error' | 'warning' | 'info', code: string, message: string, file?: string, key?: string }} AuditIssue */

/** @type {AuditIssue[]} */
const issues = [];

/** @type {Record<string, number>} */
const stats = {
  filesScanned: 0,
  metaTitles: 0,
  metaDescriptions: 0,
  seoTitles: 0,
  errors: 0,
  warnings: 0,
};

function addIssue(issue) {
  issues.push(issue);
  if (issue.severity === "error") stats.errors += 1;
  if (issue.severity === "warning") stats.warnings += 1;
}

function walkTsFiles(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkTsFiles(full));
    else if (entry.name.endsWith(".ts")) files.push(full);
  }
  return files;
}

function rel(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function auditMetaField(file, key, value, kind) {
  const trimmed = value.trim();
  if (!trimmed) {
    addIssue({
      severity: "error",
      code: `missing_${kind}`,
      message: `Empty ${kind}`,
      file: rel(file),
      key,
    });
    return;
  }

  if (kind === "metaTitle" || kind === "seoTitle") {
    stats[kind === "metaTitle" ? "metaTitles" : "seoTitles"] += 1;
    if (trimmed.length < TITLE_MIN) {
      addIssue({
        severity: "warning",
        code: "title_short",
        message: `${kind} is ${trimmed.length} chars (min ${TITLE_MIN}): "${trimmed.slice(0, 50)}…"`,
        file: rel(file),
        key,
      });
    }
    if (trimmed.length > TITLE_MAX) {
      addIssue({
        severity: "warning",
        code: "title_long",
        message: `${kind} is ${trimmed.length} chars (max ${TITLE_MAX}): "${trimmed.slice(0, 50)}…"`,
        file: rel(file),
        key,
      });
    }
  }

  if (kind === "metaDescription") {
    stats.metaDescriptions += 1;
    if (trimmed.length < DESC_MIN) {
      addIssue({
        severity: "warning",
        code: "description_short",
        message: `metaDescription is ${trimmed.length} chars (min ${DESC_MIN})`,
        file: rel(file),
        key,
      });
    }
    if (trimmed.length > DESC_MAX) {
      addIssue({
        severity: "warning",
        code: "description_long",
        message: `metaDescription is ${trimmed.length} chars (max ${DESC_MAX})`,
        file: rel(file),
        key,
      });
    }
  }
}

function scanFileContent(file, content) {
  stats.filesScanned += 1;

  const patterns = [
    { regex: /metaTitle:\s*"((?:\\.|[^"\\])*)"/g, kind: "metaTitle" },
    { regex: /seoTitle:\s*"((?:\\.|[^"\\])*)"/g, kind: "seoTitle" },
    { regex: /metaDescription:\s*"((?:\\.|[^"\\])*)"/g, kind: "metaDescription" },
    { regex: /metaDescription:\s*`([^`]*)`/gs, kind: "metaDescription" },
  ];

  for (const { regex, kind } of patterns) {
    for (const match of content.matchAll(regex)) {
      const raw = match[1].replace(/\\n/g, " ").replace(/\\"/g, '"');
      auditMetaField(file, kind, raw, kind);
    }
  }
}

function scanDuplicateTitles() {
  /** @type {Map<string, string[]>} */
  const titles = new Map();

  for (const file of [...walkTsFiles(i18nDir), ...walkTsFiles(hubsDir)]) {
    const content = fs.readFileSync(file, "utf8");
    for (const match of content.matchAll(/(?:metaTitle|seoTitle):\s*"((?:\\.|[^"\\])*)"/g)) {
      const title = match[1].replace(/\\"/g, '"').trim().toLowerCase();
      if (!title) continue;
      const list = titles.get(title) ?? [];
      list.push(rel(file));
      titles.set(title, list);
    }
  }

  for (const [title, files] of titles) {
    if (files.length > 1) {
      addIssue({
        severity: "warning",
        code: "duplicate_title",
        message: `Duplicate title "${title.slice(0, 60)}" in ${files.length} files`,
        file: files.join(", "),
      });
    }
  }
}

for (const file of walkTsFiles(i18nDir)) {
  scanFileContent(file, fs.readFileSync(file, "utf8"));
}

for (const file of walkTsFiles(hubsDir)) {
  if (!file.endsWith(".ts")) continue;
  scanFileContent(file, fs.readFileSync(file, "utf8"));
}

scanDuplicateTitles();

const report = {
  generatedAt: new Date().toISOString(),
  stats,
  issues: issues.sort((a, b) => {
    const rank = { error: 0, warning: 1, info: 2 };
    return rank[a.severity] - rank[b.severity];
  }),
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

console.log(`SEO audit written to ${rel(outPath)}`);
console.log(
  `  ${stats.filesScanned} files, ${stats.errors} errors, ${stats.warnings} warnings`,
);
process.exitCode = stats.errors > 0 ? 1 : 0;
