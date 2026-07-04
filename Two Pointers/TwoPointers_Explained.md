# Two Pointers - Complete Explanation & Pattern Guide 🔥

## What is Two Pointers?

Two Pointers is a technique where you use **two variables (pointers)** to traverse a data structure (usually an array or string) in a coordinated way. The pointers can:
- **Move toward each other** (from opposite ends inward)
- **Move in the same direction** (both from left to right, at different speeds)
- **Start at different positions** and move based on conditions

---

## The Core Idea (The Magic) ✨

> **"Instead of checking every pair with nested loops (O(n²)), use two positions to solve the problem in a single pass (O(n))."**

---

## Two Main Patterns

| Pattern | When to Use | Pointer Movement |
|---------|-------------|------------------|
| **Opposite Ends** | Sorted arrays, palindromes, pair finding | Left starts at 0, Right starts at end, move toward center |
| **Same Direction** | Sliding window, subarrays, duplicates | Both start at 0, Fast pointer explores, Slow pointer catches up |

---

## Pattern 1: Opposite Ends (Inward Movement)

### The Code Template

```javascript
function twoPointersOpposite(arr) {
    let left = 0;                    // ← Start at beginning
    let right = arr.length - 1;      // ← Start at end

    while (left < right) {         // ← Until they meet
        // Do something with arr[left] and arr[right]

        if (condition) {
            left++;                  // ← Move left rightward
        } else {
            right--;                 // ← Move right leftward
        }
    }
}
```

### Visual: Opposite Ends

```
Array: [1, 2, 3, 4, 5, 6, 7, 8]

Step 1:  left=0              right=7
           ↓                  ↓
         [1, 2, 3, 4, 5, 6, 7, 8]
          ↑                  ↑
         Compare these two

Step 2:    left=1        right=6
             ↓              ↓
         [1, 2, 3, 4, 5, 6, 7, 8]
            ↑              ↑
           Compare these two

Step 3:      left=2    right=5
               ↓          ↓
         [1, 2, 3, 4, 5, 6, 7, 8]
              ↑          ↑
             Compare these two

Step 4:        left=3 right=4
                 ↓      ↓
         [1, 2, 3, 4, 5, 6, 7, 8]
                ↑      ↑
               Compare these two

Step 5:        left=4  ← left >= right, STOP!
```

### Use Cases for Opposite Ends

| Problem | What We Check | Pointer Movement |
|---------|---------------|------------------|
| **Two Sum II** (sorted) | `arr[left] + arr[right]` vs target | If sum < target → left++. If sum > target → right-- |
| **Valid Palindrome** | `arr[left]` vs `arr[right]` (lowercase) | If match → both move. If mismatch → return false |
| **Container With Water** | Area = width × min(height) | Move the pointer with smaller height |
| **3Sum** | `arr[i] + arr[left] + arr[right]` vs target | Similar to Two Sum II |

---

## Pattern 2: Same Direction (Fast & Slow)

### The Code Template

```javascript
function twoPointersSameDirection(arr) {
    let slow = 0;                    // ← Lagging pointer
    let fast = 0;                    // ← Exploring pointer

    while (fast < arr.length) {      // ← Fast explores everything
        // Process arr[fast]

        if (condition) {
            arr[slow] = arr[fast];   // ← Slow catches up
            slow++;                    // ← Move slow forward
        }

        fast++;                        // ← Fast always moves
    }

    // Result is in arr[0...slow-1]
    return slow;                     // ← New length
}
```

### Visual: Same Direction (Fast & Slow)

```
Array: [1, 1, 2, 2, 3, 3, 4]
Goal: Remove duplicates in-place

Step 1:  slow=0  fast=0
           ↓      ↓
         [1, 1, 2, 2, 3, 3, 4]
          ↑
         Keep 1, move both

Step 2:  slow=1  fast=1
           ↓      ↓
         [1, 1, 2, 2, 3, 3, 4]
             ↑
         1 == 1 (duplicate!) → skip, only fast moves

Step 3:  slow=1  fast=2
           ↓      ↓
         [1, 2, 2, 2, 3, 3, 4]
             ↑      ↑
         2 != 1 → copy to slow+1, move both

Step 4:  slow=2  fast=3
           ↓      ↓
         [1, 2, 2, 2, 3, 3, 4]
                ↑
         2 == 2 (duplicate!) → skip, only fast moves

Step 5:  slow=2  fast=4
           ↓      ↓
         [1, 2, 3, 2, 3, 3, 4]
                ↑      ↑
         3 != 2 → copy to slow+1, move both

...and so on

Final: [1, 2, 3, 4, _, _, _]  ← slow=4 (new length)
```

### Use Cases for Same Direction

| Problem | What We Track | Pointer Movement |
|---------|---------------|------------------|
| **Remove Duplicates** | `arr[slow]` vs `arr[fast]` | If different → copy to slow+1, slow++. Fast always moves |
| **Move Zeros** | Non-zero elements | If non-zero → swap with slow, slow++ |
| **Sliding Window** | Window condition | Fast expands, slow contracts when invalid |
| **Linked List Cycle** | Fast moves 2x, Slow moves 1x | If they meet → cycle exists |

---

## Two Pointers vs Hash Map: When to Use Which?

| Scenario | Use Two Pointers | Use Hash Map |
|----------|------------------|--------------|
| **Input is sorted** | ✅ Yes - O(n), no extra space | Not needed |
| **Input is unsorted** | ❌ No - need to sort first | ✅ Yes - O(n) time, O(n) space |
| **Need indices** | ✅ Yes - pointers ARE indices | ✅ Yes - store indices in map |
| **Need to modify array in-place** | ✅ Yes - O(1) space | ❌ No - needs extra space |
| **Finding pairs/triplets** | ✅ Yes - sorted array | ✅ Yes - unsorted array |
| **Checking palindrome** | ✅ Yes - compare ends | ❌ No - overkill |
| **Need fast lookups** | ❌ No - linear scan | ✅ Yes - O(1) lookup |
| **First occurrence / counting** | ❌ No - need to scan | ✅ Yes - store counts |

---

## Two Pointers: Step-by-Step Decision Tree

```
┌─────────────────────────────────────────────────────────────┐
│  START: Read the problem                                     │
│      ↓                                                       │
│  Is the input SORTED or can be sorted easily?              │
│      ├── YES → Two Pointers likely works!                   │
│      │           ↓                                           │
│      │      Need to find pairs/triplets?                   │
│      │           ├── YES → Opposite Ends                    │
│      │           └── NO  → Continue...                       │
│      │           ↓                                           │
│      │      Need to modify array in-place?                  │
│      │           ├── YES → Same Direction (Fast & Slow)      │
│      │           └── NO  → Continue...                        │
│      │           ↓                                           │
│      │      Checking palindrome or from both ends?           │
│      │           ├── YES → Opposite Ends                     │
│      │           └── NO  → Consider other approaches          │
│      └── NO  → Hash Map might be better                     │
│                (unless you can sort first)                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Two Pointers Pattern Templates

### Template 1: Opposite Ends - Two Sum II

```javascript
function twoSumII(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Found!
        } else if (sum < target) {
            left++; // Need larger sum → move left right
        } else {
            right--; // Need smaller sum → move right left
        }
    }

    return []; // Not found
}
```

**Why it works:**
```
Array is sorted: [2, 7, 11, 15], target = 9

left=0, right=3: 2+15=17 > 9 → right-- (too big!)
left=0, right=2: 2+11=13 > 9 → right-- (too big!)
left=0, right=1: 2+7=9 == 9 → FOUND! ✅

Logic: If sum is too big, moving left++ would make it BIGGER.
        So we MUST move right-- to make it smaller.
```

---

### Template 2: Same Direction - Remove Duplicates

```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let slow = 0; // Points to last unique element

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;                    // Move to next position
            nums[slow] = nums[fast];   // Copy new unique element
        }
        // If equal, fast moves on (slow stays)
    }

    return slow + 1; // New length
}
```

**Why it works:**
```
[1, 1, 2, 2, 3]

slow=0, fast=1: 1==1 → skip (duplicate)
slow=0, fast=2: 2!=1 → slow=1, nums[1]=2
slow=1, fast=3: 2==2 → skip (duplicate)
slow=1, fast=4: 3!=2 → slow=2, nums[2]=3

Result: [1, 2, 3, _, _] → length = 3
```

---

### Template 3: Opposite Ends - Valid Palindrome

```javascript
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;

        // Compare
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Mismatch!
        }

        left++;
        right--;
    }

    return true; // All matched!
}
```

**Why it works:**
```
"A man, a plan, a canal: Panama"

Compare: A...a → match ✓
Compare: m...m → match ✓
Compare: a...a → match ✓
Compare: n...n → match ✓
Skip: , and space
Compare: a...a → match ✓
...and so on until pointers meet in the middle
```

---

## Two Pointers Complexity Analysis

| Pattern | Time | Space | Why |
|---------|------|-------|-----|
| **Opposite Ends** | O(n) | O(1) | Each element visited at most once |
| **Same Direction** | O(n) | O(1) | Fast visits each element once |
| **With Sorting** | O(n log n) | O(1) or O(n) | Sorting dominates |

---

## Two Pointers vs Hash Map: Side-by-Side Comparison

### Problem: Two Sum

**Input:** `nums = [2, 7, 11, 15], target = 9`

#### Approach 1: Hash Map (for unsorted)

```javascript
function twoSum(nums, target) {
    const map = new Map(); // Hash map: { value: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // What do I need?

        if (map.has(complement)) {
            return [map.get(complement), i]; // Found partner!
        }

        map.set(nums[i], i); // Store for future
    }
}
```

**How it works:**
```
┌─────────────────────────────────────────────────────────┐
│  i=0, nums[0]=2                                       │
│  complement = 9-2 = 7                                 │
│  "Need 7?" → Map empty → NO ❌                        │
│  Store: map = {2: 0}                                  │
├─────────────────────────────────────────────────────────┤
│  i=1, nums[1]=7                                       │
│  complement = 9-7 = 2                                 │
│  "Need 2?" → Map has {2:0} → YES ✅                   │
│  return [0, 1]                                        │
└─────────────────────────────────────────────────────────┘
```

**Complexity:** Time O(n), Space O(n)

---

#### Approach 2: Two Pointers (for sorted)

```javascript
function twoSumII(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) left++;
        else right--;
    }
}
```

**How it works:**
```
┌─────────────────────────────────────────────────────────┐
│  left=0, right=3                                       │
│  nums[0]=2, nums[3]=15                                 │
│  sum = 2+15 = 17 > 9 → too big!                       │
│  right-- → right=2                                    │
├─────────────────────────────────────────────────────────┤
│  left=0, right=2                                       │
│  nums[0]=2, nums[2]=11                                 │
│  sum = 2+11 = 13 > 9 → too big!                       │
│  right-- → right=1                                    │
├─────────────────────────────────────────────────────────┤
│  left=0, right=1                                       │
│  nums[0]=2, nums[1]=7                                  │
│  sum = 2+7 = 9 == 9 → FOUND! ✅                       │
│  return [1, 2]                                        │
└─────────────────────────────────────────────────────────┘
```

**Complexity:** Time O(n), Space O(1)

---

### When to Choose Which?

| Factor | Hash Map | Two Pointers |
|--------|----------|--------------|
| **Input sorted?** | Doesn't matter | Required (or sort first) |
| **Space** | O(n) extra | O(1) extra |
| **Need original indices?** | ✅ Preserved | ❌ Lost if sorting |
| **Code complexity** | Simple | Simple |
| **Multiple passes?** | One pass | One pass |

---

## Summary: Two Pointers Quick Reference

| Problem | Pattern | Pointer Movement |
|---------|---------|------------------|
| Two Sum II (sorted) | Opposite Ends | Sum < target → left++. Sum > target → right-- |
| Valid Palindrome | Opposite Ends | Skip non-alphanumeric, compare, move both |
| Container With Water | Opposite Ends | Move pointer with smaller height |
| 3Sum | Opposite Ends | Fix one, use Two Sum II on rest |
| Remove Duplicates | Same Direction | Fast explores, slow tracks uniques |
| Move Zeros | Same Direction | Fast finds non-zero, swaps with slow |
| Linked List Cycle | Same Direction | Fast moves 2x, slow moves 1x |
| Middle of Linked List | Same Direction | Fast reaches end, slow is at middle |

---

## 🎯 One-Liner Intuition

> **"Two Pointers: Use two positions to solve problems in O(n) time and O(1) space. Move them toward each other for pair-finding, or in the same direction for in-place modifications."**

---

*Happy Coding! 🚀*
