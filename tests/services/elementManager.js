class ElementManager {


    click(selector, ms = 15000) {
        this.waitForClickable(selector, ms);
        this.waitForDisplayed(selector, ms);
        if (browser.isChrome !== true){
            browser.pause(1000);
        }
        const element = this.getElement(selector);
        return element.click();
    }


    getElement(selector) {
        return $(selector);
    }


    getText(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.getText();
    }


    getValue(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.getValue();
    }

    getAttribute(selector, attributeName) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.getAttribute(attributeName);
    }


    getSize(selector) {
        const element = $(selector);
        return element.getSize(selector);
    }


    setValue(selector, value) {
        const element = $(selector);
        this.waitForElement(selector);
        element.setValue(value);

    }

    clearValue(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.clearValue();
    }


    isDisplayed(selector, ms = 15000) {
        const element = $(selector);
        this.waitForElement(selector, ms);
        this.waitForClickable(selector, ms);
        return element.isDisplayed();
    }


    isClickable(selector, ms = 15000) {
        const element = $(selector);
        this.waitForElement(selector, ms);
        this.waitForClickable(selector, ms);
        return element.isClickable();
    }


    isExisting(selector) {
        const element = $(selector);
        return element.isExisting();
    }


    waitForClickable(selector, ms = 15000) {
        const element = this.getElement(selector);
        element.waitForExist(ms);
        element.waitForClickable();
    }


    waitForElement(selector, ms = 15000) {
        const element = this.getElement(selector);
        element.waitForExist(ms);
        element.waitForDisplayed(ms);
    }


    waitForDisplayed(selector, ms = 15000) {
        const element = this.getElement(selector);
        element.waitForExist(ms);
        element.waitForDisplayed();
    }


    scrollIntoView(selector) {
        const element = this.getElement(selector);
        return element.scrollIntoView();
    }

    isSelected(selector, ms = 15000) {
        const element = this.getElement(selector);
        this.waitForElement(selector, ms);
        this.waitForClickable(selector, ms);
        return element.isSelected();
    }


    isEnabled(selector, ms = 15000) {
        const element = this.getElement(selector);
        this.waitForElement(selector, ms);
        return element.isEnabled();
    }

}


module.exports = new ElementManager();
