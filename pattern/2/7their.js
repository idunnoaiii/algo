function solve(arr = [], target) {
    
    let start = 0
    let product = 1
    let res = []

    for (let end = 0; end < arr.length; end++) {
        product *= arr[end]

        while (product >= target && start < arr.length) {
            product /= arr[start]
            start += 1
        }

        let subRes = []

        for (let i = end; i >= start; i--) {
            subRes.unshift(arr[i])
            res.push(subRes)
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