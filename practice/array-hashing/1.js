// 217. Contains Duplicate

// time O(n)
// space O(n)
function solve(arr = []) {
    let bag = new Map()

    for (let item of arr) {
        if (bag.has(item)) 
            return true
        bag.set(item, true)
    }

    return false
}
