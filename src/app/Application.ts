import { PageHolder } from './BaseClasses';
import { LandingPage } from './pages/landing.page';
import { ParfumPage } from './pages/parfum.page';

export class Application extends PageHolder {
    public landingPage = new LandingPage(this.page);
    public parfumPage = new ParfumPage(this.page);
}