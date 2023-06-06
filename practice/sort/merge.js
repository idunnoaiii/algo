function mergeSort(arr = []) {

    if (arr.length <= 1) 
        return arr

    let middle = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, middle))  
    let right = mergeSort(arr.slice(middle))

    return merge(left, right)
}


function merge(left = [], right = []) {
    let result = []

    let l = 0, r = 0

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r] && l < left.length) {
            result.push(left[l++])
        } else {
            result.push(right[r++])
        }
    }

    while (l < left.length)
        result.push(left[l++])

    while (r < right.length)
        result.push(right[r++])

    return result
}


// time: O(nlogn)
// space: n


console.log(mergeSort([5,2,3,1]))


