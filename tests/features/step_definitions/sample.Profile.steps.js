const {When, Then} = require('cucumber');


const ProfilePage = require('../../pages/sampleProfile.page.js');
const profile = new ProfilePage();

Then(/^Я должен увидеть форму редактирования профиля$/, function () {
    profile.editProfileFormIsDisplayed();
});

When(/^Я нажимаю кнопку 'Настройки'$/, function () {
    profile.openProfileSettingsPage();

});
When(/^Я нажимаю кнопку 'Профайл'$/, function () {
    profile.openProfilePage();

});