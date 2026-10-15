---
title: "662 · A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions — Julian Panetta"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-julian-panetta"
source_hash: "c24a6528b4ec8c62581a515bf72299ba1147acf2dd9805e319f09612ab20a9ca"
sequence: 662
generator: "outreach-garden: managed"
---

# 662 · A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions

## At a glance

- **Professor:** Julian Panetta
- **Institution:** Univ. of California - Davis
- **Paper:** [A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions](https://arxiv.org/pdf/2310.00177v5)
- **Authors:** Kai Weixian Lan, Elias Gueidon, Ayano Kaneda, Julian Panetta, Joseph Teran
- **Year:** 2024

## Paper overview

This paper presents a novel neural network-based preconditioner to efficiently solve large linear systems arising from Poisson equations with mixed Dirichlet and Neumann boundary conditions, which are common in fluid simulations. The method outperforms traditional solvers and previous neural preconditioners by using a lightweight, multigrid-inspired architecture that adapts to changing domain shapes and boundary conditions without costly setup.

### Why it matters

**Research problem:** Solving large, ill-conditioned linear systems from discretized Poisson equations with mixed boundary conditions is computationally expensive, especially for evolving domains where traditional preconditioners like multigrid require costly rebuilds at each time step.

**Why it matters:** Efficiently solving these systems is critical for real-time and high-fidelity incompressible fluid simulations and other scientific computing applications. Existing methods either have high setup costs or limited applicability to mixed boundary conditions, limiting their practical use.

**Key contributions:**

- Introduction of a lightweight neural network architecture with spatially varying convolutional kernels that effectively approximate the inverse of structured-grid Laplacian matrices with mixed Dirichlet and Neumann boundary conditions.
- Demonstration that a simple residual-based loss function suffices for unsupervised training, enabling generalization to unseen domain shapes, boundary conditions, and grid sizes.
- Development of the NPSDO iterative solver variant to accommodate the non-symmetric neural preconditioner.
- Comprehensive benchmarking showing the solver outperforms state-of-the-art methods including algebraic multigrid, incomplete Cholesky, and recent neural preconditioners like DCDM and FluidNet.
- Release of code and pretrained models to promote reproducibility.

## About the professor

**Julian Panetta** — Assistant Professor, Computer Science, Univ. of California - Davis.

Research interests: Physical Simulation, Geometry Processing, Optimization-based Inverse Design for Digital Fabrication

### Research links

- [Faculty/profile page](https://julianpanetta.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Numerical Linear Algebra
**The paper assumes:** iterative methods for linear systems, preconditioning techniques, properties of Laplacian matrices, and numerical solution of PDE discretizations
**Already in this field?** Skip this entirely if you already understand iterative linear solvers, preconditioning, and matrix properties relevant to PDE discretizations.

This background focuses on numerical linear algebra, essential for understanding the iterative solvers and neural preconditioners used in the paper. The rigorous course option offers a deep, structured university-level treatment of linear algebra concepts relevant to solving large linear systems, while the fast track provides a concise, intuition-driven explainer series for quicker comprehension. Choose the course for thorough mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

**Watch only this:** Lectures 2, 3, 4, 7, 8, 10, 14, 15, 16, 21, 22 — about 8.5 hours total. These cover elimination, matrix inversion, LU factorization, solving linear systems, projections, least squares, and eigenvalues, directly relevant to iterative solvers and preconditioning.

*Why it unblocks this paper:* MIT 18.06 Linear Algebra by Prof. Gilbert Strang is a highly authoritative and comprehensive course covering fundamental linear algebra topics such as matrix inversion, factorization, and eigenvalues, which underpin the paper's solver design and neural preconditioner theory.

*If you want all of it:* About 28 hours across all 36 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Numerical Linear Algebra](https://www.youtube.com/playlist?list=PLAVG7GMBpcYArR9QLXm3DVvqYhRdF6Tsj) — Nick Space Cowboy · 25 videos · 6.7h across 25 episodes

**Watch only this:** Episodes 4, 5, 7, 8, 10, 11, 13, 19, 20 — about 2.5 hours total. These cover LU decomposition, Cholesky, forward/backward substitution, least squares, and matrix norms, sufficient for grasping the solver and preconditioner basics.

*Why it unblocks this paper:* Nick Space Cowboy's Numerical Linear Algebra playlist offers clear, concise videos that explain core concepts like LU decomposition, Cholesky, least squares, and matrix norms in an accessible way, providing a quick yet solid foundation for understanding the paper's numerical methods.

*If you want all of it:* About 6.7 hours across all 25 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on a neural-preconditioned Poisson solver with mixed Dirichlet and Neumann boundary conditions, start by building foundational knowledge on iterative methods for non-symmetric linear systems and classical multigrid methods for Poisson equations. Then, study the mathematical and numerical treatment of mixed boundary conditions and the unsupervised training approach for neural networks in linear solvers. Finally, focus on the paper's core contribution by watching the authors' own presentation of their neural preconditioner method.

### Iterative methods for non-symmetric linear systems *(prerequisite)*
Understanding iterative methods for solving non-symmetric linear systems is essential because the paper's neural preconditioner produces a non-symmetric operator, requiring a specialized iterative solver (NPSDO). This section covers foundational iterative algorithms and their adaptations for non-symmetric problems.

*How the paper uses it:* The paper develops the NPSDO iterative solver variant to accommodate the non-symmetric neural preconditioner.

▶ [Preconditioned iterative solution of non-symmetric linear systems - Andy Wathen, July 6, 2022](https://www.youtube.com/watch?v=HDoNvjbxq4Q) — nla-group · 4 yr ago

### Multigrid methods for Poisson equations *(prerequisite)*
Multigrid methods are classical and highly efficient solvers for Poisson equations, which the paper aims to improve upon with neural preconditioning. Understanding multigrid provides context for the paper's motivation and architectural inspiration.

*How the paper uses it:* The paper draws inspiration from multigrid methods and benchmarks against algebraic multigrid solvers.

▶ [9.1 Multigrid Method for Solving Poisson: Navier Stokes Equation with CUDA](https://www.youtube.com/watch?v=kzPCDMULNbE) — Fenrir Von Der Nebelungs · 2 wk ago

### Mixed Dirichlet and Neumann boundary conditions *(prerequisite)*
The paper specifically addresses Poisson equations with mixed Dirichlet and Neumann boundary conditions, which complicate solver design. This section explains the mathematical formulation and numerical challenges of these boundary conditions.

*How the paper uses it:* The neural preconditioner is designed to handle mixed Dirichlet and Neumann boundary conditions efficiently.

▶ [Lec 02 | PDE | Boundary Value Problems: Linear, Dirichlet, Neumann, Robin Conditions Explained #pde](https://www.youtube.com/watch?v=G7PaWmHOQgE) — Learn with khuram · 1 yr ago

### Unsupervised training of neural networks for linear solvers *(prerequisite)*
The paper trains its neural preconditioner using a simple residual-based loss in an unsupervised manner, enabling generalization without labeled data. Understanding unsupervised training principles is key to grasping this approach.

*How the paper uses it:* The network is trained unsupervised using a residual-based loss function to approximate the inverse Laplacian.

▶ [Lec-23: Supervised vs Unsupervised learning with real life example](https://www.youtube.com/watch?v=fM8XdC1EweU) — Gate Smashers · 2 yr ago

### A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions *(paper-talk search result; attribution unverified)*
This is the authors' own presentation of their ICML 2024 paper, providing the most direct and detailed explanation of their novel neural preconditioner architecture, training methodology, and solver design. Watching this talk offers the clearest insight into the paper's contributions and experimental results.

*How the paper uses it:* This video is the introduction talk by the paper's first author, Kai Lan, explaining the neural-preconditioned solver in detail.

▶ [A Neural-preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions](https://www.youtube.com/watch?v=tIsewPxv6Oc) — Kai Lan · 2 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's novel neural-preconditioned Poisson solver. Start with the basics of mixed Dirichlet and Neumann boundary conditions, then learn about iterative methods for solving non-symmetric linear systems, followed by unsupervised training of neural networks relevant to the solver's training approach. Finally, explore the core paper talk by the authors to see how these ideas combine in their lightweight neural preconditioner.

### Mixed Dirichlet and Neumann boundary conditions *(prerequisite)*
Learn what Dirichlet and Neumann boundary conditions mean in partial differential equations, how they specify values or derivatives on domain boundaries, and why mixed conditions are important in modeling physical problems like fluid simulations.

*How the paper uses it:* The paper focuses on efficiently solving Poisson equations with these mixed boundary conditions, which are common in fluid simulations.

▶ [Lec 02 | PDE | Boundary Value Problems: Linear, Dirichlet, Neumann, Robin Conditions Explained #pde](https://www.youtube.com/watch?v=G7PaWmHOQgE) — Learn with khuram · 1 yr ago

### Iterative methods for non-symmetric linear systems *(prerequisite)*
Understand iterative methods for solving linear systems, especially when the system or preconditioner is non-symmetric, which requires specialized solvers beyond standard conjugate gradient methods.

*How the paper uses it:* The neural preconditioner is non-symmetric, motivating the use of the specialized NPSDO iterative solver variant.

▶ [Preconditioned iterative solution of non-symmetric linear systems - Andy Wathen, July 6, 2022](https://www.youtube.com/watch?v=HDoNvjbxq4Q) — nla-group · 4 yr ago

### Unsupervised training of neural networks for linear solvers *(prerequisite)*
Explore how neural networks can be trained without labeled data using residual-based loss functions, enabling them to learn to approximate solutions to linear systems in an unsupervised manner.

*How the paper uses it:* The paper uses a simple residual-based loss function to train the neural preconditioner in an unsupervised way, enabling generalization.

▶ [Lec-23: Supervised vs Unsupervised learning with real life example](https://www.youtube.com/watch?v=fM8XdC1EweU) — Gate Smashers · 2 yr ago

### Paper authors neural preconditioner talk *(paper-talk search result; attribution unverified)*
Watch the authors' own introduction to their neural-preconditioned Poisson solver, which explains their lightweight neural network architecture, training approach, and solver design tailored for mixed boundary conditions.

*How the paper uses it:* This video directly presents the paper's core contributions and methods from the authors themselves.

▶ [A Neural-preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions](https://www.youtube.com/watch?v=tIsewPxv6Oc) — Kai Lan · 2 mo ago

## Already in your library

- [Lec 20 | MIT 18.086 Mathematical Methods for Engineers II](https://www.youtube.com/watch?v=kyx2QgGkEpc) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the neural-preconditioned Poisson solver for mixed Dirichlet and Neumann boundary conditions. Starting with a basic implementation of a Poisson solver with mixed boundary conditions, you then build an intermediate neural network-based preconditioner inspired by the paper's architecture and training approach. Finally, the advanced project extends the method by addressing one of the paper's stated limitations, such as optimizing the neural network evaluation or adapting the solver to unstructured grids.

### Beginner — Poisson Solver with Mixed Boundary Conditions
*Effort: a weekend, ~8 hours*

You implement a basic iterative solver for the Poisson equation on a structured 2D grid with mixed Dirichlet and Neumann boundary conditions. The solver uses a standard conjugate gradient method with a simple Jacobi preconditioner. You visualize the solution and residual convergence.

**Why it shows you understood the paper:** This project shows you understand the problem setting of mixed boundary conditions and the challenges in solving the resulting linear systems, which is the foundation for the paper's contributions.

**Grounded in:** Demonstrates understanding of the research problem: solving large, ill-conditioned linear systems from Poisson equations with mixed Dirichlet and Neumann boundary conditions.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic 2D structured grid data with manually specified mixed Dirichlet and Neumann boundary conditions.

**Build it:**

1. Implement a 2D discrete Laplacian operator on a structured grid with mixed boundary conditions.
2. Set up a linear system representing the Poisson equation with these boundary conditions.
3. Implement a conjugate gradient solver with Jacobi preconditioning.
4. Visualize the solution and plot residuals over iterations.
5. Test on different domain shapes and boundary condition configurations.

**Ships as:** A Python repository with code to solve and visualize Poisson problems with mixed boundary conditions, including convergence plots.

**Stretch goal:** Add support for 3D structured grids and visualize 3D solutions.

### Intermediate — Neural Preconditioner for Poisson Solver
*Effort: 2 weekends, ~20 hours*

You reimplement the core neural preconditioner architecture described in the paper, including spatially varying convolution kernels, and train it in an unsupervised manner using a residual-based loss on synthetic 2D Poisson problems with mixed boundary conditions. You integrate it into an iterative solver variant (e.g., NPSDO or a simplified version) and compare convergence speed against a baseline Jacobi or incomplete Cholesky preconditioner.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution: the lightweight neural network architecture and unsupervised training approach for approximating the inverse Laplacian with mixed boundary conditions, as well as the need for a specialized solver due to non-symmetry.

**Grounded in:** Reimplements the novel lightweight neural network architecture with spatially varying convolution kernels and the unsupervised residual-based training approach.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic 2D structured grid Poisson problems with mixed Dirichlet and Neumann boundary conditions generated on the fly.

**Build it:**

1. Implement the spatially varying convolutional neural network architecture as described in the paper.
2. Generate synthetic training data by sampling Poisson problems with mixed boundary conditions.
3. Train the network using the residual-based unsupervised loss function.
4. Integrate the trained network as a preconditioner in an iterative solver (e.g., implement a simplified NPSDO or GMRES variant).
5. Benchmark convergence speed and iteration counts against a baseline preconditioner.
6. Visualize residual decay and compare solver runtimes.

**Ships as:** A PyTorch-based implementation of the neural preconditioner with training scripts, solver integration, and benchmarking results comparing to a baseline.

**Stretch goal:** Extend training and evaluation to 3D structured grids and test generalization to unseen domain shapes.

### Advanced — Optimized Neural Preconditioner Evaluation
*Effort: 3+ weeks*

You develop an optimized implementation of the spatially varying convolution block to accelerate neural network evaluation, addressing the paper's limitation that network evaluation is the main computational bottleneck. This may include custom CUDA kernels, pruning, or quantization techniques. You evaluate the impact on solver runtime and accuracy on 2D and 3D Poisson problems with mixed boundary conditions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the neural preconditioner's computational challenges and practical deployment considerations.

**Grounded in:** Addresses the limitation and future direction: optimizing the spatially varying convolution block implementation for faster evaluation and lower computational cost.

**Tech stack:** Python 3.11, PyTorch, CUDA, NumPy, Matplotlib

**Data:** Synthetic 2D and 3D structured grid Poisson problems with mixed boundary conditions generated programmatically.

**Build it:**

1. Profile the baseline neural preconditioner implementation to identify bottlenecks.
2. Implement optimized spatially varying convolution operations using CUDA or PyTorch extensions.
3. Incorporate pruning or quantization to reduce model size and inference time.
4. Retrain or fine-tune the neural preconditioner with optimizations applied.
5. Benchmark solver runtime and accuracy before and after optimization on 2D and 3D problems.
6. Document trade-offs between speed and preconditioner quality.

**Ships as:** An optimized neural preconditioner implementation with benchmarking results demonstrating reduced inference time and maintained solver accuracy.

**Stretch goal:** Port the optimized preconditioner to specialized hardware accelerators such as Apple Neural Engine or TensorRT.
