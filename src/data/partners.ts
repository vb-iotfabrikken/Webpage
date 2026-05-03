/**
 * Technology and commercial partners. Rendered at `/en/about/partners/`.
 *
 * Keep entries factual and short — this is a credibility page, not a sales
 * pitch for the partner.
 */

export type Partner = {
  name: string;
  kind: "reseller" | "integrator" | "technology" | "academic";
  country: string;
  description: string;
  url?: string;
};

export const partners: Partner[] = [
  {
    name: "Dalux",
    kind: "technology",
    country: "Denmark",
    description: "Construction and FM software used by most Danish housing associations. RoomAlyzer feeds indoor-climate data directly into Dalux FM.",
    url: "https://www.dalux.com/",
  },
  {
    name: "Pronestor",
    kind: "technology",
    country: "Denmark",
    description: "Meeting-room booking software. Our occupancy sensors auto-release ghost bookings end to end.",
    url: "https://www.pronestor.com/",
  },
  {
    name: "OS2iot",
    kind: "technology",
    country: "Denmark",
    description: "The shared LoRaWAN platform run by Danish municipalities. IoT Fabrikken is a registered device vendor on OS2iot.",
    url: "https://www.os2.eu/os2iot",
  },
  {
    name: "Disruptive Technologies",
    kind: "technology",
    country: "Norway",
    description: "Miniature wireless sensors for micro-environments. Sold as the RoomAlyzer Series B through our catalogue.",
    url: "https://www.disruptive-technologies.com/",
  },
  {
    name: "Efento",
    kind: "technology",
    country: "Poland",
    description: "NB-IoT sensor hardware for harsh and cellular-only environments. Sold as the RoomAlyzer Series C.",
    url: "https://efento.io/",
  },
  {
    name: "Sweco",
    kind: "integrator",
    country: "Nordic region",
    description: "European engineering and architecture consultancy. Specifies RoomAlyzer on indoor-climate and preservation projects.",
    url: "https://www.sweco.com/",
  },
  {
    name: "NIRAS",
    kind: "integrator",
    country: "Denmark",
    description: "Danish consulting engineers with deep indoor-climate experience in schools and heritage buildings.",
    url: "https://www.niras.com/",
  },
  {
    name: "Rambøll",
    kind: "integrator",
    country: "Nordic region",
    description: "Engineering consultancy that integrates RoomAlyzer into ESG and DGNB certification projects.",
    url: "https://www.ramboll.com/",
  },
  {
    name: "DTU – Technical University of Denmark",
    kind: "academic",
    country: "Denmark",
    description: "Joint research on indoor-climate metrics, occupancy algorithms and data-driven facility management.",
    url: "https://www.dtu.dk/",
  },
  {
    name: "The National Museum of Denmark",
    kind: "academic",
    country: "Denmark",
    description: "Research collaboration on preservation-climate standards and travel-logger protocols.",
    url: "https://en.natmus.dk/",
  },
];

export const partnerKinds: Record<Partner["kind"], { label: string; blurb: string }> = {
  reseller: {
    label: "Resellers",
    blurb: "Partners who sell and invoice IoT Fabrikken products under their own brand.",
  },
  integrator: {
    label: "Integrators",
    blurb: "Consulting engineers and implementation specialists who design RoomAlyzer into larger projects.",
  },
  technology: {
    label: "Technology partners",
    blurb: "Platforms and hardware vendors whose products complement or integrate with RoomAlyzer.",
  },
  academic: {
    label: "Research and academic",
    blurb: "Research collaborations with universities and national institutions.",
  },
};
