/**
 * 49. Group Anagrams
 * 
 * Approach: Use a Hash Map where the key is the sorted characters of each string.
 * All anagrams will have the same sorted characters, so they map to the same key.
 * 
 * Time Complexity: O(n * k * log(k)) where n = number of strings, k = max length of string
 * Space Complexity: O(n * k)
 */

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

// ============== TEST CASES ==============

// Example 1
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Input:", strs1);
console.log("Output:", groupAnagrams(strs1));
// Expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] (order may vary)

// Example 2
const strs2 = [""];
console.log("\nInput:", strs2);
console.log("Output:", groupAnagrams(strs2));
// Expected: [[""]]

// Example 3
const strs3 = ["a"];
console.log("\nInput:", strs3);
console.log("Output:", groupAnagrams(strs3));
// Expected: [["a"]]

// Additional test
const strs4 = ["abc", "bca", "cab", "xyz", "zyx", "hello"];
console.log("\nInput:", strs4);
console.log("Output:", groupAnagrams(strs4));
// Expected: [["abc", "bca", "cab"], ["xyz", "zyx"], ["hello"]]
