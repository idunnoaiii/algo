class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    printList() {
        let result = ""
        let temp = this
        while (temp != null) {
            result += " " + temp.value
            temp = temp.next
        }
        console.log(result)
    }
}

const reorder = function (head) {
    if (head == null || head.next === null)
        return head

    let slow = head
    let fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next?.next
    }

    let secondHead = reverse(slow)
    let cur = head

    while (secondHead != null && cur.next !== secondHead) {
        let next1 = cur.next
        let next2 = secondHead.next

        cur.next = secondHead
        secondHead.next = next1

        cur = next1
        secondHead = next2
    }

    return head
}


const reverse = function (head) {
    let prev = null
    while (head != null) {
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

let head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
//head.next.next.next.next.next = new Node(12)

head.printList()

reorder(head)

head.printList()