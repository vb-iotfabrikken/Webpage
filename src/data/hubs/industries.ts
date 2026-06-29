import type { Hub } from "./types";
import { defaultLang, type Lang } from "../lang";
import { industriesHubI18n } from "./industryHub.i18n";

export const industriesHub: Hub = {
  slug: "industries",
  title: "Built for your sector.",
  titleAccent: "From the first sensor to the thousandth.",
  eyebrow: "Industries",
  lead: "Every industry has its own rhythms, regulations and pain points. We have rolled out IoT in all of these — and more.",
  leaves: [
    {
      slug: "offices",
      eyebrow: "Industry",
      title: "Offices.",
      titleAccent: "Hybrid work, measured.",
      lead: "Utilisation, comfort and energy in modern offices — the three levers that decide whether people come in.",
    },
    {
      slug: "schools",
      eyebrow: "Industry",
      title: "Schools.",
      titleAccent: "Better air, better focus.",
      lead: "CO2, temperature and humidity monitoring that documents the indoor climate in every classroom.",
    },
    {
      slug: "hospitals",
      eyebrow: "Industry",
      title: "Hospitals.",
      titleAccent: "Where every degree matters.",
      lead: "Monitoring of storage rooms, medicine cabinets, wards and laboratories with audit-ready reports.",
    },
    {
      slug: "museums-galleries",
      eyebrow: "Industry",
      title: "Museums and galleries.",
      titleAccent: "Preserve what you exhibit.",
      lead: "Climate data aligned with international preservation standards for collections and loan objects.",
    },
    {
      slug: "churches",
      eyebrow: "Industry",
      title: "Churches.",
      titleAccent: "Care for organs and frescoes.",
      lead: "Humidity, temperature and condensation monitoring that protects historic buildings and their contents.",
    },
    {
      slug: "archives-libraries",
      eyebrow: "Industry",
      title: "Archives and libraries.",
      titleAccent: "Document the preservation.",
      lead: "Continuous climate logging and alarms for rare books, manuscripts and sensitive paper archives.",
    },
    {
      slug: "manors-castles",
      eyebrow: "Industry",
      title: "Manors and castles.",
      titleAccent: "Heritage that lasts.",
      lead: "Monitor humidity and temperature in unheated halls, cellars and storage spaces — without damaging surfaces.",
    },
    {
      slug: "municipalities",
      eyebrow: "Industry",
      title: "Municipalities.",
      titleAccent: "One overview, many buildings.",
      lead: "Schools, day-care centres, administration and cultural institutions — aggregated into a single platform.",
    },
    {
      slug: "hotels",
      eyebrow: "Industry",
      title: "Hotels.",
      titleAccent: "Comfort without waste.",
      lead: "Occupancy-driven climate and cleaning in guest rooms, meeting rooms and public areas.",
    },
    {
      slug: "retail",
      eyebrow: "Industry",
      title: "Retail.",
      titleAccent: "Store operations, smarter.",
      lead: "Fridge and freezer monitoring, footfall and indoor climate across single shops or whole chains.",
    },
    {
      slug: "warehouses-logistics",
      eyebrow: "Industry",
      title: "Warehouses and logistics.",
      titleAccent: "Protect what sits on the shelves.",
      lead: "Temperature, humidity and water detection for storage, cold chain and loading bays.",
    },
    {
      slug: "elderly-care",
      eyebrow: "Industry",
      title: "Elderly care.",
      titleAccent: "A safer, calmer day.",
      lead: "Indoor-climate monitoring and service buttons that make everyday care easier for residents and staff.",
    },
    {
      slug: "property-management",
      eyebrow: "Industry",
      title: "Property management.",
      titleAccent: "Fewer complaints, faster fixes.",
      lead: "Documentation of indoor climate in tenants' spaces and early leak warnings across your portfolio.",
    },
    {
      slug: "fm-companies",
      eyebrow: "Industry",
      title: "FM companies.",
      titleAccent: "White-label the data layer.",
      lead: "Add a measurable, data-driven service on top of your existing facility-management offering.",
    },
    {
      slug: "consulting-engineers",
      eyebrow: "Industry",
      title: "Consulting engineers.",
      titleAccent: "Facts for your client advice.",
      lead: "Temporary and permanent measurements that back up commissioning, energy audits and renovation projects.",
    },
  ],
};

/** Localized industries hub with English fallback. */
export function getIndustriesHub(lang: Lang = defaultLang): Hub {
  if (lang === defaultLang) return industriesHub;

  const overlay = industriesHubI18n[lang];

  const leaves = industriesHub.leaves.map((leaf) => {
    const lo = overlay?.leaves?.[leaf.slug];
    return {
      ...leaf,
      title: lo?.title ?? leaf.title,
      titleAccent: lo?.titleAccent ?? leaf.titleAccent,
      lead: lo?.lead ?? leaf.lead,
    };
  });

  return {
    ...industriesHub,
    title: overlay?.title ?? industriesHub.title,
    titleAccent: overlay?.titleAccent ?? industriesHub.titleAccent,
    eyebrow: overlay?.eyebrow ?? industriesHub.eyebrow,
    lead: overlay?.lead ?? industriesHub.lead,
    leaves,
  };
}
