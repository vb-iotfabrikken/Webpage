/**
 * Optimise preservation module photos from Pictures/ to public WebP.
 * Run: node scripts/optimize-preservation-images.mjs
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp, exportWebpFocalCrop } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Modules/Preservation");
const outDir = join(root, "public/images/modules");

/** @type {Array<{ input: string; output: string; width: number; crop?: { aspect: number; focal: [number, number]; zoom?: number } }>} */
const SOURCES = [
  { input: "../Indoor climate/Archive sensor zoomed out.jpeg", output: "preservation-hero-archive.webp", width: 960 },
  { input: "Book.png", output: "preservation-hero-manuscript.webp", width: 960 },
  {
    input: "organ.jpeg",
    output: "preservation-capabilities-context.webp",
    width: 1200,
    crop: { aspect: 1200 / 869, focal: [0.55, 0.35] },
  },
  {
    input: "Mould risk.png",
    output: "preservation-feature-mould-risk.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.52, 0.38] },
  },
  {
    input: "Bizot green.png",
    output: "preservation-feature-bizot-green.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.58, 0.42] },
  },
  {
    input: "Ashrae.png",
    output: "preservation-feature-ashrae.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.38] },
  },
  {
    input: "Preservation.png",
    output: "preservation-feature-preservation-index.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.55, 0.45] },
  },
  {
    input: "Fluctiuation dashboard.png",
    output: "preservation-feature-fluctuations.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.35] },
  },
  {
    input: "Energy optimisation.png",
    output: "preservation-feature-heat-ventilation.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.55, 0.4] },
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

console.log("\nDimensions for preservationImages.ts:");
console.log(JSON.stringify(dimensions, null, 2));
console.log("\nPreservation module images optimised.");
