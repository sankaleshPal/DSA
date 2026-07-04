// 125. Valid Palindrome
// Easy
// Category: Two Pointers
// DSA Type: Two Pointers
// Best Approach: Two Pointers (Inward)
// Time Complexity: O(n)
// Space Complexity: O(1)

// ============================================================
// PROBLEM DESCRIPTION
// ============================================================
// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads the
// same forward and backward.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Alphanumeric characters include letters and numbers.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// ============================================================
// CONSTRAINTS ANALYSIS
// ============================================================
// 1 <= s.length <= 2 * 10^5        (Large - O(n) required)
// s consists only of printable ASCII characters.

// ============================================================
// APPROACH COMPARISON
// ============================================================
//
// BRUTE FORCE (Clean then Check):
//   Idea: Create a cleaned string, then check if it equals its reverse
//   Time: O(n) - Clean string + reverse comparison
//   Space: O(n) - New string for cleaned version
//   Why OK: Time is fine, but uses extra space
//
// OPTIMIZED (Two Pointers - BEST):
//   Idea: Use left and right pointers moving inward, skip non-alphanumeric,
//         compare lowercase chars. No extra string needed.
//   Time: O(n) - Single pass through string
//   Space: O(1) - Only pointers, no extra data structures
//   Why Best: Meets all constraints, minimal space, clean code

// ============================================================
// HOW IT WORKS - STEP BY STEP
// ============================================================
// We use two pointers starting at opposite ends of the string.
//
// Step-by-step:
//   a. Initialize left = 0, right = s.length - 1.
//   b. While left < right:
//      - If s[left] is not alphanumeric, skip it (left++).
//      - If s[right] is not alphanumeric, skip it (right--).
//      - If both are alphanumeric, compare lowercase versions.
//        - If not equal → return false (not a palindrome).
//        - If equal → move both pointers inward (left++, right--).
//   c. If loop completes → return true (palindrome confirmed).
//
// Why Two Pointers?
//   We compare characters from outside moving inward.
//   A palindrome must mirror perfectly from both ends.

// ============================================================
// CODE (JavaScript) - WHILE LOOP VERSION (Two Pointers)
// ============================================================

function isPalindromeWhile(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // Skip non-alphanumeric from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare lowercase characters
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Mismatch found!
        }

        // Move both pointers inward
        left++;
        right--;
    }

    return true; // All mirrored pairs matched
}

// ============================================================
// CODE (JavaScript) - FOR LOOP VERSION (Two Pointers)
// ============================================================
//
// Yes, we can use a for loop! The for loop controls one pointer (left),
// and we manage the other pointer (right) manually inside the loop.
//
// This version is functionally identical but shows the flexibility
// of the two pointers pattern - you can use any loop structure.

function isPalindromeFor(s) {
    // left is controlled by the for loop
    // right starts at the end and moves inward manually
    for (let left = 0, right = s.length - 1; left < right; left++) {
        
        // Skip non-alphanumeric from left
        // Note: We check BEFORE the main comparison
        // If current left char is not alphanumeric, just continue to next iteration
        if (!isAlphanumeric(s[left])) {
            continue; // Skip this iteration, left++ happens in for loop
        }

        // Skip non-alphanumeric from right
        // Move right pointer leftward until we find an alphanumeric char
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Now both pointers point to valid alphanumeric characters
        // Compare them (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Mismatch found!
        }

        // Move right pointer inward
        // (left pointer will be moved by the for loop's left++)
        right--;
    }

    return true; // All mirrored pairs matched
}

// ============================================================
// CODE (JavaScript) - FOR LOOP VERSION 2 (Explicit Right Pointer)
// ============================================================
//
// Another for loop variation where we initialize right outside
// and decrement it inside the loop. This is closer to the while
// loop structure but uses for loop syntax.

function isPalindromeForV2(s) {
    let right = s.length - 1; // right pointer managed manually

    // left is controlled by for loop, right is managed inside
    for (let left = 0; left < right; left++) {
        
        // Skip non-alphanumeric from left
        if (!isAlphanumeric(s[left])) {
            continue;
        }

        // Skip non-alphanumeric from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        right--; // Move right inward
    }

    return true;
}

// ============================================================
// CODE (JavaScript) - FOR LOOP VERSION 3 (Both Pointers in For)
// ============================================================
//
// This version puts both pointer updates in the for loop header
// for maximum clarity. This is the most "for-loop-like" version.

function isPalindromeForV3(s) {
    // Both pointers initialized and updated in for loop header
    // left++ and right-- happen after each iteration
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
        
        // Skip non-alphanumeric from left
        // We need a while loop here because the for's left++ might
        // land on another non-alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++; // Manually skip (for loop will also do left++ after)
        }

        // Skip non-alphanumeric from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--; // Manually skip (for loop will also do right-- after)
        }

        // Compare
        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
    }

    return true;
}

// Helper: Check if a character is alphanumeric (letter or digit)
function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    // '0'-'9' = 48-57, 'A'-'Z' = 65-90, 'a'-'z' = 97-122
    return (
        (code >= 48 && code <= 57) ||   // 0-9
        (code >= 65 && code <= 90) ||   // A-Z
        (code >= 97 && code <= 122)     // a-z
    );
}

// ============================================================
// TESTING ALL VERSIONS
// ============================================================

console.log("=".repeat(60));
console.log("WHILE LOOP VERSION");
console.log("=".repeat(60));

// Example 1
let s1 = "A man, a plan, a canal: Panama";
console.log("\nExample 1:");
console.log('Input: s = "A man, a plan, a canal: Panama"');
console.log("Output:", isPalindromeWhile(s1)); // true

// Example 2
let s2 = "race a car";
console.log("\nExample 2:");
console.log('Input: s = "race a car"');
console.log("Output:", isPalindromeWhile(s2)); // false

// Example 3
let s3 = " ";
console.log("\nExample 3:");
console.log('Input: s = " "');
console.log("Output:", isPalindromeWhile(s3)); // true

console.log("\n" + "=".repeat(60));
console.log("FOR LOOP VERSION 1 (Both in init)");
console.log("=".repeat(60));

console.log("\nExample 1:", isPalindromeFor(s1)); // true
console.log("Example 2:", isPalindromeFor(s2)); // false
console.log("Example 3:", isPalindromeFor(s3)); // true

console.log("\n" + "=".repeat(60));
console.log("FOR LOOP VERSION 2 (Right outside)");
console.log("=".repeat(60));

console.log("\nExample 1:", isPalindromeForV2(s1)); // true
console.log("Example 2:", isPalindromeForV2(s2)); // false
console.log("Example 3:", isPalindromeForV2(s3)); // true

console.log("\n" + "=".repeat(60));
console.log("FOR LOOP VERSION 3 (Both in header)");
console.log("=".repeat(60));

console.log("\nExample 1:", isPalindromeForV3(s1)); // true
console.log("Example 2:", isPalindromeForV3(s2)); // false
console.log("Example 3:", isPalindromeForV3(s3)); // true

// Edge cases
console.log("\n" + "=".repeat(60));
console.log("EDGE CASES (Testing all versions)");
console.log("=".repeat(60));

const testCases = [
    "",                           // empty string
    "a",                          // single character
    "12321",                      // numbers only
    "A1B2C2B1A",                  // mixed alphanumeric
    "!!!a...b...a!!!",            // special characters
    "No lemon, no melon",         // another palindrome with spaces
    "Was it a car or a cat I saw", // another palindrome
];

for (const test of testCases) {
    console.log(`\nInput: "${test}"`);
    console.log(`  While:  ${isPalindromeWhile(test)}`);
    console.log(`  For V1: ${isPalindromeFor(test)}`);
    console.log(`  For V2: ${isPalindromeForV2(test)}`);
    console.log(`  For V3: ${isPalindromeForV3(test)}`);
}

// ============================================================
// VERIFICATION CHECKLIST
// ============================================================
// [x] While loop version works
// [x] For loop version 1 works (both pointers in init)
// [x] For loop version 2 works (right outside)
// [x] For loop version 3 works (both in header)
// [x] All versions produce identical results
// [x] Example 1 passes: true
// [x] Example 2 passes: false
// [x] Example 3 passes: true (empty after cleaning)
// [x] Edge case: empty string → true
// [x] Edge case: single character → true
// [x] Edge case: numbers only
// [x] Edge case: mixed alphanumeric
// [x] Edge case: special characters only
// [x] Time complexity: O(n) ✓
// [x] Space complexity: O(1) ✓
// [x] Flow visualization: See ValidPalindrome_Flow.md
