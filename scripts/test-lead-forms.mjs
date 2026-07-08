#!/usr/bin/env node
/**
 * Playwright smoke checks for all lead forms (no reload on submit).
 *
 * Usage:
 *   1. npm run dev   (separate terminal)
 *   2. node scripts/test-lead-forms.mjs
 *
 * Options:
 *   --base=http://…   Dev server origin (default: http://localhost:4321)
 */
import { chromium } from "playwright";

const base =
  process.argv.find((a) => a.startsWith("--base="))?.split("=")[1] ??
  "http://localhost:4321";

async function waitForVisible(locator) {
  await locator.waitFor({ state: "visible", timeout: 10000 });
}

async function assertNoNavigation(page, urlBefore, action) {
  await action();
  await page.waitForTimeout(400);
  const urlAfter = page.url();
  if (urlAfter !== urlBefore) {
    throw new Error(`Page navigated: ${urlBefore} → ${urlAfter}`);
  }
}

async function testContactForm(page, path, label) {
  const url = `${base}${path}`;
  console.log(`Testing ${label}: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector('[data-contact-form][data-lead-form-bound="true"]', {
    timeout: 15000,
  });
  const form = page.locator("[data-contact-form]");
  const urlBefore = page.url();
  await assertNoNavigation(page, urlBefore, async () => {
    await form.locator('button[type="submit"]').click();
  });
  await waitForVisible(form.locator('[data-field-error="firstName"]'));
  console.log(`  ${label} → bound, empty submit shows errors, no reload`);
}

async function testOfferForm(page) {
  const path = "/en/get-an-offer";
  const url = `${base}${path}`;
  console.log(`Testing offer form: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector('[data-offer-form][data-lead-form-bound="true"]', {
    timeout: 15000,
  });
  const form = page.locator("[data-offer-form]");
  const urlBefore = page.url();
  await assertNoNavigation(page, urlBefore, async () => {
    await form.locator('button[type="submit"]').click();
  });
  await waitForVisible(form.locator('[data-field-error="firstName"]'));
  console.log("  offer form → bound, empty submit shows errors, no reload");
}

async function testRoiEmailForm(page) {
  const path = "/en/roi/calculator";
  const url = `${base}${path}`;
  console.log(`Testing ROI calculator: ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector('[data-roi-calculator][data-roi-calculator-bound="true"]', {
    timeout: 15000,
  });
  const form = page.locator("[data-roi-email-form]");
  const urlBefore = page.url();
  await assertNoNavigation(page, urlBefore, async () => {
    await form.locator('button[type="submit"]').click();
  });
  await waitForVisible(form.locator('[data-field-error="firstName"]'));
  console.log("  ROI email form → bound, empty submit shows errors, no reload");
}

async function testBookDemoExtras(page) {
  const bookDemoUrl = `${base}/en/contact/book-demo`;
  await page.goto(bookDemoUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector('[data-contact-form][data-lead-form-bound="true"]', {
    timeout: 15000,
  });
  const form = page.locator("[data-contact-form]");

  await form.locator('[name="firstName"]').fill("Test");
  await form.locator('[name="lastName"]').fill("User");
  const email = form.locator('[name="email"]');
  await email.fill("test@example.com");
  await email.fill("");
  const urlBefore = page.url();
  await assertNoNavigation(page, urlBefore, async () => {
    await form.locator('button[type="submit"]').click();
  });
  await waitForVisible(form.locator('[data-field-error="email"]'));
  console.log("  book-demo → cleared email shows error, no reload");

  await page.goto(bookDemoUrl, { waitUntil: "domcontentloaded" });
  await page.waitForSelector('[data-contact-form][data-lead-form-bound="true"]');
  await form.locator('[name="firstName"]').click();
  await form.locator('[name="firstName"]').fill("Test");
  await form.locator('[name="lastName"]').fill("User");
  await form.locator('[name="email"]').fill("test@example.com");
  await assertNoNavigation(page, page.url(), async () => {
    await form.locator('button[type="submit"]').click();
  });
  const alert = form.locator("[data-contact-error]");
  await waitForVisible(alert);
  const text = (await alert.textContent()) ?? "";
  if (!/wait a moment|vent et øjeblik|bitte warten|vänta en stund/i.test(text)) {
    throw new Error(`Expected too_soon message, got: ${text}`);
  }
  console.log("  book-demo → fast submit shows too_soon, no reload");
}

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await testContactForm(page, "/en/contact/book-demo", "book-demo");
    await testContactForm(page, "/en/contact/sales", "sales");
    await testOfferForm(page);
    await testRoiEmailForm(page);
    await testBookDemoExtras(page);
    console.log("All lead form checks passed.");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
