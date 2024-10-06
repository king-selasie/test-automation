const { test, expect } = require('@playwright/test');


test('News section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pressReleaseSection = page.locator('h5:text-is("News")');
    await expect(pressReleaseSection).toBeVisible(); 
  });

  test("Specific news (Ghana's fastes growing company) release should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const newsOutlet = page.locator("text=Hubtel ranked ghana's fastest growing company for 2022").first();
    await expect(newsOutlet).toBeVisible();
    await newsOutlet.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/ghanas-fastest-growing-company-for-2022/); 
  });

  test("Specific news (hubtel turns 19) release should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const newsOutlet = page.locator('text=Hubtel turns 19 years').first();
    await expect(newsOutlet).toBeVisible();
    await newsOutlet.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/hubtel-turns-19-years/); 
  });

  test("Specific news (Legacy of Co-founder) release should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const newsOutlet = page.locator('text=Honoring the legacy of Our Co-founder Leslie Kwabena Nyarko Gyimah').first();
    await expect(newsOutlet).toBeVisible();
    await newsOutlet.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/honoring-the-legacy-of-our-co-founder-leslie-kwabena-nyarko-gyimah/); 
  });

  test('"View All" in News Outlet should navigate to the news page', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const viewAllLink = page.locator('text=View all').nth(1);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/news/); 
  });

  test('Customer Stories section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pressReleaseSection = page.locator('h5:text-is("Customer Stories")');
    await expect(pressReleaseSection).toBeVisible(); // Ensure section is visible
  });

  test("Specific customer story (recipe for success) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const customerStory = page.locator("text=Bakeshop Classics’ Recipe for Success ").first();
    await expect(customerStory).toBeVisible();
    await customerStory.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/bakeshop-classics-recipe-for-success/); 
  });

  test("Specific customer story (Golden Crystal Experience) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const customerStory = page.locator("text=How Golden Crystal Experience Ensures Exceptional Customer Service with Hubtel POS").first();
    await expect(customerStory).toBeVisible();
    await customerStory.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/golden-crystal-experience/); 
  });

  test("Specific customer story (benefits with Hubtel POS) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const customerStory = page.locator("text=Nova realizes full sales proceeds and other benefits with Hubtel POS ").first();
    await expect(customerStory).toBeVisible();
    await customerStory.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/nova-realizes-full-sales-proceeds-and-other-benefits-with-hubtel-pos/); 
  });

  test('"View All" in Customer stories should navigate to the news page', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const viewAllLink = page.locator('text=View all').nth(2);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/customer-stories/); 
  });

  test('Product update section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pressReleaseSection = page.locator('h5:text-is("Product Updates")');
    await expect(pressReleaseSection).toBeVisible();
    const viewAllLink = page.locator('text=View all').nth(3);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/product-updates/);  
  });

  test("Specific product update (Hubtel Completes Biggest Upgrades) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const productUpdate = page.locator("text=Hubtel Completes Biggest Upgrades to Developer Portal").first();
    await expect(productUpdate).toBeVisible();
    await productUpdate.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/hubtel-completes-biggest-upgrades-to-developer-portal/); 
  });

  test("Specific product update (A new way to pay) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const productUpdate = page.locator("text=A new way to pay ").first();
    await expect(productUpdate).toBeVisible();
    await productUpdate.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/a-new-way-to-pay/); 
  });

  test("Specific product update (Improved features) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const productUpdate = page.locator("text= Improved features for a smooth experience").first();
    await expect(productUpdate).toBeVisible();
    await productUpdate.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/improved-features-for-a-smooth-experience/); 
  });

  test('Guides section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const guides = page.locator('h5:text-is("Guides")');
    await expect(guides).toBeVisible();
    const viewAllLink = page.locator('text=View all').nth(4);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/guides/);  // Ensure section is visible
  });

  test("Specific guides (Gen Z vs Millennials) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const guides = page.locator("text= Gen Z vs Millennials: What are they ordering? ").first();
    await expect(guides).toBeVisible();
    await guides.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/gen-z-vs-millennials/); 
  });

  test("Specific guides (Scheduled Orders) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const guides = page.locator("text= Scheduled Orders: Pre-order Your Meals and Groceries").first();
    await expect(guides).toBeVisible();
    await guides.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/scheduled-orders-pre-order-your-meals-and-groceries/); 
  });
  
  test("Specific guides (FAQs) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const guides = page.locator("text= FAQs – Direct SMS Gateway Messaging Service").first();
    await expect(guides).toBeVisible();
    await guides.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/faqs-direct-gateway-messaging/); 
  });
  
  test('inside hubtel section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const insideHubtel = page.locator('h5:text-is("Inside Hubtel")');
    await expect(insideHubtel).toBeVisible();
    const viewAllLink = page.locator('text=View all').nth(5);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/inside-hubtel/);  // Ensure section is visible
  });

  test("Specific inside hubtel (Meet the Zonal Manager) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const insideHubtel = page.locator("text= Meet the Zonal Manager who is bringing Kokomlemle's favourite restaurants to you").first();
    await expect(insideHubtel).toBeVisible();
    await insideHubtel.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/meet-alvin-aborjoe-the-zonal-manager-bringing-kokomlemles-favourite-restaurants-to-you/); 
  });

  test("Specific inside hubtel (International Women's Day) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const insideHubtel = page.locator("text= International Women's Day: Inspiring Inclusion with Women at Hubtel").first();
    await expect(insideHubtel).toBeVisible();
    await insideHubtel.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/international-womens-day-inspiring-inclusion-with-womens-at-hubtel/); 
  });

  test("Specific inside hubtel (From Intern to Manager in Seven Years) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const insideHubtel = page.locator("text= From Intern to Manager in Seven Years: Meet David Nii Kwatelai Quartey").first();
    await expect(insideHubtel).toBeVisible();
    await insideHubtel.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/meet-david-nii-kwatelai-quartey/); 
  });


  test('Pledge section should be visible', async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pledge = page.locator('h5:text-is("Pledge")');
    await expect(pledge).toBeVisible();
    const viewAllLink = page.locator('text=View all').nth(6);
    await viewAllLink.click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL(/pledge/);  // Ensure section is visible
  });

  test("Specific pledge (From Intern to Manager in Seven Years) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pledge = page.locator("text= Hubtel Pledge Supports St. Augustine's College, in APSU ‘99 Legacy Project ").first();
    await expect(pledge).toBeVisible();
    await pledge.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/hubtel-pledge-supports-st-augustines-college/); 
  });

  test("Specific pledge (Collaborates With UG School of Engineering Sciences) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pledge = page.locator("text= Hubtel Commits to Developing Talent as It Collaborates With UG School of Engineering Sciences").first();
    await expect(pledge).toBeVisible();
    await pledge.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/hubtel-commits-to-developing-talent-as-it-collaborates-with-ug-school-of-engineering-sciences/); 
  });

  test("Specific pledge (Hubtel Donates Laptops) should be visible", async ({ page }) => {
    await page.goto('https://blog.hubtel.com');
    const pledge = page.locator("text= Hubtel Donates Laptops to Right To Information Commission").first();
    await expect(pledge).toBeVisible();
    await pledge.click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/hubtel-pledge-donates-laptops-to-right-to-information-commission/); 
  });

  
  
  

  

  
