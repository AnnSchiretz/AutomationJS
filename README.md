**Настройка дебага для проекта в WebStorm**

https://jetmail.atlassian.net/wiki/spaces/QTM/pages/772308993/WebStorm

1. В конфигурационном файле wdio.config.js добавить параметр:
debug: true
2. Указать feature-файл с тестами который хотим продебажить в файле wdio.config.js
3. Устанавливаем точки входа в дебаг-мод
4. Сгенерировать конфигурацию для запуска дебага в файле package.json нажатием “Debug 'test'“
5. Запустить отладчик(дебаг) 


**Тэгирование тестов в Cucumber**

https://cucumber.io/docs/cucumber/api/#tags


**Запуск тестов с определенными тэгами**

1. Через wdio.conf:
в файле wdio.conf.js добавить тэг в cucumberOpts:

cucumberOpts: {

tagExpression: '@необходимый тэг', 

}
После этого в консоле ввести команду: 

wdio wdio.conf.js
 
2. Через npm

npm run test -- --cucumberOpts.tagExpression='not @fast and smoke'

запустит тесты с тегом smoke и исключит из списка запуска тесты с тэгом fast

3. Пример команды для запуска тестов:
`URL_LAND='https://jet-wheel.com' PROJECT='JET' URL='https://jet.casino/'  npm run chrome -- --cucumberOpts.tagExpression='@TEST_TST-5022'`

URL_LAND - для тестов с лендингами
PROJECT - проект на котором запускаются тесты
chrome - скрипт запускающий браузер Chrome

**Настройка selenoid**

1. Установить Docker на PC
https://www.docker.com/products/docker-desktop
2. Мануал по установке selenoid:

https://aerokube.com/selenoid/latest/

3. Запустить selenoid можно одной командой:
curl -s https://aerokube.com/cm/bash | bash \
    && ./cm selenoid start --vnc --tmpfs 128
4.  Либо скачать Configuration Manager (https://github.com/aerokube/cm/releases/tag/1.7.2)
5. Команда для запуска selenoid%

./cm selenoid start --vnc

6. При желании запустите еще одну команду для запуска Selenoid UI:

./cm selenoid-ui start

7. Чтобы открыть Selenoid UI, перейдите на следующую страницу в браузере:

http://localhost:8080/#/

8. В файле wdio.conf.js добавить строки:


     exports.config = {
      hostname: "localhost",
      port: 4444,
      path: "/wd/hub",
  
             capabilities: [{
             browserVersion: '83.0',
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
    
   
    
    
**_Необходимо добавить права на папку проекта чтобы при запуске тестов создались папки в директории reports_**:
sudo chmod -R 777 /Users/e.miasoedov/jsbot
  
  Если при выполнении команды npm install не установился модуль @wdio/sync, то необходимо выполнить шаги согласно инструкции ниже:
  
  `https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d`