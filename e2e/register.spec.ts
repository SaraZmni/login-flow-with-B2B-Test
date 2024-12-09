import { test, expect } from '@playwright/test';

test.describe('Register Flow', () => {
  test('should be able to go to register page', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByRole('link', { name: 'Register' }).click();

    await expect(page).toHaveURL('http://localhost:3000/register');
  });

  test('new user can register', async ({ page }) => {
    await page.goto('http://localhost:3000/register');

    const random = Math.floor(Math.random() * 100000);

    await page.getByLabel('Email').fill(`test${random}@test.com`);
    await page
      .getByLabel('Password', {
        exact: true,
      })
      .fill(`123456`);
    await page.getByLabel('Confirm Password').fill(`123456`);

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page).toHaveURL('http://localhost:3000/dashboard');
  });

  test('existing user can not register', async ({ page }) => {
    await page.goto('http://localhost:3000/register');

    await page.getByLabel('Email').fill('test@test.com');
    await page.getByLabel('Password', { exact: true }).fill('123456');
    await page.getByLabel('Confirm Password').fill('123456');

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(
      page.getByText('user already registered').first(),
    ).toBeVisible();
  });
});