class Alert {
    constructor() {
        this.elements = {
            'Закрыть Окно': this.closeAlert,
            'Ваш e-mail не подтвержден': this.emailNotConfirmed

        };

    }


    get closeAlert() {
        return ('[data-test="modal-close"]');
    }

    get emailNotConfirmed() {
        return ('[id="popup-email_not_verified"]'); //Заменить на другой после добавления локатора
    }

}


module.exports = new Alert();