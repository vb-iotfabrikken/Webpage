/**
 * Estimate horizontal focus point for portrait cropping (upper-body region).
 * Run: node scripts/analyze-portrait-focus.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/team");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".webp")).sort();

for (const file of files) {
  const { data, info } = await sharp(path.join(dir, file))
    .resize(300)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const yEnd = Math.floor(height * 0.72);
  let sumX = 0;
  let sumW = 0;

  for (let y = 0; y < yEnd; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const sat = Math.max(r, g, b) - Math.min(r, g, b);
      const weight = lum * 0.55 + sat * 1.8;
      sumX += x * weight;
      sumW += weight;
    }
  }

  const cx = sumW > 0 ? sumX / sumW : width / 2;
  const pct = Math.round((cx / width) * 100);
  const clamped = Math.min(62, Math.max(32, pct));
  console.log(`${file}\tcentroid=${pct}%\tsuggest=${clamped}% top`);
}
