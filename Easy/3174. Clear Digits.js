
var clearDigits = function(s) {
    let nums = [0,1,2,3,4,5,6,7,8,9];
    let string = s.split('');
    
    for (let i = 0; i < string.length; i++) {

        if (nums.includes(Number(string[i]))) {
            let currIndex = i;
            let previousIndex = currIndex - 1;

            string.splice(currIndex, 1);

            if (previousIndex >= 0) {
                string.splice(previousIndex, 1);
                i--; 
            }
            i = -1; 
        }
    }
    
    return string.length === 0 ? "" : string.join('');
};

const s = "cb34";
console.log(clearDigits(s));