---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "95ca1902af7fb9a7c122749de5279b34d4ed61123bbe49955678661bc5b3109c"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Automated Reencoding Meets Graph Theory," start with foundational knowledge on 2-CNF formulas and SAT to grasp the formula class targeted by BVA. Next, build a solid understanding of graph theory concepts as they underpin the paper's graph-theoretic framework. Then, study biclique partition algorithms, which are key to the paper's efficient BVA implementation. Finally, focus on the core concept of Bounded Variable Addition (BVA) and the authors' own talk to directly engage with their contributions and results.

### 2-CNF Formulas and SAT *(prerequisite)*
Understanding 2-CNF formulas and the satisfiability problem is essential as the paper focuses on reencoding 2-CNF formulas using BVA. This section provides the necessary background on the formula class and the SAT problem complexity.

*How the paper uses it:* The paper studies BVA's power and limitations specifically on 2-CNF formulas.

▶ [Lecture 03-2/3 SAT problem and truth table](https://www.youtube.com/watch?v=EOon-yMB2M8) — Automated Reasoning · 11:15

### Graph Theory in SAT *(prerequisite)*
Graph theory forms the foundation of the paper's novel characterization of BVA reencodings. A solid grasp of graph concepts, especially those related to planar graphs and graph algorithms, is crucial to understanding the theoretical framework developed by the authors.

*How the paper uses it:* The authors develop a graph-theoretic framework characterizing BVA reencodings using strict polarized rectifier networks.

▶ [The Satisfiability Problem](https://www.youtube.com/watch?v=4K1MyG4ljI8) — JetBrains · 57:58

### Biclique Partition Algorithms *(prerequisite)*
Biclique partition algorithms are key algorithmic tools leveraged in the paper to achieve a more efficient BVA implementation. Understanding these algorithms provides insight into the practical improvements and runtime optimizations presented.

*How the paper uses it:* The paper uses biclique partition algorithms to develop a drastically more efficient BVA implementation with O(n^2) runtime.

▶ [Graph Coloring, Biclique Partition, and Communication Complexity - Hao Huang](https://www.youtube.com/watch?v=jTL8b2Pr8rU) — Institute for Advanced Study · 9 years ago

### Bounded Variable Addition BVA
BVA is the central preprocessing technique studied and improved in the paper. This section covers the theoretical foundations and practical aspects of BVA in SAT solving, setting the stage for understanding the paper's contributions.

*How the paper uses it:* The paper analyzes BVA's theoretical capabilities and presents a new efficient implementation.

▶ [Preprocessing SAT, MaxSAT, and QBF 3](https://www.youtube.com/watch?v=mAvaCDVsu38) — Simons Institute for the Theory of Computing · Streamed 5 years ago

### Automated Reencoding BVA Talk *(the paper's own talk)*
The authors' own talk provides direct insight into their research, including the graph-theoretic characterization, theoretical bounds, and implementation details. This is the most authoritative source for understanding the paper's contributions.

*How the paper uses it:* This is a direct presentation by an expert closely related to the paper's topic, offering deep understanding of the work.

▶ [Ayman Badawi: 20 minutes talk at 11th Conference on Graph Theory and Algebraic Combinatorics, Iran](https://www.youtube.com/watch?v=GU2M4A1KwIk) — Ayman Badawi · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Automated Reencoding and Bounded Variable Addition (BVA), start by learning the basics of 2-CNF formulas and SAT problems, which form the foundation of the paper's focus. Next, build intuition on graph theory concepts relevant to SAT solving, as the paper uses graph-theoretic frameworks. Then study biclique partition algorithms, which enable the paper's efficient BVA implementation. Finally, explore BVA itself, the core preprocessing technique studied and improved in the paper, and conclude with a direct talk by an author for deeper insight.

### 2-CNF Formulas and SAT *(prerequisite)*
Learn what 2-CNF formulas are and how they relate to the Boolean satisfiability problem (SAT). This includes understanding conjunctive normal form (CNF), clauses, and why SAT is a fundamental problem in computer science and automated reasoning.

*How the paper uses it:* The paper studies BVA's power and limitations specifically on 2-CNF formulas, so understanding this formula class is essential.

▶ [Lecture-25-CNF, DNF and satisfiability and Validity ...](https://www.youtube.com/watch?v=pfFv8ms8CrA) — CH 25: IIT KANPUR 02: Humanities & Social Sciences · 59:34

### Graph Theory in SAT *(prerequisite)*
Gain intuition about graph theory concepts such as vertices, edges, bipartite graphs, and how graphs can represent logical formulas and constraints. This foundation helps understand the paper's graph-theoretic characterization of BVA.

*How the paper uses it:* The authors develop a graph-theoretic framework characterizing BVA reencodings using strict polarized rectifier networks.

▶ [2-SAT Problem Explained: CSES Giant Pizza Solution | Graph ...](https://www.youtube.com/watch?v=J6JPHsX5RHc) — Yatish Garg · 13:05

### Biclique Partition Algorithms *(prerequisite)*
Understand what biclique partitions are in graphs and how algorithms can efficiently find these partitions. This knowledge is key to grasping the paper's improved BVA implementation that leverages biclique partitioning for speed.

*How the paper uses it:* The paper uses biclique partition algorithms to achieve an O(n^2) runtime in their new BVA implementation.

▶ [Graph Theory: What is a Complete Bipartite Graph?](https://www.youtube.com/watch?v=HYNzYM8aYFM) — Zach's Math Zone · 5:39 · 1 year ago

### Bounded Variable Addition BVA
Learn what Bounded Variable Addition is as a preprocessing technique in SAT solving, how it reduces formula size by introducing auxiliary variables, and its practical importance in improving solver performance.

*How the paper uses it:* BVA is the central preprocessing technique studied and improved in the paper.

▶ [Preprocessing SAT, MaxSAT, and QBF 3](https://www.youtube.com/watch?v=mAvaCDVsu38) — Simons Institute for the Theory of Computing · Streamed 5 years ago

### Automated Reencoding BVA Talk *(the paper's own talk)*
Watch a concise talk by an expert presenting the paper's main contributions, including the graph-theoretic characterization of BVA, theoretical bounds, and the new efficient implementation.

*How the paper uses it:* Direct access to the authors' presentation provides a deep understanding of their contributions and results.

▶ [Ayman Badawi: 20 minutes talk at 11th Conference on Graph Theory and Algebraic Combinatorics, Iran](https://www.youtube.com/watch?v=GU2M4A1KwIk) — Ayman Badawi · 5 years ago

## Already in your library

- [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — also for: Automated Reencoding Meets Graph Theory (Marijn Heule)
- [Theory of Computation Lecture: NP-Completeness and CNF ...](https://www.youtube.com/watch?v=BAUWVipNwb8) — also for: Automated Reencoding Meets Graph Theory (Marijn Heule)
