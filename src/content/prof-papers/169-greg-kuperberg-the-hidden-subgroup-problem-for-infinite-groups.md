---
title: "169 · The hidden subgroup problem for infinite groups — Greg Kuperberg"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-greg-kuperberg"
source_hash: "62984fb56340b531125c02ad5a00741899614fa264f3f8d02c76d62579e74408"
sequence: 169
generator: "outreach-garden: managed"
---

# 169 · The hidden subgroup problem for infinite groups

## At a glance

- **Professor:** Greg Kuperberg
- **Institution:** Univ. of California - Davis
- **Paper:** [The hidden subgroup problem for infinite groups](https://arxiv.org/abs/2507.18499)
- **Authors:** Greg Kuperberg
- **Year:** 2025

## Paper overview

This paper studies the hidden subgroup problem (HSP) in the context of infinite discrete groups, extending classical results from finite groups and Shor's algorithm. It establishes both hardness results and quantum algorithms for various infinite groups, including the additive group of rational numbers and free groups. The work also explores reductions to lattice problems and generalizes known quantum algorithms to cases where the hidden subgroup has infinite index.

### Why it matters

**Research problem:** Understanding the computational complexity and quantum algorithmic solvability of the hidden subgroup problem (HSP) for infinite discrete groups, including abelian and non-abelian cases, and how encoding and group structure affect hardness and algorithmic approaches.

**Why it matters:** HSP is a central framework in quantum computing that underlies famous algorithms like Shor's factoring algorithm. Extending HSP to infinite groups broadens the theoretical understanding of quantum algorithms and their limitations, and connects to important problems in computational complexity and lattice-based cryptography.

**Key contributions:**

- Proves that the hidden subgroup existence problem (HSEP) in the additive group of rationals Q is NP-complete, assuming either an integer factoring oracle or a number theory conjecture.
- Shows that the normal hidden subgroup existence problem (NHSEP) in finitely generated non-abelian free groups is NP-complete.
- Reduces a version of the unique short vector problem (uSVP) to HSP in Z^k with pseudo-polynomial query cost.
- Generalizes the Shor-Kitaev algorithm to solve HSP in Z^k for arbitrary hidden subgroups, including those with infinite index, in quantum polynomial time.
- Outlines a stretched exponential time quantum algorithm for the abelian hidden shift problem (AHShP) in finitely generated virtually abelian groups.

## About the professor

**Greg Kuperberg** — Professor, Mathematics Department, Univ. of California - Davis.

Research interests: Quantum algebra, geometric topology, quantum information theory, convex geometry, combinatorics

### Research links

- [Faculty/profile page](https://www.math.ucdavis.edu/~greg)
- [Resolved homepage](https://www.math.ucdavis.edu/people/general-profile?fac_id=greg)
- [Google Scholar](https://scholar.google.com/citations?user=OrKdXCgAAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand Greg Kuperberg's 2025 paper on the hidden subgroup problem (HSP) for infinite groups, start with foundational knowledge in infinite discrete group theory and lattice problems, as these underpin the complexity and algorithmic reductions in the paper. Next, build familiarity with quantum complexity theory to grasp the hardness and query complexity results. Finally, focus on the core concept of the hidden subgroup problem itself, prioritizing the author's own talks on infinite groups and related quantum algorithms to directly connect with the paper's contributions.

### Infinite discrete groups theory *(prerequisite)*
Understanding the structure and properties of infinite discrete groups is essential for grasping the paper's extension of HSP from finite to infinite groups. This includes knowledge of finitely generated free groups and abelian groups, which are central to the paper's hardness and algorithmic results.

*How the paper uses it:* The paper studies HSP in infinite discrete groups such as the additive group of rationals and free groups, requiring foundational group theory.

▶ [Dr. Subhadip Dey | Irreducible discrete subgroups of G × G ...](https://www.youtube.com/watch?v=fW8-uUri6_4) — INI Seminar Room 1 · 59:48

### Lattice problems and reductions *(prerequisite)*
Lattice theory and lattice-based computational problems like the unique short vector problem (uSVP) are critical to understanding the paper's reductions from HSP to lattice problems and the use of lattice reduction algorithms like LLL in quantum algorithms.

*How the paper uses it:* The paper reduces uSVP to HSP in Z^k and generalizes Shor-Kitaev algorithms using lattice reduction techniques.

▶ [An Efficient Quantum Algorithm for Lattice Problems Achieving ...](https://www.youtube.com/watch?v=K5Apl_qCnDA) — Simons Institute for the Theory of Computing · 1:07:21

### Quantum complexity theory *(prerequisite)*
Quantum complexity theory provides the framework to analyze the computational hardness and query complexity of HSP variants, including NP-completeness results and quantum polynomial-time algorithms presented in the paper.

*How the paper uses it:* The paper proves NP-completeness and quantum query complexity bounds for HSP in infinite groups, relying on quantum complexity theory concepts.

▶ [John Watrous - Quantum Complexity Theory (Part 1) - CSSQI ...](https://www.youtube.com/watch?v=fc12NHko8sw) — Institute for Quantum Computing · 57:12

### Hidden subgroup problem quantum algorithms
This concept covers the quantum algorithmic framework underlying the paper's results, including generalizations of Shor's algorithm and quantum polynomial-time solutions for HSP in infinite abelian groups. Understanding these algorithms is key to appreciating the paper's contributions.

*How the paper uses it:* The paper generalizes Shor-Kitaev algorithms and outlines quantum algorithms for HSP and AHShP in infinite groups.

▶ [The Hidden Subgroup Problem for Infinite Groups](https://www.youtube.com/watch?v=xD1BMZrAcBI) — Simons Institute for the Theory of Computing · 40:21

### Paper author talk *(the paper's own talk)*
Direct presentations by Greg Kuperberg provide the most authoritative and detailed exposition of the paper's results, methods, and open problems, allowing an advanced reader to engage deeply with the material as intended by the author.

*How the paper uses it:* Greg Kuperberg's talks specifically address the hidden subgroup problem for infinite groups, directly relating to the paper.

▶ [QIP2021 | The Hidden Subgroup Problem for Infinite Groups (Greg Kuperberg)](https://www.youtube.com/watch?v=HdUiO78bVdI) — Munich Center for Quantum Science & Technology · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the hidden subgroup problem (HSP) for infinite groups, starting with basic group theory and lattice problems, then covering quantum complexity theory, and finally focusing on the HSP and its quantum algorithms as studied in the paper. The order is designed to build intuition progressively, from algebraic structures through computational hardness to quantum algorithmic frameworks relevant to the paper's contributions.

### Infinite discrete groups theory *(prerequisite)*
Begin by understanding what infinite discrete groups are, including examples like free groups and abelian groups. This foundational group theory knowledge is essential to grasp the types of groups the paper studies and the structure of hidden subgroups within them.

*How the paper uses it:* The paper studies the hidden subgroup problem specifically in infinite discrete groups such as the additive group of rationals and free groups.

▶ [Cyclic Group in Group Theory Explained | Discrete ...](https://www.youtube.com/watch?v=vQVk2Cq2cqw) — THE GATEHUB · 29:57

### Lattice problems and reductions *(prerequisite)*
Learn about lattices, lattice bases, and key computational problems like the shortest vector problem (SVP). Understanding these concepts is crucial because the paper reduces certain HSP instances to lattice problems and uses lattice reduction techniques in its quantum algorithms.

*How the paper uses it:* The paper reduces unique short vector problems to HSP in Z^k and uses lattice reduction algorithms like LLL in its quantum algorithmic approach.

▶ [Lecture #1 part 1: Lattices and Hard Lattice Problems | Joseph ...](https://www.youtube.com/watch?v=j30GwMRXWek) — IAS | PCMI Park City Mathematics Institute · 9:21

### Quantum complexity theory *(prerequisite)*
Gain a basic understanding of quantum complexity theory, including what it means for a problem to be NP-complete and the notion of quantum query complexity. This background helps in appreciating the paper's hardness results and the complexity of quantum algorithms for HSP.

*How the paper uses it:* The paper establishes NP-completeness and quantum query complexity lower bounds for HSP variants in infinite groups.

▶ [John Watrous - Quantum Complexity Theory (Part 1) - CSSQI ...](https://www.youtube.com/watch?v=fc12NHko8sw) — Institute for Quantum Computing · 57:12

### Hidden subgroup problem quantum algorithms
Explore the hidden subgroup problem as a unifying framework for quantum algorithms, including how quantum algorithms like Shor's solve HSP in finite groups. This section builds intuition for the quantum algorithmic techniques generalized in the paper to infinite groups.

*How the paper uses it:* The paper generalizes the Shor-Kitaev quantum algorithm to solve HSP in infinite abelian groups and outlines quantum algorithms for related problems.

▶ [#40 Hidden Subgroup Problem | Part 1 | Quantum Algorithms ...](https://www.youtube.com/watch?v=sllnCedxE2o) — NPTEL-NOC IITM · 13:35

### Paper author talk
Finally, watch the author's own presentation to see a direct explanation of the paper's results, methods, and open questions. This talk ties together the foundational concepts and shows their application to the infinite group HSP.

*How the paper uses it:* Greg Kuperberg presents the hidden subgroup problem for infinite groups, directly discussing the paper's main results and techniques.

▶ [The hidden subgroup problem for ℤ for infinite-index subgroups](https://www.youtube.com/watch?v=kDTAsTixR9I) — Fields Institute · 50:59


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of Kuperberg's 2025 paper on the hidden subgroup problem (HSP) for infinite groups. Starting with a beginner-level simulation of NP-hardness in a simplified infinite abelian group setting, progressing to an intermediate-level reimplementation of the quantum polynomial-time algorithm for HSP in Z^k, and culminating in an advanced project that explores optimizing the outlined quantum algorithm for the abelian hidden shift problem (AHShP) to address the paper's stated limitations.

### Beginner — Simulate NP-Completeness of HSEP in Q/Z with Factoring Oracle
*Effort: a weekend, ~8 hours*

You build a Python simulation that models the hidden subgroup existence problem (HSEP) in the additive group of rationals modulo integers (Q/Z) and demonstrates its NP-completeness assuming access to an integer factoring oracle. The project includes a simple implementation of the reduction from integer factoring to HSEP and a basic oracle simulator to illustrate the hardness result.

**Why it shows you understood the paper:** This project concretely shows you understand the paper's key hardness result (Theorem 1.1) and the role of number theory oracles in proving NP-completeness for infinite abelian groups, which is a central theoretical contribution.

**Grounded in:** Theorem 1.1: HSEP in Q/Z is NP-complete with factoring oracle or under Conjecture 3.5.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate group elements and oracle queries as described in the paper.

**Build it:**

1. Implement a representation of elements in Q/Z and the hidden subgroup existence problem.
2. Implement a simple integer factoring oracle simulator (e.g., trial division for small integers).
3. Code the reduction from integer factoring to HSEP in Q/Z as described in the paper.
4. Demonstrate example inputs where solving HSEP corresponds to factoring integers.
5. Write a README explaining the reduction and how the simulation illustrates NP-completeness.

**Ships as:** A Python repository with scripts simulating the reduction and oracle, plus documentation explaining the NP-completeness of HSEP in Q/Z.

**Stretch goal:** Extend the simulation to illustrate the conjecture-based hardness alternative (Conjecture 3.5) if time permits.

### Intermediate — Reimplement Quantum Polynomial-Time Algorithm for HSP in Z^k
*Effort: 2 weekends, ~20 hours*

You reimplement the core quantum polynomial-time algorithm for solving the hidden subgroup problem in the integer lattice group Z^k as described in Theorem 1.5. Since actual quantum hardware is unavailable, you simulate the quantum Fourier transform and lattice reduction steps classically for small k and compare your results against a naive classical baseline that enumerates subgroup candidates.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main algorithmic contribution, including the generalization of Shor-Kitaev algorithms to infinite groups and the connection to lattice problems, by faithfully reproducing the method and comparing its efficiency to classical approaches.

**Grounded in:** Theorem 1.5: Quantum polynomial-time algorithm for HSP in Z^k with arbitrary hidden subgroups and polynomial query cost.

**Tech stack:** Python 3.11, NumPy, SciPy

**Data:** Synthetic data: randomly generated hidden subgroups of Z^k with small dimension (e.g., k=2 or 3) and known generators.

**Build it:**

1. Implement a representation of Z^k group elements and subgroups with generators.
2. Implement classical simulation of the quantum Fourier transform over Z^k.
3. Implement lattice reduction techniques (e.g., LLL algorithm) to process subgroup generators.
4. Simulate the quantum algorithm steps to identify hidden subgroups.
5. Implement a naive classical baseline that enumerates subgroup candidates.
6. Compare runtime and correctness between the simulated quantum algorithm and classical baseline.
7. Document the implementation, results, and connection to the paper.

**Ships as:** A Python project with scripts simulating the quantum algorithm and classical baseline, including performance comparisons and explanations.

**Stretch goal:** Extend the simulation to handle infinite index subgroups or higher dimensions k.

### Advanced — Optimize Collimation Sieve for Abelian Hidden Shift Problem
*Effort: 3-4 weeks*

You develop an improved implementation of the collimation sieve algorithm outlined in Theorem 1.8 for the abelian hidden shift problem (AHShP) in finitely generated virtually abelian groups. Your work focuses on optimizing constants and heuristics in the sieve to reduce the stretched exponential runtime, addressing one of the paper's stated future directions. You benchmark your implementation on synthetic instances and analyze performance improvements.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by engaging deeply with the outlined quantum algorithm for AHShP, demonstrating your ability to extend and optimize complex quantum-inspired algorithms in infinite group settings.

**Grounded in:** Future direction: Optimizing the collimation sieve algorithm for AHShP to reduce constants and improve efficiency; Theorem 1.8 (outlined): Stretched exponential time quantum algorithm for AHShP.

**Tech stack:** Python 3.11, NumPy, SciPy, C++ (optional for performance-critical parts)

**Data:** Synthetic data: generated instances of the abelian hidden shift problem in finitely generated virtually abelian groups, constructed according to the paper's description.

**Build it:**

1. Study the collimation sieve algorithm as outlined in the paper and related lattice sieve literature.
2. Implement a baseline version of the collimation sieve algorithm in Python.
3. Profile the implementation to identify bottlenecks and heuristic parameters.
4. Experiment with heuristic improvements and parameter tuning to reduce runtime constants.
5. Benchmark the optimized implementation on synthetic AHShP instances.
6. Document the optimization process, results, and implications for the paper's future directions.

**Ships as:** A repository with an optimized collimation sieve implementation, benchmarks, and a detailed report linking improvements to the paper's outlined algorithm and limitations.

**Stretch goal:** Explore adapting the optimized sieve to other classes of infinite groups beyond virtually abelian ones.
