@smoke @API 
Feature: API Testing

    Scenario: Search for a Movie through the API
        Given I have the application up and health
        When I search for the "Harry Potter" movie
        Then I verify that all movie data is there

    Scenario: Search for an invalid Movie through the API
        Given I have the application up and health
        When I search for the "asdfg123" movie
        Then I verify the error Movie not found!

    Scenario: Search for all Favorites through the API
        Given I have the application up and health
        Then I search for all favorite movies

    @addFavorite
    Scenario: Add Movie to Favorites through the API
        Given I have the application up and health
        When I add a movie to the favorites

    Scenario: Add Movie to Favorites through the API
        Given I have the application up and health
        When I add an invalid movie to the favorites

    @deleteFavorite
    Scenario: Delete Movie from Favorites through the API
        Given I have the application up and health
        When I Delete a movie from the favorites list

    Scenario: Delete invalid Movie from Favorites through the API
        Given I have the application up and health
        When I Delete an invalid movie from the favorites list
