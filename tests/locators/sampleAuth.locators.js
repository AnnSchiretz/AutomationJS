class authLocators {
    constructor() {
        this.loginButton = "//a[@data-test='login_button']";
        this.emailInput = "//input[@name='email']";
        this.passwordInput = "//input[@name='password']";
        this.submitButton = "//button[@type='submit']";
        this.profile = "//*[@data-test='main_profile_btn']";

    }
}

module.exports = authLocators;
