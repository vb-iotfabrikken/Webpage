/**
 * Build centred 3:4 portrait crops into public/team/ as WebP (768px wide).
 * Run: node scripts/build-team-portraits.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "Portraits");
const outDir = path.join(root, "public", "team");

const ASPECT = 3 / 4;
const OUT_WIDTH = 768;

/** @type {{ src: string; dest: string }[]} */
const files = [
  { src: "Katja-Kafling-768x1023.webp", dest: "katja-kafling.webp" },
  { src: "Charlotte-Bangso-758x1024.webp", dest: "charlotte-bangso.webp" },
  { src: "Jeanette-Christensen-768x1023.webp", dest: "jeanette-christensen.webp" },
  { src: "Lars Wichmann_133533-1-kopi-671x1024.webp", dest: "lars-wichmann.webp" },
  { src: "Dorthe Deleuran P1004598.jpeg", dest: "dorthe-deleuran.webp" },
  { src: "Mikkel FischerP1004536.jpeg", dest: "mikkel-fischer.webp" },
  { src: "Lars QvistgaardP1004638.jpeg", dest: "lars-qvistgaard.webp" },
  { src: "Kaisa BraaeP1004548.jpeg", dest: "kaisa-braae.webp" },
  { src: "Jon WichmannP1004655.jpeg", dest: "jon-wichmann.webp" },
  { src: "Vivian BodenloszP1004658.jpeg", dest: "vivian-bodenlosz.webp" },
];

/** Fine-tune focal point after auto-detection (delta x/y as fraction of image, -1…1). */
const focalNudge = {
  "mikkel-fischer.webp": { dx: -0.14, dy: 0 },
  "lars-qvistgaard.webp": { dx: -0.08, dy: 0 },
  "jon-wichmann.webp": { dx: 0.02, dy: 0 },
  "kaisa-braae.webp": { dx: -0.04, dy: 0 },
  "vivian-bodenlosz.webp": { dx: 0.05, dy: 0 },
};

/** Tighter crop = zoom in (>1). Default 1. */
const cropZoom = {
  "jon-wichmann.webp": 1.12,
};

/** Per-output tone lift (1 = unchanged). */
const toneAdjust = {
  // Backlit source — mild lift only; avoid normalize/gamma (looks flat and harsh).
  "vivian-bodenlosz.webp": { brightness: 1.26, limitMax: 240 },
  "jon-wichmann.webp": { brightness: 1.32 },
  "dorthe-deleuran.webp": { brightness: 1.22 },
  "lars-qvistgaard.webp": { brightness: 1.16 },
  "mikkel-fischer.webp": { brightness: 1.1 },
  "kaisa-braae.webp": { brightness: 1.12 },
};

/**
 * @param {import('sharp').Sharp} pipeline
 */
async function detectFocal(pipeline) {
  const { data, info } = await pipeline
    .clone()
    .resize(360)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const yEnd = Math.floor(height * 0.8);
  let sumX = 0;
  let sumY = 0;
  let sumW = 0;

  for (let y = 0; y < yEnd; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const sat = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
      const weight = Math.pow(lum, 0.75) * (0.25 + sat * 1.4);
      sumX += x * weight;
      sumY += y * weight;
      sumW += weight;
    }
  }

  return {
    x: sumW > 0 ? sumX / sumW / width : 0.5,
    y: sumW > 0 ? sumY / sumW / height : 0.36,
  };
}

/**
 * @param {{ width: number; height: number }} meta
 * @param {{ x: number; y: number }} focal
 * @param {number} zoom
 */
function computeCrop(meta, focal, zoom = 1) {
  const { width, height } = meta;
  let cropH = height;
  let cropW = Math.round(cropH * ASPECT);
  if (cropW > width) {
    cropW = width;
    cropH = Math.round(cropW / ASPECT);
  }

  if (zoom > 1) {
    cropH = Math.round(cropH / zoom);
    cropW = Math.round(cropW / zoom);
  }

  const headAnchor = 0.36;
  let left = Math.round(focal.x * width - cropW / 2);
  let top = Math.round(focal.y * height - cropH * headAnchor);

  left = Math.max(0, Math.min(left, width - cropW));
  top = Math.max(0, Math.min(top, height - cropH));

  return { left, top, width: cropW, height: cropH };
}

/**
 * @param {import('sharp').Sharp} pipeline
 * @param {NonNullable<(typeof toneAdjust)[string]>} adjust
 */
function applyTone(pipeline, adjust) {
  if (adjust.normalize) {
    const [lower, upper] = adjust.normalize;
    pipeline = pipeline.normalize({ lower, upper });
  }
  if (adjust.brightness || adjust.saturation) {
    pipeline = pipeline.modulate({
      brightness: adjust.brightness ?? 1,
      saturation: adjust.saturation ?? 1,
    });
  }
  if (adjust.linear) {
    const [a, b] = adjust.linear;
    pipeline = pipeline.linear(a, b);
  }
  if (adjust.gamma) {
    pipeline = pipeline.gamma(adjust.gamma);
  }
  if (adjust.limitMax != null) {
    pipeline = pipeline.linear(1, 0, { limit: [0, adjust.limitMax] });
  }
  return pipeline;
}

await fs.mkdir(outDir, { recursive: true });

for (const { src, dest } of files) {
  const input = path.join(srcDir, src);
  const output = path.join(outDir, dest);
  const adjust = toneAdjust[dest];
  const nudge = focalNudge[dest] ?? { dx: 0, dy: 0 };

  let pipeline = sharp(input).rotate();
  if (adjust) {
    pipeline = applyTone(pipeline, adjust);
  }

  const meta = await pipeline.metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`Missing dimensions: ${src}`);
  }

  const focal = await detectFocal(pipeline);
  focal.x = Math.min(0.72, Math.max(0.28, focal.x + nudge.dx));
  focal.y = Math.min(0.55, Math.max(0.22, focal.y + nudge.dy));

  const zoom = cropZoom[dest] ?? 1;
  const crop = computeCrop({ width: meta.width, height: meta.height }, focal, zoom);

  await pipeline
    .extract(crop)
    .resize({ width: OUT_WIDTH, withoutEnlargement: false })
    .webp({ quality: 82 })
    .toFile(output);

  console.log(
    `built ${dest}\tfocal=${(focal.x * 100).toFixed(0)}%,${(focal.y * 100).toFixed(0)}%\tcrop=${crop.width}x${crop.height}@${crop.left},${crop.top}`,
  );
}

const teamGroupSrc = path.join(srcDir, "Team_P1004695.png");
const teamGroupOut = path.join(outDir, "team-group.webp");
if (
  await fs
    .access(teamGroupSrc)
    .then(() => true)
    .catch(() => false)
) {
  await sharp(teamGroupSrc)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(teamGroupOut);
  console.log("built team-group.webp");
}
