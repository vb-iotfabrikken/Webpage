/**
 * Convert legacy in-use PNGs in public to WebP when source photos are unavailable.
 * Run: node scripts/optimize-sensor-in-use-images.mjs
 */
import { readdir, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public/images/sensors");
const sizesManifestPath = join(root, "src/data/sensorInUseImageSizes.json");

const MAX_WIDTH = 1280;
const MAX_HEIGHT = 800;

const entries = await readdir(imgDir);
const inUsePngs = entries.filter((name) => /-in-use(-\d+)?\.png$/i.test(name));

/** @type {Record<string, { width: number; height: number }>} */
const sizesManifest = {};

for (const name of inUsePngs) {
  const inputPath = join(imgDir, name);
  const outputName = name.replace(/\.png$/i, ".webp");
  const outputPath = join(imgDir, outputName);

  const size = await exportWebp(inputPath, outputPath, {
    width: MAX_WIDTH,
    height: MAX_HEIGHT,
    fit: "inside",
    quality: 80,
  });

  sizesManifest[outputName] = size;
  console.log(`${name} → ${outputName} (${size.width}×${size.height})`);
  await unlink(inputPath);
}

if (inUsePngs.length > 0) {
  const existing = await import(sizesManifestPath, { with: { type: "json" } })
    .then((m) => m.default)
    .catch(() => ({}));

  await import("node:fs/promises").then(({ writeFile }) =>
    writeFile(
      sizesManifestPath,
      `${JSON.stringify({ ...existing, ...sizesManifest }, null, 2)}\n`,
      "utf8",
    ),
  );
}

console.log(`In-use images optimised (${inUsePngs.length} files).`);
