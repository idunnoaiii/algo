function backspaceCompare(str1 = "", str2 = "") {
    let p1 = str1.length - 1
    let p2 = str2.length - 1

    while (p1 >= 0 || p2 >= 0) {
        let i = nextValidIndex(str1, p1)
        let j = nextValidIndex(str2, p2)

        if (i < 0 && j < 0)
            return true

        if (i < 0 || j < 0)
            return false

        if (str1[i] != str2[j])
            return false

        p1 = i - 1
        p2 = j - 1
    }
    return true
}

function nextValidIndex(str = "", curIdx = 0) {

    let spaceCounter = 0

    while(curIdx >= 0) {
        let curChar = str[curIdx]

        if (curChar == "#") {
            spaceCounter += 1
        } else if (spaceCounter > 0) {
            spaceCounter -= 1
        } else {
            break
        }

        curIdx -= 1
    }

    return curIdx
}


console.log(backspaceCompare("xy#z", "xzz#"))
console.log(backspaceCompare("xp#", "xyz##"))
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))
console.log(backspaceCompare("xy#z", "xyz#"))	