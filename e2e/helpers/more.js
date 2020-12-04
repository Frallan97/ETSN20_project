import More from '../pages/More.po';

export const confirmDeleteLocationHistory = async (languageStrings) => {
    await More.tapDeleteLocationHistory(languageStrings);
    await More.tapConfirmDeletion(languageStrings);
}

export const cancelDeleteLocationHistory = async (languageStrings) => {
    await More.tapDeleteLocationHistory(languageStrings);
    await More.tapCancelDeletion(languageStrings);
}