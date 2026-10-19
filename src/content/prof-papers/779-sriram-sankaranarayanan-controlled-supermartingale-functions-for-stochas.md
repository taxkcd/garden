---
title: "779 · Controlled Supermartingale Functions for Stochastic Differential Equations: Inference and Applications — Sriram Sankaranarayanan"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sriram-sankaranarayanan"
source_hash: "72ef3e36ce2d2208be2fa60f018aa290044287fb22881864ad6ac0b9fe72823f"
sequence: 779
generator: "outreach-garden: managed"
---

# 779 · Controlled Supermartingale Functions for Stochastic Differential Equations: Inference and Applications

## At a glance

- **Professor:** Sriram Sankaranarayanan
- **Institution:** University of Colorado Boulder
- **Paper:** [Controlled Supermartingale Functions for Stochastic Differential Equations: Inference and Applications](http://hdl.handle.net/2078.1/309257)
- **Authors:** Masoumeh Ghanbarpour, Guillaume O. Berger, Sriram Sankaranarayanan
- **Year:** 2025

## Paper overview

This paper develops mathematical tools called controlled supermartingale functions to design feedback control laws that ensure safety in systems modeled by stochastic differential equations (SDEs). These systems evolve over time with randomness and control inputs. The approach provides probabilistic guarantees that the system state remains within a safe region over a finite time horizon. The authors propose an iterative algorithm using sum-of-squares programming to synthesize these functions and corresponding control laws, demonstrating effectiveness on numerical examples.

### Why it matters

**Research problem:** How to construct controlled supermartingale functions and corresponding feedback control laws for stochastic differential equations with control inputs, to guarantee that the system remains within a safe region with high probability over a finite time horizon.

**Why it matters:** Stochastic differential equations model many real-world systems with randomness, such as in finance, biology, and control systems. Ensuring safety in such systems under uncertainty and control inputs is critical for autonomous systems operating in uncertain environments. Existing methods often use time-independent supermartingales, which provide looser probability bounds. Sharper, time-varying bounds and computationally feasible synthesis methods are needed for practical safety-critical applications.

**Key contributions:**

- Introduction of time-varying λ-supermartingale functions for sharper probabilistic safety bounds in stochastic systems.
- Development of a projection-based iterative algorithm to synthesize polynomial controlled supermartingales and feedback laws using sum-of-squares programming.
- Extension of classical supermartingale safety verification methods to controlled stochastic differential equations with control inputs.
- Demonstration of the approach on numerical examples including controlled nonlinear systems, showing effective safety guarantees and control synthesis.

## About the professor

**Sriram Sankaranarayanan** — Professor and Chair, Department of Computer Science, University of Colorado Boulder.

Research interests: mathematical foundations of autonomous systems

### Research links

- [Faculty/profile page](https://www.cs.colorado.edu/~srirams)
- [Professor website](https://home.cs.colorado.edu/~srirams)
- [Resolved homepage](https://home.cs.colorado.edu/~srirams/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Stochastic Processes and Martingales
**The paper assumes:** graduate-level stochastic processes, martingale theory, stochastic calculus
**Already in this field?** Skip this entirely if you already have a solid understanding of stochastic processes and martingale theory at the graduate level.

To understand the controlled supermartingale functions and their synthesis for stochastic differential equations in this paper, a solid grasp of stochastic processes and martingale theory is essential. The rigorous course option provides a comprehensive university-level introduction to stochastic processes, covering foundational probability, random variables, and stochastic processes that underpin martingale theory. The fast-track option offers a concise, focused introduction to martingales and supermartingales, suitable for quickly grasping the core concepts relevant to the paper without extensive background in probability theory.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [JAN 2020 - Introduction to Stochastic Processes](https://www.youtube.com/playlist?list=PLOzRYVm0a65dFqcSScAAtAjOMGrG7luhz) — NPTEL IIT Bombay · 50 videos · 31.8h across 50 episodes

**Watch only this:** Lectures 1 to 23 (covering sample space, probability axioms, random variables, distributions, expectation, variance, and introduction to random processes), about 14.5 hours — this subset builds the necessary probability and stochastic process foundation before martingale-specific topics.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Introduction to Stochastic Processes covers foundational probability, random variables, and stochastic processes, providing the rigorous mathematical background needed to understand martingales, supermartingales, and stochastic differential equations as used in the paper.

*If you want all of it:* All 50 episodes, about 31.8 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Martingale](https://www.youtube.com/playlist?list=PLKHPYFaGiDpap6pXPnFUNR76Tm4G_wWqW) — Adigun Olaoluwa · 6 videos · 2.4h across 6 episodes

**Watch only this:** Episodes 1 to 4 (covering martingales, sub- and supermartingales, and martingales as fair games), about 1.5 hours — enough to grasp the core martingale concepts needed for understanding the paper's theory.

*Why it unblocks this paper:* This playlist by Adigun Olaoluwa focuses specifically on martingales, submartingales, and supermartingales, including Ito integrals and Brownian martingale examples, providing a concise and targeted introduction to the key concepts directly relevant to the paper's controlled supermartingale functions.

*If you want all of it:* All 6 episodes, about 2.4 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on controlled supermartingale functions for stochastic differential equations, start by building a solid foundation in stochastic differential equations and control, followed by martingale and supermartingale theory, sum-of-squares programming, and iterative algorithms for bilinear SOS problems. Finally, focus on the paper's core novel concept of time-varying lambda-supermartingales, which provide sharper probabilistic safety guarantees, using advanced university lectures and research talks.

### Stochastic differential equations control *(prerequisite)*
This section covers the fundamental mathematical framework of stochastic differential equations (SDEs) with control inputs, which model systems evolving under randomness and control. Understanding the construction, solution, and control of SDEs is essential to grasp the system dynamics addressed in the paper.

*How the paper uses it:* The paper models controlled systems with randomness using stochastic differential equations, forming the basis for safety verification and control synthesis.

▶ [Lecture 15 (Part 1): Explicit solution to first order stochastic differential equations;](https://www.youtube.com/watch?v=WBWQvMkrtjo) — Sukkur IBA University- Mathematics · 30:27 · 6y ago

### Martingale and supermartingale theory *(prerequisite)*
Martingales and supermartingales are core concepts in stochastic process theory, providing tools to analyze the evolution of random processes and their expected values. This knowledge is crucial for understanding the probabilistic safety guarantees and the construction of supermartingale functions in the paper.

*How the paper uses it:* The paper extends classical martingale theory to define controlled supermartingale functions for safety verification in stochastic systems.

▶ [23. Martingales (Plain, Sub, and Super)](https://www.youtube.com/watch?v=GwVjWQykCDw) — MIT OpenCourseWare · 1:22:40 · 14y ago

### Sum-of-squares programming *(prerequisite)*
Sum-of-squares (SOS) programming is a computational technique used to verify polynomial nonnegativity and solve polynomial optimization problems. It is a key tool in the paper for synthesizing polynomial supermartingale functions and feedback control laws.

*How the paper uses it:* The paper formulates the synthesis of controlled supermartingales and feedback laws as SOS programming problems.

▶ [LP/SDP Hierarchies and Sum of Squares Proofs 1](https://www.youtube.com/watch?v=HdZajqWl15I) — Simons Institute for the Theory of Computing · 1:00:46 · Streamed 9y ago

### Iterative algorithms for bilinear SOS problems *(prerequisite)*
This section introduces iterative algorithms and their analysis, which are essential for solving bilinear optimization problems arising in SOS programming. Understanding iterative methods helps in comprehending the paper's proposed projection-based iterative algorithm for synthesis.

*How the paper uses it:* The paper proposes an iterative projection-based algorithm inspired by alternating minimization to solve bilinear SOS problems efficiently.

▶ [Prof. Andrea Montanari | Iterative Algorithms](https://www.youtube.com/watch?v=ekglaIGjT-Y) — INI Seminar Room 1 · 1:08:46 · 10mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in stochastic differential equations and control, which model systems evolving with randomness and control inputs. Next, learn martingale and supermartingale theory, the mathematical backbone for probabilistic safety guarantees. Then, grasp sum-of-squares programming, the computational tool used to synthesize safety certificates and control laws. Finally, explore iterative algorithms for solving the challenging bilinear optimization problems arising in the synthesis process, culminating with the paper's core concept of time-varying lambda-supermartingales that provide sharper safety bounds.

### Stochastic differential equations control *(prerequisite)*
Stochastic differential equations (SDEs) describe how systems evolve over time under both deterministic dynamics and random noise, often modeled as Brownian motion. Understanding how control inputs influence these SDEs is essential to designing feedback laws that steer the system safely despite uncertainty.

*How the paper uses it:* The paper models controlled systems with randomness using polynomial stochastic differential equations and synthesizes feedback control laws to ensure safety.

▶ [Lecture 15 (Part 1): Explicit solution to first order stochastic differential equations;](https://www.youtube.com/watch?v=WBWQvMkrtjo) — Sukkur IBA University- Mathematics · 30:27 · 6y ago

### Martingale and supermartingale theory *(prerequisite)*
Martingales are stochastic processes that model 'fair games' with no expected gain or loss over time, while supermartingales generalize this to processes that tend to decrease on average. These concepts are fundamental for reasoning about probabilistic bounds on system behavior and safety.

*How the paper uses it:* The paper extends classical supermartingale theory to controlled stochastic systems to provide probabilistic safety guarantees.

▶ [23. Martingales (Plain, Sub, and Super)](https://www.youtube.com/watch?v=GwVjWQykCDw) — MIT OpenCourseWare · 1:22:40 · 14y ago

### Sum-of-squares programming *(prerequisite)*
Sum-of-squares (SOS) programming is a technique to certify that a polynomial is nonnegative by expressing it as a sum of squares of other polynomials, enabling tractable convex optimization formulations. This is a key computational tool for synthesizing polynomial safety certificates and control laws.

*How the paper uses it:* The paper formulates the synthesis of controlled supermartingale functions and feedback laws as SOS programming problems.

▶ [Sum of Squares: An Optimal Algorithm? (ft. Boaz Barak)](https://www.youtube.com/watch?v=AUw9rRGL0lo) — ZettaBytes, EPFL · 10:39 · 8y ago

### Iterative algorithms for bilinear SOS problems *(prerequisite)*
Bilinear SOS problems involve optimization with bilinear constraints, which are computationally challenging. Iterative algorithms, such as projection-based alternating minimization, are practical methods to find approximate solutions by breaking down the problem into simpler subproblems solved repeatedly.

*How the paper uses it:* The paper proposes a projection-based iterative algorithm inspired by alternating minimization to solve the bilinear SOS synthesis problems efficiently.

▶ [Automated analysis of iterative black-box optimization algorithms using control theory](https://www.youtube.com/watch?v=pSSFmKXqbdI) — Control Seminar, Sponsors Seagate and Toyota · 1:02:48 · 2w ago

## Already in your library

- [HJB equations, dynamic programming principle and stochastic optimal control 1 - Andrzej Święch](https://www.youtube.com/watch?v=TFOfRkSnPyU) — also for: Optimal control for stochastic neural oscillators (Frédéric Gibou)
- [21. Stochastic Differential Equations](https://www.youtube.com/watch?v=qdbkvD4N-us) — also for: Optimal control for stochastic neural oscillators (Frédéric Gibou)
- [5. Stochastic Processes I](https://www.youtube.com/watch?v=TuTmC8aOQJE) — also for: Fractional Brownian motion in a finite interval: correlations effect depletion or accretion zones of particles near boundaries (Michelle A. Borkin)
- [17. Stochastic Processes II](https://www.youtube.com/watch?v=PPl-7_RL0Ko) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)
- [Sum-of-Squares Proofs, Efficient Algorithms, and Applications - Pravesh Kothari](https://www.youtube.com/watch?v=sjjRdqWVMzk) — also for: HyperCertificates: Verification of Discrete-Time Dynamical Systems Against HyperLTL Specifications (Majid Zamani)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of controlled supermartingale functions for stochastic differential equations as presented in the paper. The beginner project focuses on reproducing a core concept visualization using familiar tools. The intermediate project involves implementing the paper's iterative SOS synthesis algorithm for a simple polynomial controlled SDE and comparing safety bounds. The advanced project extends the method to address a stated limitation by adapting the synthesis algorithm to a stochastic hybrid system, exploring a future research direction.

### Beginner — Visualizing Time-Varying Lambda-Supermartingale Bounds for a Simple SDE
*Effort: a weekend, ~8 hours*

You build a Python notebook that simulates a simple one-dimensional polynomial stochastic differential equation without control inputs and computes time-varying lambda-supermartingale functions to plot the exponentially decaying upper bounds on the probability of safety violations over a finite horizon. You reproduce a figure similar to the paper's demonstration of sharper probability bounds compared to time-independent supermartingales.

**Why it shows you understood the paper:** This project shows you grasp the concept of time-varying lambda-supermartingales and their advantage in providing sharper probabilistic safety guarantees, a key theoretical contribution of the paper.

**Grounded in:** Theoretical proof that λ-supermartingales provide exponentially decaying upper bounds on the probability of safety violations over time.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** No external data needed; you simulate a simple polynomial SDE with known parameters as described in the paper.

**Build it:**

1. Implement a simple 1D polynomial SDE simulator using Euler-Maruyama discretization.
2. Define time-varying lambda-supermartingale functions analytically or numerically for the SDE.
3. Compute and plot the upper bounds on safety violation probabilities over time using lambda-supermartingale theory.
4. Compare these bounds to those from a time-independent supermartingale function to illustrate the sharper decay.
5. Document the mathematical background and interpretation of the plots in the notebook.

**Ships as:** A Jupyter notebook with simulation code, plots comparing probability bounds, and explanations linking the results to the paper's theoretical claims.

**Stretch goal:** Add a simple feedback control input and show how the bounds change with and without control.

### Intermediate — Iterative SOS Synthesis of Controlled Lambda-Supermartingales for a Nonlinear SDE
*Effort: 1-3 weekends*

You implement the paper's iterative projection-based algorithm to synthesize polynomial controlled lambda-supermartingale functions and polynomial feedback control laws for a small nonlinear polynomial controlled SDE example. You compare the resulting probabilistic safety bounds to a baseline time-independent supermartingale approach and plot system trajectories under the synthesized control.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core computational method of the paper—iterative SOS programming for bilinear problems—and to reproduce the key numerical results validating the approach's effectiveness in control synthesis and safety guarantees.

**Grounded in:** Development of a projection-based iterative algorithm to synthesize polynomial controlled supermartingales and feedback laws using sum-of-squares programming.

**Tech stack:** Julia, SumOfSquares.jl, JuMP, Mosek or another SOS-capable SDP solver

**Data:** No external dataset; you use a small polynomial controlled SDE example described in the paper or a standard benchmark polynomial SDE from control literature.

**Build it:**

1. Set up the polynomial controlled SDE model with drift and diffusion polynomials.
2. Formulate the SOS optimization problem for lambda-supermartingale function and feedback law synthesis.
3. Implement the iterative projection-based algorithm alternating between fixing the control and the supermartingale polynomial.
4. Run the algorithm to convergence or until a stopping criterion is met.
5. Simulate system trajectories under the synthesized feedback control and plot safety violation probability bounds over time.
6. Compare results to a baseline time-independent supermartingale synthesis (if feasible).

**Ships as:** A Julia project with code implementing the iterative SOS synthesis, simulation scripts, plots of probability bounds and trajectories, and a README explaining the method and results.

**Stretch goal:** Incorporate a simple user interface or visualization dashboard to interactively explore different control parameters and their effect on safety bounds.

### Advanced — Extending Controlled Supermartingale Synthesis to Stochastic Hybrid Systems
*Effort: a few weeks*

You extend the paper's iterative SOS synthesis algorithm to handle a simple stochastic hybrid system with polynomial dynamics and discrete mode switches, addressing one of the paper's stated future directions. You adapt the SOS constraints to incorporate mode-dependent supermartingale functions and control laws, and demonstrate safety guarantees over a finite horizon with numerical examples.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's methods and limitations by tackling an open challenge: extending the approach beyond polynomial SDEs to stochastic hybrid systems, which are more complex and relevant for real-world autonomous systems.

**Grounded in:** Extension to more complex stochastic hybrid systems and multiple observable functions is left for future work.

**Tech stack:** Julia, SumOfSquares.jl, JuMP, Mosek or another SOS-capable SDP solver

**Data:** Synthetic polynomial stochastic hybrid system model you design based on literature examples; no external dataset.

**Build it:**

1. Review the paper's SOS synthesis formulation and identify modifications needed for hybrid system modes.
2. Model a simple stochastic hybrid system with polynomial dynamics and discrete switching.
3. Formulate mode-dependent lambda-supermartingale SOS constraints and feedback control laws.
4. Implement an extended iterative SOS synthesis algorithm handling mode switches.
5. Validate the approach by simulating trajectories and plotting safety violation probability bounds.
6. Document challenges, assumptions, and potential improvements.

**Ships as:** A Julia repository with extended SOS synthesis code for stochastic hybrid systems, simulation scripts, plots demonstrating safety guarantees, and a detailed README discussing the extension and results.

**Stretch goal:** Incorporate multiple observable functions for richer safety specifications as another future direction.
