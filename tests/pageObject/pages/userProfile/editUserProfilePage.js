class EditUserProfilePage {
    constructor() {
        this.elements = {
            'Подтвердить почту': this.confirmEmailButton,
            'Дата Рождения': this.setBirthdayData,
            'Год': this.yearButton,
            'Месяц': this.monthButton,
            'День': this.dayButton

        };

    }


    get confirmEmailButton() {
        return ('//form[@class="profile-contacts__cols"][1]');// Локатор формы с кнопкой Подтвердить напротив инпута почты
    }

    get setBirthdayData() {
        return ('[class="relative profile-edit__col birthday-calendar__wrapper"]');
    }

    get yearButton() {
        return ("//div[@class='vdp-datepicker date-picker__wrapper']/div[4]//span[text()='2000']");
    }

    get monthButton() {
        return ('//div[@class="vdp-datepicker date-picker__wrapper"]/div[3]//span[4]');
    }

    get dayButton() {
        return ('//div[@class="vdp-datepicker date-picker__wrapper"]/div[2]//span[5]');
    }

    get nameField() {
        return ('[data-test="profile_edit_first_name"]');
    }

    get secondNameField() {
        return ('[data-test="profile_edit_last_name"]');
    }

    get phoneNumberField() {
        return ('[]');
    }

    get nicknameField() {
        return ('[data-test="profile_nickname_edit"]');
    }

    get emailField() {
        return ('[class="pseudo-input__value"]');
    }

    get getSystemAlert() {
        return ('[]');
    }

    get getPromotionsAndGifts() {
        return ('[]');
    }

    get getSMSAlert() {
        return ('[]');
    }

    get disabledBonuses() {
        return ('[]');
    }

    get maleGenderButton() {
        return ('[data-test="profile_gender_male"]');
    }

    get femaleGenderButton() {
        return ('[data-test="profile_gender_female"]');
    }
}


module.exports = new EditUserProfilePage();