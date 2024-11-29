var pivotIndex = function(nums) {
    for(let pivot = 0; pivot < nums.length; pivot++){
        let leftSum = 0
        let rightSum = 0

        for(let i = 0; i < pivot; i++){
            leftSum += nums[i]
        }

        for(let j = pivot + 1; j < nums.length; j++){
            rightSum += nums[j]
        }

        if(leftSum === rightSum){
            return pivot
        }
    }
    return -1
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));

