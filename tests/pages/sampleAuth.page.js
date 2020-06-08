const NativePage = require('./native.page.js');
const homePageData = require('../files/testData/sampleHome.data.js');

class sampleAuthPage extends NativePage {

    get authPageElement() {
        return this.getPage('sampleAuth.locators');
    }

    openHomePage() {
        browser.url(homePageData['mainURL']);
    }

    openLoginForm() {
        const loginButton = $(this.authPageElement.loginButton);
        loginButton.click();

    }

    // waitInputDisplay() {
    //     this.authPageElement.emailInput.waitForDisplayed({timeout: 10000});
    // }


    loginWithValidData() {
        // browser.setTimeout({ 'implicit': 5000 });
        const emailInput = $(this.authPageElement.emailInput);
        emailInput.click();
        emailInput.setValue(homePageData["validLogin"]);

        const passwordInput = $(this.authPageElement.passwordInput);
        passwordInput.setValue(homePageData["validPassword"]);
        passwordInput.click();

        const submitButton = $(this.authPageElement.submitButton);
        submitButton.click();

    }

    paymentTabIsDisplayed() {

        const paymentTab = $(this.authPageElement.paymentTab);
        paymentTab.waitForDisplayed();

        return paymentTab.isDisplayed();
    }


}

module.exports = sampleAuthPage;
