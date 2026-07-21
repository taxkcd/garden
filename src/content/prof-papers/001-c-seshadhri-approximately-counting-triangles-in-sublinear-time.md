---
title: "001 · Approximately Counting Triangles in Sublinear Time — C. Seshadhri"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sesh"
source_hash: "ec5d7ca7d54db9f126d2fb2233730ac3bf252ee68af73fb2c0c7675da00fad90"
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

To deeply understand the paper "Approximately Counting Triangles in Sublinear Time," start by building foundational knowledge on sublinear-time graph algorithms and randomized algorithms for graph property testing, as these form the theoretical basis for the paper's approach. Next, gain context on classical and advanced triangle counting methods to appreciate the novelty of the authors' contributions. Finally, focus on the authors' own talk presenting their algorithm, which provides the most direct and detailed explanation of their techniques and results.

## Recommended videos (in order)

### Sublinear-time graph algorithms seminar *(prerequisite)*
This section covers the general framework and techniques behind sublinear-time algorithms for graph problems, which is essential to understand the algorithmic model and complexity measures used in the paper. It introduces query models and sampling methods that underpin the paper's approach to triangle counting without reading the entire graph.

*How the paper uses it:* The paper designs a sublinear-time algorithm for triangle counting, so understanding sublinear graph algorithms is foundational.

▶ [Counting Subgraphs in Sublinear Time](https://www.youtube.com/watch?v=4p2cq6Vy_9g) — Simons Institute for the Theory of Computing · 1:01:38 · Streamed 2 years ago

### Randomized algorithms for graph property testing lecture *(prerequisite)*
This section provides insights into randomized sampling and query-based property testing methods for graphs, which are crucial for the paper's use of degree, neighbor, and vertex-pair queries to approximate triangle counts. It also covers variance reduction and probabilistic guarantees common in such algorithms.

*How the paper uses it:* The paper uses randomized query models and sampling techniques common in graph property testing to approximate triangle counts efficiently.

▶ [Property Testing for Graphs](https://www.youtube.com/watch?v=JzYGN28dv_Q) — Simons Institute for the Theory of Computing · 1:22:35 · Streamed 2 years ago

### Triangle counting and enumeration algorithms conference talk *(prerequisite)*
This section surveys classical and advanced triangle counting and enumeration algorithms, providing background on the problem's computational challenges and existing approaches. It contextualizes the paper's contribution by highlighting why sublinear-time approximation is significant compared to prior methods.

*How the paper uses it:* Understanding classical triangle counting methods helps appreciate the novelty and efficiency of the paper's sublinear-time algorithm.

▶ [3SUM Hardness of Triangle Enumeration Problems, and their Consequences](https://www.youtube.com/watch?v=glPfU0Qn4mM) — Simons Institute for the Theory of Computing · 38:08 · 10 years ago

### Authors' talk on sublinear triangle counting *(the paper's own talk)*
This section features the authors' own presentation of their sublinear-time triangle counting algorithm, offering the most precise and detailed explanation of their methodology, theoretical guarantees, and innovations such as vertex classification and weighted sampling. It is the core resource for understanding the paper's contributions directly from the researchers.

*How the paper uses it:* This is the authors' own talk on the paper's topic, providing direct insights into their algorithm and results.

▶ [On counting subgraphs and why counting seeds makes more sense (if one thinks about it clearly)](https://www.youtube.com/watch?v=1QeROlBFyTM) — Simons Institute for the Theory of Computing · 41:11 · Streamed 1 year ago

## Already in your library

- [An Optimal Algorithm for Triangle Counting](https://www.youtube.com/watch?v=VjRjhl8Gg5M) — also for: Approximately Counting Triangles in Sublinear Time (C. Seshadhri)
- [Counting and Sampling Subgraphs in Sublinear Time](https://www.youtube.com/watch?v=nbB_0ED6tX8) — also for: Approximately Counting Triangles in Sublinear Time (C. Seshadhri)
- [Sketching, Sampling and Sublinear Time Algorithms](https://www.youtube.com/watch?v=bUhE7rwtH5k) — also for: Approximately Counting Triangles in Sublinear Time (C. Seshadhri)
