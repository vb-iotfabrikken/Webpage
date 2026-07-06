import fs from "node:fs";
import path from "node:path";

const roots = ["src/data"];
const exts = new Set([".ts"]);

const PRODUCT_TOKENS =
  "Humidity|CO2|Motion|Outdoor|Temperature|Desk|Touch|Open/Close|Full\\+|Mini\\+|Water";

const dePatterns = [
  {
    id: "de-lowercase-sensor",
    re: /(?<=[\s/(,;·]|^)sensor\b(?!Categories|Finder|Hero|Product|Technical|Dimensions|Compare|Page)/g,
    locales: ["de"],
    hint: "Capitalize noun: Sensor",
  },
  {
    id: "de-lowercase-detektor",
    re: /\bdetektor\b/g,
    locales: ["de"],
    hint: "Capitalize noun: Detektor",
  },
  {
    id: "de-outdoor-sensor",
    re: /\bOutdoor[- ]?Sensor\b/g,
    locales: ["de"],
    hint: 'Use approved override: "Außen Sensor"',
  },
];

const nordicPatterns = [
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
      // Fragment type discriminator — not user-facing copy.
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
    allHits.push(...auditFile(file));
  }
}

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
