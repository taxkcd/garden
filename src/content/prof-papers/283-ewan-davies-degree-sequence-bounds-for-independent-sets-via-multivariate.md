---
title: "283 · Degree-sequence bounds for independent sets via multivariate local occupancy — Ewan Davies"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ewan-davies"
source_hash: "947d0121070c6a1f1d762eb33f4f791253c92b00c8369c2b520423fcbea259b6"
sequence: 283
generator: "outreach-garden: managed"
---

# 283 · Degree-sequence bounds for independent sets via multivariate local occupancy

## At a glance

- **Professor:** Ewan Davies
- **Institution:** Colorado State University
- **Paper:** [Degree-sequence bounds for independent sets via multivariate local occupancy](https://arxiv.org/abs/2605.05149)
- **Authors:** Ewan Davies, Juspreet Singh Sandhu, Jaehyeon Seo, Brian Tan
- **Year:** 2026

## Paper overview

This paper develops new mathematical bounds on the expected size of independent sets in graphs using a probabilistic model called the hard-core model. The authors extend previous results by incorporating detailed local graph structure such as degree sequences and local sparsity, and introduce a novel spectral analysis method that avoids limitations of earlier techniques. Their results provide tighter and more general lower bounds on independent sets in graphs, which are important in combinatorics and theoretical computer science.

### Why it matters

**Research problem:** To establish lower bounds on the expected size of independent sets in graphs based on local structural information like degree sequences and local sparsity, using the hard-core model, and to overcome limitations of previous methods such as induction and cluster expansion.

**Why it matters:** Understanding independent sets is fundamental in graph theory with applications in combinatorics, computer science, and statistical physics. Improved bounds help in extremal graph theory, Ramsey theory, and algorithmic problems related to counting and sampling independent sets, which have broad theoretical and practical implications.

**Key contributions:**

- Generalization of local occupancy bounds to multivariate fugacities depending on degree sequences.
- Novel spectral analysis of the local occupancy LP that bypasses convergence radius limitations of cluster expansions and avoids induction.
- New degree-sequence lower bounds on expected independent set size for arbitrary graphs and for graphs with bounded local maximum average degree.
- Extension of local occupancy methods to fractional coloring with local demands.
- Identification of limitations of the local occupancy LP approach for large fugacities and heterogeneous degrees.

## About the professor

**Ewan Davies** — Colorado State University.

### Research links

- [Faculty/profile page](https://www.ewandavies.org)
- [Resolved homepage](https://www.ewandavies.org/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** spectral graph theory
**The paper assumes:** spectral graph theory, linear algebra of graphs, eigenvalues and eigenvectors of adjacency matrices
**Already in this field?** Skip this entirely if you already understand spectral graph theory and how eigenvalues relate to graph properties.

This background focuses on spectral graph theory, which is essential for understanding the novel spectral analysis techniques used in the paper to analyze local occupancy linear programs and prove matrix invertibility. The rigorous course option provides a comprehensive university-level introduction to algebraic and spectral graph theory, ideal for deep mastery. The fast track offers a concise, intuition-driven series on graph Laplacians and spectral clustering, suitable for quickly grasping key spectral concepts relevant to the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Algebraic Graph Theory_Prof. Ranveer](https://www.youtube.com/playlist?list=PLyqSpQzTE6M_ciAYiv53KZyKncwXZw8TU) — NPTEL-NOC IITM · 45 videos

**Watch only this:** Episodes 7 to 15, about 4.5 hours — covering eigenvalues and eigenvectors, adjacency matrices, the spectral theorem, Rayleigh quotient, Perron-Frobenius theorem, and spectral bounds on graph parameters relevant to the paper's spectral analysis.

*Why it unblocks this paper:* This NPTEL-NOC IITM course by Prof. Ranveer covers foundational and advanced topics in algebraic and spectral graph theory, including eigenvalues, spectral theorems, Perron-Frobenius theory, and spectral bounds on graph parameters, directly supporting the paper's spectral LP analysis and invertibility proofs.

*If you want all of it:* 19.9 hours across 45 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spectral Graph Theory](https://www.youtube.com/playlist?list=PL_4Jjqx0pZY9KxSbGUuJYm6V5lucJvJkc) — Sanjoy Das · 6 videos · 1.4h across 6 episodes

**Watch only this:** Episodes 1 to 4, about 1 hour — covering unnormalized Laplacian, sum of squares property, Fiedler vector, and multidimensional embedding to quickly build intuition on spectral graph properties.

*Why it unblocks this paper:* Sanjoy Das's concise series on spectral graph theory focuses on graph Laplacians, eigenvalues, and spectral clustering, providing an accessible and visual introduction to key spectral concepts that underpin the paper's spectral LP approach.

*If you want all of it:* 1.4 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Degree-sequence bounds for independent sets via multivariate local occupancy," start with foundational concepts in spectral graph theory and linear programming in combinatorics, as these underpin the novel spectral analysis and LP framework used. Then, study the hard-core model in graphs to grasp the probabilistic model central to the paper's approach. Finally, focus on the paper's core concept of multivariate local occupancy methods, emphasizing the authors' own talks or advanced academic presentations when available.

### Spectral graph theory *(prerequisite)*
Spectral graph theory provides the mathematical tools to analyze graph matrices and their spectra, which is crucial for understanding the invertibility and feasibility conditions of the local occupancy linear program in the paper. The spectral radius bounds and Neumann series expansions used in the paper rely on these concepts.

*How the paper uses it:* The authors use spectral graph theory to prove invertibility and feasibility of the LP constraint matrix and to interpret local occupancy parameters.

▶ [Spectral Graph Theory: The Quadratic Form || @ CMU ...](https://www.youtube.com/watch?v=gwxuipf-9IQ) — Ryan O'Donnell · 22:24

### Linear programming in combinatorics *(prerequisite)*
Linear programming forms the framework for the local occupancy LP analyzed in the paper. Understanding LP duality, feasibility, and complementary slackness is essential to follow the spectral analysis and the derivation of bounds on independent sets.

*How the paper uses it:* The paper analyzes a linear program related to local occupancy and uses its dual to establish bounds on independent sets.

▶ [Linear Programming Introduction. MA252, University of ...](https://www.youtube.com/watch?v=C2ndEB3Vahs) — Jonathan Noel · 25:13

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's contributions on degree-sequence bounds for independent sets via multivariate local occupancy, start by learning the fundamental graph theory concepts of degree sequences and independent sets. Next, grasp the hard-core model, the probabilistic framework underlying the paper's approach. Then build intuition on spectral graph theory and linear programming as tools for analyzing combinatorial structures. Finally, explore the paper's core method: the multivariate local occupancy technique that generalizes previous bounds using vertex-dependent parameters.

### Paper authors talk *(the paper's own talk)*
Begin with a concise introduction to degree sequences in graphs, which are central to the paper's focus. Understanding how to determine if a sequence is graphical helps ground the intuition about local graph structure.

*How the paper uses it:* The paper leverages degree sequences to establish refined bounds on independent sets.

▶ [Graph Theory: How to Determine if a Degree Sequence is ...](https://www.youtube.com/watch?v=RZJ-hywVWVo) — Zach's Math Zone · 6:20

### Spectral graph theory *(prerequisite)*
Spectral graph theory studies properties of graphs through eigenvalues and eigenvectors of matrices like adjacency or Laplacian matrices. This provides tools to analyze the invertibility and feasibility of linear programs related to local occupancy.

*How the paper uses it:* The authors use spectral analysis to prove invertibility of the local occupancy LP constraint matrix.

▶ [Spectral Graph Theory: The Quadratic Form || @ CMU ...](https://www.youtube.com/watch?v=gwxuipf-9IQ) — Ryan O'Donnell · 22:24

### Linear programming in combinatorics *(prerequisite)*
Linear programming is a method to optimize a linear objective subject to linear constraints. In combinatorics, LPs can relax discrete problems to continuous ones, enabling spectral and duality analyses as done in this paper.

*How the paper uses it:* The paper formulates and analyzes a local occupancy linear program to derive bounds on independent sets.

▶ [Linear Programming Introduction. MA252, University of ...](https://www.youtube.com/watch?v=C2ndEB3Vahs) — Jonathan Noel · 25:13

### Fractional coloring and local demands *(prerequisite)*
Fractional coloring generalizes graph coloring by assigning sets of colors fractionally to vertices, allowing more flexible colorings. The paper extends local occupancy methods to fractional coloring with local demands, linking combinatorial optimization and probabilistic bounds.

*How the paper uses it:* The paper connects local occupancy LP constraints to fractional coloring polytopes with local demands.

▶ [Exact and Fractional Coloring](https://www.youtube.com/watch?v=BdyQyJVbvX0) — Miran Fattah · 9 years ago

## Already in your library

- [Lecture – Spectral Graph Theory by Professor Stephan Wagner](https://www.youtube.com/watch?v=O0JTZ30gMso) — also for: Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult (Zilin Jiang)
- [Spectral Graph Theory For Dummies](https://www.youtube.com/watch?v=uTUVhsxdGS8) — also for: Beyond the classification theorem of Cameron, Goethals, Seidel, and Shult (Zilin Jiang)
- [1.1 Introduction](https://www.youtube.com/watch?v=G27vjNQUoh4) — also for: Compact Conformal Subgraphs (Kamesh Munagala)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the paper's novel multivariate local occupancy bounds on independent sets. The beginner project reproduces a key formula from the paper on small example graphs to build intuition. The intermediate project implements the core local occupancy linear program and spectral analysis method on synthetic graphs, comparing bounds to naive baselines. The advanced project explores extending the method beyond the paper's fugacity upper bound limitation, addressing a stated future direction with new experiments and analysis.

### Beginner — Compute and Visualize Multivariate Local Occupancy Bounds on Small Graphs
*Effort: a weekend, ~8 hours*

You build a Python script that takes small graphs (e.g., simple random graphs or hand-crafted examples) and computes the multivariate lower bound on expected independent set size from Theorem 1 using the formula λ_u / (1 + (d_u + 1) λ_u). You then visualize the bound alongside graph properties such as degree sequences.

**Why it shows you understood the paper:** This project demonstrates you understand the core formula of the paper's multivariate local occupancy bound and how degree sequences and fugacities influence expected independent set size.

**Grounded in:** Theorem 1: For graphs with maximum degree ∆ and fugacity vector λ with entries less than 1/∆, a multivariate lower bound on expected independent set size is given by sum over vertices of λu/(1+(du+1)λu).

**Tech stack:** Python 3.11, NetworkX, Matplotlib

**Data:** Synthetic small graphs generated with NetworkX (e.g., paths, stars, small random graphs).

**Build it:**

1. Implement a function to compute the degree sequence and maximum degree ∆ of a given graph.
2. Implement the multivariate local occupancy bound formula from Theorem 1 for a given fugacity vector λ with λu < 1/∆.
3. Generate or input small example graphs and assign fugacity values respecting the upper bound.
4. Compute and print the bound and compare it to the graph size and degree distribution.
5. Visualize the graph and plot the bound values alongside vertex degrees.

**Ships as:** A GitHub repository with Python scripts and Jupyter notebooks showing computed bounds on example graphs, with plots and explanations in the README.

**Stretch goal:** Add an interactive visualization (e.g., with Streamlit or Jupyter widgets) to explore how changing fugacity values affects the bound on different graph types.

### Intermediate — Implement and Evaluate the Local Occupancy LP and Spectral Analysis on Synthetic Graphs
*Effort: 2 weekends, ~20 hours*

You implement the local occupancy linear program (LP) described in the paper, including the constraint matrix B + AΓ and its spectral analysis to verify invertibility and feasibility. You apply this to synthetic graphs with controlled degree sequences and local sparsity, compute the LP bounds on expected independent set size, and compare them to naive bounds such as the Caro-Wei bound.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method—formulating and analyzing the local occupancy LP with spectral graph theory—into code and evaluate its effectiveness on graphs, reproducing key theoretical claims.

**Grounded in:** The authors generalize local occupancy methods to a multivariate setting allowing vertex-dependent fugacities, and analyze a linear program (LP) related to local occupancy using spectral graph theory. They prove invertibility and feasibility conditions for the LP's constraint matrix and use a Neumann series expansion to establish their bounds.

**Tech stack:** Python 3.11, NumPy, SciPy (for LP solving and linear algebra), NetworkX

**Data:** Synthetic graphs generated with NetworkX, including Erdős–Rényi and random regular graphs with specified degree sequences.

**Build it:**

1. Implement functions to construct the LP constraint matrix B + AΓ based on graph adjacency and fugacity parameters.
2. Implement spectral radius computations and verify invertibility conditions as per Lemma 6.
3. Formulate and solve the local occupancy LP using SciPy's linear programming tools.
4. Generate synthetic graphs with varying degree sequences and local sparsity.
5. Compute and compare the LP bounds on expected independent set size to baseline bounds (e.g., Caro-Wei).
6. Document results with plots and analysis in a Jupyter notebook.

**Ships as:** A GitHub repository with code implementing the LP and spectral analysis, notebooks showing experiments on synthetic graphs, and a README explaining the method and results.

**Stretch goal:** Extend the implementation to handle graphs with bounded local maximum average degree and verify Theorem 2's univariate bound involving the Lambert W function.

### Advanced — Extend Local Occupancy Bounds Beyond Fugacity Upper Bounds and Analyze Impact on Fractional Coloring
*Effort: 3+ weeks*

You develop an extension of the local occupancy LP framework to relax or remove the fugacity upper bound constraints (λu < c/∆) that limit applicability. You experiment with alternative LP formulations or spectral methods to improve feasibility for larger fugacities and heterogeneous degree graphs. You analyze how these extensions affect fractional coloring bounds with local demands, implementing and testing on synthetic and real-world graph data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the local occupancy framework and its spectral analysis, and the ability to innovate beyond the original results.

**Grounded in:** Limitations: Upper bounds on fugacities (λ entries) are required to guarantee invertibility and feasibility, limiting applicability to small fugacities. Future directions include removing or relaxing these upper bound constraints and further exploration of fractional coloring with local demands.

**Tech stack:** Python 3.11, NumPy, SciPy, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic graphs with heterogeneous degree sequences and real-world small graph datasets (e.g., social network samples from NetworkX datasets) as substitutes for testing.

**Build it:**

1. Review and understand the invertibility and feasibility proofs for the LP constraint matrix and identify bottlenecks caused by fugacity upper bounds.
2. Propose and implement modifications to the LP or spectral analysis to relax fugacity constraints (e.g., alternative matrix norms, regularization, or iterative methods).
3. Test the modified LP on synthetic graphs with larger fugacities and heterogeneous degrees, comparing feasibility and bound tightness to the original method.
4. Implement fractional coloring bounds with local demands using the extended local occupancy framework.
5. Analyze and visualize the impact of relaxed fugacity constraints on fractional coloring bounds.
6. Document methodology, experiments, and findings in a detailed report and Jupyter notebooks.

**Ships as:** A comprehensive GitHub repository with code, notebooks, and a detailed README/report discussing the extension approach, experiments, and implications for fractional coloring.

**Stretch goal:** Explore algorithmic applications such as approximate counting or sampling of independent sets using the extended local occupancy bounds.
