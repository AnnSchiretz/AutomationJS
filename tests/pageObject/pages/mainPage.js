const getSelectors = require('../../helper/getSelector');
class MainPage {
    constructor() {
        this.elements = {
            'Кнопка Вход': this.loginButton,
            'Поле Почта': this.emailInput,
            'Поле Пароль': this.passwordInput,
            'Кнопка Войти/Подтвердить': this.submitButton,
            'Кнопка Профайл': this.profile,
            'Кнопка Закрыть Окно Депозита': this.closeDepositTab,
            'Кнопка Выход': this.logoutButton,
            'Плашка Спорт': this.billetSport,
            'Плашка Слоты': this.billetSlot
        };

    }


    get profile() {
        return ('[data-test="main_profile_btn"]');

    }

    get emailInput() {
        return ('[name="email"]');

    }

    get passwordInput() {
        return ('[name="password"]');

    }

    get submitButton() {
        return ('[data-test="enter_submit"]');

    }

    get loginButton() {
        return ('[data-test="login_button"]');

    }


    get closeDepositTab() {
        return ('[data-test="deposit_close_cross"]');
    }


    get logoutButton() {
        return ('[data-test="main_logout"]');
    }

    get billetSport() {
        return getSelectors('[data-test="sport_collection"]', '//a[@class="section-links__item-inner"][@href="/ru/sport"]', '//a[@class="section-links__item-inner"][@href="/ru/sport"]');
    }

    get billetSlot() {
        return ('[data-test=”slots_collection”]');
    }
}

module.exports = new MainPage();