class AfterRegistrationForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Продолжить без бонуса': this.continueWithoutBonuses,
            'Поле Имя': this.nameField,
            'Поле Фамилия': this.lastNameField,
            'Поле Телефон': this.phoneNumber,
            'Пол Мужской': this.chooseMale,
            'Пол Женский': this.chooseFemale,
            'Далее': this.nextButton,
            'Перейти к оплате': this.goToPay,
        };

    }


    get closeAlert() {
        return ('[data-test="modal-close"]'); //  Заменить на [data-test="modal-close"] // [class="payment-modal__close"] после добавления в проект

    }

    get continueWithoutBonuses() {
        return ('[data-test="continue_without_bonuses"]')
    }
    get nameField() {
        return('[data-test="profile_edit_first_name_depos"] input') // локатор сместить на инпут, а не на див
    }
    get lastNameField() {
        return('[data-test="profile_edit_last_name_depos"] input') //локатор сместить на инпут
    }
    get phoneNumber(){
        return ('[data-test="mobile-phone-field"] input')   //локатор сместить на инпут
    }
    get chooseMale() {
        return ('[data-test="profile_alarm_gender_male_depos"]');
    }
    get chooseFemale() {
        return('[data-test="profile_gender_female_depos"]');
    }
    get nextButton() {
        return('[data-test="profile_submit_step_one__depos"]');
        //for sol - data-test="profile_submit_step_one_depos
    }
    get goToPay() {
        return('[data-test="profile_submit_step_one__depos"]');
    }


}


module.exports = new AfterRegistrationForm();