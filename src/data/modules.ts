export type ModuleColor = "coral" | "sky" | "navy" | "forest";

export type Module = {
  slug: string;
  navn: string;
  kort: string;
  lang: string;
  color: ModuleColor;
  href: string;
};

export const modules: Module[] = [
  {
    slug: "indeklima",
    navn: "Indeklima",
    kort: "Håndter klager med data i stedet for følelser.",
    lang: "Måling af CO2, temperatur, luftfugtighed og VOC. Vær på forkant med skimmel og fugt.",
    color: "sky",
    href: "/indeklima",
  },
  {
    slug: "space-management",
    navn: "Space management",
    kort: "Overblik over kontor- og mødefaciliteter.",
    lang: "Reager hurtigt på skiftende behov hos jeres medarbejdere og optimer jeres arealudnyttelse.",
    color: "navy",
    href: "/space-management",
  },
  {
    slug: "vandlaekage",
    navn: "Vandlækagedetektion",
    kort: "Opdag lækager før de koster dyrt.",
    lang: "Trådløse sensorer der alarmerer med det samme, hvis der registreres vand uønskede steder.",
    color: "forest",
    href: "/vandlaekage",
  },
  {
    slug: "konservering",
    navn: "Preservation",
    kort: "Beskyt værdifulde samlinger og materialer.",
    lang: "Kontinuerlig overvågning af temperatur og luftfugtighed til museer, arkiver og lagre.",
    color: "coral",
    href: "/konservering",
  },
  {
    slug: "sensorbaseret-rengoring",
    navn: "Sensorbaseret rengøring",
    kort: "Rengør efter behov – ikke efter skema.",
    lang: "Brug data om rumbrug til at styre rengøring dér, hvor det giver mening.",
    color: "sky",
    href: "/sensorbaseret-rengoring",
  },
  {
    slug: "pushbutton",
    navn: "Pushbutton",
    kort: "Feedback i realtid fra brugerne.",
    lang: "Lad medarbejdere og gæster give input med et enkelt tryk – målrettet facility-teamet.",
    color: "navy",
    href: "/pushbutton",
  },
  {
    slug: "roomusage",
    navn: "Roomusage",
    kort: "Forstå hvordan rummene faktisk bruges.",
    lang: "Detaljeret data om mødelokaler og fællesarealer giver grundlag for bedre beslutninger.",
    color: "forest",
    href: "/roomusage",
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
