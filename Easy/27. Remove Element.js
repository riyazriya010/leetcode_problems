var removeElement = function(nums, val) {
    let swapped
    do{
        swapped = false
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === val){
            nums.splice(i, 1)
            swapped = true
            break;
          }
        }
    }while(swapped)
        return nums.length

    // let k = 0;
    // for(let i = 0; i < nums.length; i++){
    //     console.log('Arr1: ', nums)
    //     if(nums[i] !== val){
    //         nums[k] = nums[i]
    //         k++
    //     }
    //     console.log('Arr2: ', nums)
    // }
    // return k
}
const nums = [3,2,2,3], val = 3
console.log(removeElement(nums, val));
