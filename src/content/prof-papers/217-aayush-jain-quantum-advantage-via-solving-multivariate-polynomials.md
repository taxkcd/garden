---
title: "217 · Quantum Advantage via Solving Multivariate Polynomials — Aayush Jain"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aayush-jain"
source_hash: "02245bb346a252e4fc33f83d7102df7804cb451c49c97b4d0250c7c00da226cc"
sequence: 217
generator: "outreach-garden: managed"
---

# 217 · Quantum Advantage via Solving Multivariate Polynomials

## At a glance

- **Professor:** Aayush Jain
- **Institution:** Carnegie Mellon University
- **Paper:** [Quantum Advantage via Solving Multivariate Polynomials](https://arxiv.org/abs/2509.07276)
- **Authors:** Pierre Briaud, Itai Dinur, Aayush Jain, Paul Lou, Riddhi Ghosal, Amit Sahai
- **Year:** 2025

## Paper overview

This paper proposes a new quantum algorithm that efficiently solves certain average-case NP search problems involving systems of multivariate polynomial equations over the finite field F2. The authors design a family of degree-d polynomials (with d ≥ 3) combined with linear constraints from Reed-Solomon codes, for which a polynomial-time quantum algorithm can find solutions, while classical algorithms are conjectured to fail. This demonstrates a new form of quantum advantage beyond previously known problems.

### Why it matters

**Research problem:** Finding average-case NP search problems that exhibit quantum advantage—i.e., problems efficiently solvable by quantum computers but conjectured to be hard classically—specifically focusing on solving systems of multivariate polynomial equations over F2 with degree at least 3.

**Why it matters:** Quantum advantage for NP search problems is rare and important for understanding the power of quantum computation. Multivariate polynomial systems are central in cryptography, especially post-quantum cryptography, so understanding their quantum solvability has implications for cryptanalysis and quantum algorithm design.

**Key contributions:**

- Design of a polynomial-time quantum algorithm that solves certain average-case NP search problems defined by degree-d (d ≥ 3) multivariate polynomial systems over F2 combined with Reed-Solomon code constraints.
- Extension of the Yamakawa-Zhandry quantum algorithmic framework to structured multivariate polynomial systems.
- New Fourier analytic techniques analyzing 2-wise independent and shift-invariant polynomial distributions.
- Conjecture and evidence that classical algorithms, including Gröbner basis methods and exhaustive search, fail to solve these systems efficiently.
- Demonstration that degree-3 polynomials suffice to instantiate the random oracle in the Yamakawa-Zhandry framework to achieve non-relativized quantum advantage.

## About the professor

**Aayush Jain** — Assistant Professor, CS department, Carnegie Mellon University.

Research interests: theoretical and applied cryptography, and its connections with related areas of theoretical computer science

### Research links

- [Faculty/profile page](https://sites.google.com/view/aayushjain)
- [Google Scholar](https://scholar.google.com/citations?hl=en&authuser=1&user=VZ6S70MAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Quantum Advantage via Solving Multivariate Polynomials," start by building a solid foundation in the prerequisite topics: multivariate polynomial systems over finite fields, Reed-Solomon codes and decoding algorithms, Fourier analysis of boolean functions, and the landscape of quantum algorithms for NP search problems. These foundational topics provide the necessary algebraic, coding-theoretic, and quantum algorithmic background. Finally, focus on the paper's core concept by watching the authors' own talk or the closest available advanced talks on quantum advantage and related quantum algorithmic frameworks.

### Multivariate polynomial systems over finite fields *(prerequisite)*
Understanding the algebraic structure and properties of multivariate polynomial systems over finite fields is crucial, as the paper studies degree-d polynomial systems over F2. This topic provides the mathematical foundation for the polynomial systems the quantum algorithm targets.

*How the paper uses it:* The paper's quantum algorithm solves average-case NP search problems defined by multivariate polynomial systems over F2.

▶ [SAC2020 Summer School by Antoine Joux - Polynomial ...](https://www.youtube.com/watch?v=V2U_gAjHvGc) — Selected Areas in Cryptography · 39:09

### Reed-Solomon codes and decoding algorithms *(prerequisite)*
Reed-Solomon codes and their decoding algorithms are central to the paper's approach, as the quantum algorithm uses linear constraints from these codes and relies on unique decoding under certain error distributions.

*How the paper uses it:* The quantum algorithm decodes solutions using Reed-Solomon list decoding under error distributions induced by the polynomial system.

▶ [What are Reed-Solomon Codes? How computers recover lost data](https://www.youtube.com/watch?v=1pQJkt7-R4Q) — vcubingx · 16:53 · 4 years ago

### Fourier analysis of boolean functions *(prerequisite)*
Fourier analytic techniques on boolean functions are key to analyzing the polynomial distributions' properties like 2-wise independence and shift-invariance, which underpin the quantum algorithm's correctness and efficiency.

*How the paper uses it:* The paper uses new Fourier analytic techniques to analyze the polynomial distributions critical for the quantum algorithm.

▶ [Fourier Analysis of Boolean Functions, in Harvard's CS 121 ...](https://www.youtube.com/watch?v=xvq7atbDaBI) — Ryan O'Donnell · 1:12:18

### Quantum algorithms for NP search problems *(prerequisite)*
A broad understanding of quantum algorithms that tackle NP search problems provides context for the paper's contribution, situating it within the landscape of known quantum speedups and limitations.

*How the paper uses it:* The paper proposes a new quantum algorithm that achieves quantum advantage on an average-case NP search problem.

▶ [Jin Peng Liu - Provably Efficient Quantum Algorithms for ...](https://www.youtube.com/watch?v=P43BsCc14A4) — Institute for Pure & Applied Mathematics (IPAM) · 54:17

### Paper authors quantum algorithm talk *(the paper's own talk)*
The authors' own talk would provide the most direct and detailed insight into their new quantum algorithm, the technical challenges, and the significance of their results, offering a comprehensive understanding of the paper.

*How the paper uses it:* Direct insight from the authors on their new quantum algorithm and results.

▶ [What is Quantum Advantage? Cutting Through the Hype.](https://www.youtube.com/watch?v=wGsK1iAKEoA) — Qiskit · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in multivariate polynomial systems over finite fields, as these are the core mathematical objects studied. Next, learn about Reed-Solomon codes and their decoding algorithms, which the paper leverages for constraints and decoding. Then, study Fourier analysis of Boolean functions to grasp the analytic techniques used. After that, explore quantum algorithms for NP search problems to understand the broader quantum algorithmic context. Finally, watch a talk by the paper authors or related quantum advantage explainers to connect all concepts to the paper's novel quantum algorithm.

### Multivariate polynomial systems over finite fields *(prerequisite)*
Multivariate polynomial systems over finite fields are algebraic structures where multiple polynomial equations with several variables are considered over a finite set of elements. Understanding these systems is crucial because the paper studies solving such polynomial equations over the field F2, which is fundamental to the problem setup.

*How the paper uses it:* The paper focuses on solving systems of multivariate polynomial equations over the finite field F2 with degree at least 3.

▶ [SAC2020 Summer School by Antoine Joux - Polynomial ...](https://www.youtube.com/watch?v=V2U_gAjHvGc) — Selected Areas in Cryptography · 39:09

### Reed-Solomon codes and decoding algorithms *(prerequisite)*
Reed-Solomon codes are error-correcting codes based on polynomial interpolation over finite fields, allowing recovery of original data from corrupted messages. Understanding how these codes work and how decoding algorithms function is key because the paper uses Reed-Solomon code constraints and decoding as part of its quantum algorithm.

*How the paper uses it:* The quantum algorithm uses linear constraints from Reed-Solomon codes and relies on unique decoding under induced error distributions.

▶ [What are Reed-Solomon Codes? How computers recover lost data](https://www.youtube.com/watch?v=1pQJkt7-R4Q) — vcubingx · 16:53 · 4 years ago

### Fourier analysis of boolean functions *(prerequisite)*
Fourier analysis of Boolean functions decomposes functions into sums of simpler components, revealing structure and symmetries. This technique is essential for analyzing the polynomial distributions in the paper, which are 2-wise independent and shift-invariant, enabling the quantum algorithm's correctness.

*How the paper uses it:* The paper uses new Fourier analytic techniques to analyze 2-wise independent and shift-invariant polynomial distributions critical for the quantum algorithm.

▶ [Fourier Analysis of Boolean Functions, in Harvard's CS 121 ...](https://www.youtube.com/watch?v=xvq7atbDaBI) — Ryan O'Donnell · 1:12:18

### Quantum algorithms for NP search problems *(prerequisite)*
Quantum algorithms for NP search problems explore how quantum computers can efficiently find solutions to problems that are generally hard for classical computers. This background helps understand the significance of the paper's quantum algorithm that solves certain average-case NP search problems efficiently.

*How the paper uses it:* The paper proposes a polynomial-time quantum algorithm solving average-case NP search problems defined by structured polynomial systems.

▶ [But what is quantum computing? (Grover's Algorithm)](https://www.youtube.com/watch?v=RQWpF2Gb-gU) — 3Blue1Brown · 36:54

### Paper authors quantum algorithm talk *(the paper's own talk)*
Hearing directly from the authors or related quantum advantage explainers provides insight into the novel quantum algorithm, its design, and implications. This helps connect all prior concepts to the paper's core contributions and results.

*How the paper uses it:* This paper introduces a new quantum algorithm demonstrating quantum advantage for solving multivariate polynomial systems with Reed-Solomon constraints.

▶ [What is Quantum Advantage? Cutting Through the Hype.](https://www.youtube.com/watch?v=wGsK1iAKEoA) — Qiskit · 1 year ago

## Already in your library

- [The Hidden Subgroup Problem for Infinite Groups](https://www.youtube.com/watch?v=xD1BMZrAcBI) — also for: The hidden subgroup problem for infinite groups (Greg Kuperberg)
- [Lecture 20: Reed-Solomon Codes](https://www.youtube.com/watch?v=OapnQzIDBM0) — also for: List Decoding and Property Testing of Error Correcting Codes (Atri Rudra)
- [Lecture 4, Video 4: Reed-Solomon Codes!](https://www.youtube.com/watch?v=yQkEnde2lNg) — also for: List Decoding and Property Testing of Error Correcting Codes (Atri Rudra)
- [Introduction to Analysis of Boolean Functions 1](https://www.youtube.com/watch?v=GR5gugFdDa4) — also for: Algorithmic Foundations of Inexact Computing (Krishna V. Palem)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Quantum Advantage via Solving Multivariate Polynomials." Starting with a beginner project that simulates and visualizes key polynomial distribution properties, you then implement a core classical baseline solver and a simplified quantum-inspired decoding step at intermediate level. Finally, the advanced project explores extending the quantum algorithm framework to polynomial systems with relaxed distributional assumptions, addressing a stated limitation and opening a path for research discussion.

### Beginner — Simulate and Visualize 2-Wise Independence and Shift-Invariance of Degree-3 Polynomials over F2
*Effort: a weekend, ~8 hours*

You build a Python Jupyter notebook that generates random degree-3 multivariate polynomials over the finite field F2 on small variable sets, then empirically verifies and visualizes their 2-wise independence and shift-invariance properties as described in the paper. You implement simple tests and plots to show these distributional properties hold, reproducing key lemmas from the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the crucial distributional assumptions (2-wise independence and shift-invariance) that enable the quantum algorithm's correctness, by faithfully reproducing the paper's analytic claims with concrete simulations and visualizations.

**Grounded in:** Section 4.5 and Lemma 1.2 prove uniform random degree-d polynomials have these properties, which are crucial for the quantum algorithm's correctness.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic data: random degree-3 polynomials over F2 generated in code, no external dataset required.

**Build it:**

1. Implement a function to generate random degree-3 multivariate polynomials over F2 with a small number of variables (e.g., 5-10).
2. Implement functions to sample from the polynomial distribution and compute pairwise correlations to test 2-wise independence.
3. Implement tests to verify shift-invariance by checking distribution invariance under shifts in input vectors.
4. Visualize the empirical distributions and correlation matrices using plots to illustrate the properties.
5. Write a README explaining the connection to the paper's Lemma 1.2 and Section 4.5.

**Ships as:** A Jupyter notebook with code, tests, and plots demonstrating 2-wise independence and shift-invariance of random degree-3 polynomials over F2, with explanations linking to the paper.

**Stretch goal:** Add simulations for degree-4 or higher polynomials and compare how the properties change.

### Intermediate — Classical Gröbner Basis Solver and Quantum-Inspired Reed-Solomon Decoding for Small Polynomial Systems
*Effort: 2 weekends, ~20 hours*

You implement a classical Gröbner basis solver for small systems of degree-3 multivariate polynomial equations over F2 combined with linear constraints from Reed-Solomon codes, simulating the problem setting of the paper. You then implement a simplified quantum-inspired decoding step based on Fourier analysis and Reed-Solomon list decoding techniques described in the paper. You compare classical solver runtime and success rate against the decoding approach on synthetic instances.

**Why it shows you understood the paper:** This project shows you can reimplement the core classical baseline and the paper's quantum algorithmic decoding approach on a small scale, reproducing the paper's key result that classical solvers struggle while decoding can efficiently recover solutions under the paper's assumptions.

**Grounded in:** Theorem 1.1 and Theorem 4.3 establish an expected polynomial-time quantum algorithm that outputs solutions satisfying the polynomial and Reed-Solomon constraints; experimental Gröbner basis computations show classical hardness.

**Tech stack:** Python 3.11, SageMath or SymPy for Gröbner basis, NumPy, Matplotlib

**Data:** Synthetic polynomial systems generated according to the paper's description: random degree-3 polynomials over F2 combined with Reed-Solomon code constraints simulated in code.

**Build it:**

1. Implement or use existing libraries to solve small polynomial systems over F2 via Gröbner basis methods.
2. Generate synthetic polynomial systems with Reed-Solomon linear constraints as per the paper's construction.
3. Implement a simplified version of the quantum-inspired decoding step using Fourier transforms and Reed-Solomon list decoding algorithms.
4. Run experiments comparing classical Gröbner basis solver runtime and success rate versus the decoding approach on multiple instances.
5. Plot and analyze results, showing classical solver exponential growth and decoding success.
6. Document the implementation details and relate results to the paper's classical hardness conjecture and quantum algorithm correctness.

**Ships as:** A code repository with scripts/notebooks implementing classical Gröbner basis solving and quantum-inspired decoding on synthetic polynomial systems, with experimental results and analysis.

**Stretch goal:** Add noise or perturbations to polynomial systems to test robustness of decoding versus classical solvers.

### Advanced — Extending Quantum Algorithmic Framework to Polynomial Systems with Relaxed Distributional Assumptions
*Effort: 3-4 weeks*

You design and implement an extension of the quantum algorithmic framework from the paper to handle multivariate polynomial systems over F2 that deviate from strict 2-wise independence and shift-invariance, addressing a key limitation noted by the authors. You simulate polynomial systems with controlled deviations from these properties, adapt the Fourier analytic decoding techniques, and evaluate the impact on solution recovery success. This project explores the sensitivity of the quantum algorithm to more structured or practical polynomial systems encountered in cryptography.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's core quantum algorithm and its assumptions, and contributes original exploration aligned with the paper's stated future directions and limitations, potentially opening research dialogue with the professor.

**Grounded in:** The approach relies on certain distributional assumptions (2-wise independence and shift-invariance) that may not hold for all polynomial systems; future directions include investigating algorithm performance under such deviations.

**Tech stack:** Python 3.11, Qiskit or other quantum simulation frameworks (optional), NumPy, Matplotlib, SageMath or SymPy

**Data:** Synthetic polynomial systems generated with varying degrees of deviation from 2-wise independence and shift-invariance, constructed in code.

**Build it:**

1. Review the paper's Fourier analytic techniques and quantum decoding framework in detail.
2. Implement code to generate polynomial systems with controlled deviations from 2-wise independence and shift-invariance.
3. Adapt the decoding algorithm to handle these deviations, possibly by modifying Fourier analysis or decoding thresholds.
4. Simulate the quantum algorithm's decoding step (classical simulation or quantum simulator) on these systems.
5. Evaluate and plot the success probability and runtime as a function of deviation magnitude.
6. Write a detailed report discussing findings, limitations, and implications for cryptographic applications.

**Ships as:** A research-style codebase and report demonstrating extended quantum decoding on polynomial systems with relaxed assumptions, including experimental evaluation and discussion.

**Stretch goal:** Implement a prototype quantum circuit simulation of the adapted algorithm using Qiskit to validate feasibility.
