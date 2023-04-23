function search_basic(arr = [], x = 0) {

    for (let idx = 0; idx < arr.length; idx ++) {
        if (arr[idx] === x) {
            return true
        }
    }

    return false
}

/** 
 * In the basic we always doing 2 operations
 * Via adding the x to the last of array, we only do 1 op arr[i] != x
*/
function search_setinel(arr = [], x = 0) {
    arr.push(x)
    let i = 0

    while (arr[i] != x) {
        i += 1
    }

    return i != arr.length - 1
}

// O(n)
// Space(1)