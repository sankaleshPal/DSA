# Product of Array Except Self - Step by Step Number Flow 🎯

## The Problem
For each element in an array, return the product of all OTHER elements (excluding itself).

**Example:** `nums = [1, 2, 3, 4]`
**Answer:** `[24, 12, 8, 6]`
- answer[0] = 2×3×4 = 24 (exclude 1)
- answer[1] = 1×3×4 = 12 (exclude 2)
- answer[2] = 1×2×4 = 8  (exclude 3)
- answer[3] = 1×2×3 = 6  (exclude 4)

---

## The Core Idea (The Magic Trick) ✨

> **answer[i] = (product of everything to the LEFT) × (product of everything to the RIGHT)**

```
nums = [1,  2,  3,  4]
        ↑   ↑   ↑   ↑
        │   │   │   │
        │   │   │   └── answer[3] = (1×2×3) × (nothing) = 6
        │   │   └────── answer[2] = (1×2) × (4) = 8
        │   └────────── answer[1] = (1) × (3×4) = 12
        └────────────── answer[0] = (nothing) × (2×3×4) = 24
```

---

## The Code (With Comments)

```javascript
function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // PASS 1: Left to Right - Build prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;     // store product of all elements BEFORE i
        prefix *= nums[i];      // update: include nums[i] for next position
    }

    // PASS 2: Right to Left - Multiply by suffix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;    // multiply by product of all elements AFTER i
        suffix *= nums[i];      // update: include nums[i] for next position (left)
    }

    return answer;
}
```

---

## Visual Walkthrough: `nums = [1, 2, 3, 4]`

### 🚀 START: Empty Answer Array

```
nums    = [1,  2,  3,  4]
answer  = [?,  ?,  ?,  ?]  (to be filled)
```

---

### 🔁 PASS 1: Left to Right (Build Prefix Products)

**Goal:** Fill answer[i] with product of all elements to the LEFT of i

---

#### Step 1: `i = 0`, nums[0] = 1

```
Before iteration:
  prefix = 1  (product of elements before index 0 = empty = 1)

Step 1: Store prefix in answer[0]
  answer[0] = 1

Step 2: Update prefix to include nums[0]
  prefix = prefix × nums[0]
  prefix = 1 × 1 = 1

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  ?,  ?,  ?]
```

**Visual:**
```
Index 0: "What's to my left?"
         ←── nothing ──→
         
         Empty product = 1
         
         answer[0] = 1
         
         Then: prefix becomes 1×1 = 1
```

---

#### Step 2: `i = 1`, nums[1] = 2

```
Before iteration:
  prefix = 1  (product of elements before index 1 = just nums[0] = 1)

Step 1: Store prefix in answer[1]
  answer[1] = 1

Step 2: Update prefix to include nums[1]
  prefix = prefix × nums[1]
  prefix = 1 × 2 = 2

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  1,  ?,  ?]
```

**Visual:**
```
Index 1: "What's to my left?"
         [1] ←── my left ──→
         
         Product = 1
         
         answer[1] = 1
         
         Then: prefix becomes 1×2 = 2
```

---

#### Step 3: `i = 2`, nums[2] = 3

```
Before iteration:
  prefix = 2  (product of elements before index 2 = nums[0]×nums[1] = 1×2 = 2)

Step 1: Store prefix in answer[2]
  answer[2] = 2

Step 2: Update prefix to include nums[2]
  prefix = prefix × nums[2]
  prefix = 2 × 3 = 6

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  1,  2,  ?]
```

**Visual:**
```
Index 2: "What's to my left?"
         [1, 2] ←── my left ──→
         
         Product = 1×2 = 2
         
         answer[2] = 2
         
         Then: prefix becomes 2×3 = 6
```

---

#### Step 4: `i = 3`, nums[3] = 4

```
Before iteration:
  prefix = 6  (product of elements before index 3 = nums[0]×nums[1]×nums[2] = 1×2×3 = 6)

Step 1: Store prefix in answer[3]
  answer[3] = 6

Step 2: Update prefix to include nums[3]
  prefix = prefix × nums[3]
  prefix = 6 × 4 = 24

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  1,  2,  6]  ← After PASS 1 (prefix products only)
```

**Visual:**
```
Index 3: "What's to my left?"
         [1, 2, 3] ←── my left ──→
         
         Product = 1×2×3 = 6
         
         answer[3] = 6
         
         Then: prefix becomes 6×4 = 24
```

---

### 📊 After PASS 1 (Left to Right)

```
nums    = [1,   2,   3,   4]
answer  = [1,   1,   2,   6]
           ↑    ↑    ↑    ↑
           │    │    │    └── product of [1,2,3] = 6
           │    │    └────── product of [1,2] = 2
           │    └─────────── product of [1] = 1
           └──────────────── product of [] = 1

These are the PREFIX products (everything to the LEFT)
```

---

### 🔁 PASS 2: Right to Left (Multiply by Suffix Products)

**Goal:** Multiply each answer[i] by product of all elements to the RIGHT of i

---

#### Step 1: `i = 3`, nums[3] = 4

```
Before iteration:
  suffix = 1  (product of elements after index 3 = empty = 1)

Step 1: Multiply answer[3] by suffix
  answer[3] = answer[3] × suffix
  answer[3] = 6 × 1 = 6

Step 2: Update suffix to include nums[3]
  suffix = suffix × nums[3]
  suffix = 1 × 4 = 4

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  1,  2,  6]  ← answer[3] is now FINAL: 6 ✓
```

**Visual:**
```
Index 3: "What's to my right?"
         ←── nothing ──→
         
         Empty product = 1
         
         answer[3] = 6 (prefix) × 1 (suffix) = 6 ✓
         
         Then: suffix becomes 1×4 = 4
```

---

#### Step 2: `i = 2`, nums[2] = 3

```
Before iteration:
  suffix = 4  (product of elements after index 2 = nums[3] = 4)

Step 1: Multiply answer[2] by suffix
  answer[2] = answer[2] × suffix
  answer[2] = 2 × 4 = 8

Step 2: Update suffix to include nums[2]
  suffix = suffix × nums[2]
  suffix = 4 × 3 = 12

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  1,  8,  6]  ← answer[2] is now FINAL: 8 ✓
```

**Visual:**
```
Index 2: "What's to my right?"
         ←── my right ──→ [4]
         
         Product = 4
         
         answer[2] = 2 (prefix) × 4 (suffix) = 8 ✓
         
         Then: suffix becomes 4×3 = 12
```

---

#### Step 3: `i = 1`, nums[1] = 2

```
Before iteration:
  suffix = 12  (product of elements after index 1 = nums[2]×nums[3] = 3×4 = 12)

Step 1: Multiply answer[1] by suffix
  answer[1] = answer[1] × suffix
  answer[1] = 1 × 12 = 12

Step 2: Update suffix to include nums[1]
  suffix = suffix × nums[1]
  suffix = 12 × 2 = 24

Result:
  nums    = [1,  2,  3,  4]
  answer  = [1,  12,  8,  6]  ← answer[1] is now FINAL: 12 ✓
```

**Visual:**
```
Index 1: "What's to my right?"
         ←── my right ──→ [3, 4]
         
         Product = 3×4 = 12
         
         answer[1] = 1 (prefix) × 12 (suffix) = 12 ✓
         
         Then: suffix becomes 12×2 = 24
```

---

#### Step 4: `i = 0`, nums[0] = 1

```
Before iteration:
  suffix = 24  (product of elements after index 0 = nums[1]×nums[2]×nums[3] = 2×3×4 = 24)

Step 1: Multiply answer[0] by suffix
  answer[0] = answer[0] × suffix
  answer[0] = 1 × 24 = 24

Step 2: Update suffix to include nums[0]
  suffix = suffix × nums[0]
  suffix = 24 × 1 = 24

Result:
  nums    = [1,  2,  3,  4]
  answer  = [24,  12,  8,  6]  ← answer[0] is now FINAL: 24 ✓
```

**Visual:**
```
Index 0: "What's to my right?"
         ←── my right ──→ [2, 3, 4]
         
         Product = 2×3×4 = 24
         
         answer[0] = 1 (prefix) × 24 (suffix) = 24 ✓
         
         Then: suffix becomes 24×1 = 24
```

---

### 🏁 FINAL ANSWER

```
nums    = [1,   2,   3,   4]
answer  = [24,  12,  8,   6]
           ↑    ↑    ↑    ↑
           │    │    │    └── 1×2×3 = 6  ✓
           │    │    └────── 1×2×4 = 8  ✓
           │    └─────────── 1×3×4 = 12 ✓
           └──────────────── 2×3×4 = 24 ✓
```

---

## 🎨 Complete Number Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│           PRODUCT OF ARRAY EXCEPT SELF - COMPLETE FLOW                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  INPUT: nums = [1, 2, 3, 4]                                            │
│                                                                          │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  PASS 1: LEFT TO RIGHT (Prefix Products)                        ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║                                                                    ║  │
│  ║  i=0, nums[0]=1                                                   ║  │
│  ║    prefix = 1                                                     ║  │
│  ║    answer[0] = 1  ← store prefix                                   ║  │
│  ║    prefix = 1×1 = 1  ← update                                      ║  │
│  ║    answer = [1, ?, ?, ?]                                          ║  │
│  ║                                                                    ║  │
│  ║  i=1, nums[1]=2                                                   ║  │
│  ║    prefix = 1                                                     ║  │
│  ║    answer[1] = 1  ← store prefix                                   ║  │
│  ║    prefix = 1×2 = 2  ← update                                      ║  │
│  ║    answer = [1, 1, ?, ?]                                          ║  │
│  ║                                                                    ║  │
│  ║  i=2, nums[2]=3                                                   ║  │
│  ║    prefix = 2                                                     ║  │
│  ║    answer[2] = 2  ← store prefix                                   ║  │
│  ║    prefix = 2×3 = 6  ← update                                      ║  │
│  ║    answer = [1, 1, 2, ?]                                          ║  │
│  ║                                                                    ║  │
│  ║  i=3, nums[3]=4                                                   ║  │
│  ║    prefix = 6                                                     ║  │
│  ║    answer[3] = 6  ← store prefix                                   ║  │
│  ║    prefix = 6×4 = 24  ← update                                     ║  │
│  ║    answer = [1, 1, 2, 6]  ← AFTER PASS 1                          ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                           │
│  ╔═══════════════════════════════════════════════════════════════════╗  │
│  ║  PASS 2: RIGHT TO LEFT (Suffix Products × Prefix)               ║  │
│  ╠═══════════════════════════════════════════════════════════════════╣  │
│  ║                                                                    ║  │
│  ║  i=3, nums[3]=4                                                   ║  │
│  ║    suffix = 1                                                     ║  │
│  ║    answer[3] = 6×1 = 6  ← FINAL ✓                                ║  │
│  ║    suffix = 1×4 = 4  ← update                                      ║  │
│  ║    answer = [1, 1, 2, 6]                                          ║  │
│  ║                                                                    ║  │
│  ║  i=2, nums[2]=3                                                   ║  │
│  ║    suffix = 4                                                     ║  │
│  ║    answer[2] = 2×4 = 8  ← FINAL ✓                                  ║  │
│  ║    suffix = 4×3 = 12  ← update                                     ║  │
│  ║    answer = [1, 1, 8, 6]                                          ║  │
│  ║                                                                    ║  │
│  ║  i=1, nums[1]=2                                                   ║  │
│  ║    suffix = 12                                                    ║  │
│  ║    answer[1] = 1×12 = 12  ← FINAL ✓                              ║  │
│  ║    suffix = 12×2 = 24  ← update                                    ║  │
│  ║    answer = [1, 12, 8, 6]                                         ║  │
│  ║                                                                    ║  │
│  ║  i=0, nums[0]=1                                                   ║  │
│  ║    suffix = 24                                                    ║  │
│  ║    answer[0] = 1×24 = 24  ← FINAL ✓                                ║  │
│  ║    suffix = 24×1 = 24  ← update                                    ║  │
│  ║    answer = [24, 12, 8, 6]  ← AFTER PASS 2                        ║  │
│  ╚═══════════════════════════════════════════════════════════════════╝  │
│                              ↓                                           │
│  ┌─────────────────────────────────────────────────────────────┐      │
│  │  RETURN: [24, 12, 8, 6]                                      │      │
│  └─────────────────────────────────────────────────────────────┘      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 The Key Insight

```
┌────────────────────────────────────────────────────┐
│  answer[i] = (product of LEFT) × (product of RIGHT) │
│                                                     │
│  We can't use division, so we build:                │
│                                                     │
│  PASS 1: Fill answer[i] with LEFT product           │
│  PASS 2: Multiply answer[i] by RIGHT product        │
│                                                     │
│  Result: LEFT × RIGHT = everything except self!     │
└────────────────────────────────────────────────────┘
```

---

## 🔄 Why Two Passes?

```
Without division, we need to compute products differently.

Single element exclusion:
┌────────────────────────────────────────────────────────┐
│  nums = [a, b, c, d]                                  │
│                                                        │
│  answer[0] = b × c × d  ← exclude a                  │
│  answer[1] = a × c × d  ← exclude b                  │
│  answer[2] = a × b × d  ← exclude c                  │
│  answer[3] = a × b × c  ← exclude d                  │
│                                                        │
│  Notice the pattern:                                   │
│  answer[0] = (empty) × (b×c×d)                        │
│  answer[1] = (a) × (c×d)                              │
│  answer[2] = (a×b) × (d)                              │
│  answer[3] = (a×b×c) × (empty)                        │
│                                                        │
│  LEFT side grows as we go right...                    │
│  RIGHT side grows as we go left...                    │
└────────────────────────────────────────────────────────┘
```

---

## 📊 Example with Zeros: `nums = [-1, 1, 0, -3, 3]`

```
PASS 1 (Left to Right):
┌────────────────────────────────────────────────────────┐
│  i=0: prefix=1, answer[0]=1, prefix=1×(-1)=-1       │
│  i=1: prefix=-1, answer[1]=-1, prefix=(-1)×1=-1     │
│  i=2: prefix=-1, answer[2]=-1, prefix=(-1)×0=0        │
│  i=3: prefix=0, answer[3]=0, prefix=0×(-3)=0          │
│  i=4: prefix=0, answer[4]=0, prefix=0×3=0             │
│                                                        │
│  After PASS 1: answer = [1, -1, -1, 0, 0]             │
└────────────────────────────────────────────────────────┘

PASS 2 (Right to Left):
┌────────────────────────────────────────────────────────┐
│  i=4: suffix=1, answer[4]=0×1=0, suffix=1×3=3         │
│  i=3: suffix=3, answer[3]=0×3=0, suffix=3×(-3)=-9     │
│  i=2: suffix=-9, answer[2]=(-1)×(-9)=9, suffix=(-9)×0=0│
│  i=1: suffix=0, answer[1]=(-1)×0=0, suffix=0×1=0      │
│  i=0: suffix=0, answer[0]=1×0=0, suffix=0×(-1)=0      │
│                                                        │
│  After PASS 2: answer = [0, 0, 9, 0, 0]               │
└────────────────────────────────────────────────────────┘
```

**Why answer[2] = 9?**
- Index 2 has value 0
- Everything except 0: (-1) × 1 × (-3) × 3 = 9 ✓

**Why others are 0?**
- answer[0] = 1 × 0 × (-3) × 3 = 0 (contains the 0 at index 2)
- answer[1] = (-1) × 0 × (-3) × 3 = 0 (contains the 0 at index 2)
- etc.

---

## ⚡ Time & Space Complexity

| Approach | Time | Space | Why? |
|----------|------|-------|------|
| Brute Force | O(n²) | O(1) | For each element, multiply all others |
| Division | O(n) | O(1) | Not allowed, fails with zeros |
| **Two Pass** | **O(n)** | **O(1)** | Left pass + right pass, output array only |

**Space is O(1) extra because:**
- The output array doesn't count as extra space per problem statement
- We only use two variables: `prefix` and `suffix`

---

## 📝 Summary Table

| Step | Action | Result |
|------|--------|--------|
| 1 | Create answer array | `answer = [?, ?, ?, ?]` |
| 2 | Left pass: store prefix | `answer[i] = product of left` |
| 3 | Right pass: multiply suffix | `answer[i] *= product of right` |
| 4 | Return answer | `answer[i] = left × right` |

---

## 🎯 One-Liner Intuition

> **"For each position, the answer is everything to the left multiplied by everything to the right. We can't divide, so we build the left products in one pass, then multiply by the right products in a second pass."**

---

*Happy Coding! 🚀*
