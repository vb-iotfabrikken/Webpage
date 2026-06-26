/**
 * Build catalogue images for multi-part sensor kits by compositing source
 * PNGs side by side on a square canvas (matches other product card assets).
 *
 * Run after updating files in public/images/sensors/.
 */
import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const sensorsDir = join(dirname(fileURLToPath(import.meta.url)), "../public/images/sensors");
const canvas = 1080;
const half = canvas / 2;
/** Tailwind stone-50 — matches card preview backgrounds. */
const bg = { r: 250, g: 250, b: 249, alpha: 1 };

const kits = [
  {
    out: "range-extender-and-bracket.png",
    parts: ["range-extender.png", "bracket.png"],
  },
];

for (const kit of kits) {
  const layers = await Promise.all(
    kit.parts.map(async (file, index) => {
      const input = await sharp(join(sensorsDir, file))
        .resize(half, canvas, { fit: "contain", background: bg })
        .toBuffer();

      return { input, left: index * half, top: 0 };
    }),
  );

  await sharp({
    create: { width: canvas, height: canvas, channels: 4, background: bg },
  })
    .composite(layers)
    .png()
    .toFile(join(sensorsDir, kit.out));

  console.log(`Wrote ${kit.out}`);
}
