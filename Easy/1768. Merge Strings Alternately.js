

var mergeAlternately = function(word1, word2) {
    let mergeStr = ''
    let i = 0
    
    while(i < word1.length || i < word2.length){
        if(i < word1.length){
            mergeStr += word1[i]
        }
        if(i < word2.length){
            mergeStr += word2[i]
        }
        i++;
    }
    return mergeStr
};
const word1 = "ab", word2 = "pqrs"
console.log(mergeAlternately(word1, word2));