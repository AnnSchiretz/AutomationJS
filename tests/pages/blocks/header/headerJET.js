class headerJET {

    constructor() {
        this.elements = {
            'Боковая панель': this.sidebarButton,
        }
    }

    get sidebarButton() {
        return ('[data-test="menu"]');

    }

}


module.exports = new headerJET();