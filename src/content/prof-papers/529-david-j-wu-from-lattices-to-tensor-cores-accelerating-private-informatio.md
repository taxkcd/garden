---
title: "529 · From Lattices to Tensor Cores: Accelerating Private Information Retrieval — David J. Wu"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-j-wu"
source_hash: "ef5781794f2d7ff94ff58dc736f264338fa2ee018c820ecff66c383eea57e3eb"
sequence: 529
generator: "outreach-garden: managed"
---

# 529 · From Lattices to Tensor Cores: Accelerating Private Information Retrieval

## At a glance

- **Professor:** David J. Wu
- **Institution:** University of Texas at Austin
- **Paper:** [From Lattices to Tensor Cores: Accelerating Private Information Retrieval](https://eprint.iacr.org/2026/1816.pdf)
- **Authors:** Sidaarth Sabhnani, David J. Wu
- **Year:** 2026

## Paper overview

This paper presents SandwichPIR, a new single-server private information retrieval (PIR) protocol that leverages GPU tensor cores to dramatically accelerate query processing without requiring any offline communication. It achieves high throughput by recasting PIR computations as dense matrix multiplications optimized for modern Nvidia GPUs. The protocol supports private access to large databases like Wikipedia with low latency and cost.

### Why it matters

**Research problem:** How to efficiently perform single-server private information retrieval (PIR) with silent preprocessing (no offline communication) at scale, overcoming the memory bandwidth bottleneck of CPU-based implementations.

**Why it matters:** PIR enables clients to query databases privately without revealing their interests, which is critical for privacy-preserving applications deployed by major companies. Existing efficient single-server PIR schemes either require large offline hints or are limited by CPU memory bandwidth, restricting scalability and practicality.

**Key contributions:**

- First single-server PIR protocol that performs nearly all server computation as dense 8-bit integer matrix multiplications on GPU tensor cores without offline communication.
- Reformulation of the InsPIRe hint-compression algorithm as a dense matrix-vector multiplication amenable to GPU acceleration.
- A novel modulus switching variant that sandwiches a power-of-two modulus between two NTT-friendly moduli to reduce noise and enable efficient computation.
- Implementation of SandwichPIR using CUDA and Rust leveraging CUTLASS library for tensor core matrix multiplications.
- Demonstration of practical private access to English Wikipedia with low latency and cost.

## About the professor

**David J. Wu** — Assistant Professor, Computer Science, University of Texas at Austin.

Research interests: cryptography and computer security

### Research links

- [Faculty/profile page](https://www.cs.utexas.edu/~dwu4)
- [Resolved homepage](https://www.cs.utexas.edu/~dwu4/)
- [Lab website](https://crypto.cs.utexas.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=sow8PQYAAAAJ)
- [DBLP](https://dblp.org/pid/32/10400-1.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Lattice-based Cryptography
**The paper assumes:** lattice-based cryptography, ring learning with errors (RLWE), homomorphic encryption over rings, modulus switching techniques
**Already in this field?** Skip this entirely if you already have a solid understanding of lattice-based cryptography and homomorphic encryption schemes.

This background focuses on lattice-based cryptography, which is foundational to understanding the cryptographic constructions, ring packing algorithms, and modulus switching techniques used in the SandwichPIR protocol. The rigorous course option provides a deep, structured university-level introduction to lattices and lattice-based cryptography, while the fast track offers a concise, visual introduction to the same core concepts for quicker comprehension. Choose the course for thorough mastery or the fast track for a focused overview that covers the essentials efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [An Introduction to Lattices, Lattice Reduction, and Lattice-Based Cryptography | Joseph H. Silverman, Brown University](https://www.youtube.com/playlist?list=PLldN_DpkXL3Zp0fZEUKpMq3H0JBGBFXvO) — IAS | PCMI Park City Mathematics Institute · 18 videos · 4.8h across 18 episodes

**Watch only this:** Lectures #1 part 1 through #4 part 4 (episodes 1 to 13), about 3.3 hours — covering lattices, lattice problems, lattice reduction, and lattice-based public key cryptosystems to build a solid foundation for the paper's cryptographic methods.

*Why it unblocks this paper:* This Brown University lecture series by Joseph H. Silverman thoroughly covers lattices, hard lattice problems, lattice reduction, and lattice-based cryptosystems, directly supporting the paper's reliance on lattice assumptions, ring packing, and modulus switching techniques.

*If you want all of it:* All 18 episodes, about 4.8 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [The Mathematics of Lattice-Based Cryptography](https://www.youtube.com/playlist?list=PLA1qgQLL41STNFDvPJRqrHtuz0PIEJ4a8) — Cryptography 101 · 7 videos · 2.5h across 7 episodes

**Watch only this:** Lectures 1 through 5 (episodes 1 to 5), about 1.75 hours — covering introduction, SIS, LWE, lattices, and their interrelations, sufficient for understanding the paper's lattice assumptions and noise management.

*Why it unblocks this paper:* This concise 7-episode series from Cryptography 101 focuses specifically on the mathematics of lattice-based cryptography, including SIS, LWE, and ring-based problems, providing a clear and focused introduction aligned with the paper's core cryptographic concepts.

*If you want all of it:* All 7 episodes, about 2.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SandwichPIR paper, start with foundational knowledge of lattice-based cryptography, which underpins the security assumptions of the PIR scheme. Next, study private information retrieval protocols to grasp the core cryptographic problem the paper addresses. Then, learn about homomorphic encryption modulus switching techniques, a key method adapted in the paper to reduce noise in computations. Finally, focus on the paper's core innovation: accelerating PIR using GPU tensor core matrix multiplication, and review any available talks by the authors themselves for direct insights.

### Lattice-based cryptography lecture *(prerequisite)*
Lattice-based cryptography forms the theoretical foundation for the security assumptions in SandwichPIR. Understanding lattice problems, their hardness, and how they enable cryptographic constructions is essential before delving into the PIR protocol details.

*How the paper uses it:* The paper's security and correctness rely on lattice assumptions and lattice-based cryptographic techniques.

▶ [Vinod Vaikuntanathan - Lattices and Cryptography:  A Match Made in Heaven](https://www.youtube.com/watch?v=5LGwaICJ5sw) — Institute for Quantum Computing · 1:00:57 · 11 years ago

### Private information retrieval protocols seminar *(prerequisite)*
Private information retrieval (PIR) protocols are the core cryptographic problem addressed by SandwichPIR. Studying existing PIR schemes and their efficiency challenges provides context for the paper's contributions in accelerating PIR computations.

*How the paper uses it:* SandwichPIR improves efficiency and scalability of single-server PIR protocols without offline communication.

▶ [Offline Online Private Information Retrieval Dima](https://www.youtube.com/watch?v=tavDDJ6i88s) — The BIU Research Center on Applied Cryptography and Cyber Security · 57:50 · 4 years ago

### Homomorphic encryption modulus switching talk *(prerequisite)*
Modulus switching is a key technique in homomorphic encryption to manage noise growth during computations. The paper adapts a novel variant of modulus switching to reduce noise accumulation in PIR computations, making this topic critical to understand.

*How the paper uses it:* SandwichPIR uses a novel modulus switching variant to reduce noise and enable efficient computation.

▶ [Fully Homomorphic Encryption II](https://www.youtube.com/watch?v=iER9RkD05Oc) — Simons Institute for the Theory of Computing · 1:03:38 · 11 years ago

### GPU tensor core matrix multiplication lecture
The paper's main technical innovation is expressing PIR computations as dense matrix multiplications optimized for Nvidia GPU tensor cores. Understanding how tensor cores accelerate matrix multiplication and their programming model is crucial to grasping the performance gains.

*How the paper uses it:* SandwichPIR implements most server computation as dense 8-bit integer matrix multiplications on GPU tensor cores.

▶ [DGEMM using Tensor Cores, and Its Accurate and Reproducible Versions](https://www.youtube.com/watch?v=vRmVVOjqQqQ) — ISC High Performance · 23:27 · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the SandwichPIR paper, start by building a foundation in lattice-based cryptography, which underpins the security assumptions of the PIR scheme. Next, learn about private information retrieval protocols to grasp the core cryptographic problem the paper addresses. Then, study homomorphic encryption modulus switching techniques, a key method adapted to reduce noise in PIR computations. Finally, explore GPU tensor core matrix multiplication to understand the hardware acceleration enabling the paper's high-throughput server computations.

### Lattice-based cryptography lecture *(prerequisite)*
Lattice-based cryptography is a modern cryptographic framework relying on the hardness of lattice problems, which are believed to be secure even against quantum computers. This foundation is essential to understand the security assumptions and constructions used in SandwichPIR.

*How the paper uses it:* The paper's PIR protocol security and noise management rely on lattice-based cryptographic assumptions and techniques.

▶ [Introduction to Lattice Based Cryptography](https://www.youtube.com/watch?v=37Ri1jpl5p8) — Matthew Dozer · 7:08 · 9 years ago

### Private information retrieval protocols seminar *(prerequisite)*
Private Information Retrieval (PIR) protocols allow a client to query a database without revealing which item is being requested. Understanding the basic PIR problem and existing protocols is crucial to appreciate the improvements SandwichPIR offers in efficiency and scalability.

*How the paper uses it:* SandwichPIR is a novel single-server PIR protocol that improves throughput and latency over prior schemes.

▶ [Introduction to Private Information Retrieval - Dima Kogan](https://www.youtube.com/watch?v=JBVP3_PmbsI) — The BIU Research Center on Applied Cryptography and Cyber Security · 58:03 · 4 years ago

### Homomorphic encryption modulus switching talk *(prerequisite)*
Modulus switching is a technique used in homomorphic encryption to manage noise growth during encrypted computations, enabling more efficient and accurate operations. Grasping this concept helps in understanding how SandwichPIR reduces noise accumulation in its PIR computations.

*How the paper uses it:* The paper adapts modulus switching variants to reduce noise and enable efficient PIR computations over multiple moduli.

▶ [Homomorphic Encryption from Ring Learning with Errors](https://www.youtube.com/watch?v=Dm7GI_8L4dA) — Microsoft Research · 51:09 · 10 years ago

### GPU tensor core matrix multiplication lecture
GPU tensor cores are specialized hardware units designed to accelerate dense matrix multiplications, especially for 8-bit integer arithmetic with 32-bit accumulation. Learning how these cores work and how matrix multiplication is implemented on GPUs clarifies how SandwichPIR achieves its high throughput.

*How the paper uses it:* SandwichPIR expresses most server computations as dense 8-bit integer matrix multiplications accelerated on Nvidia GPU tensor cores.

▶ [What are Tensor Cores?](https://www.youtube.com/watch?v=fqQyopIWN-8) — Greg Salazar · 5:18 · 8 years ago

## Already in your library

- [Lattice-based cryptography: The tricky math of dots](https://www.youtube.com/watch?v=QDdOoYdb748) — also for: On (Non-)Isomorphism of Self-Dual Lattices and Codes (Huck Bennett)
- [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the SandwichPIR protocol from the paper "From Lattices to Tensor Cores: Accelerating Private Information Retrieval." The beginner project focuses on reproducing a core computational step using familiar tools, the intermediate project involves running and extending the authors' open-source implementation on a smaller dataset, and the advanced project tackles a stated limitation by exploring parallelism optimizations on GPU for PIR computations.

### Beginner — Matrix-Vector Multiplication for PIR Ring Packing
*Effort: a weekend, ~8 hours*

You build a standalone implementation of the InsPIRe ring packing algorithm's core operation as a dense matrix-vector multiplication over integers, simulating the PIR query step. This reproduces the key insight that PIR computations can be expressed as matrix multiplications amenable to GPU acceleration, but implemented on CPU using Python and NumPy.

**Why it shows you understood the paper:** This project shows you grasp the paper's reformulation of the PIR hint-compression algorithm as a matrix-vector product, a foundational step enabling GPU tensor core acceleration.

**Grounded in:** Reformulation of the InsPIRe hint-compression algorithm as a dense matrix-vector multiplication amenable to GPU acceleration.

**Tech stack:** Python 3.11, NumPy

**Data:** Simulated query vectors and fixed query-independent matrices representing small PIR parameters, as described in the paper's algorithm section.

**Build it:**

1. Read the paper section describing the InsPIRe ring packing algorithm and its matrix-vector multiplication reformulation.
2. Implement a function to generate a fixed query-independent matrix representing the ring packing transformation for small parameters.
3. Implement a function to generate random client query vectors matching the expected input format.
4. Compute the matrix-vector product using NumPy and verify output shapes and basic correctness.
5. Write a README explaining the connection to the paper's PIR hint compression step.

**Ships as:** A GitHub repo with Python scripts implementing the matrix-vector multiplication for PIR ring packing, example inputs/outputs, and a README linking the code to the paper's algorithmic insight.

**Stretch goal:** Extend the implementation to perform modulus switching on the matrix and vector elements to simulate noise reduction as described in the paper.

### Intermediate — Run and Extend SandwichPIR on a Small Wikipedia Subset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' open-source SandwichPIR implementation on a small subset of Wikipedia articles (e.g., from the Wikimedia dataset on HuggingFace). You measure query latency and communication overhead, then implement a simple baseline PIR scheme (e.g., a naive linear scan) for comparison. Finally, you report throughput and latency metrics similar to those in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code, understand the full PIR pipeline, and reproduce key performance metrics on real data, confirming comprehension of the protocol's practical impact.

**Grounded in:** Implementation of SandwichPIR using CUDA and Rust leveraging CUTLASS library for tensor core matrix multiplications; demonstration of practical private access to English Wikipedia with low latency and cost.

**Tech stack:** Rust, CUDA, Linux shell, Python 3.11 (for data prep)

**Data:** A small subset of English Wikipedia articles from the Wikimedia dataset available at https://huggingface.co/datasets/wikimedia/wi

**Build it:**

1. Clone the SandwichPIR repository from https://github.com/sidsabh/sandwichpir.
2. Set up the required environment with CUDA and Rust toolchains.
3. Download and preprocess a small subset of Wikipedia articles from the Wikimedia dataset.
4. Run the SandwichPIR server and client on this dataset to measure query latency and communication.
5. Implement a naive linear scan PIR baseline in Rust or Python for comparison.
6. Collect and plot throughput and latency metrics, comparing SandwichPIR to the baseline.
7. Document the setup, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/sidsabh/sandwichpir> — released by the paper's authors
- <https://huggingface.co/datasets/wikimedia/wi> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing instructions to run SandwichPIR on Wikipedia data, baseline implementation, performance results, and analysis linking back to the paper's claims.

**Stretch goal:** Add support for batching multiple queries to demonstrate throughput improvements as in the paper's cross-client batching results.

### Advanced — GPU Parallelism for Overlapping Linear Scan and Ring Packing in SandwichPIR
*Effort: 3-4 weeks*

You extend the SandwichPIR implementation by modifying the server-side code to overlap the linear scan and ring packing computations on the GPU, exploiting parallelism to reduce total query latency. You benchmark the modified protocol against the original sequential implementation on a medium-sized dataset and analyze throughput and latency gains.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction from the paper, demonstrating deep understanding of the protocol internals, GPU programming, and performance optimization in lattice-based PIR.

**Grounded in:** The current implementation runs linear scan and ring packing sequentially, potentially leaving room for further parallelism; future direction to explore overlapping computations on GPUs.

**Tech stack:** Rust, CUDA, CUTLASS library, Linux shell

**Data:** Use the same Wikipedia subset as in the intermediate project or a synthetic dataset of similar size.

**Build it:**

1. Study the SandwichPIR server implementation focusing on the linear scan and ring packing stages.
2. Profile the current sequential execution to identify bottlenecks and GPU utilization.
3. Design and implement GPU kernel or CUDA stream concurrency to overlap linear scan and ring packing computations.
4. Test correctness of the modified protocol ensuring privacy and correctness guarantees hold.
5. Benchmark the modified implementation against the original on query latency and throughput.
6. Document the design decisions, implementation details, benchmarks, and relation to the paper's limitation and future work.

**Verified links from the paper:**

- <https://github.com/sidsabh/sandwichpir> — released by the paper's authors

**Ships as:** A forked SandwichPIR repository with parallelized GPU computations, benchmark scripts, and a comprehensive report linking the work to the paper's stated limitations and future directions.

**Stretch goal:** Investigate the impact of your parallelism on noise accumulation and correctness heuristics, proposing any necessary parameter adjustments.
