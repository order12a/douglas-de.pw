import { anonymousBuyerParfumFixture } from './fixtures';
import { scenarios } from './test-data/scenarios';

/**
 * With using of fixtures
 */

anonymousBuyerParfumFixture.describe('Select Parfum feature tests', () => {
    anonymousBuyerParfumFixture.afterEach('Clear filters after each test',
        async ({ app: { parfumPage } }) => {
            await parfumPage.clearAllFilters();
        });

    for (const scenario of scenarios) {
        anonymousBuyerParfumFixture(`Select Parfum product to match ${scenario.expectedSpecialCategory}`,
            async ({ app: { parfumPage } }) => {
                for (const filter of scenario.criteria) {
                    await parfumPage.productSelect.expectLoaded();
                    await parfumPage.productSelect.clickSelectByCriteria(filter.filterType);
                    await parfumPage.productSelect.selectByCriteriaOption(filter.filterValue);
                    await parfumPage.productSelect.dismissDropdown();
                }

                await parfumPage.expectEyeCatcherProductsAppear(scenario.expectedSpecialCategory);
            });
    }
});