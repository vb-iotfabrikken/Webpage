export type ModuleColor = "coral" | "sky" | "navy" | "forest";

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
    color: "sky",
    href: "/en/modules/indoor-climate/",
  },
  {
    slug: "space-management",
    name: "Space management",
    short: "Overview of your offices and meeting facilities.",
    long: "React quickly to your employees' changing needs and optimise how you use your floor space.",
    color: "navy",
    href: "/en/modules/space-management/",
  },
  {
    slug: "water-detection",
    name: "Water detection",
    short: "Spot leaks before they get expensive.",
    long: "Wireless sensors that alarm instantly the moment water is detected where it shouldn't be.",
    color: "forest",
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
    short: "Clean on demand — not to a schedule.",
    long: "Use occupancy data to direct cleaning to the rooms where it actually makes a difference.",
    color: "sky",
    href: "/en/modules/usage-cleaning/",
  },
  {
    slug: "push-buttons",
    name: "Push buttons",
    short: "Real-time feedback from your users.",
    long: "Let staff and guests give input with a single tap — routed straight to the facility team.",
    color: "navy",
    href: "/en/modules/push-buttons/",
  },
  {
    slug: "lockers-doors",
    name: "Lockers and doors",
    short: "Opens, closes, left ajar.",
    long: "Wireless open/close sensors for doors, cabinets, windows and lockers — without any wiring.",
    color: "forest",
    href: "/en/modules/lockers-doors/",
  },
];

export const moduleColorClasses: Record<
  ModuleColor,
  { bg: string; bgSoft: string; text: string; border: string; ring: string }
> = {
  coral: {
    bg: "bg-coral-500",
    bgSoft: "bg-coral-50",
    text: "text-coral-500",
    border: "border-coral-500",
    ring: "ring-coral-500",
  },
  sky: {
    bg: "bg-sky-500",
    bgSoft: "bg-sky-50",
    text: "text-sky-500",
    border: "border-sky-500",
    ring: "ring-sky-500",
  },
  navy: {
    bg: "bg-navy-500",
    bgSoft: "bg-stone-100",
    text: "text-navy-500",
    border: "border-navy-500",
    ring: "ring-navy-500",
  },
  forest: {
    bg: "bg-forest-500",
    bgSoft: "bg-forest-50",
    text: "text-forest-500",
    border: "border-forest-500",
    ring: "ring-forest-500",
  },
};
