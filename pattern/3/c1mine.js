// Palindrome LinkedList
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
head.next.next.next.next = new Node(3)
head.next.next.next.next.next = new Node(2)
head.next.next.next.next.next.next = new Node(1)

function isPalindromeLinkedList(head) {

    let [middle, lengh] = findMiddle(head) 

    let first = head
    let second = reverse((lengh & 1) == 0  ? middle : middle.next)

    while (second != null) {
        if (first.value != second.value)
            return false
        
        first = first.next
        second = second.next
    }
    return true

}

function findMiddle(head) {
    if (head == null) return [null, 0]

    if (head.next == null) return [head, 1]

    let cur = head
    let faster = head
    let len = 1

    while (faster?.next != null) {
        cur = cur.next
        len ++
        faster = faster.next?.next
    }

    len = len + len - (faster == null ? 2 : 1) 

    return [cur, len]
}

function reverse(head) {
    if (head == null) 
        return null

    let cur = head

    if (head.next == null) 
        return head

    let prev = null

    while (cur != null) {
        let next = cur.next

        if (prev != null) {
            cur.next = prev
        }

        prev = cur
        cur = next
    }

    head.next = null

    return prev
}

function print(head) {
    let cur = head
    while (cur != null) {
        console.log(cur.value)
        if (cur.next != null) {
            console.log(" -> ");
        }
        cur = cur.next
    }
}

console.log(isPalindromeLinkedList(head))