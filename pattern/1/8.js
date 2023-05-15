function solve(arr = [], k) {

    let start = 0
    let end = 0
    let result = 0
    let bag = new Map()

    for (let end = 0; end < arr.length; end++) {

        if (arr[end] == 1) {
            result = Math.max(result, end - start + 1)
            continue;
        }

        if (bag.size < k) {
            bag.set(end, true)
            result = Math.max(result, end - start + 1)
            continue;
        }

        if (bag.get(start)) {
            start ++
            bag.delete(start)
            bag.set(end, true)
            result = Math.max(result, end - start + 1)
            continue;
        }

        while(bag.get(start) == undefined) {
            start ++
        }

        bag.delete(start)
        start ++
        bag.set(end, true)
        result = Math.max(result, end - start + 1)

    }

    return result

}

let result = solve([],0);
let result2 = solve([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
console.log(result)
console.log(result2);