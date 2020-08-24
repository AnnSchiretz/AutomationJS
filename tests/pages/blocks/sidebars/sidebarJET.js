class sidebarJET {

    constructor() {
        this.elements = {
            'Кнопка Бонусы': this.bonusesButton,
        }
    }

    get bonusesButton() {
        return ('//div[@class="quick-bar__sidebar"]//*[text()="Bonuses"]');// Костыльный локатор. Переписать после добавления уникальных локаторов

    }

}


module.exports = new sidebarJET();