class UserProfilePage {
    constructor() {
        this.elements = {
            'Выход': this.logoutButton,
            'Подтвердить Выход - Да': this.confirmExitYes,
            'Подтвердить Выход - Нет': this.confirmExitNo,
            'Настройки': this.userProfileSettingButton,
            'Баланс': this.balanceButton

        };

    }


    get logoutButton() {
        return ('[data-test="main_logout"]');
    }

    get confirmExitYes() {
        return ('[data-test="yes_logout_main_btn"]');
    }

    get confirmExitNo() {
        return ('[data-test="no_logout_btn_main"]')
    }

    get userProfileSettingButton() {
        return ('//*[@class="tabs default-tabs"]/a[3]')
    }

    get balanceButton() {
        return ('[//*[@class="tabs default-tabs"]/a[1]]');
    }

}


module.exports = new UserProfilePage();