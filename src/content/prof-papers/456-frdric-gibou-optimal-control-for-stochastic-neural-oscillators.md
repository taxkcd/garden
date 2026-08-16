---
title: "456 · Optimal control for stochastic neural oscillators — Frédéric Gibou"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-frederic-gibou"
source_hash: "a0bdd6569a5c33652bdf577978381e6de5442eb56cc6997f9db1c216db7d2f9e"
sequence: 456
generator: "outreach-garden: managed"
---

# 456 · Optimal control for stochastic neural oscillators

## At a glance

- **Professor:** Frédéric Gibou
- **Institution:** Univ. of California - Santa Barbara
- **Paper:** [Optimal control for stochastic neural oscillators](https://doi.org/10.1007/s00422-025-01007-3)
- **Authors:** Faranak Rajabi, Frederic Gibou, Jeff Moehlis
- **Year:** 2025

## Paper overview

This paper develops an energy-efficient, event-based control strategy to desynchronize coupled neuronal networks by incorporating stochastic noise into neural models. Using advanced computational methods to solve the stochastic Hamilton–Jacobi–Bellman equation, the authors find optimal control inputs that reduce pathological synchronization in neural populations, which is relevant for disorders like Parkinson's disease. Their stochastic control approach uses less energy than deterministic methods and is robust to network heterogeneity, potentially extending battery life of implanted stimulators.

### Why it matters

**Research problem:** Pathological synchronization of neuronal activity causes debilitating symptoms in neurological disorders such as Parkinson’s disease and epilepsy. Existing deep brain stimulation (DBS) treatments use continuous high-frequency stimulation, which can be energy inefficient and cause side effects. There is a need for energy-efficient, adaptive control strategies that account for intrinsic neural noise to desynchronize neural populations effectively.

**Why it matters:** Improving energy efficiency and robustness of neurostimulation therapies can reduce side effects, extend battery life of implanted devices, and improve patient quality of life. Addressing neural noise in control strategies is critical for realistic and effective treatments.

**Key contributions:**

- Developed a nonlinear second-order monotone numerical solver for stochastic HJB equations using level set methods.
- Derived energy-optimal control inputs for stochastic neural oscillators that incorporate intrinsic noise.
- Demonstrated event-based control strategy for desynchronizing coupled neuronal networks using stochastic optimal control.
- Showed stochastic control achieves significant energy savings compared to deterministic control, especially at higher noise levels.
- Analyzed robustness of control strategy across homogeneous, heterogeneous, and sparse heterogeneous network coupling scenarios.

## About the professor

**Frédéric Gibou** — Department of Mechanical Engineering, Department of Computer Science, Department of Mathematics, Univ. of California - Santa Barbara.

Research interests: high resolution computational methods for large scale computations, Computational Materials Science, Computational Fluid Dynamics, Computational Image Analysis

### Research links

- [Faculty/profile page](https://engineering.ucsb.edu/~fgibou)
- [Resolved homepage](https://sites.engineering.ucsb.edu/~fgibou/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** stochastic optimal control
**The paper assumes:** stochastic optimal control theory, stochastic differential equations, Hamilton–Jacobi–Bellman equations
**Already in this field?** Skip this entirely if you already have a solid understanding of stochastic optimal control and stochastic HJB equations.

To understand the core methodology of this paper on stochastic optimal control for neural oscillators, a solid grasp of stochastic optimal control theory and the Hamilton–Jacobi–Bellman equation is essential. The rigorous course option offers a deep, structured university-level treatment of numerical optimal control methods, including dynamic programming and HJB equations. The fast track provides a concise, focused introduction to stochastic control concepts and dynamic programming from a reputable explainer series, suitable for quickly gaining intuition and key ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Numerical Optimal Control - University of Freiburg, 2017, Dr. Moritz Diehl](https://www.youtube.com/playlist?list=PLPEJ5a1iPLSGNQ2Z9feyqlFCmE_VN1Mbu) — Martin Valgur · 21 videos · 27.8h across 21 episodes

**Watch only this:** Lectures 11 - Dynamic Programming, 12 - Dynamic Programming (cont.), 16 - Talk by Michael Neunert and Hamilton-Jacobi-Bellman Equation, totaling about 4 hours — these cover the core theory and numerical methods for HJB equations essential to understanding the paper's approach.

*Why it unblocks this paper:* This University of Freiburg course by Dr. Moritz Diehl covers numerical optimal control comprehensively, including dynamic programming and the Hamilton–Jacobi–Bellman equation, directly relevant to the paper's nonlinear numerical solver for stochastic HJB equations.

*If you want all of it:* 27.8 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stochastic Control for Finance](https://www.youtube.com/playlist?list=PLGboZ4litMr_TOwUANH-s-uFnczzy2uuW) — Neil Walton · 31 videos · 15.9h across 31 episodes

**Watch only this:** Episodes 1 - Dynamic Programming (Part 1), 2 - Dynamic Programming (Part 2), 3 - Dynamic Programming (Part 3), and 20 - Continuous Time Dynamic Programming -- The Hamilton-Jacobi-Bellman Equation, about 2.5 hours total — these episodes cover the foundational theory and continuous-time HJB relevant to the paper.

*Why it unblocks this paper:* Neil Walton's 'Stochastic Control for Finance' playlist provides a clear, concise introduction to dynamic programming, Markov decision processes, and the continuous-time Hamilton-Jacobi-Bellman equation, offering intuition and key concepts applicable to stochastic optimal control in neural systems.

*If you want all of it:* 15.9 hours across all 31 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Optimal control for stochastic neural oscillators," start by building a strong foundation in stochastic differential equations as they model neural noise and dynamics. Next, study the stochastic Hamilton–Jacobi–Bellman (HJB) equation, the central mathematical framework for deriving optimal control under noise. Then, review numerical methods for nonlinear PDEs to grasp the solver techniques used. Finally, focus on the core concept of optimal control of neural oscillators, including the authors' own talks on stochastic optimal control and HJB equations to gain direct insight into their novel approach.

### Stochastic differential equations in neuroscience *(prerequisite)*
Understanding stochastic differential equations (SDEs) is essential as they model the intrinsic noise and dynamics of neurons in the paper. These equations form the basis for incorporating stochasticity into neural models, which is critical for the stochastic control framework developed.

*How the paper uses it:* The paper models single neurons with stochastic differential equations incorporating intrinsic noise.

▶ [21. Stochastic Differential Equations](https://www.youtube.com/watch?v=qdbkvD4N-us) — MIT OpenCourseWare · 56:05 · 11 years ago

### Stochastic Hamilton–Jacobi–Bellman equation *(prerequisite)*
The stochastic HJB equation is the core mathematical tool for deriving optimal control policies under uncertainty and noise. Learning about the dynamic programming principle and the HJB framework will clarify how the authors compute energy-optimal controls for stochastic neural oscillators.

*How the paper uses it:* The authors solve the stochastic Hamilton–Jacobi–Bellman equation numerically to find optimal control inputs.

▶ [HJB equations, dynamic programming principle and stochastic optimal control 1 - Andrzej Święch](https://www.youtube.com/watch?v=TFOfRkSnPyU) — Tohoku University · 1:04:32 · 8 years ago

### Numerical methods for nonlinear PDEs *(prerequisite)*
Numerical methods for nonlinear partial differential equations are crucial to understand the solver developed for the stochastic HJB equation. This knowledge helps in appreciating the computational techniques and challenges in implementing the nonlinear second-order monotone solver using level set methods.

*How the paper uses it:* The paper develops a nonlinear second-order monotone numerical solver for stochastic HJB equations using level set methods.

▶ [Nonlinear PDE of order one: Jacobi’s Method. Lect. 13.#partialdifferentialequations](https://www.youtube.com/watch?v=gu9lZjMvyg8) — B. Sc. Mathematics Dr. S S Phulsagar · 50:59 · 5 years ago

### Optimal control of neural oscillators
This section covers the core concept of designing energy-efficient control inputs to desynchronize neural oscillators, which is the main application focus of the paper. Understanding optimal control theory as applied to neural oscillations will contextualize the paper's contributions in neuroscience and control.

*How the paper uses it:* The paper derives energy-optimal control inputs for stochastic neural oscillators to reduce pathological synchronization.

▶ [Optimal Control (CMU 16-745) - Lecture 6: Deterministic Optimal Control](https://www.youtube.com/watch?v=usQE6bSCEyc) — MIT Robotic Exploration Lab · 1:22:22 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand energy-efficient stochastic control of neural oscillators. Start with the basics of stochastic differential equations in neuroscience to grasp neural noise modeling, then learn numerical methods for nonlinear PDEs to understand the solver techniques. Next, study the stochastic Hamilton–Jacobi–Bellman equation as the core mathematical framework for optimal control under noise. Finally, explore optimal control of neural oscillators to see how these methods apply to desynchronizing neurons in the paper's context.

### Stochastic differential equations in neuroscience *(prerequisite)*
Stochastic differential equations (SDEs) model systems influenced by random noise, which is essential for capturing the intrinsic variability in neural activity. Understanding SDEs helps build intuition about how noise affects neuron dynamics and why stochastic modeling is necessary for realistic neural control.

*How the paper uses it:* The paper models single neurons with stochastic differential equations incorporating intrinsic noise to reflect realistic neural behavior.

▶ [21. Stochastic Differential Equations](https://www.youtube.com/watch?v=qdbkvD4N-us) — MIT OpenCourseWare · 56:05 · 11 years ago

### Numerical methods for nonlinear PDEs *(prerequisite)*
Nonlinear partial differential equations (PDEs) often arise in modeling complex systems, but they rarely have closed-form solutions. Numerical methods provide practical algorithms to approximate solutions, which is crucial for solving the stochastic Hamilton–Jacobi–Bellman equation in the paper.

*How the paper uses it:* The authors develop a nonlinear second-order monotone numerical solver using level set methods to solve the stochastic HJB equation.

▶ [Nonlinear PDE of order one: Jacobi’s Method. Lect. 13.#partialdifferentialequations](https://www.youtube.com/watch?v=gu9lZjMvyg8) — B. Sc. Mathematics Dr. S S Phulsagar · 50:59 · 5 years ago

### Stochastic Hamilton–Jacobi–Bellman equation *(prerequisite)*
The stochastic Hamilton–Jacobi–Bellman (HJB) equation is a fundamental tool in optimal control theory for systems affected by randomness. It characterizes the value function that yields the minimal expected cost, enabling the derivation of optimal control policies under noise.

*How the paper uses it:* The paper solves the stochastic HJB equation numerically to find energy-optimal control inputs for neural oscillators under noise.

▶ [HJB equations, dynamic programming principle and stochastic optimal control 1 - Andrzej Święch](https://www.youtube.com/watch?v=TFOfRkSnPyU) — Tohoku University · 1:04:32 · 8 years ago

### Optimal control of neural oscillators
Optimal control of neural oscillators involves designing control inputs that influence rhythmic neural activity efficiently, often to achieve therapeutic goals like desynchronization. This concept ties together the mathematical tools and neuroscience applications to address pathological synchronization.

*How the paper uses it:* The core contribution of the paper is deriving energy-efficient, event-based stochastic optimal control inputs to desynchronize coupled neuronal networks.

▶ [Optimal Control (CMU 16-745) - Lecture 6: Deterministic Optimal Control](https://www.youtube.com/watch?v=usQE6bSCEyc) — MIT Robotic Exploration Lab · 1:22:22 · 4 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's stochastic optimal control approach for neural oscillators. The beginner project reproduces a key visualization of event-based desynchronization using the authors' MATLAB data. The intermediate project runs and extends the authors' stochastic HJB solver code to compare energy usage against deterministic control on a smaller scale. The advanced project tackles a stated limitation by adapting the stochastic control framework to a more complex neural model or coupling topology, exploring computational feasibility and robustness.

### Beginner — Visualize Event-Based Desynchronization of Neural Oscillators
*Effort: a weekend, ~8 hours*

You build a MATLAB-based visualization that reproduces the network voltage dynamics under event-based stochastic control as shown in Figure 9 of the paper. Using the authors' provided HJB solution data, you plot spike timing and voltage traces to illustrate desynchronization effects.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of event-based control to randomize spike timing and desynchronize coupled neurons, a key result of the paper.

**Grounded in:** The event-based control effectively desynchronizes coupled neuronal networks (Figure 9).

**Tech stack:** MATLAB R2020a or newer

**Data:** Use the authors' HJB solution data and simulation outputs available in the GitHub repository https://github.com/UCSB-CASL/HH-Stochastic-Control.

**Build it:**

1. Clone the authors' GitHub repository and set up MATLAB environment.
2. Load the provided simulation data files corresponding to event-based stochastic control.
3. Write MATLAB scripts to plot network voltage traces and spike raster plots replicating Figure 9.
4. Add annotations and legends to highlight desynchronization and randomized spike timing.
5. Document the visualization steps and interpretation in a README.

**Verified links from the paper:**

- <https://github.com/UCSB-CASL/HH-Stochastic-Control> — released by the paper's authors

**Ships as:** A MATLAB script and README that reproduce and explain event-based desynchronization plots from the paper.

**Stretch goal:** Add interactive sliders to vary noise level or coupling strength and observe effects on desynchronization.

### Intermediate — Run and Extend Stochastic HJB Solver for Energy-Optimal Control
*Effort: 1-3 weekends, ~20 hours*

You run the authors' MATLAB implementation of the nonlinear second-order monotone solver for the stochastic Hamilton–Jacobi–Bellman equation and reproduce energy expenditure curves comparing stochastic and deterministic control. You then extend the analysis by varying noise intensity or coupling strength on a smaller network and report energy savings.

**Why it shows you understood the paper:** This project demonstrates you can operate and modify the core computational method of the paper, reproducing key quantitative results and understanding the energy efficiency benefits of stochastic control.

**Grounded in:** The stochastic control strategy achieves significant energy savings compared to deterministic control (Figure 10).

**Tech stack:** MATLAB R2020a or newer

**Data:** Use the authors' MATLAB code and HJB solution data from https://github.com/UCSB-CASL/HH-Stochastic-Control.

**Build it:**

1. Clone and set up the MATLAB repository from the authors.
2. Run baseline simulations to reproduce energy expenditure curves for stochastic and deterministic control.
3. Modify parameters such as noise intensity or coupling strength to create new simulation scenarios.
4. Compute and plot cumulative energy expenditure and compare stochastic vs deterministic control.
5. Write a report summarizing your findings and how they align with the paper's results.

**Verified links from the paper:**

- <https://github.com/UCSB-CASL/HH-Stochastic-Control> — released by the paper's authors

**Ships as:** A MATLAB project with scripts and plots showing energy expenditure comparisons and a report discussing results.

**Stretch goal:** Implement a simple deterministic control baseline from scratch in MATLAB to deepen understanding.

### Advanced — Adapt Stochastic Optimal Control to Heterogeneous Neural Models
*Effort: few weeks, ~60+ hours*

You develop a computational framework extending the stochastic HJB solver approach to a higher-dimensional neural model or a network with nonlinear heterogeneous coupling, addressing a limitation noted in the paper. You explore computational tractability and robustness of the control strategy under these more complex conditions.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions by extending the method to more realistic neural models, demonstrating both theoretical and practical command of stochastic optimal control and numerical PDE solvers.

**Grounded in:** Study limitation: generalization to other neuron types and coupling mechanisms is not demonstrated; future direction: refine BSPDE solver for higher-dimensional, more complex neural models.

**Tech stack:** MATLAB R2020a or newer, Python 3.11 (optional for data analysis/visualization)

**Data:** Simulate synthetic data for the chosen complex neural model and coupling; no external dataset is required.

**Build it:**

1. Review the authors' MATLAB solver code and understand its structure and assumptions.
2. Select a more complex neural oscillator model (e.g., FitzHugh-Nagumo or a multi-compartment Hodgkin-Huxley variant).
3. Modify or extend the stochastic HJB solver to handle the increased dimensionality or nonlinear coupling.
4. Run simulations to compute stochastic optimal controls and evaluate energy expenditure and desynchronization.
5. Analyze robustness under network heterogeneity and compare with baseline deterministic controls.
6. Document methodology, challenges, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/UCSB-CASL/HH-Stochastic-Control> — released by the paper's authors

**Ships as:** A MATLAB-based computational framework and report demonstrating stochastic control on a complex neural model with analysis of energy efficiency and robustness.

**Stretch goal:** Integrate adaptive event-based control triggering based on observed network states to improve energy savings.
