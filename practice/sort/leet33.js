// search in rotated sorted array

const search = function (nums = [], target) {
    return binSearch(nums, 0, nums.length - 1, target)
}

const binSearch = function (nums = [], left = 0, right = nums.length - 1, target) {
    let mid = (left + right) >> 1

    if (nums[mid] === target) 
        return mid

    if (nums[left] < nums[mid] && (target >= nums[left] && target <= nums[mid])) {
        return binSearch(nums, left, mid, target)
    }

    return binSearch(nums, mid + 1, right, target)

}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));


// trivial way is to do a linear search with time complexity of O(n)
//