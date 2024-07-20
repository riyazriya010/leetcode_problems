//  2215. Find the Difference of Two Arrays

var findDifference = function(nums1, nums2) {
    let list = [[],[]]
    let set1 = new Set()

    let arr1 = nums1.filter(val => {
        if(!nums2.includes(val)){
            if(!set1.has(val)){
            set1.add(val)
            list[0].push(val)
            return val
            }
        }
    })

    set1.clear() // clearing the set

    let arr2 = nums2.filter(val => {
        if(!nums1.includes(val)){
            if(!set1.has(val)){
            set1.add(val)
            list[1].push(val)
            return val
            }
        }
    })
    return list
}

const nums1 = [1,2,3], nums2 = [2,4,6]
const nums3 = [1,2,3,3], nums4 = [1,1,2,2]
const nums5 = [80,5,-20,33,26,29], nums6 = [-69,0,-36,52,-84,-34,-67,-100,80]

console.log(findDifference(nums1, nums2))
console.log(findDifference(nums3, nums4))
console.log(findDifference(nums5, nums6))