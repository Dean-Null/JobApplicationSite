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

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null
