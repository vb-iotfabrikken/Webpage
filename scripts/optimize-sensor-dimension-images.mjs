/**
 * Convert existing dimension PNGs in public to WebP when sources are already synced.
 * Run: node scripts/optimize-sensor-dimension-images.mjs
 */
import { readdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public/images/sensors");

const entries = await readdir(imgDir);
const dimensionPngs = entries.filter((name) => /-dimensions.*\.png$/i.test(name));

for (const name of dimensionPngs) {
  const inputPath = join(imgDir, name);
  const outputName = name.replace(/\.png$/i, ".webp");
  const outputPath = join(imgDir, outputName);

  const size = await exportWebp(inputPath, outputPath, { quality: 85 });
  console.log(`${name} → ${outputName} (${size.width}×${size.height})`);
  await unlink(inputPath);
}

console.log(`Dimension images optimised (${dimensionPngs.length} files).`);
