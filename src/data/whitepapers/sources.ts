import type { WhitepaperContentSource } from "./types";

/**
 * Maps published articles, case studies, and ROI assets to white paper chapters.
 * Use when authoring wave 1 PDFs — repackage existing content rather than start from scratch.
 */
export const whitepaperContentSources: WhitepaperContentSource[] = [
  // ── Classroom air quality ──────────────────────────────────────────────
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "methodology",
    chapterTitle: "What to measure, where, and when to act",
    articleSlug: "co2-monitoring-in-schools",
    notes:
      "Repurpose keyPoints (range, reporting, alarms, EN 16798), FAQ on sensor count and workplace inspection PDFs, and classroom placement guidance as methodology core.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    articleSlug: "rollout-in-varde-municipality",
    notes:
      "Full rollout narrative: 36 schools, 1,400 sensors, 9 weeks, caretaker onboarding, 23 % → 6 % exceedance reduction. Use as primary case chapter.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    caseStudySlug: "gribskov-kommune-indoor-climate",
    notes: "Realdania programme — facts vs feelings in school improvement.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    caseStudySlug: "vejen-kommune",
    notes: "Municipal indoor climate baseline and complaint resolution.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    caseStudySlug: "holbaek-kommune",
    notes: "School portfolio indoor climate documentation.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    caseStudySlug: "solroed-kommune",
    notes: "Municipal school climate monitoring reference.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "case-evidence",
    chapterTitle: "Municipal and school evidence",
    caseStudySlug: "zealand-erhvervsakademi",
    notes: "Vocational education classroom control example.",
  },
  {
    whitepaperSlug: "classroom-air-quality",
    chapterId: "worksheets",
    chapterTitle: "Pilot scope and KPI worksheets",
    roiReference: "schools",
    notes: "Export ROI calculator schools assumptions into appendix spreadsheet.",
  },

  // ── Hybrid office business case ────────────────────────────────────────
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "methodology",
    chapterTitle: "Desk optimiser and utilisation methodology",
    roiReference: "desk-optimiser",
    notes:
      "Mirror desk optimiser inputs (desk count, peak attendance %, cost per desk) and three goals (cut costs, repurpose, grow in place). Include heatmap and break-even outputs.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "case-evidence",
    chapterTitle: "Municipal consolidation and corporate proof",
    caseStudySlug: "norddjurs-municipality",
    externalUrl:
      "https://www.licitationen.dk/article/view/1148854/kommuner_skaber_fremtidens_arbejdsplads_med_data_og_space_management",
    notes: "Four buildings into three — Licitationen third-party validation.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "case-evidence",
    chapterTitle: "Municipal consolidation and corporate proof",
    caseStudySlug: "varde-municipality",
    notes: "Fair department allocation when merging administrative buildings.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "case-evidence",
    chapterTitle: "Municipal consolidation and corporate proof",
    caseStudySlug: "gribskov-municipality",
    notes: "Town hall dimensioning without overbuilding.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "case-evidence",
    chapterTitle: "Municipal consolidation and corporate proof",
    caseStudySlug: "dansk-industri",
    externalUrl:
      "https://dfm-net.dk/space-management-med-sensorer-frigav-650-kvm-og-det-det-batter-paa-bundlinjen/",
    notes: "650 m² freed; ~1M DKK investment → up to 1.5M DKK year-one savings.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "energy-bundle",
    chapterTitle: "Pairing occupancy with indoor climate",
    roiReference: "energy-saver",
    notes: "Office facility type inputs for occupancy-aware HVAC setback appendix.",
  },
  {
    whitepaperSlug: "hybrid-office-business-case",
    chapterId: "case-evidence",
    chapterTitle: "Municipal consolidation and corporate proof",
    articleSlug: "rollout-in-varde-municipality",
    notes: "Cross-reference Varde rollout discipline for large portfolio change management.",
  },

  // ── Museum preservation monitoring ─────────────────────────────────────
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "methodology",
    chapterTitle: "EN 15757 in practice — measurement methodology",
    articleSlug: "en-15757-in-practice",
    notes:
      "Primary methodology source: 60 parishes, historic bands, 94 % in band finding, sensor placement in microclimates, grant PDF exports.",
  },
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "methodology",
    chapterTitle: "EN 15757 in practice — measurement methodology",
    articleSlug: "humidity-in-churches",
    notes: "Heritage RH patterns — adapt church microclimate lessons to museum storage and loan crates.",
  },
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "case-evidence",
    chapterTitle: "Museum customer evidence",
    caseStudySlug: "rudersdal-museer",
    notes: "Remote monitoring; reduced manual reading rounds.",
  },
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "case-evidence",
    chapterTitle: "Museum customer evidence",
    caseStudySlug: "faaborg-museum",
    notes: "Collection climate documentation for regional museum.",
  },
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "case-evidence",
    chapterTitle: "Museum customer evidence",
    caseStudySlug: "deutsches-museum-nordschleswig",
    notes: "German-Danish border museum heritage context.",
  },
  {
    whitepaperSlug: "museum-preservation-monitoring",
    chapterId: "worksheets",
    chapterTitle: "Monitoring scope worksheets",
    roiReference: "museums",
    notes: "ROI calculator museums tab for preservation risk framing in appendix.",
  },

  // ── Indoor climate ESG reporting ────────────────────────────────────────────────────────────────────────────────────
  {
    whitepaperSlug: "indoor-climate-esg-reporting",
    chapterId: "methodology",
    chapterTitle: "Metrics mapping methodology",
    articleSlug: "mqtt-integration",
    notes: "Platform export and integration patterns for ESG data pipelines.",
  },
  {
    whitepaperSlug: "indoor-climate-esg-reporting",
    chapterId: "case-evidence",
    chapterTitle: "Consultant and property owner evidence",
    caseStudySlug: "sweco",
    notes: "DGNB indoor climate mapping — consultant-led certification workflow.",
  },
  {
    whitepaperSlug: "indoor-climate-esg-reporting",
    chapterId: "worksheets",
    chapterTitle: "ESG data readiness worksheets",
    roiReference: "energy-saver",
    notes: "Energy saver ROI model for operational carbon narrative appendix.",
  },
  {
    whitepaperSlug: "indoor-climate-esg-reporting",
    chapterId: "technology",
    chapterTitle: "Platform architecture for reporting teams",
    roiReference: "offices",
    notes: "Cross-link offices ROI leaf for portfolio-scale ESG officer briefing.",
  },
];

/** Content sources for a single white paper slug. */
export function getWhitepaperContentSources(slug: string): WhitepaperContentSource[] {
  return whitepaperContentSources.filter((s) => s.whitepaperSlug === slug);
}

/** Group sources by chapter id for authoring dashboards. */
export function getWhitepaperSourcesByChapter(
  slug: string,
): Record<string, WhitepaperContentSource[]> {
  const sources = getWhitepaperContentSources(slug);
  return sources.reduce<Record<string, WhitepaperContentSource[]>>((acc, source) => {
    const key = source.chapterId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(source);
    return acc;
  }, {});
}
