class AfterRegistrationForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Продолжить без бонуса': this.continueWithoutBonuses,
            'Поле Имя': this.nameField,
            'Поле Фамилия': this.lastNameField,
            'Поле Телефон': this.phoneNumber,
        };

    }


    get closeAlert() {
        return ('//div[@data-test="modal-close"]'); //  Заменить на [data-test="modal-close"] // [class="payment-modal__close"] после добавления в проект
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

}


module.exports = new AfterRegistrationForm();