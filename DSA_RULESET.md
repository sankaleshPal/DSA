# DSA Problem Solving Rule Set & Template 📋

> Use this framework for EVERY problem you solve. Fill in each section systematically.

---

## 🎯 THE 6-STEP FRAMEWORK

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: IDENTIFY CATEGORY                                 │
│  STEP 2: IDENTIFY DSA TYPE                                 │
│  STEP 3: ANALYZE CONSTRAINTS                               │
│  STEP 4: DETERMINE BEST APPROACH                           │
│  STEP 5: IMPLEMENT SOLUTION                                │
│  STEP 6: VERIFY & OPTIMIZE                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## STEP 1: IDENTIFY CATEGORY 🏷️

What **type of problem** is this?

| Category | Description | Examples |
|----------|-------------|----------|
| **Array & Hashing** | Linear data, fast lookups, grouping | Two Sum, Group Anagrams |
| **Two Pointers** | Searching pairs, sorted data | Two Sum II, 3Sum, Container |
| **Sliding Window** | Subarray/substring problems | Max Subarray, Longest Substring |
| **Stack** | LIFO, matching brackets, undo | Valid Parentheses, Daily Temp |
| **Binary Search** | Sorted data, O(log n) search | Search Insert Position, Rotated Array |
| **Linked List** | Pointer manipulation, traversal | Reverse List, Detect Cycle |
| **Trees** | Hierarchical data, recursion | Inorder Traversal, Max Depth |
| **Heap/Priority Queue** | Top K, scheduling, median | Kth Largest, Merge K Sorted |
| **Backtracking** | Explore all possibilities | Permutations, N-Queens, Subsets |
| **Tries** | String prefix matching | Auto-complete, Word Search II |
| **Graphs** | Networks, connections, paths | BFS, DFS, Dijkstra, Union Find |
| **Dynamic Programming** | Optimal substructure, overlapping | Fibonacci, Knapsack, LCS |
| **Intervals** | Overlapping ranges, scheduling | Merge Intervals, Meeting Rooms |
| **Greedy** | Local optimal choices | Jump Game, Activity Selection |
| **Math & Bit Manipulation** | Numbers, bitwise operations | Power, Single Number, Count Bits |
| **Design** | Build data structures | LRU Cache, Min Stack, Trie |

**Questions to Ask:**
- Is the input sorted? → Binary Search, Two Pointers
- Need to find pairs/triplets? → Two Pointers, Hashing
- Subarray problems? → Sliding Window, Prefix Sum
- Hierarchical/nested? → Trees, Recursion
- All combinations? → Backtracking
- Optimal subproblems? → Dynamic Programming
- String prefix matching? → Trie
- Network/connections? → Graph

---

## STEP 2: IDENTIFY DSA TYPE 🔧

What **data structure or algorithm** should you use?

### Data Structures

| Structure | Use When | Time Complexity |
|-----------|----------|-----------------|
| **Array** | Fixed size, index access | Access: O(1), Search: O(n) |
| **Hash Map/Set** | Fast lookup, grouping, uniqueness | Insert/Lookup: O(1) avg |
| **Stack** | LIFO, recursion, matching | Push/Pop: O(1) |
| **Queue** | BFS, scheduling, FIFO | Enqueue/Dequeue: O(1) |
| **Linked List** | Frequent insert/delete at ends | Insert/Delete: O(1) |
| **Binary Tree** | Hierarchical, BST operations | Search: O(log n) balanced |
| **Heap** | Min/Max access, priority | Insert/Extract: O(log n) |
| **Trie** | String prefix storage | Insert/Search: O(k) |
| **Graph** | Networks, relationships | Varies by algorithm |

### Algorithms

| Algorithm | Use When | Time Complexity |
|-----------|----------|-----------------|
| **Two Pointers** | Sorted array, pair finding | O(n) |
| **Sliding Window** | Subarray/substring optimization | O(n) |
| **Binary Search** | Sorted data, find target | O(log n) |
| **BFS** | Shortest path in unweighted graph | O(V + E) |
| **DFS** | Explore all paths, connected components | O(V + E) |
| **Union Find** | Connected components, cycles | O(α(n)) ~ O(1) |
| **Topological Sort** | Ordering with dependencies | O(V + E) |
| **Dijkstra** | Shortest path in weighted graph | O((V+E) log V) |
| **Backtracking** | Generate all permutations/combinations | O(2^n) or O(n!) |
| **Dynamic Programming** | Optimal substructure, memoization | Varies |
| **Greedy** | Local optimal leads to global optimal | Varies |

---

## STEP 3: ANALYZE CONSTRAINTS 📏

```
┌─────────────────────────────────────────────────────────────┐
│  READ CONSTRAINTS CAREFULLY! They tell you the approach.     │
└─────────────────────────────────────────────────────────────┘
```

| Constraint | What It Means | Approach Hint |
|------------|---------------|---------------|
| `n <= 10^2` | Very small | Brute force, O(n^3) OK |
| `n <= 10^3` | Small | O(n^2) DP, nested loops OK |
| `n <= 10^4` | Medium | O(n log n) or O(n) needed |
| `n <= 10^5` | Large | O(n log n) or O(n) required |
| `n <= 10^6` | Very large | O(n) or O(1) per element |
| `n <= 10^9` | Huge | O(log n) or O(1), math tricks |
| Sorted input | Data is ordered | Binary search, two pointers |
| Unique elements | No duplicates | Set operations easier |
| All positive | No negative numbers | Simpler math |
| Lowercase only | a-z | Array of size 26 possible |
| In-place required | O(1) extra space | Two pointers, swap elements |

---

## STEP 4: DETERMINE BEST APPROACH 🎯

### The Decision Tree

```
┌─────────────────────────────────────────────────────────────┐
│  START: Read the problem                                     │
│      ↓                                                       │
│  Is input sorted or can be sorted?                          │
│      ├── YES → Binary Search / Two Pointers                  │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Need to find/count/group elements?                          │
│      ├── YES → Hash Map / Set                                │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Subarray/substring problems?                                │
│      ├── YES → Sliding Window / Prefix Sum                   │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Hierarchical / nested structure?                            │
│      ├── YES → Trees / Recursion                             │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Need to explore all possibilities?                          │
│      ├── YES → Backtracking / DFS                            │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Optimal subproblems / overlapping?                          │
│      ├── YES → Dynamic Programming                           │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Network / connections / paths?                              │
│      ├── YES → Graph (BFS/DFS/Union Find/Dijkstra)          │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  String matching / prefix?                                   │
│      ├── YES → Trie / KMP / Rabin-Karp                       │
│      └── NO  → Continue...                                   │
│      ↓                                                       │
│  Need priority / scheduling?                               │
│      ├── YES → Heap / Priority Queue                         │
│      └── NO  → Ad-hoc / Math / Greedy                        │
└─────────────────────────────────────────────────────────────┘
```

---

## STEP 5: IMPLEMENT SOLUTION 💻

### Code Template Structure

```javascript
/**
 * [Problem Number]. [Problem Name]
 * 
 * Category: [Array & Hashing / Two Pointers / etc.]
 * DSA Type: [Hash Map / Stack / etc.]
 * 
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

function solveProblem(input) {
    // 1. Initialize data structures
    const map = new Map(); // or Set, Array, etc.
    
    // 2. Process input (single pass or multiple)
    for (const item of input) {
        // Core logic here
    }
    
    // 3. Return result
    return result;
}
```

### Pattern Templates

#### Pattern 1: Hash Map for Frequency/Grouping
```javascript
function hashMapPattern(arr) {
    const map = new Map();
    
    for (const item of arr) {
        // Create key (could be item itself, sorted, computed)
        const key = computeKey(item);
        
        if (!map.has(key)) {
            map.set(key, []); // or 0, or new Set()
        }
        
        // Update value
        map.get(key).push(item);
        // or: map.set(key, map.get(key) + 1);
    }
    
    return Array.from(map.values());
    // or: process map entries
}
```

#### Pattern 2: Two Pointers
```javascript
function twoPointers(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        
        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
}
```

#### Pattern 3: Sliding Window
```javascript
function slidingWindow(s) {
    let left = 0;
    const map = new Map();
    
    for (let right = 0; right < s.length; right++) {
        // Add s[right] to window
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        
        // Shrink window while invalid
        while (windowIsInvalid()) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        
        // Update answer with valid window
        updateAnswer();
    }
}
```

#### Pattern 4: Fast & Slow Pointers (Linked List)
```javascript
function fastSlow(head) {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;        // Move 1 step
        fast = fast.next.next;   // Move 2 steps
        
        if (slow === fast) {
            // Found cycle or middle
        }
    }
}
```

#### Pattern 5: BFS (Graph/Tree)
```javascript
function bfs(start) {
    const queue = [start];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        for (const neighbor of getNeighbors(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
```

#### Pattern 6: DFS (Graph/Tree)
```javascript
function dfs(node, visited) {
    if (!node || visited.has(node)) return;
    
    visited.add(node);
    
    for (const neighbor of getNeighbors(node)) {
        dfs(neighbor, visited);
    }
}
```

#### Pattern 7: Dynamic Programming
```javascript
function dpPattern(n) {
    // 1. Define state
    // dp[i] = answer for subproblem i
    
    // 2. Initialize base cases
    const dp = new Array(n + 1).fill(0);
    dp[0] = baseCase;
    dp[1] = baseCase;
    
    // 3. Fill table
    for (let i = 2; i <= n; i++) {
        dp[i] = recurrenceRelation(dp[i-1], dp[i-2]);
    }
    
    // 4. Return answer
    return dp[n];
}
```

---

## STEP 6: VERIFY & OPTIMIZE ✅

### Checklist

- [ ] Test with provided examples
- [ ] Test edge cases (empty, single element, all same, etc.)
- [ ] Verify time complexity matches constraints
- [ ] Verify space complexity
- [ ] Can you optimize further?
- [ ] Is there a simpler approach?

### Common Optimizations

| From | To | How |
|------|-----|-----|
| O(n^2) | O(n) | Use Hash Map instead of nested loop |
| O(n log n) | O(n) | Use counting sort or array indexing |
| O(n) space | O(1) space | Two pointers, modify input |
| Recursive | Iterative | Stack to avoid call stack overflow |
| Multiple passes | Single pass | Process while iterating |

---

## 📊 COMPLETE PROBLEM TEMPLATE

When you get a new problem, fill this out:

```markdown
## Problem: [Number]. [Name]

### 1. Category
[ ] Array & Hashing
[ ] Two Pointers
[ ] Sliding Window
[ ] Stack
[ ] Binary Search
[ ] Linked List
[ ] Trees
[ ] Heap
[ ] Backtracking
[ ] Tries
[ ] Graphs
[ ] Dynamic Programming
[ ] Intervals
[ ] Greedy
[ ] Math & Bit Manipulation
[ ] Design

**Selected:** ___

### 2. DSA Type
Primary: ___
Secondary: ___

### 3. Constraints Analysis
- Input size: n <= ___
- Time limit: Need O(___)
- Space limit: Need O(___)
- Special conditions: ___

### 4. Approach
**Brute Force:**
- Idea: ___
- Time: O(___)
- Space: O(___)

**Optimized:**
- Idea: ___
- Time: O(___)
- Space: O(___)

**Selected:** ___

### 5. Implementation
```javascript
// Code here
```

### 6. Verification
- [ ] Example 1 passes
- [ ] Example 2 passes
- [ ] Edge cases tested
- [ ] Time complexity verified
- [ ] Space complexity verified
```

---

## 🎯 QUICK REFERENCE: PROBLEM → APPROACH

| Problem Pattern | Category | DSA Type | Approach |
|-----------------|----------|----------|----------|
| Two Sum | Array & Hashing | Hash Map | Store complements |
| Group Anagrams | Array & Hashing | Hash Map | Sorted key |
| Valid Anagram | Array & Hashing | Hash Map / Array | Char count |
| Contains Duplicate | Array & Hashing | Hash Set | Check existence |
| Product Except Self | Array & Hashing | Array | Prefix/suffix |
| Valid Sudoku | Array & Hashing | Hash Set | Row/col/box check |
| Longest Consecutive | Array & Hashing | Hash Set | Sequence check |
| Two Sum II | Two Pointers | Two Pointers | Sorted, left/right |
| 3Sum | Two Pointers | Two Pointers + Sort | Fix one, two pointers |
| Container With Water | Two Pointers | Two Pointers | Max area |
| Trapping Rain Water | Two Pointers | Two Pointers | Left/right max |
| Best Time Stock | Sliding Window | One Pass | Track min price |
| Longest Substring | Sliding Window | Hash Map + Two Pointers | Char count window |
| Permutation in String | Sliding Window | Hash Map + Two Pointers | Fixed window |
| Min Window Substring | Sliding Window | Hash Map + Two Pointers | Expand/shrink |
| Valid Parentheses | Stack | Stack | Matching brackets |
| Min Stack | Stack | Stack + Variable | Track min |
| Daily Temperatures | Stack | Monotonic Stack | Next greater |
| Binary Search | Binary Search | Binary Search | Divide range |
| Search Rotated Array | Binary Search | Modified Binary Search | Find pivot |
| Find Min Rotated | Binary Search | Modified Binary Search | Compare ends |
| Reverse Linked List | Linked List | Pointers | Prev/current/next |
| Merge Two Lists | Linked List | Pointers | Dummy head |
| Detect Cycle | Linked List | Fast/Slow Pointers | Floyd's |
| Merge K Lists | Linked List | Heap / Divide & Conquer | Priority queue |
| Invert Binary Tree | Trees | DFS / Recursion | Swap children |
| Max Depth | Trees | DFS / BFS | Track depth |
| Same Tree | Trees | DFS / Recursion | Compare nodes |
| Subtree Of Another | Trees | DFS / Hash | Serialize compare |
| Kth Smallest | Trees | DFS / Inorder | Inorder traversal |
| Validate BST | Trees | DFS / Inorder | Check ordering |
| Kth Largest | Heap | Min Heap | Maintain size k |
| Top K Frequent | Heap | Hash Map + Heap | Count then heapify |
| Find Median | Heap | Two Heaps | Max/min heap |
| Subsets | Backtracking | Recursion | Include/exclude |
| Permutations | Backtracking | Recursion | Swap/explore |
| Combination Sum | Backtracking | Recursion | Include, skip duplicates |
| N-Queens | Backtracking | Recursion | Place, check, backtrack |
| Clone Graph | Graphs | BFS / DFS | Map old→new nodes |
| Course Schedule | Graphs | Topological Sort / DFS | Detect cycle |
| Pacific Atlantic | Graphs | BFS / DFS | Multi-source |
| Number of Islands | Graphs | BFS / DFS / Union Find | Connected components |
| Rotting Oranges | Graphs | BFS | Multi-source, track time |
| Word Ladder | Graphs | BFS | Shortest path |
| Climbing Stairs | Dynamic Programming | DP | Fibonacci |
| House Robber | Dynamic Programming | DP | Max with/without |
| Coin Change | Dynamic Programming | DP | Min coins |
| Longest Common Subseq | Dynamic Programming | DP | 2D table |
| Edit Distance | Dynamic Programming | DP | 2D table |
| Word Break | Dynamic Programming | DP + Hash Set | Substring check |
| Longest Increasing Subseq | Dynamic Programming | DP / Binary Search | Patience sort |
| Max Subarray | Dynamic Programming | Kadane's | Track max ending here |
| Jump Game | Dynamic Programming / Greedy | Greedy | Max reachable |
| Merge Intervals | Intervals | Sort + Merge | Sort by start |
| Non-overlapping | Intervals | Sort + Greedy | Earliest end |
| Meeting Rooms | Intervals | Sort + Compare | Check overlap |
| LRU Cache | Design | Hash Map + Doubly Linked List | O(1) get/put |
| Trie | Design | Trie Node | Prefix tree |
| Implement Trie | Tries | Trie | Node with children |
| Word Search II | Tries | Trie + Backtracking | Build trie, search |
| Single Number | Math & Bit | XOR | a ^ a = 0 |
| Number of 1 Bits | Math & Bit | Bit Manipulation | n & (n-1) |
| Counting Bits | Math & Bit | DP + Bit | dp[i] = dp[i>>1] + i&1 |
| Reverse Bits | Math & Bit | Bit Manipulation | Shift and OR |
| Missing Number | Math & Bit | Math / XOR | Sum formula |

---

## 🔄 FLOW VISUALIZATION TEMPLATE

For every problem, create a flow showing:

```
┌─────────────────────────────────────────────────────────────┐
│  PROBLEM: [Name]                                             │
│  INPUT: [Example]                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  INITIAL STATE:                                              │
│  [Show data structures]                                      │
│                                                              │
│  STEP 1: [Description]                                       │
│    Input: ___                                                │
│    Operation: ___                                            │
│    Output/State: ___                                         │
│                                                              │
│  STEP 2: [Description]                                       │
│    Input: ___                                                │
│    Operation: ___                                            │
│    Output/State: ___                                         │
│                                                              │
│  ...                                                         │
│                                                              │
│  FINAL RESULT: ___                                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎓 EXAMPLE: FILLED TEMPLATE

### Problem: 1. Two Sum

**1. Category:** Array & Hashing ✅

**2. DSA Type:** Hash Map

**3. Constraints:**
- n <= 10^4
- Need O(n) time
- Need O(n) space

**4. Approach:**
- Brute: Nested loops O(n^2)
- Optimized: Hash map storing complements O(n)

**5. Code:**
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

**6. Verification:**
- [x] All examples pass
- [x] Edge cases tested

**Flow:** See TwoSum_Number_Flow.md

---

*Use this framework for every problem. Consistency leads to mastery! 🚀*
