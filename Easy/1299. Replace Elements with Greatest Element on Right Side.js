

var replaceElements = function(arr) {
    let n = arr.length;
    let max = -1;
    
    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = max;
        if (current > max) {
            max = current;
        }
    }

    return arr;
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
