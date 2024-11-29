
var findDuplicate = function(nums) {
    const found = new Set()
    for(let num of nums){
        if(found.has(num)){
            return num
        }
        found.add(num)
    }
    return -1
};
const nums = [1,3,4,2,2]
console.log(findDuplicate(nums));
