import { PageHolder } from './base-classes';
import { LandingPage } from './pages/landing.page';
import { ParfumPage } from './pages/parfum.page';
import { BrandPage } from './pages/brand.page';

export class Application extends PageHolder {
    public landingPage = new LandingPage(this.page);
    public parfumPage = new ParfumPage(this.page);
    public brandPage = new BrandPage(this.page);
}