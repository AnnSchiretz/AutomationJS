const {Given, When, Then} = require('cucumber');
const assert = require('assert').strict;

const AuthPage = require('../../pages/sampleAuth.page.js');
const auth = new AuthPage();


Given(/^Я нажимаю кнопку входа в аккаунт$/, () => {

    auth.openLoginForm();

});

When(/^Я ввожу валидные логин и пароль$/, () => {
    auth.loginWithValidData();
});


Then(/^Я должен увидеть профайл пользователя$/, () => {
    auth.profileTabIsDisplayed();
    assert.strictEqual(auth.profileTabIsDisplayed(), true, "Профайл пользователя не отображается");

});
Given(/^Я нахожусь на главной странице сайта$/, function () {
    auth.openHomePage();
});