function solve(arr = "", pattern = "") {
    let windStart = 0
    let bag = new Map()
    let matchCount = 0

    for (let i = 0; i < pattern.length; i ++ ) {
        let curChar = pattern[i]
        bag.set(curChar, (bag.get(curChar) || 0) + 1)
    }

    for (let windEnd = 0; windEnd < arr.length; windEnd ++) {
        let curChar = arr[windEnd]

        if (bag.has(curChar)) {
            bag.set(curChar, bag.get(curChar) - 1)

            if (bag.get(curChar) === 0) {
                matchCount += 1
            }
        }

        if (matchCount === bag.size)
            return true

        if (windEnd - windStart + 1 >= pattern.length) {
            let leftChar = arr[windStart]

            if (bag.has(leftChar)) {

                if (bag.get(leftChar) === 0) 
                    matchCount -= 1

                bag.set(leftChar, bag.get(leftChar) + 1) 
            }

            windStart += 1
        }
    }

    return matchCount === bag.size
}

let res1 = solve("oidbcaf", "abc")
let res2 = solve("odicf", "dc")
let res3 = solve("bcdxabcdy", "bcdyabcdx")
let res4 = solve("aaacb", "abc")

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)


