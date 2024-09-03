function moveZerosLast(nums){

let left = 0
let right = nums.length - 1;

while(left < right){
    if(nums[left] === 0 && nums[right] !== 0){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }

    if(nums[left] !== 0){
        left++
    }

    if(nums[right] === 0){
        right--
    }
}
return nums

}
const nums = [0,24,0,0,3,52,0]
console.log(moveZerosLast(nums));