import { test, type Page } from '@playwright/test';
import { Application } from '../src/app/application';
import { scenarios } from './test-data/scenarios';
import { parfumSection } from '../src/constants/menu-sections';

test.describe.configure({ mode: 'serial' });

let page: Page;
let app: Application;

/**
 * Version Reuse single page between tests
 * We sacrifice test isolation to increase speed of the test run
 */

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    app = new Application(page);
    await app.landingPage.open();
    await app.landingPage.expectLoaded();
    await app.landingPage.acceptAllCookies();
    await app.landingPage.navigateTo(parfumSection);
    await app.parfumPage.expectLoaded();
});
  
test.afterAll(async () => {
    await page.close();
});

test.afterEach('Clear selected filters', async() => {
    await app.parfumPage.clearAllFilters();
});

for (const scenario of scenarios) {
    test(`Select Parfum product to match ${scenario.expectedSpecialCategory}`, async () => {
        for (const filter of scenario.criteria) {
            await app.parfumPage.productSelect.expectLoaded();
            await app.parfumPage.productSelect.clickSelectByCriteria(filter.filterType);
            await app.parfumPage.productSelect.selectByCriteriaOption(filter.filterValue);
            await app.parfumPage.productSelect.dismissDropdown();
        }

        await app.parfumPage.expectEyeCatcherProductsAppear(scenario.expectedSpecialCategory);
    });
}

