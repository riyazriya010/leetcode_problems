var countPrimeSetBits = function(left, right) {
    let count = 0;
    let arr = [];
    let sumArr = [];
    
    for(let i = left; i <= right; i++){
        let bit = (i >>> 0).toString(2);
        arr.push(bit);
    }

    for(let val of arr){
        let sum = 0;
        for(let num of val){
            if(Number(num) === 1){
                sum += 1;
            }
        }
        sumArr.push(sum);
    }

    for(let i = 0; i < sumArr.length; i++){
        let flag = 1;
        if(sumArr[i] < 2) continue;
        for(let j = 2; j <= Math.sqrt(sumArr[i]); j++){
            if(sumArr[i] % j === 0){
                flag = 0;
                break;
            }
        }

        if(flag === 1){
            count++;
        }
    }

    return count;
};

const left = 6, right = 10
console.log(countPrimeSetBits(left, right));




// var countPrimeSetBits = function(left, right) {
//     let count = 0;
    
//     const isPrime = (num) => {
//         console.log('num: ',num)
//         if (num < 2) return false;
//         for (let i = 2; i * i <= num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     };
    
//     for (let i = left; i <= right; i++) {
//         let bitCount = (i.toString(2).match(/1/g) || []).length;
//         console.log('bitCount: ',bitCount)
//         if (isPrime(bitCount)) {
//             count++;
//         }
//     }
    
//     // return count;
// };

// const left = 10, right = 15;
// console.log(countPrimeSetBits(left, right));