class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}


class Stack {
    constructor() {
        this.head = null
    }

    push(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    pop() {
        if (this.head === null)
            return null

        const nodeToPopped = this.head
        this.head = nodeToPopped.next

        return nodeToPopped.value
    }
}