import More from '../pages/More.po';

describe.each(languages)(
    `Delete Location History in %s`,
    (locale, languageStrings) => {
        beforeAll(async () => {
            await device.launchApp({
                newInstance: true,
                languageAndLocale: {
                    language: locale,
                    locale,
                },
                permissions: { location: 'inuse', notifications: 'YES' },
            });
        });

        describe('Delete Location History', () => {
            beforeEach(async () => {
                await More.tapDeleteLocationHistory(languageStrings);
            });

            it('Should delete location data after user click on the confirm button', async () => {

            });

            it('Should hide the modal after user click on the confirm button', async () => {
                await More.tapConfirmDeletion(languageStrings);
                await More.takeScreenshot()
                // Should query user location and receive nothing
            });

            it('Should hide the modal after user click on the cancel button', async () => {
                await More.tapCancelDeletion(languageStrings);
                await More.takeScreenshot()
                // Should query user location and receive the previous data
            });

            afterAll(async () => {
                await device.uninstallApp();
                await device.installApp();
            });
        });
    },
);