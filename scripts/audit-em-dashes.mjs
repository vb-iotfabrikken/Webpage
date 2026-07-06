import fs from "node:fs";
import path from "node:path";

const roots = ["src/data", "src/pages", "src/components"];
const exts = new Set([".ts", ".astro"]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

const hits = [];
let total = 0;

for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const text = fs.readFileSync(file, "utf8");
    const matches = text.match(/—/g);
    if (matches) total += matches.length;
    const re = /["'`]([^"'`]*—[^"'`]*—[^"'`]*)["'`]/g;
    let m;
    while ((m = re.exec(text))) {
      hits.push({ file, snippet: m[1].slice(0, 140) });
    }
  }
}

console.log(`Total em dashes: ${total}`);
console.log(`Strings with 2+ dashes: ${hits.length}`);
for (const h of hits) {
  console.log(`\n${h.file}\n  ${h.snippet}${h.snippet.length >= 140 ? "…" : ""}`);
}
