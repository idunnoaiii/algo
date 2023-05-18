// quadruple sum to target

function solve(arr = [], target) {
    arr = arr.sort((a, b) => a - b)

    let res = []
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        let subRes = triplet_sum(arr.slice(i + 1), target - cur)
        for (let item of subRes)
            res.push([cur, ...item])
    }

    return res
}

function triplet_sum(arr = [], target) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        let curTarget = target - cur

        let start = i + 1
        let end = arr.length - 1
        let subRes = []

        while (start < end) {
            let tempSum = arr[start] + arr[end]
            if (tempSum == curTarget) {
                subRes.push([arr[start], arr[end]])
                start += 1
                end -= 1
            } else if (tempSum < curTarget) {
                start += 1
            } else {
                end -= 1
            }
        }
        for (let item of subRes)
            res.push([cur, ...item])
    }

    return res
}


console.log(solve([4, 1, 2, -1, 1, -3], 1))
console.log(solve([2, 0, -1, 1, -2, 2], 2))