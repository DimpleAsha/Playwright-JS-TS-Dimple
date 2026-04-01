// //advanced XPATH- in salesfroce website


// import{test, expect} from '@playwright/test'
// test("Advanced Xpath", async({page})=>{
//     await page.goto("https://login.salesforce.com")
//     await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
//     await page.locator("password").fill("TestLeaf@2025")
//     await page.click("#Login")
//     await page.click('//span[text()="Leads"]')
//     await page.click('//div[text()="New"]')

// })

//for loop--
import {test} from "@playwright/test"

test('Handling dropdowns in LeafTaps',async({page})=>{


    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill('demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.click('//input[@class="decorativeSubmit"]')
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.click('//a[text()="Leads"]')
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Gauthami')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('VN')
 /* await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({value:'LEAD_CONFERENCE'})
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'})
    await page.waitForTimeout(2000)
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({index:4}) */
    const dropDown=page.locator('//select[@id="createLeadForm_industryEnumId"]/option') //no of elements=13
    const dropDowncount=await dropDown.count()
    console.log(`no of values in the dropDown is ${dropDowncount}`);
    console.log(await dropDown.nth(0).innerText()) //dropdown value in 1st index 
    console.log(await dropDown.nth(1).innerText()) //dropdown value in 1st index


    for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }


})

// //classroom

// Step 1: launch the leafground url
// URL:https://www.leafground.com/select.xhtml
// import {test, expect} from '@playwright/test'
// test("classroom activity", async({page})=> {
//     await page.goto("https://www.leafground.com/select.xhtml")

// // step 2: Print all the automation tools using Selectoption dropdown method.
//by value
//     const dropdown = page.locator('//select[@class="ui-selectonemenu"]/option')
//     const dropdownCount = await dropdown.count()
//     console.log('no of elements in dropdown :', `${dropdownCount}`)
//     for (let i = 0; i< dropdownCount; i++){
//         console.log(await dropdown.nth(i).innerText())
//     }
// // Step 3: Choose the preferred country as "India" using custom dropdown method
//by tags- div, li,...-- handle by clickmaction
//     const country = page.locator('//label[contains(@id, "country_label")]/option')
//     const countryCount = await country.count()
//     console.log('no of countries in dropdown :', `${countryCount}`)
//     await page.click('//label[contains(@id, "country_label")]')
//     await page.click('//li[contains(text(), "India")]')
// })