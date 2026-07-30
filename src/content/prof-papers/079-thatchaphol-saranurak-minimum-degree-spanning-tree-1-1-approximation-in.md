---
title: "079 · Minimum Degree Spanning Tree: (1 + ε, 1)-Approximation in Near-Linear Time — Thatchaphol Saranurak"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-thatchaphol-saranurak"
source_hash: "4c4d833dfc6de3db4f3fb2177b9ba21cf47e6b27e24bc5aad12c1c369398384a"
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
