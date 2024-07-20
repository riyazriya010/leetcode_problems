

var findPermutationDifference = function(s, t) {
    if(s.length !== t.length){
        return 0
    }

    let sum  = 0
    let i = 0

    while(i < s.length){
        let value = s[i]
        let index = s.indexOf(value)
        let indexT= t.indexOf(value)
        let minus = Math.abs(index - indexT)
        sum += minus
        i++
    }
    return sum
};
const s = "abcde", t = "edbac"
console.log(findPermutationDifference(s, t));