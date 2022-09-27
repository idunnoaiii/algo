package pattern

func TwoSum(arr []int) (int, int) {
	return 0, 0
}


// O(n) time | O(1) space
func RemoveDuplicate(arr []int) int {
	p1, p2 := 0, 1
	res := 0
	for p2 < len(arr) {
		if (arr[p1] != arr[p2]) {
			res++
			p1 = p2
		}
		p2++
	}
	return res + 1
}
