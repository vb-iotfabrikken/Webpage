#!/usr/bin/env node
/**
 * Render every module landing page to PDF via Playwright and merge into one file.
 *
 * Usage:
 *   1. npm run build
 *   2. npm run preview          (separate terminal, or pass BASE_URL)
 *   3. node scripts/generate-module-pages-pdf.mjs
 *
 * Options:
 *   --lang=en|da|de|sv   Locale prefix (default: en)
 *   --out=path           Output PDF path (default: exports/module-pages-{lang}.pdf)
 *   --base=http://…      Preview server origin (default: http://127.0.0.1:4321)
 */
import { mkdir, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { PDFDocument } from "pdf-lib";

const MODULE_SLUGS = [
  "indoor-climate",
  "preservation",
  "space-management",
  "water-detection",
  "push-buttons",
  "lockers-doors",
  "usage-cleaning",
];

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const tmpDir = join(root, "tmp", "module-pdf-parts");

function parseArgs() {
  const lang = process.argv.find((a) => a.startsWith("--lang="))?.split("=")[1] ?? "en";
  const base =
    process.argv.find((a) => a.startsWith("--base="))?.split("=")[1] ??
    "http://127.0.0.1:4321";
  const out =
    process.argv.find((a) => a.startsWith("--out="))?.split("=")[1] ??
    join(root, "exports", `module-pages-${lang}.pdf`);
  return { lang, base: base.replace(/\/$/, ""), out };
}

async function waitForPageReady(page) {
  await page.waitForLoadState("load");
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `,
  });
  await page.evaluate(async () => {
    const imgs = [...document.querySelectorAll("img")];
    await Promise.race([
      Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              }),
        ),
      ),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]);
  });
}

async function renderModulePdf(page, url, partPath) {
  await page.goto(url, { waitUntil: "load", timeout: 60_000 });
  await waitForPageReady(page);
  await page.pdf({
    path: partPath,
    format: "A4",
    printBackground: true,
    margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    timeout: 180_000,
  });
}

async function mergePdfs(partPaths, outPath) {
  const merged = await PDFDocument.create();
  for (const partPath of partPaths) {
    const bytes = await readFileBuffer(partPath);
    const doc = await PDFDocument.load(bytes);
    const pages = await merged.copyPages(doc, doc.getPageIndices());
    for (const p of pages) merged.addPage(p);
  }
  const mergedBytes = await merged.save();
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, mergedBytes);
}

async function readFileBuffer(path) {
  const { readFile } = await import("node:fs/promises");
  return readFile(path);
}

async function main() {
  const { lang, base, out } = parseArgs();
  await mkdir(tmpDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const partPaths = [];
  console.log(`Generating module PDFs (${lang}) from ${base} …`);

  for (const slug of MODULE_SLUGS) {
    const url = `${base}/${lang}/modules/${slug}/`;
    const partPath = join(tmpDir, `${lang}-${slug}.pdf`);
    process.stdout.write(`  • ${slug} … `);
    try {
      await renderModulePdf(page, url, partPath);
      partPaths.push(partPath);
      console.log("ok");
    } catch (err) {
      console.log("failed");
      throw new Error(`Failed to render ${url}: ${err.message}`);
    }
  }

  await browser.close();

  console.log(`Merging ${partPaths.length} parts → ${out}`);
  await mergePdfs(partPaths, out);
  await rm(tmpDir, { recursive: true, force: true });

  console.log(`Done: ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
