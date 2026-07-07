import type { Hub } from "./types";

export const compareHub: Hub = {
  slug: "compare",
  title: "How RoomAlyzer compares.",
  titleAccent: "Honest, evidence-based answers.",
  eyebrow: "Compare",
  lead: "Decision-making pages that put RoomAlyzer next to the alternatives, and explain when one approach beats the other.",
  leaves: [
    {
      slug: "vs-manual-logging",
      eyebrow: "Comparison",
      title: "RoomAlyzer vs. manual logging.",
      titleAccent: "When the clipboard is the bottleneck.",
      lead: "What you gain, and what you lose, when you replace hand-written logs with continuous sensor data.",
    },
    {
      slug: "vs-bms-cts",
      eyebrow: "Comparison",
      title: "RoomAlyzer vs. BMS and CTS.",
      titleAccent: "Complement, not replace.",
      lead: "How wireless, battery-powered sensors add data to (and alongside) your existing building-management system.",
    },
    {
      slug: "wireless-vs-wired",
      eyebrow: "Comparison",
      title: "Wireless vs. wired.",
      titleAccent: "Total cost of ownership, explained.",
      lead: "The real installation, commissioning and maintenance cost of wireless sensors compared to cabled ones.",
    },
    {
      slug: "cloud-vs-onprem",
      eyebrow: "Comparison",
      title: "Cloud vs. on-premise.",
      titleAccent: "Where should your data live?",
      lead: "Hosting, security, cost and uptime, compared for cloud-hosted and self-hosted deployments.",
    },
    {
      slug: "nb-iot-vs-wifi",
      eyebrow: "Comparison",
      title: "NB-IoT vs. Wi-Fi.",
      titleAccent: "Pick the right radio.",
      lead: "Range, battery life, coverage and dependency profile of cellular and Wi-Fi wireless options for sensors.",
    },
    {
      slug: "saas-vs-selfhosted",
      eyebrow: "Comparison",
      title: "SaaS vs. self-hosted.",
      titleAccent: "Operate it, or let us.",
      lead: "When a fully hosted SaaS wins, and when a self-hosted deployment is the right call.",
    },
    {
      slug: "reactive-vs-proactive",
      eyebrow: "Comparison",
      title: "Reactive vs. proactive operations.",
      titleAccent: "The shift that data enables.",
      lead: "How moving from reactive tickets to proactive alarms changes the work of a facility team.",
    },
    {
      slug: "demand-vs-schedule-cleaning",
      eyebrow: "Comparison",
      title: "Demand- vs. schedule-based cleaning.",
      titleAccent: "Same budget, better result.",
      lead: "How sensor-driven cleaning beats fixed cleaning schedules, on both cost and perceived quality.",
    },
  ],
};
