class Helper {


    get randomNumber() {
        return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    }


    get randomEmail() {

        return ("autotest+" + this.randomNumber + this.randomNumber + "@jetmail.cc");

    }


    get randomPhoneNumber() {

        return (`91${this.randomNumber}${this.randomNumber}`);

    }
}


module.exports = new Helper();
