/**
 * Generate favicon PNGs from Favicon.png at the repo root.
 * Run: npm run generate-favicon
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = join(root, "Favicon.png");
const publicDir = join(root, "public");

/** @param {number} size */
async function exportBadgePng(size, outputPath) {
  await sharp(sourcePath, { failOn: "none" })
    .rotate()
    .resize(size, size, {
      fit: "cover",
      kernel: sharp.kernel.lanczos3,
    })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Wrote ${outputPath} (${size}×${size})`);
}

await exportBadgePng(32, join(publicDir, "favicon-32.png"));
await exportBadgePng(180, join(publicDir, "apple-touch-icon.png"));
