const {config} = require('./../../wdio.conf');

//Samsung s8
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        chromeOptions: {'args': ['--incognito', '--disable-cache']},
        maxInstances: 1,
        automationName: 'uiautomator2',
        deviceName: 'auto',//emulator-5554    ce031713655bc80d0c
        platformVersion: '',
        port: 4723,
        path: '/wd/hub',
        appium: {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            args: {},
            // command: 'appium',
        },
    },

];
config.services = [];


exports.config = config;