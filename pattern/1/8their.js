function solve(arr = [], k) {
    let windowStart = 0, maxLength = 0, maxOneCount = 0;

    for (let end = 0; end < arr.length; end++) {
        if (arr[end] == 1) {
            maxOneCount ++
        }

        if ((end - windowStart + 1 - maxOneCount) > k) {
            if (arr[windowStart] == 1) {
                maxOneCount --
            }            

            windowStart ++
        }

        maxLength = Math.max(maxLength, end - windowStart + 1)
    }

    return maxLength
}

console.log(solve([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 2));
