/**
 * Press resources for journalists and analysts. Rendered at
 * `/en/about/press/`.
 */

export type PressAsset = {
  title: string;
  description: string;
  url: string;
  /** File size hint e.g. "1.2 MB ZIP" — purely informational. */
  meta?: string;
};

export type PressRelease = {
  date: string; // ISO yyyy-mm-dd
  headline: string;
  summary: string;
  url?: string;
};

export type PressMention = {
  outlet: string;
  date: string;
  headline: string;
  url?: string;
};

export const keyFacts: { label: string; value: string }[] = [
  { label: "Founded", value: "2019" },
  { label: "Headquarters", value: "Aarhus, Denmark" },
  { label: "Ownership", value: "100% privately owned" },
  { label: "Employees", value: "10 (2026)" },
  { label: "Customers", value: "400+ buildings across 8 European countries" },
  { label: "Sensors deployed", value: "38,000+" },
];

export const pressContact = {
  name: "Jon Wichmann",
  role: "CEO",
  email: "press@iot-fabrikken.com",
  phone: "+45 70 00 00 00",
};

export const assets: PressAsset[] = [
  {
    title: "Logo pack",
    description: "IoT Fabrikken logos in SVG, PNG and PDF for light and dark backgrounds.",
    url: "/press/iot-fabrikken-logo-pack.zip",
    meta: "1.2 MB ZIP",
  },
  {
    title: "Product screenshots",
    description: "High-resolution screenshots of the RoomAlyzer dashboard, mobile app and floor plans.",
    url: "/press/iot-fabrikken-screenshots.zip",
    meta: "8.4 MB ZIP",
  },
  {
    title: "Executive portraits",
    description: "Professional portraits of the leadership team for use in press stories.",
    url: "/press/iot-fabrikken-portraits.zip",
    meta: "6.1 MB ZIP",
  },
  {
    title: "Product factsheet",
    description: "Two-page factsheet with product, company and customer information.",
    url: "/press/iot-fabrikken-factsheet.pdf",
    meta: "720 KB PDF",
  },
];

export const releases: PressRelease[] = [
  {
    date: "2026-03-18",
    headline: "IoT Fabrikken announces RoomAlyzer Series D for preservation",
    summary: "A new hardware series aimed at museums, archives and historic buildings with tight EN 15757 tolerances and multi-year battery life.",
  },
  {
    date: "2026-01-15",
    headline: "IoT Fabrikken certified under D-Label",
    summary: "The RoomAlyzer hardware family achieves D-Label certification for Danish design and sustainable manufacturing.",
  },
  {
    date: "2025-11-02",
    headline: "IoT Fabrikken partners with OS2iot",
    summary: "Registered as a device vendor on the Danish municipal LoRaWAN platform, enabling frictionless rollouts across 98 municipalities.",
  },
  {
    date: "2025-09-10",
    headline: "IoT Fabrikken reaches 30,000 sensors across Europe",
    summary: "Growth milestone driven by the Nordic education sector and the Danish Diocesan Council's preservation programme.",
  },
];

export const mentions: PressMention[] = [
  {
    outlet: "TechSavvy",
    date: "2026-02-12",
    headline: "The quiet Danish IoT startup behind healthier classrooms",
  },
  {
    outlet: "Building Knowledge",
    date: "2025-12-03",
    headline: "How sensor data is reshaping heritage preservation",
  },
  {
    outlet: "Ingeniøren",
    date: "2025-10-17",
    headline: "Aarhus-baseret IoT-firma åbner data for kommuner",
  },
  {
    outlet: "PropTech Europe",
    date: "2025-08-05",
    headline: "Five Nordic PropTech companies to watch in 2026",
  },
];
