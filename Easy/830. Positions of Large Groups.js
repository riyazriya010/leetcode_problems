

var largeGroupPositions = function(s) {
    let indicesArr = [];
    let count = 1;
    let start = 0;
    
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            if (count >= 3) {
                indicesArr.push([start, i - 1]);
            }
            count = 1;
            start = i; 
        }
    }
    
    return indicesArr;
};

const s = "abcdddeeeeaabbbcd";
console.log(largeGroupPositions(s));
