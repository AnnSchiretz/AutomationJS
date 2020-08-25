class EditUserProfilePage {
    constructor() {
        this.elements = {
            'Подтвердить почту': this.confirmEmailButton,

        };

    }


    get confirmEmailButton() {
        return ('//form[@class="profile-contacts__cols"][1]');// Локатор формы с кнопкой Подтвердить напротив инпута почты
    }

}


module.exports = new EditUserProfilePage();