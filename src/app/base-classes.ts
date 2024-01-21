import { Page } from '@playwright/test';
import { step } from '../util/reporter/step';

export abstract class PageHolder {
    constructor(protected page: Page) { }
}

export abstract class BaseComponent extends PageHolder {
    abstract expectLoaded(message?: string): Promise<void>;
}

export abstract class BasePage extends BaseComponent {
    public abstract pagePath: string;

    @step()
    async open(path?: string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }
}