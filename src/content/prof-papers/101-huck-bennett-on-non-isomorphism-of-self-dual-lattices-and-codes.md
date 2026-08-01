---
title: "101 · On (Non-)Isomorphism of Self-Dual Lattices and Codes — Huck Bennett"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-huck-bennett"
source_hash: "5791f90769db99bef54527cf0c739e7120dff56d486e25afeb65cba54ab42c6f"
sequence: 101
generator: "outreach-garden: managed"
---

# 101 · On (Non-)Isomorphism of Self-Dual Lattices and Codes

## At a glance

- **Professor:** Huck Bennett
- **Institution:** University of Colorado Boulder
- **Paper:** [On (Non-)Isomorphism of Self-Dual Lattices and Codes](https://arxiv.org/pdf/2606.18662)
- **Authors:** Huck Bennett, Kyle Fridberg
- **Year:** 2026

## Paper overview

This paper studies the problem of deciding when two self-dual lattices or self-dual codes are essentially the same, up to certain transformations. The authors develop faster algorithms and complexity results for these problems by leveraging structural properties of self-dual lattices and codes, such as characteristic vectors and decompositions into reduced components. They also provide protocols to certify non-isomorphism efficiently under certain conditions.

### Why it matters

**Research problem:** The Lattice Isomorphism Problem (LIP) asks whether two lattices are isomorphic via orthogonal transformations. This problem is important in cryptography and computational complexity. The paper focuses on LIP restricted to self-dual lattices, which have special algebraic and geometric properties, and the analogous Permutation Code Equivalence (PCE) problem on self-dual codes.

**Why it matters:** LIP is a fundamental problem with connections to cryptography, including the security of advanced cryptographic primitives and digital signature schemes like HAWK. Understanding its complexity on self-dual lattices can lead to more efficient algorithms and insights into cryptographic hardness assumptions. Similarly, PCE on self-dual codes relates to code-based cryptography and signature schemes like LESS.

**Key contributions:**

- A 2^{n/2 + o(n)}-time randomized algorithm for search LIP on self-dual lattices with small reduced rank.
- A coNP protocol for LIP on a broad class of self-dual lattices parameterized by the length of shortest characteristic vectors.
- Extension of known results for the integer lattice Zn to a much larger class of self-dual lattices.
- A polynomial-time algorithm for search PCE on self-dual codes with small reduced length.
- Introduction of the decisional promise problem SDLIP_K and proof that it lies in NP ∩ coNP for appropriate parameters.

## About the professor

**Huck Bennett** — University of Colorado Boulder.

### Research links

- [Faculty/profile page](https://home.cs.colorado.edu/~hbennett)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on (Non-)Isomorphism of Self-Dual Lattices and Codes, start with foundational complexity theory related to isomorphism problems and NP ∩ coNP protocols, which provide the computational complexity context. Then study the structural properties of self-dual lattices, focusing on characteristic vectors and unique decompositions, as these are central to the paper's algorithmic approach. Finally, engage with the authors' own talk or the closest available advanced lecture on lattice-based cryptography to grasp the new algorithms and complexity results presented.

### Lattice isomorphism problem complexity *(prerequisite)*
This section covers the computational complexity background of lattice isomorphism problems, including their relation to cryptography and complexity classes. Understanding this context is crucial for appreciating the significance and difficulty of the algorithms developed in the paper.

*How the paper uses it:* The paper studies the complexity of the Lattice Isomorphism Problem (LIP) restricted to self-dual lattices, building on foundational complexity results.

▶ [Lecture 1: Complexity classes and the graph isomorphism problem by Prof JACOBO TORÁN](https://www.youtube.com/watch?v=CATWFr3Qnv8) — IIT Gandhinagar · 9 years ago

### Authors' talk on self-dual lattices and codes
This section features direct insight from the authors about their new algorithms, complexity results, and structural approaches to self-dual lattices and codes. It is the core resource for understanding the paper's contributions.

*How the paper uses it:* The authors' talk provides the most direct and detailed explanation of the paper's results and methods.

▶ [Lattice-based cryptography: The tricky math of dots](https://www.youtube.com/watch?v=QDdOoYdb748) — Chalk Talk · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper on self-dual lattices and codes, starting with the complexity context of lattice isomorphism problems, then exploring characteristic vectors and structural decompositions of self-dual lattices. It concludes with the core algorithmic and complexity results of the paper, including NP ∩ coNP protocols and the permutation code equivalence problem, providing a clear, intuition-driven progression from basics to advanced topics.

### Lattice isomorphism problem complexity *(prerequisite)*
Begin by understanding the computational complexity of the lattice isomorphism problem (LIP), which asks whether two lattices are the same up to orthogonal transformations. This sets the stage for why the problem is challenging and important in cryptography and complexity theory.

*How the paper uses it:* The paper studies LIP restricted to self-dual lattices and builds on known complexity results for this problem.

▶ [Lattice-based cryptography: The tricky math of dots](https://www.youtube.com/watch?v=QDdOoYdb748) — Chalk Talk · 3 years ago

### Characteristic vectors in self-dual lattices *(prerequisite)*
Learn what characteristic vectors are in the context of self-dual lattices—special vectors with modular inner product properties that help reveal structural information about the lattice. Understanding these vectors is key to the paper's algorithmic approach.

*How the paper uses it:* The paper leverages characteristic vectors to design faster algorithms and complexity bounds for LIP and PCE.

▶ [Lattices and Vectors | Group Theory](https://www.youtube.com/watch?v=NAzMpmECbyA) — The Cynical Philosopher · 4 years ago

### NP ∩ coNP protocols for isomorphism problems *(prerequisite)*
Understand the concept of NP ∩ coNP complexity class and interactive proof protocols that can efficiently certify isomorphism or non-isomorphism under certain promises. This provides insight into the paper's complexity-theoretic contributions.

*How the paper uses it:* The paper develops NP ∩ coNP protocols for deciding isomorphism on self-dual lattices with bounded parameters.

▶ [Lecture 1: Complexity classes and the graph isomorphism problem by Prof JACOBO TORÁN](https://www.youtube.com/watch?v=CATWFr3Qnv8) — IIT Gandhinagar · 9 years ago
