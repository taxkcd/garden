---
title: "217 · Quantum Advantage via Solving Multivariate Polynomials — Aayush Jain"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-aayush-jain"
source_hash: "0b395653beef73cac1a227a02b74bdc350081c1da95f9f978115298f6a59a303"
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
