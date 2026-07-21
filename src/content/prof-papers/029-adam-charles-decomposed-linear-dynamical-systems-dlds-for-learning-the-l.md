---
title: "029 · Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics — Adam Charles"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ascharles"
source_hash: "a03b8672bd75337ac713613b7e7faa54293b890700a7808ed9e39e7d80235e38"
sequence: 29
generator: "outreach-garden: managed"
---

# 029 · Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics

## At a glance

- **Professor:** Adam Charles
- **Institution:** Johns Hopkins University
- **Paper:** [Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics](https://doi.org/10.48550/arxiv.2206.02972)
- **Authors:** Noga Mudrik, Yenho Chen, Eva Yezerets, Christopher J. Rozell, Adam S. Charles
- **Year:** 2023

## Paper overview

This paper introduces a novel model called decomposed Linear Dynamical Systems (dLDS) that represents complex neural population dynamics as a sparse combination of simpler linear dynamical systems. The model integrates dimensionality reduction and dynamical systems modeling to capture interpretable, nonlinear, and non-stationary neural activity patterns over time. It improves upon existing methods by allowing smooth transitions between dynamic modes, efficient representation of overlapping subnetworks, and better expressivity with fewer parameters. The authors demonstrate the model's effectiveness on synthetic data and real neural recordings from C. elegans.

### Why it matters

**Research problem:** Current models for neural population dynamics either focus on low-dimensional projections ignoring temporal dynamics or on dynamical systems that lack explicit geometric structure, limiting interpretability and expressivity. Existing switched linear dynamical systems (SLDS) struggle to model overlapping subnetworks and smooth transitions, and black-box models like RNNs lack interpretability.

**Why it matters:** Understanding neural population dynamics is crucial for linking neural activity to perception and behavior. Improved models that are both interpretable and expressive enable better insights into neural computation, identification of subnetworks, and analysis of complex neural data, which is essential for advancing neuroscience.

**Key contributions:**

- Introduction of the dLDS model integrating manifold hypothesis with dynamical systems for interpretable and expressive neural dynamics modeling.
- Development of a sparse coding framework for decomposing dynamics into reusable linear components allowing smooth transitions and overlapping dynamics.
- Demonstration of dLDS advantages over switched linear dynamical systems (rSLDS) in modeling speed changes, rotations, stability shifts, smooth transitions, and multiplexed subnetworks.
- Application of dLDS to real C. elegans calcium imaging data revealing diverse dynamics obscured by discrete state models.
- Provision of algorithms for both continuous and discrete time dynamics with efficient inference and learning procedures.

## About the professor

**Adam Charles** — Assistant Professor, Biomedical Engineering, Johns Hopkins University.

Research interests: machine learning and signal processing for neural imaging, data analysis, and other applications (including remote sensing and theoretical/computational neuroscience)

### Research links

- [Faculty/profile page](https://www.bme.jhu.edu/ascharles)
- [Resolved homepage](https://www.bme.jhu.edu/ascharles/)
- [Google Scholar](https://scholar.google.com/citations?user=c8RKLp0AAAAJ&hl=en)

## Learning path

To deeply understand the paper on decomposed Linear Dynamical Systems (dLDS), start with foundational knowledge on linear dynamical systems theory, which underpins the dynamic operators in dLDS. Next, build understanding of manifold learning in neural data to grasp the latent low-dimensional structure assumed by the model. Then, study expectation maximization for latent variable models to comprehend the training algorithm used. Finally, focus on sparse coding for dynamical systems, the core concept enabling dLDS to decompose neural dynamics into sparse linear components.

## Recommended videos (in order)

### Linear dynamical systems theory *(prerequisite)*
Linear dynamical systems theory provides the mathematical framework for modeling time-evolving systems with linear operators, which is fundamental to understanding the dynamic operators in dLDS. This includes concepts like eigenvalues, stability, and continuous versus discrete time dynamics.

*How the paper uses it:* dLDS models neural dynamics as sparse combinations of linear dynamic operators, so understanding linear dynamical systems is essential.

▶ [Lecture 1 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=bf1264iFr-w) — Stanford · 1:16:46

### Manifold learning in neural data *(prerequisite)*
Manifold learning techniques reveal low-dimensional geometric structures underlying high-dimensional neural data, aligning with the dLDS assumption that latent neural activity evolves on a low-dimensional manifold. This knowledge helps interpret how dLDS captures neural dynamics in a structured latent space.

*How the paper uses it:* dLDS assumes latent neural activity lies on a low-dimensional manifold, integrating manifold hypothesis with dynamical systems modeling.

▶ [Smita Krishnaswamy | Manifold Learning Yields Insight into ...](https://www.youtube.com/watch?v=deUVFAOY0kU) — Computational Genomics Summer Institute CGSI · 45:39

### Expectation maximization for latent variable models *(prerequisite)*
Expectation maximization (EM) is a key algorithmic approach for parameter estimation in models with latent variables, such as dLDS. Understanding EM enables comprehension of how dLDS parameters are efficiently learned despite latent states and sparse coding constraints.

*How the paper uses it:* The dLDS model is trained via an EM algorithm with gradient-based updates for efficient inference and learning.

▶ [CSCI 3151 - M09 - Latent-variable models & the EM algorithm](https://www.youtube.com/watch?v=c0THKJTN-ZQ) — Atlantic AI Institute · 1:12:02

### Sparse coding for dynamical systems
Sparse coding decomposes complex signals into a small number of active components from a learned dictionary, which is central to how dLDS represents neural dynamics as sparse combinations of linear dynamic operators. This concept enables interpretability and expressivity in the model.

*How the paper uses it:* dLDS uses sparse coding to decompose neural dynamics into reusable linear components allowing smooth transitions and overlapping dynamics.

▶ [Michael Elad: "Sparse Modeling in Image Processing and ...](https://www.youtube.com/watch?v=2bW4TkfTk-M) — Institute for Pure & Applied Mathematics (IPAM) · 42:05
