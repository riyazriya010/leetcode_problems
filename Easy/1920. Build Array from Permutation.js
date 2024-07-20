
/* 
  Build Array from Permunation
*/

var buildArray = (nums) => {

    let ans = []
    let arr = []
    for(let i = 0; i < nums.length; i++){
        ans.push(nums[i])
    }

    for(let j = 0; j < ans.length; j++){
        if(ans[j] >= 0 && ans[j] < nums.length){
        arr.push(nums[ans[j]])
        }
    }
    return arr
}
const nums = [5,0,1,2,3,4]
console.log(buildArray(nums))