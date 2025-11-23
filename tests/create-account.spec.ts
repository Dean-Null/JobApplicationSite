import { test, expect } from '@playwright/test';

test('should login and navigate to "My Information" page', async ({ page }) => {
  await page.goto('/');

  await page.fill('#email', 'JohnSmith@TestableAccount.com');
  await page.fill('#password', '@S0@PWa$h');
  await page.fill('#verify-password', '@S0@PWa$h');
  await page.check('input[type="checkbox"]');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*\/my-information/);
  await expect(page.locator('h2.form-title')).toHaveText('My Information');
});
