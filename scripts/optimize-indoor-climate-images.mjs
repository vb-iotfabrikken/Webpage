/**
 * Optimise indoor-climate module photos from Pictures/ to public WebP.
 * Run: node scripts/optimize-indoor-climate-images.mjs
 */
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp, exportWebpFocalCrop } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Modules/Indoor climate");
const outDir = join(root, "public/images/modules");

/** @type {Array<{ input: string; output: string; width: number; crop?: { aspect: number; focal: [number, number]; zoom?: number } }>} */
const SOURCES = [
  {
    input: "Occupancy_P1003057.jpg",
    output: "indoor-climate-hero-occupancy.webp",
    width: 1200,
    crop: { aspect: 1200 / 576, focal: [0.5, 0.45] },
  },
  {
    input: "Indoor climate dashboard.png",
    output: "indoor-climate-dashboard.webp",
    width: 1200,
    crop: { aspect: 1200 / 869, focal: [0.5, 0.35] },
  },
  {
    input: "EPBD_Rapport_2026-04-02_2026-07-02_pdf.png",
    output: "indoor-climate-feature-epbd-report.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.4] },
  },
  {
    input: "Energy optimisation.png",
    output: "indoor-climate-feature-energy-optimisation.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.55, 0.4] },
  },
  {
    input: "Mould risk.png",
    output: "indoor-climate-feature-mould-risk.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.52, 0.38] },
  },
  {
    input: "Thresholds (Scenarios).png",
    output: "indoor-climate-feature-scenarios.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.38] },
  },
  {
    input: "Reports.jpeg",
    output: "indoor-climate-feature-legacy-report.webp",
    width: 1200,
    crop: { aspect: 16 / 10, focal: [0.5, 0.4] },
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

console.log("\nDimensions for indoorClimateImages.ts:");
console.log(JSON.stringify(dimensions, null, 2));
console.log("\nIndoor climate module images optimised.");
