import { type Page, test } from '@playwright/test';
import { Application } from '../../src/app/application';
import { parfumSection } from '../../src/constants/menu-sections';

export let page: Page;
export let app: Application;

export const setUp = () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        app = new Application(page);
        await app.landingPage.open();
        await app.landingPage.expectLoaded();
        await app.landingPage.acceptAllCookies();
        await app.landingPage.navigateTo(parfumSection);
        await app.parfumPage.expectLoaded();
    });
};

export const tearDown = () => {
    test.afterAll('Close page', async () => {
        await page?.close();
    })
}

export const    clearFilters = () => {
    test.afterEach('Clear filters', async () => {
        await app?.parfumPage.clearAllFilters();
    })
}