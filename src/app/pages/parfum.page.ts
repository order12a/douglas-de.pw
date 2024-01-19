import { BasePage } from '../BaseClasses';
import { step } from '../../util/reporter/step';
import { expect } from '@playwright/test';
import { ProductSelectComponent } from '../components/product-select.component';

export class ParfumPage extends BasePage {
    public pagePath = '/c/parfum/01';
    public readonly minimalYyeCatcherElementsNumber = 1;

    readonly productSelect = new ProductSelectComponent(this.page);
    readonly productList = this.page.locator('.product-grid__listing-content');
    readonly productTile = this.productList.locator('.product-tile');
    readonly clearAllFiltersButton = this.page.getByRole('button', { name: 'Alle Filter löschen' });

    @step()
    async expectLoaded(message = 'Expected "Parfum" page to be opened') {
        await expect(this.productList, message).toBeVisible();
    }

    @step()
    async clearAllFilters() {
        try {
            await this.clearAllFiltersButton.click();
        } catch (error) {
            console.error(`Could not clear filters. Make sure at least one filter is enabled`);
        }
        await this.page.waitForLoadState('domcontentloaded');
    }

    @step()
    async expectEyeCatcherProductsAppear(type: string) {
        const eyeCatcherElements = (await (await this.getEyeCatcherElementsByType(type)).all());
        expect(eyeCatcherElements.length).toBeGreaterThan(this.minimalYyeCatcherElementsNumber);
        const assertionPromises = eyeCatcherElements
            .map(async (eyeCatcherElement) => expect(eyeCatcherElement).toBeVisible());
        await Promise.all(assertionPromises);
    }

    async getEyeCatcherElementsByType(type: string) {
        return this.productTile.locator('[data-testid="product-eyecatcher"]',{ hasText: type });
    }
}