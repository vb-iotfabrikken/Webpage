#!/usr/bin/env node
/**
 * scripts/extract-i18n-strings.mjs
 *
 * Walks all i18n / localization TypeScript source files and the MDX landing-
 * page articles, extracts user-facing string literals per locale, and writes
 * one output file per locale to:
 *   tmp/i18n-strings-{locale}.txt
 *
 * Each output line:
 *   {relPath} | {locale} | L{lineNumber} | {string value}
 *
 * Usage:  node scripts/extract-i18n-strings.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const TMP = path.join(ROOT, "tmp");

// ─── Source files ─────────────────────────────────────────────────────────────

const TS_FILES = [
  // Dedicated i18n folder
  "src/data/i18n/ui.ts",
  "src/data/i18n/home.ts",
  "src/data/i18n/pricing.ts",
  "src/data/i18n/contact.ts",
  "src/data/i18n/about.ts",
  "src/data/i18n/getOffer.ts",
  "src/data/i18n/legal.ts",
  "src/data/i18n/indoorClimate.ts",
  "src/data/i18n/preservation.ts",
  "src/data/i18n/spaceManagement.ts",
  "src/data/i18n/waterDetection.ts",
  "src/data/i18n/usageCleaning.ts",
  "src/data/i18n/pushButtons.ts",
  "src/data/i18n/lockersDoors.ts",
  "src/data/i18n/events.ts",
  "src/data/i18n/archivistica.ts",
  "src/data/i18n/glossary.ts",
  "src/data/i18n/cases.ts",
  "src/data/i18n/articles.ts",
  "src/data/i18n/worktech26Stockholm.ts",
  "src/data/i18n/mutec2026.ts",
  "src/data/i18n/dhbvVerbandstag2026.ts",
  "src/data/i18n/eventFairRecap.ts",
  "src/data/i18n/sensorsCompare.ts",

  // *.i18n.ts companion files
  "src/data/content/industryContent.i18n.ts",
  "src/data/content/sensors.i18n.ts",
  "src/data/content/platform.i18n.ts",
  "src/data/hubs/caseStudyDetails.i18n.ts",
  "src/data/glossary.i18n.ts",
  "src/data/content/modules.i18n.ts",
  "src/data/hubs/industryHub.i18n.ts",
  "src/data/hubs/sensors.i18n.ts",
  "src/data/faqContent.i18n.ts",
  "src/data/hubs/faqHub.i18n.ts",
  "src/data/hubs/platformHub.i18n.ts",
  "src/data/hubs/modules.i18n.ts",
  "src/data/modules.i18n.ts",
  "src/data/hubs/caseStudies.i18n.ts",
  "src/data/sensorTechnicalSpecs.i18n.ts",

  // Inline-overlay and company-page files
  "src/data/team.ts",
  "src/data/story.ts",
  "src/data/trustCenter.ts",
  "src/data/press.ts",
  "src/data/careers.ts",
  "src/data/partners.ts",
  "src/data/contact.ts",
  "src/data/hubs/legal.ts",
  "src/data/hubs/about.ts",
  "src/data/hubs/contact.ts",
  "src/data/hubs/caseStudies.ts",

  // English-canonical sources (no locale blocks — all tagged as 'en')
  "src/data/faqContent.ts",
  "src/data/glossary.ts",
];

function walkMdx(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walkMdx(p));
    else if (ent.name.endsWith(".mdx")) files.push(p);
  }
  return files;
}

const MDX_FILES = walkMdx(path.join(ROOT, "src/content/landingpages"));

// ─── Locale detection ─────────────────────────────────────────────────────────
//
// Look backwards from the current line to find the nearest locale marker.
// Markers are either:
//   • `const en: ...` / `const da: ...`  (top-level locale constant)
//   • `  da: {`  or  `  da: [`           (locale key inside a Record)
//
// The nearest marker wins, so strings in the `de` block (which follows `da`)
// correctly resolve to "de" and not "da".

function detectLocale(lines, lineIndex) {
  for (let i = lineIndex; i >= Math.max(0, lineIndex - 1200); i--) {
    const line = lines[i];

    // `const en: SomeType = {` or `const da: ...` at column 0
    const constMatch = line.match(/^const\s+(en|da|de|sv)\s*[=:]/);
    if (constMatch) return constMatch[1];

    // Object key `  da: {` or `  da: [` (at any indentation)
    const keyBlockMatch = line.match(/^\s+(en|da|de|sv)\s*:\s*[\{\[]/);
    if (keyBlockMatch) return keyBlockMatch[1];

    // Inline object on one line: `  da: { title: "..." },`  — no trailing {
    // (Only if none of the above matched and the key is at indentation ≥ 2)
    const inlineMatch = line.match(/^( {2,}|\t)(en|da|de|sv)\s*:/);
    if (inlineMatch) return inlineMatch[2];
  }
  return "en"; // default: treat as English canonical
}

// ─── String extraction ────────────────────────────────────────────────────────

// Extract all single- and double-quoted string literal values from a line.
// Template literals (backticks) are intentionally excluded — they typically
// contain HTML or interpolations, not plain prose.
function extractQuotedStrings(line) {
  const results = [];
  const re = /(["'])((?:\\.|(?!\1)[^\\])*)\1/g;
  let m;
  while ((m = re.exec(line)) !== null) {
    results.push(m[2]);
  }
  return results;
}

// Keep only strings that look like prose rather than identifiers / code values.
function isProseString(s) {
  if (s.length < 10) return false;           // too short to matter
  if (!/ /.test(s)) return false;            // no space → single word / slug
  if (/^[./]/.test(s)) return false;         // file path
  if (/^https?:\/\//.test(s)) return false;  // URL
  if (/^\+\d/.test(s)) return false;         // phone number
  if (/^\{/.test(s)) return false;           // template literal fragment
  if (/^[\d\s]+$/.test(s)) return false;     // pure numbers
  return true;
}

// Lines to skip regardless of content
function isSkippableLine(trimmed) {
  return (
    trimmed.startsWith("//") ||
    trimmed.startsWith("*") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("import ") ||
    trimmed.startsWith("export type ") ||
    trimmed.startsWith("export interface ") ||
    trimmed.startsWith("type ") ||
    trimmed.startsWith("interface ")
  );
}

// ─── Process TypeScript files ─────────────────────────────────────────────────

function processTS(filePath, relPath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split("\n");
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isSkippableLine(line.trim())) continue;

    for (const s of extractQuotedStrings(line)) {
      if (!isProseString(s)) continue;
      const locale = detectLocale(lines, i);
      results.push({ locale, lineNum: i + 1, value: s });
    }
  }

  return results;
}

// ─── Process MDX files ────────────────────────────────────────────────────────

function processMDX(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split("\n");
  const results = [];
  let frontmatterFences = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "---") { frontmatterFences++; continue; }
    if (frontmatterFences < 2) continue; // still inside frontmatter

    if (trimmed.startsWith("import ")) continue;
    if (trimmed.startsWith("<") || trimmed.startsWith("{")) continue;
    if (trimmed === "") continue;

    // Prose paragraph — include as-is
    if (trimmed.length >= 10 && / /.test(trimmed)) {
      results.push({ locale: "en", lineNum: i + 1, value: trimmed });
    }
  }

  return results;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const LOCALES = ["en", "da", "de", "sv"];
const outputMap = Object.fromEntries(LOCALES.map((l) => [l, []]));
let totalStrings = 0;

for (const relPath of TS_FILES) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`[warn] Not found: ${relPath}`);
    continue;
  }
  for (const { locale, lineNum, value } of processTS(fullPath, relPath)) {
    outputMap[locale].push(`${relPath} | ${locale} | L${lineNum} | ${value}`);
    totalStrings++;
  }
}

for (const fullPath of MDX_FILES) {
  const relPath = path.relative(ROOT, fullPath).replace(/\\/g, "/");
  for (const { locale, lineNum, value } of processMDX(fullPath)) {
    outputMap[locale].push(`${relPath} | ${locale} | L${lineNum} | ${value}`);
    totalStrings++;
  }
}

fs.mkdirSync(TMP, { recursive: true });
for (const locale of LOCALES) {
  const header = [
    `# i18n string dump — locale: ${locale}`,
    `# Generated: ${new Date().toISOString()}`,
    `# Format: {file} | {locale} | L{line} | {string value}`,
    `# Strings: ${outputMap[locale].length}`,
    "",
  ].join("\n");
  const outFile = path.join(TMP, `i18n-strings-${locale}.txt`);
  fs.writeFileSync(outFile, header + outputMap[locale].join("\n") + "\n", "utf8");
  console.log(`  ${locale}: ${String(outputMap[locale].length).padStart(5)} strings → tmp/i18n-strings-${locale}.txt`);
}

console.log(`\nTotal: ${totalStrings} prose strings across ${LOCALES.length} locales.`);
