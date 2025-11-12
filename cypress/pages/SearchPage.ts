export class SearchPage {

  getAddToFavorites() {
    return cy.contains('button', 'Add to Favorites');
  }

  getRemoveFromFavorites() {
    return cy.contains('button', 'Remove from Favorites');
  }

  getRemoveButton() {
    return cy.contains('button', 'Remove');
  }

  getLoadMoreButton() {
    return cy.contains('button', 'Load More');
  }
}

export default new SearchPage();
