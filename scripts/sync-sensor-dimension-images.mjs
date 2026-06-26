/**
 * Copy side-view dimension photography from `Pictures/Sensors/Dimensions/`
 * into `public/images/sensors/` with slug-based filenames.
 *
 * Run after adding or updating files in the Dimension folder.
 */
import sharp from "sharp";
import { copyFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Sensors/Dimensions");
const outDir = join(root, "public/images/sensors");

/** @type {Array<{ source: string; targets: string[] }>} */
const mappings = [
  { source: "CO2 dim.png", targets: ["co2-dimensions.png"] },
  { source: "Humidity dim.png", targets: ["humidity-dimensions.png"] },
  { source: "Cloud connector dim.png", targets: ["cloud-connector-dimensions.png"] },
  { source: "Touch dim.png", targets: ["touch-dimensions.png"] },
  { source: "Motion dim.png", targets: ["motion-dimensions.png"] },
  { source: "Mini+ PIR dim.png", targets: ["mini-plus-pir-dimensions.png"] },
  { source: "Open close dim.png", targets: ["open-close-dimensions.png"] },
  { source: "Outdoor dim.png", targets: ["outdoor-dimensions.png"] },
  {
    source: "Mini+_Full+ dim.png",
    targets: ["mini-plus-dimensions.png", "full-plus-dimensions.png"],
  },
  {
    source: "Temperature_Desk dim.png",
    targets: ["temperature-dimensions.png", "desk-dimensions.png"],
  },
  {
    source: "Water detector_rope IP30 dim.png",
    targets: ["water-detector-dimensions-compact.png", "water-rope-dimensions-compact.png"],
  },
  {
    source: "Water detector_rope IP67 dim.png",
    targets: ["water-detector-dimensions-pro.png", "water-rope-dimensions-pro.png"],
  },
  { source: "Range extender dim.png", targets: ["range-extender-dimensions.png"] },
  { source: "Bracket dim.png", targets: ["bracket-dimensions.png"] },
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

    if (/\.jpe?g$/i.test(source)) {
      await sharp(sourcePath).png().toFile(targetPath);
    } else {
      await copyFile(sourcePath, targetPath);
    }

    console.log(`${source} → ${target}`);
  }
}

console.log("Dimension images synced.");
