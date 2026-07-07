#!/usr/bin/env node
/**
 * scripts/export-softlaunch-da-docx.mjs
 *
 * Extract Danish (da) user-facing strings for soft-launch allowlisted pages
 * and write a structured Word document for editorial review.
 *
 * Usage:  npm run export:softlaunch-da
 * Output: exports/softlaunch-da-review.docx
 */

import { daConfig } from "./lib/softlaunch-locale-configs.mjs";
import { runSoftlaunchExport } from "./lib/softlaunch-locale-export.mjs";

await runSoftlaunchExport(daConfig);
