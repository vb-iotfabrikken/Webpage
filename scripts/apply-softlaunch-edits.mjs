#!/usr/bin/env node
/**
 * Apply parsed soft-launch Word review edits to TypeScript i18n sources.
 *
 * Usage:  node scripts/apply-softlaunch-edits.mjs [report.json]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const REPORT_FILE = path.resolve(ROOT, process.argv[2] ?? "tmp/softlaunch-edits-report.json");

function detectLocale(lines, lineIndex) {
  for (let i = lineIndex; i >= Math.max(0, lineIndex - 1200); i--) {
    const line = lines[i];
    const constMatch = line.match(/^const\s+(en|da|de|sv)\s*[=:]/);
    if (constMatch) return constMatch[1];
    const keyBlockMatch = line.match(/^\s+(en|da|de|sv)\s*:\s*[\{\[]/);
    if (keyBlockMatch) return keyBlockMatch[1];
    const inlineMatch = line.match(/^( {2,}|\t)(en|da|de|sv)\s*:/);
    if (inlineMatch) return inlineMatch[2];
  }
  return "en";
}

function charOffsetToLine(lines, offset) {
  let pos = 0;
  for (let i = 0; i < lines.length; i++) {
    pos += lines[i].length + 1;
    if (pos > offset) return i;
  }
  return Math.max(0, lines.length - 1);
}

function findLocaleMatches(text, lines, locale, needle) {
  const matches = [];
  if (!needle) return matches;

  let idx = 0;
  while (idx <= text.length) {
    idx = text.indexOf(needle, idx);
    if (idx === -1) break;
    const lineIdx = charOffsetToLine(lines, idx);
    if (detectLocale(lines, lineIdx) === locale) {
      matches.push({ idx, lineIdx, lineNum: lineIdx + 1 });
    }
    idx += needle.length || 1;
  }
  return matches;
}

function pickBestMatch(matches, lineNum) {
  if (!matches.length) return null;
  if (!lineNum || lineNum <= 0) return matches[0];
  return matches.reduce((best, m) => {
    const bestDist = Math.abs(best.lineNum - lineNum);
    const dist = Math.abs(m.lineNum - lineNum);
    return dist < bestDist ? m : best;
  });
}

function extractStringLiteralAtLine(lines, lineNum) {
  if (lineNum <= 0 || lineNum > lines.length) return null;
  const line = lines[lineNum - 1];
  const m =
    line.match(/:\s*"((?:[^"\\]|\\.)*)"\s*,?\s*$/) ||
    line.match(/^\s*"((?:[^"\\]|\\.)*)"\s*,?\s*$/);
  return m ? m[1] : null;
}

function replaceStringAtLine(text, lines, lineNum, from, to) {
  const line = lines[lineNum - 1];
  if (!line.includes(from)) return null;
  const newLine = line.replace(from, to);
  lines[lineNum - 1] = newLine;
  return lines.join("\n");
}

function applyEditToFile(filePath, locale, edit) {
  const fullPath = path.join(ROOT, filePath);
  if (!fs.existsSync(fullPath)) {
    return { status: "missing_file", count: 0 };
  }

  let text = fs.readFileSync(fullPath, "utf8");
  const { original, corrected, lineNum, hasMoreRefs } = edit;

  if (!original || !corrected || original === corrected) {
    return { status: "skipped_noop", count: 0 };
  }

  const lines = text.split("\n");
  const originalMatches = findLocaleMatches(text, lines, locale, original);

  if (!originalMatches.length) {
    const correctedMatches = findLocaleMatches(text, lines, locale, corrected);
    const nearCorrected = pickBestMatch(correctedMatches, lineNum);
    if (nearCorrected && (!lineNum || Math.abs(nearCorrected.lineNum - lineNum) <= 50)) {
      return { status: "already_applied", count: 0 };
    }

    const atLine = extractStringLiteralAtLine(lines, lineNum);
    if (atLine && detectLocale(lines, lineNum - 1) === locale) {
      if (atLine === corrected) {
        return { status: "already_applied", count: 0 };
      }
      const updated = replaceStringAtLine(text, [...lines], lineNum, atLine, corrected);
      if (updated) {
        fs.writeFileSync(fullPath, updated, "utf8");
        return { status: "applied", count: 1, via: "line_fallback" };
      }
    }

    return { status: "original_not_found", count: 0 };
  }

  let count = 0;

  if (hasMoreRefs) {
    for (const match of [...originalMatches].reverse()) {
      text = text.slice(0, match.idx) + corrected + text.slice(match.idx + original.length);
      count += 1;
    }
  } else {
    const match = pickBestMatch(originalMatches, lineNum);
    text = text.slice(0, match.idx) + corrected + text.slice(match.idx + original.length);
    count = 1;
  }

  fs.writeFileSync(fullPath, text, "utf8");
  return { status: "applied", count };
}

const report = JSON.parse(fs.readFileSync(REPORT_FILE, "utf8"));
const summary = { applied: 0, skipped: 0, alreadyApplied: 0, failed: [] };

for (const [locale, data] of Object.entries(report.locales)) {
  console.log(`\nApplying ${locale} (${data.editCount} edits)…`);
  for (const edit of data.edits) {
    const result = applyEditToFile(edit.sourceFile, locale, edit);
    if (result.status === "applied") {
      summary.applied += result.count;
      console.log(`  ✓ row ${edit.rowNumber} ${edit.sourceFile}:L${edit.lineNum} (${result.count}x)`);
    } else if (result.status === "skipped_noop") {
      summary.skipped += 1;
    } else if (result.status === "already_applied") {
      summary.alreadyApplied += 1;
      console.log(`  ○ row ${edit.rowNumber} ${edit.sourceFile}:L${edit.lineNum} (already applied)`);
    } else {
      summary.failed.push({ locale, row: edit.rowNumber, file: edit.sourceFile, ...result, edit });
      console.warn(`  ✗ row ${edit.rowNumber} ${edit.sourceFile}: ${result.status}`);
    }
  }
}

console.log(
  `\nDone: ${summary.applied} replacements, ${summary.skipped} skipped, ${summary.alreadyApplied} already applied, ${summary.failed.length} failed`,
);
if (summary.failed.length) {
  fs.writeFileSync(
    path.join(ROOT, "tmp", "softlaunch-edits-failures.json"),
    JSON.stringify(summary.failed, null, 2) + "\n",
    "utf8",
  );
  process.exitCode = 1;
}
