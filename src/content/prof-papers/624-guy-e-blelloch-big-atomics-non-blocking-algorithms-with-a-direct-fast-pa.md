---
title: "624 · Big Atomics: Non-Blocking Algorithms with a Direct Fast Path — Guy E. Blelloch"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-guy-e-blelloch"
source_hash: "2c3275b46ecdc01790cc474f8e8f6561f68a01686d3bbfef7290227cb6a6ff30"
sequence: 624
generator: "outreach-garden: managed"
---

# 624 · Big Atomics: Non-Blocking Algorithms with a Direct Fast Path

## At a glance

- **Professor:** Guy E. Blelloch
- **Institution:** Carnegie Mellon University
- **Paper:** [Big Atomics: Non-Blocking Algorithms with a Direct Fast Path](https://doi.org/10.1145/3816782.3819220)
- **Authors:** Daniel Anderson, Guy E. Blelloch, Zak Kent, Siddhartha Jayanti
- **Year:** 2026

## Paper overview

This paper presents two new algorithms for implementing big atomic operations—atomic operations on multiple adjacent words—that are both theoretically efficient (non-blocking) and practical. The algorithms mostly avoid the costly indirection used in prior work, improving performance especially under contention and oversubscription. The authors also demonstrate the applicability of their algorithms by integrating them into a concurrent hash table that outperforms existing state-of-the-art implementations.

### Why it matters

**Research problem:** Efficiently implementing big atomic operations (atomic operations on multiple adjacent words) that are both theoretically non-blocking (wait-free or lock-free) and practical in performance, avoiding the overheads of indirection and blocking seen in prior approaches.

**Why it matters:** Big atomic operations are fundamental for concurrent programming and algorithm design, enabling atomic updates to multi-word data structures such as hash tables, transactional memory, and concurrent trees. Existing solutions either block (sequence locks) or incur significant overhead due to indirection (wait-free or lock-free algorithms), limiting scalability and performance especially under contention and oversubscription.

**Key contributions:**

- First non-blocking big atomic algorithms that mostly avoid indirection, improving practical performance.
- CachedWaitFree: a wait-free algorithm supporting load and CAS with O(k) time but higher memory usage.
- CachedMemEfficient: a lock-free, memory-efficient algorithm with near-optimal space usage and strong theoretical guarantees.
- Comprehensive experimental evaluation comparing their algorithms to locks, sequence locks, hardware transactional memory, and indirection-based methods across various workloads.
- Demonstration of practical applicability by integrating the algorithms into ParlayHash, a concurrent hash table that outperforms state-of-the-art open-source hash tables.

## About the professor

**Guy E. Blelloch** — U.A. and Hellen Whitaker University Professor, Department of Computer Science, Carnegie Mellon University.

Research interests: parallel algorithms and data structures, programming language support for them

### Research links

- [Faculty/profile page](https://www.cs.cmu.edu/~guyb)
- [Identity evidence](http://www.cs.cmu.edu/~guyb)
- [Professor website](https://www.cs.cmu.edu/~guyb/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Concurrent Data Structures
**The paper assumes:** non-blocking concurrent algorithms, atomic synchronization primitives, linearizability, hazard pointers, lock-free and wait-free algorithms
**Already in this field?** Skip this entirely if you have prior experience with designing and analyzing non-blocking concurrent data structures and synchronization algorithms.

To understand the design and analysis of non-blocking big atomic operations in this paper, a solid grasp of concurrent data structures and synchronization primitives is essential. The rigorous course option offers a deep, university-level lecture series on relevant foundational topics, while the fast track provides a concise, practical introduction to concurrency concepts and system design, ideal for quickly gaining intuition and practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [College Lectures](https://www.youtube.com/playlist?list=PLDF34BA823B75F6DA) — Jacob Robertson · 12 videos · 7.6h across the first 10 episodes

**Watch only this:** Watch lectures 7 and 8 ("1. Using MATLAB for the First Time" and "Lec 1 | MIT 6.172 Performance Engineering of Software Systems, Fall 2010"), about 1.5 hours total — these cover performance engineering and concurrency fundamentals relevant to the paper's algorithms.

*Why it unblocks this paper:* This university lecture series by Jacob Robertson covers foundational topics in concurrent data structures and performance engineering, providing the theoretical and practical background necessary to understand non-blocking algorithms, atomic primitives, and memory reclamation techniques used in the paper.

*If you want all of it:* About 7.6 hours across the first 10 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Low Level System Design: Concurrency Edition](https://www.youtube.com/playlist?list=PLktwTjfCG1DH_OWod0VrTnyiTxWL3gXJM) — Code Granular · 7 videos · 1.3h across 7 episodes

**Watch only this:** Watch episodes 4 and 6 ("Stop Waiting for Slow APIs | Try Java InvokeAll + Timeout Trick : Concurrency Question" and "Design a Fixed Size Thread Pool in Java | Concurrency LLD Interview"), about 22 minutes total — these cover concurrency control and thread management concepts that underpin non-blocking algorithm design.

*Why it unblocks this paper:* This short-form playlist by Code Granular offers concise, clear explainers on concurrency and low-level system design, including thread pools and graceful shutdowns, which provide practical intuition about concurrency challenges and solutions relevant to the paper's focus on non-blocking algorithms.

*If you want all of it:* About 1.3 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Big Atomics: Non-Blocking Algorithms with a Direct Fast Path," start by building a foundation in non-blocking concurrent algorithms, hazard pointers for memory reclamation, and atomic load-linked/store-conditional hardware primitives. These prerequisites provide the theoretical and practical background necessary to grasp the novel algorithmic contributions. Finally, focus on the core concept of big atomic operations algorithms to directly connect with the paper's main contributions.

### Non-blocking concurrent algorithms *(prerequisite)*
This section covers the fundamental theory and practice of non-blocking synchronization techniques, including lock-free and wait-free algorithms, which are essential to understanding the theoretical guarantees and design choices of the paper's algorithms. The selected lecture from MIT OpenCourseWare provides a rigorous, university-level treatment of these concepts with detailed examples and proofs.

*How the paper uses it:* The paper's algorithms are non-blocking and rely on these foundational concepts to achieve theoretical efficiency and practical performance.

▶ [17. Synchronization Without Locks](https://www.youtube.com/watch?v=5sZo3SrLrGA) — MIT OpenCourseWare · 1:20:10 · 7y ago

### Hazard pointers memory reclamation *(prerequisite)*
Hazard pointers are a critical technique for safe memory reclamation in concurrent data structures, ensuring correctness without blocking. The chosen talk from the Linux Plumbers Conference provides an in-depth, practical, and research-level discussion of hazard pointers, directly relevant to the memory management approach used in the paper.

*How the paper uses it:* The paper uses hazard pointers for safe memory reclamation in its non-blocking big atomic algorithms.

▶ [Hazard pointers in Linux kernel - FENG Boqun, UPADHYAY Neeraj, MCKENNEY Paul](https://www.youtube.com/watch?v=yoVLSKG2pZs) — Linux Plumbers Conference · 44:41 · 2y ago

### Atomic load-linked store-conditional *(prerequisite)*
Understanding atomic load-linked (LL) and store-conditional (SC) instructions is essential because these hardware primitives underpin the synchronization mechanisms in the paper's algorithms. The selected lecture from ETH Zürich offers a detailed and technical explanation of load-store handling in out-of-order execution, including LL/SC semantics, suitable for advanced readers.

*How the paper uses it:* The paper's algorithms rely on atomic LL/SC operations to implement synchronization without locks.

▶ [Digital Design & Comp. Arch - Lecture 15b: Load-Store Handling in Out-of-Order Execution (Spring'23)](https://www.youtube.com/watch?v=UZAjQXUwzT4) — Onur Mutlu Lectures · 24:04 · 3y ago

### Big atomic operations algorithms
This section focuses on the core concept of atomic operations on multiple adjacent words, which is the central contribution of the paper. The selected MIT OpenCourseWare lecture provides a rigorous university-level treatment of multithreaded algorithms and atomic operations, offering the necessary background to appreciate the paper's novel algorithms and their theoretical analysis.

*How the paper uses it:* The paper presents new algorithms for big atomic operations that improve both theoretical and practical performance.

▶ [8. Analysis of Multithreaded Algorithms](https://www.youtube.com/watch?v=6I26_r1BKd8) — MIT OpenCourseWare · 1:17:34 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on non-blocking big atomic operations, start by learning the fundamentals of non-blocking concurrent algorithms to grasp the theoretical guarantees and motivation behind the approach. Next, build intuition on the atomic load-linked and store-conditional hardware primitives that enable synchronization in these algorithms. Then, understand hazard pointers for safe memory reclamation, a critical technique used in the paper. Finally, explore the core concept of big atomic operations algorithms, which directly relates to the paper's novel contributions.

### Non-blocking concurrent algorithms *(prerequisite)*
Non-blocking concurrent algorithms allow multiple threads to operate on shared data without using locks, ensuring system-wide progress even if some threads are delayed. Understanding lock-free and wait-free guarantees, as well as common synchronization techniques, builds the foundation for appreciating the paper's algorithms.

*How the paper uses it:* The paper develops non-blocking big atomic algorithms that improve performance and scalability compared to blocking approaches.

▶ [17. Synchronization Without Locks](https://www.youtube.com/watch?v=5sZo3SrLrGA) — MIT OpenCourseWare · 1:20:10 · 7y ago

### Atomic load-linked store-conditional *(prerequisite)*
Load-linked (LL) and store-conditional (SC) are hardware primitives that enable atomic read-modify-write operations by detecting interference from other threads. They are fundamental building blocks for implementing synchronization in concurrent algorithms.

*How the paper uses it:* The paper's algorithms rely on LL/SC operations to safely update multiple adjacent words atomically.

▶ [計算機組織 Chapter 2.10 Synchronization - Load link & Store conditional instructions - 朱宗賢老師](https://www.youtube.com/watch?v=QPpTBjf4Yrk) — edward chu · 27:20 · 10y ago

### Hazard pointers memory reclamation *(prerequisite)*
Hazard pointers are a technique to safely reclaim memory in concurrent data structures by preventing premature deallocation of objects still in use by other threads. This ensures correctness and avoids use-after-free errors in lock-free algorithms.

*How the paper uses it:* The paper uses hazard pointers to manage memory safely while implementing non-blocking big atomic operations.

▶ [Introduction to Epoch-Based Memory Reclamation - Jeffrey Mendelsohn - ACCU 2023](https://www.youtube.com/watch?v=KHVEiSHaEDQ) — ACCU Conference · 20:11 · 3y ago

### Big atomic operations algorithms
Big atomic operations extend atomicity to multiple adjacent memory words, enabling atomic updates to complex data structures. Understanding these algorithms reveals how the paper achieves practical, non-blocking multi-word atomicity with improved performance.

*How the paper uses it:* This is the core concept of the paper, which introduces two novel algorithms for efficient big atomic operations.

▶ [5.5 Atomic Operations in OS | Compare-and-Swap, Test-and-Set](https://www.youtube.com/watch?v=cd8pNNmN9fg) — Shree Learning Academy · 9:00 · 5mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the Big Atomics paper. Starting with a basic simulation of the CachedWaitFree algorithm's fast-path mechanism, you then move to running and extending the authors' own CachedMemEfficient implementation to reproduce key performance metrics. Finally, you tackle an advanced extension by exploring a new atomic operation beyond load and CAS, addressing one of the paper's stated open questions.

### Beginner — Simulate CachedWaitFree Fast-Path Behavior
*Effort: a weekend, ~8 hours*

You build a simplified simulation in C++ or Python that models the CachedWaitFree algorithm's fast-path for load operations, demonstrating how cached copies avoid indirection. The simulation will track operation counts and simulate contention effects on throughput.

**Why it shows you understood the paper:** This project shows you grasp the key mechanism of CachedWaitFree's fast-path optimization and its trade-off of memory for performance, which is central to the paper's first algorithm.

**Grounded in:** The first algorithm is wait-free and supports operations in time proportional to the size of the atomic, but requires storing two copies of each object.

**Tech stack:** C++17 or Python 3.11

**Data:** Synthetic workload simulated in code to model concurrent load and CAS operations with varying contention.

**Build it:**

1. Implement a data structure holding two copies of an object: cached and backup.
2. Simulate concurrent load operations accessing the cached copy directly (fast path).
3. Simulate CAS operations updating backup first, then cached copy (slow path).
4. Model contention by varying the number of simulated threads and measure operation counts.
5. Plot throughput or operation counts to show fast-path benefits under low contention.

**Ships as:** A repository with simulation code, README explaining the CachedWaitFree fast-path, and plots showing throughput under different contention levels.

**Stretch goal:** Add a simple hazard pointer simulation to model safe memory reclamation as described in the paper.

### Intermediate — Run and Extend CachedMemEfficient Big Atomic Implementation
*Effort: 2 weekends, ~20 hours*

You clone and build the authors' CachedMemEfficient big atomic algorithm from https://github.com/cmuparlay/bigatomic, run their benchmarks, and extend the code to compare performance against a sequence lock baseline under a simple synthetic workload.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' codebase, reproduce key performance results, and understand the lock-free algorithm's practical advantages over blocking methods under contention.

**Grounded in:** The second is lock-free and its memory usage is optimal within low-order terms. Our experiments show that our algorithms... are significantly better when there are more software threads than hardware threads (oversubscription).

**Tech stack:** C++17, Linux or macOS development environment, CMake or Make build system

**Data:** Synthetic concurrent workload generated by the benchmark suite in the authors' repository simulating multi-threaded load and CAS operations.

**Build it:**

1. Clone https://github.com/cmuparlay/bigatomic and build the CachedMemEfficient implementation.
2. Run the provided benchmarks to reproduce throughput and latency metrics.
3. Implement a simple sequence lock baseline for big atomic operations.
4. Modify the benchmark to run both CachedMemEfficient and sequence lock under varying thread counts and contention.
5. Collect and plot throughput results comparing both methods.
6. Document the results and explain observed performance differences.

**Verified links from the paper:**

- <https://github.com/cmuparlay/bigatomic> — released by the paper's authors

**Ships as:** A forked repository with benchmark extensions, performance comparison plots, and a README discussing the results and insights.

**Stretch goal:** Add a test to measure memory usage overhead of CachedMemEfficient versus the sequence lock baseline.

### Advanced — Extend Big Atomic Algorithms to Support Fetch-and-Add
*Effort: 3+ weeks, ~60 hours*

You design and implement an extension of the CachedMemEfficient algorithm to support atomic fetch-and-add operations on multi-word objects, addressing a stated open direction in the paper. You evaluate correctness and benchmark performance against the original load/CAS implementation.

**Why it shows you understood the paper:** This project tackles a core limitation identified by the authors, demonstrating deep comprehension of the algorithm's design and the challenges in extending big atomic operations beyond load and CAS.

**Grounded in:** The algorithms currently support only load and CAS operations; extensions to other read-modify-write operations are open questions.

**Tech stack:** C++17, Linux/macOS, CMake or Make, GitHub for version control

**Data:** Synthetic workloads designed to stress test fetch-and-add operations on multi-word objects, simulated in the extended benchmark framework.

**Build it:**

1. Study the CachedMemEfficient algorithm and its implementation in the authors' repository.
2. Design a protocol to implement fetch-and-add atomically on multiple adjacent words using the cached and backup copies.
3. Implement the fetch-and-add operation in the codebase, ensuring lock-free progress guarantees.
4. Extend the benchmark suite to test fetch-and-add correctness and measure performance.
5. Compare fetch-and-add performance to load/CAS and discuss trade-offs.
6. Write detailed documentation explaining the design, implementation challenges, and evaluation.

**Verified links from the paper:**

- <https://github.com/cmuparlay/bigatomic> — released by the paper's authors

**Ships as:** A GitHub repository fork with fetch-and-add support, benchmark results, and a comprehensive README detailing the extension and evaluation.

**Stretch goal:** Explore a wait-free variant of fetch-and-add or investigate memory reclamation optimizations for the new operation.
