// cypress/e2e/steps/sample.steps.ts
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "@pages/HomePage";

const homePage = new HomePage();

Then("I check that the page is fully loaded", () => {
  homePage.getPageTitle().should("be.visible");
  homePage.getSearchField().should("be.visible");
  homePage.getSearchButton().should("be.visible");
  homePage.getFavoritesTitle().should("be.visible");
});
