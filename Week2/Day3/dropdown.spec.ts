//dropdown-- to select one or more from a list
//standard and custom

//standard -- directly rendered by browser Engine-- using select tag
// await page.locator('#country').selectOption('IN')
// await page.selectOption('#country', 'IN')

//uses native HTML elements <select> <option>
// fully supported by browsers(no JS require)-- just playwright slecet
//supports value, label, index attributes

// await page.locator('#country').select{value='USA'}
// .select{label = 'United Kingdom'}
// .selectOption({index :0})

//custom dropdown-- if there is no native select or option
//<div> <li> and click()


import {test} from '@playwright/test'
test("Handling Dropdowns in LeafTaps", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('//input[@id = "username"]').fill("demosalesmanager")
    await page.locator('//label[text()="Password"]').fill("crmsfa")
    await page.locator('//input[@class= "decorativeSubmit').click()
    await page.locator('//a(contains[text(),"CRM"]').click()

    await page.locator('//label[text()="Leads"]').click()
    await page.locator('//label[text()="Create Lead"]').click()

})
// /option -- count()-- nth(0).innertext()
// template literal `${}`
//iterate = and print all options using for


