class Node {
    value = NaN
    next = null

    constructor (value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    head = null
    tail = null

    constructor() {
        this.head = this.tail = new Node()
    }
}

let list = new LinkedList()

console.log(list)
console.log(list.head === list.tail)

export default Node;