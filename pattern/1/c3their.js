function solve(str = "", pattern = "") {
    let windStart = 0
    let bag = new Map()
    let matchCount = 0
    let minRes = str.length + 1
    let minStart

    for (let idx = 0; idx < pattern.length; idx++) {
        let curChar = pattern[idx]
        bag.set(curChar, (bag.get(curChar) || 0) + 1)
    }

    for (let windEnd = 0; windEnd < str.length; windEnd++) {

        let rightChar = str[windEnd]

        if (bag.has(rightChar)) {
            bag.set(rightChar, bag.get(rightChar) - 1)
            if (bag.get(rightChar) === 0)
                matchCount += 1
        }

        while (matchCount === bag.size) {

            if (windEnd - windStart + 1 < minRes) {
                minRes = windEnd - windStart + 1
                minStart = windStart
            }

            let leftChar = str[windStart]

            if (bag.has(leftChar)) {

                if (bag.get(leftChar) === 0)
                    matchCount -= 1

                bag.set(leftChar, bag.get(leftChar) + 1)
            }

            windStart += 1

        }

    }

    if (minRes < str.length + 1)
        return str.substring(minStart, minStart + minRes)

    return []
}

const res1 = solve("aabdec", "abc")
const res2 = solve("abdabca", "abc")
const res3 = solve("adcad", "abc")

console.log(res1);
console.log(res2);
console.log(res3);