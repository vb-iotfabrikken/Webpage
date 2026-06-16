/**
 * Real Q/A content per FAQ topic. Consumed by
 * `src/pages/en/faq/[slug].astro` and rendered with an FAQPage JSON-LD block
 * so LLMs and search engines can surface the answers directly.
 *
 * Keep answers short (two to four sentences), specific, and free of marketing
 * fog. If an answer genuinely requires more than that, link to a library
 * article and summarise here.
 */

export type Qa = { q: string; a: string };

export const faqContent: Record<string, Qa[]> = {
  platform: [
    { q: "What is RoomAlyzer?", a: "RoomAlyzer is IoT Fabrikken's cloud platform for wireless building sensors. It ingests data from gateways, stores it in a time-series database, serves dashboards and alarms, and exposes an API and MQTT feed so the data can flow onwards to BMS, FM and BI tools." },
    { q: "Where is the platform hosted?", a: "On European cloud infrastructure with data residency inside the EU by default. We can offer region pinning and single-tenant deployments for customers with specific compliance requirements." },
    { q: "How often does the platform get updated?", a: "We ship small updates weekly and larger features monthly, with a published changelog. Backwards-incompatible API changes are versioned and announced in advance." },
    { q: "What's the historical data retention?", a: "Raw readings are retained for 24 months by default, with hourly and daily aggregates retained for the lifetime of the account. Enterprise plans can extend raw retention to five or ten years." },
    { q: "Can we white-label the dashboards?", a: "Yes. Enterprise customers can apply their own colours, logo and subdomain to dashboards shown to tenants or students." },
    { q: "What's the platform's uptime?", a: "The production environment targets 99.9% monthly availability. Scheduled maintenance windows are announced at least seven days in advance and performed out of business hours." },
    { q: "Can I export everything if I leave?", a: "Yes. Every customer can export all historical sensor readings as CSV or Parquet, plus metadata (rooms, floor plans, thresholds) as JSON. There's no export fee and no lock-in." },
  ],

  "indoor-climate": [
    { q: "What parameters does RoomAlyzer measure for indoor climate?", a: "CO₂ (400–5000 ppm), temperature, relative humidity and, depending on the sensor, VOC (TVOC), particulate matter (PM2.5) and illuminance. All parameters are sampled continuously and reported at intervals you configure." },
    { q: "How accurate are the CO₂ measurements?", a: "Typically ±30 ppm or ±3% of reading — whichever is larger — across the 400–2000 ppm range that matters for classrooms and offices. Sensors self-calibrate against the outdoor background during regular ventilation cycles." },
    { q: "What CO₂ threshold should we use?", a: "Danish BR18 requires CO₂ to stay below 1000 ppm during occupied hours. EN 16798 Category II defines 800–1200 ppm as acceptable, and most of our school customers set alarms at 1200 ppm." },
    { q: "Do we need one sensor per room?", a: "Yes, one per room is the rule of thumb. Very large rooms such as auditoriums and sports halls may need two or three sensors for accurate zone coverage." },
    { q: "How do we document compliance for a workplace inspection?", a: "The platform generates PDF reports with historical readings, exceedances, actions taken and resulting recovery curves — formatted to attach directly to a Danish APV or equivalent workplace assessment." },
    { q: "Can the CO₂ data drive ventilation automatically?", a: "Yes. The platform exposes live readings via MQTT and REST and can push setpoint hints into BMS systems such as Niagara, Desigo and EcoStruxure. Read more in the MQTT integration guide." },
  ],

  preservation: [
    { q: "Which standard do you follow for preservation climate?", a: "EN 15757 is the European standard we default to — it defines acceptable daily and seasonal variation bands relative to each object's historical climate rather than a single absolute setpoint. DGNB, WELL and local diocese guidelines layer on top." },
    { q: "How dense should the sensor coverage be?", a: "One sensor per micro-climate zone. A single nave might need three sensors (chancel, nave, under the organ gallery) because each responds differently to heating and visitor influx." },
    { q: "Can you measure inside display cases?", a: "Yes. Our MINI-series sensors fit inside showcases and report wirelessly through the case glass. They're battery-powered so you don't need to breach the case to run cabling." },
    { q: "How long do the batteries last?", a: "Three to five years for typical preservation settings (15-minute reporting interval, stable temperature). The platform warns you 60 days before the battery needs replacing." },
    { q: "Do you handle travel loggers for loans?", a: "Yes. Small pocket loggers accompany objects on loan and dock back into the platform at the destination, producing a single timeline from storage through transit to final display." },
    { q: "How do we present the data to our diocese or board?", a: "Use the preservation report template: a monthly PDF with bands, exceedances, actions and annotations. Most customers send it directly to their diocese conservator or board chair." },
  ],

  "space-management": [
    { q: "How do occupancy sensors work without identifying people?", a: "We use PIR (passive infrared), mmWave and thermopile sensors that detect motion and heat signatures but can't see faces or identify individuals. No cameras, no badges, no personal data." },
    { q: "Is occupancy data personal data under GDPR?", a: "Aggregated room occupancy isn't personal data. Desk-level occupancy combined with hot-desk bookings could be, so we provide role-based access controls and retention settings specifically for that case." },
    { q: "How accurate is the occupancy detection?", a: "PIR sensors are >98% accurate for presence detection in rooms up to 40 m². mmWave sensors handle bigger spaces and can count people, typically within ±1 at any given moment." },
    { q: "Can we automatically release no-show meetings?", a: "Yes. Combine the PIR signal with a calendar integration (Google, Microsoft 365, Pronestor) and the platform will release the room after a grace period — the default is 10 minutes." },
    { q: "Can we monitor a home office?", a: "We strongly advise against it. Employer monitoring of home workspaces is legally fraught and culturally corrosive. Focus on corporate premises and let employees self-report home setups if they wish." },
    { q: "How long does the data stay around?", a: "Room-level occupancy is retained for 24 months by default. Desk-level data defaults to 6 months and can be configured per room or per desk to match your works-council agreement." },
  ],

  "water-detection": [
    { q: "How fast is the alarm?", a: "From water hitting the sensor to an alarm leaving the platform takes under 30 seconds for LoRaWAN-connected sensors and under 2 minutes for NB-IoT. SMS, email, webhook and ticketing integrations then fan out the alarm to on-call staff." },
    { q: "What's the false-positive rate?", a: "Well below 1 per 1000 sensor-years in production deployments. Condensation, cleaning and spills can all trigger sensors — we tune thresholds and alarm debouncing to your specific risk profile." },
    { q: "How long does the battery last in a water sensor?", a: "Five to seven years in most installations. Sensors are sealed against humidity and rated for placement in basements, plant rooms and under-sink cabinets." },
    { q: "Where should we place water sensors?", a: "Under sinks, next to water heaters, near washing machines and dishwashers, at the low points of plant rooms, under raised floors in data centres and at the ends of runs in plumbed ceilings. See the water-detection module guide for a full matrix." },
    { q: "Does this lower our insurance premiums?", a: "In many Nordic markets yes, particularly for commercial property with a history of escape-of-water claims. We help you package the data for your broker." },
    { q: "Can we integrate the alarm into our existing SCADA or NOC?", a: "Yes. The platform publishes to MQTT in real time so alarms can flow directly into Niagara, Desigo, Intel NOCs or bespoke Grafana/Prometheus stacks." },
  ],

  "push-buttons": [
    { q: "How do the buttons talk to the platform?", a: "LoRaWAN for long-range, low-power deployments and NFC for tap-to-report stickers that piggyback on guest phones. Both end up in the same event stream on the platform." },
    { q: "How many events per day can a button handle?", a: "A LoRaWAN button can handle 100+ presses per day for years on a single battery. For higher-volume use cases we recommend mains-powered units or NFC stickers with a back-end service." },
    { q: "Can we label buttons with specific meanings?", a: "Yes. Each button gets a role (cleaning request, restock, maintenance, panic, feedback) and a physical label. The platform routes events according to the role and the room." },
    { q: "Can the buttons integrate with our ticketing system?", a: "Yes. Presses become tickets in ServiceNow, Jira, Freshdesk and similar via our outbound webhooks, with automatic categorisation and location context." },
    { q: "What's the range?", a: "2–5 km outdoors and 200–500 m indoors for LoRaWAN, depending on the number of gateways and building materials. Most sites need one gateway per 3–5 floors of a standard office." },
  ],

  sensors: [
    { q: "Which sensors do you supply?", a: "Our portfolio is organised in four lines: RoomAlyzer Air (climate sensors such as CO2, Full+, Humidity, Mini+, Mini+ PIR, Outdoor and Temperature), RoomAlyzer Space (Desk, Motion, Open/Close and Touch), RoomAlyzer Water (Water detector and Water rope) and Miscellaneous (Cloud connector and Range Extender and Bracket). Download product sheets from the sensors section." },
    { q: "Do the sensors need calibration?", a: "CO₂ sensors self-calibrate against outdoor levels; humidity sensors drift about 1% RH per year; temperature sensors are stable for their lifetime. We recommend a factory recalibration every five years for preservation-critical deployments." },
    { q: "What's the typical battery life?", a: "Three to seven years depending on sensor type, reporting interval and ambient temperature. The platform shows a battery gauge for every sensor and predicts replacement dates." },
    { q: "Where can I put the sensors?", a: "Anywhere with LoRaWAN or NB-IoT coverage. Indoors, place 1.1–1.7 m above the floor, away from direct sunlight, outlets and windows. The sensor placement guide covers the details for each room type." },
    { q: "Are the sensors CE-marked?", a: "Yes. All our sensors carry CE marking and comply with the Radio Equipment Directive (RED), the Low Voltage Directive (LVD) and the EMC Directive." },
  ],

  integrations: [
    { q: "What formats do you support for outbound data?", a: "REST API (JSON), MQTT (JSON), webhooks (signed JSON), CSV and Parquet. Dashboards can also embed via signed iframe URLs." },
    { q: "How do I authenticate against the API?", a: "OAuth 2.0 with the client-credentials flow for server-to-server integrations and Authorization Code + PKCE for user-facing integrations. API keys are also supported for simple scenarios." },
    { q: "What's the API rate limit?", a: "1000 requests per minute per API key on the default plan, with enterprise plans negotiable. Burst up to 100 requests per second for brief periods is fine." },
    { q: "Do you support SSO?", a: "Yes. SAML 2.0 and OIDC with Azure AD, Okta, Google Workspace and any OIDC-compliant identity provider. Enterprise plans also include SCIM provisioning." },
    { q: "Can we build our own integration?", a: "Yes. The full API is documented and free to use for any customer. Our integrations team can help scope and review custom integrations." },
  ],

  pricing: [
    { q: "What does RoomAlyzer cost?", a: "A combination of a per-sensor annual subscription and a one-off hardware cost. Typical per-sensor subscriptions land between €40 and €80/year, with sharp discounts at portfolio scale." },
    { q: "What's included in the subscription?", a: "Platform access, dashboards, mobile app, alarms, API, integrations, support and software updates. Hardware replacement under warranty is included; replacement batteries are sold at cost." },
    { q: "Are there setup fees?", a: "Enterprise deployments include a fixed-price onboarding: site survey, floor-plan import, account configuration and staff training. Smaller deployments (under 50 sensors) typically don't need formal onboarding." },
    { q: "What are the contract terms?", a: "Default contracts run annually with 60 days' notice. Three- and five-year contracts come with price guarantees and deeper discounts." },
    { q: "Can we invoice as a public-sector customer?", a: "Yes. We serve Danish, Swedish, Norwegian and German public-sector customers directly and can invoice through the standard e-invoicing channels (EHF, PEPPOL, OIOUBL)." },
    { q: "Do you offer pilot pricing?", a: "Yes. A 30- or 90-day pilot with up to 20 sensors can be set up under a short-form agreement, billed monthly, with full refund if you decide not to proceed." },
  ],

  "security-privacy": [
    { q: "Where does the data live?", a: "European cloud infrastructure with data residency inside the EU by default. The operational database and all backups stay in the region you select at onboarding." },
    { q: "Are you GDPR-compliant?", a: "Yes. We act as data processor for customer data and provide a standard DPA with subprocessor list, audit rights and breach notification commitments. Data subject requests flow through the customer." },
    { q: "Do you hold security certifications?", a: "Yes, we are ISO 27001 certified and undergo annual penetration testing by an independent firm. Reports are available under NDA." },
    { q: "How is data encrypted?", a: "TLS 1.3 in transit, AES-256 at rest. Sensor-to-gateway traffic is encrypted with LoRaWAN session keys (AES-128); gateway-to-cloud traffic uses TLS 1.3." },
    { q: "Can we self-host?", a: "Yes, enterprise customers can run RoomAlyzer on their own infrastructure (Kubernetes or managed EKS/AKS). We maintain the Helm charts and provide the same support coverage as the hosted platform." },
  ],

  installation: [
    { q: "What's in the box?", a: "Pre-configured sensors paired with your account, gateways (if ordered), mounting accessories and a printed quick-start guide. Everything is labelled and scannable from the mobile app." },
    { q: "How long does installation take?", a: "30 seconds per sensor (peel, stick, press) plus gateway placement (5 minutes each). A 100-sensor, 3-gateway school deployment typically takes one technician one afternoon." },
    { q: "Who installs the sensors?", a: "Your caretaker, your FM partner or us — whichever suits you. We provide video guides, and the mobile app walks the installer through QR scan, placement photo and signal-strength verification." },
    { q: "Do we need to run cables?", a: "No. Sensors are wireless and battery-powered. Gateways need mains power and either Ethernet or a SIM — mains is usually the only wiring required." },
    { q: "What if we move a sensor later?", a: "Rescan its QR code in the mobile app and assign it to the new room. History stays with the old room and new readings accumulate in the new one." },
  ],

  support: [
    { q: "What are the support hours?", a: "09:00–17:00 CET on working days via email, chat and phone. Critical alarms have 24/7 response on enterprise plans — the on-call engineer is paged for platform-wide incidents." },
    { q: "What's the SLA?", a: "Response within 4 business hours for standard incidents and within 15 minutes for critical production incidents on enterprise plans. Full resolution SLAs vary by severity — see the SLA page for the details." },
    { q: "Where's the documentation?", a: "At support.iot-fabrikken.com, with getting-started guides, integration walkthroughs and a searchable FAQ. The platform also has inline help for every screen." },
    { q: "How do I report a bug?", a: "Use the in-app feedback form or email support@iot-fabrikken.com. Include the screenshot, the URL and a rough timestamp — we'll take it from there." },
    { q: "Do you offer training?", a: "Yes. Every new customer gets a 90-minute kick-off session and we run quarterly webinars for admins. Enterprise customers get dedicated onboarding and yearly refresher training." },
  ],
};
