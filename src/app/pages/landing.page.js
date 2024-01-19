"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
const BaseClasses_1 = require("../BaseClasses");
const step_1 = require("../../util/reporter/step");
const test_1 = require("@playwright/test");
class LandingPage extends BaseClasses_1.BasePage {
    pagePath = '/';
    header = this.page.locator('header');
    acceptAllCookiesButton = this.page.getByRole('button', { name: 'Alle erlauben' });
    carousel = this.page.locator('main div[class*="douglas-swiper-carousel--ssr-first-image-fix"]');
    @(0, step_1.step)()
    async expectLoaded() {
        await (0, test_1.expect)(this.header, 'Expect Header is visible').toBeVisible();
        await (0, test_1.expect)(this.carousel, 'Expect Carousel is loaded').toBeVisible();
    }
    @(0, step_1.step)()
    async acceptAllCookies() {
        await this.acceptAllCookiesButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    @(0, step_1.step)()
    async navigateTo(menuItemName) {
        await this.page
            .locator('.navigation-main-entry a[type="nav-heading"]', { hasText: menuItemName })
            .click();
    }
}
exports.LandingPage = LandingPage;
