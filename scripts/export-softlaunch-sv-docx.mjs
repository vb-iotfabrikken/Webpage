#!/usr/bin/env node
/**
 * scripts/export-softlaunch-sv-docx.mjs
 *
 * Extract Swedish (sv) user-facing strings for soft-launch allowlisted pages
 * and write a structured Word document for editorial review.
 *
 * Usage:  npm run export:softlaunch-sv
 * Output: exports/softlaunch-sv-review.docx
 */

import { svConfig } from "./lib/softlaunch-locale-configs.mjs";
import { runSoftlaunchExport } from "./lib/softlaunch-locale-export.mjs";

await runSoftlaunchExport(svConfig);
