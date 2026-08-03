---
title: "145 · Compact Conformal Subgraphs — Kamesh Munagala"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kamesh-munagala"
source_hash: "32389a04a100af0f2a5d93755a7f273c17a9d2c9cca2e14994d71f6c42aa44f6"
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
