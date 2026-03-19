//Conditional Statements -- if-else and switch

function launchBrowser(){
    let browserName = "Safari"
    if (browserName === "Chrome"){
        console.log("The browser name is:", browserName)
    }
    else{
        console.log("The browser name is not chrome but it is:", browserName)
    }
}
launchBrowser()


function runTests(){
    let testType
    switch(testType){
        case 1:
            console.log("Smoke")
        case 2:
            console.log("Sanity")
        case 3:
            console.log("Regression")
        break
        default:
            console.log("Smoke")
    }
}
runTests()