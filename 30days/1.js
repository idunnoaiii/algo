//74. Search a 2D Matrix


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    let newArr = matrix.flatMap(x => x);
    return binarySearch(target, newArr, 0, newArr.length - 1)
};

const binarySearch = function (target, arr = [], left, right) {

    if (left > right) return -1

    let mid = ((right - left) >> 1) + left
   
    let midValue = arr[mid]
    
    if (midValue == target)
        return mid
    
    if (midValue < target)
        return binarySearch(target, arr, mid + 1, right)

    return binarySearch(target, arr, left, mid - 1)
}