---
title: "482 · OPMOS: Ordered Parallel Algorithm for Multi-Objective Shortest-Paths — Omer Khan"
date: 2026-08-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-omer-khan"
source_hash: "2a877065d07efe8133ab54dcc87166335c6023088cc2dea8bcd198bd8244826c"
sequence: 482
generator: "outreach-garden: managed"
---

# 482 · OPMOS: Ordered Parallel Algorithm for Multi-Objective Shortest-Paths

## At a glance

- **Professor:** Omer Khan
- **Institution:** University of Connecticut
- **Paper:** [OPMOS: Ordered Parallel Algorithm for Multi-Objective Shortest-Paths](https://arxiv.org/pdf/2411.16667)
- **Authors:** Leo Gold, Adam Bienkowski, Krishna Pattipati, Omer Khan, David Sidoti
- **Year:** 2025

## Paper overview

This paper addresses the computational challenge of solving the Multi-Objective Shortest-Path (MOS) problem, which finds a set of optimal paths considering multiple competing objectives in a graph. The authors propose OPMOS, a novel parallel algorithm that maintains ordered processing of candidate paths to efficiently compute exact Pareto-optimal solutions. Evaluated on a 72-core Arm CPU using real-world maritime ship routing data, OPMOS achieves significant speedups over sequential algorithms while preserving solution quality.

### Why it matters

**Research problem:** The MOS problem is NP-hard and computationally intractable as the number of objectives increases, due to an explosion in the number of non-dominated paths and the complexity of dominance and pruning checks. Existing algorithms like NAMOA* are sequential and slow for high-dimensional objectives, and parallel MOS algorithms capable of handling arbitrary objectives are lacking.

**Why it matters:** Multi-objective shortest path problems arise in critical real-world applications such as maritime ship routing, autonomous systems, and energy grids, where multiple competing criteria must be optimized simultaneously. Efficiently solving MOS enables informed decision-making in these high-impact domains.

**Key contributions:**

- Performance characterization of the NAMOA* MOS algorithm on real-world ship routing graphs with up to 12 objectives, revealing complexity growth and parallelism potential.
- Design and implementation of OPMOS, a parallel MOS algorithm that maintains ordered label extraction and asynchronous execution to balance work efficiency and parallelism.
- A label-aware load balancing method that separates goal-node and regular labels to reduce load imbalance during parallel execution.
- Evaluation of OPMOS on a 72-core Arm CPU demonstrating a geometric mean 34× speedup over sequential NAMOA* while preserving exact Pareto-optimal solutions.

## About the professor

**Omer Khan** — Professor, Electrical and Computer Engineering, University of Connecticut.

Research interests: Computer Architecture, Parallel Processor, Secure Processor, Graph Intelligence

### Research links

- [Faculty/profile page](https://khan.engr.uconn.edu)
- [Resolved homepage](https://khan.engr.uconn.edu/)
- [Lab website](https://cag-uconn.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multi-objective shortest path algorithms
**The paper assumes:** graph algorithms for multi-objective optimization, Pareto optimality, label-setting shortest path methods
**Already in this field?** Skip this entirely if you already understand multi-objective shortest path problems and classical algorithms like NAMOA*.

To understand the OPMOS paper on multi-objective shortest path algorithms, background on shortest path problems, label-setting methods, dominance checks, and algorithmic design for graph problems is essential. The rigorous course option provides a deep, structured university-level treatment of shortest path algorithms and related graph algorithms, while the fast track offers a concise, focused introduction to weighted shortest paths and related algorithmic concepts. Choose the rigorous course for thorough foundational knowledge; choose the fast track for a quicker, targeted overview that covers the core concepts efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

**Watch only this:** Watch lectures 11 (Weighted Shortest Paths), 12 (Bellman-Ford), 13 (Dijkstra), and 14 (APSP and Johnson), about 4.4 hours total — these cover shortest path algorithms and related graph concepts critical for MOS understanding.

*Why it unblocks this paper:* MIT 6.006 Introduction to Algorithms covers fundamental graph algorithms including weighted shortest paths, Dijkstra, Bellman-Ford, and label-setting methods, which are directly relevant to understanding MOS algorithms like OPMOS and NAMOA*. The lectures provide rigorous algorithmic foundations and complexity analysis essential for grasping the paper's contributions.

*If you want all of it:* 35.3 hours across 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the OPMOS paper, start with foundational knowledge on parallel graph algorithms and load balancing in parallel computing to grasp the challenges and techniques relevant to parallelizing MOS problems. Then, study multi-objective shortest path algorithms to understand the problem domain and classical approaches. Finally, focus on the core concept of ordered parallel algorithms for MOS, culminating with the authors' own talk or the closest available advanced seminar on parallel MOS algorithms.

### Parallel graph algorithms *(prerequisite)*
This section covers foundational knowledge on parallelizing graph computations, which is critical to understanding how OPMOS achieves parallelism in the complex MOS problem. The chosen talk from the Simons Institute provides a recent, research-level seminar on parallel BFS and shortest path algorithms, relevant to the parallel processing techniques used in OPMOS.

*How the paper uses it:* OPMOS is a parallel algorithm for MOS, so understanding parallel graph algorithms is foundational.

▶ [Parallel Cluster-BFS and Applications to Shortest Paths](https://www.youtube.com/watch?v=mSkb879iYxA) — Simons Institute for the Theory of Computing · 29:06 · Streamed 9 months ago

### Load balancing in parallel computing *(prerequisite)*
Load balancing is critical for efficient parallel execution, especially given the label complexity variability in OPMOS. The selected talk on predictive load balancing provides an advanced, research-oriented perspective on load balancing strategies beyond naive approaches, which aligns with OPMOS's label-aware load balancing method.

*How the paper uses it:* OPMOS uses a label-aware load balancing strategy to reduce load imbalance during parallel execution.

▶ ["Predictive Load-Balancing: Unfair but Faster & more Robust" by Steve Gury](https://www.youtube.com/watch?v=6NdxUY1La2I) — Strange Loop Conference · 42:25 · 8 years ago

### Multi-objective shortest path algorithms *(prerequisite)*
Understanding the multi-objective shortest path problem and classical algorithms is essential to appreciate the challenges OPMOS addresses. The NPTEL IIT Kharagpur lecture on multi-objective optimization offers a rigorous academic treatment of the topic, suitable for advanced readers.

*How the paper uses it:* OPMOS solves the multi-objective shortest path problem, improving on classical sequential algorithms.

▶ [Lecture 39 - Multi-objective Optimization](https://www.youtube.com/watch?v=Hm2LK4vJzRw) — NPTEL IIT Kharagpur · 33:09 · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the OPMOS paper, start by learning the basics of shortest path algorithms and multi-objective optimization, which form the problem foundation. Then, build knowledge on parallel graph algorithms and load balancing to grasp the computational challenges and solutions. Finally, explore priority queues and the core idea of ordered parallel algorithms for multi-objective shortest paths to fully appreciate OPMOS's novel contributions.

### Multi-objective shortest path algorithms *(prerequisite)*
This section introduces the multi-objective shortest path (MOS) problem, where multiple criteria must be optimized simultaneously, and classical algorithms that address it. Understanding MOS fundamentals helps grasp why the problem is computationally challenging and why specialized algorithms like NAMOA* and OPMOS are needed.

*How the paper uses it:* The paper builds on MOS problem complexity and existing sequential algorithms like NAMOA*.

▶ [Lecture 39 - Multi-objective Optimization](https://www.youtube.com/watch?v=Hm2LK4vJzRw) — NPTEL IIT Kharagpur · 33:09 · 7 years ago

### Parallel graph algorithms *(prerequisite)*
Learn how graph algorithms can be parallelized to improve performance, including common challenges like load imbalance and synchronization. This knowledge is essential to understand how OPMOS achieves speedups by parallelizing MOS computations on multi-core CPUs.

*How the paper uses it:* OPMOS is a parallel algorithm designed to efficiently solve MOS problems by exploiting parallelism in graph processing.

▶ [Introduction to parallel graph algorithms](https://www.youtube.com/watch?v=IpC1WpYIJ3I) — NPTEL IIT Delhi · 22:56 · 4 years ago

### Load balancing in parallel computing *(prerequisite)*
Load balancing ensures that work is evenly distributed among parallel workers to avoid bottlenecks and idle time. Understanding load balancing strategies is key to appreciating OPMOS's label-aware load balancing method that reduces stalls and imbalance during execution.

*How the paper uses it:* OPMOS uses a label-aware load balancing strategy to handle variability in label complexity and improve parallel efficiency.

▶ [Load Balancing in Distributed Systems | System Design Interview Concepts | Load Balancing Explained](https://www.youtube.com/watch?v=nbC7efrm2vs) — SoftwareDude · 13:18 · 3 years ago

### Priority queue data structures *(prerequisite)*
Priority queues are data structures that efficiently manage elements ordered by priority, crucial for shortest path algorithms to process nodes in the correct order. Understanding priority queues helps explain the sequential bottlenecks OPMOS addresses with asynchronous execution.

*How the paper uses it:* OPMOS relies on a centralized priority queue for ordered label extraction, a key bottleneck it mitigates asynchronously.

▶ [Priority Queue](https://www.youtube.com/watch?v=NlEwbC6Nt0c) — TutorialsPoint · 5:10 · 8 years ago

### Ordered parallel algorithms for MOS
This concept covers how parallel algorithms can maintain order in processing to ensure work efficiency and correctness, especially in multi-objective shortest path problems. It is the core innovation behind OPMOS, combining ordered label extraction with parallelism to achieve exact Pareto-optimal solutions efficiently.

*How the paper uses it:* OPMOS's main contribution is an ordered parallel algorithm that balances work efficiency and parallelism for MOS.

▶ [Parallel Cluster-BFS and Applications to Shortest Paths](https://www.youtube.com/watch?v=mSkb879iYxA) — Simons Institute for the Theory of Computing · 29:06 · Streamed 9 months ago

## Already in your library

- [11. Dynamic Programming: All-Pairs Shortest Paths](https://www.youtube.com/watch?v=NzgFUwOaoIw) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)
- [Parallelism in Dynamic Graph Algorithms](https://www.youtube.com/watch?v=lGIOTx2gTxI) — also for: Parallel 𝒌-Core Decomposition: Theory and Practice (Yizong Cheng)
- [Parallel Batch-Dynamic Graph Algorithms](https://www.youtube.com/watch?v=lXFQC1qXsWc) — also for: Parallel Batch-Dynamic Maximal Independent Set (Jeremy T. Fineman)
- [Parallel Graph Algorithms](https://www.youtube.com/watch?v=4Z2h-xcoIII) — also for: Parallel 𝒌-Core Decomposition: Theory and Practice (Yizong Cheng)
- [Introduction to Graph Theory: A Computer Science Perspective](https://www.youtube.com/watch?v=LFKZLXVO-Dg) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [Priority Queue Introduction](https://www.youtube.com/watch?v=wptevk0bshY) — also for: Quadratic Running Time Example for Ruppert’s Refinement Algorithm (Jernej Barbic)
- [Learn Priority Queue data structures in 5 minutes 🥇](https://www.youtube.com/watch?v=7z_HXFZqXqc) — also for: Quadratic Running Time Example for Ruppert’s Refinement Algorithm (Jernej Barbic)
- [Tutte Seminar - Online Unrelated-Machine Load Balancing and Generalized Flow with Recourse](https://www.youtube.com/watch?v=HSVu5FOiBu0) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)
- [Recent Advances in Parallel Algorithms](https://www.youtube.com/watch?v=BLckiB0bH2M) — also for: Parallel Batch-Dynamic Maximal Independent Set (Jeremy T. Fineman)
- [Lecture 11: Parallel Algorithms](https://www.youtube.com/watch?v=mETKQCqrpBM) — also for: Efficient Parallel Algorithms for Hypergraph Matching (Nodari Sitchinava)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the OPMOS paper. The beginner project focuses on implementing a simplified ordered label extraction mechanism to grasp the core idea of ordered parallel processing. The intermediate project involves reimplementing the OPMOS algorithm's core parallel label processing on a smaller synthetic multi-objective graph dataset, comparing it against a sequential baseline to validate speedup and correctness. The advanced project extends the OPMOS approach by exploring approximate MOS algorithms to address the paper's limitation on runtime efficiency, implementing a prototype that trades solution quality for speed and analyzing the impact on parallelism and work efficiency.

### Beginner — Ordered Label Extraction Simulator for Multi-Objective Shortest Paths
*Effort: a weekend, ~8 hours*

You build a simplified simulator that models the ordered extraction of candidate labels from a priority queue in lexicographic order for a small multi-objective shortest path problem. The simulator will process labels sequentially but will visualize how maintaining order affects the exploration of the Pareto front.

**Why it shows you understood the paper:** This project demonstrates your grasp of the critical role of ordered label extraction in maintaining work efficiency and solution quality, a key insight from the OPMOS paper.

**Grounded in:** Ordered label extraction is critical for work-efficient parallel MOS execution.

**Tech stack:** Python 3.11, matplotlib

**Data:** A small synthetic graph with 3-4 nodes and 2 objectives, created manually to illustrate label ordering.

**Build it:**

1. Define a small directed graph with edges annotated by two objective costs.
2. Implement a priority queue that extracts labels in lexicographic order of objectives.
3. Simulate label expansion and dominance checks sequentially, tracking the Pareto front.
4. Visualize the order of label extraction and the evolving Pareto front using matplotlib.
5. Write a README explaining how ordered extraction preserves work efficiency.

**Ships as:** A Python script and visualization showing ordered label extraction and Pareto front evolution on a toy multi-objective graph.

**Stretch goal:** Add a simple parallel simulation where multiple labels are processed asynchronously but ordering is approximated, to observe effects on solution quality.

### Intermediate — Reimplementation of OPMOS Core Parallel Label Processing on Synthetic Data
*Effort: 2 weekends, ~20 hours*

You implement the core OPMOS algorithm's ordered parallel label extraction and asynchronous processing on a synthetic multi-objective graph with 3-5 objectives. You compare runtime and solution correctness against a sequential NAMOA*-style baseline implemented by you.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's main algorithmic contribution and validate its performance and correctness claims on a manageable dataset, demonstrating deep comprehension of OPMOS.

**Grounded in:** Design and implementation of OPMOS, a parallel MOS algorithm that maintains ordered label extraction and asynchronous execution to balance work efficiency and parallelism.

**Tech stack:** C++17, OpenMP, Google Test

**Data:** Synthetic multi-objective graph generated programmatically with configurable objectives and nodes, simulating the complexity of small MOS problems.

**Build it:**

1. Implement a sequential NAMOA*-style MOS solver with lexicographic ordered label extraction.
2. Implement a parallel OPMOS-style label extraction mechanism using OpenMP threads with asynchronous label processing.
3. Implement label dominance and pruning checks consistent with the paper's description.
4. Generate synthetic multi-objective graphs with 3-5 objectives and run both implementations.
5. Measure runtime speedup and verify that the Pareto-optimal solutions match exactly.
6. Document the implementation details and performance results in a README.

**Ships as:** A C++ repository with sequential and parallel MOS solvers, performance comparison, and correctness validation on synthetic data.

**Stretch goal:** Add label-aware load balancing by separating goal-node labels and regular labels to reduce load imbalance, as described in the paper.

### Advanced — Prototype Approximate Parallel MOS Algorithm to Reduce Runtime
*Effort: 3-4 weeks*

You develop a prototype approximate MOS algorithm inspired by OPMOS that trades off solution quality for runtime efficiency by relaxing strict label ordering or pruning less aggressively. You analyze how this impacts parallel speedup, work efficiency, and solution quality on synthetic multi-objective graphs.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to extend the research by exploring approximate methods and their effects on parallel MOS execution.

**Grounded in:** The algorithm maintains exact solutions but does not explore approximate methods that could further reduce runtime at the cost of solution quality.

**Tech stack:** C++17, OpenMP, Python 3.11 (for analysis and plotting)

**Data:** Synthetic multi-objective graphs with configurable size and objectives, generated programmatically.

**Build it:**

1. Review the OPMOS algorithm and identify points where approximation can be introduced (e.g., relaxed priority queue ordering, approximate dominance checks).
2. Implement an approximate parallel MOS solver that allows controlled relaxation of ordering or pruning.
3. Run experiments comparing exact OPMOS, your approximate variant, and sequential NAMOA* on synthetic graphs.
4. Measure runtime, parallel speedup, and quantify solution quality loss (e.g., number of missed Pareto-optimal paths).
5. Analyze and visualize trade-offs in a detailed report.
6. Prepare a README documenting methodology, results, and implications for future research.

**Ships as:** A C++ and Python repository demonstrating approximate parallel MOS with analysis of trade-offs between runtime and solution quality.

**Stretch goal:** Explore integration with GPU-based parallelism or distributed execution frameworks to further scale the approximate MOS solver.

_No code or datasets were released by the paper's authors; all implementations must be based on the paper's algorithmic descriptions and synthetic or manually created data._
