---
title: "101 · On (Non-)Isomorphism of Self-Dual Lattices and Codes — Huck Bennett"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-huck-bennett"
source_hash: "63291942157e3475c444ea15a1823aa4acfbca4d5ebedd88073cfde87e071dbe"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge around the paper's core contributions on self-dual lattice and code isomorphism. The beginner project focuses on implementing and visualizing the structural decomposition of self-dual lattices, a fundamental concept in the paper. The intermediate project reimplements the paper's randomized algorithm for the search Lattice Isomorphism Problem (LIP) on small self-dual lattices, demonstrating algorithmic understanding and complexity analysis. The advanced project extends the paper's work by exploring the computational use of shortest characteristic vectors for isomorphism testing, addressing one of the paper's stated future directions.

### Beginner — Visualizing Decomposition of Self-Dual Lattices
*Effort: a weekend, ~8 hours*

You build a small interactive web app that takes a simple self-dual lattice (represented as a basis matrix) and computes its unique decomposition into a reduced lattice plus a standard lattice component, then visualizes these components. The app also highlights characteristic vectors and their modular inner product properties as defined in the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental structural decomposition (Fact 2.5) and characteristic vectors (Fact 2.2) that underpin the paper's algorithms. A professor would see you grasp the algebraic structure and modular properties crucial for the paper's complexity results.

**Grounded in:** Fact 2.5: Every self-dual lattice decomposes uniquely into a reduced lattice plus a standard lattice component; Fact 2.2: Characteristic vectors exist for every self-dual lattice and have modular inner product properties.

**Tech stack:** JavaScript, React, D3.js or similar visualization library

**Data:** You simulate small self-dual lattices using integer basis matrices of dimension up to 4, constructed manually or randomly with constraints to ensure self-duality.

**Build it:**

1. Implement a function to check self-duality of a lattice given its basis matrix.
2. Implement the decomposition algorithm to find the reduced lattice and standard lattice components.
3. Compute characteristic vectors and verify their modular inner product properties.
4. Build a React UI to input lattice bases and display the decomposition and characteristic vectors visually.
5. Add explanatory text linking the visualization to the paper's definitions.

**Ships as:** A GitHub repo with a React app that visualizes decomposition of self-dual lattices and characteristic vectors, with a README explaining the connection to the paper's structural facts.

**Stretch goal:** Add support for visualizing the modular inner product relations between characteristic vectors and lattice vectors interactively.

### Intermediate — Randomized Algorithm for Search LIP on Small Self-Dual Lattices
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's 2^{n/2 + o(n)}-time randomized algorithm for the search Lattice Isomorphism Problem restricted to self-dual lattices with small reduced rank. You generate or simulate small self-dual lattices, run your implementation to decide isomorphism, and compare runtime against a naive brute-force baseline.

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic contribution (Theorem 1.1) into working code and understand the complexity improvements from structural decomposition. A professor would see you can handle lattice representations, reductions, and randomized search algorithms.

**Grounded in:** Theorem 1.1: Search LIP on self-dual lattices with reduced rank n0 runs in 2^{n/2 + o(n)} + n0^{O(1)} time.

**Tech stack:** Python 3.11, NumPy, SciPy (for linear algebra)

**Data:** You simulate small self-dual lattices by generating integer basis matrices of dimension up to 10 with known reduced rank ≤ 4, ensuring self-duality via Gram matrix checks.

**Build it:**

1. Implement lattice data structures and basic operations (basis, Gram matrix, orthogonal transformations).
2. Implement the decomposition into reduced lattice plus standard lattice component.
3. Implement the randomized search algorithm for LIP as described in the paper.
4. Implement a naive brute-force isomorphism check as a baseline.
5. Generate test lattices and benchmark your algorithm against the baseline, reporting runtimes and correctness.
6. Write a README explaining the algorithm, complexity, and experimental results.

**Ships as:** A GitHub repo with a Python implementation of the randomized search LIP algorithm on small self-dual lattices, benchmark results, and documentation linking to the paper's Theorem 1.1.

**Stretch goal:** Extend the implementation to output certificates of non-isomorphism under the paper's coNP protocol assumptions.

### Advanced — Computational Exploration of Shortest Characteristic Vectors for Isomorphism Testing
*Effort: 3+ weeks*

You develop software to compute shortest characteristic vectors of self-dual lattices and experimentally evaluate their effectiveness as invariants for isomorphism testing. This addresses the paper's limitation that characteristic vectors alone do not distinguish all non-isomorphic lattices. You analyze how often shortest characteristic vectors can certify non-isomorphism and explore heuristics to improve this.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, showing deep engagement with the structural properties and complexity implications of characteristic vectors. A professor would see your ability to extend foundational theory into computational experiments and complexity analysis.

**Grounded in:** Limitation: Characteristic vectors alone cannot distinguish all non-isomorphic lattices, limiting their use as invariants; Future direction: Study the computational use of shortest characteristic vectors for isomorphism testing.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib or Plotly for visualization

**Data:** You simulate or generate families of self-dual lattices with varying reduced rank and known isomorphism properties, using small dimensions (up to 12) for tractability.

**Build it:**

1. Implement computation of characteristic vectors and identify shortest characteristic vectors for given self-dual lattices.
2. Build a database of test lattices with known isomorphism/non-isomorphism status.
3. Develop algorithms to compare lattices based on their shortest characteristic vectors as invariants.
4. Run experiments to measure the discriminative power of shortest characteristic vectors in isomorphism testing.
5. Visualize and analyze results, identifying cases where characteristic vectors fail or succeed.
6. Document findings and propose heuristics or combined invariants to improve isomorphism testing.

**Ships as:** A GitHub repo with code to compute and analyze shortest characteristic vectors, experimental results on their effectiveness as invariants, and a detailed README discussing implications for lattice isomorphism complexity.

**Stretch goal:** Integrate your heuristics into an improved isomorphism testing pipeline and compare against the baseline randomized algorithm from the intermediate project.
