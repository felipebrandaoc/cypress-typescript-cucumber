/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("sendGetRequest", (url: string, headers?: Record<string, string>) => {
  return cy.request({
    method: "GET",
    url,
    qs: {
      apikey: Cypress.env("OMDB_API_KEY"),
    },
    headers,
  });
});

Cypress.Commands.add("sendPostRequest", (url: string, body: string, headers?: Record<string, string>) => {
  return cy.request({
    method: "POST",
    url,
    qs: {
      apikey: Cypress.env("OMDB_API_KEY"),
    },
    body,
    headers,
  });
});

Cypress.Commands.add("sendDeleteRequest", (url: string, body: string, headers?: Record<string, string>) => {
  return cy.request({
    method: "DELETE",
    url,
    qs: {
      imdbID: "",
      apikey: Cypress.env("OMDB_API_KEY"),
    },
    headers,
  });
});

Cypress.Commands.add("searchMovieByName", (url: string, movieName, headers?: Record<string, string>) => {
  return cy.request({
    method: "GET",
    url,
    qs: {
      apikey: Cypress.env("OMDB_API_KEY"),
      q: movieName,
      page: 1,
    },
    headers,
  });
});