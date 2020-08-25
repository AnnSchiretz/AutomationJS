module.exports = {
    'Правильная почта': 'e.miasoedov+test_9999@jetmail.cc',
    'Правильный пароль': 'password_1',
    'Пароль Новорег': '123123123',
    'Случайная почта': ("autotest+"+browser.helper.randomNumber+browser.helper.randomNumber+"@jetmail.cc"),
    'Логин VK': "+79587998611",
    'Пароль VK': "qwerty!123456",
    'Регистрация ОК': (process.env.URL+"users/auth/odnoklassniki"),
    'Регистрация Facebook': (process.env.URL+"users/auth/facebook"),
    'Регистрация VK': (process.env.URL+"users/auth/vkontakte"),
    'Регистрация MailRU': (process.env.URL+"users/auth/mailru"),
    'Регистрация Yandex': (process.env.URL+"users/auth/yandex"),
    'Регистрация Google+': (process.env.URL+"users/auth/google_oauth2"),
    'Регистрация Telegram': (process.env.URL+"users/auth/tlgrm"),
    'Имя': 'AutoTestName_'+browser.helper.randomNumber,
    'Фамилия': 'AutoTestLastName_' +browser.helper.randomNumber,
    'Телефон': browser.helper.randomPhoneNumber,

    //SOL
    'Правильный тайтл SOL Sport': "Сол Казино (Sol Casino) официальный сайт c бонусом за регистрацию",

    //JET
    'Правильный тайтл JET Bonuses': "Jet Casino is an official website to play slot machines online with a bonus for registration - Jet.casino"

};
