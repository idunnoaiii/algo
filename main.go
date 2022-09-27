package main

import (
	"fmt"
	"github.com/segmentio/fasthash/fnv1a"
)

func main() {
	fmt.Println(fnv1a.HashString64("thien"))
}
