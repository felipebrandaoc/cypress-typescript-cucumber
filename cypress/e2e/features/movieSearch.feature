@smoke
Feature: Movie Search - Basic Navigation

  Scenario: Search for a Movie
    Given I open the homepage
    When I type "Harry Potter" in the search bar
    When I click on the Search button
    Then I verify that at least one result was found

  Scenario: Search for an invalid Movie
    Given I open the homepage
    When I type "!@#$" in the search bar
    When I click on the Search button
    Then I verify that no results were found

  Scenario: Search for an empty Movie
    Given I open the homepage
    When I click on the Search button
    Then I verify that no results were found
