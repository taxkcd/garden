---
title: "307 · A Near-Linear Constant-Factor Approximation for Euclidean Bipartite Matching — Kasturi R. Varadarajan"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kasturi-r-varadarajan"
source_hash: "2c7b5560af52bbec88a27ec1c9485a82efb80cd3a43ab02c0878b42a0a8d0959"
sequence: 307
generator: "outreach-garden: managed"
---

# 307 · A Near-Linear Constant-Factor Approximation for Euclidean Bipartite Matching

## At a glance

- **Professor:** Kasturi R. Varadarajan
- **Institution:** University of Iowa
- **Paper:** [A Near-Linear Constant-Factor Approximation for Euclidean Bipartite Matching](http://homepage.cs.uiowa.edu/~kvaradar/paps/p079-agarwal.pdf)
- **Authors:** Pankaj K. Agarwal, Kasturi R. Varadarajan
- **Year:** 2004

## Paper overview

This paper presents a new algorithm for the Euclidean bipartite matching problem, where two equal-sized sets of points (red and blue) in a fixed-dimensional space are matched to minimize the sum of distances between paired points. The authors develop a Monte Carlo algorithm that runs in near-linear expected time and returns a matching whose expected cost is within a logarithmic factor of the optimal. This improves upon previous algorithms by significantly reducing running time while maintaining a good approximation quality.

### Why it matters

**Research problem:** The Euclidean bipartite matching problem involves pairing red and blue points in d-dimensional space to minimize total Euclidean distance. Existing exact algorithms are computationally expensive, and prior approximation algorithms either have high running times or do not guarantee near-linear time with constant-factor approximations.

**Why it matters:** Euclidean bipartite matching has applications in operations research, pattern recognition, shape matching, statistics, and VLSI design. Efficient algorithms enable practical solutions in these fields where large datasets are common.

**Key contributions:**

- A Monte Carlo algorithm running in O(n^{1+ε}) expected time for any 0 < ε < 1.
- An approximation guarantee where the expected cost is within O(log(1/ε)) times the optimal.
- A novel use of a randomly shifted quadtree with multiple subdivisions per cell to control recursion depth and approximation quality.
- A detailed analysis bounding the expected increase in matching cost due to subdivision and edge swaps.
- Extension of the approach to any fixed dimension.

## About the professor

**Kasturi R. Varadarajan** — Professor, Department of Computer Science, University of Iowa.

Research interests: In principle, all of theoretical computer science. In practice, a subset that includes primarily parts of computational geometry, but also optimization problems on graphs and the like and polynomial time computability of equilibria in games and some economic models.

### Research links

- [Faculty/profile page](http://homepage.cs.uiowa.edu/~kvaradar)
- [Resolved homepage](http://www.cs.uiowa.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Geometry
**The paper assumes:** computational geometry, geometric data structures, approximation algorithms for geometric optimization
**Already in this field?** Skip this entirely if you already have a solid understanding of computational geometry and geometric approximation algorithms.

To understand the algorithmic techniques and geometric concepts in the paper on Euclidean bipartite matching, a solid grasp of computational geometry is essential, especially spatial subdivisions like quadtrees and geometric optimization. The rigorous course option offers a deep, structured university-level treatment, while the fast track provides a concise, visual introduction to core computational geometry concepts, suitable for quick background preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CENG 773 - Computational Geometry](https://www.youtube.com/playlist?list=PLuiPz6iU5SQ8W6v1F5OgogHel4T6KjKob) — METUOpenCourseWare · 29 videos · 22.8h across 29 episodes

**Watch only this:** Lectures 1.1 through 5.3, about 14 hours — these cover fundamental computational geometry concepts, convex hulls, range searching, and spatial data structures necessary for grasping the paper's approach.

*Why it unblocks this paper:* This METUOpenCourseWare Computational Geometry course covers foundational topics including spatial data structures and geometric algorithms, which are directly relevant to understanding hierarchical subdivisions and approximation algorithms used in the paper.

*If you want all of it:* 22.8 hours across all 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational geometry](https://www.youtube.com/playlist?list=PLPVMDqmMcxRzFhx451DxS7oGnG5KUGU-_) — Erik Nordeus · 11 videos · 0.7h across 11 episodes

**Watch only this:** Episodes 1 through 6, about 18 minutes — these cover triangulations, convex hulls, and related geometric algorithms that form the conceptual basis for the paper's spatial subdivision techniques.

*Why it unblocks this paper:* Erik Nordeus's Computational Geometry playlist provides short, clear visual explainers on key geometric algorithms and data structures, giving an intuitive grasp of concepts like triangulations and convex hulls that underpin the paper's methods.

*If you want all of it:* 0.7 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Near-Linear Constant-Factor Approximation for Euclidean Bipartite Matching," start by building foundational knowledge on the Euclidean bipartite matching problem and approximation algorithms for geometric optimization, as these provide the problem context and algorithmic framework. Then, study the transportation problem in optimization and Monte Carlo algorithms, which are key technical tools used in the paper's approach. Next, learn about the randomly shifted quadtree data structure, central to the hierarchical subdivision technique employed. Finally, conclude with the authors' own talk on bipartite matching to gain direct insights into their algorithmic contributions and analysis.

### Euclidean bipartite matching problem *(prerequisite)*
This concept covers the fundamental problem of pairing two equal-sized point sets in Euclidean space to minimize total matching cost. Understanding this problem is essential as it is the core optimization challenge addressed by the paper.

*How the paper uses it:* The paper develops a near-linear time approximation algorithm specifically for the Euclidean bipartite matching problem.

▶ [mod09lec45 - Search Bipartite Perfect Matching is in RNC: Part 1](https://www.youtube.com/watch?v=5on6_Lt35Ro) — NPTEL-NOC IITM · 4 years ago

### Approximation algorithms for geometric optimization *(prerequisite)*
This topic introduces approximation algorithms, focusing on their design and analysis in geometric settings. It provides the theoretical background for understanding the trade-offs between running time and solution quality that the paper explores.

*How the paper uses it:* The paper presents a Monte Carlo approximation algorithm with provable guarantees for geometric matching.

▶ [A Second Course in Algorithms (Lecture 15: Introduction to Approximation Algorithms)](https://www.youtube.com/watch?v=OacQnsvauZs) — Tim Roughgarden Lectures · 10 years ago

### Transportation problem in optimization *(prerequisite)*
The transportation problem is a classical optimization problem related to distributing resources efficiently. The paper uses transportation problem techniques to handle points crossing subdivision boundaries in their hierarchical algorithm.

*How the paper uses it:* The algorithm solves smaller transportation problems to manage cross-cell matchings in the subdivision.

▶ [Lec-13 Transportation Problems](https://www.youtube.com/watch?v=Q31jKiEXxdc) — nptelhrd · 16 years ago

### Monte Carlo algorithms in computational geometry *(prerequisite)*
Monte Carlo algorithms use randomness to achieve efficient expected running times with probabilistic guarantees. This paradigm underpins the paper's near-linear time algorithm for bipartite matching.

*How the paper uses it:* The paper's algorithm is a Monte Carlo method providing expected approximation guarantees.

▶ [Tutorial on Monte Carlo Geometry Processing @ SGP 2024 Graduate School](https://www.youtube.com/watch?v=cmgNqCwaPYc) — Rohan Sawhney · 2 years ago

### Randomly shifted quadtree
The randomly shifted quadtree is a hierarchical spatial data structure used to partition the point sets recursively. The paper innovates by using multiple subdivisions per cell to control recursion depth and approximation quality.

*How the paper uses it:* The algorithm's hierarchical subdivision relies on a novel variant of the randomly shifted quadtree.

▶ [Quadtrees, Balanced Quadtrees, and Meshing](https://www.youtube.com/watch?v=Ac47eHdSZuE) — Algorithms Lab · 3 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed explanation of their algorithm, its analysis, and the challenges addressed. It offers unique insights into their approach and open problems.

*How the paper uses it:* Professor Kasturi R. Varadarajan, a co-author, discusses bipartite matching algorithms relevant to the paper's contributions.

▶ [Vijay V Vazirani - Online Bipartite Matching and Adwords](https://www.youtube.com/watch?v=PXiWYhq5yYg) — STCS TIFR · Streamed 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on near-linear constant-factor approximation for Euclidean bipartite matching, start by grasping the fundamental Euclidean bipartite matching problem and its challenges. Then learn about approximation algorithms for geometric optimization to appreciate the trade-offs involved. Next, understand the transportation problem as it is used to handle boundary cases in the algorithm. Follow this with the Monte Carlo algorithm paradigm to see how probabilistic guarantees enable near-linear time. Finally, study the randomly shifted quadtree data structure, which is central to the hierarchical subdivision approach used in the paper.

### Euclidean bipartite matching problem *(the paper's own talk)*
This problem involves pairing two equal-sized sets of points in space to minimize the total distance between matched pairs. Understanding this sets the stage for why efficient algorithms are needed and what the optimization goal is.

*How the paper uses it:* The paper develops an approximation algorithm specifically for this problem in fixed-dimensional Euclidean space.

▶ [Can we assign everyone a job? (maximum matchings) | Bipartite Matchings](https://www.youtube.com/watch?v=ELcgI_C1mNM) — OptWhiz · 3 years ago

### Approximation algorithms for geometric optimization *(prerequisite)*
Approximation algorithms provide near-optimal solutions efficiently when exact solutions are computationally expensive. Learning their principles helps understand the trade-offs between running time and solution quality in geometric problems.

*How the paper uses it:* The paper presents a Monte Carlo approximation algorithm with provable bounds on running time and cost approximation.

▶ [2022-11-10: COMP 5711 (Advanced Algorithms) - Lecture 20: Introduction to Approximation Algorithms](https://www.youtube.com/watch?v=rERAqufrKNQ) — Amir Goharshady · 3 years ago

### Transportation problem in optimization *(prerequisite)*
The transportation problem is a classic optimization problem about efficiently distributing resources. It is used in the paper to handle points that cross subdivision boundaries in the matching algorithm.

*How the paper uses it:* The algorithm solves smaller transportation problems to manage points crossing quadtree cell boundaries.

▶ [Lec-13 Transportation Problems](https://www.youtube.com/watch?v=Q31jKiEXxdc) — nptelhrd · 16 years ago

### Monte Carlo algorithms in computational geometry *(prerequisite)*
Monte Carlo algorithms use randomness to achieve efficient expected running times with probabilistic guarantees. Understanding this paradigm clarifies how the paper achieves near-linear expected time.

*How the paper uses it:* The paper's algorithm is Monte Carlo, providing expected time and approximation guarantees rather than deterministic ones.

▶ [What is Monte Carlo Simulation?](https://www.youtube.com/watch?v=7TqhmX92P6U) — IBM Technology · 4:35 · 4 years ago

### Randomly shifted quadtree
A quadtree is a hierarchical spatial data structure that recursively subdivides space into quadrants. A randomly shifted quadtree variant helps balance recursion depth and approximation quality in the paper's algorithm.

*How the paper uses it:* The paper uses a novel randomly shifted quadtree with multiple subdivisions per cell to control recursion and approximation.

▶ [Coding Challenge #98.1: Quadtree - Part 1](https://www.youtube.com/watch?v=OJxEcs0w_kE) — The Coding Train · 8 years ago

## Already in your library

- [A&DS S04E01. Maximum Matchings in Bipartite Graphs](https://www.youtube.com/watch?v=4VYVnEcLZpQ) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)
- [Week 13a: Computational Advertising - Part 1: Online Bipartite Matching](https://www.youtube.com/watch?v=G71ymckePWY) — also for: Optimizing Relevance and Diversity in Online Matching Markets: A Time-Adaptive Attenuation Approach (Pan Xu)
- [Unweighted Bipartite Matching | Network Flow | Graph Theory](https://www.youtube.com/watch?v=GhjwOiJ4SqU) — also for: Position Auctions with a Capacity Constraint (Piotr Krysta)
- [2.11.7 Bipartite Matching](https://www.youtube.com/watch?v=HZLKDC9OSaQ) — also for: Speeding-up Graph Algorithms via Clique Partitioning (Daniel Grosu)
- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate your understanding of the paper's new near-linear Monte Carlo approximation algorithm for Euclidean bipartite matching. The beginner project recreates a core mechanism of the hierarchical subdivision using a randomly shifted quadtree on synthetic data. The intermediate project implements the paper's core algorithm on a small synthetic point set, comparing approximation quality and runtime to a baseline greedy matching. The advanced project extends the method by exploring richer interactions between subdivision cells to improve approximation, addressing one of the paper's stated open challenges.

### Beginner — Randomly Shifted Quadtree Visualization for Euclidean Bipartite Matching
*Effort: a weekend, ~8 hours*

You build a visualization tool that constructs a randomly shifted quadtree subdivision of two equal-sized sets of red and blue points in 2D space. The tool shows how points are partitioned into cells at multiple levels with multiple subdivisions per cell, illustrating the hierarchical decomposition central to the paper's approach.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key data structure—the randomly shifted quadtree with multiple subdivisions per cell—and how it controls recursion depth and approximation quality.

**Grounded in:** The algorithm uses a variant of the randomly shifted quadtree with multiple subdivisions per cell.

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic 2D red and blue point sets generated uniformly at random within a unit square.

**Build it:**

1. Generate two equal-sized sets of random 2D points labeled red and blue.
2. Implement a quadtree subdivision with a random shift applied to the coordinate axes.
3. Allow each quadtree cell to be subdivided into multiple subcells (not just 4).
4. Visualize the subdivision hierarchy and color points by their set (red or blue).
5. Add interactivity to adjust subdivision parameters and observe changes in cell partitions.

**Ships as:** An interactive web-based visualization showing randomly shifted quadtree subdivisions of red and blue points with adjustable parameters.

**Stretch goal:** Add a feature to highlight points crossing cell boundaries and explain their role in the matching problem.

### Intermediate — Implementation of Near-Linear Monte Carlo Approximation for 2D Euclidean Bipartite Matching
*Effort: 2 weekends, ~20 hours*

You implement the core Monte Carlo algorithm from the paper for the 2D Euclidean bipartite matching problem, including the hierarchical subdivision with randomly shifted quadtrees and recursive matching within cells. You compare the expected matching cost and runtime against a simple greedy baseline on synthetic point sets.

**Why it shows you understood the paper:** This project shows you can translate the paper's algorithmic approach into working code and evaluate its approximation guarantees and efficiency compared to a baseline, demonstrating comprehension of the core method and its trade-offs.

**Grounded in:** A Monte Carlo algorithm running in O(n^{1+ε}) expected time for any 0 < ε < 1, with expected cost within O(log(1/ε)) times optimal.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic 2D red and blue point sets generated uniformly at random within a unit square, sizes ranging from hundreds to a few thousands.

**Build it:**

1. Implement the randomly shifted quadtree subdivision with multiple subdivisions per cell as described in the paper.
2. Implement recursive matching within cells and handle points crossing cell boundaries by solving smaller transportation problems.
3. Implement a simple greedy bipartite matching baseline (e.g., nearest neighbor matching).
4. Run experiments comparing expected matching cost and runtime between your implementation and the baseline on synthetic datasets.
5. Plot results showing approximation ratio and runtime scaling with input size and ε parameter.

**Ships as:** A Python repository with code to run the approximation algorithm and baseline, plus scripts to generate comparison plots and a README explaining the results.

**Stretch goal:** Add logging to measure recursion depth and analyze its effect on runtime and approximation quality.

### Advanced — Exploring Richer Interactions Between Subdivision Cells for Improved Approximation
*Effort: 3-4 weeks*

You extend the paper's algorithm by experimenting with richer interactions between children of subdivision cells, aiming to reduce the logarithmic approximation factor while maintaining near-linear runtime. You implement and evaluate modified recursive calls that allow limited cross-cell matching beyond the original approach, addressing the paper's open problem.

**Why it shows you understood the paper:** This project demonstrates deep engagement with the paper's limitations and future directions, showing initiative to push beyond the original method and contribute novel insights into improving approximation quality and runtime trade-offs.

**Grounded in:** Achieving constant-factor approximation in O(n log n) time remains an open question requiring richer interactions between subdivision cells.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D red and blue point sets generated uniformly at random within a unit square, with sizes up to several thousands.

**Build it:**

1. Review and fully understand the original recursive subdivision and matching algorithm implementation.
2. Design and implement modifications allowing richer interactions between children of subdivision cells, such as limited cross-cell edge swaps or joint transportation problem solving.
3. Benchmark the modified algorithm against the original on synthetic datasets, measuring approximation ratio and runtime.
4. Analyze how the richer interactions affect recursion depth and matching cost increase.
5. Document findings and discuss potential for further improvements or theoretical analysis.

**Ships as:** A well-documented codebase and Jupyter notebook presenting your extended algorithm, experimental results, and analysis of the trade-offs involved.

**Stretch goal:** Attempt to generalize your approach to 3D point sets and evaluate performance differences.
