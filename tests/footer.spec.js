const { test, expect } = require('@playwright/test');

test('Footer should be visible on the page', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    
    const footer = page.locator('footer');  
    await expect(footer).toBeVisible();
  });

  test('Links in the Company section should be clickable and navigate correctly', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    await page.getByRole('heading', { name: 'Company' }).click();
    await page.getByRole('link', { name: 'Leadership & Team' }).click();
    await page.getByRole('link', { name: 'Our Stories' }).click();
     await page.getByRole('link', { name: 'Connect to APIs' }).click();
  });

  test('Links', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    await expect(page.getByRole('link', { name: 'Leadership & Team' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Join the Team' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Our Stories' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Legal' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Other Services' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Premium Subscription Billing' })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Connect to APIs' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Install the app' })).toBeVisible();
  });


  