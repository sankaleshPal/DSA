/**
 * 49. Group Anagrams
 * Medium
 * 
 * Category: Array & Hashing
 * DSA Type: Hash Map
 * Best Approach: Hash Map with Sorted Key
 * Time Complexity: O(n * k * log(k)) where n = number of strings, k = max length of string
 * Space Complexity: O(n * k)
 */

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// Anagram: Two strings are anagrams if they contain the same characters with the same frequencies.
// Example: "eat" and "tea" are anagrams (both have: a=1, e=1, t=1)
//
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Example 2:
// Input: strs = [""]
// Output: [[""]]
//
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 1 <= strs.length <= 10^4           (Medium - O(n log n) or O(n) needed)
// 0 <= strs[i].length <= 100         (Short strings - sorting is fast)
// strs[i] consists of lowercase English letters.  (Only a-z, could use count array)
//
// Key insight: Since strings are short (max 100), sorting each string is efficient.

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE:
//   Idea: Compare every pair of strings to check if they're anagrams
//   Time: O(n^2 * k log k) - Compare all pairs, sort each comparison
//   Space: O(1) - No extra space (excluding output)
//   Why Bad: Too slow for n=10^4
//
// OPTIMIZED (Hash Map with Sorted Key):
//   Idea: Sort characters of each string to create a key. Group by key.
//   Time: O(n * k log k) - Sort each of n strings
//   Space: O(n * k) - Hash map stores all strings
//   Why Good: Simple, clean, works well for short strings
//
// ALTERNATIVE (Hash Map with Character Count):
//   Idea: Count characters (a-z) to create key. No sorting needed.
//   Time: O(n * k) - Count characters in each string
//   Space: O(n * k) - Same space usage
//   Why Good: Faster for long strings, but more complex code
//   Trade-off: Slightly faster but less readable

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// We use a hash map where the key is the sorted characters of each string.
// All anagrams will have the same sorted characters, so they map to the same key.
//
// Step-by-step:
//   a. Create an empty hash map.
//   b. For each string in the input array:
//      - Sort the characters alphabetically to create a key.
//        Example: "eat" → ['e','a','t'] → ['a','e','t'] → "aet"
//      - If this key doesn't exist in the map, create a new array.
//      - Add the original string to the array for this key.
//   c. Return all the arrays (groups) from the map.
//
// Why sorting works:
//   Anagrams have the same letters → After sorting: identical!
//   "eat" → "aet"
//   "tea" → "aet"  (same!)
//   "ate" → "aet"  (same!)

// ============================================================
// CODE (JavaScript)
// ============================================================

function groupAnagrams(strs) {
    const map = new Map();
    
    for (const str of strs) {
        // Sort the characters to create a unique key for anagrams
        // "eat" -> "aet", "tea" -> "aet", "ate" -> "aet"
        const sorted = str.split('').sort().join('');
        
        // If this sorted key doesn't exist, create new array
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        
        // Add original string to the group
        map.get(sorted).push(str);
    }
    
    // Return all grouped values
    return Array.from(map.values());
}

// ============================================================
// TESTING THE SOLUTION
// ============================================================

// Example 1
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Example 1:");
console.log("Input:", strs1);
console.log("Output:", groupAnagrams(strs1));
// Expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] (order may vary)

// Example 2
const strs2 = [""];
console.log("\nExample 2:");
console.log("Input:", strs2);
console.log("Output:", groupAnagrams(strs2));
// Expected: [[""]]

// Example 3
const strs3 = ["a"];
console.log("\nExample 3:");
console.log("Input:", strs3);
console.log("Output:", groupAnagrams(strs3));
// Expected: [["a"]]

// Additional test
const strs4 = ["abc", "bca", "cab", "xyz", "zyx", "hello"];
console.log("\nAdditional test:");
console.log("Input:", strs4);
console.log("Output:", groupAnagrams(strs4));
// Expected: [["abc", "bca", "cab"], ["xyz", "zyx"], ["hello"]]

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] Example 1 passes: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// [x] Example 2 passes: [[""]]
// [x] Example 3 passes: [["a"]]
// [x] Additional test: multiple anagram groups
// [x] Edge case: empty string
// [x] Edge case: single character
// [x] Time complexity: O(n * k log k) ✓
// [x] Space complexity: O(n * k) ✓
// [x] Flow visualization: See GroupAnagrams_Flow.md
