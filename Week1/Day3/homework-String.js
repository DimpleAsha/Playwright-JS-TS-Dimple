//String
//split the string into words, and find length of last word
let s = "Dimple Asha Gurajala"
let s1= s.split(" ")
if (s1.length > 0) {
    console.log(s1[s1.length-1].length)
}
else{
    console.log("The input string is empty")
}


//JS is not supporting [-1]-- so using [2] is hardcoding and brittle as we see below
let a = "Dimple Asha Gurajala"
let a1= a.split(" ")
console.log(a1[2].length)

//trim - split - we assign word for word and emove anything thats not a word
// find last word and its length and return length
let x = "Dimple Asha   Gurajala"
let x1 = x.trim().split(" ").filter(word => word !== "")
if (x1.length > 0) {
    console.log(x1[x1.length-1].length)
}
else{
    console.log("The input string is empty")
}


//two strings - anagrams or not
let w1 = "Silent"
let w2 = "Listen"
let w1_new = w1.toLowerCase().split("").sort().join("")
let w2_new = w2.toLowerCase().split("").sort().join("")
if (w1_new === w2_new){
    console.log("The given strings are anagrams")
}
else{
    console.log("The given strings are not anagrams or check for empty input strings")
}



