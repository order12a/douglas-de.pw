import { BasePage } from '../base-classes';
import { step } from '../../util/reporter/step';
import { expect } from '@playwright/test';


export class LandingPage extends BasePage {
    public pagePath = '/';

    readonly header = this.page.locator('header');
    // TODO extract cookie dialog actions into separate module
    readonly acceptCookieHeader = this.page.getByText('Privatsphäre-Einstellungen');
    readonly acceptAllCookiesButton = this.page.getByRole('button', { name: 'Alle erlauben' });
    readonly carousel = this.page.locator('div[class*="douglas-swiper-carousel--ssr-first-image-fix"]');

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
        await this.page.mouse.move(this.page.viewportSize()!.width/2, this.page.viewportSize()!.height/2);
    }
}