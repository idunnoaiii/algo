// Remove duplication


function solve(arr = []) {
    let left = 0
    let right = left + 1

    while (right < arr.length) {
        if (arr[left] != arr[right]) {
            left = right
            right += 1
        } else {
            while (arr[right] == arr[left]) {
                right += 1
                arr[right] = undefined
            }

            if (right == arr.length)
                break;

            arr[left + 1] = arr[right]
            arr[right] = undefined
            left = right
            right += 1
        }
    }

    return arr.filter(x => x !== undefined)
}


console.log(solve([2, 3, 3, 3, 6, 9, 9]))
console.log(solve([2, 2, 2, 11]))
// Remove duplication


function solve(arr = []) {
    let left = 0
    let right = left + 1

    while (right < arr.length) {
        if (arr[left] != arr[right]) {
            left = right
            right += 1
        } else {
            while (arr[right] == arr[left]) {
                right += 1
                arr[right] = undefined
            }

            if (right == arr.length)
                break;

            arr[left + 1] = arr[right]
            arr[right] = undefined
            left = right
            right += 1
        }
    }

    return arr.filter(x => x !== undefined)
}


console.log(solve([2, 3, 3, 3, 6, 9, 9]))
console.log(solve([2, 2, 2, 11]))