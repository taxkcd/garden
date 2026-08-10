---
title: "212 · Manifold learning and optimization using tangent space proxies — Lorenzo Orecchia"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lorenzo-orecchia"
source_hash: "9c7f4ccf08ab68559f47c62dc33de3ff7fe67afe89880947f825ec123cd8ae34"
sequence: 212
generator: "outreach-garden: managed"
---

# 212 · Manifold learning and optimization using tangent space proxies

## At a glance

- **Professor:** Lorenzo Orecchia
- **Institution:** University of Chicago
- **Paper:** [Manifold learning and optimization using tangent space proxies](https://arxiv.org/abs/2501.12678)
- **Authors:** Ryan A. Robinett, Lorenzo Orecchia, Samantha J. Riesenfeld
- **Year:** 2025

## Paper overview

This paper introduces a novel framework called the atlas graph for representing Riemannian manifolds, enabling efficient approximation of differential-geometric primitives essential for manifold learning and optimization. The approach speeds up optimization on manifolds with known algebraic structure and enables optimization on manifolds learned from point cloud data, preserving important geometric and topological features.

### Why it matters

**Research problem:** Existing Riemannian optimization methods rely on computationally expensive differential-geometric primitives like exponential maps and parallel transports, which are often unavailable or inefficient for general manifolds, especially those learned from empirical point cloud data without closed-form algebraic structure.

**Why it matters:** Many modern machine learning and data science applications involve data with intrinsic non-Euclidean geometry modeled by Riemannian manifolds. Efficient optimization on such manifolds is crucial for tasks like online PCA, quantum computing, and analysis of biological data (e.g., scRNA-seq). Current methods either lack efficiency or applicability to general manifolds, limiting progress.

**Key contributions:**

- Definition and construction of atlas graphs as universal manifold representations amenable to efficient approximation of differential-geometric primitives.
- Development of quasi-Euclidean updates that approximate exponential maps and parallel transport with provable error bounds.
- An atlas graph representation of the Grassmann manifold enabling faster online Fréchet mean estimation compared to state-of-the-art methods.
- A method to learn approximate coordinate charts from point cloud data using local quadratic approximations and SVM-based transition boundaries.
- Demonstration that atlas graphs preserve topological invariants (persistent homology), intrinsic dimensionality, and approximate geodesic distances on complex manifolds like Carlsson’s high-contrast natural image patches.

## About the professor

**Lorenzo Orecchia** — Assistant Professor, Computer Science, University of Chicago.

Research interests: Theoretical Computer Science, Machine Learning and Mathematical Optimization

### Research links

- [Faculty/profile page](https://orecchia.net)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Riemannian geometry
**The paper assumes:** differential geometry of smooth manifolds, Riemannian metrics, geodesics, exponential maps, parallel transport, and coordinate charts
**Already in this field?** Skip this entirely if you already have a solid undergraduate or beginning graduate-level understanding of Riemannian geometry and differential geometry of manifolds.

This background focuses on Riemannian geometry, which is essential for understanding the manifold representations, differential-geometric primitives, and optimization techniques introduced in the paper. The rigorous course option offers a detailed, university-level treatment of Riemannian geometry, suitable for deep theoretical grounding. The fast track provides a concise, intuition-driven introduction to the key concepts, ideal for quickly gaining the necessary background without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Riemannian geometry](https://www.youtube.com/playlist?list=PLXo8Tdaw0czMUXXjezMP98FlwpG4LAThj) — What is Math? · 9 videos · 2.0h across 9 episodes

**Watch only this:** Episodes 0-5, about 1.3 hours — covering overview, Riemannian metrics, unit sphere and hyperbolic space, connections, and geodesics, sufficient for grasping the key geometric concepts used in the paper.

*Why it unblocks this paper:* This short-form series provides clear, visual explanations of Riemannian geometry concepts such as metrics, manifolds, geodesics, and curvature, offering an accessible yet rigorous overview that aligns well with the paper's focus on Riemannian optimization.

*If you want all of it:* 2.0 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Manifold learning and optimization using tangent space proxies," start with foundational knowledge in differential geometry, focusing on manifolds, tangent spaces, and atlases, which underpin the atlas graph framework. Next, study manifold learning from point clouds to grasp empirical manifold construction, followed by Riemannian manifold optimization to comprehend optimization techniques on curved spaces. Finally, focus on the core concept of atlas and coordinate charts on manifolds, which is central to the paper's novel framework.

### Differential geometry basics *(prerequisite)*
This section covers the fundamental concepts of differential geometry, including manifolds, tangent spaces, and exponential maps, which are essential for understanding the geometric structures the paper builds upon. A rigorous university lecture by Claudio Arezzo provides a deep and formal introduction suitable for advanced readers.

*How the paper uses it:* Differential geometry fundamentals are crucial for understanding the manifold structures and tangent space proxies used in the atlas graph framework.

▶ [Differential Geometry - Claudio Arezzo - Lecture 01](https://www.youtube.com/watch?v=tKnBj7B2PSg) — ICTP Mathematics · 1:29:40

### Manifold learning from point clouds *(prerequisite)*
This section introduces how manifolds can be learned empirically from point cloud data, a key step for applying the atlas graph framework to real-world data without closed-form manifold descriptions. The RPI Seminars MIDO talk on manifold learning for point-cloud data offers a research-level presentation with applications in biology, aligning well with the paper's motivation.

*How the paper uses it:* The paper proposes learning approximate coordinate charts from point clouds, making this topic essential for understanding their empirical manifold construction.

▶ [Manifold learning for point-cloud data with applications in biology](https://www.youtube.com/watch?v=-uRXoLbL20A) — RPI Seminars MIDO · 2 years ago

### Riemannian manifold optimization *(prerequisite)*
Understanding optimization on Riemannian manifolds is central to the paper's contribution of quasi-Euclidean updates and efficient manifold optimization algorithms. The Simons Institute lecture on Optimization on Manifolds is a comprehensive and rigorous university-level talk that covers the necessary mathematical and algorithmic foundations.

*How the paper uses it:* The paper develops faster first-order optimization methods on manifolds, making this topic critical for grasping their algorithmic innovations.

▶ [Optimization on Manifolds](https://www.youtube.com/watch?v=UjaoZE0GBpg) — Simons Institute for the Theory of Computing · 1:06:20

### Atlas and coordinate charts on manifolds *(prerequisite)*
Atlases and coordinate charts form the backbone of the paper's atlas graph framework, representing manifolds as graphs of overlapping charts with transition maps. The James Cook Math lecture offers a detailed and mathematically rigorous exposition of atlases and compatible charts, ideal for advanced learners.

*How the paper uses it:* The atlas graph framework is built upon the concept of atlases and coordinate charts, making this foundational topic indispensable.

▶ [Manifolds: on the definition of manifold, atlas, compatible ...](https://www.youtube.com/watch?v=x8xU4Ol1eQc) — James Cook Math · 59:51

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's novel atlas graph framework for manifold learning and optimization, start by building foundational intuition on differential geometry basics, focusing on manifolds, tangent spaces, and coordinate charts. Then, learn how manifolds can be empirically constructed from point cloud data, which is essential for grasping the paper's approach to learning approximate charts. Finally, study the atlas and coordinate charts concept to understand the paper's core framework representing manifolds as graphs of overlapping charts.

### Differential geometry basics *(prerequisite)*
Differential geometry introduces the mathematical language to describe curved spaces called manifolds, including key ideas like tangent spaces and exponential maps. Understanding these concepts helps you grasp how smooth shapes behave locally and globally, which is foundational for manifold learning and optimization.

*How the paper uses it:* The paper relies on differential geometry to define and approximate manifold structures and differential-geometric primitives like exponential maps.

▶ [Differential Geometry Fundamental Concepts | Differential ...](https://www.youtube.com/watch?v=JU1t_46RIPc) — Physics for Students- Unleash your power!! · 51:33

### Manifold learning from point clouds *(prerequisite)*
Manifold learning from point clouds explains how to recover low-dimensional manifold structures from high-dimensional data samples, a key step in many data science applications. This helps you understand how the paper learns approximate coordinate charts and manifold geometry from empirical data.

*How the paper uses it:* The paper develops methods to learn approximate coordinate charts and transition boundaries from point cloud data to build atlas graphs.

▶ [Manifold learning for point-cloud data with applications in biology](https://www.youtube.com/watch?v=-uRXoLbL20A) — RPI Seminars MIDO · 2 years ago

### Atlas and coordinate charts on manifolds *(prerequisite)*
Atlases and coordinate charts provide a way to cover a manifold with overlapping local coordinate systems, enabling computations and analysis on complex curved spaces. This concept is central to the paper's atlas graph framework, which represents manifolds as graphs of these charts with transition maps.

*How the paper uses it:* The atlas graph framework in the paper is based on representing manifolds as graphs of overlapping coordinate charts with learned transition boundaries.

▶ [Manifolds #3: Atlases](https://www.youtube.com/watch?v=DXJQ05ekiRA) — qncubed3 · 18:53

## Already in your library

- [Riemannian Manifolds in 12 Minutes](https://www.youtube.com/watch?v=jpjt08HkOzA) — also for: HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders (Toni Kazic)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate understanding of the atlas graph framework and quasi-Euclidean updates introduced in the paper. Starting with a small-scale implementation of quasi-Euclidean updates on a known manifold, you then reimplement the core atlas graph method on a standard manifold dataset comparing it to a baseline. Finally, you extend the framework to address a stated limitation by experimenting with noisy or higher-dimensional point cloud data, showing practical skills and research potential.

### Beginner — Quasi-Euclidean Updates on the Grassmann Manifold
*Effort: a weekend, ~8 hours*

You build a simple Python implementation of quasi-Euclidean updates approximating the exponential map on the Grassmann manifold. You simulate a small Grassmann manifold example (e.g., subspaces of R^5 with dimension k=2), implement the update step, and visualize convergence compared to a naive Euclidean gradient step.

**Why it shows you understood the paper:** This project shows you grasp the core concept of quasi-Euclidean updates as a computationally efficient approximation of the exponential map, a key contribution of the paper.

**Grounded in:** Claim 3.1. Quasi-Euclidean updates approximate the exponential map up to O(∥τ⃗∥²_g). Further, restriction of quasi-Euclidean updates to a single coordinate chart comprises a retraction.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic data representing points on the Grassmann manifold (e.g., random orthonormal subspaces in R^5).

**Build it:**

1. Implement a function to generate random points on the Grassmann manifold Gr(k, n) with n=5, k=2.
2. Implement the quasi-Euclidean update formula as described in the paper for a single coordinate chart.
3. Implement a naive Euclidean gradient descent step for comparison.
4. Run optimization iterations starting from a random point and plot convergence of geodesic distance to a target point for both methods.
5. Document the approximation behavior and runtime differences in a README.

**Ships as:** A Jupyter notebook and Python scripts showing quasi-Euclidean updates on Grassmann manifold points, with plots comparing convergence and a README explaining the implementation and results.

**Stretch goal:** Add a visualization of coordinate charts and transition boundaries for a small atlas graph on the Grassmann manifold.

### Intermediate — Atlas Graph Construction and Optimization on a Sample Manifold
*Effort: 2 weekends, ~20 hours*

You reimplement the atlas graph framework from the paper to learn approximate coordinate charts from a point cloud sampled from a known manifold (e.g., Swiss roll or S-curve). You build local quadratic approximations and use SVMs with quadratic kernels to define transition boundaries. Then you implement quasi-Euclidean updates for optimization on this learned manifold and compare geodesic distance approximations against PCA embedding baselines.

**Why it shows you understood the paper:** This project demonstrates you can reconstruct the atlas graph method for manifolds learned from point clouds, including chart learning and transition boundaries, and apply the optimization scheme, directly reflecting the paper's core approach and results.

**Grounded in:** An atlas graph representation of the Grassmann manifold enabling faster online Fréchet mean estimation compared to state-of-the-art methods. A method to learn approximate coordinate charts from point cloud data using local quadratic approximations and SVM-based transition boundaries.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic Swiss roll or S-curve point cloud data generated with scikit-learn, serving as a substitute for the paper's point cloud manifold data.

**Build it:**

1. Generate a synthetic 3D Swiss roll or S-curve point cloud dataset using scikit-learn.
2. Implement local quadratic approximations to define approximate coordinate charts around sampled points.
3. Train soft-margin SVMs with quadratic kernels to learn transition boundaries between overlapping charts.
4. Construct the atlas graph as a graph of charts connected by transition maps.
5. Implement quasi-Euclidean updates within charts to approximate exponential maps for optimization.
6. Compare approximate geodesic distances computed via the atlas graph to those from PCA embeddings.
7. Document the methodology, results, and comparison in a README.

**Ships as:** A Python project with scripts and notebooks that build an atlas graph from synthetic point cloud data, perform optimization with quasi-Euclidean updates, and compare geodesic distance approximations, with clear documentation.

**Stretch goal:** Extend the project to preserve persistent homology and show topological invariants of the learned manifold.

### Advanced — Robust Atlas Graph Learning on Noisy High-Dimensional Data
*Effort: 3+ weeks*

You extend the atlas graph framework to handle noisy and higher ambient dimension point cloud data, addressing a key limitation noted in the paper. You experiment with parameter tuning for chart radii and SVM boundaries to maintain geometric fidelity and computational efficiency. You evaluate the learned atlas graph's ability to preserve intrinsic dimensionality and approximate geodesic distances under noise, using a real or synthetic high-dimensional dataset.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension and research potential by improving robustness and scalability of the atlas graph method.

**Grounded in:** Limitations: The approach requires careful tuning of parameters like chart radii and SVM boundaries for transition detection. Future directions: Extending atlas graph learning to handle higher ambient dimensions and noisy data more robustly.

**Tech stack:** Python 3.11, scikit-learn, NumPy, Matplotlib, Jupyter Notebook

**Data:** High-dimensional synthetic manifold data with added Gaussian noise, or a publicly available high-dimensional dataset (e.g., MNIST digits as a proxy for manifold data).

**Build it:**

1. Generate or obtain a high-dimensional point cloud dataset with controlled noise levels.
2. Implement the atlas graph learning pipeline with adjustable parameters for chart radii and SVM transition boundaries.
3. Develop heuristics or automated tuning methods to select parameters balancing coverage and approximation accuracy.
4. Evaluate the learned atlas graph's preservation of intrinsic dimensionality and approximate geodesic distances under varying noise and dimension.
5. Compare results to baseline manifold learning methods like PCA or t-SNE for distance preservation.
6. Document findings, parameter effects, and recommendations in a detailed README.

**Ships as:** A comprehensive Python project demonstrating robust atlas graph learning on noisy, high-dimensional data, with parameter tuning experiments, quantitative evaluations, and thorough documentation.

**Stretch goal:** Integrate the atlas graph with a Riemannian optimization algorithm (e.g., principal boundary) on the noisy learned manifold and report optimization performance.

_No code artifacts were released by the paper's authors; all implementations must be built from the paper's descriptions and standard synthetic or public datasets._
