const {config} = require('./../../wdio.conf');


config.capabilities = [

    {
        platformName: 'iOS',
        browserName: 'safari',
        maxInstances: 1,
        automationName: 'XCUITest',
        // udid: "4255f12e8bf82e540ed8ef0bfa34ea88e98ddee1",
        // udid:"00008030-0014086E3CF9802E",
        //  udid: "D17C630D-57E5-44FF-A2E0-B2DB40697DAC",    //эмулятор
        udid: "00008020-001465CA1488003A",    //10 iPhone 13.6.1 OS
        deviceName: 'iPhone 10',
        platformVersion: '13.6.1',
        port: 4723,
        path: '/wd/hub',
        appium: {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            args: {},
            // command: 'appium',
        },
    }


];
config.services = [];


exports.config = config;