import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class LoginPage extends BasePage {

    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    public async performLogin(username:string, password:string) {
        super.clearText(this.usernameField);
        super.clearText(this.passwordField);
        super.type(this.usernameField, username);
        super.type(this.passwordField, password);
        super.click(this.loginButton);
    }
}