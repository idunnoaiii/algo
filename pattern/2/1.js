// Pair with target sum

function solve(arr = [], targetSum) {
    let start = 0, end = arr.length - 1

    while (start <= end) {
        let sum = arr[start] + arr[end]

        if (sum == targetSum) {
            return [start, end]
        }  
        
        if (sum < targetSum) {
            start += 1
        } else {
            end -= 1
        }
    }

    return [-1, -1]
}


console.log(solve([1, 2, 3, 4, 6], 6))
console.log(solve([2, 5, 9, 11], 11))