package utils

import (
	"testing"
	"reflect"
)

func AssertEqual(t testing.TB, expected interface{}, got interface{}) {
	t.Helper()
	if !reflect.DeepEqual(expected, got) {
		t.Errorf("expected %v but got %v", expected, got)
	}
}

