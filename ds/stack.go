package ds

import "errors"

type Stack struct {
	innerList *DoubleLinkedList
}

func (dat *Stack) Push(data int) {
	dat.innerList.AddLast(data)
}

func (dat *Stack) Pop() (int, error){
	if dat.innerList.IsEmpty(){
		return 0, errors.New("Stack is Empty")
	}
	res := dat.innerList.Tail.Data
	dat.innerList.DeleteLast()
	return res, nil
}

func (dat *Stack) Size() int {
	return dat.innerList.Size
}