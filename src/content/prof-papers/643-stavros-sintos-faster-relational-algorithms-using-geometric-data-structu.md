---
title: "643 · Faster Relational Algorithms Using Geometric Data Structures — Stavros Sintos"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stavros-sintos"
source_hash: "e60f532a30e5daafad794b88efdc7b33675e7f9c5e8198df995be897117d7a5f"
sequence: 643
generator: "outreach-garden: managed"
---

# 643 · Faster Relational Algorithms Using Geometric Data Structures

## At a glance

- **Professor:** Stavros Sintos
- **Institution:** University of Illinois at Chicago
- **Paper:** [Faster Relational Algorithms Using Geometric Data Structures](https://arxiv.org/pdf/2603.11402)
- **Authors:** Aryan Esmailpour, Stavros Sintos
- **Year:** 2026

## Paper overview

This paper introduces a new framework and data structure called the RBBD tree to efficiently perform optimization tasks like clustering directly on relational data without fully materializing expensive join results. It adapts geometric data structures to relational databases, enabling faster algorithms with strong approximation guarantees for problems such as k-center, k-median, and k-means clustering.

### Why it matters

**Research problem:** Optimization problems such as clustering over relational data are computationally expensive due to the large size of join outputs needed to access full datasets. Existing methods either materialize large joins or use specialized algorithms with high runtime or approximation costs.

**Why it matters:** Relational data is ubiquitous in real-world applications and databases. Efficiently performing machine learning and optimization tasks directly on relational data without costly join materialization is crucial for scalability and practical deployment.

**Key contributions:**

- Introduction of the RBBD tree, a randomized BBD tree variant for relational data enabling efficient on-the-fly construction.
- Development of relational oracles for counting, sampling, and reporting tuples within geometric regions without full join materialization.
- Design of faster relational algorithms for k-center, k-median, and k-means clustering with improved runtime linear in k and database size N.
- Extension of the framework to handle mixed numerical and categorical attributes and cyclic join queries.
- Application of the framework to other optimization problems like diversity maximization and fairness-aware selection.

## About the professor

**Stavros Sintos** — Assistant Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: design of efficient algorithms for problems in databases, data mining, and computational geometry

### Research links

- [Faculty/profile page](https://sites.google.com/view/stavros-sintos/home)
- [CV](https://drive.google.com/file/d/1jHUFNPDbWH9U_Mu7hiM9O56r4IqhAf42/view?usp=sharing)
- [papers](https://sites.google.com/view/stavros-sintos/publica)
- [students](https://sites.google.com/view/stavros-sintos/team)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Geometry
**The paper assumes:** geometric data structures, spatial partitioning trees, approximation algorithms for clustering, randomized geometric algorithms
**Already in this field?** Skip this entirely if you already understand geometric data structures like BBD trees and their use in clustering and approximation algorithms.

To understand the paper's core contributions on faster relational algorithms using geometric data structures like the RBBD tree, a solid grasp of computational geometry—especially spatial data structures and geometric approximation algorithms—is essential. The rigorous course option offers a comprehensive university-level lecture series covering foundational and advanced topics in computational geometry, ideal for deep theoretical understanding. The fast track provides a concise, focused playlist with clear, intuition-driven explanations of key computational geometry concepts, suitable for quickly gaining the necessary background without a heavy time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CENG 773 - Computational Geometry](https://www.youtube.com/playlist?list=PLuiPz6iU5SQ8W6v1F5OgogHel4T6KjKob) — METUOpenCourseWare · 29 videos · 22.8h across 29 episodes

**Watch only this:** Lectures 1.1 through 5.3 (first 12 episodes), about 9.5 hours — covering foundational concepts, spatial data structures, and geometric algorithms necessary for grasping the paper's approach.

*Why it unblocks this paper:* This METUOpenCourseWare Computational Geometry course covers fundamental and advanced topics including spatial data structures and geometric algorithms, directly relevant to understanding the RBBD tree and geometric clustering algorithms in the paper.

*If you want all of it:* All 29 episodes, about 22.8 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Geometry](https://www.youtube.com/playlist?list=PLTZbNwgO5ebqdDy16sKYjmfCzkzoS0fxN) — saurabhschool · 6 videos · 1.1h across 6 episodes

**Watch only this:** All 6 episodes, about 1.1 hours — covering essential computational geometry concepts relevant to the paper's geometric approach.

*Why it unblocks this paper:* This short playlist by saurabhschool provides clear, concise explanations of core computational geometry concepts like closest pair, convex hull, and line segment intersection, giving a quick yet solid intuition foundation for the geometric data structures and algorithms used in the paper.

*If you want all of it:* Same as minimum watch, 1.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Faster Relational Algorithms Using Geometric Data Structures,' start by building foundational knowledge on geometric data structures and clustering algorithms, as these underpin the RBBD tree framework. Next, gain insight into relational join sampling techniques essential for the on-the-fly construction of the RBBD tree. Finally, focus on the core concept by watching the authors' own talk presenting their new RBBD tree framework and relational algorithms, which directly explains their novel contributions and approach.

### geometric data structures lecture *(prerequisite)*
Understanding geometric data structures like BBD trees is crucial since the RBBD tree is a randomized variant adapted for relational data. This foundational knowledge helps grasp how geometric queries are structured and processed efficiently.

*How the paper uses it:* The RBBD tree is a randomized variant of the BBD tree adapted for relational data.

▶ [Lecture - 6 Trees](https://www.youtube.com/watch?v=tORLeHHtazM) — nptelhrd · 18 yr ago

### clustering algorithms lecture *(prerequisite)*
The paper applies geometric data structures to speed up classical clustering problems such as k-center, k-median, and k-means. Understanding these clustering algorithms and their geometric interpretations is essential to appreciate the improvements presented.

*How the paper uses it:* The paper designs faster relational algorithms for k-center, k-median, and k-means clustering.

▶ [Lecture 6: A simple K-center clustering algorithm](https://www.youtube.com/watch?v=Hgt4AmcRWAk) — Rahul Saladi · 29:41

### RBBD tree talk
This is the authors' own presentation on their new RBBD tree framework and relational algorithms, providing direct insight into their approach, theoretical guarantees, and applications. Watching this talk offers the most precise and in-depth understanding of the paper's core contributions.

*How the paper uses it:* Direct source for understanding the authors' presentation of their new RBBD tree framework.

▶ [https://www.youtube.com › watch?v=_gRShbzKWQ0](https://www.youtube.com/watch?v=_gRShbzKWQ0) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of relational joins and sampling, which are crucial for handling large relational data without full join materialization. Next, grasp geometric data structures like BBD trees, as the paper adapts these for relational data. Then, study classical clustering algorithms to appreciate the optimization problems addressed. Finally, explore the core concept of the RBBD tree and how geometric queries are transformed into efficient relational queries to speed up clustering and other tasks.

### relational join sampling lecture *(prerequisite)*
Relational joins combine data from multiple tables, but materializing full joins can be expensive. Sampling and counting techniques over joins allow efficient approximate access to data subsets without full computation, which is essential for on-the-fly data structure construction in relational settings.

*How the paper uses it:* The RBBD tree construction relies on efficient sampling and counting oracles over relational joins to avoid full join materialization.

▶ [JOINS in Oracle | Oracle SQL Tutorial Videos | Mr.Vijay Kumar](https://www.youtube.com/watch?v=UF8JjOS_RK4) — Naresh i Technologies · 13:14 · 9 yr ago

### geometric data structures lecture *(prerequisite)*
Geometric data structures like BBD trees organize spatial data to enable fast queries such as nearest neighbor or range searches. Understanding these trees provides intuition on how geometric algorithms efficiently handle large datasets by hierarchical partitioning.

*How the paper uses it:* The RBBD tree is a randomized variant of the BBD tree adapted to relational data for efficient geometric query simulation.

▶ [Lecture - 6 Trees](https://www.youtube.com/watch?v=tORLeHHtazM) — nptelhrd · 18 yr ago

### clustering algorithms lecture *(prerequisite)*
Clustering algorithms like k-center, k-median, and k-means group data points to optimize certain criteria. Knowing these classical algorithms helps understand the optimization problems the paper accelerates using relational geometric data structures.

*How the paper uses it:* The paper designs faster relational algorithms for k-center, k-median, and k-means clustering using the RBBD tree framework.

▶ [Lecture 6: A simple K-center clustering algorithm](https://www.youtube.com/watch?v=Hgt4AmcRWAk) — Rahul Saladi · 29:41

### RBBD tree talk
The RBBD tree is a novel data structure that builds on BBD trees but constructs nodes on-the-fly using relational sampling and counting, enabling efficient geometric queries over relational data without full join materialization.

*How the paper uses it:* This is the core contribution of the paper, introducing the RBBD tree framework for faster relational algorithms.

▶ [https://www.youtube.com › watch?v=_gRShbzKWQ0](https://www.youtube.com/watch?v=_gRShbzKWQ0) — YouTube result via DuckDuckGo

## Already in your library

- [6. Binary Trees, Part 1](https://www.youtube.com/watch?v=76dhtgZt38A) — also for: Verifying the Correctness of Analytic Query Results (Ying Cai)
- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)
- [K Means Clustering Algorithm | K Means Solved Numerical Example Euclidean Distance by Mahesh Huddar](https://www.youtube.com/watch?v=KzJORp8bgqs) — also for: Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation (Wu-chi Feng)
- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the RBBD tree framework and relational clustering algorithms introduced in the paper. The beginner project focuses on implementing a simplified on-the-fly RBBD tree construction for relational data sampling. The intermediate project reimplements the relational k-center clustering algorithm using the RBBD tree on a real-world public dataset, comparing runtime and approximation quality against a naive baseline. The advanced project extends the framework to handle cyclic join queries by implementing the fractional hypertree width approach and evaluating its impact on runtime and approximation.

### Beginner — Simplified RBBD Tree Construction for Relational Sampling
*Effort: a weekend, ~8 hours*

You build a simplified version of the RBBD tree that performs on-the-fly construction using sampling and counting oracles over a small synthetic relational join. This project implements the core idea of maintaining only necessary parts of the tree without full join materialization, simulating geometric queries via sampling.

**Why it shows you understood the paper:** This project demonstrates you grasp the key innovation of the RBBD tree's randomized on-the-fly construction and how sampling oracles replace full join materialization, a central contribution of the paper.

**Grounded in:** Introduction of the RBBD tree, a randomized BBD tree variant for relational data enabling efficient on-the-fly construction.

**Tech stack:** Python 3.11, Jupyter Notebook, SQLite (for small relational data)

**Data:** Synthetic relational tables with a small number of tuples designed to simulate a join query; no external dataset required.

**Build it:**

1. Create small synthetic relational tables with numerical attributes to simulate a join.
2. Implement simple counting and uniform sampling oracles over the join without materializing it.
3. Implement an RBBD tree node structure that uses these oracles to perform fair splits and randomized centroid shrink procedures on-the-fly.
4. Demonstrate querying the tree for approximate nearest neighbors or range queries using the sampling oracles.
5. Visualize the tree construction steps and sampled points to illustrate the on-the-fly expansion.

**Ships as:** A Python notebook and scripts showing the RBBD tree construction on synthetic relational data, with visualizations and explanations of sampling-based query simulation.

**Stretch goal:** Add support for categorical attributes by extending sampling oracles to handle mixed attribute types as described in the paper.

### Intermediate — Relational k-Center Clustering with RBBD Tree on Kaggle Survey Data
*Effort: 2 weekends, ~20 hours*

You implement the relational k-center clustering algorithm using the RBBD tree framework on the Kaggle Machine Learning and Data Science Survey 2018 dataset (used as a proxy for relational data). You compare runtime and clustering quality against a naive baseline that materializes the join and runs classical k-center clustering.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core relational clustering algorithm, apply it to real-world data, and empirically verify the runtime improvements and approximation guarantees claimed.

**Grounded in:** Relational k-center clustering algorithm with O(kN) runtime and (1+ε)γ-approximation, improving over previous O(k^2 N) methods.

**Tech stack:** Python 3.11, Pandas, NumPy, scikit-learn (for baseline clustering), Jupyter Notebook

**Data:** Kaggle Machine Learning and Data Science Survey 2018 dataset [https://www.kaggle.com/datasets/kaggle/kaggle-survey-2018] used as a substitute for relational data with join-like structure.

**Build it:**

1. Download and preprocess the Kaggle survey dataset to simulate a relational join scenario with numerical attributes.
2. Implement relational counting and sampling oracles over the dataset without full join materialization.
3. Implement the RBBD tree construction and the relational k-center clustering algorithm as described in the paper.
4. Implement a baseline k-center clustering that materializes the full join (or full dataset) and runs classical Gonzalez algorithm.
5. Compare runtime and clustering quality (approximation ratio) between your RBBD tree-based method and the baseline.
6. Document results and discuss how the RBBD tree improves runtime while maintaining approximation.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/kaggle/kaggle-survey-2018> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code and Jupyter notebooks demonstrating relational k-center clustering on real data, including runtime and quality comparisons with baseline.

**Stretch goal:** Extend the implementation to handle mixed numerical and categorical attributes as per the paper's extension.

### Advanced — Extending RBBD Tree Framework to Cyclic Join Queries with Fractional Hypertree Width
*Effort: 3+ weeks*

You extend the RBBD tree framework to handle cyclic join queries by implementing the conversion to acyclic queries with fractional hypertree width overhead as described in the paper. You evaluate the impact on runtime and approximation quality on synthetic cyclic join data and discuss practical overheads.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the theoretical framework and ability to implement and evaluate advanced relational query transformations.

**Grounded in:** The approach assumes acyclic join queries for the main theoretical guarantees; cyclic queries require conversion to acyclic forms with overhead.

**Tech stack:** Python 3.11, NetworkX (for hypergraph modeling), NumPy, Jupyter Notebook

**Data:** Synthetic relational datasets with cyclic join queries generated to test fractional hypertree width transformations; no external dataset required.

**Build it:**

1. Model cyclic join queries as hypergraphs using NetworkX or similar libraries.
2. Implement fractional hypertree width decomposition to convert cyclic queries into acyclic ones.
3. Adapt the RBBD tree construction and relational oracles to work on the transformed acyclic queries.
4. Generate synthetic cyclic relational data to test the implementation.
5. Measure runtime overhead and approximation quality compared to acyclic baseline.
6. Document challenges, overheads, and potential optimizations.

**Ships as:** A GitHub repository with code, notebooks, and detailed documentation showing RBBD tree application to cyclic queries with fractional hypertree width, including performance evaluation.

**Stretch goal:** Integrate the implementation with a lightweight relational database or query engine to test on more realistic schemas.
