class DepositForm {
    constructor() {
        this.elements = {
            'Крутить': this.spinButton,
            'Крутить еще!': this.spinAgain,
            'Форма Регистрации': this.registrationFormLanding,
            'Поле Почта': this.emailLandingInput,
            'Поле Пароль': this.passwordLandingInput,
            'Зарегистрироваться': this.submitLandingButton


        };

    }


    get spinButton() {
        return ('[data-test="twist_btn"]');
    }

    get spinAgain() {
        return ('[data-test="twist_again_btn"]');
    }

    get registrationFormLanding() {
        return ('[class="form__cont"]');
    }

    get emailLandingInput() {
        return ('[data-test="wof_email_field"]');
    }

    get passwordLandingInput() {
        return ('[data-test="wof_password_field"]');
    }

    get submitLandingButton() {
        return ('[data-test="wof_registr_submit"]');
    }
}


module.exports = new DepositForm();