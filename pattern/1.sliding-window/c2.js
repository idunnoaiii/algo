function solve(str = "", pattern = "") {
    let windStart = 0
    let bag = new Map()
    let matchCount = 0

    let res = []
    
    for (let index = 0; index < pattern.length; index ++ ) {
        let curChar = pattern[index]
        bag.set(curChar, (bag.get(curChar) || 0) + 1)
    }

    for (let windEnd = 0; windEnd < str.length; windEnd ++ ) {
        let curChar = str[windEnd]

        if (bag.has(curChar)) {
            bag.set(curChar, bag.get(curChar) - 1)
            
            if (bag.get(curChar) === 0) matchCount += 1
        }

        if (matchCount === bag.size)
            res.push(windStart)

        if (windEnd - windStart + 1 >= pattern.length) {
            let leftChar = str[windStart]
            
            if (bag.has(leftChar)) {
                if (bag.get(leftChar) === 0) matchCount -= 1
                bag.set(leftChar, bag.get(leftChar) + 1)
            }

            windStart += 1
        }
    }

    return res
}

const res1 = solve("ppqp", "pq")
const res2 = solve("abbcabc", "abc")

console.log(res1);
console.log(res2);