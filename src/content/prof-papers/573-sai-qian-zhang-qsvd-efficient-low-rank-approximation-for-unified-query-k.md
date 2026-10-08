---
title: "573 · QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models — Sai Qian Zhang"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sai-qian-zhang"
source_hash: "b0ad56d340207ed584b5e5c76f2f8b515940ec73069b51f2b5d22c3fd65b40c9"
sequence: 573
generator: "outreach-garden: managed"
---

# 573 · QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models

## At a glance

- **Professor:** Sai Qian Zhang
- **Institution:** New York University
- **Paper:** [QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models](https://arxiv.org/pdf/2510.16292)
- **Authors:** Yutong Wang, Haiyu Wang, Sai Qian Zhang
- **Year:** 2025

## Paper overview

This paper introduces QSVD, a method that compresses vision-language models by applying singular value decomposition (SVD) jointly on the query, key, and value weight matrices, combined with quantization techniques. This reduces the memory and computational costs significantly while maintaining or even improving model accuracy, enabling efficient real-time deployment on devices with limited resources.

### Why it matters

**Research problem:** Vision-Language Models (VLMs) have large memory footprints and high computational costs, especially due to the large Key-Value (KV) cache and multi-head attention computations, which limit their scalability and real-time use on resource-constrained devices.

**Why it matters:** Reducing the computational and memory overhead of VLMs is essential for deploying these powerful models in latency-sensitive and resource-limited environments such as mobile devices or embedded systems, broadening their practical applicability.

**Key contributions:**

- Joint SVD on combined QKV weight matrices to reduce parameter size, KV cache, and computation.
- Novel importance scoring method for singular values to guide adaptive rank truncation minimizing accuracy loss.
- Integration of quantization with SVD, including outlier smoothing and learnable parameters, for efficient low-precision VLM inference.
- Open-sourcing the QSVD codebase for community use.

## About the professor

**Sai Qian Zhang** — Assistant Professor, Electrical and Computer Engineering, New York University.

Research interests: Efficient AI Algorithm, AR/VR Computing, Neural Network Accelerator Design

### Research links

- [Faculty/profile page](https://engineering.nyu.edu/faculty/sai-qian-zhang)
- [Identity evidence](https://www.saiqianzhang.com)
- [Identity evidence](https://vlsiarch.eecs.harvard.edu/people/sai-qian-zhang)
- [Professor website](https://www.saiqianzhang.com/Lab/)
- [Resolved homepage](https://www.saiqianzhang.com/)
- [Google Scholar](https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=kcCZkTwAAAAJ)
- [ORCID](https://orcid.org/0000-0002-4815-9235)
- [DBLP](https://dblp.org/pid/164/7945.html)
- [GitHub](https://github.com/SAI-Lab-NYU/)
- [LinkedIn](https://www.linkedin.com/in/sai-qian-zhang-713214b5/)
- [Social profile](https://x.com/SaiZhang98278)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Singular Value Decomposition
**The paper assumes:** linear algebra matrix factorization singular value decomposition low-rank approximation
**Already in this field?** Skip this entirely if you already understand matrix decompositions and singular value decomposition in linear algebra.

To understand the QSVD paper's core method of joint singular value decomposition (SVD) on concatenated query, key, and value matrices, a solid grasp of SVD fundamentals is essential. The rigorous course option offers a deep, structured university-level treatment of SVD within a broader machine learning context, while the fast track provides a concise, intuition-focused playlist specifically on SVD, suitable for quick comprehension. Choose the course for thorough mastery and the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 15 (PCA and ICA) and 16 (Independent Component Analysis & RL), about 2.6 hours total — these cover PCA and SVD concepts critical for understanding matrix factorization and rank truncation.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative machine learning course that covers dimensionality reduction techniques including PCA and SVD in detail, providing the mathematical foundations and practical insights necessary to understand the importance scoring and rank truncation in QSVD.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Singular value decomposition best explanation](https://www.youtube.com/playlist?list=PLqinEaadXCHZ8FB1jBZIxahYfTYua5nK1) — RANDOM NEURAL MONK · 16 videos · 3.4h across 16 episodes

**Watch only this:** Episodes 2 (Singular Value Decomposition (the SVD)), 4 (Singular Value Decomposition (SVD): Mathematical Overview), and 8 (A Complete Understanding of SVD(Singular Value Decomposition)), about 36 minutes total — these provide a concise yet comprehensive introduction to SVD.

*Why it unblocks this paper:* The RANDOM NEURAL MONK playlist offers a well-curated, visual and intuitive explanation of singular value decomposition, including its mathematical overview and applications, ideal for quickly grasping the core concepts behind QSVD's compression strategy.

*If you want all of it:* 3.4 hours across 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the QSVD paper, start with foundational concepts including Singular Value Decomposition (SVD), quantization techniques in deep learning, and the multi-head attention mechanism in transformers. These prerequisites build the necessary mathematical and architectural background. Finally, focus on the core concept of QSVD itself, emphasizing the joint SVD on QKV weights and adaptive rank truncation, guided by the authors' own talk or the closest available advanced research talks.

### Singular value decomposition in neural networks *(prerequisite)*
Singular Value Decomposition (SVD) is a fundamental matrix factorization technique that decomposes a matrix into orthogonal components ordered by importance. Understanding SVD is critical to grasp how QSVD performs low-rank approximations jointly on concatenated QKV weight matrices to reduce model size and computation while preserving accuracy.

*How the paper uses it:* QSVD applies joint SVD on concatenated QKV weights to reduce memory and computation costs.

▶ [6. Singular Value Decomposition (SVD)](https://www.youtube.com/watch?v=rYz83XPxiZo) — MIT OpenCourseWare · 53:34 · 7y ago

### Quantization techniques for deep learning *(prerequisite)*
Quantization reduces the precision of neural network parameters and activations to lower memory and computational requirements. This section covers advanced quantization methods including post-training quantization and outlier smoothing, which QSVD integrates with SVD to enable efficient low-precision inference in vision-language models.

*How the paper uses it:* QSVD integrates quantization with SVD and applies outlier smoothing to enable low-precision VLM inference with minimal accuracy loss.

▶ [EfficientML.ai Lecture 5 - Quantization (Part I) (MIT 6.5940, Fall 2023)](https://www.youtube.com/watch?v=TSc_BibWRhM) — MIT HAN Lab · 1:15:24 · 3y ago

### Multi-head attention mechanism *(prerequisite)*
Multi-head attention is a core component of transformer architectures, involving separate query, key, and value weight matrices. Understanding the structure and function of multi-head attention is essential to appreciate why QSVD targets joint compression of these QKV weights to optimize memory and computation.

*How the paper uses it:* QSVD targets compression of query, key, and value weights in multi-head attention to reduce model size and latency.

▶ [L4: Multi-headed attention in transformers explained](https://www.youtube.com/watch?v=1PJW1eb1ut4) — IIT Madras - B.S. Degree Programme · 21:12 · 1y ago

### Adaptive rank truncation in low-rank approximation
Adaptive rank truncation methods dynamically select the rank of low-rank approximations based on importance metrics to balance compression and accuracy. This concept underpins QSVD's novel importance scoring for singular values, enabling effective rank allocation that minimizes accuracy degradation across layers.

*How the paper uses it:* QSVD introduces an importance scoring method for singular values to guide adaptive rank truncation, balancing compression and accuracy.

▶ [Low-rank Matrix Completion: Adaptive Sampling Can Help When, How?](https://www.youtube.com/watch?v=8_oJBIiv56Y) — Simons Institute for the Theory of Computing · 36:37 · Streamed 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the QSVD paper on efficient compression of vision-language models, start by learning the foundational concepts of multi-head attention in transformers, which QSVD targets for compression. Next, build intuition on singular value decomposition (SVD), the core mathematical tool QSVD uses for low-rank approximation. Then, grasp quantization techniques that QSVD integrates with SVD for low-precision inference. Finally, explore adaptive rank truncation methods that balance compression and accuracy, reflecting QSVD's novel adaptive rank allocation strategy.

### Multi-head attention mechanism *(prerequisite)*
Multi-head attention is a key component of transformer models, allowing the model to attend to information from multiple representation subspaces simultaneously. Understanding how query, key, and value matrices work together in this mechanism is essential to grasp why QSVD compresses these weights jointly.

*How the paper uses it:* QSVD compresses the combined query, key, and value weight matrices used in multi-head attention to reduce memory and computation.

▶ [Multi-Head Attention Explained Visually | Simple Transformer Guide](https://www.youtube.com/watch?v=42L1q1Z4Ojc) — Visual AI · 10:44 · 5mo ago

### Singular value decomposition in neural networks *(prerequisite)*
Singular value decomposition (SVD) factorizes a matrix into orthogonal components and singular values, revealing the most important directions in the data. This decomposition enables low-rank approximations that reduce model size while preserving key information, which is the mathematical foundation of QSVD.

*How the paper uses it:* QSVD applies joint SVD on concatenated QKV weight matrices to achieve efficient low-rank approximation.

▶ [SVD Visualized, Singular Value Decomposition explained | SEE Matrix , Chapter 3 #SoME2](https://www.youtube.com/watch?v=vSczTbgc8Rc) — Visual Kernel · 16:28 · 4y ago

### Quantization techniques for deep learning *(prerequisite)*
Quantization reduces the precision of model parameters and activations to lower memory usage and speed up computation, often with minimal accuracy loss. Understanding quantization basics helps appreciate how QSVD integrates quantization with SVD for low-precision inference.

*How the paper uses it:* QSVD combines post-training quantization with SVD, including outlier smoothing and learnable parameters, to enable efficient low-precision VLM inference.

▶ [How LLMs survive in low precision | Quantization Fundamentals](https://www.youtube.com/watch?v=qoQJq5UwV1c) — Julia Turc · 20:34 · 1y ago

### Adaptive rank truncation in low-rank approximation
Adaptive rank truncation selects the number of singular values to keep based on their importance, balancing compression and accuracy. This concept explains how QSVD dynamically allocates ranks to minimize accuracy loss while compressing the model.

*How the paper uses it:* QSVD introduces a novel importance scoring method for singular values to guide adaptive rank truncation, optimizing compression without sacrificing accuracy.

▶ [Low Rank Approximation and Truncated SVD Explained Visually](https://www.youtube.com/watch?v=JQE9kohkDt8) — Infomity · 5:13 · 9d ago

### QSVD paper talk *(paper-talk search result; attribution unverified)*
Hearing the authors explain QSVD provides direct insight into their novel method, its motivations, and results. This talk complements foundational knowledge by connecting theory to practical implementation and evaluation.

*How the paper uses it:* The authors describe how QSVD jointly compresses QKV weights using SVD and quantization to improve efficiency and accuracy in vision-language models.

▶ [[CVPR 2020 Tutorial] Talk #2  Visual QA and Reasoning by Zhe Gan](https://www.youtube.com/watch?v=n4mUriUrYR0) — MS D365 AI · 46:39 · 6y ago

## Already in your library

- [Kernel Density Estimation - Explained](https://www.youtube.com/watch?v=6sGOMbC5xdE) — also for: On Imbalanced Regression with Hoeffding Trees (Dimitrios I. Diochnos)
- [What Is the Variational Quantum Eigensolver? | VQE Explained](https://www.youtube.com/watch?v=DUq-0r-Prw0) — also for: CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms (Lei Jiang)
- [Lecture 05 - Quantization (Part I) | MIT 6.S965](https://www.youtube.com/watch?v=AlASZb93rrc) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Lec 15 | Introduction to Transformer: Self & Multi-Head Attention](https://www.youtube.com/watch?v=ofsTGSeakbE) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Visual Guide to Transformer Neural Networks - (Episode 2) Multi-Head & Self-Attention](https://www.youtube.com/watch?v=mMa2PmYJlCo) — also for: Unified Local and Global Attention Interaction Modeling for Vision Transformers (Corey Toler-Franklin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the QSVD paper. The beginner project focuses on reproducing a core mechanism from the paper using your existing skills. The intermediate project involves running and extending the authors' QSVD code on a smaller public vision-language model, comparing results to a baseline. The advanced project tackles the paper's stated limitation by exploring joint optimization of compression and quantization across multiple layers, extending QSVD's approach.

### Beginner — Implement Joint SVD on Concatenated QKV Weights
*Effort: a weekend, ~8 hours*

You build a Python script that takes three small random matrices representing query, key, and value weight matrices, concatenates them, and applies singular value decomposition (SVD) jointly. You then implement an importance scoring method to select singular values for rank truncation and reconstruct the compressed weights. Finally, you compare the reconstruction error before and after truncation.

**Why it shows you understood the paper:** This project shows you understand the core QSVD mechanism of joint SVD on concatenated QKV weights and the adaptive rank truncation guided by importance scoring, which is central to the paper's compression strategy.

**Grounded in:** Joint SVD on combined QKV weight matrices to reduce parameter size, KV cache, and computation; Novel importance scoring method for singular values to guide adaptive rank truncation minimizing accuracy loss.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Simulated random matrices representing Q, K, V weights as no public QKV weights are provided.

**Build it:**

1. Generate three random matrices to simulate Q, K, and V weight matrices of small dimensions.
2. Concatenate the Q, K, and V matrices along the appropriate axis to form a combined matrix.
3. Apply singular value decomposition (SVD) jointly on the concatenated matrix.
4. Implement an importance scoring function to rank singular values based on their magnitude or contribution.
5. Truncate the singular values adaptively based on the importance scores to reduce rank.
6. Reconstruct the compressed QKV weights and compute reconstruction error metrics before and after truncation.
7. Visualize singular values and reconstruction errors using plots.

**Ships as:** A GitHub repo with a Python script demonstrating joint SVD on concatenated QKV weights, adaptive rank truncation, reconstruction error analysis, and plots illustrating the process.

**Stretch goal:** Add a simple quantization step on the compressed weights and evaluate its effect on reconstruction error.

### Intermediate — Run and Extend QSVD on a Small Vision-Language Model
*Effort: 1-3 weekends*

You clone the official QSVD repository and apply the QSVD compression method on a smaller publicly available vision-language model or a subset of a model's QKV weights. You implement a simple baseline compression method such as separate SVD or quantization only. Then you compare accuracy metrics and compression ratios between QSVD and the baseline, reproducing a key result metric from the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' codebase, apply QSVD compression, and critically evaluate its benefits over simpler baselines, reflecting comprehension of the paper's core contributions and empirical validation.

**Grounded in:** QSVD achieves over 10% accuracy improvement compared to prior methods relying solely on quantization or SVD; QSVD outperforms state-of-the-art baselines across multiple benchmarks.

**Tech stack:** Python 3.11, PyTorch, Git, Linux shell

**Data:** Use a smaller public vision-language model or a publicly available subset of QKV weights from a model like ViLT or a small transformer-based VLM as a substitute for the paper's LLaVA-v1.5 13B model.

**Build it:**

1. Clone the QSVD codebase from https://github.com/SAI-Lab-NYU/QSVD.
2. Set up the environment and dependencies as per the repository instructions.
3. Identify or prepare a smaller vision-language model or subset of QKV weights for compression.
4. Run QSVD compression on the model's QKV weights and measure accuracy on a small benchmark or validation set.
5. Implement a baseline compression method such as separate SVD on Q, K, V weights or quantization only.
6. Compare accuracy and compression metrics between QSVD and the baseline.
7. Document the results and reproduce a key metric from the paper, such as accuracy improvement or compression ratio.

**Verified links from the paper:**

- <https://github.com/SAI-Lab-NYU/QSVD> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run QSVD and baseline compression on a small VLM, comparison results, and a README explaining the setup, methodology, and findings.

**Stretch goal:** Add visualization of singular value importance scores and adaptive rank allocation per layer.

### Advanced — Joint Optimization of Compression and Quantization Across Multiple Layers
*Effort: several weeks*

You extend the QSVD method by implementing a joint optimization framework that simultaneously compresses and quantizes QKV weights across multiple transformer layers rather than independently per layer. You design an algorithm to allocate ranks and quantization parameters globally to minimize accuracy loss. You evaluate this approach on a small vision-language model and compare it to the original QSVD per-layer approach.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction stated in the paper, demonstrating deep understanding of QSVD's methodology and the challenges of multi-layer joint optimization in model compression.

**Grounded in:** QSVD currently applies rank truncation and quantization independently per layer; joint optimization across all model blocks is future work.

**Tech stack:** Python 3.11, PyTorch, NumPy, Git, Linux shell

**Data:** Use a small publicly available vision-language model or a subset of QKV weights as a proxy for the original large VLMs.

**Build it:**

1. Study the QSVD codebase and understand how rank truncation and quantization are applied independently per layer.
2. Design a joint optimization algorithm that considers all QKV weight matrices across multiple layers simultaneously for rank and quantization parameter allocation.
3. Implement the joint optimization method integrated with QSVD's existing framework.
4. Run experiments compressing multiple layers jointly on the chosen model and evaluate accuracy and compression metrics.
5. Compare results with the original per-layer QSVD approach to assess improvements or trade-offs.
6. Document the methodology, challenges, and experimental results in detail.

**Verified links from the paper:**

- <https://github.com/SAI-Lab-NYU/QSVD> — released by the paper's authors

**Ships as:** A GitHub repository with the extended QSVD implementation supporting joint multi-layer compression and quantization, experimental results comparing to baseline QSVD, and a detailed README and report.

**Stretch goal:** Explore automated hyperparameter tuning or reinforcement learning to optimize rank and quantization parameters jointly.
