---
title: "654 · Determining Attributes to Maximize Visibility of Objects — Gautam Das"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gautam-das"
source_hash: "9dc583974bef140d69c38d346ac9292914724b8965a5f206fc4afa6132fe93cf"
sequence: 654
generator: "outreach-garden: managed"
---

# 654 · Determining Attributes to Maximize Visibility of Objects

## At a glance

- **Professor:** Gautam Das
- **Institution:** University of Texas at Arlington
- **Paper:** [Determining Attributes to Maximize Visibility of Objects](https://ranger.uta.edu/~gdas/websitepages/preprints-papers/determining_attributes_TKDE2009.pdf)
- **Authors:** Muhammed Miah, Gautam Das, Vagelis Hristidis, Heikki Mannila
- **Year:** 2008

## Paper overview

This paper addresses the problem of helping sellers choose the best attributes of a new product to highlight in a database or marketplace so that the product stands out and is visible to the maximum number of potential buyers. The authors formalize this as an optimization problem, prove its computational hardness, and propose exact and approximate algorithms to solve it efficiently in practice. They evaluate their methods on real and synthetic datasets, showing good performance and quality.

### Why it matters

**Research problem:** Given a database of existing products, a query log representing past user searches, and a new product tuple with many attributes, select a subset of attributes (due to budget or space constraints) to maximize the number of queries that retrieve this new product, thereby maximizing its visibility.

**Why it matters:** In many online marketplaces and databases, sellers want their products to be easily discoverable by potential buyers. However, due to constraints like limited advertisement space or costs, sellers cannot list all attributes. Selecting the most impactful attributes can improve product visibility and sales. This problem complements traditional research focused on improving search and ranking for buyers.

**Key contributions:**

- Introduction of the novel problem of selecting attributes of a tuple for maximum visibility in databases.
- Formalization of multiple problem variants for Boolean, categorical, text, and numeric data.
- Proof that most variants are NP-complete.
- Development of optimal ILP-based algorithms for moderate-sized instances.
- Development of scalable algorithms based on maximal frequent itemset mining adapted for dense datasets.

## About the professor

**Gautam Das** — Associate Dean For Research, Distinguished University Chair, Professor, Computer Science and Engineering, University of Texas at Arlington.

Research interests: Big Data Exploration, data management, data analytics, machine learning and data mining, keyword search and ranking in databases, time series mining, approximate query processing, fairness and explainability in data management systems.

### Research links

- [Faculty/profile page](http://ranger.uta.edu/~gdas)
- [Professor website](https://ranger.uta.edu/~gdas)
- [Lab website](https://carida.uta.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Complexity and Integer Linear Programming
**The paper assumes:** computational complexity theory, NP-completeness, integer linear programming formulation and solving
**Already in this field?** Skip this entirely if you already understand NP-completeness theory and how Integer Linear Programming models and solves combinatorial optimization problems.

This background focuses on computational complexity theory, especially NP-completeness, and Integer Linear Programming (ILP), which are central to understanding the theoretical hardness and algorithmic solutions presented in the paper. The rigorous course offers a deep, formal foundation in complexity theory, while the fast track provides a concise, practical introduction to ILP modeling and solution techniques. Choose the rigorous lane for a thorough theoretical grounding, or the fast track for a quick, applied overview of ILP relevant to the paper's algorithms.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Undergrad Complexity Theory at CMU](https://www.youtube.com/playlist?list=PLm3J0oaFux3YL5vLXpzOyJiLtqLp6dCW2) — Ryan O'Donnell · 28 videos · 37.6h across 28 episodes

**Watch only this:** Lectures 7 to 12, about 8 hours — covering SAT, NP, nondeterminism, reductions, and NP-completeness proofs including the Cook-Levin theorem and reductions, which directly relate to the paper's NP-completeness proofs.

*Why it unblocks this paper:* Ryan O'Donnell's undergraduate complexity theory course at CMU covers NP-completeness in detail, including reductions and hardness proofs, which are essential to understand the computational complexity results of the paper.

*If you want all of it:* 37.6 hours across all 28 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intro to Integer Linear Programming](https://www.youtube.com/playlist?list=PLD3fYc0bAjC_iCOOsHZkxosZFDbcA7Kwf) — Joshua Emmanuel · 13 videos · 1.3h across 13 episodes

**Watch only this:** Episodes 1 to 6, about 36 minutes — covering graphical method, binary variables, constraints, and solving examples, sufficient to grasp ILP basics used in the paper.

*Why it unblocks this paper:* Joshua Emmanuel's short series on Integer Linear Programming provides a clear, concise introduction to ILP concepts, formulations, and solving methods, directly supporting the paper's ILP-based algorithmic approach.

*If you want all of it:* 1.3 hours across all 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Determining Attributes to Maximize Visibility of Objects," start by building foundational knowledge on computational complexity, integer linear programming, frequent itemset mining, and greedy algorithms, as these underpin the paper's theoretical and algorithmic contributions. Then, focus on the core concept of attribute selection for query coverage, culminating with the authors' own talk or the most relevant advanced presentation on attribute selection and visibility to grasp their specific approach and results.

### Computational complexity NP completeness lecture *(prerequisite)*
Understanding NP-completeness is essential because the paper proves that the attribute selection problem is NP-complete, which motivates the need for approximate and heuristic algorithms. The chosen lecture provides an intuitive and formal introduction to NP and NP-completeness, suitable for advanced readers seeking a rigorous foundation.

*How the paper uses it:* The paper proves NP-completeness of the attribute selection problem, making this foundational knowledge critical.

▶ [An intuitive view of NP](https://www.youtube.com/watch?v=rVUQEM9d62o) — UC Davis · 48:03 · 15y ago

### Integer linear programming optimization lecture *(prerequisite)*
Integer Linear Programming (ILP) forms the basis for the paper's exact algorithms for attribute selection. The selected lecture from MIT OpenCourseWare offers a comprehensive and mathematically rigorous treatment of ILP, including duality and optimization techniques, which will help understand the paper's ILP formulations and solution methods.

*How the paper uses it:* The paper develops optimal algorithms based on ILP formulations to solve moderate-sized instances of the attribute selection problem.

▶ [Lecture 13: Duality in Linear Programming](https://www.youtube.com/watch?v=oyVZ3rao6M4) — MIT OpenCourseWare · 1:16:12 · 9mo ago

### Frequent itemset mining data mining lecture *(prerequisite)*
Maximal frequent itemset mining is adapted in the paper for scalable attribute selection algorithms. The chosen lecture provides an in-depth explanation of association rule mining and frequent itemset mining, including the Apriori algorithm, which is foundational to understanding the paper's scalable algorithmic approach.

*How the paper uses it:* The paper adapts maximal frequent itemset mining techniques to efficiently select attributes for large query logs.

▶ [Lec - 18: Apriori Algorithm in Data Mining | Real Life Example](https://www.youtube.com/watch?v=o_hnNBM0jtk) — Gate Smashers · 12:59 · 1y ago

### Greedy algorithms approximation lecture *(prerequisite)*
Greedy heuristics are used in the paper to provide fast approximate solutions for large-scale attribute selection problems. The selected Microsoft Research lecture offers a rigorous introduction to greedy algorithms and approximation techniques, which is necessary to appreciate the design and performance of the paper's heuristics.

*How the paper uses it:* The paper proposes greedy heuristics that achieve near-optimal query coverage efficiently for large and high-dimensional datasets.

▶ [How to Approximate it? Introduction and Greedy Algorithms - Part 1](https://www.youtube.com/watch?v=1XPKOJgsYJM) — Microsoft Research · 10 yr ago

### Attribute selection for query coverage
This concept is central to the paper, focusing on selecting a subset of attributes to maximize product visibility in query results. The selected videos provide advanced system design and database query perspectives relevant to attribute selection and query coverage, helping to contextualize the problem within practical database and marketplace systems.

*How the paper uses it:* The paper's core problem is selecting attributes to maximize the number of queries retrieving a new product, thereby maximizing visibility.

▶ [System Design Fundamentals 9: How to Choose the Right ...](https://www.youtube.com/watch?v=JjhJ5-RBIG0) — InterviewWithBunny · 20:47

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how to select product attributes to maximize visibility in databases, starting with computational complexity to grasp the problem's difficulty, then integer linear programming for exact optimization methods, followed by frequent itemset mining for scalable data-driven attribute selection, and greedy algorithms for fast approximations. Finally, it covers the core idea of attribute selection for query coverage, directly related to the paper's main problem.

### Computational complexity NP completeness lecture *(prerequisite)*
Understanding NP-completeness helps grasp why the attribute selection problem is computationally hard and why exact solutions are challenging for large inputs. This video provides an intuitive introduction to NP and NP-complete problems, explaining the core ideas behind computational hardness.

*How the paper uses it:* The paper proves the attribute selection problem is NP-complete, motivating the need for approximate and heuristic algorithms.

▶ [An intuitive view of NP](https://www.youtube.com/watch?v=rVUQEM9d62o) — UC Davis · 48:03 · 15y ago

### Integer linear programming optimization lecture *(prerequisite)*
Integer Linear Programming (ILP) is a mathematical optimization technique used to find exact solutions to combinatorial problems by formulating constraints and objectives linearly. This video introduces ILP concepts and methods, building intuition on how ILP can solve attribute selection optimally for moderate-sized problems.

*How the paper uses it:* The paper develops ILP-based algorithms to find optimal attribute subsets for small to moderate query logs.

▶ [Introduction to Integer Linear Programming](https://www.youtube.com/watch?v=kkx3PaHLoek) — Alyson Yap · 25:06 · 5y ago

### Frequent itemset mining data mining lecture *(prerequisite)*
Frequent itemset mining discovers commonly co-occurring attribute sets in data, which can be leveraged to efficiently identify impactful attribute combinations. This video explains the Apriori algorithm, a foundational method for mining frequent itemsets, providing intuition on how such techniques scale better than ILP for large datasets.

*How the paper uses it:* The paper adapts maximal frequent itemset mining to scale attribute selection for large query logs with fewer attributes.

▶ [Lec - 18: Apriori Algorithm in Data Mining | Real Life Example](https://www.youtube.com/watch?v=o_hnNBM0jtk) — Gate Smashers · 12:59 · 1y ago

### Greedy algorithms approximation lecture *(prerequisite)*
Greedy algorithms build solutions step-by-step by choosing the locally best option at each step, often yielding fast and near-optimal results for complex problems. This video introduces greedy methods with clear examples, helping understand why greedy heuristics are effective for large-scale attribute selection where exact methods are infeasible.

*How the paper uses it:* The paper proposes greedy heuristics that run quickly and achieve near-optimal query coverage for large and high-dimensional datasets.

▶ [Greedy Algorithms Explained Simply | Part 1 🔑 (Basics + Intuition)](https://www.youtube.com/watch?v=9VQokZZNW6M) — D S A · 1 yr ago

### Attribute selection for query coverage
Selecting the right attributes to maximize query coverage means choosing attributes that make a product appear in the most user searches, improving visibility. This video explains attribute queries and selection in databases, providing practical intuition on how attribute filtering impacts retrieval and visibility.

*How the paper uses it:* The paper's core problem is selecting attribute subsets of a product to maximize the number of queries that retrieve it, thereby maximizing visibility.

▶ [Attribute Query in QGIS: Select by Attribute Step by Step](https://www.youtube.com/watch?v=ZzlIFRPGy1s) — GIS with Raja Usama · 1 yr ago

## Already in your library

- [16. Complexity: P, NP, NP-completeness, Reductions](https://www.youtube.com/watch?v=eHZifpgyH_4) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [15. NP-Completeness](https://www.youtube.com/watch?v=iZPzBHGDsWI) — also for: Degree Realization by Bipartite Multigraphs (Amotz Bar-Noy)
- [P NP NP-Hard NP-Complete problems in Urdu/Hindi](https://www.youtube.com/watch?v=7GiM_LlzYx0) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)
- [P vs. NP and the Computational Complexity Zoo](https://www.youtube.com/watch?v=YX40hbAHx3s) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [8. NP-Hard and NP-Complete Problems](https://www.youtube.com/watch?v=e2cF8a5aAhE) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Biggest Puzzle in Computer Science: P vs. NP](https://www.youtube.com/watch?v=pQsdygaYcE4) — also for: Fixed Points, a Predictor-Impossibility Theorem, and Applications (Tom Altman)
- [NP-Complete Explained (Cook-Levin Theorem)](https://www.youtube.com/watch?v=W9G_1xG77LE) — also for: Heuristic shortest hyperpaths in cell signaling hypergraphs (John D. Kececioglu)
- [What is a polynomial-time reduction? (NP-Hard + NP-complete)](https://www.youtube.com/watch?v=O7pq43hIE_0) — also for: Degree Realization by Bipartite Multigraphs (Amotz Bar-Noy)
- [Lecture 12: Introduction to Linear Programming](https://www.youtube.com/watch?v=qKNkP6IfjvY) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [The Art of Linear Programming](https://www.youtube.com/watch?v=E72DWgKP_1Y) — also for: The Dangerous Impact of Solver Imprecision on Data Management Techniques (and How to Avoid It) (Panagiotis Manolios)
- [Intro to Linear Programming](https://www.youtube.com/watch?v=K7TL5NMlKIk) — also for: LpBound: Pessimistic Cardinality Estimation using ℓp-Norms of Degree Sequences (Dan Suciu)
- [Integer Linear Programming - Graphical Method - Optimal Solution, Mixed, Rounding, Relaxation](https://www.youtube.com/watch?v=RhHhy-8sz-4) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Data Mining Lecture - - Finding frequent item sets | Apriori Algorithm | Solved Example (Eng-Hindi)](https://www.youtube.com/watch?v=LZii6N4vGDs) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [17. Complexity: Approximation Algorithms](https://www.youtube.com/watch?v=MEz1J9wY2iM) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder that lets you demonstrate understanding of the attribute selection problem for maximizing product visibility as formalized in the paper. The beginner project reproduces a core metric calculation on a small synthetic dataset using familiar tools. The intermediate project implements and evaluates the greedy heuristic algorithm on a public dataset, comparing it to a simple baseline. The advanced project extends the approach to handle dynamic query logs, addressing a key limitation noted by the authors.

### Beginner — Attribute Coverage Metric on Synthetic Data
*Effort: a weekend, ~6 hours*

You build a small Python script that simulates a product database with Boolean attributes and a query log of conjunctive Boolean queries. You implement the coverage metric that counts how many queries retrieve a new product given a selected subset of attributes. You visualize coverage as a function of attribute subsets.

**Why it shows you understood the paper:** This project shows you understand the fundamental problem setup, the role of query logs, and how attribute selection affects query coverage, which is the paper's core metric.

**Grounded in:** Key contribution: Formalization of attribute selection problem and coverage metric (Section 3). Key result: Greedy heuristics achieve near-optimal coverage (Section 6).

**Tech stack:** Python 3.11, matplotlib, Jupyter Notebook

**Data:** Synthetic Boolean product tuples and conjunctive Boolean query log generated in code.

**Build it:**

1. Generate a small synthetic product database with Boolean attributes (e.g., 10 products, 5 attributes).
2. Generate a synthetic query log of conjunctive Boolean queries over these attributes.
3. Implement a function that, given a subset of attributes for a new product, counts how many queries retrieve it.
4. Plot coverage versus attribute subsets (e.g., single attributes, pairs).
5. Write a README explaining the problem and how coverage is computed.

**Ships as:** A Jupyter notebook or Python script with code, plots, and explanations showing coverage calculations on synthetic data.

**Stretch goal:** Add support for categorical attributes and conjunctive queries with categorical predicates.

### Intermediate — Greedy Attribute Selection on Public Dataset
*Effort: 2 weekends, ~20 hours*

You implement the greedy heuristic algorithm from the paper for attribute selection to maximize query coverage. You apply it to a public dataset with categorical attributes (e.g., UCI Adult dataset as a proxy) and a simulated query log derived from attribute value frequencies. You compare the greedy method to a baseline that selects attributes by frequency alone and report coverage metrics.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core scalable algorithm and evaluate it on real data, reproducing the key result that greedy heuristics achieve near-optimal coverage efficiently.

**Grounded in:** Key contribution: Design of fast greedy approximation algorithms with good empirical performance (Section 4.4). Key results: Greedy heuristics run fast and achieve near-optimal coverage (Section 6).

**Tech stack:** Python 3.11, pandas, numpy, matplotlib

**Data:** UCI Adult dataset (publicly available) used as a proxy for product attributes; synthetic query log generated based on attribute value frequencies.

**Build it:**

1. Download and preprocess the UCI Adult dataset to extract categorical attributes.
2. Generate a synthetic query log by sampling conjunctive queries based on attribute value frequencies.
3. Implement the greedy attribute selection heuristic to select k attributes maximizing coverage.
4. Implement a baseline that selects top-k attributes by individual frequency.
5. Evaluate and plot coverage achieved by greedy vs baseline for varying k.
6. Write a README describing the implementation, dataset, and results.

**Ships as:** A Python project with scripts/notebooks implementing greedy attribute selection, baseline comparison, and coverage plots.

**Stretch goal:** Extend the implementation to handle numeric attributes with range predicates.

### Advanced — Adaptive Attribute Selection with Evolving Query Logs
*Effort: 3+ weeks*

You develop an extension of the greedy attribute selection algorithm that adapts to dynamic query logs where query patterns evolve over time. You simulate a time series of query logs with changing distributions and implement an incremental update mechanism for attribute selection. You evaluate how adaptive selection improves coverage compared to static selection.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing dynamic query logs, demonstrating deep comprehension of the problem and ability to extend the core methods.

**Grounded in:** Limitation: The approach does not handle dynamic or evolving query logs or databases (Section 7). Future direction: Incorporating dynamic or adaptive models that update attribute selection as query logs evolve (Section 7).

**Tech stack:** Python 3.11, pandas, numpy, matplotlib

**Data:** Synthetic evolving query logs generated by simulating changes in user query distributions over time on a synthetic or public dataset.

**Build it:**

1. Design a simulation of evolving query logs with time steps and changing query distributions.
2. Implement an incremental greedy attribute selection algorithm that updates selections as new query logs arrive.
3. Compare coverage of adaptive selection vs static selection over time.
4. Visualize coverage trends and attribute changes across time steps.
5. Write a detailed README explaining the dynamic problem, your approach, and evaluation.

**Ships as:** A Python project demonstrating adaptive attribute selection with evolving query logs, including code, evaluation, and visualizations.

**Stretch goal:** Incorporate real-world query log data if available or explore reinforcement learning approaches for adaptive selection.

_The paper's authors released no code or datasets; synthetic or public datasets must be used as proxies._
