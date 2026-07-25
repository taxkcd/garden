---
title: "030 · Maximum Flow and Minimum-Cost Flow in Almost-Linear Time — Yang P. Liu"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yangpliu-github-io"
source_hash: "1cb18addd418f1661cb376e0c951c609c8468f6a57cb7567f5cec24fee5d6833"
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
