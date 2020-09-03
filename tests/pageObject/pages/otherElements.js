class OtherElements {

    constructor() {
        this.elements = {
            'Логотип': this.profileButton,
            'ОК Форма': this.okForm,
            'Facebook Форма': this.facebookForm,
            'MailRU Форма': this.mailRuForm,
            'Yandex Форма': this.yandexForm,
            'Google+ Форма': this.googleForm,
            'Telegram Форма': this.telegramForm


        };
    }

    get logoButton() {
        return ('[class="top-bar__logo"]');
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

}


module.exports = new OtherElements();