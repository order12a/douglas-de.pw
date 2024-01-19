"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParfumPage = void 0;
const BaseClasses_1 = require("../BaseClasses");
const step_1 = require("../../util/reporter/step");
const test_1 = require("@playwright/test");
const product_select_component_1 = require("../components/product-select.component");
class ParfumPage extends BaseClasses_1.BasePage {
    pagePath = '/c/parfum/01';
    minimalYyeCatcherElementsNumber = 1;
    productSelect = new product_select_component_1.ProductSelectComponent(this.page);
    productList = this.page.locator('.product-grid__listing-content');
    productTile = this.productList.locator('.product-tile');
    clearAllFiltersButton = this.page.getByRole('button', { name: 'Alle Filter löschen' });
    @(0, step_1.step)()
    async expectLoaded(message = 'Expected "Parfum" page to be opened') {
        await (0, test_1.expect)(this.productList, message).toBeVisible();
    }
    @(0, step_1.step)()
    async clearAllFilters() {
        try {
            await this.clearAllFiltersButton.click();
        }
        catch (error) {
            console.error(`Could not clear filters. Make sure at least one filter is enabled`);
        }
        await this.page.waitForLoadState('domcontentloaded');
    }
    @(0, step_1.step)()
    async expectEyeCatcherProductsAppear(type) {
        const eyeCatcherElements = (await (await this.getEyeCatcherElementsByType(type)).all());
        (0, test_1.expect)(eyeCatcherElements.length).toBeGreaterThan(this.minimalYyeCatcherElementsNumber);
        const assertionPromises = eyeCatcherElements
            .map(async (eyeCatcherElement) => (0, test_1.expect)(eyeCatcherElement).toBeVisible());
        await Promise.all(assertionPromises);
    }
    async getEyeCatcherElementsByType(type) {
        return this.productTile.locator('[data-testid="product-eyecatcher"]', { hasText: type });
    }
}
exports.ParfumPage = ParfumPage;
