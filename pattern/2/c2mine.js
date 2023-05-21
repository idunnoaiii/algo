// Comparing Strings containing Backspaces

function backspaceCompare(str1 = "", str2 = "") {

    return removeBackspace(str1) === removeBackspace(str2)

}

function removeBackspace(str = "") {

    let result = []
    let mem = 0

    for (let end = str.length - 1; end >= 0; end --) {

        let curChar = str[end]

        if (curChar === "#") {
            mem += 1
            continue
        }

        if (curChar !== "#" && mem === 0) {
            result.unshift(curChar)
            continue
        }

        if (curChar !== "#" && mem !== 0) {
            mem -= 1
            continue
        }

    }

    return result.join("")
}

console.log(backspaceCompare("xy#z", "xzz#"))
console.log(backspaceCompare("xp#", "xyz##"))
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))
console.log(backspaceCompare("xy#z", "xyz#"))	