import { expect } from '@playwright/test';
import { test } from '../fixtures/SaucedemoFixtures';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
            await loginPage.goToBaseUrl();
        });

    test('Login with correct user', async ({loginPage, productsPage}) => 
        {
            await loginPage.performLogin('standard_user', 'secret_sauce');
            await expect(productsPage.titleLabel).toBeVisible();
            await expect(loginPage.usernameField).toBeHidden();
        });
});