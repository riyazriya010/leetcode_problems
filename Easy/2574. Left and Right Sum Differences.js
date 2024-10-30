var leftRightDifference = function(nums) {
    if(nums.length === 1) return [0]

    let left = [0,nums[0]]
    let right = [nums[nums.length - 1],0]
    let answer = []

    for(let i = 1; i < nums.length; i++){
        if(left.length === nums.length || right.length === nums.length) break

        //left array
        const sum1 = nums[i]  + left[i]
        left.push(sum1)

        //right array
        const sum2 = nums[nums.length - i - 1] + right[0] 
        right.unshift(sum2)
    }

    // answer array
    for(let k = 0; k < nums.length; k++){
        const difference = Math.abs(left[k] - right[k])
        answer.push(difference)
    }
    return answer
}
const nums = [10,4,8,3]
console.log(leftRightDifference(nums))

/* Output: [15,1,11,22] The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22]. */