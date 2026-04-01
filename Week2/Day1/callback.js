//to avoid callback--- we use Promise

//let promise = new Promise((resolve, reject) => { console.log("order food")
// setTimeout(() =>{
 //   resolve("Food is ready")-->pass
 //   reject("no delivery")--> fail
 //},6000)
 //})

 //promise.then(result=>console.log(result)).catch(error=>console.log(error))

 //async-await --- replaced then and catch
  await => promise
  async function data(){
  await page.goto("url")
  await pae.locator("username").fill("dimple123")
}