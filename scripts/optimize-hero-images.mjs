/**
 * Optimise homepage hero images (backdrop + floating man).
 * Run: node scripts/optimize-hero-images.mjs
 */
import { unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { exportWebp } from "./lib/image-export.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imgDir = join(root, "public/images");
const manifestPath = join(root, "src/data/heroImages.json");

/** @type {{ backdrop: { src: string; width: number; height: number; srcSet: { width: number; url: string }[] }; man: { src: string; width: number; height: number } }} */
const manifest = {
  backdrop: { src: "", width: 0, height: 0, srcSet: [] },
  man: { src: "", width: 0, height: 0 },
};

const backdropWidths = [1400, 2800];
const backdropBase = "background-banner";

for (const w of backdropWidths) {
  const suffix = w === backdropWidths[0] ? "" : `-${w}`;
  const filename = `${backdropBase}${suffix}.webp`;
  const outputPath = join(imgDir, filename);
  const size = await exportWebp(join(imgDir, "background-banner.png"), outputPath, {
    width: w,
    quality: 80,
  });

  manifest.backdrop.srcSet.push({
    width: w,
    url: `/images/${filename}`,
  });

  if (w === backdropWidths[0]) {
    manifest.backdrop.src = `/images/${filename}`;
    manifest.backdrop.width = size.width;
    manifest.backdrop.height = size.height;
  }

  console.log(`background-banner.png → ${filename} (${size.width}×${size.height})`);
}

const manSize = await exportWebp(join(imgDir, "man.png"), join(imgDir, "man.webp"), {
  quality: 85,
});
manifest.man = {
  src: "/images/man.webp",
  width: manSize.width,
  height: manSize.height,
};
console.log(`man.png → man.webp (${manSize.width}×${manSize.height})`);

for (const legacy of ["background-banner.png", "man.png"]) {
  try {
    await unlink(join(imgDir, legacy));
    console.log(`removed ${legacy}`);
  } catch {
    // Already removed.
  }
}

await import("node:fs/promises").then(({ writeFile }) =>
  writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8"),
);

console.log(`Wrote ${manifestPath}`);
