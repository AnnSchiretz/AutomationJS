class headerJET {

    constructor() {
        this.elements = {
            'Боковая Панель': this.sidebarButton,
            'Регистрация': this.registrationButton,
            'Депозит/Касса': this.depositButton,
            'Спорт': this.sportButton,
            'Войти': this.signIn

        };
    }

    get sidebarButton() {
        return ('[data-test="menu"]');

    }

    get registrationButton() {
        return ('[data-test="main_register"]');
    }

    get depositButton() {
        return ('[data-test="main_deposit"]');
    }

    get sportButton() {
        return ('[class="top-bar"]');
    }

    get signIn() {
        return ('[id="top-sign_in"]');
    }
}


module.exports = new headerJET();