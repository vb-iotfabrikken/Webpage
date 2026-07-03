/** Primary sensor slugs and compare use-case id per module landing page. */
export interface ModuleSensorLinks {
  primarySlugs: readonly string[];
  compareUseCaseId?: string;
}

const moduleSensorLinks: Record<string, ModuleSensorLinks> = {
  "indoor-climate": {
    primarySlugs: ["co2", "humidity", "mini-plus"],
    compareUseCaseId: "classroom",
  },
  preservation: {
    primarySlugs: ["humidity", "mini-plus", "outdoor"],
    compareUseCaseId: "heritage",
  },
  "space-management": {
    primarySlugs: ["desk", "motion", "mini-plus-pir"],
    compareUseCaseId: "hybrid-office",
  },
  "water-detection": {
    primarySlugs: ["water-detector", "water-rope"],
    compareUseCaseId: "leak",
  },
  "push-buttons": {
    primarySlugs: ["touch"],
    compareUseCaseId: "fm-service",
  },
  "lockers-doors": {
    primarySlugs: ["open-close"],
    compareUseCaseId: "fm-service",
  },
  "usage-cleaning": {
    primarySlugs: ["motion", "mini-plus-pir"],
    compareUseCaseId: "fm-service",
  },
};

export function getModuleSensorLinks(moduleSlug: string): ModuleSensorLinks | undefined {
  return moduleSensorLinks[moduleSlug];
}
