---
title: "302 · Bipartite Perfect Matching is in quasi-NC — Stephen A. Fenner"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stephen-a-fenner"
source_hash: "e9b8b251bbb8ea951a2b638b5e20a2b0f15edae57a7db9e107659269eb3f15e0"
sequence: 302
generator: "outreach-garden: managed"
---

# 302 · Bipartite Perfect Matching is in quasi-NC

## At a glance

- **Professor:** Stephen A. Fenner
- **Institution:** University of South Carolina
- **Paper:** [Bipartite Perfect Matching is in quasi-NC](https://arxiv.org/pdf/1601.06319)
- **Authors:** Stephen Fenner, Rohit Gurjar, Thomas Thierauf
- **Year:** 2016

## Paper overview

This paper proves that the problem of finding a perfect matching in bipartite graphs can be solved by parallel algorithms with quasi-polynomial size and poly-logarithmic depth circuits (quasi-NC2). It achieves this by almost completely derandomizing the Isolation Lemma, which was previously only known to hold with randomization. The authors also provide an RNC algorithm using very few random bits and extend their results to related problems.

### Why it matters

**Research problem:** Determining the parallel complexity of the bipartite perfect matching problem, specifically whether it lies in NC (efficient parallel algorithms with polynomial size and poly-logarithmic depth circuits), and derandomizing the Isolation Lemma used in randomized parallel algorithms for perfect matching.

**Why it matters:** Perfect matching is a fundamental problem in complexity theory and combinatorics with applications in algorithms and parallel computing. Understanding its parallel complexity and derandomization impacts the broader question of randomness necessity in parallel algorithms and advances algorithmic theory.

**Key contributions:**

- Show that bipartite perfect matching and its search version are in quasi-NC2.
- Provide an almost complete derandomization of the Isolation Lemma for bipartite graphs.
- Construct isolating weight assignments with quasi-polynomially bounded weights.
- Develop an RNC algorithm for bipartite perfect matching using only O(log^2 n) random bits.
- Extend the approach to weighted perfect matching, maximum matching, cycle cover, subtree isomorphism, maximum flow with quasi-polynomial capacities, and depth-first search tree construction.

## About the professor

**Stephen A. Fenner** — Professor in Computer Science and Engineering, Computer Science and Engineering, University of South Carolina.

Research interests: Algorithms & Computation Theory

### Research links

- [Faculty/profile page](http://www.cse.sc.edu/~fenner)
- [Resolved homepage](https://www.cse.sc.edu/~fenner/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Bipartite Perfect Matching is in quasi-NC," start by grounding yourself in the foundational concepts of parallel complexity classes and circuit complexity, which frame the computational model and complexity class where the problem resides. Next, review the classical algorithms and theory of perfect matching in bipartite graphs to appreciate the problem's background. Then, study polynomial identity testing as an algebraic tool crucial for the parallel algorithms used. Finally, focus on the paper's core contributions by watching the authors' own seminar talk, which provides direct insight into their novel derandomization techniques and quasi-NC algorithm.

### Parallel complexity classes NC RNC quasi-NC *(prerequisite)*
Understanding the complexity classes NC, RNC, and quasi-NC is essential to grasp the significance of the paper's result. These classes characterize problems solvable by parallel algorithms with polylogarithmic depth and polynomial or quasi-polynomial size circuits, which is the computational framework used in the paper.

*How the paper uses it:* The paper proves that bipartite perfect matching lies in quasi-NC2, a parallel complexity class.

▶ [Matching is as Easy as the Decision Problem, in the NC Model](https://www.youtube.com/watch?v=LNzNUmQXLTg) — TAUVOD · 50:18

### Circuit complexity uniform Boolean circuits *(prerequisite)*
Circuit complexity and uniform Boolean circuits provide the computational model for the quasi-NC algorithms constructed in the paper. Understanding how uniform circuits operate and their depth and size constraints is key to appreciating the technical contributions.

*How the paper uses it:* The paper constructs uniform Boolean circuits of quasi-polynomial size and poly-logarithmic depth for bipartite perfect matching.

▶ [mod06lec33 - Circuit Complexity: Part 1](https://www.youtube.com/watch?v=gXMr_ZTSwo4) — NPTEL-NOC IITM · 4 years ago

### Perfect matching algorithms bipartite graphs *(prerequisite)*
Familiarity with classical algorithms and combinatorial properties of perfect matchings in bipartite graphs is foundational. This includes understanding Hall's theorem, maximum matchings, and the Hungarian algorithm, which provide context for the problem and the improvements made by the paper.

*How the paper uses it:* The paper addresses the parallel complexity of finding perfect matchings in bipartite graphs.

▶ [Discrete Optimization Lecture 8: Weighted Matching and ...](https://www.youtube.com/watch?v=z7u_B-a0akA) — Jonathan Noel · 1:18:37

### Polynomial identity testing parallel algorithms *(prerequisite)*
Polynomial identity testing (PIT) is a key algebraic technique used in the paper's parallel circuit constructions. Understanding PIT and its randomized and deterministic variants is crucial to following the derandomization approach and the use of algebraic methods in the algorithm.

*How the paper uses it:* The paper uses polynomial identity testing as part of the parallel algorithm to decide and construct perfect matchings.

▶ [mod08lec44 - Polynomial Identity Testing and Bipartite Perfect Matching in RNC](https://www.youtube.com/watch?v=gczAvKAlobY) — NPTEL-NOC IITM · 4 years ago

### Authors talk on bipartite perfect matching quasi-NC
This seminar talk by Stephen Fenner, one of the paper's authors, provides direct insight into the main results, techniques, and challenges of the paper. It is the best resource for understanding the novel derandomization of the Isolation Lemma and the quasi-NC algorithm for bipartite perfect matching.

*How the paper uses it:* This is the authors' own talk on the paper's main result and techniques.

▶ [Bipartite perfect matching is in quasi-NC - Fenner](https://www.youtube.com/watch?v=VWCCzPZjEfI) — Institute for Advanced Study · 1:01:50

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's main result that bipartite perfect matching lies in quasi-NC. We start with the basics of perfect matching in bipartite graphs, then cover the parallel complexity classes that frame the problem, followed by the algebraic tool of polynomial identity testing used in the algorithms. Finally, we focus on the core concept of the Isolation Lemma and its derandomization, culminating in a direct talk by the authors about their quasi-NC result.

### Perfect matching algorithms bipartite graphs *(prerequisite)*
Learn what perfect matchings are in bipartite graphs and understand classical algorithms like the Hungarian algorithm that find such matchings. This foundation is essential to grasp the problem the paper addresses.

*How the paper uses it:* The paper studies the complexity of finding perfect matchings in bipartite graphs, building on classical definitions and algorithms.

▶ [Introduction to Matching in Bipartite Graphs (Hall's Marriage ...](https://www.youtube.com/watch?v=ooPLtxKXJPo) — Mathispower4u · 8:06

### Parallel complexity classes NC RNC quasi-NC *(prerequisite)*
Understand the classes NC, RNC, and quasi-NC that describe problems solvable efficiently in parallel. This helps frame the paper's contribution of placing bipartite perfect matching in quasi-NC2.

*How the paper uses it:* The paper proves bipartite perfect matching is in quasi-NC2, a parallel complexity class with quasi-polynomial size and poly-logarithmic depth circuits.

▶ [Matching is as Easy as the Decision Problem, in the NC Model](https://www.youtube.com/watch?v=LNzNUmQXLTg) — TAUVOD · 50:18

### Polynomial identity testing parallel algorithms *(prerequisite)*
Polynomial identity testing (PIT) is an algebraic method to check if a polynomial is identically zero, used in parallel algorithms. Understanding PIT is key to following the algebraic techniques in the paper's parallel circuit constructions.

*How the paper uses it:* The paper uses polynomial identity testing in parallel circuits to decide and construct perfect matchings efficiently.

▶ [Polynomial Identity Testing, Isolation Lemma and Bipartite Perfect Matching](https://www.youtube.com/watch?v=-sHGbMztLgc) — Subrahmanyam Kalyanasundaram · 5 years ago

### Isolation Lemma derandomization
The Isolation Lemma is a probabilistic tool that guarantees a unique minimum weight perfect matching with high probability. This paper almost completely derandomizes it for bipartite graphs, enabling deterministic parallel algorithms.

*How the paper uses it:* The main technical advance is an almost complete derandomization of the Isolation Lemma for bipartite graphs using quasi-polynomially bounded weights.

▶ [Rohit Gurjar: Bipartite matching is in quasi-NC - צילום הרצאות ...](https://www.youtube.com/watch?v=gNR-iIOy3eo) — WACT 2016 · 54:26

### Authors talk on bipartite perfect matching quasi-NC
Hear directly from the authors about their quasi-NC result for bipartite perfect matching, including the key ideas and techniques they developed. This talk provides a concise overview of the paper's contributions.

*How the paper uses it:* This talk by Stephen Fenner presents the main results and approach of the paper on bipartite perfect matching in quasi-NC.

▶ [Bipartite perfect matching is in quasi-NC - Fenner](https://www.youtube.com/watch?v=VWCCzPZjEfI) — Institute for Advanced Study · 1:01:50


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Bipartite Perfect Matching is in quasi-NC" by Fenner et al. The beginner project recreates a core concept of isolating weight assignments on small bipartite graphs using your existing programming skills. The intermediate project implements the paper's quasi-NC isolation method on small bipartite graphs and compares it to a baseline randomized approach, introducing you to parallel algorithm simulation and polynomial identity testing concepts. The advanced project tackles a stated limitation by exploring polynomially bounded isolating weights or extending isolation ideas to a related combinatorial problem, requiring deeper algorithmic insight and experimentation.

### Beginner — Isolating Weight Assignments on Small Bipartite Graphs
*Effort: a weekend, ~8 hours*

You build a program that assigns isolating weights to edges of small bipartite graphs to ensure a unique minimum weight perfect matching, following the paper's construction for small cycles. You visualize the graph, the assigned weights, and verify uniqueness of the minimum weight perfect matching by enumerating all perfect matchings.

**Why it shows you understood the paper:** This project shows you understand the Isolation Lemma's role and the paper's key technique of assigning weights to break ties among perfect matchings, a foundational step in their quasi-NC algorithm.

**Grounded in:** Section 3 constructs isolating weight assignments with quasi-polynomial weights to isolate a unique minimum weight perfect matching.

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** You generate small synthetic bipartite graphs (e.g., 6-10 nodes per part) with multiple perfect matchings to test the weight assignment.

**Build it:**

1. Implement a function to generate small bipartite graphs with multiple perfect matchings.
2. Implement the paper's isolating weight assignment scheme for small cycles as described in Section 3.
3. Enumerate all perfect matchings in the graph using NetworkX or a backtracking method.
4. Verify that the assigned weights yield a unique minimum weight perfect matching.
5. Visualize the graph with edge weights and highlight the unique minimum weight perfect matching.

**Ships as:** A GitHub repo with code, example graphs, visualizations, and a README explaining the isolation construction and results.

**Stretch goal:** Add an interactive visualization to let users input small bipartite graphs and see isolating weights assigned dynamically.

### Intermediate — Quasi-NC Isolation Algorithm Simulation for Bipartite Perfect Matching
*Effort: 2 weekends, ~20 hours*

You implement a simulation of the paper's quasi-NC isolation algorithm for bipartite perfect matching on small to medium bipartite graphs. You implement the iterative weight assignment rounds ensuring nonzero circulation on small cycles, combine weight functions, and use polynomial identity testing to verify uniqueness. You compare your deterministic isolation approach against a simple randomized Isolation Lemma baseline in terms of circuit depth and weight magnitude.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core contribution: derandomizing the Isolation Lemma with quasi-polynomial weights and parallel circuit complexity implications, by reproducing the main algorithmic technique and metrics.

**Grounded in:** Theorem 3.1 and Section 3 describe the quasi-NC2 uniform circuit construction and the iterative isolation approach with quasi-polynomial weights.

**Tech stack:** Python 3.11, NetworkX, NumPy, SymPy (for polynomial identity testing)

**Data:** You use synthetic bipartite graphs with up to a few hundred nodes generated randomly or from standard graph generators, as no public dataset is specified.

**Build it:**

1. Implement graph generation and cycle detection to identify small cycles as per the paper's rounds.
2. Implement iterative weight assignment rounds ensuring nonzero circulation on small cycles.
3. Combine weight functions from multiple rounds to produce final isolating weights.
4. Implement polynomial identity testing using SymPy to verify uniqueness of minimum weight perfect matching.
5. Implement a baseline randomized Isolation Lemma weight assignment for comparison.
6. Run experiments comparing weight magnitudes, circuit depth (simulated), and success probability between deterministic and randomized approaches.
7. Document results and analysis in a README.

**Ships as:** A GitHub repo with code implementing the quasi-NC isolation algorithm simulation, baseline comparison, experimental results, and detailed README.

**Stretch goal:** Extend the simulation to implement the RNC algorithm with O(log^2 n) random bits described in Section 4 and compare its performance.

### Advanced — Exploring Polynomially Bounded Isolating Weights for Bipartite Perfect Matching
*Effort: 3+ weeks*

You research and experiment with approaches to reduce the quasi-polynomially bounded weights in the paper's isolation construction to polynomially bounded weights, aiming toward full derandomization in NC. You implement modified weight assignment schemes inspired by the paper's techniques and related literature, test them on bipartite graphs, and analyze their effectiveness in isolating unique perfect matchings. Alternatively, you explore extending isolation techniques to a related combinatorial problem such as weighted perfect matching or maximum matching, as suggested in the paper's future directions.

**Why it shows you understood the paper:** This project tackles a key limitation and open problem stated by the authors, demonstrating deep engagement with the paper's methods and the broader research challenge of derandomization and parallel complexity.

**Grounded in:** Limitations: weights are quasi-polynomially large; Future directions: achieving polynomially bounded weights for full derandomization.

**Tech stack:** Python 3.11, NetworkX, NumPy, SymPy, Jupyter Notebook for experimentation

**Data:** Synthetic bipartite graphs of varying sizes generated programmatically; no external dataset required.

**Build it:**

1. Review the paper's isolation weight construction and identify where quasi-polynomial weights arise.
2. Research related literature on polynomially bounded isolation weights and derandomization techniques.
3. Design and implement modified weight assignment schemes aiming to reduce weight magnitude.
4. Experimentally test these schemes on bipartite graphs, verifying isolation of unique minimum weight perfect matchings.
5. Analyze and document the trade-offs, successes, and failures of your approaches.
6. Optionally, explore applying isolation ideas to a related problem like weighted perfect matching or maximum matching.
7. Prepare a detailed report or Jupyter notebook summarizing your findings and insights.

**Ships as:** A GitHub repo with experimental code, notebooks, and a comprehensive report discussing attempts to achieve polynomially bounded isolating weights or extensions to related problems.

**Stretch goal:** Develop a prototype parallel circuit simulation to estimate depth and size for your modified isolation schemes.

_No authors' code or datasets are available for this paper; all data must be synthetically generated or simulated based on the paper's descriptions._
