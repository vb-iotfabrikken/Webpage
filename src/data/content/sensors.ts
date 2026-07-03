import type { SensorPageContent } from "./types";
import { defaultLang, type Lang } from "../lang";
import { sensorContentI18n } from "./sensors.i18n";

const cloudConnectorNote =
 "Works with the RoomAlyzer Cloud Connector for secure, Wi-Fi-free data transmission.";

export const sensorPageContent: SensorPageContent[] = [
 {
 slug: "full-plus",
 heroTitle: "Full+ sensor",
 heroTitleAccent: "Complete indoor climate monitoring — entirely wireless.",
 heroLead:
 "The Full+ sensor is your all-in-one solution for precise monitoring of temperature, humidity, CO2, and TVOC. Designed for effortless professional use, it delivers the vital data you need to optimise wellbeing, protect your buildings, and reduce heating costs.",
 useCases: "Schools & classrooms · Daycare centres · Offices · DGNB-certified buildings",
 benefits: [
 {
 title: "Zero IT hassle",
 body: "Operates via a secure, independent NB-IoT network with no need for Wi-Fi or gateways.",
 },
 {
 title: "Set it and forget it",
 body: "Enjoy up to 10 years of battery life for true maintenance-free operation.",
 },
 {
 title: "Fact-based decisions",
 body: "Eliminate guesswork with market-leading precision and minimal drift, allowing you to prove actual conditions in black and white.",
 },
 {
 title: "Smart platform integration",
 body: "Connects seamlessly to the RoomAlyzer platform to provide real-time alerts, mould forecasting, and automated data collection for DGNB certifications.",
 },
 ],
 },
 {
 slug: "mini-plus",
 heroTitle: "Mini+ sensor",
 heroTitleAccent: "Precise temperature and humidity monitoring — without the complexity.",
 heroLead:
 "The Mini+ sensor is the ideal solution for precisely monitoring the most critical parameters of your indoor climate without unnecessary complexity. Designed for professional use, it combines robust hardware with the intelligent RoomAlyzer platform to help you optimise energy consumption and protect your assets.",
 useCases: "Multi-room buildings · Care homes · Museums & churches · Rental properties",
 benefits: [
 {
 title: "Rapid deployment",
 body: "Press the on-sensor button to activate — data flows immediately over NB-IoT with no Wi-Fi, gateway, or IT setup.",
 },
 {
 title: "True maintenance-free operation",
 body: "A replaceable 3 × AA lithium pack delivers up to 10 years of battery life for stable, low-cost monitoring.",
 },
 {
 title: "Fact-based documentation",
 body: "±0.1 °C and ±1% RH precision with <0.03 °C/year drift — verifiable conditions you can export from the RoomAlyzer platform.",
 },
 {
 title: "Precise energy savings",
 body: "At H124 × W60 × D26 mm (130 g), deploy across every room and cut heating costs by ~5% for each degree you lower setpoint — backed by room-level data.",
 },
 ],
 },
 {
 slug: "mini-plus-pir",
 heroTitle: "Mini+ PIR sensor",
 heroTitleAccent: "Precise indoor climate and space utilisation data — with a long battery life.",
 heroLead:
 "The Mini+ PIR is the intelligent all-in-one solution for an optimised indoor climate and needs-based space utilisation. By combining precise climate measurements with anonymised occupancy tracking, it delivers a holistic overview of your building dynamics to make your operations smarter.",
 useCases: "Flexible offices · Meeting rooms · Shared workspaces",
 benefits: [
 {
 title: "Real-time documented conditions",
 body: "Create a reliable data foundation for your indoor climate with high-end sensor technology that guarantees maximum precision.",
 },
 {
 title: "Intelligent energy optimisation",
 body: "Track room occupancy to instantly uncover hidden savings potential in heating and ventilation, saving 5% on heating costs for every degree lowered.",
 },
 {
 title: "Fact-based needs analysis",
 body: "Gain a solid basis for deciding whether spaces should be reallocated or if cleaning intervals should be based on actual usage rather than rigid schedules.",
 },
 {
 title: "Zero IT hassle",
 body: "Operates 100% wirelessly over a closed, secure network completely independent of your local IT infrastructure, backed by up to 10 years of battery life.",
 },
 ],
 },
 {
 slug: "humidity",
 heroTitle: "Humidity sensor",
 heroTitleAccent: "Discreet protection for assets and the indoor climate — with an extremely long battery life.",
 heroLead:
 "The Humidity sensor is the ideal solution for anyone who requires precise temperature and humidity data in a discreet, compact format. It delivers exact values to the RoomAlyzer platform to safeguard irreplaceable cultural assets, comply with strict heritage conservation, or optimise office environments.",
 useCases: "Museums & churches · Archives · Heritage buildings",
 benefits: [
 {
 title: "Premium discretion",
 body: "Thanks to an extremely compact design and a weight of under 10 grams, the technology blends seamlessly into office landscapes, churches, museums, or display cases.",
 },
 {
 title: "Extreme economic efficiency",
 body: "A battery life of up to 15 years guarantees stable condition monitoring that operates virtually maintenance-free with exceptionally low operating costs.",
 },
 {
 title: "Flexible and precise",
 body: "High-end sensor technology delivers maximum precision with market-leading long-term stability, making calibration during ongoing operation completely unnecessary.",
 },
 {
 title: "Secure connection",
 body: "Data is transmitted safely via the Cloud Connector through a closed network, independent of your local Wi-Fi and capable of penetrating thick walls.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "co2",
 heroTitle: "CO2 sensor",
 heroTitleAccent: "Precise air quality data — with maximum battery life.",
 heroLead:
 "The CO2 sensor is the professional solution for monitoring air quality in environments where wellbeing, health, and concentration are crucial. In combination with the RoomAlyzer platform, it provides a sound, fact-based foundation for optimising ventilation and your overall indoor climate.",
 useCases: "Classrooms · Meeting rooms · Open-plan offices",
 benefits: [
 {
 title: "Fact-based documentation",
 body: "Concrete documentation of CO2 levels allows you to professionally address user enquiries and objectify building discussions with reliable data.",
 },
 {
 title: "Increased performance",
 body: "Active CO2 management minimises fatigue and headaches in classrooms or offices, serving as a direct investment in lower illness rates and better concentration.",
 },
 {
 title: "Simple energy optimisation",
 body: "Regulate your ventilation based on real-time data rather than rigid, fixed schedules to lower electricity and heating consumption without losing comfort.",
 },
 {
 title: "Seamless integration",
 body: "Transmits data securely via the Cloud Connector, entirely independent of your local Wi-Fi or IT network for minimal administrative effort.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "temperature",
 heroTitle: "Temperature sensor",
 heroTitleAccent: "Secure and precise temperature monitoring in the world's smallest format.",
 heroLead:
 "The Temperature sensor offers precise monitoring of critical environments where the smallest deviations have significant consequences. Designed for effortless validation, it ensures the correct storage of medications and food, as well as the stable operation of technical installations and laboratories.",
 useCases: "Pharmacies & medication storage · Food storage · Labs & server rooms",
 benefits: [
 {
 title: "Zero IT hassle",
 body: "Transmits data securely using SecureDataShot technology via a Cloud Connector, remaining completely independent of your local Wi-Fi or IT network.",
 },
 {
 title: "Maximum autonomy",
 body: "Benefit from an exceptional battery life of up to 15 years, eliminating ongoing maintenance and service calls even in hard-to-reach places.",
 },
 {
 title: "Immediate response",
 body: "Receive automatic email and SMS notifications the moment temperature limits are exceeded, allowing your team to act before valuable stock spoils.",
 },
 {
 title: "Rapid, flexible installation",
 body: "The ultra-compact, 3-gram sensor features high-performance peel-and-stick tape, making it ready to use in seconds without any cables.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "outdoor",
 heroTitle: "Outdoor sensor",
 heroTitleAccent: "The professional solution for precise monitoring of your outdoor climate.",
 heroLead:
 "The Outdoor sensor is an essential component of modern building management. By precisely recording outdoor temperature and humidity, it establishes the necessary reference to help you understand exactly how the outdoor climate influences your building fabric.",
 useCases: "Indoor/outdoor comparison · Heating optimisation · Mould prevention",
 benefits: [
 {
 title: "Precise energy optimisation",
 body: "Knowing the exact outdoor temperature at your property enables demand-driven fine-tuning of the heating system, eliminating unnecessary energy consumption.",
 },
 {
 title: "Intelligent mould prevention",
 body: "Proactively control ventilation systems by tracking outdoor humidity, minimising the risk of drawing in damp air before it threatens the building fabric.",
 },
 {
 title: "Extreme weather resilience",
 body: "Built for harsh environments, the sensor is 100% waterproof (IP67 certified) and features a robust, two-part design with an external probe.",
 },
 {
 title: "Maximum reliability",
 body: "Transmits data securely via the closed network with up to 8 years of battery life, ensuring stable operation independent of local IT networks.",
 },
 ],
 },
 {
 slug: "desk",
 heroTitle: "Desk sensor",
 heroTitleAccent: "Data-driven space management for the modern workplace.",
 heroLead:
 "The Desk sensor provides precise utilisation data for efficient, needs-based optimisation of your office space, eliminating guesswork. By combining ambient temperature measurements with intelligent algorithms for presence detection, it strictly follows the Privacy by Design principle by only determining whether a workspace is occupied or free.",
 useCases: "Flexible offices · Activity-based workplaces · Hot-desking",
 benefits: [
 {
 title: "Needs-based space optimisation",
 body: "Gain an objective overview of the actual utilisation of your zones to identify bottlenecks and unused space potential, sustainably reducing rental and energy costs.",
 },
 {
 title: "Enhanced workplace wellbeing",
 body: "Utilise real-time data and colour-coded heatmaps to guide employees directly to free desks, reducing search times in their daily routine.",
 },
 {
 title: "Fact-based decision-making",
 body: "Create a transparent foundation for decision-makers, allowing resources to be distributed fairly between departments based on real needs.",
 },
 {
 title: "Discreet and long-lasting",
 body: "Benefit from an ultra-compact design mounted with high-performance peel-and-stick tape, featuring an integrated battery lifespan of up to 9 years for true maintenance-free operation.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "touch",
 heroTitle: "Touch sensor",
 heroTitleAccent: "Simple feedback and rapid service — exactly where the need arises.",
 heroLead:
 "The Touch sensor is the ideal solution for anyone looking to manage their operations based on demand. By giving your users and guests the ability to notify you directly with a simple press of a button, you can react instantly when a facility requires attention — whether a coffee machine is out of order or a washroom needs servicing.",
 useCases: "Washrooms · Canteens · Reception & meeting rooms",
 benefits: [
 {
 title: "Demand-driven facility management",
 body: "Optimise your resources by only deploying staff when there is an actual need, reducing unnecessary time spent and ensuring maximum benefit.",
 },
 {
 title: "Higher customer satisfaction",
 body: "Capture valid feedback in real time from meeting rooms, canteens, or reception areas to rectify issues immediately before they result in complaints.",
 },
 {
 title: "Installation in seconds",
 body: "Position the sensor flexibly at relevant service points using practical peel-and-stick mounting, backed by a battery life of up to 15 years for virtually maintenance-free operation.",
 },
 {
 title: "Zero IT hassle",
 body: "Data transmission is encrypted and handled safely via the Cloud Connector, operating completely independently of your local IT environment.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "open-close",
 heroTitle: "Open/Close sensor",
 heroTitleAccent: "Full transparency of your space resources in real time — from lockers to windows.",
 heroLead:
 "The Open/Close sensor delivers precise facts instead of guesswork regarding the status and utilisation of your infrastructure. Whether managing lockers, optimising logistics for workwear, or ensuring property protection by checking closed windows — the sensor transforms every event into valuable insights.",
 useCases: "Locker management · Workwear logistics · Window & door checks",
 benefits: [
 {
 title: "Intelligent locker management",
 body: "Gain a precise overview of actual occupancy to efficiently allocate free capacity to new employees, providing ideal support for modern workplace concepts like shared desks.",
 },
 {
 title: "Efficient management and service",
 body: "The system indicates exactly which cabinets have been used, enabling needs-based stocking of workwear or targeted inspection intervals to save time in facility management.",
 },
 {
 title: "Property protection and energy optimisation",
 body: "Check with a single click after working hours whether windows or doors are closed, protecting the building and avoiding unnecessary energy consumption.",
 },
 {
 title: "Full data privacy",
 body: "The solution processes exclusively technical measurement data without personally identifiable information, minimising administrative effort regarding GDPR.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "motion",
 heroTitle: "Motion sensor",
 heroTitleAccent: "Wireless tracking of space utilisation with a 360° panoramic view.",
 heroLead:
 "The Motion sensor provides the precise foundation for professional space management and the strategic optimisation of your building utilisation. Using its Passive Infrared (PIR) technology to detect thermal movement, the system records space occupancy exclusively to map out how your square metres are used.",
 useCases: "Space planning · Cleaning optimisation · Facility management",
 benefits: [
 {
 title: "Strategic space management",
 body: "Gain full transparency over when your spaces are actually being used, creating a fact-based foundation for overall facility management and long-term space planning.",
 },
 {
 title: "Needs-based facility management",
 body: "Optimise resource allocation by focusing service and cleaning rounds on the areas that have actually been used, scheduled via precise automated heatmaps.",
 },
 {
 title: "Minimal maintenance and longevity",
 body: "With a battery life of up to 15 years under standard operation, the sensor is designed to run almost maintenance-free over its entire lifecycle.",
 },
 {
 title: "Simple plug-and-play installation",
 body: "Simply activate the sensor by removing the battery strip to start encrypted data transmission via the Cloud Connector, leaving your internal IT network completely untouched.",
 },
 ],
 cloudConnectorNote,
 },
 {
 slug: "water-detector",
 heroTitle: "Water detector",
 heroTitleAccent: "Reliable monitoring of unwanted water — even in hard-to-reach places.",
 heroLead:
 "The Water detector is the ultimate safeguard against costly water damage across your building portfolio. Developed specifically for professional operation, the sensor is available in both a robust, fully waterproof variant (Water Detector Pro IP67) and a discreet indoor variant (Water Detector Compact IP30).",
 useCases: "Server rooms · Basements & shafts · Housing associations",
 benefits: [
 {
 title: "Prevention of critical infrastructure damage",
 body: "Receive immediate notifications via email or SMS when conductive liquids are detected, allowing you to intercept leaks before they reach server rooms or electrical installations.",
 },
 {
 title: "Security in basements and shafts",
 body: "Position the sensor under sinks, near heating systems, or in deep shafts for continuous condition monitoring that protects the building fabric from moisture and mould.",
 },
 {
 title: "Installation without limits",
 body: "Thanks to the standard 3-metre cable, the measuring surface is placed exactly at the liquid's collection point, while the sensor housing remains positioned in the location with optimal signal strength.",
 },
 {
 title: "Fast roll-out without IT approval",
 body: "Operating on the nationwide cellular NB-IoT network, the sensor is completely independent of your local Wi-Fi, allowing you to bypass cumbersome IT department approval processes.",
 },
 ],
 },
 {
 slug: "water-rope",
 heroTitle: "Water rope sensor",
 heroTitleAccent: "Comprehensive protection over isolated data points with continuous zone detection.",
 heroLead:
 "The Water rope sensor provides an advanced safety net by monitoring a continuous path rather than a single point. Triggered by as little as 50 mm of contact anywhere along its flexible 3-metre cable, it delivers the ultimate real-time coverage required to safeguard high-risk infrastructure like archives, labs, and server rooms.",
 useCases: "Archives & labs · Pipelines & raised floors · Housing associations",
 benefits: [
 {
 title: "Continuous zone protection",
 body: "Route the sensor cable smoothly along entire pipelines, under raised floors, or wrapped directly around critical server racks to create a seamless zone of defence.",
 },
 {
 title: "Instant notification & rapid auto-reset",
 body: "Get immediate security alerts via email or SMS when the sensor detects liquid.",
 },
 {
 title: "Challenging environment deployment",
 body: "Powered by standalone NB-IoT technology, the cellular signal easily penetrates deep basements, heavy masonry, and technical shafts without needing local Wi-Fi.",
 },
 {
 title: "Flexible installation without limits",
 body: "Place the main sensor unit in the spot with the absolute best wireless signal reception, while running the expandable cable (available up to 50 m) exactly where risks occur.",
 },
 ],
 },
 {
 slug: "cloud-connector",
 heroTitle: "Cloud Connector",
 heroTitleAccent: "The secure bridge between your sensors and the cloud.",
 heroLead:
 "The Cloud Connector is the central gateway that provides your sensors with secure network access so that you receive precise data for your building operations. While our NB-IoT sensors operate completely independently, the Cloud Connector acts as a necessary and secure bridge for all sensors with SecureDataShot technology.",
 useCases: "Required for SecureDataShot sensors · Multi-sensor sites · API integrations",
 benefits: [
 {
 title: "Maximum security",
 body: "Transmits data via a closed network independently of your local IT environment, ensuring full NIS2 compliance and robust data protection.",
 },
 {
 title: "Simple scalability",
 body: "Enjoy an effortless plug-and-play installation without any configuration effort; its extensive wireless range efficiently covers large areas and numerous sensors simultaneously.",
 },
 {
 title: "Future-proof integration",
 body: "Open REST API and webhooks ensure that the connectivity ecosystem communicates seamlessly with your other platforms and software systems.",
 },
 {
 title: "Zero Wi-Fi dependence",
 body: "Equipped with an internal SIM card, it operates entirely independently of local building Wi-Fi, guaranteeing maximum stability and hardware isolation.",
 },
 ],
 },
 {
 slug: "range-extender-and-bracket",
 heroTitle: "Range Extender and Bracket",
 heroTitleAccent: "Reach the corners of the building.",
 heroLead:
 "The Range Extender and Bracket are essential accessories when standard mounting is insufficient — from metal desk drawers to industrial freezers. Both act as signal boosters so barriers such as metal, thick walls, or condensation do not interrupt reliable sensor data.",
 useCases: "Metal desk drawers · Freezer & cold rooms · Display cases · Basements",
 benefits: [
 {
 title: "Targeted signal amplification",
 body: "The Range Extender keeps desk sensors connected even inside metal drawers or behind signal-blocking barriers.",
 },
 {
 title: "Robust protection in extreme environments",
 body: "Both mounts resist condensation and extreme cold — ideal for cooling and freezer areas where they protect compact sensors and amplify the signal through insulated walls.",
 },
 {
 title: "Flexible mounting anywhere",
 body: "Mounting holes on the Bracket accept cable ties in display cases or industrial refrigerators; the Range Extender uses peel-and-stick installation.",
 },
 ],
 },
];

export function getSensorContent(
 slug: string,
 lang: Lang = defaultLang,
): SensorPageContent | undefined {
 const base = sensorPageContent.find((entry) => entry.slug === slug);
 if (!base || lang === defaultLang) return base;

 const overlay = sensorContentI18n[lang]?.[slug];
 if (!overlay) return base;

 return {
  ...base,
  ...overlay,
  // benefits is an array — only replace it when the overlay supplies its own.
  benefits: overlay.benefits ?? base.benefits,
 };
}
