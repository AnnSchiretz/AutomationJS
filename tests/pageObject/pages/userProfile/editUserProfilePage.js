const getSelector = require('./../../../helper/getSelector');

class EditUserProfilePage {
    constructor() {
        this.elements = {
            'Подтвердить Почту': this.confirmEmailButton,
            'Дата Рождения Профиль': this.setBirthdayData,
            'Дата Рождения Депозит': this.setBirthdayDataDeposit,
            'Год': this.yearButton,
            'Месяц': this.monthButton,
            'День': this.dayButton,
            'Поле Имя': this.nameField,
            'Поле Фамилия': this.secondNameField,
            'Поле Номер Телефона': this.phoneNumberField,
            'Поле Никнэйм': this.nicknameField,
            'Поле Email': this.emailField,
            'Получать Системные Уведомления': this.getSystemAlert,
            'Получать Письма С Акциями И Подарками': this.getPromotionsAndGifts,
            'Получать SMS Уведомления': this.getSMSAlert,
            'Отключить Бонусы': this.disabledBonuses,
            'МУЖ Пол': this.maleGenderButton,
            'ЖЕН Пол': this.femaleGenderButton,
            'Сохранить Изменения': this.saveChanges,
            'Сохранить Подписки и Соцсети' : this.saveChangeSubscriptionsAndSocNetwork
        };

    }


    get confirmEmailButton() {
        return ('[data-test="send_confirmation"]');
    }

    get setBirthdayData() {
        return getSelector('//div[@data-test="profile_calendar_edit"]/..', '//div[@data-test="profile_calendar_edit"]/..', '.date-picker__input');
    }

    get setBirthdayDataDeposit() {
        return ('//input[@data-test="profile_calendar_edit_depos"]/../..');
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
        return ('//input[@data-test="profile_phone_depos"]');
    }

    get nicknameField() {
        return ('[data-test="profile_nickname_edit"]');
    }

    get emailField() {
        return ('[class="pseudo-input__value"]');
    }

    get getSystemAlert() {
        return getSelector('[data-test="profile_receive_newsletters"]', '[data-test="profile_receive_newsletters"]', '[data-test="profile_receive_newsletters"]');
    }

    get getPromotionsAndGifts() {
        return getSelector('[data-test="profile_receive_promos"]', '[data-test="profile_receive_promos"]', '[data-test="profile_receive_promos"]');
    }

    get getSMSAlert() {
        return getSelector('[data-test="profile_receive_sms_promos"]', '[data-test="profile_receive_sms_promos"]', '//label[@data-test="profile_receive_sms_promos"]');
    }

    get disabledBonuses() {
        return getSelector('[data-test="turn_on_off_bonuses"]', '[data-test="turn_on_off_bonuses"]', '[data-test="turn_on_off_bonuses"]');
    }

    get maleGenderButton() {
        return ('[data-test="profile_gender_male"]');
    }

    get femaleGenderButton() {
        return ('[data-test="profile_gender_female"]');
    }
    get saveChanges() {
        return ('//button[@data-test="profile_submit"]');
        //'[data-test="profile_submit"]'
    }
    get saveChangeSubscriptionsAndSocNetwork(){
        return('//button[@data-test="save_changes"]');
    }

}


module.exports = new EditUserProfilePage();