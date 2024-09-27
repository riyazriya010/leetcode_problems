
var minOperations = (nums, k) => {
    let collected = new Set();
    let operations = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            collected.add(nums[i]);
        }
        
        operations++;
        
        if (collected.size === k) {
            return operations;
        }
    }
    
    return operations;
}

console.log(minOperations([3, 1, 5, 4, 2], 2)); // Output: 4
