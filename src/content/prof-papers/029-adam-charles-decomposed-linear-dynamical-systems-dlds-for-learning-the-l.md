---
title: "029 · Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics — Adam Charles"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ascharles"
source_hash: "123c6034c4d2b6624e8e48d7fa6af6701a86c7547dcc1e196765d2983de27c6c"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on decomposed Linear Dynamical Systems (dLDS) for neural dynamics, start with foundational knowledge on linear dynamical systems and sparse coding/dictionary learning, which underpin the model's mathematical framework. Next, explore switched linear dynamical systems to grasp the baseline models that dLDS improves upon. Finally, focus on the core concept of dLDS itself, emphasizing the authors' own talks and advanced lectures that integrate manifold hypotheses with sparse dynamical system decomposition for interpretable neural modeling.

### Linear Dynamical Systems lecture *(prerequisite)*
Linear dynamical systems form the mathematical foundation for modeling time-evolving processes in a linear state-space framework. Understanding their properties, solutions, and applications is essential to grasp how dLDS decomposes complex neural dynamics into linear components.

*How the paper uses it:* dLDS builds on linear dynamical systems theory to represent neural population dynamics as combinations of simpler linear flows.

▶ [Lecture 5 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=HvumsVkVbdk) — Stanford · 1:15:14

### Sparse coding and dictionary learning seminar *(prerequisite)*
Sparse coding and dictionary learning provide the framework for representing data as sparse combinations of learned basis elements. This is critical for understanding how dLDS decomposes neural dynamics into a sparse set of dynamic operators, enabling interpretability and efficiency.

*How the paper uses it:* dLDS uses a sparse coding framework to represent neural dynamics as sparse combinations of dictionary elements called dynamic operators.

▶ [Simple, Efficient and Neural Algorithms for Sparse Coding](https://www.youtube.com/watch?v=XU_5s8lgTsY) — Simons Institute for the Theory of Computing · 11 years ago

### Switched linear dynamical systems lecture *(prerequisite)*
Switched linear dynamical systems (SLDS) are a class of models that represent dynamics as switching between discrete linear modes. Understanding SLDS is important to appreciate the limitations that dLDS overcomes, such as modeling smooth transitions and overlapping subnetworks.

*How the paper uses it:* dLDS improves upon SLDS by enabling smooth transitions and overlapping dynamics rather than discrete switching.

▶ [Day 2, Scott Linderman, State Space Models for Natural and ...](https://www.youtube.com/watch?v=xNaay0W04ZI) — allen institute · 28:34

### dLDS paper talk *(the paper's own talk)*
The authors' own talks and advanced seminars provide the most direct and detailed exposition of the dLDS model, its motivation, mathematical formulation, and empirical results. These talks are invaluable for understanding the novel contributions and nuances of the approach.

*How the paper uses it:* Direct presentation of the dLDS model by experts offers the clearest insight into its design and advantages over existing methods.

▶ [B. Hamzi:  Kernel Flows and Kernel Mode Decomposition for learning dynamical systems from data](https://www.youtube.com/watch?v=UAd1gE9oLAk) — Machine Learning and Dynamical Systems Seminar · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the decomposed Linear Dynamical Systems (dLDS) paper, start by building a foundation in linear dynamical systems, which are the building blocks of the model. Next, learn about sparse coding and dictionary learning, as these techniques enable the decomposition of complex dynamics into simpler components. Then, explore the manifold learning concept to grasp the low-dimensional structure assumption of neural data. Finally, study the core idea of decomposed linear dynamical systems to see how these elements integrate into a novel, interpretable model for neural dynamics.

### Linear Dynamical Systems lecture *(prerequisite)*
Linear dynamical systems describe how a system's state evolves over time according to linear rules, often represented by matrices. Understanding these systems is essential because dLDS models neural dynamics as combinations of simpler linear systems. This foundation helps grasp how dynamics can be decomposed and analyzed.

*How the paper uses it:* dLDS builds on linear dynamical systems by decomposing complex neural dynamics into sparse combinations of simpler linear operators.

▶ [Lecture 5 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=HvumsVkVbdk) — Stanford · 1:15:14

### Sparse coding and dictionary learning seminar *(prerequisite)*
Sparse coding and dictionary learning are techniques to represent complex data as combinations of a few basic elements (dictionary atoms). This approach helps in efficiently capturing structure and interpretability by enforcing sparsity. Understanding these methods is crucial to see how dLDS represents neural dynamics as sparse combinations of dynamic operators.

*How the paper uses it:* dLDS uses sparse coding to represent neural dynamics as sparse linear combinations of dictionary elements called dynamic operators.

▶ [Neural networks [8.1] : Sparse coding - definition](https://www.youtube.com/watch?v=7a0_iEruGoM) — Hugo Larochelle · 12 years ago

### Manifold learning for neural data talk *(prerequisite)*
Manifold learning assumes that high-dimensional data lie on a lower-dimensional curved space (manifold). This concept is important to understand how neural activity can be modeled as evolving on a low-dimensional manifold, which dLDS exploits to improve interpretability and expressivity.

*How the paper uses it:* dLDS integrates the manifold hypothesis by modeling latent neural states evolving on a low-dimensional manifold.

▶ [Dimensionality Reduction Techniques | Introduction and ...](https://www.youtube.com/watch?v=jc1_yPYmspk) — DeepFindr · 13:10

### Decomposed Linear Dynamical Systems lecture
This concept combines the previous ideas by decomposing complex neural dynamics into sparse, smooth combinations of linear dynamic operators on a manifold. It enables modeling smooth transitions and overlapping subnetworks, overcoming limitations of discrete switching models.

*How the paper uses it:* The core contribution of the paper is the dLDS model, which decomposes neural dynamics into sparse combinations of linear operators with smooth transitions on a manifold.

▶ [Lecture 12 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=PBUWAf1uvSA) — Stanford · 1:13:37

## Already in your library

- [Linear Dynamical Systems and Control (Prof. Scott Dawson)](https://www.youtube.com/watch?v=Y5jWRnya3ds) — also for: Hidden Anchors in Multi-Agent LLM Deliberation (R. V. Dantu)
- [Lecture 1 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=bf1264iFr-w) — also for: Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics (Adam Charles)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the decomposed Linear Dynamical Systems (dLDS) model from the paper. The beginner project reproduces a core concept of sparse linear combinations of dynamic operators on synthetic data, the intermediate project implements the core dLDS method and compares it to a baseline on a synthetic dataset, and the advanced project extends the model to address a stated limitation by incorporating nonlinear dynamic operators or hierarchical structures on neural data.

### Beginner — Sparse Combination of Linear Dynamics on Synthetic Spiral Data
*Effort: a weekend, ~8 hours*

You build a small Python project that simulates a simple 2D spiral dynamical system and implements a sparse coding approach to represent its dynamics as a linear combination of a few linear dynamic operators. You visualize how modulating sparse coefficients can smoothly change the system's speed or rotation, reproducing a key figure from the paper.

**Why it shows you understood the paper:** This project demonstrates you grasp the core idea of decomposing complex dynamics into sparse combinations of simpler linear operators and how smooth transitions arise from continuous coefficient modulation, a central contribution of the paper.

**Grounded in:** dLDS efficiently models speed changes in synthetic spiral systems using a single dynamic operator with modulated coefficients, outperforming rSLDS which requires multiple discrete states.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D spiral system data generated within the project, as described in the paper's synthetic experiments.

**Build it:**

1. Simulate a 2D spiral dynamical system trajectory as time series data.
2. Define a small dictionary of linear dynamic operators (matrices) representing simple dynamics.
3. Implement sparse coding to represent the system's dynamics as a sparse linear combination of these operators with time-varying coefficients.
4. Visualize the reconstructed trajectories and coefficient smoothness over time.
5. Compare the sparse combination approach to a naive single operator or discrete switching baseline.

**Ships as:** A Jupyter notebook with code, plots of spiral trajectories under sparse dynamic operator combinations, and explanations linking to the paper's figure.

**Stretch goal:** Add a simple discrete switching baseline (rSLDS-like) and quantitatively compare reconstruction errors.

### Intermediate — Reimplementation of dLDS on Synthetic Neural Dynamics with Baseline Comparison
*Effort: 1-3 weekends*

You implement the core decomposed Linear Dynamical Systems (dLDS) model from the paper in Python, including dictionary learning and sparse coefficient inference, and apply it to synthetic neural population data simulating multiplexed subnetworks. You compare dLDS performance against a switched linear dynamical system (rSLDS) baseline using prediction accuracy metrics (R and R2).

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic framework into working code, understand the sparse coding and EM training procedure, and reproduce key quantitative results demonstrating dLDS advantages over rSLDS.

**Grounded in:** Quantitative comparisons show dLDS achieves equal or better prediction accuracy (R and R2) than rSLDS across multiple synthetic and real datasets.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic neural population data simulating multiplexed subnetworks as described in the paper's synthetic experiments section.

**Build it:**

1. Implement the dLDS model including dictionary learning of dynamic operators and sparse coefficient inference using an EM algorithm with gradient updates.
2. Generate or simulate synthetic neural population data with multiplexed subnetworks and overlapping dynamics.
3. Implement or use an existing rSLDS baseline (e.g., from https://github.com/lindermanlab/ssm) for comparison.
4. Train both models on the synthetic data and compute prediction accuracy metrics (R and R2).
5. Visualize learned dynamic operators, coefficient trajectories, and compare reconstruction quality.
6. Document the implementation details and results in a Jupyter notebook or README.

**Verified links from the paper:**

- <https://github.com/lindermanlab/ssm> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing dLDS, scripts to run experiments on synthetic data, comparison plots and metrics against rSLDS, and a detailed README explaining the approach and results.

**Stretch goal:** Extend the implementation to handle continuous-time dynamics using matrix exponentials as in the paper.

### Advanced — Extension of dLDS with Nonlinear Dynamic Operators on C. elegans Neural Data
*Effort: a few weeks*

You extend the dLDS model by incorporating nonlinear dynamic operators or hierarchical dictionary structures to capture richer neural dynamics, addressing a key limitation stated in the paper. You apply this extended model to real C. elegans calcium imaging data (or a suitable substitute), analyze the results, and compare interpretability and prediction accuracy to the original dLDS.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's methodology and limitations, and the ability to innovate by extending the model to capture nonlinearities or hierarchical dynamics while maintaining interpretability, thus aligning with the paper's future directions.

**Grounded in:** Extending dLDS to handle larger-scale neural recordings with higher dimensionality and more complex dynamics; Incorporating nonlinear dictionary elements or hierarchical structures to capture richer dynamics.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Real C. elegans calcium imaging data as described in the paper; if unavailable, simulate similar neural population data with complex dynamics.

**Build it:**

1. Review and understand the original dLDS implementation and its limitations regarding linearity and interpretability.
2. Design and implement nonlinear dynamic operators (e.g., kernelized operators or neural network parameterizations) or hierarchical dictionary structures within the dLDS framework.
3. Obtain and preprocess C. elegans calcium imaging data or simulate comparable neural data.
4. Train the extended dLDS model on this data and evaluate prediction accuracy and interpretability compared to the original dLDS.
5. Visualize learned nonlinear operators, coefficient trajectories, and interpret dynamic modes.
6. Document the methodology, challenges, and results thoroughly.

**Ships as:** A comprehensive GitHub repository with extended dLDS code, experiments on real or simulated neural data, visualizations, and a detailed report discussing improvements and limitations.

**Stretch goal:** Develop automated hyperparameter tuning for the extended model to improve robustness and performance.

_The paper's authors did not release code, so the intermediate and advanced projects require reimplementation of dLDS from the paper's descriptions; real C. elegans data may need to be substituted with synthetic data if access is unavailable._
