/// <reference types="cypress" />
// ***********************************************

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

Cypress.Commands.add("sendPostRequest", (url: string, body: any, headers?: Record<string, string>) => {
  return cy.request({
    method: "POST",
    url,
    body,
    headers,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("sendDeleteRequest", (url: string, body: string, headers?: Record<string, string>) => {
  return cy.request({
    method: "DELETE",
    url: `${url}/${body}`,
    headers,
    failOnStatusCode: false,
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
