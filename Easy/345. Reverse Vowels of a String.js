

var reverseVowels = function(s) {
    let regex = /[aeiou]/i;
    let str = s.split('');

    let first = 0;
    let last = str.length - 1;

    while (first < last) {
        const firstStr = str[first].toLowerCase();
        const lastStr = str[last].toLowerCase();

        if (!regex.test(firstStr)) {
            first++;
        } else if (!regex.test(lastStr)) {
            last--;
        } else {
           
            let temp = str[first];
            str[first] = str[last];
            str[last] = temp;

            
            first++;
            last--;
        }
    }

    return str.join('');
};

const s = "IceCreAm";
console.log('s: ', reverseVowels(s)); 

const v = "leetcode";
console.log('v: ', reverseVowels(v));
