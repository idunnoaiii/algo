
function solve(arr = [], target) {

    arr = arr.sort((a, b) => a - b)

    let result = Number.MAX_VALUE
    
    for (let i = 0; i < arr.length - 2; i++) {

        let subTargetSum = target - arr[i]

        let closetTwoSumResul = closetTwoSum(arr.slice(i + 1), subTargetSum)  

        result = Math.min(result, Math.abs(subTargetSum - closetTwoSumResul))

    }

    return target - result

}


function closetTwoSum(arr = [], target) {

    let start = 0
    let end = arr.length - 1
    let result = Number.MAX_VALUE

    while (start < end) {
        let tempSum = arr[start] + arr[end]
        
        if (target == tempSum) 
            return target
        
        result = Math.min(result, Math.abs(tempSum - target))

        if (tempSum < target) 
            start += 1
        else 
            end -= 1
    }

    return target - result
}

//console.log(solve([-2, 0, 1, 2], 2))
//console.log(solve([-3, -1, 1, 2], 1))
//console.log(solve([1, 0, 1, 1], 100))
console.log(solve([-1,2,1,-4], 1))