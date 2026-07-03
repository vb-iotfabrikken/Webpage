/**
 * Build optimised sensor-finder teaser images for the homepage cards.
 * Run: node scripts/optimize-sensor-finder-images.mjs
 */
import { access, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportAspectVariants } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const inDir = join(root, "public/images/sensor-finder");
const outDir = join(root, "public/images/sensor-finder");
const manifestPath = join(root, "src/data/sensorFinderImages.json");

const WIDTHS = [480, 720, 960];

/** @type {Array<{ slug: string; source: string; focal?: readonly [number, number] }>} */
const cards = [
  { slug: "offices", source: "offices.png", focal: [0.5, 0.45] },
  { slug: "churches", source: "property-management.png", focal: [0.5, 0.4] },
  { slug: "museums-galleries", source: "municipalities.png", focal: [0.5, 0.45] },
  { slug: "municipalities", source: "schools.png", focal: [0.5, 0.45] },
];

/** @type {Record<string, { image: string; width: number; height: number; srcSet: { width: number; url: string }[] }>} */
const manifest = {};

for (const card of cards) {
  const inputPath = join(inDir, card.source);

  try {
    await access(inputPath);
  } catch {
    console.warn(`Skip (missing): ${card.source}`);
    continue;
  }

  const baseName = card.slug;
  const srcSet = await exportAspectVariants(
    inputPath,
    outDir,
    "/images/sensor-finder",
    baseName,
    WIDTHS,
    { focal: card.focal },
  );

  const primary = srcSet[srcSet.length - 1];
  manifest[card.slug] = {
    image: `/images/sensor-finder/${baseName}.webp`,
    width: primary.width,
    height: primary.height,
    srcSet: srcSet.map(({ width, url }) => ({ width, url })),
  };

  console.log(`${card.source} → ${baseName}.webp (+ ${WIDTHS.join(", ")}w variants)`);

  try {
    await unlink(inputPath);
    console.log(`  removed source PNG: ${card.source}`);
  } catch {
    // Source may already be gone.
  }
}

await import("node:fs/promises").then(({ writeFile }) =>
  writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
);

console.log(`Wrote ${manifestPath}`);
