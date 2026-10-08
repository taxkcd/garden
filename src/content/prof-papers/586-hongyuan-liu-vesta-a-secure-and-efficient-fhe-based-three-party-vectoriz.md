---
title: "586 · VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models — Hongyuan Liu"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hongyuan-liu"
source_hash: "80ba64b48060ae53ba1119d13ebf78e56df2e0016121e66ace7ef74019f93c0d"
sequence: 586
generator: "outreach-garden: managed"
---

# 586 · VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models

## At a glance

- **Professor:** Hongyuan Liu
- **Institution:** Stevens Institute of Technology
- **Paper:** [VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models](https://junhaohuang.github.io/assets/paper/SIGMETRICS_2025_VESTA_Resubmission.pdf)
- **Authors:** Haosong Zhao, Junhao Huang, Zihang Chen, Kunxiong Zhu, Donglong Chen, Zhuoran Ji, Hongyuan Liu
- **Year:** 2025

## Paper overview

This paper presents VESTA, a system that enables secure and efficient evaluation of tree ensemble machine learning models using fully homomorphic encryption (FHE) in a three-party setting. VESTA improves upon previous systems by precomputing expensive operations at compile-time and partitioning large models to reduce memory use and speed up inference, all while preserving privacy of both the model and input data.

### Why it matters

**Research problem:** How to efficiently and securely perform privacy-preserving inference of tree ensemble models using fully homomorphic encryption in a three-party setting where the model owner, data owner, and compute server do not fully trust each other.

**Why it matters:** Tree ensemble models are widely used interpretable machine learning models in sensitive domains like healthcare and finance. Privacy concerns prevent direct sharing of models or data. Fully homomorphic encryption allows computation on encrypted data but is computationally expensive and memory intensive, especially for tree ensembles due to irregular control flow and memory access patterns. Efficient secure inference is critical for practical deployment of MLaaS with strong privacy guarantees.

**Key contributions:**

- Identified that consecutive reorder matrix multiplications in the runtime can be precomputed at compile-time to reduce runtime overhead.
- Proposed partitioning of large tree ensemble models into sub-models to reduce quadratic growth of reorder matrices and enable parallel inference.
- Developed the VESTA system integrating these optimizations, achieving faster and more memory-efficient FHE-based three-party secure inference for tree ensembles.
- Demonstrated that VESTA achieves up to 2.1× speedup and 59.4% memory reduction compared to the state-of-the-art COPSE system while maintaining the same security level.

## About the professor

**Hongyuan Liu** — Assistant Professor, Department of Computer Science, Stevens Institute of Technology.

Research interests: High-Performance Computing, GPU Computing, Computer Architecture

### Research links

- [Faculty/profile page](https://www.stevens.edu/profile/hliu96)
- [Identity evidence](https://www.liuhongyuan.com)
- [Professor website](https://liuhongyuan.com/)
- [Resolved homepage](https://www.liuhongyuan.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fully Homomorphic Encryption
**The paper assumes:** foundations of fully homomorphic encryption, ciphertext arithmetic, and secure multi-party computation
**Already in this field?** Skip this entirely if you already understand the principles and practical implementations of fully homomorphic encryption and its application in secure computation.

To understand the VESTA paper's core method of secure and efficient fully homomorphic encryption (FHE)-based inference, a solid grasp of FHE concepts and operations is essential. The rigorous course option offers a deep, university-level cryptography foundation including FHE, while the fast track provides a concise, practical introduction to FHE concepts and implementations. Choose the course for thorough theoretical grounding and the fast track for a quicker, intuition-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Cryptography and Cryptanalysis (V. Vaikuntanathan and S. Goldwasser, MIT, 2018)](https://www.youtube.com/playlist?list=PLidiQIHRzpXKZJdI4jE1K7L6yIY0IHE1Z) — Theoretical Computer Science School (TCSS) · 23 videos · 30.4h across 23 episodes

**Watch only this:** Lectures 23 and 24: 'Fully Homomorphic Encryption I' and 'Fully Homomorphic Encryption II, Private Information Retrieval', about 2.6 hours total (~79 minutes each). These two lectures focus specifically on FHE, which is central to the paper's approach.

*Why it unblocks this paper:* This MIT-level cryptography course covers foundational concepts including fully homomorphic encryption in depth, providing the rigorous theoretical background needed to understand VESTA's compile-time precomputation and runtime batching optimizations on encrypted data.

*If you want all of it:* All 23 lectures, about 30.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Fully Homomorphic Encryption (FHE)](https://www.youtube.com/playlist?list=PLA7-FOnOsomBQDMEHk51oBaOkFgIq7wQv) — Nicolas Brunie · 12 videos · 11.4h across 12 episodes

**Watch only this:** Episodes 2 'Introduction to CKKS (Approximate Homomorphic Encryption)', 3 'Introduction to FHE (Fully Homomorphic Encryption) - Pascal Paillier, FHE.org Meetup', and 4 'Part 1 Introduction to practical FHE and the TFHE scheme - Ilaria Chillotti, Simons Institute 2020', totaling about 3 hours (~57 minutes each). These provide a concise yet substantive overview of FHE schemes relevant to the paper.

*Why it unblocks this paper:* This playlist by Nicolas Brunie offers a clear, practical introduction to fully homomorphic encryption and related schemes, including CKKS and TFHE, which aligns well with the paper's focus on encrypted matrix-vector operations and efficient FHE computation.

*If you want all of it:* All 12 episodes, about 11.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the VESTA system for secure and efficient FHE-based inference of tree ensemble models, start with foundational knowledge on fully homomorphic encryption (FHE) and secure multi-party computation (MPC), as these form the cryptographic and privacy-preserving basis of the system. Next, gain a solid understanding of tree ensemble models to appreciate the machine learning context and challenges. Finally, focus on the core innovations of VESTA, including its compiler-runtime co-design and optimizations, by reviewing the authors' own talk if available or related advanced talks on compiler optimizations for encrypted computation.

### Fully homomorphic encryption lecture *(prerequisite)*
Fully homomorphic encryption is the cryptographic foundation that enables computation on encrypted data without decryption, which is critical for VESTA's privacy guarantees. Understanding FHE schemes, their capabilities, and limitations provides the necessary background to appreciate the system's optimizations.

*How the paper uses it:* VESTA leverages FHE to perform secure inference on encrypted inputs and models, making FHE knowledge essential.

▶ [Fully Homomoorphic Encryption. Shai Halevi, IBM](https://www.youtube.com/watch?v=R5jaHNC_neI) — Bar-Ilan University - אוניברסיטת בר-אילן · 1:13:57

### Secure multi-party computation seminar *(prerequisite)*
Secure multi-party computation (MPC) principles underpin the three-party setting in VESTA, where parties do not fully trust each other but jointly compute without revealing private data. A seminar-level talk on MPC provides insight into the threat models and protocols relevant to VESTA's security assumptions.

*How the paper uses it:* VESTA operates in a three-party honest-but-curious setting, relying on MPC concepts for privacy guarantees.

▶ [Secure Multiparty Computation](https://www.youtube.com/watch?v=pjlXjBSyyHI) — Simons Institute for the Theory of Computing · 6 years ago

### Tree ensemble models lecture *(prerequisite)*
Tree ensemble models are the machine learning models that VESTA targets for secure inference. Understanding their structure, inference process, and challenges such as irregular control flow is crucial to grasp why VESTA's optimizations are necessary.

*How the paper uses it:* VESTA focuses on efficient FHE-based evaluation of tree ensemble models, so understanding these models is foundational.

▶ [10 Tree Models and Ensembles: Decision Trees, Boosting ...](https://www.youtube.com/watch?v=PGITM1E2CLk) — MLVU · 1:12:00

### Compiler optimizations for encrypted computation
VESTA's key innovation lies in its compiler-runtime co-design that precomputes reorder matrix products at compile-time and partitions models for runtime batching. Advanced talks on compiler optimizations for cryptographic computations provide context for these techniques and their impact on performance.

*How the paper uses it:* VESTA introduces compile-time precomputation and runtime batching via compiler-runtime co-design to optimize encrypted computation.

▶ [Cryptographic Computations need Compilers -  Madan Musuvathi](https://www.youtube.com/watch?v=FvI9R6_T0N0) — הטכניון - מכון טכנולוגי לישראל · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the VESTA system paper, start by learning the foundational concepts of tree ensemble models, which are the type of machine learning models VESTA optimizes. Next, grasp the basics of fully homomorphic encryption (FHE), the cryptographic technique enabling secure computation on encrypted data. Then, explore secure multi-party computation principles that underpin the three-party privacy setting. Finally, study compiler optimizations for encrypted computation to appreciate VESTA's key innovations in compile-time precomputation and runtime batching.

### Tree ensemble models lecture *(prerequisite)*
Tree ensemble models combine multiple decision trees to improve prediction accuracy and robustness. Understanding how these models are structured and how inference works is essential to grasp the challenges VESTA addresses in secure and efficient evaluation.

*How the paper uses it:* VESTA targets efficient and secure inference of tree ensemble models using FHE.

▶ [10 Tree Models and Ensembles: Decision Trees, Boosting ...](https://www.youtube.com/watch?v=PGITM1E2CLk) — MLVU · 1:12:00

### Fully homomorphic encryption lecture *(prerequisite)*
Fully homomorphic encryption allows computations to be performed directly on encrypted data without decrypting it first, preserving privacy. Learning the basics of FHE helps understand how VESTA enables secure inference on encrypted inputs and models.

*How the paper uses it:* VESTA uses FHE as the cryptographic foundation for privacy-preserving computation.

▶ [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — CISSPrep · 2 years ago

### Secure multi-party computation seminar *(prerequisite)*
Secure multi-party computation (MPC) enables multiple parties to jointly compute a function over their inputs while keeping those inputs private. Understanding MPC principles clarifies the three-party setting and privacy guarantees in VESTA.

*How the paper uses it:* VESTA operates in a three-party setting relying on MPC principles to maintain privacy among parties.

▶ [Introduction to Secure Multi-Party Computation - Ahto Truu ...](https://www.youtube.com/watch?v=z4aStwXT2GE) — ACCU Conference · 1:31:06

### Compiler optimizations for encrypted computation
Compiler optimizations can significantly improve the efficiency of encrypted computations by reducing runtime overhead and memory usage. This concept is key to understanding VESTA's innovations in precomputing reorder matrix products and batching sub-models.

*How the paper uses it:* VESTA's main contributions are compiler-runtime co-design optimizations that speed up FHE-based inference.

▶ [Cryptographic Computations need Compilers -  Madan Musuvathi](https://www.youtube.com/watch?v=FvI9R6_T0N0) — הטכניון - מכון טכנולוגי לישראל · 6 years ago

## Already in your library

- [Lecture 9 - Decision Trees and Ensemble Methods | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=wr9gUr-eWdA) — also for: Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure (Benjamin C. Lee)
- [Understanding Compiler Optimization - Chandler Carruth - Opening Keynote Meeting C++ 2015](https://www.youtube.com/watch?v=FnGCDLhaxKU) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)
- [6.5 : Compiler Optimizations](https://www.youtube.com/watch?v=SLyTtM7rEDA) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the VESTA system's core innovations in efficient fully homomorphic encryption (FHE) based secure inference for tree ensemble models. Starting with a beginner-level implementation of the compile-time precomputation optimization, you then build an intermediate project that reimplements and benchmarks the core VESTA method on a public tree ensemble dataset. Finally, the advanced project extends VESTA's approach to address one of its stated limitations by exploring compiler-runtime co-design for privacy-preserving neural network inference, opening a path for research collaboration.

### Beginner — Compile-Time Precomputation of Reorder Matrices for Secure Tree Ensemble Inference
*Effort: a weekend, ~8 hours*

You build a small prototype that simulates the core VESTA optimization of precomputing the product of consecutive reorder matrices at compile-time in plaintext, then uses this precomputed matrix to perform a single encrypted matrix-vector multiplication at runtime. The project implements this for a simplified tree ensemble inference step with small example matrices and vectors.

**Why it shows you understood the paper:** This project concretely demonstrates your grasp of VESTA's key insight that expensive runtime matrix multiplications can be reduced by compile-time precomputation, a core contribution that improves efficiency in FHE-based secure inference.

**Grounded in:** VESTA precomputes consecutive reorder matrix multiplications at compile-time to reduce runtime overhead.

**Tech stack:** Python 3.11, NumPy, PyCryptodome or a simple mock encryption library

**Data:** Synthetic small matrices and vectors representing reorder matrices and encrypted inputs, constructed to illustrate the matrix multiplication optimization.

**Build it:**

1. Implement functions to generate example reorder matrices A and B and an encrypted input vector v (mock encryption).
2. Compute the product U = A × B in plaintext at 'compile-time'.
3. Implement a runtime function that multiplies U × v as a single encrypted matrix-vector multiplication.
4. Compare runtime cost (e.g., count operations or time) of performing A × (B × v) versus U × v to show efficiency gain.
5. Document the process and explain how this simulates VESTA's compile-time precomputation optimization.

**Ships as:** A GitHub repo with Python scripts demonstrating compile-time precomputation of reorder matrices, runtime multiplication on encrypted vectors, and a README explaining the optimization and its impact.

**Stretch goal:** Extend the prototype to handle chaining three or more reorder matrices and demonstrate the scalability of precomputation.

### Intermediate — Reimplementation and Benchmark of VESTA's Partitioned Secure Inference on Public Tree Ensembles
*Effort: 2 weekends, ~20 hours*

You reimplement the core VESTA method of partitioning large tree ensemble models into sub-models to reduce memory usage and enable parallel inference under a three-party FHE setting. Using a public tree ensemble dataset (e.g., UCI Adult or a small public random forest model), you implement the compile-time precomputation and runtime batching techniques, then benchmark runtime and memory against a naive baseline without these optimizations.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce VESTA's main system optimizations and quantitatively evaluate their impact on runtime and memory, demonstrating a deep understanding of the paper's core contributions and experimental methodology.

**Grounded in:** Partitioning large tree ensemble models reduces memory usage and enables parallel inference.

**Tech stack:** Python 3.11, scikit-learn (for tree ensemble models), NumPy, multiprocessing or concurrent.futures for parallelism, mock FHE encryption library or simulation

**Data:** Publicly available tree ensemble models trained on datasets like UCI Adult or synthetic tree ensembles generated with scikit-learn, used as a substitute for the paper's private models.

**Build it:**

1. Train or load a small tree ensemble model (e.g., random forest) using scikit-learn.
2. Implement the reorder matrix generation and compile-time precomputation for consecutive reorder matrices.
3. Partition the tree ensemble into sub-models and implement runtime batching with parallel inference of sub-models.
4. Simulate encrypted inference by applying the optimized matrix-vector multiplications on encrypted inputs (mock encryption).
5. Implement a naive baseline performing inference without partitioning or precomputation.
6. Benchmark runtime and memory usage of both approaches and report speedup and memory reduction.
7. Write a README explaining the implementation, benchmarks, and how results relate to VESTA's claims.

**Ships as:** A GitHub repo with code to run partitioned secure inference on tree ensembles, benchmark scripts, and a detailed README comparing optimized vs baseline results.

**Stretch goal:** Incorporate a simple ciphertext packing optimization (e.g., rotations) to further reduce runtime overhead, exploring one of VESTA's future directions.

### Advanced — Extending VESTA's Compiler-Runtime Co-Design to Privacy-Preserving Neural Network Inference
*Effort: 3-4 weeks*

You design and implement a prototype system that adapts VESTA's compiler-runtime co-design paradigm—specifically compile-time precomputation and runtime batching—to optimize fully homomorphic encryption based secure inference of a simple neural network model. This addresses the paper's stated limitation that VESTA is specialized for tree ensembles and explores a future direction of extending the approach to other model types. You evaluate efficiency gains and discuss security implications.

**Why it shows you understood the paper:** This project demonstrates your ability to critically extend the paper's core methodology beyond its original scope, tackling a key limitation and engaging with the paper's future research directions, which is the kind of work that can spark meaningful academic discussion.

**Grounded in:** The approach is specialized for tree ensemble models and may not directly extend to other model types. Future directions include extending VESTA's compiler-runtime co-design paradigm to other privacy-preserving machine learning models.

**Tech stack:** Python 3.11, PyTorch (for neural network modeling), NumPy, mock or lightweight FHE simulation library, multiprocessing or async for batching

**Data:** Use a small public dataset suitable for neural network classification (e.g., MNIST subset or Iris dataset) to train a simple feedforward neural network as the target model.

**Build it:**

1. Train a small neural network model on a public dataset using PyTorch.
2. Analyze the neural network's computation graph to identify matrix operations amenable to compile-time precomputation.
3. Implement compile-time precomputation of consecutive linear layers or activation approximations in plaintext.
4. Partition the neural network into sub-models or layers to enable runtime batching and parallel encrypted inference.
5. Simulate encrypted inference using mock FHE operations applying the precomputed matrices and batched execution.
6. Benchmark runtime and memory usage compared to a naive encrypted inference baseline without optimizations.
7. Document the design decisions, challenges in adapting VESTA's approach, and potential security considerations.

**Ships as:** A GitHub repo containing code for secure neural network inference with compiler-runtime co-design optimizations, benchmark results, and a comprehensive README discussing the extension and its implications.

**Stretch goal:** Explore integrating simple model obfuscation techniques balancing privacy and efficiency as suggested in VESTA's future directions.

_The paper does not provide released code or datasets; all implementations must reimplement methods from the paper's descriptions and use publicly available or synthetic datasets as substitutes._
