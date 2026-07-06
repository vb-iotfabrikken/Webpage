/**
 * IoT Fabrikken library catalog: 325 articles across 19 catalogs (A–T).
 *
 * This file enumerates every URL the knowledge base should expose. When a real
 * MDX article with the same slug lives in `src/content/landingpages/`, that
 * file wins and is rendered via `LandingPageLayout`. Otherwise the dynamic
 * route at `src/pages/en/library/[slug].astro` falls back to a rich
 * `PlaceholderPage` using the entry's title, lead and tags.
 *
 * Keep this file the single source of truth for library slugs.
 */
import type { CatalogArticle } from "./types";
import { makeCatalog } from "./types";

// ─── A: Indoor climate deep-dive (40) ─────────────────────────────────────
const A = makeCatalog("indoor-climate", "A", [
  { slug: "voc-levels-in-offices", title: "VOC levels in offices.", lead: "Monitor volatile organic compounds and spot glue, paint or cleaning chemicals before they affect staff.", tags: ["module:indoor-climate", "industry:offices", "sensor:voc", "type:guide", "level:beginner"] },
  { slug: "humidity-management-classrooms", title: "Humidity management in classrooms.", lead: "Keep relative humidity in the sweet spot: not so dry pupils get headaches, not so wet that mould takes hold.", tags: ["module:indoor-climate", "industry:schools", "sensor:humidity", "type:guide", "level:beginner"] },
  { slug: "temperature-control-open-offices", title: "Temperature control in open offices.", lead: "Balance comfort across large floor plates where sunlight, people density and HVAC all fight for the thermostat.", tags: ["module:indoor-climate", "industry:offices", "sensor:temperature", "type:guide", "level:intermediate"] },
  { slug: "indoor-air-quality-hospitals", title: "Indoor air quality in hospitals.", lead: "Document CO₂, humidity and VOC in wards, clinics and theatres to meet infection-control and comfort standards.", tags: ["module:indoor-climate", "industry:hospitals", "sensor:co2", "sensor:humidity", "standard:en-16798", "type:guide", "level:advanced"] },
  { slug: "ppm-thresholds-explained", title: "CO₂ ppm thresholds explained.", lead: "What 800, 1000 and 1400 ppm really mean for focus, headaches and compliance in occupied rooms.", tags: ["module:indoor-climate", "sensor:co2", "type:technical", "level:beginner"] },
  { slug: "iaq-dashboards-for-facility-managers", title: "IAQ dashboards for facility managers.", lead: "How to lay out a live indoor-air-quality dashboard that non-technical staff will actually use.", tags: ["module:indoor-climate", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "when-to-ventilate", title: "When to ventilate.", lead: "Simple rules of thumb and automated triggers for opening windows, ramping AHUs or dispatching caretakers.", tags: ["module:indoor-climate", "sensor:co2", "type:guide", "level:beginner"] },
  { slug: "co2-in-meeting-rooms", title: "CO₂ in meeting rooms.", lead: "Small rooms with closed doors spike fastest: here's how to tune ventilation and room size to match.", tags: ["module:indoor-climate", "industry:offices", "sensor:co2", "type:guide", "level:intermediate"] },
  { slug: "indoor-climate-kindergartens", title: "Indoor climate in kindergartens.", lead: "Small lungs, cramped rooms, lots of activity: measurement is the only reliable way to stay on top of air quality.", tags: ["module:indoor-climate", "industry:schools", "sensor:co2", "type:guide", "level:beginner"] },
  { slug: "air-quality-libraries", title: "Air quality in libraries.", lead: "Balancing paper preservation with comfortable air for readers and staff using zoned climate measurement.", tags: ["module:indoor-climate", "module:preservation", "industry:libraries", "sensor:humidity", "type:guide", "level:intermediate"] },
  { slug: "thermal-comfort-shared-offices", title: "Thermal comfort in shared offices.", lead: "PMV, PPD and the human factor: objective data combined with subjective feedback produces better buildings.", tags: ["module:indoor-climate", "industry:offices", "sensor:temperature", "type:technical", "level:advanced"] },
  { slug: "humidity-hospital-wards", title: "Humidity in hospital wards.", lead: "Monitor RH to reduce skin dryness, viral transmission risk and discomfort for long-stay patients.", tags: ["module:indoor-climate", "industry:hospitals", "sensor:humidity", "type:guide", "level:intermediate"] },
  { slug: "winter-dryness-control", title: "Controlling winter dryness.", lead: "Nordic heating systems push RH below 20 %: here's how to spot the problem before complaints roll in.", tags: ["module:indoor-climate", "sensor:humidity", "type:guide", "level:beginner"] },
  { slug: "summer-overheating-offices", title: "Summer overheating in offices.", lead: "Detect overheating early, prove compliance with working-environment rules and plan smart solar shading.", tags: ["module:indoor-climate", "industry:offices", "sensor:temperature", "type:guide", "level:intermediate"] },
  { slug: "night-ventilation-strategies", title: "Night ventilation strategies.", lead: "Use free cooling and intelligent night purge to drop morning temperatures without running chillers.", tags: ["module:indoor-climate", "module:energy", "type:technical", "level:advanced"] },
  { slug: "ppd-ppi-indoor-climate-metrics", title: "PPD and PPI indoor climate metrics.", lead: "How Fanger's predicted percentage dissatisfied and the performance-indicator index translate data into decisions.", tags: ["module:indoor-climate", "type:technical", "level:advanced"] },
  { slug: "radon-measurement", title: "Radon measurement.", lead: "Integrate continuous radon sensors with the rest of your IAQ stack and automate long-term averaging.", tags: ["module:indoor-climate", "sensor:radon", "type:technical", "level:advanced"] },
  { slug: "dust-particles-pm25", title: "PM2.5 and particulate monitoring.", lead: "Track the fine particles that cross into the bloodstream and prove your ventilation filters work.", tags: ["module:indoor-climate", "sensor:pm25", "type:technical", "level:intermediate"] },
  { slug: "air-quality-sports-halls", title: "Air quality in sports halls.", lead: "High activity, high CO₂, mixed occupancy: sports halls need different thresholds than classrooms.", tags: ["module:indoor-climate", "industry:schools", "sensor:co2", "type:guide", "level:intermediate"] },
  { slug: "classroom-ventilation-checklist", title: "Classroom ventilation checklist.", lead: "A practical checklist for teachers, caretakers and school leaders to keep air quality acceptable every day.", tags: ["module:indoor-climate", "industry:schools", "type:guide", "level:beginner"] },
  { slug: "air-quality-auditoriums", title: "Air quality in auditoriums.", lead: "Large, sparsely occupied rooms with sudden full houses: match ventilation to real presence.", tags: ["module:indoor-climate", "industry:schools", "sensor:co2", "type:guide", "level:intermediate"] },
  { slug: "mould-prevention-humidity", title: "Mould prevention through humidity control.", lead: "Catch the early warning signs before spores colonise walls, ceilings and behind furniture.", tags: ["module:indoor-climate", "module:preservation", "sensor:humidity", "type:guide", "level:beginner"] },
  { slug: "air-quality-trends-over-seasons", title: "Air quality trends over the seasons.", lead: "Why annual baselines beat single-week snapshots and how to compare like-for-like across quarters.", tags: ["module:indoor-climate", "type:technical", "level:intermediate"] },
  { slug: "alarms-for-indoor-climate", title: "Alarms for indoor climate.", lead: "Escalation ladders, quiet hours and false-positive tuning for an alert system nobody snoozes.", tags: ["module:indoor-climate", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "indoor-climate-audits", title: "Running an indoor-climate audit.", lead: "A repeatable methodology (baseline, measure, analyse, remediate, verify) for every building in your portfolio.", tags: ["module:indoor-climate", "type:guide", "level:advanced"] },
  { slug: "workplace-assessment-indoor-climate", title: "Indoor climate in the workplace assessment.", lead: "Turn raw sensor data into the evidence base your workplace assessment needs, with exportable PDF reports.", tags: ["module:indoor-climate", "standard:workplace-act", "type:guide", "level:intermediate"] },
  { slug: "ventilation-retrofit-guide", title: "Ventilation retrofit guide.", lead: "When to retrofit existing ventilation, what to measure before and after, and how to prove the business case.", tags: ["module:indoor-climate", "module:energy", "type:guide", "level:advanced"] },
  { slug: "reporting-indoor-climate-to-boards", title: "Reporting indoor climate to the board.", lead: "Translating sensor readings into the three numbers your board cares about without oversimplifying.", tags: ["module:indoor-climate", "type:guide", "level:intermediate"] },
  { slug: "gamifying-classroom-ventilation", title: "Gamifying classroom ventilation.", lead: "Traffic-light LEDs and class dashboards turn abstract CO₂ numbers into something pupils own.", tags: ["module:indoor-climate", "industry:schools", "type:niche", "level:beginner"] },
  { slug: "vav-control-with-co2", title: "VAV control with CO₂.", lead: "Hook variable-air-volume boxes up to live CO₂ readings and stop over-ventilating empty zones.", tags: ["module:indoor-climate", "module:energy", "sensor:co2", "type:technical", "level:advanced"] },
  { slug: "indoor-climate-care-homes", title: "Indoor climate in care homes.", lead: "Vulnerable residents need stable temperature and humidity: automate it and document the duty of care.", tags: ["module:indoor-climate", "industry:elderly-care", "sensor:temperature", "type:guide", "level:intermediate"] },
  { slug: "humidifier-dehumidifier-automation", title: "Automating humidifiers and dehumidifiers.", lead: "Room-level setpoints, runtime caps and water-consumption monitoring for fleet-scale deployments.", tags: ["module:indoor-climate", "sensor:humidity", "type:technical", "level:advanced"] },
  { slug: "comfort-complaints-data-driven", title: "Data-driven comfort complaints.", lead: "Respond to 'it's too cold' or 'it's too stuffy' with evidence instead of guesswork.", tags: ["module:indoor-climate", "industry:offices", "type:guide", "level:beginner"] },
  { slug: "temperature-setpoints-energy-balance", title: "Temperature setpoints and energy balance.", lead: "A 1 °C setback can save 6 % of heating energy: here's how to stage it without sacrificing comfort.", tags: ["module:indoor-climate", "module:energy", "type:guide", "level:intermediate"] },
  { slug: "indoor-climate-retail", title: "Indoor climate in retail.", lead: "Balance shopper comfort, staff wellbeing and energy cost across long opening hours and seasonal swings.", tags: ["module:indoor-climate", "industry:retail", "type:guide", "level:intermediate"] },
  { slug: "indoor-climate-nursing-homes", title: "Indoor climate in nursing homes.", lead: "Frail residents, 24/7 occupancy and staff on their feet all day: continuous measurement is essential.", tags: ["module:indoor-climate", "industry:elderly-care", "type:guide", "level:intermediate"] },
  { slug: "pollen-and-indoor-air", title: "Pollen and indoor air.", lead: "Coordinate filter changes with outdoor pollen forecasts to protect allergic staff and pupils.", tags: ["module:indoor-climate", "type:niche", "level:beginner"] },
  { slug: "cooking-fumes-kitchens", title: "Cooking fumes in kitchens.", lead: "Commercial and institutional kitchens need extraction that adapts to actual activity.", tags: ["module:indoor-climate", "industry:hotels", "sensor:voc", "type:guide", "level:intermediate"] },
  { slug: "cleaning-chemicals-voc", title: "Cleaning chemicals and VOC.", lead: "Spot spikes from over-zealous cleaning routines and schedule them for unoccupied hours.", tags: ["module:indoor-climate", "module:usage-cleaning", "sensor:voc", "type:guide", "level:intermediate"] },
  { slug: "indoor-climate-home-offices", title: "Indoor climate in home offices.", lead: "What employers can responsibly monitor in a home workspace and what stays off-limits.", tags: ["module:indoor-climate", "industry:offices", "type:niche", "level:beginner"] },
]);

// ─── B: Preservation deep-dive (35) ───────────────────────────────────────
const B = makeCatalog("preservation", "B", [
  { slug: "wine-cellar-humidity", title: "Wine cellar humidity.", lead: "Cork shrinkage, label damage and fungal risk: how to keep fine-wine cellars rock-steady.", tags: ["module:preservation", "sensor:humidity", "type:niche", "level:intermediate"] },
  { slug: "organ-preservation", title: "Pipe organ preservation.", lead: "Wood movement, leather valves, tuning stability: why church organs demand ±5 % RH year-round.", tags: ["module:preservation", "industry:churches", "sensor:humidity", "type:guide", "level:advanced"] },
  { slug: "archive-temperature-control", title: "Archive temperature control.", lead: "Cold, stable and dry: the triangle every records archive has to hit within a realistic budget.", tags: ["module:preservation", "industry:archives-libraries", "sensor:temperature", "type:guide", "level:intermediate"] },
  { slug: "museum-storage-climate", title: "Museum storage climate.", lead: "Off-display storage often outweighs the galleries: monitor every rack, not just the big rooms.", tags: ["module:preservation", "industry:museums-galleries", "standard:en-15757", "type:guide", "level:intermediate"] },
  { slug: "library-book-preservation", title: "Library book preservation.", lead: "Historic stacks, special collections and reading-room climate: a tiered monitoring strategy.", tags: ["module:preservation", "industry:archives-libraries", "type:guide", "level:intermediate"] },
  { slug: "en-15757-explained", title: "EN 15757 explained.", lead: "A practical walk through the European preservation-climate standard and how to document compliance.", tags: ["module:preservation", "standard:en-15757", "type:standard", "level:advanced"] },
  { slug: "manor-castle-climate-monitoring", title: "Manor and castle climate monitoring.", lead: "Protecting 400-year-old interiors in buildings that were never designed to be heated.", tags: ["module:preservation", "industry:manors-castles", "type:guide", "level:intermediate"] },
  { slug: "altar-pieces-humidity", title: "Altarpieces and humidity.", lead: "Gilded panels, painted retables and carved wood all move with the seasons: measure, don't guess.", tags: ["module:preservation", "industry:churches", "sensor:humidity", "type:niche", "level:intermediate"] },
  { slug: "oil-paintings-temperature-swings", title: "Oil paintings and temperature swings.", lead: "Canvases, stretchers and paint layers each respond differently: keep swings within EN 15757 bands.", tags: ["module:preservation", "industry:museums-galleries", "sensor:temperature", "type:technical", "level:advanced"] },
  { slug: "textile-conservation-climate", title: "Textile conservation climate.", lead: "Tapestries, costumes and banners demand tight RH control and gentle light: here's the sensor kit.", tags: ["module:preservation", "industry:museums-galleries", "type:guide", "level:advanced"] },
  { slug: "church-interior-rh-bands", title: "Church interior RH bands.", lead: "Target RH ranges for naves, chancels and vestries, and and how to deal with poorly insulated masonry.", tags: ["module:preservation", "industry:churches", "sensor:humidity", "type:technical", "level:advanced"] },
  { slug: "historic-window-condensation", title: "Historic window condensation.", lead: "Spot cold bridges and condensation risk at single-glazed or leaded windows before damage spreads.", tags: ["module:preservation", "sensor:humidity", "sensor:temperature", "type:niche", "level:advanced"] },
  { slug: "crypt-climate-monitoring", title: "Crypt climate monitoring.", lead: "Cool, damp and often unventilated: crypts are ideal sensor candidates with unusual alarm thresholds.", tags: ["module:preservation", "industry:churches", "type:niche", "level:intermediate"] },
  { slug: "palace-floor-conservation", title: "Palace floor conservation.", lead: "Parquet, inlay and stone floors move very differently as tourists cycle through in summer.", tags: ["module:preservation", "industry:manors-castles", "type:niche", "level:advanced"] },
  { slug: "metal-corrosion-humidity", title: "Metal corrosion and humidity.", lead: "Armour, weapons, scientific instruments: stable low RH is the single best defence.", tags: ["module:preservation", "industry:museums-galleries", "sensor:humidity", "type:technical", "level:advanced"] },
  { slug: "paper-artefact-storage", title: "Paper artefact storage.", lead: "Acidity, RH, light: the three killers of paper collections, and and what to measure to fight each.", tags: ["module:preservation", "industry:archives-libraries", "type:guide", "level:intermediate"] },
  { slug: "photographic-collection-climate", title: "Photographic collection climate.", lead: "Black-and-white prints, colour negatives and film stock each need their own storage envelope.", tags: ["module:preservation", "industry:archives-libraries", "type:technical", "level:advanced"] },
  { slug: "film-archive-cold-storage", title: "Film archive cold storage.", lead: "Below-freezing stores protect acetate and nitrate film, but but only if temperature really is stable.", tags: ["module:preservation", "industry:archives-libraries", "sensor:temperature", "type:niche", "level:advanced"] },
  { slug: "wooden-furniture-preservation", title: "Wooden furniture preservation.", lead: "Cracks, loose veneer and warped drawers: the classic RH-cycling symptoms and how to head them off.", tags: ["module:preservation", "industry:museums-galleries", "type:guide", "level:intermediate"] },
  { slug: "leather-book-spine-humidity", title: "Leather book spines and humidity.", lead: "Historic bindings dry out, crack and powder: measure closely and humidify selectively.", tags: ["module:preservation", "industry:archives-libraries", "type:niche", "level:intermediate"] },
  { slug: "museum-pest-monitoring", title: "Museum pest monitoring.", lead: "Temperature, humidity and sticky-trap counts give early warning of silverfish, moths and beetles.", tags: ["module:preservation", "industry:museums-galleries", "type:niche", "level:advanced"] },
  { slug: "dgnb-preservation-documentation", title: "DGNB preservation documentation.", lead: "How to earn preservation credits in DGNB renovation certifications with continuous sensor data.", tags: ["module:preservation", "standard:dgnb", "type:standard", "level:advanced"] },
  { slug: "hvac-failure-alerts-archives", title: "HVAC failure alerts in archives.", lead: "Catch chiller or humidifier failure within minutes, not when the collection already moves.", tags: ["module:preservation", "industry:archives-libraries", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "daily-cycles-church-climate", title: "Daily cycles in church climate.", lead: "Sunday services push RH briefly up: here's how to plot and analyse the inevitable daily cycle.", tags: ["module:preservation", "industry:churches", "type:technical", "level:intermediate"] },
  { slug: "tourist-visitor-impact-climate", title: "Tourist visitor impact on climate.", lead: "Quantify the moisture and heat coming in with visitors and plan capacity accordingly.", tags: ["module:preservation", "industry:museums-galleries", "type:technical", "level:intermediate"] },
  { slug: "climate-control-vestries", title: "Climate control in vestries.", lead: "Small, intermittently heated rooms tied to unheated naves: the classic Scandinavian challenge.", tags: ["module:preservation", "industry:churches", "type:niche", "level:intermediate"] },
  { slug: "insurance-documentation-museums", title: "Insurance documentation for museums.", lead: "Prove your duty of care to insurers with continuous, tamper-evident climate records.", tags: ["module:preservation", "industry:museums-galleries", "type:business-case", "level:intermediate"] },
  { slug: "setpoint-drift-detection", title: "Setpoint drift detection.", lead: "HVAC setpoints creep over the years: automated drift detection keeps you on spec.", tags: ["module:preservation", "module:platform", "type:technical", "level:advanced"] },
  { slug: "loaning-artefacts-travel-logger", title: "Loaning artefacts with travel loggers.", lead: "Pocket-sized loggers that accompany objects in transit and dock back into the central platform.", tags: ["module:preservation", "industry:museums-galleries", "type:guide", "level:intermediate"] },
  { slug: "seasonal-tuning-organ", title: "Seasonal tuning of a pipe organ.", lead: "Plan tuner visits around measured RH and temperature instead of the calendar.", tags: ["module:preservation", "industry:churches", "type:niche", "level:advanced"] },
  { slug: "marzipan-art-storage", title: "Marzipan art storage.", lead: "Yes, really: specialty confectionery museums have some of the tightest climate envelopes around.", tags: ["module:preservation", "type:niche", "level:beginner"] },
  { slug: "iconostasis-climate", title: "Iconostasis climate.", lead: "Orthodox icon screens combine wood, metal leaf and paint: a miniature case study in mixed materials.", tags: ["module:preservation", "industry:churches", "type:niche", "level:advanced"] },
  { slug: "stone-monument-freeze-thaw", title: "Stone monuments and freeze-thaw.", lead: "Outdoor sculpture and gravestones suffer from moisture followed by frost: measure surface temperature.", tags: ["module:preservation", "sensor:temperature", "type:niche", "level:advanced"] },
  { slug: "chapel-climate-sensors", title: "Chapel climate sensors.", lead: "Small, rarely occupied chapels still contain priceless interiors: size your sensor deployment accordingly.", tags: ["module:preservation", "industry:churches", "type:guide", "level:beginner"] },
  { slug: "preservation-roi-dioceses", title: "Preservation ROI for dioceses.", lead: "The numbers behind portfolio-wide sensor rollouts across hundreds of parish churches.", tags: ["module:preservation", "industry:churches", "type:business-case", "level:intermediate"] },
]);

// ─── C: Space management deep-dive (30) ───────────────────────────────────
const C = makeCatalog("space-management", "C", [
  { slug: "meeting-room-booking-no-shows", title: "Meeting room no-shows.", lead: "Ghost bookings waste more space than any other single factor: detect and auto-release them.", tags: ["module:space-management", "industry:offices", "sensor:motion", "type:guide", "level:intermediate"] },
  { slug: "desk-sharing-utilisation", title: "Desk sharing utilisation.", lead: "Right-size your desk-to-headcount ratio with real occupancy data, not self-reported surveys.", tags: ["module:space-management", "industry:offices", "sensor:desk", "type:guide", "level:intermediate"] },
  { slug: "hot-desking-data", title: "Hot-desking data.", lead: "Hour-by-hour occupancy heatmaps for shared desks across an entire floor.", tags: ["module:space-management", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "hybrid-work-patterns", title: "Hybrid work patterns.", lead: "Tuesday-Wednesday-Thursday peaks and Monday-Friday troughs: the new normal, quantified.", tags: ["module:space-management", "industry:offices", "type:trend", "level:beginner"] },
  { slug: "floor-occupancy-heatmaps", title: "Floor occupancy heatmaps.", lead: "Visualise where people really congregate, and and where the expensive floor space sits empty.", tags: ["module:space-management", "industry:offices", "type:guide", "level:beginner"] },
  { slug: "meeting-room-right-sizing", title: "Meeting room right-sizing.", lead: "Most 12-person rooms are used by four people: downsize or reconfigure with confidence.", tags: ["module:space-management", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "phone-booth-utilisation", title: "Phone-booth utilisation.", lead: "The quiet hero of hybrid offices: find out if you have too few or too many.", tags: ["module:space-management", "industry:offices", "type:guide", "level:beginner"] },
  { slug: "canteen-capacity-planning", title: "Canteen capacity planning.", lead: "Staggered lunch shifts, takeaway demand and weekly patterns: plan with data instead of queues.", tags: ["module:space-management", "industry:offices", "industry:schools", "type:guide", "level:intermediate"] },
  { slug: "quiet-room-demand", title: "Quiet room demand.", lead: "Measure the untapped demand for focus space and justify converting meeting rooms.", tags: ["module:space-management", "industry:offices", "type:niche", "level:beginner"] },
  { slug: "silent-room-pir-sensors", title: "Silent rooms and PIR sensors.", lead: "Low-noise, low-power occupancy sensing in rooms that must not beep, blink or buzz.", tags: ["module:space-management", "sensor:motion", "type:technical", "level:advanced"] },
  { slug: "coworking-space-optimisation", title: "Coworking space optimisation.", lead: "Membership tiers, day passes and dedicated desks: match pricing to real occupancy.", tags: ["module:space-management", "industry:offices", "type:business-case", "level:intermediate"] },
  { slug: "office-density-planning", title: "Office density planning.", lead: "Square metres per person is a lagging indicator: live occupancy is the leading one.", tags: ["module:space-management", "industry:offices", "type:guide", "level:advanced"] },
  { slug: "workplace-mix-ratio", title: "Workplace mix ratio.", lead: "Desks, meeting rooms, phone booths and social space: the right mix differs by company culture.", tags: ["module:space-management", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "occupancy-sensors-offices", title: "Occupancy sensors in offices.", lead: "PIR, mmWave, thermopile, computer-vision: which technology fits which room, and why.", tags: ["module:space-management", "sensor:motion", "type:technical", "level:advanced"] },
  { slug: "meeting-room-dashboards-tv", title: "Meeting room dashboards on TV.", lead: "Foyer and corridor TVs that show live availability so people stop wandering to find a room.", tags: ["module:space-management", "module:platform", "type:guide", "level:beginner"] },
  { slug: "bookable-zones-dynamic-pricing", title: "Bookable zones and dynamic pricing.", lead: "Mature coworking ops price premium areas differently at peak hours: data makes it fair.", tags: ["module:space-management", "type:business-case", "level:advanced"] },
  { slug: "cafeteria-peak-hours", title: "Cafeteria peak hours.", lead: "Line-up length, seat turnover and demand per dish: the trifecta that lets you run smoother lunches.", tags: ["module:space-management", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "classroom-timetable-vs-usage", title: "Classroom timetable vs actual usage.", lead: "Uncover the gap between what your scheduling system thinks and what sensors measure.", tags: ["module:space-management", "industry:schools", "type:guide", "level:intermediate"] },
  { slug: "library-study-room-bookings", title: "Library study-room bookings.", lead: "Student group-rooms are precious: auto-release no-shows and publish live availability.", tags: ["module:space-management", "industry:archives-libraries", "type:guide", "level:beginner"] },
  { slug: "parking-lot-sensors", title: "Parking lot sensors.", lead: "Cost-effective occupancy signalling for corporate car parks without full camera infrastructure.", tags: ["module:space-management", "type:niche", "level:intermediate"] },
  { slug: "reception-visitor-flow", title: "Reception visitor flow.", lead: "Queue length, waiting time, repeat visits: reception analytics without facial recognition.", tags: ["module:space-management", "industry:offices", "type:niche", "level:intermediate"] },
  { slug: "gym-capacity-monitoring", title: "Gym capacity monitoring.", lead: "Peak equipment occupancy that drives class scheduling, staffing and member apps.", tags: ["module:space-management", "type:niche", "level:beginner"] },
  { slug: "bike-rack-occupancy", title: "Bike rack occupancy.", lead: "Corporate cycling programs rely on rack availability: measure it and plan expansions.", tags: ["module:space-management", "type:niche", "level:beginner"] },
  { slug: "shuttle-bus-utilisation", title: "Shuttle bus utilisation.", lead: "Track occupancy on campus and between-site shuttles to right-size the fleet.", tags: ["module:space-management", "type:niche", "level:intermediate"] },
  { slug: "locker-booking-corporate", title: "Corporate locker booking.", lead: "Share personal lockers across hybrid teams without losing audit or security.", tags: ["module:space-management", "module:lockers-doors", "type:guide", "level:intermediate"] },
  { slug: "break-room-usage", title: "Break room usage.", lead: "Quiet, social and collaborative: three different patterns, three different signals to watch.", tags: ["module:space-management", "industry:offices", "type:niche", "level:beginner"] },
  { slug: "conference-centre-utilisation", title: "Conference centre utilisation.", lead: "Room turnover, A/V booking and catering demand: real-time analytics for event venues.", tags: ["module:space-management", "industry:hotels", "type:business-case", "level:intermediate"] },
  { slug: "coworking-day-pass-demand", title: "Coworking day-pass demand.", lead: "Forecast walk-in demand so you can plan staffing, cleaning and amenity stock.", tags: ["module:space-management", "type:business-case", "level:intermediate"] },
  { slug: "covid-era-density-legacy", title: "The legacy of COVID-era density rules.", lead: "Which density guidelines stuck, which rolled back, and what the data actually shows.", tags: ["module:space-management", "industry:offices", "type:trend", "level:intermediate"] },
  { slug: "multi-campus-space-benchmarking", title: "Multi-campus space benchmarking.", lead: "Compare utilisation across dozens of sites on a single dashboard.", tags: ["module:space-management", "industry:offices", "module:platform", "type:guide", "level:advanced"] },
]);

// ─── D: Water detection deep-dive (20) ────────────────────────────────────
const D = makeCatalog("water-detection", "D", [
  { slug: "under-sink-sensor-placement", title: "Under-sink sensor placement.", lead: "The best spots to catch dishwasher, disposal and faucet leaks in commercial kitchens.", tags: ["module:water-detection", "sensor:water-detector", "type:guide", "level:beginner"] },
  { slug: "flat-roof-leak-monitoring", title: "Flat roof leak monitoring.", lead: "Early warning before water penetrates ceiling tiles and disrupts teaching or work below.", tags: ["module:water-detection", "industry:schools", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "boiler-room-flood-sensors", title: "Boiler room flood sensors.", lead: "Seal failures on pumps, valves and expansion tanks: catch them before the boiler shuts down.", tags: ["module:water-detection", "type:guide", "level:intermediate"] },
  { slug: "dishwasher-overflow-detection", title: "Dishwasher overflow detection.", lead: "Canteens, hotels and care homes all depend on dishwashers: and all flood if nobody watches.", tags: ["module:water-detection", "industry:hotels", "industry:elderly-care", "type:niche", "level:intermediate"] },
  { slug: "ice-machine-leak-detection", title: "Ice machine leak detection.", lead: "Tucked-away ice machines are a classic water-damage risk: sensor the drip tray and the line.", tags: ["module:water-detection", "industry:hotels", "type:niche", "level:beginner"] },
  { slug: "residential-care-water-safety", title: "Residential care water safety.", lead: "Prevent scalds and slip-and-fall risk from overflows in assisted-living bathrooms.", tags: ["module:water-detection", "industry:elderly-care", "type:guide", "level:intermediate"] },
  { slug: "historic-building-leak-risks", title: "Historic building leak risks.", lead: "Where water finds its way into heritage buildings, and where sensors have the biggest payoff.", tags: ["module:water-detection", "module:preservation", "industry:manors-castles", "type:guide", "level:advanced"] },
  { slug: "sprinkler-system-test-monitoring", title: "Sprinkler system test monitoring.", lead: "Monthly tests should drain cleanly: sensors verify nothing leaked to floors below.", tags: ["module:water-detection", "industry:offices", "type:niche", "level:intermediate"] },
  { slug: "gutter-overflow-detection", title: "Gutter overflow detection.", lead: "Blocked gutters are invisible until water runs down facades: detect the overflow upstream.", tags: ["module:water-detection", "type:niche", "level:intermediate"] },
  { slug: "sewer-backup-alarms", title: "Sewer backup alarms.", lead: "Sump pits, backflow valves and manholes: the unglamorous side of building water-damage prevention.", tags: ["module:water-detection", "type:niche", "level:advanced"] },
  { slug: "storm-water-basement-sensors", title: "Storm water and basement sensors.", lead: "Climate change means more intense rain events: basements need monitoring, not just drains.", tags: ["module:water-detection", "type:trend", "level:intermediate"] },
  { slug: "restroom-floor-leak-detection", title: "Restroom floor leak detection.", lead: "Running taps, overflowing toilets and cracked mains all end up on the floor first.", tags: ["module:water-detection", "industry:offices", "industry:schools", "type:guide", "level:beginner"] },
  { slug: "washing-machine-leak-sensors", title: "Washing machine leak sensors.", lead: "Institutional laundries and shared-living washing rooms are high-risk, low-visibility areas.", tags: ["module:water-detection", "industry:elderly-care", "type:niche", "level:intermediate"] },
  { slug: "chilled-beam-condensation", title: "Chilled beam condensation.", lead: "When humidity rises unexpectedly, chilled beams drip: catch it before the false ceiling does.", tags: ["module:water-detection", "module:indoor-climate", "type:technical", "level:advanced"] },
  { slug: "fan-coil-unit-leak-detection", title: "Fan coil unit leak detection.", lead: "Blocked drain pans, failed float switches and clogged condensate lines: the usual suspects.", tags: ["module:water-detection", "type:technical", "level:advanced"] },
  { slug: "frost-damage-pipes-alarm", title: "Frost damage pipe alarms.", lead: "Unheated corners, crawl spaces and annex buildings: pre-emptive alerts before the burst.", tags: ["module:water-detection", "sensor:temperature", "type:guide", "level:intermediate"] },
  { slug: "leak-alarm-escalation-ladder", title: "Leak alarm escalation ladder.", lead: "Who gets paged first, second and third when water hits a sensor at 02:00?", tags: ["module:water-detection", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "insurance-deductible-reduction", title: "Insurance deductible reduction.", lead: "Many insurers now discount premiums (or lower deductibles) when documented leak detection is in place.", tags: ["module:water-detection", "type:business-case", "level:intermediate"] },
  { slug: "crawl-space-humidity-alarms", title: "Crawl space humidity alarms.", lead: "The early warning for bigger moisture problems that will eventually reach the floors above.", tags: ["module:water-detection", "module:preservation", "sensor:humidity", "type:niche", "level:intermediate"] },
  { slug: "hotel-bathroom-leak-detection", title: "Hotel bathroom leak detection.", lead: "One undetected leak, one ruined guest stay, several rooms out of service: the classic hotel scenario.", tags: ["module:water-detection", "industry:hotels", "type:business-case", "level:intermediate"] },
]);

// ─── E: Push buttons deep-dive (20) ───────────────────────────────────────
const E = makeCatalog("push-buttons", "E", [
  { slug: "cleaning-request-buttons-restrooms", title: "Cleaning request buttons in restrooms.", lead: "Guest feedback that drives cleaning dispatch: the classic high-ROI push-button deployment.", tags: ["module:push-buttons", "module:usage-cleaning", "industry:hotels", "sensor:touch", "type:guide", "level:beginner"] },
  { slug: "restocking-toilets-push-buttons", title: "Restocking toilets with push buttons.", lead: "Toilet paper, soap, paper towels: staff get a tap-triggered alert instead of guest complaints.", tags: ["module:push-buttons", "module:usage-cleaning", "type:guide", "level:beginner"] },
  { slug: "conference-room-issue-reporting", title: "Conference room issue reporting.", lead: "A single button beats a long ticket form for presenters and A/V teams.", tags: ["module:push-buttons", "industry:offices", "type:guide", "level:beginner"] },
  { slug: "security-panic-buttons", title: "Security panic buttons.", lead: "Discreet, always-on panic signals for receptions, lone workers and after-hours staff.", tags: ["module:push-buttons", "type:niche", "level:advanced"] },
  { slug: "dispenser-refill-signals", title: "Dispenser refill signals.", lead: "Anywhere a dispenser runs out (sanitiser, cups, towels), a low-power button closes the loop.", tags: ["module:push-buttons", "module:usage-cleaning", "type:guide", "level:beginner"] },
  { slug: "handyman-callout-buttons", title: "Handyman callout buttons.", lead: "Broken chair, stuck window, flickering light: simple callout hardware for staff and tenants.", tags: ["module:push-buttons", "industry:property-management", "type:guide", "level:beginner"] },
  { slug: "lab-incident-reporting", title: "Lab incident reporting.", lead: "Fume-hood failure, spill response, equipment malfunction: push buttons with categorical tags.", tags: ["module:push-buttons", "industry:hospitals", "type:niche", "level:advanced"] },
  { slug: "patient-feedback-buttons", title: "Patient feedback buttons.", lead: "Hospitals and clinics use one-tap feedback to track experience at discharge and follow-up.", tags: ["module:push-buttons", "industry:hospitals", "type:guide", "level:intermediate"] },
  { slug: "kitchen-equipment-reporting", title: "Kitchen equipment reporting.", lead: "Walk-in coolers, ranges, deep fryers: hospitality teams report faults with a single press.", tags: ["module:push-buttons", "industry:hotels", "type:guide", "level:intermediate"] },
  { slug: "classroom-feedback-teachers", title: "Classroom feedback for teachers.", lead: "A quick 'air needs checking' or 'projector broken' button that doesn't steal teaching time.", tags: ["module:push-buttons", "industry:schools", "type:guide", "level:beginner"] },
  { slug: "tourist-attraction-feedback", title: "Tourist attraction feedback.", lead: "Post-visit 'how was your visit?' buttons with trend analytics: anonymous and robust.", tags: ["module:push-buttons", "industry:museums-galleries", "type:niche", "level:beginner"] },
  { slug: "hotel-room-service-buttons", title: "Hotel room-service buttons.", lead: "Categorical buttons (towels, cleaning, maintenance) that integrate straight into the PMS.", tags: ["module:push-buttons", "industry:hotels", "type:business-case", "level:intermediate"] },
  { slug: "retail-employee-call-button", title: "Retail employee call button.", lead: "Shoppers summon staff for fitting rooms, restock or questions without hunting down a tablet.", tags: ["module:push-buttons", "industry:retail", "type:guide", "level:beginner"] },
  { slug: "warehouse-picking-feedback", title: "Warehouse picking feedback.", lead: "Pick-errors, shelf-out-of-stock and damaged-goods buttons that short-circuit normal reporting.", tags: ["module:push-buttons", "industry:warehouses-logistics", "type:niche", "level:intermediate"] },
  { slug: "facility-issue-escalation", title: "Facility issue escalation.", lead: "Multi-stage escalation built on top of the push-button signal, all in one workflow.", tags: ["module:push-buttons", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "nfc-vs-lorawan-buttons", title: "NFC vs LoRaWAN buttons.", lead: "When to choose tap-to-report NFC stickers, and when a dedicated LoRaWAN button is worth the extra cost.", tags: ["module:push-buttons", "sensor:touch", "type:comparison", "level:advanced"] },
  { slug: "button-battery-lifetime", title: "Push-button battery lifetime.", lead: "How many presses per year you can expect from a coin cell, and when replacement kicks in.", tags: ["module:push-buttons", "sensor:touch", "type:technical", "level:intermediate"] },
  { slug: "button-heatmap-analysis", title: "Button heatmap analysis.", lead: "Plot feedback counts on a floor plan to see the operational hot spots that need attention.", tags: ["module:push-buttons", "module:platform", "type:guide", "level:intermediate"] },
  { slug: "cleaning-sla-via-buttons", title: "Cleaning SLA via buttons.", lead: "Turn 'time from signal to resolution' into the contractual metric for outsourced cleaning.", tags: ["module:push-buttons", "module:usage-cleaning", "type:business-case", "level:advanced"] },
  { slug: "dynamic-cleaning-prioritisation", title: "Dynamic cleaning prioritisation.", lead: "Combine footfall, feedback buttons and cleaner location for live task reordering.", tags: ["module:push-buttons", "module:usage-cleaning", "type:guide", "level:advanced"] },
]);

// ─── F: Lockers/doors deep-dive (15) ──────────────────────────────────────
const F = makeCatalog("lockers-doors", "F", [
  { slug: "locker-occupancy-schools", title: "Locker occupancy in schools.", lead: "Who's using the locker, which are abandoned, which can be reassigned to next year's intake.", tags: ["module:lockers-doors", "industry:schools", "sensor:open-close", "type:guide", "level:beginner"] },
  { slug: "gym-locker-turnover", title: "Gym locker turnover.", lead: "Detect forgotten gear and free up lockers automatically for the next member.", tags: ["module:lockers-doors", "type:niche", "level:beginner"] },
  { slug: "hospital-staff-locker-monitoring", title: "Hospital staff locker monitoring.", lead: "Shift-based locker allocation that reflects real usage across wards and departments.", tags: ["module:lockers-doors", "industry:hospitals", "type:guide", "level:intermediate"] },
  { slug: "equipment-cabinet-access-logs", title: "Equipment cabinet access logs.", lead: "Who opened the AED or defibrillator cabinet, when and for how long: compliant audit trails.", tags: ["module:lockers-doors", "industry:hospitals", "type:standard", "level:advanced"] },
  { slug: "fire-door-open-too-long", title: "Fire door open too long.", lead: "Spot wedged-open fire doors within minutes instead of discovering them at an audit.", tags: ["module:lockers-doors", "sensor:open-close", "type:guide", "level:intermediate"] },
  { slug: "server-rack-door-sensors", title: "Server rack door sensors.", lead: "Physical security auditing for data-centre racks: a lightweight complement to badge systems.", tags: ["module:lockers-doors", "industry:it", "sensor:open-close", "type:niche", "level:advanced"] },
  { slug: "medicine-cabinet-compliance", title: "Medicine cabinet compliance.", lead: "Track access patterns on restricted medicines without replacing your existing cabinet hardware.", tags: ["module:lockers-doors", "industry:hospitals", "industry:elderly-care", "type:standard", "level:advanced"] },
  { slug: "chemical-cabinet-audit-trail", title: "Chemical cabinet audit trail.", lead: "Schools, labs and workshops need evidence of who accessed which chemicals when.", tags: ["module:lockers-doors", "industry:schools", "type:standard", "level:intermediate"] },
  { slug: "delivery-door-temperature", title: "Delivery door temperature.", lead: "Cold-chain compliance for loading docks: detect doors left open longer than the rules allow.", tags: ["module:lockers-doors", "industry:warehouses-logistics", "sensor:temperature", "type:technical", "level:intermediate"] },
  { slug: "cold-storage-door-open-alarms", title: "Cold storage door open alarms.", lead: "A door ajar on a walk-in freezer costs energy and spoils goods: minute-level alerts cut both.", tags: ["module:lockers-doors", "module:energy", "industry:warehouses-logistics", "type:guide", "level:intermediate"] },
  { slug: "after-hours-door-alarms", title: "After-hours door alarms.", lead: "Integrate open/close events with business hours for quick security situational awareness.", tags: ["module:lockers-doors", "sensor:open-close", "type:guide", "level:intermediate"] },
  { slug: "bike-storage-door-status", title: "Bike storage door status.", lead: "Members need reassurance that the bike room is secure: a live status display does the job.", tags: ["module:lockers-doors", "type:niche", "level:beginner"] },
  { slug: "cleaning-cupboard-audit", title: "Cleaning cupboard audit.", lead: "Detect unauthorised access to cleaning supplies in hotels and schools.", tags: ["module:lockers-doors", "industry:hotels", "industry:schools", "type:niche", "level:beginner"] },
  { slug: "art-storage-vault-access", title: "Art storage vault access.", lead: "Pair climate logging with access logs: a full evidence package for high-value art stores.", tags: ["module:lockers-doors", "module:preservation", "industry:museums-galleries", "type:niche", "level:advanced"] },
  { slug: "meter-cabinet-monitoring", title: "Meter cabinet monitoring.", lead: "Utility meter rooms deserve the same security and climate attention as IT rooms do.", tags: ["module:lockers-doors", "module:water-detection", "type:niche", "level:advanced"] },
]);

// ─── G: Usage / cleaning deep-dive (15) ───────────────────────────────────
const G = makeCatalog("cleaning", "G", [
  { slug: "demand-based-cleaning-offices", title: "Demand-based cleaning in offices.", lead: "Clean the rooms that were used: not the ones the schedule says.", tags: ["module:usage-cleaning", "industry:offices", "type:guide", "level:beginner"] },
  { slug: "restroom-footfall-cleaning", title: "Restroom footfall and cleaning.", lead: "Put the cleaner where the counter says they're needed, and skip the empty floors.", tags: ["module:usage-cleaning", "sensor:motion", "type:guide", "level:intermediate"] },
  { slug: "visitor-count-gallery-cleaning", title: "Visitor counts and gallery cleaning.", lead: "Museums plan cleaning shifts around exhibition peaks: sensors replace a guessed daily average.", tags: ["module:usage-cleaning", "industry:museums-galleries", "type:niche", "level:intermediate"] },
  { slug: "canteen-cleaning-triggers", title: "Canteen cleaning triggers.", lead: "Triggers based on last-seat-occupied rather than the clock prevent cleaning too early or too late.", tags: ["module:usage-cleaning", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "school-toilet-cleaning-schedule", title: "School toilet cleaning schedule.", lead: "Heavy peaks at break time, almost nothing in between: adaptive cleaning saves real money.", tags: ["module:usage-cleaning", "industry:schools", "type:business-case", "level:intermediate"] },
  { slug: "gym-equipment-wipe-downs", title: "Gym equipment wipe-downs.", lead: "Sensor-triggered wipe-down reminders in facilities where cleanliness is a membership perk.", tags: ["module:usage-cleaning", "type:niche", "level:beginner"] },
  { slug: "hospital-terminal-cleaning", title: "Hospital terminal cleaning.", lead: "Prove terminal disinfection completed after every patient transfer using a single button.", tags: ["module:usage-cleaning", "module:push-buttons", "industry:hospitals", "type:standard", "level:advanced"] },
  { slug: "hotel-room-cleaning-pirs", title: "Hotel room cleaning with PIR.", lead: "Presence sensors tell housekeeping which rooms guests have already left.", tags: ["module:usage-cleaning", "industry:hotels", "sensor:motion", "type:guide", "level:intermediate"] },
  { slug: "airport-restroom-cleaning-sla", title: "Airport restroom cleaning SLA.", lead: "Real-time footfall and feedback that drive the contractually required cleaning response times.", tags: ["module:usage-cleaning", "type:business-case", "level:advanced"] },
  { slug: "co-working-end-of-day-cleaning", title: "Co-working end-of-day cleaning.", lead: "Clean only the rooms that were in use that day, and leave the rest for the weekly deep clean.", tags: ["module:usage-cleaning", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "cleaning-robot-orchestration", title: "Cleaning robot orchestration.", lead: "Feed autonomous cleaning robots a live map of which rooms need attention.", tags: ["module:usage-cleaning", "module:platform", "type:technical", "level:advanced"] },
  { slug: "window-cleaning-daylight-sensors", title: "Window cleaning and daylight sensors.", lead: "Schedule cleaning when daylight drop signals pollution: an unusual but effective trigger.", tags: ["module:usage-cleaning", "type:niche", "level:advanced"] },
  { slug: "outdoor-area-cleaning-weather", title: "Outdoor area cleaning and weather.", lead: "Integrate weather data so outdoor cleaning crews are deployed after the rain, not during.", tags: ["module:usage-cleaning", "type:niche", "level:intermediate"] },
  { slug: "playground-usage-cleaning", title: "Playground usage and cleaning.", lead: "Kindergartens use sensor-driven cleaning to stay on top of outdoor equipment hygiene.", tags: ["module:usage-cleaning", "industry:schools", "type:niche", "level:beginner"] },
  { slug: "nurse-call-aware-cleaning", title: "Nurse-call-aware cleaning.", lead: "Avoid cleaning rooms that are actively in care: integrate with nurse-call signals.", tags: ["module:usage-cleaning", "industry:hospitals", "type:guide", "level:advanced"] },
]);

// ─── H: Energy deep-dive (20) ─────────────────────────────────────────────
const H = makeCatalog("energy", "H", [
  { slug: "night-setback-heating", title: "Night setback heating.", lead: "Automated temperature drops tied to building schedule and weather: the classic first energy win.", tags: ["module:energy", "sensor:temperature", "type:guide", "level:beginner"] },
  { slug: "occupied-unoccupied-hvac", title: "Occupied vs unoccupied HVAC.", lead: "Use real occupancy (not just the calendar) to throttle back ventilation and heating.", tags: ["module:energy", "module:space-management", "type:guide", "level:intermediate"] },
  { slug: "lights-out-automation", title: "Lights-out automation.", lead: "Measure the after-hours lighting that nobody notices: and switch it off.", tags: ["module:energy", "sensor:motion", "type:guide", "level:beginner"] },
  { slug: "co2-based-hvac-demand-control", title: "CO₂-based HVAC demand control.", lead: "Let live CO₂ readings dictate how hard the air-handling units work.", tags: ["module:energy", "module:indoor-climate", "sensor:co2", "type:technical", "level:advanced"] },
  { slug: "heat-recovery-effectiveness", title: "Heat recovery effectiveness.", lead: "Is the heat-exchanger wheel actually recovering energy, or has it iced, fouled or failed?", tags: ["module:energy", "type:technical", "level:advanced"] },
  { slug: "district-heating-optimisation", title: "District heating optimisation.", lead: "Return-temperature analytics that qualify your building for reduced district-heating tariffs.", tags: ["module:energy", "type:business-case", "level:advanced"] },
  { slug: "energy-benchmarks-schools", title: "Energy benchmarks for schools.", lead: "What a kilowatt-hour per pupil per year actually looks like across districts.", tags: ["module:energy", "industry:schools", "type:guide", "level:intermediate"] },
  { slug: "energy-benchmarks-offices", title: "Energy benchmarks for offices.", lead: "Comparative data for office buildings on a watts-per-m²-per-day basis.", tags: ["module:energy", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "heat-loss-windows-climate", title: "Heat loss at windows.", lead: "Surface-temperature sensors on cold bridges quantify the loss and rank retrofit priorities.", tags: ["module:energy", "sensor:temperature", "type:technical", "level:advanced"] },
  { slug: "setpoint-tuning-algorithms", title: "Setpoint tuning algorithms.", lead: "Adaptive setpoints that learn from weather forecasts and occupancy patterns in real time.", tags: ["module:energy", "module:platform", "type:technical", "level:advanced"] },
  { slug: "boiler-cycling-analytics", title: "Boiler cycling analytics.", lead: "Short-cycling wastes fuel and shortens equipment life: diagnose it from the energy signature.", tags: ["module:energy", "type:technical", "level:advanced"] },
  { slug: "plug-load-monitoring-offices", title: "Plug load monitoring in offices.", lead: "Individual-device power in hot-desking environments highlights phantom loads to target.", tags: ["module:energy", "industry:offices", "type:guide", "level:intermediate"] },
  { slug: "pv-self-consumption", title: "PV self-consumption.", lead: "Maximise on-site solar use with occupancy-aware loads and simple battery scheduling.", tags: ["module:energy", "type:technical", "level:advanced"] },
  { slug: "storage-battery-scheduling", title: "Storage battery scheduling.", lead: "Time-of-use tariffs, self-consumption and peak-shaving goals blended into a single policy.", tags: ["module:energy", "type:technical", "level:advanced"] },
  { slug: "peak-load-shaving", title: "Peak load shaving.", lead: "Automated load shedding during the morning startup peak: savings straight to the bill.", tags: ["module:energy", "type:business-case", "level:advanced"] },
  { slug: "esg-reporting-buildings", title: "ESG reporting for buildings.", lead: "Scope 1 and 2 metrics with continuous sensor-grade evidence: auditable and reproducible.", tags: ["module:energy", "standard:csrd", "type:standard", "level:advanced"] },
  { slug: "energy-waste-anomalies", title: "Energy waste anomalies.", lead: "Spot the unusual weekend consumption, overnight HVAC runs and holiday leakage in seconds.", tags: ["module:energy", "module:platform", "type:guide", "level:advanced"] },
  { slug: "csrd-scope-1-2-3-data", title: "CSRD scope 1-2-3 data.", lead: "The data pipeline from building sensors to CSRD-compliant reports your auditor will accept.", tags: ["module:energy", "standard:csrd", "type:standard", "level:advanced"] },
  { slug: "energy-rating-brf-homes", title: "Energy rating for housing associations.", lead: "Collective-housing energy ratings get cheaper and faster with continuous monitoring.", tags: ["module:energy", "industry:property-management", "type:business-case", "level:intermediate"] },
  { slug: "behavioural-energy-savings", title: "Behavioural energy savings.", lead: "When staff can see their department's consumption, savings follow: without any automation.", tags: ["module:energy", "type:trend", "level:beginner"] },
]);

// ─── I: Sensors technical (5) ─────────────────────────────────────────────
const I = makeCatalog("sensors", "I", [
  { slug: "sensor-placement-guide", title: "Sensor placement guide.", lead: "Height, distance from doors, proximity to outlets and direct sun: the fundamentals in one page.", tags: ["module:platform", "type:technical", "level:beginner"] },
  { slug: "battery-lifetime-tuning", title: "Battery lifetime tuning.", lead: "Reporting intervals, radio power, cold-weather penalties and the tricks for multi-year life.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "calibration-intervals-explained", title: "Calibration intervals explained.", lead: "Which sensors actually drift, which don't, and what to do about the ones that do.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "lorawan-vs-nb-iot-rf-budget", title: "LoRaWAN vs NB-IoT RF budget.", lead: "Link budgets, penetration into basements and underground vaults, and carrier considerations.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "gateway-redundancy-patterns", title: "Gateway redundancy patterns.", lead: "Mesh coverage, overlapping gateways and failure modes when a single gateway goes dark.", tags: ["module:platform", "type:technical", "level:advanced"] },
]);

// ─── J: Technology / platform (25) ────────────────────────────────────────
const J = makeCatalog("platform", "J", [
  { slug: "roomalyzer-architecture", title: "RoomAlyzer architecture.", lead: "Sensors, gateways, message brokers, time-series store, API and dashboards: the full picture.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "api-authentication-oauth", title: "API authentication with OAuth.", lead: "Client credentials, user tokens, scopes and refresh: the IoT Fabrikken OAuth story end to end.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "data-retention-policies", title: "Data retention policies.", lead: "Raw, rollup and aggregate tiers: how long we keep what, and how you can configure it.", tags: ["module:platform", "type:standard", "level:advanced"] },
  { slug: "multi-tenant-access-control", title: "Multi-tenant access control.", lead: "Organisation, site, building and room-level permissions for large enterprise deployments.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "sso-integration-azure-ad", title: "SSO integration with Azure AD.", lead: "SAML and OIDC setup for Microsoft Entra / Azure Active Directory tenants.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "sso-okta-integration", title: "SSO integration with Okta.", lead: "Provisioning, group mapping and role sync for Okta-managed enterprises.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "gdpr-data-processing", title: "GDPR data processing.", lead: "What we collect, why, where it lives and how you exercise data-subject rights on the platform.", tags: ["module:platform", "standard:gdpr", "type:standard", "level:intermediate"] },
  { slug: "iso-27001-platform", title: "ISO 27001 on the platform.", lead: "Our information security posture: controls, audits and evidence packages for procurement.", tags: ["module:platform", "standard:iso-27001", "type:standard", "level:advanced"] },
  { slug: "data-residency-eu", title: "EU data residency.", lead: "Every byte of operational data stays inside the EU by default: and here's how to prove it.", tags: ["module:platform", "standard:gdpr", "type:standard", "level:intermediate"] },
  { slug: "audit-logs-for-admins", title: "Audit logs for admins.", lead: "Who logged in, who changed a setpoint, who exported a report: queryable and retained.", tags: ["module:platform", "type:technical", "level:intermediate"] },
  { slug: "api-rate-limits", title: "API rate limits.", lead: "What the limits are, how they're enforced, and how to negotiate upwards for partner integrations.", tags: ["module:platform", "type:technical", "level:intermediate"] },
  { slug: "webhooks-for-alarms", title: "Webhooks for alarms.", lead: "Push events straight into Slack, Teams, ITSM or custom middleware: signed and retriable.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "white-label-dashboards", title: "White-label dashboards.", lead: "Apply your own colours, logo, fonts and subdomain for customer-facing dashboards.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "maps-floorplans-upload", title: "Maps and floorplans upload.", lead: "Bring IFC, SVG and PDF floor plans in, georeference them and pin every sensor.", tags: ["module:platform", "type:guide", "level:intermediate"] },
  { slug: "custom-reports-builder", title: "Custom reports builder.", lead: "Drag-and-drop report design for recurring email delivery to boards, auditors and tenants.", tags: ["module:platform", "type:guide", "level:intermediate"] },
  { slug: "pdf-export-template", title: "PDF export templates.", lead: "Template-based report exports with your logo, header, footer and structured sections.", tags: ["module:platform", "type:guide", "level:beginner"] },
  { slug: "role-based-access-control", title: "Role-based access control.", lead: "Built-in roles, custom roles, scoped permissions: who gets to see what, everywhere.", tags: ["module:platform", "type:technical", "level:intermediate"] },
  { slug: "public-dashboards-kiosk", title: "Public dashboards and kiosk mode.", lead: "Stream tamper-proof, read-only dashboards onto lobby TVs with no login required.", tags: ["module:platform", "type:guide", "level:beginner"] },
  { slug: "alarm-escalation-chains", title: "Alarm escalation chains.", lead: "Primary, secondary and tertiary responders with quiet hours, acknowledgement and repeat rules.", tags: ["module:platform", "type:guide", "level:intermediate"] },
  { slug: "mobile-app-field-techs", title: "The mobile app for field technicians.", lead: "QR-scan a sensor, see its recent history and replace it without ever leaving the app.", tags: ["module:platform", "type:guide", "level:beginner"] },
  { slug: "tv-dashboards-receptions", title: "TV dashboards at receptions.", lead: "Live availability, indoor-climate status and visitor counts: the front-desk upgrade.", tags: ["module:platform", "module:space-management", "type:guide", "level:beginner"] },
  { slug: "scim-user-provisioning", title: "SCIM user provisioning.", lead: "Automate user lifecycle with SCIM 2.0 against your identity provider.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "power-bi-connector", title: "Power BI connector.", lead: "Pull RoomAlyzer metrics directly into Power BI with our managed connector.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "datacentre-high-availability", title: "Data centre high availability.", lead: "Redundancy, failover, backups and disaster-recovery posture explained for procurement teams.", tags: ["module:platform", "type:technical", "level:advanced"] },
  { slug: "incident-response-sla", title: "Incident response SLA.", lead: "Our severity levels, response times, communication protocol and post-mortem practice.", tags: ["module:platform", "type:standard", "level:intermediate"] },
]);

// ─── K: Other integrations (12) ───────────────────────────────────────────
const K = makeCatalog("integrations", "K", [
  { slug: "integration-dalux", title: "Integration: Dalux.", lead: "Push IoT Fabrikken indoor-climate and occupancy data straight into the Dalux FM platform.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "integration-pronestor", title: "Integration: Pronestor.", lead: "Sync sensor-measured occupancy with Pronestor meeting-room booking to auto-release no-shows.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "integration-os2iot", title: "Integration: OS2iot.", lead: "A turnkey LoRaWAN bridge for Danish municipalities using the OS2iot community platform.", tags: ["module:platform", "industry:municipalities", "type:integration", "level:advanced"] },
  { slug: "integration-power-bi", title: "Integration: Power BI.", lead: "Authenticate once, refresh on a schedule and blend RoomAlyzer data into corporate BI.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "integration-azure-iot-hub", title: "Integration: Azure IoT Hub.", lead: "Forward device telemetry to Azure IoT Hub for downstream Stream Analytics and Functions.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "integration-google-calendar", title: "Integration: Google Calendar.", lead: "Compare booked meeting time with actual occupancy data on a per-room basis.", tags: ["module:platform", "type:integration", "level:intermediate"] },
  { slug: "integration-microsoft-teams", title: "Integration: Microsoft Teams.", lead: "Post alarm notifications and weekly summaries into the facility-management Teams channel.", tags: ["module:platform", "type:integration", "level:beginner"] },
  { slug: "integration-slack-alerts", title: "Integration: Slack alerts.", lead: "Tiered severity channels, interactive acknowledgement and noise-suppression rules.", tags: ["module:platform", "type:integration", "level:beginner"] },
  { slug: "integration-servicenow", title: "Integration: ServiceNow.", lead: "Every alarm becomes an incident: routed, categorised and closed loop.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "integration-niagara-tridium", title: "Integration: Niagara / Tridium.", lead: "Bridge Niagara N4 drivers to RoomAlyzer sensors without writing custom BACnet mappings.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "integration-siemens-desigo", title: "Integration: Siemens Desigo.", lead: "Overlay IoT Fabrikken wireless sensors on an existing Desigo CC BMS deployment.", tags: ["module:platform", "type:integration", "level:advanced"] },
  { slug: "integration-schneider-ecostruxure", title: "Integration: Schneider EcoStruxure.", lead: "How wireless sensor overlays complement Schneider's wired BMS stack.", tags: ["module:platform", "type:integration", "level:advanced"] },
]);

// ─── L: Other industries (20) ─────────────────────────────────────────────
const L = makeCatalog("industries", "L", [
  { slug: "iot-pharmacies", title: "IoT in pharmacies.", lead: "Controlled storage temperature, humidity and open-close audit trails for regulated medicines.", tags: ["type:niche", "level:advanced"] },
  { slug: "iot-greenhouses", title: "IoT in greenhouses.", lead: "Temperature, humidity and CO₂ feedback for commercial and ornamental growing.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-concert-halls", title: "IoT in concert halls.", lead: "Instrument-grade preservation climate combined with audience-comfort monitoring.", tags: ["module:preservation", "type:niche", "level:advanced"] },
  { slug: "iot-veterinary-clinics", title: "IoT in veterinary clinics.", lead: "Indoor-air monitoring and cold-chain compliance for small-animal practices.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-dental-offices", title: "IoT in dental offices.", lead: "Small-clinic indoor climate, water leak detection and sterilisation cabinet monitoring.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-music-rehearsal", title: "IoT in music rehearsal spaces.", lead: "High-humidity practice rooms, instrument preservation and acoustic-comfort monitoring.", tags: ["module:preservation", "type:niche", "level:intermediate"] },
  { slug: "iot-bowling-alleys", title: "IoT in bowling alleys.", lead: "Indoor climate, cleaning cadence and equipment availability for a hidden-champion leisure industry.", tags: ["type:niche", "level:beginner"] },
  { slug: "iot-escape-rooms", title: "IoT in escape rooms.", lead: "Occupancy, room turnover and cleaning feedback for a fast-growing experiential-entertainment sector.", tags: ["type:niche", "level:beginner"] },
  { slug: "iot-aquariums", title: "IoT in aquariums.", lead: "Visitor climate control paired with live-exhibit life-support redundancy monitoring.", tags: ["type:niche", "level:advanced"] },
  { slug: "iot-zoos", title: "IoT at zoos.", lead: "Enclosure climate, visitor flow and cleaning metrics for modern zoological parks.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-wineries", title: "IoT at wineries.", lead: "Cellar humidity and temperature, fermentation monitoring and cold-chain shipping.", tags: ["module:preservation", "type:niche", "level:advanced"] },
  { slug: "iot-breweries", title: "IoT at breweries.", lead: "Craft brewery fermentation, cold storage and hop-store climate at a fraction of traditional BMS cost.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-bakeries", title: "IoT at bakeries.", lead: "Dough room humidity, oven exhaust monitoring and cold-storage compliance, all in one stack.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-fishery-ports", title: "IoT at fishery ports.", lead: "Cold-chain continuity from landing to auction with low-power, harsh-environment sensors.", tags: ["type:niche", "level:advanced"] },
  { slug: "iot-marinas", title: "IoT at marinas.", lead: "Berth occupancy, dockside water leak detection and guest-amenity monitoring.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-sports-stadiums", title: "IoT in sports stadiums.", lead: "Capacity management, indoor climate under the roof and hospitality-suite analytics.", tags: ["type:niche", "level:advanced"] },
  { slug: "iot-funeral-homes", title: "IoT at funeral homes.", lead: "Chapel-of-rest climate, cold storage and visitor-flow data for a sensitive industry.", tags: ["type:niche", "level:intermediate"] },
  { slug: "iot-driving-schools", title: "IoT at driving schools.", lead: "Classroom climate, simulator room occupancy and vehicle-bay usage on one dashboard.", tags: ["type:niche", "level:beginner"] },
  { slug: "iot-climbing-gyms", title: "IoT at climbing gyms.", lead: "Footfall analytics, equipment-wipe-down compliance and holds-wash scheduling.", tags: ["type:niche", "level:beginner"] },
  { slug: "iot-yoga-studios", title: "IoT at yoga studios.", lead: "Hot-yoga humidity control, class occupancy and restroom cleaning demand.", tags: ["type:niche", "level:beginner"] },
]);

// ─── M: Other business cases (10) ─────────────────────────────────────────
const M = makeCatalog("business-cases", "M", [
  { slug: "roi-insurance-premium-reduction", title: "ROI: insurance premium reduction.", lead: "Which insurers in the Nordics give measurable discounts for documented IoT leak detection?", tags: ["type:business-case", "level:intermediate"] },
  { slug: "roi-cleaning-fte-reduction", title: "ROI: cleaning FTE reduction.", lead: "Hard numbers on demand-based cleaning versus fixed-schedule cleaning across 50 buildings.", tags: ["module:usage-cleaning", "type:business-case", "level:intermediate"] },
  { slug: "roi-energy-retrofit-payback", title: "ROI: energy retrofit payback.", lead: "Typical payback windows for night setback, demand ventilation and lights-out automation.", tags: ["module:energy", "type:business-case", "level:intermediate"] },
  { slug: "roi-space-right-sizing", title: "ROI: space right-sizing.", lead: "The rent savings when real-occupancy data lets you close a floor or sublet space.", tags: ["module:space-management", "type:business-case", "level:advanced"] },
  { slug: "roi-preservation-insurance", title: "ROI: preservation insurance.", lead: "Lower premiums and excess on fine-art and heritage insurance with continuous climate data.", tags: ["module:preservation", "type:business-case", "level:advanced"] },
  { slug: "roi-water-damage-avoided", title: "ROI: water damage avoided.", lead: "Case-study numbers on the water-damage incidents a leak-detection network caught early.", tags: ["module:water-detection", "type:business-case", "level:intermediate"] },
  { slug: "roi-hybrid-work-downsizing", title: "ROI: hybrid-work downsizing.", lead: "The economics of giving up 30 % of an office on the back of real occupancy data.", tags: ["module:space-management", "industry:offices", "type:business-case", "level:advanced"] },
  { slug: "roi-dgnb-certification", title: "ROI: DGNB certification.", lead: "How continuous sensor data changes the effort and cost of DGNB certification.", tags: ["module:energy", "standard:dgnb", "type:business-case", "level:advanced"] },
  { slug: "roi-tenant-satisfaction", title: "ROI: tenant satisfaction.", lead: "Retention, lease renewal and NPS in multi-tenant offices with a live indoor-climate story.", tags: ["module:indoor-climate", "type:business-case", "level:intermediate"] },
  { slug: "roi-brand-value-museums", title: "ROI: brand value for museums.", lead: "How 'climate-proof' becomes a marketable signal to donors, lenders and visitors.", tags: ["module:preservation", "industry:museums-galleries", "type:business-case", "level:intermediate"] },
]);

// ─── N: Standards & compliance (15) ───────────────────────────────────────
const N = makeCatalog("standards", "N", [
  { slug: "br18-indoor-climate", title: "BR18 and indoor climate.", lead: "The Danish Building Regulations' requirements for air quality, temperature and humidity explained.", tags: ["standard:br18", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "en-16798-explained", title: "EN 16798 explained.", lead: "The European indoor-environment standard and how to document category II compliance with sensors.", tags: ["standard:en-16798", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "en-15757-preservation", title: "EN 15757 for preservation.", lead: "Target humidity bands for heritage interiors and how to implement them with alarms.", tags: ["standard:en-15757", "module:preservation", "type:standard", "level:advanced"] },
  { slug: "dgnb-hvb-score", title: "DGNB HVB score.", lead: "How continuous indoor-climate data feeds directly into DGNB criteria scoring.", tags: ["standard:dgnb", "type:standard", "level:advanced"] },
  { slug: "well-v2-indoor-air", title: "WELL v2 and indoor air.", lead: "The WELL Building Standard's air-quality features and their data requirements.", tags: ["standard:well-v2", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "leed-indoor-air-quality", title: "LEED indoor air quality.", lead: "IEQ credits under LEED O+M and how continuous sensors streamline the paperwork.", tags: ["standard:leed", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "iso-19650-bim-iot", title: "ISO 19650 BIM + IoT.", lead: "Linking live sensor data to the information model: good practice under ISO 19650.", tags: ["standard:iso-19650", "module:platform", "type:standard", "level:advanced"] },
  { slug: "en-15251-historical", title: "EN 15251 historical perspective.", lead: "What changed between EN 15251 and EN 16798, and and why your old reports still make sense.", tags: ["standard:en-15251", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "ashrae-62-1-guidance", title: "ASHRAE 62.1 guidance.", lead: "The American counterpart to EN 16798 for ventilation: useful in US-influenced specs.", tags: ["standard:ashrae", "module:indoor-climate", "type:standard", "level:advanced"] },
  { slug: "who-air-quality-guidelines", title: "WHO air quality guidelines.", lead: "How the 2021 guidelines drive new PM2.5 and NO₂ thresholds for institutional buildings.", tags: ["module:indoor-climate", "type:standard", "level:intermediate"] },
  { slug: "danish-work-environment-act", title: "The Danish Work Environment Act.", lead: "Statutory indoor-climate obligations in Danish workplaces and how to document compliance.", tags: ["standard:workplace-act", "type:standard", "level:advanced"] },
  { slug: "ce-marking-iot-devices", title: "CE marking of IoT devices.", lead: "What CE marking covers, the RED, EMC and low-voltage directives, and what it means for sensor selection.", tags: ["module:platform", "type:standard", "level:advanced"] },
  { slug: "radio-equipment-directive", title: "The Radio Equipment Directive.", lead: "How RED affects sensor certification, importing hardware and managing wireless spectrum.", tags: ["module:platform", "type:standard", "level:advanced"] },
  { slug: "gdpr-sensor-data", title: "GDPR and sensor data.", lead: "When occupancy data becomes personal data, and how we make sure it doesn't.", tags: ["standard:gdpr", "module:platform", "type:standard", "level:advanced"] },
  { slug: "eu-ecodesign-directive", title: "EU Ecodesign Directive.", lead: "Implications for HVAC control, sensor lifecycle and product passports under Ecodesign 2.0.", tags: ["module:energy", "type:standard", "level:advanced"] },
]);

// ─── O: Guides (20) ───────────────────────────────────────────────────────
const O = makeCatalog("guides", "O", [
  { slug: "getting-started-iot-buildings", title: "Getting started with IoT in buildings.", lead: "The fundamentals every facility manager needs before selecting a platform or sensor fleet.", tags: ["type:guide", "level:beginner"] },
  { slug: "choosing-sensor-placement", title: "Choosing sensor placement.", lead: "A practical walkthrough of where to put sensors in each room type for meaningful data.", tags: ["type:guide", "level:beginner"] },
  { slug: "interpreting-iot-dashboards", title: "Interpreting IoT dashboards.", lead: "Reading the graph shapes, spotting outliers and separating signal from sensor noise.", tags: ["type:guide", "level:intermediate"] },
  { slug: "scoping-iot-pilot-project", title: "Scoping an IoT pilot project.", lead: "Pick the right building, the right room types and the right success criteria from day one.", tags: ["type:guide", "level:intermediate"] },
  { slug: "rollout-plan-portfolio", title: "Portfolio rollout plan.", lead: "From pilot to 500 buildings without losing quality: a phased rollout plan.", tags: ["type:guide", "level:advanced"] },
  { slug: "building-iot-business-case", title: "Building the IoT business case.", lead: "Numbers that convince the CFO: and the reference data you need to back them up.", tags: ["type:guide", "level:intermediate"] },
  { slug: "stakeholder-buy-in", title: "Getting stakeholder buy-in.", lead: "Facility, IT, HR, security, sustainability: each group needs a different pitch.", tags: ["type:guide", "level:intermediate"] },
  { slug: "pilot-to-production", title: "Pilot to production.", lead: "The common pitfalls when going from a single-building pilot to organisation-wide deployment.", tags: ["type:guide", "level:advanced"] },
  { slug: "maintaining-iot-fleet", title: "Maintaining the IoT fleet.", lead: "Battery monitoring, calibration windows, firmware updates and retirement workflows.", tags: ["type:guide", "level:advanced"] },
  { slug: "data-literacy-facility-managers", title: "Data literacy for facility managers.", lead: "The minimum statistical intuition every FM needs to act on sensor output.", tags: ["type:guide", "level:intermediate"] },
  { slug: "cleaning-team-onboarding", title: "Cleaning team onboarding.", lead: "How to onboard a cleaning partner to demand-based workflows without disruption.", tags: ["module:usage-cleaning", "type:guide", "level:intermediate"] },
  { slug: "teacher-training-indoor-climate", title: "Teacher training on indoor climate.", lead: "A 20-minute training module that turns CO₂ dashboards into a classroom habit.", tags: ["module:indoor-climate", "industry:schools", "type:guide", "level:beginner"] },
  { slug: "diocese-onboarding-preservation", title: "Diocese onboarding for preservation.", lead: "The exact steps we take with a new diocese from first survey to continuous monitoring.", tags: ["module:preservation", "industry:churches", "type:guide", "level:intermediate"] },
  { slug: "hospital-ward-rollout", title: "Hospital ward rollout.", lead: "Clinical, infection control, IT and facilities: a coordinated rollout plan.", tags: ["industry:hospitals", "type:guide", "level:advanced"] },
  { slug: "museum-rollout-playbook", title: "Museum rollout playbook.", lead: "A tried-and-tested playbook for going live across galleries, storage and lending.", tags: ["module:preservation", "industry:museums-galleries", "type:guide", "level:intermediate"] },
  { slug: "municipality-rollout-playbook", title: "Municipality rollout playbook.", lead: "From schools to town halls to elderly care: a single-tenant-per-site rollout approach.", tags: ["industry:municipalities", "type:guide", "level:advanced"] },
  { slug: "school-rollout-checklist", title: "School rollout checklist.", lead: "A one-page checklist for each school: from site survey to teacher training.", tags: ["industry:schools", "type:guide", "level:beginner"] },
  { slug: "office-retrofit-rollout", title: "Office retrofit rollout.", lead: "Installing wireless sensors in an occupied open-plan office without disrupting work.", tags: ["industry:offices", "type:guide", "level:intermediate"] },
  { slug: "archive-retrofit-rollout", title: "Archive retrofit rollout.", lead: "Monitoring an entire archive estate with minimal disruption to conservation work.", tags: ["module:preservation", "industry:archives-libraries", "type:guide", "level:intermediate"] },
  { slug: "iot-procurement-guide", title: "IoT procurement guide.", lead: "Draft scope, evaluation criteria and reference questions for a public IoT tender.", tags: ["type:guide", "level:advanced"] },
]);

// ─── Q: Other comparisons (2) ─────────────────────────────────────────────
const Q = makeCatalog("comparisons", "Q", [
  { slug: "roomalyzer-vs-generic-iaq", title: "RoomAlyzer vs generic IAQ sensors.", lead: "Cost, accuracy, battery life, dashboards and support: a side-by-side comparison.", tags: ["type:comparison", "level:intermediate"] },
  { slug: "iot-sensors-vs-manual-checks", title: "IoT sensors vs manual checks.", lead: "The total-cost-of-ownership comparison that wins procurement debates.", tags: ["type:comparison", "level:intermediate"] },
]);

// ─── R: Trends / news (10) ────────────────────────────────────────────────
const R = makeCatalog("trends", "R", [
  { slug: "proptech-2026-trends", title: "PropTech 2026 trends.", lead: "The technologies, funding rounds and exits shaping smart-building PropTech this year.", tags: ["type:trend", "level:beginner"] },
  { slug: "hybrid-work-data-trends", title: "Hybrid work data trends.", lead: "Four years in: what does the attendance data actually tell us about the future of offices?", tags: ["industry:offices", "type:trend", "level:beginner"] },
  { slug: "esg-reporting-mandates", title: "ESG reporting mandates.", lead: "What the EU, UK and US are about to require, and how building data fits in.", tags: ["standard:csrd", "type:trend", "level:intermediate"] },
  { slug: "ai-in-facility-management", title: "AI in facility management.", lead: "A pragmatic look at where LLMs and forecasting models help, and and where they don't.", tags: ["type:trend", "level:intermediate"] },
  { slug: "digital-twins-smart-buildings", title: "Digital twins in smart buildings.", lead: "How the digital-twin conversation has matured, and the sensor layer that makes it real.", tags: ["type:trend", "level:advanced"] },
  { slug: "nb-iot-adoption-nordics", title: "NB-IoT adoption in the Nordics.", lead: "The state of carrier coverage, roaming and costs across Denmark, Norway, Sweden and Finland.", tags: ["type:trend", "level:intermediate"] },
  { slug: "nordic-museum-iot-adoption", title: "Nordic museum IoT adoption.", lead: "Trends in how Nordic heritage institutions are digitalising their preservation workflows.", tags: ["module:preservation", "industry:museums-galleries", "type:trend", "level:intermediate"] },
  { slug: "green-lease-iot-data", title: "Green leases and IoT data.", lead: "Lease clauses that require energy and occupancy data, and and how to supply it cleanly.", tags: ["module:energy", "type:trend", "level:advanced"] },
  { slug: "preservation-digitalisation", title: "Preservation digitalisation.", lead: "A decade of moving from paper hygrographs to continuous cloud data: what's next?", tags: ["module:preservation", "type:trend", "level:intermediate"] },
  { slug: "generative-ai-facility-mgmt", title: "Generative AI in FM.", lead: "Where copilots help FMs today, and where they still create more work than they save.", tags: ["type:trend", "level:intermediate"] },
]);

// ─── S: Buyer's journey (6) ───────────────────────────────────────────────
const S = makeCatalog("buyers-journey", "S", [
  { slug: "how-to-write-iot-rfp", title: "How to write an IoT RFP.", lead: "A template, key evaluation criteria and the questions that separate serious vendors from also-rans.", tags: ["type:guide", "level:advanced"] },
  { slug: "pilot-budget-planning", title: "Pilot budget planning.", lead: "A realistic cost breakdown for a 50-sensor pilot including platform, integration and analysis.", tags: ["type:business-case", "level:intermediate"] },
  { slug: "total-cost-of-ownership", title: "Total cost of ownership.", lead: "Five-year TCO for wireless sensor deployments: hardware, software, labour, batteries, retirement.", tags: ["type:business-case", "level:advanced"] },
  { slug: "procurement-approval-checklist", title: "Procurement approval checklist.", lead: "Everything procurement will ask (GDPR, security, references, SLA) in one document.", tags: ["type:guide", "level:intermediate"] },
  { slug: "vendor-lock-in-avoidance", title: "Vendor lock-in avoidance.", lead: "Data portability, open APIs and commercial terms that keep your options open.", tags: ["type:guide", "level:advanced"] },
  { slug: "deployment-timeline-expectations", title: "Deployment timeline expectations.", lead: "From signed contract to first live data: realistic calendar weeks per building type.", tags: ["type:guide", "level:beginner"] },
]);

// ─── T: Niche use cases (5) ───────────────────────────────────────────────
const T = makeCatalog("niche", "T", [
  { slug: "organ-hall-restoration", title: "Organ hall restoration.", lead: "Climate strategy for a full pipe-organ restoration project: before, during and after.", tags: ["module:preservation", "industry:churches", "type:niche", "level:advanced"] },
  { slug: "whisky-barrel-warehouse", title: "Whisky barrel warehouses.", lead: "Temperature and humidity monitoring in maturing warehouses that span decades of stock.", tags: ["module:preservation", "type:niche", "level:advanced"] },
  { slug: "greenhouse-orchid-culture", title: "Greenhouse orchid culture.", lead: "Zoned microclimates for rare orchid collections in public botanical gardens.", tags: ["type:niche", "level:advanced"] },
  { slug: "pharmacy-medicine-storage", title: "Pharmacy medicine storage.", lead: "Fridge and freezer storage compliance for community pharmacies with continuous logs.", tags: ["type:niche", "level:advanced"] },
  { slug: "vault-monitoring-banks", title: "Vault monitoring for banks.", lead: "Access logs, climate and water-detection as a compact evidence package for insurers.", tags: ["module:water-detection", "module:lockers-doors", "type:niche", "level:advanced"] },
]);

export const articles: CatalogArticle[] = [
  ...A, ...B, ...C, ...D, ...E, ...F, ...G, ...H, ...I, ...J,
  ...K, ...L, ...M, ...N, ...O, ...Q, ...R, ...S, ...T,
];

/** Helper map for quick lookup by slug. */
export const articlesBySlug: Map<string, CatalogArticle> = new Map(
  articles.map((a) => [a.slug, a]),
);

/** Counts per catalog letter, useful for overview pages and sanity checks. */
export const catalogTotals: Record<string, number> = articles.reduce(
  (acc, a) => {
    acc[a.catalog] = (acc[a.catalog] ?? 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);
