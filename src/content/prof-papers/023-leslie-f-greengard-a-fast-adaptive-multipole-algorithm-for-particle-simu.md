---
title: "023 · A Fast Adaptive Multipole Algorithm for Particle Simulations — Leslie F. Greengard"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-greengar"
source_hash: "a1f09d04741015d33050e163846e4165da51741fed0956712aef5ee55462f56d"
sequence: 23
generator: "outreach-garden: managed"
---

# 023 · A Fast Adaptive Multipole Algorithm for Particle Simulations

## At a glance

- **Professor:** Leslie F. Greengard
- **Institution:** New York University
- **Paper:** [A Fast Adaptive Multipole Algorithm for Particle Simulations](https://math.nyu.edu/~greengar/cgr_88.pdf)
- **Authors:** J. Carrier, L. Greengard, V. Rokhlin
- **Year:** 1988

## Paper overview

This paper presents an adaptive algorithm that efficiently computes the potential and force fields in large systems of particles interacting via Coulomb's law. The method achieves linear computational complexity O(N), independent of particle distribution, by using hierarchical clustering and multipole expansions to approximate distant interactions, while computing nearby interactions directly.

### Why it matters

**Research problem:** Efficiently evaluating Coulombic interactions among large numbers of particles, where direct computation scales quadratically O(N^2) and becomes computationally prohibitive for large N.

**Why it matters:** Simulating physical systems such as plasma physics, molecular dynamics, fluid dynamics, and celestial mechanics requires fast and accurate computation of particle interactions to enable practical large-scale simulations.

**Key contributions:**

- Introduction of an adaptive multipole algorithm with O(N) complexity for 2D particle simulations.
- Development of a hierarchical mesh refinement strategy that adapts to particle distribution.
- Detailed complexity analysis showing linear scaling independent of particle distribution.
- Numerical experiments demonstrating accuracy and efficiency on uniform, clustered, and complex particle distributions.
- Provision of error bounds and rigorous analytical tools for multipole expansions and translations.

## About the professor

**Leslie F. Greengard** — Department of Mathematics, New York University.

Research interests: Scientific computing, fast algorithms, adaptive methods, integral equations, potential theory, electromagnetics, computational chemistry, computational biology.

### Research links

- [Faculty/profile page](https://math.nyu.edu/~greengar)
- [Resolved homepage](http://math.nyu.edu/faculty/greengar/)
- [A Short Course on Fast Multipole Methods](http://math.nyu.edu/faculty/greengar/shortcourse_fmm.pdf)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational and core knowledge necessary to understand the fast adaptive multipole algorithm for particle simulations. It covers essential mathematics, physics, numerical methods, and algorithmic complexity concepts. Work through the stages in order to build a solid background before reading the paper.

**The paper assumes:** multivariable calculus, classical mechanics, numerical linear algebra, computational complexity, numerical methods for partial differential equations, and classical fast multipole method
**Time to work through:** roughly 90-100 hours if you watch all selected playlists fully, about 50-60 hours if you follow the recommended episode ranges and skip non-essential parts.
**Already in this field?** Skip stages 1-3 if you have a strong background in numerical analysis and computational physics, especially if you are familiar with multipole expansions and hierarchical algorithms.

### Stage 1 · Multivariable Calculus and Vector Calculus *(foundational)*
Understanding gradients, divergence, and integrals in multiple dimensions is crucial for grasping the physical and mathematical formulation of potentials and forces in particle systems governed by Coulomb's law.

▶ **Course:** [MIT 18.02 Multivariable Calculus, Fall 2007](https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38) — MIT OpenCourseWare · 35 videos · 28.3h across 35 episodes

*What to watch:* Watch the first 24 lectures of the MIT 18.02 Multivariable Calculus, Fall 2007 playlist, focusing on vector fields, gradient, divergence, line integrals, Green's theorem, and flux. These topics directly relate to the mathematical tools used in the paper.

*Move on when you can:* Compute the gradient and divergence of vector fields and evaluate surface and volume integrals in two dimensions.

### Stage 2 · Classical Mechanics and Electrostatics *(foundational)*
The paper simulates Coulombic interactions and potential fields, so understanding classical mechanics and electrostatics, including Coulomb's law and potentials, is essential to comprehend the physical problem.

▶ **Course:** [8.02x - MIT Physics II: Electricity and Magnetism](https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j) — Lectures by Walter Lewin. They will make you ♥ Physics. · 40 videos · 31.7h across 40 episodes

*What to watch:* Watch the first 10 lectures of the 8.02x - MIT Physics II: Electricity and Magnetism playlist by Walter Lewin, focusing on electric charges, Coulomb's law, electric field lines, Gauss' law, electrostatic potential, and energy. These lectures provide a thorough physics foundation for the paper.

*Move on when you can:* Explain Coulomb's law and derive the potential and force between charged particles in two dimensions.

### Stage 3 · Numerical Linear Algebra and Matrix Computations *(core)*
Efficient numerical methods for matrix-vector products and understanding sparse vs dense matrices are fundamental to the algorithm's computational complexity and storage efficiency.

▶ **Course:** [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

*What to watch:* Watch the first 12 lectures of the MIT 18.06 Linear Algebra, Spring 2005 playlist by Gilbert Strang, covering the geometry of linear equations, elimination with matrices, multiplication, inverse matrices, LU factorization, and fundamental subspaces. These topics underpin the numerical methods used in the paper.

*Move on when you can:* Perform matrix-vector multiplication efficiently and explain the concept of sparse and dense matrices.

### Stage 4 · Computational Complexity and Algorithm Analysis *(core)*
Understanding asymptotic notation and complexity analysis is essential to appreciate the paper's claim of O(N) computational complexity and its comparison to naive O(N^2) methods.

▶ **Course:** [MIT 6.006 Introduction to Algorithms, Spring 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY) — MIT OpenCourseWare · 32 videos · 35.3h across 32 episodes

*What to watch:* Watch the first 10 lectures of the MIT 6.006 Introduction to Algorithms, Spring 2020 playlist, focusing on algorithms and computation, data structures, sets and sorting, hashing, linear sorting, and binary trees. These lectures provide a solid foundation in algorithm analysis relevant to the paper.

*Move on when you can:* Analyze and compare the time complexity of naive and optimized algorithms for pairwise particle interactions.

### Stage 5 · Numerical Methods for Partial Differential Equations *(core)*
The multipole expansions approximate solutions to potential fields governed by PDEs like Laplace's equation; understanding numerical PDE methods helps grasp how these approximations are constructed and used.

▶ **Course:** [Student Lectures - Differential Equations](https://www.youtube.com/playlist?list=PL4d5ZtfQonW0fTwPsRvvg9hMJllVyj1l3) — Oxford Mathematics · 12 videos · 9.5h across 12 episodes

*What to watch:* Watch the entire Student Lectures - Differential Equations playlist by Oxford Mathematics, focusing on lectures covering differential equations, Fourier series, and numerical solutions of differential equations. These provide the necessary background on PDEs relevant to multipole expansions.

*Move on when you can:* Explain the boundary value problems for Laplace's equation and implement a basic numerical solver.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 1988 paper on the fast adaptive multipole algorithm for particle simulations, start by grasping the foundational mathematical and computational concepts: multipole expansions, hierarchical mesh refinement, the fast multipole method, and computational complexity challenges in particle simulations. These prerequisites build the necessary background on the core algorithmic and mathematical tools. Finally, focus on the central adaptive multipole algorithm concept to see how these tools are combined and adapted for efficient particle simulations.

### Multipole expansions *(prerequisite)*
Multipole expansions are the core mathematical technique used to approximate the potential fields generated by distant particle clusters, reducing computational cost. Understanding the theory and derivation of multipole expansions is essential to appreciate how the algorithm approximates interactions efficiently.

*How the paper uses it:* The paper uses multipole expansions to approximate distant particle interactions in the adaptive algorithm.

▶ [Electromagnetic Theory II - Lecture 9.1](https://www.youtube.com/watch?v=Y4yXOgZanEY) — METUOpenCourseWare · 12 years ago

### Hierarchical mesh refinement *(prerequisite)*
Hierarchical mesh refinement is a key technique to adaptively subdivide the computational domain into smaller regions based on particle density. This adaptive subdivision is crucial for the algorithm's efficiency and accuracy, enabling focused computation where needed.

*How the paper uses it:* The algorithm adaptively refines the computational domain to cluster particles and reduce unnecessary computations.

▶ [Supercomputing Spotlights: Adaptive Mesh Refinement for Multiphysics Applications](https://www.youtube.com/watch?v=HDA4ma_TNQI) — Society for Industrial and Applied Mathematics (SIAM) · 10 months ago

### Fast multipole method *(prerequisite)*
The fast multipole method (FMM) is the fundamental algorithmic framework that the adaptive multipole algorithm builds upon. It provides a way to reduce the complexity of N-body interactions from quadratic to linear or near-linear by hierarchical clustering and multipole expansions.

*How the paper uses it:* The paper extends the fast multipole method with adaptive refinement for improved efficiency in 2D particle simulations.

▶ [Fast Summation of Potentials   the FMM on the GPU - Nail Gumerov](https://www.youtube.com/watch?v=jSsYG9XLSrM) — Institute for Advanced Study · 20:57 · 9 years ago

### Computational complexity in particle simulations *(prerequisite)*
Understanding the computational complexity challenges in particle simulations motivates the need for fast algorithms like the adaptive multipole method. This includes recognizing why direct computation scales quadratically and how algorithmic improvements reduce this cost.

*How the paper uses it:* The paper addresses the quadratic scaling problem by developing an O(N) adaptive algorithm.

▶ [Lecture 41: Particle simulations: comparison with quantum chemical and continuum simulations](https://www.youtube.com/watch?v=5MyIMng0GYs) — IIT Roorkee July 2018 · 5 years ago

### Adaptive multipole algorithm
This concept covers the central method developed in the paper, combining hierarchical mesh refinement and multipole expansions adaptively to efficiently compute particle interactions. Understanding this algorithm reveals how the authors achieve linear scaling and improved performance over nonadaptive methods.

*How the paper uses it:* The paper's main contribution is the adaptive multipole algorithm for efficient particle simulations.

▶ [Tim Dodwell - Adaptive Multilevel Delayed Acceptance](https://www.youtube.com/watch?v=9833UZz-PVQ) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 44:06 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the fast adaptive multipole algorithm for particle simulations, start by grasping the computational complexity challenges in particle simulations, which motivates the need for faster methods. Then learn about multipole expansions, the core mathematical tool used to approximate distant particle interactions efficiently. Next, understand hierarchical mesh refinement, the technique that adaptively subdivides the computational domain to focus computational effort where needed. Finally, study the fast multipole method itself, the fundamental algorithmic framework that the adaptive multipole algorithm builds upon.

### Computational complexity in particle simulations *(prerequisite)*
This concept explains why directly computing interactions among many particles is computationally expensive, scaling quadratically with the number of particles. Understanding this motivates the development of faster algorithms that reduce this complexity to linear or near-linear time.

*How the paper uses it:* The paper addresses the challenge that direct computation of Coulombic interactions scales as O(N²), which is prohibitive for large N.

▶ [Lecture 41: Particle simulations: comparison with quantum chemical and continuum simulations](https://www.youtube.com/watch?v=5MyIMng0GYs) — IIT Roorkee July 2018 · 5 years ago

### Multipole expansions *(prerequisite)*
Multipole expansions approximate the effect of a group of charges at a distance by summarizing their influence with a series of terms (monopole, dipole, quadrupole, etc.). This reduces the complexity of computing interactions with distant clusters of particles by replacing many individual interactions with a single approximate one.

*How the paper uses it:* The algorithm uses multipole expansions to approximate interactions between well-separated clusters of particles efficiently.

▶ [Electrostatics 33 : Multipole Expansion for Electric Potential](https://www.youtube.com/watch?v=1QKHrql4BZc) — Alan Beary · 9:49 · 13 years ago

### Hierarchical mesh refinement *(prerequisite)*
Hierarchical mesh refinement adaptively subdivides the computational domain into smaller regions where particle density is high, allowing focused computation and storage only where necessary. This adaptive subdivision is key to maintaining efficiency and accuracy in nonuniform particle distributions.

*How the paper uses it:* The paper develops a hierarchical mesh refinement strategy that adapts to particle distribution to reduce unnecessary computations.

▶ [Supercomputing Spotlights: Adaptive Mesh Refinement for Multiphysics Applications](https://www.youtube.com/watch?v=HDA4ma_TNQI) — Society for Industrial and Applied Mathematics (SIAM) · 10 months ago

### Fast multipole method *(prerequisite)*
The fast multipole method (FMM) is an algorithm that combines multipole expansions and hierarchical domain decomposition to compute particle interactions in O(N) or O(N log N) time. It is the foundational framework that the adaptive multipole algorithm extends and improves upon.

*How the paper uses it:* The adaptive multipole algorithm builds on the fast multipole method to achieve linear computational complexity independent of particle distribution.

▶ [Intro to FMM - Nicole Eikmeier](https://www.youtube.com/watch?v=MeGc5VWJAec) — Kyle Kloster · 11 years ago

## Already in your library

- [The Fast Multipole Method](https://www.youtube.com/watch?v=qMLIyZi8Sz0) — also for: A Fast Adaptive Multipole Algorithm for Particle Simulations (Leslie F. Greengard)
- [Alex Townsend: Fast Transforms Based on Asymptotic ...](https://www.youtube.com/watch?v=3dfn0yHrbv4) — also for: A Fast Adaptive Multipole Algorithm for Particle Simulations (Leslie F. Greengard)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the 1988 paper "A Fast Adaptive Multipole Algorithm for Particle Simulations." Starting with a beginner-level implementation of the core multipole expansion concept in 2D, advancing to an intermediate adaptive multipole algorithm reimplementation and performance comparison, and culminating in an advanced project extending the method to address the paper's noted limitation of 3D extension. Each project builds on the previous, increasing in complexity and depth of engagement with the paper's key contributions.

### Beginner — 2D Multipole Expansion Visualization
*Effort: a weekend, ~8 hours*

You build a small interactive 2D visualization that demonstrates the concept of multipole expansions for a cluster of particles. The app will compute and display the approximate potential field using a truncated multipole expansion and compare it visually to the direct computation for a small number of particles.

**Why it shows you understood the paper:** This project shows you understand the fundamental mathematical idea of multipole expansions and their approximation quality, which is central to the paper's approach.

**Grounded in:** The algorithm uses multipole expansions to approximate distant interactions (Section 3).

**Tech stack:** JavaScript, React, D3.js

**Data:** Synthetic 2D particle positions generated randomly or in small clusters within the app.

**Build it:**

1. Implement direct Coulomb potential calculation for a small set of 2D particles.
2. Implement multipole expansion terms up to a fixed order for the same particles.
3. Visualize both direct and multipole-approximated potential fields on a 2D grid.
4. Add UI controls to vary the number of expansion terms and particle configurations.
5. Compare and highlight approximation errors visually.

**Ships as:** An interactive web app repository with README explaining multipole expansions and showing visual comparisons of direct vs. multipole potentials.

**Stretch goal:** Add error bound calculations and display numerical error metrics as the expansion order changes.

### Intermediate — Adaptive 2D Fast Multipole Algorithm Reimplementation
*Effort: 2 weekends, ~20 hours*

You implement the core adaptive multipole algorithm described in the paper for 2D particle simulations. Your code will hierarchically subdivide the domain, cluster particles adaptively, compute multipole expansions for well-separated clusters, and compute direct interactions for nearby particles. You will benchmark your implementation against a naive direct O(N²) method on synthetic uniform and clustered particle distributions, reporting CPU time scaling and accuracy.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reimplement the paper's main algorithm and reproduce its key claims about linear scaling and accuracy, showing deep comprehension of the adaptive hierarchical approach.

**Grounded in:** Introduction of an adaptive multipole algorithm with O(N) complexity for 2D particle simulations and numerical experiments demonstrating accuracy and efficiency on uniform and clustered distributions.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic 2D particle sets generated with uniform and clustered spatial distributions to mimic the paper's test cases.

**Build it:**

1. Implement a quadtree spatial subdivision to cluster particles adaptively based on maximum particles per box.
2. Implement multipole expansions and translations for well-separated clusters.
3. Implement direct computation for nearby particle interactions.
4. Combine the above into a full adaptive multipole algorithm.
5. Benchmark runtime and accuracy against direct O(N²) computation on synthetic datasets.
6. Plot CPU time scaling and error metrics similar to the paper's figures.

**Ships as:** A Python repository with scripts to run adaptive multipole simulations, benchmark results, and a detailed README comparing performance and accuracy to direct computation.

**Stretch goal:** Add parameter tuning for expansion order and maximum particles per box, analyzing their impact on performance and accuracy.

### Advanced — Extension of Adaptive Multipole Algorithm to 3D Particle Simulations
*Effort: 3+ weeks*

You extend your 2D adaptive multipole implementation to three dimensions, addressing the paper's stated limitation that only 2D was implemented. You will implement octree subdivision, 3D multipole expansions, and translation operators. You will test your 3D algorithm on synthetic 3D particle distributions, measure computational scaling, and compare accuracy to direct 3D computations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to generalize and extend the core algorithm to a more complex and practically relevant setting.

**Grounded in:** The paper describes only the two-dimensional version; extension to three dimensions is noted as straightforward but not included (Limitations and Future Directions).

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, PyOpenGL (optional for 3D visualization)

**Data:** Synthetic 3D particle sets generated with uniform and clustered spatial distributions to simulate realistic 3D particle systems.

**Build it:**

1. Implement an octree spatial subdivision for adaptive clustering in 3D.
2. Derive and implement 3D multipole expansions and translation operators based on the 2D formulas.
3. Implement direct 3D Coulomb interaction computations for benchmarking.
4. Integrate the components into a full 3D adaptive multipole algorithm.
5. Benchmark runtime scaling and accuracy against direct 3D computations.
6. Document challenges encountered and solutions in extending from 2D to 3D.

**Ships as:** A comprehensive Python repository with 3D adaptive multipole code, benchmarks, visualizations, and a README discussing the extension challenges and performance results.

**Stretch goal:** Apply the 3D algorithm to a simple molecular dynamics simulation or plasma physics scenario to demonstrate practical utility.
