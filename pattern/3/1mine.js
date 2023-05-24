// LinkedList Cycle
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

console.log(hasCyclic(head));
console.log("naive", hasCyclicNaiveVersion(head));

head.next.next.next.next.next.next = head.next.next
console.log(hasCyclic(head));
console.log("naive", hasCyclicNaiveVersion(head));

head.next.next.next.next.next.next = head.next.next.next
console.log(hasCyclic(head));
console.log("naive", hasCyclicNaiveVersion(head));

let head2 = new Node(1)
head2.next = new Node(2)
head2.next.next = new Node(3)
head2.next.next.next = head2

console.log(hasCyclic(head2));
console.log("naive", hasCyclicNaiveVersion(head));

function hasCyclic(head) {
    let slow = head 
    let fast = head
    
    slow = slow.next
    fast = fast.next.next

    while(slow != null) {
        if (slow == fast) {
            return true
        }
        slow = slow?.next
        fast = fast?.next?.next
    }

    return false
}

function hasCyclicNaiveVersion(head) {
    let mem = new Map()
    
    let point = head

    while (point != null) {
        if (mem.get(point)) {
            return true
        } else {
            mem.set(point, true)
        }
        point = point.next
    }

    return false
}
