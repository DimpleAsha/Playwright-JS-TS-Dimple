import {chromium, webkit, test} from "@playwright/test"
test.describe.configure({ mode: 'parallel'})

test("1.launch redbus in Edge", async() =>{
    const browserInstance = await chromium.launch({headless: false, channel : "msedge"})
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://www.redbus.in")
    console.log(await page.title())
    console.log(page.url())
    await page.waitForTimeout(5000) 
    //await browserInstance.close()   
})


test("2.launch flipkart in Webkit", async() =>{
    const browserInstance = await webkit.launch({headless: false})
    const browserContext = await browserInstance.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://www.flipkart.com")
    console.log(await page.title())
    console.log(page.url())
    await page.waitForTimeout(5000)
    //await browserInstance.close()    
})

