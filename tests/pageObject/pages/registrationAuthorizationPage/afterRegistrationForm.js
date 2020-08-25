class AfterRegistrationForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Продолжить без бонуса': this.continueWithoutBonuses,

        };

    }


    get closeAlert() {
        return ('//div[@data-test="modal-close"]'); //  Заменить на [data-test="modal-close"] // [class="payment-modal__close"] после добавления в проект
    }

    get continueWithoutBonuses() {
        return ('[data-test="continue_without_bonuses"]')
    }


}


module.exports = new AfterRegistrationForm();