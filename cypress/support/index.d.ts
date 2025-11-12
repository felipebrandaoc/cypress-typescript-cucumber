/// <reference types="cypress" />
export {}; // make this a module for TS

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Sends a GET request with optional headers.
       * @example cy.sendGetRequest('/api/users')
       */
      sendGetRequest(url: string, headers?: Record<string, string>): Chainable<Cypress.Response<any>>;

      sendPostRequest(url: string, body: string, headers?: Record<string, string>): Chainable<Cypress.Response<any>>;

      sendDeleteRequest(url: string, body: string, headers?: Record<string, string>): Chainable<Cypress.Response<any>>;

      searchMovieByName(url: string, movieName, headers?: Record<string, string>);
    }
  }
}
