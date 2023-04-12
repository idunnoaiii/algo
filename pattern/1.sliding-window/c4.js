function solve(str = "", words = []) {

    if (words.length === 0 || words[0].length === 0)
        return []

    let bag = new Map()

    for (let word of words) {
        bag.set(word, (bag.get(word) || 0) + 1)
    }

    let wordLen = words[0].length
    let wordCount = words.length
    let windStart = 0
    let matchCount = 0
    let indices = new Array()

    for (let windEnd = 0; windEnd < str.length; windEnd += wordLen) {

        let curWord = str.substring(windEnd, windEnd + wordLen)

        if (bag.has(curWord)) {
            bag.set(curWord, bag.get(curWord) - 1)
            if (bag.get(curWord) === 0) matchCount += 1
        }

        if (matchCount === bag.size) {
            indices.push(windStart)
        }

        if (((windEnd - windStart)/wordLen + 1) >= wordCount) {

            let leftChar = str.substring(windStart, windStart + wordLen)

            if (bag.has(leftChar)) {
                if (bag.get(leftChar) === 0) matchCount -= 1
                bag.set(leftChar, bag.get(leftChar) + 1)
            }

            windStart += wordLen

        }

    }

    return indices

}

const res1 = solve("catfoxcat", ["cat", "fox"])
const res2 = solve("catcatfoxfox", ["cat", "fox"])

console.log(res1);
console.log(res2);