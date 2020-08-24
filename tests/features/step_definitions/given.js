const {Given} = require('cucumber');


Given(/^Я нахожусь на главной странице$/, () => {
     browser.url(process.env.URL);

});