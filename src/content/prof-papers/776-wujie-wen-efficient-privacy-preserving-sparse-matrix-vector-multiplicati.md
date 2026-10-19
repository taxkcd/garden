---
title: "776 · Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption — Wujie Wen"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wujie-wen"
source_hash: "43485d30ac2f54828d4e88c1a3f535d9ee466c513f7c7a356b238e46ef49c747"
sequence: 776
generator: "outreach-garden: managed"
---

# 776 · Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption

## At a glance

- **Professor:** Wujie Wen
- **Institution:** North Carolina State University
- **Paper:** [Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption](https://arxiv.org/pdf/2603.04742)
- **Authors:** Yang Gao, Gang Quan, Wujie Wen, Scott Piersall, Qian Lou, Liqiang Wang
- **Year:** 2026

## Paper overview

This paper presents a novel framework for performing sparse matrix-vector multiplication (SpMV) on encrypted data using homomorphic encryption (HE). It introduces a new sparse matrix format called Compressed Sparse Sorted Column (CSSC) that optimizes encrypted computation by aligning non-zero elements with encrypted vector slots, reducing costly operations. The approach achieves significant speedups and memory savings compared to existing methods, enabling efficient and privacy-preserving computation on sensitive sparse data.

### Why it matters

**Research problem:** How to efficiently perform sparse matrix-vector multiplication (SpMV) on encrypted data using homomorphic encryption, overcoming the inefficiencies of existing dense-matrix HE methods and traditional sparse formats that do not align well with HE operations.

**Why it matters:** SpMV is fundamental in scientific computing, machine learning, and data analysis, often involving sensitive data such as medical records or financial transactions. Ensuring privacy during computation on such data is critical. Existing HE methods focus on dense matrices and do not exploit sparsity, leading to inefficiency and high computational overhead. Efficient privacy-preserving SpMV enables secure outsourced computation in cloud environments without leaking sensitive information.

**Key contributions:**

- First framework supporting ciphertext-ciphertext sparse matrix-vector multiplication under homomorphic encryption with both operands encrypted.
- Introduction of the Compressed Sparse Sorted Column (CSSC) format tailored for HE, preserving sparsity and optimizing ciphertext slot alignment.
- Development of a low-depth, batched encrypted computation pipeline minimizing multiplicative depth and expensive HE rotations and additions.
- Comprehensive complexity analysis and implementation demonstrating practical feasibility under standard HE parameters.

## About the professor

**Wujie Wen** — Associate Professor, Department of Computer Science, North Carolina State University.

Research interests: Application- and workload-aware AI computing, System–hardware co-design and design automation, Efficient, secure, and privacy-preserving AI systems

### Research links

- [Faculty/profile page](https://csc.ncsu.edu/people/wwen2)
- [Professor website](https://wenwujie.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=QKQrD1wAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Homomorphic Encryption
**The paper assumes:** homomorphic encryption theory, lattice-based cryptography, ciphertext operations and packing
**Already in this field?** Skip this entirely if you already understand the fundamentals of homomorphic encryption and its computational primitives.

To understand the core methods in this paper on privacy-preserving sparse matrix-vector multiplication using homomorphic encryption, it is essential to grasp the principles and practical challenges of homomorphic encryption (HE), especially the BFV scheme and ciphertext operations like rotations and multiplications. The rigorous course option offers a deep, structured university-level introduction to post-quantum cryptography including HE concepts, while the fast track provides a concise, intuition-focused explainer series ideal for quickly building foundational understanding without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Post-Quantum Cryptography (Tanja Lange, Eindhoven University of Technology, 2021)](https://www.youtube.com/playlist?list=PLidiQIHRzpXLBZZhZ82k1n-AgBo8ioC1t) — Theoretical Computer Science School (TCSS) · 36 videos · 9.6h across 36 episodes

**Watch only this:** Episodes 1-10, about 2.5 hours — covering the introduction to post-quantum crypto, quantum computing basics for cryptographers, and code-based cryptography fundamentals, which build the necessary cryptographic context for homomorphic encryption.

*Why it unblocks this paper:* This university-level course by Tanja Lange covers post-quantum cryptography fundamentals, including quantum-resistant schemes and cryptographic primitives foundational to homomorphic encryption. It provides rigorous background necessary to understand the security assumptions and mathematical underpinnings of HE schemes like BFV used in the paper.

*If you want all of it:* 9.6 hours across all 36 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Homomorphic Encryption: Compute on Encrypted Data](https://www.youtube.com/playlist?list=PLZ0iFJdiqMNajplNdEyzP0hX4kVtbndYa) — onlyTech R&D · 12 videos · 1.1h across 12 episodes

**Watch only this:** Episodes 1-6, about 30 minutes — covering HE use cases, system design, performance optimization, HE for machine learning, and introductory programming demos, which provide a practical and conceptual overview of HE.

*Why it unblocks this paper:* This concise playlist offers a clear, end-to-end guide to homomorphic encryption, including practical system design and the BFV scheme, directly relevant to understanding the encrypted computations and optimizations in the paper.

*If you want all of it:* 1.1 hours across all 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on efficient privacy-preserving sparse matrix-vector multiplication using homomorphic encryption, start with foundational knowledge on homomorphic encryption principles and ciphertext packing/rotation optimizations, which are critical for the paper's encrypted computation techniques. Next, study sparse matrix formats and algorithms to grasp the innovations behind the CSSC format. Finally, focus on the core concept of homomorphic encryption applied to sparse matrix-vector multiplication, emphasizing the authors' own talk for direct insights into their novel framework.

### Homomorphic encryption fundamentals *(prerequisite)*
This section covers the foundational cryptographic concepts of fully homomorphic encryption (FHE), including its ability to perform computations on encrypted data without decryption. Understanding these fundamentals is essential to appreciate the privacy guarantees and computational challenges addressed in the paper.

*How the paper uses it:* The paper builds on homomorphic encryption to enable privacy-preserving computation on encrypted sparse matrices and vectors.

▶ [Winter School on Cryptography: Fully Homomorphic Encryption and the Bootstrapping - Craig Gentry](https://www.youtube.com/watch?v=awFmqtwj-_c) — Bar-Ilan University - אוניברסיטת בר-אילן · 50:40 · 14y ago

### Ciphertext packing and rotation in HE *(prerequisite)*
Ciphertext packing and rotation techniques are critical for optimizing homomorphic encryption operations by efficiently utilizing ciphertext slots and minimizing costly rotations. Mastery of these concepts is necessary to understand how the paper reduces computational overhead in encrypted sparse matrix-vector multiplication.

*How the paper uses it:* The CSSC format and computation pipeline rely heavily on ciphertext slot alignment and rotation minimization to achieve efficiency.

▶ [Winter School on Cryptography: Fully Homomorphic Encryption - Craig Gentry](https://www.youtube.com/watch?v=ejtblUBIDEI) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:23:05 · 14y ago

### Sparse matrix formats and algorithms *(prerequisite)*
This section introduces sparse matrix representations and algorithms, providing the background needed to understand the novel CSSC format proposed in the paper. Knowledge of traditional sparse formats and their limitations in encrypted settings is crucial for appreciating the paper's contributions.

*How the paper uses it:* The paper innovates by introducing the CSSC sparse matrix format tailored for homomorphic encryption.

▶ [HetSys Course: Lecture 10: Parallel Patterns: Sparse Matrices (Spring 2022)](https://www.youtube.com/watch?v=b-bMCY7xlK4) — Onur Mutlu Lectures · 53:03 · 4y ago

### Homomorphic encryption sparse matrix-vector multiplication
This section focuses on the application of homomorphic encryption to sparse matrix-vector multiplication, detailing algorithmic and computational strategies for efficient encrypted operations. It bridges the gap between sparse matrix algorithms and encrypted computation, directly relating to the paper's core methodology.

*How the paper uses it:* The paper presents the first framework supporting ciphertext-ciphertext sparse matrix-vector multiplication under homomorphic encryption.

▶ [Parallel sparse matrix vector multiplication](https://www.youtube.com/watch?v=F9ZMiccYo8k) — Professor Rob H. Bisseling, Utrecht University · 20:31 · 3y ago

### Paper authors' talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and detailed exposition of their novel framework, including motivation, design decisions, and experimental results. This talk is invaluable for gaining nuanced understanding and insights straight from the researchers.

*How the paper uses it:* This is the direct presentation by the authors explaining their CSSC format and efficient encrypted SpMV framework.

▶ [Lecture 9A: Sparse Vector - Above Threshold](https://www.youtube.com/watch?v=PJEIN9s69qU) — Gautam Kamath · 43:12 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on efficient privacy-preserving sparse matrix-vector multiplication using homomorphic encryption, start by learning the fundamentals of homomorphic encryption to grasp how encrypted computation works. Next, build intuition on sparse matrix formats and algorithms to understand the data structures involved. Then, study ciphertext packing and rotation techniques in homomorphic encryption, which are critical for optimizing encrypted operations. Finally, focus on the core concept of homomorphic encryption applied specifically to sparse matrix-vector multiplication, which is the central method enabling the paper's novel framework.

### Homomorphic encryption fundamentals *(prerequisite)*
Learn what homomorphic encryption (HE) is and how it allows computation directly on encrypted data without decryption. This foundational knowledge explains why HE is powerful for privacy-preserving computing and sets the stage for understanding encrypted matrix operations.

*How the paper uses it:* The paper relies on homomorphic encryption to perform computations on encrypted sparse matrices and vectors without revealing sensitive data.

▶ [Why Fully Homomorphic Encryption Is the Future of Private Computing](https://www.youtube.com/watch?v=RgzeESzBa4Y) — César Soto Valero · 20:12 · 1y ago

### Sparse matrix formats and algorithms *(prerequisite)*
Understand what sparse matrices are, why they are important, and how they are stored efficiently using specialized formats. This knowledge is essential to appreciate the paper's new CSSC format and how it improves computation on sparse data.

*How the paper uses it:* The paper introduces a new sparse matrix format (CSSC) tailored for homomorphic encryption to optimize sparse matrix-vector multiplication.

▶ [Sparse Matrix | Sparse matrices array and linked list representations | Data Structure](https://www.youtube.com/watch?v=JYyBg2WT68E) — THE GATEHUB · 7:31 · 6y ago

### Homomorphic encryption sparse matrix-vector multiplication
Focus on how sparse matrix-vector multiplication is performed under homomorphic encryption, including the challenges and optimizations needed for efficiency. This is the core technique enabling privacy-preserving computation on sparse data as presented in the paper.

*How the paper uses it:* The paper presents the first framework supporting ciphertext-ciphertext sparse matrix-vector multiplication using the CSSC format and optimized HE operations.

▶ [Sequential Sparse Matrix Vector Multiplication](https://www.youtube.com/watch?v=Oig6rRc5ewY) — Professor Rob H. Bisseling, Utrecht University · 21:32 · 3y ago

## Already in your library

- [How AI Discovered a Faster Matrix Multiplication Algorithm](https://www.youtube.com/watch?v=fDAPJ7rvcUw) — also for: Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU (Giulia Guidi)
- [HetSys Course: Lecture 11: Parallel Patterns: Sparse Matrices (Spring 2023)](https://www.youtube.com/watch?v=K9JelnbY9Zg) — also for: Ocean: Fast Estimation-Based Sparse General Matrix-Matrix Multiplication on GPU (Giulia Guidi)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Fully Homomoorphic Encryption. Shai Halevi, IBM](https://www.youtube.com/watch?v=R5jaHNC_neI) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Homomorphic Encryption from Ring Learning with Errors](https://www.youtube.com/watch?v=Dm7GI_8L4dA) — also for: From Lattices to Tensor Cores: Accelerating Private Information Retrieval (David J. Wu)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Sparse Matrix In Data Structure Lec-22](https://www.youtube.com/watch?v=p5-2PZAEvsE) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [Lecture 16 - Sparse Matrix Computation (COO and CSR)](https://www.youtube.com/watch?v=SRgFScHYTy4) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [14 Craig Gentry on a Simple Fully Homomorphic Encryption Scheme & Thoughts on Bootstrapping](https://www.youtube.com/watch?v=LgOI05gG46Y) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [06 Shai Halevi on Fully Homomorphic Encryption](https://www.youtube.com/watch?v=K6QOaBxdWrY) — also for: Weighted Cryptography with Weight-Independent Complexity (Aarushi Goel)
- [Prof. Nigel Smart | Fully Homomorphic Encryption](https://www.youtube.com/watch?v=gWcjwXJWMKM) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core contributions and limitations. The beginner project focuses on implementing a simplified version of the CSSC sparse matrix format and its alignment strategy for encrypted SpMV. The intermediate project involves reimplementing the paper's core CSSC-based encrypted SpMV method on a small synthetic sparse matrix dataset, comparing runtime and memory usage against a naive dense HE SpMV baseline. The advanced project extends the framework to handle dynamic sparsity patterns, addressing a key limitation noted by the authors and exploring incremental updates to the CSSC format under homomorphic encryption.

### Beginner — CSSC Sparse Format Alignment Prototype
*Effort: a weekend, ~8 hours*

You build a prototype that implements the Compressed Sparse Sorted Column (CSSC) format on a small sparse matrix and demonstrates how non-zero elements align with vector slots for efficient multiplication. This project simulates the alignment strategy by mapping sparse matrix entries to vector indices and counting the minimal number of multiplications and rotations needed.

**Why it shows you understood the paper:** This project shows you grasp the core idea of the CSSC format's slot alignment and how it reduces costly homomorphic encryption operations by structural reordering.

**Grounded in:** Introduction of the Compressed Sparse Sorted Column (CSSC) format tailored for HE, preserving sparsity and optimizing ciphertext slot alignment.

**Tech stack:** Python 3.11, NumPy

**Data:** Use a small synthetic sparse matrix (e.g., 10x10 with ~20% non-zero entries) generated within the code to illustrate the format.

**Build it:**

1. Implement a function to convert a given sparse matrix into the CSSC format by sorting and aligning non-zero elements per column.
2. Implement a function to simulate the alignment of sparse matrix non-zero elements with vector slots.
3. Calculate and output the number of required multiplications and rotations compared to a naive dense layout.
4. Write a README explaining the CSSC format and how your prototype demonstrates slot alignment benefits.

**Ships as:** A Python script and README that clearly demonstrate CSSC format construction and alignment benefits on a small example matrix.

**Stretch goal:** Add visualization of the sparse matrix before and after CSSC reordering to illustrate the alignment.

### Intermediate — Reimplementation of CSSC-based Encrypted SpMV
*Effort: 2 weekends, ~20 hours*

You reimplement the core CSSC-based sparse matrix-vector multiplication under homomorphic encryption as described in the paper, using a Python HE library (e.g., PySEAL or TenSEAL). You run experiments on a small synthetic sparse matrix and encrypted vector, comparing runtime and memory usage against a naive dense HE SpMV baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core method into working code, validate its efficiency gains, and understand the trade-offs in encrypted computation.

**Grounded in:** First framework supporting ciphertext-ciphertext sparse matrix-vector multiplication under homomorphic encryption with both operands encrypted; Achieves over 100× average speedup in runtime compared to state-of-the-art baselines.

**Tech stack:** Python 3.11, TenSEAL or PySEAL (homomorphic encryption library), NumPy

**Data:** Synthetic sparse matrices generated in code with controlled sparsity (e.g., 100x100 with 5% non-zero entries) to simulate real-world sparse data.

**Build it:**

1. Set up a Python environment with a homomorphic encryption library supporting ciphertext-ciphertext multiplication.
2. Implement the CSSC format conversion for input sparse matrices.
3. Encrypt both the sparse matrix (in CSSC format) and the input vector using the HE library.
4. Implement the encrypted SpMV operation following the paper's binary-tree rotation and addition aggregation scheme.
5. Implement a naive dense HE SpMV baseline for comparison.
6. Measure and compare runtime and memory usage between CSSC-based and naive methods.
7. Document your implementation, experiments, and results in a detailed README.

**Ships as:** A Python repository with code to perform encrypted SpMV using CSSC and a naive baseline, including performance comparison and documentation.

**Stretch goal:** Extend the implementation to support batching multiple vectors and measure throughput improvements.

### Advanced — Dynamic Sparsity Handling in Encrypted SpMV
*Effort: 3+ weeks*

You develop an extension to the CSSC-based encrypted SpMV framework that supports dynamic or evolving sparsity patterns by implementing incremental updates to the CSSC format and encrypted data structures. This addresses the paper's limitation regarding static sparsity assumptions. You evaluate the overhead of incremental updates versus full recompression.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, showing deep comprehension of the framework and creativity in extending it to practical scenarios with changing data.

**Grounded in:** Current framework assumes static sparsity patterns; dynamic or evolving sparsity is not addressed; Developing incremental update mechanisms to handle dynamic sparsity without full recompression.

**Tech stack:** Python 3.11, TenSEAL or PySEAL, NumPy, Matplotlib (for evaluation plots)

**Data:** Synthetic sparse matrices with time-varying sparsity patterns generated programmatically to simulate evolving data.

**Build it:**

1. Review and reimplement the baseline CSSC-based encrypted SpMV framework from the intermediate project.
2. Design a data structure and algorithm to incrementally update the CSSC format and encrypted ciphertexts when sparsity changes (e.g., insertions/deletions of non-zero elements).
3. Implement incremental update operations on encrypted data without full recompression.
4. Evaluate runtime and memory overhead of incremental updates compared to full recompression on sequences of evolving sparse matrices.
5. Visualize and analyze the trade-offs in a detailed report.
6. Write comprehensive documentation explaining your approach and findings.

**Ships as:** A Python repository demonstrating dynamic sparsity support in encrypted SpMV with evaluation scripts and detailed documentation.

**Stretch goal:** Explore adapting the method to federated or multi-party encrypted computation settings as a further extension.
