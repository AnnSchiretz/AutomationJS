class Helper {


    get randomEmail() {

        const randomNumber = Math.floor(Math.random() * 9999);
        return ("autotest+" + randomNumber + randomNumber + "@jetmail.cc");

    }


    get randomPhoneNumber() {

        const randomNumber = Math.floor(Math.random() * 9999);
        return (`91${randomNumber}${randomNumber}`);

    }
}


module.exports = new Helper();
