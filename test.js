// function moveZerosLast(nums){

// let left = 0
// let right = nums.length - 1;

// while(left < right){
//     if(nums[left] === 0 && nums[right] !== 0){
//         let temp = nums[left]
//         nums[left] = nums[right]
//         nums[right] = temp
//         left++
//         right--
//     }

//     if(nums[left] !== 0){
//         left++
//     }

//     if(nums[right] === 0){
//         right--
//     }
// }
// return nums

// }
// const nums = [0,24,0,0,3,52,0]
// console.log(moveZerosLast(nums));



// const arr = [1,2,,"Riyas", 34]
// const emptyArr = arr.filter(val => val !== undefined)
// console.log(emptyArr)


const arr = new Array(1,2,3,4)
console.log(arr.length);

const obj = [
    { num1: [123] },
    { num1: [123] },
    { num1: [123] },
    { num1: [123] }
    ]

console.log(obj)
