Feature: Sign Up

  Scenario: User signs up with valid details
    Given I am on the sign-up page
    When I enter valid sign-up details
    And I click the sign-up button
    Then I should be successfully signed up

  