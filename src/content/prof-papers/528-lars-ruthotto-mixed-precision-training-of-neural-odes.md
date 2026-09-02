---
title: "528 · Mixed Precision Training of Neural ODEs — Lars Ruthotto"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lars-ruthotto"
source_hash: "42dae2d42f56fabf8e0d97ef461db5e48dc77062474f537d695c38358c5d5647"
sequence: 528
generator: "outreach-garden: managed"
---

# 528 · Mixed Precision Training of Neural ODEs

## At a glance

- **Professor:** Lars Ruthotto
- **Institution:** Emory University
- **Paper:** [Mixed Precision Training of Neural ODEs](https://arxiv.org/pdf/2510.23498)
- **Authors:** Elena Celledoni, Brynjulf Owren, Lars Ruthotto, Nicole Tianjiao Yang
- **Year:** 2026

## Paper overview

This paper develops a mixed precision training framework for neural ordinary differential equations (Neural ODEs) that uses low-precision computations to reduce memory and computational costs while maintaining accuracy comparable to single-precision training. The authors design explicit ODE solvers and a custom backpropagation scheme with dynamic adjoint scaling to handle roundoff errors and memory growth challenges. They provide theoretical error analysis, an open-source PyTorch package (rampde), and demonstrate effectiveness on image classification and generative modeling tasks.

### Why it matters

**Research problem:** Training Neural ODEs is computationally expensive and memory-intensive due to repeated network evaluations and the need to store intermediate states over many time steps. Existing mixed precision training (MPT) methods are unreliable for Neural ODEs because naive low-precision computations accumulate roundoff errors, causing instability and loss of accuracy.

**Why it matters:** Neural ODEs are continuous-time deep learning models with applications in image classification, generative modeling, and scientific machine learning. Efficient training methods that reduce computational cost and memory usage without sacrificing accuracy are crucial for scaling these models to larger problems and datasets.

**Key contributions:**

- Design and analysis of mixed precision explicit ODE solvers and custom backpropagation for Neural ODEs achieving ~50% memory reduction and up to 2× speedup.
- Development of dynamic adjoint scaling heuristic to maximize low-precision range during backpropagation without extra hyperparameter tuning.
- Theoretical roundoff error analysis proving errors remain on the order of low precision unit roundoff and do not grow uncontrollably with time steps.
- Open-source PyTorch package rampde for easy adoption of mixed precision Neural ODE training.

## About the professor

**Lars Ruthotto** — Professor, Department of Mathematics and Department of Computer Science, Emory University.

Research interests: Numerical algorithms for high-dimensional differential equations, optimization, and inference; Generative models, continuous-time deep learning, mixed-precision training, and efficient numerical optimization.

### Research links

- [Faculty/profile page](https://www.math.emory.edu/~lruthot)
- [Resolved homepage](https://www.math.emory.edu/~lruthot/)
- [Lab website](http://www.math.emory.edu/site/cmds-reuret/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Numerical Analysis of ODEs
**The paper assumes:** numerical methods for ordinary differential equations, explicit ODE solvers, numerical stability and error analysis
**Already in this field?** Skip this entirely if you already understand numerical solution techniques for ODEs including explicit methods and their stability/error properties.

Understanding numerical methods for solving ordinary differential equations (ODEs) is essential for grasping the mixed precision training framework for Neural ODEs presented in this paper. The rigorous course offers a deep dive into numerical analysis concepts including error analysis, explicit solver design, and stability, while the fast track provides a concise, intuition-driven overview of key numerical ODE solution methods. Choose the rigorous course for a thorough foundation or the fast track for a focused, time-efficient introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Numerical Methods and Simulation Techniques for Scientists and Engineers](https://www.youtube.com/playlist?list=PLwdnzlV3ogoUY43XoMwVVCWDSImC9mVQB) — NPTEL IIT Guwahati · 25 videos · 20.4h across 25 episodes

**Watch only this:** Lectures 1, 13, 14, 15, and 16, about 4 hours total — covering error analysis, ODE introduction, Euler method, Heun’s method, and Runge-Kutta method to build a solid foundation for explicit solver design and stability.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course covers numerical methods and simulation techniques with detailed lectures on error analysis, explicit ODE solvers like Euler and Runge-Kutta methods, and stability considerations, directly supporting the paper's focus on explicit solver design and error propagation in mixed precision Neural ODE training.

*If you want all of it:* 20.4 hours across all 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Numerical Solution of Ordinary Differential Equations (Complete Playlist)](https://www.youtube.com/playlist?list=PLhSp9OSVmeyKVpGhYpSMkSkbohXDMrrHO) — MKS TUTORIALS by Manoj Sir · 11 videos · 2.3h across 11 episodes

**Watch only this:** Episodes 5, 7, 8, and 9, about 50 minutes total — covering Euler's method, Modified Euler's method, and Runge-Kutta methods of second and fourth order for a quick yet comprehensive grasp of explicit ODE solvers.

*Why it unblocks this paper:* This concise playlist by MKS TUTORIALS offers clear, focused explanations of numerical ODE solution methods including Euler, Modified Euler, and Runge-Kutta methods, providing an accessible overview of explicit solvers and their numerical behavior relevant to the paper's methods.

*If you want all of it:* 2.3 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Mixed Precision Training of Neural ODEs," start by building a strong foundation in Neural Ordinary Differential Equations (Neural ODEs) as the core continuous-time deep learning model. Then, study the computational technique of mixed precision training and the adjoint sensitivity method, which are critical for efficient and stable training of Neural ODEs. Finally, focus on the paper's core contributions by watching the authors' own detailed presentation on mixed precision algorithms tailored for Neural ODEs.

### Neural Ordinary Differential Equations *(prerequisite)*
Neural ODEs form the fundamental continuous-time model underlying the paper. Understanding their formulation, properties, and training challenges is essential before delving into mixed precision techniques. The selected talk provides a rigorous research seminar-level introduction by one of the original authors, covering the mathematical formulation and applications.

*How the paper uses it:* The paper builds on Neural ODEs as the base model for which mixed precision training methods are developed.

▶ [David Duvenaud: Neural Ordinary Equations](https://www.youtube.com/watch?v=sAvtPr1IGB0) — Vector Institute · 30:51 · 7 years ago

### Mixed Precision Training *(prerequisite)*
Mixed precision training is the core computational technique used in the paper to reduce memory and speed up training. Understanding the challenges and standard approaches in mixed precision training provides context for why the paper's novel methods are necessary for Neural ODEs.

*How the paper uses it:* The paper proposes a novel mixed precision training framework specifically designed for Neural ODEs.

▶ [Lars Ruthotto - Mixed-Precision Algorithms for Training Neural ODEs - IPAM at UCLA](https://www.youtube.com/watch?v=9b7JoeIsohI) — Institute for Pure & Applied Mathematics (IPAM) · 37:24 · 1 year ago

### Adjoint Sensitivity Method *(prerequisite)*
The adjoint sensitivity method is a key backpropagation technique for efficiently training Neural ODEs by solving an adjoint ODE backward in time. A rigorous lecture covering the mathematical derivation and computational aspects is selected to provide a deep understanding of this method.

*How the paper uses it:* The paper designs a custom backward pass for Neural ODEs that relies on adjoint sensitivity computations.

▶ [Lecture 6 Part 1: Adjoint Differentiation of ODE Solutions](https://www.youtube.com/watch?v=cvBHoCAUkD4) — MIT OpenCourseWare · 58:21 · 2 years ago

### Explicit ODE Solvers in Machine Learning *(prerequisite)*
Explicit ODE solvers are critical numerical methods for stable and efficient Neural ODE training, especially in the mixed precision context. Understanding their design and stability properties helps appreciate the paper's solver design choices.

*How the paper uses it:* The paper develops explicit mixed precision ODE solvers tailored for Neural ODE training.

▶ ["Machine Learning for Partial Differential Equations" by Michael Brenner](https://www.youtube.com/watch?v=9Rycnz2O-aY) — Harvard Institute for Applied Computational Science · 44:08 · 7 years ago

### Dynamic Adjoint Scaling
Dynamic adjoint scaling is the novel technique introduced in the paper to stabilize low-precision backpropagation in Neural ODEs by preventing overflow and underflow. Although no dedicated video on this exact technique exists, foundational backpropagation lectures provide necessary background to understand scaling and numerical stability in gradient computations.

*How the paper uses it:* The paper's key contribution is the dynamic adjoint scaling heuristic to stabilize mixed precision backpropagation.

▶ [S18 Lecture 4: Backpropagation](https://www.youtube.com/watch?v=3gjR0KCrwY4) — Carnegie Mellon University Deep Learning · 1:06:55 · Streamed 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding Neural Ordinary Differential Equations (Neural ODEs), the foundational continuous-time deep learning model underlying the paper. Next, learn about Mixed Precision Training, the core computational technique used to reduce memory and speed up training. Then, grasp the Adjoint Sensitivity Method, which is key for efficient backpropagation in Neural ODEs. After that, study Explicit ODE Solvers, crucial for stable mixed precision training. Finally, explore the paper's novel contribution, Dynamic Adjoint Scaling, which stabilizes low-precision backpropagation in Neural ODEs.

### Neural Ordinary Differential Equations *(prerequisite)*
Neural ODEs model the evolution of hidden states continuously over time using differential equations parameterized by neural networks. This approach generalizes discrete-layer neural networks to continuous-depth models, enabling adaptive computation and memory efficiency.

*How the paper uses it:* The paper builds on Neural ODEs as the core model whose training efficiency it aims to improve.

▶ [Neural Ordinary Differential Equations](https://www.youtube.com/watch?v=jltgNGt8Lpg) — Yannic Kilcher · 22:19 · 7 years ago

### Mixed Precision Training *(prerequisite)*
Mixed Precision Training uses lower-precision (e.g., float16) computations to speed up training and reduce memory usage while maintaining accuracy by carefully managing numerical stability and precision trade-offs.

*How the paper uses it:* The paper develops a mixed precision training framework tailored for Neural ODEs to reduce computational cost and memory usage.

▶ [Mixed Precision Training | Explanation and PyTorch Implementation from Scratch](https://www.youtube.com/watch?v=hHpC9Sywh4U) — ExplainingAI · 32:23 · 9 months ago

### Adjoint Sensitivity Method *(prerequisite)*
The adjoint sensitivity method efficiently computes gradients of ODE solutions with respect to parameters by solving a backward-in-time adjoint ODE, enabling memory-efficient backpropagation through continuous-time models.

*How the paper uses it:* The paper customizes the backpropagation scheme based on the adjoint method to handle mixed precision training challenges.

▶ [Lecture 6 Part 1: Adjoint Differentiation of ODE Solutions](https://www.youtube.com/watch?v=cvBHoCAUkD4) — MIT OpenCourseWare · 58:21 · 2 years ago

### Explicit ODE Solvers in Machine Learning *(prerequisite)*
Explicit ODE solvers numerically approximate solutions to differential equations by stepping forward in time using known information, balancing accuracy and computational cost; their design impacts stability and efficiency in Neural ODE training.

*How the paper uses it:* The paper designs explicit mixed precision ODE solvers critical for stable and efficient Neural ODE training.

▶ ["Machine Learning for Partial Differential Equations" by Michael Brenner](https://www.youtube.com/watch?v=9Rycnz2O-aY) — Harvard Institute for Applied Computational Science · 44:08 · 7 years ago

## Already in your library

- [Fourier Neural Operator for Parametric Partial Differential Equations (Paper Explained)](https://www.youtube.com/watch?v=IaS72aHrJKE) — also for: Functional Mean Flow in Hilbert Space (Greg Turk)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Mixed Precision Training of Neural ODEs." The beginner project familiarizes you with the authors' PyTorch package and the core idea of mixed precision training for Neural ODEs. The intermediate project has you run and extend the authors' code to reproduce key metrics on a standard dataset, gaining hands-on experience with mixed precision ODE solvers and dynamic adjoint scaling. The advanced project challenges you to extend the framework to support implicit solvers or adaptive time stepping, addressing a stated limitation and exploring future directions.

### Beginner — Run and Visualize Mixed Precision Neural ODE Training with rampde
*Effort: a weekend, ~6-8 hours*

You set up the authors' rampde PyTorch package and run a simple Neural ODE training example on a small image classification task (e.g., STL-10 subset or a small synthetic dataset). You visualize training curves comparing mixed precision and single precision runs to observe memory and speed benefits.

**Why it shows you understood the paper:** This project shows you can use the authors' mixed precision ODE solver and custom backpropagation scheme, demonstrating practical understanding of how mixed precision training is implemented and its effects on training efficiency and stability.

**Grounded in:** Demonstrates the paper's key contribution of mixed precision explicit ODE solvers and custom backpropagation achieving ~50% memory reduction and up to 2× speedup.

**Tech stack:** Python 3.11, PyTorch, rampde package, matplotlib or similar for visualization

**Data:** Use a small subset of STL-10 or a synthetic low-dimensional dataset to keep runtime short; STL-10 is mentioned in the paper as a benchmark.

**Build it:**

1. Clone and install the rampde package from https://github.com/EmoryMLIP/rampde.
2. Set up a simple Neural ODE training script using rampde on a small dataset (e.g., STL-10 subset).
3. Run training in single precision and mixed precision modes using rampde's API.
4. Measure and record memory usage and training time for both modes.
5. Plot training loss and accuracy curves to compare performance and stability.
6. Write a README explaining the setup, results, and how mixed precision affects training.

**Verified links from the paper:**

- <https://github.com/EmoryMLIP/rampde> — released by the paper's authors

**Ships as:** A GitHub repo with runnable scripts demonstrating mixed precision Neural ODE training using rampde, with plots comparing memory, speed, and accuracy against single precision.

**Stretch goal:** Add a visualization of gradient magnitudes during backpropagation to see the effect of dynamic adjoint scaling.

### Intermediate — Reproduce and Compare Mixed Precision Neural ODE Training on STL-10
*Effort: 1-3 weekends, ~20 hours*

You extend the rampde package example to fully reproduce the paper's reported metrics on the STL-10 image classification task, including memory reduction and speedup. You implement a baseline single precision Neural ODE training using the torchdiffeq package for comparison. You report quantitative metrics and analyze stability and accuracy.

**Why it shows you understood the paper:** This project shows you can run, extend, and critically evaluate the authors' mixed precision framework against a standard baseline, demonstrating deeper comprehension of the dynamic adjoint scaling and error analysis in practice.

**Grounded in:** Reproduces the key results showing ~50% memory reduction and up to 2× speedup with comparable accuracy on STL-10, and validates dynamic adjoint scaling's role in stabilizing training.

**Tech stack:** Python 3.11, PyTorch, rampde package, torchdiffeq package, numpy, matplotlib

**Data:** Use the STL-10 dataset as in the paper, publicly available and used by the authors for image classification experiments.

**Build it:**

1. Set up the STL-10 dataset preprocessing pipeline compatible with rampde and torchdiffeq.
2. Implement Neural ODE training scripts using rampde with mixed precision and torchdiffeq with single precision.
3. Run experiments measuring training time, GPU memory usage, and final accuracy for both methods.
4. Analyze and plot the results comparing memory, speed, and accuracy.
5. Document the role of dynamic adjoint scaling by experimenting with and without it if feasible.
6. Write a detailed report discussing how your results align with the paper's claims.

**Verified links from the paper:**

- <https://github.com/EmoryMLIP/rampde> — released by the paper's authors
- <https://github.com/rtqichen/torchdiffeq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts to train Neural ODEs on STL-10 using rampde and torchdiffeq, with comparative metrics and analysis demonstrating mixed precision benefits.

**Stretch goal:** Add experiments to test the effect of varying fixed step sizes on stability and accuracy in mixed precision training.

### Advanced — Extend Mixed Precision Neural ODE Training to Adaptive Time Stepping
*Effort: few weeks, ~40+ hours*

You develop an extension of the rampde mixed precision framework to support explicit adaptive time stepping in Neural ODE training. This involves modifying the ODE solver and backpropagation to handle variable step sizes while maintaining dynamic adjoint scaling. You test your implementation on a suitable dataset and compare stability and efficiency against fixed-step training.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating your ability to innovate on the core method and contribute novel code addressing adaptive time stepping challenges in mixed precision Neural ODEs.

**Grounded in:** Addresses the limitation that current implementation focuses on explicit solvers with fixed time steps and explores the future direction of investigating adaptive time integrators within the mixed precision framework.

**Tech stack:** Python 3.11, PyTorch, rampde package (forked and extended), numpy, matplotlib

**Data:** Use STL-10 or a smaller image classification dataset for experiments; alternatively, a synthetic ODE dataset with known dynamics for controlled testing.

**Build it:**

1. Study the rampde source code to understand how fixed-step explicit solvers and dynamic adjoint scaling are implemented.
2. Design and implement an explicit ODE solver with adaptive time stepping compatible with mixed precision evaluation.
3. Modify the custom backward pass to correctly handle variable step sizes and maintain dynamic adjoint scaling to prevent overflow/underflow.
4. Integrate your adaptive solver into the rampde training pipeline.
5. Run experiments comparing fixed-step and adaptive-step mixed precision training on a benchmark dataset.
6. Analyze results for training stability, accuracy, memory usage, and speed; document findings and challenges.

**Verified links from the paper:**

- <https://github.com/EmoryMLIP/rampde> — released by the paper's authors

**Ships as:** A GitHub repo with an extended rampde fork supporting adaptive time stepping in mixed precision Neural ODE training, with experimental results and analysis.

**Stretch goal:** Explore extending the framework to implicit solvers or neural stochastic differential equations as further future work.
