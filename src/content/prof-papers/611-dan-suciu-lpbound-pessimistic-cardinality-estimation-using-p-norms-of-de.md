---
title: "611 · LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences — Dan Suciu"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dan-suciu"
source_hash: "c95ee024bcc9bcf14db455d003ad73babc1bcfedf853c276b99f770e00471399"
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

This paper presents LpBound, a new method to estimate the maximum size of query results in databases without running the query. It uses advanced mathematical statistics called ℓp-norms of degree sequences to provide guaranteed upper bounds on query output sizes, improving accuracy and reliability over traditional methods. LpBound works efficiently for complex queries including those with group-by clauses and cyclic joins, and can be integrated into existing database systems.

### Why it matters

**Research problem:** Cardinality estimation (CE) aims to predict the size of a query's output using only precomputed statistics, which is crucial for query optimization. Existing methods often rely on simplifying assumptions leading to inaccurate estimates, especially for complex queries with many joins and predicates. Traditional CE lacks theoretical guarantees and struggles with group-by queries, while learned models face issues of explainability, training time, and generalization.

**Why it matters:** Accurate cardinality estimation is vital for database query optimizers to select efficient query plans. Poor estimates can cause suboptimal plans, leading to slow query execution and inefficient resource usage. Improving CE accuracy with theoretical guarantees can enhance database performance and reliability, especially for complex and cyclic queries common in modern applications.

**Key contributions:**

- Introduction of LpBound, a pessimistic cardinality estimator using ℓp-norms of degree sequences with theoretical one-sided guarantees.
- Extension of previous theoretical bounds to support group-by queries and cyclic queries.
- Development of two polynomial-time optimization algorithms (LPBerge and LPflow) for practical estimation speed.
- Comprehensive experimental evaluation demonstrating orders of magnitude accuracy improvements over traditional estimators with low overhead.

## About the professor

**Dan Suciu** — Microsoft Endowed Professor, Computer Science & Engineering, University of Washington.

Research interests: data management, formal theory applied to novel data management tasks, semistructured data, probabilistic databases, parallel query evaluation, causal reasoning in databases, information theory for cardinality estimation, recursive queries

### Research links

- [Faculty/profile page](https://homes.cs.washington.edu/~suciu)
- [Lab website](http://db.cs.washington.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=SIxd6jgAAAAJ)
- [Semantic Scholar](https://www.semanticscholar.org/author/Dan-Suciu/144823759)
- [DBLP](https://dblp.uni-trier.de/pid/s/DanSuciu.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Information Theory and Linear Programming
**The paper assumes:** information theory fundamentals, entropy and Shannon inequalities, linear programming optimization
**Already in this field?** Skip this entirely if you already understand basic information theory concepts and linear programming formulations in computer science or applied mathematics.

To understand the core mathematical foundations behind LpBound's cardinality estimation method, it is essential to grasp the fundamentals of information theory, especially entropy and Shannon information inequalities, as well as how linear programming can be applied to optimize under such constraints. The rigorous course provides a deep, structured university-level treatment of these concepts, while the fast track offers a concise, example-driven introduction suitable for quickly building intuition and practical understanding. Choose the rigorous course if you want a thorough theoretical grounding; choose the fast track if you need a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Student Lectures - Information Theory](https://www.youtube.com/playlist?list=PL4d5ZtfQonW3iAhXvTYCnoGEeRhxhKHMc) — Oxford Mathematics · 8 videos · 6.9h across 8 episodes

**Watch only this:** Lectures 1 through 6, about 5.1 hours — covering entropy, basic properties of information, codes, typical sequences, optimal codes, and Shannon’s code, which provide the essential theoretical background for the paper's use of information theory.

*Why it unblocks this paper:* This Oxford Mathematics 3rd year student lecture series covers information theory fundamentals including entropy, codes, and Shannon's theorems, which are directly relevant to understanding the information-theoretic constraints and ℓp-norm statistics used in LpBound's linear programming formulation.

*If you want all of it:* All 8 lectures, about 6.9 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Information Theory and Coding (KEC-075)](https://www.youtube.com/playlist?list=PLXbLuD5WNA3IAfhkUkZwADX8qsVRjyy_i) — KK Awasthi EduHub · 15 videos · 5.9h across 15 episodes

**Watch only this:** Episodes 1 through 8, about 3.1 hours — covering definitions and properties of information, entropy, source coding, Huffman coding, mutual information, and Shannon’s channel capacity theorem, which together give a solid intuitive and practical foundation.

*Why it unblocks this paper:* This concise playlist from KK Awasthi EduHub offers clear, example-rich explanations of key information theory concepts such as entropy, source coding, Huffman coding, mutual information, and Shannon's channel capacity theorem, providing an accessible and practical introduction to the core ideas underlying LpBound's approach.

*If you want all of it:* All 15 episodes, about 5.9 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LpBound paper, start with foundational knowledge on cardinality estimation and query optimization in databases, which frame the problem context and challenges LpBound addresses. Next, study linear programming and information theory basics to grasp the mathematical formulation of the estimator. Then, learn about ℓp-norms and degree sequences, the core mathematical tool used by LpBound. Finally, watch the authors' own talk or the closest available advanced seminar to get detailed insights into the novel approach and its contributions.

### cardinality estimation database lecture *(prerequisite)*
Understanding cardinality estimation fundamentals is essential to grasp the problem LpBound addresses, including why accurate estimation is critical for query optimization and the limitations of existing methods. Advanced university lectures provide rigorous coverage of query optimizers and cost models, setting the stage for appreciating LpBound's improvements.

*How the paper uses it:* LpBound improves cardinality estimation accuracy and reliability, so foundational knowledge of cardinality estimation is crucial.

▶ [#15 - Database Query Optimizers Part 1 (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=b53huOGcsZ8) — CMU Database Group · 1:19:40 · 1y ago

### linear programming information theory lecture *(prerequisite)*
The paper formulates the cardinality estimation problem as a linear program constrained by Shannon information inequalities. Understanding linear programming theory and formulation is necessary to follow how LpBound computes guaranteed upper bounds using optimization techniques.

*How the paper uses it:* LpBound's estimation is the optimal solution of a linear program encoding data statistics and information theory constraints.

▶ [Lec-1 Introduction to Linear Programming Formulations](https://www.youtube.com/watch?v=a2QgdDk4Xjw) — nptelhrd · 51:48 · 17y ago

### query optimization group-by cyclic joins lecture *(prerequisite)*
LpBound supports complex queries with group-by clauses and cyclic joins, which are challenging for traditional estimators. Advanced lectures on query planning and optimization provide the necessary background on how such queries are processed and optimized in database systems.

*How the paper uses it:* LpBound extends cardinality estimation to handle group-by and cyclic queries effectively.

▶ [F2023 #14 - Query Planning & Optimization (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=ePGPVJCyCAk) — CMU Database Group · 1:18:54 · 3y ago

### Lp-norms degree sequences lecture
The core mathematical technique in LpBound is the use of ℓp-norms of degree sequences to compute pessimistic cardinality bounds. Advanced lectures on ℓp-norms and functional analysis provide the rigorous mathematical foundation needed to understand this approach.

*How the paper uses it:* LpBound leverages ℓp-norms of degree sequences as the central statistic for its estimation method.

▶ [Lecture 13: Lp Space Theory](https://www.youtube.com/watch?v=BYR1fXW95zY) — MIT OpenCourseWare · 1:23:59 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the LpBound paper, start by learning the fundamentals of cardinality estimation in databases, which explains why predicting query result sizes is important for query optimization. Next, grasp the basics of linear programming and information theory, as LpBound formulates its estimation as a constrained optimization problem. Then, study query optimization concepts focusing on group-by and cyclic joins to appreciate the complexity LpBound handles. Finally, build intuition on ℓp-norms of degree sequences, the core mathematical tool LpBound uses to compute guaranteed upper bounds on query sizes.

### cardinality estimation database lecture *(prerequisite)*
Cardinality estimation predicts how many rows a database query will return, which is crucial for the query optimizer to choose efficient execution plans. Understanding this helps you see why accurate estimation impacts database performance.

*How the paper uses it:* LpBound addresses the cardinality estimation problem by providing guaranteed upper bounds on query output sizes.

▶ [#15 - Database Query Optimizers Part 1 (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=b53huOGcsZ8) — CMU Database Group · 1:19:40 · 1y ago

### linear programming information theory lecture *(prerequisite)*
Linear programming is a method to optimize a linear objective function subject to linear constraints, while information theory provides inequalities that constrain data statistics. Together, they enable formulating and solving problems that find tight bounds under given data constraints.

*How the paper uses it:* LpBound formulates cardinality estimation as a linear program constrained by data statistics and Shannon information inequalities.

▶ [Lec-1 Introduction to Linear Programming Formulations](https://www.youtube.com/watch?v=a2QgdDk4Xjw) — nptelhrd · 51:48 · 17y ago

### query optimization group-by cyclic joins lecture *(prerequisite)*
Query optimization involves strategies to efficiently execute database queries, especially those with complex features like group-by clauses and cyclic joins, which pose challenges for estimation and planning.

*How the paper uses it:* LpBound supports complex queries including those with group-by and cyclic joins, improving estimation accuracy for such workloads.

▶ [F2023 #14 - Query Planning & Optimization (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=ePGPVJCyCAk) — CMU Database Group · 1:18:54 · 3y ago

### Lp-norms degree sequences lecture
ℓp-norms measure the size of vectors or sequences in different ways, generalizing concepts like length or magnitude. Degree sequences count how many connections each element has in a relation, and their ℓp-norms capture important statistical properties used for estimation.

*How the paper uses it:* LpBound uses ℓp-norms of degree sequences as the key statistics to compute guaranteed upper bounds on query result sizes.

▶ [Lecture 8: Norms of Vectors and Matrices](https://www.youtube.com/watch?v=NcPUI7aPFhA) — MIT OpenCourseWare · 49:21 · 7y ago

## Already in your library

- [\[Scheduling seminar\] Zijie Zhou (IEDA, HKUST) | Efficient and Robust LLM Scheduling](https://www.youtube.com/watch?v=obTtEShQKXc) — also for: Learning at the Right Pace: Adaptive Data Scheduling Improves LLM Reinforcement Learning (Alex Szalay)
- [Kernel Density Estimation - Explained](https://www.youtube.com/watch?v=6sGOMbC5xdE) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [LpBound: Pessimistic Cardinality Estimation using lp-Norms of Degree Sequences](https://www.youtube.com/watch?v=ys-iQeERav8) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [LpBound in Action: Cardinality Estimation with One-Sided Guarantees](https://www.youtube.com/watch?v=4FVJzUejQCI) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Lecture 4 (Part 1): p-summable sequences, l^p Space, Young's and Holder's inequalities](https://www.youtube.com/watch?v=fUt6srX_SJM) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Introduction to Lp Spaces: Hölder's inequality, Minkowski inequality](https://www.youtube.com/watch?v=8XTNAJfsais) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Query Optimization in DBMS | Cost-Based & Rule-Based Examples Explained | Hindi | Pluto Academy](https://www.youtube.com/watch?v=DfRxq1RbrBQ) — also for: DBTuneSuite: An Extendible Experimental Suite to Test the Time Performance of Multi-layer Tuning Options on Database Management Systems (Dennis E. Shasha)
- [#15 - Query Planning & Optimization (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=X8EHO8VLeG0) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Stardog Query Optimiser: Architecture and Cardinality Estimations for Graph Queries (Pavel Klinov)](https://www.youtube.com/watch?v=CzPZRK6mALg) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [#13 - Query Cost Models: Cardinality Estimation (CMU Optimize!)](https://www.youtube.com/watch?v=Kf9Nj3zI9WI) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [15. Linear Programming: LP, reductions, Simplex](https://www.youtube.com/watch?v=WwMz2fJwUCg) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [24. Linear Programming and Two-Person Games](https://www.youtube.com/watch?v=feb9j65Iz4w) — also for: A two-step linear programming approach for repeater placement in large-scale quantum networks (Qing Cao)
- [Lecture 12: Introduction to Linear Programming](https://www.youtube.com/watch?v=qKNkP6IfjvY) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Lecture 13: Duality in Linear Programming](https://www.youtube.com/watch?v=oyVZ3rao6M4) — also for: Determining Attributes to Maximize Visibility of Objects (Gautam Das)
- [Intro to Linear Programming](https://www.youtube.com/watch?v=K7TL5NMlKIk) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [CMU Database Systems - 13 Query Optimization (Fall 2018)](https://www.youtube.com/watch?v=uLKzlSO6O1M) — also for: Bolt-on, Verifiable Provenance for LLM-Powered Data Processing (Aditya G. Parameswaran)
- [14 - Query Planning & Optimization (CMU Intro to Database Systems / Fall 2022)](https://www.youtube.com/watch?v=2c8YwZhXJEw) — also for: DBTuneSuite: An Extendible Experimental Suite to Test the Time Performance of Multi-layer Tuning Options on Database Management Systems (Dennis E. Shasha)
- [20 - Query Optimizer Implementation II (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=AywssLlkF1U) — also for: On the Implementations of the BiTemporal RDF Model: An Experimental Approach (Abdullah Uz Tansel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the LpBound paper. The beginner project recreates a core concept visualization using your existing skills. The intermediate project implements the core LpBound method on a public benchmark dataset, comparing it to a baseline estimator. The advanced project extends the method to address one of the paper's stated limitations by implementing a hypertree decomposition-based algorithm for more efficient estimation on cyclic queries.

### Beginner — Visualizing ℓp-Norms of Degree Sequences for Simple Joins
*Effort: a weekend, ~8 hours*

You build a small Python script that computes and visualizes ℓp-norms of degree sequences for simple join graphs constructed from synthetic small relations. The script will generate degree sequences for relations with known join keys, compute ℓ1, ℓ2, and ℓ∞ norms, and plot these norms to illustrate how they relate to join cardinalities.

**Why it shows you understood the paper:** This project shows you understand the fundamental mathematical concept behind LpBound — how ℓp-norms of degree sequences relate to cardinality estimation. A professor would see you grasp the core statistical building block of the paper.

**Grounded in:** LpBound computes a guaranteed upper bound on the size of the query output using simple statistics on the input relations, consisting of ℓp-norms of degree sequences.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic small relations with predefined join keys generated within the script.

**Build it:**

1. Generate small synthetic relations with join keys and compute their degree sequences.
2. Implement functions to compute ℓ1, ℓ2, and ℓ∞ norms of these degree sequences.
3. Visualize the computed norms using matplotlib to show their differences and implications.
4. Write a README explaining the relation between ℓp-norms and join cardinalities as per the paper.

**Ships as:** A GitHub repo with a Python script and plots demonstrating ℓp-norm computations on degree sequences, plus a README linking the visualization to LpBound's core concept.

**Stretch goal:** Add interactive sliders (e.g., using Jupyter widgets) to vary relation sizes and see how ℓp-norms change dynamically.

### Intermediate — Reimplementing LpBound Core Estimator on JOB Benchmark
*Effort: 1-3 weekends*

You implement the core LpBound cardinality estimation method as described in the paper, including the linear program formulation using ℓp-norm statistics of degree sequences. You apply it to a subset of the Join Order Benchmark (JOB) queries and compare its upper bound estimates against a simple traditional density-based estimator.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core theoretical method into a working implementation and evaluate it on a real benchmark. It shows you understand the linear programming formulation and how LpBound improves accuracy over traditional methods.

**Grounded in:** LpBound computes a guaranteed upper bound on the size of the query output using simple statistics on the input relations, consisting of ℓp-norms of degree sequences. Our main finding is that LpBound can be orders of magnitude more accurate than traditional estimators used in mainstream open-source and commercial database systems.

**Tech stack:** Python 3.11, scipy.optimize.linprog, pandas, numpy

**Data:** Subset of the Join Order Benchmark (JOB) queries and statistics, publicly available and widely used for cardinality estimation evaluation.

**Build it:**

1. Parse JOB benchmark queries and extract join graph and predicates.
2. Compute or simulate ℓp-norm statistics of degree sequences for input relations based on JOB data statistics.
3. Formulate and solve the linear program for LpBound estimation using scipy.optimize.linprog.
4. Implement a simple density-based estimator baseline for comparison.
5. Evaluate and compare the cardinality upper bounds from LpBound and the baseline on the JOB queries.
6. Document results and analysis in the README.

**Ships as:** A GitHub repo with code implementing LpBound estimation and baseline, evaluation scripts on JOB queries, and a report comparing estimation accuracy.

**Stretch goal:** Extend the implementation to support group-by queries as per the paper's extension.

### Advanced — Implementing Hypertree Decomposition for Efficient LpBound Estimation
*Effort: a few weeks*

You develop an implementation of the proposed hypertree decomposition-based algorithm (LPTD) to compute LpBound estimates more efficiently on cyclic queries. This addresses the paper's limitation of quadratic complexity in LPflow for large queries. You evaluate your implementation on synthetic cyclic query graphs and compare runtime and estimation quality against a baseline LPflow implementation.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, showing deep comprehension of the theoretical and practical challenges in LpBound. It demonstrates your ability to extend the method and contribute novel code that could lead to research discussions.

**Grounded in:** Implementation and evaluation of the proposed hypertree decomposition-based algorithm (LPTD) to handle arbitrary queries more efficiently.

**Tech stack:** Python 3.11, networkx, scipy.optimize.linprog, numpy

**Data:** Synthetic cyclic join query graphs generated programmatically to test hypertree decompositions and LpBound estimation.

**Build it:**

1. Study hypertree decomposition theory and its role in query optimization and LpBound.
2. Implement hypertree decomposition for cyclic query graphs using networkx for graph operations.
3. Integrate hypertree decomposition with LpBound linear program formulation to reduce complexity.
4. Generate synthetic cyclic queries and compute LpBound estimates using both LPflow and your LPTD implementation.
5. Compare runtime and estimation quality between the two methods.
6. Write detailed documentation and analysis of results.

**Ships as:** A GitHub repo with hypertree decomposition code, LpBound estimation integration, synthetic query generation, evaluation scripts, and a comprehensive README discussing improvements and trade-offs.

**Stretch goal:** Apply your implementation to real-world cyclic queries from graph pattern matching workloads and analyze practical benefits.
