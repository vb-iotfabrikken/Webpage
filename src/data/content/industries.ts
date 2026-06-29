import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { IndustryPageContent } from "./types";
import { industryContentI18n } from "./industryContent.i18n";

export const industryPageContent: IndustryPageContent[] = [
  {
    slug: "offices",
    cardTitle: "Offices & Workplaces",
    cardSummary:
      "Balance space utilisation in hybrid workplaces with employee productivity and comfort.",
    focus:
      "The main focus here is balancing space utilization (hybrid work) with employee productivity and comfort.",
    sensorRecommendations: [
      {
        name: "Desk Sensor",
        badge: "Highly recommended",
        body: "Installed under desks to measure real occupancy, providing data to right-size floor space or identify ghost zones.",
        sensorSlugs: ["desk"],
      },
      {
        name: "Motion Sensor",
        badge: "Essential",
        body: "Captures room-level presence data to validate meeting-room and open-plan workspace usage.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Mini+ PIR",
        badge: "Perfect for shared spaces",
        body: "Combines climate monitoring with occupancy tracking in a single unit — ideal for shared office spaces and conference rooms.",
        sensorSlugs: ["mini-plus-pir"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Necessary for focus",
        body: "Measures CO2, temperature, humidity, and VOCs to fight afternoon fatigue and maintain peak cognitive performance.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
    ],
  },
  {
    slug: "churches",
    cardTitle: "Churches & Heritage",
    cardSummary:
      "Protect historic interiors with precise humidity and temperature control in large, unevenly heated buildings.",
    focus:
      "Heritage buildings have massive volumes of air and unique architectural profiles, making microclimate control and heating waste the core issues.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Vital",
        body: "Tracks structural temperature and humidity trends to protect building materials, historic woodwork, or organ mechanics.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature Sensor",
        badge: "Recommended",
        body: "Allows the facility team to spot-check massive, unevenly heated HVAC zones and isolated plant rooms.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Outdoor Sensor",
        badge: "Highly critical",
        body: "Legacy stone buildings react strongly to external weather; this sensor separates indoor climate data from heavy outdoor weather swings.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  {
    slug: "museums-galleries",
    cardTitle: "Museums & Culture",
    cardSummary:
      "Mitigate risk and preserve sensitive collections with continuous climate monitoring aligned to preservation standards.",
    focus:
      "For museums, the ultimate goal is risk mitigation and preserving highly sensitive, priceless assets from indoor environment shifts.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Non-negotiable",
        body: "Continuous, wireless tracking of temperature and relative humidity is crucial to prevent the deterioration of delicate artwork and artifacts.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion Sensor",
        badge: "Clever use case",
        body: "Tracks visitor traffic by mapping room-level presence, so curators can correlate sudden spikes in humidity with high-traffic visitor hours.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Outdoor Sensor",
        badge: "Proactive control",
        body: "Ensures the HVAC system can proactively adjust based on external atmospheric changes before they affect delicate indoor exhibition galleries.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  {
    slug: "municipalities",
    cardTitle: "Schools & Municipalities",
    cardSummary:
      "Prioritise student health, concentration, and energy setbacks across schools, administration, and cultural buildings.",
    focus:
      "Municipalities and educational spaces prioritize student health, concentration, and automating energy setbacks when buildings are vacant.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Crucial for classrooms",
        body: "Monitors CO2, temperature, humidity, and VOCs to ensure a low-CO2 environment, which is directly tied to student focus and health.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Mini+ PIR / Motion Sensor",
        badge: "Ideal for shared halls",
        body: "Maps true usage patterns in classrooms, auditoriums, and community halls so the municipality can confidently execute heating or ventilation setbacks when rooms are empty.",
        sensorSlugs: ["mini-plus-pir", "motion"],
      },
      {
        name: "Temperature Sensor",
        badge: "Useful across campuses",
        body: "Tracks boiler rooms, gymnasiums, or secondary HVAC zones across a campus.",
        sensorSlugs: ["temperature"],
      },
    ],
  },
  {
    slug: "schools",
    cardSummary:
      "Document CO2, temperature, and humidity in every classroom to protect student focus and health.",
    focus:
      "Schools need objective indoor-climate data in every learning space — not just to meet guidelines, but to prove that ventilation and heating actually support concentration when rooms are full.",
    sensorRecommendations: [
      {
        name: "CO2 Sensor",
        badge: "Classroom baseline",
        body: "Live CO2 levels with alerts before classrooms pass the 1,000 ppm guideline — the fastest way to know when it is time to ventilate.",
        sensorSlugs: ["co2"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Complete picture",
        body: "Adds temperature, humidity, and VOC to the CO2 picture in one discreet unit per classroom or specialist room.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Mini+ PIR / Motion Sensor",
        badge: "After-hours savings",
        body: "Maps real occupancy in classrooms, sports halls, and auditoriums so heating and ventilation can step back when rooms are empty.",
        sensorSlugs: ["mini-plus-pir", "motion"],
      },
      {
        name: "Outdoor Sensor",
        badge: "Smarter airing",
        body: "Gives teachers and caretakers an outdoor reference so window-ventilation routines reflect actual weather conditions.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  {
    slug: "hospitals",
    cardSummary:
      "Monitor wards, storage, and labs with audit-ready climate data where every degree matters.",
    focus:
      "Hospitals must balance patient comfort, infection control, and strict storage conditions — often across wards, pharmacies, labs, and cold rooms that each need their own thresholds.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Wards and clinics",
        body: "Continuous CO2, temperature, humidity, and VOC monitoring in patient-facing areas to document air quality and comfort.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature Sensor",
        badge: "Critical storage",
        body: "Dedicated loggers for medicine cabinets, blood banks, and cold rooms where narrow temperature bands require proof on demand.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity Sensor",
        badge: "Infection control",
        body: "Tracks relative humidity in wards and treatment rooms where dry or damp air affects both patients and equipment.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Detector",
        badge: "Early warning",
        body: "Instant alerts in plant rooms, shafts, and service areas before a leak reaches clinical or electrical zones.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  {
    slug: "elderly-care",
    cardSummary:
      "Stable indoor climate and simple service requests that make everyday care safer and calmer.",
    focus:
      "Care homes and nursing facilities serve vulnerable residents around the clock — stable temperature and humidity reduce discomfort and health risk, while staff need fast ways to respond when something needs attention.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Resident comfort",
        body: "Monitors CO2, temperature, humidity, and VOC in common areas and resident rooms to keep conditions stable day and night.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature Sensor",
        badge: "Spot-check zones",
        body: "Useful in laundry rooms, kitchens, and poorly insulated wings where a dedicated logger adds precision.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Touch Sensor",
        badge: "Staff and residents",
        body: "One-tap service calls from washrooms, dining areas, or resident rooms — no phones, no hunting for the right extension.",
        sensorSlugs: ["touch"],
      },
      {
        name: "Water Detector",
        badge: "Protect the building",
        body: "Early leak detection in bathrooms, kitchens, and plant areas before moisture spreads into resident spaces.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  {
    slug: "retail",
    cardSummary:
      "Monitor shop-floor comfort, cold-chain equipment, and footfall patterns across single stores or chains.",
    focus:
      "Retail operations juggle shopper comfort, staff wellbeing, and equipment uptime — fridges that fail quietly, stores that overheat on busy Saturdays, and energy spent heating empty floors after closing.",
    sensorRecommendations: [
      {
        name: "Temperature Sensor",
        badge: "Cold chain",
        body: "Continuous monitoring of fridges, freezers, and display cases with alarms before stock is lost.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Shop-floor climate",
        body: "Tracks CO2, temperature, humidity, and VOC on the sales floor to balance comfort with energy use across long opening hours.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion Sensor",
        badge: "Footfall patterns",
        body: "Maps room-level presence to understand peak hours, dead zones, and where climate control should follow actual traffic.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Open/Close Sensor",
        badge: "After-hours security",
        body: "Confirms doors, loading bays, and cabinets are closed when the store shuts — without nightly walk-throughs.",
        sensorSlugs: ["open-close"],
      },
    ],
  },
  {
    slug: "hotels",
    cardSummary:
      "Occupancy-driven climate and service in guest rooms, meeting spaces, and public areas.",
    focus:
      "Hotels need guest comfort without waste — rooms heated for no-shows, meeting suites ventilated for cancelled bookings, and housekeeping deployed only where it is actually needed.",
    sensorRecommendations: [
      {
        name: "Mini+ PIR",
        badge: "Guest rooms",
        body: "Combines climate monitoring with occupancy in one unit — ideal for setback strategies when rooms are vacant.",
        sensorSlugs: ["mini-plus-pir"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Meeting and public areas",
        body: "Monitors CO2, temperature, humidity, and VOC in lobbies, restaurants, and conference rooms where comfort drives reviews.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion Sensor",
        badge: "Back-of-house",
        body: "Tracks usage in staff areas, laundry, and meeting rooms to align ventilation and cleaning with real activity.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Touch Sensor",
        badge: "Guest feedback",
        body: "Simple satisfaction or service buttons in washrooms and reception areas for instant response when something needs fixing.",
        sensorSlugs: ["touch"],
      },
    ],
  },
  {
    slug: "warehouses-logistics",
    cardSummary:
      "Protect inventory with temperature, humidity, and water detection across storage and loading areas.",
    focus:
      "Warehouses and logistics sites store goods that spoil, corrode, or warp when conditions drift — often across vast floor plates, cold rooms, and loading bays where a single undetected leak can halt operations.",
    sensorRecommendations: [
      {
        name: "Temperature Sensor",
        badge: "Cold storage",
        body: "Reliable logging for chilled rooms, freezers, and temperature-sensitive goods with audit-ready history.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Humidity Sensor",
        badge: "Stock protection",
        body: "Tracks relative humidity in storage zones where cardboard, electronics, or hygroscopic materials need stable conditions.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Water Rope",
        badge: "Line coverage",
        body: "Sensing cable along pipes, skirting boards, and loading-bay floors where a spot sensor cannot reach.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Water Detector",
        badge: "Point protection",
        body: "Instant alerts under sinks, condensate trays, and plant equipment before water spreads across the floor.",
        sensorSlugs: ["water-detector"],
      },
    ],
  },
  {
    slug: "archives-libraries",
    cardSummary:
      "Continuous climate logging and alarms for rare books, manuscripts, and paper archives.",
    focus:
      "Archives and libraries hold paper collections that deteriorate when temperature and humidity swing — often across reading rooms, stacks, and cold stores that each need documented, stable conditions.",
    sensorRecommendations: [
      {
        name: "Humidity Sensor",
        badge: "Paper preservation",
        body: "Continuous relative-humidity logging — the first line of defence for bindings, manuscripts, and historic stacks.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Reading rooms",
        body: "Discreet climate monitoring where staff and visitors need comfort without compromising collection conditions nearby.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Temperature Sensor",
        badge: "Cold storage",
        body: "Dedicated loggers for film, photographic, and special collections held below room temperature.",
        sensorSlugs: ["temperature"],
      },
      {
        name: "Outdoor Sensor",
        badge: "HVAC reference",
        body: "Separates indoor trends from outdoor weather so humidification and dehumidification respond to real need, not guesswork.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  {
    slug: "manors-castles",
    cardSummary:
      "Monitor humidity and temperature in unheated halls, cellars, and storage without damaging surfaces.",
    focus:
      "Manors and castles combine priceless interiors with buildings that were never designed for modern heating — intermittent use, tourist surges, and unheated wings all stress wood, textiles, and finishes.",
    sensorRecommendations: [
      {
        name: "Humidity Sensor",
        badge: "Interior protection",
        body: "Tracks RH in halls, staircases, and panelled rooms where seasonal swings cause cracks, warping, and gilding loss.",
        sensorSlugs: ["humidity"],
      },
      {
        name: "Mini+ / Full+",
        badge: "Exhibition spaces",
        body: "Wireless temperature and humidity logging in rooms open to visitors without running cables through historic fabric.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion Sensor",
        badge: "Visitor impact",
        body: "Maps presence so facility teams can correlate moisture and heat loads with tour groups and event schedules.",
        sensorSlugs: ["motion"],
      },
      {
        name: "Outdoor Sensor",
        badge: "Weather baseline",
        body: "Essential reference for thick masonry buildings where indoor climate lags hours behind outdoor changes.",
        sensorSlugs: ["outdoor"],
      },
    ],
  },
  {
    slug: "property-management",
    cardSummary:
      "Document indoor climate for tenants and catch leaks early across a residential or commercial portfolio.",
    focus:
      "Property managers answer comfort complaints with limited visibility — and a single undetected leak can turn into insurance claims across multiple units before anyone notices.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Tenant spaces",
        body: "Objective CO2, temperature, humidity, and VOC data to resolve 'too hot' or 'too stuffy' complaints with evidence.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Water Detector",
        badge: "Leak prevention",
        body: "Early warnings under sinks, boilers, and risers before water reaches neighbouring units.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Water Rope",
        badge: "Plant and basement",
        body: "Line coverage along pipes and basement floors in larger blocks where a spot sensor is not enough.",
        sensorSlugs: ["water-rope"],
      },
      {
        name: "Temperature Sensor",
        badge: "Technical rooms",
        body: "Monitors boiler rooms, heat exchangers, and secondary HVAC zones across the portfolio.",
        sensorSlugs: ["temperature"],
      },
    ],
  },
  {
    slug: "fm-companies",
    cardSummary:
      "Add a measurable, data-driven IoT layer on top of your existing facility-management services.",
    focus:
      "FM providers win and retain contracts with measurable outcomes — but rolling out sensors across diverse client sites needs a platform that scales, white-labels cleanly, and covers climate, space, and water in one place.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Indoor climate",
        body: "The default rollout sensor for offices, schools, and public buildings — one unit covers the parameters clients ask about most.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Motion / Desk Sensor",
        badge: "Space utilisation",
        body: "Room and desk occupancy data that backs up consolidation, cleaning schedules, and energy setbacks with facts.",
        sensorSlugs: ["motion", "desk"],
      },
      {
        name: "Water Detector",
        badge: "Risk reduction",
        body: "A low-cost upsell that catches leaks before they become emergency call-outs and insurance events.",
        sensorSlugs: ["water-detector"],
      },
      {
        name: "Cloud Connector",
        badge: "Site connectivity",
        body: "Brings sensor data to the platform over cellular uplink — no client Wi-Fi, no IT project per building.",
        sensorSlugs: ["cloud-connector"],
      },
    ],
  },
  {
    slug: "consulting-engineers",
    cardSummary:
      "Temporary and permanent measurements that back up commissioning, audits, and renovation advice.",
    focus:
      "Consulting engineers need defensible measurement data for commissioning reports, energy audits, and renovation proposals — often across a short project window, then optionally left in place for the client.",
    sensorRecommendations: [
      {
        name: "Mini+ / Full+",
        badge: "Baseline surveys",
        body: "Multi-parameter logging for post-occupancy evaluation, ventilation verification, and indoor-climate studies.",
        sensorSlugs: ["mini-plus", "full-plus"],
      },
      {
        name: "Outdoor Sensor",
        badge: "Reference unit",
        body: "Outdoor baseline so indoor trends in reports are separated from weather — expected in any serious audit.",
        sensorSlugs: ["outdoor"],
      },
      {
        name: "Temperature / Humidity Sensor",
        badge: "Targeted logging",
        body: "Dedicated loggers for problem zones, crawl spaces, and envelope investigations where a full multi-sensor unit is overkill.",
        sensorSlugs: ["temperature", "humidity"],
      },
      {
        name: "Motion Sensor",
        badge: "Occupancy studies",
        body: "Short-term presence mapping to validate ventilation rates, heating schedules, and space programming assumptions.",
        sensorSlugs: ["motion"],
      },
    ],
  },
];

export function getIndustryContent(
  slug: string,
  lang: Lang = defaultLang,
): IndustryPageContent | undefined {
  const base = industryPageContent.find((entry) => entry.slug === slug);
  if (!base) return undefined;
  const overlay = industryContentI18n[lang]?.[slug];
  return overlay ? { ...base, ...overlay } : base;
}

/** First sentence of focus, or an explicit cardSummary when set. */
export function getIndustryCardSummary(content: IndustryPageContent): string {
  if (content.cardSummary) return content.cardSummary;
  const match = content.focus.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : content.focus;
}
