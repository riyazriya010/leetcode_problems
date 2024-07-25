

var maxProduct = function(nums) {
    let firstMax = nums.splice(nums.indexOf(Math.max(...nums)),1)
    let secondMax = nums.splice(nums.indexOf(Math.max(...nums)),1) 
    return (firstMax - 1) * (secondMax - 1)
};
const nums = [1,5,4,5]
console.log(maxProduct(nums))