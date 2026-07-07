/** Soft-launch Word export configs per locale. */

export const LIVE_MODULE_SLUGS = [
  "indoor-climate",
  "space-management",
  "water-detection",
  "preservation",
];

export const DE_HOSTED_EVENT_SLUGS = [
  "archivistica",
  "mutec-2026",
  "dhbv-verbandstag-2026",
];

export const SV_HOSTED_EVENT_SLUGS = ["worktech26-stockholm"];

const MODULE_OVERLAY_FILES = [
  { path: "src/data/i18n/indoorClimate.ts" },
  { path: "src/data/i18n/spaceManagement.ts" },
  { path: "src/data/i18n/waterDetection.ts" },
  { path: "src/data/i18n/preservation.ts" },
  { path: "src/data/content/modules.i18n.ts", filter: "module-slug" },
  { path: "src/data/hubs/modules.i18n.ts" },
  { path: "src/data/modules.i18n.ts", filter: "module-slug" },
];

const EN_MODULE_CANONICAL_FILES = [
  { path: "src/data/content/modules.ts", filter: "module-slug" },
  { path: "src/data/modules.ts", filter: "module-slug" },
  { path: "src/data/hubs/modules.ts", filter: "module-slug" },
];

const SENSOR_OVERLAY_FILES = [
  { path: "src/data/content/sensors.i18n.ts" },
  { path: "src/data/hubs/sensors.i18n.ts" },
  { path: "src/data/sensorTechnicalSpecs.i18n.ts" },
  { path: "src/data/sensorHeroSpecs.ts" },
  { path: "src/data/i18n/sensorsCompare.ts" },
];

const EN_SENSOR_CANONICAL_FILES = [
  { path: "src/data/content/sensors.ts" },
  { path: "src/data/hubs/sensors.ts" },
];

const CASE_FILES = [
  { path: "src/data/i18n/cases.ts" },
  { path: "src/data/hubs/caseStudyDetails.i18n.ts" },
  { path: "src/data/hubs/caseStudies.i18n.ts" },
  { path: "src/data/hubs/caseStudies.ts" },
];

const ABOUT_FILES = [
  { path: "src/data/i18n/about.ts" },
  { path: "src/data/team.ts" },
  { path: "src/data/story.ts" },
  { path: "src/data/careers.ts" },
  { path: "src/data/press.ts" },
  { path: "src/data/partners.ts" },
  { path: "src/data/trustCenter.ts", filter: "trust-center" },
  { path: "src/data/hubs/about.ts" },
];

const CONTACT_FILES = [
  { path: "src/data/i18n/contact.ts" },
  { path: "src/data/contact.ts" },
  { path: "src/data/hubs/contact.ts" },
  { path: "src/data/i18n/getOffer.ts" },
];

const LEGAL_FILES = [
  { path: "src/data/i18n/legal.ts", filter: "legal-html" },
  { path: "src/data/hubs/legal.ts", filter: "legal-hub-leaves" },
];

function sharedSections(localePrefix, { includeEnCanonical = false } = {}) {
  const moduleFiles = includeEnCanonical
    ? [...MODULE_OVERLAY_FILES, ...EN_MODULE_CANONICAL_FILES]
    : MODULE_OVERLAY_FILES;
  const sensorFiles = includeEnCanonical
    ? [...SENSOR_OVERLAY_FILES, ...EN_SENSOR_CANONICAL_FILES]
    : SENSOR_OVERLAY_FILES;

  return [
    {
      id: "chrome",
      title: "Global chrome (header, footer, shared UI)",
      description: "Navigation, footer, sensor/module breadcrumbs and shared CTAs.",
      files: [{ path: "src/data/i18n/ui.ts", filter: "ui" }],
    },
    {
      id: "home",
      title: "Homepage",
      description: `Copy for ${localePrefix} homepage sections.`,
      files: [{ path: "src/data/i18n/home.ts" }],
    },
    {
      id: "modules",
      title: "Modules (hub + 4 live modules)",
      description:
        "Modules hub and indoor-climate, space-management, water-detection, preservation.",
      files: moduleFiles,
    },
    {
      id: "sensors",
      title: "Sensors (hub, compare, product sheets, 15 products)",
      description: "Sensors hub, compare matrix, product sheets index and product pages.",
      files: sensorFiles,
    },
    {
      id: "cases",
      title: "Case studies (index + 18 customer pages)",
      description: "Case studies hub and customer detail overlays.",
      files: CASE_FILES,
    },
    {
      id: "about",
      title: "Company / About",
      description:
        "About hub, story, team, careers, press, partners and trust center (privacy pillar).",
      files: ABOUT_FILES,
    },
    {
      id: "contact",
      title: "Contact",
      description:
        "Contact hub, book-demo, sales, become-partner, support-info, get-an-offer and event on-site forms.",
      files: CONTACT_FILES,
    },
  ];
}

export const enConfig = {
  locale: "en",
  outFile: "exports/softlaunch-en-review.docx",
  docTitle: "English soft-launch copy review",
  textColumnLabel: "English text",
  logLabel: "English",
  introCopy:
    "Each row is an English string that renders on the soft-launch site. English is the canonical source locale — correct the text in the English text column (track changes or comments) and apply approved fixes in the cited source file at the given line number.",
  sections: [
    ...sharedSections("/en/", { includeEnCanonical: true }),
    {
      id: "events",
      title: "Events hub",
      description: "Events hub copy and foreign-fair news cards on /en/events/.",
      files: [{ path: "src/data/i18n/events.ts", filter: "events-hub-foreign" }],
    },
    {
      id: "legal",
      title: "Legal (privacy + impressum)",
      description: "Privacy policy and Impressum page copy.",
      files: LEGAL_FILES,
    },
  ],
};

export const daConfig = {
  locale: "da",
  outFile: "exports/softlaunch-da-review.docx",
  docTitle: "Danish soft-launch copy review",
  textColumnLabel: "Danish text",
  logLabel: "Danish",
  introCopy:
    "Each row is a Danish string that renders on the soft-launch site. Correct the text in the Danish text column (track changes or comments). Apply approved fixes in the cited source file at the given line number. Where Danish is missing on the live site, the page falls back to English — those strings are not included here.",
  sections: [
    ...sharedSections("/da/"),
    {
      id: "events",
      title: "Events hub",
      description: "Events hub copy and foreign-fair news cards on /da/events/.",
      files: [{ path: "src/data/i18n/events.ts", filter: "events-hub-foreign" }],
    },
    {
      id: "legal",
      title: "Legal (privacy + impressum)",
      description: "Privacy policy and Impressum page copy.",
      files: LEGAL_FILES,
    },
  ],
};

export const deConfig = {
  locale: "de",
  outFile: "exports/softlaunch-de-review.docx",
  docTitle: "German soft-launch copy review",
  textColumnLabel: "German text",
  logLabel: "German",
  introCopy:
    "Each row is a German string that renders on the soft-launch site. Correct the text in the German text column (track changes or comments). Apply approved fixes in the cited source file at the given line number. Where German is missing on the live site, the page falls back to English — those strings are not included here.",
  sections: [
    ...sharedSections("/de/"),
    {
      id: "events",
      title: "Events hub",
      description:
        "Events hub copy, active cards for DE-hosted fairs and WORKTECH26 news card on /de/events/.",
      files: [{ path: "src/data/i18n/events.ts", filter: "events-hub-de" }],
    },
    {
      id: "event-landings",
      title: "Event landing pages",
      description:
        "ARCHIVISTICA, MUTEC 2026, DHBV Verbandstag 2026 landings and fair recap copy on /de/events/.",
      files: [
        { path: "src/data/i18n/archivistica.ts" },
        { path: "src/data/i18n/mutec2026.ts" },
        { path: "src/data/i18n/dhbvVerbandstag2026.ts" },
        { path: "src/data/i18n/eventFairRecap.ts" },
      ],
    },
    {
      id: "legal",
      title: "Legal (privacy + impressum)",
      description: "Privacy policy and Impressum page copy.",
      files: LEGAL_FILES,
    },
  ],
};

export const svConfig = {
  locale: "sv",
  outFile: "exports/softlaunch-sv-review.docx",
  docTitle: "Swedish soft-launch copy review",
  textColumnLabel: "Swedish text",
  logLabel: "Swedish",
  introCopy:
    "Each row is a Swedish string that renders on the soft-launch site. Correct the text in the Swedish text column (track changes or comments). Apply approved fixes in the cited source file at the given line number. Where Swedish is missing on the live site, the page falls back to English — those strings are not included here.",
  sections: [
    ...sharedSections("/sv/"),
    {
      id: "events",
      title: "Events hub",
      description:
        "Events hub copy, active card for WORKTECH26 Stockholm and DE-fair news cards on /sv/events/.",
      files: [{ path: "src/data/i18n/events.ts", filter: "events-hub-sv" }],
    },
    {
      id: "event-landings",
      title: "Event landing pages",
      description: "WORKTECH26 Stockholm landing copy on /sv/events/worktech26-stockholm/.",
      files: [{ path: "src/data/i18n/worktech26Stockholm.ts" }],
    },
    {
      id: "legal",
      title: "Legal (privacy + impressum)",
      description: "Privacy policy and Impressum page copy.",
      files: LEGAL_FILES,
    },
  ],
};
