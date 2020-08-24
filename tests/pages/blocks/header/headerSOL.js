class headerSOL {

    constructor() {
        this.elements = {
            'Кнопка Спорт': this.sportButton,
        }
    }

    get sportButton() {
        return ('[data-test="sport"]');

    }

}


module.exports = new headerSOL();