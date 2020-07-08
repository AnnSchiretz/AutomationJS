const NativePage = require('./native.page.js');
const homePageData = require('../files/testData/sampleHome.data.js');

class sampleProfilePage extends NativePage {

    get authPageElement() {
        return this.getPage('sampleProfile.locators');
    }


    openProfilePage() {
        const profileButton = $(this.authPageElement.profileButton);



        browser.waitUntil(() => profileButton.isDisplayed, {
            timeout: 20000,
            timeoutMsg: "Отсутствует кнопка 'Профайл'"

        });



        profileButton.click();
    }

    openProfileSettingsPage() {
        const settingsButton = $(this.authPageElement.settingsButton);
        browser.waitUntil(() => settingsButton.isDisplayed, {
            timeout: 20000,
            timeoutMsg: "Отсутствует кнопка 'Настройки'"

        });
        settingsButton.click();

    }


    editProfileFormIsDisplayed() {

        const editProfileForm = $(this.authPageElement.editProfileForm);
        editProfileForm.waitForDisplayed({timeout: 10000});

        return editProfileForm.isDisplayed();
    }


}

module.exports = sampleProfilePage;
