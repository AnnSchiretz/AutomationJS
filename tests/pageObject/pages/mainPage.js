class MainPage {
    constructor() {
        this.elements = {
            'Кнопка Вход': this.loginButton,
            'Поле Почта': this.emailInput,
            'Поле Пароль': this.passwordInput,
            'Кнопка Войти/Подтвердить': this.submitButton,
            'Кнопка Профайл': this.profile,
            'Кнопка Закрыть окно депозита': this.closeDepositTab,
            'Кнопка Выход': this.logoutButton
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


    get logoutButton(){
        return ('[data-test="main_logout"]');
    }

}

module.exports = new MainPage();