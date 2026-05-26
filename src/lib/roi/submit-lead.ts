import type { CalculatorTab, Currency } from "./constants";
import type { DeskInputs, DeskResults, EnergyInputs, EnergyResults } from "./calculations";

export type LeadPayload = {
  calculator: CalculatorTab;
  email: string;
  company?: string;
  currency: Currency;
  inputs: DeskInputs | EnergyInputs;
  results: DeskResults | EnergyResults;
  pageUrl: string;
};

/** Phase 1 stub — wire HubSpot / Formspree / custom API here later. */
export async function submitLead(_payload: LeadPayload): Promise<void> {
  // Intentionally no-op until CRM endpoint is configured.
  return Promise.resolve();
}
