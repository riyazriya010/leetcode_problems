var peakIndexInMountainArray = function(arr) {
    let peakElement = Math.max(...arr)
    return arr.indexOf(peakElement)
    
};
const arr = [0,1,0]
console.log(peakIndexInMountainArray(arr))