# Two Sum Algorithm - Step by Step Number Flow 🎯

## The Problem
Find two numbers in an array that add up to a target value. Return their indices.

**Example:** `nums = [2, 7, 11, 15]`, `target = 9`
**Answer:** `[0, 1]` because `nums[0] + nums[1] = 2 + 7 = 9`

---

## The Code (With Comments)

```javascript
function twoSum(nums, target) {
    const map = new Map(); // Empty hash map to store { number: index }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // What number do we need?

        // Check if complement exists in map
        if (map.has(complement)) {
            return [map.get(complement), i];  // Found it! Return both indices
        }

        // Store current number and its index for future checks
        map.set(nums[i], i);
    }

    return []; // Problem guarantees one solution
}
```

---

## Visual Walkthrough: `nums = [2, 7, 11, 15]`, `target = 9`

### 🚀 START: Empty Hash Map

```
map = {}  (empty!)
```

---

### 🔁 ITERATION 1: `i = 0`

```
Current number: nums[0] = 2

Step 1: Calculate complement
  complement = target - nums[i]
  complement = 9 - 2
  complement = 7

  "I need to find 7 to make 9. Do I have 7 in my map?"

Step 2: Check if map has 7
  map = {}  (empty)
  map.has(7) → FALSE ❌

  "No, I don't have 7 yet. Let me store 2 for later."

Step 3: Store current number
  map.set(2, 0)

  map = { 2: 0 }
                ↑
             index of 2
```

**Visual:**
```
Array:  [2,   7,   11,  15]
         ↑
        i=0

Map after iteration 1:
┌─────────┬─────────┐
│  Key    │  Value  │
│ (number)│ (index) │
├─────────┼─────────┤
│    2    │    0    │
└─────────┴─────────┘
```

---

### 🔁 ITERATION 2: `i = 1`

```
Current number: nums[1] = 7

Step 1: Calculate complement
  complement = target - nums[i]
  complement = 9 - 7
  complement = 2

  "I need to find 2 to make 9. Do I have 2 in my map?"

Step 2: Check if map has 2
  map = { 2: 0 }
  map.has(2) → TRUE ✅

  "YES! I found 2! It was at index 0!"

Step 3: Return the answer!
  map.get(2) = 0  (index of 2)
  i = 1           (current index of 7)

  return [0, 1] 🎉
```

**Visual:**
```
Array:  [2,   7,   11,  15]
         ↑    ↑
        i=0  i=1

        2 + 7 = 9 ✓

Map before finding:
┌─────────┬─────────┐
│  Key    │  Value  │
│ (number)│ (index) │
├─────────┼─────────┤
│    2    │    0    │  ← "Hey! I have 2!"
└─────────┴─────────┘

ANSWER: [0, 1]
```

---

## 🎨 Complete Number Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    TWO SUM NUMBER FLOW                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  INPUT: nums = [2, 7, 11, 15], target = 9                   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  i=0, nums[0]=2                                      │  │
│  │                                                      │  │
│  │  complement = 9 - 2 = 7                               │  │
│  │                                                      │  │
│  │  ┌─────────────┐     ┌─────────────┐               │  │
│  │  │  "Need 7?"  │────→│  Map: {}    │               │  │
│  │  │             │     │  No 7! ❌   │               │  │
│  │  └─────────────┘     └─────────────┘               │  │
│  │         ↓                                           │  │
│  │  Store: map.set(2, 0)                                │  │
│  │  Map: {2: 0}                                         │  │
│  └─────────────────────────────────────────────────────┘  │
│                         ↓                                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  i=1, nums[1]=7                                      │  │
│  │                                                      │  │
│  │  complement = 9 - 7 = 2  ←─────────────────────┐    │  │
│  │                                                │    │  │
│  │  ┌─────────────┐     ┌─────────────────┐      │    │  │
│  │  │  "Need 2?"  │────→│  Map: {2: 0}    │      │    │  │
│  │  │             │     │  YES! 2 at 0 ✅ │──────┘    │  │
│  │  └─────────────┘     └─────────────────┘             │  │
│  │         ↓                                           │  │
│  │  return [0, 1]  🎉                                  │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔑 The Smart Trick Explained

**The key insight:** We don't look for pairs going forward. We ask:
> *"For the current number, have I already seen its partner?"*

```
Current number: 7
Target: 9

Partner needed: 9 - 7 = 2

"Have I seen 2 before?"
→ YES! At index 0!
→ FOUND!
```

This is why we **store numbers as we go** and **check before storing**.

---

## 🔄 What If We Had to Go Further?

Let's see a different example: `nums = [3, 2, 4]`, `target = 6`

```
┌──────────────────────────────────────────────────────────┐
│  i=0, nums[0]=3                                          │
│  complement = 6 - 3 = 3                                  │
│  "Need 3?" → Map empty → NO ❌                           │
│  Store: map.set(3, 0)                                    │
│  Map: {3: 0}                                             │
├──────────────────────────────────────────────────────────┤
│  i=1, nums[1]=2                                          │
│  complement = 6 - 2 = 4                                  │
│  "Need 4?" → Map has {3:0} → NO ❌                       │
│  Store: map.set(2, 1)                                    │
│  Map: {3: 0, 2: 1}                                       │
├──────────────────────────────────────────────────────────┤
│  i=2, nums[2]=4                                          │
│  complement = 6 - 4 = 2                                    │
│  "Need 2?" → Map has {3:0, 2:1} → YES! ✅                │
│  map.get(2) = 1, i = 2                                   │
│  return [1, 2] 🎉                                        │
└──────────────────────────────────────────────────────────┘
```

**Answer:** `[1, 2]` because `nums[1] + nums[2] = 2 + 4 = 6` ✓

---

## 🧠 Why This Works (The Magic)

```
For any two numbers a and b that sum to target:

a + b = target

If we know a, then:
b = target - a

So when we see 'a', we store it.
When we later see 'b', we check:
"Do I have (target - b) in my map?"
"Do I have a in my map?"
→ YES! We stored it earlier!
```

**The order of operations matters:**
1. **Check first** → "Have I seen my partner?"
2. **Store second** → "Remember me for future checks"

If we stored first, we'd match with ourselves!

---

## ⚡ Time Complexity

| Approach | Time | Why? |
|----------|------|------|
| Brute Force | O(n²) | Check every pair with nested loops |
| **Hash Map** | **O(n)** | One pass, O(1) lookups |

**Space:** O(n) for the hash map

---

## 📝 Summary Table

| Step | Action | What Happens |
|------|--------|--------------|
| 1 | Create empty map | `map = {}` |
| 2 | Loop through array | Check each number |
| 3 | Calculate complement | `target - current` |
| 4 | Check map | "Have I seen my partner?" |
| 5a | If YES | Return both indices |
| 5b | If NO | Store current number |
| 6 | Repeat | Until found |

---

## 🎯 One-Liner Intuition

> **"For every number, ask: 'Have I already seen the number that would make us sum to target?' If yes, we're done. If no, I'll stick around so future numbers can ask me the same question."**

---

*Happy Coding! 🚀*
