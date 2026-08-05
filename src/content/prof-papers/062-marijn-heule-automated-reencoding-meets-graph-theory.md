---
title: "062 · Automated Reencoding Meets Graph Theory — Marijn Heule"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marijn-heule"
source_hash: "9eef04c105b4a6b5b9f6fc7452bbfc76b442ff90e467b3be2c54221d0e759ad6"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Automated Reencoding Meets Graph Theory" by Przybocki et al. The beginner project focuses on reproducing a core concept of Bounded Variable Addition (BVA) on small 2-CNF formulas using familiar programming skills. The intermediate project builds on this by running and extending the authors' efficient BVA implementation to evaluate clause reductions on random monotone 2-CNF formulas, introducing graph algorithms and performance measurement. The advanced project tackles a future direction by exploring generalization of BVA reencoding from 2-CNF to 3-CNF formulas using hypergraph decompositions, addressing a stated limitation and requiring deeper theoretical and implementation work.

### Beginner — Visualize BVA Clause Reduction on Small 2-CNF Formulas
*Effort: a weekend, ~8 hours*

You build a small tool that takes manually created 2-CNF formulas (up to ~10 variables), applies a simplified BVA preprocessing step to reduce clauses by introducing auxiliary variables, and visualizes the original and reduced formulas along with clause counts. The tool includes a basic graph representation of the formula's implication graph to illustrate the graph-theoretic intuition behind BVA.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of BVA and its graph-theoretic basis on 2-CNF formulas, as well as the practical effect of clause reduction. A professor would see you grasp the fundamental concept and can concretely reproduce a key idea from the paper.

**Grounded in:** Key contribution: Graph-theoretic characterization of idealized BVA reencodings via strict polarized rectifier networks (Theorem 5).

**Tech stack:** Python 3.11, NetworkX, Matplotlib or Plotly

**Data:** You create small synthetic 2-CNF formulas manually to illustrate BVA effects; no external dataset needed.

**Build it:**

1. Implement a parser for small 2-CNF formulas in CNF format.
2. Implement a simplified BVA procedure that identifies variable sets to introduce auxiliary variables and reduces clauses accordingly.
3. Build a graph representation of the formula's implication graph using NetworkX.
4. Visualize the original and reduced formulas and their clause counts side-by-side.
5. Document the relation between the graph structure and the clause reduction achieved.

**Ships as:** A GitHub repo with code, example 2-CNF formulas, visualizations of formulas before and after BVA, and a README explaining the graph-theoretic intuition.

**Stretch goal:** Add an interactive web UI using React to input formulas and see live BVA reductions and graphs.

### Intermediate — Run and Extend Efficient BiVA Implementation on Random 2-CNF Formulas
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' BicliqueVA implementation from https://github.com/bsubercaseaux/BicliqueVA on randomly generated monotone 2-CNF formulas derived from random graphs. You measure clause counts and runtime, compare against a baseline naive BVA implementation you write, and reproduce the paper's experimental metrics on clause reduction and runtime improvements.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand their algorithmic improvements using biclique partition algorithms, and experimentally validate key results. It demonstrates practical skills in graph algorithms and SAT preprocessing.

**Grounded in:** Key results: The new BVA implementation achieves an order-of-magnitude speedup over previous implementations on large random monotone 2-CNF formulas (Section 4 and Figures 6,7).

**Tech stack:** Python 3.11, C++ (for BicliqueVA code), NetworkX, GNU Make or CMake, Matplotlib

**Data:** Random monotone 2-CNF formulas generated from Erdős–Rényi random graphs G(n,p) as described in the paper; you generate these synthetically.

**Build it:**

1. Clone and build the BicliqueVA repository from https://github.com/bsubercaseaux/BicliqueVA following provided instructions.
2. Implement a baseline naive BVA algorithm in Python for comparison.
3. Write scripts to generate random monotone 2-CNF formulas from random graphs G(n,p).
4. Run both implementations on these formulas, recording clause counts and runtimes.
5. Plot and analyze the results to compare clause reduction and runtime improvements.
6. Write a report summarizing your findings and relating them to the paper's claims.

**Verified links from the paper:**

- <https://github.com/bsubercaseaux/BicliqueVA> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to generate formulas, run both BVA implementations, produce plots of clause counts and runtimes, and a detailed README/report.

**Stretch goal:** Integrate the new BiVA implementation with an existing SAT solver pipeline and measure end-to-end solver performance improvements.

### Advanced — Explore BVA Generalization to 3-CNF via Hypergraph Decompositions
*Effort: 3-4 weeks*

You develop a prototype framework extending the paper's graph-theoretic characterization of BVA from 2-CNF formulas (graphs) to 3-CNF formulas (hypergraphs). You implement a hypergraph-based reencoding method inspired by BVA principles, experiment on small synthetic 3-CNF formulas, and analyze clause reduction and structural properties. This addresses the paper's stated limitation and future direction about generalizing to k-CNF.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's theoretical framework and limitations, and the ability to extend it to a challenging open problem. It shows initiative in tackling future research directions and applying advanced graph/hypergraph theory to SAT preprocessing.

**Grounded in:** Limitation and future direction: The theoretical framework focuses on 2-CNF; generalization to k-CNF requires hypergraph theory and remains future work.

**Tech stack:** Python 3.11, HyperNetX or similar hypergraph library, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic small 3-CNF formulas generated manually or via scripts; no public dataset available for this specialized task.

**Build it:**

1. Study hypergraph representations of 3-CNF formulas and existing hypergraph decomposition algorithms.
2. Implement a hypergraph-based reencoding method inspired by BVA principles, introducing auxiliary variables to reduce clause counts.
3. Generate small synthetic 3-CNF formulas to test your method.
4. Measure clause counts before and after reencoding and analyze structural changes.
5. Compare your results qualitatively to the 2-CNF case and discuss challenges.
6. Document your approach, experiments, and insights in a detailed README or report.

**Ships as:** A GitHub repo with code implementing hypergraph-based BVA reencoding, example formulas, experimental results, and a comprehensive write-up discussing the extension and its challenges.

**Stretch goal:** Explore integration of your hypergraph BVA method with existing SAT solvers and evaluate solver performance on 3-CNF benchmarks.

_The intermediate project depends on the authors' BicliqueVA codebase being buildable and runnable on your system; verify build instructions and dependencies before starting._
