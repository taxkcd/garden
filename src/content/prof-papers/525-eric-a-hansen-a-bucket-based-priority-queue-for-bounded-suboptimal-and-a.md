---
title: "525 · A Bucket-Based Priority Queue for Bounded-Suboptimal and Anytime A* Search — Eric A. Hansen"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-a-hansen"
source_hash: "eb5dbacf70e035f542b1e68a911a03d0185f5367751d11cc76a8b9adc8671370"
sequence: 525
generator: "outreach-garden: managed"
---

# 525 · A Bucket-Based Priority Queue for Bounded-Suboptimal and Anytime A* Search

## At a glance

- **Professor:** Eric A. Hansen
- **Institution:** Mississippi State University
- **Paper:** [A Bucket-Based Priority Queue for Bounded-Suboptimal and Anytime A* Search](https://doi.org/10.1609/socs.v18i1.35976)
- **Authors:** Garrett M. Fereday, Eric A. Hansen
- **Year:** 2025

## Paper overview

This paper introduces a new priority queue data structure called a bucket heap, designed to improve the efficiency of bounded-suboptimal and anytime A* search algorithms. It generalizes the bucket queue used in classic A* to handle non-admissible evaluation functions, leading to faster priority queue operations and better search performance. The bucket heap also supports maintaining two priority queues simultaneously, enabling tighter suboptimality bounds and a hybrid expansion strategy that accelerates convergence and reduces redundant node expansions.

### Why it matters

**Research problem:** Improving the efficiency of priority queue operations in bounded-suboptimal and anytime A* search algorithms, which use non-admissible node evaluation functions and thus cannot directly benefit from traditional bucket queue data structures designed for admissible heuristics.

**Why it matters:** Bounded-suboptimal and anytime search algorithms are crucial for solving complex shortest-path problems under time constraints, but their efficiency is often limited by the overhead of priority queue operations. Enhancing these operations can significantly speed up search, especially in large or time-critical applications.

**Key contributions:**

- Introduction of the bucket heap data structure tailored for bounded-suboptimal and anytime A* algorithms.
- Proof that bucket heap operations are asymptotically faster than binary heap operations.
- Demonstration that bucket heaps provide two priority queues without added overhead.
- Development of a hybrid expansion strategy alternating between non-admissible and admissible order expansions.
- Comprehensive experimental evaluation across multiple benchmark problems showing substantial speedups and improved convergence.

## About the professor

**Eric A. Hansen** — Dept. of Computer Science and Engineering, Mississippi State University.

Research interests: Markov decision processes, Heuristic search

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=9PEURssAAAAJ&hl=en)
- [Identity evidence](http://web.cse.msstate.edu/~hansen)
- [Professor website](https://scholar.google.com/schhp?hl=en)
- [Resolved homepage](https://scholar.google.com/schhp?hl=en&as_sdt=0,44)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=9PEURssAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** heuristic search algorithms
**The paper assumes:** heuristic search algorithms, A* search, admissible and non-admissible heuristics, priority queue data structures
**Already in this field?** Skip this entirely if you already understand heuristic search algorithms including A*, admissibility, and priority queue usage in search.

This background focuses on heuristic search algorithms, particularly A* and its bounded-suboptimal and anytime variants, which are foundational to understanding the bucket heap data structure and hybrid expansion strategies introduced in the paper. The rigorous course option offers a deep, structured university-level treatment of AI search methods, ideal for readers seeking comprehensive understanding. The fast track provides a concise, clear explainer series that covers the essential concepts quickly for those needing a practical grasp without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NPTEL | Artificial Intelligence Search Methods For Problem Solving](https://www.youtube.com/playlist?list=PLrpK1inhO61U9YdFZiNa5R5Ib-QNziA3K) — NPTEL ANSWERS · 11 videos · 4.1h across 11 episodes

**Watch only this:** Lectures 2, 3, 4, 5, 6, and 7 (6 episodes, about 2.2 hours) — covering basic search strategies, A* algorithm, admissible heuristics, and evaluation functions to build a solid foundation for understanding the bucket heap and hybrid expansion strategy.

*Why it unblocks this paper:* This NPTEL course on Artificial Intelligence Search Methods For Problem Solving covers heuristic search algorithms including A*, admissible heuristics, and evaluation functions, directly relevant to the paper's focus on priority queue optimizations and bounded-suboptimal search.

*If you want all of it:* 4.1 hours across all 11 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Search Algorithms in Artificial Intelligence](https://www.youtube.com/playlist?list=PL182sCME8wTjBVkCie-ahHK5c4equ73u2) — W Square Academy · 12 videos · 3.6h across 12 episodes

**Watch only this:** Episodes 1, 5, 6, 7, and 8 (5 episodes, about 1.4 hours) — covering overview of search algorithms, heuristics, admissible heuristics, greedy best-first search, and A* search algorithm.

*Why it unblocks this paper:* This concise explainer series from W Square Academy provides clear, visual introductions to heuristic search and A* algorithm fundamentals, including evaluation functions and admissibility, making it a quick yet effective primer for the paper's key concepts.

*If you want all of it:* 3.6 hours across all 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on the bucket heap for bounded-suboptimal and anytime A* search, start by building a solid foundation on priority queues and their role in heuristic search algorithms. Then, study the core search algorithms of bounded-suboptimal and anytime A* to grasp the context where the bucket heap applies. Next, explore bucket queue data structures as the foundational data structure generalized by the bucket heap. Finally, focus on the paper's core contribution by reviewing the authors' own talk or related advanced presentations on the bucket heap and hybrid expansion strategies.

### Priority queues in heuristic search *(prerequisite)*
Priority queues are fundamental data structures used to manage the frontier in heuristic search algorithms like A*. Understanding their implementation and performance characteristics is essential to appreciate how the bucket heap improves efficiency. The selected video is a comprehensive university lecture from IIT OCW that covers priority queues and binary heaps in depth, suitable for an advanced audience.

*How the paper uses it:* The bucket heap is a novel priority queue data structure designed to improve priority queue operations in heuristic search.

▶ [Priority Queues | Data Structure and Algorithms | NPTEL | IIT-OCW](https://www.youtube.com/watch?v=yf397OhorpE) — IIT OCW · 49:46 · 7 years ago

### Bounded-suboptimal and anytime A* search *(prerequisite)*
Bounded-suboptimal and anytime A* algorithms are the core search methods targeted by the bucket heap. Understanding their mechanics, use of non-admissible heuristics, and challenges with priority queue operations is crucial. The Stanford CS221 lecture by Professor Percy Liang offers a rigorous and detailed treatment of A* and related heuristic search algorithms, fitting for advanced learners.

*How the paper uses it:* The bucket heap is designed specifically to accelerate bounded-suboptimal and anytime A* search algorithms.

▶ [Search 2 - A* | Stanford CS221: Artificial Intelligence (Autumn 2019)](https://www.youtube.com/watch?v=HEs1ZCvLH2s) — Stanford Online · 1:21:54 · 6y ago

### Hybrid expansion strategies in heuristic search
Hybrid expansion strategies combine expansions ordered by admissible and non-admissible heuristics to tighten suboptimality bounds and reduce node re-expansions. This technique is a key contribution of the paper, improving convergence and efficiency. The ICAPS HSDIP Workshop video on A*+BFHS presents a hybrid heuristic search algorithm, providing relevant advanced insights into hybrid strategies in heuristic search.

*How the paper uses it:* The paper develops a hybrid expansion strategy alternating between non-admissible and admissible order expansions to accelerate convergence.

▶ [A*+BFHS: A Hybrid Heuristic Search Algorithm](https://www.youtube.com/watch?v=sauMTK8UvFI) — ICAPS HSDIP Workshop · 12:26 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's contributions on the bucket heap for bounded-suboptimal and anytime A* search, start by learning the basics of priority queues and their role in heuristic search algorithms. Next, grasp the fundamentals of bounded-suboptimal and anytime A* search to see the context where the bucket heap applies. Then, explore bucket queue data structures, which the bucket heap generalizes. Finally, study the paper's core innovation—the bucket heap and its hybrid expansion strategy—to appreciate how it improves search efficiency and suboptimality bounds.

### Priority queues in heuristic search *(prerequisite)*
Priority queues are data structures that manage elements with associated priorities, allowing efficient retrieval of the highest-priority element. In heuristic search algorithms like A*, priority queues organize nodes to be expanded based on cost estimates, which is crucial for search efficiency.

*How the paper uses it:* The paper improves priority queue operations to speed up bounded-suboptimal and anytime A* search.

▶ [Priority Queues | Data Structure and Algorithms | NPTEL | IIT-OCW](https://www.youtube.com/watch?v=yf397OhorpE) — IIT OCW · 49:46 · 7 years ago

### Bounded-suboptimal and anytime A* search *(prerequisite)*
Bounded-suboptimal A* search algorithms find solutions within a guaranteed factor of the optimal cost, trading off optimality for speed. Anytime A* algorithms quickly find an initial solution and improve it over time. Understanding these algorithms clarifies why efficient priority queue management matters.

*How the paper uses it:* The bucket heap is designed specifically to enhance these types of A* search algorithms.

▶ [Search 2 - A* | Stanford CS221: Artificial Intelligence (Autumn 2019)](https://www.youtube.com/watch?v=HEs1ZCvLH2s) — Stanford Online · 1:21:54 · 6y ago

### Bucket queue data structures *(prerequisite)*
Bucket queues group elements into buckets based on priority ranges, enabling faster priority queue operations when priorities are integers or fall into discrete ranges. This structure underpins the bucket heap's design.

*How the paper uses it:* The bucket heap generalizes the bucket queue to handle non-admissible evaluation functions in bounded-suboptimal search.

▶ [Lecture 7.1   Heuristic Search pt 1](https://www.youtube.com/watch?v=OKuwYFfDbXw) — Stanford GGP · 5:02 · 10 years ago

### Hybrid expansion strategies in heuristic search
Hybrid expansion strategies alternate between expansions ordered by admissible and non-admissible heuristics to tighten suboptimality bounds and reduce redundant node expansions, improving search efficiency.

*How the paper uses it:* The paper develops a hybrid expansion strategy enabled by the bucket heap's dual priority queues.

▶ [A*+BFHS: A Hybrid Heuristic Search Algorithm](https://www.youtube.com/watch?v=sauMTK8UvFI) — ICAPS HSDIP Workshop · 12:26 · 5 years ago

## Already in your library

- [Priority Queue Introduction](https://www.youtube.com/watch?v=wptevk0bshY) — also for: Quadratic Running Time Example for Ruppert’s Refinement Algorithm (Jernej Barbic)
- [Learn Priority Queue data structures in 5 minutes 🥇](https://www.youtube.com/watch?v=7z_HXFZqXqc) — also for: Quadratic Running Time Example for Ruppert’s Refinement Algorithm (Jernej Barbic)
- [Priority Queue](https://www.youtube.com/watch?v=NlEwbC6Nt0c) — also for: OPMOS: Ordered Parallel Algorithm for Multi-Objective Shortest-Paths (Omer Khan)
- [Lec-15: What is Heuristic in AI | Why we use Heuristic | How to Calculate Heuristic | Must Watch](https://www.youtube.com/watch?v=5F9YzkpnaRw) — also for: GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem (Apan Qasem)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the bucket heap data structure and its application in bounded-suboptimal and anytime A* search algorithms. Starting with a basic implementation of a bucket queue to grasp the core bucketing concept, you then reimplement the bucket heap and compare it against a binary heap baseline on a grid pathfinding problem. Finally, you extend the bucket heap with an adaptive hybrid expansion strategy to address one of the paper's future directions, showcasing your ability to innovate beyond the original work.

### Beginner — Bucket Queue Implementation for A* Search
*Effort: a weekend, ~8 hours*

You build a simplified bucket queue data structure that supports priority queue operations for A* search with admissible heuristics. You implement basic enqueue, dequeue, and update operations and demonstrate its use on a small grid pathfinding problem.

**Why it shows you understood the paper:** This project shows you understand the foundational bucketing concept that the bucket heap generalizes, including how bucketing can speed up priority queue operations compared to a binary heap in admissible heuristic settings.

**Grounded in:** The paper states: 'The bucket heap generalizes the bucket queue used in classic A* to handle non-admissible evaluation functions.' Starting with the bucket queue is essential to grasp this generalization.

**Tech stack:** C++, Python 3.11

**Data:** A small synthetic 10x10 grid with integer transition costs and obstacles, generated by you.

**Build it:**

1. Implement a bucket queue data structure that organizes nodes into buckets based on their f-costs with integer costs.
2. Implement basic A* search using this bucket queue on a 10x10 grid with obstacles.
3. Compare the number of priority queue operations and runtime against a standard binary heap implementation on the same grid.
4. Write a README explaining the bucket queue concept and your observations.

**Ships as:** A GitHub repo with bucket queue code, A* search demo on a grid, performance comparison, and explanatory README.

**Stretch goal:** Add visualization of bucket contents over time during search to illustrate bucket queue behavior.

### Intermediate — Bucket Heap Implementation and Benchmark on Grid Pathfinding
*Effort: 2 weekends, ~20 hours*

You implement the bucket heap data structure as described in the paper, supporting two simultaneous priority queues for bounded-suboptimal and anytime A* search. You benchmark your implementation against a binary heap baseline on a grid pathfinding problem with integer costs and a non-admissible heuristic.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper's core contribution and empirically verify its claimed speedups and dual-queue capability on a representative problem.

**Grounded in:** The paper's key contribution: 'Introduction of the bucket heap data structure tailored for bounded-suboptimal and anytime A* algorithms' and 'Bucket heap reduces priority queue operation complexity from logarithmic to effectively constant time.'

**Tech stack:** C++, Python 3.11

**Data:** A synthetic 50x50 grid pathfinding problem with integer transition costs and heuristics; you generate this data yourself.

**Build it:**

1. Implement the bucket heap data structure as a binary heap of primary buckets with dynamic priorities.
2. Implement bounded-suboptimal and anytime A* search algorithms using the bucket heap.
3. Implement a baseline version using a standard binary heap priority queue.
4. Run experiments comparing priority queue operation counts and runtime between bucket heap and binary heap on the grid problem.
5. Analyze and plot speedup results similar to those reported in the paper.
6. Document your implementation details, experimental setup, and results in a README.

**Ships as:** A GitHub repo with bucket heap and baseline implementations, benchmark scripts, performance plots, and detailed README.

**Stretch goal:** Add support for the hybrid expansion strategy alternating between admissible and non-admissible expansions.

### Advanced — Adaptive Hybrid Expansion Strategy for Bucket Heap in Anytime A*
*Effort: 3+ weeks*

You extend your bucket heap implementation with an adaptive hybrid expansion strategy that dynamically adjusts the frequency of expansions ordered by admissible f-cost versus non-admissible evaluation functions based on observed search progress or heuristic quality. You evaluate this adaptive strategy on grid pathfinding problems and compare it against the fixed hybrid strategy from the paper.

**Why it shows you understood the paper:** This project tackles a future direction proposed by the authors, demonstrating your ability to innovate on the bucket heap approach and address its limitations by designing and evaluating an adaptive mechanism.

**Grounded in:** Future direction: 'Investigate adaptive strategies to select between linear search and min-heap updates for hmin indices based on problem characteristics' and the thoughtful question about adaptive schemes for hybrid expansions.

**Tech stack:** C++, Python 3.11, Matplotlib or similar for plotting

**Data:** Synthetic grid pathfinding problems with varying heuristic strengths and branching factors, generated by you.

**Build it:**

1. Design an adaptive scheme that monitors search progress metrics (e.g., node re-expansions, heuristic error) to adjust the ratio of admissible vs. non-admissible expansions.
2. Integrate this adaptive scheme into your bucket heap implementation's hybrid expansion strategy.
3. Run experiments on multiple grid problems with different heuristic qualities to evaluate the adaptive strategy against the fixed hybrid strategy.
4. Analyze metrics such as suboptimality bound tightening speed, node re-expansions, and runtime.
5. Document your design decisions, experimental results, and conclusions in a detailed README.

**Ships as:** A GitHub repo with the adaptive hybrid expansion bucket heap code, experimental scripts, comparative analysis, and comprehensive documentation.

**Stretch goal:** Explore extending the adaptive hybrid strategy to other search domains beyond grid pathfinding, such as robot motion planning.
