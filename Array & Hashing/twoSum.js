// 1. Two Sum
// Easy
// Category: Array & Hashing
// DSA Type: Hash Map
// Best Approach: One-Pass Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
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

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 2 <= nums.length <= 10^4        (Medium size - O(n) or O(n log n) needed)
// -10^9 <= nums[i] <= 10^9        (Large numbers - use hash map, not array indexing)
// -10^9 <= target <= 10^9         (Target can be negative too)
// Only one valid answer exists.   (No need to handle multiple solutions)
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE:
//   Idea: Check every pair of numbers with nested loops
//   Time: O(n^2) - Too slow for n=10^4 (100 million operations)
//   Space: O(1) - No extra space
//
// OPTIMIZED (Hash Map - Two Pass):
//   Idea: Store all numbers in hash map first, then check complements
//   Time: O(n) - Two passes through array
//   Space: O(n) - Hash map stores all numbers
//
// BEST (Hash Map - One Pass):
//   Idea: Check complement before storing current number. Single pass!
//   Time: O(n) - One pass through array
//   Space: O(n) - Hash map stores seen numbers
//   Why Best: Same complexity but fewer operations, cleaner code

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// We use a hash map to store each number and its index as we iterate.
// For each number, we check if its complement (target - current) already exists in the map.
//
// Step-by-step:
//   a. Create an empty hash map to store { value: index }.
//   b. Iterate through the array with index i.
//   c. Calculate complement = target - nums[i].
//   d. If complement exists in the hash map, we found the pair.
//      - Return [map.get(complement), i].
//   e. If not, store nums[i] in the map with its index i.
//   f. Continue until a pair is found.
//
// Why check BEFORE storing?
//   If we stored first, we'd find ourselves when checking!
//   Example: target=6, nums=[3,3]
//   At i=0: store 3 → map={3:0}
//   At i=1: complement=3, map.has(3) → TRUE, map.get(3)=0 → return [0,1] ✓

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

        // Store current number and its index for future checks
        map.set(nums[i], i);
    }

    // Problem guarantees one solution, so this line is never reached
    return [];
}

// ============================================================
// TESTING THE SOLUTION
// ============================================================

// Example 1
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log("Example 1:");
console.log("Input: nums = [2,7,11,15], target = 9");
console.log("Output:", twoSum(nums1, target1)); // [0, 1]

// Example 2
let nums2 = [3, 2, 4];
let target2 = 6;
console.log("\nExample 2:");
console.log("Input: nums = [3,2,4], target = 6");
console.log("Output:", twoSum(nums2, target2)); // [1, 2]

// Example 3
let nums3 = [3, 3];
let target3 = 6;
console.log("\nExample 3:");
console.log("Input: nums = [3,3], target = 6");
console.log("Output:", twoSum(nums3, target3)); // [0, 1]

// Edge case: negative numbers
let nums4 = [-1, -2, -3, -4, -5];
let target4 = -8;
console.log("\nEdge case (negative numbers):");
console.log("Input: nums = [-1,-2,-3,-4,-5], target = -8");
console.log("Output:", twoSum(nums4, target4)); // [2, 4]

// Edge case: large array with answer at the end
let nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target5 = 19;
console.log("\nEdge case (answer at end):");
console.log("Input: nums = [1,2,3,4,5,6,7,8,9,10], target = 19");
console.log("Output:", twoSum(nums5, target5)); // [8, 9]

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] Example 1 passes: [0, 1]
// [x] Example 2 passes: [1, 2]
// [x] Example 3 passes: [0, 1]
// [x] Edge case: negative numbers
// [x] Edge case: answer at end of array
// [x] Edge case: duplicate numbers
// [x] Time complexity: O(n) ✓
// [x] Space complexity: O(n) ✓
// [x] Flow visualization: See TwoSum_Number_Flow.md
