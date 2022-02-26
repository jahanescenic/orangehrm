Feature: Login to OrangeHRM
  Test Login

  Background: Visit the OrangeHRM App
    Given I visit OrangeHRM
  
  Scenario: Failed Login with random username and password
    When I login with "random" credentials
    Then I should get error message

  Scenario: Successful Login with admin credentials
    When I login with "correct" credentials
    Then I should get my user on top left corner

    