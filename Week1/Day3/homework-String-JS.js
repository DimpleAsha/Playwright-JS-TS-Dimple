//String in JS
let x = "Racecar"
function reverseString(){
    let chars = x.toLowerCase().split("")
    let reverseChars = ""
    for(let i = chars.length-1; i>=0 ; i--){
        reverseChars += chars[i]
    }
    console.log(reverseChars)
    if(chars.join("") === reverseChars){
        console.log("The given string is a Palindrome")
    }
    else{
        console.log("The given string is not a palindrome or else its empty")
    }
}
reverseString()
