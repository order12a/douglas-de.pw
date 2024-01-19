import { BasePage } from '../BaseClasses';
import { step } from '../../util/reporter/step';
import { expect } from '@playwright/test';


export class LandingPage extends BasePage {
    public pagePath = '/';

    readonly header = this.page.locator('header');
    readonly acceptAllCookiesButton = this.page.getByRole('button', { name: 'Alle erlauben' });
    readonly carousel = this.page.locator('main div[class*="douglas-swiper-carousel--ssr-first-image-fix"]');

    @step()
    async expectLoaded() {
        await expect(this.header, 'Expect Header is visible').toBeVisible();
        await expect(this.carousel, 'Expect Carousel is loaded').toBeVisible();
    }

    @step()
    async acceptAllCookies() {
        await this.acceptAllCookiesButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    @step()
    async navigateTo(menuItemName: string) {
        await this.page
            .locator('.navigation-main-entry a[type="nav-heading"]', { hasText: menuItemName })
            .click();
    }
}