---
title: "441 · Parallel Batch-Dynamic Maximal Independent Set — Jeremy T. Fineman"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jeremy-t-fineman"
source_hash: "701cb870248ef560388f340e86f09930ee2c0d508c5a513db738e709763020a5"
sequence: 441
generator: "outreach-garden: managed"
---

# 441 · Parallel Batch-Dynamic Maximal Independent Set

## At a glance

- **Professor:** Jeremy T. Fineman
- **Institution:** Georgetown University
- **Paper:** [Parallel Batch-Dynamic Maximal Independent Set](https://arxiv.org/abs/2604.07515)
- **Authors:** Guy Blelloch, Andrew Brady, Jeremy Fineman, Laxman Dhulipala, Jared Lo
- **Year:** 2026

## Paper overview

This paper presents the first theoretically efficient parallel algorithm to maintain a maximal independent set (MIS) of a graph when the graph is updated in batches of edge insertions and deletions. The algorithm is work-efficient and runs in polylogarithmic parallel time, improving on previous sequential dynamic algorithms and enabling faster updates in parallel computing environments.

### Why it matters

**Research problem:** How to efficiently maintain a maximal independent set of a graph under batch updates (insertions and deletions of edges) in a parallel computing setting, ensuring both work efficiency and low parallel depth.

**Why it matters:** Maximal independent sets are fundamental graph structures with many applications. Dynamic graph algorithms that efficiently update solutions after changes are critical for real-time and large-scale graph processing. Parallel batch-dynamic algorithms can handle high update rates more effectively than sequential ones, which is important for scalability and performance in modern computing.

**Key contributions:**

- First theoretically-efficient parallel batch-dynamic algorithm for maximal independent set maintenance.
- New approach to analyze the influence set for batches of updates, overcoming limitations of prior single-update analyses.
- Algorithm that achieves O(b log^3 n) expected work and polylogarithmic depth with high probability for batch size b.
- Proof that the batch influence set size is at most the batch size in expectation, ensuring work efficiency.
- Development of a parallel algorithm that processes vertices in shells to control redundant work and bound depth.

## About the professor

**Jeremy T. Fineman** — Professor, Wagner Chair in Computer Science, Department of Computer Science, Georgetown University.

Research interests: algorithm design and analysis, focusing on parallel algorithms, scheduling, and memory-efficient or large-data algorithms.

### Research links

- [Faculty/profile page](http://people.cs.georgetown.edu/~jfineman)
- [Resolved homepage](https://cs.georgetown.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel and Dynamic Graph Algorithms
**The paper assumes:** parallel algorithms, dynamic graph algorithms, work-depth model, maximal independent set algorithms
**Already in this field?** Skip this entirely if you have studied advanced parallel algorithms for dynamic graph problems or have taken a graduate-level course covering parallel graph algorithms and dynamic data structures.

To understand the paper on Parallel Batch-Dynamic Maximal Independent Set, a solid grasp of parallel algorithms, dynamic graph algorithms, and work-depth analysis is essential. The rigorous course option offers a deep, structured university-level treatment of parallel algorithms, while the fast track provides a shorter, focused introduction to algorithm design and analysis, including relevant graph algorithm concepts. Choose the rigorous course for thorough theoretical foundations and the fast track for a quicker, practical overview that still covers key algorithmic principles.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UU MSc Course WISM459 Parallel Algorithms, Fall 2022](https://www.youtube.com/playlist?list=PLb24kxxZgm_xRtsmeCZHUpp2pLofvIlhX) — Professor Rob H. Bisseling, Utrecht University · 26 videos · 7.4h across 26 episodes

**Watch only this:** Episodes 1-4 (The Bulk Synchronous Parallel Model, Data Distributions, Simple parallel algorithm, Parallel sorting), about 1.1 hours — these cover the parallel computation model and basic parallel algorithm design crucial for understanding the paper's parallelism and work-depth analysis.

*Why it unblocks this paper:* This Utrecht University MSc course on Parallel Algorithms covers fundamental parallel computation models, parallel sorting, graph matching, and related parallel algorithmic techniques that directly underpin the paper's approach to parallel batch-dynamic maximal independent set maintenance.

*If you want all of it:* All 26 episodes, about 7.4 hours — for a comprehensive understanding of parallel algorithms including advanced topics like parallel graph matching relevant to the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

**Watch only this:** Episodes 1-5 (Algorithms and Computation, Data Structures and Dynamic Arrays, Introduction to Algorithms - Problem Session 1, Sets and Sorting, Hashing), about 5.5 hours — these cover core algorithmic concepts and data structures necessary to grasp the paper's algorithm design and analysis.

*Why it unblocks this paper:* MIT 6.006 Introduction to Algorithms provides a concise and well-structured introduction to fundamental algorithmic concepts including graph algorithms and dynamic programming, which are foundational for understanding dynamic graph problems and algorithmic analysis in the paper.

*If you want all of it:* All 32 episodes, about 35.3 hours — for a full grounding in algorithms including graph algorithms and dynamic programming.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Parallel Batch-Dynamic Maximal Independent Set, start with foundational knowledge on dynamic graph algorithms and parallel algorithms with scheduling, as these underpin the paper's approach. Then, study maximal independent set algorithms to grasp the core graph problem addressed. Finally, focus on the paper's core concept of parallel batch-dynamic MIS and the batch influence set method, prioritizing the authors' own talks and advanced research presentations for the most direct and rigorous insights.

### Dynamic Graph Algorithms lecture *(prerequisite)*
Dynamic graph algorithms provide the fundamental techniques for efficiently updating graph structures under changes, which is essential to understand the challenges and context of maintaining a maximal independent set dynamically. The selected talks are advanced university lectures and research seminars that cover state-of-the-art dynamic graph algorithm design and implementation.

*How the paper uses it:* The paper builds on dynamic graph algorithm principles to maintain MIS under batch updates.

▶ [19. Dynamic Graphs I](https://www.youtube.com/watch?v=XZLN6NxEQWo) — MIT OpenCourseWare · 1:14:44 · 12 years ago

### Parallel Algorithms and Scheduling lecture *(prerequisite)*
Parallel algorithms and scheduling theory explain how to design and analyze algorithms that run efficiently on parallel hardware, including work-depth models and task scheduling, which are critical for the paper's parallel batch processing and shell-based vertex scheduling approach.

*How the paper uses it:* The paper designs a parallel algorithm that schedules vertex processing in shells to control work and depth.

▶ [Fork-Join Parallelism & Scheduling | Chapter 26 – Introduction to Algorithms (4th)](https://www.youtube.com/watch?v=iZZ7NIYoqB4) — Last Minute Lecture · 28:50 · 1 year ago

### Maximal Independent Set algorithms seminar *(prerequisite)*
Understanding maximal independent set algorithms, especially dynamic and parallel variants, is crucial since MIS is the core graph structure maintained by the paper. The chosen talks are research-level seminars presenting recent advances in MIS algorithms with rigorous analysis.

*How the paper uses it:* The paper presents a novel parallel batch-dynamic MIS algorithm improving on prior MIS methods.

▶ [Fully Dynamic Maximal Independent Set with Polylogarithmic Update Time](https://www.youtube.com/watch?v=X_1gufMEnNA) — IEEE FOCS: Foundations of Computer Science · 11:12 · 6 years ago

### Randomized Parallel Algorithm analysis seminar *(prerequisite)*
The paper relies on random vertex orderings and probabilistic bounds for work and depth, so understanding randomized parallel algorithm analysis and models like PRAM is important. The selected videos are advanced seminars and university lectures covering these theoretical foundations.

*How the paper uses it:* The algorithm's analysis uses randomization and probabilistic combinatorial arguments to bound work and depth.

▶ [Recent Advances in Parallel Algorithms](https://www.youtube.com/watch?v=BLckiB0bH2M) — Microsoft Research · 1:26:24 · 10 years ago

### Batch Influence Set method lecture
The batch influence set is a central new concept introduced by the paper to handle multiple updates simultaneously. The selected talks by the authors and their collaborators provide in-depth coverage of batch-dynamic graph algorithms and related data structures, offering direct insight into this novel method.

*How the paper uses it:* The batch influence set concept is key to the paper's approach to efficiently processing batches of updates.

▶ [Parallel Batch-Dynamic Graph Algorithms](https://www.youtube.com/watch?v=lXFQC1qXsWc) — Simons Institute for the Theory of Computing · 41:28 · Streamed 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on parallel batch-dynamic maximal independent set (MIS) algorithms. It starts with basic graph theory and dynamic graph algorithms, then covers maximal independent set algorithms, followed by parallel algorithms and scheduling principles. Finally, it introduces the paper's core concept of batch influence sets in parallel dynamic graph algorithms, enabling a step-by-step intuitive grasp of the paper's contributions.

### Dynamic Graph Algorithms lecture *(prerequisite)*
Dynamic graph algorithms study how to efficiently update graph properties or solutions when the graph changes over time, such as when edges or vertices are added or removed. Understanding these techniques is key to grasping how the paper maintains a maximal independent set under batch updates.

*How the paper uses it:* The paper improves on previous sequential dynamic MIS algorithms by providing a parallel batch-dynamic approach.

▶ [Parallel Batch-Dynamic Graph Algorithms](https://www.youtube.com/watch?v=lXFQC1qXsWc) — Simons Institute for the Theory of Computing · 41:28 · Streamed 2 years ago

### Maximal Independent Set algorithms seminar *(prerequisite)*
Maximal independent sets are sets of vertices with no two adjacent and that cannot be extended by adding more vertices. Learning about classical MIS algorithms, especially randomized parallel ones like Luby's algorithm, builds intuition for the problem the paper addresses.

*How the paper uses it:* The paper focuses on maintaining a maximal independent set dynamically and in parallel.

▶ [Fully Dynamic Maximal Independent Set with Polylogarithmic Update Time](https://www.youtube.com/watch?v=X_1gufMEnNA) — IEEE FOCS: Foundations of Computer Science · 11:12 · 6 years ago

### Parallel Algorithms and Scheduling lecture *(prerequisite)*
Parallel algorithms use multiple processors to solve problems faster, and scheduling controls how tasks are assigned and ordered to optimize performance. Understanding these concepts helps in grasping how the paper designs a parallel algorithm that processes vertices in shells to control work and depth.

*How the paper uses it:* The paper designs a parallel algorithm that schedules vertex processing in shells to achieve work efficiency and polylogarithmic depth.

▶ [Fork-Join Parallelism & Scheduling | Chapter 26 – Introduction to Algorithms (4th)](https://www.youtube.com/watch?v=iZZ7NIYoqB4) — Last Minute Lecture · 28:50 · 1 year ago

## Already in your library

- [Parallelism in Dynamic Graph Algorithms](https://www.youtube.com/watch?v=lGIOTx2gTxI) — also for: Parallel 𝒌-Core Decomposition: Theory and Practice (Yizong Cheng)
- [Developments in Dynamic Graph Algorithms](https://www.youtube.com/watch?v=oZGSdfyU_YU) — also for: Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time (Thatchaphol Saranurak)
- [What is DAG?](https://www.youtube.com/watch?v=1Yh5S-S6wsI) — also for: Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf (Jian Huang)
- [Maximum Independent Set in Trees (Linear Time Algorithm)](https://www.youtube.com/watch?v=-LN5-GvV-bQ) — also for: All-k-Isolation in Trees (Wayne Goddard)
- [Lecture 11: Parallel Algorithms](https://www.youtube.com/watch?v=mETKQCqrpBM) — also for: Efficient Parallel Algorithms for Hypergraph Matching (Nodari Sitchinava)
- [Parallel algorithm lecture 5 : PRAM Models](https://www.youtube.com/watch?v=wnPEEzvJ1d4) — also for: Parallel RAM from Cyclic Circuits (David Heath)
- [Lecture 11: Graphs and Coloring](https://www.youtube.com/watch?v=cB0UijRfOCQ) — also for: All-k-Isolation in Trees (Wayne Goddard)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Parallel Batch-Dynamic Maximal Independent Set" by Blelloch et al. The beginner project focuses on implementing and visualizing the core concept of influence sets for single updates in a small graph, using tools you already know. The intermediate project involves reimplementing the paper's batch influence set algorithm for dynamic MIS maintenance on synthetic graphs, comparing work and depth metrics against a naive baseline. The advanced project extends the algorithm to explore adaptive influence set refinement strategies to reduce redundant work, addressing a stated limitation and opening a path for research discussion.

### Beginner — Visualizing Influence Sets for Single Edge Updates in MIS
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that simulates a maximal independent set on a static small graph and shows how a single edge insertion or deletion influences the MIS vertices. The tool highlights the influence set and updates the MIS accordingly, illustrating the concept of influence sets from the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the influence set concept and how local changes propagate in MIS maintenance, a fundamental building block of the paper's batch influence set analysis.

**Grounded in:** The paper's concept of influence sets for updates and their role in MIS maintenance, as described in the approach and key contributions.

**Tech stack:** JavaScript, React, D3.js

**Data:** A small synthetic graph (10-20 nodes) created within the app to illustrate updates and influence sets.

**Build it:**

1. Implement a static maximal independent set algorithm on a small graph.
2. Add functionality to simulate a single edge insertion or deletion.
3. Compute and highlight the influence set of vertices affected by the update.
4. Update the MIS accordingly and visualize the before/after states.
5. Add UI controls to trigger different single-edge updates and observe influence sets.

**Ships as:** A GitHub repo with a React+D3 interactive visualization and README explaining influence sets and their role in MIS updates.

**Stretch goal:** Extend the visualization to show influence sets for a small batch of updates and compare with the union of individual influence sets.

### Intermediate — Reimplementation of Parallel Batch Influence Set Algorithm for Dynamic MIS
*Effort: 2 weekends, ~20 hours*

You implement the core batch influence set algorithm from the paper to maintain a maximal independent set under batches of edge insertions and deletions on synthetic graphs. You measure expected work and parallel depth, comparing against a simple baseline that processes updates sequentially without batching.

**Why it shows you understood the paper:** This project shows you can translate the paper's theoretical algorithm into a working implementation, reproduce key performance metrics, and understand the batch influence set's impact on work and depth.

**Grounded in:** The algorithm achieving O(b log^3 n) expected work and polylogarithmic depth for batch size b, and the batch influence set analysis.

**Tech stack:** C++, OpenMP or Threading Building Blocks (TBB) for parallelism

**Data:** Synthetic random graphs generated at runtime with configurable size and batch update sequences simulating edge insertions and deletions.

**Build it:**

1. Implement a static MIS algorithm as a baseline.
2. Implement the batch influence set concept and the parallel batch-dynamic MIS update algorithm as described.
3. Generate synthetic graphs and batches of updates for testing.
4. Measure and log expected work and parallel depth for batch updates.
5. Compare results against a naive sequential update baseline.
6. Document the implementation and experimental results.

**Ships as:** A GitHub repo with C++ code implementing the batch-dynamic MIS algorithm, scripts to generate test graphs and batches, and a report comparing performance metrics.

**Stretch goal:** Add visualization or logging to analyze the actual size of influence sets versus batch size to empirically validate the paper's bounds.

### Advanced — Adaptive Influence Set Refinement for Practical Batch-Dynamic MIS
*Effort: 3-4 weeks*

You extend the batch influence set algorithm by implementing an adaptive strategy that dynamically refines the influence set during execution to reduce redundant work, aiming to improve practical performance. You evaluate this approach on synthetic graphs and compare work and depth metrics against the original algorithm.

**Why it shows you understood the paper:** This project tackles a stated limitation of the paper—the conservative overestimation of influence sets—by proposing and implementing a concrete adaptive refinement technique, demonstrating deep comprehension and research potential.

**Grounded in:** The paper's limitation about conservative influence set analysis and the thoughtful question about adaptive strategies to reduce redundant work.

**Tech stack:** C++, OpenMP or TBB for parallelism

**Data:** Synthetic graphs with batch updates generated at runtime, similar to the intermediate project.

**Build it:**

1. Reimplement the batch influence set algorithm as baseline (can reuse intermediate project code).
2. Design an adaptive refinement method that prunes or dynamically updates the influence set during processing.
3. Integrate the adaptive method into the batch-dynamic MIS update algorithm.
4. Run experiments on synthetic graphs comparing work, depth, and actual influenced vertices against the baseline.
5. Analyze and document the trade-offs and practical improvements.
6. Prepare a detailed README discussing the implementation, results, and relation to the paper's limitations.

**Ships as:** A GitHub repo with the extended batch-dynamic MIS implementation, experimental evaluation, and a comprehensive report on adaptive influence set refinement.

**Stretch goal:** Explore extending the adaptive approach to handle adaptive adversaries or deterministic vertex orderings as future work.
