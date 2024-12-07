import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
    test('should be able to go to login page', async ({ page }) => {
        await page.goto('http://localhost:3000');
    
        await page.getByRole('link', { name: 'Login' }).click();
    
        await expect(page).toHaveURL('http://localhost:3000/login');
    });
    test('should be able to login and redirected to dashboard', async ({
        page,
      }) => {
        await page.goto('http://localhost:3000/login');
    
        await page.getByLabel('Email').fill('test@test.com');
        await page.getByLabel('Password').fill('test@123');
    
        await page.getByRole('button', { name: 'Login' }).click();
    
        await expect(page).toHaveURL('http://localhost:3000/dashboard');
    });

    test('error message is shown for invalid credentials', async ({ page }) => {
        await page.goto('http://localhost:3000/login');
    
        await page.getByLabel('Email').fill('test@test.com');
        await page.getByLabel('Password').fill('1234567');
    
        await page.getByRole('button', { name: 'login' }).click();
    
        await expect(
          page.getByText('Invalid login credentials').first(),
        ).toBeVisible();
    });

    test('should be redirected to login page if not authenticated', async ({
        page,
      }) => {
        await page.goto('http://localhost:3000/dashboard');
    
        await expect(page).toHaveURL('http://localhost:3000/login');
    });
});