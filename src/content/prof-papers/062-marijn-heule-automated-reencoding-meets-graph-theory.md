---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "60ba40b206797e027aeb2cb35ccf70ae5a8a7bafc587b7f2ece184df7493486e"
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

To deeply understand the paper "Automated Reencoding Meets Graph Theory," start with foundational knowledge on 2-CNF formulas and satisfiability to grasp the formula class targeted by the paper. Next, study the graph-theoretic tools and biclique partition algorithms that underpin the authors' characterization and efficient implementation of BVA. Finally, focus on the core concept of Bounded Variable Addition (BVA) preprocessing in SAT solving, culminating with the authors' own talk or the closest available advanced seminar on preprocessing techniques in SAT/SMT solving.

### 2-CNF formulas and satisfiability lecture *(prerequisite)*
Understanding 2-CNF formulas and their satisfiability properties is foundational for this paper, as the theoretical results and graph-theoretic characterizations focus on 2-CNF formulas. These lectures provide rigorous treatment of CNF formulas, satisfiability, and complexity relevant to SAT solving.

*How the paper uses it:* The paper's theoretical framework and results focus primarily on 2-CNF formulas, making this foundational knowledge essential.

▶ [Theory of Computation Lecture: NP-Completeness and CNF ...](https://www.youtube.com/watch?v=BAUWVipNwb8) — Easy Theory - Problem Solving · 43:29

### Graph theory in SAT solving seminar *(prerequisite)*
The paper leverages graph-theoretic models and tools to characterize BVA reencodings. These advanced seminars on SAT preprocessing and graph-theoretic approaches provide the necessary background on how graph theory is applied in SAT and SMT solving.

*How the paper uses it:* The authors develop a graph-theoretic characterization of BVA reencodings using strict polarized rectifier networks, making graph theory knowledge critical.

▶ [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — Simons Institute for the Theory of Computing · 43:25 · Streamed 5 years ago

### Biclique partition algorithms conference talk *(prerequisite)*
The efficient BVA implementation in the paper uses biclique partition algorithms, a topic in algorithmic graph theory. Understanding these algorithms and their computational properties will clarify the implementation improvements presented.

*How the paper uses it:* The paper's new BVA implementation leverages biclique partition algorithms to achieve O(n^2) runtime.

▶ [Abdul Basit, "Point-box incidences and logarithmic density of semilinear graphs"](https://www.youtube.com/watch?v=cCnV7s1nVv0) — UCLA Combinatorics Seminar · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by building foundational understanding of 2-CNF formulas and satisfiability, which are the types of logical formulas the paper focuses on. Then, learn key graph theory concepts that underpin the paper's novel characterization of Bounded Variable Addition (BVA). Next, explore biclique partition algorithms, which are crucial for the paper's efficient BVA implementation. Finally, dive into concise talks on BVA itself and the authors' graph-theoretic framework to grasp the core contributions and practical implications of the paper.

### 2-CNF formulas and satisfiability lecture *(prerequisite)*
This section introduces the basics of 2-CNF formulas and the satisfiability problem, explaining what these formulas look like and why determining their satisfiability is important. Understanding this is essential because the paper studies BVA's effect on 2-CNF formulas specifically.

*How the paper uses it:* The paper focuses on reencoding and reducing clause counts in 2-CNF formulas using BVA.

▶ [Lecture-25-CNF, DNF and satisfiability and Validity ...](https://www.youtube.com/watch?v=pfFv8ms8CrA) — CH 25: IIT KANPUR 02: Humanities & Social Sciences · 59:34

### Graph theory in SAT solving seminar *(prerequisite)*
This section covers fundamental graph theory concepts and models relevant to SAT solving, providing intuition about how graphs can represent logical formulas and transformations. This foundation is necessary to understand the paper's graph-theoretic characterization of BVA.

*How the paper uses it:* The authors develop a graph-theoretic framework characterizing BVA reencodings using strict polarized rectifier networks.

▶ [3. Graph-theoretic Models](https://www.youtube.com/watch?v=V_TulH374hw) — MIT OpenCourseWare · 9 years ago

### Biclique partition algorithms conference talk *(prerequisite)*
This talk introduces biclique partition algorithms, a graph theory technique used to efficiently decompose graphs into complete bipartite subgraphs. This is key to the paper's improved BVA implementation that runs in O(n^2) time.

*How the paper uses it:* The paper leverages biclique partition algorithms to develop a drastically more efficient BVA implementation.

▶ [Abdul Basit, "Point-box incidences and logarithmic density of semilinear graphs"](https://www.youtube.com/watch?v=cCnV7s1nVv0) — UCLA Combinatorics Seminar · 5 years ago

### Bounded Variable Addition BVA lecture
This section explains the Bounded Variable Addition (BVA) preprocessing technique used in SAT solvers to reduce formula size by introducing auxiliary variables. Understanding BVA is central to grasping the paper's contributions in theory and implementation.

*How the paper uses it:* BVA is the core method studied and improved upon in the paper for reducing clause counts in SAT formulas.

▶ [Preprocessing SAT, MaxSAT, and QBF 1](https://www.youtube.com/watch?v=ez9ArInp8w4) — Simons Institute for the Theory of Computing · 43:25 · Streamed 5 years ago

### Authors' talk on Automated Reencoding Meets Graph Theory *(the paper's own talk)*
This section provides a direct presentation from the authors on their new graph-theoretic framework and efficient BVA implementation, summarizing the paper's key theoretical results and practical improvements.

*How the paper uses it:* This is the authors' own presentation of their graph-theoretic characterization of BVA and their new efficient implementation.

▶ [Introduction to Graph Theory | Basics of Graph Theory | Imp for GATE and UGC NET](https://www.youtube.com/watch?v=5eKDQmTzX2A) — Gate Smashers · 7 years ago
