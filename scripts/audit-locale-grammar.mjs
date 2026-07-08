/**
 * Locale grammar audit for src/data i18n strings.
 *
 * German copy checklist:
 * 1. Module names: five German overrides (Raumklima, Erhaltung, …); Space management
 *    and Water detection stay English.
 * 2. Sensor catalogue names stay English except Wasserdetektor, Außen Sensor, and
 *    Range Extender und Bracket.
 * 3. Preservation product terms use Erhaltungs… (not Preservation Index, etc.).
 * 4. Relative humidity: r. F. or relative Luftfeuchtigkeit — never RH/RF.
 * 5. Never write ", und" — use "XX und YY" or split the sentence.
 *
 * Danish (`da`): RF or relativ luftfugtighed — never RH/r.f.
 * Swedish (`sv`): RF or relativ luftfuktighet — never RH.
 *
 * Scans src/data and src/components; glossary rh term must be localized in glossary.i18n.ts.
 */

import fs from "node:fs";
import path from "node:path";
import lockData from "../src/data/de-term-locks.json" with { type: "json" };

const roots = ["src/data", "src/components"];
const exts = new Set([".ts", ".astro"]);

const PRODUCT_TOKENS =
  "Humidity|CO2|Motion|Outdoor|Temperature|Desk|Touch|Open/Close|Full\\+|Mini\\+|Water";

const dePatterns = [
  {
    id: "de-lowercase-sensor",
    re: /(?<=[\s/(,;·]|^)sensor\b(?!Categories|Finder|Hero|Product|Technical|Dimensions|Compare|Page)/g,
    locales: ["de"],
    hint: "Capitalize generic noun in prose: Sensor",
  },
  {
    id: "de-lowercase-detektor",
    re: /\bdetektor\b/g,
    locales: ["de"],
    hint: "Capitalize noun: Detektor (or use approved Wasserdetektor)",
  },
  {
    id: "de-outdoor-sensor",
    re: /\bOutdoor[- ]?Sensor\b/g,
    locales: ["de"],
    hint: 'Use approved override: "Außen Sensor"',
  },
  {
    id: "de-rh-forbidden",
    re: /\bRH\b/g,
    locales: ["de"],
    hint: 'Use "r. F." or "relative Luftfeuchtigkeit"',
  },
  {
    id: "de-rh-hyphen",
    re: /\bRH-/g,
    locales: ["de"],
    hint: 'Use "r. F.-" or "relative Luftfeuchtigkeit"',
  },
  {
    id: "de-rf-forbidden",
    re: /\bRF\b/g,
    locales: ["de"],
    hint: 'Use "r. F." or "relative Luftfeuchtigkeit"',
  },
  {
    id: "de-rf-lowercase",
    re: /\brF\b/g,
    locales: ["de"],
    hint: 'Use "r. F." or "relative Luftfeuchtigkeit"',
  },
  {
    id: "de-relative-feuchte",
    re: /relative Feuchte/g,
    locales: ["de"],
    hint: 'Use "relative Luftfeuchtigkeit"',
  },
  {
    id: "de-r-dot-f-compact",
    re: /r\.F\./g,
    locales: ["de"],
    hint: 'Use spaced form: "r. F."',
  },
  {
    id: "de-comma-und",
    re: /,\s+und\b/g,
    locales: ["de"],
    hint: 'Remove comma before "und" or split the sentence',
  },
  {
    id: "de-english-sensor-suffix",
    re: new RegExp(
      `\\b(?:${PRODUCT_TOKENS}|Water (?:detector|rope)|Cloud connector) Sensor\\b`,
      "gi",
    ),
    locales: ["de"],
    hint: "Use English catalogue name without Sensor suffix (except Außen Sensor, Wasserdetektor)",
  },
  ...lockData.forbiddenModuleTokens.map((token) => ({
    id: "de-wrong-module",
    re: new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    locales: ["de"],
    hint: "Use approved German module name (see moduleNameOverridesDe in de-term-locks.json)",
    token,
  })),
  ...(lockData.forbiddenEnglishModuleTokens ?? []).map((token) => ({
    id: "de-english-module",
    re: new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    locales: ["de"],
    hint: "Use approved German module name via localizedModuleName() (see de-term-locks.json)",
    token,
  })),
  ...lockData.forbiddenSensorTokens.map((token) => ({
    id: "de-wrong-sensor",
    re: new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    locales: ["de"],
    hint: "Use English catalogue name or approved override (Wasserdetektor, Außen Sensor, Range Extender und Bracket)",
    token,
  })),
  ...(lockData.forbiddenEnglishSensorTokens ?? []).map((token) => ({
    id: "de-english-sensor",
    re: new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    locales: ["de"],
    hint: "Use approved German sensor override (see sensorNameOverridesDe in de-term-locks.json)",
    token,
  })),
  ...(lockData.forbiddenPreservationTermsDe ?? []).map((token) => ({
    id: "de-english-preservation-term",
    re: new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
    locales: ["de"],
    hint: "Use Erhaltungs… form (e.g. Erhaltungsindex, Erhaltungsheizung)",
    token,
  })),
];

const nordicPatterns = [
  {
    id: "da-rh-forbidden",
    re: /\bRH\b/g,
    locales: ["da"],
    hint: 'Use "RF" or "relativ luftfugtighed"',
  },
  {
    id: "da-r-dot-f-forbidden",
    re: /r\.f\./g,
    locales: ["da"],
    hint: 'Use "RF" (see Productsheets/DK/)',
  },
  {
    id: "sv-rh-forbidden",
    re: /\bRH\b/g,
    locales: ["sv"],
    hint: 'Use "RF" or "relativ luftfuktighet"',
  },
  {
    id: "nordic-title-case-sensor",
    re: new RegExp(`\\b(?:${PRODUCT_TOKENS}) Sensor\\b`, "g"),
    locales: ["da", "sv"],
    hint: "Use sentence case: CO2-sensor or catalogue name only",
  },
  {
    id: "nordic-hybrid-suffix",
    re: new RegExp(`\\b(?:${PRODUCT_TOKENS}) sensorn?\\b`, "gi"),
    locales: ["da", "sv"],
    hint: "Hyphenate: Humidity-sensoren / CO2-sensorn",
  },
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

/** Rough locale context from block structure. */
function detectLocaleBlock(lines, lineIndex) {
  for (let i = lineIndex; i >= 0; i--) {
    const constBlock = lines[i].match(/^const\s+(da|de|sv)\s*:/);
    if (constBlock) return constBlock[1];
    const nested = lines[i].match(/^\s*(da|de|sv)\s*:\s*\{?\s*$/);
    if (nested) return nested[1];
    if (lines[i].match(/^\s*(en)\s*:\s*\{?\s*$/)) return "en";
    if (lines[i].match(/^const\s+en\s*:/)) return "en";
  }
  return null;
}

function extractStringLiterals(line) {
  const literals = [];
  const re = /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g;
  let m;
  while ((m = re.exec(line))) {
    literals.push({ quote: m[1], value: m[2], index: m.index });
  }
  return literals;
}

/** RH glossary term must be localized on non-English locales. */
function auditGlossaryRhTerms() {
  const file = "src/data/glossary.i18n.ts";
  if (!fs.existsSync(file)) return [];

  const text = fs.readFileSync(file, "utf8");
  const expected = {
    da: "RF",
    de: "r. F.",
    sv: "RF",
  };
  const hits = [];

  for (const [locale, term] of Object.entries(expected)) {
    const blockStart = text.indexOf(`  ${locale}: {`);
    if (blockStart === -1) continue;

    const nextLocale = text.indexOf("\n  },", blockStart);
    const block = text.slice(blockStart, nextLocale === -1 ? undefined : nextLocale);
    const rhStart = block.indexOf("rh: {");
    if (rhStart === -1) {
      hits.push({
        file,
        line: 0,
        locale,
        rule: "glossary-rh-term-missing",
        hint: `Add rh: { term: "${term}", … } to glossary.i18n.ts`,
        match: "rh",
        snippet: `Missing rh overlay for ${locale}`,
      });
      continue;
    }

    const rhBlock = block.slice(rhStart, block.indexOf("},", rhStart) + 2);
    const termMatch = rhBlock.match(/term:\s*["']([^"']+)["']/);
    if (!termMatch) {
      hits.push({
        file,
        line: 0,
        locale,
        rule: "glossary-rh-term-missing",
        hint: `Add term: "${term}" to rh overlay in glossary.i18n.ts`,
        match: "rh",
        snippet: rhBlock.slice(0, 80),
      });
    } else if (termMatch[1] !== term) {
      hits.push({
        file,
        line: 0,
        locale,
        rule: "glossary-rh-term-wrong",
        hint: `Use term: "${term}" for ${locale} rh glossary entry`,
        match: termMatch[1],
        snippet: rhBlock.slice(0, 80),
      });
    }
  }

  return hits;
}

function auditFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n");
  const hits = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trimStart().startsWith("//") || line.trimStart().startsWith("*")) continue;

    const locale = detectLocaleBlock(lines, i);
    if (!locale || locale === "en") continue;

    for (const lit of extractStringLiterals(line)) {
      const value = lit.value;
      if (value === "sensor" && /type:\s*["']sensor["']/.test(line)) continue;
      if (value === "text" && /type:\s*["']text["']/.test(line)) continue;
      if (value === "compare" && /type:\s*["']compare["']/.test(line)) continue;

      const patterns = locale === "de" ? dePatterns : nordicPatterns;

      for (const pat of patterns) {
        if (!pat.locales.includes(locale)) continue;
        pat.re.lastIndex = 0;
        let match;
        while ((match = pat.re.exec(value))) {
          hits.push({
            file,
            line: i + 1,
            locale,
            rule: pat.id,
            hint: pat.hint,
            match: match[0],
            snippet: value.length > 100 ? `${value.slice(0, 100)}…` : value,
          });
        }
      }
    }
  }

  return hits;
}

const allHits = [];
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    if (file.endsWith("deTermLocks.ts")) continue;
    allHits.push(...auditFile(file));
  }
}
allHits.push(...auditGlossaryRhTerms());

if (allHits.length === 0) {
  console.log("No locale grammar violations found.");
  process.exit(0);
}

console.log(`Locale grammar violations: ${allHits.length}\n`);
for (const h of allHits) {
  console.log(`${h.file}:${h.line} [${h.locale}/${h.rule}] "${h.match}"`);
  console.log(`  hint: ${h.hint}`);
  console.log(`  snippet: ${h.snippet}\n`);
}

process.exit(1);
