---
title: "506 · Learning 3D Reconstruction with Priors in Test Time — Akshat Dave"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-akshat-dave"
source_hash: "da7dfaa68962021bfbf4e86193baa50ae8aac74309d049baa19fadb3e86b12ee"
sequence: 506
generator: "outreach-garden: managed"
---

# 506 · Learning 3D Reconstruction with Priors in Test Time

## At a glance

- **Professor:** Akshat Dave
- **Institution:** Stony Brook University
- **Paper:** [Learning 3D Reconstruction with Priors in Test Time](https://arxiv.org/pdf/2604.03878)
- **Authors:** Lei Zhou, Haoyu Wu, Akshat Dave, Dimitris Samaras
- **Year:** 2026

## Paper overview

This paper presents a novel method to improve 3D reconstruction from images by incorporating additional information like camera poses and depth maps during test time without retraining the model. The approach treats these extra inputs as constraints and optimizes the model's predictions at inference, leading to better 3D geometry estimation across various datasets.

### Why it matters

**Research problem:** Existing multiview transformer (MVT) models for 3D reconstruction are limited to RGB images and require retraining to incorporate additional priors such as camera poses or depth maps, which is inflexible and computationally expensive.

**Why it matters:** 3D reconstruction is fundamental for applications like autonomous driving, augmented reality, and robotics. Leveraging available priors without retraining can make models more adaptable and practical in real-world scenarios where extra information is often available.

**Key contributions:**

- A test-time constrained optimization framework that incorporates scene and camera priors without retraining or architectural changes.
- A loss design combining a self-supervised objective enforcing multi-view prediction compatibility and prior penalty terms.
- Extensive evaluations on multiple 3D reconstruction benchmarks demonstrating consistent large-margin improvements over base MVTs and surpassing prior-aware feed-forward methods.
- A fine-tuning strategy that adapts only the shared decoder network to exploit synergy among different prediction tasks.

## About the professor

**Akshat Dave** — Assistant Professor, Department of Computer Science, Stony Brook University.

Research interests: Computer Vision, Computational Imaging, Physics-aware AI, Machine Learning, Computer Graphics, Biomedical Imaging, Robot Perception

### Research links

- [Faculty/profile page](https://ai.stonybrook.edu/people/faculty/akshat-dave)
- [Professor website](https://akshatdave.github.io)
- [Resolved homepage](https://akshatdave.github.io/)
- [Lab website](https://photonintelligence.org/)
- [Google Scholar](https://scholar.google.com/citations?user=mMnHusUAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D Computer Vision and Multiview Geometry
**The paper assumes:** multiview geometry, 3D reconstruction fundamentals, camera pose estimation, depth map interpretation
**Already in this field?** Skip this entirely if you already understand the basics of 3D computer vision, camera geometry, and multiview reconstruction methods.

To understand the paper's approach to improving 3D reconstruction with test-time priors, a solid grasp of 3D computer vision and multiview geometry is essential. The rigorous course offers a comprehensive, university-level deep dive into these foundational topics, while the fast track provides a shorter, focused series that covers the key concepts efficiently. Choose the rigorous course for depth and completeness, or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [3D Computer Vision | National University of Singapore](https://www.youtube.com/playlist?list=PLxg0CGqViygP47ERvqHw_v7FVnUovJeaz) — CVRP Lab at NUS · 39 videos · 33.4h across 39 episodes

**Watch only this:** Lectures 1 (Parts 1 & 2), 2 (Parts 1 & 2), 3 (Parts 1-3), 4 (Parts 1 & 2), 5 (Parts 1-3), 6 (Parts 1-3), 7 (Parts 1-4), 8 (Parts 1-3), and 9 (Parts 1 & 2), about 16.5 hours total — covering projective geometry, camera calibration, pose estimation, and multiview geometry essential for understanding the paper's framework.

*Why it unblocks this paper:* This National University of Singapore course on 3D Computer Vision covers fundamental and advanced topics in projective geometry, camera models, pose estimation, and multiview reconstruction, directly underpinning the paper's use of multiview transformers and test-time optimization with camera and depth priors.

*If you want all of it:* 33.4 hours across all 39 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multiple View Geometry in Computer Vision](https://www.youtube.com/playlist?list=PLyH-5mHPFffFvCCZcbdWXAb_cTy4ZG3Dj) — Sean Mullery · 20 videos · 18.6h across 20 episodes

**Watch only this:** Lectures 1a, 1b, 2a, 2b, 2c, 3a, 3b, 3c, 3d, 4a, 4b, 5, 6a, 6b, 7a, and 7b, about 15.5 hours total — covering image processing basics, geometric transformations, camera modeling, epipolar geometry, and multiview reconstruction.

*Why it unblocks this paper:* Sean Mullery's 'Multiple View Geometry in Computer Vision' playlist offers a concise, well-structured introduction to the core concepts of multiview geometry, camera modeling, and reconstruction, providing a solid conceptual foundation in under 20 hours.

*If you want all of it:* 18.6 hours across all 20 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Learning 3D Reconstruction with Priors in Test Time," start by building a foundation on multiview 3D reconstruction and the role of priors in computer vision, as these are the core domains the paper builds upon. Next, grasp the concept of test-time optimization in deep learning, which is central to the paper's novel framework. Finally, focus on the paper's core contribution by watching the authors' own seminar talk that directly addresses their test-time constrained optimization framework for 3D reconstruction.

### Multiview 3D reconstruction *(prerequisite)*
Understanding multiview 3D reconstruction is essential as the paper improves upon multiview transformer models for reconstructing 3D geometry from multiple images. This foundational knowledge covers camera calibration, scene structure estimation, and challenges in multi-view setups.

*How the paper uses it:* The paper targets improving multiview transformer models for 3D reconstruction by incorporating priors at test time.

▶ [Computer Vision - Lecture 6.2 (Applications of Graphical Models: Multi-View Reconstruction)](https://www.youtube.com/watch?v=fW8WHFf9qoc) — Tübingen Machine Learning · 37:01 · 5 years ago

### Incorporating priors in computer vision *(prerequisite)*
Incorporating priors such as camera poses and depth maps is a key innovation in the paper. This section provides background on how prior knowledge and contextual information have been integrated into vision systems to improve performance and robustness.

*How the paper uses it:* The paper's main contribution is leveraging priors like camera poses and depth maps during inference without retraining.

▶ [Prior, Context and Interactive Computer Vision](https://www.youtube.com/watch?v=fWwy2gZuD6E) — CITRIS and the Banatao Institute · 1:01:05 · 18 years ago

### Test-time optimization in deep learning *(prerequisite)*
Test-time optimization involves updating model parameters during inference to adapt to new data or constraints. Understanding this concept is crucial to grasp how the paper's Test-time Constrained Optimization (TCO) framework works to improve 3D reconstruction without retraining.

*How the paper uses it:* The TCO framework optimizes the model at inference time using constraints from priors and self-supervised objectives.

▶ [Test-Time Training with Self-Supervision for Generalization under Distribution Shifts](https://www.youtube.com/watch?v=NbuWxmMco30) — Yu Sun · 16:59 · 6 years ago

### Learning 3D Reconstruction with Priors in Test Time *(the paper's own talk)*
This section features the authors' own talk, providing direct insights into their novel test-time constrained optimization framework. It covers their approach, experimental results, and the significance of incorporating priors without retraining, offering the most precise and comprehensive understanding of the paper.

*How the paper uses it:* This is the authors' own seminar talk explaining their proposed TCO framework for 3D reconstruction with priors at test time.

▶ [Chen-Hsuan Lin - Learning 3D Registration and Reconstruction from the Visual World](https://www.youtube.com/watch?v=xR_tCdNRHpo) — Vision & Graphics Seminar at MIT · 59:01 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on improving 3D reconstruction with test-time priors, start by learning the basics of multiview 3D reconstruction, which is the core problem domain. Next, grasp how priors are incorporated in computer vision to improve predictions. Then, build intuition on test-time optimization in deep learning, which is the key technique enabling the paper's method. Finally, explore the specific multiview transformer architectures used as base models in the paper. This progression ensures a solid foundation before tackling the paper's novel test-time constrained optimization framework.

### Multiview 3D reconstruction *(prerequisite)*
Multiview 3D reconstruction is the process of estimating the 3D shape of a scene or object by combining information from multiple images taken from different viewpoints. Understanding this helps you grasp the fundamental challenge the paper addresses: how to accurately reconstruct 3D geometry from images.

*How the paper uses it:* The paper improves 3D reconstruction quality by optimizing predictions from multiview images using additional priors at test time.

▶ [Robust Multiview Reconstruction](https://www.youtube.com/watch?v=Zwwty2qPNs8) — Microsoft Research · 1:04:09 · 9 years ago

### Incorporating priors in computer vision *(prerequisite)*
Priors are additional knowledge or constraints, such as camera poses or depth maps, that guide computer vision models to make better predictions. Learning how priors are used helps understand why incorporating them without retraining is valuable.

*How the paper uses it:* The paper’s main contribution is leveraging priors like camera poses and depth maps during inference to improve reconstruction without retraining.

▶ [Prior, Context and Interactive Computer Vision](https://www.youtube.com/watch?v=fWwy2gZuD6E) — CITRIS and the Banatao Institute · 1:01:05 · 18 years ago

### Test-time optimization in deep learning *(prerequisite)*
Test-time optimization involves updating or fine-tuning a model’s parameters during inference using the test data itself, often with self-supervised objectives. This technique allows models to adapt dynamically without full retraining.

*How the paper uses it:* The paper’s Test-time Constrained Optimization (TCO) framework optimizes the model at inference to incorporate priors and improve 3D reconstruction.

▶ [Test-Time Training with Self-Supervision for Generalization under Distribution Shifts](https://www.youtube.com/watch?v=NbuWxmMco30) — Yu Sun · 16:59 · 6 years ago

### Multiview transformers for 3D reconstruction *(prerequisite)*
Multiview transformers are neural network architectures that process multiple images jointly to predict 3D structure. Understanding these models provides context for the base architectures the paper improves with test-time optimization.

*How the paper uses it:* The paper builds upon and improves base multiview transformer models by incorporating priors at test time without retraining.

▶ [Déjà View: Looping Transformers for Multi-View 3D Reconstruction [GeonU Kim]](https://www.youtube.com/watch?v=qCUAcFJrFc4) — AMI Lab @ KAIST (PI: Prof. Tae-Hyun Oh) · 24:32 · 1 month ago

## Already in your library

- [Depth Anything V3 (DA3): 3D Reconstruction from Single or Multi Images](https://www.youtube.com/watch?v=INM0sqjRh3Y) — also for: HandMade: Spatial Prompting for Generative 3D Creation with Part-Labeled VR Sketches (Yotam I. Gingold)
- [Stanford CS329A Self-Improving AI Agents | Part 2 | Test-Time Compute Scaling](https://www.youtube.com/watch?v=-Ggc37xLj_Y) — also for: P RISM: Efficient Test-Time Scaling via Hierarchical Search and Self-Verification for Discrete Diffusion Language Models (Molei Tao)
- [ICCV 2023 Tutorial: Test-time Adaptation: Formulations ...](https://www.youtube.com/watch?v=l584yXZfYx4) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [4: Deep Learning for Computer Vision – Transfer Learning and Fine-Tuning; Intro to HuggingFace](https://www.youtube.com/watch?v=8xh7Y0pBrCE) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Constrained Optimization: Intuition behind the Lagrangian](https://www.youtube.com/watch?v=GR4ff0dTLTw) — also for: Inferring Implicit Trait Preferences for Task Allocation in Heterogeneous Teams (Harish Chaandar Ravichandar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper "Learning 3D Reconstruction with Priors in Test Time." The beginner project focuses on reproducing a core mechanism of the test-time constrained optimization (TCO) framework using familiar tools. The intermediate project involves implementing the TCO method on a smaller 3D reconstruction dataset and comparing it to a baseline. The advanced project extends the method to address the paper's limitation of high inference latency by exploring more efficient optimization strategies.

### Beginner — Test-Time Optimization for Multi-View 3D Reconstruction Demo
*Effort: a weekend, ~8 hours*

You build a simplified demo that implements the core idea of test-time constrained optimization by fine-tuning a small neural network decoder on synthetic multi-view RGB images with simulated camera pose priors. The demo will optimize the decoder at inference to improve 3D reconstruction quality without retraining the entire model.

**Why it shows you understood the paper:** This project shows you understand the paper's key contribution of test-time optimization using priors without retraining the full model, and the importance of freezing task-specific heads while fine-tuning the shared decoder.

**Grounded in:** The authors propose a Test-time Constrained Optimization (TCO) framework that treats priors as constraints on the model's outputs and optimizes the network at inference time using a loss combining prior penalty terms and a self-supervised objective enforcing multi-view prediction compatibility.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy

**Data:** Synthetic multi-view RGB images with simulated camera poses generated programmatically to mimic a small 3D scene.

**Build it:**

1. Generate or load a small synthetic multi-view RGB dataset with known camera poses.
2. Implement a simple neural network decoder that predicts 3D geometry representations from image features.
3. Define a loss function combining a self-supervised multi-view consistency term and a prior penalty term using camera poses.
4. Implement test-time optimization that fine-tunes only the decoder weights while freezing other parts of the model.
5. Run inference with and without test-time optimization and compare reconstruction quality visually and via a simple error metric.

**Ships as:** A Jupyter notebook and Python scripts demonstrating test-time optimization improving 3D reconstruction on synthetic data, with plots and visualizations.

**Stretch goal:** Add differentiable rendering to better simulate the prior penalty term as in the paper.

### Intermediate — Reimplementation of Test-Time Constrained Optimization on ETH3D Subset
*Effort: 2 weekends, ~20 hours*

You implement the core TCO framework described in the paper and apply it to a publicly available subset of the ETH3D dataset, comparing your results against a baseline multiview transformer model that uses only RGB images. You will fine-tune only the shared decoder at test time using camera pose priors and evaluate point-map distance error.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method from scratch, apply it to a real benchmark dataset, and reproduce key quantitative improvements, showing deep comprehension of the TCO framework and its evaluation.

**Grounded in:** On ETH3D, 7-Scenes, NRGBD, and DTU datasets, TCO reduces point-map distance error by more than half compared to base image-only models.

**Tech stack:** Python 3.11, PyTorch, NumPy, Open3D or similar for 3D point cloud processing

**Data:** ETH3D dataset (publicly available) used as a substitute for the paper's ETH3D benchmark evaluation.

**Build it:**

1. Download and preprocess a subset of the ETH3D dataset with RGB images and camera poses.
2. Implement a baseline multiview transformer model or use a lightweight proxy model for 3D reconstruction from RGB only.
3. Implement the test-time constrained optimization framework: define the combined loss with prior penalty and multi-view compatibility.
4. Fine-tune only the shared decoder network at test time using LoRA or a similar low-rank adaptation technique.
5. Evaluate and compare point-map distance error before and after TCO, and visualize qualitative improvements.

**Ships as:** A GitHub repository with code to run TCO on ETH3D subset, scripts for evaluation, and a README documenting quantitative and qualitative results.

**Stretch goal:** Incorporate depth map priors in addition to camera poses and analyze their impact.

### Advanced — Efficient Test-Time Optimization for 3D Reconstruction with Noisy Priors
*Effort: 3+ weeks*

You develop an extension of the TCO framework that addresses the paper's limitation of high inference latency by exploring more efficient optimization methods such as gradient checkpointing, early stopping, or meta-learning to speed up test-time fine-tuning. Additionally, you investigate robustness to noisy camera pose priors by simulating noise and evaluating performance degradation.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, proposing and implementing concrete improvements to the TCO framework that have practical impact on inference speed and robustness.

**Grounded in:** Test-time optimization increases inference latency significantly (e.g., from ~1.3s to up to ~161s per scene). Performance deteriorates with increased noise in camera pose and intrinsic priors, though still better than base models. Exploring more efficient test-time optimization methods to reduce inference time and investigating robustness to noisy priors are future directions.

**Tech stack:** Python 3.11, PyTorch, NumPy, Optuna or similar for hyperparameter tuning

**Data:** ETH3D or 7-Scenes dataset used to evaluate efficiency and robustness under noisy priors.

**Build it:**

1. Reimplement or reuse the TCO framework baseline on a chosen dataset (ETH3D or 7-Scenes).
2. Implement optimization speed-up techniques such as gradient checkpointing, early stopping, or meta-learning-based initialization for test-time fine-tuning.
3. Simulate noise in camera pose and intrinsic priors to evaluate robustness.
4. Benchmark inference time and reconstruction quality with and without the proposed efficiency improvements under varying noise levels.
5. Document trade-offs between speed, accuracy, and robustness in a detailed report.

**Ships as:** A GitHub repository with code implementing efficient TCO, scripts for robustness evaluation, and a comprehensive README discussing results and limitations.

**Stretch goal:** Extend the framework to incorporate additional priors from biomedical imaging modalities as suggested by the paper's future directions.

_The authors released no code or datasets for this paper; all projects require reimplementation from the paper's descriptions and use publicly available datasets such as ETH3D as substitutes._
