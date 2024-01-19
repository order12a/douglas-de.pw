"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilterBy_1 = require("../src/model/FilterBy");
const ExpectedProductCategory_1 = require("../src/model/ExpectedProductCategory");
const fixtures_1 = require("./fixtures");
fixtures_1.anonymousUserFixture.describe('Select Parfum feature tests', () => {
    fixtures_1.anonymousUserFixture.afterEach('Clear filters after each test', async ({ app: { parfumPage } }) => {
        await parfumPage.clearAllFilters();
    });
    (0, fixtures_1.anonymousUserFixture)('Simple select Parfum test', async ({ app: { parfumPage } }) => {
        await parfumPage.productSelect.expectLoaded();
        await parfumPage.productSelect.clickSelectByCriteria(FilterBy_1.FilterBy.ProductType);
        await parfumPage.productSelect.selectByCriteriaOption('Eau de Parfum');
        await parfumPage.productSelect.dismissDropdown();
        await parfumPage.expectEyeCatcherProductsAppear(ExpectedProductCategory_1.ExpectedProductCategory.Sale);
    });
});
