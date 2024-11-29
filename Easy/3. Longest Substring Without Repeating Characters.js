var lengthOfLongestSubstring = function(s) {
    let hashSet = new Set()
    let maxLength = 0

    let i = 0
    for(let j = 0 ; j < s.length; j++){
        while(hashSet.has(s[j])){
            hashSet.delete(s[i])
            i++
        }

        hashSet.add(s[j])

        maxLength = Math.max(maxLength, j - i + 1)
    }
    return maxLength
};
const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))
