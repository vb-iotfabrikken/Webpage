/**
 * Detect baked-in bracket pairs in dimension source PNGs.
 * Returns slot centres as percentages (0–100) of image width/height.
 */
import sharp from "sharp";

const MIN_GAP_RATIO = 0.15;
const MAX_GAP_RATIO = 0.28;
const MAX_RUN_RATIO = 0.04;

function isBlue(r, g, b) {
  return b > 120 && b > r + 30 && b > g + 10;
}

/**
 * @param {Buffer | string} input
 * @returns {Promise<Array<{ yMin: number; yMax: number; xCenter: number; yCenter: number; gapRatio: number }>>}
 */
export async function detectBracketRows(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  /** @type {Map<number, number[]>} */
  const blueByY = new Map();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      if (!isBlue(data[i], data[i + 1], data[i + 2])) continue;
      const row = blueByY.get(y) ?? [];
      row.push(x);
      blueByY.set(y, row);
    }
  }

  const pairs = [];
  for (const [y, xs] of blueByY) {
    xs.sort((a, b) => a - b);
    const runs = [];
    let start = xs[0];
    let end = xs[0];
    for (let i = 1; i < xs.length; i++) {
      if (xs[i] - end <= 3) end = xs[i];
      else {
        runs.push({ start, end });
        start = xs[i];
        end = xs[i];
      }
    }
    runs.push({ start, end });

    const smallRuns = runs.filter((r) => r.end - r.start < width * MAX_RUN_RATIO);
    if (smallRuns.length !== 2) continue;

    const [left, right] = smallRuns;
    const gap = right.start - left.end;
    const gapRatio = gap / width;
    if (gapRatio < MIN_GAP_RATIO || gapRatio > MAX_GAP_RATIO) continue;

    pairs.push({
      yMin: y,
      yMax: y,
      xCenter: ((left.end + right.start) / 2 / width) * 100,
      yCenter: (y / height) * 100,
      gapRatio,
    });
  }

  const merged = [];
  for (const pair of pairs.sort((a, b) => a.yMin - b.yMin)) {
    const existing = merged.find(
      (m) =>
        Math.abs(m.xCenter - pair.xCenter) < 2 &&
        Math.abs(m.yMax - pair.yMin) < (height / height) * 2.5,
    );
    if (existing) {
      existing.yMax = pair.yMax;
      existing.yCenter = ((existing.yMin + existing.yMax) / 2 / height) * 100;
    } else {
      merged.push({ ...pair });
    }
  }

  for (const row of merged) {
    row.yCenter = ((row.yMin + row.yMax) / 2 / height) * 100;
  }

  return merged;
}

/**
 * Classify detected rows into h / w / static slots.
 * @param {Awaited<ReturnType<typeof detectBracketRows>>} rows
 */
export function classifyBracketSlots(rows) {
  if (!rows.length) return {};

  const sorted = [...rows].sort((a, b) => a.yCenter - b.yCenter);
  const upper = sorted.filter((r) => r.yCenter < 55);
  const lower = sorted.filter((r) => r.yCenter >= 55);

  /** @type {{ h?: { x: number; y: number }; w?: { x: number; y: number }; static?: { x: number; y: number } }} */
  const slots = {};

  if (lower.length) {
    const wRow = lower.reduce((a, b) => (a.yCenter > b.yCenter ? a : b));
    slots.w = { x: round(wRow.xCenter), y: round(wRow.yCenter) };
  }

  if (upper.length) {
    const ipRow = upper.find((r) => r.yCenter < 28);
    const hCandidates = upper.filter((r) => !ipRow || r !== ipRow);
    const hRow = hCandidates.reduce((a, b) => (a.yCenter < b.yCenter ? a : b), hCandidates[0]);
    if (hRow) slots.h = { x: round(hRow.xCenter), y: round(hRow.yCenter) };
    if (ipRow && ipRow !== hRow) slots.static = { x: round(ipRow.xCenter), y: round(ipRow.yCenter) };
  }

  return slots;
}

function round(n) {
  return Math.round(n * 100) / 100;
}

/**
 * @param {Buffer | string} input
 */
export async function detectDimensionBracketSlots(input) {
  const rows = await detectBracketRows(input);
  const slots = classifyBracketSlots(rows);
  return { rows, slots };
}
