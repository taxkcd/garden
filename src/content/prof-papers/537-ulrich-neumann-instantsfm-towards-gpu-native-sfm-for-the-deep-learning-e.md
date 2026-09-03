---
title: "537 · InstantSfM: Towards GPU-Native SfM for the Deep Learning Era — Ulrich Neumann"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ulrich-neumann"
source_hash: "9f64a4fd47e0230d0bf1c7c901c8db22b8eaef155a65d6d3b87546f55ef03e21"
sequence: 537
generator: "outreach-garden: managed"
---

# 537 · InstantSfM: Towards GPU-Native SfM for the Deep Learning Era

## At a glance

- **Professor:** Ulrich Neumann
- **Institution:** University of Southern California
- **Paper:** [InstantSfM: Towards GPU-Native SfM for the Deep Learning Era](https://doi.org/10.48550/arXiv.2510.13310)
- **Authors:** Jiankun Zhong, Zitong Zhan, Quankai Gao, Ziyu Chen, Haozhe Lou, Jiageng Mao, Ulrich Neumann, Chen Wang, Yue Wang
- **Year:** 2026

## Paper overview

This paper presents InstantSfM, a new Structure-from-Motion (SfM) system designed to run natively on GPUs and integrate seamlessly with deep learning frameworks like PyTorch. InstantSfM improves the speed and robustness of 3D scene reconstruction from images by embedding metric depth information directly into the optimization process and dynamically handling outliers during optimization. It achieves significant speedups over traditional CPU-based SfM systems while maintaining comparable accuracy.

### Why it matters

**Research problem:** Existing SfM systems are largely CPU-centric and rely on traditional optimization toolchains that do not integrate well with modern GPU-based, learning-driven vision pipelines. This leads to inefficiencies and difficulties in incorporating metric depth information and robust outlier handling within a unified, scalable SfM framework.

**Why it matters:** SfM is fundamental for applications like 3D reconstruction, autonomous driving, augmented reality, and neural scene representations. Improving SfM efficiency and robustness on GPUs enables faster, more accurate 3D vision pipelines that can be tightly integrated with deep learning models, benefiting robotics and interactive media applications.

**Key contributions:**

- Development of a depth-constrained sparse Jacobian structure embedding metric depth priors directly into global positioning and bundle adjustment.
- Introduction of dynamic parameter extraction inside the Levenberg-Marquardt loop to maintain numerical stability by compacting active parameters and excluding invalid ones.
- A unified GPU-native SfM system compatible with PyTorch that bridges the gap between traditional SfM and modern deep learning vision pipelines.
- Demonstration of state-of-the-art efficiency with up to ~40× speedup over COLMAP and up to 12× over GLOMAP on large-scale scenes.
- Capability to fuse metric depth in-loop and dynamically handle outliers during optimization.

## About the professor

**Ulrich Neumann** — Professor, Computer Science Department, University of Southern California.

Research interests: video visualization, interactive media, tracking for augmented reality, and human facial modeling, rendering, and animation

### Research links

- [Faculty/profile page](https://cgit.usc.edu/contact/ulrich-neumann)
- [Professor website](http://graphics.usc.edu/cgit/index.php)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Bundle Adjustment and Nonlinear Optimization
**The paper assumes:** nonlinear least squares optimization, bundle adjustment algorithms, sparse Jacobian and Hessian matrix computations
**Already in this field?** Skip this entirely if you have already studied nonlinear optimization methods for computer vision, especially bundle adjustment in SfM contexts.

This background focuses on bundle adjustment and nonlinear optimization, the core techniques underlying the InstantSfM paper's GPU-native SfM pipeline. The rigorous course offers a deep, mathematical foundation in convex optimization and nonlinear least squares methods relevant to bundle adjustment, while the fast track provides a concise, vision-focused introduction to bundle adjustment concepts and their application in 3D reconstruction. Choose the rigorous course for a thorough theoretical understanding, or the fast track for a practical, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 4, 5, 6, 7, and 8 (about 6.5 hours total) — covering Taylor's theorem, least squares regression, implicit function theorem, optimization with equality constraints, and transformation of optimization problems, which together provide the mathematical foundation for bundle adjustment and nonlinear solver stability.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd is a top-tier university course that covers nonlinear optimization fundamentals, including least squares and numerical stability, which are essential to understanding the Levenberg-Marquardt optimization and sparse Jacobian structures used in InstantSfM.

*If you want all of it:* All 18 lectures, about 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [bundleadjustment](https://www.youtube.com/playlist?list=PL_xlYEtxuU_F_v33FDU9OrzNzWKIIy12t) — William Klarquist · 12 videos · 5.2h across the first 9 episodes

**Watch only this:** First 5 episodes (about 2.8 hours total) — including 'EGGN 512 - Lecture 25-1 Bundle Adjust', 'CVFX Lecture 19: Euclidean reconstruction and bundle adjustment', 'Photogrammetry II - 07 - Bundle Adjustment - Part 1', 'Bundle adjustment explained', and 'Computer Vision - Lecture 3.4 (Structure-from-Motion: Bundle Adjustment)' to cover core concepts and practical insights.

*Why it unblocks this paper:* William Klarquist's 'bundleadjustment' playlist offers a concise, visually intuitive series of videos focused specifically on bundle adjustment and its role in 3D reconstruction, directly relevant to the optimization techniques in InstantSfM.

*If you want all of it:* All 9 episodes, about 5.2 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand InstantSfM, start by grounding yourself in the foundational optimization techniques used in SfM, specifically Levenberg-Marquardt optimization, which is central to the paper's dynamic parameter extraction approach. Next, build knowledge on GPU-accelerated computer vision to appreciate the system's native GPU implementation and speed gains. Then, study Structure-from-Motion optimization fundamentals, focusing on bundle adjustment, the core mathematical framework InstantSfM improves upon. Finally, explore the paper's core contribution through the authors' own talk, which provides direct insights into their novel GPU-native SfM pipeline embedding metric depth priors and dynamic outlier handling.

### Levenberg-Marquardt optimization *(prerequisite)*
Levenberg-Marquardt is a key nonlinear least squares solver widely used in bundle adjustment for SfM. Understanding its algorithmic details and how it balances gradient descent and Gauss-Newton methods is essential to grasp how InstantSfM maintains numerical stability with dynamic parameter extraction during optimization.

*How the paper uses it:* InstantSfM uses Levenberg-Marquardt optimization with dynamic parameter extraction to maintain numerical stability despite changing active residuals.

▶ [Levenberg-Marquardt Algorithm](https://www.youtube.com/watch?v=2ToL9zUR8ZI) — Engineering Educator Academy · 57:14 · 5 years ago

### GPU-accelerated computer vision *(prerequisite)*
GPU acceleration principles and architectures underpin the significant speed improvements of InstantSfM. Learning about GPU computational models and memory hierarchies will clarify how InstantSfM achieves native GPU execution and integrates with PyTorch for efficient SfM.

*How the paper uses it:* InstantSfM is designed as a GPU-native SfM pipeline compatible with PyTorch, enabling up to 40× speedup over CPU-based systems.

▶ [Lecture - 12 GPU Acceleration](https://www.youtube.com/watch?v=jYCxVirq4d0) — Deep Learning Systems Course · 44:20 · 3 years ago

### Structure from Motion optimization *(prerequisite)*
Structure-from-Motion pipelines rely heavily on bundle adjustment optimization to reconstruct 3D scenes from images. A thorough understanding of bundle adjustment, observation matrices, and global SfM optimization is critical to appreciate InstantSfM's innovations in embedding depth priors and dynamic outlier handling.

*How the paper uses it:* InstantSfM improves global positioning and bundle adjustment by embedding metric depth priors and dynamically handling outliers during optimization.

▶ [Computer Vision - Lecture 3.4 (Structure-from-Motion: Bundle Adjustment)](https://www.youtube.com/watch?v=MyrVDUnaqUs) — Tübingen Machine Learning · 30:12 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand InstantSfM, start by learning how GPUs accelerate computer vision tasks to grasp why GPU-native processing matters. Then, build intuition on Structure-from-Motion (SfM) and its core optimization technique, bundle adjustment, which is central to 3D reconstruction. Next, study the Levenberg-Marquardt optimization algorithm, as it underpins InstantSfM's dynamic parameter extraction. Finally, explore how embedding metric depth priors improves 3D reconstruction robustness and accuracy, directly relating to InstantSfM's novel contributions.

### GPU-accelerated computer vision *(prerequisite)*
This section introduces how GPUs speed up computer vision computations by exploiting parallelism and specialized memory hierarchies. Understanding GPU acceleration helps appreciate why InstantSfM achieves large speedups over CPU-based SfM systems.

*How the paper uses it:* InstantSfM is designed as a GPU-native SfM system, enabling significant efficiency gains by leveraging GPU architectures.

▶ [Lecture - 12 GPU Acceleration](https://www.youtube.com/watch?v=jYCxVirq4d0) — Deep Learning Systems Course · 44:20 · 3 years ago

### Structure from Motion optimization *(prerequisite)*
Structure-from-Motion reconstructs 3D scenes from images by estimating camera poses and 3D points, with bundle adjustment as the key optimization step refining these estimates jointly. Grasping bundle adjustment is essential to understand how InstantSfM improves global SfM pipelines.

*How the paper uses it:* InstantSfM builds a global SfM pipeline that integrates bundle adjustment tightly on GPUs for fast and robust 3D reconstruction.

▶ [The Basics about Bundle Adjustment (Cyrill Stachniss)](https://www.youtube.com/watch?v=sobyKHwgB0Y) — Cyrill Stachniss · 1:23:12 · 5 years ago

### Levenberg-Marquardt optimization *(prerequisite)*
Levenberg-Marquardt is a nonlinear least squares solver that balances gradient descent and Gauss-Newton methods to efficiently optimize parameters. It is widely used in bundle adjustment to handle nonlinearities and improve convergence.

*How the paper uses it:* InstantSfM uses Levenberg-Marquardt with dynamic parameter extraction to maintain numerical stability during optimization despite changing active residuals.

▶ [Marquardt Method (Levenberg-Marquardt Algorithm) Explained | Nonlinear Optimization & Curve Fitting](https://www.youtube.com/watch?v=6XqYhOrZ-E4) — Laki Academy 🌐 · 23:45 · 1 year ago

### Depth priors in 3D reconstruction *(prerequisite)*
Embedding metric depth priors from RGB-D sensors or learned depth models into 3D reconstruction improves accuracy and robustness by providing scale and geometric constraints beyond pure image correspondences.

*How the paper uses it:* InstantSfM embeds metric depth priors directly into global positioning and bundle adjustment, enhancing reconstruction quality and robustness.

▶ [Predicting 3D Volume and Depth from a Single View](https://www.youtube.com/watch?v=5uMGMZ05LC4) — Microsoft Research · 58:26 · 9 years ago

## Already in your library

- [Feature Attribution | Stanford CS224U Natural Language Understanding | Spring 2021](https://www.youtube.com/watch?v=RFE6xdfJvag) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [Structure from Motion Explained | From Images to 3D Points](https://www.youtube.com/watch?v=1OpidsLpyVA) — also for: Novel 3D Scene Understanding Applications From Recurrence in a Single Image (Robert T. Collins)
- [Stanford Seminar - NVIDIA GPU Computing: A Journey from PC Gaming to Deep Learning](https://www.youtube.com/watch?v=98Xis1W1mMk) — also for: FZModules: A Heterogeneous Computing Framework for Customizable Scientific Data Compression Pipelines (Fengguang Song)
- [Depth Anything V3 (DA3): 3D Reconstruction from Single or Multi Images](https://www.youtube.com/watch?v=INM0sqjRh3Y) — also for: HandMade: Spatial Prompting for Generative 3D Creation with Part-Labeled VR Sketches (Yotam I. Gingold)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying key innovations from InstantSfM. The beginner project focuses on reproducing a core mechanism—depth-constrained Jacobian construction—in a simplified setting using familiar tools. The intermediate project involves reimplementing the core GPU-native bundle adjustment with metric depth priors on a public dataset, comparing against a classical baseline. The advanced project extends InstantSfM by exploring multi-GPU or distributed optimization to address the paper's stated scalability limitation, demonstrating a genuine research extension.

### Beginner — Depth-Constrained Sparse Jacobian Prototype
*Effort: a weekend, ~8 hours*

You build a simplified Python prototype that constructs a sparse Jacobian matrix embedding metric depth constraints for a small synthetic SfM problem. The prototype will demonstrate how depth priors influence the Jacobian structure and affect the optimization setup.

**Why it shows you understood the paper:** This project shows you grasp the paper's key contribution of embedding metric depth priors directly into the sparse Jacobian, a fundamental step in InstantSfM's optimization pipeline.

**Grounded in:** Development of a depth-constrained sparse Jacobian structure embedding metric depth priors directly into global positioning and bundle adjustment.

**Tech stack:** Python 3.11, NumPy, SciPy

**Data:** Synthetic small-scale SfM data with known camera poses and 3D points, plus simulated metric depth values.

**Build it:**

1. Generate a small synthetic SfM dataset with 3 cameras and 10 3D points, including ground-truth depth values.
2. Implement a function to build the sparse Jacobian matrix for reprojection residuals.
3. Extend the Jacobian construction to include depth constraints as additional residuals.
4. Visualize the sparsity pattern and compare Jacobians with and without depth constraints.
5. Write a README explaining how depth priors modify the Jacobian and why this matters for optimization.

**Ships as:** A Python script and README demonstrating sparse Jacobian construction with embedded depth priors on synthetic data, including visualizations.

**Stretch goal:** Add a simple Levenberg-Marquardt solver to optimize camera poses and points using the constructed Jacobian.

### Intermediate — GPU-Native Bundle Adjustment with Depth Priors on ScanNet
*Effort: 2 weekends, ~20 hours*

You reimplement the core InstantSfM bundle adjustment method with depth-constrained sparse Jacobians and dynamic parameter extraction in PyTorch. You run it on a subset of the ScanNet dataset and compare reconstruction accuracy and runtime against a classical CPU-based bundle adjustment baseline (e.g., Ceres Solver).

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's core GPU-native optimization pipeline and validate its benefits on a real-world dataset, reproducing key metrics like pose accuracy and robustness to depth outliers.

**Grounded in:** InstantSfM introduces a GPU-native, PyTorch-compatible global SfM pipeline that embeds metric depth priors into both global positioning and bundle adjustment via a depth-constrained sparse Jacobian structure. It also implements dynamic parameter extraction to remove under-constrained cameras or points during Levenberg-Marquardt optimization, preserving numerical stability despite changing active residuals caused by outlier filtering.

**Tech stack:** Python 3.11, PyTorch, NumPy, Ceres Solver (for baseline comparison)

**Data:** Subset of ScanNet dataset (publicly available RGB-D indoor scenes) used in the paper for evaluation.

**Build it:**

1. Implement sparse Jacobian construction with embedded metric depth priors in PyTorch.
2. Implement dynamic parameter extraction to compact active parameters during optimization.
3. Implement Levenberg-Marquardt optimization loop compatible with the above structures.
4. Run your GPU-native bundle adjustment on a ScanNet subset and record pose accuracy and runtime.
5. Run a classical CPU-based bundle adjustment baseline (e.g., Ceres Solver) on the same data.
6. Compare and report accuracy metrics (e.g., AUC@10) and runtime speedup in a README.

**Verified links from the paper:**

- <https://github.com/ceres-solver/ceres-solver> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/zitongzhan/InstantSfM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A PyTorch-based GPU bundle adjustment implementation with depth priors and dynamic parameter extraction, benchmarked against a classical baseline on ScanNet, with documented results.

**Stretch goal:** Add a unified depth masking scheme to handle partial and invalid depth measurements robustly during optimization.

### Advanced — Distributed GPU Bundle Adjustment for Scalable SfM
*Effort: 3+ weeks*

You design and prototype a distributed or multi-GPU extension of InstantSfM's GPU-native bundle adjustment to overcome single-node memory limitations. This includes partitioning the problem, synchronizing parameter updates, and maintaining numerical stability with dynamic parameter extraction across devices.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the optimization challenges and practical skills in scalable GPU programming and distributed systems.

**Grounded in:** Limitations: Designed for single-node execution, which may limit scalability to extremely large SfM problems due to GPU memory constraints. Future directions: Developing distributed optimization methods to scale SfM beyond single-GPU memory limits.

**Tech stack:** Python 3.11, PyTorch, CUDA, MPI or PyTorch Distributed, NumPy

**Data:** Large-scale SfM data simulated by combining multiple ScanNet scenes or similar RGB-D datasets to exceed single GPU memory.

**Build it:**

1. Design a scheme to partition the bundle adjustment problem across multiple GPUs or nodes.
2. Implement distributed sparse Jacobian construction and parameter extraction with synchronization.
3. Adapt the Levenberg-Marquardt optimization loop to work in a distributed setting.
4. Test numerical stability and convergence on synthetic large-scale SfM data.
5. Benchmark scalability and runtime improvements compared to single-GPU implementation.
6. Document challenges encountered and solutions for maintaining numerical stability.

**Verified links from the paper:**

- <https://github.com/zitongzhan/InstantSfM> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A prototype distributed GPU bundle adjustment system with documented scalability experiments and analysis of numerical stability.

**Stretch goal:** Integrate the distributed system with a neural reconstruction pipeline to demonstrate end-to-end GPU-native SfM in a multi-GPU environment.
