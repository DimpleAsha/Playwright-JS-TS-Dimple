//Day-4- CallBack
let browser = "chrome"
function checkBrowserVersion(callback){
    let delay = () => callback(browser)//used arrow function logic
    setTimeout(delay, 2000)//built-in function
}

function callback(browser){
    console.log("The browser version after callback is:", browser)
}
checkBrowserVersion(callback)