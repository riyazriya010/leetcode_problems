

var divisorSubstrings = function(num, k) {
    let numStr = String(num);
    let count = 0;
    
    for(let i = 0; i <= numStr.length - k; i++){
        let substring = numStr.substring(i, i + k);
        let subNum = Number(substring);
        
        if (subNum !== 0 && num % subNum === 0) {
            count++;
        }
    }
    
    return count;
};

const num = 430043, k = 2;
console.log(divisorSubstrings(num, k));
