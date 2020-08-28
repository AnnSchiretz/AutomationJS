class DepositForm {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Вывод средств': this.cashOutButton,
            'Пополнение счета': this.depositButton,
            'Выслать Подтверждение': this.sendConfirmationButton,
            'Выберите способ вывода': this.cashOutButton,
            'Банковская карта': this.bankCard,
            'Qiwi': this.qiwi,
            'Яндекс.Деньги': this.yandexMoney,
            'Мобильные платежи': this.mobilePayments,
            'Bitcoin': this.bitcoin,
            'Etherium': this.etherium,
            'Ripple': this.ripple,
            'Litecoin': this.litecoin,
            'Bitcoin Cash': this.bitcoinCash,
            'PAYEER': this.payeer,
            'Изменить': this.changePaymentMethod,
            'Сообщение': this.paymentMessage

        };

    }


    get closeAlert() {
        return ('[data-test="deposit_close_cross"]'); //  Заменить на [data-test="modal-close"] // [class="payment-modal__close"] после добавления в проект
    }


    get cashOutButton() {
        return ('[data-test="payment-modal__tab-is-cashout"]');
    }


    get depositButton() {
        return ('[data-test="payment__tab-is-deposit"]');
    }

    get sendConfirmationButton() {
        return ('[class="payment-method__confirmed__col"]');
        //jet - class="payment-method__confirmed__col"
        //sol -  class="payment-method__confirmed-btn"
    }

    get chooseCashOutMethod() {
        return ('[class="payment-providers-list__title"]');
    }

    get bankCard() {
        return ('[]');
    }

    get qiwi() {
        return ('[]');
    }

    get yandexMoney() {
        return ('[]');
    }

    get mobilePayments() {
        return ('[]');
    }

    get bitcoin() {
        return ('[]');
    }

    get etherium() {
        return ('[]');
    }

    get ripple() {
        return ('[]');
    }

    get litecoin() {
        return ('[]');
    }

    get bitcoinCash() {
        return ('[]');
    }

    get payeer() {
        return ('[]');
    }

    get changePaymentMethod() {
        return ('[data-test="payment-area__header-btn"]');
    }

    get paymentMessage() {
        return ('[data-test="payment-area__body-maxlimit"]');
    }
}


module.exports = new DepositForm();