---
title: "030 · Maximum Flow and Minimum-Cost Flow in Almost-Linear Time — Yang P. Liu"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yangpliu-github-io"
source_hash: "bc04f90367c06ca2fd57bf6152a800c2622beba411ec4ea84ea572603b355733"
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

To deeply understand the paper 'Maximum Flow and Minimum-Cost Flow in Almost-Linear Time,' start by building foundational knowledge in dynamic graph data structures and low stretch spanning trees, which are crucial for the novel data structures used. Then, study interior point methods as the central optimization framework underlying the algorithm. Finally, focus on the paper's core contributions through the authors' own talks and detailed tutorials on the minimum ratio cycle problem, which is the key subproblem to which min-cost flow is reduced.

## Recommended videos (in order)

### Dynamic graph data structures seminar *(prerequisite)*
Dynamic graph data structures are essential for maintaining approximate minimum-ratio cycles efficiently under adaptive updates, a core technical challenge addressed by the paper. Understanding these data structures provides insight into how the algorithm achieves amortized near-constant update times.

*How the paper uses it:* The paper introduces a randomized dynamic data structure maintaining approximate min-ratio cycles with amortized mo(1) update time.

▶ [19. Dynamic Graphs I](https://www.youtube.com/watch?v=XZLN6NxEQWo) — MIT OpenCourseWare · 1:14:44

### Low stretch spanning trees lecture *(prerequisite)*
Low stretch spanning trees are a fundamental graph-theoretic tool used in the recursive data structure hierarchy that underpins the algorithm's efficiency. Grasping this concept helps understand how the authors build stable and efficient embeddings for dynamic updates.

*How the paper uses it:* The recursive data structure hierarchy combines low-stretch spanning trees with other graph structures to maintain approximate solutions efficiently.

▶ [12. Greedy Algorithms: Minimum Spanning Tree](https://www.youtube.com/watch?v=tKwnms5iRBU) — MIT OpenCourseWare · 1:22:10 · 10 years ago

### Interior point methods for combinatorial optimization *(prerequisite)*
Interior point methods form the central algorithmic framework that reduces the min-cost flow problem to a sequence of minimum-ratio cycle problems. A solid understanding of IPMs in convex optimization is necessary to appreciate the novel potential reduction method introduced.

*How the paper uses it:* The authors develop a new potential reduction interior point method to solve min-cost flow via approximate minimum-ratio cycle computations.

▶ [Optimization: Interior Point Methods Part 1](https://www.youtube.com/watch?v=SNqLy6vyVe4) — Simons Institute for the Theory of Computing · 1:15:38

### Minimum ratio cycle problem lecture *(prerequisite)*
The minimum ratio cycle problem is the core subproblem to which the min-cost flow problem is reduced in the paper's algorithm. Understanding this problem and its algorithmic treatment is critical to grasping the overall approach.

*How the paper uses it:* The IPM reduces min-cost flow to solving a sequence of approximate undirected minimum-ratio cycle problems.

▶ [Rasmus Kyng - Tutorial (Part 2): Continuous Methods in ...](https://www.youtube.com/watch?v=ISsMYFt7z7k) — DIMACS CCICADA · 1:26:51

### Authors' talk on almost-linear time flow *(the paper's own talk)*
The authors' own talks provide the most direct and detailed exposition of their new algorithm, including the novel IPM, dynamic data structures, and applications. These talks are invaluable for understanding the paper's contributions and technical innovations.

*How the paper uses it:* These talks present the new almost-linear time algorithms for maximum flow and minimum-cost flow developed in the paper.

▶ [Sushant Sachdeva @ Princeton Theory Lunch](https://www.youtube.com/watch?v=9fVAFQdW2ys) — Princeton TCS · 1:04:51
