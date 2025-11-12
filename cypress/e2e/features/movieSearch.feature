# cypress/e2e/sample/sample.feature (or your original file)
@smoke
Feature: Movie Search - Basic Navigation

  Scenario: Search for a Movie
    Given I open the homepage
    When I type "Harry Potter" in the search bar
    When I click on the Search button
    Then I verify that at least one result was found
