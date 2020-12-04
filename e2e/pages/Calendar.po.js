const screenshotText = 'Calendar';

class Calendar {
    async takeScreenshot() {
        await device.takeScreenshot(screenshotText);
    } 

    async tapQuestionMark(languageStrings){
        await element(by.element.).tap();
    }

    async tapLegend(languageStrings){
        await element(by.label(languageStrings.screen_titles.legend_button)).tap();
    }
    
    async tapDate(languageStrings,date) {
        await element(by.label(languageStrings.screen_titles.legend_button)).tap();
    }

}

export default new Calendar();