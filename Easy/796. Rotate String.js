var rotateString = function (s, goal) {
    let strArr = s.split('')
    let left = 0
    while (left < s.length) {
        let firstChar = strArr.splice(0, 1)
        strArr.push(firstChar)
        let joined = strArr.join('')
        if (joined === goal) {
            return true
        }
        left++
    }
    return false
};
const s = "abcde", goal = "cdeab"
console.log(rotateString(s, goal))
