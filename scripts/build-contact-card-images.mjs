/**
 * Build 16:10 contact card images into public/images/contact/ as WebP.
 * Run: node scripts/build-contact-card-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "Pictures", "Portraits", "Team pictures");
const outDir = path.join(root, "public", "images", "contact");

const OUT_WIDTH = 800;
const OUT_HEIGHT = 500;

/** @type {{ src: string; dest: string; focal?: { x?: number; y?: number }; position?: string; width?: number; height?: number }[]} */
const files = [
  {
    src: "P1003701.jpeg",
    dest: "book-demo.webp",
    focal: { x: 0.5, y: 0.28 },
    width: 800,
    height: 400,
  },
  {
    src: "P1004710.jpeg",
    dest: "sales.webp",
    position: "attention",
  },
  {
    src: "P1004757.jpeg",
    dest: "become-partner.webp",
    position: "attention",
  },
];

await fs.mkdir(outDir, { recursive: true });

for (const file of files) {
  const input = path.join(srcDir, file.src);
  const output = path.join(outDir, file.dest);

  if (file.focal) {
    const { x = 0.5, y = 0.5 } = file.focal;
    const outW = file.width ?? OUT_WIDTH;
    const outH = file.height ?? OUT_HEIGHT;
    const meta = await sharp(input).metadata();
    const srcW = meta.width ?? outW;
    const srcH = meta.height ?? outH;
    const scale = Math.max(outW / srcW, outH / srcH);
    const scaledW = Math.round(srcW * scale);
    const scaledH = Math.round(srcH * scale);
    const left = Math.max(0, Math.min(Math.round(x * scaledW - outW / 2), scaledW - outW));
    const top = Math.max(0, Math.min(Math.round(y * scaledH - outH / 2), scaledH - outH));

    await sharp(input)
      .resize(scaledW, scaledH)
      .extract({ left, top, width: outW, height: outH })
      .webp({ quality: 82 })
      .toFile(output);
  } else {
    await sharp(input)
      .resize(OUT_WIDTH, OUT_HEIGHT, {
        fit: "cover",
        position: file.position ?? "attention",
      })
      .webp({ quality: 82 })
      .toFile(output);
  }

  console.log(`Wrote ${path.relative(root, output)}`);
}
