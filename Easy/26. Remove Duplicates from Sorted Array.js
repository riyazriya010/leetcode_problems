var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0

    let k = 1
    let left = 0
    for(let right = 1; right < nums.length; right++){
        if(nums[left] !== nums[right]){
            left++
            nums[left] = nums[right]
            k++
        }
    }
    return k
};
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
