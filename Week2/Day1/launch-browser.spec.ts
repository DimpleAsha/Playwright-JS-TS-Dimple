//plawright-- open source web test framework from Microsoft
//auto-waiting--waits for the DOM element to be visible,enabled,actionable without throwing Exceptions
//device emulation--cosmetic testing -
//cross-browser testing / parallel execution
//networks interception-- mocks the API calls even though the sever is down
//record and play- codegen/video-snapshots
//supports both UI and API testing
//why typescript- //node.js//native to playwright and is built on JS which is browser language
//node js browser binaries--native package - no need driver
import { chromium, webkit, test} from "@playwright/test";
test("To launch a browser", async()=> {
    const browserInstance = await chromium.launch({headless:false, channel:"chrome"});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(5000)
});


//practice

//import{test, chromium, webkit} from "@playwright/test"
test.describe.configure({mode : "parallel"})
test("1.To launch google" ,  async() =>{
    const browser = await chromium.launch({headless : false, channel :"chrome"})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com")
    console.log(await page.title())
    console.log(page.url())
    await page.waitForTimeout(2000)
})

test("2.To launch abhibus", async()=>{
    const browser = await webkit.launch({headless : false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.abhibus.com")
    console.log(await page.title())
    console.log(page.url())
    await page.waitForTimeout(2000)
})



