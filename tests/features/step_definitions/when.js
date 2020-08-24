const {When} = require('cucumber');
const elementManager = require('../../services/elementManager');
const dataTest = require('../../files/testData/valueData');

When(/^Я нажимаю "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.click(component);

});

When(/^Я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"$/, (value, element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.setValue(component, dataTest[value]);

});

// Действия с элементами из Header
When(/^Я нажимаю "([^"]*)" в хедере "([^"]*)"$/, (element, project)=> {


    const component = browser.headers[project].elements[element];
    elementManager.click(component);

});

// Действия с элементами из Sidebar
When(/^Я нажимаю "([^"]*)" в боковом меню "([^"]*)"$/, (element, project)=> {

    const component = browser.sidebars[project].elements[element];
    elementManager.click(component);

});