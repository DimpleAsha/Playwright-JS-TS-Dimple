import{test,expect} from '@playwright/test'
//import data from "../../data/Leaf.json"
import testData from "../../data-HW/hwLeaf.json"

//login with data parametrization-
for(let data of testData){        
    test(`Create Lead with Data Parametrization ${data.TestcaseID}` , async({page})=>{
        await page.goto("https://leaftaps.com/opentaps/control/main")
        //login with .json- Data Parametrization
        await page.getByRole('textbox', {name:"Username"}).fill(data.Context.Username)
        await page.getByRole('textbox', {name:"Password"}).fill(data.Context.Password)
        await page.getByRole('button', {name:"Login"}).click()
        await page.getByRole('link', {name:"CRM/SFA"}).click()
        await page.getByRole('link', {name:"Leads", exact:true}).click()
        await page.getByRole('link', {name:"Create Lead", exact:true}).click()
        //fill Comapny Name, First Name, Last name- using .json file - Data Parametrization
        await page.locator("#createLeadForm_companyName").fill(data.LeadDetails.CompanyName)
        await page.locator("#createLeadForm_firstName").fill(data.LeadDetails.FirstName)
        await page.locator("#createLeadForm_lastName").fill(data.LeadDetails.LastName)
        //select Source Dropdown value
        await page.locator("#createLeadForm_dataSourceId").selectOption({label:data.LeadDetails.Source})
        //slect Marketing campaign Value an dprint all options in dropdown
        await page.locator("#createLeadForm_marketingCampaignId").selectOption({label:data.LeadDetails.MarketingCampaign})
        const MarketingDD = page.locator("#createLeadForm_marketingCampaignId option")
        const countMDD = await MarketingDD.count()
        console.log(`Total count of Marketing options: ${countMDD}`)
        const allOptionsMDD = await MarketingDD.allInnerTexts()
        console.log("Marketing Options:", allOptionsMDD.join(", "))
        //selecting Industry dropdown value as "General services" using Index
        await page.locator("#createLeadForm_industryEnumId").selectOption({index:data.LeadDetails.IndustryIndex})
        //Select- INR as Preferred Currency
        await page.locator("#createLeadForm_currencyUomId").selectOption({value:data.LeadDetails.PreferredCurrency})
        //Select India as Country
        await page.locator("#createLeadForm_generalCountryGeoId").selectOption({value:data.LeadDetails.Country})
        //Select any state- and get the count and all states names printed in terminal
        await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({label:data.LeadDetails.State})
        //count and print all the states
        const StateDD = page.locator("#createLeadForm_generalStateProvinceGeoId option")
        const CountStates = await StateDD.count()
        console.log(`Number of states :${CountStates}`)
        const allOptionsStates = await StateDD.allInnerTexts()
        console.log("States are :", allOptionsStates.join(", "))
    
    })
}

