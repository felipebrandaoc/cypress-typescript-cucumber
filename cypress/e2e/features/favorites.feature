@smoke 
Feature: Favorite Movies

  @favorites
  Scenario: Search for a Movie and Set to Favorites
    Given I open the homepage
    When I type "Harry Potter" in the search bar
    When I click on the Search button
    Then I click to set "Harry Potter and the Deathly Hallows: Part 2" to favorites    

  @favorites
  Scenario: Adding multiple movies to Favorites
    Given I open the homepage
    When I type "Star Wars" in the search bar
    When I click on the Search button
    When I click to set the first three results to favorites
    Then I verify that the first three results are favorites

  @deleteFavorite
  Scenario: Removing a Movie from the Favorites
    Given I open the homepage
    When I click on Remove button from Favorites list
    Then I verify that the favorites list is empty
