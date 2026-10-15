---
title: "632 · Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs — Georg Stadler"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-georg-stadler"
source_hash: "5038a2e13adc71e4617487e5a0b9d3b891da79d19150f32b76f43d4793bd6986"
sequence: 632
generator: "outreach-garden: managed"
---

# 632 · Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs

## At a glance

- **Professor:** Georg Stadler
- **Institution:** New York University
- **Paper:** [Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs](https://doi.org/10.1137/24M171557X)
- **Authors:** Rene Henrion, Georg Stadler, Florian Wechsung
- **Year:** 2025

## Paper overview

This paper studies how to optimally control systems described by partial differential equations (PDEs) when there is uncertainty in the system, and the system's state must satisfy certain constraints with high probability. The authors focus on joint chance constraints that require the state to remain within bounds almost everywhere with a given probability. They develop theoretical results on existence and uniqueness of solutions, propose a variance reduction technique based on spherical-radial decomposition (SRD) to efficiently estimate probabilities, and demonstrate numerical methods for linear and bilinear PDE control problems under uncertainty.

### Why it matters

**Research problem:** How to solve optimal control problems governed by PDEs under uncertainty, where the state variables must satisfy joint chance constraints ensuring that the state remains within prescribed bounds almost everywhere with high probability.

**Why it matters:** In many practical applications such as climate fluid dynamics, geophysics, and fusion, systems are governed by PDEs with uncertain parameters. Ensuring that state constraints are met with high probability is crucial for safety and reliability. However, uncertainty significantly complicates the optimization problem, increasing dimensionality and computational cost. Efficient and theoretically sound methods are needed to handle these chance constraints in infinite-dimensional settings.

**Key contributions:**

- Extension of existence, uniqueness, and convexity results to joint chance almost everywhere state constraints in PDE-constrained optimization.
- Theoretical proof and numerical demonstration that SRD sampling substantially reduces variance in probability estimation compared to standard Monte Carlo, especially for very high or low probabilities and near-symmetric sets.
- Development of explicit gradient formulas for the probability function using SRD, enabling efficient gradient-based optimization.
- Numerical studies showing that SRD quasi-Monte Carlo methods require 1-2 orders of magnitude fewer samples than standard Monte Carlo for the same accuracy, leading to significant computational speedup.
- Application of the framework to both linear and bilinear elliptic PDE control problems with uncertain parameters.

## About the professor

**Georg Stadler** — Professor of Mathematics and CS, Courant Institute, New York University.

Research interests: applied and computational mathematics, Bayesian inverse problems, extreme events, scientific ML, optimization with PDEs, parallel scientific computing

### Research links

- [Faculty/profile page](https://math.nyu.edu/~stadler)
- [Resolved homepage](https://math.nyu.edu/~stadler/)
- [Google Scholar](https://scholar.google.com/citations?user=pTbnj1IAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Stochastic PDE-constrained optimization
**The paper assumes:** graduate-level PDE-constrained optimization under uncertainty, stochastic analysis of PDEs, and chance-constrained optimization
**Already in this field?** Skip this entirely if you have already studied graduate-level courses on PDE-constrained optimization with uncertainty and chance constraints.

To understand the mathematical and computational foundations of optimal control under uncertainty with PDE constraints and joint chance constraints, it is essential to grasp stochastic optimization theory and algorithms. The rigorous course offers a deep dive into optimization theory, including existence, uniqueness, convexity, and gradient-based methods, which underpin the paper's theoretical contributions. The fast track provides a concise, intuition-driven introduction to core optimization concepts, enabling efficient comprehension of key ideas such as gradients, convexity, and constrained optimization relevant to the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Optimization Theory and Algorithms - Prof. Uday Khankhoje](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8XNc8SxMLbUxdR7lDSuIGw) — NPTEL-NOC IITM · 83 videos · 19.4h across the first 60 episodes

**Watch only this:** Episodes 1 to 20, about 6.5 hours — covering introduction, prerequisites, multivariate differentiation, gradient and Hessian properties, unconstrained optimization conditions, and trust region methods, which provide the necessary mathematical rigor for understanding PDE-constrained stochastic optimization.

*Why it unblocks this paper:* This university-level course by Prof. Uday Khankhoje covers foundational optimization theory and algorithms, including proofs of existence and uniqueness, convexity, gradient methods, and constrained optimization, directly supporting the theoretical framework and numerical methods used in the paper.

*If you want all of it:* About 19.4 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [optimization](https://www.youtube.com/playlist?list=PLJmYhyLVjuBM) — Naman Jain · 14 videos · 3.3h across 14 episodes

**Watch only this:** Episodes 1 to 8, about 1.9 hours — covering mathematical optimization basics, derivatives, gradient descent, and stochastic gradient descent, providing a quick yet solid foundation for the paper's optimization approach.

*Why it unblocks this paper:* This short-form playlist by Naman Jain offers clear, visual explanations of key optimization concepts such as directional derivatives, gradient descent, Lagrange multipliers, and convexity, which are essential for grasping the optimization techniques and variance reduction strategies in the paper.

*If you want all of it:* About 3.3 hours across all 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on optimal control under uncertainty with joint chance state constraints for elliptic PDEs, start by building foundational knowledge on elliptic PDE control, the Karhunen-Loeve expansion for dimension reduction of random fields, spherical-radial decomposition as a variance reduction technique, and gradient estimation methods in stochastic optimization. Then, focus on the core concept of chance-constrained optimization, which is central to the paper's formulation. Finally, deepen understanding with an advanced lecture on nonlinear optimal control methods related to PDEs, which, while not the authors' own talk, provides rigorous context for the paper's control-theoretic aspects.

### Elliptic PDE control lecture *(prerequisite)*
Understanding linear and bilinear elliptic PDEs and their control is foundational for this paper, which studies PDE-constrained optimization problems under uncertainty. The selected lecture introduces elliptic PDEs with a focus on model problems and numerical solution methods, providing the necessary PDE background.

*How the paper uses it:* The paper addresses optimal control problems governed by linear and bilinear elliptic PDEs, making this foundational knowledge essential.

▶ [Math676 LEC19 Elliptic PDES: Introduction and Model Problem-Part1](https://www.youtube.com/watch?v=VKbPwNz6ROo) — Joseph Ansong · 9:58 · 6y ago

### Karhunen Loeve expansion lecture *(prerequisite)*
The Karhunen-Loeve expansion is a key tool for dimension reduction of random fields representing uncertainty in PDE inputs. This lecture explains the mathematical basis and practical interpretation of the expansion, which the paper uses to discretize infinite-dimensional random fields efficiently.

*How the paper uses it:* The paper employs Karhunen-Loeve expansions to reduce the dimensionality of the uncertain input fields in PDE-constrained optimization.

▶ [17. Stochastic Processes II](https://www.youtube.com/watch?v=PPl-7_RL0Ko) — MIT OpenCourseWare · 1:15:59 · 11y ago

### Spherical radial decomposition lecture *(prerequisite)*
Spherical-radial decomposition (SRD) is a variance reduction technique for Monte Carlo estimation of probabilities under elliptical distributions. This lecture provides an overview of variance reduction methods in stochastic settings, which is crucial to understanding the paper's novel sampling approach.

*How the paper uses it:* The paper leverages SRD to reduce variance in estimating joint chance constraint probabilities under elliptical uncertainties.

▶ [Variance Reduction Techniques -  an overview](https://www.youtube.com/watch?v=ldz1_a4Du08) — FinQuest Institute LLP · 6:12 · 1y ago

### Gradient estimation in stochastic optimization lecture *(prerequisite)*
Efficient gradient estimation is necessary for gradient-based optimization under uncertainty. This lecture covers stochastic gradient methods and their theoretical foundations, helping to understand the explicit gradient formulas derived in the paper for the probability function.

*How the paper uses it:* The paper develops explicit gradient formulas for the discretized probability function to enable gradient-based optimization of chance-constrained PDE control problems.

▶ [Stochastic Optimization for Big Data Machine Learning Problems](https://www.youtube.com/watch?v=cj5zQR9Fcow) — Simons Institute for the Theory of Computing · 32:42 · 12y ago

### Chance constrained optimization lecture
Chance-constrained optimization is the core concept of the paper, involving constraints that must hold with high probability under uncertainty. This lecture provides a rigorous treatment of chance constraints, their formulation, and solution approaches, directly relating to the paper's problem setting.

*How the paper uses it:* The paper formulates and analyzes joint chance constraints on PDE states, making this concept central to its contributions.

▶ [Chance-Constrained Optimization](https://www.youtube.com/watch?v=1QCkFO3Y2QY) — Josh Pilipovsky · 1:03:58 · 5y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
While no direct recorded talk by the paper authors on this exact work is available, an advanced lecture on nonlinear optimal control provides relevant context on optimal control theory and dynamic programming methods that underpin PDE-constrained optimization approaches.

*How the paper uses it:* This lecture complements the paper's focus on optimal control under uncertainty by covering advanced nonlinear control theory concepts.

▶ [Nonlinear Control: Hamilton Jacobi Bellman (HJB) and Dynamic Programming](https://www.youtube.com/watch?v=-hO-AnFYm6M) — Steve Brunton · 17:39 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand optimal control under uncertainty with joint chance constraints in PDEs. Starting with the basics of elliptic PDEs and Karhunen-Loeve expansions for dimension reduction, it then covers variance reduction techniques like spherical-radial decomposition and gradient estimation in stochastic optimization. Finally, it introduces chance-constrained optimization to connect these ideas to the paper's core contributions.

### Elliptic PDE control lecture *(prerequisite)*
Learn what elliptic partial differential equations (PDEs) are, their classification, and basic solution concepts. This foundation is essential because the paper studies control problems governed by linear and bilinear elliptic PDEs.

*How the paper uses it:* The paper focuses on optimal control problems constrained by linear and bilinear elliptic PDEs.

▶ [Intro to Linear Elliptic Partial Differential Equations — Lesson 1, Part 1](https://www.youtube.com/watch?v=T9D0LZuu5YI) — Ansys Learning · 14:47 · 4y ago

### Karhunen Loeve expansion lecture *(prerequisite)*
Understand the Karhunen-Loeve expansion, a method to represent random fields efficiently by decomposing them into orthogonal components. This technique is crucial for reducing the infinite-dimensional uncertainty in PDEs to a manageable finite-dimensional form.

*How the paper uses it:* The paper uses Karhunen-Loeve expansions to discretize and reduce the dimension of the uncertain inputs and state variables.

▶ [Kosambi–Karhunen–Loève Expansion](https://www.youtube.com/watch?v=GC8W6vSzv_M) — Probability and Random Processes · 4:55 · 4y ago

### Spherical radial decomposition lecture *(prerequisite)*
Learn about spherical-radial decomposition (SRD), a variance reduction technique that decomposes elliptically distributed random variables into radial and spherical components to improve Monte Carlo estimation efficiency.

*How the paper uses it:* The paper leverages SRD to reduce variance in probability estimation of joint chance constraints under elliptical uncertainties.

▶ [Variance Reduction Techniques -  an overview](https://www.youtube.com/watch?v=ldz1_a4Du08) — FinQuest Institute LLP · 6:12 · 1y ago

### Gradient estimation in stochastic optimization lecture *(prerequisite)*
Explore how gradients can be estimated efficiently in stochastic optimization problems, enabling gradient-based methods to solve optimization under uncertainty.

*How the paper uses it:* The paper derives explicit gradient formulas for the probability function using SRD to enable efficient gradient-based optimization.

▶ [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — Gate Smashers · 9:35 · 6mo ago

### Chance constrained optimization lecture
Understand chance constraints, which enforce that constraints hold with high probability under uncertainty, and how they are used in optimization problems to ensure reliability.

*How the paper uses it:* The core of the paper is solving optimal control problems with joint chance constraints on PDE states under uncertainty.

▶ [Chance constraints](https://www.youtube.com/watch?v=FRLmJZEsS44) — Dr. Clausen · 8:52 · 5y ago

## Already in your library

- [HJB equations, dynamic programming principle and stochastic optimal control 1 - Andrzej Święch](https://www.youtube.com/watch?v=TFOfRkSnPyU) — also for: Optimal control for stochastic neural oscillators (Frédéric Gibou)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [But what is a partial differential equation?  | DE2](https://www.youtube.com/watch?v=ly4S0oi3Yz8) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [SVD Visualized, Singular Value Decomposition explained | SEE Matrix , Chapter 3 #SoME2](https://www.youtube.com/watch?v=vSczTbgc8Rc) — also for: QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models (Sai Qian Zhang)
- [5. Stochastic Processes I](https://www.youtube.com/watch?v=TuTmC8aOQJE) — also for: Fractional Brownian motion in a finite interval: correlations effect depletion or accretion zones of particles near boundaries (Michelle A. Borkin)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core contributions on optimal control of PDEs under uncertainty with joint chance constraints. The beginner project focuses on implementing a basic linear elliptic PDE solver with Gaussian uncertainty and estimating joint chance constraints via standard Monte Carlo. The intermediate project reimplements the spherical-radial decomposition (SRD) variance reduction technique for probability estimation and gradient computation, comparing it to standard Monte Carlo on a small PDE control problem. The advanced project extends the method to address one of the paper's limitations by experimenting with nonlinear PDE operators or non-elliptical uncertainty distributions, exploring computational trade-offs.

### Beginner — Linear elliptic PDE control with Monte Carlo chance constraint estimation
*Effort: a weekend, ~8 hours*

You build a simple finite difference solver for a linear elliptic PDE with uncertain Gaussian parameters modeled via Karhunen-Loeve expansion. Implement standard Monte Carlo sampling to estimate the probability that the PDE state satisfies prescribed joint constraints almost everywhere. Visualize the estimated probability and sample PDE states.

**Why it shows you understood the paper:** This project shows you understand the problem setup of PDE-constrained optimization under uncertainty, the role of joint chance constraints, and the baseline Monte Carlo method for probability estimation before variance reduction.

**Grounded in:** The project demonstrates the paper's formulation of joint chance constraints on the state variable governed by linear elliptic PDEs with Gaussian uncertainties and the baseline Monte Carlo probability estimation (Approach section, Key Contributions #2).

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Simulated Gaussian random field data generated via Karhunen-Loeve expansion as described in the paper; no external dataset required.

**Build it:**

1. Implement a finite difference solver for a linear elliptic PDE on a 1D or 2D domain.
2. Generate Gaussian random input parameters using Karhunen-Loeve expansion with a small number of modes.
3. Sample the uncertainty using standard Monte Carlo to generate PDE state realizations.
4. Check the joint chance constraint that the state remains within prescribed bounds almost everywhere.
5. Estimate the probability of constraint satisfaction from the samples and visualize results.

**Ships as:** A GitHub repo with code and a Jupyter notebook demonstrating PDE solution sampling, Monte Carlo probability estimation, and plots of the state and estimated chance constraint probability.

**Stretch goal:** Add a simple gradient approximation for the probability function using finite differences to prepare for optimization.

### Intermediate — Implementing spherical-radial decomposition for variance reduction in PDE chance constraints
*Effort: 2 weekends, ~20 hours*

You reimplement the spherical-radial decomposition (SRD) sampling method described in the paper to estimate joint chance constraint probabilities and their gradients for a linear elliptic PDE control problem with Gaussian uncertainty. Compare variance and sample efficiency against standard Monte Carlo and quasi-Monte Carlo sampling. Use Karhunen-Loeve expansions for dimension reduction.

**Why it shows you understood the paper:** This project proves you grasp the paper's core methodological advance—SRD variance reduction and explicit gradient formulas—and can implement and benchmark it against baseline methods on a PDE control problem.

**Grounded in:** This project directly implements the paper's key contributions on SRD variance reduction (Key Contributions #2, #3, #4) and numerical experiments showing sample efficiency gains (Key Results #5).

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Simulated Gaussian random fields via Karhunen-Loeve expansion as in the beginner project; no external dataset required.

**Build it:**

1. Reimplement the linear elliptic PDE solver and Karhunen-Loeve expansion from the beginner project.
2. Implement the spherical-radial decomposition sampling method for elliptically distributed uncertainties.
3. Estimate joint chance constraint probabilities using SRD and standard Monte Carlo sampling.
4. Compute gradients of the probability function using the explicit formulas derived from SRD.
5. Compare variance and root mean square error of probability estimates between SRD and standard Monte Carlo.
6. Visualize and report sample efficiency improvements and gradient behavior.

**Ships as:** A GitHub repo with code and notebooks demonstrating SRD implementation, variance reduction comparison plots, gradient computations, and a short report summarizing findings.

**Stretch goal:** Incorporate quasi-Monte Carlo sampling with SRD and compare its performance to standard quasi-Monte Carlo.

### Advanced — Extending SRD variance reduction to nonlinear PDE operators or non-elliptical uncertainties
*Effort: 3+ weeks*

You develop an extension of the SRD variance reduction technique to handle either nonlinear PDE operators dependent on control or uncertainty distributions beyond elliptical ones (e.g., non-Gaussian). Implement a prototype solver and sampling method, analyze computational cost and variance reduction trade-offs, and compare to baseline Monte Carlo methods.

**Why it shows you understood the paper:** This project tackles one of the paper's stated limitations and future directions, demonstrating deep comprehension of the method's assumptions and practical challenges in extending it beyond the linear/elliptical setting.

**Grounded in:** This project addresses the paper's limitations regarding linear PDE operators and elliptical uncertainties and explores future directions for nonlinear constraints and broader uncertainty classes (Limitations and Future Directions sections).

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook, Optional: PyTorch or JAX for automatic differentiation

**Data:** Simulated data for nonlinear PDEs or non-elliptical uncertainty distributions generated as needed; no external dataset required.

**Build it:**

1. Review and understand the SRD method and its reliance on linearity and elliptical distributions.
2. Select a nonlinear elliptic PDE operator or a non-elliptical uncertainty distribution to study.
3. Develop or adapt a sampling scheme inspired by SRD to handle the chosen nonlinear or non-elliptical setting.
4. Implement the PDE solver and sampling method, including gradient computations if feasible.
5. Benchmark variance reduction and computational cost against standard Monte Carlo.
6. Document challenges, limitations, and potential improvements.

**Ships as:** A GitHub repo with code, notebooks, and a detailed README discussing the extension approach, experimental results, and analysis of computational trade-offs.

**Stretch goal:** Explore adaptive discretization or sampling strategies to improve efficiency in the nonlinear or non-elliptical setting.

_The authors released no code or datasets for this paper; all data must be simulated following the paper's descriptions, especially the Karhunen-Loeve expansions and Gaussian random fields._
