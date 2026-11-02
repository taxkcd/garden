---
title: "1009 · Towards a Unified Implementation of GEMM in BLIS — Robert A. van de Geijn"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-robert-a-van-de-geijn"
source_hash: "2ff030a736876a01cf216f693944f05098bf2f0ed8ae307c5aab9cdd01c91fd6"
sequence: 1009
generator: "outreach-garden: managed"
---

# 1009 · Towards a Unified Implementation of GEMM in BLIS

## At a glance

- **Professor:** Robert A. van de Geijn
- **Institution:** University of Texas at Austin
- **Paper:** [Towards a Unified Implementation of GEMM in BLIS](https://dl.acm.org/doi/pdf/10.1145/3577193.3593707?download=true)
- **Authors:** RuQing G. Xu, Field G. Van Zee, Robert A. van de Geijn
- **Year:** 2023

## Paper overview

This paper presents a new method to implement general matrix multiplication (GEMM) that unifies the handling of both small and large matrix sizes within a single code path. By integrating the data packing step directly into the computation kernel, the approach improves performance across all matrix sizes and simplifies tuning. The method is implemented in the BLIS framework and tested on multiple architectures, showing better or comparable performance to existing BLAS libraries.

### Why it matters

**Research problem:** Existing high-performance matrix multiplication libraries use separate code paths for small and large matrices due to the overhead of data packing, which improves cache locality but is costly for small matrices. This leads to complex heuristics to switch between code paths and suboptimal performance in intermediate problem sizes.

**Why it matters:** Matrix multiplication is a fundamental operation in scientific computing, machine learning, and data analytics. Efficient implementations directly impact the performance of many applications. Simplifying and unifying the implementation reduces maintenance complexity and improves performance consistency across problem sizes and architectures.

**Key contributions:**

- Propose a unified GEMM implementation that integrates packing with computation to handle all matrix sizes efficiently.
- Develop fused-in packing (FIP) microkernels that conditionally pack data during computation.
- Implement the approach in BLIS and demonstrate its portability across multiple CPU architectures including x86_64 and ARM.
- Show that the unified approach matches or outperforms conventional BLIS, SUP, and other BLAS implementations across a wide range of problem sizes.
- Extend the approach to multithreaded execution with effective parallelization strategies.

## About the professor

**Robert A. van de Geijn** — Professor, Department of Computer Sciences and Texas Institute for Computational Engineering and Sciences (ICES), University of Texas at Austin.

Research interests: Formal derivation of algorithms, mechanical generation of libraries, numerical analysis, parallel supercomputing, scientific computing, high-performance linear algebra libraries.

### Research links

- [Faculty/profile page](https://cs.utexas.edu/~rvdg)
- [Professor website](http://www.cs.utexas.edu/users/rvdg)
- [Lab website](http://www.cs.utexas.edu/users/flame)
- [Google Scholar](http://scholar.google.com/citations?user=62GM5XcAAAAJ)
- [ResearchGate](https://www.researchgate.net/profile/Robert_Van_de_Geijn/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** High Performance Matrix Multiplication
**The paper assumes:** high performance matrix multiplication algorithms and cache-aware blocking techniques
**Already in this field?** Skip this entirely if you have studied advanced numerical linear algebra focusing on optimized BLAS implementations or have hands-on experience with high-performance GEMM kernels.

To understand the unified GEMM implementation and fused-in packing technique presented in the paper, a solid grasp of high-performance matrix multiplication algorithms, cache-efficient blocking, packing strategies, and parallelization is essential. The rigorous course option offers a deep, structured exploration of parallel algorithms and matrix computations, while the fast track provides a concise, focused introduction to the core concepts of parallel matrix multiplication and related performance considerations. Choose the course for comprehensive understanding and the fast track for a quick but effective overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.172 Performance Engineering of Software Systems, Fall 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP63VIBQVWguXxZZi0566y7Wf) — MIT OpenCourseWare · 23 videos · 29.8h across 23 episodes

**Watch only this:** Lectures 1 (Introduction and Matrix Multiplication), 4 (Assembly Language & Computer Architecture), 5 (C to Assembly), 6 (Multicore Programming), 14 (Caching and Cache-Efficient Algorithms), and 15 (Cache-Oblivious Algorithms), about 7.7 hours total — these cover the fundamentals of matrix multiplication, low-level optimization, and cache-aware algorithm design essential for the paper.

*Why it unblocks this paper:* MIT 6.172 Performance Engineering of Software Systems covers matrix multiplication, cache-efficient algorithms, assembly-level optimization, and parallel programming, directly relevant to understanding the BLIS framework and fused-in packing microkernels.

*If you want all of it:* All 23 lectures, about 29.8 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hpc](https://www.youtube.com/playlist?list=PLuXNA4uSia01oW1vTptVGXgY66iZMyXq9) — user1234 · 8 videos · 1.6h across 8 episodes

**Watch only this:** Episodes 4 (Matrix-Vector Multiplication ll Sequential Implementation Algorithm Explained with Examples in Hindi), 6 (Row Wise 1-D Partitioning ll Matrix-Vector Multiplication ll Parallel Implementation Explained), and 7 (Matrix-Matrix Multiplication Parallel Implementation Explained With Solved Example in Hindi), about 36 minutes total — these focus on matrix multiplication and parallelization basics.

*Why it unblocks this paper:* This short playlist provides clear, concise explanations of parallel matrix multiplication, granularity effects, and overhead sources, giving a practical intuition for performance trade-offs in HPC relevant to fused-in packing and unified GEMM.

*If you want all of it:* All 8 episodes, about 1.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Towards a Unified Implementation of GEMM in BLIS," start by building foundational knowledge on matrix multiplication optimization techniques, cache blocking and packing strategies, and the architecture of the BLIS framework. These prerequisites provide the necessary background on performance engineering and the existing BLIS design that the paper modifies. Finally, focus on the core concept of the paper by watching the authors' own talks to gain direct insight into their novel fused-in packing microkernel approach and unified GEMM implementation.

### Matrix multiplication optimization *(prerequisite)*
This section covers advanced optimization techniques for GEMM, including algorithmic and architectural considerations that improve performance. Understanding these optimizations is crucial to appreciate the improvements proposed in the paper.

*How the paper uses it:* The paper improves GEMM performance by modifying the packing and computation strategy, building on existing optimization techniques.

▶ [1. Introduction and Matrix Multiplication](https://www.youtube.com/watch?v=o7h_sYMk_oc) — MIT OpenCourseWare · 5y ago

### Cache blocking and packing *(prerequisite)*
Cache blocking and data packing are key strategies to improve data locality and reduce memory bandwidth bottlenecks in GEMM implementations. This knowledge is essential to understand how the paper integrates packing into the microkernel.

*How the paper uses it:* The paper's fused-in packing approach directly modifies how packing is performed and integrated with computation to improve cache efficiency.

▶ [Matrix Multiplication Deep Dive || Cache Blocking, SIMD & Parallelization - Aliaksei Sala - CppCon](https://www.youtube.com/watch?v=GHctcSBd6Z4) — CppCon · 8mo ago

### BLIS framework architecture *(prerequisite)*
BLIS is a modern framework for high-performance BLAS operations, including GEMM. Understanding its layered architecture and how it structures packing and microkernels is critical to grasp the paper's modifications and contributions.

*How the paper uses it:* The paper builds on and modifies the BLIS framework to implement the unified GEMM with fused-in packing microkernels.

▶ [https://www.youtube.com › watch?v=eb3dXivyTzE](https://www.youtube.com/watch?v=eb3dXivyTzE) — YouTube result via DuckDuckGo

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors provide the most authoritative and detailed explanation of their unified GEMM implementation and fused-in packing technique. These talks often include performance results, design rationale, and future directions.

*How the paper uses it:* These talks present the authors' own insights and detailed explanations of the unified GEMM implementation in BLIS described in the paper.

▶ [https://www.youtube.com › watch?v=d1Rv3jVyY2Q](https://www.youtube.com/watch?v=d1Rv3jVyY2Q) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the unified GEMM implementation in BLIS, start by learning the fundamentals of matrix multiplication optimization, which is central to the paper's contributions. Next, grasp cache blocking and packing techniques that improve data locality and performance, as these are key to the fused-in packing approach. Then, explore the BLIS framework architecture to see the context in which the authors implement their method. Finally, deepen your understanding with insights from the paper authors themselves to connect theory with their practical innovations.

### Matrix multiplication optimization *(prerequisite)*
This section introduces how matrix multiplication can be optimized for performance, including techniques like blocking, SIMD, and parallelization. Understanding these basics helps grasp why the paper focuses on improving GEMM implementations.

*How the paper uses it:* The paper improves GEMM performance by unifying code paths and optimizing packing and computation.

▶ [Matrix Multiplication Deep Dive || Cache Blocking, SIMD & Parallelization - Aliaksei Sala - CppCon](https://www.youtube.com/watch?v=GHctcSBd6Z4) — CppCon · 8mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the unified GEMM implementation with fused-in packing (FIP) from the paper. Starting with a small-scale demonstration of packing and computation fusion, you then build and benchmark the authors' gemmfip implementation against a baseline BLIS GEMM. Finally, you extend the approach to explore a future direction by adapting fused-in packing to single-precision GEMM, addressing a stated limitation.

### Beginner — Fused Packing Microkernel Simulation
*Effort: a weekend, ~8 hours*

You build a simplified simulation of fused-in packing by implementing a microkernel-like function that interleaves packing of small matrix micropanels with their multiplication in Python or C++. This project reproduces the core idea of integrating packing with computation on small matrices to observe performance or operation counts.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of fused-in packing microkernels and how packing can be fused with computation to reduce overhead, a key contribution of the paper.

**Grounded in:** Propose a unified GEMM implementation that integrates packing with computation to handle all matrix sizes efficiently.

**Tech stack:** Python 3.11 or C++17

**Data:** Use randomly generated small double-precision matrices (e.g., 64x64) as input to simulate micropanels.

**Build it:**

1. Implement a basic matrix multiplication function that multiplies two small matrices without packing.
2. Implement a packing function that rearranges micropanels of input matrices into contiguous buffers.
3. Modify the multiplication function to fuse packing steps directly into the computation loop, simulating fused-in packing.
4. Measure and compare the number of memory accesses or runtime between the naive and fused versions.
5. Write a README explaining the fused-in packing concept and your observations.

**Ships as:** A repository with code demonstrating fused packing microkernel simulation, performance or memory access comparison, and documentation explaining the fused-in packing concept.

**Stretch goal:** Add visualization of memory access patterns or cache usage to illustrate packing benefits.

### Intermediate — Run and Benchmark gemmfip in BLIS
*Effort: 1-3 weekends*

You clone and build the authors' gemmfip implementation from their BLIS fork, run it on your local machine or a cloud instance, and benchmark its performance against the conventional BLIS GEMM code path on a range of matrix sizes. You analyze performance metrics and reproduce key figures from the paper.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand their unified GEMM approach, and critically evaluate performance improvements across matrix sizes, directly engaging with the paper's core results.

**Grounded in:** Implement the approach in BLIS and demonstrate its portability across multiple CPU architectures including x86_64 and ARM.

**Tech stack:** C, Make, Linux or macOS environment, Python or shell scripting for benchmarking

**Data:** Use synthetic double-precision matrices of varying sizes generated during benchmarking; no external dataset needed.

**Build it:**

1. Clone the authors' BLIS fork from https://github.com/xrq-phys/blis.
2. Follow build instructions to configure and compile BLIS with the gemmfip option enabled.
3. Write or adapt benchmarking scripts to run gemmfip and conventional BLIS GEMM on matrices of different sizes.
4. Collect and plot performance metrics (e.g., GFLOPS) to compare gemmfip against baseline BLIS.
5. Document your setup, benchmarking methodology, and analysis in a README.

**Verified links from the paper:**

- <https://github.com/xrq-phys/blis> — released by the paper's authors

**Ships as:** A repository containing build scripts, benchmarking code, performance plots comparing gemmfip and baseline BLIS GEMM, and a report explaining the unified GEMM approach and observed results.

**Stretch goal:** Extend benchmarking to multithreaded execution and analyze scaling behavior.

### Advanced — Adapt Fused-In Packing to Single-Precision GEMM
*Effort: a few weeks*

You extend the fused-in packing technique to implement a single-precision GEMM microkernel variant within the BLIS framework or a simplified prototype. This addresses the paper's limitation that the current approach targets only double-precision GEMM. You benchmark and compare performance against the double-precision fused-in packing and conventional single-precision GEMM implementations.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of fused-in packing microkernel design, assembly-level or low-level optimization challenges, and the ability to extend the paper's method to a new precision, directly tackling a stated limitation and future direction.

**Grounded in:** The approach currently targets double-precision GEMM; extension to other precisions and GEMM-like operations is future work.

**Tech stack:** C, Assembly (optional), Make, Linux or macOS environment, Python or shell scripting for benchmarking

**Data:** Synthetic single-precision floating-point matrices generated during benchmarking; no external dataset needed.

**Build it:**

1. Study the existing fused-in packing double-precision microkernels in the authors' BLIS fork.
2. Design and implement a single-precision variant of the fused-in packing microkernel, adapting packing and computation fusion.
3. Integrate your microkernel into the BLIS framework or a standalone prototype.
4. Benchmark your single-precision fused-in packing GEMM against conventional single-precision GEMM implementations.
5. Analyze performance and document challenges, optimizations, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/xrq-phys/blis> — released by the paper's authors

**Ships as:** A repository with source code for single-precision fused-in packing GEMM, benchmarking scripts, performance analysis, and documentation discussing the extension and its impact.

**Stretch goal:** Explore multithreaded scaling or adaptation to other GEMM-like operations such as symmetric matrix multiplication.
