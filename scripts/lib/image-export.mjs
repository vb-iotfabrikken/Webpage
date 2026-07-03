/**
 * Shared Sharp helpers for offline image optimization scripts.
 */
import sharp from "sharp";

export const WEBP_QUALITY = 80;
export const WEBP_QUALITY_CRISP = 85;

/**
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {{ width?: number; height?: number; quality?: number; fit?: import("sharp").FitEnum[keyof import("sharp").FitEnum] }} [options]
 */
export async function exportWebp(inputPath, outputPath, options = {}) {
  const { width, height, quality = WEBP_QUALITY, fit = "inside" } = options;
  let pipeline = sharp(inputPath, { failOn: "none" }).rotate();

  if (width || height) {
    pipeline = pipeline.resize(width, height, {
      fit,
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality, effort: 6 }).toFile(outputPath);
  const meta = await sharp(outputPath).metadata();
  return { width: meta.width ?? 0, height: meta.height ?? 0 };
}

/**
 * Export cropped 4:3 WebP variants at multiple widths.
 *
 * @param {string} inputPath
 * @param {string} outDir absolute output directory
 * @param {string} publicBase site-relative URL prefix (e.g. `/images/sensor-finder`)
 * @param {string} baseName filename without extension
 * @param {number[]} widths
 * @param {{ quality?: number; focal?: readonly [number, number] }} [options]
 * @returns {Promise<Array<{ width: number; url: string; height: number }>>}
 */
export async function exportAspectVariants(
  inputPath,
  outDir,
  publicBase,
  baseName,
  widths,
  options = {},
) {
  const { quality = WEBP_QUALITY, focal = [0.5, 0.5] } = options;
  const [focalX, focalY] = focal;
  const targetAR = 4 / 3;
  const image = sharp(inputPath, { failOn: "none" });
  const { width, height } = await image.metadata();

  if (!width || !height) {
    throw new Error(`Missing dimensions: ${inputPath}`);
  }

  const sourceAR = width / height;
  let extractWidth;
  let extractHeight;
  let left;
  let top;

  if (sourceAR > targetAR) {
    extractHeight = height;
    extractWidth = Math.round(height * targetAR);
    left = Math.round((width - extractWidth) * focalX);
    top = 0;
  } else {
    extractWidth = width;
    extractHeight = Math.round(width / targetAR);
    left = 0;
    top = Math.round((height - extractHeight) * focalY);
  }

  left = Math.max(0, Math.min(left, width - extractWidth));
  top = Math.max(0, Math.min(top, height - extractHeight));

  const cropped = image.extract({
    left,
    top,
    width: extractWidth,
    height: extractHeight,
  });

  /** @type {Array<{ width: number; url: string; height: number }>} */
  const variants = [];

  for (const w of widths) {
    const h = Math.round(w / targetAR);
    const filename = `${baseName}-${w}.webp`;
    const outputPath = `${outDir}/${filename}`;

    await cropped
      .clone()
      .resize(w, h, {
        fit: "fill",
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true,
      })
      .webp({ quality, effort: 6 })
      .toFile(outputPath);

    variants.push({ width: w, url: `${publicBase}/${filename}`, height: h });
  }

  const primaryWidth = Math.max(...widths);
  const primaryHeight = Math.round(primaryWidth / targetAR);
  const primaryFilename = `${baseName}.webp`;
  const primaryPath = `${outDir}/${primaryFilename}`;

  await cropped
    .clone()
    .resize(primaryWidth, primaryHeight, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 6 })
    .toFile(primaryPath);

  return variants;
}

/**
 * Export a focal crop at a fixed aspect ratio, then resize to target width.
 *
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {{ width: number; aspect: number; focal?: readonly [number, number]; quality?: number; zoom?: number }} options
 */
export async function exportWebpFocalCrop(inputPath, outputPath, options) {
  const { width: targetWidth, aspect, focal = [0.5, 0.5], quality = WEBP_QUALITY, zoom = 1 } = options;
  const [focalX, focalY] = focal;
  const zoomFactor = Math.min(1, Math.max(0.1, zoom));
  const image = sharp(inputPath, { failOn: "none" }).rotate();
  const { width, height } = await image.metadata();

  if (!width || !height) {
    throw new Error(`Missing dimensions: ${inputPath}`);
  }

  const sourceAR = width / height;
  let extractWidth;
  let extractHeight;
  let left;
  let top;

  if (sourceAR > aspect) {
    extractHeight = height;
    extractWidth = Math.round(height * aspect);
    left = Math.round((width - extractWidth) * focalX);
    top = 0;
  } else {
    extractWidth = width;
    extractHeight = Math.round(width / aspect);
    left = 0;
    top = Math.round((height - extractHeight) * focalY);
  }

  left = Math.max(0, Math.min(left, width - extractWidth));
  top = Math.max(0, Math.min(top, height - extractHeight));

  if (zoomFactor < 1) {
    const zoomedWidth = Math.max(1, Math.round(extractWidth * zoomFactor));
    const zoomedHeight = Math.max(1, Math.round(extractHeight * zoomFactor));
    left = Math.max(0, Math.min(Math.round(left + (extractWidth - zoomedWidth) * focalX), width - zoomedWidth));
    top = Math.max(0, Math.min(Math.round(top + (extractHeight - zoomedHeight) * focalY), height - zoomedHeight));
    extractWidth = zoomedWidth;
    extractHeight = zoomedHeight;
  }

  await image
    .extract({ left, top, width: extractWidth, height: extractHeight })
    .resize(targetWidth, Math.round(targetWidth / aspect), {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .webp({ quality, effort: 6 })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  return { width: meta.width ?? 0, height: meta.height ?? 0 };
}
