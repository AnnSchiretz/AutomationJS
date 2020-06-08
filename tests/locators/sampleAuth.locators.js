class authLocators {
    constructor() {
        this.loginButton = "//a[@class='user-top__signin-ic-wr']";
        this.emailInput = "//input[@id='email']";
        this.passwordInput = "//input[@id='password']";
        this.submitButton = "//button[@type='submit']";
        this.paymentTab = "//div[@class='payment']";
    }
}

module.exports = authLocators;
