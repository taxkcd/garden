---
title: "364 · Optimizing alluvial plots — Lior Pachter"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lior-pachter"
source_hash: "e3df21edb8120bae275fe2c8bf4952d2cfe0daa4f60373ad2da70d390a1f8cd0"
sequence: 364
generator: "outreach-garden: managed"
---

# 364 · Optimizing alluvial plots

## At a glance

- **Professor:** Lior Pachter
- **Institution:** California Inst. of Technology
- **Paper:** [Optimizing alluvial plots](https://arxiv.org/abs/2509.03761)
- **Authors:** Joseph Rich, Conrad Oakes, Lior Pachter
- **Year:** 2025

## Paper overview

This paper introduces wompwomp, an R package that optimizes the ordering and coloring of alluvial plots, which visualize multivariate categorical data. The authors formalize the problem as two optimization tasks—WP OMP for ordering and WL OMP for coloring—and solve them using heuristic algorithms based on the NeighborNet method from phylogenetics. The approach improves visualization clarity by reducing edge crossings and enhancing color matching, demonstrated on datasets including single-cell RNA sequencing, political affiliations in Game of Thrones, and machine learning model comparisons.

### Why it matters

**Research problem:** Alluvial plots are effective for visualizing multivariate categorical data but suffer from non-trivial ordering and coloring challenges that affect interpretability. Existing methods often rely on manual or simplistic heuristics that do not minimize edge crossings or optimize color consistency across layers.

**Why it matters:** Improved visualization of complex multivariate data is crucial for exploratory data analysis in fields like genomics, political science, and machine learning. Better ordering and coloring in alluvial plots reveal underlying data structures, relationships, and patterns that summary statistics or less optimized plots cannot capture.

**Key contributions:**

- Formulation of the WP OMP and WL OMP optimization problems for alluvial plot ordering and coloring.
- Adaptation of the NeighborNet algorithm to solve the NP-hard WP OMP problem efficiently in practice.
- Development of a clustering-based approach for color matching (WL OMP) to enhance interpretability.
- Implementation of these methods in the open-source R package wompwomp with support for standard data structures and interfaces.
- Demonstration of the approach on diverse datasets including scRNA-seq, political affiliations, and machine learning model comparisons.

## About the professor

**Lior Pachter** — California Inst. of Technology.

### Research links

- [Faculty/profile page](https://orcid.org/0000-0002-9164-6231)
- [Identity evidence](http://pachterlab.github.io/biography.html)
- [Identity evidence](https://www.cms.caltech.edu/people/lpachter)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** graph algorithms and clustering
**The paper assumes:** graph theory, graph algorithms, community detection clustering methods, heuristic optimization algorithms
**Already in this field?** Skip this entirely if you already understand fundamental graph algorithms and clustering techniques used in data analysis and visualization.

To understand the optimization methods in this paper, especially the adaptation of the NeighborNet algorithm and clustering techniques like Leiden and Louvain, a solid grasp of graph algorithms and clustering is essential. The rigorous course provides a deep, structured foundation in graph algorithms and related concepts, while the fast track offers a concise, focused introduction to graph theory and algorithms relevant to the paper's methods. Choose the rigorous course for comprehensive understanding or the fast track for a quicker, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

**Watch only this:** Lectures 9 (Breadth-First Search), 10 (Depth-First Search), 11 (Weighted Shortest Paths), 13 (Dijkstra), and 15 (Dynamic Programming, Part 1), about 5.5 hours total — these cover core graph traversal and optimization algorithms relevant to the NeighborNet adaptation and clustering heuristics.

*Why it unblocks this paper:* MIT 6.006 Introduction to Algorithms covers fundamental graph algorithms such as BFS, DFS, shortest paths, and dynamic programming, which underpin the heuristic and clustering approaches used in the paper. This course offers a rigorous, university-level treatment of graph algorithms essential for understanding the optimization problems WP OMP and WL OMP.

*If you want all of it:* 35.3 hours across 32 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Theory](https://www.youtube.com/playlist?list=PLeIMaH7i8JDiRA4fK9QmjvDSZKBJDyxpc) — Vivekanand Khyade - Algorithm Every Day · 29 videos · 6.4h across 29 episodes

**Watch only this:** Episodes 1 (Introduction to Graph in Data Structures), 2 (Graph Representation), 9 (BFS and DFS algorithm for GRAPHS), and 10 (BFS and DFS algorithm for Graph QUICK TRICK), about 1 hour total — these cover the essential graph concepts and traversal algorithms needed to grasp the paper's methods.

*Why it unblocks this paper:* The 'Graph Theory' playlist by Vivekanand Khyade provides clear, concise explanations of graph concepts, representations, and traversal algorithms like BFS and DFS, which are foundational for understanding the graph-based heuristics and clustering methods in the paper. It is well-suited for a quick yet solid introduction to the necessary graph theory background.

*If you want all of it:* 6.4 hours across 29 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Optimizing alluvial plots," start by building foundational knowledge on the NeighborNet algorithm and graph clustering algorithms, as these are core to the heuristic optimization methods used. Next, gain a solid grasp of alluvial plot visualization and multivariate categorical data analysis to appreciate the data type and visualization challenges addressed. Finally, focus on the paper's core contributions by watching the authors' own talk or the most relevant advanced presentation on alluvial plots and their optimization.

### NeighborNet algorithm *(prerequisite)*
The NeighborNet algorithm is a phylogenetic method adapted in the paper to heuristically solve the NP-hard ordering optimization problem (WP OMP). Understanding this algorithm provides insight into the core heuristic approach used for minimizing edge crossings in alluvial plots.

*How the paper uses it:* The paper adapts the NeighborNet algorithm from phylogenetics to solve the WP OMP ordering problem efficiently.

▶ [The Neighbour Joining algorithm for phylogenetic tree estimation](https://www.youtube.com/watch?v=7tn90VWGmV4) — Biotech and Bioinformatics with Prof Greg · 17:20 · 4y ago

### graph clustering algorithms *(prerequisite)*
Graph clustering algorithms like Leiden and Louvain are used in the paper to solve the WL OMP coloring optimization problem, enhancing color agreement across layers for better interpretability. Understanding these algorithms helps grasp how color matching is optimized.

*How the paper uses it:* The paper uses Leiden or Louvain clustering methods to determine similar blocks for color optimization in WL OMP.

▶ [BSR6806 - Lecture 3 - Part 4 - Leiden/Louvain Clustering - Sherry Xie - ISMMS -Spring 2024](https://www.youtube.com/watch?v=3-hyXIcSHkA) — Ma'ayan Lab · 2y ago

### alluvial plot visualization *(prerequisite)*
A strong understanding of alluvial plots is essential to appreciate the visualization challenges the paper addresses. This includes how alluvial plots represent multivariate categorical data and the impact of ordering and coloring on interpretability.

*How the paper uses it:* The paper focuses on optimizing ordering and coloring in alluvial plots to improve visualization clarity.

▶ [Graphing multivariate categorical data: The how, what and why of mosaic plots and alluvial diagrams](https://www.youtube.com/watch?v=fIB-FlTHheI) — R Consortium · 1:18:26 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Optimizing alluvial plots,' start by learning what alluvial plots are and why they are used to visualize multivariate categorical data. Next, grasp the basics of multivariate categorical data analysis to appreciate the data type involved. Then, study the NeighborNet algorithm, which is the core heuristic adapted for ordering optimization in the paper. After that, learn about graph clustering algorithms like Leiden and Louvain, which the paper uses for color optimization. Finally, explore the paper's specific optimization problems (WP OMP and WL OMP) to see how these concepts come together in the wompwomp package.

### alluvial plot visualization *(prerequisite)*
Alluvial plots visualize how categories in multivariate categorical data relate and change across different layers or partitions. Understanding their structure and purpose is essential to appreciate the challenges in ordering and coloring that the paper addresses.

*How the paper uses it:* The paper improves the clarity of alluvial plots by optimizing their ordering and coloring.

▶ [Graphing multivariate categorical data: The how, what and why of mosaic plots and alluvial diagrams](https://www.youtube.com/watch?v=fIB-FlTHheI) — R Consortium · 1:18:26 · 5y ago

### NeighborNet algorithm *(prerequisite)*
NeighborNet is a phylogenetic algorithm that builds circular split systems to represent relationships in data, using a greedy heuristic approach. This algorithm is adapted in the paper to solve the NP-hard ordering problem for alluvial plots efficiently.

*How the paper uses it:* The paper adapts NeighborNet to heuristically solve the ordering optimization problem (WP OMP).

▶ [The Neighbour Joining algorithm for phylogenetic tree estimation](https://www.youtube.com/watch?v=7tn90VWGmV4) — Biotech and Bioinformatics with Prof Greg · 17:20 · 4y ago

### graph clustering algorithms *(prerequisite)*
Graph clustering algorithms like Leiden and Louvain detect communities or clusters in networks by grouping similar nodes. These methods help optimize color assignments in alluvial plots to enhance interpretability by maximizing color agreement across layers.

*How the paper uses it:* The paper uses Leiden or Louvain clustering to solve the color optimization problem (WL OMP).

▶ [Leiden Algorithm Explained: A Smarter Way to Detect Communities in Networks](https://www.youtube.com/watch?v=hIQM0XLyQiQ) — Canal NFS · 1y ago

## Already in your library

- [Lecture 34 — Spectral Clustering  Three Steps (Advanced) | Stanford University](https://www.youtube.com/watch?v=uxsDKhZHDcc) — also for: A Comparative Study of Gene Co-Expression Thresholding Algorithms (Michael A. Langston)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "Optimizing alluvial plots" by Joseph Rich et al. The beginner project reproduces a simple alluvial plot with optimized ordering and coloring heuristics on a small synthetic dataset, showing grasp of the core visualization challenges. The intermediate project implements the NeighborNet-based ordering heuristic and clustering-based coloring on a publicly available or simulated dataset, comparing results to a baseline random ordering to validate the method's effectiveness. The advanced project extends the heuristic to allow partial fixing of layers, addressing a stated limitation and exploring hybrid optimization with user constraints, which could spark discussion with the authors.

### Beginner — Alluvial plot with heuristic ordering and coloring on synthetic data
*Effort: a weekend, ~8 hours*

You build a small R or Python script that generates a simple multivariate categorical dataset (e.g., 3 layers with 4-5 categories each) and visualizes it as an alluvial plot. You implement basic heuristics inspired by the paper to reorder layers and assign colors to reduce edge crossings and improve color consistency, reproducing a figure similar to the paper's illustrative example.

**Why it shows you understood the paper:** This project shows you understand the core problem of ordering and coloring in alluvial plots and can implement simple heuristics to improve visualization clarity, demonstrating grasp of the paper's motivation and approach.

**Grounded in:** We formulate two optimization problems that formalize the challenge of ordering and coloring partitions in alluvial plots.

**Tech stack:** R (ggalluvial, ggplot2) or Python (matplotlib, seaborn, pandas)

**Data:** Synthetic multivariate categorical data you generate to mimic a small alluvial plot structure.

**Build it:**

1. Generate a small synthetic dataset with 3 categorical layers and 4-5 categories per layer.
2. Visualize the data as an alluvial plot using ggalluvial in R or an equivalent Python library.
3. Implement a simple heuristic to reorder categories in layers to reduce edge crossings (e.g., sorting by frequency or adjacency).
4. Assign colors to categories aiming for consistency across layers using a simple matching heuristic.
5. Compare the plot before and after heuristic ordering and coloring to demonstrate improvement.

**Ships as:** A repository with code and README showing the synthetic data, the initial and optimized alluvial plots, and explanation of the heuristics used.

**Stretch goal:** Add interactive controls to manually tweak ordering and coloring to explore visualization improvements.

### Intermediate — Reimplementation of NeighborNet ordering and clustering coloring for alluvial plots
*Effort: 2 weekends, ~20 hours*

You implement the core WP OMP ordering heuristic by adapting the NeighborNet algorithm to optimize layer ordering and block permutations, and the WL OMP coloring heuristic using Leiden or Louvain clustering for color assignment. You apply this to a publicly available or simulated dataset resembling the paper's single-cell RNA-seq or political affiliation examples, and compare edge crossing metrics against a baseline random ordering.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main algorithmic contributions from description, apply them to real or realistic data, and quantitatively evaluate improvements, showing deep comprehension of the methods and their impact.

**Grounded in:** We address WP OMP by applying the NeighborNet algorithm... This graph is then clustered via Leiden or Louvain methods to determine similar blocks.

**Tech stack:** R (igraph, ggalluvial, LeidenAlg) or Python (networkx, leidenalg, matplotlib)

**Data:** Simulated or publicly available multivariate categorical data approximating single-cell RNA-seq or political affiliation data; no authors' own dataset released.

**Build it:**

1. Implement the NeighborNet algorithm or use a phylogenetics library to produce circular orderings of layers and blocks based on a distance matrix.
2. Construct the distance matrix between blocks as described in the paper.
3. Implement Leiden or Louvain clustering on the graph to assign colors to blocks for WL OMP.
4. Visualize the optimized alluvial plot using ggalluvial or matplotlib.
5. Compute and report edge crossing counts or the paper's objective function values for optimized vs random orderings.
6. Document the implementation, dataset, and results in a README.

**Verified links from the paper:**

- <https://github.com/pachterlab/wompwomp> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/husonlab/SplitsPy> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code implementing NeighborNet ordering and clustering coloring, example dataset, visualizations, and quantitative comparison to baseline.

**Stretch goal:** Integrate the implementation with the wompwomp R package if feasible, or compare results to its outputs.

### Advanced — Hybrid alluvial plot optimization with partial layer fixing
*Effort: 3+ weeks*

You extend the NeighborNet-based WP OMP heuristic to allow user-defined constraints that fix the order of one or more layers while optimizing the rest, addressing the paper's limitation about difficulty fixing particular layers. You implement a hybrid optimization that respects these constraints and still reduces edge crossings. You test this on a dataset similar to the Game of Thrones political affiliation example or a synthetic dataset, and compare objective values and visual clarity to unconstrained optimization.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing you can innovate on the method, handle complex constraints, and evaluate trade-offs, which would interest the authors and demonstrate research potential.

**Grounded in:** Difficulty in fixing particular layers in place because of the cyclic nature of the output. Future direction: Adding user-supplied priors or initial structures to guide optimization.

**Tech stack:** R or Python with networkx, clustering libraries, and visualization tools; optionally integrate with wompwomp codebase.

**Data:** Synthetic or publicly available multivariate categorical data similar to the Game of Thrones political affiliation dataset described in the paper.

**Build it:**

1. Study the NeighborNet algorithm and its cyclic ordering output to understand layer ordering constraints.
2. Design a method to incorporate partial fixing of layers (e.g., fixing order of some layers, optimizing others) within the NeighborNet heuristic or as a post-processing step.
3. Implement the hybrid optimization algorithm respecting user constraints.
4. Apply the method to a suitable dataset and visualize the resulting alluvial plots.
5. Compare edge crossing metrics and visualization clarity with unconstrained optimization.
6. Document the approach, challenges, and results in detail.

**Verified links from the paper:**

- <https://github.com/pachterlab/wompwomp> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/husonlab/SplitsPy> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with code implementing constrained alluvial plot optimization, example datasets, visualizations, and a detailed report on the method and evaluation.

**Stretch goal:** Explore greedy refinement steps after NeighborNet initialization to further improve solutions without worsening the objective.

_The authors released no code for this paper; the intermediate and advanced projects require reimplementation of the NeighborNet algorithm and clustering methods from the paper's description and use of third-party NeighborNet and clustering libraries._
