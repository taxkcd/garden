---
title: "001 · Approximately Counting Triangles in Sublinear Time — C. Seshadhri"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sesh"
source_hash: "ebc2899b2cddac017e99fab72452a415775786d1ca528aa809bf043980fb2ecf"
sequence: 1
generator: "outreach-garden: managed"
---

# 001 · Approximately Counting Triangles in Sublinear Time

## At a glance

- **Professor:** C. Seshadhri
- **Institution:** Univ. of California - Santa Cruz
- **Paper:** [Approximately Counting Triangles in Sublinear Time](https://arxiv.org/pdf/1504.00954)
- **Authors:** Talya Eden, Amit Levi, Dana Ron, C. Seshadhri
- **Year:** 2015

## Paper overview

This paper presents a novel algorithm that estimates the number of triangles in a large graph without reading the entire graph. It uses a sublinear-time approach with query access to the graph, allowing efficient approximation even for massive graphs.

### Why it matters

**Research problem:** Estimating the number of triangles in a graph efficiently, specifically designing sublinear-time algorithms that do not require reading the entire graph but can still provide accurate approximations.

**Why it matters:** Triangle counting is fundamental in graph analysis with applications in bioinformatics, social networks, community detection, and graph modeling. Existing methods require reading the entire graph, which is impractical for very large graphs.

**Key contributions:**

- A sublinear-time algorithm for approximating the number of triangles with query access to the graph.
- A novel weighting scheme for triangles based on the number of light endpoints to reduce variance.
- An efficient procedure to classify vertices as heavy or light to improve estimation accuracy.
- Proof of optimality of the query complexity up to polylogarithmic factors.
- A comprehensive lower bound showing that any multiplicative-approximation algorithm requires at least Ω(t^{1/3} + min{m, t}) queries.

## About the professor

**C. Seshadhri** — Professor, Baskin School of Engineering, Engineering, Univ. of California - Santa Cruz.

Research interests: theoretical study of algorithms, especially those with a mix of graphs and randomization, sublinear algorithms, graph algorithms, graph modeling, scalable computation, and data mining

### Research links

- [Faculty/profile page](https://users.soe.ucsc.edu/~sesh)
- [Resolved homepage](https://users.soe.ucsc.edu/~sesh/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=aifUIrsAAAAJ)
- [DBLP](https://dblp.org/pid/60/4210.html)

## Learning path

To understand the paper 'Approximately Counting Triangles in Sublinear Time,' start with foundational graph theory concepts and the problem of triangle counting in graphs. Then, learn about sublinear time algorithms and graph query models to grasp the algorithmic framework. Next, study randomized sampling and variance reduction techniques which are key to the paper's estimation approach. Finally, focus on the core concept of sublinear-time triangle counting algorithms to directly connect with the paper's novel contributions.

## Recommended videos (in order)

### Graph Theory Basics *(prerequisite)*
This section covers fundamental graph concepts such as vertices, edges, and graph traversal techniques like BFS and DFS. Understanding these basics is essential for grasping how graphs are structured and navigated, which underpins the triangle counting problem.

*How the paper uses it:* The paper deals with counting triangles in graphs, so a solid understanding of graph basics is necessary.

▶ [Algorithms Course - Graph Theory Tutorial from a Google Engineer](https://www.youtube.com/watch?v=09_LlHjoEiY) — freeCodeCamp.org · 6 years ago

### Triangle Counting in Graphs *(prerequisite)*
This section introduces the problem of counting triangles within graphs, explaining why it is important and how it relates to graph analysis tasks. It provides context on the significance of triangles and the challenges in counting them efficiently.

*How the paper uses it:* The paper focuses on approximating the number of triangles in large graphs, making this concept directly relevant.

▶ [Number of Triangles in an Undirected Graph | GeeksForGeeks](https://www.youtube.com/watch?v=ChdNz1Ui1uc) — GeeksforGeeks · 8:44 · 10 years ago

### Sublinear Time Algorithms *(prerequisite)*
Learn about algorithms that run faster than reading the entire input, using techniques like sampling and sketching. This knowledge is crucial to understanding how the paper achieves efficient triangle counting without full graph traversal.

*How the paper uses it:* The paper designs a sublinear-time algorithm to approximate triangle counts, so understanding sublinear algorithms is key.

▶ [Sketching, Sampling and Sublinear Time Algorithms](https://www.youtube.com/watch?v=bUhE7rwtH5k) — Simons Institute for the Theory of Computing · 29:36 · Streamed 5 years ago

### Graph Query Models *(prerequisite)*
This section explains the types of queries used to access graph data efficiently, such as degree queries, neighbor queries, and vertex-pair queries. These queries form the basis of the paper's algorithmic access to the graph.

*How the paper uses it:* The paper's algorithm relies on degree, neighbor, and vertex-pair queries to approximate triangle counts.

▶ [Degree of a vertex in Graph | Graph Theory #6](https://www.youtube.com/watch?v=aXaVIxvweHA) — Vivekanand Khyade - Algorithm Every Day · 6:39 · 8 years ago

### Randomized Sampling and Variance Reduction *(prerequisite)*
Explore techniques for approximating counts accurately with fewer samples by reducing variance, including importance sampling and other variance reduction methods. These are essential for the paper's weighted sampling approach to triangle counting.

*How the paper uses it:* The paper uses a novel weighting scheme and sampling techniques to reduce variance in triangle count estimation.

▶ [Monte Carlo Methods: Methods of Variance Reduction](https://www.youtube.com/watch?v=Q9dAaw_bJ-o) — Brittany Schwan · 7 years ago

### Sublinear-Time Triangle Counting Algorithms
Focus on algorithms specifically designed to approximate triangle counts using sublinear queries and vertex classification. This section directly relates to the paper's core contributions and methods.

*How the paper uses it:* This is the core concept of the paper, detailing the novel sublinear-time algorithm and its theoretical guarantees.

▶ [An Optimal Algorithm for Triangle Counting](https://www.youtube.com/watch?v=VjRjhl8Gg5M) — APPROX RANDOM 2021 · 15:29 · 4 years ago
