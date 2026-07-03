/**
 * Convert flat sensor product PNGs (catalogue heroes, not in-use/dimensions)
 * to WebP. Run after adding new product shots.
 *
 * Run: node scripts/optimize-sensor-product-images.mjs
 */
import { readdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public/images/sensors");

const SKIP_PATTERN =
  /-in-use(-\d+)?\.png$|-dimensions.*\.png$/i;

const MAX_SIZE = 1080;

const entries = await readdir(imgDir);
const productPngs = entries.filter(
  (name) => name.endsWith(".png") && !SKIP_PATTERN.test(name),
);

for (const name of productPngs) {
  const inputPath = join(imgDir, name);
  const outputName = name.replace(/\.png$/i, ".webp");
  const outputPath = join(imgDir, outputName);

  const size = await exportWebp(inputPath, outputPath, {
    width: MAX_SIZE,
    height: MAX_SIZE,
    fit: "inside",
    quality: 85,
  });

  console.log(`${name} → ${outputName} (${size.width}×${size.height})`);
  await unlink(inputPath);
}

console.log(`Product images optimised (${productPngs.length} files).`);
