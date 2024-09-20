

var repeatedSubstringPattern = function(s) {
    if(s === "") return false;
    let doubled = (s + s).slice(1, -1);
    return doubled.includes(s);
};

console.log(repeatedSubstringPattern("aabb")); // true
console.log(repeatedSubstringPattern("ab")); // false
console.log(repeatedSubstringPattern("aa")); // true
console.log(repeatedSubstringPattern("abcabc")); // true
console.log(repeatedSubstringPattern("abc")); // false
console.log(repeatedSubstringPattern("")); // false
console.log(repeatedSubstringPattern("ababba")); // false
console.log(repeatedSubstringPattern("ababab")); // true