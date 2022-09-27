package pattern

import (
	"testing"
)

func TestRemoveDuplicate(t *testing.T) {
	t.Run("[2, 3, 3, 3, 6, 9, 9]", func(t *testing.T) {
		got := RemoveDuplicate([]int{2, 3, 3, 3, 6, 9, 9})
		expect := 4
		if got != expect {
			t.Errorf("expect %d got %d", expect, got)
		}
	})
}