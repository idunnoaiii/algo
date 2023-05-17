function solve(arr = []) {

    let low = 0, mid = 0, high = arr.length - 1
    
    while (mid <= high) {

        if (arr[mid] == 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]]
            low += 1
            mid += 1
        } else if (arr[mid] == 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high -= 1
        } else if (arr[mid] == 1) {
            mid += 1
        }

    }

    return arr
}


//console.log(solve([1, 0, 2, 1, 0]))
console.log(solve([2, 2, 0, 1, 2, 0]))


