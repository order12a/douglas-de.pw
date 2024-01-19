import { test } from '@playwright/test';
import { Application } from '../../src/app/Application';
import { parfumSection } from '../test-data/data';

export const anonymousUserFixture = test.extend<{ app: Application }>({
    app: async ({ page }, use) => {
        const app = new Application(page);
        await app.landingPage.open();
        await app.landingPage.expectLoaded();
        await app.landingPage.acceptAllCookies();
        await app.landingPage.navigateTo(parfumSection);

        await app.parfumPage.expectLoaded();
        await use(app);
    }
});