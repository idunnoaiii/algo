class Node {

    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    print() {
        let cur = this
        let res = ""
        while (cur != null) {
            res = res.concat(cur.value, " -> ")
            cur = cur.next
        }
        return res.substring(0, res.length - 3)
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(3)
head.next.next.next.next.next = new Node(2)
head.next.next.next.next.next.next = new Node(1)

const isPalindromicLinkedList = function (head) {
    if (head == null || head.next == null)
        return true

    // find middle
    let slow = head,
        fast = head

    while (fast != null && fast?.next !== null) {
        slow = slow.next
        fast = fast?.next?.next
    }

    // reverse
    let secondHead = reverse(slow)
    let secondHeadRef = secondHead

    while (head != null && secondHead != null) {
        if (head.value !== secondHead.value) {
            break
        }

        head = head.next
        secondHead = secondHead.next
    }

    reverse(secondHeadRef)

    return head == null && secondHead == null
}

const reverse = function (head) {
    let cur = head
    let prev = null

    while (cur != null) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}

console.log(isPalindromicLinkedList(head))