// Remove duplication

function solve(arr = []) {
    let nextNonDuplicate = 1
    let index = 1
    
    while (nextNonDuplicate < arr.length) {

        if (arr[nextNonDuplicate] != arr[index-1]) {
            arr[index] = arr[nextNonDuplicate]
            index += 1
        }

        nextNonDuplicate += 1

    }

    return arr.slice(0, index)
}

console.log(solve([2, 3, 3, 3, 6, 9, 9]))
console.log(solve([2, 2, 2, 11]))