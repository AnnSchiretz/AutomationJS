
class sidebarSOL {

    constructor() {
        this.elements = {
            'Профиль': this.profileButton,
            'Спорт': this.sportButton
        };
    }

    get profileButton() {
        return ('[data-test="my_profile"]');
    }


    get sportButton() {
        return ('[data-test="sport"]');
    }
}


module.exports = new sidebarSOL();