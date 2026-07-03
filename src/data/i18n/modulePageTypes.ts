export type ModuleProseSegment =
  | { type: "text"; value: string }
  | { type: "sensor"; slug: string; label: string }
  | { type: "compare"; label: string; useCaseId: string };

export type ModuleProseWithLinks = ModuleProseSegment[];

export interface ModuleSpotlightVariant {
  key: "compact" | "pro";
  label: string;
  caption: string;
  alt: string;
  hrefSlug: "water-detector";
}

export interface ModuleSpotlight {
  heading: string;
  useCasesHeading: string;
  variants: [ModuleSpotlightVariant, ModuleSpotlightVariant];
  useCases: { title: string; body: string }[];
}

/** Optional editorial hero gallery (preservation). */
export interface ModuleHeroGallery {
  images: [{ alt: string; caption: string }, { alt: string; caption: string }];
  intro: {
    heading: string;
    paragraphs: string[];
  };
}

/** Shared string shape for rich module landing pages. */
export interface ModulePageStrings {
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbModules: string;
  breadcrumbCurrent: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroLead: string;
  intro: string[];
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  dashboardLabel: string;
  dashboardAlt: string;
  challengesEyebrow: string;
  challengesHeading: string;
  challenges: { title: string; body: string }[];
  capabilitiesEyebrow: string;
  capabilitiesHeading: string;
  solutionLead: string;
  /** When set, renders solutionLead with inline sensor and compare links. */
  solutionLeadWithSensorLinks?: ModuleProseWithLinks;
  /** Trust metrics beside the featured capabilities panel (preservation). */
  solutionProofPoints?: readonly { value: string; label: string }[];
  capabilitiesContextAlt: string;
  features: {
    id: string;
    title: string;
    body: string;
    bodyWithSensorLinks?: ModuleProseWithLinks;
    unit: string;
    imageAlt: string;
  }[];
  /** Optional hero-adjacent sensor spotlight (water detection). */
  spotlight?: ModuleSpotlight;
  /** Optional editorial photo gallery below the hero (preservation). */
  heroGallery?: ModuleHeroGallery;
  relatedModuleLabel: string;
  relatedModuleBody: string;
  relatedModuleLink: string;
  audiencesEyebrow: string;
  audiencesHeading: string;
  audiencesLead: string;
  primaryAudienceHeading: string;
  primaryAudienceItems: string[];
  secondaryAudienceHeading: string;
  secondaryAudienceItems: string[];
  faqTitle: string;
  faqContextAlt: string;
  faqItems: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaMicrocopy: string;
}
