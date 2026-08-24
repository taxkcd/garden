---
title: "465 · Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms — Dana Dachman-Soled"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dana-dachman-soled"
source_hash: "e5120cead1c8813a58c60baa7f1c5f552bcc3984692a86f73369d92d996933cf"
sequence: 465
generator: "outreach-garden: managed"
---

# 465 · Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms

## At a glance

- **Professor:** Dana Dachman-Soled
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms](https://arxiv.org/pdf/2605.27782)
- **Authors:** Yvonne Zhou, Mingyu Liang, Ivan Brugere, Danial Dervovic, Yue Guo, Antigoni Polychroniadou, Min Wu, Dana Dachman-Soled
- **Year:** 2026

## Paper overview

This paper presents a novel method for training machine learning models on encrypted data using Fully Homomorphic Encryption (FHE) combined with Differential Privacy (DP). It offers the first theoretical guarantees on convergence of training with polynomial approximations necessary for FHE compatibility, and introduces a new DP training algorithm that avoids costly gradient clipping. The approach significantly improves computational efficiency while maintaining strong privacy and comparable model accuracy, making privacy-preserving outsourced machine learning more practical.

### Why it matters

**Research problem:** How to efficiently and securely train machine learning models on sensitive data outsourced to untrusted servers, ensuring end-to-end privacy by combining Fully Homomorphic Encryption with Differential Privacy, while providing theoretical convergence guarantees and practical algorithms compatible with encrypted computation.

**Why it matters:** Outsourcing ML training to external servers risks exposing sensitive data to semi-honest servers and downstream users. Existing methods either lack theoretical guarantees or are computationally expensive, especially under FHE. Achieving scalable, private, and secure training is critical for sensitive domains like healthcare and finance.

**Key contributions:**

- First theoretical convergence analysis of ML training under FHE with polynomial approximations.
- A novel DP training algorithm tailored for FHE that avoids expensive gradient clipping.
- Integration of a barrier function in the objective to bound iterate norms and enable rigorous DP guarantees.
- Data-independent procedures for selecting polynomial approximations and hyperparameters.
- Empirical demonstration of significant computational speedups (3× to 5×) over standard DP-GD under FHE with comparable accuracy.

## About the professor

**Dana Dachman-Soled** — Professor, Department of Electrical and Computer Engineering, Univ. of Maryland - College Park.

Research interests: my research interests are in cryptography, complexity theory and security. I have broad interests in cryptography including post-quantum cryptography, non-malleable codes and extractors, secure multiparty computation, and black-box complexity. I am also interested in privacy preserving machine learning, complexity-theoretic cryptography, and side-channel attacks.

### Research links

- [Faculty/profile page](https://ece.umd.edu/~danadach)
- [Professor website](https://user.eng.umd.edu/~danadach)
- [Resolved homepage](https://user.eng.umd.edu/~danadach/)
- [Google Scholar](https://scholar.google.com/citations?user=Ss009KUAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, barrier functions in optimization, gradient descent convergence analysis
**Already in this field?** Skip this entirely if you already understand convex optimization concepts including barrier methods and convergence proofs for gradient-based algorithms.

This background covers convex optimization, which is essential for understanding the theoretical convergence guarantees, polynomial approximations, and barrier function methods used in the paper's privacy-preserving ML training algorithm under FHE. The rigorous course option provides a deep, structured university-level treatment of convex optimization, ideal for readers seeking comprehensive mastery. The fast track offers a shorter, more accessible series of focused explainers that cover the core concepts efficiently for readers with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 7, about 9.2 hours — covering introduction, convex sets, functions, optimization problems, optimality conditions, and barrier methods, which are crucial for understanding the paper's approach.

*Why it unblocks this paper:* This is the authoritative Stanford EE364A Convex Optimization I course by Stephen Boyd, whose lectures are widely regarded as the gold standard for convex optimization. It covers all foundational topics including barrier functions and convergence analysis, directly relevant to the paper's theoretical contributions.

*If you want all of it:* All 18 lectures, about 23.7 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Analysis and Optimization](https://www.youtube.com/playlist?list=PLiNGnnotnLOeYieGiDCOsdwI9ogWI4D3j) — Marcelo Oliveira · 18 videos · 11.1h across 18 episodes

**Watch only this:** Episodes 3, 15, and 16, about 1.8 hours total — these cover the basics of optimization, gradients and constraints, and barrier functions, providing the essential intuition needed for the paper.

*Why it unblocks this paper:* This playlist by Marcelo Oliveira offers concise, clear explanations of convex optimization concepts including gradients, constraints, and barrier functions in about half the time of the full course, making it a great quick yet rigorous overview.

*If you want all of it:* All 18 episodes, about 11.1 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on ML training under Fully Homomorphic Encryption (FHE) with Differential Privacy (DP), start by building a strong foundation in the core cryptographic technique of Fully Homomorphic Encryption and the privacy framework of Differential Privacy. Next, study polynomial approximations in machine learning to grasp how non-polynomial functions are adapted for FHE compatibility. Then, review convergence analysis of gradient descent with DP noise to understand the theoretical guarantees of training stability and privacy. Finally, focus on the paper's core contribution: the novel DP gradient descent algorithm without clipping under FHE, and the authors' own talk presenting their work and results.

### Fully Homomorphic Encryption *(prerequisite)*
Fully Homomorphic Encryption (FHE) is the cryptographic foundation enabling computation on encrypted data without decryption. Understanding FHE schemes, their construction, and performance implications is essential to appreciate the challenges and innovations in training ML models under encryption.

*How the paper uses it:* The paper leverages FHE to perform encrypted gradient computations securely and efficiently.

▶ [Fully Homomorphic Encryption I](https://www.youtube.com/watch?v=xlcb_G1_rzk) — Simons Institute for the Theory of Computing · 44:58 · 11 years ago

### Differential Privacy *(prerequisite)*
Differential Privacy (DP) provides a rigorous framework for protecting individual data privacy during statistical analysis and machine learning. Familiarity with DP definitions, mechanisms, and their integration with ML algorithms is crucial to understand the paper's privacy guarantees.

*How the paper uses it:* The paper integrates DP with FHE to ensure end-to-end privacy during ML training.

▶ [Differential Privacy: Fundamentals to Forefront I](https://www.youtube.com/watch?v=5muBxGQ9B2g) — Simons Institute for the Theory of Computing · 59:34 · 11 years ago

### Polynomial Approximations in ML *(prerequisite)*
Polynomial approximations enable replacing non-polynomial activation and loss functions with polynomial ones, making them compatible with FHE constraints. Understanding polynomial regression and approximation theory helps grasp how the paper achieves FHE-friendly computations.

*How the paper uses it:* The paper uses polynomial approximations to enable gradient computations under FHE.

▶ [Lec 01  Overview of Function Approximation](https://www.youtube.com/watch?v=G2h7nD_Stxg) — NPTEL - Indian Institute of Science, Bengaluru · 47:50 · 7 months ago

### Convergence Analysis of Gradient Descent with DP Noise *(prerequisite)*
Convergence analysis of gradient descent under differential privacy noise is fundamental to establishing training stability and utility guarantees. Studying theoretical results on noisy gradient methods provides insight into the paper's convergence proofs.

*How the paper uses it:* The paper provides the first theoretical convergence guarantees for DP training under FHE with polynomial approximations.

▶ [Differential Privacy and Stochastic Gradient Descent](https://www.youtube.com/watch?v=PthN5jkpSi0) — Simons Institute for the Theory of Computing · 18:02 · 12 years ago

### DP Gradient Descent without Clipping under FHE
The paper's central algorithmic contribution is a novel DP gradient descent method tailored for FHE that avoids costly per-sample gradient clipping by using a barrier function. Understanding this approach is key to appreciating the efficiency and privacy improvements achieved.

*How the paper uses it:* This is the paper's novel DP training algorithm that improves efficiency and privacy under FHE.

▶ [Lecture 14B: Modern Private ML - Differentially Private Stochastic Gradient Descent](https://www.youtube.com/watch?v=uTiXla_pHik) — Gautam Kamath · 1:00:20 · 5 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides a direct and detailed presentation of their novel methods, theoretical results, and empirical findings. It offers the most precise and authoritative exposition of the paper's contributions.

*How the paper uses it:* This talk is by the paper authors presenting their work on ML training under FHE with DP.

▶ [Privacy Preserving ML with Fully Homomorphic Encryption](https://www.youtube.com/watch?v=g1Zlu63TP0Y) — Google TechTalks · 56:58 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start with the foundational cryptographic technique of Fully Homomorphic Encryption (FHE), which enables computation on encrypted data. Next, learn about Differential Privacy (DP), the privacy framework integrated with FHE in the paper. Then, grasp polynomial approximations in machine learning, which are crucial for adapting ML functions to FHE constraints. After that, study convergence analysis of gradient descent with DP noise to understand the theoretical guarantees. Finally, explore the paper's core novel algorithm: differentially private gradient descent without clipping under FHE, which improves efficiency and privacy.

### Fully Homomorphic Encryption *(prerequisite)*
Fully Homomorphic Encryption allows computations to be performed directly on encrypted data without decrypting it, preserving privacy throughout processing. Understanding FHE is essential to grasp how the paper enables ML training on encrypted data.

*How the paper uses it:* The paper relies on FHE to securely perform ML training on encrypted datasets outsourced to untrusted servers.

▶ [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — Learn with Whiteboard · 5:56 · 4 years ago

### Differential Privacy *(prerequisite)*
Differential Privacy is a rigorous privacy framework that adds noise to computations to protect individual data points from being identified. It complements FHE by providing formal privacy guarantees during ML training.

*How the paper uses it:* The paper integrates Differential Privacy with FHE to ensure end-to-end privacy during model training.

▶ [Differential Privacy: What? So What? Now What?](https://www.youtube.com/watch?v=NRf6sUk1bv0) — UC Berkeley Center for Long-Term Cybersecurity · 4:26 · 6 years ago

### Polynomial Approximations in ML *(prerequisite)*
Polynomial approximations replace non-polynomial functions like activations and losses with polynomial forms, enabling compatibility with FHE's arithmetic constraints. This step is crucial for performing gradient computations under encryption.

*How the paper uses it:* The paper uses polynomial approximations to make activation and loss functions compatible with FHE computations.

▶ [Intro to Taylor Series: Approximations on Steroids](https://www.youtube.com/watch?v=9YAaCEA08yM) — Dr. Trefor Bazett · 12:43 · 7 years ago

### Convergence Analysis of Gradient Descent with DP Noise *(prerequisite)*
This concept covers how gradient descent algorithms behave and converge when noise is added for Differential Privacy, ensuring training stability and privacy guarantees. Understanding this helps appreciate the theoretical contributions of the paper.

*How the paper uses it:* The paper provides the first theoretical convergence guarantees for ML training under FHE with DP noise.

▶ [22. Gradient Descent: Downhill to a Minimum](https://www.youtube.com/watch?v=AeRwohPuUHQ) — MIT OpenCourseWare · 52:44 · 7 years ago

## Already in your library

- [[REFAI Seminar 02/02/23] Fully-Homomorphic-Encryption ...](https://www.youtube.com/watch?v=1eUM_YWTNMI) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [14 Craig Gentry on a Simple Fully Homomorphic Encryption Scheme & Thoughts on Bootstrapping](https://www.youtube.com/watch?v=LgOI05gG46Y) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Fully Homomoorphic Encryption. Shai Halevi, IBM](https://www.youtube.com/watch?v=R5jaHNC_neI) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy - Lecture 1](https://www.youtube.com/watch?v=OfWj89oRD7g) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy explained](https://www.youtube.com/watch?v=XgotQQpXwio) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Differential Privacy - Simply Explained](https://www.youtube.com/watch?v=gI0wk1CXlsQ) — also for: Differentially Private Synthetic Data Generation Using Context-Aware GANs (Anantaa Kotal)
- [Taylor series | Chapter 11, Essence of calculus](https://www.youtube.com/watch?v=3d6DsjIBzJ4) — also for: Trace reconstruction from local statistical queries (Chin Ho Lee)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate understanding of the paper's novel approach to differentially private machine learning training under fully homomorphic encryption (FHE). The beginner project reproduces a core mechanism from the paper using polynomial approximations for encrypted-compatible functions. The intermediate project implements the paper's no-clipping DP gradient descent algorithm on a public dataset, comparing it against a baseline. The advanced project extends the method to a non-convex neural network setting, addressing one of the paper's stated limitations and exploring adaptations of the barrier function.

### Beginner — Polynomial Approximation for Encrypted-Compatible Activation
*Effort: a weekend, ~8 hours*

You implement polynomial approximations of common activation functions (e.g., sigmoid or ReLU) used in machine learning to replace non-polynomial activations, enabling compatibility with encrypted computation. You visualize the approximation quality over bounded intervals and demonstrate how approximation interval choice affects stability.

**Why it shows you understood the paper:** This project shows you grasp the paper's key technique of replacing non-polynomial functions with polynomial approximations to enable gradient computations under FHE, including the importance of interval bounding for stability and privacy guarantees.

**Grounded in:** The authors replace non-polynomial activation and loss functions with polynomial approximations to enable FHE-compatible gradient computations; polynomial approximation intervals are rigorously bounded to ensure stability and DP guarantees.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** No external dataset needed; synthetic input values sampled uniformly over chosen intervals.

**Build it:**

1. Implement polynomial approximations (e.g., Taylor or Chebyshev) for sigmoid and ReLU functions over specified intervals.
2. Plot the original and approximated functions to visualize approximation quality.
3. Experiment with different approximation intervals and polynomial degrees to observe effects on approximation error.
4. Document how interval choice impacts stability and potential convergence issues as discussed in the paper.

**Ships as:** A Jupyter notebook demonstrating polynomial approximations of activations with plots and commentary linking to the paper's stability and privacy considerations.

**Stretch goal:** Add a small gradient descent simulation using the polynomial approximations to show how approximation errors propagate in training.

### Intermediate — Implementing No-Clipping DP Gradient Descent under FHE Constraints
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's differentially private gradient descent algorithm that avoids per-sample gradient clipping by integrating a barrier function to bound weight norms. You apply it to the publicly available Adult dataset (UCI Machine Learning Repository) as a substitute for the paper's datasets, comparing accuracy and AUC against a standard DP gradient descent baseline with clipping.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core algorithmic contribution into practice, including the novel DP training algorithm tailored for FHE and the barrier function's role in controlling sensitivity without clipping.

**Grounded in:** A novel DP training algorithm tailored for FHE that avoids expensive gradient clipping; integration of a barrier function in the objective to bound iterate norms and enable rigorous DP guarantees; empirical demonstration of comparable accuracy and speedups.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** UCI Adult dataset ((link removed — unverified)) used as a proxy for the paper's Adult dataset.

**Build it:**

1. Implement polynomial approximations for activation and loss functions as per the paper.
2. Implement the barrier function modification to the objective to bound weight norms.
3. Implement the no-clipping DP gradient descent algorithm adding Gaussian noise to gradients as described.
4. Train logistic regression models on the Adult dataset using your implementation and a baseline DP-GD with clipping.
5. Evaluate and compare model accuracy and AUC metrics.
6. Document results and relate findings to the paper's reported accuracy drops and computational benefits.

**Ships as:** A Jupyter notebook or Python scripts with code, training logs, evaluation metrics, and a README explaining the implementation and comparison results.

**Stretch goal:** Add runtime profiling to estimate computational cost improvements analogous to the paper's multiplicative depth reductions.

### Advanced — Extending DP Training under FHE to Non-Convex Neural Networks
*Effort: 3+ weeks*

You extend the paper's DP training algorithm with barrier functions and polynomial approximations to a simple non-convex neural network (e.g., a small multilayer perceptron) trained on MNIST. You explore adaptations or enhancements to the barrier function to stabilize training and attempt to provide empirical convergence evidence. You compare results to standard DP training with clipping on the same network.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by applying its methods beyond smooth, convex objectives to neural networks, demonstrating deep comprehension of the theoretical and practical challenges involved.

**Grounded in:** The convergence and DP analysis is currently limited to smooth, convex objectives; future directions include extending guarantees to non-convex neural networks and exploring barrier function techniques for stabilizing training in broader ML contexts.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** MNIST dataset (publicly available) used as a substitute for the paper's MNIST experiments.

**Build it:**

1. Implement polynomial approximations for activation and loss functions compatible with FHE.
2. Adapt the barrier function to the neural network setting, experimenting with different formulations or parameters.
3. Implement the no-clipping DP gradient descent algorithm with barrier function modifications.
4. Train a small MLP on MNIST with your method and a baseline DP training with clipping.
5. Evaluate accuracy, AUC, and training stability metrics.
6. Analyze and document empirical convergence behavior and challenges encountered.
7. Discuss potential theoretical extensions or modifications to the barrier function for non-convex settings.

**Ships as:** A well-documented repository with code, training experiments, evaluation metrics, and a detailed report discussing empirical findings and theoretical insights.

**Stretch goal:** Implement adaptive polynomial approximation intervals to handle varying input ranges dynamically during training.
