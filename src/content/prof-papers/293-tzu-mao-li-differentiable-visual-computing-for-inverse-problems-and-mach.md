---
title: "293 · Differentiable Visual Computing for Inverse Problems and Machine Learning — Tzu-Mao Li"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tzu-mao-li"
source_hash: "abcf65841bbcfdccd3b5feed71df1a8865707682b2a553fbdb3c2aabbfe7b53d"
sequence: 293
generator: "outreach-garden: managed"
---

# 293 · Differentiable Visual Computing for Inverse Problems and Machine Learning

## At a glance

- **Professor:** Tzu-Mao Li
- **Institution:** Univ. of California - San Diego
- **Paper:** [Differentiable Visual Computing for Inverse Problems and Machine Learning](https://arxiv.org/pdf/2312.04574)
- **Authors:** Andrew Spielberg, Fangcheng Zhong, Konstantinos Rematas, Krishna Murthy Jatavallabhula, Cengiz Oztireli, Tzu-Mao Li, Derek Nowrouzezahrai
- **Year:** 2023

## Paper overview

This paper surveys the emerging field of differentiable visual computing (DVC), which integrates classical visual computing methods with differentiable programming and deep learning to solve inverse problems in graphics, physics, and machine learning. It presents a unified pipeline that makes geometry, animation, and rendering differentiable, enabling gradient-based optimization for applications like robotics, manufacturing, and autonomous driving.

### Why it matters

**Research problem:** Traditional visual computing excels at forward simulation of physical and virtual worlds but lacks adaptability to real-world observations. Deep learning is adaptive but data-inefficient and often lacks physical interpretability. The research problem is how to combine the strengths of classical visual computing and deep learning through differentiable methods to efficiently solve inverse problems involving physical inference, control, and scene understanding.

**Why it matters:** Solving inverse problems efficiently and accurately is critical for applications such as robot control, computational design, autonomous vehicles, and scientific analysis. Differentiable visual computing can reduce data requirements, improve model interpretability, and enable real-time adaptation, which are essential for advancing machine intelligence and practical deployment in complex real-world systems.

**Key contributions:**

- A unified differentiable visual computing pipeline combining geometry, animation, and rendering.
- Comprehensive survey of differentiable methods in geometry processing, physics simulation, and rendering.
- Discussion of challenges such as handling discrete representations, numerical stability, and long simulation horizons.
- Highlighting integration of differentiable visual computing with deep learning for improved data efficiency and interpretability.
- Identification of emerging tools, languages, and hardware accelerating differentiable visual computing research.

## About the professor

**Tzu-Mao Li** — associate professor, CSE department, Univ. of California - San Diego.

Research interests: classical visual computing algorithms, modern data-driven methods, programming languages and systems

### Research links

- [Faculty/profile page](https://people.csail.mit.edu/tzumao)
- [Professor website](https://cseweb.ucsd.edu/~tzli)
- [Resolved homepage](https://cseweb.ucsd.edu/~tzli/)
- [Lab website](http://visualcomputing.ucsd.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Differentiable Visual Computing, start by building a foundation in the key prerequisite areas: differentiable geometry processing, differentiable physics simulation, differentiable rendering, and gradient-based optimization for inverse problems. These topics provide the mathematical and computational tools essential for the unified pipeline proposed. Finally, focus on the paper's core concept by watching talks from the paper authors and related advanced seminars to grasp the integration of classical visual computing with differentiable programming and deep learning.

### Differentiable geometry processing *(prerequisite)*
Differentiable geometry processing is foundational for enabling gradients to flow through geometric representations, which is critical for the paper's unified pipeline that makes geometry manipulable by gradients. The selected talks provide rigorous academic treatments from leading researchers and university courses, covering discrete differential geometry and differentiable shape representations.

*How the paper uses it:* The paper surveys differentiable geometry methods as a key stage in the visual computing pipeline.

▶ [Discrete Differential Geometry - Helping Machines (and ...](https://www.youtube.com/watch?v=Mcal5Cy7r4E) — Keenan Crane · 54:42

### Differentiable physics simulation *(prerequisite)*
Differentiable physics simulation enables gradient-based optimization in physical systems, which the paper highlights as providing orders-of-magnitude efficiency gains over gradient-free methods. The chosen talks are advanced university lectures and research seminars that cover differentiable PDE solvers, physics simulation frameworks, and applications in control and learning.

*How the paper uses it:* The paper discusses differentiable physics simulators as a core component of the animation and physics stage in the pipeline.

▶ [Autodiff and Adjoints for Differentiable Physics](https://www.youtube.com/watch?v=N7nVoyR0qO4) — Machine Learning & Simulation · 1:24:12

### Differentiable rendering *(the paper's own talk)*
Differentiable rendering is a key technique enabling inverse rendering and scene understanding from images via gradient-based methods. The selected videos include university lectures and research talks that survey differentiable rendering methods, Monte Carlo ray tracing, and neural rendering, providing the depth needed for advanced understanding.

*How the paper uses it:* The paper surveys differentiable rendering techniques as the final stage of the visual computing pipeline.

▶ [Physics-based differentiable rendering (CVPR 2021 tutorial)](https://www.youtube.com/watch?v=Tou8or1ed6E) — Physics-based differentiable rendering - CVPR 2021 · 5 years ago

### Gradient-based optimization for inverse problems *(prerequisite)*
Gradient-based optimization underpins the entire differentiable visual computing approach for solving inverse problems efficiently. The selected university lectures and research talks explain adjoint methods, gradient descent, and optimization theory relevant to inverse design and control.

*How the paper uses it:* The paper leverages gradient-based optimization as the fundamental method enabled by differentiable visual computing.

▶ [Inverse Design Lecture 2: Adjoint Method](https://www.youtube.com/watch?v=3Rma2p1Mvsc) — Flexcompute · 17:34

### Differentiable visual computing
This core concept integrates classical visual computing with differentiable programming to solve inverse problems in graphics and physics. The chosen talks include a detailed seminar by a paper co-author and other advanced research talks that provide direct insight into the unified pipeline and its applications.

*How the paper uses it:* The paper presents a unified differentiable visual computing pipeline combining geometry, animation, and rendering.

▶ [UCSD Assistant Professor 李子懋(Tzu-Mao Li) 教授 ...](https://www.youtube.com/watch?v=tGI5JFY7Sxs) — NYCU OCW · 1:41:46

### Paper authors talk *(the paper's own talk)*
Direct talks from the paper authors provide the most authoritative and detailed explanation of their vision and survey of differentiable visual computing. These talks offer unique insights into the pipeline, challenges, and future directions.

*How the paper uses it:* The paper authors' talks give direct insight into their unified differentiable visual computing pipeline.

▶ [Krishna Murthy - Building differentiable models of the 3D world](https://www.youtube.com/watch?v=TmCXj2GSgfo) — Vision & Graphics Seminar at MIT · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand differentiable visual computing as presented in the paper. Starting with gradient-based optimization for inverse problems, it then covers differentiable geometry processing and differentiable physics simulation, followed by differentiable rendering. Finally, it culminates with the core concept of differentiable visual computing, integrating these components into a unified pipeline.

### Gradient-based optimization for inverse problems *(prerequisite)*
Gradient-based optimization is a fundamental technique used to solve inverse problems by iteratively improving solutions using gradients. This section introduces the intuition behind gradients, minima, and how optimization algorithms use these concepts to find the best parameters for a model or system.

*How the paper uses it:* Gradient-based optimization underlies the paper’s approach to solving inverse problems efficiently using differentiable visual computing.

▶ [Gradients, Minima & Optimality Made Easy](https://www.youtube.com/watch?v=fWl9ITccsRA) — Coursesteach · 6:51

### Differentiable geometry processing *(prerequisite)*
Differentiable geometry processing makes geometric shapes and their properties manipulable by gradients, enabling optimization and learning directly on 3D shapes. This section builds intuition on how geometry can be represented and differentiated, which is essential for integrating geometry into differentiable pipelines.

*How the paper uses it:* The paper’s pipeline relies on differentiable geometry to enable gradient-based design and reconstruction tasks.

▶ [Discrete Differential Geometry - Helping Machines (and ...](https://www.youtube.com/watch?v=Mcal5Cy7r4E) — Keenan Crane · 54:42

### Differentiable physics simulation *(prerequisite)*
Differentiable physics simulation allows physical systems to be simulated in a way that gradients can be computed, enabling efficient optimization and control. This section explains why differentiability matters in physics simulations and how it improves learning and system identification.

*How the paper uses it:* Differentiable physics simulators in the paper provide orders-of-magnitude efficiency gains for control and system identification.

▶ [Differentiable Physics (for Deep Learning), Overview Talk by ...](https://www.youtube.com/watch?v=BwuRTpTR2Rg) — Nils Thuerey · 40:49

### Differentiable rendering *(prerequisite)*
Differentiable rendering enables computing gradients through the rendering process, allowing inverse rendering and scene understanding from images. This section introduces the key ideas behind differentiable rendering and why it is crucial for visual computing tasks involving images.

*How the paper uses it:* The paper highlights differentiable rendering as a key technique enabling inverse rendering and improved scene understanding.

▶ [CSC2547 Differentiable Rendering A Survey](https://www.youtube.com/watch?v=7LU0KcnSTc4) — UofT CSC 2547 3D & Geometric Deep Learning · 9:50

### Differentiable visual computing
Differentiable visual computing integrates differentiable geometry, physics, and rendering into a unified pipeline, enabling end-to-end gradient-based optimization for complex inverse problems. This section ties together the previous concepts to explain the holistic approach surveyed in the paper.

*How the paper uses it:* The paper presents a unified differentiable visual computing pipeline combining geometry, animation, and rendering for inverse problems and machine learning.

▶ [UCSD Assistant Professor 李子懋(Tzu-Mao Li) 教授 ...](https://www.youtube.com/watch?v=tGI5JFY7Sxs) — NYCU OCW · 1:41:46


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of differentiable visual computing as surveyed in the paper. The beginner project focuses on implementing a simple differentiable rendering gradient visualization using familiar tools. The intermediate project involves reimplementing a core differentiable physics simulation optimization to solve a small inverse problem, gaining new skills in physics simulation and gradient-based optimization. The advanced project extends the pipeline by addressing a stated limitation—numerical stability in long-horizon differentiable physics simulations—by experimenting with gradient quality improvement strategies, potentially contributing to future research directions.

### Beginner — Visualizing Differentiable Rendering Gradients
*Effort: a weekend, ~8 hours*

You build a small interactive demo that renders a simple 2D scene (e.g., a circle or square) and computes gradients of pixel intensities with respect to scene parameters such as shape position or color using automatic differentiation. The demo visualizes these gradients as heatmaps to illustrate how differentiable rendering enables gradient-based optimization.

**Why it shows you understood the paper:** This project concretely demonstrates the key concept of differentiable rendering from the paper, showing you understand how gradients flow through rendering and how they can be used for inverse problems.

**Grounded in:** Key contribution: "A unified differentiable visual computing pipeline combining geometry, animation, and rendering." Key result: "Differentiable rendering techniques enable inverse rendering and scene understanding from images with improved gradient estimators."

**Tech stack:** Python 3.11, Jupyter Notebook, PyTorch or JAX for autodiff, Matplotlib for visualization

**Data:** Synthetic 2D shapes generated programmatically within the notebook; no external data required.

**Build it:**

1. Implement a simple 2D renderer that outputs pixel intensities for a parametric shape (e.g., circle center and radius).
2. Use PyTorch or JAX to make the rendering function differentiable with respect to shape parameters.
3. Compute gradients of a simple loss (e.g., difference from a target image) with respect to parameters.
4. Visualize the gradient heatmaps over the image to show sensitivity.
5. Write a README explaining the connection to differentiable rendering and inverse problems.

**Ships as:** An interactive Jupyter notebook with code, visualizations of gradients, and explanations linking the demo to differentiable rendering concepts from the paper.

**Stretch goal:** Add a simple gradient-based optimization loop that adjusts shape parameters to match a target image, demonstrating inverse rendering.

### Intermediate — Gradient-Based Optimization of a Differentiable Physics Simulator
*Effort: 2 weekends, ~20 hours*

You reimplement a basic differentiable physics simulation of a simple system (e.g., a pendulum or mass-spring) and perform gradient-based optimization to solve an inverse problem such as system identification or control. You compare the efficiency of gradient-based optimization against a simple gradient-free baseline like random search.

**Why it shows you understood the paper:** This project shows you grasp the core method of differentiable physics simulation surveyed in the paper, including how gradients enable orders-of-magnitude efficiency gains for inverse problems in physics-based animation and control.

**Grounded in:** Key result: "Differentiable physics simulators provide orders-of-magnitude efficiency gains over gradient-free methods in control and system identification." Limitation: "Gradients can be expensive to compute and may suffer from numerical issues."

**Tech stack:** Python 3.11, JAX or PyTorch for autodiff, NumPy for numerical computations, Matplotlib for plotting results

**Data:** Synthetic simulation data generated by the implemented physics model; no external dataset required.

**Build it:**

1. Implement a simple physics simulator (e.g., pendulum dynamics) in a differentiable manner using JAX or PyTorch.
2. Define an inverse problem such as estimating initial conditions or control inputs to reach a target state.
3. Implement gradient-based optimization to solve the inverse problem using autodiff gradients.
4. Implement a baseline gradient-free optimization method (e.g., random search or grid search).
5. Compare convergence speed and solution quality between gradient-based and gradient-free methods.
6. Document the results and relate them to the paper's claims about efficiency gains.

**Ships as:** A GitHub repository with code, plots comparing optimization methods, and a README discussing the role of differentiable physics and gradient-based optimization as surveyed in the paper.

**Stretch goal:** Incorporate a simple neural network to learn residual dynamics and integrate it with the differentiable simulator for hybrid modeling.

### Advanced — Improving Gradient Stability in Long-Horizon Differentiable Physics Simulations
*Effort: 3+ weeks*

You extend a differentiable physics simulation pipeline to address the paper's limitation of numerical instability and vanishing gradients in long-horizon simulations. You implement and evaluate strategies such as gradient clipping, checkpointing, or hybrid optimization combining gradient-based and exploration methods to improve gradient quality and optimization robustness.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified in the paper, demonstrating deep comprehension of differentiable visual computing challenges and contributing experimental insights toward more robust differentiable physics simulation.

**Grounded in:** Limitation: "Gradients can be expensive to compute and may suffer from numerical issues like vanishing gradients and local minima." Future direction: "Exploration of hybrid optimization methods combining gradient-based and exploration strategies."

**Tech stack:** Python 3.11, JAX or PyTorch, NumPy, Matplotlib or Seaborn for analysis, Optional: Taichi if exploring domain-specific languages

**Data:** Synthetic long-horizon physics simulation data generated by your extended simulator; no external data required.

**Build it:**

1. Start from your intermediate differentiable physics simulator implementation with a longer simulation horizon.
2. Implement gradient stabilization techniques such as gradient clipping and checkpointing.
3. Experiment with hybrid optimization methods combining gradient-based updates with exploration (e.g., random perturbations or evolutionary strategies).
4. Evaluate gradient quality metrics (e.g., gradient norm, variance) and optimization convergence on benchmark inverse problems.
5. Analyze trade-offs between runtime, memory, and gradient stability.
6. Write a detailed report linking your findings to the paper's discussion of challenges and future directions.

**Ships as:** A comprehensive GitHub repository with code, experiments, plots, and a technical report discussing improvements in gradient stability and optimization robustness in differentiable physics simulations.

**Stretch goal:** Explore integration with domain-specific languages like Taichi or Dr. JIT to accelerate differentiable computation and test scalability.
