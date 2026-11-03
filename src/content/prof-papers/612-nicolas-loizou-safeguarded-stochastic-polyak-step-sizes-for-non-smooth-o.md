---
title: "612 · Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients — Nicolas Loizou"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nicolas-loizou"
source_hash: "9b3cd75c898968505fb440d4917bfca892d61b1f269c5bf2849ddd4678d96c2f"
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

This paper introduces new adaptive step size rules for stochastic optimization methods that work well even when the objective functions are non-smooth and when gradient norms become very small. The authors propose safeguarded Polyak step sizes that avoid the need for impractical assumptions like knowing the optimal loss values or interpolation conditions. Their methods achieve solid theoretical convergence guarantees and show strong empirical performance on convex problems and deep neural network training, maintaining stable and robust updates without collapsing gradients.

### Why it matters

**Research problem:** Existing stochastic Polyak step size methods for optimization either require strong assumptions like interpolation or knowledge of optimal function values, or rely on fixed upper bounds that limit adaptivity. These limitations hinder their practical use in non-smooth optimization problems, especially in deep learning where gradients can vanish or explode.

**Why it matters:** Adaptive step sizes that do not require manual tuning and can handle non-smooth objectives robustly are crucial for efficient and stable training of machine learning models, including deep neural networks. Improving these methods can lead to better optimization performance and generalization without complex hyperparameter tuning.

**Key contributions:**

- Introduction of safeguarded Polyak step sizes (SPSsafe) that prevent denominator collapse and do not require oracle information or interpolation assumptions.
- Extension of safeguarded step sizes to momentum methods (IMA-SPSsafe) with convergence guarantees for both Cesàro average and last iterate.
- Theoretical proofs of O(T^{-1/2}) convergence rates to a neighborhood for convex Lipschitz objectives without strong assumptions.
- Empirical demonstration of superior performance and stability on convex problems (SVM, phase retrieval) and deep neural network training (ResNet on CIFAR-10/100).
- Establishing a connection between safeguarded step sizes and gradient clipping, providing the first theoretical guarantees for Polyak-style clipped stochastic subgradient methods.

## About the professor

**Nicolas Loizou** — Assistant Professor, Department of Applied Mathematics and Statistics, Johns Hopkins University.

Research interests: large-scale and stochastic optimization, min-max optimization, variational inequalities and learning in games, randomized numerical linear algebra, distributed and federated optimization

### Research links

- [Faculty/profile page](https://nicolasloizou.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization and Stochastic Subgradient Methods
**The paper assumes:** convex optimization theory, stochastic subgradient methods, Polyak step size rules, convergence analysis for non-smooth optimization
**Already in this field?** Skip this entirely if you already have a solid understanding of convex optimization and stochastic subgradient algorithms including their convergence properties.

To understand the theoretical and algorithmic contributions of the paper on safeguarded stochastic Polyak step sizes for non-smooth optimization, a solid grasp of convex optimization fundamentals, especially stochastic subgradient methods and adaptive step sizes, is essential. The rigorous course option provides a deep, structured university-level treatment of these topics, while the fast track offers a concise, focused introduction to key concepts in convex optimization and subgradient methods, suitable for quickly gaining the necessary intuition and background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS769 Optimization in Machine Learning IIT Bombay 2025](https://www.youtube.com/playlist?list=PLyo3HAXSZD3y-tdFpfw8CZcIG-rJ6ckn9) — Ganesh Ramakrishnan · 55 videos · 55.4h across 55 episodes

**Watch only this:** Lectures 8 through 12 (5 episodes, ~5 hours) covering subgradient calculus, Lipschitz continuity, and convergence analysis of gradient descent under Lipschitz conditions, which are critical to understanding the paper's theoretical framework.

*Why it unblocks this paper:* This IIT Bombay course covers convex optimization in depth, including subgradient calculus, Lipschitz continuity, and convergence analysis of gradient and stochastic gradient methods, directly aligning with the paper's focus on non-smooth convex objectives and stochastic subgradient methods.

*If you want all of it:* 55.4 hours across 55 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Optimization Spring 2020](https://www.youtube.com/playlist?list=PLTN4aNO9NiB5VxYILKPBXoy9g1tUqmnBx) — Yu-Xiang Wang · 19 videos · 36.3h across 19 episodes

**Watch only this:** Lectures 5, 6, and 8 (3 episodes, ~5.7 hours) covering subgradient basics, subgradient and proximal gradient methods, and stochastic subgradient methods, providing a compact yet thorough background for the paper.

*Why it unblocks this paper:* This series by Yu-Xiang Wang provides a clear and concise introduction to convex optimization, including focused lectures on subgradient methods and stochastic methods, which are essential for grasping the adaptive step size techniques and convergence results in the paper.

*If you want all of it:* 36.3 hours across 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on safeguarded stochastic Polyak step sizes, start by building a solid foundation in stochastic subgradient methods and momentum methods in stochastic optimization, as these form the algorithmic basis of the paper's contributions. Then, study adaptive step size methods and non-smooth convex optimization to grasp the theoretical challenges and motivations behind the safeguarded step sizes. Finally, focus on the paper's core concept by watching the authors' own talk presenting their novel safeguarded stochastic Polyak step size methods, which ties together the theoretical and empirical advances.

### Stochastic subgradient methods *(prerequisite)*
Stochastic subgradient methods are fundamental to the paper's approach, as the safeguarded Polyak step sizes are designed for stochastic subgradient optimization in non-smooth settings. Understanding the convergence properties and behavior of these methods is essential before delving into the adaptive step size innovations.

*How the paper uses it:* The paper extends stochastic subgradient methods with safeguarded Polyak step sizes to improve robustness and convergence.

▶ [Lecture 5 | Convex Optimization II (Stanford)](https://www.youtube.com/watch?v=fhAFzmnFVqU) — Stanford · 1:15:34 · 18y ago

### Momentum methods in stochastic optimization *(prerequisite)*
Momentum methods accelerate convergence in stochastic optimization and are extended in the paper via the Iterate Moving Average (IMA) variant combined with safeguarded step sizes. Grasping how momentum works and its challenges in stochastic settings is crucial to appreciate the paper's momentum-based contributions.

*How the paper uses it:* The paper proposes IMA-SPSsafe, a safeguarded Polyak step size method extended to momentum variants with convergence guarantees.

▶ [On momentum methods and acceleration in stochastic optimization](https://www.youtube.com/watch?v=mgVwMHWkGXE) — Microsoft Research · 51:33 · 8y ago

### Adaptive step size methods *(prerequisite)*
Adaptive step size methods aim to improve optimization efficiency without manual tuning, directly motivating the safeguarded Polyak step sizes introduced in the paper. Understanding existing adaptive schemes provides context for the paper's novel safeguard mechanism that controls denominator collapse.

*How the paper uses it:* The paper introduces safeguarded stochastic Polyak step sizes as a robust adaptive step size method for non-smooth optimization.

▶ [Adaptive Federated Optimization](https://www.youtube.com/watch?v=2pGXMsC6AgE) — Google TechTalks · 12:53 · 5y ago

### Non-smooth convex optimization *(prerequisite)*
The theoretical framework of the paper is grounded in non-smooth convex optimization, where classical gradient methods struggle and subgradient methods are necessary. Understanding the challenges and properties of non-smooth convex problems is key to appreciating the convergence guarantees and limitations discussed.

*How the paper uses it:* The paper provides convergence guarantees for convex Lipschitz non-smooth objectives using safeguarded step sizes.

▶ [No Quantum Speedup Over Gradient Descent for Non-Smooth Convex Optimization](https://www.youtube.com/watch?v=m--GP8znQEQ) — Simons Institute for the Theory of Computing · 44:20 · Streamed 5y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and detailed exposition of their safeguarded stochastic Polyak step size methods, including motivation, theoretical results, and empirical evaluations. This talk is essential for a comprehensive understanding of the paper's novel contributions and their significance.

*How the paper uses it:* This talk presents the safeguarded stochastic Polyak step sizes and their extensions exactly as developed by the paper's authors.

▶ [https://www.youtube.com › watch?v=r0YsxOJHJyQ](https://www.youtube.com/watch?v=r0YsxOJHJyQ) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts in optimization needed to understand the paper's contributions on safeguarded stochastic Polyak step sizes. We start with the basics of stochastic subgradient methods, then cover adaptive step size methods and momentum techniques to build intuition on optimization dynamics. Finally, we focus on the core concept of stochastic Polyak step sizes, which the paper extends and safeguards for robust non-smooth optimization.

### Stochastic subgradient methods *(prerequisite)*
Stochastic subgradient methods extend gradient descent to optimize non-smooth functions where gradients may not exist everywhere. They use subgradients, which generalize gradients, and stochastic approximations to handle large datasets efficiently. Understanding these methods is key to grasping how the paper builds its safeguarded step size rules.

*How the paper uses it:* The paper designs safeguarded stochastic Polyak step sizes for the stochastic subgradient method framework.

▶ [Subgradient Methods Explained: From Polyak Step to Lasso & SVM](https://www.youtube.com/watch?v=7Ql0LO-a3r4) — AI Mind Academy · 7:55 · 7mo ago

### Adaptive step size methods *(prerequisite)*
Adaptive step size methods automatically adjust the learning rate during optimization to improve convergence and reduce manual tuning. They are crucial in practice to handle varying gradient magnitudes and improve stability. This concept motivates the paper's development of safeguarded step sizes that adapt robustly without requiring oracle knowledge.

*How the paper uses it:* The paper introduces safeguarded Polyak step sizes as a novel adaptive step size method that avoids impractical assumptions.

▶ [Optimization for Deep Learning (Momentum, RMSprop, AdaGrad, Adam)](https://www.youtube.com/watch?v=NE88eqLngkg) — DeepBean · 15:52 · 3y ago

### Momentum methods in stochastic optimization *(prerequisite)*
Momentum methods accelerate stochastic optimization by incorporating past gradient information to smooth updates and escape shallow minima. They improve convergence speed and stability in noisy settings. The paper extends safeguarded step sizes to momentum variants, making this concept essential to understand their momentum-based method.

*How the paper uses it:* The paper extends safeguarded step sizes to momentum methods like the Iterate Moving Average (IMA) variant.

▶ [Tutorial 14- Stochastic Gradient Descent with Momentum](https://www.youtube.com/watch?v=CKLwvuKWQjo) — Krish Naik · 13:10 · 7y ago

### Stochastic Polyak step sizes *(paper-talk search result; attribution unverified)*
Stochastic Polyak step sizes adaptively set the learning rate based on the current loss and gradient norm, aiming to achieve faster convergence without manual tuning. However, classical versions require strong assumptions or oracle knowledge. The paper proposes safeguarded variants that cap the step size denominator to prevent instability, enabling robust use in non-smooth and deep learning contexts.

*How the paper uses it:* The core contribution of the paper is the introduction of safeguarded stochastic Polyak step sizes that maintain robust performance without requiring small gradients or oracle information.

▶ [https://www.youtube.com › watch?v=r0YsxOJHJyQ](https://www.youtube.com/watch?v=r0YsxOJHJyQ) — YouTube result via DuckDuckGo

## Already in your library

- [Robert M. Gower - New viewpoints, variants and convergence theory for stochastic Polyak step-sizes](https://www.youtube.com/watch?v=7lY-SQKslwk) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [NeurIPS 2022 : Dynamics of SGD with Stochastic Polyak Stepsizes](https://www.youtube.com/watch?v=lX_BZjDkl3k) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Trends in AI Theory Seminar: Polyak-type step sizes for mirror descent methods](https://www.youtube.com/watch?v=YgKQAoUWWTc) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Tutorial 12- Stochastic Gradient Descent vs Gradient Descent](https://www.youtube.com/watch?v=FpDsDn-fBKA) — also for: Accelerated Distributed Riemannian Optimization Algorithms with Random Shuffling (Heng Huang)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — also for: Few-Step Diffusion Language Models via Trajectory Self-Distillation (Vladimir Pavlovic)
- [DLS: Peter Bartlett • Gradient Optimization Methods: The Benefits of a Large Step-size](https://www.youtube.com/watch?v=o7BdY9Qd6_g) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [L37: Adadelta | adaptive optimization without initial learning rate](https://www.youtube.com/watch?v=EcX0rqjHR9k) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Adaptive Step Size](https://www.youtube.com/watch?v=7eUyxD9f3dE) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [Introduction to Gradient Descent | How Models Minimize Loss](https://www.youtube.com/watch?v=vtOI7NgXMQQ) — also for: Optimal control under uncertainty with joint chance state constraints: almost-everywhere bounds, variance reduction, and application to (bi-)linear elliptic PDEs (Georg Stadler)
- [Convexity 101 \[Optimization Bootcamp\]](https://www.youtube.com/watch?v=9WXVgQFFsDI) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Courtney Paquette | Scaling Stochastic Momentum from Theory to LLMs](https://www.youtube.com/watch?v=5TT0CJ3Tz78) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and demonstrate the safeguarded stochastic Polyak step sizes (SPSsafe) introduced in the paper. Starting with a basic implementation and visualization of the safeguarded step size mechanism, you then move to applying the authors' code on a standard convex problem to reproduce and compare convergence behavior. Finally, you extend the method toward a non-convex deep learning setting, addressing one of the paper's limitations by experimenting with smoothing safeguards and analyzing gradient norms.

### Beginner — Implement and Visualize Safeguarded Polyak Step Sizes
*Effort: a weekend, ~8 hours*

You build a simple Python script implementing the safeguarded stochastic Polyak step size rule for a stochastic subgradient method on a synthetic convex Lipschitz function (e.g., hinge loss for a linear SVM). You visualize how the safeguard parameter M prevents denominator collapse and plot step sizes and gradient norms over iterations.

**Why it shows you understood the paper:** This project demonstrates you grasp the core mechanism of the safeguarded step size, how it differs from classical Polyak step sizes, and its effect on stability and adaptivity in optimization.

**Grounded in:** Introduction of safeguarded Polyak step sizes (SPSsafe) that prevent denominator collapse and do not require oracle information or interpolation assumptions.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic convex Lipschitz function data generated within the script (e.g., linearly separable points for hinge loss).

**Build it:**

1. Implement the stochastic subgradient method for a hinge loss function on synthetic data.
2. Implement the safeguarded Polyak step size rule with parameter M controlling the safeguard.
3. Run optimization for various values of M including M=0 (classical Polyak) and M=1 (recommended safeguard).
4. Plot step sizes and gradient norms over iterations to visualize safeguard effects.
5. Write a README explaining the safeguarded step size and observations from the plots.

**Ships as:** A GitHub repo with a Python script and README showing plots of step sizes and gradient norms illustrating the safeguard effect.

**Stretch goal:** Add an exponential moving average smoothing of the safeguard parameter and compare its effect on step size stability.

### Intermediate — Reproduce SPSsafe Convergence on Convex Problems Using Authors' Code
*Effort: 1-3 weekends*

You clone and run the authors' official SPSsafe implementation from https://github.com/dimitris-oik/sps_safe on a convex benchmark like SVM or phase retrieval. You reproduce convergence plots comparing SPSsafe to classical Polyak step sizes and SGD, and perform sensitivity analysis on the safeguard parameter M.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand their experimental setup, and verify key empirical claims about convergence rates and robustness without oracle knowledge.

**Grounded in:** Empirical demonstration of superior performance and stability on convex problems (SVM, phase retrieval). Sensitivity analyses indicate that the safeguard parameter M controls convergence neighborhood size and that M=1 is a robust default.

**Tech stack:** Python 3.11, PyTorch, matplotlib, numpy

**Data:** Use the synthetic or public convex datasets provided or referenced in the authors' repository for SVM or phase retrieval tasks.

**Build it:**

1. Clone the authors' repository https://github.com/dimitris-oik/sps_safe and set up the environment.
2. Run baseline experiments on convex problems (e.g., SVM) using SPSsafe and classical Polyak step sizes.
3. Reproduce convergence plots of objective value vs iterations and gradient norms.
4. Perform a sensitivity analysis by varying the safeguard parameter M and observe effects on convergence.
5. Document results and compare with figures reported in the paper.

**Verified links from the paper:**

- <https://github.com/dimitris-oik/sps_safe> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run experiments, reproduce key plots, and a report README discussing results and parameter sensitivity.

**Stretch goal:** Extend experiments to include the momentum variant IMA-SPSsafe and compare its performance.

### Advanced — Extend SPSsafe to Non-Convex Deep Learning with Adaptive Smoothing
*Effort: few weeks*

You adapt the safeguarded stochastic Polyak step size method with exponential moving average smoothing to train a small ResNet model on CIFAR-10. You analyze gradient norm behavior and training stability compared to classical Polyak step sizes and Adam. This addresses the paper's limitation of lacking formal guarantees in non-convex settings by empirical exploration.

**Why it shows you understood the paper:** This project demonstrates your ability to transfer the method to a realistic non-convex deep learning task, implement smoothing safeguards, and critically analyze gradient norm dynamics and training robustness, engaging with the paper's stated limitations and future directions.

**Grounded in:** Empirical results show SPSsafe and IMA-SPSsafe outperform classical Polyak step sizes, SGD, and Adam on image classification benchmarks. Theoretical analysis is developed for convex objectives, but deep learning experiments involve non-convex models without formal guarantees. Proposal and analysis of a smoothing trick using an exponential moving average safeguard to reduce manual tuning.

**Tech stack:** Python 3.11, PyTorch, torchvision, matplotlib, numpy

**Data:** CIFAR-10 dataset from torchvision.datasets as a substitute for the paper's deep learning benchmarks.

**Build it:**

1. Implement SPSsafe with exponential moving average smoothing safeguard in PyTorch optimizer code.
2. Train a small ResNet model on CIFAR-10 using SPSsafe, classical Polyak step sizes, and Adam for comparison.
3. Log and plot gradient norms, training loss, and test accuracy over epochs.
4. Analyze stability and gradient norm collapse behavior across methods.
5. Write a detailed README discussing empirical findings and relation to the paper's limitations.

**Ships as:** A GitHub repo with training scripts, plots of gradient norms and accuracy, and a report README analyzing smoothing safeguard effects in non-convex training.

**Stretch goal:** Experiment with different smoothing window sizes and safeguard parameters to study their impact on convergence and generalization.

_The authors' code repository covers convex and deep learning experiments but may require adaptation for non-convex smoothing extensions; CIFAR-10 is a standard substitute dataset for deep learning benchmarks._
