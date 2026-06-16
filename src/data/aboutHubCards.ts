/**
 * Card images for the About hub index (`/en/about/`).
 * Titles and descriptions come from `aboutHub.leaves`.
 */

export type AboutHubCardImage = {
  image?: string;
  imageAlt: string;
  placeholder?: boolean;
  width?: number;
  height?: number;
  srcSet?: { width: number; url: string }[];
  /** CSS object-position for object-cover crops in the 4:3 card frame. */
  objectPosition?: string;
  /** Optional zoom within the card frame (transform scale). */
  imageScale?: number;
};

export const aboutHubCardImages: Record<string, AboutHubCardImage> = {
  story: {
    image: "/images/usp-assembly-team.png",
    imageAlt: "IoT Fabrikken team assembling sensors at the workshop",
    width: 864,
    height: 1024,
    objectPosition: "50% 0%",
  },
  team: {
    image: "/team/team-group.webp",
    imageAlt: "The IoT Fabrikken team",
    objectPosition: "50% 35%",
  },
  careers: {
    image: "/images/about/careers.webp",
    imageAlt: "Colleagues collaborating at IoT Fabrikken",
    width: 960,
    height: 523,
    objectPosition: "50% 45%",
    srcSet: [
      { width: 480, url: "/images/about/careers-480.webp" },
      { width: 720, url: "/images/about/careers-720.webp" },
      { width: 960, url: "/images/about/careers-960.webp" },
    ],
  },
  press: {
    image: "/images/about/press.webp",
    imageAlt: "Press and media resources from IoT Fabrikken",
    width: 1024,
    height: 460,
    objectPosition: "78% 72%",
    imageScale: 1.12,
    srcSet: [
      { width: 640, url: "/images/about/press-640.webp" },
      { width: 960, url: "/images/about/press-960.webp" },
      { width: 1024, url: "/images/about/press-1024.webp" },
    ],
  },
  "d-label": {
    placeholder: true,
    imageAlt: "D-Label certification — image placeholder",
  },
};
