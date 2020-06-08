Feature: Login with valid data

  @ValidLogin
  Scenario: I should register on the site with valid data and make sure that the Payments Tab is displayed

    Given I am on the homepage click Login button
    When I type a valid username and password
    Then I should see the Payment Tab

