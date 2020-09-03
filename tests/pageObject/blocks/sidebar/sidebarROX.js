class sidebarROX {

    constructor() {
        this.elements = {
            'test': this.test,
        };
    }

    get test() {
        return ('[data-test="sport"]');

    }

}


module.exports = new sidebarROX();