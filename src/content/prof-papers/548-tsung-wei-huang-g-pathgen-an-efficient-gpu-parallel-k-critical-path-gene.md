---
title: "548 · G-PathGen: An Efficient GPU-Parallel k-Critical Path Generation Algorithm — Tsung-Wei Huang"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tsung-wei-huang"
source_hash: "84a0afd5db054a3ec8977bef56621c8d6737a62debad0678a10754282e8fbe04"
sequence: 548
generator: "outreach-garden: managed"
---

# 548 · G-PathGen: An Efficient GPU-Parallel k-Critical Path Generation Algorithm

## At a glance

- **Professor:** Tsung-Wei Huang
- **Institution:** University of Wisconsin - Madison
- **Paper:** [G-PathGen: An Efficient GPU-Parallel k-Critical Path Generation Algorithm](https://doi.org/10.1145/3797905.3800511)
- **Authors:** Che Chang, Yi-Hua Chung, Cheng-Hsiang Chiu, Wan-Luan Lee, Boyang Zhang, Ulf Schlichtmann, Ing-Chao Lin, Xiangyao Yu, Tsung-Wei Huang
- **Year:** 2026

## Paper overview

This paper presents G-PathGen, a new GPU-parallel algorithm designed to efficiently generate exact k-critical paths in circuit timing analysis. It overcomes limitations of previous CPU and GPU methods by using a novel data structure, dynamic scheduling, and GPU-optimized kernels to speed up critical path generation while maintaining exact accuracy.

### Why it matters

**Research problem:** Critical path generation (CPG) is a key step in circuit timing analysis (CTA) but becomes a runtime bottleneck as circuit designs grow in complexity. Existing CPU-based and GPU-accelerated algorithms either run too slowly or produce inexact results due to pruning heuristics and costly CPU-GPU data transfers.

**Why it matters:** Efficient and exact critical path generation is essential for timing-driven optimization and sign-off in large-scale integrated circuit design. Slow or inaccurate CPG can delay design cycles and reduce the quality of timing analysis, impacting chip performance and reliability.

**Key contributions:**

- Design of a GPU-efficient data structure and criticality-aware parallel path generation algorithm.
- Development of a dynamic stepping strategy to control generated path counts per iteration.
- Implementation of GPU kernel algorithms including graph reordering and warp-based exploration to improve efficiency.
- Proof of exactness of the k-critical path generation without premature pruning.
- Open-source release plan to benefit CTA and parallel computing communities.

## About the professor

**Tsung-Wei Huang** — Associate Professor, Department of ECE and CS (affiliate), University of Wisconsin - Madison.

Research interests: heterogeneous computing, computer-aided design, quantum computing, and machine learning systems

### Research links

- [Faculty/profile page](https://tsung-wei-huang.github.io/team)
- [Professor website](https://tsung-wei-huang.github.io)
- [Resolved homepage](https://tsung-wei-huang.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=ibeirYQAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0001-9768-3378)
- [GitHub](https://github.com/tsung-wei-huang)
- [LinkedIn](https://www.linkedin.com/in/tsung-wei-huang-44bba087/)
- [Social profile](https://x.com/twh760812)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Algorithms and GPU Parallel Computing
**The paper assumes:** graph theory, critical path analysis, GPU parallel programming, parallel graph algorithms
**Already in this field?** Skip this entirely if you already have solid knowledge of graph algorithms and GPU parallel computing concepts.

To understand the GPU-parallel k-critical path generation algorithm in G-PathGen, foundational knowledge in graph algorithms and GPU parallel computing is essential. The rigorous course option provides a deep dive into parallel computing concepts, GPU architecture, and programming models, while the fast track offers concise, focused explanations of key GPU concepts relevant to this paper's methods. Choose the rigorous course for comprehensive understanding or the fast track for a quick, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 I Parallel Computing I 2023 I Kayvon Fatahalian and Kunle Olukotun](https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp) — Stanford Online · 19 videos · 24.3h across 19 episodes

**Watch only this:** Lectures 1-8, about 10 hours — covering parallelism motivation, multi-core architectures, parallel programming basics, work distribution, locality, GPU architecture, and data-parallel thinking.

*Why it unblocks this paper:* Stanford CS149 covers parallel computing fundamentals, GPU architecture, CUDA programming, and performance optimization techniques directly relevant to G-PathGen's GPU-efficient data structures and kernel optimizations.

*If you want all of it:* 24.3 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Case study on GPU concepts](https://www.youtube.com/playlist?list=PLv3cGmFl9DZafEydaUdKrM0aNp07yqPKW) — Parallel Routines · 10 videos · 0.8h across 10 episodes

**Watch only this:** Episodes 1-5, about 20 minutes — focusing on parallel prefix sums, shared memory, GPU partitioning, data movement costs, and dynamic GPU work distribution.

*Why it unblocks this paper:* This short series from Parallel Routines visually explains essential GPU concepts such as parallel prefix sums, memory coalescing, warp execution, and dynamic work distribution, which underpin the GPU kernel optimizations and scheduling strategies in G-PathGen.

*If you want all of it:* 0.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the G-PathGen paper, start by building foundational knowledge on GPU parallel graph algorithms, dynamic scheduling algorithms in parallel computing, GPU kernel optimization techniques, and critical path generation in circuit timing analysis. These prerequisites provide the necessary background on GPU architecture, scheduling strategies, and the problem domain. Finally, focus on the core concept of exact k-critical path generation algorithms, including the authors' own talk if available, to grasp the novel contributions and optimizations introduced by G-PathGen.

### GPU parallel graph algorithms *(prerequisite)*
Understanding GPU parallelism for graph problems is essential to grasp how G-PathGen achieves its acceleration. This section covers advanced algorithmic techniques for GPUs, including graph processing, parallel execution models, and optimizations that enable efficient large-scale graph computations on GPUs.

*How the paper uses it:* G-PathGen leverages GPU-efficient data structures and warp-based parallel path exploration to accelerate critical path generation on large graphs.

▶ [Compiler Optimizations for Graph Algorithms on GPUs](https://www.youtube.com/watch?v=6hCGklNphGg) — Microsoft Research · 56:59 · 10 years ago

### Dynamic scheduling algorithms parallel computing *(prerequisite)*
Dynamic scheduling is key to balancing workload and prioritizing tasks in parallel computing environments. This section explains dynamic parallelism and scheduling strategies that inform the dual-queue scheduling and dynamic step size adjustment used in G-PathGen.

*How the paper uses it:* G-PathGen uses a dual-queue scheduling algorithm and dynamic step size adjustment to prioritize high-criticality paths and balance GPU utilization.

▶ [HetSys Course: Lecture 14: Dynamic Parallelism (Spring 2023)](https://www.youtube.com/watch?v=RCjJ-jckyig) — Onur Mutlu Lectures · 15:23 · 3 years ago

### GPU kernel optimization techniques *(prerequisite)*
GPU kernel optimizations such as memory access patterns, graph reordering, and warp-based execution are crucial for maximizing performance. This section covers practical and theoretical aspects of writing and optimizing GPU kernels for graph algorithms.

*How the paper uses it:* G-PathGen implements GPU kernel optimizations including graph reordering for data locality and warp-based path exploration to improve efficiency.

▶ [AstroGPU CUDA Optimizations Part I - Mark Harris](https://www.youtube.com/watch?v=hOi3NWOPVR8) — Institute for Advanced Study · 1:16:47 · 9 years ago

### Critical path generation circuit timing *(prerequisite)*
Critical path generation is a fundamental concept in circuit timing analysis, identifying the longest delay paths that determine circuit speed. This section provides a rigorous understanding of the critical path method and its relevance to timing-driven optimization.

*How the paper uses it:* G-PathGen addresses the critical path generation problem in circuit timing analysis by generating exact k-critical paths efficiently.

▶ [W12_L7: Cirtical path analysis | clock timing, delay, setup time, frequency limit](https://www.youtube.com/watch?v=AxFLVOBLyc0) — IIT Madras - BS in Electronic Systems · 21:36 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand G-PathGen, start by learning the basics of critical path generation in circuit timing analysis, which is the problem domain the paper addresses. Next, build intuition on GPU parallel graph algorithms and dynamic scheduling techniques, which underpin the paper's acceleration and efficiency strategies. Finally, explore GPU kernel optimization methods that enable the paper's high-performance implementation.

### Critical path generation circuit timing *(prerequisite)*
Critical path generation identifies the longest paths in a circuit or project that determine overall timing or duration. Understanding this concept helps grasp why exact and efficient extraction of these paths is essential for timing analysis and optimization in circuits.

*How the paper uses it:* The paper focuses on generating exact k-critical paths in circuit timing analysis, so understanding critical path basics is foundational.

▶ [PERT & CPM | Critical Path & Project Duration by GP Sir](https://www.youtube.com/watch?v=x5Pa7Dyl3pY) — Dr.Gajendra Purohit · 31:17 · 3 years ago

### GPU parallel graph algorithms *(prerequisite)*
GPU parallel graph algorithms leverage the massive parallelism of GPUs to accelerate computations on graph structures, such as path finding and traversal. Learning these techniques helps understand how G-PathGen achieves speedups over CPU methods.

*How the paper uses it:* G-PathGen uses GPU-parallel graph algorithms to efficiently generate critical paths in large circuit graphs.

▶ [Compiler Optimizations for Graph Algorithms on GPUs](https://www.youtube.com/watch?v=6hCGklNphGg) — Microsoft Research · 56:59 · 10 years ago

### Dynamic scheduling algorithms parallel computing *(prerequisite)*
Dynamic scheduling dynamically assigns computational tasks to processing units to balance load and improve efficiency. This concept is key to understanding how G-PathGen prioritizes high-criticality paths and adjusts workload dynamically on the GPU.

*How the paper uses it:* The paper introduces a dual-queue dynamic scheduling algorithm and dynamic step size adjustment to optimize GPU utilization.

▶ [HetSys Course: Lecture 14: Dynamic Parallelism (Spring 2023)](https://www.youtube.com/watch?v=RCjJ-jckyig) — Onur Mutlu Lectures · 15:23 · 3 years ago

### GPU kernel optimization techniques *(prerequisite)*
GPU kernel optimizations improve the performance of GPU programs by enhancing memory access patterns, thread utilization, and computation efficiency. These techniques are crucial for implementing fast graph algorithms like those in G-PathGen.

*How the paper uses it:* G-PathGen applies GPU kernel optimizations such as graph reordering and warp-based path exploration to boost efficiency.

▶ [AstroGPU CUDA Optimizations Part I - Mark Harris](https://www.youtube.com/watch?v=hOi3NWOPVR8) — Institute for Advanced Study · 1:16:47 · 9 years ago

## Already in your library

- [Stanford CS149 I Parallel Computing I 2023 I Lecture 7 - GPU ...](https://www.youtube.com/watch?v=qQTDF0CBoxE) — also for: 𝑓 VDB: A Deep-Learning Framework for Sparse, Large-Scale, and High-Performance Spatial Intelligence (Eftychios Sifakis)
- [Introduction to parallel graph algorithms](https://www.youtube.com/watch?v=IpC1WpYIJ3I) — also for: OPMOS: Ordered Parallel Algorithm for Multi-Objective Shortest-Paths (Omer Khan)
- [Fork-Join Parallelism & Scheduling | Chapter 26 – Introduction to Algorithms (4th)](https://www.youtube.com/watch?v=iZZ7NIYoqB4) — also for: Parallel Batch-Dynamic Maximal Independent Set (Jeremy T. Fineman)
- [HetSys Course: Lecture 13: Dynamic Parallelism (Spring 2022)](https://www.youtube.com/watch?v=X74BLPO8tT4) — also for: GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem (Apan Qasem)
- [Making GPUs Actually Fast: A Deep Dive into Training Performance](https://www.youtube.com/watch?v=pHqcHzxx6I8) — also for: RPU – A Reasoning Processing Unit (David Brooks)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of G-PathGen's GPU-parallel exact k-critical path generation algorithm. The beginner project focuses on implementing and visualizing the dual-queue scheduling concept on a small DAG using familiar languages. The intermediate project involves reimplementing the core GPU-parallel path generation algorithm on a smaller DAG dataset, comparing runtime and accuracy against a simple CPU baseline. The advanced project extends the method by exploring multi-GPU dynamic step size adjustment, addressing a future direction stated in the paper.

### Beginner — Dual-Queue Scheduling Simulation for Critical Path Expansion
*Effort: a weekend, ~8 hours*

You build a CPU-based simulation of the dual-queue scheduling algorithm described in G-PathGen. The program will manage two queues for high- and low-criticality paths and dynamically prioritize path expansions accordingly on a small directed acyclic graph (DAG). You will visualize the scheduling order and path criticality scores to illustrate the prioritization mechanism.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core scheduling innovation, the dual-queue mechanism, by faithfully reproducing its logic and showing how it prioritizes path expansions to improve efficiency.

**Grounded in:** We divide paths into low- and high-criticality groups and prioritize the expansion of high-criticality paths... We refer to this design as dual-queue (DQ) scheduling.

**Tech stack:** Python 3.11, matplotlib, networkx

**Data:** A small synthetic DAG created programmatically to simulate circuit timing graphs.

**Build it:**

1. Implement a small DAG using networkx with weighted edges representing path costs.
2. Create two queues to hold paths: one for high-criticality and one for low-criticality paths.
3. Implement logic to expand paths from the high-criticality queue first, then the low-criticality queue.
4. Track and visualize the order of path expansions and their criticality scores using matplotlib.
5. Write a README explaining the dual-queue scheduling concept and how your simulation reflects it.

**Ships as:** A Python script and visualization showing dual-queue scheduling behavior on a small DAG, with a README explaining the mechanism.

**Stretch goal:** Add dynamic adjustment of the threshold that separates high- and low-criticality queues and visualize its effect on scheduling.

### Intermediate — GPU-Parallel Exact k-Critical Path Generation on Small DAGs
*Effort: 2 weekends, ~20 hours*

You reimplement the core GPU-parallel k-critical path generation algorithm inspired by G-PathGen, including a simplified GPU-efficient data structure and dynamic scheduling on a smaller DAG dataset. You compare runtime and exactness of generated paths against a CPU baseline that enumerates paths exhaustively.

**Why it shows you understood the paper:** This project shows you can translate the paper's main algorithmic contributions into a working GPU implementation, verify exactness, and measure performance gains, demonstrating deep comprehension of the core method.

**Grounded in:** G-PathGen uses a GPU-efficient data structure to store massive numbers of paths and a dual-queue scheduling algorithm that prioritizes high-criticality paths while deferring less critical ones.

**Tech stack:** Python 3.11, PyCUDA or CuPy, networkx, NumPy

**Data:** A small DAG synthesized to mimic circuit timing graphs, constructed programmatically using networkx.

**Build it:**

1. Implement a small DAG graph structure using networkx with weighted edges.
2. Develop a CPU baseline that enumerates all k-critical paths exhaustively and records their costs.
3. Implement a GPU kernel using PyCUDA or CuPy to perform parallel path expansions with a simplified GPU-efficient data structure.
4. Incorporate dual-queue scheduling logic on GPU to prioritize high-criticality paths.
5. Run experiments comparing runtime and path cost exactness between CPU baseline and GPU implementation.
6. Document results and provide analysis in a README.

**Ships as:** A GPU-accelerated k-critical path generator on small DAGs with comparison against CPU baseline, including performance and accuracy metrics.

**Stretch goal:** Add dynamic step size adjustment to control the number of paths generated per iteration and analyze its impact on runtime.

### Advanced — Multi-GPU Dynamic Step Size Adjustment for Scalable k-Critical Path Generation
*Effort: 3+ weeks*

You extend the G-PathGen algorithm by designing and implementing a multi-GPU version that adapts the dynamic step size adjustment strategy to maintain work efficiency and scalability across GPUs. You evaluate your extension on larger synthetic DAGs and analyze how the step size tuning balances parallelism and redundant work in a distributed GPU environment.

**Why it shows you understood the paper:** This project tackles a future direction proposed in the paper, demonstrating your ability to innovate beyond the original work by addressing scalability challenges and adapting dynamic scheduling to multi-GPU systems.

**Grounded in:** Extension of G-PathGen to multi-GPU or distributed GPU environments for even larger graphs.

**Tech stack:** Python 3.11, PyCUDA or CuPy, MPI for Python (mpi4py), networkx, NumPy

**Data:** Synthetic large DAGs generated programmatically to simulate industrial circuit timing graphs.

**Build it:**

1. Design a multi-GPU architecture for k-critical path generation with workload partitioning.
2. Implement communication and synchronization between GPUs using mpi4py or similar.
3. Adapt the dynamic step size adjustment strategy to coordinate across GPUs to balance load and minimize redundant path generation.
4. Generate large synthetic DAGs to test scalability.
5. Benchmark runtime, GPU utilization, and redundant work metrics compared to a single-GPU implementation.
6. Write detailed documentation explaining design decisions, challenges, and evaluation results.

**Ships as:** A multi-GPU k-critical path generation system with dynamic step size coordination, scalability evaluation, and comprehensive documentation.

**Stretch goal:** Integrate graph reordering optimizations to improve data locality in the multi-GPU setting and measure performance impact.
