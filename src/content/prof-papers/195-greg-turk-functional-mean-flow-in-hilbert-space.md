---
title: "195 · Functional Mean Flow in Hilbert Space — Greg Turk"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-greg-turk"
source_hash: "ce8a21782fb71bfc078551f86448d85d728c9f7a0663b08d5e89187a058a8c10"
sequence: 195
generator: "outreach-garden: managed"
---

# 195 · Functional Mean Flow in Hilbert Space

## At a glance

- **Professor:** Greg Turk
- **Institution:** Georgia Institute of Technology
- **Paper:** [Functional Mean Flow in Hilbert Space](https://arxiv.org/abs/2511.12898)
- **Authors:** Zhiqi Li, Yuchen Sun, Greg Turk, Bo Zhu
- **Year:** 2025

## Paper overview

This paper introduces Functional Mean Flow (FMF), a novel one-step generative modeling framework designed for infinite-dimensional Hilbert spaces. FMF extends existing flow matching methods to functional data such as time series, images, PDE solutions, and 3D geometry, enabling efficient and stable one-step generation. The authors also propose an x1-prediction variant that improves training stability over the original u-prediction approach. Experiments demonstrate FMF's effectiveness across diverse functional generation tasks, including real-world time series, image synthesis at arbitrary resolutions, and 3D shape reconstruction.

### Why it matters

**Research problem:** Existing functional generative models require many sampling steps during inference, which is computationally expensive. Extending one-step generative models like Mean Flow to infinite-dimensional Hilbert spaces is challenging due to theoretical inconsistencies between marginal and conditional flows and numerical instabilities caused by functional derivatives and operator-valued velocity fields.

**Why it matters:** Functional generative models allow continuous representations of data, enabling training and sampling at arbitrary resolutions and decoupling computational cost from data resolution. Improving one-step generation methods in infinite-dimensional spaces can drastically reduce inference time and resource usage, benefiting applications in robotics, biology, and computer graphics where high-resolution functional data is common.

**Key contributions:**

- Derived an infinite-dimensional mean-velocity formulation enabling one-step generation in Hilbert spaces.
- Introduced the x1-prediction variant of Mean Flow with improved training stability over u-prediction.
- Developed a practical training algorithm using conditional losses and stop-gradient approximations.
- Demonstrated FMF's effectiveness on multiple functional generation tasks: time series, images, PDEs, and 3D shapes.
- Showed FMF can generate images at arbitrary resolutions from partial pixel subsets.

## About the professor

**Greg Turk** — College of Computing, Georgia Institute of Technology.

Research interests: Computer graphics, robotics, machine learning, simulation for biology.

### Research links

- [Faculty/profile page](http://www.cc.gatech.edu/~turk)
- [Resolved homepage](https://faculty.cc.gatech.edu/~turk)
- [Google Scholar](http://scholar.google.com/citations?user=Q_4d9N0AAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Functional Mean Flow (FMF) paper, start with foundational knowledge on Hilbert space functional analysis and neural operators for PDEs, which underpin the infinite-dimensional functional data setting and computational implementation. Next, study flow matching generative models to grasp the prior generative framework FMF extends. Finally, focus on the core concept of Functional Mean Flow itself through the authors' own and related advanced talks to gain detailed insights into their novel one-step generative modeling framework in Hilbert spaces.

### Hilbert space functional analysis *(prerequisite)*
Hilbert spaces provide the infinite-dimensional vector space framework where functional data reside, essential for understanding the mathematical formulation of FMF. The selected lecture from MIT OpenCourseWare offers a rigorous graduate-level introduction to Hilbert space theory and functional analysis, covering inner products and key properties relevant to the paper's infinite-dimensional setting.

*How the paper uses it:* FMF operates in infinite-dimensional Hilbert spaces, making a solid understanding of Hilbert space theory foundational.

▶ [Lecture 14: Basic Hilbert Space Theory](https://www.youtube.com/watch?v=EBdgFFf54U0) — MIT OpenCourseWare · 1:23:24

### Neural operators for PDEs *(prerequisite)*
Neural operators are critical computational tools used in FMF to implement the generative framework for functional data such as PDE solutions. The talk by MLPS provides a comprehensive seminar-level introduction to neural operators, their motivation, and applications in learning solution operators of PDEs, aligning well with the paper's implementation approach.

*How the paper uses it:* FMF leverages neural operators to handle infinite-dimensional functional data efficiently during training and sampling.

▶ [Neural operator: A new paradigm for learning PDEs by ...](https://www.youtube.com/watch?v=Lg2pgjDWqMM) — MLPS - Combining AI and ML with Physics Sciences · 1:01:11

### Flow matching generative models *(prerequisite)*
Flow matching is the generative modeling framework FMF extends to infinite-dimensional Hilbert spaces. The MIT OpenCourseWare lecture by Peter Holderrieth offers an advanced, rigorous treatment of flow matching and diffusion models, providing the necessary background to understand FMF's methodological innovations.

*How the paper uses it:* FMF generalizes flow matching methods to functional data in Hilbert spaces for one-step generation.

▶ [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 01 ...](https://www.youtube.com/watch?v=GCoP2w-Cqtg) — Peter Holderrieth · 1:25:12

### Functional Mean Flow talk *(the paper's own talk)*
This section focuses on the core concept of the paper: Functional Mean Flow. The AI Paper Cast talk specifically addresses the mean flows for one-step generative modeling, closely related to the paper's contributions. It provides a concise and technical explanation of the mean velocity calculation and one-step generation, directly relevant to the FMF framework.

*How the paper uses it:* This talk directly covers the authors' novel one-step generative modeling approach using mean flows, central to the paper.

▶ [2505.13447 - Mean Flows for One-step Generative Modeling](https://www.youtube.com/watch?v=0V6cL-EesNM) — AI Paper Cast · 17:08

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Functional Mean Flow paper from a beginner to advanced level, start by building foundational knowledge of Hilbert spaces and functional analysis, since the paper operates in infinite-dimensional vector spaces. Next, learn about neural operators, which are key computational tools for modeling PDEs and functional data. Then, study flow matching generative models, the prior framework extended by FMF. Finally, explore the core concept of the infinite-dimensional mean-velocity formulation that enables one-step generation in Hilbert spaces, culminating in a direct look at the authors' own presentation for deep insight.

### Hilbert space functional analysis *(prerequisite)*
Hilbert spaces are infinite-dimensional vector spaces equipped with an inner product, generalizing Euclidean geometry to functions. Understanding these spaces is essential because the paper models data as elements in such infinite-dimensional spaces, enabling continuous representations.

*How the paper uses it:* The paper formulates one-step generative modeling in infinite-dimensional Hilbert spaces, so grasping Hilbert space theory is foundational.

▶ [What's a Hilbert space? A visual introduction](https://www.youtube.com/watch?v=yckiapQlruY) — Physics Duck · 6:10

### Neural operators for PDEs *(prerequisite)*
Neural operators are machine learning models designed to learn mappings between function spaces, especially useful for solving PDEs efficiently. They enable the paper's framework to handle complex functional data like PDE solutions and 3D shapes.

*How the paper uses it:* FMF uses neural operators to implement its infinite-dimensional generative modeling framework practically.

▶ [Fourier Neural Operator for Parametric Partial Differential Equations (Paper Explained)](https://www.youtube.com/watch?v=IaS72aHrJKE) — Yannic Kilcher · 5 years ago

### Flow matching generative models *(prerequisite)*
Flow matching is a generative modeling technique that learns continuous transformations between distributions, combining advantages of diffusion and flow-based models. Understanding this prior framework is crucial since FMF extends it to infinite-dimensional functional data.

*How the paper uses it:* FMF extends flow matching methods to infinite-dimensional Hilbert spaces for one-step functional generation.

▶ [Flow Matching for Generative Modeling (Paper Explained)](https://www.youtube.com/watch?v=7NNxK3CqaDk) — Yannic Kilcher · 56:16

### Functional Mean Flow talk *(the paper's own talk)*
A direct presentation by the authors or closely related talks provide deep insight into the FMF method, its motivations, and experimental results, complementing the theoretical understanding with practical perspectives.

*How the paper uses it:* This talk offers an in-depth explanation of the FMF framework and its advantages over prior methods.

▶ [2505.13447 - Mean Flows for One-step Generative Modeling](https://www.youtube.com/watch?v=0V6cL-EesNM) — AI Paper Cast · 17:08

## Already in your library

- [Anima Anandkumar - Neural operator: A new paradigm for ...](https://www.youtube.com/watch?v=Bd4KvlmGbY4) — also for: Learning bias corrections for climate models using deep neural operators (Aniruddha Bora)
- [PyTorch Expert Exchange: Efficient Generative Models: From ...](https://www.youtube.com/watch?v=Eqg0VIiWrgM) — also for: LongSight: Compute-Enabled Memory to Accelerate Large-Context LLMs via Sparse Attention (José F. Martínez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for Functional Mean Flow (FMF) in infinite-dimensional Hilbert spaces. Starting from a small-scale reproduction of the x1-prediction variant's stability advantage, you progress to implementing the core FMF method on a functional dataset with quantitative evaluation. The advanced project extends FMF to a new domain, addressing a stated future direction by applying the method to a robotics simulation task involving dynamic functional data.

### Beginner — Reproduce x1-Prediction Stability on 3D Shape SDF Data
*Effort: a weekend, ~8 hours*

You build a minimal Python notebook that simulates the training stability difference between the u-prediction and x1-prediction variants of FMF on a small synthetic 3D signed distance function (SDF) dataset. The notebook visualizes training loss curves and collapse behavior to illustrate the stability advantage of x1-prediction.

**Why it shows you understood the paper:** This project demonstrates you understand the key stability limitation of u-prediction FMF and the proposed x1-prediction solution, a core contribution of the paper, by faithfully reproducing its qualitative behavior on a simplified dataset.

**Grounded in:** x1-prediction FMF exhibits superior stability and avoids collapse in challenging 3D signed distance field shape generation tasks compared to u-prediction.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, PyTorch

**Data:** Synthetic 3D signed distance function shapes generated procedurally in the notebook, simulating the paper's 3D shape generation task.

**Build it:**

1. Implement a simple synthetic 3D SDF dataset generator (e.g., spheres, cubes) in Python.
2. Implement minimal versions of u-prediction and x1-prediction FMF training loops using PyTorch, focusing on the velocity field and prediction variants.
3. Train both variants on the synthetic dataset and record training losses and collapse indicators.
4. Plot and compare training stability curves to visualize the collapse of u-prediction and stability of x1-prediction.
5. Write a README explaining the setup, the FMF variants, and the observed stability difference.

**Ships as:** A Jupyter notebook with code, plots comparing training stability of u-prediction vs x1-prediction FMF on synthetic 3D SDF data, and a README explaining the results.

**Stretch goal:** Add a simple 3D shape reconstruction visualization from the learned model to qualitatively show generation quality differences.

### Intermediate — Implement FMF with x1-Prediction on 1D Time Series Data
*Effort: 2 weekends, ~20 hours*

You implement the core Functional Mean Flow method with the x1-prediction variant from the paper, training it on a publicly available 1D time series dataset (e.g., synthetic sine waves or a small real-world dataset). You compare FMF's one-step generation performance against a simple baseline such as a multi-step flow matching or a naive neural operator, reporting metrics like MSE or likelihood.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's infinite-dimensional mean-velocity formulation and training algorithm, apply the x1-prediction variant, and quantitatively evaluate FMF's performance on functional data, demonstrating grasp of the core method and its benefits.

**Grounded in:** Derived an infinite-dimensional mean-velocity formulation enabling one-step generation in Hilbert spaces; introduced the x1-prediction variant with improved training stability; demonstrated FMF's effectiveness on 1D time series datasets.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic or publicly available 1D time series data (e.g., sine waves or a small real-world dataset like ECG or stock prices) to simulate the paper's 1D time series experiments.

**Build it:**

1. Implement or obtain a simple 1D time series dataset for training and evaluation.
2. Implement the infinite-dimensional mean-velocity FMF formulation with x1-prediction in PyTorch, including the conditional loss and stop-gradient approximations.
3. Train the FMF model on the dataset and generate samples in one step.
4. Implement a simple baseline model (e.g., multi-step flow matching or a neural operator) for comparison.
5. Evaluate and compare generation quality using MSE or likelihood metrics, and plot sample trajectories.
6. Document the implementation details, training procedure, and quantitative results in a README.

**Ships as:** A GitHub repository with FMF x1-prediction implementation on 1D time series, baseline comparison, evaluation metrics, sample plots, and a detailed README.

**Stretch goal:** Extend the implementation to handle partial observation conditioning or irregularly sampled time series, demonstrating FMF's flexibility.

### Advanced — Apply FMF x1-Prediction to Dynamic Functional Data in Robotic Simulation
*Effort: 3-4 weeks*

You extend the FMF framework by applying the x1-prediction variant to a new domain: dynamic, high-dimensional functional data from a robotics simulation environment (e.g., joint angle trajectories or force fields over time). You implement neural operators to model this data, train FMF for one-step generation, and evaluate robustness and sample quality, addressing the paper's future direction about robotic simulation applications.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of FMF's theoretical and practical aspects by adapting it to a novel, complex functional data domain relevant to robotics, directly engaging with the paper's proposed future research avenues and limitations.

**Grounded in:** Future directions include applying FMF to real-world robotics and biological simulation tasks involving dynamic, high-dimensional functional data; the x1-prediction variant improves stability in such challenging settings.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib, Robotics simulation environment (e.g., PyBullet or MuJoCo)

**Data:** Functional data generated from a robotics simulation environment, such as time series of joint angles or force fields, synthesized or recorded from open-source simulators.

**Build it:**

1. Set up a robotics simulation environment (e.g., PyBullet) and generate dynamic functional data representing robot joint trajectories or force fields.
2. Implement neural operator architectures suitable for modeling this functional data.
3. Implement the FMF framework with the x1-prediction variant adapted to this data domain.
4. Train FMF on the simulated robotics functional data for one-step generation.
5. Evaluate generation quality and stability, comparing against a baseline multi-step generative model or naive interpolation.
6. Document the methodology, challenges, results, and potential improvements in a comprehensive README.

**Ships as:** A GitHub repository demonstrating FMF x1-prediction applied to robotics simulation functional data, with code, evaluation, visualizations, and a detailed report linking to the paper's future directions.

**Stretch goal:** Investigate distillation or consistency model techniques to further improve sampling speed and stability in this robotics context.
