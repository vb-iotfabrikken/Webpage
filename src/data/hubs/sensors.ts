import type { Hub } from "./types";
import { productSheetPath, localizedSensorName } from "../sensorCategories";
import { defaultLang, type Lang } from "../lang";
import { sensorsHubI18n } from "./sensors.i18n";

export const sensorsHub: Hub = {
  slug: "sensors",
  title: "The full sensor catalogue.",
  titleAccent: "Pick the right tool for the room.",
  eyebrow: "Sensors",
  lead: "Every RoomAlyzer sensor is wireless, battery-powered and plug-and-play. Compare models and find the one that fits your use case.",
  leaves: [
    // ── RoomAlyzer Air ──────────────────────────────────────────────────────
    {
      slug: "co2",
      category: "air",
      productSheetUrl: productSheetPath("co2"),
      eyebrow: "RoomAlyzer Air",
      title: "CO2.",
      titleAccent: "The one parameter you cannot smell.",
      lead: "Monitor CO₂, temperature and humidity in classrooms, meeting rooms and other high-occupancy spaces.",
    },
    {
      slug: "full-plus",
      category: "air",
      productSheetUrl: productSheetPath("full-plus"),
      eyebrow: "RoomAlyzer Air",
      title: "Full+.",
      titleAccent: "Everything about your indoor climate.",
      lead: "CO₂, temperature, humidity, VOC and more in a single, discreet unit — the workhorse of most indoor-climate rollouts.",
    },
    {
      slug: "humidity",
      category: "air",
      productSheetUrl: productSheetPath("humidity"),
      eyebrow: "RoomAlyzer Air",
      title: "Humidity.",
      titleAccent: "Protect against damp and mould.",
      lead: "Measure temperature and humidity discreetly — ideal for crawl spaces, cellars and outer walls.",
    },
    {
      slug: "mini-plus",
      category: "air",
      productSheetUrl: productSheetPath("mini-plus"),
      eyebrow: "RoomAlyzer Air",
      title: "Mini+.",
      titleAccent: "Small footprint, accurate climate data.",
      lead: "Easy installation and precise climate readings where size and aesthetics matter.",
    },
    {
      slug: "mini-plus-pir",
      category: "air",
      productSheetUrl: productSheetPath("mini-plus-pir"),
      eyebrow: "RoomAlyzer Air",
      title: "Mini+ PIR.",
      titleAccent: "Climate and presence in one.",
      lead: "Compact climate monitoring with occupancy sensing — perfect for meeting rooms and flexible workspaces.",
    },
    {
      slug: "outdoor",
      category: "air",
      productSheetUrl: productSheetPath("outdoor"),
      eyebrow: "RoomAlyzer Air",
      title: "Outdoor.",
      titleAccent: "Baseline for every calculation.",
      lead: "An outdoor reference unit so the platform can separate indoor trends from the weather outside.",
    },
    {
      slug: "temperature",
      category: "air",
      productSheetUrl: productSheetPath("temperature"),
      eyebrow: "RoomAlyzer Air",
      title: "Temperature.",
      titleAccent: "Wherever degrees matter.",
      lead: "Reliable temperature monitoring for fridges, freezers, storage and technical rooms.",
    },
    // ── RoomAlyzer Space ────────────────────────────────────────────────────
    {
      slug: "desk",
      category: "space",
      productSheetUrl: productSheetPath("desk"),
      eyebrow: "RoomAlyzer Space",
      title: "Desk.",
      titleAccent: "See which desks are actually used.",
      lead: "Space management made simple — under-desk sensing for hot-desking and office layout decisions.",
    },
    {
      slug: "motion",
      category: "space",
      productSheetUrl: productSheetPath("motion"),
      eyebrow: "RoomAlyzer Space",
      title: "Motion.",
      titleAccent: "Presence without identity.",
      lead: "Track room usage in real time — no cameras, Wi-Fi sniffing or other identifying technology.",
    },
    {
      slug: "open-close",
      category: "space",
      productSheetUrl: productSheetPath("open-close"),
      eyebrow: "RoomAlyzer Space",
      title: "Open/Close.",
      titleAccent: "Doors, windows, cabinets, lockers.",
      lead: "A magnetic contact sensor for anything that opens and closes — with long battery life and instant alarms.",
    },
    {
      slug: "touch",
      category: "space",
      productSheetUrl: productSheetPath("touch"),
      eyebrow: "RoomAlyzer Space",
      title: "Touch.",
      titleAccent: "One tap, straight to the team.",
      lead: "Trigger actions with a single click — cleaning requests, feedback, service calls and more.",
    },
    // ── RoomAlyzer Water ──────────────────────────────────────────────────────
    {
      slug: "water-detector",
      category: "water",
      productSheetUrl: productSheetPath("water-detector"),
      eyebrow: "RoomAlyzer Water",
      title: "Water detector.",
      titleAccent: "The cheapest insurance in your building.",
      lead: "Prevent water damage with data — alarms within seconds when water is detected.",
    },
    {
      slug: "water-rope",
      category: "water",
      productSheetUrl: productSheetPath("water-rope"),
      eyebrow: "RoomAlyzer Water",
      title: "Water rope.",
      titleAccent: "Line coverage where a spot sensor cannot reach.",
      lead: "A sensing cable for long runs along pipes, skirting boards and plant-room floors.",
    },
    // ── Miscellaneous ─────────────────────────────────────────────────────────
    {
      slug: "cloud-connector",
      category: "misc",
      productSheetUrl: productSheetPath("cloud-connector"),
      eyebrow: "Miscellaneous",
      title: "Cloud connector.",
      titleAccent: "Bring the data home.",
      lead: "Connects wireless sensors to the RoomAlyzer platform over a secure cellular uplink.",
    },
    {
      slug: "range-extender-and-bracket",
      category: "misc",
      productSheetUrl: productSheetPath("range-extender-and-bracket"),
      eyebrow: "Miscellaneous",
      title: "Range Extender and Bracket.",
      titleAccent: "Reach the corners of the building.",
      lead: "Extend wireless coverage and mount sensors securely where placement matters.",
    },
    {
      slug: "compare",
      eyebrow: "Sensors",
      title: "Compare sensors.",
      titleAccent: "Side by side.",
      lead: "A side-by-side comparison of every sensor in the catalogue so you can pick the right one for your rooms.",
    },
  ],
};

/**
 * Localized sensors hub. Applies translated marketing copy (with English
 * fallback), the per-locale sensor name overrides, and locale-aware product
 * sheet URLs. English returns the canonical hub unchanged.
 */
export function getSensorsHub(lang: Lang = defaultLang): Hub {
  if (lang === defaultLang) return sensorsHub;

  const overlay = sensorsHubI18n[lang];

  const leaves = sensorsHub.leaves.map((leaf) => {
    const lo = overlay?.leaves?.[leaf.slug];
    return {
      ...leaf,
      title: lo?.title ?? localizedSensorName(leaf.slug, leaf.title, lang),
      titleAccent: lo?.titleAccent ?? leaf.titleAccent,
      lead: lo?.lead ?? leaf.lead,
      productSheetUrl: leaf.productSheetUrl
        ? productSheetPath(leaf.slug, lang)
        : undefined,
    };
  });

  return {
    ...sensorsHub,
    title: overlay?.title ?? sensorsHub.title,
    titleAccent: overlay?.titleAccent ?? sensorsHub.titleAccent,
    eyebrow: overlay?.eyebrow ?? sensorsHub.eyebrow,
    lead: overlay?.lead ?? sensorsHub.lead,
    leaves,
  };
}
