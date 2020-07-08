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

запустит тесты с тэгом smoke и исключит из списка запуска тесты с тэгом fast