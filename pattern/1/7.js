function solve(arr = [], k) {
    let windStart = 0, maxRes = 0, maxRepeatedCount = 0

    let bag = new Map()

    for (let end = 0; end < arr.length; end++) {

        bag.set(arr[end], (bag.get(arr[end]) || 0) + 1)

        if (currentMaxCountChar(bag).indexOf(arr[end]) > -1 && currentMaxCountChar(bag).length == 1) {
            maxRepeatedCount += 1
        }

        if ((end - windStart + 1 - maxRepeatedCount) > k) {

            if (currentMaxCountChar(bag).indexOf(arr[windStart]) > - 1 && currentMaxCountChar(bag).length == 1) {
                maxRepeatedCount -= 1
            }

            bag.set(arr[windStart], (bag.get(arr[windStart]) || 0) - 1)

            windStart += 1

        }

        maxRes = Math.max(maxRes, end - windStart + 1)
    }

    return maxRes

}

function currentMaxCountChar(map = new Map()) {

    let res = []

    if (map.size == 0) return res

    let max = Math.max(...map.values())

    res = [...map.entries()].filter(x => x[1] == max).map(x => x[0])

    return res
}

const res1 = solve("aabccbb", 2)

const res2 = solve("abbcb", 1)

const res3 = solve("abccde", 1)

console.log(res1)
console.log(res2)
console.log(res3)