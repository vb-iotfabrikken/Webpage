/**
 * Build optimised About hub card images from project-root sources.
 * Run: node scripts/optimize-about-images.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.join("public", "images", "about");
await mkdir(outDir, { recursive: true });

async function buildCareers() {
  const inputPath = "Careers 3.png";
  const meta = await sharp(inputPath).metadata();
  const aspect = (meta.width ?? 1) / (meta.height ?? 1);
  const widths = [480, 720, 960];

  for (const width of widths) {
    const height = Math.round(width / aspect);
    await sharp(inputPath)
      .rotate()
      .resize(width, height, {
        fit: "fill",
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true,
      })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(outDir, `careers-${width}.webp`));
  }

  const primaryWidth = 960;
  const primaryHeight = Math.round(primaryWidth / aspect);
  await sharp(inputPath)
    .rotate()
    .resize(primaryWidth, primaryHeight, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(outDir, "careers.webp"));

  console.log(
    `Built careers (${meta.width}x${meta.height}) -> ${primaryWidth}x${primaryHeight} webp`,
  );
}

async function buildPress() {
  const inputPath = "Press 4.jpeg";
  const meta = await sharp(inputPath).metadata();
  const aspect = (meta.width ?? 1) / (meta.height ?? 1);
  const widths = [640, 960, 1024];

  for (const width of widths) {
    if (width > (meta.width ?? width)) continue;
    const height = Math.round(width / aspect);
    await sharp(inputPath)
      .rotate()
      .resize(width, height, {
        fit: "fill",
        kernel: sharp.kernel.lanczos3,
        withoutEnlargement: true,
      })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(outDir, `press-${width}.webp`));
  }

  const primaryWidth = meta.width ?? 1024;
  const primaryHeight = Math.round(primaryWidth / aspect);
  await sharp(inputPath)
    .rotate()
    .resize(primaryWidth, primaryHeight, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
      withoutEnlargement: true,
    })
    .webp({ quality: 90, effort: 6 })
    .toFile(path.join(outDir, "press.webp"));

  console.log(
    `Built press (${meta.width}x${meta.height}) -> ${primaryWidth}x${primaryHeight} webp`,
  );
}

await buildCareers();
await buildPress();
