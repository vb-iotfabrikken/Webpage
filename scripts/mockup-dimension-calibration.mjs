/**
 * Mockup: compare current manual overlay presets vs auto-detected bracket centres.
 * Does NOT modify production code. Output: public/dimension-calibration-mockup/
 * (served by Astro dev server at /dimension-calibration-mockup/index.html)
 *
 * Run: node scripts/mockup-dimension-calibration.mjs
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { detectDimensionBracketSlots } from "./lib/detect-dimension-brackets.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public/dimension-calibration-mockup");
const publicImgDir = join(root, "public/images/sensors");
const sourceDir = join(root, "Pictures/Sensors/Dimensions");

const LABEL_FILL = "#0a1f44";

/** Snapshot of current production presets from dimensionOverlayPresets.ts */
const currentPresets = {
  "open-close-dimensions-compact.webp": {
    labels: [
      { text: "W10 mm", x: 49.95, y: 63.01 },
      { text: "H25 mm", x: 61.3, y: 42.87, dy: 0.25 },
    ],
  },
  "open-close-dimensions-pro.webp": {
    labels: [
      { text: "W23 mm", x: 49.95, y: 63.01 },
      { text: "H38 mm", x: 60.85, y: 38.98, dy: 0.2 },
    ],
  },
  "water-detector-dimensions-compact.webp": {
    labels: [
      { text: "W66 mm", x: 50, y: 65 },
      { text: "H95 mm", x: 73, y: 36 },
      { text: "IP 30", x: 50, y: 20 },
    ],
  },
  "water-detector-dimensions-pro.webp": {
    labels: [
      { text: "W66 mm", x: 50, y: 65 },
      { text: "H95 mm", x: 73, y: 36 },
      { text: "IP 67", x: 50, y: 20 },
    ],
  },
  "co2-dimensions.webp": {
    labels: [
      { text: "W66 mm", x: 50, y: 65 },
      { text: "H95 mm", x: 73, y: 36 },
    ],
  },
};

const sourceByTarget = {
  "open-close-dimensions-compact.webp": "Open close dim small unit.png",
  "open-close-dimensions-pro.webp": "Open close dim large unit.png",
  "water-detector-dimensions-compact.webp": "Water detector_rope IP30 dim.png",
  "water-detector-dimensions-pro.webp": "Water detector_rope IP67 dim.png",
  "co2-dimensions.webp": "CO2 dim.png",
};

const labelTextByTarget = {
  "open-close-dimensions-compact.webp": { w: "W10 mm", h: "H25 mm" },
  "open-close-dimensions-pro.webp": { w: "W23 mm", h: "H38 mm" },
  "water-detector-dimensions-compact.webp": { w: "W66 mm", h: "H95 mm", static: "IP 30" },
  "water-detector-dimensions-pro.webp": { w: "W66 mm", h: "H95 mm", static: "IP 67" },
  "co2-dimensions.webp": { w: "W66 mm", h: "H95 mm" },
};

/**
 * @param {Array<{ text: string; x: number; y: number; dy?: number }>} labels
 * @param {string} [badge]
 */
function svgLabels(labels, badge) {
  const badgeSvg = badge
    ? `<text x="2" y="4" font-size="3" font-weight="700" fill="#c2410c" font-family="Inter, system-ui, sans-serif">${badge}</text>`
    : "";
  const textSvg = labels
    .map((l) => {
      const dyAttr = l.dy != null ? ` dy="${l.dy}"` : "";
      return `<text x="${l.x}" y="${l.y}"${dyAttr} text-anchor="middle" dominant-baseline="central" alignment-baseline="central" fill="${LABEL_FILL}" font-size="2.35" font-weight="600" font-family="Inter, system-ui, sans-serif" letter-spacing="-0.02em">${l.text}</text>`;
    })
    .join("");
  return badgeSvg + textSvg;
}

/**
 * @param {string} imagePath
 * @param {Array<{ text: string; x: number; y: number; dy?: number }>} labels
 * @param {string} [badge]
 */
async function renderOverlay(imagePath, labels, badge) {
  const meta = await sharp(imagePath).metadata();
  const width = meta.width ?? 1080;
  const height = meta.height ?? 1080;
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${svgLabels(labels, badge)}</svg>`;
  return sharp(imagePath).composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).png().toBuffer();
}

/**
 * @param {string} target
 * @param {{ h?: { x: number; y: number }; w?: { x: number; y: number }; static?: { x: number; y: number } }} slots
 */
function calibratedLabels(target, slots) {
  const text = labelTextByTarget[target];
  if (!text) return [];
  /** @type {Array<{ text: string; x: number; y: number }>} */
  const labels = [];
  if (slots.w && text.w) labels.push({ text: text.w, x: slots.w.x, y: slots.w.y });
  if (slots.h && text.h) labels.push({ text: text.h, x: slots.h.x, y: slots.h.y });
  if (slots.static && text.static) labels.push({ text: text.static, x: slots.static.x, y: slots.static.y });
  return labels;
}

/**
 * @param {Buffer} leftBuf
 * @param {Buffer} rightBuf
 */
async function sideBySide(leftBuf, rightBuf) {
  const left = sharp(leftBuf);
  const right = sharp(rightBuf);
  const [lMeta, rMeta] = await Promise.all([left.metadata(), right.metadata()]);
  const height = Math.max(lMeta.height ?? 0, rMeta.height ?? 0);
  const leftW = lMeta.width ?? 0;
  const rightW = rMeta.width ?? 0;
  const totalW = leftW + rightW + 20;
  return sharp({
    create: { width: totalW, height, channels: 3, background: "#f5f5f4" },
  })
    .composite([
      { input: await left.resize({ height }).toBuffer(), top: 0, left: 0 },
      { input: await right.resize({ height }).toBuffer(), top: 0, left: leftW + 20 },
    ])
    .png()
    .toBuffer();
}

await mkdir(outDir, { recursive: true });

/** @type {Record<string, unknown>} */
const calibrationReport = { generatedAt: new Date().toISOString(), targets: {} };

/** @type {Array<{ target: string; base: string; slots: object }>} */
const cards = [];

for (const target of Object.keys(currentPresets)) {
  const imagePath = join(publicImgDir, target);
  const sourcePath = join(sourceDir, sourceByTarget[target] ?? "");
  const { rows, slots } = await detectDimensionBracketSlots(sourcePath);

  const current = currentPresets[target].labels;
  const calibrated = calibratedLabels(target, slots);

  const [currentPng, calibratedPng, comparePng] = await Promise.all([
    renderOverlay(imagePath, current, "Current (manual)"),
    renderOverlay(imagePath, calibrated, "Calibrated (auto)"),
    sideBySide(
      await renderOverlay(imagePath, current, "Current"),
      await renderOverlay(imagePath, calibrated, "Calibrated"),
    ),
  ]);

  const base = target.replace(/\.webp$/, "");
  await writeFile(join(outDir, `${base}-current.png`), currentPng);
  await writeFile(join(outDir, `${base}-calibrated.png`), calibratedPng);
  await writeFile(join(outDir, `${base}-compare.png`), comparePng);

  calibrationReport.targets[target] = {
    source: sourceByTarget[target],
    detectedRows: rows,
    slots,
    current,
    calibrated,
  };

  cards.push({ target, base, slots });
  console.log(`✓ ${target}`);
  console.log(`  slots:`, JSON.stringify(slots));
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Dimension calibration mockup</title>
  <style>
    body { font-family: Inter, system-ui, sans-serif; background: #fafaf9; color: #0a1f44; margin: 0; padding: 2rem; }
    h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
    p { color: #57534e; max-width: 52rem; line-height: 1.5; }
    .card { background: #fff; border: 1px solid #e7e5e4; border-radius: 12px; padding: 1.25rem; margin: 1.5rem 0; }
    .card h2 { font-size: 1rem; margin: 0 0 0.75rem; }
    .card img { width: 100%; max-width: 720px; height: auto; border-radius: 8px; background: #fff; }
    code { background: #f5f5f4; padding: 0.1rem 0.35rem; border-radius: 4px; font-size: 0.85em; }
    .slots { font-size: 0.85rem; color: #57534e; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <h1>Dimension bracket calibration mockup</h1>
  <p>
    Left: current manual presets from <code>dimensionOverlayPresets.ts</code>.
    Right: labels placed at auto-detected bracket gap centres from source PNGs.
    This is a preview only — production code is unchanged.
  </p>
  ${cards
    .map(
      (c) => `
  <section class="card">
    <h2>${c.target}</h2>
    <p class="slots">Detected slots: <code>${JSON.stringify(c.slots)}</code></p>
    <img src="${c.base}-compare.png" alt="${c.target} comparison" width="720" height="360" />
  </section>`,
    )
    .join("")}
</body>
</html>`;

await writeFile(join(outDir, "index.html"), html);
await writeFile(join(outDir, "calibration-report.json"), JSON.stringify(calibrationReport, null, 2));

console.log(`\nMockup written to public/dimension-calibration-mockup/`);
console.log(`Open http://localhost:4321/dimension-calibration-mockup/index.html (with dev server running).`);
