const validateSubSequence = function (arr = [], sequence = []) {
    let matchCount = 0
    let mainArrPos = 0
    
    for (let idx = 0; idx < sequence.length; idx++) {
        let current = sequence[idx]
        while (mainArrPos < arr.length) {
            if (arr[mainArrPos] === current) 
                matchCount ++
            
            mainArrPos++
        }
    }

    return matchCount === sequence.length
}

const validateSubSequence2 = function(arr = [], sequence = []) {
    let idxSeq = 0
    let idxArr = 0

    while (idxSeq < sequence.length && idxArr < arr.length) {
        if (sequence[idxSeq] === arr[idx]) {
            idxSeq += 1
        }
        idxArr += 1
    }

    return idxSeq === sequence.length
}