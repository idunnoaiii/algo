const sortedSquareArray = function (input = []) {
    let left = 0;
    let right = input.length;

    let output = []

    while (left <= right) {
        let curLeft = input[left]
        let curRigth = input[right]

        if (Math.abs(curLeft) < Math.abs(curRigth)) {
            output.push(curLeft ** 2)
            left += 1
        } else {
            output.push(curRigth ** 2)
            right -= 1
        }
    }

    return output
} // time: O(n) | space: O(n)