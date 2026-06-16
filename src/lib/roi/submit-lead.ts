import type { CalculatorTab, Currency } from "./constants";
import type { DeskInputs, DeskResults, EnergyInputs, EnergyResults } from "./calculations";

export type LeadPayload = {
  calculator: CalculatorTab;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
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

/**
 * Lightweight contact request fired when a prospect is disqualified from the
 * full sensor rollout. Sales follows up with a custom proposal.
 */
export type ConsultRequestPayload = {
  reason: "disqualified-roi";
  calculator: CalculatorTab;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currency: Currency;
  inputs: DeskInputs | EnergyInputs;
  results: DeskResults | EnergyResults;
  pageUrl: string;
};

/** Phase 1 stub — wire to the same CRM endpoint with a different "lead source" tag. */
export async function submitConsultRequest(
  _payload: ConsultRequestPayload,
): Promise<void> {
  return Promise.resolve();
}
