import { BasePage } from '../base-classes';
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
        await expect(this.clearAllFiltersButton).toHaveCount(0);
    }

    @step()
    async expectEyeCatcherProductsAppear(type: string) {
        const visibleEyeCatcherElements = (await (await this.getEyeCatcherElementsByType(type)).all()).filter(element => {
            return element.isVisible();
        });
        expect(visibleEyeCatcherElements.length, `Expect products with special offer type ${type} to appear`)
            .toBeGreaterThan(this.minimalYyeCatcherElementsNumber);
    }

    @step()
    async getEyeCatcherElementsByType(type: string) {
        return this.productTile.locator('[data-testid="product-eyecatcher"]',{ hasText: type });
    }
}