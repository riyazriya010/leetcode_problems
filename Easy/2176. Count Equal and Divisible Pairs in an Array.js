
var countPairs = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                let multValue = i * j
                if(multValue % k === 0){
                    count++
                }
            }
        }
    }
    return count
};

const nums = [1,2,3,4], k = 1
console.log(countPairs(nums, k))