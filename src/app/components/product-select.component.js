"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSelectComponent = void 0;
const BaseClasses_1 = require("../BaseClasses");
const test_1 = require("@playwright/test");
class ProductSelectComponent extends BaseClasses_1.BaseComponent {
    containerSelector = this.page.locator('.facet-list');
    dropDownMenu = this.containerSelector.locator('.facet__menu-content');
    async expectLoaded(message = 'Wait Filters Component is loaded') {
        await (0, test_1.expect)(this.containerSelector, message).toBeVisible();
    }
    async clickSelectByCriteria(criteriaType) {
        await this.containerSelector
            .locator('.facet__title', { hasText: criteriaType })
            .click();
    }
    async expectDropdownMenuOpened() {
        await (0, test_1.expect)(this.dropDownMenu).toBeVisible();
    }
    async selectByCriteriaOption(option) {
        await this.dropDownMenu
            .locator('.facet-option__checkbox--rating-stars', { hasText: option })
            .click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    async dismissDropdown() {
        await this.containerSelector.press('Escape');
        await this.page.waitForLoadState('domcontentloaded');
    }
}
exports.ProductSelectComponent = ProductSelectComponent;
