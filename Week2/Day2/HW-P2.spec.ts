
import {test} from '@playwright/test'
test ("Create a Lead - Test Steps", async({page}) =>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    //login
    await page.locator('#username').fill("demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    //click on CRM/SFA
    await page.locator('text="CRM/SFA"').click()
    //create lead
    await page.locator('text="Leads"').click()
    await page.locator('a[href$="createLeadForm"]').click()
    //fill details
    await page.locator('#createLeadForm_companyName').fill("Test Leaf")
    await page.locator('#createLeadForm_firstName').fill("Dimple")
    await page.locator('#createLeadForm_lastName').fill("Asha")
    await page.locator('#createLeadForm_personalTitle').fill("Ms.")
    await page.locator('#createLeadForm_generalProfTitle').fill("Lead")
    await page.locator('#createLeadForm_annualRevenue').fill("10,000")
    await page.locator('#createLeadForm_departmentName').fill("QA Automation")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9441499879")
    await page.locator('.smallSubmit').click()

})


// import {test} from '@playwright/test'
// test ("Create a Lead - Test Steps", async({page}) =>{
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     await page.locator('input[id="username"]').fill("demosalesmanager")
//     await page.locator('input[id="password"]').fill("crmsfa")
//     await page.locator('[class="decorativeSubmit"]').click()
//     //await page.waitForLoadState('domcontentloaded')
//     await page.locator('text="CRM/SFA"').click()
//     //await page.waitForLoadState('domcontentloaded')
//     await page.locator('text="Leads"').click()
//     //await page.waitForLoadState('domcontentloaded')
//     await page.locator('a[href$="createLeadForm"]').click()
//     //await page.waitForLoadState('domcontentloaded')
//     await page.locator('input[id="createLeadForm_companyName"]').fill("Test Leaf")
//     await page.locator('input[id="createLeadForm_firstName"]').fill("Dimple")
//     await page.locator('input[id="createLeadForm_lastName"]').fill("Asha")
//     await page.locator('input[id="createLeadForm_personalTitle"]').fill("Ms.")
//     await page.locator('input[id="createLeadForm_generalProfTitle"]').fill("Lead")
//     await page.locator('input[id="createLeadForm_annualRevenue"]').fill("10,000")
//     await page.locator('input[id="createLeadForm_departmentName"]').fill("QA Automation")
//     await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').fill("9441499879")
//     await page.locator('[class="smallSubmit"]').click()

// })


