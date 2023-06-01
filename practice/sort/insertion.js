const insertionSort = function(arr = []) {

    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0 && arr[j] < arr[j-1]; j--) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }

    }

    return arr
}

// bestcase 
// T:O(n) S:O(1)
// worstcase 
// T:O(n^2) S:O(1)