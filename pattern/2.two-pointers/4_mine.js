function solve(arr = []) {
    let sortedArr = arr.sort((a, b) => a - b);

    let result = []

    for (let i = 0; i < arr.length - 1; i++) {

        if (i < arr.length - 1 && arr[i] == arr[i+1])
            continue

        sum = sortedArr[i]
        let arrResult = twoSum(sortedArr.slice(i + 1), -sum)
        for (let item of arrResult) {
            result.push([sortedArr[i], item[0], item[1]])
        }
    }

    return result
}

function twoSum(arr = [], sum = 0) {

    let start = 0, end = arr.length - 1

    let  result = []

    while (start <= end) {
        if ((arr[start] + arr[end]) == sum) {
            result.push([arr[start], arr[end]])
            start += 1
            end -= 1
        } else if ((arr[start] + arr[end]) < sum) {
            start += 1
        } else {
            end -= 1
        }
    }

    return result
}

console.log(...solve([-3, 0, 1, 2, -1, 1, -2]))
console.log(...solve([-5, 2, -1, -2, 3]))