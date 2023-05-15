// Squaring a sorted array

function solve(arr = []) {
    let left = 0
    let right = arr.length - 1

    let result = []

    while (left <= right) {
        let leftSq = Math.pow(arr[left], 2)
        let righSq = Math.pow(arr[right], 2)

        if (leftSq > righSq) {

            result.unshift(leftSq)
            result.unshift(righSq)

        } else if (righSq > leftSq) {
            
            result.unshift(righSq)
            result.unshift(leftSq)
            
        } else {
            result.unshift(righSq)
        }

        left += 1
        right -= 1
    }

    return result

}


console.log(solve([-2, -1, 0, 2, 3]));
console.log(solve([-3, -1, 0, 1, 2]));