"use strict"

//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 
};


var isAnagrams = function(str1 = "", str2 = "") {
    
    if (str1.length != str2.length)
        return false

    let mem1 = new Map()
    let mem2 = new Map()

    for ( let idx = 0; idx < str1.length; idx ++) {
        mem1.set(str1[idx], (mem1.get(idx) || 0) + 1)
        mem2.set(str2[idx], (mem2.get(idx) || 0) + 1)
    }
    
    for (let [key, value] of mem1.entries()) {
        if (value !== mem2.get(key))
            return false
    }
    
    return true
}
