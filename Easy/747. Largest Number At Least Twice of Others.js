var dominantIndex = function(nums) {
    let firstLarge = -Infinity
    let secondLarge = -Infinity

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > firstLarge){
            secondLarge = firstLarge
            firstLarge = nums[i]
        }else if(nums[i] > secondLarge && nums[i] < firstLarge){
            secondLarge = nums[i]
        }
    }
    if(secondLarge * 2 === firstLarge){
        return nums.indexOf(firstLarge)
    }
    return -1
};
const nums = [1,2,3,4]
console.log(dominantIndex(nums))