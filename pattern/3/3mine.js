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


console.log(calculate(123));