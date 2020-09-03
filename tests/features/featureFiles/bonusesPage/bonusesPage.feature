# language: ru

@jet @bonuses
Функция: Проверка тайтла на странице бонусов

  Сценарий: 1.1 Я должен перейти на страницу бонусов и увидеть список бонусов
    Дано Я нахожусь на главной странице
    Когда Я нажимаю "Боковая Панель" в хедере
    Когда Я нажимаю "Кнопка Бонусы" в боковом меню
    То Я должен увидеть "Правильный тайтл JET Bonuses" тайтл


  @demo
  Сценарий: 1.2 Я должен перейти на страницу регистрации и проверить введенную почту
    Пусть Я нахожусь на главной странице
    Если Я нажимаю "Регистрация" в хедере
    Если Я ввожу "Случайная почта" в "Поле Почта" на "Форма Регистрации/Авторизации"
    Если Я ввожу "Случайная почта" в "Поле Пароль" на "Форма Регистрации/Авторизации"
