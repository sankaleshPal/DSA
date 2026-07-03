// 26. Remove Duplicates from Sorted Array
// Easy
// Category: Array & Hashing
// DSA Type: Two Pointers
// Best Approach: Two Pointers (Slow & Fast / Read & Write)
// Time Complexity: O(n)
// Space Complexity: O(1)

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//
// Consider the number of unique elements in nums to be k. After removing duplicates, return the number of unique elements k.
//
// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
//
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
//
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 1 <= nums.length <= 3 * 10^4       (Medium - O(n) or O(n log n) needed)
// -100 <= nums[i] <= 100             (Small range - could use counting)
// nums is sorted in non-decreasing order  (KEY INSIGHT!)
//
// Key insight: Array is SORTED, so duplicates are ADJACENT!

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE:
//   Idea: Use a new array, only add elements if different from last added
//   Time: O(n) - Single pass
//   Space: O(n) - New array for result
//   Why Bad: Problem requires in-place modification, O(1) extra space
//
// HASH SET:
//   Idea: Add all elements to a Set (auto removes duplicates), then copy back
//   Time: O(n) - Add to set, then copy back
//   Space: O(n) - Set stores all unique elements
//   Why Bad: Uses O(n) extra space, violates in-place requirement
//
// BEST (Two Pointers):
//   Idea: One pointer for reading, one for writing. Skip duplicates.
//   Time: O(n) - Single pass through array
//   Space: O(1) - Only two pointers, no extra data structures
//   Why Best: Meets all requirements: in-place, O(1) space, efficient

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// Since the array is already SORTED, all duplicates will be adjacent.
// We don't need extra space (hash set) — we can do this in-place.
//
// Pointer 'i' (slow/write pointer) → tracks where the next unique element should go.
// Pointer 'j' (fast/read pointer)  → scans the array to find the next unique element.
//
// Step-by-step:
//   a. Start both pointers. 'i' at index 0 (first element is always unique).
//   b. Move 'j' from index 1 to the end.
//   c. If nums[j] !== nums[i], it means we found a new unique element.
//      - Increment 'i' to move to the next write position.
//      - Copy nums[j] to nums[i].
//   d. If nums[j] === nums[i], it's a duplicate — just skip it.
//   e. After the loop, 'i' is the index of the last unique element.
//      Return i + 1 as the count of unique elements (k).
//
// Why two pointers work:
//   Since array is sorted, duplicates are next to each other.
//   We only need to keep the first occurrence of each unique number.
//   The write pointer 'i' only moves when we find a new unique number.

// ============================================================
// CODE (JavaScript)
// ============================================================

function removeDuplicates(nums) {
    // Edge case: empty array has 0 unique elements
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer (write position / last unique index)

    for (let j = 1; j < nums.length; j++) {
        // fast pointer (read position) scans for next unique element
        if (nums[j] !== nums[i]) {
            i++; // move write pointer to next position
            nums[i] = nums[j]; // overwrite with the new unique element
        }
        // if nums[j] === nums[i], it's a duplicate → do nothing, just skip
    }

    // i is the index of last unique element, so count = i + 1
    return i + 1;
}

// ============================================================
// TESTING THE SOLUTION
// ============================================================

// Example 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("Example 1:");
console.log("Input: nums = [1,1,2]");
console.log("k =", k1); // 2
console.log("nums =", nums1.slice(0, k1)); // [1, 2]

// Example 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("\nExample 2:");
console.log("Input: nums = [0,0,1,1,1,2,2,3,3,4]");
console.log("k =", k2); // 5
console.log("nums =", nums2.slice(0, k2)); // [0, 1, 2, 3, 4]

// Edge case: single element
let nums3 = [5];
let k3 = removeDuplicates(nums3);
console.log("\nEdge case (single element):");
console.log("Input: nums = [5]");
console.log("k =", k3); // 1
console.log("nums =", nums3.slice(0, k3)); // [5]

// Edge case: all same elements
let nums4 = [2, 2, 2, 2];
let k4 = removeDuplicates(nums4);
console.log("\nEdge case (all duplicates):");
console.log("Input: nums = [2,2,2,2]");
console.log("k =", k4); // 1
console.log("nums =", nums4.slice(0, k4)); // [2]

// Edge case: all unique elements
let nums5 = [1, 2, 3, 4, 5];
let k5 = removeDuplicates(nums5);
console.log("\nEdge case (all unique):");
console.log("Input: nums = [1,2,3,4,5]");
console.log("k =", k5); // 5
console.log("nums =", nums5.slice(0, k5)); // [1, 2, 3, 4, 5]

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] Example 1 passes: k=2, nums=[1,2]
// [x] Example 2 passes: k=5, nums=[0,1,2,3,4]
// [x] Edge case: single element
// [x] Edge case: all duplicates
// [x] Edge case: all unique
// [x] Edge case: empty array
// [x] Time complexity: O(n) ✓
// [x] Space complexity: O(1) ✓
// [x] In-place modification: Yes ✓
// [x] Flow visualization: See RemoveDuplicates_Flow.md
