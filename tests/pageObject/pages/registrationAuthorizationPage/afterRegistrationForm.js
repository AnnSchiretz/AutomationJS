class AfterRegistrationForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Продолжить Без Бонуса': this.continueWithoutBonuses,
            'Поле Имя': this.nameField,
            'Поле Фамилия': this.lastNameField,
            'Поле Телефон': this.phoneNumber,
            'Пол Мужской': this.chooseMale,
            'Пол Женский': this.chooseFemale,
            'Далее': this.nextButton,
            'Перейти К Оплате': this.goToPay,
        };

    }


    get closeAlert() {
        return ('[data-test="success_registr_modal_close"]');
    }

    get continueWithoutBonuses() {
        return ('[data-test="continue_without_bonuses"]');
    }

    get nameField() {
        return ('//input[@data-test="profile_edit_first_name_depos"]');
    }

    get lastNameField() {
        return ('//input[@data-test="profile_edit_last_name_depos"]');
    }

    get phoneNumber() {
        return ('//input[@data-test="profile_phone_depos"]');
    }

    get chooseMale() {
        return ('[data-test="profile_alarm_gender_male_depos"]');
    }

    get chooseFemale() {
        return ('[data-test="profile_gender_female_depos"]');
    }

    get nextButton() {
        return ('[data-test="profile_submit_step_one_depos"]');
        //for sol - data-test="profile_submit_step_one_depos
        //jet - data-test="profile_submit_step_one__depos"
    }

    get goToPay() {
        return ('[data-test="profile_submit_step_one_depos"]');
    }

//jet  data-test="profile_submit_step_one_depos"
    //sol  [data-test="profile_button_go_pay_depos"][type="submit"]

}


module.exports = new AfterRegistrationForm();