#!/usr/bin/env node
/**
 * Build `public/llms-full.txt` by concatenating every library MDX article with
 * a stable header. Run before `astro build` via the `prebuild` npm script.
 *
 * Output format follows the emerging llms-full.txt convention: one "# <title>"
 * block per article, separated by `---` fences, with source-URL metadata so
 * model-side retrievers can cite the canonical page.
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const src = join(root, "src", "content", "landingpages");
const outFile = join(root, "public", "llms-full.txt");

const SITE = "https://iot-fabrikken.com";

function stripFrontmatter(raw) {
  if (!raw.startsWith("---")) return { frontmatter: "", body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: "", body: raw };
  const frontmatter = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\s*\n/, "");
  return { frontmatter, body };
}

function extractField(frontmatter, key) {
  const re = new RegExp(`^${key}\\s*:\\s*(?:\"([^\"]*)\"|([^\\n]*))`, "m");
  const m = frontmatter.match(re);
  if (!m) return undefined;
  return (m[1] ?? m[2] ?? "").trim();
}

function extractListField(frontmatter, key) {
  const re = new RegExp(`^${key}\\s*:\\s*\\n((?:\\s{2,}-[^\\n]*\\n?)+)`, "m");
  const m = frontmatter.match(re);
  if (!m) return [];
  return m[1]
    .split("\n")
    .map((l) => l.replace(/^\s*-\s*/, "").replace(/^\"|\"$/g, "").trim())
    .filter(Boolean);
}

const files = (await readdir(src)).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
files.sort();

const chunks = [];
chunks.push(
  `# IoT Fabrikken — full library (${files.length} articles)`,
  "",
  `Source: ${SITE}/en/articles/`,
  `Generated: ${new Date().toISOString()}`,
  "",
  "Every article in the IoT Fabrikken knowledge base, concatenated for",
  "retrieval-augmented generation. Each article is separated by a `---` fence",
  "and carries its canonical URL, tags and publish metadata.",
  "",
);

for (const f of files) {
  const raw = await readFile(join(src, f), "utf8");
  const { frontmatter, body } = stripFrontmatter(raw);
  const slug = f.replace(/\.(mdx|md)$/, "");
  const title = extractField(frontmatter, "title") ?? slug;
  const description = extractField(frontmatter, "description") ?? "";
  const category = extractField(frontmatter, "category") ?? "";
  const tags = extractListField(frontmatter, "tags");
  const updated = extractField(frontmatter, "updatedAt") ?? "";

  chunks.push(
    "",
    "---",
    "",
    `# ${title}`,
    "",
    `URL: ${SITE}/en/articles/${slug}/`,
    description ? `Description: ${description}` : "",
    category ? `Category: ${category}` : "",
    tags.length ? `Tags: ${tags.join(", ")}` : "",
    updated ? `Updated: ${updated}` : "",
    "",
    body.trim(),
  );
}

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, chunks.filter((c) => c !== undefined).join("\n"), "utf8");
console.log(`[llms-full] wrote ${outFile} (${files.length} articles)`);
