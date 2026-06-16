import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/team");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".webp"));
const results = [];

for (const file of files) {
  const { data, info } = await sharp(path.join(dir, file))
    .resize(200)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let sum = 0;
  const pixels = info.width * info.height;
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    sum += 0.299 * r + 0.587 * g + 0.114 * b;
  }
  results.push({ file, luminance: Math.round(sum / pixels) });
}

results.sort((a, b) => a.luminance - b.luminance);
const mean = results.reduce((s, r) => s + r.luminance, 0) / results.length;
console.log("Mean luminance:", Math.round(mean));
for (const r of results) {
  const flag = r.luminance < mean - 18 ? " <-- dark" : r.luminance > mean + 18 ? " <-- bright" : "";
  console.log(`${r.luminance}\t${r.file}${flag}`);
}
