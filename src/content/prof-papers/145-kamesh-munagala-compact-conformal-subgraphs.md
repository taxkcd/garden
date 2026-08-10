---
title: "145 · Compact Conformal Subgraphs — Kamesh Munagala"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kamesh-munagala"
source_hash: "3c40c921c26204813d5658ad29fa84e09fcb2e74785b8b263a63be4f54ba6766"
sequence: 145
generator: "outreach-garden: managed"
---

# 145 · Compact Conformal Subgraphs

## At a glance

- **Professor:** Kamesh Munagala
- **Institution:** Duke University
- **Paper:** [Compact Conformal Subgraphs](https://arxiv.org/pdf/2602.07530)
- **Authors:** Sreenivas Gollapudi, Kostas Kollias, Kamesh Munagala, Aravindan Vijayaraghavan
- **Year:** 2026

## Paper overview

This paper develops a method to create compact, statistically valid summaries of large sets of possible outcomes predicted by models in structured domains like route planning or trip recommendations. The method compresses large conformal prediction sets into smaller subgraphs that still contain the true outcome with high probability, making predictions easier to interpret and use.

### Why it matters

**Research problem:** Conformal prediction provides valid uncertainty quantification but often produces very large prediction sets in structured domains, which are impractical for users. The problem is how to compress these large conformal sets into small, interpretable subgraphs while preserving statistical validity and coverage guarantees.

**Why it matters:** Large conformal prediction sets cause cognitive overload and inefficiency in applications such as routing, trip planning, and logistics. Compact, valid prediction sets enable better decision-making and downstream optimization by reducing complexity without sacrificing reliability.

**Key contributions:**

- Algorithmic formulation of conformal compression as selecting compact subgraphs with coverage guarantees in distribution-free and distribution-based settings.
- Development of an LP rounding algorithm that achieves constant-factor bicriteria approximations in the high-coverage regime.
- Proof of monotonicity of the compression algorithm via parametric minimum cuts, enabling valid distribution-free conformal guarantees.
- Extension of the framework to risk-controlling prediction sets and conditional coverage.
- Efficient sampling oracles for large hyperedge sets to scale the method.

## About the professor

**Kamesh Munagala** — Professor, Computer Science Department, Duke University.

Research interests: theoretical computer science, approximation algorithms, online algorithms, computational economics, resource allocation, decision making, and provisioning problems.

### Research links

- [Faculty/profile page](https://users.cs.duke.edu/~kamesh)
- [Professor website](https://www.kameshmunagala.org/)
- [Google Scholar](http://scholar.google.com/citations?user=PJQPzgcAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/m/KameshMunagala.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Combinatorial Optimization
**The paper assumes:** combinatorial optimization, approximation algorithms, linear programming relaxation, graph and hypergraph theory
**Already in this field?** Skip this entirely if you already have a solid understanding of combinatorial optimization and approximation algorithms, including LP relaxations and rounding techniques.

To understand the combinatorial optimization foundations behind the paper "Compact Conformal Subgraphs," these two carefully selected resources provide complementary learning paths. The rigorous course offers a deep dive into linear programming, approximation algorithms, and graph optimization concepts essential for grasping the paper's LP rounding algorithm and bicriteria guarantees. The fast track playlist delivers a concise, intuition-driven introduction to combinatorial optimization and approximation algorithms, suitable for quickly building relevant background without a heavy time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Combinatorial Optimisation (University of Warwick MA252)](https://www.youtube.com/playlist?list=PLtxJg53s2o0PqIAEphtjIaqXTouaWYR0j) — Jonathan Noel · 26 videos · 15.1h across 26 episodes

**Watch only this:** Lectures 1-3 (Linear Programming Introduction, Farkas' Lemma, Strong Duality for Linear Programming), Lectures 7-9 (Menger's Theorem, Max-Flow Min-Cut, Ford-Fulkerson Algorithm), and Lectures 10-12 (Complexity Theory, Reductions, SAT and k-SAT, NP-completeness reductions), about 5.5 hours total — this subset covers the core LP theory, min-cut algorithms, and complexity background relevant to the paper.

*Why it unblocks this paper:* This University of Warwick course by Jonathan Noel covers linear programming, max-flow min-cut, complexity theory, NP-completeness, and approximation algorithms, directly supporting the paper's combinatorial optimization formulation and LP rounding approach with theoretical rigor.

*If you want all of it:* 15.1 hours across all 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Combinatorial Optimzn and RL](https://www.youtube.com/playlist?list=PLNOX2_l5bk66rhbj7tH_DY037eMMGlkPw) — David Urpani · 7 videos · 2.2h across 7 episodes

**Watch only this:** Episodes 1-4 (How to Make a Path Planning Algorithm Easily, Ant Colony Optimization and Genetic Algorithms for the TSP, Approximation Algorithms: Traveling Salesman Problem, Traveling Salesman Problem Visualization), about 1.2 hours total — these cover key combinatorial optimization ideas and approximation algorithms with intuitive examples.

*Why it unblocks this paper:* David Urpani's short playlist provides clear, visual explanations of combinatorial optimization concepts including path planning, approximation algorithms for TSP, and heuristic methods, offering an accessible introduction to combinatorial optimization relevant to understanding the paper's problem context and algorithmic approach.

*If you want all of it:* 2.2 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Compact Conformal Subgraphs,' start by building a strong foundation in conformal prediction and uncertainty quantification, as these underpin the statistical validity and coverage guarantees. Next, study combinatorial optimization on hypergraphs and LP rounding algorithms, which form the core algorithmic techniques used. Then, explore parametric minimum cuts and monotonicity to grasp the theoretical guarantees of the compression method. Finally, focus on the paper's core concept of compact conformal subgraphs, prioritizing any talks by the authors or closely related academic presentations.

### Conformal prediction uncertainty quantification *(prerequisite)*
Understanding conformal prediction is essential to grasp the statistical validity and coverage guarantees that the paper aims to preserve while compressing prediction sets. This section covers distribution-free uncertainty quantification methods foundational to the paper's approach.

*How the paper uses it:* The paper builds on conformal prediction's statistical guarantees to ensure coverage in compressed subgraphs.

▶ [A Tutorial on Conformal Prediction](https://www.youtube.com/watch?v=nql000Lu_iE) — Anastasios Nikolas Angelopoulos · 38:08

### Combinatorial optimization on hypergraphs *(prerequisite)*
The paper formulates the compression problem as a combinatorial optimization problem on weighted hypergraphs. Understanding hypergraph connectivity and optimization techniques is crucial to follow the algorithmic design and theoretical analysis.

*How the paper uses it:* The authors model conformal compression as selecting subgraphs in weighted hypergraphs to cover probability mass efficiently.

▶ [Graphs and Matroids Seminar - Tom Kelly](https://www.youtube.com/watch?v=bSsFKFtRuVc) — Combinatorics & Optimization University of Waterloo · 55:34

### LP rounding algorithms approximation *(prerequisite)*
The key algorithmic contribution is an LP rounding algorithm that achieves bicriteria approximation guarantees. Familiarity with LP relaxations and deterministic rounding techniques will clarify how the authors obtain provable size and coverage trade-offs.

*How the paper uses it:* The LP rounding algorithm is central to the paper's method for compressing conformal sets with approximation guarantees.

▶ [Linear Programs and Deterministic Rounding](https://www.youtube.com/watch?v=akwi8GuD-BI) — Microsoft Research · 1:32:30

### Parametric minimum cuts monotonicity *(prerequisite)*
Monotonicity of the compression algorithm is proved via parametric minimum cuts, ensuring nested subgraphs and valid conformal calibration. Understanding parametric min-cut theory and monotonicity properties is key to grasping the theoretical guarantees.

*How the paper uses it:* The paper leverages parametric minimum cuts to prove monotonicity, enabling distribution-free conformal guarantees.

▶ [(AGT6E4) [Game Theory] Claim Monotonicity Property](https://www.youtube.com/watch?v=egZklHNjosk) — selcuk ozyurt · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces you first to the foundational idea of conformal prediction and its role in uncertainty quantification, which is essential to understand the paper's statistical guarantees. Next, it covers the combinatorial optimization framework on hypergraphs and LP rounding approximation algorithms that underpin the paper's compression method. Finally, it focuses on the core concept of compressing large conformal prediction sets into compact subgraphs, tying all prior knowledge to the paper's main contribution.

### Conformal prediction uncertainty quantification *(prerequisite)*
Learn what conformal prediction is and how it provides statistically valid uncertainty quantification without strong assumptions on data distributions. This foundation helps you understand why coverage guarantees matter and how prediction sets are constructed.

*How the paper uses it:* The paper builds on conformal prediction to ensure the compressed subgraphs maintain valid coverage guarantees.

▶ [A Tutorial on Conformal Prediction](https://www.youtube.com/watch?v=nql000Lu_iE) — Anastasios Nikolas Angelopoulos · 38:08

### Combinatorial optimization on hypergraphs *(prerequisite)*
Understand the basics of combinatorial optimization, especially on hypergraphs, which generalize graphs by allowing edges to connect multiple nodes. This knowledge is key to grasping how the paper formulates the compression problem as selecting subgraphs with desired coverage.

*How the paper uses it:* The paper formulates conformal compression as a combinatorial optimization problem on weighted hypergraphs.

▶ [1.1 Introduction](https://www.youtube.com/watch?v=G27vjNQUoh4) — Constantine Caramanis · 5 years ago

### LP rounding algorithms approximation *(prerequisite)*
Learn about linear programming relaxations and deterministic rounding techniques that provide approximate solutions to hard combinatorial problems. This is crucial to understand the paper's LP rounding algorithm that achieves bicriteria approximation guarantees.

*How the paper uses it:* The paper develops an LP rounding algorithm with provable approximation guarantees for selecting compact subgraphs.

▶ [Linear Programs and Deterministic Rounding](https://www.youtube.com/watch?v=akwi8GuD-BI) — Microsoft Research · 1:32:30

### Compact Conformal Subgraphs talk *(the paper's own talk)*
Watch a talk that directly addresses computational conformal geometry and related applications, providing insights into the geometric and algorithmic aspects relevant to the paper's approach.

*How the paper uses it:* This talk covers computational conformal geometry concepts that underpin the paper's method for compact conformal subgraphs.

▶ [Computational Conformal Geometry and Its Applications](https://www.youtube.com/watch?v=NE_p8dagTU0) — Harvard CMSA · 7 years ago

## Already in your library

- [Uncertainty Quantification (1): Enter Conformal Predictors](https://www.youtube.com/watch?v=xZbuFKWV5NA) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Network Flows: Max-Flow Min-Cut Theorem (& Ford-Fulkerson Algorithm)](https://www.youtube.com/watch?v=oHy3ddI9X3o) — also for: Approximating Directed Connectivity in Almost-Linear Time (Kent Quanrud)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the "Compact Conformal Subgraphs" paper. The beginner project reproduces a core concept of compressing conformal prediction sets into compact subgraphs on a small synthetic example. The intermediate project implements the LP rounding algorithm from the paper on a synthetic routing dataset, comparing compression performance against a greedy baseline. The advanced project extends the method to explore conditional coverage guarantees, addressing one of the paper's future directions and limitations, using simulated data to validate the approach.

### Beginner — Compact Conformal Subgraph Visualization on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a small Python script that generates a synthetic conformal prediction set represented as a weighted hypergraph and implements a simple heuristic to compress it into a compact subgraph covering a target probability mass. You visualize the original large conformal set and the compressed subgraph using graph plotting libraries.

**Why it shows you understood the paper:** This project shows you understand the core problem of compressing large conformal prediction sets into smaller subgraphs while preserving coverage, as well as the representation of conformal sets as weighted hypergraphs.

**Grounded in:** Section 1.1 introduces graph-based conformal compression to summarize large conformal sets into compact subgraphs while preserving statistical validity.

**Tech stack:** Python 3.11, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic data generated to simulate conformal prediction sets as weighted hypergraphs, inspired by the paper's synthetic routing experiments.

**Build it:**

1. Generate a small synthetic weighted hypergraph representing a conformal prediction set with nodes as outcomes and hyperedges with weights as probabilities.
2. Implement a simple greedy heuristic to select a minimal subgraph covering a specified fraction of total probability mass.
3. Visualize the original hypergraph and the compressed subgraph side-by-side using NetworkX and Matplotlib.
4. Calculate and report coverage and compression ratio metrics.
5. Write a README explaining the problem, your approach, and how it relates to the paper.

**Ships as:** A Jupyter notebook or Python script with visualizations and metrics demonstrating compact conformal subgraph compression on synthetic data.

**Stretch goal:** Add a simple LP relaxation and rounding implementation for comparison with the greedy heuristic.

### Intermediate — LP Rounding Algorithm for Compact Conformal Subgraphs on Synthetic Routing Data
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's LP rounding algorithm for conformal compression from scratch in Python and apply it to a synthetic routing dataset that simulates conformal prediction sets as weighted hypergraphs. You compare the LP method's compression and coverage performance against a greedy baseline and report metrics similar to those in the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core algorithmic contribution and evaluate its performance, showing comprehension of the LP formulation, rounding technique, and coverage guarantees.

**Grounded in:** Theorem 1 states that for any κ > 0, the algorithm returns a set K with coverage loss at most (1 + κ)ϵW and size at most (1 + 1/κ) times the optimal size.

**Tech stack:** Python 3.11, CVXPY or PuLP for LP solving, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic routing conformal prediction sets generated by simulating route outcomes and associated probabilities, inspired by the paper's synthetic routing experiments.

**Build it:**

1. Formulate the conformal compression problem as an LP on weighted hypergraphs as described in the paper.
2. Implement the LP rounding algorithm to select compact subgraphs with coverage guarantees.
3. Generate or simulate a synthetic routing dataset with conformal prediction sets represented as weighted hypergraphs.
4. Implement a greedy baseline compression algorithm for comparison.
5. Run experiments comparing LP rounding and greedy methods on compression size and coverage metrics.
6. Visualize results and write a detailed README relating your implementation and findings to the paper.

**Ships as:** A Python repository with LP rounding implementation, synthetic data generation, baseline comparison, and experimental results demonstrating the paper's core method.

**Stretch goal:** Incorporate sampling oracles to handle larger hyperedge sets and demonstrate uniform convergence empirically.

### Advanced — Extending Compact Conformal Subgraphs for Conditional Coverage Guarantees
*Effort: 3+ weeks*

You extend the conformal compression framework to explicitly handle conditional coverage guarantees as suggested in the paper's future directions. You design and implement an algorithmic extension that modifies the LP rounding or parametric min-cut approach to enforce conditional coverage on simulated structured prediction data. You evaluate the method's effectiveness and limitations.

**Why it shows you understood the paper:** This project shows deep understanding by addressing a stated limitation/future direction of the paper, applying theoretical insights to extend the method, and empirically validating conditional coverage, which is a challenging open problem.

**Grounded in:** Extension of the framework to risk-controlling prediction sets and conditional coverage.

**Tech stack:** Python 3.11, CVXPY or PuLP, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Simulated structured prediction data with conditional distributions to test conditional coverage, inspired by the paper's synthetic and trip planning simulations.

**Build it:**

1. Study the paper's discussion on conditional coverage and risk-controlling prediction sets.
2. Design an extension to the LP rounding or parametric min-cut algorithm to incorporate conditional coverage constraints.
3. Simulate structured prediction data with conditional dependencies for evaluation.
4. Implement the extended algorithm and baseline methods.
5. Evaluate conditional coverage and compression trade-offs experimentally.
6. Document the methodology, results, and relation to the paper's limitations and future directions.

**Ships as:** A comprehensive codebase and report demonstrating an extension of compact conformal subgraphs to conditional coverage with experimental validation.

**Stretch goal:** Explore end-to-end training of predictive models with differentiable compression regularizers leveraging the monotonicity property.
