import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/saucedemo/LoginPage';
import { ProductsPage } from '../pages/saucedemo/ProductsPage';

export const test = base.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  }
});