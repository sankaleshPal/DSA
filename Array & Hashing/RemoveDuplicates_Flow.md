# Remove Duplicates from Sorted Array - Step by Step Flow 📋

## Problem: 26. Remove Duplicates from Sorted Array

---

## 1. Category
- [x] Array & Hashing
- [ ] Two Pointers
- [ ] Sliding Window
- [ ] Stack
- [ ] Binary Search
- [ ] Linked List
- [ ] Trees
- [ ] Heap
- [ ] Backtracking
- [ ] Tries
- [ ] Graphs
- [ ] Dynamic Programming
- [ ] Intervals
- [ ] Greedy
- [ ] Math & Bit Manipulation
- [ ] Design

**Selected:** Array & Hashing

---

## 2. DSA Type
**Primary:** Two Pointers
**Secondary:** In-place Array Modification

---

## 3. Constraints Analysis
- Input size: n <= 3 * 10^4
- Time limit: Need O(n) - single pass
- Space limit: Need O(1) - in-place modification
- Special conditions: Array is already sorted in non-decreasing order

---

## 4. Approach

**Brute Force:**
- Idea: Create new array, only add unique elements
- Time: O(n)
- Space: O(n) - violates in-place requirement

**Optimized (Hash Set):**
- Idea: Add to Set, copy back to array
- Time: O(n)
- Space: O(n) - violates O(1) space requirement

**Best (Two Pointers):**
- Idea: Slow pointer for writing, fast pointer for reading. Skip duplicates.
- Time: O(n) - single pass
- Space: O(1) - only two pointers

**Selected:** Two Pointers (Best)

---

## 5. Implementation
```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0; // slow pointer (write position)
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}
```

---

## 6. Verification
- [x] Example 1 passes: k=2, nums=[1,2]
- [x] Example 2 passes: k=5, nums=[0,1,2,3,4]
- [x] Edge case: single element
- [x] Edge case: all duplicates
- [x] Edge case: all unique
- [x] Edge case: empty array
- [x] Time complexity verified: O(n)
- [x] Space complexity verified: O(1)

---

# FLOW VISUALIZATION

## The Problem
Given a sorted array, remove duplicates **in-place** with **O(1)** extra space.

**Example:** `nums = [1, 1, 2]`
**Output:** `k = 2`, `nums = [1, 2, _]`

---

## The Core Idea

> **Since the array is SORTED, all duplicates are ADJACENT!**

We use two pointers:
- **`i`** (slow pointer): Where to write the next unique element
- **`j`** (fast pointer): Scans ahead to find the next unique element

```
┌─────────────────────────────────────────────────────────────┐
│  i = write position (last unique element found)              │
│  j = read position (scanning for next unique element)        │
│                                                              │
│  When nums[j] !== nums[i]:                                   │
│    → We found a new unique element!                         │
│    → Move i forward, copy nums[j] to nums[i]                │
│                                                              │
│  When nums[j] === nums[i]:                                   │
│    → It's a duplicate, skip it (do nothing)                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Visual Walkthrough: `nums = [1, 1, 2]`

### 🚀 START: Initial State

```
Array: [1, 1, 2]
        ↑
        i=0 (first element is always unique)
        
        j=1 (start scanning from second element)
```

**Map:**
```
┌─────────────────────────────────────────┐
│  i = 0  (write position)                │
│  j = 1  (read position)                 │
│                                          │
│  Array: [1, 1, 2]                       │
│          ↑ ↑                             │
│          i j                             │
└─────────────────────────────────────────┘
```

---

### 🔁 STEP 1: Compare nums[j] with nums[i]

```
nums[j] = nums[1] = 1
nums[i] = nums[0] = 1

Is nums[j] !== nums[i]?
1 !== 1? → FALSE ❌

"It's a duplicate! Skip it."
```

**Action:** Do nothing, just move j forward

```
┌─────────────────────────────────────────┐
│  nums[j] === nums[i]                     │
│  1 === 1 → DUPLICATE! Skip.               │
│                                          │
│  Action: j++                             │
│                                          │
│  Array: [1, 1, 2]  (unchanged)           │
│          ↑    ↑                          │
│          i    j                          │
└─────────────────────────────────────────┘
```

---

### 🔁 STEP 2: Compare nums[j] with nums[i]

```
nums[j] = nums[2] = 2
nums[i] = nums[0] = 1

Is nums[j] !== nums[i]?
2 !== 1? → TRUE ✅

"Found a new unique element!"
```

**Action:**
1. Move i forward: `i++` → `i = 1`
2. Copy nums[j] to nums[i]: `nums[1] = nums[2]` → `nums[1] = 2`

```
┌─────────────────────────────────────────┐
│  nums[j] !== nums[i]                   │
│  2 !== 1 → NEW UNIQUE!                   │
│                                          │
│  Action:                                 │
│    i++ → i = 1                           │
│    nums[i] = nums[j]                     │
│    nums[1] = 2                           │
│                                          │
│  Array: [1, 2, 2]                        │
│             ↑  ↑                         │
│             i  j                         │
└─────────────────────────────────────────┘
```

---

### 🏁 END: Return Result

```
j has reached the end of array (j = 3, nums.length = 3)

i = 1 (index of last unique element)

Return: i + 1 = 2 (count of unique elements)

Final array (first k=2 elements): [1, 2]
```

**Result:**
```
┌─────────────────────────────────────────┐
│  j reached end of array                  │
│                                          │
│  i = 1                                   │
│  Return: i + 1 = 2                       │
│                                          │
│  Array: [1, 2, 2]                        │
│          ↑ ↑                             │
│          valid  ignored                  │
│          (k=2)                           │
│                                          │
│  Answer: k = 2, nums = [1, 2]            │
└─────────────────────────────────────────┘
```

---

## Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│           REMOVE DUPLICATES - COMPLETE FLOW                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  INPUT: nums = [1, 1, 2]                                           │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  INITIAL STATE:                                             │    │
│  │  Array: [1, 1, 2]                                          │    │
│  │           ↑ ↑                                              │    │
│  │           i j                                              │    │
│  │  i=0, j=1                                                   │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STEP 1: j=1, nums[1]=1                                     │    │
│  │  Compare: nums[1] === nums[0] → 1 === 1                    │    │
│  │  Result: DUPLICATE! ❌                                     │    │
│  │  Action: j++                                                │    │
│  │  Array: [1, 1, 2]  (unchanged)                             │    │
│  │           ↑    ↑                                           │    │
│  │           i    j                                           │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STEP 2: j=2, nums[2]=2                                     │    │
│  │  Compare: nums[2] !== nums[0] → 2 !== 1                    │    │
│  │  Result: NEW UNIQUE! ✅                                    │    │
│  │  Action: i++, nums[i] = nums[j]                             │    │
│  │  Array: [1, 2, 2]                                          │    │
│  │              ↑  ↑                                          │    │
│  │              i  j                                            │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  END: j reached end (j=3)                                   │    │
│  │  Return: i + 1 = 2                                         │    │
│  │  Final: [1, 2, _]                                          │    │
│  │          ↑↑                                                │    │
│  │          valid (k=2)                                       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  OUTPUT: k = 2, nums = [1, 2]                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Larger Example: `nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]`

```
┌─────────────────────────────────────────────────────────────────────┐
│  INITIAL: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]                         │
│            ↑ ↑                                                      │
│            i j                                                      │
├─────────────────────────────────────────────────────────────────────┤
│  j=1: nums[1]=0, nums[0]=0 → DUPLICATE, skip                      │
│  Array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]                           │
│            ↑    ↑                                                   │
│            i    j                                                   │
├─────────────────────────────────────────────────────────────────────┤
│  j=2: nums[2]=1, nums[0]=0 → NEW! i=1, nums[1]=1                  │
│  Array: [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]                           │
│               ↑  ↑                                                  │
│               i  j                                                  │
├─────────────────────────────────────────────────────────────────────┤
│  j=3: nums[3]=1, nums[1]=1 → DUPLICATE, skip                      │
│  j=4: nums[4]=1, nums[1]=1 → DUPLICATE, skip                      │
│  Array: [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]                           │
│               ↑       ↑                                             │
│               i       j                                               │
├─────────────────────────────────────────────────────────────────────┤
│  j=5: nums[5]=2, nums[1]=1 → NEW! i=2, nums[2]=2                  │
│  Array: [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]                           │
│                  ↑  ↑                                               │
│                  i  j                                               │
├─────────────────────────────────────────────────────────────────────┤
│  j=6: nums[6]=2, nums[2]=2 → DUPLICATE, skip                      │
│  j=7: nums[7]=3, nums[2]=2 → NEW! i=3, nums[3]=3                  │
│  Array: [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]                           │
│                     ↑  ↑                                            │
│                     i  j                                            │
├─────────────────────────────────────────────────────────────────────┤
│  j=8: nums[8]=3, nums[3]=3 → DUPLICATE, skip                      │
│  j=9: nums[9]=4, nums[3]=3 → NEW! i=4, nums[4]=4                  │
│  Array: [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]                           │
│                        ↑  ↑                                         │
│                        i  j                                           │
├─────────────────────────────────────────────────────────────────────┤
│  END: j reached end                                                 │
│  Return: i + 1 = 5                                                  │
│  Final: [0, 1, 2, 3, 4, _, _, _, _, _]                            │
│          ↑↑↑↑↑                                                      │
│          valid (k=5)                                                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Why Two Pointers Work Here

```
┌────────────────────────────────────────┐
│  SORTED ARRAY PROPERTY                │
│                                        │
│  All duplicates are adjacent!          │
│                                        │
│  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]      │
│   ↑↑  ↑↑↑  ↑↑  ↑↑                     │
│   dup dup  dup dup                    │
│                                        │
│  So we only need to check:             │
│  "Is current different from LAST      │
│   unique element I found?"             │
│                                        │
│  If YES → New unique! Write it.        │
│  If NO  → Duplicate! Skip it.          │
└────────────────────────────────────────┘
```

---

## Pointer Movement Visualization

```
Array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

j moves:  → → → → → → → → → → (always forward)
         1 2 3 4 5 6 7 8 9 10

i moves:     →     →  →  →  → (only when new unique found)
             1     2  3  4  5

Final i=4, return 5 unique elements
```

---

## Complexity Analysis

| Aspect | Value | Why |
|--------|-------|-----|
| **Time** | O(n) | Single pass with j from 1 to n |
| **Space** | O(1) | Only two pointers, no extra data structures |
| **In-place** | Yes | Modifies input array directly |

---

## Summary Table

| Step | Action | Condition |
|------|--------|-----------|
| 1 | Initialize i=0, j=1 | Start pointers |
| 2 | Compare nums[j] vs nums[i] | Check if new unique |
| 3a | If different: i++, nums[i]=nums[j] | Store new unique |
| 3b | If same: do nothing | Skip duplicate |
| 4 | j++ | Continue scanning |
| 5 | Return i+1 | Count of unique elements |

---

## 🎯 One-Liner Intuition

> **"Keep one finger on the last unique element, scan ahead with another finger. When you find something different, write it down next to your first finger and move your first finger there."**

---

*Happy Coding! 🚀*
