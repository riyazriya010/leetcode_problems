
/*

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

*/


var areOccurrencesEqual = function(s) {
    let charObj = {};

    for (let i = 0; i < s.length; i++) {
        if (charObj[s[i]]) {
            charObj[s[i]]++;
        } else {
            charObj[s[i]] = 1;
        }
    }

    let frequencies = Object.values(charObj);
    const firstFreq = frequencies[0];

    for (let i = 1; i < frequencies.length; i++) {
        if (frequencies[i] !== firstFreq) {
            return false;
        }
    }
    return true;
};

const s = "abacbc";
console.log(areOccurrencesEqual(s));
