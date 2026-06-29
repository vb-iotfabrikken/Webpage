import type { Lang } from "../lang";
import { defaultLang } from "../lang";
import { platformContentI18n } from "./platform.i18n";
import type { PlatformPageContent } from "./types";

export const platformPageContent: PlatformPageContent[] = [
 {
 slug: "how-it-works",
 heroTitle: "How RoomAlyzer works.",
 heroTitleAccent: "A complete building monitoring solution that works from day one.",
 heroLead:
 "RoomAlyzer is a wireless building monitoring solution for indoor climate, space management, and water detection. It is built to be simple: when you order one of our solutions — RoomAlyzer Air, RoomAlyzer Space, or RoomAlyzer Water — you get everything you need in one package, ready to go. Here is how it works, from placing your order to seeing your data on screen.",
 sections: [
 {
 heading: "Everything in one complete solution",
 paragraphs: [
 "Whatever you choose, you always get a complete, ready-to-use solution with everything you need: wireless sensors with built-in connectivity that work straight out of the box, and the RoomAlyzer software, where your data turns into clear analyses, predictions, and concrete recommendations. There is nothing to assemble and nothing to configure — you place the sensors, and the data starts arriving.",
 ],
 },
 {
 heading: "One dashboard for all your data, on web and mobile",
 paragraphs: [
 "You get both a mobile app and an extended web app, so you can gather all your data in one dashboard and keep a clear overview at all times. It makes no difference how you put your sensor package together, or how many rooms, buildings, and locations you use RoomAlyzer across — it all comes together in a single, simple overview.",
 ],
 },
 {
 heading: "We get you started — and stay with you",
 paragraphs: [
 "We always hold an online kick-off meeting with you, so you and your colleagues get a proper walk-through of how the app works and a clear sense of what it can do. After that, online support is always available on everything — wherever you happen to be.",
 ],
 },
 {
 heading: "Built in Denmark, with the people who use it",
 paragraphs: [
 "We develop our software ourselves, here in Denmark, and we do it together with the many users we work with: facility managers, space planners, operations staff, engineers, energy advisers, and conservators in municipalities, businesses, museums, churches, and housing associations. They have told us how it needs to work so it makes sense for their job — and that expertise is built into software made to be genuinely easy to use.",
 ],
 },
 {
 heading: "Simple facility management software, even if IT is not your field",
 paragraphs: [
 "Most people have wrestled with an IT system that takes weeks to learn. RoomAlyzer is different. Where large, complex systems demand long training, ours is known for being simple. It is built so you can find exactly the data you need, quickly and easily, in a busy working day. The system is intuitive and helps you get your data in whatever form makes most sense in the moment — raw data, reports, analyses, graphs, or an API forward. You can pull the data yourself, have it delivered to your inbox, or ask the system to send it on to others without lifting a finger. You do not need to know much about IT systems, and we build with a clear eye for the fact that people working in operations, facility management, and preservation are busy.",
 ],
 },
 {
 heading: "Secure by design: no Wi-Fi, EU-based hosting",
 paragraphs: [
 "Your data is secure by design. RoomAlyzer never touches your Wi-Fi, so your data travels completely separately from anything sensitive or confidential on your own network, and everything is stored in the cloud with EU-based hosting.",
 ],
 },
 ],
 },
 {
 slug: "dashboards",
 heroTitle: "Building dashboards.",
 heroTitleAccent: "Your data, your way.",
 heroLead:
 "A good dashboard turns sensor data into something you can act on at a glance. RoomAlyzer gives everyone in your organisation the information they need, in the form they need it — from a personal overview on a laptop to a live display on the wall. And you set it up yourself, without involving IT.",
 sections: [
 {
 heading: "Build it yourself in minutes",
 paragraphs: [
 "There is no fixed layout. You choose what to show and how to show it, using five simple widget types — a big KPI number, a live reading, a graph, a top list, or a heatmap. Adding one is a guided four-step process with no training required, and the layout is drag-and-drop, saving automatically as you go.",
 ],
 },
 {
 heading: "What you see, by solution",
 paragraphs: [
 "Each solution has its own ready-made operational view, so you always know where you are:",
 ],
 list: [
 "RoomAlyzer Air — indoor climate: live temperature, humidity, and CO2, with sensor activity indicators that pulse as readings come in. A parallel view for preservation adds the conservation-specific measures — Preservation Index (PI/TWPI), mould risk, EN 15757 fluctuations, and Bizot Green — for museums, archives, and churches.",
 "RoomAlyzer Space — space management: see how your desks, rooms, and zones are really used — live occupancy and heatmaps that reveal patterns over time. It is the data that tells you where there is spare capacity, which meeting rooms sit empty, and where a free desk is right now.",
 "RoomAlyzer Water — water detection: an operational cockpit showing active alarms, silent sensors, and the health of your whole sensor fleet in real time, refreshing automatically every few seconds — so a leak is never missed.",
 "There is also an energy view, with waste shown in DKK and CO2 and efficiency broken down per location.",
 ],
 },
 {
 heading: "Dashboards for you, and dashboards for everyone",
 paragraphs: [
 "There are two ways to use a dashboard, and you decide which is which.",
 "For you and your team: build as many dashboards as you like for different roles — a management overview, technical monitoring, a department view — and switch between them in seconds. Data is always scoped to your organisation and respects each user's access, so everyone sees exactly what they should, and nothing they should not.",
 "For everyone in the building: any dashboard or live floor plan can be shared on a wall screen via a password-protected link — no login, just a URL and a password. Show colleagues and visitors how busy the canteen is, where there is a free desk as they arrive past reception, or which meeting rooms are free, so they can sort themselves out at a glance.",
 "And crucially, you choose what goes on a public screen. Maybe space data is something you are glad to share, while indoor climate data is something you would rather keep to the operations team. You can run several screens from the same building, each with its own password — so the lobby and the operations centre show different views.",
 ],
 },
 ],
 },
 {
 slug: "reports",
 heroTitle: "Reports.",
 heroTitleAccent: "From raw data to clear, useful insight.",
 heroLead:
 "RoomAlyzer turns your continuous sensor data into clear, structured reports — delivered automatically to the right people, in the right format, at the right time. Whether you need a recurring team briefing, compliance documentation, or a dataset for your own analysis, the platform handles it without manual work. And if you need to send reports with concrete recommendations to many users across many locations, we can help with that too — a special report type that combines our indoor climate expertise with AI to tell each site, in plain language, what to do to save energy and keep the climate right.",
 sections: [
 {
 heading: "Scheduled reports, straight to the inbox",
 paragraphs: [
 "Keep your team informed without anyone having to log in. Indoor climate reports run automatically on a daily, weekly, or monthly schedule and arrive directly by email. Each report can cover a single sensor or a whole location, with as many recipients as you like, and you can always send a test first to check the content and format.",
 "For a richer, more visual briefing, RoomAlyzer can also send scheduled graph reports — a PDF snapshot of up to five sensors, with your chosen parameters and time window (from the last 24 hours to the last year). You can overlay outdoor weather and add an AI-generated analysis of the trends. Frequency and recipients can be changed at any time, without rebuilding the report.",
 ],
 },
 {
 heading: "Compliance documentation, ready to submit",
 paragraphs: [
 "Many facility managers have been asked by management to document the indoor climate, often as a result of EU directives. RoomAlyzer produces that documentation for you — directly from your live sensor data, with no manual data collection and no spreadsheets.",
 "For DGNB certification (SOC1.1 / SOC1.2, EN 16798-1), a simple wizard walks you through it: choose the period and working hours, select the sensors, pick the right thresholds (DGNB 2020 or 2023, building and ventilation type), and generate a professional PDF with charts, statistics, and floor-plan overlays. For buildings under the Energy Performance of Buildings Directive (EPBD 2024, EN 16798-1), RoomAlyzer creates a full compliance report on demand — with a gap analysis, compliance percentages per parameter, an energy overview, and rule-based recommendations for improvement. You include exactly the sections that are relevant, and a download history keeps your previous reports available. If you are unsure which standard applies to you, we are happy to help.",
 ],
 },
 {
 heading: "Export your data for your own analysis",
 paragraphs: [
 "When you want to work with the raw numbers in your own tools, all sensor data is available as a CSV download. Choose the sensors, parameters, and date range, and get a complete dataset — temperature, humidity, CO2, VOC, sound, light, presence, battery level, signal strength, dew point, absolute humidity, and outdoor weather.",
 ],
 },
 ],
 },
 {
 slug: "notifications",
 heroTitle: "Notifications.",
 heroTitleAccent: "Know when something is wrong.",
 heroLead:
 "The whole point of monitoring is to catch a problem before it becomes a disaster. RoomAlyzer sends you an immediate email or SMS when something is wrong — wherever you are, and wherever the building is. So if a dehumidifier fails in a store room on the other side of the country and the humidity starts climbing, you find out in time to drive out and deal with it, instead of discovering the damage weeks later.",
 sections: [
 {
 heading: "RoomAlyzer Air — indoor climate and preservation alerts",
 paragraphs: [
 "Get an alert when temperature, humidity, CO2, or mould risk moves outside the range you have set. For a busy office or school, that might mean acting on poor air quality before the complaints arrive. For a museum, church, or archive, it can mean protecting irreplaceable objects — catching a failing dehumidifier or a humidity swing before it harms timber, paintings, or paper. You decide the limits, and RoomAlyzer watches them around the clock.",
 ],
 },
 {
 heading: "RoomAlyzer Water — leak alerts straight to the right person",
 paragraphs: [
 "When water is detected, RoomAlyzer sends a message straight to email or SMS — not an alarm beeping to an empty basement, but a notification that reaches a person who can act. You can add as many recipients as you need, so both facilities and security are informed at once, and a leak in a shaft, an electrical cabinet, or a housing association is caught while it is still small.",
 ],
 },
 {
 heading: "Never caught off guard: battery and sensor health",
 paragraphs: [
 "You should never be left blind because a sensor quietly stopped working. RoomAlyzer warns you in good time before a battery runs flat — not after — so you can plan a replacement calmly rather than discover a gap in your data after the fact.",
 "You can also subscribe to a sensor health digest — daily, weekly, or monthly — that lists only the sensors with a problem, such as those that have gone silent or are low on battery. Nothing is sent when everything is fine, so when an email does arrive, you know it means something needs attention.",
 ],
 },
 {
 heading: "Tuned to avoid false alarms",
 paragraphs: [
 "Alerts are set per sensor and per parameter, and you can adjust how sensitive they are — how many readings in a row need to be out of range before an alert is sent — so a brief, harmless spike does not set off a false alarm. Temperature, humidity, CO2, VOC, sound, light, presence, and mould risk are all supported, and every alert can be tested on its own to confirm it reaches you before it goes live.",
 ],
 },
 ],
 },
 {
 slug: "security",
 heroTitle: "Security.",
 heroTitleAccent: "No Wi-Fi, EU-based hosting, full encryption.",
 heroLead:
 "Data security should not be something you have to worry about. RoomAlyzer is a multi-tenant platform used by customers across many countries and industries, and it is built so that security is part of the design from the start — no one can reach data that is not theirs, and your organisation always knows exactly who has access to what. Here is how it works, and why it makes your own risk assessment simpler.",
 sections: [
 {
 heading: "25 years of building secure solutions online",
 paragraphs: [
 "Security is not new to us. IoT Fabrikken's solutions are built by people with more than 25 years of experience in secure online systems — from online payment solutions to data logging that safeguards food safety. That foundation gives us deep, practical knowledge of how data is transported and stored securely, and we keep our solutions up to date with the latest security standards. It is also why we hold ourselves to strict rules so that one thing is always true: you own your data, at all times, and no one else.",
 ],
 },
 {
 heading: "We never touch your Wi-Fi",
 paragraphs: [
 "We have two types of sensors: some have a built-in NB-IoT SIM card, and others send their data to a Cloud Connector, which passes it on to your app via its own SIM card. Either way, the data travels over a dedicated cellular network — never over your Wi-Fi. That means your measurements move completely separately from anything sensitive or confidential on your own network, and you avoid giving an outside system any access to your IT environment.",
 ],
 },
 {
 heading: "End-to-end encryption and EU-based hosting",
 paragraphs: [
 "All data is protected with full end-to-end encryption (AES-128), and everything is stored in the cloud with 100% EU-based hosting. You keep full ownership of your data, and you always know where it is kept. Beyond this, we apply standard production hardening — encrypted traffic (HTTPS/HSTS), protection against brute-force login attempts, and no credentials ever exposed in the browser.",
 ],
 },
 {
 heading: "Login you can trust, with optional two-factor",
 paragraphs: [
 "Every user signs in through Firebase Authentication, Google's enterprise-grade identity platform. RoomAlyzer never stores your passwords itself — sign-in, password resets, and account recovery are all handled by Firebase. For organisations that want an extra layer of assurance, two-factor authentication (the same six-digit code standard used by banks) is available, and you can make it mandatory for everyone in your organisation from the security settings.",
 ],
 },
 {
 heading: "The right access for each role",
 paragraphs: [
 "Not everyone needs the same access, so RoomAlyzer uses clear, role-based permissions: viewers can see data but not change it, managers have broad operational access, and administrators can manage users and security settings — within their own organisation only. Importantly, every permission is checked on the server with each request. Hiding a button in the interface is never enough on its own; the server independently confirms that you are allowed to do something before any data is shown or changed.",
 ],
 },
 {
 heading: "Access down to the single location",
 paragraphs: [
 "Within your organisation, access can be narrowed further. A user can be limited to specific buildings or rooms, so they only see the sensors, dashboards, and alerts they are meant to. It makes it simple to give a facilities team access to their own wing without exposing the rest of the building, or to give an external contractor a read-only view of a single floor — enforced both in the interface and on the server.",
 ],
 },
 {
 heading: "Your data stays yours: strict tenant isolation",
 paragraphs: [
 "All customers share the same platform, but their data is completely separate. Every query is tied to your own organisation, resolved from verified server-side credentials — never from anything the browser could change. The same applies to integrations: an API key is permanently bound to one organisation and cannot reach another's data, even if a different ID is passed in the request. (More on API keys on our API page.)",
 ],
 },
 {
 heading: "A full audit trail",
 paragraphs: [
 "Every change to access is recorded. When a user is added or removed, a role is changed, or an account is created or deleted, an entry is written that cannot be altered — with who did it, to whom, what changed, and when. Administrators can review the full access history for any user, which makes internal compliance straightforward and answers the question everyone eventually asks: who had access to what, and when did that change?",
 ],
 },
 {
 heading: "Simpler GDPR and NIS2 assessment",
 paragraphs: [
 "Because RoomAlyzer records only technical measurement data — with no personally identifiable information — and combines that with no Wi-Fi dependency, EU-based hosting, and full encryption, it makes your own GDPR and NIS2 assessment considerably simpler. You get robust data protection and a clear, defensible setup, without the usual complexity.",
 ],
 },
 ],
 },
 {
 slug: "api",
 heroTitle: "API.",
 heroTitleAccent: "Connect your systems to RoomAlyzer.",
 heroLead:
 "Your data is yours to use. RoomAlyzer comes with a well-documented, open API, so your IoT sensor data can flow straight into your own workflows, dashboards, and AI tools. Most customers simply use the RoomAlyzer software as it is — but when you want to connect it to your own systems, there are two straightforward ways to do it: a REST API for developers and systems, and an MCP server for AI agents.",
 sections: [
 {
 heading: "REST API — real-time IoT data at your fingertips",
 paragraphs: [
 "The RoomAlyzer REST API gives you programmatic access to live and historical sensor data across your entire sensor network. Whether you are building a custom dashboard, feeding data into a BI tool, or automating decisions based on climate conditions, the API has you covered.",
 ],
 listIntro: "What you can access:",
 list: [
 "Indoor climate — live readings and historical data for temperature, humidity, CO2, and more. Retrieve per-sensor threshold limits and deviation summaries to see how often conditions fall outside acceptable ranges.",
 "Preservation & conservation — building-level data for Preservation Index (PI/TWPI), mould risk (VTT), EN 15757 fluctuations, and conservation heating — ideal for museums, archives, and cultural heritage institutions.",
 "Water detection — active alarms, alarm history, and sensor fleet status for your water leak monitoring network.",
 "Space management — monthly occupancy heatmaps to analyse how your spaces are actually being used.",
 "Push buttons — queue status, handled history, and response statistics for service and alarm buttons.",
 ],
 },
 {
 paragraphs: [
 "Authentication is simple: each tenant receives a dedicated API key that scopes access to their own data only — there is no cross-tenant access. All public endpoints are documented in a clean, interactive API reference at v2.roomalyzer.com/api/docs/public, with no login required.",
 ],
 },
 {
 heading: "MCP server — let AI agents work with your data",
 paragraphs: [
 "RoomAlyzer is also available as an MCP (Model Context Protocol) server — the emerging standard for connecting AI assistants and agents to external data sources. With an MCP key, AI agents can query your indoor climate data directly using natural language. Ask questions like \"Which rooms have had the highest CO2 levels this week?\" or \"Are any sensors showing conditions outside the summer thresholds?\" and get structured, tenant-scoped answers.",
 "The MCP server is available at mcp.roomalyzer.com/sse and authenticates with a Bearer key. Keys are managed from the RoomAlyzer admin panel and tied to your tenant, so your data never mixes with another customer's. This makes RoomAlyzer a natural data source for AI-powered facility reports, automated compliance checks, and conversational building-management assistants.",
 ],
 },
 {
 heading: "Getting started",
 paragraphs: [
 "Both integration types are managed from the Administration section inside RoomAlyzer:",
 ],
 list: [
 "API keys — create and manage REST API keys under Administration → API Keys. Scopes control exactly which data the key can read.",
 "MCP keys — create and manage AI-agent keys under Administration → MCP Keys. The key is shown once, on creation.",
 ],
 },
 {
 paragraphs: [
 "Full API documentation, including request/response examples and schema definitions, is always available at v2.roomalyzer.com/api/docs/public. For questions about API access, custom integrations, or enterprise data pipelines, contact us at info@iot-fabrikken.com.",
 ],
 },
 ],
 },
 {
 slug: "architecture",
 heroTitle: "Architecture.",
 heroTitleAccent: "Scalable, secure, European.",
 heroLead:
 "A multi-tenant SaaS built on EU infrastructure with a clear separation between ingestion, storage and presentation.",
 sections: [],
 },
 {
 slug: "maps-floorplans",
 heroTitle: "Maps and floor plans.",
 heroTitleAccent: "See your building at a glance.",
 heroLead:
 "Upload floor plans and place sensors on them. Live values and alarms colour the rooms as they change.",
 sections: [],
 },
 {
 slug: "mobile-tv",
 heroTitle: "Mobile and TV views.",
 heroTitleAccent: "The right data, on the right screen.",
 heroLead:
 "A responsive mobile app for the facility team and fullscreen TV dashboards for lobbies and control rooms.",
 sections: [],
 },
 {
 slug: "ai-analytics",
 heroTitle: "AI and analytics.",
 heroTitleAccent: "Patterns you would otherwise miss.",
 heroLead:
 "Anomaly detection, predictive alarms and natural-language queries across your full sensor history.",
 sections: [],
 },
];

export function getPlatformContent(
 slug: string,
 lang: Lang = defaultLang,
): PlatformPageContent | undefined {
 const base = platformPageContent.find((entry) => entry.slug === slug);
 if (!base) return undefined;
 const overlay = platformContentI18n[lang]?.[slug];
 return overlay ? { ...base, ...overlay } : base;
}
