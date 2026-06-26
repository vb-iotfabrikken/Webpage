/**
 * Copy in-context sensor photography from `Pictures/Sensors/In use/`
 * into `public/images/sensors/` with slug-based filenames.
 *
 * Each asset is focal-cropped to 16:10 and exported close to gallery display
 * size (1280×800 max — 2× retina for the max-w-3xl two-column layout). Sharp
 * performs the downscale with Lanczos3; the browser should not receive 2K+ files
 * that it must shrink again. Never upscaled. Writes `sensorInUseImageSizes.json`.
 *
 * Run after adding or updating files in the In use folder.
 */
import sharp from "sharp";
import { mkdir, access, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "Pictures/Sensors/In use");
const outDir = join(root, "public/images/sensors");
const sizesManifestPath = join(root, "src/data/sensorInUseImageSizes.json");

/** Max export — matches ~384px gallery tile × 2 (retina) + single-column headroom. */
const MAX_OUTPUT_SIZE = [1280, 800];
const [MAX_OUTPUT_WIDTH, MAX_OUTPUT_HEIGHT] = MAX_OUTPUT_SIZE;
const TARGET_AR = 16 / 10;

/**
 * @param {string} sourcePath
 * @param {string} targetPath
 * @param {readonly [number, number]} [focal]
 * @param {number} [zoom] Tighten crop (0–1) to frame subjects; recentres with focal.
 * @param {"cover" | "contain"} [fit] `contain` fits the full source in the 16:10 frame.
 * @returns {Promise<{ width: number; height: number }>}
 */
async function cropToLandscape(
  sourcePath,
  targetPath,
  focal = [0.5, 0.5],
  zoom = 1,
  fit = "cover",
) {
  const image = sharp(sourcePath, { failOn: "none" });
  const { width, height } = await image.metadata();

  if (!width || !height) {
    throw new Error(`Missing dimensions: ${sourcePath}`);
  }

  if (fit === "contain") {
    const scale = Math.min(MAX_OUTPUT_WIDTH / width, MAX_OUTPUT_HEIGHT / height);
    const fittedWidth = Math.round(width * scale);
    const fittedHeight = Math.round(height * scale);
    const padLeft = Math.floor((MAX_OUTPUT_WIDTH - fittedWidth) / 2);
    const padTop = Math.floor((MAX_OUTPUT_HEIGHT - fittedHeight) / 2);

    await image
      .resize(fittedWidth, fittedHeight, {
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true,
      })
      .extend({
        top: padTop,
        bottom: MAX_OUTPUT_HEIGHT - fittedHeight - padTop,
        left: padLeft,
        right: MAX_OUTPUT_WIDTH - fittedWidth - padLeft,
        background: { r: 250, g: 250, b: 249 },
      })
      .png({ compressionLevel: 4 })
      .toFile(targetPath);

    return { width: MAX_OUTPUT_WIDTH, height: MAX_OUTPUT_HEIGHT };
  }

  const [focalX, focalY] = focal;
  const sourceAR = width / height;
  let extractWidth;
  let extractHeight;
  let left;
  let top;

  if (sourceAR > TARGET_AR) {
    extractHeight = height;
    extractWidth = Math.round(height * TARGET_AR);
    left = Math.round((width - extractWidth) * focalX);
    top = 0;
  } else {
    extractWidth = width;
    extractHeight = Math.round(width / TARGET_AR);
    left = 0;
    top = Math.round((height - extractHeight) * focalY);
  }

  if (zoom > 0 && zoom < 1) {
    extractWidth = Math.max(1, Math.round(extractWidth * zoom));
    extractHeight = Math.max(1, Math.round(extractHeight * zoom));
    left = Math.round((width - extractWidth) * focalX);
    top = Math.round((height - extractHeight) * focalY);
  }

  left = Math.max(0, Math.min(left, width - extractWidth));
  top = Math.max(0, Math.min(top, height - extractHeight));

  let outWidth = extractWidth;
  let outHeight = extractHeight;

  if (outWidth > MAX_OUTPUT_WIDTH || outHeight > MAX_OUTPUT_HEIGHT) {
    const scale = Math.min(
      MAX_OUTPUT_WIDTH / outWidth,
      MAX_OUTPUT_HEIGHT / outHeight,
    );
    outWidth = Math.round(outWidth * scale);
    outHeight = Math.round(outHeight * scale);
  }

  let pipeline = image.extract({
    left,
    top,
    width: extractWidth,
    height: extractHeight,
  });

  const needsResize = outWidth !== extractWidth || outHeight !== extractHeight;
  if (needsResize) {
    pipeline = pipeline.resize(outWidth, outHeight, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    });
  }

  await pipeline.png({ compressionLevel: 4 }).toFile(targetPath);

  return { width: outWidth, height: outHeight };
}

/**
 * @type {Array<{ source: string; target: string; focal?: readonly [number, number]; zoom?: number; fit?: "cover" | "contain" }>}
 * Two in-use images per slug (`{slug}-in-use.png`, `{slug}-in-use-2.png`).
 * Focal values match `inUseObjectPosition` in `sensorProductImages.ts`.
 */
const mappings = [
  { source: "CO2_use.png", target: "co2-in-use.png", focal: [0.5, 0.45] },
  { source: "CO2_use 2.png", target: "co2-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Mini+_Full+_use.png", target: "full-plus-in-use.png", focal: [0.68, 0.4] },
  { source: "Mini+_Full+_use 2.png", target: "full-plus-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Humidity_use 3.png", target: "humidity-in-use.png", focal: [0.5, 0.45] },
  { source: "Humidity_use 2.png", target: "humidity-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Mini+_use 3.jpeg", target: "mini-plus-in-use.png", focal: [0.72, 0.42] },
  { source: "Mini+_Full+_use 2.png", target: "mini-plus-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Mini+ PIR use.png", target: "mini-plus-pir-in-use.png", focal: [0.5, 0] },
  { source: "Mini+ PIR use 2.png", target: "mini-plus-pir-in-use-2.png", focal: [0.55, 0.5] },
  { source: "Outdoor_use 3.png", target: "outdoor-in-use.png", focal: [0.58, 0.48] },
  { source: "Outdoor_use 2.png", target: "outdoor-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Temp_use 3.png", target: "temperature-in-use.png", focal: [0.5, 0.45] },
  { source: "Temp_use.png", target: "temperature-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Desk_use 3.png", target: "desk-in-use.png", focal: [0.5, 0.45] },
  { source: "Desk_use 2.jpg", target: "desk-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Motion_use.png", target: "motion-in-use.png", focal: [0.5, 0.45] },
  { source: "Motion_use 2.png", target: "motion-in-use-2.png", focal: [0.5, 0] },
  { source: "Open close_use.png", target: "open-close-in-use.png", focal: [0.5, 0.45] },
  { source: "Open close_use 2.png", target: "open-close-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Touch_use_EN.png", target: "touch-in-use.png", focal: [0.5, 0.45] },
  { source: "Touch_use 3.jpg", target: "touch-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Water detector_use.png", target: "water-detector-in-use.png", focal: [0.5, 0.45] },
  { source: "Water detector_use 2.png", target: "water-detector-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Water rope_use.png", target: "water-rope-in-use.png", focal: [0.5, 0] },
  { source: "Water rope_use 2.png", target: "water-rope-in-use-2.png", focal: [0.5, 0.5] },
  { source: "Cloud connector_use.jpg", target: "cloud-connector-in-use.png", focal: [0.5, 0.45] },
  { source: "Cloud connector_use 4.png", target: "cloud-connector-in-use-2.png", focal: [0.5, 0] },
  { source: "Range extender_use.png", target: "range-extender-and-bracket-in-use.png", focal: [0.5, 0.45] },
  { source: "Bracket_use 2.png", target: "range-extender-and-bracket-in-use-2.png", focal: [0.5, 0.5] },
];

await mkdir(outDir, { recursive: true });

/** @type {Record<string, { width: number; height: number }>} */
const sizesManifest = {};

for (const { source, target, focal, zoom, fit } of mappings) {
  const sourcePath = join(sourceDir, source);
  const targetPath = join(outDir, target);

  try {
    await access(sourcePath);
  } catch {
    console.warn(`Skip (missing): ${source}`);
    continue;
  }

  const size = await cropToLandscape(
    sourcePath,
    targetPath,
    focal,
    zoom ?? 1,
    fit ?? "cover",
  );
  sizesManifest[target] = size;
  console.log(`${source} → ${target} (${size.width}×${size.height})`);
}

await writeFile(
  sizesManifestPath,
  `${JSON.stringify(sizesManifest, null, 2)}\n`,
  "utf8",
);

console.log(`Wrote ${sizesManifestPath}`);
console.log("In-use images synced.");
