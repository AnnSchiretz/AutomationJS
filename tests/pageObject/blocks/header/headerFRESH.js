class headerFRESH {

    constructor() {
        this.elements = {
            'test': this.test,
        };
    }

    get test() {
        return ('[data-test="sport"]');

    }

}


module.exports = new headerFRESH();