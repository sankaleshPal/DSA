# Contains Duplicate - Step by Step Number Flow 🎯

## The Problem
Check if an array contains any duplicate value (a value that appears at least twice).

**Example:** `nums = [1, 2, 3, 1]`
**Answer:** `true` because `1` appears at indices `0` and `3`

---

## The Code (With Comments)

```javascript
function containsDuplicate(nums) {
    const seen = new Set(); // Empty hash set to track seen numbers

    for (const num of nums) {
        // Check if we've seen this number before
        if (seen.has(num)) {
            return true; // Duplicate found!
        }

        // Add current number to the set for future checks
        seen.add(num);
    }

    // No duplicates found after checking all numbers
    return false;
}
```

---

## Visual Walkthrough: `nums = [1, 2, 3, 1]`

### 🚀 START: Empty Hash Set

```
seen = {}  (empty!)
```

---

### 🔁 ITERATION 1: `num = 1` (first element)

```
Current number: nums[0] = 1

Step 1: Check if 1 exists in set
  seen = {}  (empty)
  seen.has(1) → FALSE ❌

  "Never seen 1 before!"

Step 2: Add 1 to the set
  seen.add(1)

  seen = { 1 }
```

**Visual:**
```
Array:  [1,   2,   3,   1]
         ↑
        first

Set after iteration 1:
┌─────────────┐
│  seen       │
├─────────────┤
│     1       │
└─────────────┘
```

---

### 🔁 ITERATION 2: `num = 2`

```
Current number: nums[1] = 2

Step 1: Check if 2 exists in set
  seen = { 1 }
  seen.has(2) → FALSE ❌

  "Never seen 2 before!"

Step 2: Add 2 to the set
  seen.add(2)

  seen = { 1, 2 }
```

**Visual:**
```
Array:  [1,   2,   3,   1]
              ↑
             second

Set after iteration 2:
┌─────────────┐
│  seen       │
├─────────────┤
│     1       │
│     2       │
└─────────────┘
```

---

### 🔁 ITERATION 3: `num = 3`

```
Current number: nums[2] = 3

Step 1: Check if 3 exists in set
  seen = { 1, 2 }
  seen.has(3) → FALSE ❌

  "Never seen 3 before!"

Step 2: Add 3 to the set
  seen.add(3)

  seen = { 1, 2, 3 }
```

**Visual:**
```
Array:  [1,   2,   3,   1]
                   ↑
                  third

Set after iteration 3:
┌─────────────┐
│  seen       │
├─────────────┤
│     1       │
│     2       │
│     3       │
└─────────────┘
```

---

### 🔁 ITERATION 4: `num = 1` (DUPLICATE FOUND!)

```
Current number: nums[3] = 1

Step 1: Check if 1 exists in set
  seen = { 1, 2, 3 }
  seen.has(1) → TRUE ✅

  "YES! I've seen 1 before!"

Step 2: Return true immediately!
  return true 🎉
```

**Visual:**
```
Array:  [1,   2,   3,   1]
                        ↑
                       fourth

        1 appears at index 0 and index 3!

Set before finding:
┌─────────────┐
│  seen       │
├─────────────┤
│     1  ←── "Hey! I have 1!" ✅
│     2       │
│     3       │
└─────────────┘

ANSWER: true
```

---

## 🎨 Complete Number Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│              CONTAINS DUPLICATE - NUMBER FLOW                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  INPUT: nums = [1, 2, 3, 1]                                │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  num = 1 (first)                                     │  │
│  │                                                      │  │
│  │  ┌─────────────┐     ┌─────────────┐               │  │
│  │  │ "Seen 1?"   │────→│  Set: {}    │               │  │
│  │  │             │     │  No 1! ❌   │               │  │
│  │  └─────────────┘     └─────────────┘               │  │
│  │         ↓                                           │  │
│  │  Add: seen.add(1)                                    │  │
│  │  Set: {1}                                            │  │
│  └─────────────────────────────────────────────────────┘  │
│                         ↓                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  num = 2                                             │  │
│  │                                                      │  │
│  │  ┌─────────────┐     ┌─────────────┐               │  │
│  │  │ "Seen 2?"   │────→│  Set: {1}   │               │  │
│  │  │             │     │  No 2! ❌   │               │  │
│  │  └─────────────┘     └─────────────┘               │  │
│  │         ↓                                           │  │
│  │  Add: seen.add(2)                                    │  │
│  │  Set: {1, 2}                                         │  │
│  └─────────────────────────────────────────────────────┘  │
│                         ↓                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  num = 3                                             │  │
│  │                                                      │  │
│  │  ┌─────────────┐     ┌─────────────────┐           │  │
│  │  │ "Seen 3?"   │────→│  Set: {1, 2}    │           │  │
│  │  │             │     │  No 3! ❌       │           │  │
│  │  └─────────────┘     └─────────────────┘           │  │
│  │         ↓                                           │  │
│  │  Add: seen.add(3)                                    │  │
│  │  Set: {1, 2, 3}                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                         ↓                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  num = 1 (duplicate!)                                │  │
│  │                                                      │  │
│  │  ┌─────────────┐     ┌─────────────────────┐       │  │
│  │  │ "Seen 1?"   │────→│  Set: {1, 2, 3}     │       │  │
│  │  │             │     │  YES! 1 exists! ✅  │───────┘  │
│  │  └─────────────┘     └─────────────────────┘           │
│  │         ↓                                           │
│  │  return true  🎉                                    │
│  └─────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 What If No Duplicate? Example: `nums = [1, 2, 3, 4]`

```
┌──────────────────────────────────────────────────────────┐
│  num = 1                                                 │
│  "Seen 1?" → Set empty → NO ❌                           │
│  Add: seen.add(1)                                        │
│  Set: {1}                                                │
├──────────────────────────────────────────────────────────┤
│  num = 2                                                 │
│  "Seen 2?" → Set has {1} → NO ❌                        │
│  Add: seen.add(2)                                        │
│  Set: {1, 2}                                             │
├──────────────────────────────────────────────────────────┤
│  num = 3                                                 │
│  "Seen 3?" → Set has {1, 2} → NO ❌                     │
│  Add: seen.add(3)                                        │
│  Set: {1, 2, 3}                                          │
├──────────────────────────────────────────────────────────┤
│  num = 4                                                 │
│  "Seen 4?" → Set has {1, 2, 3} → NO ❌                  │
│  Add: seen.add(4)                                        │
│  Set: {1, 2, 3, 4}                                       │
├──────────────────────────────────────────────────────────┤
│  END OF ARRAY                                            │
│  No duplicates found → return false                        │
└──────────────────────────────────────────────────────────┘
```

**Answer:** `false` because all elements are distinct ✓

---

## 🧠 Why This Works (The Magic)

```
A Set is like a bag where you can only put unique items.

When you try to add something already in the bag:
  → The bag says "I already have this!"
  → That's how we detect duplicates!

┌────────────────────────────────────────┐
│  SET OPERATIONS                        │
│                                        │
│  add(x)    → Put x in the bag         │
│  has(x)    → "Do I have x?"          │
│  delete(x) → Remove x from bag       │
│                                        │
│  Both add and has are O(1) average!   │
└────────────────────────────────────────┘
```

**The order of operations matters:**
1. **Check first** → "Have I seen this number before?"
2. **Add second** → "Remember this number for future checks"

If we added first, we'd always find ourselves!

---

## ⚡ Time Complexity

| Approach | Time | Space | Why? |
|----------|------|-------|------|
| Brute Force | O(n²) | O(1) | Check every pair with nested loops |
| Sort First | O(n log n) | O(1) | Sort, then check adjacent elements |
| **Hash Set** | **O(n)** | **O(n)** | One pass, O(1) lookups |

---

## 📝 Summary Table

| Step | Action | What Happens |
|------|--------|--------------|
| 1 | Create empty set | `seen = {}` |
| 2 | Loop through array | Check each number |
| 3 | Check set | "Have I seen this number?" |
| 4a | If YES | Return `true` (duplicate found!) |
| 4b | If NO | Add number to set |
| 5 | If loop completes | Return `false` (all distinct) |

---

## 🎯 One-Liner Intuition

> **"For every number, ask: 'Have I seen you before?' If yes, we found a duplicate! If no, I'll remember you so I can ask future numbers the same question."**

---

*Happy Coding! 🚀*
