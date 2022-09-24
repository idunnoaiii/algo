package main

import (
	"fmt"
	"github.com/idunnoaiii/algo/ds"
)

func main() {
	ls := &ds.DoubleLinkedList{Size: 0, Head: nil, Tail: nil}

	ls.AddFirst(1)

	Print(ls)

}

func Print(ls *ds.DoubleLinkedList) {
	for trav := ls.Head; trav != nil; trav = trav.Next {
		fmt.Println(trav.Data)
	}
}
