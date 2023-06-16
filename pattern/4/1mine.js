/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {

    let newIntervals = sortByFirstNumber(intervals)

    for (let i = 0; i < newIntervals.length - 1; i++) {
        let [a1, a2] = newIntervals[i]
        let [b1, b2] = newIntervals[i + 1]

        if (b1 <= a2) {
            newIntervals[i + 1] = [Math.min(a1, b1), Math.max(a2, b2)]
            newIntervals[i] = null
        }
    }

    return newIntervals.filter(x => x != null)
}

/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
const sortByFirstNumber = function (arr) {
    if (arr.length <= 1) {
        return arr
    }

    let mid = (arr.length) >> 1
    let arr1 = sortByFirstNumber(arr.slice(0, mid))
    let arr2 = sortByFirstNumber(arr.slice(mid, arr.length))

    return mergeArr(arr1, arr2)
}

/**
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @return {number[][]}
 */
const mergeArr = function (arr1, arr2) {
    let left = 0
    let right = 0

    let res = []
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left][0] < arr2[right][0]) {
            res.push(arr1[left++])
        } else {
            res.push(arr2[right++])
        }
    }

    while (left < arr1.length)
        res.push(arr1[left++])

    while (right < arr2.length)
        res.push(arr2[right++])

    return res
}


console.log(merge([[1, 3], [2, 6], [8, 10], [5, 18]]))
