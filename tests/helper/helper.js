class Helper {


    get randomNumber() {
        {
            return Math.floor(Math.random() * 9999);
        }
    }


}


module.exports = new Helper();