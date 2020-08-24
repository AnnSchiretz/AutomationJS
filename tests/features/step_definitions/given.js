const {Given} = require('cucumber');


Given(/^Я нахожусь на главной странице$/, () => {
     browser.url(process.env.URL);

});

Given(/^Я нахожусь на лендинге$/, () => {
     browser.url(process.env.URL_LAND);

});