const {config} = require('../../wdio.conf');

config.capabilities = [{

        browserName: 'firefox',
        browserVersion: '79.0',
            "moz:firefoxOptions": {
                "args": [
                    "--window-size=maximize"
                ]
            },
    'selenoid:options': {
        enableVNC: true,
        enableVideo: false
    }

    }];

exports.config = config;