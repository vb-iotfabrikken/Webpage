/**
 * Flags ASCII hyphens used as dashes in user-facing string literals.
 * Compound hyphens (plug-and-play) and known integration strings are allowlisted.
 *
 * Run: node scripts/audit-hyphen-dashes.mjs
 */
import fs from "node:fs";
import path from "node:path";

const roots = ["src/data", "src/components", "src/pages", "src/lib/roi"];
const exts = new Set([".ts", ".astro"]);

/** Substrings that legitimately use " - " and must not be em dashes. */
const ALLOWLIST_SUBSTRINGS = [
  "Website - ",
];

/** Suffix elision in da/de/sv prose (e.g. "eller -zone", "og -version"). */
const SUFFIX_ELISION = /\s-\s[a-zæøåäöüß-]+(?:["'`]|$)/i;

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

function stripComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/[^\n]*/g, "");
}

function isAllowlisted(inner) {
  if (ALLOWLIST_SUBSTRINGS.some((s) => inner.includes(s))) return true;
  if (SUFFIX_ELISION.test(inner)) return true;
  // PDF/code glyph normalisation — intentional ASCII hyphen output.
  if (inner.trim() === "-") return true;
  if (inner.trim() === " - ") return true;
  // Template/code fragments (CSS calc, arithmetic).
  if (/\$\{/.test(inner)) return true;
  if (/^calc\(/.test(inner.trim())) return true;
  return false;
}

const hits = [];

for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const norm = file.replace(/\\/g, "/");
    const text = stripComments(fs.readFileSync(file, "utf8"));
    const re = /(["'])(?:(?:\\.|(?!\1)[\s\S])*?)\1/g;
    let m;
    while ((m = re.exec(text))) {
      const inner = m[2];
      if (!/\s-\s/.test(inner)) continue;
      if (isAllowlisted(inner)) continue;
      hits.push({
        file: norm,
        snippet: inner.slice(0, 140),
      });
    }
  }
}

if (hits.length === 0) {
  console.log("No hyphen-as-em-dash violations found.");
  process.exit(0);
}

console.error(`Hyphen-as-em-dash violations: ${hits.length}`);
for (const h of hits) {
  console.error(`\n${h.file}\n  ${h.snippet}${h.snippet.length >= 140 ? "…" : ""}`);
}
process.exit(1);
