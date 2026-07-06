import type { Hub } from "./types";
import { defaultLang, type Lang } from "../lang";
import { modulesHubI18n } from "./modules.i18n";

export const modulesHub: Hub = {
  slug: "modules",
  title: "Pick the modules",
  titleAccent: "you actually need.",
  eyebrow: "Modules",
  lead: "Each module solves a specific problem in your building. Start with one and add the next whenever it makes sense.",
  leaves: [
    {
      slug: "indoor-climate",
      eyebrow: "Module",
      title: "Indoor climate.",
      titleAccent: "Data instead of feelings.",
      lead: "CO2, temperature, humidity and VOC in real time, and early warnings about mould and damp before they hurt the building.",
    },
    {
      slug: "preservation",
      eyebrow: "Module",
      title: "Preservation.",
      titleAccent: "Protect what cannot be replaced.",
      lead: "Continuous monitoring of the climate around collections, artwork, archives and sensitive materials.",
    },
    {
      slug: "space-management",
      eyebrow: "Module",
      title: "Space management.",
      titleAccent: "How your rooms really get used.",
      lead: "Occupancy, booking-versus-actual-use and utilisation patterns for meeting rooms, desks and common areas.",
    },
    {
      slug: "water-detection",
      eyebrow: "Module",
      title: "Water detection.",
      titleAccent: "Stop damage before it spreads.",
      lead: "Wireless leak sensors that alarm the moment water shows up where it shouldn't be.",
    },
    {
      slug: "push-buttons",
      eyebrow: "Module",
      title: "Push buttons.",
      titleAccent: "Feedback with a single tap.",
      lead: "Service calls, cleaning requests and satisfaction input from staff and guests, routed straight to the right team.",
    },
    {
      slug: "lockers-doors",
      eyebrow: "Module",
      title: "Lockers and doors.",
      titleAccent: "Opens, closes, left ajar.",
      lead: "Wireless open/close sensors for doors, cabinets, windows and lockers, without any wiring.",
    },
    {
      slug: "usage-cleaning",
      eyebrow: "Module",
      title: "Usage and cleaning.",
      titleAccent: "Clean when it is actually needed.",
      lead: "Demand-based cleaning that reacts to real usage instead of a fixed schedule.",
    },
  ],
};

/** Localized modules hub. Falls back to the English base for missing keys. */
export function getModulesHub(lang: Lang = defaultLang): Hub {
  if (lang === defaultLang) return modulesHub;
  const overlay = modulesHubI18n[lang];
  if (!overlay) return modulesHub;
  const leaves = modulesHub.leaves.map((leaf) => {
    const lo = overlay.leaves?.[leaf.slug];
    return {
      ...leaf,
      title: lo?.title ?? leaf.title,
      titleAccent: lo?.titleAccent ?? leaf.titleAccent,
      lead: lo?.lead ?? leaf.lead,
    };
  });
  return {
    ...modulesHub,
    title: overlay.title ?? modulesHub.title,
    titleAccent: overlay.titleAccent ?? modulesHub.titleAccent,
    eyebrow: overlay.eyebrow ?? modulesHub.eyebrow,
    lead: overlay.lead ?? modulesHub.lead,
    leaves,
  };
}
