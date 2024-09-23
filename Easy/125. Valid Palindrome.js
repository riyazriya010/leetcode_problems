
var isPalindrome = function(s) {

    // this will remove the non Alphanumeric and joined the values
    let joinedWord = s.replace(/[_\W]+/g, "").toLowerCase()
    let reversedWord = joinedWord.split('').reverse().join('')

    if(joinedWord === reversedWord) return true

    return false

};
const s = ""
console.log(isPalindrome(s))