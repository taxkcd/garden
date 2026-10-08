---
title: "316 · Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices — Qi Cheng"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-qi-cheng"
source_hash: "cce7643390a46fbdd5374999a1c63a880690603dfef94174c028985e69ce447d"
sequence: 316
generator: "outreach-garden: managed"
---

# 316 · Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices

## At a glance

- **Professor:** Qi Cheng
- **Institution:** University of Oklahoma
- **Paper:** [Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices](https://arxiv.org/abs/2605.29169)
- **Authors:** Ahmad Tashfeen, Qi Cheng
- **Year:** 2026

## Paper overview

This paper improves genetic algorithm-based methods for solving the Shortest Vector Problem (SVP) in lattices, which is foundational for quantum-safe cryptography. The authors enhance previous evolutionary sieving techniques by incorporating domain-specific knowledge from lattice theory, enabling better crossover operations and extending applicability to module lattices. Their approach outperforms classical lattice reduction algorithms like LLL and BKZ on benchmark problems up to 100 dimensions.

### Why it matters

**Research problem:** The Shortest Vector Problem (SVP) in lattices is a computationally hard problem critical to the security of lattice-based post-quantum cryptography. Existing algorithms struggle to efficiently solve SVP in higher dimensions, especially for module lattices. The paper addresses improving evolutionary sieving algorithms for SVP by integrating domain knowledge to enhance performance and scalability.

**Why it matters:** SVP underpins the hardness assumptions of many post-quantum cryptographic schemes standardized by NIST. Efficiently solving SVP threatens these cryptosystems, while improved algorithms can also advance understanding of lattice problems. Protecting data against future quantum attacks depends on the robustness of SVP-based cryptography.

**Key contributions:**

- Defined an improved SVP representation for genetic algorithms enabling a versatile crossover operator compatible with module lattices.
- Extended evolutionary sieving algorithms to module lattices for the first time.
- Demonstrated improved scalability and performance over Laarhoven’s approach, solving SVP challenges up to 100 dimensions.
- Showed their algorithm outperforms classical lattice reduction algorithms LLL and BKZ on benchmark problems.
- Provided a detailed analysis of algorithmic complexity and mutation strategies.

## About the professor

**Qi Cheng** — Williams Companies Foundation Presidential Professor, Computer Science, University of Oklahoma.

Research interests: theoretical computer science, cryptography, coding theory, computational number theory and molecular computing

### Research links

- [Faculty/profile page](https://www.ou.edu/coe/cs/people/faculty/qi-cheng)
- [Identity evidence](https://qcheng2023.github.io)
- [Identity evidence](https://www.cs.ou.edu/~qcheng/)
- [Professor website](https://qcheng2023.github.io/)
- [Resolved homepage](http://www.cs.ou.edu/~qcheng/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Lattice Theory and Algorithms
**The paper assumes:** lattice theory, lattice basis reduction algorithms, computational number theory, and lattice-based cryptography
**Already in this field?** Skip this entirely if you already have a solid understanding of lattice theory and classical lattice reduction algorithms like LLL and BKZ.

To understand the paper's advances in evolutionary sieving for the Shortest Vector Problem (SVP) in integral and module lattices, a solid grasp of lattice theory, lattice basis reduction algorithms (LLL, BKZ), and module lattices is essential. The rigorous course option offers a deep, structured university-level lecture series on lattice theory fundamentals, suitable for thorough mastery. The fast track provides a concise, focused explainer series on lattice basis reduction algorithms, giving a practical and intuition-driven overview that covers key algorithms relevant to the paper's contributions.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lattice Basis Reduction](https://www.youtube.com/playlist?list=PLA1qgQLL41SQ5oQDDH4V5ApkxnoKi_8jl) — Cryptography 101 · 8 videos · 2.3h across 8 episodes

**Watch only this:** Episodes V0 through V4 (Overview, Introduction to Lattices, Gauss's Algorithm, Gram-Schmidt Orthogonalization, and The LLL Algorithm), about 1.5 hours — enough to grasp key lattice reduction algorithms foundational to the paper.

*Why it unblocks this paper:* This short series from Cryptography 101 focuses specifically on lattice basis reduction algorithms including LLL, Gauss's algorithm, and Gram-Schmidt orthogonalization, which are directly relevant to the paper's improvements over classical lattice reduction methods and the design of crossover operators.

*If you want all of it:* All 8 episodes, about 2.3 hours.


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's domain-informed evolutionary sieving approach for the Shortest Vector Problem (SVP) in lattices. The beginner project focuses on implementing and visualizing the domain-informed crossover operator on small integral lattices, the intermediate project involves reimplementing the core evolutionary sieving algorithm for SVP on integral lattices and comparing it against a classical baseline, and the advanced project extends the evolutionary sieving method to module lattices over Gaussian integers, addressing one of the paper's key contributions and limitations.

### Beginner — Visualizing Domain-Informed Crossover for SVP in Integral Lattices
*Effort: a weekend, ~8 hours*

You build a small Python program that implements the paper's domain-informed genotype representation and crossover operator for integral lattices in low dimensions (e.g., 10-20). The program visualizes lattice vectors before and after crossover, showing how the rounded projection subtraction works without matrix multiplications.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key innovation of a domain-informed crossover operator that improves genetic algorithm performance by leveraging lattice theory, a core contribution of the paper.

**Grounded in:** Defined an improved SVP representation for genetic algorithms enabling a versatile crossover operator compatible with module lattices.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** You generate small random integral lattices by sampling integer basis vectors in 10-20 dimensions, simulating the paper's integral lattice setting.

**Build it:**

1. Implement a function to generate a random integral lattice basis in 10-20 dimensions.
2. Implement the domain-informed genotype representation for lattice vectors as described in the paper.
3. Implement the crossover operator that subtracts rounded projections of parent vectors to produce offspring.
4. Visualize parent and offspring lattice vectors in 2D or 3D projections using Matplotlib.
5. Write a README explaining the crossover mechanism and how it avoids matrix multiplications.

**Ships as:** A Python script and README showing visualizations of lattice vectors before and after domain-informed crossover, with clear explanations.

**Stretch goal:** Add a simple mutation operator and visualize its effect on lattice vectors.

### Intermediate — Reimplementing Domain-Informed Evolutionary Sieving for SVP on Integral Lattices
*Effort: 2 weekends, ~20 hours*

You reimplement the core evolutionary sieving algorithm from the paper for solving SVP on integral lattices up to 40 dimensions. You incorporate the domain-informed genotype representation and crossover operator, and compare your results against the classical LLL lattice reduction algorithm on benchmark integral lattices.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into working code, reproduce its key performance claims on integral lattices, and understand the comparative advantage over classical algorithms.

**Grounded in:** Demonstrated improved scalability and performance over Laarhoven’s approach, solving SVP challenges up to 100 dimensions; outperformed classical lattice reduction algorithms LLL and BKZ on benchmark problems.

**Tech stack:** Python 3.11, NumPy, SciPy, fpylll (for LLL baseline)

**Data:** You use randomly generated integral lattices in dimensions 20-40 as a substitute for the paper's benchmark SVP challenge lattices.

**Build it:**

1. Implement the domain-informed genotype representation and crossover operator as per the paper.
2. Implement an evolutionary sieving loop with population initialization, selection, crossover, and mutation.
3. Integrate the fpylll library to run LLL lattice reduction as a baseline comparison.
4. Run experiments on random integral lattices of dimension 20-40, recording shortest vector lengths found and runtime.
5. Plot and compare results of your evolutionary sieving algorithm against LLL.
6. Document your implementation details, results, and insights in a README.

**Ships as:** A Python repository with code to run evolutionary sieving and LLL on integral lattices, with scripts to reproduce comparison plots and a detailed README.

**Stretch goal:** Extend the implementation to include mutation strategies and analyze their impact on convergence.

### Advanced — Extending Evolutionary Sieving to Module Lattices over Gaussian Integers
*Effort: 3+ weeks*

You develop an evolutionary sieving algorithm for approximate SVP on module lattices over Gaussian integers, implementing the paper's domain-informed genotype representation and crossover operator adapted to this algebraic structure. You evaluate performance on module lattices up to 50 dimensions, addressing the paper's novel extension and one of its stated limitations.

**Why it shows you understood the paper:** This project tackles a key original contribution and limitation of the paper by extending evolutionary sieving to module lattices, demonstrating deep understanding of both lattice theory and evolutionary algorithm design.

**Grounded in:** Extended evolutionary sieving algorithms to module lattices for the first time; solved approximate SVP with α < 2.05 for module lattices up to 50 dimensions; scaling beyond 100 dimensions remains challenging.

**Tech stack:** Python 3.11, NumPy, SymPy (for Gaussian integer arithmetic)

**Data:** You generate synthetic module lattices over Gaussian integers by sampling basis elements with Gaussian integer coefficients in dimensions up to 50.

**Build it:**

1. Implement Gaussian integer arithmetic and module lattice basis representation using SymPy or custom code.
2. Adapt the domain-informed genotype representation and crossover operator to handle module lattices over Gaussian integers.
3. Implement the evolutionary sieving algorithm loop with selection, crossover, and optional mutation.
4. Generate synthetic module lattices up to 50 dimensions for evaluation.
5. Run experiments to find approximate shortest vectors and record approximation factors and convergence metrics.
6. Write a comprehensive README documenting the algebraic background, implementation details, experiments, and limitations.

**Ships as:** A Python repository implementing evolutionary sieving for module lattices over Gaussian integers, with experimental results and detailed documentation.

**Stretch goal:** Investigate advanced population management techniques or crossover strategies as suggested in the paper's future directions.
