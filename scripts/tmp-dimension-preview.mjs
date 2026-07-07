import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "tmp/dimension-preview");
mkdirSync(outDir, { recursive: true });

for (const hx of [61.8, 62.0, 62.2, 62.4, 62.6, 62.8]) {
  const imagePath = join(root, "public/images/sensors/open-close-dimensions-pro.webp");
  const meta = await sharp(imagePath).metadata();
  const width = meta.width ?? 1080;
  const height = meta.height ?? 1080;
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <text x="49.95" y="63.01" text-anchor="middle" dominant-baseline="central" fill="#0a1f44" font-size="2.35" font-weight="600" font-family="Inter, sans-serif">W23 mm</text>
    <text x="${hx}" y="38.98" dy="0.25" text-anchor="middle" dominant-baseline="central" fill="#0a1f44" font-size="2.35" font-weight="600" font-family="Inter, sans-serif">H38 mm</text>
  </svg>`;
  const out = await sharp(imagePath).composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).png().toBuffer();
  writeFileSync(join(outDir, `large-h-${String(hx).replace(".", "_")}.png`), out);
}

console.log("done");
