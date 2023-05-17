function dutchFlagSort(arr) {
  //all elements < low are 0, and all elements > high are 2
  //all elements >= low < i are 1
  let low = 0
  let high = arr.length - 1
  let i = 0
  
  while(i <= high) {
    if(arr[i] === 0) {
      //swap
      //[arr[i], arr[low]] = [arr[low], arr[i]]
      let temp = arr[i]
      arr[i] = arr[low]
      arr[low] = temp
      //increment i and low
      i++
      low++
    } else if(arr[i] === 1){
      i++
    } else{
      //the case for arr[i] === 2
      //swap
      // [arr[i], arr[high]] = [arr[high], arr[i]]
      temp = arr[i]
      arr[i] = arr[high]
      arr[high] = temp
      //decrement high only, after the swap the number
      //at index i could be 0, 1, or 2
      high--
    }
  }
  return arr
}

console.log(dutchFlagSort([1, 0, 2, 1, 0]))//[0 0 1 1 2]
console.log(dutchFlagSort([2, 2, 0, 1, 2, 0]))//[0 0 1 2 2 2 ]