function solve(arr = [], k) {

    let windStart = 0, maxRes = 0, maxRepeatedCount = 0
    let bag = new Map()

    for (let end = 0; end < arr.length; end ++) {
    
        let currentChar = arr[end]
        bag.set(currentChar, (bag.get(currentChar) || 0) + 1)

        maxRepeatedCount = Math.max(maxRepeatedCount, bag.get(currentChar))

        if ((end - windStart + 1 - maxRepeatedCount) > k) {
            let leftChar = arr[windStart]
            bag.set(leftChar, bag.get(leftChar) - 1)
            windStart += 1
        }

        maxRes = Math.max(maxRes, end - windStart + 1)

    }

    return maxRes

}



const res1 = solve("aabccbb", 2)

const res2 = solve("abbcb", 1)

const res3 = solve("abccde", 1)

console.log(res1);
console.log(res2);
console.log(res3);