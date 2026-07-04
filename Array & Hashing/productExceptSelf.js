// 238. Product of Array Except Self
// Medium
// Category: Array & Hashing
// DSA Type: Array (Prefix & Suffix Products)
// Best Approach: Two-Pass Array (Prefix + Suffix)
// Time Complexity: O(n)
// Space Complexity: O(1) extra (output array doesn't count)

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].
//
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 2 <= nums.length <= 10^5        (Large - O(n) required)
// -30 <= nums[i] <= 30             (Small numbers, but products can be large)
// Answer fits in 32-bit integer
// MUST use O(n) time
// MUST NOT use division
// Follow-up: O(1) extra space (output array doesn't count)

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE:
//   Idea: For each element, multiply all other elements
//   Time: O(n^2) - For each of n elements, multiply n-1 others
//   Space: O(1) extra (just output array)
//   Why Bad: Too slow for n=10^5 (10 billion operations)
//
// DIVISION (NOT ALLOWED):
//   Idea: Calculate total product, divide by each element
//   Time: O(n) - One pass for product, one pass for division
//   Space: O(1)
//   Why Bad: Problem explicitly forbids division!
//   Also fails if any element is 0 (division by zero)
//
// PREFIX & SUFFIX PRODUCTS (BEST):
//   Idea: For each position, product = (product of all left) × (product of all right)
//   Time: O(n) - Two passes: left-to-right, then right-to-left
//   Space: O(1) extra - Use output array for prefix, track suffix on the fly
//   Why Best: Meets all constraints, elegant, no division

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// For answer[i], we need: product of all elements EXCEPT nums[i]
//
// This equals: (nums[0] × nums[1] × ... × nums[i-1]) × (nums[i+1] × ... × nums[n-1])
//              ↑_________________↑                      ↑_________________↑
//              prefix product (left)                   suffix product (right)
//
// Example: nums = [1, 2, 3, 4]
//   answer[0] = (nothing) × (2×3×4) = 24
//   answer[1] = (1) × (3×4) = 12
//   answer[2] = (1×2) × (4) = 8
//   answer[3] = (1×2×3) × (nothing) = 6
//
// Step-by-step:
//   PASS 1 (Left to Right): Build prefix products in answer array
//     answer[i] = product of all elements to the LEFT of i
//   PASS 2 (Right to Left): Multiply by suffix products
//     answer[i] = answer[i] × (product of all elements to the RIGHT of i)

// ============================================================
// CODE (JavaScript)
// ============================================================

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n); // output array (doesn't count as extra space)

    // PASS 1: Left to Right - Build prefix products
    // answer[i] = product of all elements before i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;     // store current prefix product
        prefix *= nums[i];      // update prefix for next position
    }

    // PASS 2: Right to Left - Multiply by suffix products
    // answer[i] = prefix[i] × suffix[i]
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;    // multiply by suffix product
        suffix *= nums[i];    // update suffix for next position (to the left)
    }

    return answer;
}

// ============================================================
// TESTING THE SOLUTION
// ============================================================

// Example 1
let nums1 = [1, 2, 3, 4];
console.log("Example 1:");
console.log("Input: nums = [1,2,3,4]");
console.log("Output:", productExceptSelf(nums1)); // [24, 12, 8, 6]

// Example 2
let nums2 = [-1, 1, 0, -3, 3];
console.log("\nExample 2:");
console.log("Input: nums = [-1,1,0,-3,3]");
console.log("Output:", productExceptSelf(nums2)); // [0, 0, 9, 0, 0]

// Edge case: two elements
let nums3 = [5, 2];
console.log("\nEdge case (two elements):");
console.log("Input: nums = [5,2]");
console.log("Output:", productExceptSelf(nums3)); // [2, 5]

// Edge case: all same elements
let nums4 = [2, 2, 2, 2];
console.log("\nEdge case (all same):");
console.log("Input: nums = [2,2,2,2]");
console.log("Output:", productExceptSelf(nums4)); // [8, 8, 8, 8]

// Edge case: contains negative numbers
let nums5 = [-1, -2, -3, -4];
console.log("\nEdge case (all negative):");
console.log("Input: nums = [-1,-2,-3,-4]");
console.log("Output:", productExceptSelf(nums5)); // [-24, -12, -8, -6]

// Edge case: with 1s
let nums6 = [1, 1, 1, 1];
console.log("\nEdge case (all ones):");
console.log("Input: nums = [1,1,1,1]");
console.log("Output:", productExceptSelf(nums6)); // [1, 1, 1, 1]

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] Example 1 passes: [24, 12, 8, 6]
// [x] Example 2 passes: [0, 0, 9, 0, 0]
// [x] Edge case: two elements
// [x] Edge case: all same elements
// [x] Edge case: all negative numbers
// [x] Edge case: all ones
// [x] Time complexity: O(n) ✓
// [x] Space complexity: O(1) extra (output array doesn't count) ✓
// [x] No division used ✓
// [x] Flow visualization: See ProductExceptSelf_Flow.md
