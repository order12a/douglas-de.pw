"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const BaseClasses_1 = require("./BaseClasses");
const landing_page_1 = require("./pages/landing.page");
const parfum_page_1 = require("./pages/parfum.page");
class Application extends BaseClasses_1.PageHolder {
    landingPage = new landing_page_1.LandingPage(this.page);
    parfumPage = new parfum_page_1.ParfumPage(this.page);
}
exports.Application = Application;
