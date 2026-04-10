import{test , expect} from '@playwright/test'
test.use({
    storageState:'data/ServiceUser.json'
})
test("ServiceNow Service Catalog- Iphone", async({page})=>{
    await page.goto("https://dev280319.service-now.com/now/nav/ui/classic/params/target/catalog_home.do%3Fsysparm_view%3Dcatalog_default")

    //switching to frame
    const ServiceFrame = page.frameLocator('#gsft_main')
    await ServiceFrame?.getByRole('link', {name:"Mobiles", exact: true}).click()
    const iPhone = ServiceFrame?.getByRole('link', {name:/Apple iPhone 13 pro/i})
    await iPhone?.click()
    await ServiceFrame?.locator(".radio-label",{hasText :"Yes"}).click()
    const PhoneNo = ServiceFrame?.getByRole('textbox', {name:/What was the original phone number?/i})
    await PhoneNo?.waitFor({ state: 'visible' })
    await PhoneNo?.fill("99")
    await ServiceFrame?.getByRole('combobox', {name:/Monthly data allowance/i}).selectOption({value:"unlimited"})
    await ServiceFrame?.locator(".sc-radio",{hasText:/Sierra Blue/i}).click()
    await ServiceFrame?.locator(".input-group-radio", {hasText:/512 GB/}).click()
    await ServiceFrame?.getByRole('button', {name:"Order Now"}).click()
    const successAlert = ServiceFrame.locator('span').filter({ hasText: 'Thank you, your request has been submitted' });
    await expect(successAlert).toBeVisible({ timeout: 15000 });
    await page.screenshot({ path: 'data/OrderPage.png', fullPage: true });
 
})