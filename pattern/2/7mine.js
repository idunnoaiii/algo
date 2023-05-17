// UNDONE

function solve(arr = [], target) {

    let start = 0;
    let curProduct = 1;
    let res = []

    for (let end = 0; end < arr.length; end ++) {

        let curNum = arr[end]
        
        if (curNum < target)
            res.push([curNum])

        curProduct *= curNum

        if (curProduct < target && end != 0) {
            res.push(arr.slice(start, end + 1))
        } 

        while (curProduct >= target) {
            curProduct /= arr[start]
            start += 1

            if (curProduct < target && end != 0) {
                res.push(arr.slice(start, end + 1))
            } 
        }
    }

    return res
}

console.log(solve([2, 5, 3, 10], 30))
//[2], [5], [2, 5], [3], [5, 3], [10] There are six contiguous subarrays whose product is less than the target.
console.log(solve([8, 2, 6, 5], 50))
//[8], [2], [8, 2], [6], [2, 6], [5], [6, 5] There are seven contiguous subarrays whose product is less than the target.
console.log(solve([10, 5, 2, 6], 100))
//The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
