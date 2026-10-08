---
title: "611 · LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences — Dan Suciu"
date: 2026-09-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dan-suciu"
source_hash: "77e90876d4573b68cde7dcd0d6834a4ace1679882bcb9b3819002e46b40e49cb"
sequence: 611
generator: "outreach-garden: managed"
---

# 611 · LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences

## At a glance

- **Professor:** Dan Suciu
- **Institution:** University of Washington
- **Paper:** [LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences](https://arxiv.org/pdf/2502.05912)
- **Authors:** Haozhe Zhang, Christoph Mayer, Mahmoud Abo Khamis, Dan Olteanu, Dan Suciu
- **Year:** 2025

## Paper overview

This paper introduces LpBound, a new method to estimate the maximum possible size of database query results without running the query. It uses advanced mathematical statistics called ℓp-norms on data frequency sequences to provide guaranteed upper bounds on query output sizes. LpBound is more accurate than traditional methods, supports complex queries including group-by and cyclic joins, and runs efficiently enough to be practical in real systems.

### Why it matters

**Research problem:** Cardinality estimation (CE) aims to predict the size of a query's output using only precomputed statistics, which is crucial for query optimization. Existing CE methods often make simplifying assumptions leading to inaccurate estimates, especially for complex queries with many joins and predicates. Traditional estimators lack theoretical guarantees and can significantly degrade database performance.

**Why it matters:** Accurate cardinality estimation is vital for database systems to choose efficient query plans, allocate resources properly, and avoid performance bottlenecks. Poor CE leads to suboptimal query execution, wasted memory, and inefficient use of distributed systems. Improving CE accuracy with guarantees can enhance database reliability and speed.

**Key contributions:**

- Introduction of LpBound, a pessimistic cardinality estimator using ℓp-norms of degree sequences with theoretical guarantees.
- Extension of prior theoretical bounds to support group-by queries and cyclic queries.
- Development of practical optimizations (LPBerge for Berge-acyclic queries and LPflow for general queries) to compute bounds efficiently.
- Incorporation of common database data structures (MCVs and histograms) to handle selection predicates including equality and range.
- Extensive experimental evaluation demonstrating orders of magnitude accuracy improvements over traditional estimators with practical runtime and space usage.

## About the professor

**Dan Suciu** — Microsoft Endowed Professor, Computer Science & Engineering, University of Washington.

Research interests: data management, formal theory, semistructured data, probabilistic databases, parallel query evaluation, causal reasoning in databases, information theory for cardinality estimation, recursive query

### Research links

- [Faculty/profile page](https://homes.cs.washington.edu/~suciu)
- [Resolved homepage](https://homes.cs.washington.edu/~suciu/bio.html)
- [Lab website](http://db.cs.washington.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=SIxd6jgAAAAJ)
- [Semantic Scholar](https://www.semanticscholar.org/author/Dan-Suciu/144823759)
- [DBLP](https://dblp.uni-trier.de/pid/s/DanSuciu.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization and ℓp-Norms
**The paper assumes:** convex optimization, linear programming, ℓp-norms and their properties, degree sequences in data, Shannon information inequalities
**Already in this field?** Skip this entirely if you already understand convex optimization techniques, ℓp-norm mathematics, and their application in constrained optimization problems.

To deeply understand the LpBound paper's core methodology, which relies on ℓp-norms and linear programming formulations constrained by Shannon information inequalities, a solid grasp of convex optimization and ℓp-norm properties is essential. The rigorous course option offers a comprehensive university-level lecture series on convex optimization by a leading expert, ideal for thorough mastery. The fast track provides a shorter, focused subset of the same authoritative series, giving a practical and efficient introduction to the key concepts without requiring a full course commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 7, about 9.2 hours — covering the introduction to convex sets, functions, and norms including ℓp-norms, and the basics of convex optimization and linear programming necessary to understand the paper's approach.

*Why it unblocks this paper:* This is the Stanford EE364A Convex Optimization I course by Stephen Boyd, a foundational and authoritative series that covers convex optimization theory and techniques, including ℓp-norms and linear programming, directly relevant to understanding the theoretical guarantees and LP formulation in LpBound.

*If you want all of it:* All 18 lectures, approximately 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Optimization Stanford EE364A Stephen Boyd](https://www.youtube.com/playlist?list=PL4VTBKsv-JG1x37j0tGpx7b2DnDnU2OVr) — Adrian Staniec · 6 videos · 8.0h across 6 episodes

**Watch only this:** Lectures 1 through 4, about 5.3 hours — these cover the fundamental concepts of convex sets, functions, and norms including ℓp-norms, and an introduction to convex optimization.

*Why it unblocks this paper:* This shorter playlist from Adrian Staniec covers key lectures from the same Stanford EE364A Convex Optimization I course, providing a concise and focused introduction to convex optimization and ℓp-norms, suitable for quickly grasping the essential concepts behind LpBound's linear programming formulation.

*If you want all of it:* All 6 lectures, approximately 8.0 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LpBound paper, start with foundational knowledge on cardinality estimation in databases and the mathematical framework of linear programming combined with Shannon information inequalities, as these underpin the problem formulation and solution approach. Next, study database statistics, particularly histograms and most common values, which LpBound adapts for predicate handling. Then, grasp the core mathematical tool of ℓp-norms of degree sequences used to compute the bounds. Finally, watch the authors' own talk or the closest advanced talk available to get direct insights into the novel LpBound method and its theoretical guarantees.

### Cardinality estimation in databases *(prerequisite)*
This concept covers the fundamental problem LpBound addresses: predicting query output sizes accurately to optimize query plans. Understanding traditional cardinality estimation methods and their limitations provides context for why LpBound's pessimistic, guaranteed bounds are significant.

*How the paper uses it:* LpBound improves cardinality estimation accuracy with theoretical guarantees, addressing core challenges in this area.

▶ [#13 - Query Cost Models: Cardinality Estimation (CMU Optimize!)](https://www.youtube.com/watch?v=Kf9Nj3zI9WI) — CMU Database Group · 1:11:38 · 1 year ago

### Linear programming with Shannon information inequalities *(prerequisite)*
LpBound formulates the cardinality bounding problem as a linear program constrained by data statistics and Shannon information inequalities. Understanding linear programming basics and the role of information inequalities is essential to grasp how LpBound computes tight bounds.

*How the paper uses it:* The paper's core bounding technique relies on solving a linear program with Shannon information inequality constraints.

▶ [15. Linear Programming: LP, reductions, Simplex](https://www.youtube.com/watch?v=WwMz2fJwUCg) — MIT OpenCourseWare · 1:22:27 · 10 years ago

### Database statistics: histograms and most common values *(prerequisite)*
Histograms and Most Common Values (MCVs) are standard database statistics that LpBound adapts by incorporating ℓp-norms to handle selection predicates effectively. Understanding these data structures is crucial to appreciate how LpBound integrates with existing database systems.

*How the paper uses it:* LpBound uses MCVs and histograms with ℓp-norms to support selection predicates including equality and range.

▶ [Statistics Lecture 2.2:  Creating Frequency Distribution and Histograms](https://www.youtube.com/watch?v=AbHn39y8eUo) — Professor Leonard · 1:07:24 · 14 years ago

### ℓp-norms of degree sequences
The ℓp-norms of degree sequences are the mathematical foundation of LpBound's estimation method, capturing frequency distributions of attribute values to compute guaranteed upper bounds on query sizes. A solid understanding of ℓp-norms and their properties is essential to grasp the paper's novel approach.

*How the paper uses it:* LpBound's key innovation is using ℓp-norms of degree sequences as input statistics for cardinality bounding.

▶ [Lecture 4 (Part 1): p-summable sequences, l^p Space, Young's and Holder's inequalities](https://www.youtube.com/watch?v=fUt6srX_SJM) — Sukkur IBA University- Mathematics · 30:27 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the fundamental concepts needed to understand LpBound, a novel method for pessimistic cardinality estimation in databases. Start with the basics of cardinality estimation in databases to grasp the problem context, then learn about database statistics like histograms and most common values which LpBound adapts for predicate handling. Next, understand linear programming and Shannon information inequalities as the mathematical framework behind LpBound's bounding approach. Finally, explore ℓp-norms of degree sequences, the core mathematical tool LpBound uses to compute guaranteed upper bounds on query output sizes.

### Cardinality estimation in databases *(prerequisite)*
Cardinality estimation predicts the number of rows a database query will return, which is crucial for query optimization and efficient execution. Understanding this helps appreciate why accurate estimation methods like LpBound are important.

*How the paper uses it:* LpBound addresses the fundamental problem of cardinality estimation by providing guaranteed upper bounds on query output sizes.

▶ [Database Cardinality Explained in 12 Minutes!](https://www.youtube.com/watch?v=PNCfDV2EL_o) — FrizClips · 11:52 · 7 years ago

### Database statistics: histograms and most common values *(prerequisite)*
Histograms and most common values (MCVs) are common data structures used to summarize attribute value distributions in databases. These statistics help estimate selectivity of predicates and are adapted by LpBound to handle selection predicates effectively.

*How the paper uses it:* LpBound uses MCVs and histograms to incorporate selection predicates into its cardinality bounds.

▶ [Histogram Explained](https://www.youtube.com/watch?v=sC7gjg9g3JU) — cylurian · 13:21 · 13 years ago

### Linear programming with Shannon information inequalities *(prerequisite)*
Linear programming is a mathematical optimization technique to find the best outcome under linear constraints. Shannon information inequalities are constraints derived from information theory that LpBound uses to tighten cardinality bounds.

*How the paper uses it:* LpBound formulates the bounding problem as a linear program constrained by data statistics and Shannon information inequalities.

▶ [15. Linear Programming: LP, reductions, Simplex](https://www.youtube.com/watch?v=WwMz2fJwUCg) — MIT OpenCourseWare · 1:22:27 · 10 years ago

### ℓp-norms of degree sequences
ℓp-norms are mathematical measures of the magnitude of vectors, here applied to degree sequences which represent frequency distributions of attribute values. LpBound leverages these norms to compute guaranteed upper bounds on query output sizes.

*How the paper uses it:* LpBound uses ℓp-norms of degree sequences as core statistics to compute pessimistic cardinality estimates with theoretical guarantees.

▶ [Lecture 4 (Part 1): p-summable sequences, l^p Space, Young's and Holder's inequalities](https://www.youtube.com/watch?v=fUt6srX_SJM) — Sukkur IBA University- Mathematics · 30:27 · 8 years ago

## Already in your library

- [Introduction to Lp Spaces: Hölder's inequality, Minkowski inequality](https://www.youtube.com/watch?v=8XTNAJfsais) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [LpBound: Pessimistic Cardinality Estimation using lp-Norms of Degree Sequences](https://www.youtube.com/watch?v=ys-iQeERav8) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [LpBound in Action: Cardinality Estimation with One-Sided Guarantees](https://www.youtube.com/watch?v=4FVJzUejQCI) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Query Optimization in DBMS | Cost-Based & Rule-Based Examples Explained | Hindi | Pluto Academy](https://www.youtube.com/watch?v=DfRxq1RbrBQ) — also for: DBTuneSuite: An Extendible Experimental Suite to Test the Time Performance of Multi-layer Tuning Options on Database Management Systems (Dennis E. Shasha)
- [14 - Query Planning & Optimization (CMU Intro to Database Systems / Fall 2022)](https://www.youtube.com/watch?v=2c8YwZhXJEw) — also for: DBTuneSuite: An Extendible Experimental Suite to Test the Time Performance of Multi-layer Tuning Options on Database Management Systems (Dennis E. Shasha)
- [Stardog Query Optimiser: Architecture and Cardinality Estimations for Graph Queries (Pavel Klinov)](https://www.youtube.com/watch?v=CzPZRK6mALg) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of LpBound's approach to pessimistic cardinality estimation using ℓp-norms of degree sequences. The beginner project focuses on reproducing a core concept with simple data and tools you know. The intermediate project involves reimplementing the core LpBound method on a small dataset and comparing it to a baseline estimator. The advanced project tackles a stated limitation by extending LpBound to support more complex degree sequences, showing your ability to innovate beyond the paper.

### Beginner — Visualizing ℓp-Norms of Degree Sequences for Simple Joins
*Effort: a weekend, ~8 hours*

You build a small Python script and Jupyter notebook that computes and visualizes ℓp-norms (for p=1,2,∞) of degree sequences derived from simple synthetic join data. You demonstrate how these norms provide upper bounds on join cardinalities in toy examples with equality joins and simple predicates.

**Why it shows you understood the paper:** This project shows you grasp the fundamental mathematical concept behind LpBound — how ℓp-norms of degree sequences relate to cardinality bounds — and can apply it to concrete data, not just theory.

**Grounded in:** LpBound computes a guaranteed upper bound on the size of the query output using simple statistics on the input relations, consisting of ℓp-norms of degree sequences.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Synthetic small join tables you generate yourself to simulate degree sequences.

**Build it:**

1. Generate small synthetic tables with attribute values and frequency counts representing degree sequences.
2. Implement functions to compute ℓp-norms (p=1,2,∞) of these degree sequences.
3. Visualize the degree sequences and their ℓp-norms using matplotlib.
4. Calculate simple upper bounds on join cardinalities using these norms.
5. Write a Jupyter notebook explaining the computations and visualizations.

**Ships as:** A Jupyter notebook with code, plots, and explanations showing ℓp-norm computations on degree sequences and their relation to join size bounds.

**Stretch goal:** Add support for range predicates by simulating histograms and showing how ℓp-norms adapt.

### Intermediate — Reimplementing LpBound Core Estimator on Public Join Data
*Effort: 2 weekends, ~20 hours*

You implement the core LpBound linear programming estimator from the paper using Python and a LP solver. You apply it to a small public join dataset (e.g., a subset of TPC-H or a synthetic join dataset) and compare its cardinality upper bound estimates against a simple traditional estimator like uniform or histogram-based estimation.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's theoretical LP formulation into working code, handle ℓp-norm statistics, and evaluate estimation accuracy compared to baselines, validating the paper's claims practically.

**Grounded in:** The bound is the optimal solution of a linear program whose constraints encode data statistics and Shannon inequalities.

**Tech stack:** Python 3.11, cvxpy or scipy.optimize.linprog, numpy, pandas, matplotlib

**Data:** A small public join dataset such as a subset of TPC-H or a synthetic multi-table join dataset you generate; no authors' code or data is available.

**Build it:**

1. Implement code to compute ℓp-norm statistics from input tables.
2. Formulate the linear program as described in the paper, encoding constraints from ℓp-norms and Shannon inequalities.
3. Use a LP solver (cvxpy or scipy.optimize.linprog) to compute the upper bound estimate.
4. Implement a baseline estimator (e.g., uniform or histogram-based cardinality estimation).
5. Run experiments comparing LpBound estimates to baseline on the dataset.
6. Visualize and report estimation errors and runtime.

**Ships as:** A Python project with scripts and a report notebook showing LpBound LP estimation, baseline comparison, and evaluation metrics on a join dataset.

**Stretch goal:** Extend the implementation to handle group-by queries by incorporating group-by constraints into the LP.

### Advanced — Extending LpBound to Support Complex Degree Sequences
*Effort: 3+ weeks*

You develop an extension of the LpBound method to handle more complex degree sequences beyond simple one-attribute conditioning, addressing a key limitation noted in the paper. You implement this extension, integrate it with the LP formulation, and evaluate it on synthetic or public datasets with multi-attribute degree sequences. You analyze the impact on estimation accuracy and runtime.

**Why it shows you understood the paper:** This project shows you deeply understand LpBound's theoretical framework and can innovate by overcoming a stated limitation, contributing a meaningful extension that could lead to publishable research or further collaboration.

**Grounded in:** The method currently supports only simple degree sequences (one attribute conditioning), limiting some complex statistics.

**Tech stack:** Python 3.11, cvxpy or scipy.optimize.linprog, numpy, pandas, matplotlib

**Data:** Synthetic datasets with multi-attribute degree sequences generated to simulate complex join scenarios; no authors' code or data is available.

**Build it:**

1. Study the paper's LP formulation and limitation regarding simple degree sequences.
2. Design a representation for complex degree sequences involving multiple attributes.
3. Extend the LP constraints to incorporate these complex degree sequences.
4. Implement the extended LP solver and integrate ℓp-norm computations for complex sequences.
5. Generate synthetic datasets with multi-attribute degree sequences for evaluation.
6. Compare estimation accuracy and runtime against the original LpBound implementation on these datasets.
7. Document findings and potential trade-offs.

**Ships as:** A Python codebase and report demonstrating the extended LpBound method with complex degree sequences, including evaluation results and analysis.

**Stretch goal:** Explore integrating the hypertree decomposition based algorithm (LPTD) for arbitrary queries as future work.

_The paper's authors have not released code or datasets for LpBound, so all implementations must be done from the paper's descriptions and use synthetic or publicly available datasets as substitutes._
