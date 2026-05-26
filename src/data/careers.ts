/**
 * Careers content for `/en/about/careers/` and individual role pages.
 */

export const careersContact = {
  email: "info@iot-fabrikken.com",
  phone: "+45 71 71 80 90",
};

export const careersIntro = {
  title: "Careers.",
  titleAccent: "Join our team.",
  lead: "Demand for our solutions is strong in Denmark and abroad. We are continually looking for people who can help with sales and product development.",
};

export const growthSection = {
  title: "We are growing — and we need more people.",
  body: [
    "We are a mix of developers and a driven sales and service team — and we are always looking for talented people who want to deliver the strongest solutions in their field to companies, municipalities, museums, churches and many more.",
    "You should enjoy a fast-paced environment and bring a good sense of humour.",
    "Get in touch if you think we cannot do without you.",
  ],
};

export type JobOpening = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  tagline: string;
  intro: string;
  roleTitle: string;
  responsibilities: string[];
  aboutYouIntro: string;
  aboutYou: string[];
  weOffer: string[];
  aboutCompany: string[];
  practical: { label: string; value: string }[];
  hiringContact?: {
    name: string;
    role: string;
    phone: string;
  };
  externalApplyUrl?: string;
};

export const openPositions: JobOpening[] = [
  {
    slug: "business-development-manager-germany",
    title: "Business Development Manager – Germany",
    location: "Germany & Jutland (flexible)",
    summary:
      "Drive sales and partnerships in Germany for our sensor and software platform. Fluent German required.",
    tagline:
      "Are you sharp at sales, fluent in German and ready to take a growing market by storm?",
    intro:
      "IoT Fabrikken is scaling our business in Germany — and we are looking for a strong sales profile to help build on that success. We work with intelligent sensors and software that document and optimise indoor climate, mould prevention, water damage and space management across industries. Data is our foundation — and the solution already makes a difference for customers in Germany.",
    roleTitle: "The role",
    responsibilities: [
      "You have experience building and running your own pipeline and customer base — and closing deals.",
      "You identify and contact the right decision-makers in selected niche industries.",
      "You run demos and drive sales processes — from first meeting to signed contract.",
      "You work closely with our head of sales and commercial leadership in Denmark (our office in Hørning).",
      "You take responsibility for winning new customers and developing existing relationships.",
      "You join an ambitious, energetic team in Denmark, and you will spend a large part of your time in Germany.",
      "The market has only just opened — there is plenty of potential to unlock and new customers to win.",
    ],
    aboutYouIntro:
      "You have a strong sales profile and thrive on opening doors and building relationships — including in a market that is still growing. You are tactical and strategic, and you understand how to turn technical solutions into concrete value for customers.",
    aboutYou: [
      "You speak and write fluent German — and can also work comfortably in English.",
      "You have B2B sales experience.",
      "You are good at explaining complex products in a simple, convincing way.",
      "You may have worked with technical solutions for property operations and proptech before.",
      "You can work flexibly between Germany and Jutland.",
      "You have a natural ability to build trust and long-term relationships.",
    ],
    weOffer: [
      "A strong, dedicated team — you are never on your own.",
      "A role with a high degree of freedom and significant responsibility.",
      "Good development opportunities in a scale-up with ambition and momentum.",
      "Fixed salary plus attractive commission.",
    ],
    aboutCompany: [
      "We are a Danish tech company with head office in Roskilde and a hub office in Hørning, founded in 2019. We are established in Denmark and have expanded across Europe — not least in Germany.",
      "Our solutions make it easy for customers to measure, analyse and document how their buildings are used — and to make decisions based on data, not gut feeling. Data prevents energy waste and damage.",
      "You get more than a job — you join a small, close and ambitious team that hits goals through structure, collaboration and good energy. We aim high, laugh a lot in everyday work and share a strong drive to do things properly.",
    ],
    practical: [
      { label: "Start date", value: "Q1 2026" },
      { label: "Location", value: "Flexible between Germany and Jutland" },
      { label: "Employment type", value: "Full-time" },
      {
        label: "Application deadline",
        value: "As soon as possible — we hire when we find the right person",
      },
      { label: "Apply by email", value: careersContact.email },
    ],
    hiringContact: {
      name: "Lars Qvistgaard",
      role: "Commercial director",
      phone: careersContact.phone,
    },
    externalApplyUrl: "https://www.jobindex.dk/vis-job/h1607083",
  },
];
