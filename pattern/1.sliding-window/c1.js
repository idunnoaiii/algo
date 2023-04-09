function solve(arr = "", pattern = "") {

    let windStart = 0
    let bag = new Map()

    // create a bag that count the occurent of characters
    for (let char of pattern) {
        bag.set(char, (bag.get(char) || 0) + 1)
    }

    for (let winEnd = 0; winEnd < arr.length; winEnd++) {

        let curChar = arr[winEnd]

        if (!bag.has(curChar)) {
            while (windStart < winEnd) {
                let leftChar = arr[windStart]

                if (pattern.indexOf(leftChar) > -1) {
                    bag.set(leftChar, (bag.get(leftChar) || 0) + 1)
                }

                windStart += 1
            }
        }

        if (bag.has(curChar)) {
            bag.set(curChar, bag.get(curChar) - 1)
            if (bag.get(curChar) == 0) {
                bag.delete(curChar)
            }
        }

        if (bag.size == 0) return true;

    }

    return bag.size == 0

}

let res1 = solve("oidbcaf", "abc")
let res2 = solve("odicf", "dc")
let res3 = solve("bcdxabcdy", "bcdyabcdx")
let res4 = solve("aaacb", "abc")

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)


