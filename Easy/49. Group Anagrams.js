

var groupAnagrams = function(strs) {
    let anagObj = {};
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');

        if (!anagObj[sortedStr]) {
            anagObj[sortedStr] = [];
        }
        anagObj[sortedStr].push(str);
    }

    return Object.values(anagObj);
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));