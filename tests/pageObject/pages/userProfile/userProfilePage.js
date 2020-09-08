class UserProfilePage {
    constructor() {
        this.elements = {
            'Выход': this.logoutButton,
            'Подтвердить Выход - Да': this.confirmExitYes,
            'Подтвердить Выход - Нет': this.confirmExitNo,
            'Настройки': this.userProfileSettingButton,
            'Баланс': this.balanceButton,
            'История': this.historyButton,
            'Безопасность': this.securityButton


        };

    }


    get logoutButton() {
        return ('[data-test="main_logout"]');
    }

    get confirmExitYes() {
        return ('[data-test="yes_logout_main_btn"]');
    }

    get confirmExitNo() {
        return ('[data-test="no_logout_btn_main"]');
    }

    get userProfileSettingButton() {
        return ('[data-test="settings_in_lk"]');
    }

    get balanceButton() {
        return ('[data-test="balance_in_lk"]');
    }

    get historyButton() {
        return ('[data-test="proﬁle_deposit"]');
    }

    get securityButton() {
        return ('[data-test="profile_security_in_lk"]');
    }
}


module.exports = new UserProfilePage();