#!/usr/bin/env node
/**
 * Parse yellow-highlighted corrections from soft-launch review Word documents.
 *
 * Edit rule: yellow in the text column = edit; no yellow in text = skip.
 * Row-number highlighting alone is not sufficient.
 *
 * Usage:  node scripts/parse-softlaunch-edits.mjs [dir]
 * Output: tmp/softlaunch-edits-report.json
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const INPUT_DIR = path.resolve(ROOT, process.argv[2] ?? "exports/edits");
const OUT_FILE = path.join(ROOT, "tmp", "softlaunch-edits-report.json");

const LOCALE_BY_FILE = {
  "softlaunch-da-edited.docx": "da",
  "softlaunch-de-edited.docx": "de",
  "softlaunch-en-edited.docx": "en",
  "softlaunch-sv-edited.docx": "sv",
};

function decodeXml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function isYellowRun(runXml) {
  return (
    /<w:highlight w:val="(?:yellow|Yellow)"/i.test(runXml) ||
    /<w:shd[^>]*w:fill="(?:yellow|FFFF00|fff2cc)"/i.test(runXml)
  );
}

function runsFromXml(xml) {
  const runs = [];
  for (const m of xml.matchAll(/<w:r[\s>][\s\S]*?<\/w:r>/g)) {
    const runXml = m[0];
    const text = [...runXml.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)]
      .map((t) => decodeXml(t[1]))
      .join("");
    if (!text) continue;
    runs.push({ text, yellow: isYellowRun(runXml) });
  }
  return runs;
}

function mergeRuns(runs) {
  return runs.map((r) => r.text).join("").trim();
}

function resolveMixedCorrected(runs) {
  const original = textFromRuns(runs, { plainOnly: true });
  const yellowOnly = textFromRuns(runs, { yellowOnly: true });
  const merged = mergeRuns(runs);

  if (yellowOnly.length >= 20 && merged.startsWith(original)) {
    return yellowOnly;
  }
  if (original && merged.startsWith(original)) {
    const tail = merged.slice(original.length).trim();
    return tail.length >= 20 ? tail : merged;
  }
  return merged;
}

function textFromRuns(runs, { yellowOnly = false, plainOnly = false } = {}) {
  const filtered = runs.filter((r) => {
    if (yellowOnly) return r.yellow;
    if (plainOnly) return !r.yellow;
    return true;
  });
  return mergeRuns(filtered);
}

function classifyParaRuns(runs) {
  const textRuns = runs.filter((r) => r.text);
  if (!textRuns.length) return "empty";
  if (!textRuns.some((r) => r.yellow)) return "plain";
  if (textRuns.every((r) => r.yellow)) return "allYellow";
  return "mixed";
}

function parseTextCell(cellXml) {
  const paragraphs = [...cellXml.matchAll(/<w:p[\s>][\s\S]*?<\/w:p>/g)].map((m) => m[0]);

  const paraData = paragraphs
    .map((paraXml) => {
      const runs = runsFromXml(paraXml);
      const kind = classifyParaRuns(runs);
      return { all: mergeRuns(runs), runs, kind };
    })
    .filter((p) => p.kind !== "empty");

  const hasYellow = paraData.some((p) => p.kind === "allYellow" || p.kind === "mixed");
  if (!hasYellow) {
    return { hasYellow: false, all: mergeRuns(paraData.flatMap((p) => p.runs)) };
  }

  const plainParas = paraData.filter((p) => p.kind === "plain");
  const allYellowParas = paraData.filter((p) => p.kind === "allYellow");
  const mixedParas = paraData.filter((p) => p.kind === "mixed");

  let original;
  let corrected;

  if (plainParas.length && allYellowParas.length) {
    original = plainParas.map((p) => p.all).join(" ");
    corrected = allYellowParas.map((p) => p.all).join(" ");
  } else if (plainParas.length && mixedParas.length) {
    original = plainParas.map((p) => p.all).join(" ");
    corrected = mixedParas.map((p) => resolveMixedCorrected(p.runs)).join(" ");
  } else if (allYellowParas.length && !plainParas.length && !mixedParas.length) {
    corrected = allYellowParas.map((p) => p.all).join(" ");
    original = "";
  } else if (mixedParas.length) {
    const allRuns = mixedParas.flatMap((p) => p.runs);
    original = textFromRuns(allRuns, { plainOnly: true });
    corrected = resolveMixedCorrected(allRuns);
  } else {
    const allRuns = paraData.flatMap((p) => p.runs);
    original = textFromRuns(allRuns, { plainOnly: true });
    corrected = mergeRuns(allRuns);
  }

  const all = paraData.map((p) => p.all).filter(Boolean).join(" ");

  if (!original && all && corrected) {
    original = all.replace(corrected, "").trim();
  }
  if (!corrected && all && original) {
    corrected = all.replace(original, "").trim();
  }
  if (!corrected) corrected = all;

  return { hasYellow: true, original, corrected, all };
}

function cellTexts(cellXml) {
  return parseTextCell(cellXml);
}

function parseSourceRef(text) {
  const m = text.match(/(src\/data\/[^\s:]+\.ts):L(\d+)(?:\s*\(\+(\d+)\s+more\))?/);
  if (!m) return null;
  return {
    sourceRef: m[0].trim(),
    sourceFile: m[1],
    lineNum: Number(m[2]),
    hasMoreRefs: Boolean(m[3]),
  };
}

function extractDocxXml(filePath) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "docx-parse-"));
  const zipPath = path.join(tmp, "file.zip");
  fs.copyFileSync(filePath, zipPath);
  execSync(
    `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${tmp.replace(/'/g, "''")}' -Force"`,
    { stdio: "pipe" },
  );
  return fs.readFileSync(path.join(tmp, "word", "document.xml"), "utf8");
}

function parseDocx(filePath) {
  const xml = extractDocxXml(filePath);
  const edits = [];
  const tables = [...xml.matchAll(/<w:tbl[\s>][\s\S]*?<\/w:tbl>/g)];

  for (const table of tables) {
    const rows = [...table[0].matchAll(/<w:tr[\s>][\s\S]*?<\/w:tr>/g)];
    for (const row of rows) {
      const cells = [...row[0].matchAll(/<w:tc[\s>][\s\S]*?<\/w:tc>/g)].map((c) => c[0]);
      if (cells.length < 3) continue;

      const numCell = cellTexts(cells[0]);
      const textCell = cellTexts(cells[1]);
      const sourceCell = cellTexts(cells[2]);

      if (!/^\d+$/.test(numCell.all)) continue;
      if (!sourceCell.all.includes("src/data/")) continue;

      const source = parseSourceRef(sourceCell.all);
      if (!source) continue;

      if (!textCell.hasYellow) continue;

      const { original, corrected } = textCell;
      if (!corrected || original === corrected) continue;

      edits.push({
        rowNumber: numCell.all,
        ...source,
        original,
        corrected,
      });
    }
  }

  return edits;
}

const report = { generatedAt: new Date().toISOString(), locales: {} };

for (const file of fs.readdirSync(INPUT_DIR).filter((f) => f.endsWith(".docx")).sort()) {
  const locale = LOCALE_BY_FILE[file];
  if (!locale) {
    console.warn(`[warn] Unknown file (skipped): ${file}`);
    continue;
  }
  const edits = parseDocx(path.join(INPUT_DIR, file));
  const byFile = {};
  for (const edit of edits) {
    byFile[edit.sourceFile] ??= [];
    byFile[edit.sourceFile].push(edit);
  }
  report.locales[locale] = { file, editCount: edits.length, edits, byFile };
  console.log(`  ${locale}: ${edits.length} edits from ${file}`);
}

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(`\nWrote ${path.relative(ROOT, OUT_FILE)}`);
