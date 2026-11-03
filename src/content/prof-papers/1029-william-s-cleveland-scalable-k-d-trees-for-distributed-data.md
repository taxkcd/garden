---
title: "1029 · Scalable k-d trees for distributed data — William S. Cleveland"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-william-s-cleveland"
source_hash: "da31eca516e0db64022b64a9061c7f6a9d4ee238120fe0de47ee37ba4b7bd66f"
sequence: 1029
generator: "outreach-garden: managed"
---

# 1029 · Scalable k-d trees for distributed data

## At a glance

- **Professor:** William S. Cleveland
- **Institution:** Purdue University
- **Paper:** [Scalable k-d trees for distributed data](https://arxiv.org/pdf/2201.08288)
- **Authors:** Aritra Chakravorty, William S. Cleveland, Patrick J. Wolfe
- **Year:** 2022

## Paper overview

This paper presents a scalable algorithm to construct balanced k-d trees for large, distributed datasets. It approximates medians needed for splitting data recursively using parallel computations, enabling efficient k-d tree construction in distributed environments like Spark. The approach comes with theoretical guarantees and is validated by simulations showing good accuracy and scalability.

### Why it matters

**Research problem:** Constructing balanced k-d trees for large, distributed, high-dimensional data is challenging because exact median computations required for splitting cannot be done efficiently in parallel or distributed settings.

**Why it matters:** K-d trees are fundamental data structures used in many statistical and data science tasks such as nearest neighbor search, clustering, and local regression. Efficient scalable construction of k-d trees enables these tasks on big data stored in distributed systems.

**Key contributions:**

- A novel parallel median approximation algorithm based on trigonometric basis expansions.
- Theoretical proofs of uniform convergence and stochastic bounds on approximation accuracy.
- A non-recursive algorithm to construct balanced approximate k-d trees from distributed data.
- A map-reduce implementation strategy for scalable computation of required statistics.
- Simulation studies demonstrating accuracy and computational scalability on large synthetic datasets.

## About the professor

**William S. Cleveland** — Department of Statistics, Purdue University.

### Research links

- [Faculty/profile page](https://www.stat.purdue.edu/people/faculty/wsc.html)
- [Professor website](https://www.stat.purdue.edu/~wsc)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** k-d trees and parallel median approximation
**The paper assumes:** data structures for multidimensional search, median approximation algorithms, parallel and distributed computation methods
**Already in this field?** Skip this entirely if you already understand k-d trees, median-finding algorithms, and parallel computation frameworks like map-reduce.

To understand the scalable k-d tree construction via parallel median approximation in this paper, a solid grasp of data structures, especially trees and median-finding algorithms, alongside parallel computation concepts is essential. The rigorous course option provides a thorough foundation in data structures and algorithms, including trees and searching, while the fast track offers a concise, focused introduction to parallel and distributed computing concepts relevant to parallel median approximation and map-reduce implementations. Choose the rigorous course for deep algorithmic understanding and the fast track for a quick, practical overview of parallelism in distributed settings.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Data Structure and Algorithms](https://www.youtube.com/playlist?list=PLwJG_rrJclTZ8ksccVDCOAodESaMKsza5) — Raja's Lecture · 22 videos · 8.7h across 22 episodes

**Watch only this:** Watch episodes 7 (Sum of Subset using Backtracking), 8 (Tree Traversal (In-Order, Pre-Order, Post-Order)), 11 (Linear Search and Binary Search DAA), and 13 (Randomized Quick Sort) for about 1.5 hours total — these cover tree traversal, median-related search, and algorithmic techniques relevant to median approximation and k-d trees.

*Why it unblocks this paper:* This course covers fundamental data structures including trees and searching algorithms, which are crucial to understanding k-d trees and median computations. It provides a rigorous algorithmic foundation necessary to grasp the paper's contributions on balanced k-d trees and median approximation.

*If you want all of it:* 8.7 hours across 22 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CS3006 - Parallel and Distributed Computing ( PDC )](https://www.youtube.com/playlist?list=PLGhRJyn7JbPOvy3xYOcfGaD2GSzoIKLnr) — NextGen Learners · 7 videos · 0.8h across 7 episodes

**Watch only this:** Watch episodes 1 through 4 (about 24 minutes total) covering basic communication patterns in linear arrays, meshes, and binary trees — these provide essential background on parallel computation structures used in the paper's algorithm.

*Why it unblocks this paper:* This short playlist introduces core concepts of parallel and distributed computing, including communication patterns and parallel architectures, which are directly relevant to understanding the map-reduce implementation and parallel median approximation in the paper.

*If you want all of it:* 0.8 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on scalable k-d trees for distributed data, start with foundational concepts including the MapReduce programming model, basis expansions for function approximation, k-d tree data structures, and high-dimensional data indexing and search. These prerequisites provide the computational, mathematical, and data structural background necessary to grasp the paper's contributions. Finally, focus on the core concept of the paper itself, emphasizing the authors' approach to scalable k-d trees and their parallel median approximation algorithm.

### Map-reduce programming model *(prerequisite)*
MapReduce is a key parallel computation framework that enables scalable statistic calculations in distributed environments. Understanding MapReduce is essential to appreciate how the paper achieves parallel computation of median approximations and scalable k-d tree construction.

*How the paper uses it:* The paper uses MapReduce to compute statistics in parallel for median approximation in distributed data.

▶ [Lecture 23: MapReduce-Tutorial](https://www.youtube.com/watch?v=ENYSofxVJ1U) — Cloud Computing · 39:15 · 9y ago

### Basis expansions for function approximation *(prerequisite)*
The paper's novel median approximation algorithm relies on approximating indicator functions via trigonometric basis expansions. Learning about uniform convergence and function approximation through basis expansions provides the mathematical foundation for this approach.

*How the paper uses it:* The authors approximate medians using a convergent basis expansion of indicator functions.

▶ [Lecture 19a: Math. Analysis - Uniform convergence](https://www.youtube.com/watch?v=9VD3ds63K1w) — University of Nottingham · 21:54 · 14y ago

### k-d tree data structures *(prerequisite)*
K-d trees are fundamental data structures for organizing multi-dimensional data, widely used in nearest neighbor search and clustering. A solid understanding of k-d tree construction and properties is necessary to appreciate the paper's contributions to scalable and balanced k-d tree construction.

*How the paper uses it:* The paper proposes a scalable algorithm to construct balanced k-d trees for large distributed datasets.

▶ [KD Tree Part 2 | What is Binary Search Tree and Balanced Binary Tree | K D Tree Data Structure](https://www.youtube.com/watch?v=5W62Q7s5evk) — Binod Suman Academy · 9:22 · 7y ago

### High-dimensional data indexing and search *(prerequisite)*
High-dimensional data indexing and nearest neighbor search are critical contexts motivating scalable k-d tree construction. Understanding challenges and existing approaches in this area helps situate the paper's contributions within broader data analysis tasks.

*How the paper uses it:* The paper addresses scalable k-d tree construction to enable efficient nearest neighbor and clustering tasks on big distributed data.

▶ [Ilya Razenshteyn. Scalable Nearest Neighbor Search for Optimal Transport](https://www.youtube.com/watch?v=tCNFR7dFzVE) — Georgetown Computer Science Colloquium · 59:27 · 6y ago

### Scalable k-d trees for distributed data (Paper authors talk) *(paper-talk search result; attribution unverified)*
This section focuses on the core concept of the paper: scalable k-d tree construction using parallel median approximation. The best available video is a university lecture covering k-d trees and related data structures, providing a rigorous academic perspective relevant to the paper's method.

*How the paper uses it:* The paper's core contribution is a novel parallel median approximation and non-recursive balanced k-d tree construction for distributed data.

▶ [Machine Learning Lecture 28 "Ball Trees / Decision Trees" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=E1_WCdUAtyE) — Kilian Weinberger · 48:59 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand scalable k-d trees for distributed data, start by learning what k-d trees are and how they organize multi-dimensional data efficiently. Next, grasp the MapReduce programming model, which enables parallel computation on distributed datasets. Then, explore distributed median approximation algorithms, crucial for efficiently splitting data in parallel. Finally, dive into the paper's core method of approximating medians using basis expansions, which underpins their scalable k-d tree construction.

### k-d tree data structures *(prerequisite)*
K-d trees are data structures that organize points in multi-dimensional space by recursively partitioning the space with axis-aligned splits. They enable efficient queries like nearest neighbor search by reducing the search space. Understanding how balanced k-d trees are constructed and how they partition data is fundamental to grasping the paper's scalable approach.

*How the paper uses it:* The paper builds balanced approximate k-d trees to index large distributed datasets efficiently.

▶ [K-d Trees - Computerphile](https://www.youtube.com/watch?v=BK5x7IUTIyU) — Computerphile · 13:20 · 4y ago

### Map-reduce programming model *(prerequisite)*
MapReduce is a parallel programming model that processes large datasets by mapping data into key-value pairs and then reducing them to aggregate results. It enables scalable distributed computation by dividing work across many machines. This model is essential for computing statistics like approximate medians in parallel on big data.

*How the paper uses it:* The paper uses MapReduce to compute statistics for median approximation in a distributed environment.

▶ [What is MapReduce?](https://www.youtube.com/watch?v=tHuca-_xGdA) — TutorialsPoint · 8:34 · 7y ago

### Distributed median approximation algorithms
Exact median computation is challenging in distributed settings due to data size and communication costs. Approximate median algorithms use parallel computations to estimate medians efficiently. Understanding these algorithms helps appreciate how the paper achieves scalable median approximations needed for balanced splits.

*How the paper uses it:* The paper proposes a novel parallel median approximation algorithm to enable scalable k-d tree construction.

▶ [What is Median of Medians algorithm for Selection Problem?](https://www.youtube.com/watch?v=BA222oONWco) — Idea Behind · 17:28 · 3y ago

### Basis expansions for function approximation
Basis expansions approximate complex functions by combining simpler basis functions, such as trigonometric functions. This mathematical tool allows the paper to approximate indicator functions that define medians, enabling efficient parallel computation of median statistics.

*How the paper uses it:* The paper uses trigonometric basis expansions to approximate indicator functions for median estimation.

▶ [Linear combinations, span, and basis vectors | Chapter 2, Essence of linear algebra](https://www.youtube.com/watch?v=k7RM-ot2NWY) — 3Blue1Brown · 9:59 · 10y ago

## Already in your library

- [Taylor series | Chapter 11, Essence of calculus](https://www.youtube.com/watch?v=3d6DsjIBzJ4) — also for: Trace reconstruction from local statistical queries (Chin Ho Lee)
- [Approximate nearest neighbor search in high dimensions – Piotr Indyk – ICM2018](https://www.youtube.com/watch?v=cn15P8vgB1A) — also for: A Survey on Locality Sensitive Hashing Algorithms and their Applications (Parth Nagarkar)
- [Lec-7: kNN Classification with Real Life Example | Movie Imdb Example | Supervised Learning](https://www.youtube.com/watch?v=O1nWXTXcCwI) — also for: Deepfake Detection: A Systematic Literature Review (Andrew H. Sung)
- [L-4.10: Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method](https://www.youtube.com/watch?v=Gd92jSu_cZk) — also for: Resource-Aware Intrusion Detection in Infrastructure Networks: A Game-Theoretic Approach (Guoliang Xue)
- [Lec-8: Naive Bayes Classification Full Explanation with ...](https://www.youtube.com/watch?v=GBMMtXRiQX0) — also for: Scaling the Explanation of Multi-Class Bayesian Network Classifiers (Adnan Darwiche)
- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's scalable approximate median algorithm and distributed k-d tree construction. The beginner project reproduces a core median approximation mechanism on synthetic data using your existing skills. The intermediate project implements the full approximate k-d tree construction on a moderate dataset, comparing balance metrics against a baseline. The advanced project extends the method by exploring adaptive approximation parameter selection to address a key limitation noted in the paper.

### Beginner — Approximate Median Computation via Basis Expansion
*Effort: a weekend, ~8 hours*

You build a standalone implementation of the paper's parallel median approximation algorithm using trigonometric basis expansions on a synthetic 1D dataset scaled to (0,1). You compute the sequence of basis statistics and approximate the median, then visualize the approximation error compared to the exact median.

**Why it shows you understood the paper:** This project shows you understand the core mathematical mechanism behind the approximate median computation, including basis expansions and their parallelizable statistics, which is fundamental to the paper's contribution.

**Grounded in:** A novel parallel median approximation algorithm based on trigonometric basis expansions.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic 1D data uniformly sampled and scaled to (0,1) to match the paper's assumptions.

**Build it:**

1. Generate a synthetic 1D dataset of size ~10,000 scaled to (0,1).
2. Implement the trigonometric basis functions and compute the sequence of statistics as described in the paper.
3. Use the computed statistics to approximate the median of the dataset.
4. Calculate and plot the approximation error against the exact median.
5. Write a README explaining the algorithm and showing results.

**Ships as:** A Jupyter notebook and scripts demonstrating median approximation accuracy with plots and explanations.

**Stretch goal:** Add parallel computation simulation using Python multiprocessing or joblib to mimic map-reduce steps.

### Intermediate — Distributed Approximate k-d Tree Construction
*Effort: 2 weekends, ~20 hours*

You implement the paper's non-recursive approximate k-d tree construction algorithm on a moderate synthetic multidimensional dataset scaled to (0,1). You compute approximate medians using the basis expansion method at each split and build the tree in a single pass. You compare the balance of leaf node sizes against a baseline k-d tree built with exact medians computed locally.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the full scalable k-d tree construction algorithm, including the approximate median computation and non-recursive tree building, and to evaluate the balance property central to the paper's claims.

**Grounded in:** A non-recursive algorithm to construct balanced approximate k-d trees from distributed data.

**Tech stack:** Python 3.11, NumPy, scikit-learn (for baseline k-d tree), Matplotlib

**Data:** Synthetic multidimensional data (e.g., 5D) uniformly sampled and scaled to (0,1), simulating distributed data.

**Build it:**

1. Generate a synthetic 5-dimensional dataset of size ~50,000 scaled to (0,1).
2. Implement the approximate median computation from the beginner project as a function.
3. Implement the non-recursive k-d tree construction using approximate medians at each split.
4. Build a baseline exact median k-d tree locally using scikit-learn's KDTree or similar.
5. Compare leaf node sizes and plot distributions to evaluate balance.
6. Document the implementation, comparison results, and insights.

**Ships as:** A Python package or scripts with README showing approximate k-d tree construction and balance comparison plots.

**Stretch goal:** Simulate a map-reduce style parallel computation of basis statistics using multiprocessing to mimic distributed computation.

### Advanced — Adaptive Approximation Parameter Selection for Scalable k-d Trees
*Effort: 3+ weeks*

You extend the approximate k-d tree construction by implementing an adaptive strategy to select the approximation parameter J at each tree depth or node, balancing accuracy and computational cost. You evaluate this adaptive method on synthetic data with varying correlation structures, measuring balance and runtime, addressing the paper's limitation of error propagation at deeper levels.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension of the trade-offs in approximation accuracy and computational cost, and the ability to innovate on the method for practical improvements.

**Grounded in:** Optimizing approximation parameters to balance speed and accuracy in practice.

**Tech stack:** Python 3.11, NumPy, Matplotlib, multiprocessing or PySpark (optional for parallelism)

**Data:** Synthetic multidimensional datasets with controlled correlation structures, scaled to (0,1).

**Build it:**

1. Reimplement the approximate k-d tree construction from the intermediate project.
2. Design and implement an adaptive scheme to vary the approximation parameter J based on tree depth or local data properties.
3. Generate synthetic datasets with different correlation levels to test the method.
4. Measure and plot balance metrics and runtime against fixed-J baselines.
5. Analyze the trade-offs and document findings in a detailed report.
6. Optionally, implement parallel computation of statistics to demonstrate scalability.

**Ships as:** A comprehensive repository with code, adaptive algorithm implementation, evaluation scripts, and a detailed README/report discussing results and trade-offs.

**Stretch goal:** Apply the adaptive method to a real-world large dataset stored in a distributed environment (e.g., Spark) if accessible.

_The paper does not provide released code or datasets; all implementations must be reimplemented from the paper's descriptions and tested on synthetic data scaled to (0,1) as per the paper's assumptions._
