package ds

import (
	"errors"
)

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

func (dat *DoubleLinkedList) IsEmpty() bool {
	return dat.Size == 0
}

func (dat *DoubleLinkedList) AddFirst(data int) {
	newNode := &Node{data, nil, nil}
	if dat.IsEmpty() {
		dat.Head, dat.Tail = newNode, newNode
	} else {

		dat.Head.Prev = newNode
		newNode.Next = dat.Head
		dat.Head = newNode
	}
	dat.Size += 1
}

func (dat *DoubleLinkedList) AddLast(data int) {
	newNode := &Node{data, nil, nil}
	if dat.IsEmpty() {
		dat.Head, dat.Tail = newNode, newNode
	} else {
		dat.Tail.Next = newNode
		newNode.Prev = dat.Tail
		dat.Tail = newNode
	}
	dat.Size += 1
}

func (dat *DoubleLinkedList) PeekFist() int {
	return dat.Head.Data
}

func (dat *DoubleLinkedList) PeekLast() int {
	return dat.Tail.Data
}

func (dat *DoubleLinkedList) Add(data int) {
	dat.AddLast(data)
}

func (dat *DoubleLinkedList) AddAt(index int, data int) error {
	if index < 0 || index > dat.Size {
		return errors.New("invalid index")
	}

	if index == 0 {
		dat.AddFirst(data)
		return nil
	}

	if index == dat.Size {
		dat.AddLast(data)
		return nil
	}

	trav := dat.Head
	for i := 0; i < index-1; i++ {
		trav = trav.Next
	}

	new := &Node{data, trav, trav.Next}
	trav.Next.Prev = new
	trav.Next = new

	dat.Size++
	return nil
}

func (dat *DoubleLinkedList) DeleteFirst() error {
	if dat.IsEmpty() {
		return errors.New("list is empty")
	}

	if dat.Size == 1 {
		dat.Head, dat.Tail = nil, nil
	} else {
		dat.Head = dat.Head.Next
		dat.Head.Prev = nil
	}

	dat.Size--
	return nil
}

func (dat *DoubleLinkedList) DeleteLast() error {
	if dat.IsEmpty() {
		return errors.New("list is empty")
	}

	if dat.Size == 1 {
		dat.Head, dat.Tail = nil, nil
	} else {
		dat.Tail = dat.Tail.Prev
		dat.Tail.Next = nil
	}

	dat.Size--
	return nil
}

func (dat *DoubleLinkedList) DeleteAt(index int, data int) error {
	if index < 0 || index > dat.Size {
		return errors.New("invalid index")
	}

	if index == 0 {
		dat.DeleteFirst()
		return nil
	}

	if index == dat.Size {
		dat.DeleteLast()
		return nil
	}

	trav := dat.Head
	for i := 0; i < index-1; i++ {
		trav = trav.Next
	}

	deleted := trav.Next
	trav.Next = deleted.Next
	deleted.Next.Prev = trav

	deleted.Next, deleted.Prev = nil, nil

	dat.Size--
	return nil
}
