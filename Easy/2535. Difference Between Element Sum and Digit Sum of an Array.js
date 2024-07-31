
var differenceOfSum = function(nums) {
    let result1 = 0
    let result2 = 0

    for(let i = 0; i < nums.length; i++){
        result1 += nums[i]

        let num = nums[i]
        while(num){
            result2 += num % 10
            num = Math.floor(num / 10)
        }
    }
    return Math.abs(result1 - result2)
};
const nums = [1,15,6,3]
console.log(differenceOfSum(nums))