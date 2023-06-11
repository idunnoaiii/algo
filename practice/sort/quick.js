const sortArr = (arr = [], left = 0, right = arr.length - 1) => {
    if (left >= right) return []

    let pIdx = pivot(arr, left, right)

    sortArr(arr, left, pIdx - 1)
    sortArr(arr, pIdx + 1, right)

    return arr
}

const pivot = (arr = [], left, right) => {

    let p = right
    let i = left - 1
    let j = left

    while (j <= p) {
        if (arr[j] < arr[p]) {
            i += 1
                [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        j += 1
    }

    i += 1
    [arr[i], arr[p]] = [arr[p], arr[i]]

    return i
}