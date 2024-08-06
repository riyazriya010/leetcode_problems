

var sortedSquares = function(nums) {
    let sqrNums = nums.map(value => value * value)
    return sqrNums.sort((a, b) => a - b);
};
const nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))