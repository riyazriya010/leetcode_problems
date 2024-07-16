//  Unique Number of Occurrences

var UniqueOccurences = (num) => {
    let occurrences = {}
    let occurrencesSet = new Set()

    //count the number occurrences
    num.forEach(val => {
        occurrences[val] = (occurrences[val] || 0) + 1
    });

    // store the occurrence in the set to check the unique
    for( let key in occurrences){
        if(occurrencesSet.has(occurrences[key])){
            return false
        }

        occurrencesSet.add(occurrences[key])
    }
    return true
}

const arr = [1,2]
console.log(UniqueOccurences(arr));