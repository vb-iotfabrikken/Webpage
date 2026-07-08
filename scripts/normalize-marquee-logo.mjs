/**
 * Normalise a customer logo to the marquee canvas: 600×200 PNG, transparent
 * background, logo centred with contain fit (matches public/logos/*).
 *
 * Usage: node scripts/normalize-marquee-logo.mjs <input> <output.png>
 */
import sharp from "sharp";
import { resolve } from "node:path";

const [inputArg, outputArg] = process.argv.slice(2);
if (!inputArg || !outputArg) {
  console.error("Usage: node scripts/normalize-marquee-logo.mjs <input> <output.png>");
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg);

await sharp(inputPath, { failOn: "none" })
  .resize(600, 200, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    kernel: sharp.kernel.lanczos3,
  })
  .png()
  .toFile(outputPath);

const meta = await sharp(outputPath).metadata();
console.log(`Wrote ${outputPath} (${meta.width}×${meta.height})`);
