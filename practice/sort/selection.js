const selectionSort = function(arr = []) {

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) 
                minIdx = j
        }

        [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
    }

    return arr
}

// worstcase
// time: O(n^2)
// space: O(1)