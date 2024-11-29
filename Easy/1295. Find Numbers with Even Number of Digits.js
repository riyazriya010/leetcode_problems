var findNumbers = function(nums) {
    let evenArry = []
    for(let i = 0; i < nums.length; i++){
        let count = 0
        let n = nums[i]

        while( n > 0){
            n = Math.floor(n/10)
            count++
        }
        if(count % 2 === 0){
            evenArry.push(nums[i])
        }
    }
    return evenArry.length
};
const nums = [555,901,482,1771]
console.log(findNumbers(nums));