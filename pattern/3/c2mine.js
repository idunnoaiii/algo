class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
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

    

}