---
title: "777 · Stability Analysis using Quadratic Constraints for Systems with Neural Network Controllers — Murat Arcak"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-murat-arcak"
source_hash: "2c668d89d65660304ab37fa554ca98ded8bc1d93337a71967f2e5f23eeb15ccc"
sequence: 777
generator: "outreach-garden: managed"
---

# 777 · Stability Analysis using Quadratic Constraints for Systems with Neural Network Controllers

## At a glance

- **Professor:** Murat Arcak
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Stability Analysis using Quadratic Constraints for Systems with Neural Network Controllers](https://arxiv.org/pdf/2006.07579)
- **Authors:** He Yin, Peter Seiler, Murat Arcak
- **Year:** 2021

## Paper overview

This paper develops a method to analyze the stability of systems controlled by neural networks, which are complex and nonlinear. It provides mathematical tools to guarantee that such systems remain stable and safe, even when there are uncertainties or perturbations. The approach uses quadratic constraints and semidefinite programming to estimate regions where the system will behave predictably.

### Why it matters

**Research problem:** Neural network controllers are increasingly used in control systems but lack formal stability and safety guarantees due to their nonlinear and complex structure. Classical methods struggle to analyze these systems, and simulations do not provide formal guarantees.

**Why it matters:** Stability and safety guarantees are critical for deploying neural network controllers in safety-critical applications such as transportation and energy systems. Without formal analysis, these systems may behave unpredictably, leading to failures or hazards.

**Key contributions:**

- Nominal stability analysis using offset local sector quadratic constraints centered around equilibrium inputs to neural network activations, allowing analysis around non-zero equilibrium points.
- Robust stability analysis for uncertain plants modeled as interconnections of nominal plants and perturbations described by IQCs, accommodating nonlinearities, time delays, and unmodeled dynamics.
- Introduction of off-by-one IQCs to capture slope restrictions of activation functions, refining the description beyond static quadratic constraints.
- Application of the framework to nonlinear inverted pendulum and vehicle lateral dynamics with actuator uncertainty, demonstrating practical relevance.

## About the professor

**Murat Arcak** — Professor, Electrical Engineering and Computer Sciences, Univ. of California - Berkeley.

Research interests: control theory, autonomous systems, and multi-agent systems, with applications in transportation, energy, and biology

### Research links

- [Faculty/profile page](https://www2.eecs.berkeley.edu/Faculty/Homepages/arcak.html)
- [Professor website](http://www.eecs.berkeley.edu/~arcak)
- [Resolved homepage](https://people.eecs.berkeley.edu/~arcak/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization and Semidefinite Programming
**The paper assumes:** convex optimization theory, semidefinite programming, quadratic constraints, Lyapunov stability methods
**Already in this field?** Skip this entirely if you already understand convex optimization and semidefinite programming applied to control systems and stability analysis.

This background focuses on Convex Optimization and Semidefinite Programming, which are foundational to understanding the stability analysis methods used in the paper. The rigorous course option provides a deep, structured university-level treatment of convex optimization principles, including semidefinite programming, while the fast track offers a concise, intuition-driven series for quicker comprehension. Choose the course for thorough mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford University Lectures Convex Optimization](https://www.youtube.com/playlist?list=PL33B22C7FBB5FD22D) — BeNative1 · 37 videos · 46.0h across 37 episodes

**Watch only this:** Lectures 1 through 10, about 12.3 hours — covering convex sets, functions, duality, and semidefinite programming fundamentals necessary to understand the paper's optimization approach.

*Why it unblocks this paper:* This is a full Stanford University lecture series on Convex Optimization, covering all foundational concepts including semidefinite programming, which is directly used in the paper's stability analysis framework.

*If you want all of it:* 46.0 hours across 37 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Analysis and Optimization](https://www.youtube.com/playlist?list=PLiNGnnotnLOeYieGiDCOsdwI9ogWI4D3j) — Marcelo Oliveira · 18 videos · 11.1h across 18 episodes

**Watch only this:** Episodes 1 through 6, about 3.6 hours — covering basic convex optimization concepts, constraints, and introductory control-related optimization topics.

*Why it unblocks this paper:* This playlist offers a concise and clear introduction to convex analysis and optimization concepts, providing a faster but solid conceptual grounding relevant to the paper's use of quadratic and semidefinite constraints.

*If you want all of it:* 11.1 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on stability analysis using quadratic constraints for systems with neural network controllers, start by building a strong foundation in Lyapunov stability theory, which underpins the paper's stability proofs. Next, study the mathematical tools of quadratic constraints and integral quadratic constraints (IQCs) that the authors use to bound nonlinearities and model uncertainties. Then, learn about semidefinite programming as the computational method to solve the stability conditions and approximate regions of attraction. Finally, focus on the paper's core concept by watching the authors' own talk explaining their novel stability analysis framework, which combines these elements.

### Lyapunov stability theory *(prerequisite)*
Lyapunov stability theory provides the fundamental framework for analyzing system stability and estimating regions of attraction, which is central to the paper's approach. The selected lecture offers a rigorous university-level treatment of the Lyapunov stability theorem with examples, suitable for an advanced reader.

*How the paper uses it:* The paper merges Lyapunov stability theory with quadratic constraints to prove local asymptotic stability of neural network controlled systems.

▶ [Nonlinear control systems - 2.4. Lyapunov Stability Theorem](https://www.youtube.com/watch?v=Fb6XY-cTivo) — Robotic Systems Control · 12:31 · 4y ago

### Quadratic constraints in control *(prerequisite)*
Quadratic constraints are key mathematical tools used to bound nonlinearities in neural network activations, enabling formal stability analysis. The chosen talk from the Simons Institute by Benjamin Recht provides a deep and rigorous exploration of integral quadratic constraints and their applications in optimization and control.

*How the paper uses it:* The paper uses local sector quadratic constraints and integral quadratic constraints (IQCs) to bound nonlinear activation functions and model perturbations.

▶ [Analysis and Design of Optimization Algorithms via Integral Quadratic Constraints](https://www.youtube.com/watch?v=qXVE8rKBlHQ) — Simons Institute for the Theory of Computing · 1:09:56 · 12y ago

### Integral quadratic constraints IQCs *(prerequisite)*
Integral quadratic constraints (IQCs) are used to model uncertainties and perturbations in robust stability analysis. The selected talk by Michael Cantoni is a specialized seminar that rigorously covers IQCs in control systems, matching the paper's use of IQCs for uncertain plants.

*How the paper uses it:* The paper extends stability guarantees to uncertain systems using IQCs to describe perturbations such as nonlinearities and time delays.

▶ [Integral quadratic constraints for asynchronous sampled-data links](https://www.youtube.com/watch?v=7C6sXdqYJ08) — STAEOnline · 1:04:26 · 6y ago

### Semidefinite programming in control *(prerequisite)*
Semidefinite programming (SDP) is the computational backbone for solving the stability conditions and approximating regions of attraction in the paper. The tutorial by Mahyar Fazlyab is a focused university-level lecture on neural network analysis via SDP, directly relevant and rigorous for understanding the computational approach.

*How the paper uses it:* The paper relies on semidefinite programming to compute ellipsoidal inner-approximations of the region of attraction.

▶ [An Introduction to Neural Network Analysis via Semidefinite Programming](https://www.youtube.com/watch?v=2N480It5dSs) — Mahyar Fazlyab · 33:32 · 4y ago

### Stability analysis with quadratic constraints
This concept is the core of the paper, combining Lyapunov theory with quadratic constraints to analyze neural network controlled systems. The chosen video is the authors' own presentation on backward reachability using IQCs, which closely relates to their stability analysis framework and provides direct insight into their methodology.

*How the paper uses it:* The authors present their novel stability analysis method using quadratic constraints and IQCs in this talk, illustrating the theoretical and practical aspects of their approach.

▶ [Backward Reachability Using Integral Quadratic Constraints for Uncertain Nonlinear Systems](https://www.youtube.com/watch?v=MKfUzcDTUqM) — He Yin · 10:59 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the stability analysis of systems with neural network controllers as developed in the paper, start by learning the foundational concept of Lyapunov stability theory, which provides the mathematical basis for proving system stability. Next, build intuition on quadratic constraints and integral quadratic constraints (IQCs), which are key tools used to bound nonlinearities and model uncertainties in the paper's approach. Then, learn about semidefinite programming, the computational method used to solve the stability conditions and approximate regions of attraction. Finally, explore the core method of stability analysis using quadratic constraints as applied to neural network controlled systems.

### Lyapunov stability theory *(prerequisite)*
Lyapunov stability theory provides a way to prove whether a system will remain stable around an equilibrium point by constructing a special function (Lyapunov function) that behaves like an energy measure. Understanding this theory is essential to grasp how the paper guarantees stability of neural network controlled systems.

*How the paper uses it:* The paper uses Lyapunov stability theory as the foundation for its stability guarantees and region of attraction computations.

▶ [A Visual Explanation of Lyapunov Functions](https://www.youtube.com/watch?v=dpZnYiGWLT0) — Prof Gio | Giordano Scarciotti · 20:54 · 5mo ago

### Quadratic constraints in control *(prerequisite)*
Quadratic constraints are mathematical inequalities that help describe and bound nonlinear behaviors in control systems, such as neural network activation functions. They provide a tractable way to analyze complex nonlinearities using convex optimization.

*How the paper uses it:* The paper uses quadratic constraints to bound the nonlinear activation functions in neural networks for stability analysis.

▶ [Analysis and Design of Optimization Algorithms via Integral Quadratic Constraints](https://www.youtube.com/watch?v=qXVE8rKBlHQ) — Simons Institute for the Theory of Computing · 1:09:56 · 12y ago

### Integral quadratic constraints IQCs *(prerequisite)*
Integral quadratic constraints extend quadratic constraints to model uncertainties and dynamic perturbations in systems, allowing robust stability analysis under unknown or varying conditions. IQCs are crucial for handling perturbations and nonlinearities beyond static bounds.

*How the paper uses it:* The paper employs IQCs to model uncertainties and perturbations in the plant for robust stability guarantees.

▶ [Integral quadratic constraints for asynchronous sampled-data links](https://www.youtube.com/watch?v=7C6sXdqYJ08) — STAEOnline · 1:04:26 · 6y ago

### Semidefinite programming in control *(prerequisite)*
Semidefinite programming is a type of convex optimization used to efficiently solve matrix inequality problems common in control theory. It enables computation of stability certificates and approximations of regions where the system behaves predictably.

*How the paper uses it:* The paper relies on semidefinite programming to solve the stability conditions and compute inner-approximations of the region of attraction.

▶ [Lecture 11 | Semidefinite Programming (SDP) | Convex Optimization by Dr. Ahmad Bazzi](https://www.youtube.com/watch?v=XwyE8vIszo4) — Ahmad Bazzi · 36:50 · 7y ago

## Already in your library

- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [A Visual Explanation of Lyapunov Stability](https://www.youtube.com/watch?v=W8YpgG0KuOo) — also for: Two-Stage Learning of Stabilizing Neural Controllers via Zubov Sampling and Iterative Domain Expansion (Huan Zhang)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)
- [Semidefinite Programming](https://www.youtube.com/watch?v=u3rbGJN93ro) — also for: Semidefinite Programming Relaxations of the Traveling Salesman Problem and Their Integrality Gaps (David P. Williamson)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's approach to stability analysis of neural network controllers using quadratic constraints. The beginner project reproduces a simple stability condition for a nominal linear system with a neural network controller. The intermediate project implements the core semidefinite programming method to compute a region of attraction (ROA) inner-approximation for a small example system, comparing results with and without off-by-one IQCs. The advanced project extends the method to analyze stability for a recurrent neural network controller, addressing one of the paper's stated future directions.

### Beginner — Nominal Stability Check for Neural Network Controller
*Effort: a weekend (~6-8 hours)*

You build a simple Python script that models a discrete-time linear time-invariant (LTI) plant controlled by a small feed-forward neural network with ReLU activations. You implement the local sector quadratic constraints for the ReLU activation around a known equilibrium input and verify the nominal stability condition from Theorem 1 by checking a small semidefinite program using CVXPY.

**Why it shows you understood the paper:** This project shows you understand how to apply local sector quadratic constraints to neural network activations and how these constraints integrate with Lyapunov stability conditions via semidefinite programming, directly reflecting the paper's nominal stability analysis.

**Grounded in:** Nominal stability analysis using offset local sector quadratic constraints centered around equilibrium inputs to neural network activations, allowing analysis around non-zero equilibrium points (Theorem 1).

**Tech stack:** Python 3.11, CVXPY, NumPy, Matplotlib

**Data:** No external dataset needed; you simulate a simple 2D LTI system and a small feed-forward neural network with ReLU activations.

**Build it:**

1. Implement a discrete-time LTI plant model (e.g., 2 states) in Python.
2. Define a small feed-forward neural network controller with ReLU activations and specify an equilibrium input.
3. Compute local sector bounds for the ReLU activation around the equilibrium input.
4. Formulate the semidefinite program representing Theorem 1's stability condition using CVXPY.
5. Solve the semidefinite program and verify if the stability condition holds.
6. Visualize the computed ellipsoidal region of attraction inner-approximation.

**Ships as:** A Python script and README demonstrating the nominal stability check, including plots of the ROA inner-approximation and explanation of the quadratic constraints used.

**Stretch goal:** Add support for another activation function (e.g., leaky ReLU) with corresponding local sector bounds.

### Intermediate — ROA Computation with Off-by-One IQCs for Neural Network Controllers
*Effort: 2-3 weekends (~20 hours)*

You implement the core semidefinite programming approach from the paper to compute an ellipsoidal inner-approximation of the region of attraction (ROA) for a discrete-time nonlinear system controlled by a feed-forward neural network. You incorporate both local sector quadratic constraints and off-by-one IQCs for the ReLU activations. You compare ROA sizes and robustness margins with and without off-by-one IQCs on a simulated nonlinear inverted pendulum system.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method, including the advanced off-by-one IQCs that reduce conservatism, and to apply it to a practical nonlinear control problem, mirroring the paper's key results and numerical examples.

**Grounded in:** Numerical examples show that incorporating off-by-one IQCs leads to larger ROA inner-approximations and better robustness to uncertainties; Theorem 2 extends stability guarantees to uncertain systems with perturbations characterized by IQCs.

**Tech stack:** Python 3.11, CVXPY, NumPy, SciPy, Matplotlib

**Data:** Simulated nonlinear inverted pendulum dynamics as described in the paper; no external dataset required.

**Build it:**

1. Implement the nonlinear inverted pendulum discrete-time dynamics and a feed-forward neural network controller with ReLU activations.
2. Derive and implement local sector quadratic constraints for the ReLU activations around equilibrium points.
3. Implement off-by-one IQCs to capture slope restrictions of the activations.
4. Formulate the semidefinite program for ROA inner-approximation including nominal and robust stability conditions.
5. Solve the semidefinite program with and without off-by-one IQCs using CVXPY.
6. Compare and visualize the ROA inner-approximations and discuss the effect of off-by-one IQCs.

**Ships as:** A Python project with scripts and a detailed README showing ROA computations, comparison plots, and explanations of the quadratic constraints and IQCs used.

**Stretch goal:** Extend the implementation to include actuator uncertainty modeled as perturbations and verify robust stability as per Theorem 2.

### Advanced — Extending Stability Analysis to Recurrent Neural Network Controllers
*Effort: 3-4 weeks*

You develop an extension of the paper's quadratic constraint framework to analyze stability of discrete-time systems controlled by recurrent neural networks (RNNs). You adapt the local sector and off-by-one IQCs to handle the temporal dependencies in RNN activations. You implement the extended semidefinite programming conditions and apply them to a simulated control problem with an RNN controller, evaluating stability and ROA inner-approximations.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper by addressing the limitation of feed-forward architectures, demonstrating deep comprehension of the quadratic constraint framework and creativity in extending it to more complex neural network architectures used in control.

**Grounded in:** Future directions include extending the framework to handle more general neural network architectures, such as recurrent or convolutional networks.

**Tech stack:** Python 3.11, CVXPY, NumPy, SciPy, Matplotlib

**Data:** Simulated discrete-time nonlinear system controlled by a small RNN trained for stabilization; data synthesized as no public dataset is specified.

**Build it:**

1. Study the paper's quadratic constraint framework and identify how to generalize local sector and off-by-one IQCs to recurrent activations.
2. Implement a discrete-time nonlinear plant model and a small RNN controller with standard activation functions (e.g., tanh or ReLU).
3. Formulate semidefinite programming conditions incorporating the extended quadratic constraints for RNN activations.
4. Implement the SDP in CVXPY and solve for stability certificates and ROA inner-approximations.
5. Evaluate and visualize the results, comparing with baseline feed-forward controller analysis.
6. Document the methodology, challenges, and potential improvements.

**Ships as:** A comprehensive Python repository with code, documentation, and visualizations demonstrating the extended stability analysis framework for RNN controllers.

**Stretch goal:** Explore convolutional neural network (CNN) controllers and adapt the framework accordingly.
