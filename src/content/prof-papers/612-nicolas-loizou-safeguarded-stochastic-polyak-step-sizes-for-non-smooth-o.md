---
title: "612 · Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients — Nicolas Loizou"
date: 2026-09-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nicolas-loizou"
source_hash: "88e3477173f0a336cb0f446e5d0cdd08b9c8dfbf2751c7e961545aa0a4d4573e"
sequence: 612
generator: "outreach-garden: managed"
---

# 612 · Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients

## At a glance

- **Professor:** Nicolas Loizou
- **Institution:** Johns Hopkins University
- **Paper:** [Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients](https://arxiv.org/pdf/2512.02342)
- **Authors:** Dimitris Oikonomou, Nicolas Loizou
- **Year:** 2026

## Paper overview

This paper introduces a new adaptive step size method called Safeguarded Stochastic Polyak Step size (SPSsafe) for optimizing non-smooth convex functions without requiring strong assumptions like interpolation or knowledge of optimal function values. The method stabilizes the step size by preventing division by very small gradient norms, which commonly causes instability in training deep neural networks. The authors provide theoretical convergence guarantees and demonstrate through experiments that SPSsafe performs competitively and more robustly than existing methods, including in deep learning tasks.

### Why it matters

**Research problem:** Existing stochastic Polyak step size methods for optimization either require impractical assumptions such as interpolation or knowledge of optimal function values, or rely on fixed upper bounds that limit adaptivity. These limitations hinder their effectiveness in non-smooth optimization problems, especially in deep neural network training where gradients can vanish or explode.

**Why it matters:** Adaptive optimization methods that automatically adjust learning rates are crucial for efficient and stable training of machine learning models, particularly deep neural networks. Improving step size rules to work reliably in non-smooth, stochastic settings without strong assumptions can lead to better performance and easier tuning in practical applications.

**Key contributions:**

- Design of SPSsafe, a safeguarded stochastic Polyak step size for non-smooth convex optimization that removes the need for interpolation and oracle information.
- Extension of safeguarded step sizes to momentum methods (IMA-SPSsafe) with convergence guarantees for both Cesàro averages and last iterates.
- Theoretical analysis proving O(T^{-1/2}) convergence rates to a neighborhood of the solution under mild assumptions.
- Empirical evaluation on convex benchmarks and deep neural networks showing competitive or superior performance and stable gradient norms.
- Establishing a connection between SPSsafe and adaptive gradient clipping, providing theoretical guarantees for clipped stochastic subgradient methods.

## About the professor

**Nicolas Loizou** — Assistant Professor, Department of Applied Mathematics and Statistics, Johns Hopkins University.

Research interests: mathematical and algorithmic foundations of large-scale and stochastic optimization, min-max optimization, variational inequalities and learning in games, randomized numerical linear algebra, distributed and federated optimization

### Research links

- [Faculty/profile page](https://nicolasloizou.github.io)
- [Resolved homepage](https://nicolasloizou.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** convex optimization
**The paper assumes:** convex optimization theory, subgradient methods, stochastic optimization convergence analysis
**Already in this field?** Skip this entirely if you already understand convex optimization fundamentals, including subgradient methods and convergence guarantees for stochastic algorithms.

This background focuses on convex optimization, which is essential to understand the theoretical foundations and convergence guarantees of the Safeguarded Stochastic Polyak Step size (SPSsafe) method presented in the paper. The rigorous course option provides a deep, structured university-level treatment of convex optimization concepts, while the fast track offers a shorter, more accessible introduction covering the core ideas needed to grasp the paper's contributions efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7.9 hours — covering introduction, convex sets, convex functions, optimality conditions, subgradients, and subgradient methods, which are directly relevant to understanding the paper's assumptions and convergence proofs.

*Why it unblocks this paper:* This is a comprehensive, authoritative Stanford course by Stephen Boyd on convex optimization, covering fundamental concepts such as convex sets, functions, subgradients, and convergence rates that underpin the paper's theoretical analysis of SPSsafe.

*If you want all of it:* All 18 lectures, approximately 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Optimization Spring 2020](https://www.youtube.com/playlist?list=PLTN4aNO9NiB5VxYILKPBXoy9g1tUqmnBx) — Yu-Xiang Wang · 19 videos · 36.3h across 19 episodes

**Watch only this:** Lectures 1 through 8, about 15.2 hours — covering intro to convex optimization, basics, gradient and subgradient methods, and stochastic subgradient methods, providing a solid quick understanding of the key concepts used in the paper.

*Why it unblocks this paper:* This playlist by Yu-Xiang Wang offers a concise and clear introduction to convex optimization with focused lectures on subgradient methods and stochastic subgradient methods, directly relevant to the paper's method and analysis, but in a shorter format.

*If you want all of it:* All 19 lectures, approximately 36.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Safeguarded Stochastic Polyak Step Sizes (SPSsafe), start with foundational knowledge on stochastic convex optimization and adaptive step size methods, which provide the theoretical and practical context for the paper's contributions. Then, explore gradient clipping techniques in deep learning to appreciate the connection SPSsafe has with stabilizing training. Finally, focus on the core concept of stochastic Polyak step size methods and the authors' own talks or related advanced seminars to grasp the novel safeguarded approach and its theoretical guarantees.

### Stochastic convex optimization *(prerequisite)*
This section covers the fundamental problem setting of stochastic convex optimization, which underpins the theoretical guarantees of the SPSsafe method. Understanding the nature of convex stochastic programs and their solution methods is essential to appreciate the convergence proofs and assumptions in the paper.

*How the paper uses it:* The paper provides convergence guarantees for SPSsafe under convex Lipschitz objectives, making stochastic convex optimization foundational.

▶ [Frank Curtis - Stochastic Algorithms for Constrained Continuous Optimization](https://www.youtube.com/watch?v=HpUhXJOTjHk) — Erwin Schrödinger International Institute for Mathematics and Physics (ESI) · 29:11 · 2 years ago

### Adaptive step size methods in optimization *(prerequisite)*
Adaptive step size methods automatically adjust learning rates during training, which is crucial for stable and efficient optimization. This section introduces the motivation and mechanisms behind adaptive step sizes, setting the stage for understanding how SPSsafe improves upon existing methods.

*How the paper uses it:* SPSsafe is an adaptive step size method designed to improve stability and performance without requiring oracle information.

▶ [Algo Hour – On the Convergence and Adaptivity of SGD with different stepsize | Xiaoyu Li](https://www.youtube.com/watch?v=TkDCm6i0J9M) — Stitch Fix Multithreaded · 45:06 · 5 years ago

### Gradient clipping techniques in deep learning *(prerequisite)*
Gradient clipping is a widely used technique to stabilize training of deep neural networks by preventing exploding gradients. This section explains the rationale and implementation of gradient clipping, which is theoretically connected to the safeguarding mechanism in SPSsafe.

*How the paper uses it:* The paper establishes a connection between SPSsafe's safeguard mechanism and gradient clipping, providing theoretical guarantees for clipped stochastic subgradient methods.

▶ [Fixing Unstable Gradient Descent: Momentum and Gradient Clipping in Deep Learning](https://www.youtube.com/watch?v=V60ylfHqTe8) — Data Santa · 15:41 · 1 year ago

### Stochastic Polyak step size methods *(paper-talk search result; attribution unverified)*
This section focuses on stochastic Polyak step size methods, the central adaptive step size approach that SPSsafe builds upon and improves. Understanding these methods is critical to grasp the innovations introduced by the safeguarded variant and their theoretical implications.

*How the paper uses it:* SPSsafe extends and safeguards stochastic Polyak step sizes to remove impractical assumptions and improve robustness.

▶ [NeurIPS 2022 : Dynamics of SGD with Stochastic Polyak Stepsizes](https://www.youtube.com/watch?v=lX_BZjDkl3k) — Antonio Orvieto · 14:05 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on Safeguarded Stochastic Polyak Step sizes (SPSsafe). We start with the basics of stochastic convex optimization to grasp the problem setting, then cover adaptive step size methods to appreciate why adaptivity matters in optimization. Next, we explain gradient clipping techniques as they relate to stabilizing training in deep learning. Finally, we focus on stochastic Polyak step size methods, the core adaptive technique that SPSsafe improves upon.

### Stochastic convex optimization *(prerequisite)*
Stochastic convex optimization deals with minimizing convex functions when only noisy or partial information about the gradient is available. Understanding this helps you grasp the theoretical setting where SPSsafe guarantees convergence. It introduces key ideas like convexity, stochastic gradients, and convergence rates.

*How the paper uses it:* The paper provides convergence guarantees for SPSsafe under stochastic convex Lipschitz objectives.

▶ [Convexity 101 [Optimization Bootcamp]](https://www.youtube.com/watch?v=9WXVgQFFsDI) — Steve Brunton · 14:58 · 1 month ago

### Adaptive step size methods in optimization *(prerequisite)*
Adaptive step size methods automatically adjust the learning rate during training to improve convergence speed and stability. This section explains why fixed step sizes can be problematic and how adaptive methods like AdaGrad or Adam help, setting the stage for understanding SPSsafe's adaptive step size approach.

*How the paper uses it:* SPSsafe is an adaptive step size method designed to improve stability and performance without requiring strong assumptions.

▶ [L37: Adadelta | adaptive optimization without initial learning rate](https://www.youtube.com/watch?v=EcX0rqjHR9k) — IIT Madras - B.S. Degree Programme · 19:50 · 3 years ago

### Gradient clipping techniques in deep learning *(prerequisite)*
Gradient clipping is a technique used to prevent exploding gradients by capping the gradient norm during training. This helps stabilize deep neural network training. Understanding gradient clipping provides intuition for SPSsafe's safeguarding mechanism, which can be seen as a form of adaptive gradient clipping.

*How the paper uses it:* The paper connects SPSsafe's safeguard mechanism to gradient clipping, providing theoretical guarantees for clipped stochastic subgradient methods.

▶ [Tutorial 8- Exploding Gradient Problem in Neural Network](https://www.youtube.com/watch?v=IJ9atfxFjOQ) — Krish Naik · 11:11 · 7 years ago

### Stochastic Polyak step size methods *(paper-talk search result; attribution unverified)*
Stochastic Polyak step size methods adapt the learning rate based on the current function value and gradient norm, aiming for efficient convergence without manual tuning. This section explains the classical Polyak step size and its limitations, preparing you to understand how SPSsafe improves robustness by safeguarding against small gradients.

*How the paper uses it:* SPSsafe builds on and improves stochastic Polyak step size methods by introducing a safeguard to prevent instability from small gradient norms.

▶ [NeurIPS 2022 : Dynamics of SGD with Stochastic Polyak Stepsizes](https://www.youtube.com/watch?v=lX_BZjDkl3k) — Antonio Orvieto · 14:05 · 3 years ago

## Already in your library

- [Robert M. Gower - New viewpoints, variants and convergence theory for stochastic Polyak step-sizes](https://www.youtube.com/watch?v=7lY-SQKslwk) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [What is a Stochastic Process? | Simple Explanation + Toy Example | Probability](https://www.youtube.com/watch?v=Vn-52dG52Rs) — also for: Flydeling: Streamlined Performance Models for Hardware Acceleration of CNNs through System Identification (Shuvra S. Bhattacharyya)
- [Trends in AI Theory Seminar: Polyak-type step sizes for mirror descent methods](https://www.youtube.com/watch?v=YgKQAoUWWTc) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — also for: Few-Step Diffusion Language Models via Trajectory Self-Distillation (Vladimir Pavlovic)
- [DLS: Peter Bartlett • Gradient Optimization Methods: The Benefits of a Large Step-size](https://www.youtube.com/watch?v=o7BdY9Qd6_g) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Adaptive Step Size](https://www.youtube.com/watch?v=7eUyxD9f3dE) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Gradient Descent With Momentum | Visual Explanation | Deep Learning #11](https://www.youtube.com/watch?v=Q_sHSpRBbtw) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Safeguarded Stochastic Polyak Step size (SPSsafe) method from the paper. Starting with a basic implementation and visualization of the safeguarded step size mechanism, you then extend to applying SPSsafe on a convex benchmark dataset comparing it to a classical baseline. Finally, you tackle an advanced project that explores extending SPSsafe to a non-convex setting, addressing one of the paper's key limitations and future directions.

### Beginner — Visualizing Safeguarded Stochastic Polyak Step Sizes
*Effort: a weekend, ~8 hours*

You build a simple Python script that implements the core SPSsafe step size calculation with safeguard parameter M and plots how the step size varies with gradient norms, including the safeguard effect preventing large steps. You visualize the difference between classical stochastic Polyak step sizes and the safeguarded variant on synthetic gradient norm data.

**Why it shows you understood the paper:** This project demonstrates you understand the key mechanism of SPSsafe — how safeguarding stabilizes step sizes by bounding them away from exploding when gradients are small, a central contribution of the paper.

**Grounded in:** Design of SPSsafe, a safeguarded stochastic Polyak step size for non-smooth convex optimization that removes the need for interpolation and oracle information.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic gradient norm values generated within the script to illustrate step size behavior.

**Build it:**

1. Implement the classical stochastic Polyak step size formula.
2. Implement the safeguarded SPSsafe step size formula with safeguard parameter M.
3. Generate synthetic gradient norm values ranging from very small to large.
4. Plot step sizes from both methods against gradient norms to show the safeguard effect.
5. Write a README explaining the safeguard mechanism and its importance.

**Ships as:** A Python script and plots showing step size behavior with and without safeguard, with explanatory README.

**Stretch goal:** Add an interactive Jupyter notebook allowing users to vary M and observe effects on step sizes dynamically.

### Intermediate — Applying SPSsafe on a Convex Optimization Benchmark
*Effort: 1-3 weekends*

You clone and run the authors' SPSsafe code from https://github.com/dimitris-oik/sps_safe, then apply SPSsafe to a standard convex Lipschitz optimization problem such as logistic regression on the MNIST dataset (or a smaller public convex dataset). You compare SPSsafe's convergence and gradient norm stability against a classical fixed step size stochastic subgradient method.

**Why it shows you understood the paper:** This project shows you can work with the authors' implementation, understand the algorithm's application to convex problems, and reproduce key metrics like convergence rate and gradient norm stability, directly reflecting the paper's theoretical and empirical results.

**Grounded in:** SPSsafe achieves O(T^{-1/2}) convergence rate for stochastic convex Lipschitz objectives without requiring interpolation or knowledge of optimal function values.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** MNIST dataset as a proxy for convex logistic regression benchmark; publicly available.

**Build it:**

1. Clone and set up the authors' SPSsafe repository.
2. Implement or adapt a convex logistic regression training loop using SPSsafe step sizes.
3. Implement a baseline stochastic subgradient method with fixed step size.
4. Train both methods on MNIST logistic regression and record convergence metrics and gradient norms.
5. Plot and compare convergence curves and gradient norm stability.
6. Document the setup, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/dimitris-oik/sps_safe> — released by the paper's authors

**Ships as:** A runnable codebase comparing SPSsafe and baseline on convex logistic regression with plots and analysis.

**Stretch goal:** Add the momentum variant IMA-SPSsafe and compare its performance to plain SPSsafe.

### Advanced — Extending SPSsafe to Non-Convex Deep Learning Training
*Effort: a few weeks*

You extend the SPSsafe method to train a small non-convex deep neural network (e.g., a ResNet on CIFAR-10) using PyTorch, implementing the safeguarded step size and momentum variant. You evaluate training stability, gradient norm behavior, and test accuracy compared to Adam optimizer. You also explore smoothing the safeguard parameter M with an exponential moving average as suggested in the paper.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by bridging the gap between convex theory and non-convex deep learning practice. It demonstrates your ability to adapt the method to modern deep learning, implement smoothing strategies, and analyze empirical robustness.

**Grounded in:** Theoretical guarantees are developed for convex Lipschitz objectives, while deep learning experiments involve highly non-convex models; smoothing strategy for safeguard parameter maintains convergence guarantees and reduces tuning effort.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib

**Data:** CIFAR-10 dataset, publicly available, used as a standard deep learning benchmark.

**Build it:**

1. Implement SPSsafe step size and IMA-SPSsafe momentum variant in PyTorch optimizer.
2. Implement safeguard parameter smoothing with exponential moving average.
3. Train a small ResNet model on CIFAR-10 using SPSsafe and Adam for comparison.
4. Track training loss, test accuracy, and gradient norm statistics.
5. Analyze stability and performance differences, documenting findings.
6. Write a detailed README discussing challenges, results, and relation to paper limitations.

**Verified links from the paper:**

- <https://github.com/dimitris-oik/sps_safe> — released by the paper's authors

**Ships as:** A PyTorch training pipeline demonstrating SPSsafe on non-convex deep learning with comparative analysis and documented insights.

**Stretch goal:** Experiment with different smoothing parameters and safeguard values to study their impact on convergence neighborhood size and stability.

_The authors' code repository focuses on convex optimization and includes deep learning experiments; verify that the code supports non-convex training and CIFAR-10 before starting the advanced project._
