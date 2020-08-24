class headerVULCAN {

    constructor() {
        this.elements = {
            'test': this.test,
        }
    }

    get test() {
        return ('[data-test="main_profile_btn"]');

    }

}


module.exports = new headerVULCAN();