# cypress/e2e/sample/sample.feature (or your original file)
@smoke
Feature: Movie Search - Basic Navigation

  Scenario: Search for a Movie
    Given I open the homepage
    Then I check that the page is fully loaded
