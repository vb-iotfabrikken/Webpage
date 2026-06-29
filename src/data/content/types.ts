export type ModulePageContent = {
 slug: string;
 heroTitle: string;
 heroTitleAccent: string;
 heroLead: string;
 challenges: string[];
 solution: string[];
 smarterTogether?: string;
 closing?: string;
};

export type SensorPageContent = {
 slug: string;
 heroTitle: string;
 heroTitleAccent: string;
 heroLead: string;
 useCases: string;
 benefits: { title: string; body: string }[];
 cloudConnectorNote?: string;
};

export type PlatformSection = {
 heading?: string;
 paragraphs?: string[];
 listIntro?: string;
 list?: string[];
};

export type PlatformPageContent = {
 slug: string;
 heroTitle: string;
 heroTitleAccent?: string;
 heroLead: string;
 sections: PlatformSection[];
};

export type IndustrySensorRecommendation = {
 name: string;
 badge: string;
 body: string;
 sensorSlugs: string[];
};

export type IndustryPageContent = {
  slug: string;
  /** Optional display title for homepage cards when it differs from the hub title. */
  cardTitle?: string;
  /** Short teaser for homepage industry cards. Defaults to the first sentence of `focus`. */
  cardSummary?: string;
  focus: string;
  challenges?: string[];
  solution?: string[];
  smarterTogether?: string;
  closing?: string;
  sensorRecommendations: IndustrySensorRecommendation[];
  featuredArticleSlugs?: string[];
  featuredCaseStudySlugs?: string[];
  relevantModuleSlugs?: string[];
};
