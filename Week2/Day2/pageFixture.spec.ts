import { chromium, test } from '@playwright/test'

test ("Page Fisture", async()=> {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    //await page.waitForTimeout(1000)
    await browser.close()
})