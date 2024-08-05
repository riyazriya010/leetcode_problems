
var differenceOfSum = function(nums) {
    let result1 = 0
    let result2 = 0

    for(let i = 0; i < nums.length; i++){
        result1 += nums[i]

        let num = nums[i]
        while(num){
            result2 += num % 10
            num = Math.floor(num / 10)
        }
    }
    return Math.abs(result1 - result2)
};
const nums = [1,15,6,3]
console.log(differenceOfSum(nums))



/////////
const arr=['Apple','orange','Pineapple','Starwberry']
let str
let result=arr.reduce((acc,value)=>{
    if(value.length){
        str = value
        return value.length
    }
 
})
console.log(str)


let arr1 = [
    [{a:[1,2,3]}],
    [{b:[1,2,3]}],
    [{c:[1,2,3]}],
    [{d:[1,2,3]}],
    [{e:[1,2,3]}],
]
let sum = 0
for (let arr of arr1) {
    for (let obj of arr) {
        for (let key in obj) {
            for (let val of obj[key]) {
                sum += val;
            }
        }
    }
}
console.log('sum: ',sum)