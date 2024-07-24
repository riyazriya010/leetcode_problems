

var isAcronym = function(words, s) {
    let firstChar = ''
    for(let val of words){
        firstChar += val[0]
    }
    return firstChar === s
}

const words = ["an","apple"], s = "a"
console.log(isAcronym(words, s));