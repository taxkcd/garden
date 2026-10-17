---
title: "706 · Communication-Aware Model Distributed Inference via Latent Representation Compression — Stratis Ioannidis"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stratis-ioannidis"
source_hash: "28b1ebe9385edfee45320962b97fe8e56b37306947536b6f8ad321021290e63b"
sequence: 706
generator: "outreach-garden: managed"
---

# 706 · Communication-Aware Model Distributed Inference via Latent Representation Compression

## At a glance

- **Professor:** Stratis Ioannidis
- **Institution:** Northeastern University
- **Paper:** [Communication-Aware Model Distributed Inference via Latent Representation Compression](https://arxiv.org/pdf/2609.30413)
- **Authors:** Peyman Gholami, Theodoros-Thirimachos Davarakis, Teng Li, Miquel Sirera Perelló, Salil Reddy, Ayberk Yarkın Yıldız, Anish Arora, Atilla Eryilmaz, Stratis Ioannidis, Chengzhang Li, Hulya Seferoglu, Ness Shroff
- **Year:** 2026

## Paper overview

This paper addresses the challenge of running machine learning inference tasks distributed across multiple resource-constrained edge devices. It proposes a framework that compresses intermediate neural network activations to reduce communication overhead while balancing the tradeoff between inference accuracy and throughput. The framework adapts compression rates dynamically based on network conditions, using optimization techniques to maximize accuracy under strict throughput constraints. The approach is validated through simulations and real edge device experiments.

### Why it matters

**Research problem:** How to optimize distributed machine learning model inference over resource-constrained edge devices by controlling compression of intermediate activations to balance communication costs and inference accuracy while meeting strict throughput (Quality of Service) constraints.

**Why it matters:** Deploying ML inference on edge devices is critical for latency-sensitive applications and privacy concerns, but communication overhead between devices limits throughput and accuracy. Efficient compression strategies are needed to enable scalable, real-time distributed inference on edge networks with dynamic channel conditions.

**Key contributions:**

- Formalization of the accuracy-throughput tradeoff in distributed model inference with pipeline parallelism over arbitrary edge topologies.
- Closed-form optimal compression solutions for single-task CSI-aware scenarios.
- Convex optimization reduction for multi-task CSI-aware resource and compression allocation.
- Stochastic dual descent algorithms with convergence guarantees for unknown and estimated channel state information settings.
- Empirical methods to estimate accuracy-compression functions using smoothing techniques.

## About the professor

**Stratis Ioannidis** — Professor, Electrical and Computer Engineering, Northeastern University.

Research interests: Machine Learning, Distributed Systems, Networking, Privacy

### Research links

- [Faculty/profile page](https://ece.northeastern.edu/fac-ece/ioannidis)
- [Professor website](http://ece.northeastern.edu/fac-ece/ioannidis)
- [Lab website](http://web.northeastern.edu/spiral)
- [Google Scholar](https://scholar.google.com/citations?user=GPIB5kUAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, duality, and stochastic optimization algorithms
**Already in this field?** Skip this entirely if you already understand convex optimization fundamentals, duality theory, and stochastic gradient methods.

This background focuses on Convex Optimization, which is fundamental to understanding the optimization formulations and algorithms used in the paper for distributed inference compression and resource allocation. The rigorous course option provides a deep, structured university-level treatment of convex optimization theory and methods, while the fast track offers a shorter, more accessible introduction covering the key concepts efficiently. Choose the course for a comprehensive foundation or the fast track for a quicker, yet solid, conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 7, about 9.2 hours — covering fundamentals of convex sets, functions, duality, and optimality conditions, which are essential to understand the paper's closed-form and convex reformulations.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier university course that thoroughly covers recognizing and solving convex optimization problems, including duality and algorithms, directly relevant to the paper's optimization contributions.

*If you want all of it:* All 18 lectures, about 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [EE609 Convex Optimization in SPCOM](https://www.youtube.com/playlist?list=PLG4ZBab_DdoeZOWHJhUAA8fzTTumHP2O-) — Ketan Rajawat · 83 videos · 12.4h across the first 60 episodes

**Watch only this:** Episodes 1 through 20, about 4 hours — covering introduction, convex sets, convex functions, and first/second order conditions, providing a solid quick foundation.

*Why it unblocks this paper:* The EE609 Convex Optimization in SPCOM series by Ketan Rajawat offers concise, clear lectures on convex optimization basics, suitable for quickly grasping the core concepts needed to follow the paper's optimization framework.

*If you want all of it:* All 60 episodes, about 12.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on communication-aware distributed inference via latent representation compression, start by building foundational knowledge on distributed neural network inference, communication-efficient machine learning, convex optimization in resource allocation, and stochastic dual descent algorithms. These prerequisites establish the theoretical and practical background for the paper's optimization and algorithmic contributions. Finally, focus on the paper's core concept and the authors' own talk to grasp their novel framework and specific solutions.

### Distributed neural network inference *(prerequisite)*
This section covers how neural network inference is partitioned and executed across multiple devices, a fundamental aspect of the paper's distributed pipeline parallelism model. Understanding this distributed execution is critical to appreciate the communication and compression challenges addressed.

*How the paper uses it:* The paper models distributed inference as a pipeline of partitioned neural network stages across edge nodes.

▶ [Operating Distributed Inference Systems at Scale — Nishant Gupta & Naman Ahuja, Meta](https://www.youtube.com/watch?v=7c9FSUVcXR0) — AI Engineer · 19:51 · 4 wk ago

### Communication-efficient machine learning *(prerequisite)*
This section explores strategies to reduce communication overhead in distributed machine learning, directly relevant to the paper's focus on compressing intermediate activations to optimize communication costs. It provides context on existing communication reduction techniques and their tradeoffs.

*How the paper uses it:* The paper proposes compression schemes to reduce communication overhead while balancing accuracy and throughput.

▶ [Sameera Ramasinghe (Pluralis): Communication-Efficient Model-Parallel Training](https://www.youtube.com/watch?v=2L41M5ZGxiI) — Pluralis Research · 45:48 · 5 mo ago

### Convex optimization in resource allocation *(prerequisite)*
Understanding convex optimization is essential for grasping the paper's formulation of resource and compression allocation problems and their convex reformulations. This section provides the mathematical foundation for the optimization techniques used.

*How the paper uses it:* The paper reduces multi-task compression and resource allocation to convex optimization problems under certain assumptions.

▶ [1.10 Convex Optimization | CS601 |](https://www.youtube.com/watch?v=aUPLdfhM8T0) — RGPV Official · 2 yr ago

### Stochastic dual descent algorithms *(prerequisite)*
This section explains stochastic dual descent methods, which are critical for the paper's approach to optimizing compression and resource allocation under unknown and noisy channel state information. It covers algorithmic principles and convergence properties.

*How the paper uses it:* The paper develops stochastic dual descent algorithms with convergence guarantees for unknown channel states.

▶ [CS8850: Stochastic Gradient Descent](https://www.youtube.com/watch?v=FCMQ09fDfy0) — Sergey Plis · 4 yr ago

### Communication-Aware Model Distributed Inference via Latent Representation Compression (Paper Core Concept) *(paper-talk search result; attribution unverified)*
This section focuses on the paper's novel framework that dynamically compresses intermediate neural network activations to optimize the tradeoff between inference accuracy and communication overhead in distributed edge inference. It includes the authors' formalization, optimization solutions, and empirical validation.

*How the paper uses it:* This is the core contribution of the paper, presenting the communication-aware distributed inference framework and its theoretical and practical results.

▶ [Domain Compression: A primitive for distributed inference under communication & privacy constraints](https://www.youtube.com/watch?v=Q_Kej3Ca5Tw) — Google TechTalks · 18:08 · 5 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on communication-aware distributed inference, start by learning the basics of distributed neural network inference to grasp how models are partitioned across devices. Then, study communication-efficient machine learning to see why and how communication overhead is reduced. Next, learn about convex optimization in resource allocation, which underpins the paper's optimization formulations. Follow that with stochastic dual descent algorithms to understand how the paper handles unknown and noisy network conditions. Finally, explore the core concept of the accuracy-throughput tradeoff in distributed inference, which is central to balancing inference quality and communication constraints in the paper's framework.

### Distributed neural network inference *(prerequisite)*
This concept explains how neural network inference tasks can be split and executed across multiple devices, often at the edge, to overcome resource limitations. Understanding this helps you see why distributed inference is necessary and how it works in practice.

*How the paper uses it:* The paper models distributed inference as a pipeline of partitioned neural network stages across edge nodes.

▶ [Operating Distributed Inference Systems at Scale — Nishant Gupta & Naman Ahuja, Meta](https://www.youtube.com/watch?v=7c9FSUVcXR0) — AI Engineer · 19:51 · 4 wk ago

### Communication-efficient machine learning *(prerequisite)*
This topic covers strategies to reduce the communication overhead in distributed machine learning, such as compression and quantization, which are essential for efficient edge deployments. It builds intuition on why communication costs matter and how they can be minimized.

*How the paper uses it:* The paper proposes compression schemes to reduce communication overhead while balancing accuracy and throughput.

▶ [Sameera Ramasinghe (Pluralis): Communication-Efficient Model-Parallel Training](https://www.youtube.com/watch?v=2L41M5ZGxiI) — Pluralis Research · 45:48 · 5 mo ago

### Convex optimization in resource allocation *(prerequisite)*
Convex optimization provides mathematical tools to efficiently solve resource allocation problems with guarantees of finding global optima. Learning this helps understand how the paper formulates and solves optimization problems for compression and resource allocation.

*How the paper uses it:* The paper reduces multi-task compression and resource allocation to convex optimization problems under certain assumptions.

▶ [1.10 Convex Optimization | CS601 |](https://www.youtube.com/watch?v=aUPLdfhM8T0) — RGPV Official · 2 yr ago

### Stochastic dual descent algorithms *(prerequisite)*
Stochastic dual descent is an optimization technique that can handle noisy or incomplete information, making it suitable for dynamic and uncertain environments. Understanding this algorithm clarifies how the paper adapts to unknown and fluctuating channel states.

*How the paper uses it:* The paper develops stochastic dual descent algorithms with convergence guarantees for unknown channel state information.

▶ [Stochastic Gradient Descent Explained | Batch vs SGD in Machine Learning (With Intuition)](https://www.youtube.com/watch?v=A5gAAVGCVS0) — Coursesteach · 9 mo ago

### Accuracy-throughput tradeoff in distributed inference
This core concept models the balance between inference accuracy and communication throughput, highlighting the fundamental tradeoff in distributed inference systems. Grasping this tradeoff is key to understanding the paper's main contribution in optimizing compression rates under throughput constraints.

*How the paper uses it:* The paper formalizes and optimizes the accuracy-throughput tradeoff in distributed model inference with pipeline parallelism.

▶ [System Design Part 3: Latency vs Throughput + CAP Theorem Explained](https://www.youtube.com/watch?v=3JoDt2ehIk8) — Coding Devs · 6 mo ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 11: Large Scale Distributed Training](https://www.youtube.com/watch?v=9MvD-XsowsE) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Convexity 101 [Optimization Bootcamp]](https://www.youtube.com/watch?v=9WXVgQFFsDI) — also for: Safeguarded Stochastic Polyak Step Sizes for Non-smooth Optimization: Robust Performance Without Small (Sub)Gradients (Nicolas Loizou)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from reproducing a core concept of the paper using existing tools, to implementing and evaluating the paper's optimization methods on real edge hardware, and finally extending the framework to address a stated limitation related to noisy channel state information. Each project is tailored to your software engineering and applied ML background, leveraging your skills while deepening your understanding of communication-aware distributed inference.

### Beginner — Visualize Accuracy-Compression Tradeoff for ResNet-56
*Effort: a weekend, ~8 hours*

You build a small Python notebook that reproduces the empirical accuracy-compression curve for ResNet-56 on CIFAR-10 using top-k sparsification, as shown in Fig. 2(b) of the paper. You will implement a simple compression simulation and plot the monotone, concave accuracy function above the compression threshold.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental accuracy-throughput tradeoff formalized in the paper and the empirical validation of monotonicity and concavity assumptions critical for the optimization methods.

**Grounded in:** "Empirical accuracy-compression functions exhibit monotone and concave behavior above compression thresholds, validating theoretical assumptions."

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib, NumPy

**Data:** Use the CIFAR-10 dataset, a well-known public image classification dataset, as a substitute for the paper's ResNet-56 experiments.

**Build it:**

1. Load the CIFAR-10 dataset and a pretrained ResNet-56 model (from torchvision or similar).
2. Implement a top-k sparsification compression function on intermediate activations.
3. Measure and record the model accuracy at varying compression levels above the threshold.
4. Plot the accuracy vs. compression ratio curve to visualize monotonicity and concavity.
5. Write a README explaining the relation to the paper's Fig. 2(b) and assumptions.

**Ships as:** A Jupyter notebook and README showing the accuracy-compression curve for ResNet-56 on CIFAR-10 with top-k sparsification, illustrating the paper's empirical accuracy function behavior.

**Stretch goal:** Add quantization compression and compare its accuracy-compression curve to top-k sparsification.

### Intermediate — Implement and Evaluate CSI-Aware Compression Optimization
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' code from https://github.com/neu-spiral/communication-aware-inference to reproduce the closed-form optimal compression rate solution for single-task CSI-aware settings. You then extend the code to compare this method against a baseline fixed compression scheme on a small vision task, reporting accuracy and throughput metrics.

**Why it shows you understood the paper:** This project shows you can work with the authors' released implementation, understand the closed-form optimization solution (Theorem 1), and evaluate its practical benefits over naive baselines, reflecting core contributions of the paper.

**Grounded in:** "Closed-form optimal compression solutions for single-task CSI-aware scenarios."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Linux shell

**Data:** Use CIFAR-10 or a similar small vision dataset as a substitute for the paper's vision tasks.

**Build it:**

1. Clone https://github.com/neu-spiral/communication-aware-inference and set up the environment.
2. Run the provided scripts to reproduce the closed-form CSI-aware compression optimization results.
3. Implement a baseline fixed compression scheme (e.g., fixed top-k sparsification ratio).
4. Compare accuracy and throughput metrics between the optimized and baseline schemes.
5. Plot tradeoff curves and write a report linking results to Theorem 1 and key results.

**Verified links from the paper:**

- <https://github.com/neu-spiral/communication-aware-inference> — released by the paper's authors

**Ships as:** A GitHub repo with code, scripts, and plots demonstrating the closed-form CSI-aware compression optimization and baseline comparison, with a README explaining the connection to the paper.

**Stretch goal:** Extend the evaluation to multi-task convex optimization using the convex reformulation from Theorem 2.

### Advanced — Robust Stochastic Dual Descent for Noisy Channel Estimation
*Effort: 3+ weeks*

You develop an extension of the stochastic dual descent algorithm from the paper to improve robustness under highly dynamic and noisy channel state information (CSI). You simulate volatile network conditions, implement noise models on CSI estimates, and evaluate how your adaptive algorithm maintains throughput and accuracy constraints compared to the baseline No-CSI algorithm.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by addressing noisy CSI estimation, demonstrating deep comprehension of the stochastic optimization framework and practical challenges in edge distributed inference.

**Grounded in:** "Channel state information estimation can be noisy and challenging in volatile network environments, potentially affecting performance." and "Stochastic dual descent algorithms with convergence guarantees for unknown and estimated channel state information settings."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, SimPy or custom network simulation

**Data:** Simulate synthetic network channel capacity traces with noise models to mimic volatile edge network conditions as described in the paper.

**Build it:**

1. Study the stochastic dual descent algorithm implementation in https://github.com/neu-spiral/communication-aware-inference.
2. Implement a noise model to simulate volatile and noisy CSI measurements.
3. Modify the stochastic dual descent algorithm to incorporate adaptive noise filtering or robust optimization techniques.
4. Run simulations comparing the baseline No-CSI algorithm and your robust variant under noisy CSI.
5. Analyze throughput and accuracy constraint satisfaction, and plot performance metrics.
6. Document your approach, results, and relation to the paper's limitations and future directions.

**Verified links from the paper:**

- <https://github.com/neu-spiral/communication-aware-inference> — released by the paper's authors
- <https://github.com/neu-spiral/rasp_compression> — released by the paper's authors

**Ships as:** A comprehensive GitHub repository with code, simulation scripts, and detailed analysis demonstrating improved robustness of stochastic dual descent under noisy CSI, with a README connecting to the paper's stated limitations.

**Stretch goal:** Deploy your robust algorithm on the Jetson Orin Nano testbed (https://github.com/neu-spiral/rasp_compression) to validate real-world performance.
