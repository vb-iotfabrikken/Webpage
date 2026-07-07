import { defaultLang, langPath, type Lang } from "./lang";
import { localizedModuleName } from "./deTermLocks";
import { modulesI18n } from "./modules.i18n";

export type ModuleColor = "coral" | "sky" | "navy" | "forest" | "amber" | "violet" | "orange" | "white";

export type Module = {
  slug: string;
  name: string;
  short: string;
  long: string;
  color: ModuleColor;
  href: string;
};

export const modules: Module[] = [
  {
    slug: "indoor-climate",
    name: "Indoor climate",
    short: "Handle complaints with data instead of feelings.",
    long: "Measure CO2, temperature, humidity and VOC. Stay ahead of mould and damp.",
    color: "forest",
    href: "/en/modules/indoor-climate/",
  },
  {
    slug: "space-management",
    name: "Space management",
    short: "Overview of your offices and meeting facilities.",
    long: "React quickly to your employees' changing needs and optimise how you use your floor space.",
    color: "amber",
    href: "/en/modules/space-management/",
  },
  {
    slug: "water-detection",
    name: "Water detection",
    short: "Spot leaks before they get expensive.",
    long: "Wireless sensors that alarm instantly the moment water is detected where it shouldn't be.",
    color: "sky",
    href: "/en/modules/water-detection/",
  },
  {
    slug: "preservation",
    name: "Preservation",
    short: "Protect valuable collections and materials.",
    long: "Continuous monitoring of temperature and humidity for museums, archives and storage facilities.",
    color: "coral",
    href: "/en/modules/preservation/",
  },
  {
    slug: "usage-cleaning",
    name: "Usage and cleaning",
    short: "Clean on demand, not to a schedule.",
    long: "Use occupancy data to direct cleaning to the rooms where it actually makes a difference.",
    color: "white",
    href: "/en/modules/usage-cleaning/",
  },
  {
    slug: "push-buttons",
    name: "Push buttons",
    short: "Real-time feedback from your users.",
    long: "Let staff and guests give input with a single tap, routed straight to the facility team.",
    color: "orange",
    href: "/en/modules/push-buttons/",
  },
  {
    slug: "lockers-doors",
    name: "Lockers and doors",
    short: "Opens, closes, left ajar.",
    long: "Wireless open/close sensors for doors, cabinets, windows and lockers, without any wiring.",
    color: "violet",
    href: "/en/modules/lockers-doors/",
  },
];

/**
 * Localized module cards with locale-prefixed hrefs. Names/short/long fall back
 * to English when no overlay exists for the locale.
 */
export function getModules(lang: Lang = defaultLang): Module[] {
  const overlay = lang === defaultLang ? undefined : modulesI18n[lang];
  return modules.map((m) => {
    const o = overlay?.[m.slug];
    const name =
      lang === "de"
        ? localizedModuleName(m.slug, m.name, lang)
        : (o?.name ?? m.name);
    return {
      ...m,
      name,
      short: o?.short ?? m.short,
      long: o?.long ?? m.long,
      href: langPath(`/modules/${m.slug}/`, lang),
    };
  });
}

export const moduleColorClasses: Record<
  ModuleColor,
  {
    bg: string;
    bgSoft: string;
    text: string;
    border: string;
    ring: string;
    hoverBgSoft: string;
    hoverText: string;
  }
> = {
  coral: {
    bg: "bg-coral-500",
    bgSoft: "bg-coral-50",
    text: "text-coral-500",
    border: "border-coral-500",
    ring: "ring-coral-500",
    hoverBgSoft: "group-hover:bg-coral-50",
    hoverText: "group-hover:text-coral-500",
  },
  sky: {
    bg: "bg-sky-500",
    bgSoft: "bg-sky-50",
    text: "text-sky-500",
    border: "border-sky-500",
    ring: "ring-sky-500",
    hoverBgSoft: "group-hover:bg-sky-50",
    hoverText: "group-hover:text-sky-500",
  },
  navy: {
    bg: "bg-navy-500",
    bgSoft: "bg-stone-100",
    text: "text-navy-500",
    border: "border-navy-500",
    ring: "ring-navy-500",
    hoverBgSoft: "group-hover:bg-stone-100",
    hoverText: "group-hover:text-navy-500",
  },
  forest: {
    bg: "bg-forest-500",
    bgSoft: "bg-forest-50",
    text: "text-forest-500",
    border: "border-forest-500",
    ring: "ring-forest-500",
    hoverBgSoft: "group-hover:bg-forest-50",
    hoverText: "group-hover:text-forest-500",
  },
  amber: {
    bg: "bg-amber-500",
    bgSoft: "bg-amber-50",
    text: "text-amber-500",
    border: "border-amber-500",
    ring: "ring-amber-500",
    hoverBgSoft: "group-hover:bg-amber-50",
    hoverText: "group-hover:text-amber-500",
  },
  violet: {
    bg: "bg-violet-500",
    bgSoft: "bg-violet-50",
    text: "text-violet-500",
    border: "border-violet-500",
    ring: "ring-violet-500",
    hoverBgSoft: "group-hover:bg-violet-50",
    hoverText: "group-hover:text-violet-500",
  },
  orange: {
    bg: "bg-orange-500",
    bgSoft: "bg-orange-50",
    text: "text-orange-500",
    border: "border-orange-500",
    ring: "ring-orange-500",
    hoverBgSoft: "group-hover:bg-orange-50",
    hoverText: "group-hover:text-orange-500",
  },
  white: {
    bg: "bg-stone-0",
    bgSoft: "bg-stone-0",
    text: "text-navy-500",
    border: "border-stone-100",
    ring: "ring-stone-100",
    hoverBgSoft: "group-hover:bg-white",
    hoverText: "group-hover:text-navy-500",
  },
};
