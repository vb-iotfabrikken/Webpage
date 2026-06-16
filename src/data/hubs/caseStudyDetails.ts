import type { CaseStudyLeaf } from "./caseStudies";
import { defaultLang, type Lang } from "../lang";
import { getCaseDetailOverlay } from "./caseStudyDetails.i18n";

export type CaseStudyQuote = {
  heading: string;
  subtitle?: string;
  body: string;
  attribution?: string;
};

export type CaseStudyDetail = {
  /** Short headline shown under the customer name in the hero. */
  titleAccent: string;
  /** Body copy below the hero (first paragraph may also appear in the hero lead). */
  intro: string[];
  quote?: CaseStudyQuote;
};

/** Maps locale-specific slugs to the canonical English detail key. */
const slugAliases: Record<string, string> = {
  "norddjurs-kommune": "norddjurs-municipality",
  "varde-kommune": "varde-municipality",
  "gribskov-kommune": "gribskov-municipality",
  "gribskov-kommune-indoor-climate": "gribskov-kommune",
};

const details: Record<string, CaseStudyDetail> = {
  "norddjurs-municipality": {
    titleAccent: "Documents the required number of workspaces.",
    intro: [
      "The politicians in Norddjurs Municipality have decided to close one of their four administrative buildings. As a result, Dilan Kocabas and the Property Centre are measuring to ensure there is enough space for everyone and the right facilities for staff.",
    ],
    quote: {
      heading: "What do Norddjurs Municipality say?",
      body: "We need to know how many workspaces our employees actually require. The office should be a pleasant place designed to meet their needs. Many of our staff work out in the field, and like everywhere else, more are also working from home. It is also, of course, about spending taxpayers' money wisely.",
    },
  },
  "varde-municipality": {
    titleAccent: "Consolidation and fair allocation between departments.",
    intro: [
      "Varde has, at a political level, decided to divest one of its administrative buildings and gather staff at the town hall. Betina Christensen and her team are therefore measuring at both locations to ensure correct sizing and layout.",
    ],
    quote: {
      heading: "What do Varde Municipality say?",
      body: "The data from the sensors give me an objective picture of how much space we actually need and how much space each area should be allocated to ensure fair design. We also gain insights into how many and what size meeting rooms are required.",
    },
  },
  "dansk-industri": {
    titleAccent: "Space management with sensors freed up 650 square metres — and that makes a difference on the bottom line.",
    intro: [
      "Jimmy Holk has been on a long journey with workplace design. Measuring desks and meeting rooms with sensors has provided the documentation to cut many square metres.",
    ],
    quote: {
      heading: "What do Dansk Industri say?",
      body: "I can't operate based on everyone's opinions and feelings. And I'm in a political house where you don't make such big changes without having your arguments and thus also your documentation in order. I get that with the IoT solution.",
    },
  },
  "gribskov-municipality": {
    titleAccent: "Data to correctly dimension a new town hall.",
    intro: [
      "Prior to the construction of a new town hall, Gribskov Municipality is measuring the use of the current one with sensors. For the sake of both the budget and the green transition, the municipality wants to ensure that it does not build more than necessary.",
    ],
    quote: {
      heading: "What do Gribskov Municipality say?",
      body: "The group management was extremely enthusiastic about the data we can provide to qualify their decision-making basis for several different decisions. The response is that they can now move on from opinions and assumptions. Then they were very surprised at how little we actually use our desks — and the inefficient use of meeting rooms (few participants in large meeting rooms). It really gave them food for thought.",
    },
  },
  "gribskov-kommune": {
    titleAccent: "Indoor climate data for schools and municipal buildings.",
    intro: [
      "The municipality is part of Realdania's indoor climate project and uses the RoomAlyzer platform to decide how to improve conditions in schools and other buildings.",
    ],
  },
  "archdiocese-of-freiburg": {
    titleAccent: "Sensitising volunteers through data-driven indoor climate understanding.",
    intro: [
      "The sensor solution enables continuous measurement of temperature and humidity in church spaces. Climate risks can be detected early and awareness among volunteers strengthened — on a platform tailored to church requirements.",
    ],
    quote: {
      heading: "What does the Archdiocese of Freiburg say?",
      body: "People do not have a reliable sense of relative humidity — yet it plays a decisive role for indoor climate in our churches. That is why we measure with sensors. Continuous capture of temperature and humidity helps us understand conditions on site precisely. The data helps us sensitise volunteers to the topic and react in time to potential risks to buildings and furnishings. That is a major benefit for our work. We chose IoT Fabrikken because they offer a very clear platform and are flexible about our needs — which fits well in a church context.",
      attribution: "Claudia Dambacher, advisor, Church protection",
    },
  },
  "evangelische-kirche-in-hessen-und-nassau": {
    titleAccent: "Protects historic churches through precise indoor climate monitoring.",
    intro: [
      "Historic church buildings need stable conditions year-round. Wireless sensors and RoomAlyzer give facility teams continuous humidity and temperature data without disturbing services or heritage interiors.",
    ],
  },
  sweco: {
    titleAccent: "Indoor climate documentation for property owners and DGNB projects.",
    intro: [
      "Sweco helps property owners ensure a good indoor climate in their buildings.",
    ],
    quote: {
      heading: "What do Sweco say?",
      body: "Sweco already works with DGNB certifications in many of their projects. With the RoomAlyzer system from IoT Fabrikken, it is possible to map indoor climate conditions specifically in DGNB projects, where flexible indoor climate monitoring can also be part of the methodology. The sensors, which measure everything from temperature, CO2 concentration, humidity, TVOC, sound, and light, are easy to install and do not disturb the building's users, who can also use the loggers themselves to monitor and ensure a good indoor climate. In the portal, used together with the indoor climate loggers, DGNB reports can be generated with just a few clicks, selecting which sensors and intervals to include in the report.",
      attribution: "Frederik Kastrup, sustainability engineer, Sweco Denmark",
    },
  },
  "skade-teknik": {
    titleAccent: "Documenting indoor climate when tenants and landlords disagree.",
    intro: [
      "Many property managers and landlords find it difficult to document why mould occurs in a particular tenancy, and the solutions are often complicated and expensive. SKADE-teknik wanted to help its customers in the housing sector with a simple solution.",
    ],
    quote: {
      heading: "What do SKADE-teknik say?",
      subtitle: "Resolving mould conflicts between tenant and landlord",
      body: "A good example of how we use the RoomAlyzer platform is my latest case for a housing association. The caretaker had received complaints from some residents who believed they had mould due to the nature of the building. It is a classic situation where there has been a long dialogue between tenant and landlord, and it reaches a deadlock because it is word against word. Instead, we came in and started measuring with the RoomAlyzer platform and after a few weeks of measuring, we realised that there was nothing wrong with the building, but that it was about the residents turning up the heat too high and not ventilating. This allowed us to resolve the conflict and start teaching the residents some new habits. It is also about the fact that IoT devices are easy to use. You just go in and set up the sensor and then you leave. We have previously worked with some sensors that required a gateway and have experienced that a child in the apartment will switch off the gateway. We have also had to work with old-fashioned data loggers that need to be emptied of data many times. With this sensor, we can follow in real-time and stop measuring when it makes sense, instead of having to go out and empty an old-fashioned sensor every fortnight.",
      attribution: "Bo J. Mortensen, owner, SKADE-teknik, Aalborg",
    },
  },
  "boligselskabet-sjaelland": {
    titleAccent: "Documenting indoor climate before and after renovation.",
    intro: [
      "Boligselskabet Sjælland experienced challenges in documenting the changes in indoor climate before and after renovations of buildings and apartments.",
    ],
  },
  "vejen-kommune": {
    titleAccent: "Separating facts from feelings about indoor climate.",
    intro: [
      "Vejen Municipality was experiencing complaints about indoor climate and was struggling to draw conclusions: what are facts and what are feelings?",
    ],
  },
  "rudersdal-museer": {
    titleAccent: "Stable conditions in exhibition and storage rooms.",
    intro: [
      "Rudersdal Museums was looking for a solution that would ensure an optimal indoor climate in the exhibition and storage rooms.",
    ],
  },
  "solroed-kommune": {
    titleAccent: "Upgrading from a legacy sensor system.",
    intro: [
      "Solrød Municipality had an older indoor climate sensor system and needed a modern platform for ongoing monitoring and reporting.",
    ],
  },
  "deutsches-museum-nordschleswig": {
    titleAccent: "Remote access to climate data.",
    intro: [
      "Deutsches Museum Nordschleswig was missing the ability to read data remotely. Wireless loggers now deliver continuous readings without manual rounds in the building.",
    ],
  },
  "faaborg-museum": {
    titleAccent: "Less time spent reading sensors by hand.",
    intro: [
      "Faaborg Museum spent a lot of time physically reading sensors. RoomAlyzer automates collection so staff can focus on conservation work.",
    ],
  },
  "hj-energi": {
    titleAccent: "Data for building performance advice.",
    intro: [
      "At HJ-Energi, we work to make buildings function as they were intended. Sensor data supports commissioning, troubleshooting and client reporting.",
    ],
  },
  "zealand-erhvervsakademi": {
    titleAccent: "Full control of indoor climate in every classroom.",
    intro: [
      "Zealand wanted full control of its indoor climate in all classrooms. Continuous CO2 and temperature data help facilities teams ventilate and heat at the right times.",
    ],
  },
  "holbaek-kommune": {
    titleAccent: "Better indoor climate for employees.",
    intro: [
      "We chose to work with RoomAlyzer because we want to focus on the indoor climate and give our employees the best conditions.",
    ],
  },
};

function canonicalSlug(slug: string): string {
  return slugAliases[slug] ?? slug;
}

export function getCaseStudyDetail(
  slug: string,
  lang: Lang = defaultLang,
): CaseStudyDetail | undefined {
  const canonical = canonicalSlug(slug);
  const base = details[canonical];
  if (!base) return undefined;
  if (lang === defaultLang) return base;
  const overlay = getCaseDetailOverlay(canonical, lang);
  if (!overlay) return base;
  return {
    ...base,
    ...overlay,
    intro: overlay.intro ?? base.intro,
    quote: overlay.quote ?? base.quote,
  };
}

/** Detail content for a case card, with a sensible fallback from the index teaser. */
export function resolveCaseStudyDetail(
  leaf: CaseStudyLeaf,
  lang: Lang = defaultLang,
): CaseStudyDetail {
  const found = getCaseStudyDetail(leaf.slug, lang);
  if (found) return found;
  return {
    titleAccent: "",
    intro: [leaf.lead],
  };
}
