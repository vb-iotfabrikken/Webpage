import type { WhitepaperOutline } from "./types";

/**
 * Wave 1 authoring blueprints — the four topics teased on the white papers hub.
 * Each follows the standard template: executive summary → problem → methodology →
 * cases → compliance appendix → worksheets → CTA.
 */
export const wave1Outlines: WhitepaperOutline[] = [
  {
    slug: "classroom-air-quality",
    workingTitle: "Classroom air quality",
    subtitle: "From parent complaints to documented improvement",
    wave: 1,
    audience: [
      "School leaders and head teachers",
      "Municipal property and estates teams",
      "HVAC and energy setback planners",
    ],
    coreArgument:
      "CO₂ is a practical proxy for ventilation effectiveness — continuous logging ends disputes, prioritises maintenance, and documents improvement without a full BMS project.",
    estimatedPages: 32,
    relatedModules: ["indoor-climate"],
    relatedArticleSlugs: ["co2-monitoring-in-schools", "rollout-in-varde-municipality"],
    relatedCaseStudySlugs: [
      "gribskov-kommune-indoor-climate",
      "vejen-kommune",
      "holbaek-kommune",
      "solroed-kommune",
      "zealand-erhvervsakademi",
      "varde-municipality",
    ],
    roiLeafSlug: "schools",
    standards: ["EN 16798", "BR18"],
    sections: [
      {
        id: "executive-summary",
        title: "Executive summary",
        pages: 1,
        points: [
          "Decision headline: objective classroom air data replaces complaint-driven HVAC debates.",
          "Typical pilot scope: one sensor per classroom; 9-week municipal rollout benchmark (Varde).",
          "ROI hook: link to schools ROI calculator and maintenance prioritisation savings.",
        ],
      },
      {
        id: "problem-framing",
        title: "The cost of complaints without data",
        pages: 4,
        points: [
          "Parent and teacher complaints vs measurable CO₂ exceedances during teaching hours.",
          "Fixed ventilation schedules that over-ventilate empty rooms and under-serve packed classes.",
          "Workplace inspection and BR18 documentation gaps in Danish schools.",
          "Benchmark: Varde pre/post — 23 % of teaching hours above 1,200 ppm dropped to 6 % without capex.",
        ],
      },
      {
        id: "methodology",
        title: "What to measure, where, and when to act",
        pages: 6,
        points: [
          "Sensor placement: one per classroom; labs and multi-purpose halls may need two.",
          "Threshold bands: fresh air (~400 ppm) through packed classroom (~1,000–1,500 ppm) to action levels.",
          "When to log vs when to act: caretaker LED feedback, SMS/email alarms, HVAC ticket linkage.",
          "Reporting cadence: daily/weekly graphs for management; PDF exports for inspections.",
          "Pilot timeline: 4–8 weeks baseline before changing ventilation policy.",
        ],
      },
      {
        id: "case-evidence",
        title: "Municipal and school evidence",
        pages: 8,
        points: [
          "Varde Municipality: 36 schools, 1,400 sensors, 9-week rollout methodology.",
          "Gribskov (Realdania): facts vs feelings in school improvement programme.",
          "Vejen, Holbæk, Solrød: complaint resolution and documented baselines.",
          "Zealand Business Academy: classroom-level control for vocational education.",
          "Caretaker onboarding: dashboard training as adoption critical path.",
        ],
      },
      {
        id: "technology",
        title: "Plug-and-play vs wired BMS in older school blocks",
        pages: 4,
        points: [
          "NB-IoT deployment: no corporate Wi-Fi, thick walls, basement plant rooms.",
          "7–10 year battery life vs wired sensor capex and IT involvement.",
          "Gateway placement and signal pre-measurement checklist.",
          "Integration with existing FM tools (optional MQTT export).",
        ],
      },
      {
        id: "compliance",
        title: "Standards and workplace documentation appendix",
        pages: 3,
        points: [
          "EN 16798 category mapping for educational spaces.",
          "BR18 indoor climate context for Danish readers.",
          "PDF report structure for workplace assessments and parent communication template.",
        ],
      },
      {
        id: "worksheets",
        title: "Pilot scope and KPI worksheets",
        pages: 4,
        points: [
          "Sensor count estimator by room type and floor area.",
          "Baseline KPI sheet: % teaching hours above threshold, before/after columns.",
          "Rollout checklist: room labels, gateway survey, caretaker training slots.",
          "Link to ROI calculator schools tab.",
        ],
      },
      {
        id: "cta",
        title: "Next steps",
        pages: 1,
        points: [
          "Book demo CTA with school portfolio scoping.",
          "Related articles: CO₂ monitoring in schools, Varde rollout story.",
        ],
      },
    ],
  },
  {
    slug: "hybrid-office-business-case",
    workingTitle: "The hybrid office business case",
    subtitle: "Empty desks, ghost bookings and energy waste",
    wave: 1,
    audience: [
      "Real estate and portfolio directors",
      "Workplace and FM leads",
      "CFOs evaluating post-pandemic consolidation",
    ],
    coreArgument:
      "Calendar data and headcount surveys misrepresent utilisation; occupancy sensors produce defensible downsizing, fair department allocation, and occupancy-aware energy savings.",
    estimatedPages: 34,
    relatedModules: ["space-management", "indoor-climate"],
    relatedArticleSlugs: ["rollout-in-varde-municipality"],
    relatedCaseStudySlugs: [
      "norddjurs-municipality",
      "varde-municipality",
      "gribskov-municipality",
      "dansk-industri",
    ],
    roiLeafSlug: "offices",
    standards: ["EPBD"],
    sections: [
      {
        id: "executive-summary",
        title: "Executive summary",
        pages: 1,
        points: [
          "Decision headline: measurable empty desks fund consolidation and avoid overbuilding.",
          "Dansk Industri benchmark: 650 m² freed; ~1M DKK investment → up to 1.5M DKK year-one savings.",
          "Bundle recommendation: Space management + Indoor climate for occupancy-aware HVAC.",
        ],
      },
      {
        id: "problem-framing",
        title: "Why hybrid broke the old office model",
        pages: 5,
        points: [
          "Paying for desks nobody uses: peak attendance vs licensed capacity.",
          "Ghost meeting bookings: calendar shows booked, sensors show empty.",
          "5-day office policy vs Mon/Fri emptiness — political vs actual utilisation.",
          "Energy waste: heating and ventilating floors with 15 % peak attendance.",
          "Cost of status quo: rent, fit-out, and energy on unmeasured assumptions.",
        ],
      },
      {
        id: "methodology",
        title: "Desk optimiser and utilisation methodology",
        pages: 6,
        points: [
          "Baseline period: minimum 8–12 weeks before policy changes.",
          "Desk sensor coverage vs sample floors: when each is sufficient.",
          "Peak attendance %, cost per desk, and three goal paths (cut costs, repurpose, grow in place).",
          "Ghost booking release logic and change-management for meeting rooms.",
          "Heatmaps and department-level allocation for fair space distribution.",
          "Mirror ROI desk optimiser inputs and outputs.",
        ],
      },
      {
        id: "case-evidence",
        title: "Municipal consolidation and corporate proof",
        pages: 8,
        points: [
          "Norddjurs: four administrative buildings into three with data-led layout.",
          "Varde: fair distribution when merging administrative buildings.",
          "Gribskov: dimensioning a new town hall without overbuilding.",
          "Dansk Industri: bottom-line impact with named square metres and savings.",
          "Licitationen press coverage as third-party validation.",
        ],
      },
      {
        id: "energy-bundle",
        title: "Pairing occupancy with indoor climate",
        pages: 4,
        points: [
          "Empty-room HVAC setbacks: heating and ventilation tied to live headcount.",
          "Energy saver ROI model inputs for office facility type.",
          "Avoiding comfort complaints during partial occupancy.",
        ],
      },
      {
        id: "compliance",
        title: "Governance and reporting appendix",
        pages: 3,
        points: [
          "Anonymised occupancy and GDPR: no cameras, aggregate desk data.",
          "Board-ready utilisation reports and audit trail for space decisions.",
          "EPBD energy performance context for EU readers.",
        ],
      },
      {
        id: "worksheets",
        title: "Consolidation and KPI worksheets",
        pages: 5,
        points: [
          "Portfolio baseline template: desks, peak %, cost per desk, floors in scope.",
          "Consolidation scenario planner: buildings in/out, break-even timeline.",
          "Ghost booking policy checklist for workplace teams.",
          "Link to ROI calculator desk optimiser tab.",
        ],
      },
      {
        id: "cta",
        title: "Next steps",
        pages: 1,
        points: [
          "Book demo with portfolio walk-through.",
          "Related case studies and Varde rollout article.",
        ],
      },
    ],
  },
  {
    slug: "museum-preservation-monitoring",
    workingTitle: "Preservation monitoring that conservators and facility managers both trust",
    subtitle: "One platform for EN 15757 documentation and heating-cost conversations",
    wave: 1,
    audience: [
      "Conservators and collection care staff",
      "Museum registrars and loan coordinators",
      "Museum facility managers and estates teams",
    ],
    coreArgument:
      "Vitrine-level wireless monitoring beats building-wide BMS for loan documentation, mould risk, and the preservation-vs-energy trade-off — serving both conservators and FM with the same dataset.",
    estimatedPages: 30,
    relatedModules: ["preservation", "indoor-climate"],
    relatedArticleSlugs: ["en-15757-in-practice", "humidity-in-churches"],
    relatedCaseStudySlugs: [
      "rudersdal-museer",
      "faaborg-museum",
      "deutsches-museum-nordschleswig",
    ],
    roiLeafSlug: "museums",
    standards: ["EN 15757", "Bizot Green", "ASHRAE"],
    sections: [
      {
        id: "executive-summary",
        title: "Executive summary",
        pages: 1,
        points: [
          "Decision headline: continuous RH logging protects loans, lenders, and irreplaceable objects.",
          "Dual-audience value: conservator bands + FM heating cost conversations from one platform.",
          "Differentiator: discreet wireless sensors vs manual logger rounds and gateway failures.",
        ],
      },
      {
        id: "problem-framing",
        title: "Invisible damage and documentation gaps",
        pages: 4,
        points: [
          "Gradual RH damage to collections, loan crates, and temporary exhibitions.",
          "Building-wide sensors miss vitrines, storage rooms, and loading bays.",
          "Manual logger rounds: labour cost, gaps, and failed gateways.",
          "Loan and insurance documentation requirements lenders increasingly enforce.",
        ],
      },
      {
        id: "methodology",
        title: "EN 15757 in practice — measurement methodology",
        pages: 7,
        points: [
          "Historic bands per object — not fixed 50 % RH setpoints.",
          "Sensor placement: galleries, storage, loan crates, outdoor reference.",
          "Preservation Index and mould risk framing for early warning.",
          "90-day moving RH bands and PDF export structure.",
          "When to involve conservator vs when FM can adjust heating.",
          "Adapt from EN 15757 in practice article (60 parish churches, two seasonal cycles).",
        ],
      },
      {
        id: "case-evidence",
        title: "Museum customer evidence",
        pages: 6,
        points: [
          "Rudersdal Museums: remote monitoring, reduced manual reading.",
          "Faaborg Museum: collection climate documentation.",
          "Deutsches Museum Nordschleswig: cross-border heritage context.",
          "Loan crate monitoring workflow for travelling exhibitions.",
        ],
      },
      {
        id: "technology",
        title: "Discreet deployment in public galleries",
        pages: 3,
        points: [
          "Mini+ and Humidity sensor form factors for vitrines and storage.",
          "Outdoor reference sensor for seasonal comparison.",
          "Battery life and non-invasive installation in listed buildings.",
        ],
      },
      {
        id: "compliance",
        title: "Standards, loans and insurance appendix",
        pages: 4,
        points: [
          "EN 15757, Bizot Green, and ASHRAE chapter mapping table.",
          "Insurance documentation checklist after exceedance events.",
          "Grant application report template for heritage authorities.",
        ],
      },
      {
        id: "worksheets",
        title: "Monitoring scope worksheets",
        pages: 3,
        points: [
          "Room-type sensor planner: gallery, storage, loading, outdoor reference.",
          "Loan monitoring checklist: crate placement, baseline period, lender report format.",
          "Link to ROI calculator museums tab.",
        ],
      },
      {
        id: "cta",
        title: "Next steps",
        pages: 1,
        points: [
          "Book demo with conservator + FM joint briefing option.",
          "Related articles: EN 15757 in practice, humidity in churches.",
        ],
      },
    ],
  },
  {
    slug: "indoor-climate-esg-reporting",
    workingTitle: "Indoor climate data for CSRD and green building schemes",
    subtitle: "A practical data layer for non-specialists",
    wave: 1,
    audience: [
      "ESG and sustainability officers",
      "DGNB, WELL, and LEED project teams",
      "Sustainability consultants serving property owners",
    ],
    coreArgument:
      "Sensors supply continuous evidence for energy, comfort, and risk KPIs — a data layer spreadsheets cannot match, not a replacement for formal assurance.",
    estimatedPages: 28,
    relatedModules: ["indoor-climate", "space-management"],
    relatedArticleSlugs: ["mqtt-integration"],
    relatedCaseStudySlugs: ["sweco"],
    roiLeafSlug: "offices",
    standards: ["CSRD", "EPBD", "DGNB", "WELL", "LEED", "GDPR"],
    sections: [
      {
        id: "executive-summary",
        title: "Executive summary",
        pages: 1,
        points: [
          "Positioning: evidence layer for ESG reporting — avoid overclaiming regulatory compliance.",
          "Sweco DGNB indoor climate mapping as consultant-led proof point.",
          "Metrics map: which sensor types feed which disclosure categories.",
        ],
      },
      {
        id: "problem-framing",
        title: "The spreadsheet gap in building performance reporting",
        pages: 4,
        points: [
          "Annual snapshots vs continuous indoor climate and occupancy data.",
          "CSRD double materiality: operational energy and occupant comfort evidence.",
          "Green building certification documentation burden on FM teams.",
          "Risk of greenwashing when reporting lacks sensor-backed audit trails.",
        ],
      },
      {
        id: "methodology",
        title: "Metrics mapping methodology",
        pages: 6,
        points: [
          "Table: CO₂, temperature, humidity, occupancy → KPI categories.",
          "Baseline period and data retention for audit readiness.",
          "Anonymised occupancy for GDPR-compliant utilisation reporting.",
          "Export paths: Power BI, PDF reports, MQTT to data warehouse.",
          "Integration overview (adapt from MQTT integration article).",
        ],
      },
      {
        id: "case-evidence",
        title: "Consultant and property owner evidence",
        pages: 5,
        points: [
          "Sweco: DGNB indoor climate mapping for property owners.",
          "EPBD renovation and monitoring obligations — EU context.",
          "Portfolio-scale rollout considerations for ESG officers.",
        ],
      },
      {
        id: "technology",
        title: "Platform architecture for reporting teams",
        pages: 3,
        points: [
          "EU data residency and GDPR by design.",
          "Audit logs, role-based access, and export APIs.",
          "Combining Indoor climate + Space modules for operational carbon narratives.",
        ],
      },
      {
        id: "compliance",
        title: "Framework reference appendix",
        pages: 4,
        points: [
          "CSRD, EPBD, DGNB, WELL, LEED cross-reference table.",
          "What sensors can and cannot prove for assurance teams.",
          "GDPR and anonymised occupancy note for HR-sensitive portfolios.",
        ],
      },
      {
        id: "worksheets",
        title: "ESG data readiness worksheets",
        pages: 3,
        points: [
          "KPI baseline template by building type.",
          "Sensor coverage planner for certification projects.",
          "Link to ROI calculator energy saver tab.",
        ],
      },
      {
        id: "cta",
        title: "Next steps",
        pages: 1,
        points: [
          "Book demo with ESG reporting walk-through.",
          "Contact sales for consultant partnership briefing.",
        ],
      },
    ],
  },
];

/** Lookup outline by slug. */
export function getWhitepaperOutline(slug: string): WhitepaperOutline | undefined {
  return wave1Outlines.find((o) => o.slug === slug);
}
