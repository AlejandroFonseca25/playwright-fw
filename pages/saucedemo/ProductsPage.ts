import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class ProductsPage extends BasePage {

    readonly titleLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.titleLabel = page.getByTestId('title');
    }
}