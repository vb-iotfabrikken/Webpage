/**
 * Phase 3 em dash reductions — files outside Phase 1/2 module content.
 * Run: node scripts/fix-em-dashes-phase3.mjs
 */
import fs from "node:fs";
import path from "node:path";

/** Phase 1/2 — handled separately */
const skipFiles = new Set([
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
  "src/pages/[lang]/compare/index.astro",
]);

const roots = ["src/data", "src/lib/roi"];
const exts = new Set([".ts"]);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

/** Replace em dash inside string literals only */
function fixStrings(text) {
  return text.replace(
    /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g,
    (full, quote, inner) => {
      if (!inner.includes("—")) return full;
      let s = inner;

      // Title / brand separators
      s = s.replace(/IoT Fabrikken — /g, "IoT Fabrikken: ");
      s = s.replace(/RoomAlyzer — /g, "RoomAlyzer: ");
      s = s.replace(/ — \| /g, ": | ");

      // Trailing dash on headings
      s = s.replace(/ —$/g, "");

      // Common conjunction patterns
      s = s.replace(/ — and /g, ", and ");
      s = s.replace(/ — og /g, ", og ");
      s = s.replace(/ — und /g, ", und ");
      s = s.replace(/ — och /g, ", och ");
      s = s.replace(/ — or /g, ", or ");
      s = s.replace(/ — eller /g, ", eller ");
      s = s.replace(/ — oder /g, ", oder ");

      // Negation / contrast
      s = s.replace(/ — not /g, ", not ");
      s = s.replace(/ — ikke /g, ", ikke ");
      s = s.replace(/ — nicht /g, ", nicht ");
      s = s.replace(/ — inte /g, ", inte ");
      s = s.replace(/ — no /g, ", no ");
      s = s.replace(/ — kein /g, ", kein ");
      s = s.replace(/ — ingen /g, ", ingen ");

      // Result / purpose clauses
      s = s.replace(/ — so /g, ", so ");
      s = s.replace(/ — så /g, ", så ");
      s = s.replace(/ — damit /g, ", damit ");
      s = s.replace(/ — sodass /g, ", sodass ");

      // "without" clauses
      s = s.replace(/ — without /g, ", without ");
      s = s.replace(/ — uden /g, ", uden ");
      s = s.replace(/ — ohne /g, ", ohne ");
      s = s.replace(/ — utan /g, ", utan ");

      // "with" / "from" / "for"
      s = s.replace(/ — with /g, ", with ");
      s = s.replace(/ — med /g, ", med ");
      s = s.replace(/ — mit /g, ", mit ");
      s = s.replace(/ — from /g, ", from ");
      s = s.replace(/ — fra /g, ", fra ");
      s = s.replace(/ — von /g, ", von ");
      s = s.replace(/ — från /g, ", från ");
      s = s.replace(/ — for /g, ", for ");
      s = s.replace(/ — für /g, ", für ");
      s = s.replace(/ — til /g, ", til ");
      s = s.replace(/ — till /g, ", till ");

      // "everything" / "all" trailing lists
      s = s.replace(/ — everything /g, ": everything ");
      s = s.replace(/ — alt, /g, ": alt, ");
      s = s.replace(/ — alles, /g, ": alles, ");
      s = s.replace(/ — allt /g, ": allt ");

      // Plug and play / similar taglines
      s = s.replace(/ — plug and play/g, ", plug and play");
      s = s.replace(/ — Plug-and-Play/g, ", Plug-and-Play");

      // "in-house" follow-ups
      s = s.replace(/in-house — /g, "in-house: ");

      // D-Label / product labels
      s = s.replace(/D-Label — /g, "D-Label: ");
      s = s.replace(/D-mærke — /g, "D-mærke: ");
      s = s.replace(/D-Label — /g, "D-Label: ");

      // Section headings with em dash → colon
      s = s.replace(/ — ([A-Z])/g, ": $1");

      // Remaining mid-sentence dashes → comma (conservative: before lowercase)
      s = s.replace(/ — ([a-zæøåäöüß])/g, ", $1");

      // Paired aside: last resort for remaining double dashes
      s = s.replace(/ — ([^—\n]{3,80}) — /g, " ($1) ");

      // Clean double spaces
      s = s.replace(/  +/g, " ");

      return quote + s + quote;
    },
  );
}

let changed = 0;
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const norm = file.replace(/\\/g, "/");
    if (skipFiles.has(norm)) continue;
    const before = fs.readFileSync(file, "utf8");
    const after = fixStrings(before);
    if (after !== before) {
      fs.writeFileSync(file, after, "utf8");
      changed++;
      console.log(norm);
    }
  }
}
console.log(`\nUpdated ${changed} files`);
