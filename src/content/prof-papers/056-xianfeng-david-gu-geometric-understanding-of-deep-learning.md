---
title: "056 · Geometric Understanding of Deep Learning — Xianfeng David Gu"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xianfeng-david-gu"
source_hash: "89934e3c1264f1a84742da89e1bdf0e0d51a3dcbcee0fddf8aedab6686f7756c"
sequence: 56
generator: "outreach-garden: managed"
---

# 056 · Geometric Understanding of Deep Learning

## At a glance

- **Professor:** Xianfeng David Gu
- **Institution:** Stony Brook University
- **Paper:** [Geometric Understanding of Deep Learning](https://doi.org/10.1016/j.eng.2019.09.010)
- **Authors:** Na Lei, Zhongxuan Luo, Shing-Tung Yau, David Xianfeng Gu
- **Year:** 2018

## Paper overview

This paper provides a geometric framework to understand why deep learning works well, focusing on the idea that natural high-dimensional data lies near low-dimensional manifolds. It introduces new concepts to measure how well deep neural networks can learn these manifolds and proposes using optimal mass transportation theory to control probability distributions in the latent space, improving generative models.

### Why it matters

**Research problem:** Understanding the theoretical foundations of deep learning, specifically how deep neural networks learn data manifolds and the limitations of their learning capabilities.

**Why it matters:** Deep learning has achieved great success but lacks a clear theoretical understanding, which is crucial for improving models, avoiding failures, and guiding future research.

**Key contributions:**

- Proposed a geometric framework interpreting deep learning as learning manifolds and their probability distributions.
- Introduced rectified linear complexity to measure the learning capacity of ReLU deep neural networks and the complexity of embedded manifolds.
- Proved that for any fixed neural network architecture, there exist manifolds too complex to be encoded by it.
- Applied optimal mass transportation theory to control latent space distributions, offering a mathematically explicit alternative to adversarial training.
- Demonstrated applications such as generative modeling and image denoising using the learned manifolds.

## About the professor

**Xianfeng David Gu** — SUNY Empire Innovation Professor, Department of Computer Science, Department of Applied Mathematics, Stony Brook University.

Research interests: Optimal transportation, Explainable AI, 3D Vision, Computational Conformal Geometry

### Research links

- [Faculty/profile page](http://www3.cs.stonybrook.edu/~gu)
- [Professor website](http://www.cs.stonybrook.edu/~gu)
- [Lab website](http://www3.cs.stonybrook.edu/~gu/software/holoimage/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=Y063_CIAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Geometric measure theory
**The paper assumes:** manifold theory, measure theory on manifolds, geometric complexity, and optimal transport theory
**Already in this field?** Skip this entirely if you already have a solid understanding of manifolds, measure theory, and optimal transport in the context of machine learning or applied geometry.

This background focuses on geometric measure theory, which is essential for understanding the geometric and measure-theoretic foundations underlying the paper's framework on deep learning and manifolds. The rigorous course offers a deep, structured university-level introduction to functional analysis and measure theory concepts relevant to manifolds and measures, while the fast track provides a concise, graduate-level introduction to geometric measure theory with a focus on key concepts and theorems. Choose the rigorous course for a thorough mathematical foundation, or the fast track for a quicker, intuition-driven overview that still covers the core ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.102 Introduction to Functional Analysis, Spring 2021](https://www.youtube.com/playlist?list=PLUl4u3cNGP63micsJp_--fRAjZXPrQzW_) — MIT OpenCourseWare · 23 videos · 30.3h across 23 episodes

**Watch only this:** Lectures 6 to 13 (The Double Dual and the Outer Measure of a Subset of Real Numbers through Basic Hilbert Space Theory), about 6.5 hours — these cover outer measure, sigma algebras, Lebesgue measure, measurable functions, and Lp spaces relevant to geometric measure theory.

*Why it unblocks this paper:* MIT 18.102 Introduction to Functional Analysis covers measure theory, sigma algebras, Lebesgue measure, and integration, which are foundational for understanding the geometric and measure-theoretic aspects of manifolds and complexity measures used in the paper.

*If you want all of it:* 30.3 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Geometric Measure Theory](https://www.youtube.com/playlist?list=PLp0TNqYe2DSEA8r9xYJnJCibS1pN-NQq3) — snyggification · 51 videos · 11.0h across 51 episodes

**Watch only this:** Episodes 1 to 12 (Measures through Frostman Measures), about 2.5 hours — these cover the foundational measure concepts, covering lemmas, and Hausdorff measure and dimension, which are crucial for understanding manifold structures in the paper.

*Why it unblocks this paper:* The Geometric Measure Theory playlist by snyggification provides a focused graduate-level introduction to the interplay between geometry and measure, covering key concepts like Hausdorff measure, dimension, and covering theorems that directly relate to the paper's use of manifold complexity and measure.

*If you want all of it:* 11.0 hours across 51 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Geometric Understanding of Deep Learning,' start by grounding yourself in the key mathematical foundations that the paper builds upon: manifold learning, ReLU network complexity, autoencoder theory, and optimal mass transportation theory. These prerequisites provide the necessary background on data geometry, network capacity, and latent space control. Finally, engage with the authors' own talk and related advanced seminars on geometric deep learning to directly connect these concepts to the paper's novel geometric framework and theoretical contributions.

### Manifold Learning in Deep Networks *(prerequisite)*
Manifold learning is the core idea that natural high-dimensional data lies near low-dimensional manifolds, which is the foundational assumption of the paper. Understanding manifold learning techniques and their role in deep networks is essential to grasp how the paper models data geometry.

*How the paper uses it:* The paper models data as lying on low-dimensional manifolds and analyzes how deep networks learn these structures.

▶ [Deep Learning Weekly (IV) - Neural Networks, Manifolds, and Topology - Aidos Adilkhanov](https://www.youtube.com/watch?v=AIJORyWzm_k) — DSMLKZ - Data Science Kazakhstan · 7 years ago

### Rectified Linear Unit Network Complexity *(prerequisite)*
The paper introduces 'rectified linear complexity' to quantify the capacity of ReLU networks. A rigorous understanding of ReLU activations and their piecewise linear properties is crucial to appreciate the complexity bounds and limitations discussed.

*How the paper uses it:* Rectified linear complexity measures the learning capacity of ReLU deep neural networks, a key contribution of the paper.

▶ [Network of ReLUs](https://www.youtube.com/watch?v=Opg63pan_YQ) — Udacity · 10 years ago

### Optimal Mass Transportation Theory *(prerequisite)*
Optimal mass transportation theory provides the mathematical foundation for controlling probability distributions in the latent space, a novel approach proposed by the paper. Familiarity with this theory is necessary to understand the paper's alternative to adversarial training in generative modeling.

*How the paper uses it:* The paper applies optimal mass transportation theory to explicitly control latent space distributions in generative models.

▶ [Science Café - Optimal Mass Transportation Theory and its Applications](https://www.youtube.com/watch?v=pboyXOFMgCY) — Carleton University · 11 years ago

### Autoencoder Architectures and Theory *(prerequisite)*
Since the paper's framework primarily applies to autoencoders with ReLU activations, understanding autoencoder architectures and their theoretical underpinnings is essential. This knowledge helps contextualize the paper's analysis of encoding maps and manifold learning.

*How the paper uses it:* The paper analyzes autoencoders as learning piecewise linear approximations of data manifolds using ReLU activations.

▶ [Lecture 19 | Representations and Autoencoders](https://www.youtube.com/watch?v=gs8vT4pdbUs) — Carnegie Mellon University Deep Learning · 6 years ago

### Paper Author Talk *(the paper's own talk)*
The authors' own talk provides direct insight into their geometric framework, theoretical results, and applications. It offers the most precise and authoritative exposition of the paper's contributions and open problems.

*How the paper uses it:* This talk by Govind Menon at the Fields Institute closely aligns with the paper's geometric theory of deep learning.

▶ [Towards a geometric theory of deep learning](https://www.youtube.com/watch?v=53eKo-lNgQc) — Fields Institute · 1:02:54 · 4 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational ideas behind the paper, starting with the concept that high-dimensional data lies near low-dimensional manifolds, then explaining the role of ReLU networks and their complexity in learning these manifolds. Next, it covers optimal mass transportation theory to understand how latent space distributions can be controlled, followed by an introduction to autoencoders as the primary architecture studied. Finally, it culminates with the geometric framework that interprets deep learning as manifold learning, tying all concepts together.

### Manifold Learning in Deep Networks *(prerequisite)*
Manifold learning is the idea that high-dimensional data often lies close to a lower-dimensional surface (manifold) embedded in the high-dimensional space. Understanding this helps explain why deep learning models can generalize well by effectively learning these underlying structures.

*How the paper uses it:* The paper builds on the principle that natural high-dimensional data concentrates near low-dimensional manifolds.

▶ [Dimensionality Reduction Techniques | Introduction and Manifold Learning (1/5)](https://www.youtube.com/watch?v=jc1_yPYmspk) — DeepFindr · 2 years ago

### Rectified Linear Unit Network Complexity *(prerequisite)*
ReLU (Rectified Linear Unit) is a popular activation function in deep networks that creates piecewise linear functions. Understanding how the number of linear pieces relates to network capacity helps quantify how complex a function a ReLU network can learn.

*How the paper uses it:* The paper introduces 'rectified linear complexity' to measure the learning capacity of ReLU networks.

▶ [Neural Networks Pt. 3: ReLU In Action!!!](https://www.youtube.com/watch?v=68BZ5f7P94E) — StatQuest with Josh Starmer · 8:58 · 5 years ago

### Optimal Mass Transportation Theory *(prerequisite)*
Optimal mass transportation theory studies how to transform one probability distribution into another in the most efficient way. This mathematical framework helps control distributions in the latent space of generative models, improving their quality and stability.

*How the paper uses it:* The authors apply optimal mass transportation theory to explicitly control latent space distributions in generative modeling.

▶ [Wasserstein Distance & Optimal Transport — Fully Explained](https://www.youtube.com/watch?v=88ONbF_b3VE) — The Synthetic Mind · 6 months ago

### Autoencoder Architectures and Theory *(prerequisite)*
Autoencoders are neural networks trained to compress data into a lower-dimensional latent space and then reconstruct it. They are central to the paper's framework for learning manifolds and analyzing network capacity.

*How the paper uses it:* The framework primarily applies to autoencoders with ReLU activations as the model for learning data manifolds.

▶ [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — Deepia · 2 years ago

### Geometric Framework for Deep Learning
This concept interprets deep learning as learning the geometry and topology of data manifolds, providing a theoretical foundation for why deep networks work well and their limitations. It ties together manifold learning, network complexity, and latent space control.

*How the paper uses it:* The paper proposes a geometric framework interpreting deep learning as learning manifolds and their probability distributions.

▶ [Foundations of Geometric Deep Learning](https://www.youtube.com/watch?v=_-r4AdEecuw) — AI Research Roundup · 4:29 · 11 months ago

## Already in your library

- [A Geometric Understanding of Deep Learning](https://www.youtube.com/watch?v=OEQua1WASyM) — also for: Geometric Understanding of Deep Learning (Xianfeng David Gu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper "Geometric Understanding of Deep Learning." The beginner project focuses on visualizing and computing rectified linear complexity for simple ReLU networks and manifolds, the intermediate project implements a simplified Autoencoder-Optimal Mass Transportation (AE-OMT) model on MNIST to reproduce core generative modeling results, and the advanced project extends the framework by exploring architectural or training modifications to overcome topological constraints for encoding complex manifolds, addressing a key limitation and future direction of the paper.

### Beginner — Visualizing Rectified Linear Complexity of ReLU Networks
*Effort: a weekend, ~8 hours*

You build a small Python notebook that constructs simple ReLU networks with varying architectures and visualizes their piecewise linear function approximations on 2D synthetic manifolds (e.g., curves or surfaces). You compute and plot the upper bound on the number of linear pieces (rectified linear complexity) as a function of network depth and width, illustrating the paper's complexity metric.

**Why it shows you understood the paper:** This project concretely demonstrates the concept of rectified linear complexity and its dependence on network architecture, showing you grasp the paper's key theoretical contribution linking ReLU network capacity to manifold complexity.

**Grounded in:** Introduced rectified linear complexity to measure DNN learning capacity.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D manifolds such as parametric curves or surfaces generated in code; no external dataset needed.

**Build it:**

1. Implement a simple ReLU network function that partitions input space into linear regions.
2. Generate synthetic 2D manifold data (e.g., a sine curve or a spiral).
3. Calculate the theoretical upper bound of linear pieces for given network architectures.
4. Visualize the piecewise linear approximations of the network on the manifold.
5. Plot how complexity scales with network depth and width.

**Ships as:** A Jupyter notebook with visualizations and calculations showing rectified linear complexity for simple ReLU networks approximating 2D manifolds.

**Stretch goal:** Add interactive widgets to vary network parameters and see real-time complexity changes.

### Intermediate — Reimplementing AE-OMT Generative Model on MNIST
*Effort: 2 weekends, ~20 hours*

You implement an autoencoder combined with an optimal mass transportation (OMT) map in the latent space to generate MNIST digit images. You train the autoencoder with ReLU activations, then learn the OMT map to transform a simple latent distribution (e.g., Gaussian) to the encoded data distribution, reproducing the paper's core generative modeling approach and comparing image quality to a vanilla VAE baseline.

**Why it shows you understood the paper:** This project shows you understand the paper's novel application of optimal mass transportation theory to control latent space distributions explicitly, and how this improves generative modeling beyond standard methods.

**Grounded in:** Developed an Autoencoder-Optimal Mass Transportation (AE-OMT) model that generates higher quality images than VAE and WGAN on MNIST and CelebA datasets.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** MNIST handwritten digits dataset, a well-known public dataset used as a substitute for the paper's experiments.

**Build it:**

1. Implement a ReLU-based autoencoder architecture and train it on MNIST.
2. Encode the training data into the latent space using the trained encoder.
3. Implement an optimal mass transportation algorithm (e.g., Sinkhorn iterations) to learn the transport map from a Gaussian latent prior to the encoded data distribution.
4. Generate new samples by applying the transport map to Gaussian samples and decoding them.
5. Compare generated images qualitatively and quantitatively (e.g., reconstruction error, visual fidelity) against a vanilla VAE baseline.

**Ships as:** A PyTorch project with training scripts, generation code, and a report comparing AE-OMT generated images to VAE outputs on MNIST.

**Stretch goal:** Extend the model to CelebA dataset or implement Wasserstein distance metrics for evaluation.

### Advanced — Overcoming Topological Constraints in ReLU Autoencoders
*Effort: 3+ weeks*

You design and experiment with modified autoencoder architectures or training methods to encode data manifolds with complex topologies beyond genus-zero surfaces, addressing the paper's limitation on topological constraints. This may include incorporating skip connections, multiple latent charts, or topological regularization. You evaluate encoding quality on synthetic manifolds with known complex topology and analyze how architectural changes affect the rectified linear complexity and encoding fidelity.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the geometric and topological challenges in deep learning manifold encoding and proposing concrete engineering solutions.

**Grounded in:** Topological constraints limit the types of manifolds that can be encoded, restricting applicability to complex data topologies.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic datasets representing manifolds with complex topology (e.g., torus, double torus) generated programmatically.

**Build it:**

1. Generate synthetic datasets representing manifolds with complex topologies (e.g., torus).
2. Implement baseline ReLU autoencoder and measure encoding quality and topological preservation.
3. Design architectural modifications (e.g., multi-chart latent spaces, skip connections) or training regularizers to relax topological constraints.
4. Train modified autoencoders and evaluate improvements in encoding fidelity and topological correctness.
5. Analyze how changes affect rectified linear complexity and discuss implications.

**Ships as:** A research-style report and codebase demonstrating attempts to overcome topological constraints in ReLU autoencoders with experimental results on synthetic complex manifolds.

**Stretch goal:** Apply the approach to real-world datasets with complex topology or explore integration with optimal mass transportation for latent space control.
