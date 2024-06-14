// Import custom config
import { TEST_CONFIG } from "../config";

export function openHindiPage() {
  cy.get(TEST_CONFIG.buttonHindi).click();
}

export function openTamilPage() {
  cy.get(TEST_CONFIG.buttonTamil).click();
}

export function openTeluguPage() {
  cy.get(TEST_CONFIG.buttonTelugu).click();
}