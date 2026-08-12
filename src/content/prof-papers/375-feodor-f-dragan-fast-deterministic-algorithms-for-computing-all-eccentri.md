---
title: "375 · Fast deterministic algorithms for computing all eccentricities in (hyperbolic) Helly graphs — Feodor F. Dragan"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-feodor-f-dragan"
source_hash: "900a956699b03b4c978d25630fd002c88a7e97ca00ef8c226b7ab868266df3bd"
sequence: 375
generator: "outreach-garden: managed"
---

# 375 · Fast deterministic algorithms for computing all eccentricities in (hyperbolic) Helly graphs

## At a glance

- **Professor:** Feodor F. Dragan
- **Institution:** Kent State University
- **Paper:** [Fast deterministic algorithms for computing all eccentricities in (hyperbolic) Helly graphs](https://arxiv.org/abs/2102.08349)
- **Authors:** Feodor F. Dragan, Guillaume Ducoffe, Heather M. Guarnera
- **Year:** 2021

## Paper overview

This paper presents new deterministic algorithms for efficiently computing the radius, diameter, and all vertex eccentricities in Helly graphs, a class of graphs important in metric graph theory. The authors improve previous randomized algorithms by providing deterministic methods with better or comparable time complexity, including parameterized algorithms based on the graph's hyperbolicity.

### Why it matters

**Research problem:** Computing fundamental distance measures in graphs—specifically, the radius, diameter, and eccentricities of vertices—is computationally expensive in general graphs, with no truly subquadratic algorithms known under standard complexity assumptions. The problem is to find efficient algorithms for these computations in Helly graphs and their hyperbolic variants.

**Why it matters:** Radius, diameter, and eccentricities are critical for network analysis, facility location problems, and understanding the structure of various real-world networks such as social, biological, communication, and transportation networks. Efficient algorithms enable practical analysis of large networks.

**Key contributions:**

- A deterministic O(mn)-time algorithm computing radius, diameter, and all vertex eccentricities in Helly graphs.
- A parameterized linear-time algorithm for eccentricity computations in δ-hyperbolic Helly graphs with running time O(δ² m log δ), improving to O(δ² m) if δ or its approximation is known.
- New structural characterizations of Helly graphs linking hyperbolicity, pseudoconvexity, and the diameter of the center.
- Proof that the hyperbolicity of an n-vertex Helly graph is at most √n + 1, providing sublinear bounds.
- Extension of linear-time eccentricity computation results to C4-free Helly graphs and dually chordal graphs.

## About the professor

**Feodor F. Dragan** — Professor, Computer Science, Kent State University.

Research interests: design and analysis of network algorithms, algorithmic graph and hypergraph theory, computational geometry, computational biology, VLSI CAD, combinatorial optimization, discrete convexity and geometry of discrete metric spaces, distance location problems and operations research, data analysis

### Research links

- [Faculty/profile page](https://www.kent.edu/cs/feodor-f-dragan)
- [Professor website](http://www.cs.kent.edu/~dragan/)
- [Resolved homepage](https://www.cs.kent.edu/~dragan)
- [Google Scholar](http://scholar.google.com/citations?user=U74_kMcAAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Feodor_Dragan)
- [DBLP](https://dblp.org/pid/d/FFDragan.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algorithmic graph theory
**The paper assumes:** graph theory, graph algorithms, metric graph theory, complexity of graph problems
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of graph theory and graph algorithms, including metric properties of graphs.

To understand the algorithms and structural properties in the paper on eccentricity computations in Helly graphs, a solid grasp of algorithmic graph theory is essential. The rigorous course option offers a comprehensive university-level lecture series covering fundamental graph algorithms and concepts in depth. The fast track provides a concise, intuition-driven playlist focused on core graph theory concepts including eccentricity, radius, and diameter, suitable for a quicker but still substantive background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Graph Algorithms](https://www.youtube.com/playlist?list=PLgMDNELGJ1CajIGnWor0zilGWhxAfunZx) — NPTEL - Indian Institute of Science, Bengaluru · 38 videos · 19.1h across 38 episodes

**Watch only this:** Lectures 14 to 22 (Bellman Ford P1 to All Pair Shortest Path 5), about 4.5 hours — these cover shortest path algorithms and graph connectivity essential for eccentricity and diameter computations.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, covers a broad range of graph algorithms including shortest paths, connectivity, and fundamental graph properties, which are directly relevant to understanding the algorithmic and structural aspects of Helly graphs and eccentricity computations in the paper.

*If you want all of it:* About 19.1 hours across 38 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [GraphTheory](https://www.youtube.com/playlist?list=PLwUPJR89c2uDiVA-iATsge2IupVQux-kx) — Domantas09 · 11 videos · 2.5h across 11 episodes

**Watch only this:** Watch the episode 'Graph Theory: 51. Eccentricity, Radius & Diameter', about 13 minutes — this single video covers the key graph metric concepts needed.

*Why it unblocks this paper:* This concise playlist by Domantas09 includes a focused episode on eccentricity, radius, and diameter, providing clear definitions and intuition on these graph metrics critical to the paper's topic, making it a quick and effective primer.

*If you want all of it:* About 2.5 hours across 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on deterministic algorithms for eccentricity computations in Helly graphs, start by building foundational knowledge on the Helly property in graphs and hyperbolicity in graph metrics, as these are key structural concepts leveraged in the paper. Then, review the core graph distance measures such as eccentricity, radius, and diameter, which the algorithms aim to compute efficiently. Finally, focus on the authors' own talks and advanced seminars on Helly graphs and their metric properties to grasp the novel deterministic and parameterized algorithmic contributions presented in the paper.

### Helly graphs and Helly property *(prerequisite)*
Understanding the Helly property is fundamental because the paper exploits this property of balls in graphs to design efficient algorithms. The Helly property ensures certain intersection patterns that simplify metric computations, making it crucial to grasp before delving into the algorithmic results.

*How the paper uses it:* The paper's algorithms rely on the Helly property of balls in graphs and new structural characterizations of Helly graphs.

▶ [Thomas Haettel: Helly graphs and injective metric spaces I.](https://www.youtube.com/watch?v=4Qsl19iiGh4) — Centre de recherches mathématiques - CRM · 45:57 · 3 years ago

### Graph hyperbolicity and δ-hyperbolic graphs *(prerequisite)*
The hyperbolicity parameter δ measures how tree-like a graph is and is central to the paper's parameterized algorithms. Understanding δ-hyperbolic graphs and their metric properties is essential to appreciate the improvements in running time and structural bounds the authors achieve.

*How the paper uses it:* The paper provides parameterized linear-time algorithms for δ-hyperbolic Helly graphs and bounds on hyperbolicity.

▶ [Eduard Einstein: Relatively Hyperbolic Groups and their ...](https://www.youtube.com/watch?v=_XDbIpSoUls) — UT Groups & Dynamics · 59:14

### Eccentricity, radius, and diameter in graphs *(prerequisite)*
These are core distance measures in graph theory that the paper focuses on computing efficiently. A solid understanding of these concepts is necessary to appreciate the significance of the algorithms and their improvements over previous work.

*How the paper uses it:* The paper presents deterministic algorithms to compute radius, diameter, and all vertex eccentricities in Helly graphs.

▶ [Eccentricity of a Vertex | Graph Theory](https://www.youtube.com/watch?v=SumKq0Jx1L0) — Wrath of Math · 5:44

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on deterministic algorithms for eccentricity computations in Helly graphs, start by learning the fundamental graph distance measures: eccentricity, radius, and diameter. Next, grasp the Helly property and Helly graphs, which are central to the paper's structural insights. Then, build intuition on graph hyperbolicity and δ-hyperbolic graphs, as the paper leverages this parameter for efficient algorithms. Finally, explore the authors' new deterministic algorithmic contributions for these computations in Helly and hyperbolic Helly graphs.

### Eccentricity, radius, and diameter in graphs *(prerequisite)*
These are core distance measures in graph theory: eccentricity of a vertex is the greatest distance to any other vertex; radius is the minimum eccentricity among all vertices; diameter is the maximum eccentricity. Understanding these helps grasp what the paper's algorithms compute efficiently.

*How the paper uses it:* The paper focuses on computing all vertex eccentricities, radius, and diameter efficiently in Helly graphs.

▶ [Eccentricity of a Vertex | Graph Theory](https://www.youtube.com/watch?v=SumKq0Jx1L0) — Wrath of Math · 5:44

### Helly graphs and Helly property *(prerequisite)*
The Helly property states that for a family of sets, if every pairwise intersection is nonempty, then the whole family has a common intersection. Helly graphs are graphs whose balls satisfy this property, which gives them special structural features exploited by the paper's algorithms.

*How the paper uses it:* The paper leverages the Helly property of balls in graphs to design deterministic algorithms for eccentricity computations.

▶ [Helly Property for Hypergraphs (Hypergraph Episode 7)](https://www.youtube.com/watch?v=xIlAgsFbMkw) — Vital Sine · 11:21 · 3 years ago

### Authors talk on Helly graph eccentricities
This section presents talks by experts on Helly graphs and their metric properties, including eccentricity computations. These talks provide deeper insight into the structural and algorithmic aspects discussed in the paper.

*How the paper uses it:* These talks relate directly to the paper's focus on deterministic algorithms for eccentricity computations in Helly graphs.

▶ [Thomas Haettel: Helly graphs and injective metric spaces I.](https://www.youtube.com/watch?v=4Qsl19iiGh4) — Centre de recherches mathématiques - CRM · 45:57 · 3 years ago

## Already in your library

- [Introduction to Hypergraphs [Graph Theory]](https://www.youtube.com/watch?v=UwvZn9lm_98) — also for: Library-Attack: Reverse Engineering Approach for Evaluating Hardware IP Protection (Andrew Lukefahr)
- [L-4.15: BFS & DFS | Breadth First Search | Depth First Search | Graph Traversing | DAA](https://www.youtube.com/watch?v=N2P7w22tN9c) — also for: Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time (Thatchaphol Saranurak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's deterministic algorithms for computing eccentricities in Helly graphs. The beginner project focuses on implementing and visualizing the eccentricity function's unimodality property on small Helly graphs. The intermediate project involves reimplementing the paper's core deterministic O(mn) algorithm for all eccentricities on Helly graphs and comparing it to a naive baseline. The advanced project extends the work by exploring practical hyperbolicity approximation methods to enable the parameterized linear-time algorithm on larger graphs, addressing a key limitation noted in the paper.

### Beginner — Visualizing Eccentricity Unimodality in Small Helly Graphs
*Effort: a weekend, ~8 hours*

You build a small interactive tool that constructs example Helly graphs (e.g., small synthetic graphs known to be Helly) and computes vertex eccentricities by brute force. Then you visualize the eccentricity function over the graph to demonstrate its unimodality property, highlighting central vertices with minimal eccentricity.

**Why it shows you understood the paper:** This project shows you grasp the structural property of the eccentricity function's unimodality in Helly graphs, a key insight the paper uses to design efficient algorithms.

**Grounded in:** The eccentricity function in Helly graphs is unimodal, enabling efficient computation.

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic small Helly graphs generated programmatically; no external dataset needed.

**Build it:**

1. Implement a small graph data structure in JavaScript with adjacency lists.
2. Generate or hardcode small example Helly graphs (e.g., cliques, interval graphs).
3. Compute eccentricities for all vertices by BFS-based distance computations.
4. Visualize the graph with nodes colored by eccentricity values using D3.js.
5. Highlight vertices with locally minimum eccentricity to show unimodality.
6. Write a README explaining the Helly property and eccentricity unimodality.

**Ships as:** An interactive web page with visualizations of eccentricity values on small Helly graphs, demonstrating unimodality and central vertices.

**Stretch goal:** Add user controls to modify the graph and observe changes in eccentricity distribution.

### Intermediate — Deterministic Eccentricity Computation in Helly Graphs
*Effort: 2 weekends, ~20 hours*

You implement the paper's deterministic O(mn) time algorithm to compute radius, diameter, and all vertex eccentricities in Helly graphs. You test it on synthetic Helly graphs and compare runtime and correctness against a naive all-pairs shortest path baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core algorithmic contribution of the paper and validate its correctness and efficiency on Helly graphs.

**Grounded in:** A deterministic O(mn)-time algorithm computing radius, diameter, and all vertex eccentricities in Helly graphs.

**Tech stack:** C++, Python 3.11

**Data:** Synthetic Helly graphs generated programmatically; no external dataset available.

**Build it:**

1. Study the paper's description of the O(mn) deterministic algorithm for Helly graphs.
2. Implement graph data structures and BFS-based distance computations in C++.
3. Implement the eccentricity computation algorithm leveraging the Helly property and unimodality.
4. Implement a naive baseline using all-pairs shortest paths (Floyd-Warshall or repeated BFS).
5. Generate synthetic Helly graphs (e.g., cliques, interval graphs) for testing.
6. Compare runtime and eccentricity outputs between your implementation and baseline.
7. Document the algorithm, results, and runtime comparisons in a README.

**Ships as:** A command-line tool that computes all eccentricities in Helly graphs deterministically, with performance and correctness comparison to a naive baseline.

**Stretch goal:** Extend the implementation to handle δ-hyperbolic Helly graphs and parameterize runtime by δ.

### Advanced — Approximating Hyperbolicity to Enable Parameterized Eccentricity Computation
*Effort: 3+ weeks*

You develop and integrate practical methods to approximate or compute the hyperbolicity δ of Helly graphs efficiently, enabling use of the paper's parameterized linear-time eccentricity algorithms. You evaluate the approach on larger synthetic or real-world graphs with Helly-like properties, analyzing runtime improvements and approximation quality.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing the computational cost of hyperbolicity approximation, enabling practical application of the parameterized algorithms.

**Grounded in:** The parameterized algorithm's efficiency depends on the hyperbolicity δ, which may be large or unknown in some graphs. Developing practical methods to approximate or compute hyperbolicity δ efficiently in large graphs is a future direction.

**Tech stack:** C++, Python 3.11, NetworkX, NumPy

**Data:** Synthetic Helly and δ-hyperbolic graphs generated programmatically; optionally real-world network datasets known to have Helly or similar properties (e.g., social or biological networks) substituted with publicly available graphs.

**Build it:**

1. Research existing hyperbolicity approximation algorithms and their implementations.
2. Implement or adapt a hyperbolicity approximation method suitable for Helly graphs.
3. Integrate hyperbolicity approximation with your eccentricity computation code from the intermediate project.
4. Generate or obtain graphs with Helly or near-Helly properties for evaluation.
5. Measure runtime and accuracy of hyperbolicity approximation and eccentricity computations.
6. Analyze how hyperbolicity parameter δ affects runtime in practice.
7. Document methodology, experiments, and findings in a detailed README.

**Ships as:** A repository with code to approximate hyperbolicity and compute eccentricities parameterized by δ, with experimental evaluation on graphs demonstrating practical runtime improvements.

**Stretch goal:** Explore extending the approach to broader graph classes with Helly-like metric properties as suggested by the paper.
