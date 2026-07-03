// 26. Remove Duplicates from Sorted Array
// Easy

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// ============================================================
// BEST APPROACH: Two Pointers (Slow & Fast / Read & Write)
// ============================================================
// Since the array is already SORTED, all duplicates will be adjacent.
// We don't need extra space (hash set) — we can do this in-place.

// ============================================================
// HOW IT WORKS
// ============================================================
// Pointer 'i' (write pointer) → tracks where the next unique element should go.
// Pointer 'j' (read pointer)  → scans the array to find the next unique element.
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
// TESTING THE SOLUTION - OUTPUT WILL SHOW IN CONSOLE
// ============================================================

// Example 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("Example 1:");
console.log("k =", k1); // 2
console.log("nums =", nums1.slice(0, k1)); // [1, 2]

// Example 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("\nExample 2:");
console.log("k =", k2); // 5
console.log("nums =", nums2.slice(0, k2)); // [0, 1, 2, 3, 4]

// Edge case: single element
let nums3 = [5];
let k3 = removeDuplicates(nums3);
console.log("\nEdge case (single element):");
console.log("k =", k3); // 1
console.log("nums =", nums3.slice(0, k3)); // [5]

// Edge case: all same elements
let nums4 = [2, 2, 2, 2];
let k4 = removeDuplicates(nums4);
console.log("\nEdge case (all duplicates):");
console.log("k =", k4); // 1
console.log("nums =", nums4.slice(0, k4)); // [2]

// Edge case: all unique elements
let nums5 = [1, 2, 3, 4, 5];
let k5 = removeDuplicates(nums5);
console.log("\nEdge case (all unique):");
console.log("k =", k5); // 5
console.log("nums =", nums5.slice(0, k5)); // [1, 2, 3, 4, 5]
