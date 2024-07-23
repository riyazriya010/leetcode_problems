
// [3,1,1,2,2,2]

var frequencySort = function(nums) {
    let frequencyCounter = {}

    for(let val of nums){
        if(frequencyCounter[val] !== undefined){
            frequencyCounter[val] += 1
        } else {
            frequencyCounter[val] = 1
        }
    }
    console.log(frequencyCounter)

   let sortedArray = nums.sort((a, b) => {
    if(frequencyCounter[a] === frequencyCounter[b]){
        return b - a
    }else{
       return frequencyCounter[a] - frequencyCounter[b]
    }

   })

   return sortedArray
};

const nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums));