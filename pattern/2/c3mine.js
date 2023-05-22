
// Minimum window sort

function sort(arr = []) {  
    let invalidMin = 0
    let invalidMax = arr.length - 1

    while (invalidMin < arr.length - 1) {
        if (arr[invalidMin] > arr[invalidMin + 1])
            break
        invalidMin += 1
    }

    while (invalidMax > 0) {
        if (arr[invalidMax] < arr[invalidMax - 1])
            break
        invalidMax -= 1
    }

    if (invalidMin == arr.length - 1 && invalidMax == 0)
        return 0

    let subArr = arr.slice(invalidMin, invalidMax + 1)
    
    let min = Math.min(...subArr)

    let max = Math.max(...subArr)

    let minPos = 0
    let maxPos = arr.length - 1

    while (arr[minPos] <= min) {
        minPos += 1
    }

    while (arr[maxPos] >= max) {
        maxPos -= 1
    }

    return maxPos - minPos + 1

}

console.log(sort([1, 2, 5, 3, 7, 10, 9, 12])) //5
console.log(sort([1, 3, 2, 0, -1, 7, 10])) //5
console.log(sort([1, 2, 3])) //0
console.log(sort([3, 2, 1])) //3


// time O(5N) = O(N)
// space O(N)