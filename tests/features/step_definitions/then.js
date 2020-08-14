const {Then} = require('cucumber');
const elementManager = require('../../services/elementManager');
const dataTest = require('../../files/testData/valueData');
const {assert} = require('chai');

Then(/^Я должен увидеть "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    assert.strictEqual(true, elementManager.isDisplayed(component, 10000), 'Кнопка Профайл не отображается');

});

Then(/^Я должен увидеть "([^"]*)" тайтл$/, function (data) {

    assert.strictEqual(dataTest[data], browser.getTitle(), "Тайтлы не совпадают")

});