---
title: "187 · Paths and Intersections: Recognizing Outerplanar Metrics — Zihan Tan"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zihan-tan"
source_hash: "fd8c71c2510ceeef615b34bd35867e1f2239121397317eb5fe7077da65db41df"
sequence: 187
generator: "outreach-garden: managed"
---

# 187 · Paths and Intersections: Recognizing Outerplanar Metrics

## At a glance

- **Professor:** Zihan Tan
- **Institution:** University of Minnesota
- **Paper:** [Paths and Intersections: Recognizing Outerplanar Metrics](https://arxiv.org/pdf/2606.25827)
- **Authors:** Yu Chen, Zihan Tan
- **Year:** 2026

## Paper overview

This paper studies the problem of determining whether a given distance metric on a set of terminals can be exactly represented as shortest-path distances in an outerplanar graph containing those terminals. The authors show that unlike trees or Okamura-Seymour instances, outerplanar metrics cannot be characterized by a simple local condition on small subsets of terminals. Despite this, they develop a polynomial-time algorithm to decide realizability and construct such a graph if it exists. Their approach uses a novel perspective of analyzing graphs as collections of paths and their intersections.

### Why it matters

**Research problem:** Given a metric D on a set T of terminals, decide whether there exists an edge-weighted outerplanar graph G containing T such that the shortest-path distances in G between terminals match D exactly.

**Why it matters:** Distance realization problems are fundamental in metric graph theory and have applications in computational biology, chemistry, hierarchical classification, and network tomography. Outerplanar graphs generalize trees and cactus graphs and are a natural next step in understanding realizability beyond previously studied families.

**Key contributions:**

- Proof that outerplanar metrics do not admit an O(1)-point local characterization.
- Development of a polynomial-time (O(k^5)) algorithm to decide outerplanar realizability and construct a realizing graph.
- Introduction and proof of the 'repelling paths condition' as a necessary and sufficient condition for edge-weight feasibility.
- Novel use of path intersection analysis and flow LP duality to characterize realizability.
- Dynamic programming approach to construct canonical outerplanar graphs with shortest path structures.

## About the professor

**Zihan Tan** — Assistant professor, Department of Computer Science & Engineering, University of Minnesota.

Research interests: theoretical computer science, with a focus on graph algorithms

### Research links

- [Faculty/profile page](https://cse.umn.edu/cs/zihan-tan)
- [Professor website](https://sites.google.com/view/zihantan)
- [Google Scholar](https://scholar.google.com/citations?user=1Z0cFgMAAAAJ&hl=zh-CN)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Paths and Intersections: Recognizing Outerplanar Metrics," start by building foundational knowledge on outerplanar graphs and shortest path structures in graphs, as these are crucial to grasp the graph class and the metric realization problem. Then, study metric graph realization algorithms to understand the broader context of the problem. Finally, focus on the paper's core novel concept of path intersection and the repelling paths condition, and conclude with the authors' own talk or related advanced presentations to get direct insights into their methods and results.

### Outerplanar graphs structural theory *(prerequisite)*
Outerplanar graphs form the graph class central to the paper. Understanding their structural properties, characterizations, and how they differ from planar graphs is essential to appreciate the realizability problem addressed. The selected video provides a focused academic lecture on outerplanar graphs, suitable for advanced learners.

*How the paper uses it:* The paper studies metrics realizable by outerplanar graphs, so foundational knowledge of outerplanar graph properties is necessary.

▶ [Outerplanar Graphs.](https://www.youtube.com/watch?v=14nUmQAmSps) — Joyentanuj Das · 2 years ago

### Shortest path structures in graphs *(prerequisite)*
The paper's approach hinges on analyzing shortest path structures and their intersections within graphs. A rigorous understanding of shortest path algorithms and their properties is crucial to follow the algorithmic and theoretical contributions. The chosen video is a university-level lecture covering shortest path algorithms in depth.

*How the paper uses it:* The algorithm constructs shortest path structures satisfying the repelling paths condition to realize the metric.

▶ [Graph Algorithms III: Shortest Path - Lecture 8](https://www.youtube.com/watch?v=DiedsPsMKXc) — Coderisland · 1:32:53

### Metric graph realization algorithms *(prerequisite)*
Understanding the general problem of realizing metrics by graphs provides the broader context for the paper's specific focus on outerplanar metrics. This lecture series from a reputable university covers advanced graph algorithms relevant to metric realization problems.

*How the paper uses it:* The paper develops a polynomial-time algorithm for deciding outerplanar realizability, a specialized metric graph realization problem.

▶ [Lecture 4 Advanced Graph Algorithms](https://www.youtube.com/watch?v=fE8GIyc_TS4) — Nishad-Kothari-IIT-Madras · 54:35 · 5 years ago

### Path intersection and repelling paths condition
This concept is the paper's central novel contribution, characterizing edge weight feasibility and realizability via path intersections and the repelling paths condition. Although no direct recorded talk by the authors on this exact concept is available, the selected lecture on intersection layouts provides a rigorous treatment of path and intersection concepts in graphs, which underpins the paper's approach.

*How the paper uses it:* The repelling paths condition is introduced and proved necessary and sufficient for edge weight feasibility in the paper.

▶ [Lecture 49: Intersection Layouts - 7](https://www.youtube.com/watch?v=CgGj6OkvXiM) — IIT Roorkee July 2018 · 32:26 · 4 years ago

### Authors talk on outerplanar metrics *(the paper's own talk)*
The authors' own presentation of their main results and methods is the most direct and authoritative source for understanding the paper. Unfortunately, no direct talk by the paper authors on this exact work was found. The closest relevant advanced talk on planar metrics by a researcher in the field is included to provide insight into related metric realization problems.

*How the paper uses it:* Direct source for the authors' presentation of their main results and methods would be ideal; this is the closest available advanced talk.

▶ [Hsien-Chih Chang - Covering Planar Metrics (and Beyond): O(1) Trees Suffice](https://www.youtube.com/watch?v=6EnxGdT2MAU) — DIMACS CCICADA · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on recognizing outerplanar metrics, start by building foundational knowledge of outerplanar graphs and shortest path structures, which are central to the paper's graph class and approach. Then, learn about metric graph realization algorithms to grasp the general problem context. Finally, focus on the paper's core novel concept: the path intersection and repelling paths condition, which characterizes realizability and edge weight feasibility in outerplanar graphs.

### Outerplanar graphs structural theory *(prerequisite)*
Outerplanar graphs are a special class of planar graphs where all vertices lie on the outer face of the embedding. Understanding their structural properties, such as forbidden minors and embeddings, is essential to grasp the graph family studied in the paper.

*How the paper uses it:* The paper studies metrics realizable by outerplanar graphs, so knowing their structure is foundational.

▶ [Outerplanar Graphs - 31](https://www.youtube.com/watch?v=aKNx1CIKquk) — Graph Theory for Educators · 10 years ago

### Shortest path structures in graphs *(prerequisite)*
Shortest path algorithms find minimum-distance routes between nodes in weighted graphs. Understanding how shortest paths are computed and structured helps in following the paper's approach, which analyzes shortest path structures and their intersections.

*How the paper uses it:* The paper's realizability problem depends on shortest path distances and their structural properties in outerplanar graphs.

▶ [Graph Data Structure 4. Dijkstra's Shortest Path Algorithm](https://www.youtube.com/watch?v=pVfj6mxhdMw) — Computer Science Lessons · 10:52

### Metric graph realization algorithms *(prerequisite)*
Metric graph realization involves deciding if a given distance metric can be exactly represented by shortest path distances in some graph. Learning about general algorithms and challenges in this area provides context for the paper's specific focus on outerplanar graphs.

*How the paper uses it:* The paper develops a polynomial-time algorithm to decide outerplanar realizability, building on general metric realization concepts.

▶ [GTAC 5.2: Geometric Realization of Graphs](https://www.youtube.com/watch?v=Njf7WQ_EAwI) — Don Sheehy Lectures · 25:09


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from a small-scale hands-on exploration of outerplanar metrics concepts to a full reimplementation of the paper's core algorithm, culminating in an extension addressing one of the paper's stated limitations. Each project is designed to fit your software engineering and algorithmic skills while deepening your understanding of the paper's novel path intersection framework and polynomial-time algorithm for outerplanar metric realization.

### Beginner — Visualizing Circular Ordering and Repelling Paths
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that takes a small synthetic metric on 5-7 terminals and computes a circular ordering consistent with the metric, then highlights pairs of terminals whose shortest paths must be disjoint according to the repelling paths condition. The tool visually demonstrates the circular ordering and repelling paths concepts from the paper.

**Why it shows you understood the paper:** This project shows you grasp the key structural concepts of the paper: circular ordering of terminals and the repelling paths condition, which are central to deciding outerplanar realizability. A professor would see you can translate abstract metric conditions into concrete visual and algorithmic representations.

**Grounded in:** Section 3: Computation of circular ordering of terminals and the repelling paths condition (Claim 4 and Lemma 9)

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic small metric on 5-7 terminals generated by you to illustrate key properties; no external dataset needed.

**Build it:**

1. Implement a function to input or generate a small metric matrix on 5-7 terminals.
2. Implement the circular ordering algorithm described in Section 3 to find a circular ordering consistent with the metric.
3. Identify pairs of terminals that satisfy the repelling paths condition (disjoint shortest paths).
4. Visualize the circular ordering on a circle and draw shortest paths between terminals, highlighting repelling pairs.
5. Add interactive features to toggle visibility of paths and highlight repelling pairs.

**Ships as:** An interactive web app with a README explaining how circular ordering and repelling paths relate to outerplanar metrics, demonstrating these concepts on example metrics.

**Stretch goal:** Add an option to input a custom metric and automatically check if it violates any repelling paths condition locally.

### Intermediate — Reimplementing the Outerplanar Realizability Algorithm
*Effort: 2 weekends, ~20 hours*

You implement the core O(k^5)-time algorithm from the paper to decide if a given metric on terminals is outerplanar realizable and construct a realizing outerplanar graph if it exists. You test your implementation on synthetic metrics and compare against a simple baseline that checks tree realizability (a known simpler case).

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's main algorithmic contributions into working code, including circular ordering, repelling paths condition checks, and dynamic programming construction of the graph. A professor would see you understand the algorithmic structure and can evaluate realizability beyond trivial cases.

**Grounded in:** Theorem 2: The O(k^5)-time algorithm for deciding outerplanar realizability and constructing a realizing graph

**Tech stack:** Python 3.11, NumPy, NetworkX

**Data:** Synthetic metrics generated by you, including some that are tree metrics and some that are not outerplanar realizable, to validate correctness.

**Build it:**

1. Implement metric input and validation utilities.
2. Implement the circular ordering computation algorithm from Section 3.
3. Implement checks for the repelling paths condition (Lemma 9) using shortest path computations.
4. Implement the dynamic programming approach to construct the canonical outerplanar graph realizing the metric.
5. Implement a simple baseline that checks if the metric is a tree metric for comparison.
6. Run experiments on synthetic metrics and report success/failure and runtime.

**Ships as:** A Python package with scripts to input a metric, decide outerplanar realizability, construct the graph if possible, and compare against tree realizability baseline, with a README documenting usage and results.

**Stretch goal:** Add a visualization module to display the constructed outerplanar graph and shortest paths.

### Advanced — Extending the Repelling Paths Framework to Bounded Treewidth Graphs
*Effort: 3+ weeks*

You explore extending the paper's path intersection and repelling paths framework beyond outerplanar graphs to graphs of bounded treewidth. You design and implement a prototype algorithm that attempts to characterize realizability of metrics by graphs with treewidth ≤ 2, adapting the repelling paths condition or proposing analogous conditions. You evaluate your approach on synthetic metrics and discuss limitations.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper and requires deep understanding of the repelling paths condition and its role in realizability. A professor would see you can critically engage with the paper's theory and attempt novel extensions, bridging to broader graph families.

**Grounded in:** Future direction: Exploring whether the path intersection framework can be extended to other graph families beyond outerplanar graphs

**Tech stack:** Python 3.11, NetworkX, CVXPY (for LP solving)

**Data:** Synthetic metrics designed to be realizable or not by graphs with bounded treewidth; no public dataset exists for this specialized problem.

**Build it:**

1. Study the repelling paths condition and shortest path structures for outerplanar graphs in detail.
2. Research properties of graphs with bounded treewidth and shortest path metrics realizable by them.
3. Design candidate conditions analogous to repelling paths for bounded treewidth graphs.
4. Implement a prototype algorithm that checks these conditions and attempts to construct a realizing graph.
5. Test on synthetic metrics and analyze successes and failures.
6. Document theoretical insights and practical limitations.

**Ships as:** A research prototype codebase with documentation discussing the extension attempt, experimental results, and open questions for further work.

**Stretch goal:** Develop heuristics to improve efficiency or approximate realizability for larger terminal sets.
