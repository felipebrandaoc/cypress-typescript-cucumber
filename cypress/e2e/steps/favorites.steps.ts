import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SearchPage } from "@pages/SearchPage";
import { After } from "@badeball/cypress-cucumber-preprocessor";

const searchPage = new SearchPage();

// Reseting Favorites
After( { tags: "@favorites" }, () => {
  cy.log('Reseting Favorites...');

  // Find all "Remove from Favorites" buttons and click on them
  cy.get('button')
    .filter(':contains("Remove from Favorites")')
    .each(($btn) => {
      cy.wrap($btn).click();
    });
});

When('I click to set {string} to favorites', (movieName: string) => {
  // Intercept the favorite API to secute that it's being called
  cy.intercept('POST', '/favorites').as('addFav');

  cy.get('div[style*="display: flex"]').each(($el) => {
    const title = $el.find('h3').text().trim();

    // Check if this card's title matches the one we want
    if (title === movieName) {
      cy.log(`🎬 Found: ${title}`);

      // Click the "Add to Favorites" button inside this movie card
      cy.wrap($el).find('button').click();

      return false; // stops the .each() loop
    }
  });

  // Assert on Favorite API
  cy.wait('@addFav').its('response.statusCode').should('eq', 200);
});

When('I click to set the first result to favorites', () => {
  searchPage.getAddToFavorites().eq(0).should("be.visible").click();
});

When('I click to set the first three results to favorites', () => {
  cy.get('div[style*="display: flex"]')
      .each(($el, index) => {
        if (index < 3) {
          const title = $el.find('h3').text().trim();

          cy.wrap($el)
            .find('button')
            .should('contain.text', 'Add to Favorites')
            .click();
        }
      });
});

Then('I verify that the first three results are favorites', () => {
  cy.get('div[style*="display: flex"]')
      .each(($el, index) => {
        if (index < 3) {
          const title = $el.find('h3').text().trim();

          // Verifying if the button has changed to Remove
          cy.wrap($el)
            .find('button')
            .should('contain.text', 'Remove from Favorites');
        }
      });
});

When('I click on Remove from Favorites button', () => {
  searchPage.getRemoveFromFavorites().should("be.visible").click();
});

When('I click on Remove button from Favorites list', () => {
  searchPage.getRemoveButton().should("be.visible").click();
});

Then('I verify that the favorites list is empty', () => {
  cy.get('h2')
  .invoke('text')
  .should((text: string) => {
    expect(text).to.match(/\(\d+\)/);    // ensures it matches
  })
  .then((text: string) => {
    const count = Number(text.match(/\((\d+)\)/)![1]);
    expect(count).to.eq(0);
  });
});

Then('I verify that remove from favorites button is displayed', () => {
  searchPage.getRemoveFromFavorites().should("be.visible");
});
