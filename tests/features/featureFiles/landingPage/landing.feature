# language: ru

  Функция: Регистрация через лендинг
    @TEST_TST-5023 @registration @jet @sol
    Сценарий: 1.1.10 Регистрация: Проверка регистрации через лендинг (опционально ТОЛЬКО если был изменен БЭКЕНД)
      Пусть Я нахожусь на лендинге
      Когда Я нажимаю "Крутить" на "Лендинг"
      Когда Я нажимаю "Крутить еще" на "Лендинг"
      Когда Я нажимаю "Крутить" на "Лендинг"
      Тогда Я вижу "Форма Регистрации" на "Лендинг"
      Когда Я ввожу "Случайная почта" в "Поле Почта" на "Лендинг"
      Когда Я ввожу "Пароль Новорег" в "Поле Пароль" на "Лендинг"
      Когда Я нажимаю "Зарегистрироваться" на "Лендинг"
      Тогда Я нахожусь на главной странице сайта
      Тогда Я вижу "Депозит/Касса" в хедере