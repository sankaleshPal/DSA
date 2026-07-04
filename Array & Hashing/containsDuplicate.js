// 217. Contains Duplicate
// Easy
// Category: Array & Hashing
// DSA Type: Hash Set
// Best Approach: One-Pass Hash Set
// Time Complexity: O(n)
// Space Complexity: O(n)

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 1 <= nums.length <= 10^5        (Large - O(n) required)
// -10^9 <= nums[i] <= 10^9         (Large numbers - use hash set, not array indexing)
// Return boolean - true if duplicate exists, false otherwise

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE:
//   Idea: Check every pair with nested loops
//   Time: O(n^2) - Too slow for n=10^5 (10 billion operations)
//   Space: O(1) - No extra space
//   Why Bad: Way too slow for the constraints
//
// OPTIMIZED (Sort First):
//   Idea: Sort array, then check adjacent elements
//   Time: O(n log n) - Sorting dominates
//   Space: O(1) or O(n) depending on sort implementation
//   Why Good: No extra space if in-place sort, but modifies input
//
// BEST (Hash Set - One Pass):
//   Idea: Use a Set to track seen numbers. If seen before, return true.
//   Time: O(n) - Single pass through array
//   Space: O(n) - Set stores up to n numbers
//   Why Best: Fastest time, clean code, doesn't modify input

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// We use a hash set to store each number we encounter as we iterate.
// For each number, we check if it already exists in the set.
//
// Step-by-step:
//   a. Create an empty hash set to store seen numbers.
//   b. Iterate through the array.
//   c. For each number, check if it exists in the set.
//   d. If yes → we found a duplicate! Return true immediately.
//   e. If no → add the number to the set.
//   f. If loop completes without finding duplicates → return false.
//
// Why Set instead of Map?
//   We only need to check existence, not store any associated value.
//   Set is perfect for this - O(1) add and O(1) has operations.

// ============================================================
// CODE (JavaScript)
// ============================================================

function containsDuplicate(nums) {
    const seen = new Set(); // hash set to track seen numbers

    for (const num of nums) {
        // Check if we've seen this number before
        if (seen.has(num)) {
            return true; // Duplicate found!
        }

        // Add current number to the set
        seen.add(num);
    }

    // No duplicates found after checking all numbers
    return false;
}

// ============================================================
// TESTING THE SOLUTION
// ============================================================

// Example 1
let nums1 = [1, 2, 3, 1];
console.log("Example 1:");
console.log("Input: nums = [1,2,3,1]");
console.log("Output:", containsDuplicate(nums1)); // true

// Example 2
let nums2 = [1, 2, 3, 4];
console.log("\nExample 2:");
console.log("Input: nums = [1,2,3,4]");
console.log("Output:", containsDuplicate(nums2)); // false

// Example 3
let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("\nExample 3:");
console.log("Input: nums = [1,1,1,3,3,4,3,2,4,2]");
console.log("Output:", containsDuplicate(nums3)); // true

// Edge case: single element
let nums4 = [5];
console.log("\nEdge case (single element):");
console.log("Input: nums = [5]");
console.log("Output:", containsDuplicate(nums4)); // false

// Edge case: all same elements
let nums5 = [7, 7, 7, 7, 7];
console.log("\nEdge case (all same):");
console.log("Input: nums = [7,7,7,7,7]");
console.log("Output:", containsDuplicate(nums5)); // true

// Edge case: negative numbers
let nums6 = [-1, -2, -3, -1];
console.log("\nEdge case (negative numbers):");
console.log("Input: nums = [-1,-2,-3,-1]");
console.log("Output:", containsDuplicate(nums6)); // true

// Edge case: large numbers
let nums7 = [1000000000, 999999999, 1000000000];
console.log("\nEdge case (large numbers):");
console.log("Input: nums = [1000000000,999999999,1000000000]");
console.log("Output:", containsDuplicate(nums7)); // true

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] Example 1 passes: true
// [x] Example 2 passes: false
// [x] Example 3 passes: true
// [x] Edge case: single element → false
// [x] Edge case: all same elements → true
// [x] Edge case: negative numbers
// [x] Edge case: large numbers
// [x] Time complexity: O(n) ✓
// [x] Space complexity: O(n) ✓
