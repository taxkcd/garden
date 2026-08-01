---
title: "087 · Approximating Directed Connectivity in Almost-Linear Time — Kent Quanrud"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kent-quanrud"
source_hash: "aeebf73cc8028b849d4114a600314345dc6a02755623f2495236058a7505deb7"
sequence: 87
generator: "outreach-garden: managed"
---

# 087 · Approximating Directed Connectivity in Almost-Linear Time

## At a glance

- **Professor:** Kent Quanrud
- **Institution:** Purdue University
- **Paper:** [Approximating Directed Connectivity in Almost-Linear Time](https://arxiv.org/pdf/2512.00176)
- **Authors:** Kent Quanrud
- **Year:** 2025

## Paper overview

This paper presents new randomized algorithms that efficiently approximate the minimum edge and vertex cuts in weighted directed graphs. These algorithms run in almost-linear time, significantly improving the speed of computing connectivity measures in large directed graphs. The key innovation is a divide-and-conquer technique called "shrink-wrapping" combined with graph preconditioning, enabling fast approximation and exact algorithms for small connectivity values.

### Why it matters

**Research problem:** Computing minimum global edge and vertex cuts (connectivity) in weighted directed graphs efficiently, specifically aiming for faster algorithms with almost-linear time complexity for approximations and exact solutions for small connectivity.

**Why it matters:** Edge and vertex connectivity are fundamental graph properties with applications in network reliability, flow optimization, and combinatorial optimization. Existing algorithms for directed graphs are slower compared to undirected cases, limiting scalability to large graphs. Faster algorithms enable practical analysis of large-scale networks.

**Key contributions:**

- First almost-linear time approximation algorithms for minimum global edge and vertex cuts in weighted directed graphs.
- A novel shrink-wrap divide-and-conquer technique for rooted Steiner connectivity problems.
- Graph preconditioning method to ensure well-conditioned cuts and control graph size during recursion.
- Extension of the approach to vertex connectivity using standard auxiliary graphs.
- Exact algorithms for small vertex connectivity with improved logarithmic factors in running time.

## About the professor

**Kent Quanrud** — Assistant Professor, Dept. of Computer Science, Purdue University.

Research interests: the design and analysis of algorithms in theoretical computer science, approximation algorithms, randomized algorithms, combinatorial optimization, continuous optimization, online learning, discrete geometry, highly scalable algorithms for fundamental problems in optimization

### Research links

- [Faculty/profile page](https://www.kentquanrud.com)
- [Resolved homepage](https://www.kentquanrud.com/)
- [DBLP](https://dblp.org/pid/157/8351.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper "Approximating Directed Connectivity in Almost-Linear Time," start with foundational concepts such as randomized algorithms, graph flow algorithms, divide-and-conquer techniques in graph algorithms, and graph preconditioning. These prerequisites build the necessary background on the algorithmic paradigms and mathematical tools used. Finally, focus on the core concept of the paper by watching the authors' own talks, which provide the most precise and direct exposition of the novel shrink-wrap technique and the overall approach.

### Randomized algorithms *(prerequisite)*
The paper's algorithms are randomized and rely on probabilistic guarantees, making an understanding of randomized algorithm techniques essential. The selected lecture from David Karger's course provides a rigorous university-level introduction to randomized algorithms, covering complexity theory and randomization methods relevant to approximation and flow algorithms.

*How the paper uses it:* The paper's randomized algorithms and high-probability guarantees depend on foundational concepts in randomized algorithms.

▶ [6 5220 Lecture 1 Introduction to Randomized Algorithms ...](https://www.youtube.com/watch?v=3ivSUyNu4DA) — David Karger's Lectures · 1:36:06

### Graph flow algorithms *(prerequisite)*
Flow computations are fundamental subroutines used to certify connectivity and cuts in the paper. The MIT OpenCourseWare lecture on Max Flow and Min Cut is a rigorous university-level resource that explains the core max-flow min-cut theorem and algorithms, providing the necessary background for understanding flow-based connectivity certification.

*How the paper uses it:* Flow computations certify connectivity and cuts, which are central to the paper's approach.

▶ [13. Incremental Improvement: Max Flow, Min Cut](https://www.youtube.com/watch?v=VYZGlgzr_As) — MIT OpenCourseWare · 10 years ago

### Divide and conquer in graph algorithms *(prerequisite)*
The shrink-wrap technique introduced in the paper is a novel divide-and-conquer approach critical to reducing problem size and recursion depth. The WilliamFiset video offers a clear and rigorous explanation of the divide-and-conquer paradigm, which is foundational to understanding the paper's algorithmic strategy.

*How the paper uses it:* Shrink-wrap is a divide-and-conquer technique that contracts parts of the graph to reduce problem size.

▶ [Divide and Conquer: The Art of Breaking Down Problems ...](https://www.youtube.com/watch?v=ib4BHvr5-Ao) — WilliamFiset · 11:22

### Graph preconditioning *(prerequisite)*
Preconditioning ensures well-conditioned cuts and controls graph size during recursion in the paper's algorithms. Although no direct lecture on graph preconditioning in connectivity is available, the Simons Institute talk on preconditioning in expectation provides advanced insights into preconditioning techniques in graph-related optimization problems, which is relevant for understanding the paper's graph conditioning approach.

*How the paper uses it:* Graph preconditioning by adding auxiliary arcs ensures well-conditioned cuts and controls the size of contracted graphs.

▶ [Preconditioning in Expectation](https://www.youtube.com/watch?v=u2pgnOYNS3o) — Simons Institute for the Theory of Computing · 31:25

### Paper author talk *(the paper's own talk)*
The authors' own talks provide the most precise and direct exposition of the paper's contributions, including the shrink-wrap technique and graph preconditioning. Kent Quanrud's lectures from the Randomized Algorithms course in Fall 2025 cover connectivity and related algorithmic techniques, making them the best resources to deeply understand the paper.

*How the paper uses it:* Kent Quanrud's lectures present the paper's main ideas and techniques directly from the author.

▶ [Connectivity and electricity](https://www.youtube.com/watch?v=uiJQi4rPKhw) — Kent Quanrud · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on approximating directed connectivity in almost-linear time, start by building foundational knowledge of randomized algorithms and graph flow algorithms, as these underpin the paper's methods. Next, learn about divide-and-conquer strategies in graph algorithms to grasp the novel shrink-wrap technique. Finally, study graph preconditioning to understand how the paper controls graph size and cut quality during recursion.

### Randomized algorithms *(prerequisite)*
Randomized algorithms use random choices to simplify or speed up computations, often providing high-probability guarantees rather than deterministic results. Understanding their basic principles and how randomness can help in algorithm design is essential for grasping the paper's approach.

*How the paper uses it:* The paper's algorithms are randomized and rely on probabilistic guarantees to achieve almost-linear time complexity.

▶ [Lecture 1: Introduction to Randomized Algorithms](https://www.youtube.com/watch?v=rfAHeilGWoE) — NPTEL IIT Guwahati · 44:09

### Graph flow algorithms *(prerequisite)*
Graph flow algorithms compute the maximum flow or minimum cut between nodes in a network, which is fundamental for certifying connectivity and cuts. Learning the max-flow min-cut theorem and basic flow algorithms like Ford-Fulkerson builds intuition for how connectivity is measured and approximated.

*How the paper uses it:* Flow computations are fundamental subroutines used to certify connectivity and cuts in the paper's algorithms.

▶ [Network Flows: Max-Flow Min-Cut Theorem (& Ford-Fulkerson Algorithm)](https://www.youtube.com/watch?v=oHy3ddI9X3o) — Back To Back SWE · 6 years ago

### Divide and conquer in graph algorithms *(prerequisite)*
Divide and conquer breaks a complex problem into smaller subproblems, solves them independently, and combines the results. This strategy is key to the paper's shrink-wrap technique, which contracts parts of the graph to reduce problem size recursively.

*How the paper uses it:* The shrink-wrap technique is a novel divide-and-conquer approach critical to the paper's method for approximating connectivity.

▶ [Divide and Conquer: The Art of Breaking Down Problems ...](https://www.youtube.com/watch?v=ib4BHvr5-Ao) — WilliamFiset · 11:22
