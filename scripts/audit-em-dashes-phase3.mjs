import fs from "node:fs";
import path from "node:path";

const skip = new Set([
  "src/data/i18n/indoorClimate.ts",
  "src/data/i18n/spaceManagement.ts",
  "src/data/i18n/preservation.ts",
  "src/data/i18n/lockersDoors.ts",
  "src/data/i18n/waterDetection.ts",
  "src/data/i18n/pushButtons.ts",
  "src/data/i18n/usageCleaning.ts",
  "src/data/content/industries.ts",
  "src/data/content/industryContent.i18n.ts",
  "src/data/content/platform.i18n.ts",
  "src/data/content/modules.ts",
  "src/data/content/modules.i18n.ts",
  "src/data/library/catalog.ts",
]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (p.endsWith(".ts")) out.push(p);
  }
  return out;
}

const hits = [];
let total = 0;
for (const root of ["src/data", "src/lib/roi"]) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const norm = file.replace(/\\/g, "/");
    if (skip.has(norm)) continue;
    const text = fs.readFileSync(file, "utf8");
    const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
    let m;
    while ((m = re.exec(text))) {
      const inner = m[2];
      const count = (inner.match(/—/g) || []).length;
      if (count) {
        total += count;
        if (count >= 2) hits.push({ file: norm, count, snippet: inner.slice(0, 120) });
        else hits.push({ file: norm, count: 1, snippet: inner.slice(0, 120) });
      }
    }
  }
}

console.log(`Phase 3 scope — em dashes in strings: ${total}`);
console.log(`Strings with 2+ dashes: ${hits.filter((h) => h.count >= 2).length}`);
for (const h of hits.filter((x) => x.count >= 2)) {
  console.log(`\n${h.file} (${h.count})\n  ${h.snippet}…`);
}
if (hits.filter((h) => h.count === 1).length) {
  console.log(`\nSingle-dash strings remaining: ${hits.filter((h) => h.count === 1).length}`);
  for (const h of hits.filter((x) => x.count === 1).slice(0, 20)) {
    console.log(`  ${h.file}: ${h.snippet.slice(0, 80)}…`);
  }
}
