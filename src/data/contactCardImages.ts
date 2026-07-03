/**
 * Card images for the Contact hub index (`/{lang}/contact/`).
 * Sources: `Portraits/Team pictures/` → `public/images/contact/`.
 */

export type ContactCardImage = {
  image: string;
  imageAlt: string;
  width?: number;
  height?: number;
  objectPosition?: string;
  imageScale?: number;
};

export const contactCardImages: Record<string, ContactCardImage> = {
  "book-demo": {
    image: "/images/contact/book-demo.webp",
    imageAlt: "Colleagues in a relaxed demo meeting at IoT Fabrikken",
    width: 800,
    height: 400,
  },
  sales: {
    image: "/images/contact/sales.webp",
    imageAlt: "A friendly conversation with the IoT Fabrikken sales team",
    width: 800,
    height: 500,
    objectPosition: "62% 40%",
  },
  "become-partner": {
    image: "/images/contact/become-partner.webp",
    imageAlt: "IoT Fabrikken at a partner and municipality event",
    width: 800,
    height: 500,
    objectPosition: "58% 30%",
  },
  "dhbv-on-site": {
    image: "/images/events/dhbv-on-site.webp",
    imageAlt: "IoT Fabrikken team at a trade fair stand",
    width: 800,
    height: 500,
    objectPosition: "50% 35%",
  },
};
