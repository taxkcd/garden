---
title: "272 · Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness — David Fernández-Baca"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-fernandez-baca"
source_hash: "57939af26ce17034e5e4f803c9f7303c38d2fe0d0a79e7090b81606c16100fd4"
sequence: 272
generator: "outreach-garden: managed"
---

# 272 · Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness

## At a glance

- **Professor:** David Fernández-Baca
- **Institution:** Iowa State University
- **Paper:** [Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness](https://arxiv.org/abs/2104.02103)
- **Authors:** Ghazaleh Parvini, David Fernández-Baca
- **Year:** 2021

## Paper overview

This paper addresses the no-rainbow hypergraph coloring problem, which asks if nodes of a hypergraph can be colored with r colors such that all colors are used but no hyperedge contains all distinct colors. The problem is NP-complete for r ≥ 3. The authors present new deterministic and randomized exact algorithms to solve this problem more efficiently, with applications to phylogenetic tree construction, particularly the phylogenetic decisiveness problem.

### Why it matters

**Research problem:** The no-rainbow r-coloring problem for r-uniform hypergraphs, which is NP-complete for r ≥ 3, and its special case for r=4 related to phylogenetic decisiveness.

**Why it matters:** The problem is fundamental in combinatorial optimization and has direct applications in reconstructing unique phylogenetic trees from incomplete data, a key task in evolutionary biology.

**Key contributions:**

- A deterministic algorithm for no-rainbow r-coloring with worst-case running time O*((r-1)^((r-1)n/r))
- A randomized algorithm with running time O*((r^2)^n) that finds solutions with high probability
- Application of local search techniques to the no-rainbow coloring problem
- Improved exact algorithms for the special case r=4, relevant to phylogenetic decisiveness

## About the professor

**David Fernández-Baca** — Professor, Department of Computer Science, Iowa State University.

Research interests: combinatorial algorithms, exact algorithms for NP-hard problems, phylogenetic tree construction, and legume evolution

### Research links

- [Faculty/profile page](http://www.cs.iastate.edu/~fernande)
- [Resolved homepage](https://faculty.sites.iastate.edu/fernande/#main-content)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Exact Algorithms for NP-hard Problems
**The paper assumes:** computational complexity theory, exact exponential-time algorithms, local search algorithms, randomized algorithm analysis
**Already in this field?** Skip this entirely if you already understand NP-completeness, exact algorithm design techniques, and probabilistic runtime analysis for NP-hard problems.

To understand the exact algorithms for the no-rainbow coloring problem and their complexity, it is essential to grasp NP-hardness, exact exponential-time algorithm design techniques like local search and backtracking, and probabilistic analysis of randomized algorithms. The rigorous course provides a deep, university-level foundation in algorithm design and analysis, while the fast track offers a concise, accessible introduction to key concepts in algorithm complexity and NP-completeness. Choose the rigorous course for thorough understanding and the fast track for a quick yet solid overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.046J Design and Analysis of Algorithms, Spring 2015](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) — MIT OpenCourseWare · 34 videos · 39.5h across 34 episodes

**Watch only this:** Lectures 12 (Greedy Algorithms: Minimum Spanning Tree), 16 (Complexity: P, NP, NP-completeness, Reductions), and 18 (NP-Complete Problems), about 3.5 hours total — these cover complexity theory and NP-completeness essential for understanding the problem's hardness and algorithmic approaches.

*Why it unblocks this paper:* This MIT OpenCourseWare playlist on Design and Analysis of Algorithms covers complexity classes including NP-completeness and exact algorithm techniques, directly relevant to the paper's focus on exact algorithms for NP-hard problems like no-rainbow coloring.

*If you want all of it:* 39.5 hours across 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Chapter 03 - Algorithm and Problem Solving](https://www.youtube.com/playlist?list=PLSw9kNHHr5i1Gq0EuA476cED6TWmVHnGm) — Flare College · 17 videos · 2.4h across 17 episodes

**Watch only this:** Episodes 8 (Dynamic Programing & Backtracking), 12 (Complexity Classes (P, NP, NP-hard, NP-complete)), and 13 (Tractable Vs Intractable Problems), about 24 minutes total — these episodes cover the key algorithmic techniques and complexity classes relevant to the paper.

*Why it unblocks this paper:* This concise playlist from Flare College introduces algorithms, complexity classes (P, NP, NP-hard, NP-complete), and backtracking, providing a quick and clear foundation for understanding the computational complexity and algorithmic techniques used in the paper.

*If you want all of it:* 2.4 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on exact algorithms for no-rainbow coloring and phylogenetic decisiveness, start by building foundational knowledge on exact algorithms for NP-hard problems and local search algorithms in combinatorial optimization, as these underpin the authors' algorithmic approach. Next, gain background on phylogenetic tree construction algorithms to appreciate the biological application context. Finally, focus on the core concept of no-rainbow hypergraph coloring, including the authors' own talk if available, to grasp the problem definition, complexity, and the novel algorithmic contributions presented in the paper.

### Exact algorithms for NP-hard problems *(prerequisite)*
This section covers foundational algorithmic techniques for solving NP-hard problems exactly, which is essential to understand the theoretical framework and complexity results of the paper's algorithms. The chosen video is a concise university lecture overview by a reputable professor, providing a rigorous introduction to exact algorithms for NP-hard problems.

*How the paper uses it:* The paper develops exact algorithms for the NP-complete no-rainbow coloring problem.

▶ [Algorithms for NP-Hard Problems (Section 19.0: Overview and Prerequisites)](https://www.youtube.com/watch?v=qOFLAjxqoK0) — Tim Roughgarden Lectures · 10:05 · 6 years ago

### Local search algorithms in combinatorial optimization *(prerequisite)*
Local search is a key technique used in the paper's deterministic and randomized algorithms. This section introduces local search methods in an academic context, focusing on optimization problems and heuristic search strategies, which are crucial to understanding the algorithmic approach taken by the authors.

*How the paper uses it:* The authors use deterministic and randomized local search algorithms to solve the no-rainbow coloring problem.

▶ [Lecture 4: Local Search](https://www.youtube.com/watch?v=NPA6jEWrY90) — BrownCS141 Spring 2014 · 12 years ago

### Phylogenetic tree construction algorithms *(prerequisite)*
Understanding phylogenetic tree construction is important to appreciate the biological motivation and application of the no-rainbow coloring problem, especially the phylogenetic decisiveness problem. This section includes a university-level tutorial from a reputable academic publisher, providing a rigorous introduction to phylogenetic tree construction.

*How the paper uses it:* The paper applies no-rainbow coloring results to the phylogenetic decisiveness problem in evolutionary biology.

▶ [Creating a Phylogenetic Tree](https://www.youtube.com/watch?v=09eD4A_HxVQ) — Oxford Academic (Oxford University Press) · 8 years ago

### No-rainbow hypergraph coloring
This is the core problem studied in the paper. Understanding the definition, complexity, and combinatorial properties of no-rainbow hypergraph coloring is essential. Unfortunately, no direct author talks on this topic were found, but a research seminar on related hypergraph coloring concepts provides the best available rigorous academic content.

*How the paper uses it:* The paper focuses on the no-rainbow r-coloring problem, which is NP-complete for r ≥ 3, and develops exact algorithms for it.

▶ [Apr 1, 2022: Corrine Yap (Multicolored hypergraph Ramsey numbers)](https://www.youtube.com/watch?v=ONgFFnaxYcQ) — NY Combinatorics · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about exact algorithms for NP-hard problems to grasp the computational challenges and solution approaches. Next, study local search algorithms in combinatorial optimization, as the paper's main methods rely on these techniques. Then, explore phylogenetic tree construction algorithms to appreciate the biological application context. Finally, focus on the no-rainbow hypergraph coloring problem, the core combinatorial problem addressed in the paper.

### Exact algorithms for NP-hard problems *(prerequisite)*
This concept covers what NP-hard problems are and how exact algorithms attempt to solve them optimally despite their computational difficulty. Understanding this sets the stage for appreciating the complexity and design of the paper's algorithms.

*How the paper uses it:* The paper develops exact algorithms to solve the NP-complete no-rainbow coloring problem efficiently.

▶ [Algorithms for NP-Hard Problems (Section 19.0: Overview and Prerequisites)](https://www.youtube.com/watch?v=qOFLAjxqoK0) — Tim Roughgarden Lectures · 10:05 · 6 years ago

### Local search algorithms in combinatorial optimization *(prerequisite)*
Local search algorithms iteratively improve candidate solutions by exploring their neighbors, often used for optimization problems where exhaustive search is infeasible. This intuition helps understand the deterministic and randomized local search methods proposed in the paper.

*How the paper uses it:* The authors use deterministic and randomized local search algorithms to find no-rainbow colorings.

▶ [2.8 local search algorithms and optimization problem](https://www.youtube.com/watch?v=W_WRMgAQbbM) — Neil gogte Institute of Technology · 1 year ago

### Phylogenetic tree construction algorithms *(prerequisite)*
Phylogenetic trees model evolutionary relationships among species. Learning how these trees are constructed provides biological context for the paper's application of no-rainbow coloring to phylogenetic decisiveness.

*How the paper uses it:* The paper applies no-rainbow coloring results to the phylogenetic decisiveness problem in evolutionary biology.

▶ [Intro to Cladograms and Phylogenetic Trees](https://www.youtube.com/watch?v=cIQobFHFwcM) — Amoeba Sisters · 1 year ago

### No-rainbow hypergraph coloring
This problem asks if a hypergraph's nodes can be colored with r colors so that every color is used but no hyperedge contains all distinct colors. Understanding this problem and its NP-completeness is essential to grasp the paper's focus and contributions.

*How the paper uses it:* The paper studies exact algorithms for the no-rainbow r-coloring problem, which is NP-complete for r ≥ 3.

▶ [Hypergraph Strong Colorings [Hypergraph Theory Ep. 14]](https://www.youtube.com/watch?v=2uz9CNHM1dQ) — Vital Sine · 2 years ago

## Already in your library

- [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness." The beginner project implements a basic no-rainbow 3-coloring checker on small hypergraphs to grasp the problem and algorithmic constraints. The intermediate project reimplements the deterministic local search algorithm for no-rainbow 3-coloring and compares it against a naive baseline on synthetic hypergraphs, showing runtime and correctness metrics. The advanced project extends the deterministic algorithm to explore heuristic adaptations aimed at scaling to larger hypergraphs, addressing the paper's stated limitation on scalability and exploring practical heuristics for phylogenetic decisiveness applications.

### Beginner — No-Rainbow 3-Coloring Checker for Small Hypergraphs
*Effort: a weekend, ~8 hours*

You build a command-line tool that takes as input a small 3-uniform hypergraph and attempts to find a no-rainbow 3-coloring by brute force enumeration. The tool outputs whether such a coloring exists and shows one example coloring if found.

**Why it shows you understood the paper:** This project demonstrates you understand the no-rainbow coloring problem definition, its NP-completeness for r≥3, and the constraints on hyperedges. A professor would see you grasp the problem's combinatorial nature and the challenge of avoiding rainbow edges.

**Grounded in:** The no-rainbow hypergraph r-coloring problem is known to be NP-complete for r ≥ 3.

**Tech stack:** Python 3.11

**Data:** You generate small synthetic 3-uniform hypergraphs with 5-10 nodes and 5-15 hyperedges, as the paper does not provide datasets.

**Build it:**

1. Implement a data structure to represent 3-uniform hypergraphs.
2. Write a brute force enumerator over all 3-color assignments to nodes.
3. Check each coloring for the no-rainbow property (no hyperedge contains all three distinct colors).
4. Output whether a no-rainbow coloring exists and print one example if found.
5. Test on several small synthetic hypergraphs.

**Ships as:** A Python script with README explaining the no-rainbow coloring problem, usage instructions, and example runs on small hypergraphs.

**Stretch goal:** Add a simple visualization of hypergraphs and colorings using matplotlib.

### Intermediate — Deterministic Local Search for No-Rainbow 3-Coloring
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's deterministic local search algorithm for no-rainbow 3-coloring on r-uniform hypergraphs. You generate synthetic 3-uniform hypergraphs of moderate size (e.g., 15-25 nodes) and compare your implementation's runtime and success rate against a naive brute force baseline.

**Why it shows you understood the paper:** This project shows you can translate the paper's core exact algorithm from theory to code, understand the local search with bounded search radius and backtracking, and evaluate algorithmic performance metrics similar to those reported in the paper.

**Grounded in:** Here we present a deterministic algorithm that solves the no-rainbow r-coloring problem in O*((r-1)^((r-1)n/r)) time.

**Tech stack:** Python 3.11

**Data:** Synthetic 3-uniform hypergraphs generated with controlled parameters (nodes, edges) to simulate problem instances; no public dataset available.

**Build it:**

1. Implement the deterministic local search algorithm as described in the paper for r=3.
2. Implement a naive brute force baseline for comparison.
3. Generate synthetic 3-uniform hypergraphs with varying sizes and densities.
4. Run both algorithms on these instances, recording runtime and success.
5. Plot and analyze the results comparing the two approaches.
6. Write a README documenting the algorithm, experiments, and results.

**Ships as:** A Python repository with implementations, experiment scripts, plots comparing runtimes, and a detailed README explaining the method and results.

**Stretch goal:** Extend the implementation to handle r=4 and compare performance.

### Advanced — Heuristic Extensions for Scalable No-Rainbow Coloring and Phylogenetic Decisiveness
*Effort: 3+ weeks*

You develop heuristic adaptations inspired by the paper's deterministic and randomized exact algorithms to improve scalability on larger hypergraphs (e.g., 30-50 nodes). You implement heuristic local search strategies, such as probabilistic recoloring with early stopping, and evaluate their effectiveness on synthetic data. You discuss applicability to phylogenetic decisiveness and propose directions for practical biological datasets.

**Why it shows you understood the paper:** This project tackles the paper's stated limitation of exponential worst-case runtime by exploring heuristic methods. It demonstrates deep comprehension of the algorithms, their bottlenecks, and practical adaptations, potentially opening dialogue on scaling exact methods to real biological data.

**Grounded in:** Algorithms have exponential worst-case running times, limiting scalability to very large hypergraphs; Exploration of heuristic or approximation methods inspired by these exact algorithms.

**Tech stack:** Python 3.11

**Data:** Synthetic hypergraphs with parameters scaled up to 30-50 nodes; no real biological dataset provided by the paper.

**Build it:**

1. Review and implement the deterministic and randomized exact algorithms for no-rainbow coloring.
2. Design heuristic modifications such as probabilistic recoloring with early stopping and adaptive search radius.
3. Implement these heuristics and integrate them with the exact algorithms.
4. Generate larger synthetic hypergraphs to test scalability and solution quality.
5. Benchmark heuristics against exact methods on runtime and success probability.
6. Write a comprehensive report discussing heuristic design, results, limitations, and potential for phylogenetic decisiveness applications.

**Ships as:** A Python codebase with heuristic algorithms, benchmark scripts, and a detailed report/README discussing methods, experiments, and future directions.

**Stretch goal:** Attempt to apply heuristics on a small real phylogenetic dataset if accessible, or simulate phylogenetic decisiveness instances.
