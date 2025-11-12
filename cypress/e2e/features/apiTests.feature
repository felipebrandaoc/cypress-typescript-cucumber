# cypress/e2e/sample/sample.feature (or your original file)
@smoke
Feature: API Testing

    # Scenario: Search for all Movies through the API
    #     Given I have the application ready

    Scenario: Search for a Movie through the API
        Given I have the application up and health
        When I search for the "Harry Potter" movie
