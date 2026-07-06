/**
 * Legacy WordPress path → new-site path (locale-relative, leading slash).
 * Sourced from Yoast sitemaps (npm run crawl-legacy-sitemaps) and manual review.
 */
import type { Lang } from "./lang";

export type LegacyHost = "iot-fabrikken.uk" | "iot-fabrikken.com" | "iot-fabrikken.de" | "iot-fabrikken.se";

/** Host → default locale on the new site. */
export const LEGACY_HOST_LOCALE: Record<LegacyHost, Lang> = {
  "iot-fabrikken.uk": "en",
  "iot-fabrikken.com": "da",
  "iot-fabrikken.de": "de",
  "iot-fabrikken.se": "sv",
};

/** Per-host pathname maps (legacy path → new path without locale prefix). */
export const LEGACY_PATH_BY_HOST: Record<LegacyHost, Readonly<Record<string, string>>> = {
  "iot-fabrikken.uk": {
    "/": "/",
    "/cases/": "/case-studies/",
    "/about-us/": "/about/",
    "/book-a-demo/": "/contact/book-demo/",
    "/contact/": "/contact/",
    "/get-an-offer/": "/get-an-offer/",
    "/indoor-climate/": "/modules/indoor-climate/",
    "/water-detection/": "/modules/water-detection/",
    "/space-management/": "/modules/space-management/",
    "/partners/": "/about/partners/",
    "/privacy-policy/": "/legal/privacy/",
    "/product-sheets/": "/sensors/product-sheets/",
    "/jobs-at-iot-fabrikken/": "/about/careers/",
    "/knowledge-hub/": "/articles/",
    "/indoor-climate-sensor/": "/sensors/",
    "/indoor-climate-in-churches/": "/industries/churches/",
    "/indoor-climate-in-classrooms/": "/industries/schools/",
    "/indoor-climate-in-educational-institutions/": "/industries/schools/",
    "/indoor-climate-in-offices/": "/industries/offices/",
    "/space-management-and-booking-systems/": "/modules/space-management/",
    "/space-management-in-meeting-rooms/": "/modules/space-management/",
    "/space-management-software/": "/modules/space-management/",
    "/the-hybrid-workplace/": "/modules/space-management/",
    "/work-stations/": "/modules/space-management/",
    "/cafm/": "/industries/fm-companies/",
    "/cost-optimisation/": "/roi/",
    "/general-conditions/": "/legal/terms/",
    "/epbd/": "/articles/",
    "/vdi-6022-hygiene-standard-what-operators-need-to-know-and-how-digitalization-helps/": "/articles/",
    "/thank-you-for-your-inquiry/": "/contact/",
    "/sitemap/": "/",
    "/category/uncategorized/": "/articles/",
    "/author/acend/": "/about/",
  },
  "iot-fabrikken.com": {
    "/": "/",
    "/cases/": "/case-studies/",
    "/book-en-demo/": "/contact/book-demo/",
    "/kontakt/": "/contact/",
    "/om-os/": "/about/",
    "/faa-et-tilbud/": "/get-an-offer/",
    "/indeklima/": "/modules/indoor-climate/",
    "/water-detection/": "/modules/water-detection/",
    "/space-management/": "/modules/space-management/",
    "/space-management-ny/": "/modules/space-management/",
    "/space-management-og-booking-system/": "/modules/space-management/",
    "/space-management-software/": "/modules/space-management/",
    "/space-management-i-moedelokaler/": "/modules/space-management/",
    "/sensorer/": "/sensors/",
    "/partnere/": "/about/partners/",
    "/produktark/": "/sensors/product-sheets/",
    "/privacy-policy/": "/legal/privacy/",
    "/generelle-vilkaar/": "/legal/terms/",
    "/job/": "/about/careers/",
    "/integrationer/": "/integrations/",
    "/funktioner/": "/platform/",
    "/use-cases/": "/articles/",
    "/indeklima-maaler/": "/sensors/",
    "/indeklima-i-kirker/": "/industries/churches/",
    "/indeklima-paa-kontor/": "/industries/offices/",
    "/indeklima-paa-uddannelsesinstitutioner/": "/industries/schools/",
    "/klasselokaler-og-institutioner/": "/industries/schools/",
    "/luftfugtighed-i-kirker/": "/industries/churches/",
    "/hybrid-arbejdsplads/": "/modules/space-management/",
    "/hydbrid-arbejdsplads/": "/modules/space-management/",
    "/arbejdsstationer/": "/modules/space-management/",
    "/cafm/": "/industries/fm-companies/",
    "/omkostningsoptimering/": "/roi/",
    "/epbd/": "/articles/",
    "/case-kategori/indeklima/": "/case-studies/",
    "/case-kategori/space-management/": "/case-studies/",
    "/l_kategori/use-cases/": "/articles/",
    "/tak-for-din-henvendelse/": "/contact/",
    "/sitemap/": "/",
    "/ret-titlen-her/": "/",
    "/jobopslag/business-development-manager-tyskland/": "/about/careers/",
  },
  "iot-fabrikken.de": {
    "/": "/",
    "/raumklima/": "/modules/indoor-climate/",
    "/space-management/": "/modules/space-management/",
    "/raumklima-messgerat/": "/sensors/",
    "/projekte/": "/case-studies/",
    "/demo-buchen/": "/contact/book-demo/",
    "/kontakt/": "/contact/",
    "/impressum/": "/legal/impressum/",
    "/privacy-policy/": "/legal/privacy/",
    "/archivistica/": "/events/archivistica/",
    "/partner/": "/about/partners/",
    "/jobs-bei-iot/": "/about/careers/",
    "/produktblaetter/": "/sensors/product-sheets/",
    "/uber-uns/": "/about/",
    "/angebot-einholen/": "/get-an-offer/",
    "/allgemeine-geschaeftsbedingungen/": "/legal/terms/",
    "/wissenszentrum/": "/articles/",
    "/innenraumklima-in-kirchen/": "/industries/churches/",
    "/raumklima-in-bueros/": "/industries/offices/",
    "/raumklima-in-bildungseinrichtungen/": "/industries/schools/",
    "/klassenzimmern-und-einrichtungen/": "/industries/schools/",
    "/space-management-in-besprechungsraeumen/": "/modules/space-management/",
    "/space-management-software/": "/modules/space-management/",
    "/space-management-und-buchungssystem/": "/modules/space-management/",
    "/hybride-arbeitsplatz/": "/modules/space-management/",
    "/arbeitsstationen/": "/modules/space-management/",
    "/cafm/": "/industries/fm-companies/",
    "/kostenoptimierung/": "/roi/",
    "/epbd/": "/articles/",
    "/vdi-6022-hygienestandard-was-betreiber-wissen-muessen-und-wie-digitalisierung-hilft/": "/articles/",
    "/danke-fuer-ihre-anfrage/": "/contact/",
    "/sitemap/": "/",
    "/category/raumklima/": "/modules/indoor-climate/",
    "/author/lars/": "/about/",
  },
  "iot-fabrikken.se": {
    "/": "/",
    "/projekt/": "/case-studies/",
    "/kontakt/": "/contact/",
    "/boka-en-demo/": "/contact/book-demo/",
    "/inomhusklimat/": "/modules/indoor-climate/",
    "/space-management/": "/modules/space-management/",
    "/inomhusklimatmatare/": "/sensors/",
    "/sensorer/": "/sensors/",
    "/privacy-policy/": "/legal/privacy/",
    "/allmanna-villkor/": "/legal/terms/",
    "/jobb-hos-iot-fabrikken/": "/about/careers/",
    "/partner/": "/about/partners/",
    "/om-oss/": "/about/",
    "/faa-en-offert/": "/get-an-offer/",
    "/produktblad/": "/sensors/product-sheets/",
    "/inomhusklimat-i-kyrkor/": "/industries/churches/",
    "/inomhusklimat-pa-kontor/": "/industries/offices/",
    "/inomhusklimat-pa-utbildningsinstitutioner/": "/industries/schools/",
    "/klassrum-och-institutioner/": "/industries/schools/",
    "/space-management-i-motesrum/": "/modules/space-management/",
    "/space-management-och-bokningssystem/": "/modules/space-management/",
    "/space-management-software/": "/modules/space-management/",
    "/hybrida-arbetsplatsen/": "/modules/space-management/",
    "/arbetsstation/": "/modules/space-management/",
    "/cafm/": "/industries/fm-companies/",
    "/kostnadsoptimering/": "/roi/",
    "/epbd/": "/articles/",
    "/tack-for-din-forfragan/": "/contact/",
    "/sitemap/": "/",
  },
};

/** Resolve a legacy pathname on a host to a full canonical URL. */
export function resolveLegacyPath(
  host: LegacyHost,
  pathname: string,
  canonicalSite = "https://iot-fabrikken.com",
): string | null {
  const locale = LEGACY_HOST_LOCALE[host];
  const map = LEGACY_PATH_BY_HOST[host];
  const rel = map[pathname];
  if (!rel) return null;
  const langPath = rel === "/" ? `/${locale}/` : `/${locale}${rel}`;
  return `${canonicalSite}${langPath}`;
}

/** Bare-path redirects for old Danish WordPress on iot-fabrikken.com (same host as new site). */
export function getLegacyComBarePathMap(): Record<string, string> {
  const locale = LEGACY_HOST_LOCALE["iot-fabrikken.com"];
  const entries: [string, string][] = [];

  for (const [legacyPath, relTarget] of Object.entries(LEGACY_PATH_BY_HOST["iot-fabrikken.com"])) {
    if (legacyPath === "/") continue;
    const target = relTarget === "/" ? `/${locale}/` : `/${locale}${relTarget}`;
    entries.push([legacyPath, target]);
  }

  return Object.fromEntries(entries);
}
