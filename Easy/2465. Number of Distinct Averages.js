
var distinctAverages = function(nums) {
    let uniqueAverage = new Set()

        while(nums.length > 0){
            let minIndex = nums.indexOf(Math.min(...nums));
            let maxIndex = nums.indexOf(Math.max(...nums));
            
            // this will return in array so we taking element only from the 0th index
            let minimum = nums.splice(minIndex, 1)[0];

            // if the maxIndex greater that the minIndex then  the array already altered so we subtracting -1 from maxIndex
            let maximum = nums.splice(maxIndex > minIndex ? maxIndex - 1 : maxIndex, 1)[0];
    
            let average = (minimum + maximum) / 2;
            uniqueAverage.add(average);
        }
        return uniqueAverage.size // returning the size of the set
};

const nums = [4,1,4,0,3,5]
console.log(distinctAverages(nums));
