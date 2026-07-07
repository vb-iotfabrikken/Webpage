/**
 * Canonical German (`de`) term locks and audit pattern definitions.
 * Shared data lives in `de-term-locks.json` (also imported by the audit script).
 *
 * German copy checklist (de user-facing strings):
 * 1. Module names stay English (Indoor climate, Preservation, …).
 * 2. Sensor catalogue names stay English except Wasserdetektor and Außen Sensor.
 * 3. Relative humidity: use r. F. or relative Luftfeuchtigkeit — never RH/RF.
 * 4. Never write ", und" — use "XX und YY" or split the sentence.
 * 5. Run `npm run check:locale` before committing changes under src/data/.
 */

import type { Lang } from "./lang";
import lockData from "./de-term-locks.json";

export const MODULE_NAMES_EN: Record<string, string> = lockData.moduleNamesEn;

export const SENSOR_NAMES_EN: Record<string, string> = lockData.sensorNamesEn;

export const SENSOR_NAME_OVERRIDES_DE: Record<string, string> =
  lockData.sensorNameOverridesDe;

export const DE_FORBIDDEN_MODULE_TOKENS: readonly string[] =
  lockData.forbiddenModuleTokens;

export const DE_FORBIDDEN_SENSOR_TOKENS: readonly string[] =
  lockData.forbiddenSensorTokens;

/** Allowed relative-humidity forms in de copy. */
export const RH_ALLOWED_DE = [
  "r. F.",
  "relative Luftfeuchtigkeit",
  "Luftfeuchtigkeit",
] as const;

/** Patterns exported for the locale grammar audit script. */
export const DE_AUDIT_PATTERNS = {
  forbiddenModuleTokens: DE_FORBIDDEN_MODULE_TOKENS,
  forbiddenSensorTokens: DE_FORBIDDEN_SENSOR_TOKENS,
  rhForbidden: [
    { re: /\bRH\b/g, hint: 'Use "r. F." or "relative Luftfeuchtigkeit"' },
    { re: /\bRF\b/g, hint: 'Use "r. F." or "relative Luftfeuchtigkeit"' },
    { re: /\brF\b/g, hint: 'Use "r. F." or "relative Luftfeuchtigkeit"' },
    { re: /relative Feuchte/g, hint: 'Use "relative Luftfeuchtigkeit"' },
  ],
  commaUnd: {
    re: /,\s+und\b/g,
    hint: 'Remove comma before "und" or split the sentence',
  },
  englishSensorSuffix: {
    re: /\b(?:Humidity|Temperature|Motion|Desk|Touch|CO2|Mini\+(?: PIR)?|Full\+|Open\/Close|Water (?:detector|rope)|Cloud connector) Sensor\b/gi,
    hint: "Use English catalogue name without Sensor suffix (except Außen Sensor, Wasserdetektor)",
  },
} as const;

/** Returns the display module name. Module names stay English on all locales. */
export function localizedModuleName(slug: string, englishName: string, _lang: Lang): string {
  return MODULE_NAMES_EN[slug] ?? englishName;
}

/** Normalises RH/RF variants in de copy (prefer fixing source strings). */
export function formatRhDe(value: string): string {
  return value
    .replace(/(\d)\s*%\s*RH\b/g, "$1 % r. F.")
    .replace(/(\d)\s*%\s*RF\b/g, "$1 % r. F.")
    .replace(/\bRH\b/g, "r. F.")
    .replace(/\bRF\b/g, "r. F.")
    .replace(/\brF\b/g, "r. F.")
    .replace(/relative Feuchte/g, "relative Luftfeuchtigkeit");
}
