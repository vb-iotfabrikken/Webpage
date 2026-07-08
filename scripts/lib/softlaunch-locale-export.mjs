/**
 * Shared soft-launch locale string extraction and Word document export.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import {
  DE_HOSTED_EVENT_SLUGS,
  LIVE_MODULE_SLUGS,
  SV_HOSTED_EVENT_SLUGS,
} from "./softlaunch-locale-configs.mjs";

const ROOT = path.join(fileURLToPath(new URL(".", import.meta.url)), "../..");

/** ui.ts key paths excluded from soft-launch chrome. */
const UI_EXCLUDED_PREFIXES = [
  "industries.",
  "faqSection.",
  "nav.industryColumns.",
  "nav.pricing.",
  "nav.columns.platform",
  "nav.columns.library",
  "nav.top.industries",
  "nav.top.pricing",
  "nav.cta.allIndustries",
  "nav.resources.libraryLabel",
  "nav.resources.libraryDesc",
  "nav.resources.whitepapersLabel",
  "nav.resources.whitepapersDesc",
  "footer.links.platform",
  "footer.links.integrations",
  "footer.links.pricing",
  "footer.links.industries",
  "footer.links.roi",
  "footer.links.library",
  "footer.links.whitepapers",
  "footer.links.faq",
  "footer.links.securitySla",
  "footer.links.cookies",
  "footer.links.terms",
];

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

function extractQuotedStrings(line) {
  const results = [];
  const re = /(["'])((?:\\.|(?!\1)[^\\])*)\1/g;
  let m;
  while ((m = re.exec(line)) !== null) {
    results.push(m[2]);
  }
  return results;
}

function isProseString(s) {
  if (s.length < 10) return false;
  if (!/ /.test(s)) return false;
  if (/^[./]/.test(s)) return false;
  if (/^https?:\/\//.test(s)) return false;
  if (/^\+\d/.test(s)) return false;
  if (/^\{/.test(s)) return false;
  if (/^[\d\s]+$/.test(s)) return false;
  return true;
}

function isSkippableLine(trimmed) {
  return (
    trimmed.startsWith("//") ||
    trimmed.startsWith("*") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("import ") ||
    trimmed.startsWith("export type ") ||
    trimmed.startsWith("export interface ") ||
    trimmed.startsWith("type ") ||
    trimmed.startsWith("interface ")
  );
}

function stripHtml(html) {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHtmlParagraphs(html) {
  const paragraphs = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = stripHtml(m[1]);
    if (text.length >= 10 && / /.test(text)) paragraphs.push(text);
  }
  if (paragraphs.length === 0) {
    const text = stripHtml(html);
    if (text.length >= 10 && / /.test(text)) paragraphs.push(text);
  }
  return paragraphs;
}

function extractLegalHtmlBodies(text, locale) {
  const results = [];
  const localeStart = text.indexOf(`const ${locale}:`);
  if (localeStart === -1) return results;
  const localeSlice = text.slice(localeStart);
  const sections = locale === "da" || locale === "sv" ? ["privacy"] : ["privacy", "impressum"];
  for (const section of sections) {
    const bodyMarker = new RegExp(`${section}:\\s*\\{[\\s\\S]*?body:\\s*\``);
    const match = bodyMarker.exec(localeSlice);
    if (!match) continue;
    const tickStart = localeSlice.indexOf("`", match.index + match[0].length - 1);
    const tickEnd = localeSlice.indexOf("`", tickStart + 1);
    if (tickStart === -1 || tickEnd === -1) continue;
    const html = localeSlice.slice(tickStart + 1, tickEnd);
    const baseLine =
      text.slice(0, localeStart).split("\n").length +
      localeSlice.slice(0, tickStart).split("\n").length;
    for (const [i, paragraph] of extractHtmlParagraphs(html).entries()) {
      results.push({
        locale,
        lineNum: baseLine + i,
        value: paragraph,
        context: `${section}.body`,
      });
    }
  }
  return results;
}

class PathContext {
  constructor() {
    this.stack = [];
    this.moduleSlug = null;
    this.eventSlug = null;
    this.pillarSlug = null;
  }

  inEventsBlock() {
    return this.stack.some((s) => s.key === "events");
  }

  inLeavesBlock() {
    return this.stack.some((s) => s.key === "leaves");
  }

  inPillarsBlock() {
    return this.stack.some((s) => s.key === "pillars");
  }

  update(line) {
    const slugMatch = line.match(/^\s+slug:\s*["']([^"']+)["']/);
    if (slugMatch) {
      const slug = slugMatch[1];
      if (this.inPillarsBlock()) {
        this.pillarSlug = slug;
      } else if (this.inEventsBlock()) {
        this.eventSlug = slug;
      } else if (this.inLeavesBlock() || LIVE_MODULE_SLUGS.includes(slug)) {
        this.moduleSlug = slug;
      }
    }

    const recordMatch = line.match(/^\s+["']([a-z0-9-]+)["']\s*:\s*\{/);
    if (recordMatch) {
      if (this.inEventsBlock()) {
        this.eventSlug = recordMatch[1];
      } else {
        this.moduleSlug = recordMatch[1];
      }
    }

    const keyMatch = line.match(/^(\s+)(["']?)([\w-]+)\2:\s*/);
    if (!keyMatch) return;
    const indent = keyMatch[1].length;
    const key = keyMatch[3];
    while (this.stack.length > 0 && this.stack[this.stack.length - 1].indent >= indent) {
      const popped = this.stack.pop();
      if (popped.key === "pillars") this.pillarSlug = null;
      if (popped.key === "events") this.eventSlug = null;
      if (popped.key === "leaves") this.moduleSlug = null;
    }
    this.stack.push({ indent, key });
  }

  get path() {
    return this.stack.map((s) => s.key).join(".");
  }
}

function isUiPathIncluded(keyPath) {
  if (!keyPath) return true;
  return !UI_EXCLUDED_PREFIXES.some(
    (prefix) => keyPath === prefix.replace(/\.$/, "") || keyPath.startsWith(prefix),
  );
}

function pathHasSegment(keyPath, segment) {
  return (
    keyPath === segment ||
    keyPath.endsWith(`.${segment}`) ||
    keyPath.includes(`.${segment}.`)
  );
}

function shouldInclude({ targetLocale, filter, locale, keyPath, ctx }) {
  if (locale !== targetLocale) return false;

  switch (filter) {
    case "ui":
      return isUiPathIncluded(keyPath);
    case "module-slug":
      if (ctx.moduleSlug && LIVE_MODULE_SLUGS.includes(ctx.moduleSlug)) return true;
      if (!ctx.moduleSlug && !pathHasSegment(keyPath, "leaves")) return true;
      return false;
    case "events-hub-foreign":
      return !pathHasSegment(keyPath, "active");
    case "events-hub-de": {
      if (!keyPath.startsWith("events") && ctx.eventSlug === null) return true;
      const slug = ctx.eventSlug;
      if (slug && DE_HOSTED_EVENT_SLUGS.includes(slug)) {
        if (pathHasSegment(keyPath, "news")) return false;
        return true;
      }
      if (slug === "worktech26-stockholm") {
        if (pathHasSegment(keyPath, "active")) return false;
        return true;
      }
      return false;
    }
    case "events-hub-sv": {
      if (!keyPath.startsWith("events") && ctx.eventSlug === null) return true;
      const slug = ctx.eventSlug;
      if (slug && SV_HOSTED_EVENT_SLUGS.includes(slug)) {
        if (pathHasSegment(keyPath, "news")) return false;
        return true;
      }
      if (slug && DE_HOSTED_EVENT_SLUGS.includes(slug)) {
        if (pathHasSegment(keyPath, "active")) return false;
        return true;
      }
      return false;
    }
    case "trust-center":
      if (keyPath.startsWith("certification")) return false;
      if (keyPath.startsWith("pillars") && ctx.pillarSlug && ctx.pillarSlug !== "legal/privacy") {
        return false;
      }
      return true;
    case "legal-hub-leaves":
      if (keyPath.startsWith("leaves.")) {
        const leaf = keyPath.split(".")[1];
        if (leaf === "impressum" && (targetLocale === "da" || targetLocale === "sv")) {
          return false;
        }
        return leaf === "privacy" || leaf === "impressum";
      }
      return false;
    default:
      return true;
  }
}

function processFile(relPath, filter, targetLocale) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`[warn] Not found: ${relPath}`);
    return [];
  }

  const text = fs.readFileSync(fullPath, "utf8");
  const lines = text.split("\n");
  const results = [];
  const ctx = new PathContext();

  if (filter === "legal-html") {
    results.push(...extractLegalHtmlBodies(text, targetLocale));
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    ctx.update(line);
    if (isSkippableLine(line.trim())) continue;

    const locale = detectLocale(lines, i);
    const keyPath = ctx.path;

    for (const value of extractQuotedStrings(line)) {
      if (!isProseString(value)) continue;
      if (!shouldInclude({ targetLocale, filter, locale, keyPath, ctx })) continue;
      results.push({
        locale,
        lineNum: i + 1,
        value,
        context: keyPath || undefined,
      });
    }
  }

  return results;
}

function collectSectionEntries(section, targetLocale) {
  const byValue = new Map();

  for (const fileEntry of section.files) {
    for (const item of processFile(fileEntry.path, fileEntry.filter, targetLocale)) {
      const ref = `${fileEntry.path}:L${item.lineNum}`;
      const existing = byValue.get(item.value);
      if (existing) {
        if (!existing.refs.includes(ref)) existing.refs.push(ref);
      } else {
        byValue.set(item.value, { value: item.value, refs: [ref] });
      }
    }
  }

  return [...byValue.values()].sort((a, b) =>
    a.refs[0].localeCompare(b.refs[0], "en"),
  );
}

function cell(text, opts = {}) {
  return new TableCell({
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: opts.bold, size: opts.size ?? 20 })],
      }),
    ],
  });
}

function buildDocument(config, sectionData) {
  const generated = new Date().toISOString().slice(0, 10);
  const totalStrings = sectionData.reduce((n, s) => n + s.entries.length, 0);

  const children = [
    new Paragraph({
      heading: HeadingLevel.TITLE,
      children: [new TextRun(config.docTitle)],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `Generated: ${generated}  ·  Locale: ${config.locale} (/${config.locale}/)  ·  Scope: soft-launch allowlist only`,
          italics: true,
        }),
      ],
    }),
    new Paragraph({ children: [new TextRun("")] }),
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun("How to use this document")],
    }),
    new Paragraph({
      children: [new TextRun(config.introCopy)],
    }),
    new Paragraph({
      children: [
        new TextRun({ text: `Total unique strings: ${totalStrings}`, bold: true }),
      ],
    }),
    new Paragraph({ children: [new TextRun("")] }),
  ];

  let rowNumber = 0;

  for (const section of sectionData) {
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun(section.title)],
      }),
    );
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${section.description} (${section.entries.length} strings)`,
            italics: true,
          }),
        ],
      }),
    );

    const headerRow = new TableRow({
      tableHeader: true,
      children: [
        cell("#", { bold: true, width: 6 }),
        cell(config.textColumnLabel, { bold: true, width: 62 }),
        cell("Source (file:line)", { bold: true, width: 32 }),
      ],
    });

    const dataRows = section.entries.map((entry) => {
      rowNumber += 1;
      const sourceText =
        entry.refs.length === 1
          ? entry.refs[0]
          : `${entry.refs[0]} (+${entry.refs.length - 1} more)`;
      return new TableRow({
        children: [
          cell(String(rowNumber), { width: 6 }),
          cell(entry.value, { width: 62 }),
          cell(sourceText, { width: 32 }),
        ],
      });
    });

    children.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [headerRow, ...dataRows],
        borders: {
          top: { style: BorderStyle.SINGLE, size: 1 },
          bottom: { style: BorderStyle.SINGLE, size: 1 },
          left: { style: BorderStyle.SINGLE, size: 1 },
          right: { style: BorderStyle.SINGLE, size: 1 },
          insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
          insideVertical: { style: BorderStyle.SINGLE, size: 1 },
        },
      }),
    );
    children.push(new Paragraph({ children: [new TextRun("")] }));
  }

  return new Document({
    sections: [{ properties: {}, children }],
  });
}

export async function runSoftlaunchExport(config) {
  console.log(`Extracting ${config.logLabel} soft-launch strings…\n`);

  const sectionData = config.sections.map((section) => {
    const entries = collectSectionEntries(section, config.locale);
    console.log(`  ${section.id.padEnd(16)} ${String(entries.length).padStart(4)} strings`);
    return { ...section, entries };
  });

  const total = sectionData.reduce((n, s) => n + s.entries.length, 0);
  console.log(`\n  Total: ${total} unique strings\n`);

  const outFile = path.join(ROOT, config.outFile);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  const doc = buildDocument(config, sectionData);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outFile, buffer);

  console.log(`Wrote ${path.relative(ROOT, outFile)}`);
}
