---
title: "212 · Manifold learning and optimization using tangent space proxies — Lorenzo Orecchia"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lorenzo-orecchia"
source_hash: "1017f84c561e3def6ad788de70411cfea39d4522afeb503be099f7aa9f20665c"
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
