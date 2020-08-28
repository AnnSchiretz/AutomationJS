# language: ru

Функция: Проверка мин, финансовых ограничений платежных систем

  @TEST_TST-5028 @ВЫВОД @sol
  Сценарий: 1.8.1. Проверка мин, финансовых ограничений платежных систем
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Регистрация" в хедере
    Когда Я ввожу "Почта Подтвержденная" в "Поле Почта" на "Форма Регистрации/Авторизации"
    Когда Я ввожу "Пароль от Подтвержденной Почты" в "Поле Пароль" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Чекбокс Получать информацию" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Зарегистрироваться" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Продолжить без бонуса" на "Форма Дорегистрации"
    Когда Я нажимаю "Закрыть Окно" на "Форма Дорегистрации"

    Когда Я нажимаю "Депозит" в хедере
    Когда Я нажимаю "Вывод средств" на "Форма Депозита"
    Тогда Я вижу "Выберите способ вывода" на "Форма Депозита"
    Когда Я нажимаю "Банковская карта" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 2000 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Qiwi кошелек" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Яндекс.Деньги" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Мобильные платежи" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Bitcoin" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Etherium" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Ripple" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Litecoin" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "Bitcoin Cash" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Изменить" на "Форма Депозита"
    Когда Я нажимаю "PAYEER" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Профиль" в хедере
    Когда Я нажимаю "Выход" на "Страница Профиль Пользователя"
    Когда Я нажимаю "Подтвердить Выход - Да" на "Страница Профиль Пользователя"
    Тогда Я вижу "Регистрация" в хедере


  @TEST_TST-5028 @ВЫВОД @jet
  Сценарий: 1.8.1. Проверка мин, финансовых ограничений платежных систем
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Регистрация" в хедере
    Когда Я ввожу "Случайная почта" в "Поле Почта" на "Форма Регистрации/Авторизации"
    Когда Я ввожу "Пароль Новорег" в "Поле Пароль" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Чекбокс Получать информацию" на "Форма Регистрации/Авторизации"
    Когда Я нажимаю "Зарегистрироваться" на "Форма Регистрации/Авторизации"
    Когда Я вижу кнопку "Проверить почту" на "Уведомления"
    Когда Я нажимаю "Закрыть Окно" на "Уведомления"
    Когда Я нажимаю "Закрыть Окно" на "Форма Дорегистрации"

    Когда Я нажимаю "Депозит" в хедере
    Когда Я нажимаю "Вывод средств" на "Форма Депозита"
    Когда Я нажимаю "Банковская карта" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 2000 ₽" на "Форма Депозита"
    Когда Я нажимаю "Qiwi кошелек" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Яндекс.Деньги" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Мобильные платежи" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Bitcoin" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Etherium" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Ripple" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Litecoin" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "Bitcoin Cash" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 400 ₽" на "Форма Депозита"
    Когда Я нажимаю "PAYEER" на "Форма Депозита"
    Тогда Я вижу "Сообщение" с текстом "Минимальная сумма для вывода средств у данного способа составляет 100 ₽" на "Форма Депозита"
    Когда Я нажимаю "Закрыть Окно" на "Форма Дорегистрации"
    Когда Я нажимаю "Боковая Панель" в хедере
    Когда Я нажимаю "Выход" в боковом меню
    Когда Я нажимаю "Подтвердить Выход - Да" на "Страница Профиль Пользователя"
    Тогда Я вижу "Регистрация" в хедере