class Helper {


    get randomNumber() {
        {
            return Math.floor(Math.random() * 9999);
        }
    }
    get randomPhoneNumber() {
        return Math.floor(Math.random() * (1234567891 -  1234567891 + 1)) + 1234567891;
    }


}


module.exports = new Helper();