import { test } from '@playwright/test';
import { Application } from '../src/app/application';
import { brandsSection, parfumSection } from '../src/constants/menu-sections';

test.describe('Cookie Handler automated accept', async () => {
    let app: Application;

    test.beforeEach('Initialize the app', async ({ page }) => {
        app = new Application(page);

        await page.addLocatorHandler(
            app.landingPage.acceptCookieHeader,
            async () => {
                await app.landingPage.acceptAllCookiesButton.click();
            });

        await app.landingPage.open();
        await app.landingPage.expectLoaded();
    });

    test('Check addLocatorHandler feature work', async ({ page }) => {
        await app.landingPage.navigateTo(brandsSection);
        await app.brandPage.expectLoaded();
        await app.brandPage.navigateTo(parfumSection);

        await app.parfumPage.expectLoaded();
        // For visual check that Cookie Handler is closed automatically
        await page.waitForTimeout(5000);
    });
});