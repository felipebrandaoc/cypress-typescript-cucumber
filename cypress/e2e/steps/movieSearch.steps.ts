// cypress/e2e/steps/sample.steps.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "@pages/HomePage";

const homePage = new HomePage();

Given("I open the homepage", () => {
  cy.visit("http://localhost:3001/");
  homePage.getPageTitle().should("be.visible");
});

When('I type {string} in the search bar', (movieName: string) => {
  homePage.getSearchField().should("be.visible").type(movieName);
});

When('I click on the Search button', () => {
  homePage.getSearchButton().should("be.visible").click();
});

Then("I verify that at least one result was found", () => {
  cy.get('h3:contains("Harry Potter and the Deathly Hallows: Part 2")').should("be.visible");
});

Then("I verify that no results were found", () => {
  cy.get('img').should("not.exist");
});
