// find the start of cylic linked list

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(findStart(head));

head.next.next.next.next.next.next = head.next.next
console.log(findStart(head));

head.next.next.next.next.next.next = head.next.next.next
console.log(findStart(head));

function findStart(head) {
    let slow = head
    let fast = head

    let lenOfCylic = lengthOfCylic(head)

    if (lenOfCylic == 0) 
        return null

    for (let i = 0; i < lenOfCylic; i++) {
        fast = fast?.next
    }

    while (slow != null) {
        if (slow == fast) {
            return slow
        }

        slow = slow?.next
        fast = fast?.next
    }

    return null
}


function lengthOfCylic(head) {
    let slow = head
    let fast = head

    slow = head?.next
    fast = head?.next?.next

    if (slow == null || fast == null)
        return 0

    let count = 0

    while (slow != null) {
        if (slow == fast && count == 0) {
            count += 1
            slow = slow?.next
            fast = fast?.next?.next
            continue
        }

        if (slow == fast && count != 0) {
            return count
        }

        if (count != 0)
            count += 1

        slow = slow?.next
        fast = fast?.next?.next
    }

    return 0
}