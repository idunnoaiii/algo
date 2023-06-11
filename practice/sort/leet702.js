const search = function (nums = [], target) {
    let left = 0
    let right = 1

    while (nums[right] <= target && nums[right] <= 10000) {
        left = right
        right = right << 1
    }

    if (nums[right] > 10000)
        return -1

    while (left <= right) {
        let mid = left + ((right - left) >> 1)

        if (nums[mid] === target)
            return mid

        if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}
// time O(log(n))
// space O(1)

console.log(search([-1, 0, 3, 5, 9, 12], 9))

