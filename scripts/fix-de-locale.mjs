/**
 * Bulk fix for German locale strings under src/data/.
 * Applies approved German module/sensor name replacements inside de blocks only.
 * Do NOT revert to English — see de-term-locks.json for canonical forms.
 * Re-run `npm run check:locale` after execution.
 */

import fs from "node:fs";
import path from "node:path";

const roots = ["src/data"];

/** Longest-first replacements inside de locale string literals. */
const REPLACEMENTS = [
  ["Preservationsheiz- und Lüftungsanalyse", "Erhaltungsheiz- und Lüftungsanalyse"],
  ["Preservation Index", "Erhaltungsindex"],
  ["Preservationsüberwachung", "Erhaltungsüberwachung"],
  ["Preservationsbericht", "Erhaltungsbericht"],
  ["Preservationsarbeit", "Erhaltungsarbeit"],
  ["Preservationsanforderungen", "Erhaltungsanforderungen"],
  ["Preservationsklima", "Erhaltungsklima"],
  ["Preservationsmodul", "Erhaltungsmodul"],
  ["Preservationsheizung", "Erhaltungsheizung"],
  ["RoomAlyzer Indoor climate", "RoomAlyzer Raumklima"],
  ["RoomAlyzer Preservation", "RoomAlyzer Erhaltung"],
  ["RoomAlyzer Usage and cleaning", "RoomAlyzer Reinigung/Nutzung"],
  ["RoomAlyzer Push buttons", "RoomAlyzer Drucktasten"],
  ["RoomAlyzer Lockers and doors", "RoomAlyzer Schließfächer/Türen"],
  ["Range Extender and Bracket", "Range Extender und Bracket"],
  ["Indoor climate monitoring", "Raumklimaüberwachung"],
  ["Indoor climate data", "Raumklimadaten"],
  ["Indoor climatedokumentation", "Raumklimadokumentation"],
  ["Indoor climateprojekt", "Raumklimaprojekt"],
  ["Indoor climate-Sensorsystem", "Raumklima-Sensorsystem"],
  ["Indoor climate-Loggern", "Raumklima-Loggern"],
  ["Indoor climate-Monitoring", "Raumklima-Monitoring"],
  ["Indoor climatebedingungen", "Raumklimabedingungen"],
  ["Indoor climatestudien", "Raumklimastudien"],
  ["Indoor climate", "Raumklima"],
  ["Usage and cleaning", "Reinigung/Nutzung"],
  ["Lockers and doors", "Schließfächer/Türen"],
  ["Push buttons", "Drucktasten"],
  ["Konservierung", "Erhaltung"],
  ["Preservation", "Erhaltung"],
  ["Schließfächer und Türen", "Schließfächer/Türen"],
  ["Nutzung und Reinigung", "Reinigung/Nutzung"],
  ["Feuchtesensoren", "Humidity"],
  ["Feuchtesensor", "Humidity"],
  ["Temperatursensoren", "Temperature"],
  ["Temperatursensor", "Temperature"],
  ["Bewegungssensoren", "Motion"],
  ["Bewegungssensor", "Motion"],
  ["Wasserseile", "Water rope"],
  ["Wasserseil", "Water rope"],
  ["Punktsensoren", "Water detector"],
  ["Punktsensor", "Water detector"],
  ["Humidity Sensor", "Humidity"],
  ["Temperature Sensor", "Temperature"],
  ["Motion Sensor", "Motion"],
  ["CO2 Sensor", "CO2"],
  ["Open/Close Sensor", "Open/Close"],
  ["Water detector Sensor", "Water detector"],
  ["Water rope Sensor", "Water rope"],
  ["Cloud connector Sensor", "Cloud connector"],
  ["Mini+ PIR Sensor", "Mini+ PIR"],
  ["Mini+ Sensor", "Mini+"],
  ["Full+ Sensor", "Full+"],
  ["Desk Sensor", "Desk"],
  ["Touch Sensor", "Touch"],
  ["relative Feuchte", "relative Luftfeuchtigkeit"],
  ["±1 % RH", "±1 % r. F."],
  ["±1% RH", "±1% r. F."],
  ["±1 % RF", "±1 % r. F."],
  ["±1% RF", "±1% r. F."],
  ["0–99% RF", "0–99% r. F."],
  ["0-99% RF", "0-99% r. F."],
  ["40–60 % RH", "40–60 % r. F."],
  ["40-60 % RH", "40-60 % r. F."],
  ["RH-Protokollierung", "r. F.-Protokollierung"],
  ["RH-Schwankungen", "r. F.-Schwankungen"],
  ["RH und", "r. F. und"],
  ["stabile RH", "stabile r. F."],
  [" % RH", " % r. F."],
  ["% RH", "% r. F."],
  [" % RF", " % r. F."],
  ["% RF", "% r. F."],
  [" % rF", " % r. F."],
  [" RH ", " r. F. "],
  [", und ", " und "],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (p.endsWith(".ts")) out.push(p);
  }
  return out;
}

function detectLocaleBlock(lines, lineIndex) {
  for (let i = lineIndex; i >= 0; i--) {
    const constBlock = lines[i].match(/^const\s+(da|de|sv)\s*:/);
    if (constBlock) return constBlock[1];
    const nested = lines[i].match(/^\s*(da|de|sv)\s*:\s*\{?\s*$/);
    if (nested) return nested[1];
    if (lines[i].match(/^\s*(en)\s*:\s*\{?\s*$/)) return "en";
    if (lines[i].match(/^const\s+en\s*:/)) return "en";
  }
  return null;
}

function applyReplacements(value) {
  let out = value;
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  return out;
}

function fixLine(line, inDeBlock) {
  if (!inDeBlock) return line;
  return line.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, (full, quote, inner) => {
    const fixed = applyReplacements(inner);
    return fixed === inner ? full : `${quote}${fixed}${quote}`;
  });
}

function fixFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n");
  let changed = false;
  const out = lines.map((line, i) => {
    const locale = detectLocaleBlock(lines, i);
    if (locale !== "de") return line;
    const fixed = fixLine(line, true);
    if (fixed !== line) changed = true;
    return fixed;
  });
  if (changed) {
    fs.writeFileSync(file, out.join("\n"), "utf8");
    return true;
  }
  return false;
}

let count = 0;
for (const root of roots) {
  for (const file of walk(root)) {
    if (file.endsWith("deTermLocks.ts")) continue;
    if (fixFile(file)) {
      count++;
      console.log(`Fixed: ${file}`);
    }
  }
}
console.log(`\nUpdated ${count} file(s). Run npm run check:locale to verify.`);
