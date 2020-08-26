class Alert {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Ваш e-mail не подтвержден': this.emailNotConfirmed,
            'Проверить почту': this.checkEmailButton
        };

    }


    get closeAlert() {
        return ('[data-test="modal-close"]');
    }

    get emailNotConfirmed() {
        return ('[id="popup-email_not_verified"]'); //Заменить на другой после добавления локатора
    }
    get checkEmailButton() {
        return ('[class="success-registration__btn-wr"]'); // Заменить на нормальный локатор [data-test='go-to-confirm-email']
    }
}


module.exports = new Alert();