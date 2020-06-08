const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;

const AuthPage = require('../../pages/sampleAuth.page.js');
const auth = new AuthPage();


Given(/^I am on the homepage click Login button$/, () => {
    auth.openHomePage();
    auth.openLoginForm();
});

When(/^I type a valid username and password$/, () => {
    auth.loginWithValidData();
});


Then(/^I should see the Payment Tab$/, () => {
    // auth.paymentTabIsDisplayed();
    assert.strictEqual(auth.paymentTabIsDisplayed(),true, "Payment Tab is not displayed");
});
