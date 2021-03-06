const {When} = require('cucumber');
const elementManager = require('../../services/elementManager');
const dataTest = require('../../files/testData/valueData');

When(/^Я нажимаю "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.click(component);
});

When(/^Я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"$/, (value, element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.clearValue(component);
    elementManager.setValue(component, dataTest[value]);
    if (browser.isMobile) {
        if (browser.isKeyboardShown()) {
            browser.hideKeyboard();
        }
    }
});

// Действия с элементами из Header
When(/^Я нажимаю "([^"]*)" в хедере$/, (element) => {

    const component = browser.headers[process.env.PROJECT].elements[element];
    elementManager.click(component);

});

// Действия с элементами из Sidebar
When(/^Я нажимаю "([^"]*)" в боковом меню$/, (element) => {

    const component = browser.sidebars[process.env.PROJECT].elements[element];
    elementManager.click(component);

});

When(/^Я выбираю "([^"]*)"$/, (element) => {

    const pageObject = "Страница Редактирования Профиля";
    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.click(component);
    const year = browser.pageObjects[pageObject].elements["Год"];
    elementManager.click(year);
    const month = browser.pageObjects[pageObject].elements["Месяц"];
    elementManager.click(month);
    const day = browser.pageObjects[pageObject].elements["День"];
    elementManager.click(day);

});
When(/^Я перезагружаю страницу$/, () => {

    browser.refresh();

});
When(/^Я нажимаю "([^"]*)" в окне уведомления$/, (element) => {

    const component = browser.pageObjects["Уведомления"].elements[element];

    if (browser.isIOS) {

    } else {
        if (elementManager.getSize(component) !== 0) {
            elementManager.click(component);
        }
    }

});

// Тест - спорт
When(/^Я выбираю "([^"]*)" на "([^"]*)"$/, (element, page) => {
    const component = browser.pageObjects[page].elements[element];
    if (elementManager.isExisting(component)) {
        elementManager.click(component);
    }

});