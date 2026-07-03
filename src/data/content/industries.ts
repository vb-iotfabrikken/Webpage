import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import type { IndustryPageContent } from "./types";
import { industryContentI18n } from "./industryContent.i18n";

export const industryPageContent: IndustryPageContent[] = [
  {
    slug: "offices",
    featuredCaseStudySlugs: ["dansk-industri"],
    cardTitle: "Offices & workplaces",
    cardSummary:
      "Balance space utilisation in hybrid workplaces with employee productivity and comfort.",
    focus:
      "Modern offices must balance hybrid attendance, meeting-room demand, and indoor climate — often without the data to support lease decisions, HVAC tuning, or layout changes. The buildings still run on assumptions from before hybrid work reshaped how desks and meeting rooms are actually used.",
    challenges: [
      "Paying for desks and floors that sit empty: hybrid work changed attendance patterns, but many organisations still size space against headcount — not measured utilisation.",
      "Ghost-booked meeting rooms: rooms reserved for ten and used by two block space others need — without objective insight into the gap.",
      "Comfort complaints you cannot verify: 'stuffy air' or 'too cold' drag on without end because ventilation and heating follow fixed schedules — not actual occupancy.",
      "HVAC running blind: systems heat and ventilate empty zones while underperforming when rooms are full — energy waste without better wellbeing.",
    ],
    solution: [
      "RoomAlyzer Space management delivers anonymised desk- and room-level occupancy in real time and over time — so you can right-size floors, release ghost-booked meeting rooms, and defend layout decisions with facts. Context matters: the UK Workspace Survey shows office attendance fell from 83% of working time in 2016 to 46% in 2023 — a 37-point drop in seven years.",
      "RoomAlyzer Indoor climate adds continuous CO2, temperature, humidity, and VOC monitoring so afternoon fatigue and ventilation complaints are answered with data — not impressions. Wireless sensors install in minutes without a Wi-Fi project, and the same platform shows space use and air quality side by side.",
    ],
    smarterTogether:
      "Combined, Space management and Indoor climate let you match ventilation and heating to the people actually present — cutting energy waste without sacrificing comfort on busy days.",
    closing:
      "Office sensor rollouts are usually expensive and disruptive. RoomAlyzer is live in minutes, adapts when your workplace changes, and costs a fraction of the usual price.",
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
    featuredCaseStudySlugs: [
      "archdiocese-of-freiburg",
      "evangelische-kirche-in-hessen-und-nassau",
    ],
    cardTitle: "Churches & heritage",
    cardSummary:
      "Protect historic interiors with precise humidity and temperature control in large, unevenly heated buildings.",
    focus:
      "Churches combine irreplaceable interiors with buildings never designed for modern heating — vast volumes, uneven temperatures, and seasonal humidity swings that threaten organs, woodwork, and frescoes. Facility teams and conservators often work from spot checks that miss slow drift until damage is already underway.",
    challenges: [
      "Invisible, gradual damage: unfavourable humidity and temperature harm irreplaceable fittings long before visible signs appear.",
      "Uneven heating across huge volumes: nave, chancel, and sacristies behave differently — handheld readings are unreliable.",
      "Outdoor weather drives indoor swings: massive masonry buildings react slowly — indoor data without an outdoor reference is hard to interpret.",
      "Preservation versus the energy bill: heating a historic building to protect its contents is costly — without data you cannot find the balance.",
    ],
    solution: [
      "RoomAlyzer monitors temperature and humidity continuously and turns it into clear documentation of the exact conditions your interiors are kept in. Wireless Mini+ and Full+ sensors are discreet enough for sacred spaces and precise enough for conservators — with alerts when thresholds are crossed.",
      "An Outdoor sensor separates indoor trends from weather swings, while EN 15757-aligned reporting gives dioceses, insurers, and heritage authorities the documentation they expect. One platform can cover every church in a diocese with role-based access for wardens, clergy, and advisors.",
    ],
    smarterTogether:
      "Preservation data serves two roles that rarely share the same tool: conservators protecting the inventory and building teams running the estate — both working from the same facts.",
    closing:
      "Climate monitoring in churches is usually expensive and awkward to install. RoomAlyzer is live in minutes, flexible enough for any building, and costs a fraction of what teams expect.",
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
    featuredCaseStudySlugs: ["rudersdal-museer", "faaborg-museum"],
    cardTitle: "Museums & culture",
    cardSummary:
      "Mitigate risk and preserve sensitive collections with continuous climate monitoring aligned to preservation standards.",
    focus:
      "Museums and galleries must protect loan objects, stored collections, and exhibition rooms — often with documentation for insurers, lenders, and funders, while managing visitor-driven humidity spikes. A single bad week in a gallery or store can jeopardise loans, claims, and years of conservation work.",
    challenges: [
      "Loan and storage requirements: lenders expect documented, stable conditions — but off-display storage often gets less monitoring than the main galleries.",
      "Visitor-driven climate spikes: groups and events push humidity and temperature up fast — without presence data you cannot connect cause and effect.",
      "Insurance and grant documentation: when something goes wrong you need tamper-evident records — not a folder of manual readings.",
      "Wireless installation in sensitive rooms: cables through historic fabric or busy galleries are rarely acceptable.",
    ],
    solution: [
      "RoomAlyzer delivers continuous wireless temperature and humidity logging in EN 15757 bands — in galleries, stores, and transport crates. Curators get alerts before conditions drift, and PDF reports ready for insurance and loan agreements.",
      "Motion sensors map visitor traffic so humidity spikes can be tied to opening hours and capacity planned accordingly. An Outdoor sensor lets HVAC respond to real weather instead of guesswork — protecting collections while keeping energy in check.",
    ],
    closing:
      "Museum-grade climate monitoring is usually expensive and slow to roll out. RoomAlyzer installs in minutes, scales across every room, and costs a fraction of traditional systems.",
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
    featuredCaseStudySlugs: ["norddjurs-municipality", "varde-municipality"],
    cardTitle: "Schools & municipalities",
    cardSummary:
      "Prioritise student health, concentration, and energy setbacks across schools, administration, and cultural buildings.",
    focus:
      "Municipalities run dozens of building types — schools, nurseries, town halls, and cultural centres — and need one platform view plus proof that indoor climate and energy actually match how buildings are used. Parents, teachers, and elected officials increasingly ask for evidence, not assurances.",
    challenges: [
      "CO2 and concentration in classrooms: pupils lose focus when ventilation lags behind occupancy — yet most schools still rely on subjective 'how does the air feel?' checks.",
      "Portfolio scale: rolling monitoring out across every school and admin building feels like a multi-year IT project — unless sensors are genuinely plug-and-play.",
      "Energy setbacks without proof: heating and ventilation run on schedules because nobody trusts that halls and classrooms are actually empty after school.",
      "Answers for parents and teachers: when air quality is questioned, the municipality needs documented data — not a one-off measurement.",
    ],
    solution: [
      "RoomAlyzer Indoor climate puts CO2, temperature, humidity, and VOC sensors in every classroom and shared space — with alerts before levels pass guidelines and dashboards caretakers actually use. Varde Municipality rolled out 1,400 sensors across 36 schools in nine weeks; average CO2 above 1,200 ppm during teaching hours fell from 23% to 6% in ten months.",
      "Mini+ PIR and Motion sensors map real occupancy in sports halls, auditoriums, and community rooms so heating and ventilation can step back when rooms are empty. One municipal dashboard brings every building together — schools, administration, and culture — without a separate system per site.",
    ],
    smarterTogether:
      "Indoor climate and Space management together let municipalities fine-tune ventilation to actual headcount and cut energy in buildings that stand empty outside school hours.",
    closing:
      "Municipal sensor programmes are usually expensive and slow. RoomAlyzer installs in minutes per room, needs no Wi-Fi project per building, and scales from one school to an entire municipality.",
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
    featuredCaseStudySlugs: ["gribskov-kommune", "zealand-erhvervsakademi"],
    cardSummary:
      "Document CO2, temperature, and humidity in every classroom to protect student focus and health.",
    focus:
      "Schools need objective indoor-climate data in every learning space — not just to meet guidelines, but to prove that ventilation and heating actually support concentration when rooms are full. Teachers and caretakers make daily airing decisions without a shared picture of CO2, humidity, or whether rooms are genuinely occupied after hours.",
    challenges: [
      "CO2 above 1,000 ppm in full classrooms: research links elevated CO2 to reduced concentration — yet most schools only react when someone complains.",
      "Ventilation by habit, not data: window-ventilation routines and mechanical systems rarely reflect actual occupancy or outdoor conditions.",
      "Energy spent on empty buildings: sports halls, auditoriums, and wings heated overnight because schedules assume rooms are in use.",
      "No audit trail for parents or inspectors: when air quality is challenged, schools need continuous logs — not a consultant visit once a year.",
    ],
    solution: [
      "RoomAlyzer puts live CO2, temperature, humidity, and VOC data in every classroom with alerts before guidelines are breached — giving teachers a clear signal to ventilate and leadership evidence that conditions are managed.",
      "Occupancy sensors map real use in halls and specialist rooms so heating and ventilation can step back when buildings are empty. An Outdoor sensor gives a weather reference so natural ventilation decisions match conditions outside.",
    ],
    smarterTogether:
      "Indoor climate and occupancy data together show not only when air quality slips, but when energy is wasted heating rooms nobody is using.",
    closing:
      "Classroom monitoring does not have to mean cabling, gateways, or months of planning. RoomAlyzer sensors install in minutes and scale from one school to an entire district.",
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
      "Hospitals must balance patient comfort, infection control, and strict storage conditions — often across wards, pharmacies, labs, and cold rooms that each need their own thresholds. A single excursion in a pharmacy fridge or a persistently dry ward can have clinical, regulatory, and reputational consequences.",
    challenges: [
      "Narrow temperature bands with no continuous proof: medicine stores, blood banks, and cold rooms need audit-ready logs — clipboard rounds are gaps waiting to become incidents.",
      "Ward air quality disputes: patients and staff report stuffiness or dryness, but facilities teams lack room-level data to tune ventilation.",
      "Humidity that affects both patients and equipment: too dry or too damp air in treatment areas has clinical and technical knock-on effects.",
      "Water ingress near critical zones: plant rooms and service shafts can flood clinical or electrical areas before anyone notices.",
    ],
    solution: [
      "RoomAlyzer Indoor climate monitors CO2, temperature, humidity, and VOC in patient-facing areas with continuous history — so air-quality discussions are grounded in data, not impressions.",
      "Dedicated Temperature and Humidity sensors cover pharmacies, labs, and cold storage with alerts before stock is at risk. Water detectors in plant and service areas catch leaks before they reach clinical zones.",
    ],
    smarterTogether:
      "Climate logging and leak detection on one platform give estates teams a single view of comfort, compliance, and infrastructure risk across the hospital estate.",
    closing:
      "Hospital estates need reliable, low-disruption monitoring. RoomAlyzer installs without pulling cables through clinical areas and keeps audit trails ready when inspectors ask.",
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
      "Care homes and nursing facilities serve vulnerable residents around the clock — stable temperature and humidity reduce discomfort and health risk, while staff need fast ways to respond when something needs attention. Families expect calm, comfortable rooms; operators need early warning when conditions drift or water appears.",
    challenges: [
      "Slow response to comfort issues: residents may not report feeling too hot or cold until problems have persisted for hours.",
      "Kitchens, laundries, and plant rooms running hot: secondary zones often drift outside the range monitored in resident rooms.",
      "Service calls that depend on finding a phone: staff waste time routing simple requests from washrooms and dining areas.",
      "Leaks in bathrooms and kitchens: moisture spreads into resident spaces before a night round discovers it.",
    ],
    solution: [
      "RoomAlyzer Indoor climate keeps temperature, humidity, CO2, and VOC stable in common areas and resident rooms with alerts when conditions move outside agreed bands.",
      "Touch sensors give one-tap service calls from washrooms and dining areas. Temperature loggers add precision in kitchens and laundry rooms, while water detectors catch leaks in wet rooms and plant areas early.",
    ],
    smarterTogether:
      "Climate monitoring and instant service requests on one platform help staff prioritise both comfort and response time without adding complexity to daily rounds.",
    closing:
      "Care settings need discreet, reliable monitoring that staff trust. RoomAlyzer installs quickly, avoids Wi-Fi dependency, and scales across wings and sites.",
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
      "Retail operations juggle shopper comfort, staff wellbeing, and equipment uptime — fridges that fail quietly, stores that overheat on busy Saturdays, and energy spent heating empty floors after closing. Chain operators need comparable data across sites, not store managers guessing from thermostats alone.",
    challenges: [
      "Cold-chain failures discovered too late: display cases and back-of-house fridges can drift out of range overnight without anyone knowing until stock is lost.",
      "Shop-floor comfort versus energy: long opening hours mean HVAC runs hard — but without occupancy data it cannot follow real footfall.",
      "Dead zones and peak-hour crowding: the same floor plan feels different by hour and season, yet climate control rarely adapts.",
      "After-hours security without walk-throughs: loading bays and internal doors left open waste energy and create risk.",
    ],
    solution: [
      "Temperature sensors deliver continuous logging and alarms for fridges, freezers, and display cases — with history ready for food-safety and insurance reviews.",
      "Mini+ and Full+ sensors track shop-floor CO2, temperature, humidity, and VOC so comfort and energy can be balanced across long trading hours. Motion sensors map footfall patterns; Open/Close sensors confirm doors and bays are shut when the store closes.",
    ],
    smarterTogether:
      "Footfall and indoor-climate data together show where to ventilate for crowded periods and where to cut back when zones are empty.",
    closing:
      "Multi-site retail needs monitoring that rolls out fast and compares consistently. RoomAlyzer scales across stores without a separate IT project at each location.",
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
      "Hotels need guest comfort without waste — rooms heated for no-shows, meeting suites ventilated for cancelled bookings, and housekeeping deployed only where it is actually needed. Reviews and repeat bookings hinge on lobbies and conference spaces that feel fresh, yet back-of-house areas often run on fixed schedules.",
    challenges: [
      "Guest rooms conditioned for empty nights: HVAC runs for no-shows and early departures because the PMS does not tell the plant room who is actually in the building.",
      "Conference CO2 spikes: half-day events can push meeting rooms past comfort limits before staff notice.",
      "Back-of-house energy blind spots: laundry, kitchens, and staff areas ventilate and heat on timers unrelated to real use.",
      "Slow guest feedback loops: washroom or reception issues surface on review sites before operations hears about them.",
    ],
    solution: [
      "Mini+ PIR sensors combine climate and occupancy in guest rooms — ideal for setback strategies when rooms are vacant without compromising arrival comfort.",
      "Mini+ and Full+ sensors monitor lobbies, restaurants, and conference rooms where air quality drives guest perception. Motion sensors align ventilation and cleaning in staff areas; Touch sensors give instant service feedback in washrooms and reception.",
    ],
    smarterTogether:
      "Room-level occupancy and climate data let hotels trim energy in vacant rooms while prioritising ventilation where guests are gathered.",
    closing:
      "Hotel portfolios need monitoring that respects guest privacy, installs without disruption, and works without guest Wi-Fi. RoomAlyzer fits that profile across properties.",
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
      "Warehouses and logistics sites store goods that spoil, corrode, or warp when conditions drift — often across vast floor plates, cold rooms, and loading bays where a single undetected leak can halt operations. Compliance and insurance increasingly expect continuous logs, not spot checks on a clipboard.",
    challenges: [
      "Cold rooms drifting out of range: chilled storage can fail quietly until product is condemned.",
      "Humidity damaging stock: cardboard, electronics, and hygroscopic goods need stable RH across large, unevenly conditioned spaces.",
      "Leaks along long runs: pipes, skirting boards, and loading bays need line coverage a single point sensor cannot provide.",
      "Plant equipment and condensate trays: localised water sources spread fast across open floor plates.",
    ],
    solution: [
      "Temperature sensors provide audit-ready logging for chill rooms, freezers, and sensitive goods with alerts before thresholds are breached.",
      "Humidity sensors track RH in storage zones where materials are moisture-sensitive. Water rope covers linear risk along pipes and bay floors; point water detectors protect under sinks, trays, and plant equipment.",
    ],
    smarterTogether:
      "Temperature, humidity, and water detection on one platform give operations and QA teams a single dashboard for stock protection and incident response.",
    closing:
      "Industrial sites need rugged, low-maintenance monitoring without cabling kilometres of floor plate. RoomAlyzer deploys quickly and scales with the facility.",
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
      "Archives and libraries hold paper collections that deteriorate when temperature and humidity swing — often across reading rooms, stacks, and cold stores that each need documented, stable conditions. Lenders and grant bodies expect proof; conservators need early warning before bindings, film, or manuscripts are at risk.",
    challenges: [
      "RH swings in stack areas: relative humidity is the first line of defence for paper — yet many stores are checked monthly at best.",
      "Reading rooms versus storage: comfort for visitors must not compromise collection conditions nearby.",
      "Cold storage for film and photographs: sub-room-temperature collections need dedicated, continuous logging.",
      "HVAC reacting to weather guesswork: humidification and dehumidification without an outdoor reference over- or under-shoot.",
    ],
    solution: [
      "Humidity sensors deliver continuous RH logging for stacks, manuscript stores, and rare-book rooms with alerts before conditions leave preservation bands.",
      "Mini+ and Full+ sensors monitor reading rooms discreetly. Temperature loggers cover cold stores; an Outdoor sensor separates indoor trends from weather so HVAC responds to real need.",
    ],
    smarterTogether:
      "Continuous logging across public and storage zones gives conservators and facilities teams the same dataset for preservation decisions and daily operations.",
    closing:
      "Archive-grade monitoring should not require invasive installation. RoomAlyzer is wireless, discreet, and produces reports ready for lenders and insurers.",
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
      "Manors and castles combine priceless interiors with buildings that were never designed for modern heating — intermittent use, tourist surges, and unheated wings all stress wood, textiles, and finishes. Thick masonry slows the indoor response to weather, so indoor readings without an outdoor baseline are easy to misread.",
    challenges: [
      "Seasonal RH damaging panelling and gilding: halls and staircases swing with visitor seasons and heating patterns.",
      "Event-driven heat and moisture loads: tour groups and weddings push conditions faster than HVAC can compensate.",
      "Wireless monitoring without historic damage: cables through panelled rooms and tapestries are rarely acceptable.",
      "Unheated wings drifting unchecked: distant rooms can deteriorate while staff focus on main visitor routes.",
    ],
    solution: [
      "Humidity sensors track RH in halls, staircases, and panelled rooms with alerts before seasonal swings cause cracks, warping, or gilding loss.",
      "Mini+ and Full+ sensors log wirelessly in exhibition spaces open to visitors. Motion sensors correlate moisture and heat loads with tour schedules; an Outdoor sensor is essential where indoor climate lags hours behind the weather.",
    ],
    smarterTogether:
      "Visitor presence and climate data together explain sudden humidity rises — so teams can ventilate or adjust heating before interiors suffer.",
    closing:
      "Heritage houses need monitoring that respects fabric and installs without disruption. RoomAlyzer fits discreetly into rooms visitors never notice.",
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
    featuredCaseStudySlugs: ["boligselskabet-sjaelland", "skade-teknik"],
    cardSummary:
      "Document indoor climate for tenants and catch leaks early across a residential or commercial portfolio.",
    focus:
      "Property managers answer comfort complaints with limited visibility — and a single undetected leak can turn into insurance claims across multiple units before anyone notices. Portfolio teams need comparable data across buildings, not ad-hoc readings when a tenant escalates.",
    challenges: [
      "'Too hot' or 'too stuffy' without evidence: tenant disputes drag on because HVAC settings cannot be tied to measured conditions in the unit.",
      "Leaks travelling between units: risers, boilers, and bathrooms can damage neighbouring flats before the source is found.",
      "Basements and plant rooms with line risk: a spot sensor misses water tracking along pipes across an entire block.",
      "Technical rooms monitored reactively: boiler rooms and heat exchangers only get attention after a failure.",
    ],
    solution: [
      "Mini+ and Full+ sensors deliver objective CO2, temperature, humidity, and VOC data in tenant spaces — resolving comfort complaints with evidence instead of debate.",
      "Water detectors under sinks, boilers, and risers catch leaks early. Water rope covers basements and plant areas; temperature loggers monitor technical rooms across the portfolio from one dashboard.",
    ],
    smarterTogether:
      "Climate data and leak detection together reduce both tenant churn and emergency call-outs — the two cost drivers property teams feel most acutely.",
    closing:
      "Portfolio monitoring should not mean a bespoke project per building. RoomAlyzer rolls out building by building on cellular connectivity without tenant Wi-Fi.",
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
      "FM providers win and retain contracts with measurable outcomes — but rolling out sensors across diverse client sites needs a platform that scales, white-labels cleanly, and covers climate, space, and water in one place. Clients expect proof of savings and comfort, not slide decks about what might be possible.",
    challenges: [
      "Every client site is different: schools, offices, and public buildings each ask for different parameters — yet FM teams cannot run a separate stack per contract.",
      "Space utilisation claims need data: consolidation, cleaning schedules, and energy setbacks require occupancy evidence clients trust.",
      "Leak detection as a low-friction upsell: water damage is a top insurance driver, but traditional systems are slow to quote and install.",
      "Connectivity without client IT projects: guest Wi-Fi and corporate firewalls block many IoT rollouts before they start.",
    ],
    solution: [
      "Mini+ and Full+ sensors are the default indoor-climate rollout — one unit covers the parameters clients ask about most, with dashboards FM teams can brand for each contract.",
      "Motion and Desk sensors back space-utilisation recommendations with facts. Water detectors add risk reduction at low marginal cost. Cloud connector brings data to the platform over cellular — no client Wi-Fi per building.",
    ],
    smarterTogether:
      "Climate, occupancy, and water on one platform let FM providers cross-sell services with a single install visit and one ongoing data relationship.",
    closing:
      "FM margins depend on fast deployment and provable outcomes. RoomAlyzer is designed for multi-site rollouts without gateway sprawl or per-building IT tickets.",
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
    featuredCaseStudySlugs: ["sweco", "hj-energi"],
    cardSummary:
      "Temporary and permanent measurements that back up commissioning, audits, and renovation advice.",
    focus:
      "Consulting engineers need defensible measurement data for commissioning reports, energy audits, and renovation proposals — often across a short project window, then optionally left in place for the client. Handheld spot readings rarely survive scrutiny when occupancy, weather, and HVAC cycles are in play.",
    challenges: [
      "Post-occupancy studies without continuous logs: a week of spot checks misses how rooms behave across seasons and load patterns.",
      "Indoor trends confused with weather: reports that lack an outdoor reference are hard to defend in peer review or client sign-off.",
      "Problem zones needing targeted loggers: crawl spaces and envelope investigations do not always justify a full multi-sensor unit.",
      "Occupancy assumptions baked into ventilation design: schedules and headcount estimates need validation against real presence.",
    ],
    solution: [
      "Mini+ and Full+ sensors provide multi-parameter logging for post-occupancy evaluation, ventilation verification, and indoor-climate studies — with exportable history for reports.",
      "An Outdoor sensor gives the baseline serious audits expect. Dedicated Temperature and Humidity loggers cover problem zones; Motion sensors validate occupancy assumptions behind ventilation and heating schedules.",
    ],
    smarterTogether:
      "Outdoor reference, indoor multi-parameter logging, and short-term occupancy mapping give engineers a complete evidence base in one deployment.",
    closing:
      "Temporary studies and permanent monitoring should use the same hardware. RoomAlyzer installs in minutes and stays in place when the client wants ongoing oversight.",
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
