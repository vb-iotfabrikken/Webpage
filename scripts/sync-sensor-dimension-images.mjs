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
import { dimensionImageMappings, dimensionSourceDir } from "./lib/dimension-image-mappings.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, dimensionSourceDir);
const outDir = join(root, "public/images/sensors");

await mkdir(outDir, { recursive: true });

for (const { source, targets } of dimensionImageMappings) {
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
