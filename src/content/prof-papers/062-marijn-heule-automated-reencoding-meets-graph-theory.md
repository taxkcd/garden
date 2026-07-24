---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "ef609a4c0f42692a571d7227e078b763ef8a395d2a5cc5430a9e8826fcd23b8f"
sequence: 62
generator: "outreach-garden: managed"
---

# 062 · Automated Reencoding Meets Graph Theory

## At a glance

- **Professor:** Marijn Heule
- **Institution:** Carnegie Mellon University
- **Paper:** [Automated Reencoding Meets Graph Theory](https://arxiv.org/pdf/2603.27774)
- **Authors:** Benjamin Przybocki, Bernardo Subercaseaux, Marijn J. H. Heule
- **Year:** 2026

## Paper overview

This paper studies Bounded Variable Addition (BVA), a preprocessing technique used in SAT solvers to reduce formula size by introducing auxiliary variables. The authors develop a graph-theoretic framework characterizing BVA's power and limitations on 2-CNF formulas, proving bounds on clause reductions achievable by BVA and presenting a more efficient BVA implementation. They also analyze BVA's behavior on specific constraints like at-most-one and provide experimental results demonstrating practical improvements.

### Why it matters

**Research problem:** Understanding the theoretical capabilities and limitations of Bounded Variable Addition (BVA) in reencoding 2-CNF formulas to reduce clause counts, and improving its implementation efficiency.

**Why it matters:** BVA is widely used in state-of-the-art SAT solvers and has demonstrated empirical success, but its theoretical properties were poorly understood. Better understanding BVA can lead to improved SAT solver performance and more effective automated reasoning.

**Key contributions:**

- Graph-theoretic characterization of idealized BVA reencodings via strict polarized rectifier networks (Theorem 5).
- Proof that idealized BVA can reencode any 2-CNF formula with n variables into an equivalent formula with O(n^2 / log n) clauses, optimal up to constant factors.
- Sharp bounds on clause counts achievable by BVA with and without simplification preprocessing.
- Proof that idealized BVA cannot reencode the at-most-one constraint with fewer than 3n - 6 clauses, showing limitations of BVA.
- Development of a drastically more efficient BVA implementation with O(n^2) runtime using biclique partition algorithms.

## About the professor

**Marijn Heule** — Associate Professor, Computer Science Department, Carnegie Mellon University.

Research interests: solving hard-combinatorial problems in areas such as formal verification, number theory, and extremal combinatorics; satisfiability (SAT) solving; high-performance computing; validating results of SAT solvers and related tools.

### Research links

- [Faculty/profile page](https://www.cs.cmu.edu/~mheule)
- [Professor website](http://www.cs.cmu.edu/~mheule)
- [Google Scholar](https://scholar.google.com/citations?user=5Bu6aSMAAAAJ)

## Learning path

To deeply understand the paper "Automated Reencoding Meets Graph Theory," start with foundational knowledge on 2-CNF formulas and satisfiability to grasp the formula class targeted. Next, study the graph-theoretic tools and biclique partition algorithms that underpin the paper's theoretical framework and efficient implementation. Finally, focus on the core concept of Bounded Variable Addition (BVA) preprocessing in SAT solving, culminating with the authors' own talk presenting their novel graph-theoretic characterization and improved BVA implementation.

## Recommended videos (in order)

### 2-CNF formulas and satisfiability lecture *(prerequisite)*
Understanding 2-CNF formulas and their satisfiability properties is foundational since the paper's theoretical results focus on reencoding 2-CNF formulas. These lectures provide rigorous academic coverage of CNF, SAT problems, and complexity relevant for advanced readers.

*How the paper uses it:* The paper analyzes BVA's power and limitations specifically on 2-CNF formulas.

▶ [Theory of Computation Lecture: NP-Completeness and CNF ...](https://www.youtube.com/watch?v=BAUWVipNwb8) — Easy Theory - Problem Solving · 43:29

### Graph theory in SAT solving seminar *(prerequisite)*
The paper leverages graph-theoretic characterizations and biclique partitions to analyze BVA reencodings. These seminar talks from the Simons Institute provide advanced theoretical foundations in graph models and preprocessing techniques in SAT solving.

*How the paper uses it:* The authors develop a graph-theoretic framework characterizing BVA reencodings using strict polarized rectifier networks.

▶ [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — Simons Institute for the Theory of Computing · 43:25 · Streamed 5 years ago

### Biclique partition algorithms conference talk *(prerequisite)*
Biclique partition algorithms are central to the paper's efficient BVA implementation. This conference talk offers an advanced treatment of related combinatorial graph partitioning techniques relevant to the paper's algorithmic contributions.

*How the paper uses it:* The new BVA implementation leverages biclique partition algorithms to achieve O(n^2) runtime.

▶ [SC21 Test of Time Award Presentation: Multilevel Algorithms for Multi-Constraint Graph Partitioning](https://www.youtube.com/watch?v=mzr4yBdBbY8) — SC Conference Series · 44:16 · 4 years ago
