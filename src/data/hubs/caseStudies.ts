import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { CaseStudyCategory, Hub, HubLeaf } from "./types";
import { getCases } from "../i18n/cases";
import { caseStudiesI18n } from "./caseStudies.i18n";

export const caseStudyCategoryLabels: Record<CaseStudyCategory, string> = {
  "space-management": "Space management",
  "indoor-climate": "Indoor climate",
};

/** Locale-aware case-study category labels. */
export function getCaseStudyCategoryLabels(
  lang: Lang = defaultLang,
): Record<CaseStudyCategory, string> {
  const c = getCases(lang).categories;
  return {
    "space-management": c.spaceManagement,
    "indoor-climate": c.indoorClimate,
  };
}

export type CaseStudyLeaf = HubLeaf & {
  /** Shown before the user clicks “Load more”. */
  featured?: boolean;
};

export type CaseStudiesContent = {
  hub: Pick<Hub, "title" | "titleAccent" | "eyebrow" | "lead">;
  intro: {
    title: string;
    paragraphs: string[];
  };
  cases: CaseStudyLeaf[];
  /** Cards visible on first paint (matches iot-fabrikken.* listing pages). */
  initialVisible: number;
};

/** Show every case on first paint until we add category filters or pagination. */
const INITIAL_VISIBLE = 24;

const sharedIntro = {
  title: "Customer cases.",
  paragraphs: [
    "When we deliver a solution to you — whether it's for indoor climate, space management, cleaning or a mix — you don't have to go out and buy anything else. Nor do you have to worry about how to get started: we put a lot of effort into start-up and training, and we always respond quickly to support enquiries.",
    "Here's what some of our customers have to say about our partnership.",
  ],
};

function leaf(
  entry: Omit<CaseStudyLeaf, "eyebrow"> & { eyebrow?: string },
): CaseStudyLeaf {
  return { eyebrow: "Case", ...entry };
}

/** Licitationen feature on Norddjurs and Varde space-management rollouts. */
const ARTICLE_LICITATIONEN =
  "https://www.licitationen.dk/article/view/1148854/kommuner_skaber_fremtidens_arbejdsplads_med_data_og_space_management";
const ARTICLE_DANSK_INDUSTRY =
  "https://dfm-net.dk/space-management-med-sensorer-frigav-650-kvm-og-det-batter-paa-bundlinjen/";
/** BAUSUBSTANZ article (PDF) for Protestant Church in Hesse and Nassau. */
const ARTICLE_EKHN =
  "https://iot-fabrikken.de/wp-content/uploads/2025/09/BAUSUBSTANZ-web-1.pdf";

/** English catalog — aligned with [iot-fabrikken.uk/cases](https://iot-fabrikken.uk/cases/). */
const enCases: CaseStudyLeaf[] = [
  // Space management
  leaf({
    slug: "norddjurs-municipality",
    title: "Norddjurs Municipality.",
    lead: "Creates better layout by turning four buildings into three.",
    category: "space-management",
    logo: "/cases/norddjurs.png",
    logoAlt: "Norddjurs Municipality logo",
    articleHref: ARTICLE_LICITATIONEN,
    featured: true,
  }),
  leaf({
    slug: "varde-municipality",
    title: "Varde Municipality.",
    lead: "Improves well-being and ensures fair distribution by merging administrative buildings.",
    category: "space-management",
    logo: "/cases/varde.png",
    logoAlt: "Varde Municipality logo",
    articleHref: ARTICLE_LICITATIONEN,
    featured: true,
  }),
  leaf({
    slug: "dansk-industri",
    title: "Dansk Industri.",
    lead: "It makes a difference on the bottom line.",
    category: "space-management",
    logo: "/cases/dansk-industri.jpeg",
    logoAlt: "Dansk Industri logo",
    articleHref: ARTICLE_DANSK_INDUSTRY,
    featured: true,
  }),
  leaf({
    slug: "gribskov-municipality",
    title: "Gribskov Municipality.",
    lead: "Data to correctly dimension a new town hall.",
    category: "space-management",
    logo: "/cases/gribskov.webp",
    logoAlt: "Gribskov Municipality logo",
    featured: true,
  }),
  // Indoor climate
  leaf({
    slug: "archdiocese-of-freiburg",
    title: "Archdiocese of Freiburg.",
    lead: "Sensitises volunteers through data-driven indoor climate understanding.",
    category: "indoor-climate",
    logo: "/cases/erzdioezese-freiburg.jpg",
    logoAlt: "Archdiocese of Freiburg logo",
    featured: true,
  }),
  leaf({
    slug: "evangelische-kirche-in-hessen-und-nassau",
    title: "Protestant Church in Hesse and Nassau.",
    lead: "Protects historic churches through precise indoor climate monitoring.",
    category: "indoor-climate",
    logo: "/cases/ekhn.jpg",
    logoAlt: "Protestant Church in Hesse and Nassau logo",
    articleHref: ARTICLE_EKHN,
    featured: true,
  }),
  leaf({
    slug: "sweco",
    title: "Sweco.",
    lead: "Sweco helps property owners ensure a good indoor climate in their buildings.",
    category: "indoor-climate",
    logo: "/cases/sweco.png",
    logoAlt: "Sweco logo",
  }),
  leaf({
    slug: "skade-teknik",
    title: "SKADE-teknik.",
    lead: "Many property managers and landlords find it difficult to document why mould occurs in a particular tenancy.",
    category: "indoor-climate",
    logo: "/cases/skade-teknik.png",
    logoAlt: "SKADE-teknik logo",
  }),
  leaf({
    slug: "boligselskabet-sjaelland",
    title: "Boligselskabet Sjælland.",
    lead: "Boligselskabet Sjælland experienced challenges in documenting the changes in indoor climate before and after renovations of buildings and apartments.",
    category: "indoor-climate",
    logo: "/cases/boligselskabet-sjaelland.png",
    logoAlt: "Boligselskabet Sjælland logo",
  }),
  leaf({
    slug: "vejen-kommune",
    title: "Vejen Municipality.",
    lead: "Vejen Municipality was experiencing complaints about indoor climate and was struggling to draw conclusions: what are facts and what are feelings?",
    category: "indoor-climate",
    logo: "/cases/vejen-kommune.png",
    logoAlt: "Vejen Municipality logo",
  }),
  leaf({
    slug: "rudersdal-museer",
    title: "Rudersdal Museums.",
    lead: "Rudersdal Museums was looking for a solution that would ensure an optimal indoor climate in the exhibition and storage rooms.",
    category: "indoor-climate",
    logo: "/cases/rudersdal-museer.jpg",
    logoAlt: "Rudersdal Museums logo",
  }),
  leaf({
    slug: "solroed-kommune",
    title: "Solrød Municipality.",
    lead: "Solrød Municipality had an older indoor climate sensor system.",
    category: "indoor-climate",
    logo: "/cases/solroed-kommune.jpg",
    logoAlt: "Solrød Municipality logo",
  }),
  leaf({
    slug: "gribskov-kommune",
    title: "Gribskov Municipality.",
    lead: "The municipality is part of Realdania's indoor climate project and uses the RoomAlyzer platform to decide how to improve conditions in schools and other buildings.",
    category: "indoor-climate",
    logo: "/cases/gribskov.webp",
    logoAlt: "Gribskov Municipality logo",
  }),
  leaf({
    slug: "deutsches-museum-nordschleswig",
    title: "Deutsches Museum Nordschleswig.",
    lead: "Deutsches Museum Nordschleswig was missing the ability to read data remotely.",
    category: "indoor-climate",
    logo: "/cases/deutsches-museum-nordschleswig.png",
    logoAlt: "Deutsches Museum Nordschleswig logo",
  }),
  leaf({
    slug: "faaborg-museum",
    title: "Faaborg Museum.",
    lead: "Faaborg Museum spent a lot of time physically reading sensors.",
    category: "indoor-climate",
    logo: "/cases/faaborg-museum.jpg",
    logoAlt: "Faaborg Museum logo",
  }),
  leaf({
    slug: "hj-energi",
    title: "HJ-Energi.",
    lead: "At HJ-Energi, we work to make buildings function as they were intended.",
    category: "indoor-climate",
    logo: "/cases/hj-energi.png",
    logoAlt: "HJ-Energi logo",
  }),
  leaf({
    slug: "zealand-erhvervsakademi",
    title: "Zealand Business Academy.",
    lead: "Zealand wanted full control of its indoor climate in all classrooms.",
    category: "indoor-climate",
    logo: "/cases/zealand.png",
    logoAlt: "Zealand Business Academy logo",
  }),
  leaf({
    slug: "holbaek-kommune",
    title: "Holbæk Municipality.",
    lead: "We chose to work with RoomAlyzer because we want to focus on the indoor climate and give our employees the best conditions.",
    category: "indoor-climate",
    logo: "/cases/holbaek-kommune.png",
    logoAlt: "Holbæk Municipality logo",
  }),
];

/**
 * Danish slug catalog — aligned with [iot-fabrikken.com/cases](https://www.iot-fabrikken.com/cases/).
 * Copy stays in English per site language rules until Danish pages ship.
 */
const daCases: CaseStudyLeaf[] = [
  leaf({
    slug: "norddjurs-kommune",
    title: "Norddjurs Municipality.",
    lead: "Creates better layout by turning four buildings into three.",
    category: "space-management",
    logo: "/cases/norddjurs.png",
    logoAlt: "Norddjurs Municipality logo",
    articleHref: ARTICLE_LICITATIONEN,
    featured: true,
  }),
  leaf({
    slug: "varde-kommune",
    title: "Varde Municipality.",
    lead: "Improves well-being and ensures fair distribution by merging administrative buildings.",
    category: "space-management",
    logo: "/cases/varde.png",
    logoAlt: "Varde Municipality logo",
    articleHref: ARTICLE_LICITATIONEN,
    featured: true,
  }),
  leaf({
    slug: "dansk-industri",
    title: "Dansk Industri.",
    lead: "It makes a difference on the bottom line.",
    category: "space-management",
    logo: "/cases/dansk-industri.jpeg",
    logoAlt: "Dansk Industri logo",
    articleHref: ARTICLE_DANSK_INDUSTRY,
    featured: true,
  }),
  leaf({
    slug: "gribskov-kommune",
    title: "Gribskov Municipality.",
    lead: "Data to correctly dimension a new town hall.",
    category: "space-management",
    logo: "/cases/gribskov.webp",
    logoAlt: "Gribskov Municipality logo",
    featured: true,
  }),
  leaf({
    slug: "archdiocese-of-freiburg",
    title: "Archdiocese of Freiburg.",
    lead: "Sensitises volunteers through data-driven indoor climate understanding.",
    category: "indoor-climate",
    logo: "/cases/erzdioezese-freiburg.jpg",
    logoAlt: "Archdiocese of Freiburg logo",
    featured: true,
  }),
  leaf({
    slug: "evangelische-kirche-in-hessen-und-nassau",
    title: "Protestant Church in Hesse and Nassau.",
    lead: "Protects historic churches through precise indoor climate monitoring.",
    category: "indoor-climate",
    logo: "/cases/ekhn.jpg",
    logoAlt: "Protestant Church in Hesse and Nassau logo",
    articleHref: ARTICLE_EKHN,
    featured: true,
  }),
  leaf({
    slug: "sweco",
    title: "Sweco.",
    lead: "Sweco helps property owners ensure a good indoor climate in their buildings.",
    category: "indoor-climate",
    logo: "/cases/sweco.png",
    logoAlt: "Sweco logo",
  }),
  leaf({
    slug: "skade-teknik",
    title: "SKADE-teknik.",
    lead: "Many property managers and landlords find it difficult to document why mould occurs in a particular tenancy.",
    category: "indoor-climate",
    logo: "/cases/skade-teknik.png",
    logoAlt: "SKADE-teknik logo",
  }),
  leaf({
    slug: "boligselskabet-sjaelland",
    title: "Boligselskabet Sjælland.",
    lead: "Boligselskabet Sjælland experienced challenges in documenting the changes in indoor climate before and after renovations of buildings and apartments.",
    category: "indoor-climate",
    logo: "/cases/boligselskabet-sjaelland.png",
    logoAlt: "Boligselskabet Sjælland logo",
  }),
  leaf({
    slug: "vejen-kommune",
    title: "Vejen Municipality.",
    lead: "Vejen Municipality was experiencing complaints about indoor climate and was struggling to draw conclusions: what are facts and what are feelings?",
    category: "indoor-climate",
    logo: "/cases/vejen-kommune.png",
    logoAlt: "Vejen Municipality logo",
  }),
  leaf({
    slug: "rudersdal-museer",
    title: "Rudersdal Museums.",
    lead: "Rudersdal Museums was looking for a solution that would ensure an optimal indoor climate in the exhibition and storage rooms.",
    category: "indoor-climate",
    logo: "/cases/rudersdal-museer.jpg",
    logoAlt: "Rudersdal Museums logo",
  }),
  leaf({
    slug: "solroed-kommune",
    title: "Solrød Municipality.",
    lead: "Solrød Municipality had an older indoor climate sensor system.",
    category: "indoor-climate",
    logo: "/cases/solroed-kommune.jpg",
    logoAlt: "Solrød Municipality logo",
  }),
  leaf({
    slug: "gribskov-kommune-indoor-climate",
    title: "Gribskov Municipality.",
    lead: "The municipality is part of Realdania's indoor climate project and uses the RoomAlyzer platform to decide how to improve conditions in schools and other buildings.",
    category: "indoor-climate",
    logo: "/cases/gribskov.webp",
    logoAlt: "Gribskov Municipality logo",
  }),
  leaf({
    slug: "deutsches-museum-nordschleswig",
    title: "Deutsches Museum Nordschleswig.",
    lead: "Deutsches Museum Nordschleswig was missing the ability to read data remotely.",
    category: "indoor-climate",
    logo: "/cases/deutsches-museum-nordschleswig.png",
    logoAlt: "Deutsches Museum Nordschleswig logo",
  }),
  leaf({
    slug: "faaborg-museum",
    title: "Faaborg Museum.",
    lead: "Faaborg Museum spent a lot of time physically reading sensors.",
    category: "indoor-climate",
    logo: "/cases/faaborg-museum.jpg",
    logoAlt: "Faaborg Museum logo",
  }),
  leaf({
    slug: "hj-energi",
    title: "HJ-Energi.",
    lead: "At HJ-Energi, we work to make buildings function as they were intended.",
    category: "indoor-climate",
    logo: "/cases/hj-energi.png",
    logoAlt: "HJ-Energi logo",
  }),
  leaf({
    slug: "zealand-erhvervsakademi",
    title: "Zealand Business Academy.",
    lead: "Zealand wanted full control of its indoor climate in all classrooms.",
    category: "indoor-climate",
    logo: "/cases/zealand.png",
    logoAlt: "Zealand Business Academy logo",
  }),
  leaf({
    slug: "holbaek-kommune",
    title: "Holbæk Municipality.",
    lead: "We chose to work with RoomAlyzer because we want to focus on the indoor climate and give our employees the best conditions.",
    category: "indoor-climate",
    logo: "/cases/holbaek-kommune.png",
    logoAlt: "Holbæk Municipality logo",
  }),
];

const enHub = {
  title: "Customer cases.",
  titleAccent: "Join our customers in 15 countries.",
  eyebrow: "Cases",
  lead: "Stay ahead of indoor climate and space management with data in RoomAlyzer.",
};

function buildContent(lang: Lang, baseCases: CaseStudyLeaf[]): CaseStudiesContent {
  const leafOverlay = caseStudiesI18n.leaf[lang];
  const cases =
    lang === defaultLang || !leafOverlay
      ? baseCases
      : baseCases.map((entry) => {
          const o = leafOverlay[entry.slug];
          return o ? { ...entry, title: o.title, lead: o.lead } : entry;
        });
  return {
    hub: caseStudiesI18n.hub[lang] ?? enHub,
    intro: caseStudiesI18n.intro[lang] ?? sharedIntro,
    cases,
    initialVisible: INITIAL_VISIBLE,
  };
}

const byLang: Record<Lang, CaseStudiesContent> = {
  en: buildContent("en", enCases),
  da: buildContent("da", daCases),
  de: buildContent("de", enCases),
  sv: buildContent("sv", enCases),
};

export function getCaseStudiesContent(lang: Lang): CaseStudiesContent {
  return byLang[lang] ?? byLang[defaultLang];
}

/** Hub shape for static routes and legacy imports (English catalog). */
export function getCaseStudiesHub(lang: Lang = "en"): Hub {
  const { hub, cases } = getCaseStudiesContent(lang);
  return {
    slug: "case-studies",
    ...hub,
    leaves: cases,
  };
}

/** Resolve a single case-study card by slug for industry cross-links. */
export function resolveCaseStudyLeaf(
  slug: string,
  lang: Lang = defaultLang,
): CaseStudyLeaf | undefined {
  return getCaseStudiesContent(lang).cases.find((entry) => entry.slug === slug);
}

/** @deprecated Use `getCaseStudiesHub("en")` — kept for existing hub imports. */
export const caseStudiesHub: Hub = getCaseStudiesHub("en");

export const caseStudiesIntro = byLang.en.intro;

/**
 * German-market cases (iot-fabrikken.de/projekte/) — for a future `/de/` locale.
 * Featured order differs: church customers first, then shared Nordic references.
 */
export const deCaseStudiesFeaturedSlugs = [
  "archdiocese-of-freiburg",
  "evangelische-kirche-in-hessen-und-nassau",
  "norddjurs-municipality",
  "varde-municipality",
  "sweco",
  "dansk-industri",
] as const;
