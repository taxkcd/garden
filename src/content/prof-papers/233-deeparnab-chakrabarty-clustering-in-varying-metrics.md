---
title: "233 · Clustering in Varying Metrics — Deeparnab Chakrabarty"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-deeparnab-chakrabarty"
source_hash: "7f6e5fc4309b118f691f38a936fe4847fe467212de58946c862be5500c62dbf1"
sequence: 233
generator: "outreach-garden: managed"
---

# 233 · Clustering in Varying Metrics

## At a glance

- **Professor:** Deeparnab Chakrabarty
- **Institution:** Dartmouth College
- **Paper:** [Clustering in Varying Metrics](https://arxiv.org/pdf/2510.07860)
- **Authors:** Deeparnab Chakrabarty, Jonathan Conroy, Ankita Sarkar
- **Year:** 2025

## Paper overview

This paper studies clustering problems where the distance metric changes over multiple scenarios, such as different times or conditions, and aims to find a single set of cluster centers minimizing an aggregate cost over all these metrics. It shows that the problem is computationally hard in general but provides approximation algorithms and parameterized schemes under certain conditions.

### Why it matters

**Research problem:** How to perform center-based clustering on the same set of points when the underlying distance metric varies across multiple scenarios, minimizing an aggregate clustering cost over all scenarios.

**Why it matters:** Many real-world applications involve clustering where distances change over time or conditions (e.g., travel times in different seasons). Understanding the complexity and designing efficient algorithms for such varying-metric clustering is crucial for practical and theoretical advances in discrete optimization and algorithms.

**Key contributions:**

- Introduced the aggregated clustering problem over multiple metrics with an aggregate cost objective.
- Proved NP-hardness and inapproximability for T ≥ 3 scenarios, even on simple graph structures.
- Provided polynomial-time constant-factor approximation algorithms for T = 2 scenarios for k-supplier and k-median problems.
- Established W[2]-hardness parameterized by k, but gave FPT 3-approximation algorithms parameterized by both k and T.
- Developed EPAS for metrics with bounded ε-scatter dimension and for metrics induced by bounded-treewidth graphs.

## About the professor

**Deeparnab Chakrabarty** — Associate Professor, Computer Science, Dartmouth College.

Research interests: understanding the efficiency and limitations of algorithms, thereby delineating the boundary between tractable and intractable computational problems

### Research links

- [Faculty/profile page](http://web.cs.dartmouth.edu/people/deeparnab-chakrabarty)
- [Professor website](https://www.cs.dartmouth.edu/~deepc/)
- [Resolved homepage](http://web.cs.dartmouth.edu/~deepc/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Clustering in Varying Metrics,' start with foundational concepts in parameterized approximation algorithms, treewidth and graph decompositions, NP-hardness and inapproximability, and matroid intersection with LP relaxations, as these underpin the paper's complexity results and algorithmic techniques. Then, focus on the core problem of clustering with multiple metrics, culminating in the authors' own talk or the most relevant advanced lecture on clustering to grasp the specific challenges and solutions presented in the paper.

### Parameterized approximation algorithms *(prerequisite)*
This section covers parameterized algorithms and approximation techniques that are crucial for handling the complexity of clustering problems with multiple metrics, especially given the paper's FPT and EPAS results. Understanding LP-guided branching and parameterized complexity classes will provide the necessary background for the algorithmic contributions.

*How the paper uses it:* The paper develops FPT 3-approximation algorithms and EPAS for structured metrics, relying heavily on parameterized approximation techniques.

▶ [Parameterized Algorithms Lecture 10: LP-guided branching](https://www.youtube.com/watch?v=GESFEV3ihLk) — Algorithms at University of Warsaw · 5 years ago

### Treewidth and graph decompositions *(prerequisite)*
Treewidth is a key structural graph property used in the paper to design efficient approximation schemes for metrics induced by bounded-treewidth graphs. Learning about tree decompositions and their algorithmic applications is essential to understand the tractability results.

*How the paper uses it:* The paper's EPAS results for bounded-treewidth graphs hinge on exploiting tree decompositions.

▶ [Graph Theory 6-3: Tree Decompositions and Tree Width](https://www.youtube.com/watch?v=gCZrasaG0vA) — Luke Postle · 5 years ago

### NP-hardness and inapproximability *(prerequisite)*
Understanding NP-hardness and inapproximability is fundamental to grasp the paper's hardness results, including the impossibility of finite-factor approximations for T ≥ 3. This section provides the complexity theory background necessary to appreciate the paper's theoretical limits.

*How the paper uses it:* The paper proves NP-hardness and inapproximability for the aggregated clustering problem with three or more metrics.

▶ [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — hackerdashery · 11 years ago

### Matroid intersection and LP relaxations *(prerequisite)*
Matroid intersection and LP relaxations are key algorithmic tools used in the paper's approximation schemes and dynamic programming approaches. Familiarity with these concepts will help in understanding the design and analysis of the proposed algorithms.

*How the paper uses it:* The paper uses matroid intersection and LP relaxations as part of its algorithmic framework for clustering under varying metrics.

▶ [Faster Matroid Intersection](https://www.youtube.com/watch?v=eq0nb3C9JWU) — IEEE FOCS: Foundations of Computer Science · 6 years ago

### Clustering with multiple metrics
This section focuses on the core problem of clustering when the distance metric varies across scenarios, which is the central theme of the paper. It provides context on multi-metric clustering challenges and approaches, setting the stage for the paper's contributions.

*How the paper uses it:* The paper studies clustering problems where the distance metric changes over multiple scenarios and aims to minimize an aggregate cost.

▶ [Algorithms for Robust Clustering of Multi-Modal Data | Krishna Shivani | RIT Summer Research](https://www.youtube.com/watch?v=1MGJ91ZGLzg) — Krish Shivani · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of clustering and why it matters, then build foundational knowledge of computational complexity and parameterized algorithms that explain the problem's difficulty and solution approaches. Next, learn about structural graph properties like treewidth that enable efficient algorithms, followed by key algorithmic tools such as matroid intersection and LP relaxations. Finally, focus on the core concept of clustering under varying metrics, which is the central problem studied in the paper.

### Paper authors talk
Gain an intuitive understanding of clustering by watching a clear, foundational lecture that introduces clustering concepts, challenges, and common methods. This sets the stage for appreciating the complexities introduced by varying metrics.

*How the paper uses it:* Provides foundational intuition about clustering, the core problem setting of the paper.

▶ [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — MIT OpenCourseWare · 9 years ago

### NP-hardness and inapproximability *(prerequisite)*
Learn what NP-hardness means and why certain problems cannot be efficiently solved or approximated. This helps understand the fundamental computational challenges the paper proves for clustering under multiple metrics.

*How the paper uses it:* The paper proves NP-hardness and inapproximability results for the aggregated clustering problem with three or more metrics.

▶ [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — Abdul Bari · 8 years ago

### Parameterized approximation algorithms *(prerequisite)*
Understand the basics of parameterized algorithms and how they provide efficient solutions when certain problem parameters are small, including approximation techniques guided by linear programming. This knowledge is key to grasping the paper’s fixed-parameter tractable and approximation schemes.

*How the paper uses it:* The paper develops FPT and EPAS algorithms parameterized by cluster count and number of metrics.

▶ [Parameterized Algorithms](https://www.youtube.com/watch?v=9x9pAn5DkZI) — NPTEL-NOC IITM · 7:51 · 5 years ago

### Treewidth and graph decompositions *(prerequisite)*
Learn what treewidth is and how decomposing graphs into tree-like structures enables efficient algorithms for otherwise hard problems. This structural insight is crucial for understanding the paper’s algorithms on metrics induced by bounded-treewidth graphs.

*How the paper uses it:* The paper’s EPAS results leverage bounded treewidth of base graphs to achieve efficient approximations.

▶ [Graph Theory 6-3: Tree Decompositions and Tree Width](https://www.youtube.com/watch?v=gCZrasaG0vA) — Luke Postle · 5 years ago

### Matroid intersection and LP relaxations *(prerequisite)*
Discover matroid intersection as a combinatorial optimization tool and how linear programming relaxations help design approximation algorithms. These techniques underpin the paper’s algorithmic contributions for clustering under varying metrics.

*How the paper uses it:* The paper uses matroid intersection and LP relaxations to build approximation and parameterized algorithms.

▶ [9.8 Matroid Intersection, Part I](https://www.youtube.com/watch?v=ftEgEYjJEak) — Constantine Caramanis · 28:19 · 5 years ago

## Already in your library

- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)
- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)
- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper "Clustering in Varying Metrics" by Chakrabarty et al. The beginner project implements a simple two-metric clustering approximation to grasp the core problem and approximation approach. The intermediate project reimplements the paper's constant-factor approximation algorithm for T=2 scenarios on a synthetic dataset, comparing it to a baseline single-metric clustering. The advanced project extends the paper by exploring clustering under slowly varying metrics, addressing one of the paper's open future directions with a novel heuristic and evaluation.

### Beginner — Two-Metric k-Supplier Clustering Approximation
*Effort: a weekend, ~8 hours*

You build a small Python script that implements the 3-approximation algorithm for the aggregate k-supplier problem when there are exactly two distance metrics, as described in the paper. You simulate two simple distance matrices on a small set of points and compute cluster centers minimizing the aggregate cost.

**Why it shows you understood the paper:** This project shows you understand the problem setup of clustering under multiple metrics and the key approximation result for T=2, including how to aggregate costs and find approximate centers.

**Grounded in:** Theorems 12 and 21 provide polynomial-time 3-approximation for k-supplier when T=2.

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic small point sets with two manually defined distance matrices representing two scenarios.

**Build it:**

1. Implement a function to generate or input two distance matrices for the same set of points.
2. Implement the aggregate cost function Ψ as the sum of clustering costs over the two metrics.
3. Implement the 3-approximation algorithm for k-supplier clustering for T=2 as described in the paper.
4. Run the algorithm on the synthetic data and output cluster centers and aggregate cost.
5. Write a README explaining the problem, the approximation guarantee, and results.

**Ships as:** A Python script and README showing the approximate cluster centers for two metrics and explaining the approximation approach.

**Stretch goal:** Add visualization of the points and cluster centers under both metrics.

### Intermediate — Reimplementation of Aggregate k-Median Approximation for Two Metrics
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's 28-approximation algorithm for the aggregate k-median problem with two metrics. Using synthetic or publicly available small metric datasets (e.g., points in Euclidean space with two different distance functions), you run your implementation and compare the aggregate clustering cost to a baseline that clusters on only one metric.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's algorithmic description into working code, apply it to data, and evaluate the benefit of multi-metric clustering versus single-metric baselines.

**Grounded in:** Theorems 12 and 21 provide polynomial-time 28-approximation for aggregate k-median when T=2.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic 2D point sets with two Euclidean metrics modified by scaling or rotation to simulate metric variation; no public dataset directly used.

**Build it:**

1. Generate or load a small 2D point set and define two distance metrics by applying transformations.
2. Implement the aggregate k-median objective combining costs from both metrics.
3. Implement the 28-approximation algorithm for aggregate k-median for T=2 as per the paper's description.
4. Implement a baseline k-median clustering on only one metric for comparison.
5. Run experiments comparing aggregate cost and baseline cost; plot results.
6. Document the implementation details, results, and interpretation in a README.

**Ships as:** A repository with code to run aggregate k-median clustering on two metrics, comparison plots, and a detailed README explaining the algorithm and results.

**Stretch goal:** Experiment with varying the number of clusters k and analyze the effect on approximation quality.

### Advanced — Heuristic Clustering for Slowly Varying Metrics
*Effort: a few weeks, ~40+ hours*

You develop and evaluate a heuristic algorithm for the aggregate clustering problem when the metrics vary only slightly between scenarios, e.g., by bounded edge insertions/deletions in the underlying graph. This addresses a future direction suggested by the paper. You simulate a sequence of metrics with small changes and compare your heuristic's aggregate cost to single-metric clustering and naive aggregation.

**Why it shows you understood the paper:** This project shows you can extend the paper's theoretical framework to a practical setting not covered by their hardness or EPAS results, demonstrating creativity and research potential.

**Grounded in:** Future direction: Study aggregate clustering when metrics change only slightly between scenarios (bounded edge insertions/deletions).

**Tech stack:** Python 3.11, NetworkX, NumPy, Matplotlib

**Data:** Synthetic graph metrics generated by starting from a base graph and applying small random edge modifications to create multiple scenarios.

**Build it:**

1. Implement a generator for a base graph and create multiple metrics by small edge insertions/deletions.
2. Define the aggregate clustering objective over these slowly varying metrics.
3. Design and implement a heuristic that leverages metric similarity, e.g., incremental updates or warm starts from previous cluster centers.
4. Implement baseline methods: clustering on a single metric and naive aggregation ignoring metric similarity.
5. Evaluate and compare aggregate costs and runtime on synthetic data.
6. Write a detailed report and README discussing the heuristic, results, limitations, and future work.

**Ships as:** A codebase and report demonstrating a heuristic for clustering under slowly varying metrics, with experimental evaluation and discussion.

**Stretch goal:** Incorporate parameterized approximation ideas or dynamic programming for bounded-treewidth graphs to improve the heuristic.
