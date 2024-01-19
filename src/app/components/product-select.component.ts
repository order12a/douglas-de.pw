import { BaseComponent } from '../BaseClasses';
import { expect } from '@playwright/test';

export class ProductSelectComponent extends BaseComponent {
    readonly containerSelector = this.page.locator('.facet-list');
    readonly dropDownMenu = this.containerSelector.locator('.facet__menu-content');

    async expectLoaded(message = 'Wait Filters Component is loaded'){
        await expect(this.containerSelector, message).toBeVisible();
    }
    
    async clickSelectByCriteria(criteriaType: string) {
        await this.containerSelector
            .locator('.facet__title', { hasText: criteriaType })
            .click();
    }

    async expectDropdownMenuOpened() {
        await expect(this.dropDownMenu).toBeVisible();
    }

    async selectByCriteriaOption(option: string) {
        await this.dropDownMenu
            .locator('.facet-option__checkbox--rating-stars', { hasText: option })
            .click()
        await this.page.waitForLoadState('domcontentloaded');
    }

    async dismissDropdown() {
        await this.containerSelector.press('Escape');
        await this.page.waitForLoadState('domcontentloaded');
    }
}