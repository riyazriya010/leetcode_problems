
var findMaxK = function(nums) {
    if(nums.length < 1) return -1

    let max = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            if(nums.includes(Math.abs(nums[i])) && max < Math.abs(nums[i])){
                max = Math.abs(nums[i])
            }
        }
    }

    if(max !== 0) return max
    else return -1
    
};
const nums = [-1,10,6,7,-7,1]
console.log(findMaxK(nums)); // 33
