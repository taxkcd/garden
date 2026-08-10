---
title: "079 · Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time — Thatchaphol Saranurak"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thatchaphol-saranurak"
source_hash: "3e3aadd23c58b18a17877c9c69a412ae1cc6afd27722ae3dcc7b835bb8dfba41"
sequence: 79
generator: "outreach-garden: managed"
---

# 079 · Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time

## At a glance

- **Professor:** Thatchaphol Saranurak
- **Institution:** University of Michigan
- **Paper:** [Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time](https://arxiv.org/pdf/2607.11413)
- **Authors:** Sayan Bhattacharya, Ermiya Farokhnejad, Thatchaphol Saranurak, Haoze Wang
- **Year:** 2026

## Paper overview

This paper presents the first near-linear-time algorithm that constructs a spanning tree in a graph with maximum degree close to the optimal minimum degree spanning tree (MDST). It improves on decades-old results by achieving strong approximation guarantees efficiently, resolving a long-standing open problem in graph algorithms.

### Why it matters

**Research problem:** The minimum degree spanning tree problem seeks a spanning tree of a graph minimizing the maximum degree of any node. It is NP-hard, and while approximation guarantees were known since the 1990s, achieving these guarantees in near-linear time remained open for over 30 years.

**Why it matters:** MDST is a fundamental problem in degree-constrained network design with applications in network reliability and optimization. Fast algorithms with strong guarantees enable scalable solutions for large graphs, bridging a gap between theory and practical efficiency.

**Key contributions:**

- First near-linear-time algorithm computing a spanning tree with maximum degree at most ⌈(1 + ε)∆⋆⌉ + 1 in Õ(m/ε²) time.
- Improved additive-one approximation algorithm with runtime Õ(mn^{2/3}), improving previous Õ(mn) and Õ(mn^{3/4}) results.
- A unified framework that strictly improves all prior construction algorithms for MDST.
- Introduction of a refined notion of augmenting chains independent of forest decomposition, overcoming barriers in previous works.
- A detailed potential-based analysis proving geometric expansion of stable t-chains to guarantee progress.

## About the professor

**Thatchaphol Saranurak** — Assistant Professor, Computer Science and Engineering Division, University of Michigan.

Research interests: Fast graph algorithms in different models of computation; Robust algorithms against an adaptive adversary; Continuous optimization for combinatorial problems

### Research links

- [Faculty/profile page](https://sites.google.com/site/thsaranurak)
- [Social profile](https://bsky.app/profile/eigx.bsky.social)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Advanced Graph Algorithms
**The paper assumes:** graph theory, combinatorial optimization, approximation algorithms, and advanced algorithm design techniques
**Already in this field?** Skip this entirely if you have completed a rigorous undergraduate or graduate course covering graph algorithms beyond basics, including approximation and dynamic graph techniques.

To deeply understand the advanced graph algorithmic techniques used in the paper on Minimum Degree Spanning Tree approximations, a rigorous background in graph algorithms and combinatorial optimization is essential. The two options below provide complementary learning paths: the rigorous course offers a comprehensive, structured foundation in graph algorithms, while the fast track gives a concise, focused overview of key algorithmic concepts relevant to the paper, saving time without sacrificing core understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Graph Algorithms](https://www.youtube.com/playlist?list=PLgMDNELGJ1CajIGnWor0zilGWhxAfunZx) — NPTEL - Indian Institute of Science, Bengaluru · 38 videos

**Watch only this:** Lectures 23 to 27 (Kruskal's Algorithm, parts 1-3), Lecture 29 (DFS), Lecture 30 (Algorithm for Cut Vertex), and Lectures 33 to 37 (Strongly Connected Components parts 1-4, BFS), about 4.5 hours total — these cover MST construction, DFS-based graph decompositions, and connectivity concepts critical for the paper's approach.

*Why it unblocks this paper:* This NPTEL course by the Indian Institute of Science, Bengaluru, covers fundamental and advanced graph algorithms including DFS, BFS, MST algorithms (Kruskal's and Prim's), and strongly connected components, which are foundational to understanding augmenting chains, forest decompositions, and dynamic graph algorithms used in the paper.

*If you want all of it:* 19.1 hours across all 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Analysis of Algorithms](https://www.youtube.com/playlist?list=PLgPbN3w-ia_MzatWGASfuPg9hon_Fsz1V) — Professor Bryce · 25 videos · 10.7h across 25 episodes

**Watch only this:** Episodes 5 (Graph Traversal), 10 (Minimum Spanning Trees), 8 and 9 (Greedy Stays Ahead and Greedy Exchange Arguments), about 1.75 hours total — these episodes focus on MSTs and greedy algorithm principles that underpin the paper's augmenting chain method.

*Why it unblocks this paper:* This concise series by Professor Bryce offers clear, intuition-driven explanations of core algorithmic concepts including graph traversal, MSTs, greedy algorithms, and complexity analysis, providing a quick yet solid grounding in the algorithmic techniques relevant to the paper's framework.

*If you want all of it:* 10.7 hours across 25 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on near-linear time approximation algorithms for the minimum degree spanning tree problem, start by grounding yourself in prerequisite topics such as degree-constrained network design problems, classical minimum cost spanning tree algorithms, dynamic graph algorithms with level-based search, and potential function methods in combinatorial optimization. These foundational areas provide the necessary background on graph theory, algorithmic techniques, and analysis tools. Finally, focus on the paper's core concept by reviewing the authors' own talk or related advanced presentations on minimum degree spanning tree algorithms to grasp the novel augmenting chain framework and its algorithmic innovations.

### Degree-constrained network design problems *(prerequisite)*
This section introduces the broader context of network design problems with degree constraints, which is the fundamental setting for the minimum degree spanning tree problem. Understanding these problems helps appreciate the practical motivations and theoretical challenges addressed by the paper.

*How the paper uses it:* The paper addresses the MDST problem, a key degree-constrained network design problem with applications in network reliability and optimization.

▶ [CS310 Algorithms – Lesson 22 | Introduction to Network Flows: Concepts, Constraints, and Algorithms](https://www.youtube.com/watch?v=kClfNjudijw) — LUMSx · 3 months ago

### Minimum degree spanning tree algorithms *(prerequisite)*
This section covers classical and approximation algorithms for minimum cost and minimum degree spanning trees, providing essential background on prior approaches and their limitations. This foundation is critical to understand how the paper improves on decades-old results.

*How the paper uses it:* The paper improves on prior MDST algorithms by achieving near-linear time with strong approximation guarantees.

▶ [W11_L8: Minimum cost spanning trees | prim's & kruskal's ...](https://www.youtube.com/watch?v=3GwJAstzzBk) — IIT Madras - B.S. Degree Programme · 13:02

### Dynamic graph algorithms and level-based search *(prerequisite)*
Dynamic graph algorithms and level-based search techniques are key to efficiently maintaining and updating data structures during the algorithm's execution. This background is necessary to understand the paper's dynamic find-chain subroutine that controls runtime.

*How the paper uses it:* The paper's find-chain subroutine uses dynamic, level-based search to efficiently find augmenting chains while maintaining near-linear runtime.

▶ [Developments in Dynamic Graph Algorithms](https://www.youtube.com/watch?v=oZGSdfyU_YU) — Microsoft Research · 9 years ago

### Potential function method in combinatorial optimization *(prerequisite)*
Potential function methods provide a powerful analytical tool to prove algorithmic progress and runtime bounds. Familiarity with these techniques is important to follow the paper's potential-based analysis of stable t-chains and geometric expansion.

*How the paper uses it:* The paper uses a potential function argument to prove geometric expansion of stable t-chains, guaranteeing progress and runtime bounds.

▶ [Potential function | Numerical | Determining Potential function of Conservative Vector Field | Maths](https://www.youtube.com/watch?v=zA_YorE6H8w) — Gautam Varde · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the key ideas behind the paper on near-linear time approximation algorithms for the minimum degree spanning tree problem, start by building a foundation in basic spanning tree concepts and classical algorithms. Then, learn about degree-constrained network design problems to see the broader context. Next, grasp dynamic graph algorithms and level-based search techniques that enable efficient runtime. Finally, explore the paper's core novel concept of augmenting chains, which is central to their algorithmic framework.

### Minimum degree spanning tree algorithms *(prerequisite)*
Begin with understanding what spanning trees are and how classical algorithms like Prim's and Kruskal's construct minimum cost spanning trees. This foundation helps grasp the challenges in minimizing the maximum degree in spanning trees, which is the focus of the paper.

*How the paper uses it:* The paper improves on classical spanning tree algorithms by focusing on minimizing the maximum node degree with strong approximation guarantees.

▶ [W11_L8: Minimum cost spanning trees | prim's & kruskal's ...](https://www.youtube.com/watch?v=3GwJAstzzBk) — IIT Madras - B.S. Degree Programme · 13:02

### Degree-constrained network design problems *(prerequisite)*
Learn about network design problems where constraints on node degrees are critical, such as ensuring reliability or limiting load. This context explains why minimizing the maximum degree in spanning trees is important in practical applications.

*How the paper uses it:* The minimum degree spanning tree problem is a fundamental degree-constrained network design problem motivating the paper's research.

▶ [CS310 Algorithms – Lesson 22 | Introduction to Network Flows: Concepts, Constraints, and Algorithms](https://www.youtube.com/watch?v=kClfNjudijw) — LUMSx · 3 months ago

### Dynamic graph algorithms and level-based search *(prerequisite)*
Understand dynamic graph algorithms and graph traversal techniques like BFS and DFS, which are essential for efficiently updating and searching graphs. Level-based search methods help control runtime in dynamic settings.

*How the paper uses it:* The paper's find-chain subroutine uses dynamic, level-based search to efficiently find augmenting chains while maintaining near-linear runtime.

▶ [L-4.15: BFS & DFS | Breadth First Search | Depth First Search | Graph Traversing | DAA](https://www.youtube.com/watch?v=N2P7w22tN9c) — Gate Smashers · 11:16 · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's core contributions and techniques. The beginner project focuses on implementing and visualizing the augmenting chains concept on small graphs, the intermediate project reimplements the paper's near-linear-time MDST algorithm on public graph data and compares it to a simple baseline, and the advanced project extends the framework to a related degree-constrained network design problem, addressing one of the paper's future directions.

### Beginner — Visualizing Augmenting Chains on Small Graphs
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that demonstrates the concept of augmenting chains on small undirected graphs. The tool allows users to input or generate a small graph, run a simplified version of the augmenting chain search, and see how these chains help reduce the number of forest components in a spanning forest.

**Why it shows you understood the paper:** This project shows you grasp the key novel concept of augmenting chains and their role in the algorithm's progress, which is central to the paper's approach.

**Grounded in:** Augmenting chains are a key novel concept enabling the algorithm's efficiency (Definitions 4.3 and 5.1, Lemma 4.4).

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic small undirected graphs generated within the tool or user-provided examples.

**Build it:**

1. Implement a graph data structure supporting undirected edges and forest components.
2. Implement a simplified augmenting chain finder that identifies short chains connecting forest components.
3. Build a React+D3.js UI to visualize the graph, forest components, and highlight augmenting chains.
4. Allow users to add/remove edges and run the augmenting chain procedure step-by-step.
5. Display metrics such as number of components before and after applying chains.

**Ships as:** An interactive web app repository with a README explaining augmenting chains and how the visualization illustrates their effect on spanning forests.

**Stretch goal:** Add animation of the dynamic level-based search (find-chain) process to show runtime control.

### Intermediate — Near-Linear-Time Approximate MDST Algorithm Implementation
*Effort: 2 weekends, ~20 hours*

You implement the paper's core near-linear-time algorithm for computing a minimum degree spanning tree with (1 + ε, 1)-approximation on publicly available undirected graphs (e.g., SNAP datasets). You compare your implementation's maximum degree and runtime against a simple baseline like a standard MST algorithm (e.g., Kruskal's).

**Why it shows you understood the paper:** Reimplementing the main algorithm from the paper and evaluating it on real graphs demonstrates deep comprehension of the algorithmic framework, augmenting chains, and the dynamic find-chain subroutine.

**Grounded in:** Theorem 1.1: Deterministic algorithm computing a spanning tree with max degree ≤ ⌈(1 + ε)∆⋆⌉ + 1 in near-linear time Õ(m/ε²).

**Tech stack:** C++, Python 3.11, NetworkX (for graph I/O and baseline MST)

**Data:** Publicly available undirected graph datasets from SNAP (Stanford Large Network Dataset Collection) as a substitute for the paper's input graphs.

**Build it:**

1. Implement graph input/output using NetworkX in Python or C++ graph libraries.
2. Implement the augmenting chain framework and the dynamic find-chain subroutine as described in the paper.
3. Implement the main iterative algorithm to reduce forest components and build the spanning tree.
4. Implement a baseline MST algorithm (e.g., Kruskal's) for comparison.
5. Run experiments on SNAP graphs, measuring maximum degree of spanning tree and runtime.
6. Write a report comparing your results to the baseline and discussing approximation quality.

**Ships as:** A GitHub repo with code, scripts to run experiments on public graphs, and a detailed README reporting results and explaining the implementation.

**Stretch goal:** Add a visualization module to show augmenting chains found during execution on sample graphs.

### Advanced — Extending Augmenting Chains to Bounded-Degree Steiner Trees
*Effort: 3+ weeks*

You extend the paper's augmenting chain framework to the bounded-degree Steiner tree problem, a related degree-constrained network design problem mentioned as a future direction. You adapt the algorithm to handle Steiner nodes and terminals, implement the modified algorithm, and evaluate it on synthetic or small real-world graphs.

**Why it shows you understood the paper:** This project demonstrates your ability to transfer and extend the paper's novel framework to a new problem domain, addressing one of the paper's stated future directions and showing research-level initiative.

**Grounded in:** Future direction: Extending the framework to other degree-constrained network design problems such as bounded-degree Steiner trees.

**Tech stack:** C++, Python 3.11, NetworkX

**Data:** Synthetic graphs with designated terminal and Steiner nodes generated programmatically, as no public benchmark for bounded-degree Steiner trees is specified.

**Build it:**

1. Study the bounded-degree Steiner tree problem formulation and constraints.
2. Adapt the augmenting chain definitions and find-chain subroutine to handle Steiner nodes and terminal constraints.
3. Implement the extended algorithm incorporating these adaptations.
4. Generate synthetic graphs with terminal and Steiner nodes for testing.
5. Evaluate the algorithm's performance and maximum degree guarantees compared to a baseline Steiner tree heuristic.
6. Document the approach, challenges, and results in a comprehensive README.

**Ships as:** A repository with the extended algorithm implementation, test scripts on synthetic data, and a detailed report discussing the extension and empirical findings.

**Stretch goal:** Explore parallel or distributed implementations of the extended algorithm for scalability.
