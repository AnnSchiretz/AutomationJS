class DepositForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Вывод средств': this.cashOutButton,
            'Пополнение счета': this.depositButton,
            'Выслать Подтверждение': this.sendConfirmationButton,

        };

    }


    get closeAlert() {
        return ('[data-test="deposit_close_cross"]'); //  Заменить на [data-test="modal-close"] // [class="payment-modal__close"] после добавления в проект
    }


    get cashOutButton() {
        return ('[data-test="payment-modal__tab-is-cashout"]');
    }


    get depositButton() {
        return ('[data-test="payment__tab-is-deposit"]')
    }
    get sendConfirmationButton() {
        return('[class="payment-method__confirmed__col"]')
        // jet - class="payment-method__confirmed__col"
        //sol -  class="payment-method__confirmed-btn"
    }
}


module.exports = new DepositForm();