module.exports = (desktopSelector, androidSelector, iOSSelector) => {
    if (browser.isMobile) {
        if (browser.isAndroid) {
            return androidSelector;
        } else {
            return iOSSelector;
        }
    } else {
        return desktopSelector;
    }
};