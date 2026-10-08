---
title: "568 · Nonlinear RMM-GKS for Large-Scale Dynamic and Streaming Inverse Problems with Uncertain Forward Operators — James G. Nagy"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-james-g-nagy"
source_hash: "89f66a8aa3efe08ebe742af5b66bdd1fb6e3d38dea2a481b4ac31306c10ed624"
sequence: 568
generator: "outreach-garden: managed"
---

# 568 · Nonlinear RMM-GKS for Large-Scale Dynamic and Streaming Inverse Problems with Uncertain Forward Operators

## At a glance

- **Professor:** James G. Nagy
- **Institution:** Emory University
- **Paper:** [Nonlinear RMM-GKS for Large-Scale Dynamic and Streaming Inverse Problems with Uncertain Forward Operators](https://arxiv.org/pdf/2605.06336)
- **Authors:** Toluwani Okunola, Mirjeta Pasha, Misha E. Kilmer, James G. Nagy, Eric de Sturler
- **Year:** 2026

## Paper overview

This paper develops a new computational framework called Nonlinear Recycled Majorization-Minimization Generalized Krylov Subspace (NL-RMM-GKS) to solve large-scale inverse problems where the forward model is uncertain and nonlinear. It addresses challenges in imaging systems like computed tomography and photoacoustic tomography where geometric uncertainties cause artifacts. The method efficiently estimates both the image and uncertain parameters jointly, supports dynamic and streaming data, and incorporates temporal regularization for dynamic imaging.

### Why it matters

**Research problem:** Inverse problems in imaging often involve reconstructing an unknown image from noisy measurements related through a forward operator that depends on uncertain parameters. These nonlinear inverse problems are challenging due to coupling between high-dimensional image reconstruction and nonlinear parameter estimation, especially in dynamic and streaming data settings.

**Why it matters:** Uncertainty in forward operators, such as unknown projection angles or sensor positions, leads to reconstruction artifacts and poor image quality in practical imaging systems. Efficiently solving these nonlinear inverse problems with bounded memory and high accuracy is critical for advancing medical imaging, geophysical exploration, and other fields.

**Key contributions:**

- Development of NL-RMM-GKS framework for joint image and parameter estimation in nonlinear inverse problems.
- Two algorithmic realizations: AltMin alternating between image and parameter updates, and VarPro eliminating image variable for parameter-only optimization.
- Adaptation of Krylov subspace recycling to nonlinear settings to maintain bounded memory.
- Streaming extensions enabling sequential data processing with memory independent of dataset size.
- Incorporation of temporal regularization strategies (optical flow and anisotropic total variation) for dynamic imaging.

## About the professor

**James G. Nagy** — Samuel Candler Dobbs Professor, Mathematics Department, Emory University.

Research interests: Numerical linear algebra, scientific computation, numerical solutions to discrete ill-posed problems in signal and image processing.

### Research links

- [Faculty/profile page](https://math.emory.edu/~nagy)
- [Resolved homepage](http://www.math.emory.edu/~nagy/)
- [Google Scholar](https://scholar.google.com/citations?user=fMdqZFsAAAAJ&hl=en)
- [GitHub](https://github.com/jnagy1/IRtools)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Numerical Linear Algebra
**The paper assumes:** Krylov subspace methods, iterative regularization, and numerical solutions to discrete ill-posed problems
**Already in this field?** Skip this entirely if you already have a solid understanding of Krylov subspace iterative methods and numerical techniques for inverse problems.

This background focuses on Numerical Linear Algebra, which is essential for understanding the Krylov subspace methods, iterative solvers, and majorization-minimization algorithms used in the NL-RMM-GKS framework for nonlinear inverse problems. The rigorous course option offers a deep, structured university-level treatment, while the fast track provides a concise, intuitive introduction to core linear algebra concepts relevant to this paper. Choose the course for comprehensive mastery or the fast track for a quick, focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2023 - Numerical Analysis](https://www.youtube.com/playlist?list=PLOzRYVm0a65d0WWST6wvOP6m7VRQyRgSa) — NPTEL IIT Bombay · 62 videos · 32.9h across the first 60 episodes

**Watch only this:** Watch Week 3 : Lecture 15 (Matrix Norms: Subordinate Matrix Norms), Week 3 : Lecture 16 (Matrix Norms: Condition Number of a Matrix), Week 4 : Lecture 17 (Iterative Methods: Jacobi Method), Week 4 : Lecture 18 (Iterative Methods: Convergence of Jacobi Method), Week 4 : Lecture 19 (Iterative Methods: Gauss-Seidel Method), Week 4 : Lecture 20 (Iterative Methods: Convergence Analysis of Iterative Methods), and Week 4 : Lecture 21 (Iterative Methods: Successive Over Relaxation Method); about 3.5 hours total.

*Why it unblocks this paper:* This NPTEL IIT Bombay Numerical Analysis course covers foundational numerical linear algebra topics including iterative methods, matrix norms, and convergence analysis, which are directly relevant to understanding Krylov subspace recycling, iterative regularization, and convergence proofs in the paper.

*If you want all of it:* About 32.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Linear Algebra Concepts](https://www.youtube.com/playlist?list=PL9RtCZdHujwwDn0dFat5J3UlHzqEyrVuz) — Dr. Economics (Rajesh Sir) NIT · 7 videos · 1.5h across 7 episodes

**Watch only this:** Watch episodes 1 (eigen values, rank, linear dependence and singularity), 2 (Concavity convexity [optima] of Quadratic functions using Definiteness and eigen), and 3 (linear independence rank and linear regression); about 40 minutes total.

*Why it unblocks this paper:* This short series by Dr. Economics (Rajesh Sir) provides clear, intuitive explanations of key linear algebra concepts such as eigenvalues, eigenvectors, matrix rank, and definiteness, which underpin the understanding of Krylov subspaces and optimization methods used in the paper.

*If you want all of it:* About 1.5 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on NL-RMM-GKS for nonlinear inverse problems with uncertain forward operators, start by building a strong foundation in the key mathematical and computational techniques it leverages. Begin with lectures on Majorization-Minimization methods and Krylov subspace methods, which underpin the optimization and numerical linear algebra framework. Then study nonlinear inverse problems and streaming/dynamic inverse problems to grasp the problem setting and challenges. Finally, focus on the core concept of the NL-RMM-GKS framework itself, which integrates these techniques, culminating with the authors' own talk if available.

### Majorization-Minimization methods lecture *(prerequisite)*
Majorization-Minimization (MM) is the core optimization principle underlying the nonlinear framework developed in the paper. Understanding MM algorithms, their convergence properties, and applications in signal processing and machine learning is essential to grasp how the authors extend MM-GKS to nonlinear problems.

*How the paper uses it:* The paper extends MM-GKS by developing a nonlinear MM framework (NL-RMM-GKS) for joint image and parameter estimation.

▶ [Kenneth Lange | MM Principle of Optimization | CGSI 2023](https://www.youtube.com/watch?v=S_QSbmBupLc) — Computational Genomics Summer Institute CGSI · 47:31 · 3y ago

### Krylov subspace methods lecture *(prerequisite)*
Krylov subspace methods are fundamental iterative techniques in numerical linear algebra for solving large-scale linear systems efficiently. The paper builds on Krylov subspace recycling strategies to maintain bounded memory in nonlinear inverse problems, so a solid understanding of Krylov methods like GMRES and Arnoldi iteration is crucial.

*How the paper uses it:* The NL-RMM-GKS framework incorporates Krylov subspace recycling to handle large-scale problems with memory constraints.

▶ [Harvard AM205 video 5.9 - Krylov methods: Arnoldi iteration and Lanczos interation](https://www.youtube.com/watch?v=2Y1ZDQw_2zw) — Chris Rycroft · 27:45 · 3y ago

### Nonlinear inverse problems lecture *(prerequisite)*
Nonlinear inverse problems involve reconstructing unknown parameters from data where the forward operator depends nonlinearly on these parameters. Understanding the coupling between image reconstruction and parameter estimation, as well as challenges like nonconvexity and uncertainty, is key to appreciating the problem the paper addresses.

*How the paper uses it:* The paper tackles nonlinear inverse problems with uncertain forward operators, jointly estimating images and parameters.

▶ [Computational Imaging with Nonlinear Inverse Problems](https://www.youtube.com/watch?v=vSItAMvL-RQ) — Berkeley Institute for Data Science (BIDS) · 51:42 · Streamed 11y ago

### Streaming and dynamic inverse problems lecture *(prerequisite)*
Dynamic and streaming inverse problems involve data arriving sequentially or time-varying parameters/images, requiring algorithms that can update estimates efficiently with bounded memory. This is critical to understand the streaming variants and temporal regularization strategies incorporated in the paper.

*How the paper uses it:* The paper develops streaming extensions and temporal regularization methods for dynamic imaging within the NL-RMM-GKS framework.

▶ [International Zoom Inverse Problems Seminar, Jan 21, 2021, Ali Feizmohammadi (UCL)](https://www.youtube.com/watch?v=bn6xCgCVG6w) — International Zoom Inverse Problems Seminar, UCI · 51:25 · 5y ago

### NL-RMM-GKS framework lecture
This concept covers the central method combining nonlinear majorization-minimization with Krylov subspace recycling for joint image and parameter estimation. Understanding this framework is essential to grasp the paper's novel contributions and algorithmic realizations.

*How the paper uses it:* The NL-RMM-GKS framework is the paper's main contribution, generalizing MM-GKS to nonlinear inverse problems with uncertain forward operators.

▶ [Dr. Silvia Gazzola | Krylov Subspace Methods for Sparse Reconstruction](https://www.youtube.com/watch?v=rylh2Q6OOco) — INI Seminar Room 1 · 48:59 · 9mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the NL-RMM-GKS framework for nonlinear inverse problems with uncertain forward operators, start by learning the basics of nonlinear inverse problems to grasp the challenge of joint image and parameter estimation. Then, build intuition on Krylov subspace methods, which are key numerical linear algebra tools for large-scale problems. Next, study Majorization-Minimization methods, the core optimization technique enabling efficient nonlinear problem solving. Finally, explore the NL-RMM-GKS framework itself, which combines these ideas with recycling and streaming strategies for dynamic imaging.

### Nonlinear inverse problems lecture *(prerequisite)*
Nonlinear inverse problems involve estimating unknown parameters or images from measurements where the relationship is nonlinear and often coupled. Understanding this helps appreciate the complexity of jointly estimating images and uncertain forward model parameters, as tackled in the paper.

*How the paper uses it:* The paper addresses nonlinear inverse problems where both image and forward operator parameters are unknown and coupled.

▶ [Computational Imaging with Nonlinear Inverse Problems](https://www.youtube.com/watch?v=vSItAMvL-RQ) — Berkeley Institute for Data Science (BIDS) · 51:42 · Streamed 11y ago

### Krylov subspace methods lecture *(prerequisite)*
Krylov subspace methods are iterative techniques for efficiently solving large linear systems and eigenvalue problems by projecting onto smaller subspaces. They are essential for handling large-scale inverse problems with bounded memory, as used in the paper's framework.

*How the paper uses it:* The NL-RMM-GKS framework uses Krylov subspace projections and recycling to efficiently solve large-scale problems.

▶ [Krylov subspace method explained](https://www.youtube.com/watch?v=NjdwyQG7-OI) — Daniel An · 36:19 · 2y ago

### Majorization-Minimization methods lecture *(prerequisite)*
Majorization-Minimization (MM) methods iteratively optimize difficult problems by replacing them with simpler surrogate problems that majorize the original. This approach enables handling nonsmooth regularization and nonlinearities in the paper's optimization framework.

*How the paper uses it:* The paper extends MM methods to nonlinear inverse problems with uncertain forward operators using MM-GKS.

▶ [Kenneth Lange | MM Principle of Optimization | CGSI 2023](https://www.youtube.com/watch?v=S_QSbmBupLc) — Computational Genomics Summer Institute CGSI · 47:31 · 3y ago

### NL-RMM-GKS framework lecture
The NL-RMM-GKS framework combines nonlinear MM optimization with Krylov subspace recycling and streaming to jointly estimate images and uncertain parameters efficiently. Understanding this method is key to grasping the paper's main contribution.

*How the paper uses it:* This is the central method developed in the paper for large-scale nonlinear inverse problems with uncertain forward operators.

▶ [Dr. Silvia Gazzola | Krylov Subspace Methods for Sparse Reconstruction](https://www.youtube.com/watch?v=rylh2Q6OOco) — INI Seminar Room 1 · 48:59 · 9mo ago

## Already in your library

- [Lecture 21: Minimizing a Function Step by Step](https://www.youtube.com/watch?v=nvXRJIBOREc) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Empirical Risk Minimization Explained | The Engine Behind Modern AI](https://www.youtube.com/watch?v=8fsJCyBOizQ) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Prof. Richard Nickl | Bayesian Inference for Non-linear Inverse Problems](https://www.youtube.com/watch?v=da9e053S-Qk) — also for: Seeing the Many: Exploring Parameter Distributions Conditioned on Features in Surrogates (Matthew Berger)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the NL-RMM-GKS framework for nonlinear inverse problems with uncertain forward operators. The beginner project focuses on reproducing a core mechanism of Krylov subspace recycling in a simplified linear inverse problem setting. The intermediate project involves reimplementing the NL-RMM-GKS alternating minimization method on a small-scale computed tomography dataset with uncertain projection angles, comparing reconstruction quality and memory usage against a baseline. The advanced project extends the framework by exploring adaptive initialization strategies for the VarPro approach to address its sensitivity to poor initialization, directly tackling a stated limitation of the paper.

### Beginner — Krylov Subspace Recycling for Linear Inverse Problems
*Effort: a weekend, ~8 hours*

You build a small Python implementation of Krylov subspace recycling for a linear inverse problem with a known forward operator. The project reproduces the memory bounding mechanism by recycling Krylov subspaces across iterations and demonstrates improved convergence compared to a naive iterative solver without recycling.

**Why it shows you understood the paper:** This project shows you understand the fundamental idea of Krylov subspace recycling, a key component extended in the paper to nonlinear inverse problems. It demonstrates your grasp of how recycling bounds memory usage while improving convergence.

**Grounded in:** Key contribution: Adaptation of Krylov subspace recycling to nonlinear settings to maintain bounded memory.

**Tech stack:** Python 3.11, NumPy, SciPy

**Data:** Synthetic linear inverse problem data generated by simulating a small 2D tomography forward operator and noisy measurements.

**Build it:**

1. Implement a simple linear inverse problem solver using the conjugate gradient method.
2. Add Krylov subspace recycling by storing and reusing subspace vectors across iterations.
3. Generate synthetic 2D tomography data with noise to test the solver.
4. Compare convergence and memory usage with and without recycling.
5. Document the implementation and results in a README.

**Ships as:** A Python repo with code demonstrating Krylov subspace recycling on a synthetic linear inverse problem, including plots of convergence and memory usage.

**Stretch goal:** Extend the implementation to include a simple majorization-minimization step for nonsmooth regularization.

### Intermediate — NL-RMM-GKS Alternating Minimization on Small-Scale CT with Uncertain Angles
*Effort: 2 weekends, ~20 hours*

You reimplement the alternating minimization (AltMin) realization of the NL-RMM-GKS framework to jointly estimate an image and uncertain projection angles in a small-scale computed tomography problem. You compare reconstruction quality (relative reconstruction error) and memory usage against a baseline MM-GKS method without recycling.

**Why it shows you understood the paper:** This project shows you can implement the core nonlinear joint estimation method from the paper and reproduce key results on reconstruction quality and memory efficiency. It demonstrates comprehension of the alternating updates and recycling strategy in a nonlinear setting.

**Grounded in:** Key result: NL-RMM-GKS outperforms standard MM-GKS in reconstruction quality and memory efficiency on static CT with uncertain projection angles.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Simulated small-scale CT data with uncertain projection angles generated by perturbing known angles and adding noise; synthetic data simulates the paper's CT experiments at a smaller scale.

**Build it:**

1. Implement the forward CT operator with uncertain projection angles and simulate noisy measurements.
2. Implement the alternating minimization NL-RMM-GKS algorithm to jointly estimate the image and angles.
3. Implement a baseline MM-GKS method without recycling for comparison.
4. Run experiments comparing reconstruction quality (RRE) and memory usage between methods.
5. Visualize and document results, including convergence plots and reconstructed images.

**Ships as:** A Python repo with code and notebooks demonstrating NL-RMM-GKS AltMin on small CT data, comparing to baseline, with detailed README and visualizations.

**Stretch goal:** Add temporal regularization (e.g., anisotropic total variation) for a simple dynamic imaging sequence.

### Advanced — Adaptive Initialization Strategies for VarPro in NL-RMM-GKS
*Effort: 3+ weeks*

You develop and evaluate adaptive initialization strategies or hybrid schemes combining AltMin robustness with VarPro speed to improve convergence of the VarPro realization of NL-RMM-GKS. You implement these strategies on a nonlinear inverse problem with uncertain forward operators and analyze convergence behavior and reconstruction quality.

**Why it shows you understood the paper:** This project addresses a stated limitation of the paper regarding VarPro's sensitivity to poor initialization. It demonstrates deep understanding of the framework's algorithmic realizations and contributes a genuine extension that could lead to improved practical performance.

**Grounded in:** Limitation: VarPro approach is sensitive to poor initialization and may oscillate before converging; future direction: explore adaptive strategies or hybrid schemes to improve performance.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic nonlinear inverse problem data with uncertain forward operators, similar to the intermediate project but with added complexity for testing initialization sensitivity.

**Build it:**

1. Reimplement VarPro realization of NL-RMM-GKS for joint image and parameter estimation.
2. Design and implement adaptive initialization strategies, such as warm-starts from AltMin or heuristic parameter guesses.
3. Develop hybrid schemes that alternate between AltMin and VarPro based on convergence criteria.
4. Evaluate convergence behavior, reconstruction quality, and runtime on synthetic nonlinear inverse problems.
5. Document findings with detailed analysis and visualizations.

**Ships as:** A comprehensive Python repo with implementations of VarPro, adaptive initialization, and hybrid schemes, including experiments and analysis in notebooks and a detailed README.

**Stretch goal:** Apply the adaptive VarPro approach to a streaming data setting with temporal regularization.

_No authors' code or datasets are available for this paper; synthetic data must be generated to simulate CT and nonlinear inverse problems with uncertain forward operators._
