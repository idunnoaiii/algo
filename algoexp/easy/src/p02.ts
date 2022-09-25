export const solve = (arr1: number[], arr2: number[]): boolean => {

    if (arr1.length === 0 || arr2.length === 0)
        return false

    let end: number = 0
    let mask: boolean[] = new Array(arr2.length)
    mask.fill(false)

    for (let i = 0; i < arr2.length; i++) {
        let cur: number = arr2[i]

        while (end < arr1.length) {
            if (arr1[end] == cur) {
                mask[i] = true
                end++
                break
            }
            end++
        }

        if (end == arr1.length) {
            return mask.every(x => x === true)
        }
    }

    return false
}

// time: O(n)
// space: O(n)

export const theirSolutionV1 = (arr: number[], seq: number[]): boolean => {
    let arrIdx: number = 0
    let seqIdx: number = 0

    while (arrIdx < arr.length && seqIdx < seq.length) {
        if (arr[arrIdx] == seq[seqIdx]) {
            seqIdx++
        }
        arrIdx++
    }

    return seqIdx == seq.length
}

// time: O(n)
// space: O(1)

