---
title: "903 · Attribute-Efficient PAC Learning of Sparse Halfspaces with Constant Malicious Noise Rate — Shiwei Zeng"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shiwei-zeng"
source_hash: "17820510328336493db46af9ab37e3dc89775f2b1540c471787beee3e1e975e4"
sequence: 903
generator: "outreach-garden: managed"
---

# 903 · Attribute-Efficient PAC Learning of Sparse Halfspaces with Constant Malicious Noise Rate

## At a glance

- **Professor:** Shiwei Zeng
- **Institution:** Augusta University
- **Paper:** [Attribute-Efficient PAC Learning of Sparse Halfspaces with Constant Malicious Noise Rate](https://arxiv.org/pdf/2505.21430)
- **Authors:** Shiwei Zeng, Jie Shen
- **Year:** 2026

## Paper overview

This paper addresses the problem of learning sparse linear classifiers (halfspaces) efficiently when the data is corrupted by a constant fraction of malicious noise. The authors propose an algorithm that requires a number of samples polynomial in the sparsity and logarithmic in the dimension, and can tolerate a constant noise rate. The approach uses hinge loss minimization with L1 and L2 norm constraints and a soft outlier removal scheme to downweight corrupted samples. Theoretical guarantees show near-optimal sample complexity under realistic distributional assumptions.

### Why it matters

**Research problem:** How to design computationally and attribute-efficient algorithms that can PAC learn sparse halfspaces in high-dimensional spaces under a constant rate of malicious noise in the data.

**Why it matters:** Machine learning algorithms often face data corruption and adversarial attacks, which degrade performance. Sparse models are important for interpretability and efficiency. Achieving robustness to malicious noise while maintaining attribute-efficiency (sample complexity depending polynomially on sparsity and only polylogarithmically on dimension) is a fundamental challenge in theory and practice.

**Key contributions:**

- First attribute-efficient algorithm for PAC learning sparse halfspaces tolerant to a constant malicious noise rate.
- Novel gradient analysis balancing L1 and L2 norm constraints in hinge loss minimization.
- Soft outlier removal scheme via semidefinite programming to downweight corrupted samples.
- Extension of margin and mixture of logconcave distribution assumptions to attribute-efficient learning.
- Information-theoretic lower bound showing near-optimality of sample complexity.

## About the professor

**Shiwei Zeng** — tenure-track assistant professor, SCCS Augusta University, GA, Augusta University.

Research interests: building the mathematical foundations for artificial intelligence; machine learning theory and algorithmic robustness; data privacy; algorithmic fairness; algorithmic game theory

### Research links

- [Faculty/profile page](https://sites.google.com/view/shiweizeng)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization in Machine Learning
**The paper assumes:** convex optimization theory, constrained optimization methods, Karush-Kuhn-Tucker conditions, hinge loss minimization, subgradient calculus
**Already in this field?** Skip this entirely if you have a solid understanding of convex optimization techniques and KKT conditions in machine learning contexts.

This background focuses on convex optimization principles essential for understanding the hinge loss minimization with L1 and L2 constraints, KKT conditions, and gradient analyses used in the paper. The rigorous course provides a deep, structured foundation in convex optimization theory and algorithms, while the fast track offers a more concise, targeted introduction to the core concepts for quicker comprehension. Choose the rigorous course for thorough mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS769 Optimization in Machine Learning 2022](https://www.youtube.com/playlist?list=PLyo3HAXSZD3xk6Bc3Fri5-efbi4NKDtlO) — Ganesh Ramakrishnan · 34 videos · 47.2h across 34 episodes

**Watch only this:** Lectures 4 through 11 (covering convexity, convex functions, subgradients, and KKT conditions), about 7 hours total — these provide the core theoretical tools needed to understand the paper's optimization framework.

*Why it unblocks this paper:* Ganesh Ramakrishnan's CS769 Optimization in Machine Learning course covers convexity, subgradients, KKT conditions, and gradient descent convergence in detail, directly supporting the paper's use of constrained hinge loss minimization and gradient analysis under KKT conditions.

*If you want all of it:* 47.2 hours across 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Course | Convex Optimization](https://www.youtube.com/playlist?list=PL8ABF7F5F8A68AF4B) — Educational playlists · 20 videos · 25.0h across 20 episodes

**Watch only this:** Lectures 4 through 11 (Convex Optimization I Stanford) — about 9 hours total — these episodes cover convexity, subgradients, and KKT conditions, providing a focused overview of the key concepts.

*Why it unblocks this paper:* This Educational Playlists series on Convex Optimization (Stanford) offers a clear, well-structured introduction to convex optimization concepts including convex sets, functions, and KKT conditions, suitable for quickly grasping the essentials behind the paper's optimization approach.

*If you want all of it:* 25 hours across 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on attribute-efficient PAC learning of sparse halfspaces with constant malicious noise, start by grasping the foundational concepts of the malicious noise model and the optimization techniques involving hinge loss minimization with norm constraints. Then, build knowledge on the distributional assumptions such as margin and logconcave distributions that underpin the theoretical guarantees. Finally, focus on the core concept of PAC learning sparse halfspaces, emphasizing the authors' own and closely related research talks to connect theory with the paper's novel contributions.

### Malicious noise model in learning *(prerequisite)*
Understanding the malicious noise model is critical for appreciating the robustness guarantees of the proposed algorithm. This section covers the theoretical framing of noise in learning, especially adversarial or malicious noise, which directly impacts the algorithm's design and analysis.

*How the paper uses it:* The paper addresses learning under a constant rate of malicious noise, making this foundational to the robustness results.

▶ [\[ALT 2025\] Efficient PAC Learning of Halfspaces with Constant Malicious Noise Rate](https://www.youtube.com/watch?v=8MuindI9a44) — Gautam Kamath · 1y ago

### Hinge loss minimization with norm constraints *(prerequisite)*
This section explains the core optimization technique used in the paper to enforce sparsity and robustness. It covers hinge loss as a surrogate loss function and the role of L1 and L2 norm constraints in promoting sparse and bounded-norm solutions.

*How the paper uses it:* The authors formulate hinge loss minimization with L1 and L2 constraints as the main optimization framework for learning sparse halfspaces robustly.

▶ [Week 4 Lecture 25 SVM - Hinge Loss Formulation](https://www.youtube.com/watch?v=9dPjKuTYkx4) — Machine Learning- Balaraman Ravindran · 5y ago

### Margin and logconcave distribution assumptions *(prerequisite)*
This section introduces the distributional assumptions—margin conditions and mixtures of logconcave distributions—that are essential for the theoretical guarantees of the algorithm. Understanding these assumptions is key to grasping why the algorithm achieves near-optimal sample complexity.

*How the paper uses it:* The paper's robustness and sample complexity results rely on margin and mixture of logconcave distribution assumptions.

▶ [Cornell CS 5787: Applied Machine Learning. Lecture 9. Part 1: Classification Margins](https://www.youtube.com/watch?v=eeDB1BP17Qw) — Volodymyr Kuleshov · 5y ago

### PAC learning sparse halfspaces
This section focuses on the central learning problem studied in the paper: PAC learning of sparse halfspaces. It covers the theoretical framework and challenges of learning sparse linear classifiers efficiently, which is the core of the paper's contribution.

*How the paper uses it:* The paper proposes the first attribute-efficient algorithm for PAC learning sparse halfspaces tolerant to constant malicious noise.

▶ [Efficient Active Learning of Sparse Halfspaces](https://www.youtube.com/watch?v=WR0BxlaN0iw) — COLT · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand robust, attribute-efficient PAC learning of sparse halfspaces under malicious noise. We start with the basics of malicious noise models and hinge loss minimization with norm constraints to build intuition on robustness and optimization. Then we cover margin and logconcave distribution assumptions that underpin theoretical guarantees, followed by soft outlier removal techniques. Finally, we focus on PAC learning sparse halfspaces, the core method studied in the paper.

### Malicious noise model in learning *(prerequisite)*
Malicious noise models describe scenarios where a constant fraction of data points can be arbitrarily corrupted by an adversary, posing challenges for learning algorithms. Understanding this noise model is crucial to grasp how robustness guarantees are formulated and achieved.

*How the paper uses it:* The paper addresses learning sparse halfspaces robustly under a constant rate of malicious noise in the data.

▶ [Attribute-Efficient Learning of Halfspaces with Malicious Noise](https://www.youtube.com/watch?v=spAu-KwPv-U) — Algorithmic Learning Theory · 5y ago

### Hinge loss minimization with norm constraints *(prerequisite)*
Hinge loss is a popular surrogate loss used in classification, especially in support vector machines. Combining hinge loss minimization with L1 and L2 norm constraints helps enforce sparsity and boundedness of the learned classifier, which is key for attribute-efficient and robust learning.

*How the paper uses it:* The authors formulate hinge loss minimization with L1 and L2 norm constraints to enforce sparsity and robustness against noise.

▶ [Week 4 Lecture 25 SVM - Hinge Loss Formulation](https://www.youtube.com/watch?v=9dPjKuTYkx4) — Machine Learning- Balaraman Ravindran · 5y ago

### Margin and logconcave distribution assumptions *(prerequisite)*
Margin assumptions ensure a separation between classes, while logconcave distributions describe a broad class of well-behaved data distributions. These assumptions are important for proving theoretical guarantees about learning algorithms' performance and robustness.

*How the paper uses it:* The paper extends margin and mixture of logconcave distribution assumptions to achieve attribute-efficient learning guarantees.

▶ [Cornell CS 5787: Applied Machine Learning. Lecture 9. Part 1: Classification Margins](https://www.youtube.com/watch?v=eeDB1BP17Qw) — Volodymyr Kuleshov · 5y ago

### Soft outlier removal via semidefinite programming *(prerequisite)*
Soft outlier removal techniques assign weights to samples to reduce the influence of corrupted or noisy data points during optimization. Using semidefinite programming allows for a principled way to downweight outliers, enhancing robustness.

*How the paper uses it:* The paper's robustness mainly comes from a soft outlier removal scheme that downweights corrupted samples via semidefinite programming.

▶ [Outliers , Removing the outliers using the automated function in python](https://www.youtube.com/watch?v=z0FKm9o0IYw) — Learn Data Science with Pranjal · 6y ago

### PAC learning sparse halfspaces
PAC learning provides a framework for understanding when and how a classifier can be learned approximately correctly with high probability. Sparse halfspaces are linear classifiers depending on few features, important for interpretability and efficiency in high dimensions.

*How the paper uses it:* The core contribution is an attribute-efficient PAC learning algorithm for sparse halfspaces tolerant to malicious noise.

▶ [Efficient Active Learning of Sparse Halfspaces](https://www.youtube.com/watch?v=WR0BxlaN0iw) — COLT · 8y ago

## Already in your library

- [DeepSeek Sparse Attention Explained: 80% Cheaper Long-Context AI](https://www.youtube.com/watch?v=hrDr2ZlOasM) — also for: LongSight: Compute-Enabled Memory to Accelerate Large-Context LLMs via Sparse Attention (José F. Martínez)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's core contributions on attribute-efficient PAC learning of sparse halfspaces under malicious noise. The beginner project recreates a key mechanism from the paper using familiar tools. The intermediate project implements the main algorithm on synthetic data to reproduce sample complexity and robustness results. The advanced project extends the method to a future direction proposed by the authors, exploring other surrogate loss functions for robustness.

### Beginner — Soft Outlier Removal Scheme Simulation
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a soft outlier removal scheme inspired by the paper's approach. Using synthetic 2D data with injected malicious noise, you implement a simple weighting mechanism that downweights corrupted samples during hinge loss minimization with L1 and L2 constraints.

**Why it shows you understood the paper:** This project shows you grasp the paper's key robustness mechanism—soft outlier removal via sample weighting—and how it limits corrupted samples' influence on learning sparse halfspaces.

**Grounded in:** The robustness of our algorithm to the malicious noise comes mainly from the soft outlier removal scheme... it assigns high weights to the clean samples and low weights to corrupted samples.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D sparse linear classification data with controlled malicious noise injected by flipping labels or adding adversarial points.

**Build it:**

1. Generate synthetic 2D data points labeled by a sparse linear separator.
2. Inject a constant fraction of malicious noise by flipping labels or adding outliers.
3. Implement hinge loss minimization with L1 and L2 norm constraints using gradient descent.
4. Implement a soft outlier removal scheme that assigns weights to samples based on their hinge loss residuals.
5. Visualize the effect of weighting on sample influence and the learned decision boundary.

**Ships as:** A Jupyter notebook demonstrating the soft outlier removal scheme's effect on noisy data, with plots showing sample weights and decision boundaries.

**Stretch goal:** Add a simple comparison to a baseline hinge loss minimization without weighting to highlight robustness gains.

### Intermediate — Reimplementation of Attribute-Efficient Sparse Halfspace Learning
*Effort: 2 weekends, ~20 hours*

You implement the paper's core algorithm for PAC learning sparse halfspaces tolerant to constant malicious noise. Using synthetic high-dimensional sparse data, you run hinge loss minimization with L1 and L2 constraints combined with a soft outlier removal scheme. You compare the learned classifier's error and sample complexity against a baseline sparse SVM without outlier removal.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's theoretical algorithm into code, reproduce its robustness and sample complexity claims, and understand the interplay of sparsity, noise tolerance, and distributional assumptions.

**Grounded in:** Algorithm 1 runs in polynomial time and returns a halfspace ŵ such that errD (ŵ) ≤ ϵ with probability at least 1 − δ, given Ω(s^2 · log^5 d · log^2(1/ϵδ)) samples. The robustness of our algorithm to the malicious noise comes mainly from the soft outlier removal scheme.

**Tech stack:** Python 3.11, NumPy, SciPy, CVXPY (for semidefinite programming), Jupyter Notebook

**Data:** Synthetic high-dimensional sparse linear classification data generated with controlled sparsity s and dimension d, with malicious noise injected by label flipping and adversarial points.

**Build it:**

1. Generate synthetic sparse linear classification data with parameters s (sparsity), d (dimension), and margin γ.
2. Inject a constant fraction of malicious noise by flipping labels or adding adversarial samples.
3. Implement hinge loss minimization with L1 and L2 norm constraints using CVXPY to solve the constrained optimization.
4. Implement the soft outlier removal scheme via semidefinite programming to assign sample weights iteratively.
5. Train the algorithm and a baseline sparse SVM without outlier removal on the data.
6. Evaluate and compare classification error rates and sample complexity scaling with s and d.

**Ships as:** A Jupyter notebook and Python scripts implementing the algorithm, showing plots of error vs sample size and comparisons to baseline, with explanations linking results to the paper's theoretical guarantees.

**Stretch goal:** Experiment with varying noise rates and margins to observe robustness limits and discuss alignment with the paper's constant noise tolerance.

### Advanced — Extending Gradient Analysis to Logistic Loss for Sparse Halfspace Learning
*Effort: 3+ weeks*

You extend the paper's gradient analysis framework and soft outlier removal scheme to logistic loss minimization with L1 and L2 constraints for learning sparse halfspaces under malicious noise. You implement the adapted algorithm, evaluate its robustness on synthetic data, and compare it to the hinge loss version. This addresses the paper's future direction on other surrogate loss functions.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's analytical techniques and ability to adapt them to new loss functions, tackling a stated limitation and advancing the theory toward broader applicability.

**Grounded in:** Extending the gradient analysis framework to other surrogate loss functions beyond hinge loss is a future direction proposed by the authors.

**Tech stack:** Python 3.11, NumPy, SciPy, CVXPY, Jupyter Notebook

**Data:** Synthetic high-dimensional sparse linear classification data with malicious noise, generated as in the intermediate project.

**Build it:**

1. Review the paper's gradient and KKT condition analysis for hinge loss minimization with L1 and L2 constraints.
2. Formulate logistic loss minimization with the same norm constraints and adapt the soft outlier removal scheme accordingly.
3. Implement the logistic loss optimization with sample weighting using CVXPY or a custom gradient-based solver.
4. Generate synthetic sparse data with malicious noise as before.
5. Train and evaluate the logistic loss based algorithm, comparing robustness and sample complexity to the hinge loss baseline.
6. Analyze and document how the gradient analysis extends or differs for logistic loss, discussing theoretical and empirical observations.

**Ships as:** A comprehensive codebase and Jupyter notebook demonstrating the extension, with comparative results and a detailed README explaining the adaptation and its significance relative to the paper.

**Stretch goal:** Explore structured sparsity models (e.g., group L1 norms) in the logistic loss setting to approach the paper's mention of structured sparsity in neural networks.
