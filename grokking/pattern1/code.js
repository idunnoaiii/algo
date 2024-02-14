/** ===========================================================================================================================================
 * //https://leetcode.com/problems/permutation-in-string/
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 */

/**
 * @param {string[]} arr
 * @param {string} pattern
 * @returns {boolean}
 */
const findPermutation = function (arr, pattern) {
  if (arr.length === 0 || pattern.length === 0) return true;

  let frequenceChar = new Map();
  let isMatch = 0;
  let wStart = 0;

  for (let char of pattern) {
    frequenceChar.set(char, (frequenceChar.get(char) || 0) + 1);
  }

  for (let wEnd = 0; wEnd < arr.length; wEnd++) {
    let curChar = arr[wEnd];

    if (frequenceChar.has(curChar)) {
      frequenceChar.set(curChar, frequenceChar.get(curChar) - 1);
      if (frequenceChar.get(curChar) === 0) {
        isMatch += 1;
      }
    }

    if (isMatch === frequenceChar.size) return true;

    if (wEnd - wStart + 1 >= pattern.length) {
      let curStartChar = arr[wStart];
      if (frequenceChar.has(curStartChar)) {
        if (frequenceChar.get(curStartChar) === 0) {
          isMatch -= 1;
        }
        frequenceChar.set(curStartChar, frequenceChar.get(curStartChar) + 1);
      }
      wStart += 1;
    }
  }

  return false;
};

console.log(findPermutation("oidbcaf", "abc")); //true, The string contains "bca" which is a permutation of the given pattern.
console.log(findPermutation("odicf", "dc")); //false
console.log(findPermutation("bcdxabcdy", "bcdxabcdy")); //true
console.log(findPermutation("aaacb", "abc")); //true, The string contains "acb" which is a permutation of the given pattern.


/** ==================================================================================================================================================
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 */

