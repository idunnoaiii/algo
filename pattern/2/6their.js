function solve(arr = [], target) {
    arr = arr.sort((a, b) => a - b)

    if (arr[0] > target) 
        return []

    let res = []

    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]

        if (cur >= target) 
            return res;

        let start = i + 1;
        let end = arr.length - 1
        
        let subRes = []

        while (start < end) {
            let curSubSum = arr[start] + arr[end]

            if (curSubSum < (target - cur)) {
                for (let j = end - 1; j > start; j--) 
                    subRes.push([cur, arr[start], arr[j]])
                subRes.push([cur, arr[start], arr[end]])
                start += 1

            } else {
                end -= 1
            }

        }
        if (subRes.length > 0)
            res.push(...subRes)
    }

    return res
}



console.log(solve([-1, 0, 2, 3], 3));
console.log(solve([-1, 4, 2, 1, 3], 5));