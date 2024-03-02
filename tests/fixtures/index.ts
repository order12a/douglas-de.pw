import { test } from '@playwright/test';
import { Application } from '../../src/app/application';
import { parfumSection } from '../../src/constants/menu-sections';

export const anonymousBuyerParfumFixture = test.extend<{ app: Application }>({
    app: async ({ page }, use) => {
        // Pre-Condition stage
        const app = new Application(page);
        await app.landingPage.open();
        await app.landingPage.expectLoaded();
        await app.landingPage.acceptAllCookies();
        await app.landingPage.navigateTo(parfumSection);
        await app.parfumPage.expectLoaded();

        // Passing app into the test
        await use(app);

        // Post Condition stage
        await app.parfumPage.clearAllFilters();
    },
});