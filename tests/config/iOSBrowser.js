const {config} = require('./../../wdio.conf');


config.capabilities = [

    {
//
//         // udid: "D17C630D-57E5-44FF-A2E0-B2DB40697DAC",    //эмулятор
//         // udid: "0A610A2A-2A23-44B3-B2A7-1",//11 iPhone
//         // udid: "00008020-001465CA1488003A", // iphone XS Max
//         UDID: "4255f12e8bf82e540ed8ef0bfa34ea88e98ddee1",
//

        platformName: 'iOS',
        browserName: 'safari',
        maxInstances: 1,
        automationName: 'XCUITest',
        udid: "00008020-001465CA1488003A",
        deviceName: 'iPhone',
        platformVersion: '13.6.1',
        // xcodeOrgId: 'UNIONSTAR LIMITED',
        // xcodeSigningId: 'Marina Fedko (NH75D89LKU)',
        // bundleIdentifier: "TEST.TEST",
        port: 4723,
        path: '/wd/hub',
        appium: {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            args: {},
            // command: 'appium',
        },
    }
//Marina Fedko (NH75D89LKU)


];
config.services = [];


exports.config = config;