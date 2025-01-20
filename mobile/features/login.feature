Feature: Login

  Scenario: User logs in with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in

  Scenario: User fails to log in with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message saying