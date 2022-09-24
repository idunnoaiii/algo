package utils

import (
	"testing"
	"reflect"
)

func Equal(t *testing.T, expected interface{}, got interface{}) {
	if !reflect.DeepEqual(expected, got) {
		t.Errorf("expected %v but got %v", expected, got)
	}
}

