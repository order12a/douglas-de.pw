import { BaseComponent } from '../base-classes';
import { expect } from '@playwright/test';
import { step } from '../../util/reporter/step';

export class ProductSelectComponent extends BaseComponent {
    readonly containerSelector = this.page.locator('.facet-list');
    readonly dropDownMenu = this.containerSelector.locator('.facet__menu-content');

    @step()
    async expectLoaded(message = 'Wait Filters Component is loaded'){
        await expect(this.containerSelector, message).toBeVisible();
    }

    @step()
    async clickSelectByCriteria(criteriaType: string) {
        await this.containerSelector
            .locator('.facet__title', { hasText: criteriaType })
            .click();
    }

    @step()
    async expectDropdownMenuOpened() {
        await expect(this.dropDownMenu).toBeVisible();
    }

    @step()
    async selectByCriteriaOption(option: string) {
        await this.dropDownMenu
            .locator('.facet-option__checkbox--rating-stars', { hasText: option })
            .click()
        await this.page.waitForLoadState('domcontentloaded');
    }

    @step()
    async dismissDropdown() {
        await this.containerSelector.press('Escape');
        await this.page.waitForLoadState('load');
    }
}