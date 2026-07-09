/**

 * Careers content for `/{lang}/about/careers/` and individual role pages.

 */



import { defaultLang, type Lang } from "./lang";

import { defaultContact, getLocaleContact, isLocaleContactEmail } from "./contact";

import type { TeamDepartment } from "./team";



/** @deprecated Use `getLocaleContact(lang)` for locale-aware contact details. */

export const careersContact = defaultContact;



export function getCareersContact(lang: Lang = defaultLang) {

  return getLocaleContact(lang);

}



/** Hero lead for `/en/about/careers/` (title and accent are set inline on the page). */

export const careersIntro = {

  lead: "Demand for our indoor climate and building solutions is growing rapidly. We are continually looking for passionate people to join our expanding team.",

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

  /** Team page section where the hiring placeholder card appears. */
  department: TeamDepartment;

};



export const openPositions: JobOpening[] = [];



const careersIntroI18n: Partial<Record<Lang, { lead: string }>> = {

  da: { lead: "Efterspørgslen efter vores indeklima- og bygningsløsninger vokser hurtigt. Vi leder løbende efter passionerede mennesker til vores voksende team." },

  de: { lead: "Die Nachfrage nach unseren Raumklima- und Gebäudelösungen wächst rasant. Wir suchen laufend leidenschaftliche Menschen für unser wachsendes Team." },

  sv: { lead: "Efterfrågan på våra inomhusklimat- och byggnadslösningar växer snabbt. Vi söker löpande passionerade människor till vårt växande team." },

};



export function getCareersIntro(lang: Lang = defaultLang): { lead: string } {

  return careersIntroI18n[lang] ?? careersIntro;

}



export function getOpenPositions(lang: Lang = defaultLang): JobOpening[] {

  const contact = getLocaleContact(lang);

  return openPositions.map((job) => ({

    ...job,

    practical: job.practical.map((row) =>

      isLocaleContactEmail(row.value) || row.value === defaultContact.email

        ? { ...row, value: contact.email }

        : row,

    ),

  }));

}

