---
title: "711 · Inshrinkerator: Compressing Deep Learning Training Checkpoints via Dynamic Quantization — Alexey Tumanov"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexey-tumanov"
source_hash: "7f3fcb491c3b2493e5eca3444ef80deb403d03aaf086745c4875404ff1111926"
sequence: 711
generator: "outreach-garden: managed"
---

# 711 · Inshrinkerator: Compressing Deep Learning Training Checkpoints via Dynamic Quantization

## At a glance

- **Professor:** Alexey Tumanov
- **Institution:** Georgia Institute of Technology
- **Paper:** [Inshrinkerator: Compressing Deep Learning Training Checkpoints via Dynamic Quantization](https://arxiv.org/pdf/2306.11800)
- **Authors:** Amey Agrawal, Sameer Reddy, Satwik Bhattamishra, Venkata Prabhakara Sarath Nookala, Vidushi Vashishth, Kexin Rong, Alexey Tumanov
- **Year:** 2024

## Paper overview

Inshrinkerator is a system designed to compress deep learning training checkpoints efficiently by dynamically adjusting how model weights are quantized. It recognizes that different model parameters vary in sensitivity to compression during training and applies a non-uniform quantization scheme combined with a dynamic search for optimal configurations. This approach reduces storage and bandwidth costs significantly while maintaining model accuracy, enabling more frequent checkpointing and efficient transfer learning.

### Why it matters

**Research problem:** Deep learning training workloads are prone to frequent failures, requiring checkpointing to save progress. However, checkpointing incurs high storage and network overhead, especially for large models. Existing compression methods use uniform quantization and fixed configurations, leading to suboptimal trade-offs between compression ratio and model accuracy.

**Why it matters:** As deep learning models grow larger and training times extend over weeks or months, failures become more common, causing lost work and resource wastage. Efficient checkpoint compression is crucial to enable frequent checkpointing for fault tolerance, iterative model development, and transfer learning, while minimizing storage and bandwidth costs.

**Key contributions:**

- A novel non-uniform quantization algorithm leveraging approximate K-Means clustering for efficient and effective compression.
- An efficient dynamic search mechanism that adapts quantization configurations during training to maximize compression while preserving model quality.
- A quantization-aware delta compression algorithm with parameter rearrangement to enhance run-length encoding and reduce storage overhead.
- Implementation of Inshrinkerator with low runtime overhead (<0.6%) and model-agnostic design supporting diverse architectures.
- Comprehensive evaluation demonstrating superior accuracy-storage trade-offs compared to state-of-the-art methods.

## About the professor

**Alexey Tumanov** — Associate Professor, School of Computer Science, Georgia Institute of Technology.

Research interests: systems support and resource management for distributed machine learning frameworks and applications

### Research links

- [Faculty/profile page](https://www.cc.gatech.edu/~atumanov)
- [Lab website](https://gatech-sysml.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=7P-gZioAAAAJ&hl=en)
- [DBLP](https://dblp.org/pers/hd/t/Tumanov:Alexey)
- [GitHub](https://github.com/atumanov)
- [Social profile](https://twitter.com/alsched)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Quantization and Clustering in Machine Learning
**The paper assumes:** machine learning quantization techniques, clustering algorithms, K-Means clustering, model compression methods
**Already in this field?** Skip this entirely if you already understand quantization methods and clustering algorithms used in machine learning model compression.

To understand the core methods in the paper, especially the novel non-uniform quantization scheme based on approximate K-Means clustering, it is essential to grasp both quantization and clustering fundamentals in machine learning. The rigorous course option offers a deep, structured university-level introduction to machine learning concepts including clustering algorithms like K-Means, while the fast track provides a concise, intuition-driven explainer series focused on quantization and related efficient architectures in large language models. Choose the course for a thorough theoretical foundation and the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1, 8, and 9 — 'Stanford CS229: Machine Learning Lecture 1 - Andrew Ng (Autumn 2018)', 'Lecture 8 - Data Splits, Models & Cross-Validation', and 'Lecture 9 - Decision Trees and Ensemble Methods' (for context) plus the full Lecture 9 on clustering and ensemble methods, about 4 hours total. Stop after Lecture 9 to cover clustering fundamentals.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative and comprehensive machine learning course covering supervised and unsupervised learning, including detailed lectures on clustering algorithms such as K-Means. This foundational knowledge is directly relevant to understanding the paper's use of approximate K-Means clustering for non-uniform quantization.

*If you want all of it:* Approximately 27.9 hours across all 21 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLMs: Quantization, Attention & Efficient Architectures](https://www.youtube.com/playlist?list=PLKym1CwT4I6I) — Vibhor Rastogi · 11 videos · 4.5h across 11 episodes

**Watch only this:** Episodes 4 and 5 — 'Training models with only 4 bits | Fully-Quantized Training' and 'How LLMs survive in low precision | Quantization Fundamentals', about 50 minutes total. These two episodes cover the essential quantization concepts needed.

*Why it unblocks this paper:* The 'LLMs: Quantization, Attention & Efficient Architectures' playlist by Vibhor Rastogi provides a focused, well-produced series on quantization fundamentals and efficient model architectures, including practical insights into low-precision training and quantization techniques relevant to the paper's dynamic quantization approach.

*If you want all of it:* Approximately 4.5 hours across all 11 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Inshrinkerator paper, start with foundational knowledge on K-Means clustering algorithms, which underpin the approximate clustering used in the quantization scheme. Next, study quantization-aware delta encoding techniques to grasp the compression improvements from parameter rearrangement and delta encoding. Then, review deep learning checkpointing systems to contextualize the importance of efficient checkpoint compression during training. Finally, focus on the core concept of Inshrinkerator's dynamic non-uniform quantization approach, prioritizing the authors' own talk if available.

### k means clustering algorithms seminar *(prerequisite)*
Understanding K-Means clustering is essential because Inshrinkerator's novel non-uniform quantization algorithm relies on an approximate K-Means clustering approach to efficiently cluster model parameters for compression. A rigorous seminar lecture from a reputable academic source provides the necessary mathematical and algorithmic depth.

*How the paper uses it:* The paper uses approximate K-Means clustering as a core technique for its non-uniform quantization scheme.

▶ [Week 7-Lecture 41 : K-means Clustering](https://www.youtube.com/watch?v=Cuu_S0mdt_4) — NPTEL IIT Bombay · 6 yr ago

### quantization aware delta encoding talk *(prerequisite)*
Delta encoding is a key compression technique that Inshrinkerator enhances by making it quantization-aware and rearranging parameters to improve run-length encoding efficiency. Understanding delta encoding in the context of compression algorithms is crucial to appreciate this contribution.

*How the paper uses it:* Inshrinkerator implements a quantization-aware delta encoding scheme that significantly improves compression efficiency.

▶ [Delta Binary Packed Encoding Explained: Efficient Data Compression for Time-Series and more](https://www.youtube.com/watch?v=vNQqe6PGCH4) — aloneguid · 6:43 · 5 mo ago

### deep learning checkpointing systems lecture *(prerequisite)*
Checkpointing is fundamental to fault-tolerant deep learning training, and efficient checkpoint compression directly impacts training robustness and resource usage. A university-level lecture on checkpointing systems provides the necessary context for why Inshrinkerator's contributions matter.

*How the paper uses it:* The paper addresses the high storage and network overhead of checkpointing in deep learning training.

▶ [lec 35 Fault Tolerance](https://www.youtube.com/watch?v=79-VGz56OQc) — NPTEL - Indian Institute of Science, Bengaluru · 1 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand Inshrinkerator, a system for compressing deep learning training checkpoints via dynamic quantization. We start with the basics of deep learning checkpointing to understand why compression matters, then cover K-Means clustering as it underpins the quantization method. Next, we explore non-uniform quantization methods to grasp how Inshrinkerator adapts compression to parameter distributions, followed by quantization-aware delta encoding to see how storage efficiency is improved. Finally, we suggest the authors' own talk if available for a direct explanation of their system.

### deep learning checkpointing systems lecture *(prerequisite)*
Checkpointing saves the state of a deep learning model during training to protect against failures and enable resuming progress. Understanding checkpointing basics clarifies why efficient compression is critical to reduce storage and bandwidth overhead during long training runs.

*How the paper uses it:* Inshrinkerator targets the high storage and network costs of frequent checkpointing in large model training.

▶ [Logging Deep Learning Checkpoints and Resuming Training from Checkpoint with DVC](https://www.youtube.com/watch?v=PcDo-hCvYpw) — DVCorg · 14:50 · 5 yr ago

### k means clustering algorithms seminar *(prerequisite)*
K-Means clustering groups data points into clusters by minimizing distances to cluster centers. This intuitive algorithm is foundational for understanding how Inshrinkerator uses approximate K-Means to create non-uniform quantization buckets tailored to parameter distributions.

*How the paper uses it:* Inshrinkerator’s novel quantization scheme relies on approximate K-Means clustering to efficiently cluster model parameters.

▶ [K Means Clustering Intuition](https://www.youtube.com/watch?v=AWKCCK5YHsE) — Krish Naik · 14:36 · 7 yr ago

### non uniform quantization methods lecture
Non-uniform quantization allocates quantization levels unevenly to better match data distributions, reducing error compared to uniform quantization. This concept is key to understanding how Inshrinkerator adapts compression to parameter sensitivity and distribution.

*How the paper uses it:* Inshrinkerator applies a non-uniform quantization scheme to compress parameters more effectively than uniform methods.

▶ [Non-uniform Quantization | Basics, Importance & Calculation | Uniform Vs Non-Uniform Quantization](https://www.youtube.com/watch?v=7DoNXi4g_Bg) — Engineering Funda · 8 yr ago

### quantization aware delta encoding talk
Delta encoding compresses data by storing differences between values rather than absolute values. When combined with quantization awareness, it can exploit parameter grouping to improve compression efficiency, a technique used by Inshrinkerator to reduce checkpoint size.

*How the paper uses it:* Inshrinkerator implements a quantization-aware delta encoding scheme that rearranges parameters to boost compression ratios.

▶ [Delta Binary Packed Encoding Explained: Efficient Data Compression for Time-Series and more](https://www.youtube.com/watch?v=vNQqe6PGCH4) — aloneguid · 6:43 · 5 mo ago

## Already in your library

- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)
- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)
- [K-Means Clustering Algorithm | Geometric Intuition | Clustering | Unsupervised Learning](https://www.youtube.com/watch?v=5shTLzwAdEc) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of Inshrinkerator's dynamic quantization approach for compressing deep learning training checkpoints. The beginner project focuses on implementing a simple non-uniform quantization scheme on model weights to grasp the core concept. The intermediate project involves reimplementing the paper's approximate K-Means based non-uniform quantization and comparing it against uniform quantization on a public model checkpoint, showing compression-accuracy trade-offs. The advanced project extends the method by exploring automated tuning of quantization configurations to reduce manual overhead, addressing a stated future direction of the paper.

### Beginner — Simple Non-Uniform Quantization of Model Weights
*Effort: a weekend, ~8 hours*

You build a Python script that takes a pretrained neural network checkpoint (e.g., a small vision model), extracts its weights, and applies a basic non-uniform quantization by clustering weight values into a few buckets using k-means clustering from scikit-learn. You then reconstruct the weights from the quantized representation and measure the reconstruction error.

**Why it shows you understood the paper:** This project shows you understand the core idea of non-uniform quantization via clustering of parameter values, a key contribution of Inshrinkerator, and how it differs from uniform quantization.

**Grounded in:** A novel non-uniform quantization algorithm leveraging approximate K-Means clustering for efficient and effective compression.

**Tech stack:** Python 3.11, NumPy, scikit-learn

**Data:** Use a publicly available pretrained model checkpoint from Hugging Face (e.g., bert-base-uncased) as a substitute for the paper's data.

**Build it:**

1. Download a pretrained model checkpoint from Hugging Face.
2. Extract the model's weight tensors as NumPy arrays.
3. Implement k-means clustering on the flattened weight values to form quantization buckets.
4. Replace each weight by its cluster centroid to form the quantized weights.
5. Reconstruct the model weights and compute reconstruction error metrics (e.g., MSE).
6. Document the quantization approach and results in a README.

**Ships as:** A GitHub repo with a Python script demonstrating non-uniform quantization on model weights, with a README explaining the method and reconstruction error results.

**Stretch goal:** Add uniform quantization as a baseline and compare reconstruction errors.

### Intermediate — Reimplementation of Inshrinkerator's Approximate K-Means Quantization
*Effort: 2 weekends, ~20 hours*

You implement the approximate K-Means clustering based non-uniform quantization algorithm described in the paper, including a dynamic search over quantization configurations (e.g., number of clusters). You apply this to compress checkpoints of a smaller vision or language model and compare compression ratios and accuracy degradation against uniform quantization.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core quantization method and dynamic configuration search, validating the compression-accuracy trade-offs reported.

**Grounded in:** Inshrinkerator includes an efficient dynamic quantization configuration search component that automatically adapts the quantization configuration as parameters’ sensitivity towards compression changes over training time.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn

**Data:** Use a publicly available pretrained model checkpoint from Hugging Face or Meta's OPT training logs as a substitute for the paper's training checkpoints.

**Build it:**

1. Select a pretrained model checkpoint suitable for compression experiments.
2. Implement an approximate K-Means clustering algorithm optimized for speed (e.g., using mini-batch K-Means).
3. Implement a dynamic search over quantization parameters (e.g., cluster counts) to find configurations balancing compression and accuracy.
4. Apply the quantization to the model checkpoint and measure compression ratio and accuracy degradation on a downstream task.
5. Compare results against uniform quantization baseline.
6. Write a detailed report and README documenting methods, results, and insights.

**Verified links from the paper:**

- <https://github.com/facebookresearch/metaseq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing approximate K-Means quantization and dynamic configuration search, plus a report comparing compression and accuracy with uniform quantization.

**Stretch goal:** Incorporate a simple delta encoding scheme to further compress quantized weights.

### Advanced — Automated Tuning of Dynamic Quantization Configurations for Large Models
*Effort: 3+ weeks*

You develop an automated tuning system that reduces manual intervention in selecting quantization configurations during training, addressing one of the paper's future directions. This system integrates sensitivity estimation and dynamic search with an optimization algorithm (e.g., Bayesian optimization or reinforcement learning) to adapt quantization parameters efficiently. You evaluate this on a moderately sized model checkpoint and analyze runtime overhead and compression-accuracy trade-offs.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by extending the dynamic configuration search with automated tuning, demonstrating deep comprehension and research potential.

**Grounded in:** Investigating automated tuning of configuration parameters to reduce manual intervention.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Optuna or Ray Tune for optimization

**Data:** Use publicly available pretrained model checkpoints from Hugging Face or Meta's OPT logs as proxies for the paper's data.

**Build it:**

1. Implement or adapt the approximate K-Means quantization and dynamic configuration search from the intermediate project.
2. Integrate an automated hyperparameter tuning library (e.g., Optuna) to optimize quantization parameters based on compression and accuracy metrics.
3. Implement sensitivity estimation of parameters using gradient information or proxy metrics.
4. Run experiments on a pretrained model checkpoint to evaluate tuning efficiency, runtime overhead, and compression-accuracy trade-offs.
5. Analyze results and document findings in a comprehensive report.
6. Prepare the code and documentation for public release.

**Verified links from the paper:**

- <https://github.com/facebookresearch/metaseq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with automated tuning code for dynamic quantization configurations, experimental results, and a detailed report discussing improvements and overhead.

**Stretch goal:** Extend the system to support distributed training environments and evaluate scalability.

_The paper's authors have not released code or datasets for Inshrinkerator; thus, all projects rely on reimplementation from the paper's descriptions and substitute publicly available pretrained model checkpoints._
