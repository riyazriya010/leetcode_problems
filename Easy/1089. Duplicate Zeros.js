var duplicateZeros = (arr) => {
    if(!arr.includes(0))
        return arr
    
    let length = arr.length
    for(let i = 0; i < length; i++){
        if(arr[i] === 0){
            arr.splice(i,0,0) // Insert an additional zero
            arr.pop() // Remove the last element to maintain the original length
            i++ // Skip the next element to avoid duplicating the new zero
        }
    }
    return arr
}

const arr = [1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr))
