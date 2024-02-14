// function solve(arr = [], k) {

//     let windStart = 0, maxRes = 0, maxRepeatedCount = 0
//     let bag = new Map()

//     for (let end = 0; end < arr.length; end ++) {

//         let currentChar = arr[end]
//         bag.set(currentChar, (bag.get(currentChar) || 0) + 1)

//         maxRepeatedCount = Math.max(maxRepeatedCount, bag.get(currentChar))

//         if ((end - windStart + 1 - maxRepeatedCount) > k) {
//             let leftChar = arr[windStart]
//             bag.set(leftChar, bag.get(leftChar) - 1)
//             windStart += 1
//         }

//         maxRes = Math.max(maxRes, end - windStart + 1)

//     }

//     return maxRes

// }

const solve = function (arr = [], k) {
  let windownStart = 0;
  let maxLengt = 0;
  let charFrequency = new Map();

  for (let windownEnd = 0; windownEnd < arr.length; windownEnd++) {
    let currentChar = arr[windownEnd];

    charFrequency.set(currentChar, (charFrequency.get(currentChar) || 0) + 1);

    while (charFrequency.get(currentChar) > k) {
      let cur = arr[windownStart];
      charFrequency.set(cur, charFrequency.get(cur) - 1);
      windownStart++;
    }

    maxLengt = Math.max(maxLengt, windownEnd - windownStart + 1);
  }
};

const res1 = solve("aabccbb", 2);

const res2 = solve("abbcb", 1);

const res3 = solve("abccde", 1);

console.log(res1);
console.log(res2);
console.log(res3);
