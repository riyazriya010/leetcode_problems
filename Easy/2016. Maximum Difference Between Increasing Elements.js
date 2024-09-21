
var maximumDifference = function(nums) {
    if(nums.length < 1) return -1;

    let distance = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] < nums[j]){
                distance.push(nums[j] - nums[i])
            }
        }
    }
    let maxDistance = Math.max(...distance)

    if(maxDistance == -Infinity) return -1
    else{ return maxDistance }

};
const nums = [1,5,2,10]
console.log(maximumDifference(nums));
