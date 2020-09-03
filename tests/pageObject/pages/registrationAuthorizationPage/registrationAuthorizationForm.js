class RegistrationAuthorizationForm {
    constructor() {
        this.elements = {
            'Регистрация': this.registrationButton,
            'Поле Почта': this.emailInput,
            'Поле Пароль': this.passwordInput,
            'Чекбокс Получать информацию': this.getInformationCheckbox,
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
            'Войти VK': this.submitVKButton


        };

    }


    get registrationButton() {
        return ('[data-test="main_register"]');
    }

    get signInButton() {
        return ('[data-test="enter_submit"]');
    }

    get emailInput() {
        return ('[name="email"]');
    }

    get getInformationCheckbox() {
        return ('[data-test="registr_promotion_info"]');
    }

    get submitButton() {
        return ('[data-test="registr_submit_btn"]');
    }

    get passwordInput() {
        return ('[name="password"]');
    }

    get registrationVK() {
        return ('//a[@data-test="register_vkontakte"]');
    }

    get registrationOK() {
        return ('//a[@data-test="register_odnoklassniki"]');
    }

    get registrationFacebook() {
        return ('//a[@data-test="register_facebook"]');
    }

    get registrationMailRU() {
        return ('//a[@data-test="register_mailRu"]');
    }

    get registrationGooglePlus() {
        return ('//a[@data-test="register_googleplus"]');
    }

    get registrationYandex() {
        return ('//a[@data-test="register_yandex"]');
    }

    get registrationTelegram() {
        return ('//a[@data-test="register_telegram"]');
    }

    get loginVKInput() {
        return ('//div[@class="oauth_form"]//input[@name="email"]');
    }

    get passwordVKInput() {
        return ('//div[@class="oauth_form"]//input[@name="pass"]');
    }

    get submitVKButton() {
        return ('[type="submit"]');
    }
}


module.exports = new RegistrationAuthorizationForm();