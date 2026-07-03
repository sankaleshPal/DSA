// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// ============================================================
// BEST APPROACH: Hash Map (One-Pass)
// ============================================================
// We use a hash map to store each number and its index as we iterate.
// For each number, we check if its complement (target - current) already exists in the map.
// This gives us O(n) time and O(n) space.

// ============================================================
// HOW IT WORKS
// ============================================================
// Create an empty hash map to store { value: index }.
//
// Step-by-step:
//   a. Iterate through the array with index i.
//   b. Calculate complement = target - nums[i].
//   c. If complement exists in the hash map, we found the pair.
//      - Return [map.get(complement), i].
//   d. If not, store nums[i] in the map with its index i.
//   e. Continue until a pair is found.

// ============================================================
// CODE (JavaScript)
// ============================================================

function twoSum(nums, target) {
    const map = new Map(); // hash map to store { value: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store current number and its index
        map.set(nums[i], i);
    }

    // Problem guarantees one solution, so this line is never reached
    return [];
}

// ============================================================
// TESTING THE SOLUTION - OUTPUT WILL SHOW IN CONSOLE
// ============================================================

// Example 1
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log("Example 1:");
console.log("Output:", twoSum(nums1, target1)); // [0, 1]

// Example 2
let nums2 = [3, 2, 4];
let target2 = 6;
console.log("\nExample 2:");
console.log("Output:", twoSum(nums2, target2)); // [1, 2]

// Example 3
let nums3 = [3, 3];
let target3 = 6;
console.log("\nExample 3:");
console.log("Output:", twoSum(nums3, target3)); // [0, 1]

// Edge case: negative numbers
let nums4 = [-1, -2, -3, -4, -5];
let target4 = -8;
console.log("\nEdge case (negative numbers):");
console.log("Output:", twoSum(nums4, target4)); // [2, 4]

// Edge case: large array with answer at the end
let nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target5 = 19;
console.log("\nEdge case (answer at end):");
console.log("Output:", twoSum(nums5, target5)); // [8, 9]
