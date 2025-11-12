import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "@pages/HomePage";
import { SearchPage } from "@pages/SearchPage";

const homePage = new HomePage();
const searchPage = new SearchPage

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

When('I click on Load More button', () => {
  cy.intercept('GET', '**/movies/search*').as('searchPaged');

  searchPage.getLoadMoreButton().should("be.visible").click();
});

Then("I verify that more movies are being shown on page {int}", (page: number) => {
  cy.wait('@searchPaged').then(({ request }) => {
    const u = new URL(request.url);
    expect(u.pathname).to.include('/movies/search');
    expect(u.searchParams.get('page')).to.eq(String(page));
  });
});
