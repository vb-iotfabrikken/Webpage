import { contactCardImages, type ContactCardImage } from "./contactCardImages";

/** Side-column photo on event on-site contact forms (`/{lang}/contact/{event}/`). */
export const eventContactImages = {
  archivistica: {
    image: "/images/events/archivistica/fair-team.jpg",
    imageAlt: "IoT Fabrikken team at ARCHIVISTICA",
    width: 800,
    height: 500,
    objectPosition: "50% 35%",
  },
  "dhbv-verbandstag-2026": contactCardImages["dhbv-on-site"],
  "mutec-2026": contactCardImages["dhbv-on-site"],
  "worktech26-stockholm": contactCardImages["dhbv-on-site"],
} as const satisfies Record<string, ContactCardImage>;

export type EventContactSlug = keyof typeof eventContactImages;

export function getEventContactImage(slug: EventContactSlug): ContactCardImage {
  return eventContactImages[slug];
}
