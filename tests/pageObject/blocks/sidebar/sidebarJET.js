class sidebarJET {

    constructor() {
        this.elements = {
            'Кнопка Бонусы': this.bonusesButton,
            'Выход': this.logoutButton,
            'Подтвердить Выход - Да': this.confirmExitYes,
            'Подтвердить Выход - Нет': this.confirmExitNo,
            'Мой Профиль': this.myProfileButton,
            'Подписки И Соцсети': this.subscriptionsAndSocialNetworks,
            'Личный Кабинет': this.accountButton

        };
    }

    get bonusesButton() {
        return ('//div[@class="quick-bar__sidebar"]//*[text()="Bonuses"]');// Костыльный локатор. Переписать после добавления уникальных локаторов

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


    get myProfileButton() {
        return ('[data-test="my_profile"]');
    }

    get subscriptionsAndSocialNetworks() {
        return ('[data-test="social_network"]');
    }

    get accountButton() {
        return ('[data-test="personal_account"]');
    }
}


module.exports = new sidebarJET();