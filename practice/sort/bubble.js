const bubbleSort = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j)
            }
        }
    }
    return arr
}

const bubbleSort2 = (arr = []) => {
    let swap = true
    let count = 0

    while (swap) {
        swap = false

        for (let i = 0; i < arr.length - count; i++) {
            let j = i + 1
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                swap = true
            }
        }

        count++
    }

    return arr
}

// time O(n)
// space O(1) 

const swap = (arr = [], i = 0, j = 0) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log(bubbleSort([2, 4, 1, 0, 3, 2, 1, 6, 5]))