
var romanToInt = function(s) {

    /*
        Time complexity of this program is O(N)
        Space complexity of this program is O(1)
     */

    let romanNumeral = { I: 1,
                         V: 5,
                         X: 10,
                         L: 50,
                         C: 100,
                         D: 500,
                         M: 1000
                         };
    let sum = 0;

    for(let i = 0; i < s.length; i++){

        if(i < s.length - 1 && romanNumeral[s[i]] < romanNumeral[s[i + 1]]){
            sum -= romanNumeral[s[i]];
        }else{
            sum += romanNumeral[s[i]];
        }

    }

    return sum;
};
