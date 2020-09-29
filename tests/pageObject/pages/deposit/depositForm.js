class DepositForm {

    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Вывод Средств': this.cashOutButton,
            'Пополнение Счета': this.depositButton,
            'Выслать Подтверждение': this.sendConfirmationButton,
            'Выберите Способ Вывода': this.chooseCashOutMethodTitle,
            'Изменить': this.changePaymentMethod,
            'Сообщение': this.paymentMessage,
            'Банковская Карта На Вывод JET': this.bankCardJETCashOut,
            'Банковская Карта На Вывод SOL': this.bankCardSOLCashOut,
            'Qiwi Кошелек': this.qiwiPayment,
            'Яндекс.Деньги': this.yandexMoney,
            'Мобильные Платежи': this.mobilePayments,
            'Bitcoin Cash': this.bitcoinCash,
            'Bitcoin': this.bitcoin,
            'Etherium': this.etherium,
            'Ripple': this.ripple,
            'Litecoin': this.litecoin,
            'PAYEER': this.payeer,
            'Выслать Подтверждение Email': this.sendConfirmEmail,
            'Неподтвержденный Email': this.notConfirmedEmail,
            'Форма Депозита': this.depositForm


        };

    }

    get closeAlert() {

        return ('[data-test="modal_close"]');
    }


    get cashOutButton() {
        return ('[data-test="payment-modal__tab-is-cashout"]');
    }


    get depositButton() {
        return ('[data-test="payment__tab-is-deposit"]');
    }

    get sendConfirmationButton() {
        return ('[class="payment-method__confirmed-btn"]');
        //jet - class="payment-method__confirmed__col"
        //sol -  class="payment-method__confirmed-btn"
    }

    get chooseCashOutMethodTitle() {
        return ('[class="payment-providers-list__title"]');
    }

    get chooseCashOutMethod() {
        return ('[class="payment-providers-list__title"]');
    }


    get changePaymentMethod() {
        return ('[data-test="payment-area__header-btn"]');
    }

    get paymentMessage() {
        return ('[data-test="payment-area__body-maxlimit"]');
    }

    get bankCardJETCashOut() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("accentpay_gate" + "bank_card").toString('base64') + "_payment_method" + quote + "]");
    }

    get bankCardSOLCashOut() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cypix_payout" + "bank_card").toString('base64') + "_payment_method" + quote + "]");
    }

    get qiwiPayment() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("piastrix" + "qiwi").toString('base64') + "_payment_method" + quote + "]");
    }

    get yandexMoney() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("accentpay_v2" + "yandex_money").toString('base64') + "_payment_method" + quote + "]");
    }

    get mobilePayments() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("accentpay_v2" + "mobile_commerce").toString('base64') + "_payment_method" + quote + "]");
    }

    get bitcoin() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cryptopay" + "btc").toString('base64') + "_payment_method" + quote + "]");
    }

    get etherium() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cryptopay" + "eth").toString('base64') + "_payment_method" + quote + "]");
    }

    get ripple() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cryptopay" + "xrp").toString('base64') + "_payment_method" + quote + "]");
    }

    get litecoin() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cryptopay" + "ltc").toString('base64') + "_payment_method" + quote + "]");
    }

    get bitcoinCash() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("cryptopay" + "bch").toString('base64') + "_payment_method" + quote + "]");
    }

    get payeer() {
        const quote = "'";
        return ("[data-test=" + quote + Buffer.from("piastrix" + "payeer").toString('base64') + "_payment_method" + quote + "]");
    }

    get sendConfirmEmail() {
        return ('[data-test="send_confirmation" ]');
    }

    get notConfirmedEmail() {
        return ('[data-test="not_confirm_email_field_in_cashout_modal"]');
    }

    get depositForm() {
        return ('//div[@data-test="payment-modal__body-wrap"]');
    }

}


module.exports = new DepositForm();