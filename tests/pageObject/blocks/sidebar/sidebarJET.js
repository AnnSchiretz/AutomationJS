class sidebarJET {

    constructor() {
        this.elements = {
            'Кнопка Бонусы': this.bonusesButton,
            'Выход': this.logoutButton,
            'Подтвердить Выход - Да': this.confirmExitYes,
            'Подтвердить Выход - Нет': this.confirmExitNo,
            'Профиль':  this.profileButton,
            'Мой профиль': this.myProfile

        }
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
        return ('[data-test="no_logout_btn_main"]')
    }

    get profileButton() {
        return ('[data-test="my_profile"]');
    }

    get myProfile() {
        return ('[data-test="my_profile"]');
    }
}


module.exports = new sidebarJET();