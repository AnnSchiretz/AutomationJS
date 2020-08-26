class headerSOL {

    constructor() {
        this.elements = {
            'Кнопка Спорт': this.sportButton,
            'Регистрация': this.registrationButton,
            'Профиль': this.profileButton,
            'Депозит/Касса': this.depositButton



        }
    }

    get sportButton() {
        return ('[data-test="sport"]');

    }
    get registrationButton() {
        return ('[data-test="main_register"]');
    }

    get profileButton() {
        return ('[data-test="main_profile_btn_sidebar"]');
    }

    get depositButton() {
        return ('[data-test="main_deposit"]')
    }
}


module.exports = new headerSOL();