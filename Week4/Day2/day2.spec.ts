import{test,expect} from '@playwright/test'
test("Window Handling- Assesment", async({page,context})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.getByRole('textbox', {name:"Username"}).fill("demosalesmanager")
    await page.getByRole('textbox', {name:"Password"}).fill("crmsfa")
    await page.getByRole('button', {name:"Login"}).click()

    await page.getByRole('link', {name:"CRM/SFA"}).click()
    await page.getByRole('link', {name:"Leads"}).click()
    await page.getByRole('link', {name:"Merge Leads"}).click()

    //first window handling
    const [fromWindow] = await Promise.all([context.waitForEvent('page'), page.locator('//input[@id ="partyIdFrom"]/following::img[@alt="Lookup"][1]').click()])
    //selecting first lead from table
    await fromWindow.locator('(//div[contains(@class,"x-grid3-row")][1]//a[@class="linktext"])[1]').click()

    //second window handling
    const [toWindow] = await Promise.all([context.waitForEvent('page'), page.locator('//input[@id ="partyIdFrom"]/following::img[@alt="Lookup"][2]').click()])
    //selecting second lead from table
    await toWindow.locator('(//div[contains(@class,"x-grid3-row")][2]//a[@class="linktext"])[1]').click()
    //click on Merge
    page.once('dialog', async(dialog) =>{
        await dialog.accept()
    })
    await page.locator('//a[text()="Merge"]').click()
    await expect(page).toHaveTitle(/View Lead/)
    
})