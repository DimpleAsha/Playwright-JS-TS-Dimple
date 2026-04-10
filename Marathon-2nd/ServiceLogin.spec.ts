import{test , expect} from '@playwright/test'
test("ServiceNow Login", async({page})=>{
    await page.goto("https://dev280319.service-now.com")
    await page.getByRole('textbox', {name:"User name"}).fill("admin")
    await page.getByRole('textbox', {name:"Password"}).fill("YApVc0-vyN5-")
    await page.getByRole('button', {name:"Log in"}).click()

    const ServiceNow = page.getByRole('menuitem', {name:"Admin"})
    await expect(ServiceNow).toBeVisible({ timeout: 15000 })
    await page.getByRole('menuitem', {name:"All"}).click()
    await page.locator("#filter").fill("Service Catalog")
    const Catalog = page.locator('a.nested-item').filter({hasText :/Service Catalog/i})
    await Catalog.first().click()

    await page.context().storageState({ path: 'data/ServiceUser.json' });
})