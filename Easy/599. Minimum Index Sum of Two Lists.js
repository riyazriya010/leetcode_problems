
// Hashmap method
var findRestaurant = function(list1, list2) {
    let map = new Map()
    let result = []
    let minIndex = Infinity

    // storing the list1 values in the map
    list1.forEach((item, i) => map.set(item, i));

    // checking the common values from both the list
    list2.forEach((item, j) => {
        if(map.has(item)){
            const indexSum = j + map.get(item)
            if(indexSum < minIndex){
                minIndex = indexSum
                result = [item]
            }else if(indexSum === minIndex){
                result.push(item)
            }
        }
    })
    return result;
};
const list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
console.log(findRestaurant(list1, list2));



