

var selfDividingNumbers = function(left, right) {
    let arr = [];

    let i = left;

    while (i <= right) {
        let strNum = String(i);
        let isSelf = true;

        for (let char of strNum) {
            if (char === '0' || i % Number(char) !== 0) {
                isSelf = false;
                break;
            }
        }

        if (isSelf) {
            arr.push(i);
        }

        i++;
    }

    return arr;
};

const left = 1, right = 22;
console.log(selfDividingNumbers(left, right));
