class Helper {


    get randomEmail() {
        {
            const randomNumber = Math.floor(Math.random() * 9999);
            return ("autotest+" + randomNumber + randomNumber + "@jetmail.cc");
        }
    }

}

module.exports = new Helper();
