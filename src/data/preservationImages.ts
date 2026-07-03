/** Hero editorial photos for the preservation module page. */
export const preservationHeroGalleryImages = {
  archive: {
    src: "/images/modules/preservation-hero-archive.webp",
    width: 960,
    height: 582,
    placeholderLabel: "RoomAlyzer sensor in an archive stack",
  },
  manuscript: {
    src: "/images/modules/preservation-hero-manuscript.webp",
    width: 960,
    height: 581,
    placeholderLabel: "Manuscript in a display case with a climate sensor",
  },
} as const;

/** Legacy dashboard slot — unused when heroVisual is gallery. */
export const preservationDashboard = {
  width: 1024,
  height: 595,
  placeholderLabel: "Preservation dashboard screenshot",
};

/** Editorial photo beside the capabilities section intro. */
export const preservationCapabilitiesContext = {
  src: "/images/modules/preservation-capabilities-context.webp",
  width: 1200,
  height: 869,
  placeholderLabel: "Specialist maintaining a historic pipe organ",
} as const;

export const preservationFeatureImages: Record<
  string,
  { width: number; height: number; placeholderLabel: string; src?: string }
> = {
  "mould-risk": {
    src: "/images/modules/preservation-feature-mould-risk.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Mould risk (VTT) analysis in RoomAlyzer",
  },
  "bizot-green": {
    src: "/images/modules/preservation-feature-bizot-green.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Bizot Green compliance analysis in RoomAlyzer",
  },
  ashrae: {
    src: "/images/modules/preservation-feature-ashrae.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "ASHRAE climate class analysis in RoomAlyzer",
  },
  "preservation-index": {
    src: "/images/modules/preservation-feature-preservation-index.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Preservation Index rating in RoomAlyzer",
  },
  fluctuations: {
    src: "/images/modules/preservation-feature-fluctuations.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "EN 15757 fluctuations tracking in RoomAlyzer",
  },
  "heat-ventilation": {
    src: "/images/modules/preservation-feature-heat-ventilation.webp",
    width: 1200,
    height: 750,
    placeholderLabel: "Preservation heat and ventilation analysis in RoomAlyzer",
  },
};
