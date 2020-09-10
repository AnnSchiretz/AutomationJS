class OtherElements {

    constructor() {
        this.elements = {
            'Логотип': this.logo,
            'ОК Форма': this.okForm,
            'Facebook Форма': this.facebookForm,
            'MailRU Форма': this.mailRuForm,
            'Yandex Форма': this.yandexForm,
            'Google+ Форма': this.googleForm,
            'Telegram Форма': this.telegramForm,
            'Страница Со Ставками': this.sportPage,

        };
    }

    get okForm() {
        return ('[class="widget-oauth"]');
    }

    get facebookForm() {
        return ('[id="loginform"]');
    }

    get mailRuForm() {
        return ('[id="login-form"]');
    }

    get yandexForm() {
        return ('[class="passp-add-account-page_has-social-block"]');
    }

    get googleForm() {
        return ('[type="email"]');
    }

    get telegramForm() {
        return ('[id="widget_login"]');
    }

    get logo() {
        return ('[data-test="logo_casino"]');
    }

    get sportPage() {
        return ('#bettech');
    }
}


module.exports = new OtherElements();