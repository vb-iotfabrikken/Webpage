/**
 * Optimise water-detection module photos from Pictures/ to public WebP.
 * Run: node scripts/optimize-water-detection-images.mjs
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp, exportWebpFocalCrop } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Modules/Water detection");
const outDir = join(root, "public/images/modules");

/** @type {Array<{ input: string; output: string; width: number; crop?: { aspect: number; focal: [number, number]; zoom?: number } }>} */
const SOURCES = [
  { input: "HVAC.png", output: "water-detection-spotlight-compact.webp", width: 960 },
  { input: "Pipes.png", output: "water-detection-spotlight-pro.webp", width: 960 },
  { input: "SMS Alert EN.jpeg", output: "water-detection-smart-notifications.webp", width: 1200 },
  { input: "WD 2 in use .png", output: "water-detection-visual-overview.webp", width: 1200 },
  {
    input: "WD 3 instant alert.png",
    output: "water-detection-incident-log.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.42], zoom: 0.68 },
  },
  {
    input: "Alarm_WD_png-1024x750EN.jpg",
    output: "water-detection-alarm-escalation.webp",
    width: 1200,
  },
  {
    input: "plug and play 2.jpeg",
    output: "water-detection-plug-and-play.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.5] },
  },
  {
    input: "Water detection dashboard.png",
    output: "water-detection-capabilities-context.webp",
    width: 1200,
    // Fixed capabilities intro frame — same aspect as indoor-climate (1200×869).
    crop: { aspect: 1200 / 869, focal: [0.5, 0] },
  },
];

await mkdir(outDir, { recursive: true });

/** @type {Record<string, { width: number; height: number }>} */
const dimensions = {};

for (const { input, output, width, crop } of SOURCES) {
  const inputPath = join(sourceDir, input);
  const outputPath = join(outDir, output);
  const size = crop
    ? await exportWebpFocalCrop(inputPath, outputPath, {
        width,
        aspect: crop.aspect,
        focal: crop.focal,
        zoom: crop.zoom,
      })
    : await exportWebp(inputPath, outputPath, { width, quality: 80 });
  dimensions[output] = size;
  console.log(`${input} → ${output} (${size.width}×${size.height})`);
}

console.log("\nDimensions for waterDetectionImages.ts:");
console.log(JSON.stringify(dimensions, null, 2));
console.log("\nWater detection module images optimised.");
