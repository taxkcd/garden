---
title: "443 · GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem — Apan Qasem"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-apan-qasem"
source_hash: "cc079ce28efee316be7ba63002332d740109ca175a63ebb2a80857df0f96916e"
sequence: 443
generator: "outreach-garden: managed"
---

# 443 · GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem

## At a glance

- **Professor:** Apan Qasem
- **Institution:** Texas State University
- **Paper:** [GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem](https://arxiv.org/abs/2307.11248v1)
- **Authors:** Clara Novoa, Apan Qasem
- **Year:** 2023

## Paper overview

This paper presents GPU-accelerated implementations of two heuristic algorithms, 2opt and tabu search, to solve the Quadratic Assignment Problem (QAP), a challenging combinatorial optimization problem. By leveraging GPU hardware features such as dynamic parallelism and shared memory, the authors achieve significant speedups and improved solution quality compared to previous methods.

### Why it matters

**Research problem:** The Quadratic Assignment Problem (QAP) is an NP-hard combinatorial optimization problem with many practical applications, but it is computationally challenging to solve exactly for large instances. Efficient heuristic algorithms that can leverage modern high-performance computing platforms like GPUs are needed to find high-quality solutions quickly.

**Why it matters:** QAP has wide applicability in logistics, manufacturing, facility layout design, economic modeling, and processor/memory layout optimization. Solving QAP efficiently impacts these fields by enabling better designs and resource allocations. The problem's complexity makes heuristic and parallel solutions essential for real-world use.

**Key contributions:**

- Two new efficient parallel GPU implementations for solving QAP using 2opt and tabu search algorithms.
- Novel use of CUDA dynamic parallelism to adaptively launch threads for neighborhood evaluation in tabu search.
- Code optimizations including shared memory usage and autotuning of thread/block configurations.
- A parameterized tabu search implementation exposing algorithmic parameters for tuning and performance insight.
- Extensive experimental evaluation demonstrating significant speedups and improved accuracy over prior GPU implementations.

## About the professor

**Apan Qasem** — Professor, Department of Computer Science, Texas State University.

Research interests: developing intelligent compiler techniques for improving programmer productivity, application performance and energy efficiency

### Research links

- [Faculty/profile page](http://www.cs.txstate.edu/~aq10)
- [Resolved homepage](https://userweb.cs.txstate.edu/~aq10/index.php)
- [Lab website](http://compilers.cs.txstate.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Combinatorial Optimization
**The paper assumes:** combinatorial optimization, heuristic algorithms, metaheuristics, neighborhood search methods
**Already in this field?** Skip this entirely if you already understand combinatorial optimization concepts and heuristic/metaheuristic solution methods for NP-hard problems.

To understand the Quadratic Assignment Problem (QAP) and heuristic algorithms like 2opt and tabu search used in this paper, a solid grasp of combinatorial optimization fundamentals is essential. The rigorous course provides a deep, structured university-level foundation, while the fast track offers a concise, focused introduction to the key concepts for quicker comprehension. Choose the rigorous course for thorough mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Combinatorial Optimisation (University of Warwick MA252)](https://www.youtube.com/playlist?list=PLtxJg53s2o0PqIAEphtjIaqXTouaWYR0j) — Jonathan Noel · 26 videos · 15.1h across 26 episodes

**Watch only this:** Lectures 9-12 (Complexity Theory, Reductions, SAT and k-SAT, NP-completeness reductions), Lectures 19-21 (Introduction to Vertex Colouring, Graph colouring is hard, first fit algorithm, Lower bounds on chromatic number, perfect graphs), and Lectures 23-26 (Introduction to Integer Linear Programming, Totally unimodular matrices and polytopes, Totally Unimodular Matrices from Bipartite Graphs, The matching polytope) — about 7 hours total. These cover complexity theory, NP-hardness, and optimization formulations essential for QAP heuristics.

*Why it unblocks this paper:* This University of Warwick course on Combinatorial Optimisation covers foundational topics such as NP-completeness, approximation algorithms, and integer linear programming, directly relevant to understanding the complexity and heuristic approaches to QAP.

*If you want all of it:* 15.1 hours across all 26 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Combinatorial Optimization](https://www.youtube.com/playlist?list=PLzneuU2STpz2Tdg8jeWnOvgPJrjI5MrbM) — Ashish Sharma · 9 videos · 13.8h across 9 episodes

**Watch only this:** Episodes 1-3 (Combinatorial Optimization Part 1 & 2, Basic Graph Algorithms Part 1) and Episodes 6-9 (NP Completeness, Approximation, Randomization Part 1 & 2, Approximation Algorithms) — about 8 hours total. These episodes cover the core concepts of combinatorial optimization and complexity relevant to the paper.

*Why it unblocks this paper:* This concise playlist by Ashish Sharma provides a focused introduction to combinatorial optimization, including NP-completeness and approximation algorithms, which are crucial to grasping heuristic methods for QAP.

*If you want all of it:* 13.8 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on GPU-accelerated parallel solutions to the Quadratic Assignment Problem (QAP), start with foundational knowledge of the QAP itself and heuristic/metaheuristic optimization methods such as 2opt and tabu search. Then, build GPU programming expertise focusing on CUDA dynamic parallelism and shared memory optimizations, which are critical to the paper's approach. Finally, study the authors' own talk or closely related advanced talks on GPU-based QAP solutions to see the integration of these concepts in their research.

### Quadratic Assignment Problem lecture *(prerequisite)*
Begin with a rigorous understanding of the Quadratic Assignment Problem, its NP-hard nature, and its mathematical formulation. This foundation is essential to appreciate the complexity and challenges addressed by the paper's heuristic algorithms.

*How the paper uses it:* The paper targets the QAP as the core combinatorial optimization problem requiring efficient heuristic solutions.

▶ [Yuehaw Khoo -- Clique-Based Semidefinite Relaxation of the Quadratic Assignment Problem](https://www.youtube.com/watch?v=ZlLgvmGCcv8) — DIMACS CCICADA · 39:13 · 7 years ago

### Heuristic and metaheuristic optimization seminar *(prerequisite)*
Next, study advanced heuristic and metaheuristic optimization techniques, focusing on improvement heuristics and metaheuristics like tabu search and 2opt. This knowledge is crucial to understand the algorithms the paper accelerates on GPUs.

*How the paper uses it:* The paper implements GPU-accelerated versions of the 2opt heuristic and tabu search metaheuristic for solving QAP.

▶ [Heuristics to solve optimization problems by IIMA Prof. Diptesh Ghosh](https://www.youtube.com/watch?v=TXSKzLxLERI) — INDIAN INSTITUTE OF MANAGEMENT AHMEDABAD - IIMA · 1:56:06 · 5 years ago

### CUDA dynamic parallelism lecture *(prerequisite)*
Gain detailed knowledge of CUDA dynamic parallelism, a key GPU programming technique that allows launching child threads from GPU kernels. This enables scalable neighborhood exploration in the paper's tabu search implementation.

*How the paper uses it:* The authors leverage CUDA dynamic parallelism to adaptively launch child threads for neighborhood evaluation in tabu search.

▶ [HetSys Course: Lecture 13: Dynamic Parallelism (Spring 2022)](https://www.youtube.com/watch?v=X74BLPO8tT4) — Onur Mutlu Lectures · 1:08:47 · 4 years ago

### GPU shared memory optimization talk *(prerequisite)*
Learn about GPU memory hierarchies and shared memory optimizations to understand how to reduce latency and improve performance in GPU kernels. This is vital for grasping the paper's memory optimization strategies.

*How the paper uses it:* Shared memory optimizations in the paper reduce global memory accesses, significantly improving 2opt performance.

▶ [CUDA Part F: Kernel Optimizations: Shared Memory Accesses; Peter Messmer (NVIDIA)](https://www.youtube.com/watch?v=qOCUQoF_-MM) — cscsch · 21:56 · 12 years ago

### Paper authors GPU QAP talk *(the paper's own talk)*
Finally, study advanced talks directly related to GPU-accelerated QAP solutions, preferably by the paper's authors or closely related research groups. This provides direct insight into the implementation details, optimizations, and experimental results.

*How the paper uses it:* The authors' own or closely related talks provide the most direct and detailed explanation of their GPU-accelerated heuristic implementations for QAP.

▶ [Parallel Algorithms for Solving Large Assignment Problems -- Ketan Date](https://www.youtube.com/watch?v=pyZBTIDSeH4) — NCSAatIllinois · 19:33 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the Quadratic Assignment Problem (QAP) and heuristic/metaheuristic optimization methods like 2opt and tabu search, foundational to the paper's approach. Next, it covers GPU programming concepts critical for the paper's innovations: CUDA dynamic parallelism and shared memory optimization. Finally, it presents a focused seminar on GPU-accelerated heuristic algorithms combining these ideas to solve QAP efficiently.

### Quadratic Assignment Problem lecture *(prerequisite)*
Learn what the Quadratic Assignment Problem (QAP) is: a challenging combinatorial optimization problem involving assigning facilities to locations to minimize cost. Understanding QAP's structure and complexity is essential to grasp why heuristic and GPU-accelerated solutions are needed.

*How the paper uses it:* The paper targets solving QAP efficiently using GPU-accelerated heuristics.

▶ [Quadratic assignment problem](https://www.youtube.com/watch?v=EMg-yHOMI2g) — The Algorhythmic Nerds · 8:03 · 8 months ago

### Heuristic and metaheuristic optimization seminar *(prerequisite)*
Understand heuristic and metaheuristic methods like 2opt and tabu search, which iteratively improve solutions to complex optimization problems by exploring neighborhoods and avoiding local traps. These methods provide practical ways to tackle NP-hard problems like QAP.

*How the paper uses it:* The paper implements GPU-accelerated versions of 2opt and tabu search heuristics for QAP.

▶ [Lec-15: What is Heuristic in AI | Why we use Heuristic | How to Calculate Heuristic | Must Watch](https://www.youtube.com/watch?v=5F9YzkpnaRw) — Gate Smashers · 12:57 · 6 years ago

### CUDA dynamic parallelism lecture *(prerequisite)*
Learn about CUDA dynamic parallelism, a GPU programming feature allowing kernels to launch other kernels, enabling scalable and adaptive parallelism. This technique is key to efficiently exploring large neighborhoods in tabu search on GPUs.

*How the paper uses it:* The paper uses CUDA dynamic parallelism to launch child threads for neighborhood exploration in tabu search.

▶ [Lecture 22 - Dynamic Parallelism](https://www.youtube.com/watch?v=NP0F4R_TVUU) — Izzat El Hajj · 1:01:48 · 3 years ago

### GPU shared memory optimization talk *(prerequisite)*
Discover how GPU shared memory, a fast on-chip memory, can be used to reduce slow global memory accesses and improve kernel performance. Optimizing memory usage is critical for high-performance GPU implementations of heuristics.

*How the paper uses it:* The paper optimizes 2opt by using shared memory to reduce global memory accesses and improve speed.

▶ [Learning CUDA 10 Programming : Introduction to Shared Memory | packtpub.com](https://www.youtube.com/watch?v=_CaiES6HsMg) — Packt · 7:53 · 6 years ago

### GPU-accelerated heuristic algorithms seminar
Explore how heuristic and metaheuristic algorithms can be effectively implemented and optimized on GPUs, combining parallelism and algorithmic strategies to solve complex problems faster. This ties together the previous concepts into practical GPU-accelerated solutions.

*How the paper uses it:* The paper presents novel GPU-accelerated implementations of 2opt and tabu search heuristics for QAP.

▶ [318 - Introduction to Metaheuristic Algorithms​](https://www.youtube.com/watch?v=dNNZxV0RQsw) — DigitalSreeni · 13:39 · 2 years ago

## Already in your library

- [HetSys Course: Lecture 14: Dynamic Parallelism (Fall 2022)](https://www.youtube.com/watch?v=-l5_qgQHZQc) — also for: Efficient Parallel Algorithms for Hypergraph Matching (Nodari Sitchinava)
- [HetSys Course: Lecture 4: GPU Memory Hierarchy (Spring 2023)](https://www.youtube.com/watch?v=ZQKMZIP3Fzg) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)
- [An Introduction to Heuristic Algorithms](https://www.youtube.com/watch?v=w3O3C178M2E) — also for: Heuristic shortest hyperpaths in cell signaling hypergraphs (John D. Kececioglu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of GPU-accelerated heuristic solutions to the Quadratic Assignment Problem (QAP) as presented in the paper. The beginner project focuses on reproducing a core heuristic (2opt) in a CPU environment to grasp the algorithmic basics. The intermediate project involves implementing a GPU-accelerated 2opt heuristic with CUDA to replicate the paper's speedup claims, introducing you to GPU programming and dynamic parallelism concepts. The advanced project extends the tabu search heuristic by incorporating a long-term memory feature, addressing one of the paper's stated limitations and exploring algorithmic improvements on GPU architectures.

### Beginner — CPU Implementation of 2opt Heuristic for QAP
*Effort: a weekend, ~8 hours*

You build a CPU-based implementation of the 2opt heuristic algorithm for the Quadratic Assignment Problem using C++ or Python. The project includes a simple command-line interface to input small QAP instances and outputs solution quality and runtime metrics.

**Why it shows you understood the paper:** This project demonstrates your grasp of the 2opt heuristic's core mechanism and its trade-offs in solution quality versus runtime, foundational to the paper's GPU-accelerated approach.

**Grounded in:** 2opt heuristic, while faster, is less accurate than tabu search and prior methods.

**Tech stack:** C++17 or Python 3.11

**Data:** Use small QAP instances from publicly available QAPLIB datasets or synthesize small symmetric flow and distance matrices as substitutes.

**Build it:**

1. Implement the 2opt heuristic algorithm for QAP on CPU, including neighborhood exploration and swap evaluation.
2. Create or load small QAP problem instances (size <= 20) for testing.
3. Measure and report solution quality as percentage deviation from known best solutions and runtime.
4. Write a README explaining the algorithm, usage instructions, and results.

**Ships as:** A GitHub repository with source code, example QAP inputs, and a README showing solution quality and runtime metrics for small QAP instances.

**Stretch goal:** Add a simple visualization of solution improvement over iterations.

### Intermediate — GPU-Accelerated 2opt Heuristic for QAP with CUDA
*Effort: 2 weekends, ~20 hours*

You implement a GPU-accelerated version of the 2opt heuristic for QAP using CUDA, leveraging shared memory optimizations and parallel neighborhood evaluation as described in the paper. You compare your implementation's runtime and solution quality against your CPU baseline.

**Why it shows you understood the paper:** This project shows you can translate the paper's core GPU acceleration techniques, including shared memory use and parallel neighborhood exploration, into working code and reproduce key speedup and accuracy trade-offs.

**Grounded in:** 2opt achieves on average 33.28x speedup over previous GPU implementation and shared memory optimizations improve performance by reducing global memory accesses.

**Tech stack:** C++17, CUDA 11+, Nvidia GPU with CUDA support

**Data:** Use the same small QAP instances as in the beginner project to enable runtime and accuracy comparison.

**Build it:**

1. Implement the 2opt heuristic on GPU using CUDA kernels for parallel neighborhood evaluation.
2. Optimize memory usage by allocating frequently accessed data in shared memory.
3. Autotune thread and block configurations to improve performance.
4. Benchmark GPU implementation against CPU baseline on identical QAP instances.
5. Document speedup factors and solution quality deviations in README.

**Ships as:** A GitHub repository with CUDA source code, scripts to run benchmarks, and a README reporting speedup and accuracy results compared to CPU baseline.

**Stretch goal:** Experiment with CUDA dynamic parallelism to launch child kernels for neighborhood exploration.

### Advanced — Extending GPU Tabu Search for QAP with Long-Term Memory
*Effort: 3-4 weeks*

You develop a GPU-accelerated tabu search heuristic for QAP that incorporates a long-term frequency-based memory component to diversify the search, addressing a limitation noted in the paper. You implement dynamic parallelism for neighborhood exploration and evaluate solution quality improvements on medium-sized QAP instances.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's tabu search method and its limitations, and your ability to extend it by adding a sophisticated memory feature to improve solution quality, potentially sparking research discussions.

**Grounded in:** Incorporate long-term frequency-based memory features to diversify tabu search and potentially find better solutions.

**Tech stack:** C++17, CUDA 11+, Nvidia GPU with CUDA support

**Data:** Use publicly available QAPLIB medium-sized instances (size ~50-100) or synthesize similar data, noting GPU memory constraints.

**Build it:**

1. Reimplement the GPU tabu search heuristic with dynamic parallelism for neighborhood evaluation as described.
2. Design and integrate a long-term frequency-based memory structure to guide the search away from frequently visited solutions.
3. Implement mechanisms to update and query this memory efficiently on GPU.
4. Benchmark solution quality and runtime against the original tabu search implementation without long-term memory.
5. Write detailed documentation explaining the algorithmic extension, implementation challenges, and experimental results.

**Ships as:** A GitHub repository containing the extended GPU tabu search code, benchmark scripts, and a comprehensive README discussing the long-term memory feature's impact on solution quality and performance.

**Stretch goal:** Investigate nested parallelism by enabling child threads to launch further threads dynamically for deeper neighborhood exploration.

_The paper's authors have not released code or datasets, so all implementations must be built from the paper's descriptions and public QAP datasets or synthetic data._
