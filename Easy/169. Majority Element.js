// Majority Element

var majorityElement = function(nums) {
    let value=0;
    let max=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===-1)
        continue;
        let count=1;
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                nums[j]=-1;
                count++;
            }
        }
        if(count>max){
            max=count;
            value=nums[i];
        }
    }
    return value;
}
const nums = [3,2,3]
console.log(majorityElement(nums));
