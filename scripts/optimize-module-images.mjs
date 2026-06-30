/**
 * Optimise module dashboard and feature screenshots to WebP.
 * Run: node scripts/optimize-module-images.mjs
 */
import { readdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public/images/modules");

/** Max display width for wide dashboard screenshots. */
const MAX_WIDTH = 1200;

const entries = await readdir(imgDir);
const pngs = entries.filter((name) => name.endsWith(".png"));

for (const name of pngs) {
  const inputPath = join(imgDir, name);
  const outputName = name.replace(/\.png$/i, ".webp");
  const outputPath = join(imgDir, outputName);

  const size = await exportWebp(inputPath, outputPath, {
    width: MAX_WIDTH,
    quality: 80,
  });

  console.log(`${name} → ${outputName} (${size.width}×${size.height})`);

  await unlink(inputPath);
}

console.log("Module images optimised.");
