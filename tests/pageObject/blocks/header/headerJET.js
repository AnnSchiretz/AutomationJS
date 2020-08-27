class headerJET {

    constructor() {
        this.elements = {
            'Боковая Панель': this.sidebarButton,
            'Регистрация': this.registrationButton,
            'Депозит/Касса': this.depositButton,
            'Спорт': this.sportButton

        }
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

}


module.exports = new headerJET();