---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "ad87d6614bd7ad048f9384a6cd0f02d1c118f6b0b5df3ada3d6951f8325b28cd"
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

To deeply understand the paper "Automated Reencoding Meets Graph Theory," start by building a solid foundation in graph theory concepts relevant to SAT solving, including biclique partition algorithms which are central to the paper's efficient BVA implementation. Next, grasp the theory and complexity of 2-CNF formulas and satisfiability, as the paper focuses on reencoding these formulas. Then, explore the role of graph theory specifically in SAT solving contexts to appreciate the theoretical framework developed. Finally, study the core concept of Bounded Variable Addition preprocessing and the authors' own presentation of their work to connect theory with their novel contributions and experimental results.

### Graph theory in SAT solving *(prerequisite)*
This section covers the application of graph theory concepts within SAT solving, which is crucial for understanding the paper's graph-theoretic framework for BVA. The selected talk from the Simons Institute by Bernardo Subercaseaux is a research-level presentation connecting SAT solving and graph theory, providing advanced insights into the interplay between these fields.

*How the paper uses it:* The paper uses graph-theoretic frameworks to analyze BVA and its limitations in SAT solving.

▶ [Computer-Assisted Intuition: SAT Solvers in Mathematical Discovery](https://www.youtube.com/watch?v=MlGcHr2Qh3o) — Simons Institute for the Theory of Computing · Streamed 1 year ago

### Biclique partition algorithms *(prerequisite)*
Biclique partition algorithms are a key algorithmic tool enabling the paper's drastically more efficient BVA implementation. The chosen talk by Hao Huang at the Institute for Advanced Study rigorously discusses biclique partitions in the context of graph coloring and communication complexity, offering a deep theoretical foundation relevant to the paper's approach.

*How the paper uses it:* The paper leverages biclique partition algorithms to achieve an O(n^2) runtime in its new BVA implementation.

▶ [Graph Coloring, Biclique Partition, and Communication Complexity - Hao Huang](https://www.youtube.com/watch?v=jTL8b2Pr8rU) — Institute for Advanced Study · 14:07 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's focus on Bounded Variable Addition (BVA) and its graph-theoretic analysis. We start with the basics of 2-CNF formulas and satisfiability to grasp the problem domain, then cover relevant graph theory concepts, followed by biclique partition algorithms which enable the efficient BVA implementation. Finally, we explore BVA preprocessing itself, connecting all to the paper's contributions.

### 2-CNF formulas and satisfiability *(prerequisite)*
Learn what 2-CNF formulas are and why satisfiability matters. This includes understanding boolean formulas with clauses of two literals, and how deciding their satisfiability is a fundamental computational problem. This foundation is essential because the paper studies BVA specifically on 2-CNF formulas.

*How the paper uses it:* The paper focuses on reencoding 2-CNF formulas to reduce clause counts using BVA.

▶ [How to solve the 2-SAT problem in POLYNOMIAL TIME?](https://www.youtube.com/watch?v=Ku-jJ0G4tIc) — Inside code · 2 years ago

### Graph theory in SAT solving *(prerequisite)*
Understand how graph theory concepts apply to SAT problems, including representing formulas as graphs and using graph properties to analyze complexity and transformations. This intuition helps grasp the paper's graph-theoretic framework characterizing BVA.

*How the paper uses it:* The authors develop a graph-theoretic characterization of BVA reencodings using strict polarized rectifier networks.

▶ [Computer-Assisted Intuition: SAT Solvers in Mathematical Discovery](https://www.youtube.com/watch?v=MlGcHr2Qh3o) — Simons Institute for the Theory of Computing · Streamed 1 year ago

### Biclique partition algorithms *(prerequisite)*
Learn about biclique partitions in bipartite graphs and algorithms to find them efficiently. This is crucial because the paper leverages biclique partition algorithms to implement a faster BVA method with O(n^2) runtime.

*How the paper uses it:* The new efficient BVA implementation uses biclique partition algorithms to speed up preprocessing.

▶ [Graph Coloring, Biclique Partition, and Communication Complexity - Hao Huang](https://www.youtube.com/watch?v=jTL8b2Pr8rU) — Institute for Advanced Study · 14:07 · 9 years ago

### Bounded Variable Addition preprocessing
Explore what Bounded Variable Addition (BVA) is and how it reduces formula size by introducing auxiliary variables. Understanding BVA's role in SAT solver preprocessing is key to appreciating the paper's theoretical and practical contributions.

*How the paper uses it:* BVA is the central preprocessing technique studied and improved in the paper.

▶ [Preprocessing SAT, MaxSAT, and QBF 3](https://www.youtube.com/watch?v=mAvaCDVsu38) — Simons Institute for the Theory of Computing · Streamed 5 years ago

### Automated Reencoding Meets Graph Theory talk *(the paper's own talk)*
Watch a detailed presentation on the paper's main ideas, including the graph-theoretic characterization of BVA, theoretical bounds, and the new efficient implementation. This talk ties together all prior concepts in the context of the authors' work.

*How the paper uses it:* This is the authors' own presentation explaining their approach and results.

▶ [Introduction to Graph Theory | Basics of Graph Theory | Imp for GATE and UGC NET](https://www.youtube.com/watch?v=5eKDQmTzX2A) — Gate Smashers · 7 years ago

## Already in your library

- [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — also for: Automated Reencoding Meets Graph Theory (Marijn Heule)
