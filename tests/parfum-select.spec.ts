import { FilterBy } from '../src/model/FilterBy';
import { ExpectedProductCategory } from '../src/model/ExpectedProductCategory';
import { anonymousUserFixture } from './fixtures';

anonymousUserFixture.describe('Select Parfum feature tests', () => {
    anonymousUserFixture.afterEach('Clear filters after each test', async ({ app: { parfumPage } }) => {
        await parfumPage.clearAllFilters();
    });

    anonymousUserFixture('Simple select Parfum test', async ({ app: { parfumPage } }) => {
        await parfumPage.productSelect.expectLoaded();
        await parfumPage.productSelect.clickSelectByCriteria(FilterBy.ProductType);
        await parfumPage.productSelect.selectByCriteriaOption('Eau de Parfum');
        await parfumPage.productSelect.dismissDropdown();
        
        await parfumPage.expectEyeCatcherProductsAppear(ExpectedProductCategory.Sale);
    });
});