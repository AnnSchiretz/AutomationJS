class Helper {


    get randomEmail() {
        {
            Math.floor(Math.random() * 9999);
            return ("autotest+" + browser.helper.randomNumber + browser.helper.randomNumber + "@jetmail.cc");
        }
    }

}

module.exports = new Helper();
