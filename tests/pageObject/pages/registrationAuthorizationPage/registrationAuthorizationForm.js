const getSelector = require('../../../helper/getSelector');

class RegistrationAuthorizationForm {
    constructor() {
        this.elements = {
            'Регистрация': this.registrationButton,
            'Поле Почта Авторизация': this.emailInputAuthorization,
            'Поле Почта Регистрация' : this.emailInputRegistration,
            'Поле Пароль Авторизация': this.passwordInputAuthorization,
            'Поле Пароль Регистрация' : this.passwordInputRegistration,
            'Чекбокс Получать Информацию': this.getInformationCheckbox,
            'Зарегистрироваться': this.submitButton,
            'Войти': this.signInButton,
            'Регистрация ОК': this.registrationOK,
            'Регистрация Facebook': this.registrationFacebook,
            'Регистрация VK': this.registrationVK,
            'Регистрация MailRU': this.registrationMailRU,
            'Регистрация Yandex': this.registrationYandex,
            'Регистрация Google+': this.registrationGooglePlus,
            'Регистрация Telegram': this.registrationTelegram,
            //Элементы на странице авторизации через VK
            'Поле Логин VK': this.loginVKInput,
            'Поле Пароль VK': this.passwordVKInput,
            'Войти VK': this.submitVKButton,
            'Выбор Валюты': this.currencySelector,
            'Евро': this.euroCurrency,
            'Российский рубль': this.rusRubleCurrency,


        };

    }

    get emailInputRegistration(){
        return ('//input[@data-test="registr_email_field"]');
    }

    get registrationButton() {
        return ('//button[@data-test="main_register"]');
    }

    get signInButton() {
        return ('//button[@type="submit"]');

    }

    get emailInputAuthorization() {
        return ('//input[@data-test="email-field"]');

    }

    get getInformationCheckbox() {
        return getSelector('//div[@data-test="registr_promotion_info"]','//div[@data-test="registr_promotion_info"]', '//div[@data-test="registr_promotion_info"]/label', '//div[@data-test="registr_promotion_info"]/label');
    }

    get submitButton() {
        return ('[data-test="registr_submit_btn"]');
    }

    get passwordInputAuthorization() {
        return ('//input[@data-test="password-field"]');
    }
    get passwordInputRegistration(){
        return ('//input[@data-test="registr_passwd_field"]');
    }

    get registrationVK() {
        return ('[data-test="register_vkontakte"]');
    }

    get registrationOK() {
        return ('[data-test="register_odnoklassniki"]');
    }

    get registrationFacebook() {
        return ('[data-test="register_facebook"]');
    }

    get registrationMailRU() {
        return ('[data-test="register_mailRu"]');
    }

    get registrationGooglePlus() {
        return ('[data-test="register_googleplus"]');
    }

    get registrationYandex() {
        return ('[data-test="register_yandex"]');
    }

    get registrationTelegram() {
        return ('[data-test="register_telegram"]');
    }

    get loginVKInput() {
        return getSelector('//div[@class="oauth_form"]//input[@name="email"]', '//input[@name="email"]', '//input[@type="text"]');
    }

    get passwordVKInput() {
        return getSelector('//div[@class="oauth_form"]//input[@name="pass"]', '//input[@name="pass"]', '//input[@name="pass"]');
    }

    get submitVKButton() {
        return getSelector('[type="submit"]', '//input[@class="button"]', '//input[@class="button"]');
    }

    get currencySelector() {
        return ('[data-test="select_currency"]');
    }

    get euroCurrency() {
        return ('//*[@data-test="currency_eur"]/..');
    }

    get rusRubleCurrency() {
        return ('//*[@data-test="currency_rub"]/..');
    }
}


module.exports = new RegistrationAuthorizationForm();