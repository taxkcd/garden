---
title: "316 · Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices — Qi Cheng"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-qi-cheng"
source_hash: "e4d29151c51619a7368b38e48b78358cd54f5d9e75e9542feab87c0393419dec"
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
