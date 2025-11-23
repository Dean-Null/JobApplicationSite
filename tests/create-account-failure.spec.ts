import { test, expect } from '@playwright/test';

test('Recorded a failure to login', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill('JaneJohnson@UntestableAccount.com');
  await page.getByRole('textbox', { name: 'Email Address *' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password *', exact: true }).fill('@St0n3W@sh');
  await page.getByRole('textbox', { name: 'Password *', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Verify New Password *' }).fill('@St0n3W@sh');
  await page.getByRole('textbox', { name: 'Verify New Password *' }).press('Tab');
  await page.getByRole('checkbox', { name: 'I understand and acknowledge' }).check();

  await page.getByRole('button', { name: 'Create Account' }).click();
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    expect('This is a testing demo. Only approved credentials will work.', dialog.message());
  });

  await expect(page).toHaveURL('/');
  await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
});