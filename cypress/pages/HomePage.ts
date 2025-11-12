export class HomePage {

  getPageTitle() {
    return cy.contains('h1', 'Movie Search');
  }

  getFavoritesTitle() {
    return cy.contains('h2', 'Favorites (');
  }

  getSearchButton() {
    return cy.contains('button', 'Search');
  }

  getSearchField() {
    return cy.get('input[placeholder="Search movies..."]');
  }
}

export default new HomePage();
