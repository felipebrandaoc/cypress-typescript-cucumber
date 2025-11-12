// cypress/e2e/steps/sample.steps.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have the application up and health", () => {
  cy.sendGetRequest(`http://localhost:3000/health`).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.status).to.equal("ok");
  })
});

When('I search for the {string} movie', (movieName: string) => {
  cy.searchMovieByName(`http://localhost:3000/movies/search`, movieName).then((response: any) => {
    Cypress.env("movieResponse", response.body);
  })
});

When('I search for all favorite movies', () => {
  cy.sendGetRequest(`http://localhost:3000/favorites`);
});

When('I do a Health check', () => {
  cy.sendGetRequest(`http://localhost:3000/health`);
});

Then("", () => {
  
});
