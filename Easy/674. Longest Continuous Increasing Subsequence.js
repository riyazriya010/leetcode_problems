


var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0; // Handle edge case: empty array

    let maxLength = 1; // Start with a minimum length of 1, as the smallest LCIS has at least one element
    let currentLength = 1; // Track the current length of the increasing subsequence

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            currentLength++; // Increment the length if the sequence is increasing
        } else {
            maxLength = Math.max(maxLength, currentLength); // Update maxLength if current is longer
            currentLength = 1; // Reset currentLength for a new sequence
        }
    }

    maxLength = Math.max(maxLength, currentLength); // Final check for the last sequence

    return maxLength;
};

const nums = [2,2,2,2,2]
console.log(findLengthOfLCIS(nums))