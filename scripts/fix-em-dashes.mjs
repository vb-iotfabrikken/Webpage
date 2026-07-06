/**
 * Mechanical em dash reductions for user-facing copy.
 * Run: node scripts/fix-em-dashes.mjs
 * Re-run audit: node scripts/audit-em-dashes.mjs
 */
import fs from "node:fs";
import path from "node:path";

const roots = ["src/data", "src/pages", "src/components"];
const exts = new Set([".ts", ".astro"]);
const skipFiles = new Set([
  "src/pages/[lang]/compare/index.astro", // UI glyph
]);

/** @type {[RegExp | string, string | ((m: string, ...g: string[]) => string)][]} */
const replacements = [
  // Product line labels → colons
  [/RoomAlyzer Air — indoor climate:/g, "RoomAlyzer Air: indoor climate:"],
  [/RoomAlyzer Space — space management:/g, "RoomAlyzer Space: space management:"],
  [/RoomAlyzer Water — water detection:/g, "RoomAlyzer Water: water detection:"],
  [/RoomAlyzer Air — Raumklima:/g, "RoomAlyzer Air: Raumklima:"],
  [/RoomAlyzer Space — Space-Management:/g, "RoomAlyzer Space: Space-Management:"],
  [/RoomAlyzer Water — Wassererkennung:/g, "RoomAlyzer Water: Wassererkennung:"],
  [/RoomAlyzer Air — indeklima:/g, "RoomAlyzer Air: indeklima:"],
  [/RoomAlyzer Space — space management:/gi, "RoomAlyzer Space: space management:"],
  [/RoomAlyzer Water — vanddetektion:/g, "RoomAlyzer Water: vanddetektion:"],
  [/RoomAlyzer Water — vattendetektering:/g, "RoomAlyzer Water: vattendetektering:"],
  [/RoomAlyzer Air — inomhusklimat:/g, "RoomAlyzer Air: inomhusklimat:"],

  // API / section labels
  [/REST API — /g, "REST API: "],
  [/MCP server — /g, "MCP server: "],
  [/MCP \(Model Context Protocol\) server — /g, "MCP (Model Context Protocol) server: "],

  // Common paired asides
  [/ — not after — /g, ", not after, "],
  [/ — nicht danach — /g, ", nicht danach, "],
  [/ — ikke bagefter — /g, ", ikke bagefter, "],
  [/ — inte efteråt — /g, ", inte efteråt, "],
  [/ — and approve — /g, " and approve "],
  [/ — og godkende — /g, " og godkende "],
  [/ — und freigeben — /g, " und freigeben "],
  [/ — och godkänna — /g, " och godkänna "],
  [/ — and what you lose — /g, ", and what you lose, "],
  [/ — og hvad I mister — /g, ", og hvad I mister, "],
  [/ — und was Sie verlieren — /g, ", und was Sie verlieren, "],

  // Order solutions parenthetical
  [
    /when you order one of our solutions — RoomAlyzer Air, RoomAlyzer Space, or RoomAlyzer Water — you get/g,
    "when you order one of our solutions (RoomAlyzer Air, RoomAlyzer Space, or RoomAlyzer Water), you get",
  ],
  [
    /når I bestiller en af vores løsninger — RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water — får I/g,
    "når I bestiller en af vores løsninger (RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water), får I",
  ],
  [
    /Wenn Sie eine unserer Lösungen bestellen — RoomAlyzer Air, RoomAlyzer Space oder RoomAlyzer Water — erhalten Sie/g,
    "Wenn Sie eine unserer Lösungen bestellen (RoomAlyzer Air, RoomAlyzer Space oder RoomAlyzer Water), erhalten Sie",
  ],
  [
    /när ni beställer en av våra lösningar — RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water — får ni/g,
    "när ni beställer en av våra lösningar (RoomAlyzer Air, RoomAlyzer Space eller RoomAlyzer Water), får ni",
  ],

  // Catalog methodology lists
  [
    / — baseline, measure, analyse, remediate, verify — /g,
    " (baseline, measure, analyse, remediate, verify) ",
  ],
  [
    / — baseline, mål, analysér, udbedr, verificér — /g,
    " (baseline, mål, analysér, udbedr, verificér) ",
  ],

  // Dashboard role lists
  [
    /for different roles — a management overview, technical monitoring, a department view — and switch/g,
    "for different roles (a management overview, technical monitoring, a department view) and switch",
  ],
  [
    /für verschiedene Rollen — Management-Überblick, technisches Monitoring, Abteilungsansicht — und wechseln/g,
    "für verschiedene Rollen (Management-Überblick, technisches Monitoring, Abteilungsansicht) und wechseln",
  ],
  [
    /til forskellige roller — et ledelsesoverblik, teknisk monitorering, en afdelingsvisning — og skift/g,
    "til forskellige roller (et ledelsesoverblik, teknisk monitorering, en afdelingsvisning) og skift",
  ],

  // Conservation measures parenthetical
  [
    /adds the conservation-specific measures — Preservation Index \(PI\/TWENT\), mould risk, EN 15757 fluctuations, and Bizot Green — for museums/g,
    "adds the conservation-specific measures (Preservation Index (PI/TWPI), mould risk, EN 15757 fluctuations, and Bizot Green) for museums",
  ],
  [
    /adds the conservation-specific measures — Preservation Index \(PI\/TWPI\), mould risk, EN 15757 fluctuations, and Bizot Green — for museums/g,
    "adds the conservation-specific measures (Preservation Index (PI/TWPI), mould risk, EN 15757 fluctuations, and Bizot Green) for museums",
  ],

  // Alert sensitivity
  [
    /how sensitive they are — how many readings in a row need to be out of range before an alert is sent — so a brief/g,
    "how sensitive they are (how many readings in a row need to be out of range before an alert is sent) so a brief",
  ],
  [
    /die Empfindlichkeit anpassen — wie viele Messungen hintereinander außerhalb des Bereichs liegen müssen, bevor ein Alarm gesendet wird — damit/g,
    "die Empfindlichkeit anpassen (wie viele Messungen hintereinander außerhalb des Bereichs liegen müssen, bevor ein Alarm gesendet wird), damit",
  ],

  // Building types lists
  [
    /dozens of building types — schools, nurseries, town halls, and cultural centres — and need/g,
    "dozens of building types (schools, nurseries, town halls, and cultural centres) and need",
  ],
  [
    /Dutzende Gebäudetypen — Schulen, Kitas, Rathäuser und Kulturhäuser — und brauchen/g,
    "Dutzende Gebäudetypen (Schulen, Kitas, Rathäuser und Kulturhäuser) brauchen",
  ],
  [
    /dusinvis af bygningstyper — skoler, daginstitutioner, rådhuse og kulturhuse — og har brug/g,
    "dusinvis af bygningstyper (skoler, daginstitutioner, rådhuse og kulturhuse) og har brug",
  ],

  // Procurement checklist
  [
    /Everything procurement will ask — GDPR, security, references, SLA — in one document/g,
    "Everything procurement will ask (GDPR, security, references, SLA) in one document",
  ],

  // Dispenser refill
  [
    /Anywhere a dispenser runs out — sanitiser, cups, towels — a low-power/g,
    "Anywhere a dispenser runs out (sanitiser, cups, towels), a low-power",
  ],

  // CO2 accuracy
  [
    /Typically ±30 ppm or ±3% of reading — whichever is larger — across/g,
    "Typically ±30 ppm or ±3% of reading, whichever is larger, across",
  ],

  // Champion heading
  [
    /The teams that champion — and approve — space decisions/g,
    "The teams that champion and approve space decisions",
  ],

  // Indoor climate paired
  [
    /with indoor climate — CO₂, temperature and humidity — so you ventilate/g,
    "with indoor climate (CO₂, temperature and humidity) so you ventilate",
  ],

  // Energy module
  [
    /overheating and overcooling — in kWh, in cost and in CO₂ — so you can/g,
    "overheating and overcooling (in kWh, in cost and in CO₂) so you can",
  ],

  // Meeting rooms
  [
    /how they are really used — booked for many, attended by few — and have rooms/g,
    "how they are really used (booked for many, attended by few) and have rooms",
  ],

  // Preservation API list item
  [
    /Preservation & conservation — building-level data for Preservation Index \(PI\/TWPI\), mould risk \(VTT\), EN 15757 fluctuations, and conservation heating — ideal for/g,
    "Preservation & conservation: building-level data for Preservation Index (PI/TWPI), mould risk (VTT), EN 15757 fluctuations, and conservation heating. Ideal for",
  ],
  [
    /Konservierung — Gebäudedaten für Preservation Index \(PI\/TWPI\), Schimmelrisiko \(VTT\), EN 15757-Schwankungen und Konservierungsheizung — ideal für/g,
    "Konservierung: Gebäudedaten für Preservation Index (PI/TWPI), Schimmelrisiko (VTT), EN 15757-Schwankungen und Konservierungsheizung. Ideal für",
  ],

  // Space intro double dash paragraph - split pattern handled per-file

  // Generic short paired aside (last resort, conservative length)
  [
    / — ([^—\n]{3,60}) — /g,
    (m, inner) => {
      if (inner.includes("—")) return m;
      if (/RoomAlyzer/.test(inner)) return m;
      return ` (${inner.trim()}) `;
    },
  ],
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules") walk(p, out);
    else if (exts.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

let changedFiles = 0;
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const norm = file.replace(/\\/g, "/");
    if (skipFiles.has(norm)) continue;
    let text = fs.readFileSync(file, "utf8");
    const before = text;
    for (const [from, to] of replacements) {
      if (typeof to === "function") text = text.replace(from, to);
      else text = text.replace(from, to);
    }
    if (text !== before) {
      fs.writeFileSync(file, text, "utf8");
      changedFiles++;
    }
  }
}
console.log(`Updated ${changedFiles} files`);
