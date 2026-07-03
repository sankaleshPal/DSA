# Group Anagrams - Step by Step Number/String Flow 🎯

## The Problem
Group words that are anagrams of each other.

**Example:** `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`
**Output:** `[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]`

---

## The Core Idea (The Magic Trick) ✨

> **Two words are anagrams if they have the exact same letters in the same amounts.**

So if we **sort the letters** of each word, all anagrams will look **identical**!

```
"eat"  → sorted → "aet"
"tea"  → sorted → "aet"  ← Same! They're anagrams!
"ate"  → sorted → "aet"  ← Same! They're anagrams!

"tan"  → sorted → "ant"
"nat"  → sorted → "ant"  ← Same! They're anagrams!

"bat"  → sorted → "abt"  ← Unique, no anagrams
```

---

## The Code (With Comments)

```javascript
function groupAnagrams(strs) {
    const map = new Map(); // Hash map: { sorted_word: [original_words] }

    for (const str of strs) {
        // Sort letters to create a "signature" for anagrams
        const sorted = str.split('').sort().join('');
        // "eat" → ['e','a','t'] → ['a','e','t'] → "aet"

        // If this signature is new, create an empty group
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        // Add the original word to its group
        map.get(sorted).push(str);
    }

    // Return all groups
    return Array.from(map.values());
}
```

---

## Visual Walkthrough: `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`

### 🚀 START: Empty Hash Map

```
map = {}  (empty!)
```

---

### 🔁 PROCESSING "eat"

```
Step 1: Take the word
  str = "eat"

Step 2: Sort the letters (Create Signature)
  "eat"
    ↓ split
  ['e', 'a', 't']
    ↓ sort (alphabetical order)
  ['a', 'e', 't']
    ↓ join
  "aet"  ← This is our KEY!

Step 3: Check if key exists in map
  map.has("aet") → FALSE ❌
  "Never seen this signature before!"

Step 4: Create new group for this signature
  map.set("aet", [])

Step 5: Add original word to the group
  map.get("aet").push("eat")

Result:
map = {
  "aet": ["eat"]
}
```

**Visual:**
```
Word: "eat"

Letters:  e ──┐
            a ──┼──→ SORT ──→ a, e, t ──→ KEY: "aet"
            t ──┘

Map:
┌─────┬─────────────┐
│ Key │    Group    │
├─────┼─────────────┤
│"aet"│  ["eat"]    │
└─────┴─────────────┘
```

---

### 🔁 PROCESSING "tea"

```
Step 1: Take the word
  str = "tea"

Step 2: Sort the letters
  "tea"
    ↓ split
  ['t', 'e', 'a']
    ↓ sort
  ['a', 'e', 't']
    ↓ join
  "aet"  ← Same KEY!

Step 3: Check if key exists
  map.has("aet") → TRUE ✅
  "I've seen this signature before!"

Step 4: Add to existing group
  map.get("aet").push("tea")

Result:
map = {
  "aet": ["eat", "tea"]
}
```

**Visual:**
```
Word: "tea"

Letters:  t ──┐
            e ──┼──→ SORT ──→ a, e, t ──→ KEY: "aet" (same!)
            a ──┘

Map:
┌─────┬─────────────────┐
│ Key │      Group      │
├─────┼─────────────────┤
│"aet"│ ["eat", "tea"]  │  ← Added to existing group!
└─────┴─────────────────┘
```

---

### 🔁 PROCESSING "tan"

```
Step 1: Take the word
  str = "tan"

Step 2: Sort the letters
  "tan"
    ↓ split
  ['t', 'a', 'n']
    ↓ sort
  ['a', 'n', 't']
    ↓ join
  "ant"  ← NEW KEY!

Step 3: Check if key exists
  map.has("ant") → FALSE ❌
  "New signature!"

Step 4: Create new group
  map.set("ant", [])

Step 5: Add word
  map.get("ant").push("tan")

Result:
map = {
  "aet": ["eat", "tea"],
  "ant": ["tan"]
}
```

**Visual:**
```
Word: "tan"

Letters:  t ──┐
            a ──┼──→ SORT ──→ a, n, t ──→ KEY: "ant" (new!)
            n ──┘

Map:
┌─────┬─────────────────┐
│ Key │      Group      │
├─────┼─────────────────┤
│"aet"│ ["eat", "tea"]  │
│"ant"│    ["tan"]      │  ← New group created!
└─────┴─────────────────┘
```

---

### 🔁 PROCESSING "ate"

```
Step 1: Take the word
  str = "ate"

Step 2: Sort the letters
  "ate"
    ↓ split
  ['a', 't', 'e']
    ↓ sort
  ['a', 'e', 't']
    ↓ join
  "aet"  ← Same KEY as "eat" and "tea"!

Step 3: Check if key exists
  map.has("aet") → TRUE ✅

Step 4: Add to existing group
  map.get("aet").push("ate")

Result:
map = {
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan"]
}
```

**Visual:**
```
Word: "ate"

Letters:  a ──┐
            t ──┼──→ SORT ──→ a, e, t ──→ KEY: "aet" (same!)
            e ──┘

Map:
┌─────┬─────────────────────────┐
│ Key │         Group           │
├─────┼─────────────────────────┤
│"aet"│ ["eat", "tea", "ate"]   │  ← Added! Anagram group complete!
│"ant"│       ["tan"]           │
└─────┴─────────────────────────┘
```

---

### 🔁 PROCESSING "nat"

```
Step 1: Take the word
  str = "nat"

Step 2: Sort the letters
  "nat"
    ↓ split
  ['n', 'a', 't']
    ↓ sort
  ['a', 'n', 't']
    ↓ join
  "ant"  ← Same KEY as "tan"!

Step 3: Check if key exists
  map.has("ant") → TRUE ✅

Step 4: Add to existing group
  map.get("ant").push("nat")

Result:
map = {
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"]
}
```

**Visual:**
```
Word: "nat"

Letters:  n ──┐
            a ──┼──→ SORT ──→ a, n, t ──→ KEY: "ant" (same!)
            t ──┘

Map:
┌─────┬─────────────────────────┐
│ Key │         Group           │
├─────┼─────────────────────────┤
│"aet"│ ["eat", "tea", "ate"]   │
│"ant"│    ["tan", "nat"]       │  ← Added! Anagram group complete!
└─────┴─────────────────────────┘
```

---

### 🔁 PROCESSING "bat"

```
Step 1: Take the word
  str = "bat"

Step 2: Sort the letters
  "bat"
    ↓ split
  ['b', 'a', 't']
    ↓ sort
  ['a', 'b', 't']
    ↓ join
  "abt"  ← NEW KEY!

Step 3: Check if key exists
  map.has("abt") → FALSE ❌

Step 4: Create new group
  map.set("abt", [])

Step 5: Add word
  map.get("abt").push("bat")

Result:
map = {
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}
```

**Visual:**
```
Word: "bat"

Letters:  b ──┐
            a ──┼──→ SORT ──→ a, b, t ──→ KEY: "abt" (new!)
            t ──┘

Map:
┌─────┬─────────────────────────┐
│ Key │         Group           │
├─────┼─────────────────────────┤
│"aet"│ ["eat", "tea", "ate"]   │
│"ant"│    ["tan", "nat"]       │
│"abt"│       ["bat"]          │  ← New group, no anagrams found
└─────┴─────────────────────────┘
```

---

### 🏁 FINAL STEP: Extract Values

```javascript
return Array.from(map.values());
```

```
map.values() → Iterator of all groups

Groups:
  ["eat", "tea", "ate"]
  ["tan", "nat"]
  ["bat"]

Return: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

---

## 🎨 Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GROUP ANAGRAMS - COMPLETE FLOW                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  INPUT: ["eat", "tea", "tan", "ate", "nat", "bat"]                │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "eat"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "aet"                                                │    │
│  │    ↓                                                        │    │
│  │  Map: { "aet": ["eat"] }                                   │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "tea"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "aet"  ←── Same key!                                  │    │
│  │    ↓                                                        │    │
│  │  Map: { "aet": ["eat", "tea"] }                             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "tan"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "ant"  ←── New key!                                   │    │
│  │    ↓                                                        │    │
│  │  Map: { "aet": ["eat", "tea"], "ant": ["tan"] }             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "ate"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "aet"  ←── Same key!                                  │    │
│  │    ↓                                                        │    │
│  │  Map: { "aet": ["eat", "tea", "ate"], "ant": ["tan"] }      │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "nat"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "ant"  ←── Same key!                                  │    │
│  │    ↓                                                        │    │
│  │  Map: { "aet": ["eat", "tea", "ate"], "ant": ["tan", "nat"] }│    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  "bat"                                                      │    │
│  │    ↓                                                        │    │
│  │  SORT: "abt"  ←── New key!                                   │    │
│  │    ↓                                                        │    │
│  │  Map: { ..., "abt": ["bat"] }                                │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                         ↓                                            │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  RETURN: Array.from(map.values())                            │    │
│  │                                                              │    │
│  │  [                                                           │    │
│  │    ["eat", "tea", "ate"],    ← anagrams of "aet"            │    │
│  │    ["tan", "nat"],           ← anagrams of "ant"            │    │
│  │    ["bat"]                   ← only "abt"                  │    │
│  │  ]                                                           │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 The Key Insight

```
┌────────────────────────────────────────┐
│  ANAGRAMS = SAME LETTERS, SAME COUNT   │
│                                        │
│  "eat" = e(1) + a(1) + t(1)           │
│  "tea" = t(1) + e(1) + a(1)           │
│  "ate" = a(1) + t(1) + e(1)           │
│                                        │
│  After sorting: ALL become "aet"       │
│                                        │
│  That's why they group together!       │
└────────────────────────────────────────┘
```

---

## 🔄 Alternative: Character Count Key

Instead of sorting, we can count characters (faster for long strings):

```javascript
function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Count each letter
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 97]++;
        }
        // Key looks like: "1,0,0,0,1,0,...,1" (counts for a,b,c,d,e,f,...,t)
        const key = count.join(',');

        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    return Array.from(map.values());
}
```

**Why this works:**
```
"eat"  → a:1, e:1, t:1 → "1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0"
"tea"  → a:1, e:1, t:1 → Same count array!
```

---

## 📊 Complexity Comparison

| Approach | Time | Space | When to Use |
|----------|------|-------|-------------|
| **Sort Key** | O(n × k log k) | O(n × k) | Short strings, simple code |
| **Count Key** | O(n × k) | O(n × k) | Long strings, max performance |

Where `n` = number of strings, `k` = max length of string

---

## 📝 Summary Table

| Step | Action | Example |
|------|--------|---------|
| 1 | Take word | `"eat"` |
| 2 | Sort letters | `"aet"` |
| 3 | Use sorted as key | `map["aet"]` |
| 4 | Add to group | `["eat", "tea", "ate"]` |
| 5 | Return all groups | `[[...], [...], [...]]` |

---

## 🎯 One-Liner Intuition

> **"Sort the letters of each word. Words with the same sorted letters are anagrams. Group them together in a hash map using the sorted letters as the key."**

---

*Happy Coding! 🚀*
