import { BasePage } from '../base-classes';
import { step } from '../../util/reporter/step';
import { expect } from '@playwright/test';

export class BrandPage extends BasePage {
    public pagePath = '/de/brands';

    readonly brandOverviewBlock = this.page.locator('.container .brand-overview-page')

    @step()
    async expectLoaded(message = 'Brand Overview page should be loaded'): Promise<void> {
        await expect(this.brandOverviewBlock, message).toBeVisible();
    }

    @step()
    async navigateTo(menuItemName: string) {
        await this.page
            .locator('.navigation-main-entry a[type="nav-heading"]', { hasText: menuItemName })
            .click();
        await this.page.mouse.move(this.page.viewportSize()!.width/2, this.page.viewportSize()!.height/2);
    }
}