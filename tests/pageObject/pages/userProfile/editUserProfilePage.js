class EditUserProfilePage {
    constructor() {
        this.elements = {
            'Подтвердить почту': this.confirmEmailButton,
            'Дата Рождения': this.setBirthdayData,
            'Год': this.yearButton,
            'Месяц': this.monthButton,
            'День': this.dayButton,
            'Поле Имя': this.nameField,
            'Поле Фамилия': this.secondNameField,
            'Поле Номер Телефона': this.phoneNumberField,
            'Поле Никнэйм': this.nicknameField,
            'Поле Email': this.emailField,
            'Получать системные уведомления': this.getSystemAlert,
            'Получать письма с акциями и подарками': this.getPromotionsAndGifts,
            'Получать SMS уведомления': this.getSMSAlert,
            'Отключить бонусы': this.disabledBonuses,
            'МУЖ Пол': this.maleGenderButton,
            'ЖЕН Пол': this.femaleGenderButton,
            'Сохранить изменения': this.saveChanges,

        };

    }


    get confirmEmailButton() {
        return ('[data-test=”send_confirmation”]');
    }

    get setBirthdayData() {
        return ('//input[@data-test="profile_calendar_edit"]/../..');
    }

    get yearButton() {
        return ('//div[@data-test="select_year"]/span[2]');
    }

    get monthButton() {
        return ('//div[@data-test="select_month"]/span[2]');
    }

    get dayButton() {
        return ('//div[@data-test="select_day"]//span[18]');
    }

    get nameField() {
        return ('[data-test="profile_edit_first_name"]');
    }

    get secondNameField() {
        return ('[data-test="profile_edit_last_name"]');
    }

    get phoneNumberField() {
        return ('[data-test="profile_phone_depos"]');
    }

    get nicknameField() {
        return ('[data-test="profile_nickname_edit"]');
    }

    get emailField() {
        return ('[class="pseudo-input__value"]');
    }

    get getSystemAlert() {
        return ('//input[@data-test="profile_receive_newsletters"]/../..');
    }

    get getPromotionsAndGifts() {
        return ('//input[@data-test="profile_receive_promos"]/../..');
    }

    get getSMSAlert() {
        return ('//input[@data-test="profile_receive_sms_promos"]/../..');
    }

    get disabledBonuses() {
        return ('//input[@data-test="turn_on_off_bonuses"]/../..');
    }

    get maleGenderButton() {
        return ('[data-test="profile_gender_male"]');
    }

    get femaleGenderButton() {
        return ('[data-test="profile_gender_female"]');
    }
    get saveChanges() {
        return ('[data-test="profile_submit"]');
    }
}


module.exports = new EditUserProfilePage();