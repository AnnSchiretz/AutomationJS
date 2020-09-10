class Alert {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Ваш E-mail Не Подтвержден': this.emailNotConfirmed,
            'Проверить Почту': this.checkEmailButton,
            'Уведомление - Данные Успешно Добавлены': this.dataSuccessfullyUpdate,
            'Письмо Было Отправлено': this.emailSendAlert,
            'Письмо Было Отправлено. Проверьте Папку СПАМ': this.letterWasSent
        };

    }


    get closeAlert() {
        return ('[data-test="modal-close"]');
    }

    get emailNotConfirmed() {
        return ('[data-test="email_is_not_confirm"]');
    }

    get checkEmailButton() {
        return ('[data-test="go_to_confirm_email"]');
    }

    get dataSuccessfullyUpdate() {
        return ('[data-test="data_update_successfully"]');
    }

    get emailSendAlert() {
        return ('[class="vue-notification-wrapper"]');
    }

    get letterWasSent() {
        return ('[data-test="send_email_to_mail"]');
    }
}

module.exports = new Alert();