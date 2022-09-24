package ds

type Node struct {
	Data int
	Next *Node
	Prev *Node
}

type DoubleLinkedList struct {
	Size int
	Head *Node
	Tail *Node
}

func (dll *DoubleLinkedList) Clear() {
	trav := dll.Head
	for trav != nil {
		next := trav.Next;
		trav.Prev, trav.Next = nil, nil
		trav.Data = 0
		trav = next
	}
	dll.Head, dll.Tail = nil, nil
	dll.Size = 0
}

func (dll *DoubleLinkedList) IsEmpty() bool {
	return dll.Size == 0
}

func (dll *DoubleLinkedList) AddFirst(data int) {

}
