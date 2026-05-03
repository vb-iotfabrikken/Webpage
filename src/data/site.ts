import type { Hub } from "./hubs/types";
import { platformHub } from "./hubs/platform";
import { modulesHub } from "./hubs/modules";
import { industriesHub } from "./hubs/industries";
import { sensorsHub } from "./hubs/sensors";
import { integrationsHub } from "./hubs/integrations";
import { pricingHub } from "./hubs/pricing";
import { compareHub } from "./hubs/compare";
import { roiHub } from "./hubs/roi";
import { faqHub } from "./hubs/faq";
import { caseStudiesHub } from "./hubs/caseStudies";
import { whitepapersHub } from "./hubs/whitepapers";
import { aboutHub } from "./hubs/about";
import { contactHub } from "./hubs/contact";
import { legalHub } from "./hubs/legal";
import { shopHub } from "./hubs/shop";

export {
  platformHub,
  modulesHub,
  industriesHub,
  sensorsHub,
  integrationsHub,
  pricingHub,
  compareHub,
  roiHub,
  faqHub,
  caseStudiesHub,
  whitepapersHub,
  aboutHub,
  contactHub,
  legalHub,
  shopHub,
};

export const allHubs: Hub[] = [
  platformHub,
  modulesHub,
  industriesHub,
  sensorsHub,
  integrationsHub,
  pricingHub,
  compareHub,
  roiHub,
  faqHub,
  caseStudiesHub,
  whitepapersHub,
  aboutHub,
  contactHub,
  legalHub,
  shopHub,
];
