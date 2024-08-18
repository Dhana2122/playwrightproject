const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
})

test('url_check', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const login_page=await page.locator('#login2')
    await login_page.click()
    await expect(page).toHaveURL('https://www.demoblaze.com');
  })

test('search check', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    const search_icon= await page.locator('.elementor-icon')
    await expect(search_icon).toBeTruthy()
  
  })
  
test('login', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('id=login2').click();
})
  
test('password', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  })

