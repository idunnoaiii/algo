function solve(arr = [], target) {
    arr = arr.sort((a, b) => a - b)

    let count = 0

    for (let i = 0; i < arr.length - 2; i++) {
        count += searchPair(arr, target - arr[i], i)
    }

    return count
}

function searchPair(arr = [], target, first) {
    let count = 0, start = first + 1, end = arr.length - 1

    while (start < end) {
        let curSum = arr[start] + arr[end]

        if (curSum < target) {
            count += end - start
            start += 1
        } else {
            end -= 1
        }
    }

    return count
}


console.log(solve([-1, 0, 2, 3], 3))//2
console.log(solve([-1, 4, 2, 1, 3], 5))//4
console.log(solve([-2, 0, 1, 3], 2))//2
console.log(solve([], 0))//0
console.log(solve([0], 0))//0