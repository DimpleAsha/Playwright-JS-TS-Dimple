//DOM-- document object model-- developer writes the code within this DOM-- Programming interface between html and xml
//can be accessed using spy tool in inspect-- by hovering-over page elements
//dom-- starts and ends with html tag
//dom-- it has header and body tag
//header-- headings of page-- footer etc
//body-- all application content of the page is within body tag
//body-- it has divisions-- based on app requirements-- using div tags
//inside paragraph-- p tag
//form tags, span , a 
//inputs- starts with <tag name>
//class, type, id and name== attributes and attribute value is inside ""
//tag name-- attribute -- attribute value

//selectors-- used to locate and interact with elements on a webpage-- CSS/XPATH/Playwright builtin Locators


//CSS Selectors-- Cascaded style sheets-- id, name, class -- attributes
//example-- page.locator('input[name="username"]')
//# for id === #'username' === input[id = 'username']
//. for class

// import {test} from '@playwright/test'
// test('login to testleaf', async({page})=>{
//     await page.goto("http://leaftaps.com/opentaps/control/main")
//     await page.locator('input[id = "username"]').fill('demosalesmanager')
//     await page.locator('input[id = "password"]').fill('crmsfa')
//     await page.locator('input[class="decorativeSubmit"]').click()
//     await page.locator('text=CRM/SFA').click()
// })


//classroom activity
import {test} from '@playwright/test'
test('login to Sales Force', async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('input[id = "username"]').fill(' dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id = "password"]').fill('TestLeaf@2025')
    await page.locator('input[id="Login"]').click()
})
