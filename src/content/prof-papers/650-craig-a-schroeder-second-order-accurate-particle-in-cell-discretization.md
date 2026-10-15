---
title: "650 · Second order accurate particle-in-cell discretization of the Navier-Stokes equations — Craig A. Schroeder"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-craig-a-schroeder"
source_hash: "0d1419dd37788fd65dc443ec029ef80a8cbb6ff82880a974cee6a8566e51426a"
sequence: 650
generator: "outreach-garden: managed"
---

# 650 · Second order accurate particle-in-cell discretization of the Navier-Stokes equations

## At a glance

- **Professor:** Craig A. Schroeder
- **Institution:** Univ. of California - Riverside
- **Paper:** [Second order accurate particle-in-cell discretization of the Navier-Stokes equations](http://www.cs.ucr.edu/~craigs/papers/2023-second-order-c/paper.pdf)
- **Authors:** Han Jiang, Craig Schroeder
- **Year:** 2024

## Paper overview

This paper presents a new computational method to solve the Navier-Stokes equations, which describe fluid flow, using a particle-in-cell framework. The method achieves second order accuracy by transferring velocities directly between particles and grid points using quadratic polynomial reconstructions, avoiding noise accumulation and improving accuracy and efficiency compared to previous methods.

### Why it matters

**Research problem:** Achieving second order accuracy in particle-in-cell (PIC) methods for solving Navier-Stokes equations is challenging due to irregular particle distributions, noise accumulation in velocity transfers, and difficulties in handling boundary conditions accurately.

**Why it matters:** Accurate and efficient numerical simulation of fluid dynamics is crucial for many scientific and engineering applications. Improving the accuracy and stability of PIC methods enables better simulations of complex fluid behaviors with less computational cost and noise.

**Key contributions:**

- Development of a second order accurate PIC discretization of Navier-Stokes equations using quadratic PolyPIC transfers.
- Demonstration that quadratic PolyPIC transfers combined with BDF-2 time integration yield second order accuracy in velocity.
- Derivation of explicit closed-form solutions for the weighted least squares polynomial reconstruction in PolyPIC, improving computational efficiency.
- Analysis showing that PolyPIC transfers are significantly less dissipative than APIC and PIC transfers.
- Extension of the method to 3D and demonstration of second order convergence on various test problems including Taylor-Green vortices and manufactured solutions.

## About the professor

**Craig A. Schroeder** — Associate Professor, Computer Science and Engineering, Univ. of California - Riverside.

Research interests: computational fluid dynamics, solid mechanics, fluid-structure interaction, physically-based simulation for computer graphics, mathematical modeling and scientific computing

### Research links

- [Faculty/profile page](http://www.cs.ucr.edu/~craigs)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** numerical methods for PDEs
**The paper assumes:** numerical methods for partial differential equations, finite difference and finite element discretizations, time integration schemes for PDEs
**Already in this field?** Skip this entirely if you already understand numerical discretization techniques for PDEs including polynomial reconstruction and time stepping methods.

To understand the numerical methods underpinning the second order accurate particle-in-cell discretization of the Navier-Stokes equations, a solid grasp of numerical PDE techniques—especially finite difference methods and polynomial reconstructions—is essential. The rigorous course option offers a comprehensive university-level treatment of finite difference methods for PDEs, ideal for deep mastery. The fast track provides a concise, intuition-focused series on numerical solutions of PDEs, suitable for quickly building foundational understanding before diving into the paper's technical details.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Numerical Methods : Finite difference approach  by Prof.Ameeya K. Nayak](https://www.youtube.com/playlist?list=PLq-Gm0yRYwTizWtb_xwk0KEMzcoeLbOZq) — Quantum AI · 21 videos · 9.2h across 21 episodes

**Watch only this:** Lectures 1 through 10, about 4.4 hours — covering introduction, finite difference basics, and stability/convergence analysis essential for understanding polynomial reconstructions and BDF-2 time integration.

*Why it unblocks this paper:* This advanced undergraduate/graduate course on finite difference methods for PDEs covers solution methods, convergence, and stability analysis, directly relevant to the paper's focus on second order accurate discretizations and stability of particle-in-cell methods.

*If you want all of it:* 9.2 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Numerical Solution of Partial Differential equations: Parabolic, Hyperbolic, and elliptic equations](https://www.youtube.com/playlist?list=PLiGoMn7kjVbHcApAQbiQnss1Vap-gddQA) — Sachin Kumar · 9 videos · 1.6h across 9 episodes

**Watch only this:** Episodes 71 through 75, about 50 minutes — covering classification of second order PDEs and solutions to elliptic equations, foundational for understanding the PDE context of the paper.

*Why it unblocks this paper:* This short series provides clear, focused explanations on classification and numerical solutions of parabolic, hyperbolic, and elliptic PDEs, giving a quick but solid grounding in the types of PDEs and solution concepts relevant to Navier-Stokes discretization.

*If you want all of it:* 1.6 hours across all 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 2024 paper on second order accurate particle-in-cell discretization of the Navier-Stokes equations, start by grounding yourself in the fundamental governing equations of fluid dynamics (Navier-Stokes equations) and the numerical time integration method (backward difference formula) used. Then, study the particle-in-cell framework as the computational paradigm for fluid simulation. Next, review the mathematical tool of polynomial reconstruction via weighted least squares, which is key to the paper's novel velocity transfer method. Finally, focus on the paper's core contribution: the quadratic Polynomial Particle-In-Cell (PolyPIC) transfers, with priority given to the authors' own talk if available.

### Navier-Stokes equations *(prerequisite)*
The Navier-Stokes equations are the fundamental partial differential equations governing fluid flow. Understanding their formulation, physical meaning, and mathematical properties is essential before delving into numerical methods that solve them.

*How the paper uses it:* The paper develops a particle-in-cell discretization method specifically for solving the Navier-Stokes equations.

▶ [Lecture 2 (Part 5): Weak formulation of Navier-Stokes equations; A priori estimates](https://www.youtube.com/watch?v=CjEseFMrYog) — Sukkur IBA University- Mathematics · 21:09 · 6y ago

### Particle-in-cell methods *(prerequisite)*
Particle-in-cell (PIC) methods combine Lagrangian particles and Eulerian grids to simulate fluid or plasma dynamics. Understanding the basics of PIC methods, including velocity transfers between particles and grids, is crucial to grasp the improvements proposed in the paper.

*How the paper uses it:* The paper proposes a novel quadratic PolyPIC transfer method within the PIC framework for Navier-Stokes equations.

▶ ["Kinetic Plasma Simulations with the Particle-in-Cell Method I" - Spitkovsky](https://www.youtube.com/watch?v=I09QeVDoEZY) — Institute for Advanced Study · 1:27:03 · 10y ago

### Polynomial reconstruction and weighted least squares *(prerequisite)*
Weighted least squares polynomial reconstruction is a mathematical technique to fit polynomials to data points with weights, enabling smooth and accurate approximations. This technique underpins the quadratic PolyPIC velocity transfers developed in the paper.

*How the paper uses it:* The paper derives explicit closed-form formulas for weighted least squares polynomial reconstructions to efficiently transfer velocities between particles and grid nodes.

▶ [Multilevel weighted least squares polynomial approximation – Sören Wolfers, KAUST](https://www.youtube.com/watch?v=JOo-GabaiRY) — The Alan Turing Institute · 37:26 · 8y ago

### Second order accurate particle-in-cell discretization of the Navier-Stokes equations *(paper-talk search result; attribution unverified)*
This core concept covers the paper's novel method of using quadratic polynomial transfers within the PIC framework to achieve second order accuracy and reduced dissipation in Navier-Stokes simulations. It includes the development of explicit formulas, stability analysis, and numerical validation.

*How the paper uses it:* This is the central contribution of the paper, presenting the quadratic PolyPIC method and its advantages over existing PIC variants.

▶ [OpenAI Presents Navier–Stokes Millennium Prize Solution with AI Agents and Lean Verification](https://www.youtube.com/watch?v=4BjuQIEGFfI) — CosmoX · 8:22 · 3w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on second order accurate particle-in-cell discretization of the Navier-Stokes equations, start by learning the fundamentals of the Navier-Stokes equations, which govern fluid flow. Next, grasp the particle-in-cell (PIC) method framework that combines particles and grids for fluid simulation. Then, build intuition on polynomial reconstruction and weighted least squares, which are key to the paper's velocity transfer accuracy. Finally, learn about the backward difference formula for time integration and the novel quadratic Polynomial Particle-In-Cell (PolyPIC) transfers that enable the paper's second order accuracy.

### Navier-Stokes equations *(prerequisite)*
The Navier-Stokes equations describe how fluids like air and water move, capturing velocity, pressure, and forces in the fluid. Understanding these equations is essential because they form the mathematical foundation for fluid dynamics simulations.

*How the paper uses it:* The paper solves the Navier-Stokes equations using a particle-in-cell framework to simulate fluid flow accurately.

▶ [The million dollar equation (Navier-Stokes equations)](https://www.youtube.com/watch?v=Ra7aQlenTb8) — vcubingx · 8:03 · 6y ago

### Particle-in-cell methods *(prerequisite)*
Particle-in-cell (PIC) methods simulate fluids by combining particles that carry information and a grid that helps compute interactions. This hybrid approach balances accuracy and computational efficiency in fluid simulations.

*How the paper uses it:* The paper improves PIC methods by introducing a second order accurate velocity transfer scheme between particles and grid points.

▶ ["Kinetic Plasma Simulations with the Particle-in-Cell Method I" - Spitkovsky](https://www.youtube.com/watch?v=I09QeVDoEZY) — Institute for Advanced Study · 1:27:03 · 10y ago

### Polynomial reconstruction and weighted least squares *(prerequisite)*
Polynomial reconstruction uses polynomials to approximate complex data patterns, and weighted least squares is a technique to find the best polynomial fit by minimizing errors with different weights. These tools help accurately transfer velocity data between particles and grids.

*How the paper uses it:* The paper uses weighted least squares polynomial reconstructions to achieve second order accuracy in velocity transfers.

▶ [Stanford CS229 I Weighted Least Squares, Logistic regression, Newton's Method I 2022 I Lecture 3](https://www.youtube.com/watch?v=k_pDh_68K6c) — Stanford Online · 1:12:59 · 3y ago

### Backward difference formula time integration *(prerequisite)*
Backward difference formulas are numerical methods to approximate derivatives over time, enabling stable and accurate time stepping in simulations. The second order backward difference formula (BDF-2) balances accuracy and stability for evolving fluid states.

*How the paper uses it:* The paper combines quadratic PolyPIC transfers with BDF-2 time integration to achieve second order accuracy in velocity.

▶ [Introduction to Forward Backward Difference Table|Numerical methods|BCA Maths|B.tech|Dream Maths](https://www.youtube.com/watch?v=ubNW7DlzQRY) — Dream Maths · 20:03 · 4y ago

## Already in your library

- [Algebra Basics: What Are Polynomials? - Math Antics](https://www.youtube.com/watch?v=ffLLmV4mZwU) — also for: Incidence Theorems and Their Applications (Zeev Dvir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the second order accurate PolyPIC method for Navier-Stokes equations from the paper. The beginner project focuses on implementing and visualizing the quadratic polynomial velocity transfer between particles and grid nodes, a core mechanism of the method. The intermediate project extends this to a full 2D Navier-Stokes simulation with PolyPIC transfers and compares accuracy and dissipation against a simpler PIC baseline. The advanced project tackles a stated limitation by extending the PolyPIC method to handle irregular or moving boundaries with second order accuracy, exploring a future direction proposed by the authors.

### Beginner — Quadratic PolyPIC Velocity Transfer Visualization
*Effort: a weekend, ~8 hours*

You build a small Python program that implements the quadratic polynomial weighted least squares reconstruction for velocity transfer between particles and grid nodes on a regular 2D grid. You visualize the velocity field before and after transfer to demonstrate noise reduction and accuracy improvement compared to linear interpolation.

**Why it shows you understood the paper:** This project shows you grasp the core PolyPIC transfer mechanism, including polynomial reconstruction and velocity transfer, which is the key innovation enabling second order accuracy and noise reduction in the paper.

**Grounded in:** Development of a second order accurate PIC discretization of Navier-Stokes equations using quadratic PolyPIC transfers.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic 2D particle velocity samples on a uniform grid, generated within the program to simulate a smooth velocity field.

**Build it:**

1. Implement weighted least squares quadratic polynomial reconstruction for velocity from particle samples on a 2D regular grid.
2. Implement velocity transfer from particles to grid nodes and back using the quadratic polynomial reconstruction.
3. Generate synthetic smooth velocity data sampled at particle positions.
4. Visualize the velocity field before and after transfer to show accuracy and noise reduction.
5. Compare results with linear interpolation transfer as a baseline.

**Ships as:** A Python script and README demonstrating quadratic PolyPIC velocity transfer with plots comparing input and transferred velocity fields.

**Stretch goal:** Add support for cubic spline weighting functions and compare stability versus quadratic splines.

### Intermediate — 2D Navier-Stokes Simulation with Quadratic PolyPIC Transfers
*Effort: 2 weekends, ~20 hours*

You implement a 2D incompressible Navier-Stokes solver on a regular grid using the quadratic PolyPIC velocity transfers between particles and grid nodes, combined with BDF-2 time integration and pressure splitting. You compare velocity convergence order and dissipation against a simpler PIC transfer baseline on a Taylor-Green vortex test case.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the full core method of the paper, including time integration and pressure splitting, and to reproduce key quantitative results such as second order velocity accuracy and reduced dissipation.

**Grounded in:** Demonstration that quadratic PolyPIC transfers combined with BDF-2 time integration yield second order accuracy in velocity; PolyPIC transfers produce significantly less dissipation than APIC and PIC.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic Taylor-Green vortex initial conditions generated programmatically as described in the paper.

**Build it:**

1. Implement a 2D incompressible Navier-Stokes solver on a regular grid with standard second order finite difference pressure and viscosity solvers.
2. Implement quadratic PolyPIC velocity transfers between particles and grid nodes using weighted least squares polynomial reconstruction.
3. Integrate BDF-2 time stepping and splitting scheme for pressure and viscosity as described.
4. Run Taylor-Green vortex simulations and measure velocity convergence order and dissipation.
5. Implement a baseline PIC transfer method and compare convergence and dissipation metrics.
6. Visualize velocity fields and error norms to demonstrate second order accuracy.

**Ships as:** A Python repository with scripts and plots showing Navier-Stokes simulation results, convergence graphs, and dissipation comparisons between PolyPIC and PIC.

**Stretch goal:** Extend the simulation to 3D and verify second order convergence as in the paper.

### Advanced — PolyPIC Extension for Irregular and Moving Boundaries
*Effort: 3+ weeks*

You extend the quadratic PolyPIC method to handle irregular or moving boundary conditions with second order accuracy. This involves modifying the polynomial reconstruction and weighting near boundaries and implementing boundary condition enforcement in the velocity transfers. You test on 2D fluid flow with moving obstacles and compare accuracy and stability.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating deep comprehension of the PolyPIC method and the challenges of boundary handling in particle-in-cell simulations.

**Grounded in:** The study focuses on periodic and simple slip boundary conditions; irregular or moving boundaries and free surfaces are not addressed; future direction includes extension of PolyPIC to handle irregular and moving boundaries and free surfaces with second order accuracy.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic 2D flow scenarios with moving boundary geometries generated programmatically.

**Build it:**

1. Review the quadratic PolyPIC polynomial reconstruction and weighting schemes.
2. Develop modified polynomial reconstruction methods that adapt weighting near irregular or moving boundaries to maintain second order accuracy.
3. Implement boundary condition enforcement in velocity transfers consistent with slip or no-slip conditions.
4. Integrate these extensions into the 2D Navier-Stokes solver with PolyPIC transfers.
5. Design test cases with moving obstacles and irregular boundaries.
6. Evaluate accuracy, stability, and dissipation compared to baseline PolyPIC without boundary extensions.

**Ships as:** A codebase and documentation demonstrating PolyPIC with irregular/moving boundary handling, including test cases and quantitative accuracy/stability results.

**Stretch goal:** Investigate memory optimization strategies for storing polynomial reconstructions per particle in large 3D simulations.
