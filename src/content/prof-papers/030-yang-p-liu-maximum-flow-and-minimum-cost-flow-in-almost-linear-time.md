---
title: "030 · Maximum Flow and Minimum-Cost Flow in Almost-Linear Time — Yang P. Liu"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yangpliu-github-io"
source_hash: "91421476dd64e48869026542c8ef281d7c45aa8a1ad35a95be9c41980b81e13f"
sequence: 30
generator: "outreach-garden: managed"
---

# 030 · Maximum Flow and Minimum-Cost Flow in Almost-Linear Time

## At a glance

- **Professor:** Yang P. Liu
- **Institution:** Carnegie Mellon University
- **Paper:** [Maximum Flow and Minimum-Cost Flow in Almost-Linear Time](https://arxiv.org/abs/2203.00671)
- **Authors:** Li Chen, Richard Peng, Rasmus Kyng, Yang P. Liu, Maximilian Probst Gutenberg, Sushant Sachdeva
- **Year:** 2022

## Paper overview

This paper presents a new algorithm that computes exact maximum flows and minimum-cost flows on directed graphs in almost-linear time. It introduces a novel interior point method (IPM) that reduces the min-cost flow problem to a sequence of undirected minimum-ratio cycle problems, which can be solved efficiently using new dynamic graph data structures. The approach also extends to general convex flow problems, enabling fast algorithms for various applications such as optimal transport and matrix scaling.

### Why it matters

**Research problem:** Designing faster algorithms for maximum flow and minimum-cost flow problems on directed graphs, which are fundamental combinatorial optimization problems with many applications but have resisted near-linear time solutions for decades.

**Why it matters:** Max-flow and min-cost flow problems underpin numerous applications in engineering, scientific computing, and combinatorial optimization, including bipartite matching, shortest paths with negative weights, connectivity problems, and optimal transport. Faster algorithms can significantly improve computational efficiency in these areas.

**Key contributions:**

- A new potential reduction IPM that reduces min-cost flow to m1+o(1) approximate undirected minimum-ratio cycle subproblems.
- A randomized dynamic data structure maintaining approximate min-ratio cycles with amortized mo(1) update time, supporting adaptive updates from the IPM.
- A novel dynamic spanner data structure with explicit path embeddings that remains stable under edge insertions, deletions, and vertex splits.
- Extension of the algorithm to general edge-separable convex flow problems, including p-norm flows and entropy-regularized optimal transport.
- Demonstration of stability properties of the IPM iterates that enable efficient data structure maintenance despite adaptivity.

## About the professor

**Yang P. Liu** — Assistant Professor, Computer Science Department, Carnegie Mellon University.

Research interests: graph algorithms, optimization, high-dimensional geometry, and additive combinatorics

### Research links

- [Faculty/profile page](https://yangpliu.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization and Interior Point Methods
**The paper assumes:** convex optimization theory, interior point methods, potential reduction algorithms, combinatorial optimization
**Already in this field?** Skip this entirely if you already have a solid understanding of convex optimization and interior point methods, especially their application to combinatorial problems.

To understand the core algorithmic approach of this paper, which relies heavily on interior point methods (IPM) and convex optimization, it is essential to grasp the fundamentals of convex optimization and IPMs. The rigorous course option provides a deep, structured, and authoritative treatment of convex optimization, ideal for readers seeking a thorough understanding. The fast track offers a more concise, intuition-driven introduction to optimization methods, including IPMs, suitable for readers who want a quicker but still solid conceptual grasp before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 11 (Stanford EE364A Convex Optimization I Stephen Boyd I 2023 I Lecture 1 to Lecture 11), about 14.5 hours — covering convex sets, functions, duality, and interior point methods, which are essential to understand the paper's IPM framework.

*Why it unblocks this paper:* This is a comprehensive, authoritative Stanford course on convex optimization by Stephen Boyd, covering the theory and methods including interior point methods, which are central to the paper's approach.

*If you want all of it:* All 18 lectures, about 23.7 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimization Methods for Machine Learning and Engineering (KIT Winter Term 20/21)](https://www.youtube.com/playlist?list=PLdkTDauaUnQpzuOCZyUUZc0lxf4-PXNR5) — Julius Pfrommer · 41 videos · 17.5h across 41 episodes

**Watch only this:** Episodes 1.1 through 3.3 (Optimization Methods - Motivation and Historical Perspective to The Interior Point Method), about 2.5 hours total — covering the basics of optimization, convexity, and the interior point method relevant to the paper.

*Why it unblocks this paper:* This playlist offers a concise and clear introduction to optimization methods, including a dedicated episode on interior point methods, providing a faster conceptual overview suitable for readers pressed for time.

*If you want all of it:* All 41 episodes, about 17.5 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Maximum Flow and Minimum-Cost Flow in Almost-Linear Time," start by building foundational knowledge in dynamic graph data structures and low stretch spanning trees, which are critical for the paper's recursive data structure hierarchy. Then, study interior point methods for flow problems to grasp the central algorithmic framework used in the paper. Finally, focus on the authors' own talk and advanced lectures on minimum cost flow and maximum flow algorithms to directly connect with the paper's novel contributions and techniques.

### Dynamic graph data structures *(prerequisite)*
Dynamic graph data structures are essential for efficiently maintaining approximate solutions under adaptive updates, a key technical challenge addressed by the paper. Understanding the latest developments and advanced data structures in this area provides the necessary background to appreciate the paper's randomized dynamic data structure with amortized update time.

*How the paper uses it:* The paper designs a randomized dynamic data structure to maintain approximate min-ratio cycles efficiently under adaptive updates from the interior point method.

▶ [19. Dynamic Graphs I](https://www.youtube.com/watch?v=XZLN6NxEQWo) — MIT OpenCourseWare · 12 years ago

### Low stretch spanning trees *(prerequisite)*
Low stretch spanning trees are fundamental graph structures used in the paper's recursive data structure hierarchy. They enable efficient embeddings and approximations critical to the algorithm's performance. A solid understanding of minimum spanning trees and their properties is necessary to follow the paper's construction.

*How the paper uses it:* The paper uses low stretch spanning trees as a core component in its recursive data structure hierarchy to maintain approximate solutions.

▶ [12. Greedy Algorithms: Minimum Spanning Tree](https://www.youtube.com/watch?v=tKwnms5iRBU) — MIT OpenCourseWare · 10 years ago

### Interior point methods for flow *(prerequisite)*
Interior point methods form the central algorithmic framework in the paper, reducing the min-cost flow problem to a sequence of minimum-ratio cycle problems. Understanding the theory and application of interior point methods in constrained optimization and flow problems is crucial to grasp the paper's novel potential reduction IPM.

*How the paper uses it:* The paper develops a new potential reduction interior point method to solve min-cost flow via approximate minimum-ratio cycle computations.

▶ [CSE 550 (2022, Fall): 3.6 The Minimum-Cost-Flow Problem](https://www.youtube.com/watch?v=0tjpC0MCwY8) — Joshua J. Daymude · 3 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed insights into the paper's contributions, techniques, and results. Watching these presentations allows for a deeper understanding of the novel algorithmic ideas and their significance in the context of maximum flow and minimum-cost flow problems.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on the paper.

▶ [Circulation Control for Faster Minimum Cost Flow in Unit-Capacity Graphs](https://www.youtube.com/watch?v=Z6SjnJ399WE) — IEEE FOCS: Foundations of Computer Science · 23:23 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's contributions on fast algorithms for maximum flow and minimum-cost flow, start by building a foundation in dynamic graph data structures and low stretch spanning trees, which are key to efficient updates. Then learn about convex flow optimization and interior point methods, which form the algorithmic framework. Finally, focus on the minimum ratio cycle problem, the core subproblem to which min-cost flow is reduced in this work.

### Dynamic graph data structures *(prerequisite)*
Dynamic graph data structures allow efficient updates and queries on graphs that change over time, such as edge insertions or deletions. Understanding these is crucial because the paper's algorithm maintains approximate solutions under adaptive updates with very low amortized cost.

*How the paper uses it:* The paper designs a randomized dynamic data structure to maintain approximate minimum-ratio cycles efficiently under adaptive updates from the interior point method.

▶ [Developments in Dynamic Graph Algorithms](https://www.youtube.com/watch?v=oZGSdfyU_YU) — Microsoft Research · 9 years ago

### Low stretch spanning trees *(prerequisite)*
Low stretch spanning trees are special spanning trees that approximate distances in the original graph with low distortion. They are fundamental in the paper's recursive data structure hierarchy to maintain approximate solutions efficiently.

*How the paper uses it:* The algorithm uses low stretch spanning trees as a core component of its recursive data structure hierarchy for fast updates.

▶ [12. Greedy Algorithms: Minimum Spanning Tree](https://www.youtube.com/watch?v=tKwnms5iRBU) — MIT OpenCourseWare · 10 years ago

### Convex flow optimization *(prerequisite)*
Convex flow optimization generalizes min-cost flow problems by allowing convex cost functions on edges. This broader framework enables solving problems like optimal transport and matrix scaling, which the paper's approach also addresses.

*How the paper uses it:* The paper extends its algorithm to general edge-separable convex flow problems beyond min-cost flow.

▶ [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — Visually Explained · 5 years ago

### Interior point methods for flow
Interior point methods are optimization algorithms that solve constrained problems by traversing the interior of the feasible region. The paper introduces a novel potential reduction interior point method to reduce min-cost flow to minimum-ratio cycle problems.

*How the paper uses it:* The core algorithmic framework is a new interior point method that reduces min-cost flow to a sequence of approximate minimum-ratio cycle problems.

▶ [Interior-point methods for constrained optimization (Logarithmic barrier function and central path)](https://www.youtube.com/watch?v=bJ0Kkf4u9bo) — OptiML PSE · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Maximum Flow and Minimum-Cost Flow in Almost-Linear Time." The beginner project focuses on implementing and visualizing the minimum-ratio cycle problem on small graphs to grasp the core subproblem. The intermediate project involves reimplementing the paper's core interior point method (IPM) reduction from min-cost flow to minimum-ratio cycles on small directed graphs, comparing runtime against a baseline. The advanced project extends the approach by exploring a practical implementation of the dynamic data structures or adapting the method to a related convex flow problem, addressing one of the paper's stated limitations or future directions.

### Beginner — Minimum-Ratio Cycle Visualization on Small Graphs
*Effort: a weekend, ~8 hours*

You build a small interactive tool or script that computes and visualizes minimum-ratio cycles on undirected weighted graphs. This implements the minimum-ratio cycle problem as described in the paper's reduction step, using simple graph algorithms and visualizations to illustrate the concept.

**Why it shows you understood the paper:** This project shows you understand the key subproblem the paper reduces min-cost flow to, and can implement and explain the minimum-ratio cycle problem, a core building block of the algorithm.

**Grounded in:** The algorithm reduces min-cost flow to solving undirected minimum-ratio cycle problems (Section 2.1).

**Tech stack:** Python 3.11, NetworkX, Matplotlib or Plotly

**Data:** Use small synthetic graphs you generate yourself to demonstrate the minimum-ratio cycle computations.

**Build it:**

1. Implement a function to find cycles in an undirected graph and compute their ratio of weights as defined in the minimum-ratio cycle problem.
2. Generate small example graphs with weighted edges to test your function.
3. Visualize the graph and highlight the minimum-ratio cycle found.
4. Write a README explaining the minimum-ratio cycle problem and how your code solves it.

**Ships as:** A GitHub repo with code and visualizations demonstrating minimum-ratio cycle computations on example graphs, with clear explanations.

**Stretch goal:** Add interactive UI controls to modify graph weights and dynamically update the minimum-ratio cycle visualization.

### Intermediate — Reimplementation of IPM Reduction for Min-Cost Flow
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core potential reduction interior point method that reduces min-cost flow on directed graphs to a sequence of approximate undirected minimum-ratio cycle problems. You apply this to small directed graphs with integral capacities and costs, and compare runtime and correctness against a simple baseline min-cost flow solver (e.g., network simplex or successive shortest path).

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's main algorithmic framework from the description, understand the reduction mechanism, and evaluate its performance on representative inputs.

**Grounded in:** A new potential reduction IPM that reduces min-cost flow to m1+o(1) approximate undirected minimum-ratio cycle subproblems (Key Contributions).

**Tech stack:** Python 3.11, NetworkX, NumPy

**Data:** Use small synthetic directed graphs with polynomially bounded integral capacities and costs generated by you to simulate min-cost flow instances.

**Build it:**

1. Implement a basic min-cost flow solver as a baseline (e.g., successive shortest path).
2. Implement the IPM reduction that iteratively solves approximate minimum-ratio cycle problems on undirected graphs derived from the directed graph.
3. Integrate your minimum-ratio cycle solver from the beginner project as a subroutine.
4. Run experiments comparing your IPM-based solver's correctness and runtime against the baseline on small graphs.
5. Document the implementation details, challenges, and results in a README.

**Ships as:** A GitHub repo with code implementing the IPM reduction for min-cost flow, experimental comparison against a baseline, and detailed documentation.

**Stretch goal:** Incorporate a simple dynamic data structure to maintain approximate cycles under edge weight updates to mimic the paper's dynamic approach.

### Advanced — Prototype Implementation of Dynamic Data Structures for Adaptive IPM Updates
*Effort: 3+ weeks, ~80+ hours*

You build a prototype implementation of a dynamic graph data structure inspired by the paper's randomized dynamic spanner with explicit path embeddings, designed to maintain approximate minimum-ratio cycles efficiently under adaptive updates from the IPM iterations. Alternatively, you adapt the IPM framework to solve a related convex flow problem such as entropy-regularized optimal transport on small datasets, addressing a future direction.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's novel data structures and their role in achieving almost-linear time, or the ability to extend the framework to new convex flow problems, tackling a stated limitation or future direction.

**Grounded in:** A randomized dynamic data structure maintaining approximate min-ratio cycles with amortized mo(1) update time (Key Contributions); Extension to general convex flow problems including optimal transport (Key Contributions and Future Directions).

**Tech stack:** Python 3.11, C++ (optional for performance), NetworkX, NumPy, SciPy

**Data:** Use small synthetic graphs or publicly available small optimal transport datasets (e.g., small point clouds) to test convex flow extensions.

**Build it:**

1. Study the paper's description of the dynamic spanner data structure and IPM stability properties.
2. Implement a simplified version of a dynamic spanner or dynamic graph structure that supports edge insertions, deletions, and approximate cycle queries.
3. Integrate this data structure with your IPM reduction implementation to handle adaptive updates efficiently.
4. Alternatively, implement the IPM framework for entropy-regularized optimal transport on small datasets.
5. Evaluate the prototype's correctness and performance on small instances.
6. Write detailed documentation explaining the design choices, challenges, and relation to the paper.

**Ships as:** A GitHub repo with prototype dynamic data structures or convex flow solver extending the paper's methods, with experimental results and thorough documentation.

**Stretch goal:** Explore derandomization techniques or practical optimizations to improve stability and runtime constants.
