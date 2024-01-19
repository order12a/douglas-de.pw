"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = exports.BaseComponent = exports.PageHolder = void 0;
const step_1 = require("../util/reporter/step");
class PageHolder {
    page;
    constructor(page) {
        this.page = page;
    }
}
exports.PageHolder = PageHolder;
class BaseComponent extends PageHolder {
}
exports.BaseComponent = BaseComponent;
class BasePage extends BaseComponent {
    @(0, step_1.step)()
    async open(path) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }
}
exports.BasePage = BasePage;
