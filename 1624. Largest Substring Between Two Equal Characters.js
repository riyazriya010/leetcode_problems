

var maxLengthBetweenEqualCharacters = function(s) {

    //Storing the incides values
    let dictionary = []
    
    // storing the length of the values between the common values
    let lengthArr = []

    for(let i = 0; i < s.length; i++){

        //checking the values having in the dictionary array or not
        if(dictionary.includes(s[i])){
            // get the first index of the founded value from the s array
            let index = s.indexOf(s[i])
            // current i - founded index - 1
            let count = i - index - 1
            // push the count to the array
            lengthArr.push(count)
        }else{
            // if value not present, pushing the values
            dictionary.push(s[i])
        }
    }

    // if the no values in the array return -1
    if(lengthArr.length === 0){
        return -1
    }
    // or return the max value from the array
    return Math.max(...lengthArr)

};
const s = "mgntdygtxrvxjnwksqhxuxtrv"
console.log(maxLengthBetweenEqualCharacters(s))