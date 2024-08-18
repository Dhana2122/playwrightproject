import{test,expect} from"@playwright/test"

test('Google', async({page})=>{
await page.goto("https://www.google.co.in/")
await expect(page).toHaveTitle("Google");
await expect(page).toHaveURL("https://www.google.co.in/");
});

test('Checking Visibilities', async({page})=>{
await page.goto("https://www.google.co.in/")
await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
await expect(page.getByLabel('Gmail')).toBeVisible();
await expect(page.getByRole('button', { name: 'Google Search' })).toBeVisible();
})

test('Checking website', async({page})=>{
  await page.goto("https://www.google.co.in/search?q=movierulz&sca_esv=14a4d01d4cad0855&hl=en&sxsrf=ADLYWILMUTeBb1np-xGQLTCm4rTybymC7A%3A1723789951143&source=hp&ei=f_K-Zr3wBbLl2roPtcOyqQI&iflsig=AL9hbdgAAAAAZr8Aj4_x4wig6nO-49Wj1kSeQkME_YTo&oq=movierulz&gs_lp=Egdnd3Mtd2l6Igltb3ZpZXJ1bHoqAggAMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCSIgLUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAgeoAgqYAweSBwExoAcA&sclient=gws-wiz")
  await page.getByRole('link',{name:'Telugu Movies 2024 Movies'}).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
}) , { retry: 2 };

test('Changing Quality', async({page})=>{
  await page.goto('https://www.watchmovierulz.ph/');
  await expect(page.getByRole('link', { name: 'Quality' })).toBeVisible();
  await page.getByRole('link', { name: 'Quality' }).click();
  await page.getByRole('link', { name: 'HDRip Movies' }).click();
})