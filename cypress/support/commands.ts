/// <reference types="cypress" />

declare global {
    namespace Cypress {
      interface Chainable {
          xpath<E extends Node = HTMLElement>(selector: string, options?: Partial<Loggable & Timeoutable>): Chainable<JQuery<E>>;
      }
    }
  }
  
export {}