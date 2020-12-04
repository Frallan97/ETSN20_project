/* eslint-disable */
const screenshotText = 'More';

class More {
    async takeScreenshot() {
        await device.takeScreenshot(screenshotText);
    }

    async tapAbout(languageStrings) {
        await element(by.label(languageStrings.screen_titles.about)).tap();
    }

    async tapLegal(languageStrings) {
        await element(by.label(languageStrings.screen_titles.legal)).tap();
    }

    async tapDeleteLocationHistory(languageStrings) {
        await element(by.label(languageStrings.screen_titles.delete_location_history)).tap();
    }

    async tapConfirmDeletion() {
        await element(by.label(languageStrings.export.exit_warning_confirm)).tap();
    }

    
    async tapCancelDeletion() {
        await element(by.label(languageStrings.export.exit_warning_cancel)).tap();
    }

}

export default new More();
