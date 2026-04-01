// import {test} from '@playwright/test'
// test ("Create a Lead - Test Steps", async({page}) =>{
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     //login
//     await page.locator('#username').fill("demosalesmanager")
//     await page.locator('#password').fill("crmsfa")
//     await page.locator('.decorativeSubmit').click()
//     //click on CRM/SFA
//     await page.locator('text=CRM/SFA').click()
// })

import {test} from '@playwright/test'
test ("nth method- if multiple matches for selectors", async({page}) =>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('input').first().fill('demosalesmanager')
    //await page.locator('input').nth(0).fill('demosalesmanager')
    await page.locator('input').nth(1).fill('crmsfa')
    await page.locator('input').last().click()
    //await page.locator('input').nth(2).click()  
    await page.locator('text=CRM/SFA').click()
})

