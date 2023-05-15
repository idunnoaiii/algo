function solve(str = "", pattern = "") {
    let winStart = 0
    let bag = new Map()
    let matchCount = 0

    let minRes = Number.MAX_VALUE

    let res = []

    for (let index = 0; index < pattern.length; index ++) {
        let curChar = pattern[index]
        bag.set(curChar, (bag.get(curChar) || 0) + 1)
    }

    for (let windEnd = 0; windEnd < str.length; windEnd ++ ) {
        let rightChar = str[windEnd]

        if (bag.has(rightChar)) {
            bag.set(rightChar, bag.get(rightChar) - 1)
            
            if (bag.get(rightChar) === 0) {
                matchCount += 1
            }
        }

        while (matchCount == bag.size) {

            if (minRes > windEnd - winStart + 1) {
                res = []
                res.push(winStart)
                res.push(windEnd)
            }

            minRes = Math.min(minRes, windEnd - winStart + 1)
            let leftChar = str[winStart]

            if (bag.has(leftChar)) {

                if (bag.get(leftChar) === 0) matchCount -= 1
                bag.set(leftChar, bag.get(leftChar) + 1)
            }

            winStart += 1
        }
    }

    if (res.length == 2)
        return str.slice(res[0], res[1] + 1)

    return []
}

const res1 = solve("aabdec", "abc")
const res2 = solve("abdabca", "abc")
const res3 = solve("adcad", "abc")

console.log(res1);
console.log(res2);
console.log(res3);