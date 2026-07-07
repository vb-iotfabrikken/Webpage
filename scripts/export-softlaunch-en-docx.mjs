#!/usr/bin/env node
/**
 * scripts/export-softlaunch-en-docx.mjs
 *
 * Extract English (en) user-facing strings for soft-launch allowlisted pages
 * and write a structured Word document for editorial review.
 *
 * Usage:  npm run export:softlaunch-en
 * Output: exports/softlaunch-en-review.docx
 */

import { enConfig } from "./lib/softlaunch-locale-configs.mjs";
import { runSoftlaunchExport } from "./lib/softlaunch-locale-export.mjs";

await runSoftlaunchExport(enConfig);
