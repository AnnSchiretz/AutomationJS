const {Then} = require('cucumber');
const elementManager = require('../../services/elementManager');
const dataTest = require('../../files/testData/valueData');
const {assert} = require('chai');

Then(/^Я вижу "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    assert.strictEqual(true, elementManager.isDisplayed(component), 'Кнопка Профайл не отображается');

});

Then(/^Я должен увидеть "([^"]*)" тайтл$/, function (data) {

    assert.strictEqual(dataTest[data], browser.getTitle(), "Тайтлы не совпадают");

});

Then(/^Я вижу "([^"]*)" в хедере$/, (element) => {

    const component = browser.headers[process.env.PROJECT].elements[element];
    assert.strictEqual(true, elementManager.isDisplayed(component), "Элемент " + element + " не отображается");

});

Then(/^Я вижу "([^"]*)" кликабельна на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    assert.strictEqual(true, elementManager.isClickable(component), "Кнопка не кликабельна");

});

Then(/^Я вижу "([^"]*)" на "([^"]*)" редирект которой корректный$/, (element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    const value = dataTest[element];
    const attributeValue = elementManager.getAttribute(component, "href");
    assert.strictEqual(attributeValue, value, "URI атрибута-" + attributeValue + " не совпадает с ожидаемым- " + value);

});

Then(/^Я нахожусь на главной странице сайта$/, () => {

    const component = browser.getUrl();
    assert.strictEqual(process.env.URL, component, "URI страниц не совпадают: домашняя страница - " + process.env.URL + " ,страница после редиректа - " + component);
});

Then(/^Я вижу кнопку "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    assert.strictEqual(true, elementManager.isDisplayed(component), "Иначе - отсутствует кнопка Подтвердить почту");
});

Then(/^Я вижу "([^"]*)" в "([^"]*)" на "([^"]*)"$/, (value, element, pageObject) => {

    let component = browser.pageObjects[pageObject].elements[element];
    component = elementManager.getValue(component);
    const data = dataTest[value];
    assert.strictEqual(component, data, "Данные не совпадают: " + component + " не соответствует " + data);


});
Then(/^Я вижу "([^"]*)" "([^"]*)" на "([^"]*)"$/, (element, state, pageObject)=> {

   const component = browser.pageObjects[pageObject].elements[element];
   const status = dataTest[state];
   assert.strictEqual(elementManager.isSelected(component),status,"Ожидается, что элемент -"+state);

});