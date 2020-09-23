module.exports = (browserSelector, mobileSelector) => {
    if (browser.isMobile) {
        return browser.isAndroid ? mobileSelector : `//*[@name="${mobileSelector}"]`;
    } else {
        return browserSelector;
    }
};
