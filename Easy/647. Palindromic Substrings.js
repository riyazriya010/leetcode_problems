var countSubstrings = function(s) {
    let count = 0

    const countIncreaser = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            count++
            left--
            right++
        }
    }

    for(let i = 0; i < s.length; i++){
        countIncreaser(i, i) // this is for Odd length

        countIncreaser(i , i + 1) // this is for Even length
    }

    return count
};
const s = "adaa"
console.log(countSubstrings(s))
