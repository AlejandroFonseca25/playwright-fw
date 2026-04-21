import { Locator, Page } from '@playwright/test';

export class BasePage {
    
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async findElement(locator: string):Promise<Locator> {
        return this.page.locator(locator);
    }

    async type(element: Locator, text: string) {
        await element.fill(text);
    }

    async clearText(element: Locator) {
        await element.clear();
    }

    async click(element: Locator) {
        await element.click();
    }

    async getAttribute(element: Locator, attribute: string):Promise<string|null> {
            return await element.getAttribute(attribute);
    }

    async scrollToElement(element: Locator) {
        await element.scrollIntoViewIfNeeded();
    }

    async goToBaseUrl() {
        await this.page.goto('/');
    }
}