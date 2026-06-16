/**
 * Copy product sheet PDFs from Productsheets/{EN,DE,DK} into public/.
 * Run: node scripts/sync-product-sheets.mjs
 *
 * Served layout:
 *   English (canonical):  public/downloads/product-sheets/{slug}.pdf
 *   German:               public/downloads/product-sheets/de/{slug}.pdf
 *   Danish:               public/downloads/product-sheets/da/{slug}.pdf
 *
 * Swedish sheets do not exist yet, so /sv/ pages fall back to the English PDF.
 * Source filenames carry a language-specific number prefix, so each sheet is
 * matched by its descriptive core (e.g. "Water detector") rather than number.
 */
import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const baseOutDir = path.join("public", "downloads", "product-sheets");

/** Served slug → descriptive core shared across all language filenames. */
const sheets = [
  ["temperature", "Temperature sensor"],
  ["full-plus", "Full+ sensor"],
  ["humidity", "Humidity sensor"],
  ["range-extender-and-bracket", "BracketRange extender sensor"],
  ["touch", "Touch sensor"],
  ["co2", "CO2 sensor"],
  ["mini-plus-pir", "Mini+ PIR sensor"],
  ["motion", "Motion sensor"],
  ["water-detector", "Water detector"],
  ["open-close", "OpenClose sensor"],
  ["outdoor", "Outdoor sensor"],
  ["mini-plus", "Mini+ sensor"],
  ["desk", "Desk sensor"],
  ["cloud-connector", "Cloud connector"],
  ["water-rope", "Water rope sensor"],
];

/** Locale → { source dir under Productsheets/, filename language tag, output subdir }. */
const languages = [
  { code: "en", dir: "EN", tag: "EN", outDir: baseOutDir },
  { code: "de", dir: "DE", tag: "DE", outDir: path.join(baseOutDir, "de") },
  { code: "da", dir: "DK", tag: "DK", outDir: path.join(baseOutDir, "da") },
];

let copied = 0;

for (const lang of languages) {
  const sourceDir = path.join("Productsheets", lang.dir);
  let entries;
  try {
    entries = await readdir(sourceDir);
  } catch {
    console.warn(`Skipping ${lang.code}: ${sourceDir} not found.`);
    continue;
  }
  await mkdir(lang.outDir, { recursive: true });

  for (const [slug, core] of sheets) {
    // Match "<n>_<core> <TAG> (...).pdf" — the space before the tag prevents
    // "Mini+ sensor" from matching "Mini+ PIR sensor".
    const needle = `_${core} ${lang.tag} `;
    const match = entries.find((name) => name.includes(needle));
    if (!match) {
      console.warn(`  [${lang.code}] missing sheet for "${slug}" (core "${core}")`);
      continue;
    }
    await copyFile(path.join(sourceDir, match), path.join(lang.outDir, `${slug}.pdf`));
    copied++;
  }
  console.log(`Synced ${lang.code} sheets from ${sourceDir}`);
}

console.log(`Done — ${copied} product sheets copied.`);
