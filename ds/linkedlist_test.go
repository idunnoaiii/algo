package ds

import (
	"github.com/idunnoaiii/algo/utils"
	"testing"
)

func Test(t *testing.T) {

	cur := &DoubleLinkedList{0, nil, nil}

	data := []int{0, 1, 2, 3, 4, 5, 6, 7}

	t.Run("Is empty", func(t *testing.T) {
		utils.AssertEqual(t, true, cur.IsEmpty())
	})

	t.Run("Test AddFirst", func(t *testing.T) {
		cur.AddFirst(data[0])
		utils.AssertEqual(t, data[0], cur.Head.Data)
	})

	t.Run("Test AddLast", func(t *testing.T) {
		cur.AddLast(data[len(data) - 1])
		utils.AssertEqual(t, data[len(data) - 1], cur.Tail.Data)
	})
}
