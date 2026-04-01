//playwright- fixtures, Locators
//config file -- fixtures

//page fixture-- built-in object provided by test runner to interact with browser page -- open URL,click,type, etc

//for browser setup - context- page- and tear down
import {test,expect} from "@playwright/test"
test.only ("Launch using page fixture", async({page})=>{
await page.goto("https://www.amazon.in")
await page.waitForLoadState('domcontentloaded')
await page.waitForTimeout(2000)
const title = await page.title()
console.log(title)
const url = page.url()
console.log(url)
await expect(page).toHaveTitle(/Amazon/);
await page.waitForTimeout(2000)
})