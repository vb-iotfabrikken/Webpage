import type { ModulePageContent } from "./types";
import { defaultLang, type Lang } from "../lang";
import { moduleContentI18n } from "./modules.i18n";

export const modulePageContent: ModulePageContent[] = [
 {
 slug: "indoor-climate",
 heroTitle: "Indoor climate monitoring",
 heroTitleAccent: "that turns complaints into facts.",
 heroLead:
 "Indoor climate monitoring gives you the data to answer a question every facility manager knows: is the complaint real, or is it a feeling? Someone is too warm, someone else is too cold, and the air feels heavy by mid-afternoon — but without data on temperature, humidity, and CO2, you are left managing impressions, adjusting ventilation on guesswork, and defending decisions you cannot back up.",
 challenges: [
 "Complaints you cannot verify: a user reports poor air quality, and you have no way to confirm whether action is needed or whether it is a question of perception.",
 "Systems running blind: heating and ventilation follow fixed schedules rather than actual conditions, wasting energy when rooms are empty and underperforming when they are full.",
 "No proof for the conversation: when management, employees, or authorities ask about the indoor climate in your offices or schools, you have nothing concrete to show.",
 ],
 solution: [
 "RoomAlyzer measures temperature, humidity, CO2, and TVOC continuously and turns it into clear documentation — so you can answer any complaint with facts instead of feelings. You see exactly when CO2 levels climb, when humidity invites mould, and whether a room really needs attention or simply reassurance.",
 "And it does more than show you the numbers: it warns you when mould becomes a risk and suggests concrete adjustments, so you can tune your heating and ventilation to actual use and lower energy costs without losing comfort. Used across offices, schools, and municipalities.",
 ],
 smarterTogether:
 "Combined with Space management, RoomAlyzer lets you adjust energy use and indoor climate to the number of people actually present — shown side by side in one view.",
 closing:
 "Solutions like this are usually expensive and a hassle to install. RoomAlyzer is up and running in minutes, stays flexible as your needs change, and costs a fraction of the price.",
 },
 {
 slug: "space-management",
 heroTitle: "Space management data",
 heroTitleAccent: "that replaces gut feeling with facts.",
 heroLead:
 "Space management starts with a simple but expensive question: how much of your space are you actually using? When employees come in expecting to find a free desk and the right meeting room, and management needs to decide whether to rent, repurpose, or build, you cannot run on impressions. You need to know which desks and rooms are in use, when occupancy peaks, and where you are paying for space that sits empty.",
 challenges: [
 "Paying for space you do not use: desks and meeting rooms stand empty while you rent or build more, with no data to prove what can be released or repurposed.",
 "Meeting rooms that do not add up: rooms booked for ten and used by two, and meetings that are cancelled but never un-booked, so the calendar looks full while the rooms stand empty.",
 "No overview across floors and locations: you cannot see in real time what is free, what is occupied, or which zones are most in demand.",
 "Decisions that are hard to defend: allocating space between departments or planning new hires turns into a negotiation based on opinion rather than usage.",
 ],
 solution: [
 "RoomAlyzer Space management gives you a live, anonymised overview of desk and room occupancy — in real time and over time. You see which desks are free right now, how zones are used across the day and week, when occupancy peaks, and exactly where you have spare capacity.",
 "Meeting rooms are a focus in their own right: you can see how they are really used — booked for many, attended by few — and have rooms automatically released when a booking goes unused, so a cancelled meeting no longer blocks a room that is actually free. The built-in economy calculator turns all of this into clear savings on rent and energy, while heatmaps and reports give you an objective basis for fair decisions. Developed in Denmark and built to be easy for every kind of user, it is relevant for facility management, space planners, operations, and municipalities.",
 ],
 smarterTogether:
 "RoomAlyzer can show space utilisation and indoor climate side by side, so you can adjust energy use and ventilation to the number of people actually present — striking the right balance between wellbeing and energy optimisation.",
 closing:
 "Where space-management systems are normally costly and disruptive to roll out, RoomAlyzer installs in minutes, adapts as your workplace changes, and comes at a fraction of the usual cost.",
 },
 {
 slug: "water-detection",
 heroTitle: "Water leak detection",
 heroTitleAccent: "that warns you before the damage spreads.",
 heroLead:
 "Water leak detection is about one thing: getting the message before a small leak becomes an expensive disaster. A burst pipe in a shaft, a leak in an electrical cabinet, or water under a sink in a housing association can run undetected for hours or days — and by the time someone notices, the repair bill and the disruption are already large.",
 challenges: [
 "Leaks discovered too late: water reaches servers, electrical installations, or the building fabric before anyone is aware, turning a minor incident into a major one.",
 "Alarms that no one hears: a traditional sensor sits and beeps to itself in a basement or shaft, where there is no one around to notice it.",
 "Hard-to-reach risk points: shafts, basements, and technical rooms are exactly where leaks start and exactly where no one looks regularly.",
 "No documentation after the fact: when the insurance conversation comes, you have no objective record of when and where it happened.",
 ],
 solution: [
 "RoomAlyzer sends an alert straight to email or SMS when water is detected — so you can act before the damage spreads. Instead of an alarm that beeps to an empty room, the message goes directly to the right person, and you can set up as many recipients as you need, so it always reaches someone who can act.",
 "The sensors run on a cellular network that works independently of local Wi-Fi, reaching deep basements, shafts, and closed cabinets, and a detailed incident log gives you an objective record for insurance. It is simple, operational, and a genuinely effective early-warning system for facility management, operations, and housing associations.",
 ],
 closing:
 "Leak-detection systems are usually expensive and complicated to install. This one takes minutes to set up, goes wherever the risk is, and costs a fraction of the price.",
 },
 {
 slug: "preservation",
 heroTitle: "Heritage climate monitoring",
 heroTitleAccent: "that protects collections and saves energy.",
 heroLead:
 "Preservation comes down to a question every church, museum, archive, and heritage building faces: in what climate are you actually storing your objects? Whether it is a high altar, an organ, a painting, or a display case of old timber, the wrong humidity or temperature does slow, irreversible damage — and you rarely see it until it is too late.",
 challenges: [
 "Invisible, gradual damage: unfavourable humidity and temperature harm irreplaceable objects long before any visible sign appears.",
 "No documentation of conditions: you cannot prove the climate your collection has been kept in, for insurers, funders, or conservation requirements.",
 "Preservation versus energy bills: heating a historic building to protect its contents is expensive, and without data you cannot find the balance.",
 ],
 solution: [
 "RoomAlyzer monitors temperature and humidity and turns it into clear documentation of the exact conditions your objects are kept in. Our sensors are known for their high precision — something conservators rightly insist on — so you can trust the figures you preserve your collection by.",
 "You can watch every kind of collection, from altars and organs to paintings and display cases, and balance preservation against energy use instead of guessing. One of the real strengths here is that the same data serves two roles that rarely share a tool: conservators protecting the collection and facility managers running the building, working from the same facts — which is no accident, since conservators helped shape how this works. Ideal for museums, churches, archives, and heritage conservation.",
 ],
 closing:
 "Climate monitoring for collections is normally expensive and awkward to install. RoomAlyzer is ready in minutes, flexible enough for any building, and costs a fraction of what you would expect.",
 },
 {
 slug: "usage-cleaning",
 heroTitle: "Data-driven cleaning",
 heroTitleAccent: "that follows actual use, not a fixed schedule.",
 heroLead:
 "Demand-based cleaning answers a question every operations team recognises: why clean a room that no one has used, while a heavily used space waits its turn? Fixed cleaning rotas treat every room the same, which means effort spent where it is not needed and too little where it is.",
 challenges: [
 "Cleaning by rota, not by need: spaces that sit unused are cleaned on schedule while busy areas and public washrooms wait for their slot.",
 "Wasted resources: staff time and cleaning costs go to rooms that were never touched since the last round.",
 "No basis for the conversation: you cannot show a cleaning contractor or budget holder where effort actually needs to go.",
 ],
 solution: [
 "RoomAlyzer shows you which spaces have actually been used, so cleaning can follow real demand instead of a fixed timetable. Clean the busy areas better, and skip what is already clean and untouched — from offices to public washrooms.",
 "The result is better hygiene where it matters, lower costs, and a clear basis for planning. Built for cleaning teams and facility management, it shares its data directly with Space management.",
 ],
 closing:
 "Compared with the usual cost and effort of systems like this, RoomAlyzer installs in minutes, flexes to fit your building, and costs a fraction of the price.",
 },
 {
 slug: "push-buttons",
 heroTitle: "Real-time user feedback",
 heroTitleAccent: "that turns problems into instant service requests.",
 heroLead:
 "User feedback usually arrives too late — as a complaint, after the coffee machine has been broken all morning or the washroom has been out of paper for hours. By the time you hear about it, the damage to the experience is already done.",
 challenges: [
 "You hear about problems too late: an empty soap dispenser or a broken machine becomes a complaint instead of a quick fix.",
 "No direct line from user to service: people who notice the problem have no easy way to tell the people who can solve it.",
 "Staffing on guesswork: without feedback data, you cannot tell where service is genuinely needed.",
 ],
 solution: [
 "RoomAlyzer lets users tell you when something needs attention — a single press reports a missing supply, a fault, or a service need, and an automatic email or SMS reaches the responsible person straight away.",
 "You react before issues become complaints, and the history of all interactions shows you where demand really is, so staffing follows facts rather than guesswork. A simple, demand-driven tool for facility management and service teams.",
 ],
 closing:
 "Where comparable systems are expensive and fiddly to set up, these buttons are ready in seconds, can go anywhere, and cost a fraction of the price.",
 },
 {
 slug: "lockers-doors",
 heroTitle: "Open/close monitoring",
 heroTitleAccent: "that brings transparency to lockers, windows, and doors.",
 heroLead:
 "Open/close monitoring turns everyday uncertainty into facts: which lockers are actually in use, whether windows are left open after hours, and how access points across the building are really being used. Without it, you are managing lockers by guesswork and checking windows on foot.",
 challenges: [
 "Lockers allocated blind: you cannot see which are genuinely in use, so capacity is wasted and new employees are hard to place.",
 "Windows and doors left open: open access points after hours mean wasted energy and reduced security, discovered only by chance.",
 "No usage patterns to plan from: you have no data on how lockers, cabinets, or access routes are used over time.",
 ],
 solution: [
 "RoomAlyzer gives you a real-time overview of which lockers, windows, and doors are open or closed, and turns it into usage patterns you can plan from. Allocate free locker capacity efficiently, support shared-desk and clean-desk concepts, and check with a single click after hours whether everything is closed — protecting both the building and the energy bill.",
 "Relevant for facility management and workplace planning.",
 ],
 closing:
 "Solutions like this are usually expensive and slow to install. RoomAlyzer is up and running in minutes, stays flexible, and costs a fraction of the price.",
 },
];

export function getModuleContent(
 slug: string,
 lang: Lang = defaultLang,
): ModulePageContent | undefined {
 const base = modulePageContent.find((entry) => entry.slug === slug);
 if (!base || lang === defaultLang) return base;
 const overlay = moduleContentI18n[lang]?.[slug];
 if (!overlay) return base;
 return {
 ...base,
 ...overlay,
 challenges: overlay.challenges ?? base.challenges,
 solution: overlay.solution ?? base.solution,
 };
}
