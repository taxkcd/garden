---
title: "415 · Guaranteeing Conservation of Integrals with Projection in Physics-Informed Neural Networks — Luca Daniel"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luca-daniel"
source_hash: "5aa12b9e6241f6d38741eacf48488d679a3a9fdebce774930aa13b24f84345c9"
sequence: 415
generator: "outreach-garden: managed"
---

# 415 · Guaranteeing Conservation of Integrals with Projection in Physics-Informed Neural Networks

## At a glance

- **Professor:** Luca Daniel
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Guaranteeing Conservation of Integrals with Projection in Physics-Informed Neural Networks](https://arxiv.org/pdf/2511.09048)
- **Authors:** Anthony Baez, Wang Zhang, Ziwen Ma, Lam Nguyen, Subhro Das, Luca Daniel
- **Year:** 2026

## Paper overview

This paper introduces a new method to ensure that physics-informed neural networks (PINNs) strictly conserve integral quantities like momentum and energy when solving partial differential equations (PDEs). Unlike previous approaches that only softly enforce conservation laws, this method uses a projection technique that guarantees exact conservation, improving physical accuracy and trustworthiness of PINN solutions.

### Why it matters

**Research problem:** Physics-informed neural networks often use soft constraints to enforce PDE structures, which can lead to solutions that violate fundamental conservation laws. The challenge is to develop a method that guarantees exact conservation of integral quantities within PINNs while maintaining or improving solution accuracy.

**Why it matters:** Conservation laws are fundamental to physical systems, and violating them reduces the reliability of neural network models in scientific and engineering applications. Guaranteeing conservation improves model trustworthiness, safety, and applicability in real-world scenarios such as fluid dynamics, chemical reactors, and biomedical systems.

**Key contributions:**

- Development of a projection method that guarantees conservation of linear and quadratic integral quantities in PINNs.
- Derivation of projection formulae via constrained nonlinear optimization.
- Demonstration that the method reduces conservation errors by three to four orders of magnitude compared to soft constraints.
- Evidence that the projection method marginally improves PDE solution accuracy and convergence.
- Extension of the method to both conserved and non-conserved systems, and to 1D and 2D PDEs.

## About the professor

**Luca Daniel** — Professor of Electrical Engineering and Computer Science, Electrical Engineering and Computer Science (EECS), Massachusetts Inst. of Technology.

Research interests: development of numerical techniques related to integral equation solvers, parameterized model order reduction, uncertainty quantification, inverse problems and robust optimization; current applications include radio frequency (RF) circuits, silicon photonics, microelectromechanical devices, magnetic resonance imaging scanners, and robustness of deep neural networks.

### Research links

- [Faculty/profile page](http://www.mit.edu/~dluca)
- [Resolved homepage](http://www.mit.edu/~dluca/)
- [Lab website](http://www.rle.mit.edu/cpg/)
- [View publications list](http://www.mit.edu/~dluca/publications/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Constrained Nonlinear Optimization
**The paper assumes:** constrained nonlinear optimization, Lagrange multipliers, and projection methods
**Already in this field?** Skip this entirely if you already understand constrained nonlinear optimization techniques and Lagrange multiplier methods for enforcing constraints in optimization problems.

This background playlist selection focuses on constrained nonlinear optimization, which is central to understanding the projection method used in the paper to guarantee conservation laws in physics-informed neural networks. The rigorous course option provides a deep, structured university-level treatment of optimization theory and algorithms, ideal for readers seeking comprehensive mastery. The fast track offers a concise, intuition-driven explainer series on Lagrange multipliers and KKT conditions, covering the essential concepts quickly for those who want a solid grasp without a large time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Optimization Theory and Algorithms - Prof. Uday Khankhoje](https://www.youtube.com/playlist?list=PLyqSpQzTE6M8XNc8SxMLbUxdR7lDSuIGw) — NPTEL-NOC IITM · 83 videos · 19.4h across the first 60 episodes

**Watch only this:** Episodes 1-20 ("Optimization Theory and Algorithms - Introduction" through "Unconstrained optimization - 7 - Trust Region Methods"), about 6.5 hours — these cover prerequisites, problem types, and foundational unconstrained optimization needed before tackling constrained problems.

*Why it unblocks this paper:* This NPTEL course by Prof. Uday Khankhoje covers optimization theory and algorithms with detailed background on constrained optimization, including Lagrange multipliers and nonlinear optimization techniques, directly supporting the mathematical foundations of the projection method in the paper.

*If you want all of it:* First 60 episodes, about 19.4 hours — full coverage of optimization theory and algorithms including constrained nonlinear optimization.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lagrange and KKT in Constrained Optimization](https://www.youtube.com/playlist?list=PLN7nX8sS1dGE0jJA2QiVN2dxDTAemneGv) — Viraj Ariyawansa · 8 videos · 2.3h across 8 episodes

**Watch only this:** Episodes 1-5 ("Understanding Lagrange Multipliers Visually" through "Lagrange multipliers, using tangency to solve constrained optimization"), about 1.3 hours — covers the core concepts of Lagrange multipliers and their use in constrained optimization.

*Why it unblocks this paper:* This short playlist by Viraj Ariyawansa provides clear, visual explanations of Lagrange multipliers and KKT conditions, which are key to understanding the constrained nonlinear optimization problems solved in the paper's projection method.

*If you want all of it:* All 8 episodes, about 2.3 hours — includes deeper insights into KKT conditions and examples.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on guaranteeing conservation of integrals with projection in physics-informed neural networks, start with foundational knowledge on conservation laws in PDEs and constrained nonlinear optimization, as these underpin the mathematical and physical principles of the method. Then, study the core concept of physics-informed neural networks to grasp the framework the paper builds upon. Finally, focus on the authors' own advanced lecture on calculus on subsets of ℝⁿ and tangent spaces, which provides rigorous mathematical foundations relevant to the projection method introduced in the paper.

### Conservation laws in PDEs *(prerequisite)*
Understanding conservation laws in PDEs is essential because the paper's main contribution is to guarantee exact conservation of integral quantities like momentum and energy. These laws represent fundamental physical constraints that any reliable PDE solution must satisfy. The selected videos provide rigorous university-level lectures and seminar talks on the formulation and numerical treatment of conservation laws.

*How the paper uses it:* The paper ensures exact conservation of integral quantities governed by PDE conservation laws.

▶ [MIT Numerical Methods for PDE Lecture 8: Review of conservation laws](https://www.youtube.com/watch?v=QstSGLVyocM) — Aerodynamic CFD · 11:53 · 10 years ago

### Constrained nonlinear optimization *(prerequisite)*
Constrained nonlinear optimization is the mathematical technique used to derive the projection method that enforces conservation constraints exactly. Understanding optimality conditions and algorithms in nonlinear optimization is crucial to grasp how Lagrange multipliers are applied to project PINN outputs onto conservation manifolds.

*How the paper uses it:* The projection method is derived via constrained nonlinear optimization using Lagrange multipliers.

▶ [Lecture 1/8 - Optimality Conditions and Algorithms in Nonlinear Optimization](https://www.youtube.com/watch?v=6dIV28IpDPk) — Mario Martinez · 11 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own lecture on calculus on subsets of ℝⁿ and tangent spaces provides rigorous mathematical foundations relevant to the projection method. Although not a direct talk on the paper, it is the closest advanced lecture by an expert-level channel that aligns with the paper's mathematical depth and the projection technique's geometric aspects.

*How the paper uses it:* This lecture supports understanding the mathematical basis of the projection method enforcing conservation in PINNs.

▶ [Lecture 2: Calculus on Subsets of ℝⁿ and the Tangent Space](https://www.youtube.com/watch?v=LZcYifNgAqc) — The Black Hole · 1:38:22 · Streamed 5 hours ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's novel method for guaranteeing conservation laws in physics-informed neural networks (PINNs). It starts with the basics of conservation laws in partial differential equations (PDEs), then covers the fundamentals of PINNs, followed by constrained nonlinear optimization techniques used to enforce exact conservation. Finally, it presents the core idea of the projection method that modifies PINN outputs to strictly satisfy integral conservation constraints.

### Conservation laws in PDEs *(prerequisite)*
Conservation laws describe physical quantities like mass, momentum, or energy that remain constant over time in a system governed by PDEs. Understanding these laws helps grasp why enforcing exact conservation is crucial for physically accurate solutions.

*How the paper uses it:* The paper focuses on guaranteeing exact conservation of integral quantities in PINN solutions of PDEs.

▶ [Section 1.2  J David Logan's PDE Conservation Laws Part 1](https://www.youtube.com/watch?v=KyXvO8aHw0I) — PhysicsGal · 2 years ago

### Physics-informed neural networks *(prerequisite)*
Physics-informed neural networks (PINNs) are neural networks trained to solve PDEs by incorporating physical laws into their loss functions. They approximate solutions while respecting PDE constraints, but often only enforce conservation laws softly.

*How the paper uses it:* The paper builds on PINNs by introducing a projection method to guarantee exact conservation rather than soft enforcement.

▶ [An Introduction to Physics-Informed Neural Networks](https://www.youtube.com/watch?v=KffYsBqrBVo) — Zara Dar · 8 months ago

### Constrained nonlinear optimization *(prerequisite)*
Constrained nonlinear optimization involves finding the best solution to a problem while satisfying certain constraints, often using techniques like Lagrange multipliers. This mathematical tool is key to enforcing exact conservation constraints in the paper's method.

*How the paper uses it:* The projection method derives formulae by solving constrained nonlinear optimization problems with Lagrange multipliers.

▶ [Lecture 1/8 - Optimality Conditions and Algorithms in Nonlinear Optimization](https://www.youtube.com/watch?v=6dIV28IpDPk) — Mario Martinez · 11 years ago

### Projection methods in numerical analysis
Projection methods modify approximate solutions by projecting them onto a space where desired properties hold exactly, such as conservation laws. This ensures the solution strictly satisfies constraints after projection.

*How the paper uses it:* The core contribution is a projection technique that modifies PINN outputs to guarantee exact integral conservation.

▶ [Projection methods I (Ken Judd Numerical Methods in Economics Lecture 19)](https://www.youtube.com/watch?v=1oDYwco0WH4) — Ken Judd · 1:19:31 · 2 years ago

## Already in your library

- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate understanding of the paper's novel projection method for guaranteeing conservation in physics-informed neural networks (PINNs). The beginner project reproduces a small-scale PINN conservation error comparison using the authors' codebase. The intermediate project extends the authors' implementation to apply the projection method on a selected PDE and compares conservation errors against a soft-constraint baseline. The advanced project tackles a stated limitation by extending the projection method to enforce conservation of a new integral quantity beyond linear and quadratic forms, showing initiative in research extension.

### Beginner — Reproduce PINN Projection Conservation Error Reduction
*Effort: a weekend, ~8 hours*

You will clone and run the authors' official PINN-Proj code to reproduce the reduction of conservation errors by 3-4 orders of magnitude compared to standard PINNs and soft constraints on a 1D PDE example. You will generate plots of conservation error metrics (Error cL and Error cQ) and PDE solution error (Error u) as shown in the paper.

**Why it shows you understood the paper:** This project shows you understand the core contribution of the paper—the projection method's ability to guarantee exact conservation and significantly reduce conservation errors—and can operate the authors' codebase to reproduce key results.

**Grounded in:** Key result: "PINN-Proj reduced conservation errors (Error cL and Error cQ) by 3-4 orders of magnitude compared to PINN and PINN-SC across multiple PDEs."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic PDE data generated by the authors' code for 1D Advection or Wave equation as included in the repository https://github.com/antbaez/pinn-proj

**Build it:**

1. Clone the repository https://github.com/antbaez/pinn-proj and install dependencies.
2. Run the provided training scripts for a 1D PDE example (e.g., Advection equation) with standard PINN, PINN with soft constraints, and PINN-Proj.
3. Collect and plot the conservation error metrics (Error cL, Error cQ) and PDE solution error (Error u) over training epochs.
4. Compare the error magnitudes to verify the 3-4 orders of magnitude reduction in conservation errors by PINN-Proj.
5. Write a README summary explaining the reproduction and interpretation of results.

**Verified links from the paper:**

- <https://github.com/antbaez/pinn-proj> — released by the paper's authors

**Ships as:** A GitHub repo with runnable scripts, plots reproducing conservation error reductions, and a README explaining the results and their significance.

**Stretch goal:** Add a simple visualization of the projection step effect on the PINN output to deepen understanding of the method.

### Intermediate — Apply PINN Projection Method to Reaction-Diffusion PDE
*Effort: 2 weekends, ~20 hours*

You will extend the authors' PINN-Proj code to apply the projection method to a Reaction-Diffusion PDE with source terms (a 1D or 2D system). You will implement a baseline PINN with soft constraints and compare conservation errors and PDE solution accuracy between the baseline and PINN-Proj. You will report metrics analogous to those in the paper and analyze convergence behavior.

**Why it shows you understood the paper:** This project demonstrates your ability to adapt the core projection method to a new PDE system, implement and compare baselines, and evaluate conservation guarantees and solution accuracy, showing deeper comprehension and practical skill.

**Grounded in:** Key contribution: "Extension of the method to both conserved and non-conserved systems, and to 1D and 2D PDEs." and key result: "The method works effectively on various PDEs including Reaction-Diffusion equations."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic Reaction-Diffusion PDE data generated via numerical solver or from the authors' code examples for Reaction-Diffusion systems.

**Build it:**

1. Set up the PINN-Proj environment from the authors' repository.
2. Implement or adapt the Reaction-Diffusion PDE problem setup with source terms in the codebase.
3. Train a baseline PINN with soft conservation constraints on this PDE and record conservation and PDE solution errors.
4. Train the PINN-Proj model with the projection method on the same PDE and record the same metrics.
5. Plot and compare conservation errors and PDE solution errors between baseline and PINN-Proj.
6. Analyze convergence speed and training epochs required for both methods.
7. Document the implementation details, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/antbaez/pinn-proj> — released by the paper's authors

**Ships as:** A GitHub repo with code implementing Reaction-Diffusion PDE PINNs, comparison plots of conservation and solution errors, and a README discussing the projection method's impact.

**Stretch goal:** Experiment with varying the number of collocation points and network capacity to observe effects on conservation precision and solution accuracy.

### Advanced — Extend Projection Method to Enforce Conservation of a Cubic Integral Quantity
*Effort: 3-4 weeks*

You will develop an extension of the projection method to guarantee conservation of a cubic integral quantity (beyond linear and quadratic integrals) within the PINN framework. This involves formulating the constrained nonlinear optimization problem with Lagrange multipliers for cubic integrals, deriving the projection formula, implementing it in the PINN training loop, and testing on a suitable PDE. You will evaluate conservation error reduction and PDE solution accuracy compared to the original method.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction of the paper by extending the method to a new class of integral quantities, demonstrating research-level understanding, mathematical formulation skills, and practical implementation ability.

**Grounded in:** Limitation and future direction: "Current work focuses on linear and quadratic integrals; other integral quantities are not yet addressed." and "Extending the projection method to guarantee conservation of other integral quantities beyond linear and quadratic forms."

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, Matplotlib

**Data:** Synthetic PDE data generated for a PDE where a cubic integral conservation law is meaningful or can be defined; if unavailable, simulate data consistent with such conservation.

**Build it:**

1. Study the paper's derivation of projection formulae for linear and quadratic integrals.
2. Formulate the constrained nonlinear optimization problem for cubic integral conservation using Lagrange multipliers.
3. Derive the projection operator formula for cubic integrals.
4. Implement the cubic integral projection step within the PINN training loop, ensuring differentiability.
5. Select or simulate a PDE problem where cubic integral conservation is relevant.
6. Train PINNs with and without the cubic integral projection and compare conservation errors and PDE solution accuracy.
7. Analyze training convergence and computational cost impacts.
8. Write a comprehensive README documenting the mathematical derivation, implementation details, experiments, and results.

**Verified links from the paper:**

- <https://github.com/antbaez/pinn-proj> — released by the paper's authors

**Ships as:** A GitHub repo with code implementing cubic integral projection in PINNs, experimental results demonstrating conservation enforcement, and detailed documentation of the extension.

**Stretch goal:** Explore applying the cubic integral projection method to a multi-physics PDE system relevant to electromagnetic or biomedical applications, connecting to Professor Daniel's research interests.

_The authors' repository provides code for 1D and 2D PDEs but may require adaptation for new PDEs or integral quantities; verify compatibility and available PDE examples before starting._
