import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";

function extractDocx(filePath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "docx-"));
  const zipPath = path.join(tmp, "file.zip");
  fs.copyFileSync(filePath, zipPath);
  execSync(
    `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force"`,
    { stdio: "pipe" },
  );
  const xml = fs.readFileSync(path.join(tmp, "word", "document.xml"), "utf8");
  const texts = [];
  for (const p of xml.split(/<w:p[ >]/).slice(1)) {
    const ts = [...p.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]);
    const line = ts.join("").trim();
    if (line) texts.push(line);
  }
  return texts;
}

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/extract-docx.mjs <file-or-dir>");
  process.exit(1);
}

const stat = fs.statSync(target);
const files = stat.isDirectory()
  ? fs.readdirSync(target).filter((f) => f.endsWith(".docx")).map((f) => path.join(target, f))
  : [target];

for (const file of files) {
  console.log("=".repeat(80));
  console.log(path.basename(file));
  console.log("=".repeat(80));
  for (const line of extractDocx(file)) console.log(line);
  console.log();
}
