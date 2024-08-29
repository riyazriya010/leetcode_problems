

var validPalindrome = function(s) {
    function checkPalindrom(str, left, right) {
        while(left < right){
            if(str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1

    while(left < right){
        if(s[left] !== s[right]){
           return checkPalindrom(s,left + 1, right) || checkPalindrom(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true
}
const s = "abca";
console.log(validPalindrome(s));
