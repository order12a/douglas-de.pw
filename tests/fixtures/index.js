"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonymousUserFixture = void 0;
const test_1 = require("@playwright/test");
const Application_1 = require("../../src/app/Application");
const data_1 = require("../test-data/data");
exports.anonymousUserFixture = test_1.test.extend({
    app: async ({ page }, use) => {
        const app = new Application_1.Application(page);
        await app.landingPage.open();
        await app.landingPage.expectLoaded();
        await app.landingPage.acceptAllCookies();
        await app.landingPage.navigateTo(data_1.parfumSection);
        await app.parfumPage.expectLoaded();
        await use(app);
    }
});
