import type { Hub } from "./types";

export const contactHub: Hub = {
  slug: "contact",
  title: "Get in touch.",
  titleAccent: "We are happy to help.",
  eyebrow: "Contact",
  lead: "Book a demo, talk to sales, find an existing customer's help centre or apply to become a partner.",
  leaves: [
    {
      slug: "book-demo",
      eyebrow: "Contact",
      title: "Book a demo.",
      titleAccent: "30 minutes, no strings.",
      lead: "Pick a slot that fits your calendar. We will show the product, discuss your use case and give you a concrete price estimate.",
      primaryCta: { label: "Book demo", href: "/en/contact/book-demo/" },
    },
    {
      slug: "sales",
      eyebrow: "Contact",
      title: "Talk to sales.",
      titleAccent: "Dorthe, Dennis and Lars Q.",
      lead: "A short conversation with our sales team to understand your setup, scope and timeline.",
    },
    {
      slug: "support-info",
      eyebrow: "Contact",
      title: "Support information.",
      titleAccent: "Already a customer?",
      lead: "Our help centre, service-level agreements and the fastest way to reach support.",
      primaryCta: { label: "Go to the help centre", href: "https://support.iot-fabrikken.com" },
    },
    {
      slug: "become-partner",
      eyebrow: "Contact",
      title: "Become a partner.",
      titleAccent: "Build on top of RoomAlyzer.",
      lead: "Resell, integrate or co-develop with IoT Fabrikken. Tell us what you have in mind.",
    },
  ],
};
