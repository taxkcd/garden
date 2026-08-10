---
title: "159 · Leveraging ASIC AI Chips for Homomorphic Encryption — Tushar Krishna"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tushar-krishna"
source_hash: "5bbee7b400bb17ddf1e55e5255e3ec254f4c2a137a5560ce4ec79486f619b985"
sequence: 159
generator: "outreach-garden: managed"
---

# 159 · Leveraging ASIC AI Chips for Homomorphic Encryption

## At a glance

- **Professor:** Tushar Krishna
- **Institution:** Georgia Institute of Technology
- **Paper:** [Leveraging ASIC AI Chips for Homomorphic Encryption](https://arxiv.org/pdf/2501.07047v4)
- **Authors:** Jianming Tong, Tianhao Huang, Jingtian Dang, Leo de Castro, Anirudh Itagi, Anupam Golder, Asra Ali, Jeremy Kun, Jevin Jiang, Arvind, G. Edward Suh, Tushar Krishna
- **Year:** 2026

## Paper overview

This paper presents CROSS, a compiler framework that enables efficient execution of Homomorphic Encryption (HE) workloads on existing AI accelerators like Google's TPUs. HE allows computation on encrypted data to preserve privacy but is computationally expensive. GPUs accelerate HE but are less energy efficient than specialized ASICs. CROSS overcomes architectural mismatches between HE algorithms optimized for GPUs and TPU hardware by transforming high-precision arithmetic into dense low-precision matrix multiplications and embedding costly data reorderings into computation. This approach achieves state-of-the-art throughput and energy efficiency for HE on TPUs without hardware changes.

### Why it matters

**Research problem:** Homomorphic Encryption offers strong privacy by enabling computation on encrypted data but suffers from prohibitive computational overhead. While GPUs accelerate HE, they are significantly less energy efficient than specialized ASICs. Existing HE algorithms optimized for GPUs do not map well to AI accelerators like TPUs due to differences in arithmetic precision and memory manipulation granularity, leading to poor hardware utilization and performance degradation.

**Why it matters:** Privacy-preserving computation is critical for secure cloud services and AI applications handling sensitive data. Efficient HE execution on widely available hardware like AI accelerators can enable practical deployment of privacy-preserving AI without the high cost of custom ASICs, thus broadening access and adoption.

**Key contributions:**

- Systematic characterization of architectural mismatches when porting GPU-optimized HE algorithms to AI accelerators like TPUs.
- Basis-Aligned Transformation (BAT) to map high-precision modular integer arithmetic to low-precision matrix multiplication engines, enabling efficient use of TPU MXUs.
- Memory-Aligned Transformation (MAT) to create layout-invariant HE operators by embedding data reorderings into offline computation, eliminating runtime overhead.
- Comprehensive evaluation demonstrating CROSS achieves state-of-the-art throughput and energy efficiency for critical HE operators on Google TPUs compared to CPU, GPU, FPGA, and HE ASIC implementations.

## About the professor

**Tushar Krishna** — Associate Professor, School of Electrical & Computer Engineering, Georgia Institute of Technology.

Research interests: AI/ML Accelerators, Compositional & Cognitive AI, Distributed AI Systems, Efficient LLM & Model Inference, AI-Assisted Design, Interconnection & On-Chip Networks, Simulation & Benchmarking, Emerging Tech & Packaging, Memory & Virtual-Memory Systems, Edge & Embodied Computing, Privacy & Security

### Research links

- [Faculty/profile page](http://tusharkrishna.ece.gatech.edu)
- [Professor website](https://tushar-krishna.github.io/#)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Homomorphic Encryption
**The paper assumes:** homomorphic encryption schemes, modular arithmetic, Number Theoretic Transform, and encrypted computation principles
**Already in this field?** Skip this entirely if you already understand the basics of homomorphic encryption and its core arithmetic operations.

To understand the core cryptographic concepts and algorithms underlying homomorphic encryption (HE) as used in the paper, these two background options provide complementary learning paths. The rigorous course offers a deep, structured university-level introduction to modern cryptography, including modular arithmetic and encryption schemes foundational to HE. The fast track playlist delivers a concise, practical introduction to homomorphic encryption concepts and implementations in Python, ideal for quickly grasping the key ideas and applications relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Invitation to Modern Cryptography: CSE207, UCSD Computer Science](https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB) — Mihir Bellare · 28 videos · 24.1h across 28 episodes

**Watch only this:** Episodes 1-20 (Introduction through Computational Number Theory Part 2 and Public-key Encryption Part 1), about 17 hours — these cover the essential cryptographic primitives, number theory, and public-key encryption concepts foundational to homomorphic encryption.

*Why it unblocks this paper:* This UCSD Computer Science course by Mihir Bellare is a well-regarded, comprehensive introduction to modern cryptography, covering block ciphers, pseudorandom functions, symmetric and public-key encryption, and computational number theory. It provides the theoretical foundation necessary to understand homomorphic encryption schemes and modular arithmetic used in the paper.

*If you want all of it:* All 28 episodes, about 24.1 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Homomorphic Encryption In Python From Scratch](https://www.youtube.com/playlist?list=PLsS_1RYmYQQHy-Hhr3WELOXiEa5vF-UN9) — Sefik Ilkin Serengil · 11 videos · 2.6h across 11 episodes

**Watch only this:** Episodes 1-6 (LightPHE through Partially Homomorphic Encryption with ElGamal in Python From Scratch), about 1.3 hours — these episodes introduce the main partially homomorphic encryption schemes and their Python implementations, sufficient to grasp the HE basics.

*Why it unblocks this paper:* This playlist by Sefik Ilkin Serengil offers a concise, implementation-focused introduction to partially and fully homomorphic encryption in Python. It covers key HE schemes and practical examples, providing an accessible overview of the concepts and algorithms relevant to the paper's HE workloads and transformations.

*If you want all of it:* All 11 episodes, about 2.6 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Leveraging ASIC AI Chips for Homomorphic Encryption," start by building foundational knowledge on homomorphic encryption and AI accelerator architectures, which are critical to grasp the privacy-preserving computations and hardware mapping challenges addressed by CROSS. Next, gain insights into compiler optimizations relevant to hardware to appreciate the transformations CROSS applies. Finally, focus on the paper's core contribution by watching the authors' own detailed presentation of CROSS, which explains their novel compiler framework and its impact on efficient HE execution on TPUs.

### Homomorphic encryption computation lecture *(prerequisite)*
Understanding the fundamentals of homomorphic encryption is essential to appreciate how CROSS enables privacy-preserving computations on encrypted data. The selected lecture provides a rigorous, research-level introduction to HE schemes and their computational properties, which underpin the paper's motivation and technical approach.

*How the paper uses it:* HE fundamentals are critical to grasp the privacy-preserving computations enabled by CROSS.

▶ [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — Microsoft Research · 52:55

### AI accelerator architecture seminar *(prerequisite)*
Knowledge of AI accelerator hardware, especially TPUs, is crucial to understand the architectural mismatches and hardware utilization challenges that CROSS addresses. The chosen seminar by Professor Tushar Krishna, a co-author, provides an advanced perspective on AI accelerator design and data movement optimization relevant to this work.

*How the paper uses it:* Understanding AI accelerator hardware like TPUs is critical to understand CROSS's hardware mapping.

▶ [[REFAI Seminar 12/09/21] Teaching AI the game of AI Accelerator Design](https://www.youtube.com/watch?v=mwFxVIKGeOE) — Rutgers Efficient AI Seminar · 1:21:30 · 4 years ago

### Compiler optimizations for hardware talk *(prerequisite)*
CROSS is fundamentally a compiler framework that applies novel transformations to map HE workloads efficiently onto AI accelerators. A solid grasp of compiler optimization techniques for hardware is necessary to appreciate the design and impact of CROSS's Basis-Aligned and Memory-Aligned Transformations.

*How the paper uses it:* Understanding compiler transformations is key to CROSS's design.

▶ [WiCT Meetup — Saturday, March 14, 2026: Compiler Optimizations for CPU-GPU](https://www.youtube.com/watch?v=02p4PdSCekk) — LLVM · 4 months ago

### CROSS compiler framework talk *(the paper's own talk)*
This is the authors' own detailed presentation of the CROSS framework at HPCA'26, providing the most precise and comprehensive explanation of their approach, technical contributions, and evaluation results. Watching this talk will give an advanced reader direct insight into the innovations and challenges addressed by the paper.

*How the paper uses it:* Directly targets the authors' presentation for the most precise explanation of their approach.

▶ [CROSS: Leveraging ASIC AI Chips for Homomorphic Encryption [HPCA'26]](https://www.youtube.com/watch?v=TFnQPlLZs1E) — jianming Tong · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on leveraging AI ASIC chips for homomorphic encryption, start by learning the fundamentals of homomorphic encryption to grasp the privacy-preserving computation concept. Next, build foundational knowledge of AI accelerator architectures like TPUs to appreciate the hardware context. Then, study modular arithmetic and matrix multiplication basics, which are central to the paper's key compiler transformations. Finally, explore the CROSS compiler framework and its core transformations that enable efficient HE execution on AI accelerators.

### Homomorphic encryption computation lecture *(prerequisite)*
Homomorphic encryption allows computations directly on encrypted data without decrypting it, preserving privacy. Understanding its principles and common schemes provides the foundation to appreciate how privacy-preserving computations are enabled.

*How the paper uses it:* The paper builds on homomorphic encryption to enable efficient encrypted computation on AI accelerators.

▶ [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — Microsoft Research · 52:55

### AI accelerator architecture seminar *(prerequisite)*
AI accelerators like TPUs are specialized hardware designed for efficient matrix computations and AI workloads. Learning their architecture and capabilities helps understand why mapping HE workloads to such hardware is challenging and beneficial.

*How the paper uses it:* The paper targets TPU hardware to accelerate homomorphic encryption workloads efficiently.

▶ [AI Accelerators: What They Are, How They Work, and Which ...](https://www.youtube.com/watch?v=pLW5rjGH-Po) — Binary Verse AI · 14:19

### Modular arithmetic matrix multiplication lecture *(prerequisite)*
Modular arithmetic involves computations with integers wrapped around a modulus, and matrix multiplication is a key linear algebra operation. Understanding how modular arithmetic can be expressed as matrix multiplication is crucial for the paper's compiler transformations.

*How the paper uses it:* The paper’s Basis-Aligned Transformation converts high-precision modular arithmetic into low-precision matrix multiplications.

▶ [Modular Arithmetic: Overview and Properties (the mod Operator)](https://www.youtube.com/watch?v=POEbZDlRmUk) — Noureddin Sadawi · 18:38

### CROSS compiler framework talk *(the paper's own talk)*
This talk presents the CROSS compiler framework that transforms homomorphic encryption workloads to efficiently run on AI accelerators like TPUs. It explains the key compiler transformations and how they overcome hardware mismatches.

*How the paper uses it:* This is the authors’ own presentation explaining their approach and results in detail.

▶ [CROSS: Leveraging ASIC AI Chips for Homomorphic Encryption [HPCA'26]](https://www.youtube.com/watch?v=TFnQPlLZs1E) — jianming Tong · 6 months ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the CROSS compiler framework for efficient homomorphic encryption (HE) on AI accelerators. Starting with a beginner-level exploration of modular arithmetic matrix multiplication, you then implement a simplified version of the Basis-Aligned Transformation (BAT) to accelerate HE kernels on TPU-like hardware. Finally, you tackle an advanced extension by addressing one of the paper's limitations—improving small matrix utilization or simulating data reorderings—showing your ability to innovate beyond the original work.

### Beginner — Modular Arithmetic via Low-Precision Matrix Multiplication
*Effort: a weekend, ~8 hours*

You build a small Python program that demonstrates how high-precision modular arithmetic can be represented as low-precision matrix multiplications. This involves implementing a basic modular multiplication using dense 8-bit integer matrices and verifying correctness against a direct modular arithmetic baseline.

**Why it shows you understood the paper:** This project shows you grasp the core insight of the paper's Basis-Aligned Transformation (BAT) by faithfully reproducing the arithmetic mapping that enables TPU MXU utilization.

**Grounded in:** Basis-Aligned Transformation (BAT) to map high-precision modular integer arithmetic to low-precision matrix multiplication engines, enabling efficient use of TPU MXUs.

**Tech stack:** Python 3.11, NumPy, Jupyter Notebook

**Data:** Synthetic integer matrices generated within the program to simulate modular operands.

**Build it:**

1. Implement a baseline modular multiplication function for integers using Python and NumPy.
2. Design a representation of modular integers as vectors/matrices suitable for 8-bit matrix multiplication.
3. Implement the equivalent modular multiplication using low-precision dense matrix multiplication.
4. Compare outputs of both methods on sample inputs to verify correctness.
5. Document the approach and include simple performance timing comparisons.

**Ships as:** A Jupyter Notebook demonstrating modular arithmetic via low-precision matrix multiplication with correctness verification and timing results.

**Stretch goal:** Add visualization of how modular values map to matrix blocks to deepen intuition.

### Intermediate — Simplified CROSS BAT Compiler for HE NTT Kernel
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the CROSS compiler's Basis-Aligned Transformation (BAT) targeting the Number Theoretic Transform (NTT) kernel of homomorphic encryption. Using JAX, you transform high-precision modular arithmetic into low-precision matrix multiplications and benchmark throughput against a naive modular NTT implementation.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core compiler transformation and validate its performance benefits on a critical HE operator, showing practical command of the paper's main contribution.

**Grounded in:** On a real Google TPU v6e, CROSS achieves up to 1.43× throughput improvement for Number Theoretic Transform (NTT) over WarpDrive on NVIDIA A100 GPU.

**Tech stack:** Python 3.11, JAX, NumPy

**Data:** Synthetic polynomial coefficient vectors representing HE ciphertexts, generated in code as substitutes for real HE inputs.

**Build it:**

1. Implement a baseline NTT kernel performing modular arithmetic in Python/JAX.
2. Implement the BAT transformation to convert modular arithmetic into low-precision matrix multiplications.
3. Integrate the BAT-transformed kernel into a JAX program targeting TPU-like matrix multiplication primitives.
4. Benchmark throughput and compare against the baseline NTT kernel on CPU or GPU.
5. Write a README explaining the BAT approach, implementation details, and performance results.

**Verified links from the paper:**

- <https://github.com/EfficientPPML/CROSS> — a third-party/baseline artifact the paper cites — not the authors' own code
- <http://github.com/google/jax> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with JAX code implementing BAT for NTT, performance benchmarks, and documentation.

**Stretch goal:** Add Memory-Aligned Transformation (MAT) to embed data reorderings offline and measure runtime improvements.

### Advanced — Extending CROSS: Improving Small Matrix Utilization for Evaluation Keys
*Effort: 3+ weeks, ~80 hours*

You develop an extension to the CROSS compiler framework addressing the limitation that BAT is less effective for small matrix sizes (e.g., evaluation keys). You explore hybrid approaches such as finer-grained tensor engines or fallback algorithms to improve MXU utilization and reduce underutilization. You implement and benchmark your approach against the original BAT method.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions by proposing and implementing a concrete architectural or compiler-level improvement, demonstrating research-level thinking and technical skill.

**Grounded in:** The BAT transformation is less effective for small matrix sizes such as evaluation keys, leading to underutilization of MXU in those cases.

**Tech stack:** Python 3.11, JAX, NumPy, Matplotlib

**Data:** Synthetic small matrix inputs simulating evaluation keys in HE schemes, generated programmatically.

**Build it:**

1. Study the BAT implementation and identify bottlenecks for small matrix sizes.
2. Research and design a hybrid approach combining BAT with fallback algorithms or finer-grained tensor operations.
3. Implement the hybrid approach in JAX, integrating with the existing BAT codebase.
4. Benchmark throughput and MXU utilization against the original BAT method on small matrices.
5. Visualize performance improvements and document the design decisions and results.
6. Prepare a detailed README discussing the limitation addressed, your approach, and evaluation.

**Verified links from the paper:**

- <https://github.com/EfficientPPML/CROSS> — a third-party/baseline artifact the paper cites — not the authors' own code
- <http://github.com/google/jax> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with extended CROSS BAT code, benchmarks showing improved small matrix utilization, and comprehensive documentation.

**Stretch goal:** Prototype a simulated hardware data shuffling engine to further reduce memory bottlenecks as suggested in future directions.
