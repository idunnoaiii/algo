// Happy Number


function isHappyNumber(num = 0) {
    let slow = calculate(num)
    let fast = calculate(calculate(num))

    while (slow != 1) {
        slow = calculate(slow)
        fast = calculate(calculate(fast))

        if (slow == fast) 
            return false
    }

    return true
}

function isHappyNumber2(num = 0) {
    let slow = num
    let fast = num 

    while (true) {
        slow = calculate(slow)
        fast = calculate(calculate(fast))

        if (slow == fast)
            break
    }

    return slow == 1
}

function calculate(num = 0) {
    let numDigit = []

    while (num > 0) {
        numDigit.push(num % 10)
        num = Number.parseInt(num / 10)
    }

    return numDigit.reduce((acc, val) => {
        return acc += val ** 2, acc
    }, 0)
}

function betterCalculate(num = 0) {
    let result =  0
    while(num > 0) {
        let digit = num % 10
        result += digit * digit
        num = Math.floor(num / 10)
    }
    return result
}


console.log(calculate(123));