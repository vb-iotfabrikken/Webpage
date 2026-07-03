/**
 * Copy side-view dimension photography from `Pictures/Sensors/Dimensions/`
 * into `public/images/sensors/` with slug-based filenames as WebP.
 *
 * Run after adding or updating files in the Dimension folder.
 */
import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Sensors/Dimensions");
const outDir = join(root, "public/images/sensors");

/** @type {Array<{ source: string; targets: string[] }>} */
const mappings = [
  { source: "CO2 dim.png", targets: ["co2-dimensions.webp"] },
  { source: "Humidity dim.png", targets: ["humidity-dimensions.webp"] },
  { source: "Cloud connector dim.png", targets: ["cloud-connector-dimensions.webp"] },
  { source: "Touch dim.png", targets: ["touch-dimensions.webp"] },
  { source: "Motion dim.png", targets: ["motion-dimensions.webp"] },
  { source: "Mini+ PIR dim.png", targets: ["mini-plus-pir-dimensions.webp"] },
  { source: "Open close dim.png", targets: ["open-close-dimensions.webp"] },
  { source: "Outdoor dim.png", targets: ["outdoor-dimensions.webp"] },
  {
    source: "Mini+_Full+ dim.png",
    targets: ["mini-plus-dimensions.webp", "full-plus-dimensions.webp"],
  },
  {
    source: "Temperature_Desk dim.png",
    targets: ["temperature-dimensions.webp", "desk-dimensions.webp"],
  },
  {
    source: "Water detector_rope IP30 dim.png",
    targets: ["water-detector-dimensions-compact.webp", "water-rope-dimensions-compact.webp"],
  },
  {
    source: "Water detector_rope IP67 dim.png",
    targets: ["water-detector-dimensions-pro.webp", "water-rope-dimensions-pro.webp"],
  },
  { source: "Range extender dim.png", targets: ["range-extender-dimensions.webp"] },
  { source: "Bracket dim.png", targets: ["bracket-dimensions.webp"] },
];

await mkdir(outDir, { recursive: true });

for (const { source, targets } of mappings) {
  const sourcePath = join(sourceDir, source);

  try {
    await access(sourcePath);
  } catch {
    console.warn(`Skip (missing): ${source}`);
    continue;
  }

  for (const target of targets) {
    const targetPath = join(outDir, target);

    await sharp(sourcePath, { failOn: "none" })
      .rotate()
      .webp({ quality: 85, effort: 6 })
      .toFile(targetPath);

    console.log(`${source} → ${target}`);
  }
}

console.log("Dimension images synced.");
