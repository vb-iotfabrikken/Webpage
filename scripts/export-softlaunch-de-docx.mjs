#!/usr/bin/env node
/**
 * scripts/export-softlaunch-de-docx.mjs
 *
 * Extract German (de) user-facing strings for soft-launch allowlisted pages
 * and write a structured Word document for editorial review.
 *
 * Usage:  npm run export:softlaunch-de
 * Output: exports/softlaunch-de-review.docx
 */

import { deConfig } from "./lib/softlaunch-locale-configs.mjs";
import { runSoftlaunchExport } from "./lib/softlaunch-locale-export.mjs";

await runSoftlaunchExport(deConfig);
