---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "8db7d3d398d388620d12ad31daa63b00a21c28ab1e635481bc2ce56b4e58c0b5"
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

To deeply understand the paper "Automated Reencoding Meets Graph Theory," start by building a solid foundation in the theory of 2-CNF formulas and SAT solving, as these form the class of formulas the paper focuses on. Next, study graph theory concepts relevant to SAT solving and biclique partition algorithms, which underpin the paper's graph-theoretic framework and efficient BVA implementation. Finally, engage with the authors' own talks or advanced research presentations that directly address BVA and its graph-theoretic characterization to grasp the novel contributions and experimental results.

### 2-CNF Formulas and SAT *(prerequisite)*
Understanding 2-CNF formulas and their satisfiability is essential since the paper's theoretical framework and results focus on reencoding 2-CNF formulas. This section covers the complexity and algorithms related to 2-SAT, providing the logical and computational background necessary for the paper's analysis.

*How the paper uses it:* The paper studies BVA's power and limitations specifically on 2-CNF formulas.

▶ [How to solve the 2-SAT problem in POLYNOMIAL TIME?](https://www.youtube.com/watch?v=Ku-jJ0G4tIc) — Inside code · 2 years ago

### Graph Theory in SAT Solving *(prerequisite)*
The paper develops a graph-theoretic characterization of BVA reencodings, so a solid grasp of graph theory concepts applied to SAT solving is crucial. This section introduces graph theory from a computer science perspective, emphasizing its role in analyzing SAT preprocessing techniques.

*How the paper uses it:* The authors use graph-theoretic characterizations to analyze BVA reencodings.

▶ [Introduction to Graph Theory: A Computer Science Perspective](https://www.youtube.com/watch?v=LFKZLXVO-Dg) — Reducible · 6 years ago

### Biclique Partition Algorithms *(prerequisite)*
Biclique partition algorithms are key to the paper's efficient BVA implementation, enabling an O(n^2) runtime improvement. This section covers algorithmic techniques for graph partitioning, focusing on bipartite graphs and bicliques, which directly relate to the paper's algorithmic contributions.

*How the paper uses it:* The paper leverages biclique partition algorithms to develop a more efficient BVA implementation.

▶ [Lecture 7. Graph partitioning algorithms.](https://www.youtube.com/watch?v=zZae_C2BU_4) — Leonid Zhukov · 1:03:57 · 5 years ago

### Automated Reencoding BVA Talk *(the paper's own talk)*
This section focuses on talks that directly address the paper's novel graph-theoretic framework and efficient BVA implementation. Engaging with these presentations provides insight into the authors' motivations, technical details, and experimental validations, offering the most direct and advanced understanding of the paper's contributions.

*How the paper uses it:* This is the authors' own or closely related research presentations on BVA and its graph-theoretic characterization.

▶ [Ayman Badawi: 20 minutes talk at 11th Conference on Graph Theory and Algebraic Combinatorics, Iran](https://www.youtube.com/watch?v=GU2M4A1KwIk) — Ayman Badawi · 15:27 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Automated Reencoding Meets Graph Theory,' start by learning the basics of 2-CNF formulas and SAT solving, which form the foundation of the problem. Next, explore graph theory concepts as they relate to SAT solving to grasp the paper's analytical approach. Then, study biclique partition algorithms, which underpin the efficient implementation of BVA. Finally, focus on Bounded Variable Addition (BVA) itself, the core preprocessing technique analyzed and improved in the paper.

### 2-CNF Formulas and SAT *(prerequisite)*
2-CNF formulas are a special class of Boolean formulas where each clause has exactly two literals. Understanding 2-CNF and the SAT problem is essential because the paper focuses on reencoding these formulas to reduce their size. This foundation helps you appreciate the constraints and goals of the BVA technique.

*How the paper uses it:* The paper studies BVA's power and limits specifically on 2-CNF formulas.

▶ [How to solve the 2-SAT problem in POLYNOMIAL TIME?](https://www.youtube.com/watch?v=Ku-jJ0G4tIc) — Inside code · 2 years ago

### Graph Theory in SAT Solving *(prerequisite)*
Graph theory provides tools to represent and analyze relationships between variables and clauses in SAT problems. Learning how graphs model SAT formulas helps you understand the paper's novel graph-theoretic framework for characterizing BVA reencodings.

*How the paper uses it:* The authors use graph-theoretic characterizations to analyze BVA reencodings.

▶ [Introduction to Graph Theory: A Computer Science Perspective](https://www.youtube.com/watch?v=LFKZLXVO-Dg) — Reducible · 6 years ago

### Biclique Partition Algorithms *(prerequisite)*
Biclique partitioning breaks bipartite graphs into complete bipartite subgraphs, which is a key step in the paper's efficient BVA implementation. Understanding these algorithms clarifies how the authors achieve a faster runtime for BVA.

*How the paper uses it:* The paper leverages biclique partition algorithms to implement BVA with O(n^2) runtime.

▶ [What is a Bipartite Graph? | Graph Theory](https://www.youtube.com/watch?v=HqlUbSA9cEY) — Wrath of Math · 5:17 · 7 years ago

### Bounded Variable Addition BVA
Bounded Variable Addition is a preprocessing technique that reduces formula size by introducing auxiliary variables. Learning BVA helps you grasp the paper's main focus: characterizing BVA's theoretical limits and improving its practical implementation.

*How the paper uses it:* BVA is the central method studied and improved in the paper.

▶ [Preprocessing SAT, MaxSAT, and QBF 3](https://www.youtube.com/watch?v=mAvaCDVsu38) — Simons Institute for the Theory of Computing · Streamed 5 years ago

## Already in your library

- [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — also for: Automated Reencoding Meets Graph Theory (Marijn Heule)
