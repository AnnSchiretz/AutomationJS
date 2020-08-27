class OtherElements {

    constructor() {
        this.elements = {
            'Логотип': this.profileButton,
        };
    }

    get logoButton() {
        return ('[class="top-bar__logo"]');
    }


}


module.exports = new OtherElements();