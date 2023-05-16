
function solve(arr = [], target) {
    arr = arr.sort((a, b) => a - b)

    let smallestDiff = Infinity

    for (let i = 0; i < arr.length - 2; i++) {
        let start = i + 1
        let end = arr.length - 1

        while (start < end) {
            const targetDiff = target - arr[i] - arr[start] - arr[end]

            if (targetDiff == 0) 
                return target

            if (Math.abs(targetDiff) < Math.abs(smallestDiff)) {
                smallestDiff = targetDiff
            }

            if (Math.abs(targetDiff) < Math.abs(smallestDiff) || 
                (Math.abs(targetDiff) == Math.abs(smallestDiff) && targetDiff > smallestDiff)) {
                smallestDiff = targetDiff
            }

            if (targetDiff > 0) {
                start += 1
            } else {
                end -= 1
            }
        }
    }

    return target - smallestDiff
}



console.log(solve([-2, 0, 1, 2], 2))
console.log(solve([-3, -1, 1, 2], 1))
console.log(solve([1, 0, 1, 1], 100))
console.log(solve([-1,2,1,-4], 1))