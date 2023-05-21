// quadruple sum to target

function solve(arr = [], target) {
    arr = arr.sort((a,b) => a - b)

    let result = []

    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && arr[i] == arr[i-1])
            continue

        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && arr[j] == arr[j - 1]) 
                continue

            let start = j = 1
            let end = arr.length - 1

            let subTarget =  target - arr[i] - arr[j]

            while (start < end) {
                
                let curSum = arr[start] + arr[end]

                if (curSum == subTarget) {
                    result.push([arr[i], arr[j], arr[start], arr[end]])

                    start += 1
                    end -= 1
                    
                    while (start < end && arr[start] == arr[start - 1]) {
                        start += 1
                    }

                    while (start < end && arr[end] == arr[end - 1]) {
                        start += 1
                    }

                } else if (curSum < subTarget) {
                    start += 1
                } else {
                    end -= 1
                }
            }
        }
    }
}

console.log(solve([4, 1, 2, -1, 1, -3], 1))
console.log(solve([2, 0, -1, 1, -2, 2], 2))