---
title: "829 · Accelerated Distributed Riemannian Optimization Algorithms with Random Shuffling — Heng Huang"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-heng-huang"
source_hash: "b56f192bfd2f54ab2acbeb1af3b71fe2985ab6e35ce92e24f0f9f1d3d7d3fb00"
sequence: 829
generator: "outreach-garden: managed"
---

# 829 · Accelerated Distributed Riemannian Optimization Algorithms with Random Shuffling

## At a glance

- **Professor:** Heng Huang
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Accelerated Distributed Riemannian Optimization Algorithms with Random Shuffling](https://www.ijcai.org/proceedings/2026/0566.pdf)
- **Authors:** Wenhan Xian, Heng Huang
- **Year:** 2026

## Paper overview

This paper proposes new algorithms for optimizing machine learning models on curved spaces called Riemannian manifolds, which are important for problems like principal component analysis and dictionary learning. The authors develop distributed versions of stochastic gradient descent that use random shuffling of data to speed up convergence. They provide theoretical guarantees that their methods converge faster than previous approaches and validate their algorithms with experiments on a leading eigenvector problem.

### Why it matters

**Research problem:** Improving the convergence rate of distributed stochastic gradient descent algorithms for nonconvex optimization problems on Riemannian manifolds, especially under both centralized and decentralized distributed learning settings.

**Why it matters:** Riemannian optimization is key to many machine learning problems involving constraints like orthogonality. Distributed learning is essential for scaling to large datasets. Faster convergence algorithms reduce computation time and resource usage, enabling more efficient training of complex models in practical applications.

**Key contributions:**

- Proposed centralized and decentralized distributed Riemannian SGD algorithms with random shuffling to accelerate convergence.
- Established theoretical convergence guarantees with improved SFO complexity from O(ϵ⁻⁴) to O(Nϵ⁻³), where N is data size.
- Demonstrated linear speedup in distributed settings proportional to number of worker nodes.
- Validated effectiveness through experiments on the leading eigenvector problem under both centralized and decentralized learning.

## About the professor

**Heng Huang** — Brendan Iribe Endowed Professor, Department of Computer Science, Department of Electrical and Computer Engineering, Univ. of Maryland - College Park.

Research interests: AI and Machine Learning, Health Computing, Precision Medicine

### Research links

- [Faculty/profile page](http://www.cs.umd.edu/~heng)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Riemannian Optimization
**The paper assumes:** differential geometry of manifolds, Riemannian geometry, and optimization algorithms on manifolds
**Already in this field?** Skip this entirely if you have prior coursework or research experience in Riemannian optimization or geometric machine learning.

To understand the advanced distributed Riemannian optimization algorithms in this paper, a solid grasp of optimization on Riemannian manifolds is essential. The rigorous course offers a deep, structured university-level treatment of the mathematical foundations and optimization techniques on manifolds, while the fast track provides a concise, intuition-driven introduction to key geometric concepts and optimization methods on Riemannian manifolds. Choose the rigorous course for thorough theoretical grounding, or the fast track for a quicker conceptual overview that still covers the core ideas.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [ICRA'24 Tutorial "Riemann and Gauss meet Asimov: 2nd Tutorial on Geometric Methods in Robot Learning, Optimization, and Control"](https://www.youtube.com/playlist?list=PL_oEZ6dld4ij-AyByAe5Adum1lLedJV4_) — Noémie Jaquier · 6 videos · 5.3h across 6 episodes

**Watch only this:** Episodes 1 and 2 (Basics of Riemannian Geometry for Robotics (2nd edition), Optimization on Riemannian Manifolds (2nd edition)), about 1.8 hours — these two episodes cover the essential geometric concepts and optimization techniques needed to understand the paper.

*Why it unblocks this paper:* This tutorial series by Noémie Jaquier provides a concise and clear introduction to Riemannian geometry and optimization on manifolds, focusing on geometric intuition and optimization methods, which aligns well with the paper's focus on Riemannian stochastic gradient descent.

*If you want all of it:* All 6 episodes, about 5.3 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on accelerated distributed Riemannian optimization with random shuffling, start with foundational knowledge on optimization on Riemannian manifolds and distributed stochastic gradient descent, as these form the geometric and algorithmic basis of the work. Next, study the role of random shuffling in optimization to grasp the key technique used to accelerate convergence. Finally, focus on the core concept of the paper itself, including the authors' own talks and advanced lectures on Riemannian optimization, to directly connect theory and practice in the proposed algorithms.

### Riemannian manifolds optimization *(prerequisite)*
Understanding optimization on Riemannian manifolds is essential as it provides the geometric framework for the paper's nonconvex optimization problems with manifold constraints. The recommended lecture by Nicolas Boumal is a rigorous university-level talk that covers foundational concepts and mathematical guarantees, preparing the viewer for advanced algorithmic developments.

*How the paper uses it:* The paper develops distributed Riemannian SGD algorithms, so a solid grasp of Riemannian optimization fundamentals is necessary.

▶ [An Introduction to Optimization on Smooth Manifolds -- Nicolas Boumal](https://www.youtube.com/watch?v=lK62DwSIjXA) — FMG Data Driven Control Summer School · Streamed 5y ago

### Random shuffling in optimization *(prerequisite)*
Random shuffling is a key technique used in the paper to accelerate convergence of stochastic gradient methods. The lecture by Sebastian Wild is a recent university-level course recording that rigorously discusses random shuffle algorithms, making it highly relevant for understanding the theoretical improvements in the paper.

*How the paper uses it:* The paper leverages random shuffling to improve convergence rates of distributed Riemannian SGD.

▶ [Efficient Algorithms (Winter 2026-27) - 01-1 Random Shuffle](https://www.youtube.com/watch?v=xX5Ae0WoM8g) — Sebastian Wild (Lectures) · 6d ago

### Paper authors talk
Direct talks by the paper authors or closely related advanced lectures provide the most precise and insightful explanations of the novel algorithms and theoretical results. While no direct talk by the authors on this exact paper is available, the series by Maxim Kochurov on Riemannian Optimization from a research-focused conference offers a deep dive into the optimization techniques closely related to the paper's contributions.

*How the paper uses it:* These talks cover advanced Riemannian optimization methods that underpin the paper's algorithmic innovations.

▶ [Maxim Kochurov: Riemannian Optimization part 1](https://www.youtube.com/watch?v=_vZdYYypM2o) — ODS AI Global · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's contributions, starting with the geometric setting of Riemannian manifolds and their optimization, then covering stochastic gradient descent and its distributed variants, followed by the key acceleration technique of random shuffling. The path builds intuition step-by-step, focusing on clear, concise explainers relevant to the paper's methods and results.

### Riemannian manifolds optimization *(prerequisite)*
Learn what Riemannian manifolds are—curved geometric spaces where optimization problems with constraints like orthogonality naturally live. This concept is fundamental because the paper optimizes functions defined on these curved spaces rather than flat Euclidean spaces.

*How the paper uses it:* The paper develops optimization algorithms specifically designed for machine learning problems on Riemannian manifolds.

▶ [An Introduction to Optimization on Smooth Manifolds -- Nicolas Boumal](https://www.youtube.com/watch?v=lK62DwSIjXA) — FMG Data Driven Control Summer School · Streamed 5y ago

### Stochastic gradient descent *(prerequisite)*
Understand stochastic gradient descent (SGD), a core optimization method that updates model parameters using noisy gradient estimates from random data samples, enabling scalable learning on large datasets. This builds the foundation for grasping the paper's Riemannian SGD variants.

*How the paper uses it:* The paper extends and accelerates stochastic gradient descent methods to the Riemannian manifold setting.

▶ [STOCHASTIC Gradient Descent (in 3 minutes)](https://www.youtube.com/watch?v=UmathvAKj80) — Visually Explained · 4y ago

### Distributed stochastic gradient descent *(prerequisite)*
Explore how SGD can be parallelized across multiple worker nodes to speed up training on large datasets, either in centralized or decentralized network settings. This is crucial for understanding the paper's distributed algorithmic framework.

*How the paper uses it:* The paper proposes distributed versions of Riemannian SGD to scale optimization across multiple machines.

▶ [Tutorial 12- Stochastic Gradient Descent vs Gradient Descent](https://www.youtube.com/watch?v=FpDsDn-fBKA) — Krish Naik · 7y ago

### Random shuffling in optimization *(prerequisite)*
Learn why randomly shuffling data samples before each epoch can improve the convergence speed of stochastic optimization algorithms by reducing bias and variance in gradient estimates.

*How the paper uses it:* The paper leverages random shuffling to accelerate convergence of distributed Riemannian SGD algorithms.

▶ [How Good is SGD with Random Shuffling?](https://www.youtube.com/watch?v=65ugioPYJsY) — COLT · 6y ago

### Riemannian stochastic gradient descent
Combine the ideas of Riemannian optimization and stochastic gradient descent to understand how gradients are computed and updated on curved manifolds using stochastic samples, which is the core method the paper improves upon.

*How the paper uses it:* The paper develops accelerated Riemannian SGD algorithms with random shuffling for distributed learning.

▶ [DGA - Riemannian Gradient Descent](https://www.youtube.com/watch?v=0lA3nmTGDUM) — Samuele Mongodi · 4y ago

### Paper authors talk
Hear directly from experts about the motivation, challenges, and innovations behind accelerated distributed Riemannian optimization algorithms, providing deeper insight into the paper's contributions and experimental validation.

*How the paper uses it:* Authors explain their novel algorithms and theoretical results in the context of Riemannian distributed optimization.

▶ [Maxim Kochurov: Riemannian Optimization part 1](https://www.youtube.com/watch?v=_vZdYYypM2o) — ODS AI Global · 5y ago

## Already in your library

- [Riemannian Manifolds in 12 Minutes](https://www.youtube.com/watch?v=jpjt08HkOzA) — also for: HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders (Toni Kazic)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's contributions on accelerated distributed Riemannian optimization with random shuffling. The beginner project reproduces a core mechanism of random shuffling in Riemannian SGD on a simple problem using your existing Python skills. The intermediate project implements the paper's centralized distributed Riemannian SGD algorithm on a leading eigenvector problem substitute, comparing convergence with and without random shuffling. The advanced project extends the decentralized algorithm to a dynamic network topology setting, addressing one of the paper's stated future directions and limitations.

### Beginner — Riemannian SGD with Random Shuffling on Sphere Manifold
*Effort: a weekend, ~8 hours*

You build a Python implementation of Riemannian stochastic gradient descent on the sphere manifold (unit vectors) to solve a simple leading eigenvector problem. You incorporate random shuffling of data batches without replacement and compare convergence behavior against standard SGD with replacement.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of random shuffling in Riemannian SGD and its effect on convergence, directly reflecting the paper's key contribution of accelerated convergence via random shuffling.

**Grounded in:** Proposed centralized and decentralized distributed Riemannian SGD algorithms with random shuffling to accelerate convergence.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic symmetric positive definite matrix to generate a leading eigenvector problem; data synthesized as random vectors on the sphere manifold.

**Build it:**

1. Implement Riemannian gradient computation for the sphere manifold (unit norm constraint).
2. Implement stochastic gradient descent with and without random shuffling of data batches.
3. Generate synthetic data representing a leading eigenvector problem (e.g., covariance matrix from random vectors).
4. Run experiments comparing convergence speed and stability between shuffling and non-shuffling SGD.
5. Plot convergence curves (objective value vs iterations) to visualize acceleration effects.
6. Write a README explaining the implementation, experiment setup, and results.

**Ships as:** A Jupyter notebook and Python scripts showing Riemannian SGD with random shuffling outperforming standard SGD on a toy leading eigenvector problem, with clear plots and explanations.

**Stretch goal:** Add a simple centralized distributed simulation with multiple workers computing gradients in parallel and aggregating updates.

### Intermediate — Centralized Distributed Riemannian SGD with Random Shuffling
*Effort: 1-3 weekends*

You reimplement the paper's centralized distributed Riemannian SGD (CRSGD-R) algorithm from the paper's description and apply it to a leading eigenvector problem using synthetic data. You compare convergence rates and stability against a baseline centralized Riemannian SGD without random shuffling.

**Why it shows you understood the paper:** This project shows you can implement the paper's core distributed algorithm, reproduce its key theoretical result of linear speedup and improved SFO complexity, and validate the acceleration effect of random shuffling experimentally.

**Grounded in:** Centralized distributed algorithm achieves linear speedup with SFO complexity O(Nϵ⁻³). Experimental results show faster and more stable convergence compared to baseline Riemannian SGD algorithms without random shuffling.

**Tech stack:** Python 3.11, NumPy, Multiprocessing or Ray for parallelism, Matplotlib, Jupyter Notebook

**Data:** Synthetic dataset simulating the leading eigenvector problem as in the paper; data generated as random symmetric matrices or covariance matrices.

**Build it:**

1. Implement the centralized distributed Riemannian SGD algorithm with random shuffling as described in the paper.
2. Use Python multiprocessing or Ray to simulate multiple worker nodes computing gradients in parallel.
3. Generate synthetic data for the leading eigenvector problem consistent with the paper's setup.
4. Implement a baseline centralized Riemannian SGD without random shuffling for comparison.
5. Run experiments measuring convergence speed, stability, and speedup with increasing number of workers.
6. Plot and analyze results comparing CRSGD-R and baseline, highlighting linear speedup and improved convergence.
7. Document the implementation details, experiment setup, and findings in a comprehensive README.

**Ships as:** A Python project with scripts and notebooks demonstrating the centralized distributed Riemannian SGD with random shuffling achieving faster convergence and linear speedup on a synthetic leading eigenvector problem, with comparative plots and analysis.

**Stretch goal:** Extend the implementation to include a simple decentralized distributed setting with consensus averaging.

### Advanced — Decentralized Distributed Riemannian SGD with Dynamic Network Topology
*Effort: a few weeks*

You extend the paper's decentralized distributed Riemannian SGD algorithm by simulating a dynamic or time-varying network topology among worker nodes. You implement consensus updates under changing connectivity and evaluate the impact on convergence and consensus error on a synthetic leading eigenvector problem.

**Why it shows you understood the paper:** This project tackles one of the paper's stated future directions and limitations by addressing dynamic network topologies, demonstrating deep comprehension of decentralized Riemannian optimization and practical challenges in distributed learning.

**Grounded in:** Exploring dynamic or time-varying decentralized network topologies. The decentralized algorithm analysis requires spectral gap assumptions on network topology.

**Tech stack:** Python 3.11, NumPy, NetworkX for dynamic graph simulation, Multiprocessing or Ray, Matplotlib, Jupyter Notebook

**Data:** Synthetic data for the leading eigenvector problem as in previous projects; network topology simulated dynamically with NetworkX.

**Build it:**

1. Implement the decentralized distributed Riemannian SGD algorithm with consensus updates as per the paper.
2. Simulate a dynamic network topology using NetworkX, where edges between worker nodes change over iterations.
3. Incorporate the time-varying mixing matrix W in consensus steps, relaxing the spectral gap assumption.
4. Run experiments to measure convergence speed, consensus error, and stability under dynamic topology.
5. Compare results with static network topology baseline to analyze impact of network dynamics.
6. Document challenges, implementation details, and experimental findings in a detailed README.

**Ships as:** A Python project demonstrating decentralized distributed Riemannian SGD operating under dynamic network topologies, with experimental evidence on convergence and consensus error, and discussion of implications.

**Stretch goal:** Apply the method to a real-world manifold-constrained machine learning problem such as dictionary learning or PCA on a public dataset.
