---
title: "056 · Geometric Understanding of Deep Learning — Xianfeng David Gu"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xianfeng-david-gu"
source_hash: "897b79ce1e0bcebc93299d8bc3a0288baa6188699ff2b2d4299389fa25030835"
sequence: 56
generator: "outreach-garden: managed"
---

# 056 · Geometric Understanding of Deep Learning

## At a glance

- **Professor:** Xianfeng David Gu
- **Institution:** Stony Brook University
- **Paper:** [Geometric Understanding of Deep Learning](https://doi.org/10.1016/j.eng.2019.09.010)
- **Authors:** Na Lei, Zhongxuan Luo, Shing-Tung Yau, David Xianfeng Gu
- **Year:** 2018

## Paper overview

This paper provides a geometric framework to understand why deep learning works well, focusing on the idea that natural high-dimensional data lies near low-dimensional manifolds. It introduces new concepts to measure how well deep neural networks can learn these manifolds and proposes using optimal mass transportation theory to control probability distributions in the latent space, improving generative models.

### Why it matters

**Research problem:** Understanding the theoretical foundations of deep learning, specifically how deep neural networks learn data manifolds and the limitations of their learning capabilities.

**Why it matters:** Deep learning has achieved great success but lacks a clear theoretical understanding, which is crucial for improving models, avoiding failures, and guiding future research.

**Key contributions:**

- Proposed a geometric framework interpreting deep learning as learning manifolds and their probability distributions.
- Introduced rectified linear complexity to measure the learning capacity of ReLU deep neural networks and the complexity of embedded manifolds.
- Proved that for any fixed neural network architecture, there exist manifolds too complex to be encoded by it.
- Applied optimal mass transportation theory to control latent space distributions, offering a mathematically explicit alternative to adversarial training.
- Demonstrated applications such as generative modeling and image denoising using the learned manifolds.

## About the professor

**Xianfeng David Gu** — SUNY Empire Innovation Professor, Department of Computer Science, Department of Applied Mathematics, Stony Brook University.

Research interests: Optimal transportation, Explainable AI, 3D Vision, Computational Conformal Geometry

### Research links

- [Faculty/profile page](http://www3.cs.stonybrook.edu/~gu)
- [Professor website](http://www.cs.stonybrook.edu/~gu)
- [Lab website](http://www3.cs.stonybrook.edu/~gu/software/holoimage/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=Y063_CIAAAAJ&hl=en)

## Learning path

To deeply understand the paper "Geometric Understanding of Deep Learning," start by building a solid foundation on the key mathematical and theoretical concepts it relies on: optimal mass transportation theory, manifold learning, and the expressivity of ReLU neural networks. These prerequisites provide the necessary background on the geometric and topological aspects of data and neural networks. Finally, engage with the authors' own talks presenting their geometric framework and results to directly connect theory with their novel contributions.

## Recommended videos (in order)

### Optimal mass transportation theory lecture *(prerequisite)*
Optimal mass transportation theory is a central mathematical tool used in the paper to explicitly control latent space distributions and improve generative modeling. Understanding the geometric viewpoint and dynamics of optimal transport will clarify how the authors apply this theory to deep learning.

*How the paper uses it:* The paper applies optimal mass transportation theory to control latent space distributions explicitly, offering a mathematically explicit alternative to adversarial training.

▶ [Lecture 01 | Optimal Transportation, Geometry and Dynamics](https://www.youtube.com/watch?v=TAnoqeYfO1Y) — Fields Institute · 1:22:26

### Manifold learning seminar *(prerequisite)*
Manifold learning is fundamental to the paper's framework, which models natural high-dimensional data as lying near low-dimensional manifolds. A rigorous seminar on manifold learning will provide the theoretical grounding on why and how data manifolds are used in machine learning.

*How the paper uses it:* The paper's geometric framework is based on the assumption that natural high-dimensional data concentrates close to nonlinear low-dimensional manifolds.

▶ [Marina Meilă: "Manifold Learning"](https://www.youtube.com/watch?v=PupDih20l3g) — Institute for Pure & Applied Mathematics (IPAM) · 1:12:32 · 6 years ago

### ReLU neural network expressivity lecture *(prerequisite)*
Understanding the representational capacity and piecewise linear structure of ReLU networks is crucial to grasping the paper's concept of rectified linear complexity, which quantifies the learning capacity of ReLU deep neural networks.

*How the paper uses it:* The paper introduces rectified linear complexity to measure the learning capacity of ReLU deep neural networks and the complexity of embedded manifolds.

▶ [Understanding ReLU Networks Through Graph Problems and ...](https://www.youtube.com/watch?v=solcZvvt3Cw) — Simons Institute for the Theory of Computing · 1:03:00

### Authors talk on geometric deep learning *(the paper's own talk)*
The authors' own talks provide direct insights into their geometric framework, the theoretical results, and applications such as generative modeling and image denoising. These talks are the most authoritative and focused presentations on the paper's contributions.

*How the paper uses it:* These talks present the authors' geometric interpretation of deep learning, their complexity measures, and the application of optimal mass transportation theory.

▶ [A Geometric Understanding of Deep Learning](https://www.youtube.com/watch?v=OEQua1WASyM) — David Xianfeng Gu · 1:03:12
