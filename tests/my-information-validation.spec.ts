import { test, expect } from '@playwright/test';

test('should verify required fields prevent navigation when clicking Next on My Information page', async ({ page }) => {
  await page.goto('/');

  await page.fill('#email', 'JohnSmith@TestableAccount.com');
  await page.fill('#password', '@S0@PWa$h');
  await page.fill('#verify-password', '@S0@PWa$h');
  await page.check('input[type="checkbox"]');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*\/my-information/);
  await expect(page.locator('h2.form-title')).toHaveText('My Information');

  const requiredFields = [
    'firstName',
    'lastName',
    'phoneNumber',
    'country',
    'streetAddress',
    'city',
    'state',
    'postalCode',
  ];

  for (const fieldId of requiredFields) {
    const field = page.locator(`#${fieldId}`);
    await expect(field).toHaveAttribute('required', '');
  }

  await page.fill('#firstName', '');
  await page.fill('#lastName', '');
  await page.fill('#phoneNumber', '');
  await page.selectOption('#country', '');
  await page.fill('#streetAddress', '');
  await page.fill('#city', '');
  await page.selectOption('#state', '');
  await page.fill('#postalCode', '');

  await expect(page.locator('#firstName')).toHaveValue('');
  await expect(page.locator('#lastName')).toHaveValue('');
  await expect(page.locator('#phoneNumber')).toHaveValue('');
  await expect(page.locator('#streetAddress')).toHaveValue('');
  await expect(page.locator('#city')).toHaveValue('');
  await expect(page.locator('#postalCode')).toHaveValue('');
  await expect(page.locator('#country')).toHaveValue('');
  await expect(page.locator('#state')).toHaveValue('');

  const validationState = await page.evaluate(() => {
    const firstName = document.getElementById('firstName') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    const phoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;
    const country = document.getElementById('country') as HTMLSelectElement;
    const streetAddress = document.getElementById('streetAddress') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    const state = document.getElementById('state') as HTMLSelectElement;
    const postalCode = document.getElementById('postalCode') as HTMLInputElement;

    return {
      firstName: {
        valid: firstName.validity.valid,
        valueMissing: firstName.validity.valueMissing,
      },
      lastName: {
        valid: lastName.validity.valid,
        valueMissing: lastName.validity.valueMissing,
      },
      phoneNumber: {
        valid: phoneNumber.validity.valid,
        valueMissing: phoneNumber.validity.valueMissing,
      },
      country: {
        valid: country.validity.valid,
        valueMissing: country.validity.valueMissing,
      },
      streetAddress: {
        valid: streetAddress.validity.valid,
        valueMissing: streetAddress.validity.valueMissing,
      },
      city: {
        valid: city.validity.valid,
        valueMissing: city.validity.valueMissing,
      },
      state: {
        valid: state.validity.valid,
        valueMissing: state.validity.valueMissing,
      },
      postalCode: {
        valid: postalCode.validity.valid,
        valueMissing: postalCode.validity.valueMissing,
      },
    };
  });

  expect(validationState.firstName.valueMissing).toBe(true);
  expect(validationState.firstName.valid).toBe(false);
  expect(validationState.lastName.valueMissing).toBe(true);
  expect(validationState.lastName.valid).toBe(false);
  expect(validationState.phoneNumber.valueMissing).toBe(true);
  expect(validationState.phoneNumber.valid).toBe(false);
  expect(validationState.country.valueMissing).toBe(true);
  expect(validationState.country.valid).toBe(false);
  expect(validationState.streetAddress.valueMissing).toBe(true);
  expect(validationState.streetAddress.valid).toBe(false);
  expect(validationState.city.valueMissing).toBe(true);
  expect(validationState.city.valid).toBe(false);
  expect(validationState.state.valueMissing).toBe(true);
  expect(validationState.state.valid).toBe(false);
  expect(validationState.postalCode.valueMissing).toBe(true);
  expect(validationState.postalCode.valid).toBe(false);

  await page.click('button.next-button');

  await expect(page).toHaveURL(/.*\/my-information/);
  await expect(page.locator('h2.form-title')).toHaveText('My Information');
});

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null
