class headerJET {

    constructor() {
        this.elements = {
            'Боковая Панель': this.sidebarButton,
            'Регистрация': this.registrationButton,
            'Депозит/Касса': this.depositButton

        }
    }

    get sidebarButton() {
        return ('[data-test="menu"]');

    }

    get registrationButton() {
        return ('[data-test="main_register"]');
    }

    get depositButton() {
        return ('[data-test="main_deposit"]')
    }


}


module.exports = new headerJET();