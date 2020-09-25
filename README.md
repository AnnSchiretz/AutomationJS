##Установка проекта

Выполнить команду в терминале/консоле:

```
npm install
```

##Фреймворки:
- [webdriverIO (v6)](https://webdriver.io/)
- [Cucumber (v6)](https://cucumber.io/)

##Библиотека утверждений

- [Chai (4.2.0)](https://www.chaijs.com/)

 ##Сервисы
 
 -  [Selenium Standalone](https://www.npmjs.com/package/selenium-standalone)

##Текущие версии
- [Node.js (v14.4.0)](https://nodejs.org/en/)
- [npm (6.14.5)](https://www.npmjs.com/)
- [Java (14.0.1)](https://www.oracle.com/java/technologies/javase-downloads.html)

##Настройка дебага для проекта в WebStorm
[ Ссылка на документ в Confluence](https://jetmail.atlassian.net/wiki/spaces/QTM/pages/772308993/WebStorm)

- В конфигурационном файле `wdio.config.js` добавить параметр:
```js
debug: true
```
- Указать feature-файл с тестами который необходимо продебажить в файле `wdio.config.js`
- Устанавливаем точки входа в дебаг-мод
- Сгенерировать конфигурацию для запуска дебага в файле `package.json` нажатием 
```
Debug 'test'
```
- Запустить отладчик (дебаг) 

##Добавление тестов
Тесты написаны с использованием [синтаксиса Gherkin](https://cucumber.io/docs/gherkin/) таким образом, чтобы его можно было использовать как документацию по функциям:

```gherkin
@smoke
Feature: Guess the word

  # The first example has two steps
  Scenario: Maker starts a game
    When the Maker starts a game
    Then the Maker waits for a Breaker to join

  # The second example has three steps
  Scenario: Breaker joins a game
    Given the Maker has started a game with the word "silky"
    When the Breaker joins the Maker's game
    Then the Breaker must guess a word with 5 characters
```
Все тесты должны находиться в `./src/features/featureFiles/*` каталоге с расширением `.feature` (настроенным в `wdio.conf.js`).

Список предопределенных и поддерживаемых шагов см. В файлах:

.`/src/features/step_definitions/given.js`

`./src/features/step_definitions/when.js`

.`/src/features/step_definitions/then.js.`

##Реализация пользовательских шагов

Фрагменты определяются с помощью регулярных выражений. Это позволяет реализовывать сложные предложения. Все, что находится внутри, "([^"]*)?" захватывается и добавляется к обратному вызову.
Чтобы получить доступ к функциям браузера, обратитесь к глобальной переменной, browser которая является экземпляром браузера WebdriverIO . Смотрите в [документации](https://webdriver.io/docs/api.html) список поддерживаемых методов.
Утверждения пишутся с использованием [chai](https://www.chaijs.com/) .

##Конфигурационные файлы

В директории `./src/config` присутствует возможность добавлять новые конфигурационные файлы с различными браузерами и ОС
Каждый новый конфигурационный файл должен иметь следующую структуру:
```js
const {config} = require('../../wdio.conf');

config.capabilities = [{

        browserName: 'firefox',

    }];

exports.config = config;
```
В первой строчке идет объявление местоположения основного конфигурационного файла - `wdio.conf.js`
Все значения(параметры/свойства) указанные в новом конфиге через `config.` переопределяют значения основного (`wdio.conf.js`)
Все значения(параметры/свойства) не указанные подтягиваются из основного конфигурационного файла

##Тэгирование тестов в Cucumber

[Официальная документация](https://cucumber.io/docs/cucumber/api/#tags)



##Запуск тестов с определенными тэгами

- Через `wdio.conf`:
в файле `wdio.conf.js` добавить тэг в `cucumberOpts`:

```js
cucumberOpts: {

tagExpression: '@необходимый тэг'

}
```
После этого в консоле выполнить команду: 
```
wdio wdio.conf.js
``` 
- Через npm

```
npm run test -- --cucumberOpts.tagExpression='not @fast and smoke'
```
запустит тесты с тегом smoke и исключит из списка запуска тесты с тэгом fast

- Пример команды для запуска тестов:
```
URL_LAND='https://jet-wheel.com/' PROJECT='SOL' URL='https://dev:dev123@dev.kube.dev001.ru/ru'  npm run chrome -- --cucumberOpts.tagExpression='@socialRegistration'
```

`URL_LAND` - для тестов с лендингами

`PROJECT` - проект на котором запускаются тесты

`chrome` - скрипт запускающий браузер Chrome(или браузер указанный в `wdio.conf`)

##Настройка selenoid

- [Установить Docker на PC](https://www.docker.com/products/docker-desktop)

- [Мануал по установке selenoid](https://aerokube.com/selenoid/latest/)



- Запустить `selenoid` можно одной командой:
```
curl -s https://aerokube.com/cm/bash | bash \
  && ./cm selenoid start --vnc --tmpfs 128
```
-  Либо скачать [Configuration Manager](https://github.com/aerokube/cm/releases/tag/1.7.2)
- Команда для запуска selenoid:
```
./cm selenoid start --vnc
```
- Для запуска Selenoid UI:
```
./cm selenoid-ui start
```
- Чтобы открыть Selenoid UI, перейдите на следующую страницу в браузере:

[http://localhost:8080/#/](http://localhost:8080/#/)

- В файле `wdio.conf.js` добавить строки:
```js
  exports.config = {
      hostname: "localhost",
      port: 4444,
      path: "/wd/hub",
      capabilities: [{
            browserVersion: '85.0',
            'goog:chromeOptions': {
                 args: [
                      '--window-size=1920,1080',
                      '--no-sandbox',
                      '--disable-dev-shm-usage'
                        ],
                    },

                    'selenoid:options': {
                        enableVNC: true,
                        enableVideo: false
                    }
                       }]
}
   ``` 
   
 ##Appium
[Документация по Appium](http://appium.io/docs/en/about-appium/intro/)

Установить Appium:
```
npm install -g appium
```
Запустить appium можно командой: 
```
appium
```
Начиная с Appium 1.15.0 появилась возможность автоматически загружать необходимые хромированные драйверы chromedriverExecutableDirиз официального хранилища Google. Сценарий автоматически найдет самую новую версию chromedriver, которая поддерживает данный браузер / веб-представление, загрузит ее (хэш-сумма также проверяется для загруженного архива) и добавит в chromedriverChromeMappingFileсопоставление. Все, что нужно сделать с вашей стороны, - это запустить сервер с chromedriver_autodownloadвключенной функцией 

В нашем случае команда для запуска сервиса appium выглядит следующим образом:
```
appium --allow-insecure chromedriver_autodownload
```

##iOS

Конфигурация на iOS устройства(эмулятор/реальный девайс):
```js
[{
    platformName : 'iOS',
    browserName : 'safari',
    maxInstances: 1,
    automationName: 'XCUITest',
    udid: "00008020-001465CA1488003A",
    deviceName: 'iPhone 10',
    platformVersion: '13.6.1',
    port: 4723,
    path: '/wd/hub',
    appium: {
    args: {},
} 
}]
```
Установка дополнительных пакетов:
Установка менеджера пакетов для macOS -  [Homebrew](https://brew.sh/index_ru)
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

```

```
brew update
```

Затем мы установим [libimobiledevice](https://libimobiledevice.org/) , пакет с открытым исходным кодом, который может взаимодействовать с устройствами iOS. Единственными официальными приложениями, созданными Apple для связи с устройствами iOS, являются Xcode и iTunes. Эти приложения не были созданы для простого программного использования, поэтому Appium использует libimobiledevice для определенных операций.
```
brew install libimobiledevice
```
Appium также использует пакет под названием ios-deploy для переноса приложений iOS на ваше устройство, так что давайте установим и его.

```
brew install ios-deploy
```
Самому WDA требуется менеджер зависимостей iOS под названием [Carthage](https://github.com/Carthage/Carthage) . Поскольку Appium будет автоматически создавать приложение WDA, нам нужно установить Carthage, чтобы оно было доступно процессу начальной загрузки WDA.   

Для реальных устройств мы можем использовать xcpretty, чтобы сделать вывод Xcode более разумным. Это может быть установлено

```
gem install xcpretty
```

Настройка WebDriverRunnerAgent проекта:
Перейти в директорию:
```
/usr/local/lib/node_modules/appium/node_modules/appium-webdriveragent
```
Открыть проект `WebDriverAgent.xcodeproj` в Xcode'е - помочь может команда:
```
open .
```

Изменить версию `Deployment Info` на версию ОС устройства в General-> `iOS Deployment Target`/`Target` во всех Targets
Выбрать чекбокс `Automatically manage signing` в `Signing and Capabilities`
Войти в девелоперский Apple аккаунт в разделе `Signing and Capabilities` ->  `Team`

  
##Troubleshooting
    
- Если при копировании проекта не создалась папка /reports/json/tmp, то    
необходимо добавить права на папку проекта, чтобы при запуске тестов создались папки в директории reports:
```
sudo chmod -R 777 /Users/e.miasoedov/jsbot 
или
sudo chmod -x /Users/e.miasoedov/jsbot
```
- Если при выполнении команды npm install не установился модуль @wdio/sync, то необходимо перейти по [ссылке](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d) и выполнить шаги согласно инструкции

-  При работе с Safari(desktop) необходимо предварительно выполнить команду в консоле:
```
safaridriver --enable
``` 
Она включает возможность удаленной автоматизации

##Полезные ссылки
- [Как протестировать на реальных устройствах iOS с помощью Appium, часть 1](https://appiumpro.com/editions/40-how-to-test-on-real-ios-devices-with-appium-part-1)
- [Как тестировать реальные устройства iOS с помощью Appium, часть 2](https://appiumpro.com/editions/41-how-to-test-real-ios-devices-with-appium-part-2)
