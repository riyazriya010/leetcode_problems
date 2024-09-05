
var plusOne = function(digits) {
    if(digits.length < 1) return 0;

    let number = Number(digits.join(''))
    number += 1
    console.log(number)

    return String(number).split('')
};
const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits));



var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};

