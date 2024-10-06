
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://blog.hubtel.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Official Hubtel Blog/);
});





test('News tab should be visible and clickable', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const newsTab = await page.locator('li:has-text("News")');
  await expect(newsTab).toBeVisible(); 
  await newsTab.click(); 
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/news/); // Ensure the URL contains "news
  const pageTitle = await page.locator('h4:text-is("News")');
  await expect(pageTitle).toHaveText(/News/); // Ensure the page title is "News"
});

test('Press release tab should be visible and clickable',async({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressTab = await page.locator('li:has-text("Press Releases")');
  await expect(pressTab).toBeVisible();
  await pressTab.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/press-releases/);
  const pageTitle = await page.locator('h4:text-is("Press Releases")');
  await expect(pageTitle).toHaveText(/Press Releases/);
});

test('Customer Stories tab should be visible and clickable',async({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressTab = await page.locator('li:has-text("Customer Stories")');
  await expect(pressTab).toBeVisible();
  await pressTab.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/customer-stories/);
  const pageTitle = await page.locator('h4:text-is("Customer Stories")');
  await expect(pageTitle).toHaveText(/Customer Stories/);
});

test('Product Updates tab should be visible and clickable',async({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressTab = await page.locator('li:has-text("Product Updates")');
  await expect(pressTab).toBeVisible();
  await pressTab.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/product-updates/);
  const pageTitle = await page.locator('h4:text-is("Product Updates")');
  await expect(pageTitle).toHaveText(/Product Updates/);
});

test('Guides tab should be visible and clickable',async({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressTab = await page.locator('li:has-text("Guides")');
  await expect(pressTab).toBeVisible();
  await pressTab.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/guides/);
  const pageTitle = await page.locator('h4:text-is("Guides")');
  await expect(pageTitle).toHaveText(/Guides/);
})

test('Inside Hubtel tab should be visible and clickable',async({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressTab = await page.locator('li:has-text("Inside Hubtel")');
  await expect(pressTab).toBeVisible();
  await pressTab.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/category\/inside-hubtel/);
  const pageTitle = await page.locator('h4:text-is("Inside Hubtel")');
  await expect(pageTitle).toHaveText(/Inside Hubtel/);
})

test('Featured blog post should be visible', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const featuredPost = await page.locator('text=Welcome to Hubtel Engineering'); // Check for the text in the featured post
  await expect(featuredPost).toBeVisible(); // Ensure the featured post is visible
});

test('Featured blog post should load on click', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const featuredPostLink = page.locator('a:has-text("Welcome to Hubtel Engineering")'); // Locate the link for the featured post
  await featuredPostLink.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/welcome-to-hubtel-engineering-innovating-for-many-years-and-beyond/); // Ensure the URL is correct
});

test('Second post should be visible', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const secondaryPost =await page.locator('h6:text-is("Correction of False Claims About ECG Commercial Agreement")'); // Locate the secondary post
  await expect(secondaryPost).toBeVisible(); // Check that the secondary post is visible
});

test('Search icon and input should work', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const searchIcon = page.locator('svg[width="30px"][height="30px"]');
  await searchIcon.hover();
  const searchInput = page.locator('input[name="s"][aria-label="search"]');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('news');
  await searchInput.press('Enter');
  await page.waitForLoadState('domcontentloaded');
});

test('Press Releases section should be visible', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressReleaseSection = page.locator('h5:text-is("Press Releases")');
  await expect(pressReleaseSection).toBeVisible(); // Ensure section is visible
});

test("Specific press release (correction of false claims) should be visible", async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressRelease = page.locator("text=Correction of False Claims About ECG Commercial Agreement").first();
  await expect(pressRelease).toBeVisible();
  await pressRelease.click();
await page.waitForLoadState('domcontentloaded');
await expect(page).toHaveURL(/correction-of-false-claims-about-ecg-commercial-agreement/); 
});

test("Specific press release (completion of commercial agreement) should be visible", async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressRelease = page.locator("text=Hubtel Announces Completion of Commercial Agreement with ECG").first();
  await expect(pressRelease).toBeVisible();
  await pressRelease.click();
await page.waitForLoadState('domcontentloaded');
await expect(page).toHaveURL(/hubtel-announces-completion-of-commercial-agreement-with-ecg/); 
});

test("Specific press release (indigenous ai lab) should be visible", async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const pressRelease = page.locator("text=Hubtel Opens Ghana’s First Indigenous AI Lab").first();
  await expect(pressRelease).toBeVisible();
  await pressRelease.click();
await page.waitForLoadState('domcontentloaded');
await expect(page).toHaveURL(/hubtel-opens-ghanas-first-indigenous-ai-lab/); 
});



test('"View All" in Press Releases should navigate to the press release page', async ({ page }) => {
  await page.goto('https://blog.hubtel.com');
  const viewAllLink = page.locator('text=View all').first();
  await viewAllLink.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/press-releases/); 
});

