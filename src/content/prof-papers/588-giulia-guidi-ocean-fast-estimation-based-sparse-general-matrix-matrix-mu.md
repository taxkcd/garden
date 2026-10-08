---
title: "588 · Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU — Giulia Guidi"
date: 2026-08-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-giulia-guidi"
source_hash: "49d1719c3b448bda5463cd81e2b11986b8afa047b9f524318a6d32b37e7232fa"
sequence: 588
generator: "outreach-garden: managed"
---

# 588 · Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU

## At a glance

- **Professor:** Giulia Guidi
- **Institution:** Cornell University
- **Paper:** [Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU](https://arxiv.org/pdf/2604.19004)
- **Authors:** Yifan Li, Giulia Guidi
- **Year:** 2026

## Paper overview

This paper presents Ocean, a new GPU-based method for multiplying large sparse matrices efficiently. It replaces the traditional costly exact size prediction step with a fast estimation technique using HyperLogLog, a probabilistic algorithm. Ocean dynamically chooses the best workflow based on input characteristics and uses a hybrid accumulator design to handle different row sizes. The approach achieves significant speedups over existing state-of-the-art GPU implementations.

### Why it matters

**Research problem:** Sparse General Matrix-Matrix Multiplication (SpGEMM) on GPUs is challenging due to irregular memory access, workload imbalance, and the costly symbolic pass needed for exact output size prediction, which accounts for about 28% of runtime. Existing accumulators also struggle to efficiently handle both very short and very long output rows.

**Why it matters:** SpGEMM is a fundamental kernel in many scientific simulations, graph analytics, and machine learning applications such as graph neural networks. Improving its performance on GPUs can accelerate a wide range of computational science and data analytics workloads.

**Key contributions:**

- First use of HyperLogLog estimation for sparse linear algebra to accelerate SpGEMM on GPUs.
- A lightweight analysis step that predicts costs and selects the optimal workflow dynamically.
- A hybrid accumulator design combining hash-based, dense, and ESC accumulators with cooperation between shared and global memory.
- An open-source CUDA C++ implementation achieving consistent speedups over state-of-the-art GPU SpGEMM methods.

## About the professor

**Giulia Guidi** — Assistant Professor, Department of Computer Science, Cornell University.

Research interests: high-performance computing (HPC) for large-scale computational sciences, developing algorithms and software infrastructures on parallel machines, sparse linear algebra

### Research links

- [Faculty/profile page](https://giuliaguidi.github.io)
- [Resolved homepage](https://bowers.cornell.edu)
- [Lab website](https://www.linkedin.com/company/alps-research-lab/)
- [Google Scholar](https://scholar.google.com/citations?user=UZLC4TYAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Sparse Matrix Computations
**The paper assumes:** sparse matrix data structures, sparse linear algebra algorithms, GPU parallel computing for sparse matrices
**Already in this field?** Skip this entirely if you already understand sparse matrix formats, symbolic and numeric sparse matrix multiplication, and GPU-based sparse linear algebra implementations.

To understand the Ocean paper's contributions on accelerating Sparse General Matrix-Matrix Multiplication (SpGEMM) on GPUs, background knowledge in sparse matrix computations, GPU programming, and accumulator designs is essential. The rigorous course option offers a deep dive into GPU computing with a dedicated focus on sparse matrix computations, while the fast track provides a concise introduction to linear algebra concepts foundational to sparse matrix operations. Choose the rigorous course for comprehensive technical depth; choose the fast track for a quick, intuitive grasp of the underlying linear algebra.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMPS 224/324 - GPU Computing - Spring 2026](https://www.youtube.com/playlist?list=PLZrjSW9GrEZE_uL0qSjc7dzFwnI2AjPm1) — Izzat El Hajj · 11 videos · 13.2h across 11 episodes

**Watch only this:** Watch episodes 'Chapter 14 - Sparse Matrix Computation - Part 1' and 'Chapter 14 - Sparse Matrix Computation - Part 2', about 2.4 hours total (~72 minutes each). These cover sparse matrix representations, symbolic and numeric multiplication phases, and GPU-specific optimization strategies essential for the paper.

*Why it unblocks this paper:* This university-level GPU computing course includes focused lectures on sparse matrix computations and related GPU optimization techniques, directly relevant to understanding SpGEMM challenges and solutions presented in the paper.

*If you want all of it:* 13.2 hours across all 11 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Linear Algebra Complete Course | MS-252 | Matrices, Vectors & Eigenvalues](https://www.youtube.com/playlist?list=PLGwuETr5YU-E) — ARFA'S LOGIC LOUNGE · 6 videos · 0.9h across 6 episodes

**Watch only this:** Watch episodes 1-3: 'System of Linear Equations | Cramer's Rule 2×2', 'Cramer's Rule 3x3 | System of Linear Equations', and 'Matrix Inversion Method 2×2', about 27 minutes total (~9 minutes each). This subset introduces matrix basics and inversion methods relevant to sparse matrix computations.

*Why it unblocks this paper:* This short-form playlist covers core linear algebra concepts such as systems of linear equations and matrix operations, providing foundational knowledge needed to understand sparse matrix structures and multiplication without deep GPU-specific details.

*If you want all of it:* 0.9 hours across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Ocean paper on fast estimation-based sparse general matrix-matrix multiplication (SpGEMM) on GPUs, start by building foundational knowledge on GPU memory hierarchy and optimization, sparse matrix multiplication on GPUs, the HyperLogLog algorithm for cardinality estimation, and sparse accumulator data structures. These prerequisites provide the necessary background on GPU architectures, sparse linear algebra challenges, and the probabilistic estimation technique central to Ocean. Finally, focus on the core concept of the Ocean GPU SpGEMM method itself, featuring the authors' own talk to gain direct insight into their novel contributions and experimental results.

### GPU memory hierarchy and optimization *(prerequisite)*
Understanding the GPU memory hierarchy, including the roles of shared and global memory, is critical to grasp how Ocean's hybrid accumulator design efficiently manages memory resources for short and long output rows. This knowledge helps appreciate the trade-offs and optimizations in GPU kernel design that Ocean leverages.

*How the paper uses it:* Ocean's hybrid accumulator design relies on cooperation between shared and global memory to optimize performance.

▶ [HetSys Course: Lecture 4: GPU Memory Hierarchy (Spring 2022)](https://www.youtube.com/watch?v=DEusH5OGd88) — Onur Mutlu Lectures · 54:27 · 4y ago

### Sparse matrix multiplication GPU *(prerequisite)*
Sparse general matrix-matrix multiplication (SpGEMM) on GPUs is a fundamental computational kernel with challenges like irregular memory access and workload imbalance. Learning about existing GPU SpGEMM algorithms and their bottlenecks provides context for Ocean's improvements and the significance of replacing the symbolic pass.

*How the paper uses it:* Ocean targets the SpGEMM kernel on GPUs, addressing its key challenges and improving performance over state-of-the-art implementations.

▶ [HetSys Course: Lecture 11: Parallel Patterns: Sparse Matrices (Spring 2023)](https://www.youtube.com/watch?v=K9JelnbY9Zg) — Onur Mutlu Lectures · 21:25 · 3y ago

### HyperLogLog algorithm *(prerequisite)*
HyperLogLog is a probabilistic algorithm for estimating the cardinality of large datasets with high accuracy and low memory usage. Understanding its principles and error characteristics is essential to appreciate how Ocean uses it to replace the costly symbolic pass for output size prediction in SpGEMM.

*How the paper uses it:* Ocean innovatively applies HyperLogLog estimation to predict per-row output sizes, reducing symbolic pass overhead.

▶ [HyperLogLog From Scratch | Counting Distinct Elements at Scale](https://www.youtube.com/watch?v=UGfACoy5bbQ) — Random Noise · 13:15 · 10mo ago

### Ocean GPU SpGEMM talk *(paper-talk search result; attribution unverified)*
The authors' own presentation on Ocean provides the most direct and detailed explanation of their novel estimation-based SpGEMM method, including design decisions, workflow selection, hybrid accumulators, and performance results. This talk is essential for a comprehensive understanding of the paper's contributions.

*How the paper uses it:* This is the authors' own talk presenting their Ocean method for fast estimation-based SpGEMM on GPUs.

▶ [How AI Discovered a Faster Matrix Multiplication Algorithm](https://www.youtube.com/watch?v=fDAPJ7rvcUw) — Quanta Magazine · 13:00 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Ocean paper, start by learning the basics of sparse matrices and why multiplying them efficiently on GPUs is challenging. Then, grasp the GPU memory hierarchy to appreciate the hybrid accumulator design. Next, study the HyperLogLog algorithm, which Ocean uses to estimate output sizes quickly. Finally, explore the Ocean GPU SpGEMM talk to see how these concepts combine in the paper's novel method.

### Sparse matrix multiplication GPU *(prerequisite)*
Sparse matrices mostly contain zeros, so special data structures and algorithms are needed to multiply them efficiently, especially on GPUs where parallelism and memory access patterns matter. Understanding these challenges and common approaches sets the stage for appreciating Ocean's improvements.

*How the paper uses it:* Ocean optimizes sparse general matrix-matrix multiplication (SpGEMM) on GPUs, addressing workload imbalance and memory access issues.

▶ [SpArch: Efficient Architecture for Sparse Matrix Multiplication, [HPCA 2020]](https://www.youtube.com/watch?v=s9ABFm9TRUI) — MIT HAN Lab · 15:54 · 6y ago

### GPU memory hierarchy and optimization *(prerequisite)*
GPUs have multiple memory types (shared, global, registers) with different speeds and sizes. Efficient algorithms carefully use these memories to maximize performance, which is crucial for Ocean's hybrid accumulator design that cooperates between shared and global memory.

*How the paper uses it:* Ocean leverages shared and global memory cooperation in its hybrid accumulator to handle different row sizes efficiently.

▶ [HetSys Course: Lecture 4: GPU Memory Hierarchy (Spring 2022)](https://www.youtube.com/watch?v=DEusH5OGd88) — Onur Mutlu Lectures · 54:27 · 4y ago

### HyperLogLog algorithm *(prerequisite)*
HyperLogLog is a probabilistic algorithm that estimates the number of distinct elements in large datasets using very little memory. It trades exactness for speed and efficiency, making it ideal for fast size estimation in Ocean's workflow.

*How the paper uses it:* Ocean replaces the costly symbolic pass with HyperLogLog-based estimation to predict per-row output sizes quickly.

▶ [HyperLogLog From Scratch | Counting Distinct Elements at Scale](https://www.youtube.com/watch?v=UGfACoy5bbQ) — Random Noise · 13:15 · 10mo ago

### Ocean GPU SpGEMM talk *(paper-talk search result; attribution unverified)*
This talk presents the Ocean method directly from the authors, explaining how they combine estimation, hybrid accumulators, and dynamic workflow selection to accelerate sparse matrix multiplication on GPUs.

*How the paper uses it:* It provides a clear overview of Ocean's novel contributions and performance benefits over existing GPU SpGEMM implementations.

▶ [How AI Discovered a Faster Matrix Multiplication Algorithm](https://www.youtube.com/watch?v=fDAPJ7rvcUw) — Quanta Magazine · 13:00 · 3y ago

## Already in your library

- [HetSys Course: Lecture 4: GPU Memory Hierarchy (Spring 2023)](https://www.youtube.com/watch?v=ZQKMZIP3Fzg) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)
- [HetSys Course: Lecture 4: GPU Memory Hierarchy (Fall 2022)](https://www.youtube.com/watch?v=ynlGJ1utk4c) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Sparse matrix algorithms (Stanford, June 2013, Tim Davis)](https://www.youtube.com/watch?v=7ph4ZQ9oEIc) — also for: SCEMENT: scalable and memory efficient integration of large-scale single-cell RNA-sequencing data (Srinivas Aluru)
- [Lecture 16 - Sparse Matrix Computation (COO and CSR)](https://www.youtube.com/watch?v=SRgFScHYTy4) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for understanding the Ocean method for fast sparse matrix multiplication on GPUs. The beginner project focuses on implementing and visualizing the HyperLogLog estimation technique central to Ocean's symbolic pass replacement. The intermediate project involves reimplementing Ocean's estimation-based SpGEMM workflow on a smaller scale and comparing it to a baseline symbolic method. The advanced project extends Ocean by exploring finer-grained workflow selection based on input matrix structure, addressing one of the paper's future directions.

### Beginner — HyperLogLog Estimator for Sparse Matrix Row Size
*Effort: a weekend, ~8 hours*

You build a standalone HyperLogLog (HLL) estimator in Python or C++ that estimates the number of unique elements in a set, then apply it to estimate the output row sizes of sparse matrix multiplication. You visualize estimation accuracy versus exact counts on small synthetic sparse matrices.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key innovation in Ocean: replacing the costly symbolic pass with a fast probabilistic estimator. A professor would see you understand how HLL works and its role in output size prediction.

**Grounded in:** Ocean replaces the exact symbolic pass with fast HyperLogLog-based estimation to reduce overhead.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic sparse matrices generated with controlled sparsity and row sizes to simulate SpGEMM inputs.

**Build it:**

1. Implement a HyperLogLog estimator following the algorithm described in the paper.
2. Generate small synthetic sparse matrices with known row sizes and sparsity patterns.
3. Use HLL to estimate the number of unique elements per output row in a simulated SpGEMM scenario.
4. Compare and plot the estimated sizes against exact counts to evaluate estimation accuracy.
5. Write a README explaining the HLL algorithm and its application to sparse matrix size estimation.

**Ships as:** A repository with HLL estimator code, scripts generating synthetic data, plots comparing estimation accuracy, and a README explaining the method and results.

**Stretch goal:** Add a simple GPU kernel (e.g., CUDA or PyCUDA) to run the HLL estimator on GPU for speed comparison.

### Intermediate — Estimation-Based SpGEMM Workflow Reimplementation
*Effort: 2 weekends, ~20 hours*

You reimplement the core Ocean workflow that uses HyperLogLog estimation to predict output sizes and dynamically select between estimation-based and symbolic workflows for sparse matrix multiplication on GPU. You compare runtime and accuracy against a baseline symbolic method on a subset of matrices.

**Why it shows you understood the paper:** This project shows you can implement Ocean's main algorithmic contributions and evaluate their impact, demonstrating comprehension of the hybrid workflow selection and accumulator design principles.

**Grounded in:** Ocean introduces an analysis step to dynamically select between estimation-based and symbolic workflows based on input statistics.

**Tech stack:** CUDA C++, Python 3.11, numpy, matplotlib

**Data:** Use the third-party Ocean-SpGEMM GitHub repository's example matrices or generate synthetic sparse matrices with varying sparsity and row length distributions.

**Build it:**

1. Study the Ocean paper's description of the estimation-based workflow and hybrid accumulator design.
2. Implement a CUDA kernel that performs HyperLogLog-based output size estimation per row.
3. Implement symbolic and estimation-based SpGEMM workflows with a lightweight analysis step to select the best workflow.
4. Run experiments on several sparse matrices to measure runtime and output correctness.
5. Compare your implementation's runtime and accuracy against a simple symbolic baseline.
6. Document your implementation, experimental setup, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/CornellHPC/Ocean-SpGEMM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with CUDA code implementing estimation-based SpGEMM, scripts for running experiments, and a report comparing performance and accuracy with a symbolic baseline.

**Stretch goal:** Integrate the hybrid accumulator design combining hash-based and dense accumulators to improve performance on short and long rows.

### Advanced — Finer-Grained Workflow Selection for Ocean SpGEMM
*Effort: 3+ weeks*

You extend the Ocean method by designing and implementing a finer-grained workflow selection mechanism that predicts accumulation kernel performance beyond shared memory requirements, based on detailed input matrix structure analysis. You evaluate this approach on diverse sparse matrices and compare it to Ocean's original selection strategy.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, showing deep understanding of Ocean's limitations and the ability to innovate on GPU kernel performance prediction and workflow optimization.

**Grounded in:** Future directions include adopting finer-grained workflow selection based on input matrix structure and predicting accumulation kernel performance more accurately.

**Tech stack:** CUDA C++, Python 3.11, numpy, matplotlib

**Data:** Use the Ocean-SpGEMM repository's matrices or generate synthetic sparse matrices with diverse structural properties (e.g., varying expansion and compression ratios).

**Build it:**

1. Analyze Ocean's current workflow selection criteria based on Input Expansion Ratio and Output Compression Ratio.
2. Design new metrics or machine learning models to predict accumulation kernel performance considering additional matrix features.
3. Implement the enhanced analysis step in your CUDA SpGEMM implementation.
4. Benchmark the enhanced workflow selection against Ocean's original method on a variety of sparse matrices.
5. Evaluate runtime improvements and discuss trade-offs in accuracy and overhead.
6. Prepare a comprehensive README documenting your design, implementation, experiments, and conclusions.

**Verified links from the paper:**

- <https://github.com/CornellHPC/Ocean-SpGEMM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with an extended CUDA SpGEMM implementation featuring finer-grained workflow selection, experimental scripts, and a detailed report on performance gains and limitations.

**Stretch goal:** Apply HyperLogLog estimation to other sparse linear algebra primitives such as row reordering or workload characterization as an additional extension.
