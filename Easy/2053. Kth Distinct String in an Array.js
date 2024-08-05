

var kthDistinct = function(arr, k) {
    let distinctStr = arr.filter(value => {
        if(arr.indexOf(value) === arr.lastIndexOf(value)){
            return value
        }
    });

    if(distinctStr.length < k){
        return ""
    }
    return distinctStr[k-1]
};
const arr = ["d","b","c","b","c","a"], k = 2
console.log(kthDistinct(arr, k));