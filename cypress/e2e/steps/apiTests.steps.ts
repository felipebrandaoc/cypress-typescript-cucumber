import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

const movieToFavoritesBody = {
      "Title": "Harry Potter and the Deathly Hallows: Part 2",
      "Year": "2011",
      "imdbID": "tt1201607",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg"
};

// Adding Favorite
Before( { tags: "@deleteFavorite" }, () => {
  cy.log('Adding one movie to Favorites...');

  cy.request({
    method: "POST",
    url: "http://localhost:3000/favorites",
    body: movieToFavoritesBody
  });
});

// Removing Favorite
After( { tags: "@addFavorite" }, () => {
  cy.log('Removing one movie to Favorites...');

  cy.request({
    method: "DELETE",
    url: `http://localhost:3000/favorites/${movieToFavoritesBody.imdbID}`,
  });
});

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
  cy.sendGetRequest(`http://localhost:3000/favorites`).then(response => {
    expect(response.status).to.equal(200);
  })
});

When('I do a Health check', () => {
  cy.sendGetRequest(`http://localhost:3000/health`).then(response => {
    expect(response.status).to.equal(200);
  })
});

Then("I verify that all movie data is there", () => {
  expect(Cypress.env("movieResponse").movies[0].Title).to.not.be.empty
  expect(Cypress.env("movieResponse").movies[0].Year).to.not.be.empty
  expect(Cypress.env("movieResponse").movies[0].imdbID).to.not.be.empty
  expect(Cypress.env("movieResponse").movies[0].Type).to.not.be.empty
  expect(Cypress.env("movieResponse").movies[0].Poster).to.not.be.empty
});

When('I add a movie to the favorites', () => {
  cy.sendPostRequest(`http://localhost:3000/favorites`, movieToFavoritesBody).then(response => {
    expect(response.status).to.equal(200);
  })
});

When('I add an invalid movie to the favorites', () => {
  cy.sendPostRequest(`http://localhost:3000/favorites`, "asdasd123").then(response => {
    expect(response.status).to.equal(400);
  })
});

When('I Delete a movie from the favorites list', () => {
  cy.sendDeleteRequest(`http://localhost:3000/favorites`, movieToFavoritesBody.imdbID).then(response => {
    expect(response.status).to.equal(200);
  })
});

When('I Delete an invalid movie from the favorites list', () => {
  cy.sendDeleteRequest(`http://localhost:3000/favorites`, "asdasd123").then(response => {
    expect(response.status).to.equal(404);
    expect(response.body.error).to.equal("Movie not found");
  })
});

Then("I verify the error Movie not found!", () => {
  expect(Cypress.env("movieResponse").error).to.equal("Movie not found!")
});
