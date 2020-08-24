
class sidebarSOL {

    constructor() {
        this.elements = {
            'Профиль':  this.profileButton,
        }
    }

    get profileButton() {
        return ('[data-test="my_profile"]');
    }


}


module.exports = new sidebarSOL();