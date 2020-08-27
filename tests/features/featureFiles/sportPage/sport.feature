# language: ru

Функция: Проверка тайтла на странице спорт


  @TEST_TST-5056 @СПОРТ @sol
  Сценарий: 1.10.2 СПОРТ: Пользователь видит плашку Спорт и 2  раздела Спорт : в хедере и в бургере СПОРТ
# “Спорт” = “Спорт в бургер меню” - это дефолтная кнопка спорт
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Спорт" в хедере
    Тогда Я вижу "" на "Страница Спорт"
    Когда Я нажимаю "Логотип" на "Страница Элементов"
    Тогда Я нахожусь на домашней странице
    Когда Я нажимаю "Спорт" на "Страница Элементов"
    Тогда Я вижу "" на "Страница Спорт"
    Когда Я нажимаю "Логотип" на "Страница Элементов"
    Тогда Я нахожусь на домашней странице
    Когда Я нажимаю "Спорт" в боковом меню
    Тогда Я вижу "" на "Страница Спорт"


  @sol @sport
  Сценарий: Я должен перейти на страницу 'Спорт' и удостовериться, что тайтл правильный
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Спорт" в хедере
    То Я должен увидеть "Правильный тайтл SOL Sport" тайтл

  @birthday
  Сценарий: (Удалить после отладки)
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Регистрация" в хедере
    Когда Я ввожу "Случайная почта" в "Поле Почта" на "Форма Регистрации/Авторизации"
    Когда Я ввожу "Пароль Новорег" в "Поле Пароль" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Чекбокс Получать информацию" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Зарегистрироваться" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Продолжить без бонуса" на "Форма Дорегистрации"
#    Когда Я нажимаю "Закрыть Окно" на "Форма Дорегистрации"
    Когда Я нажимаю "Профиль" в боковом меню
#    Когда Я нажимаю "Настройки" на "Страница Профиль Пользователя"
    Когда Я нажимаю "Настройки" на "Страница Профиль Пользователя"
#    Когда Я нажимаю "Дата Рождения" на "Страница редактирования профиля"
    Когда Я выбираю дату рождения

  @saveRandomEmail
  Сценарий: (Удалить после отладки)
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Регистрация" в хедере
    Когда Я ввожу "Случайная почта" в "Поле Почта" на "Форма Регистрации/Авторизации"