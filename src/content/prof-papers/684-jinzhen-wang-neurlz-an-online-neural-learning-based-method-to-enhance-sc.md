---
title: "684 · NeurLZ: An Online Neural Learning-based Method to Enhance Scientific Lossy Compression — Jinzhen Wang"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jinzhen-wang"
source_hash: "8eb0f8f11ea1e2ac67ef6cf80c68a7b48eb74a927904ea8b8d14b386f91df0a0"
sequence: 684
generator: "outreach-garden: managed"
---

# 684 · NeurLZ: An Online Neural Learning-based Method to Enhance Scientific Lossy Compression

## At a glance

- **Professor:** Jinzhen Wang
- **Institution:** UNC - Charlotte
- **Paper:** [NeurLZ: An Online Neural Learning-based Method to Enhance Scientific Lossy Compression](https://dl.acm.org/doi/pdf/10.1145/3721145.3725763)
- **Authors:** Wenqi Jia, Zhewen Hu, Youyuan Liu, Boyuan Zhang, Jinzhen Wang, Jinyang Liu, Wei Niu, Stavros Kalafatis, Junzhou Huang, Sian Jin, Daoce Wang, Jiannan Tian, Miao Yin
- **Year:** 2025

## Paper overview

NeurLZ is a new method that improves the compression of large scientific datasets by using lightweight neural networks that learn and adapt during compression. Unlike traditional methods that rely on large pre-trained models, NeurLZ trains small models online for each data block to better capture and correct compression errors, leading to higher quality data reconstruction with less storage. It also leverages correlations across different scientific data fields to further enhance compression efficiency.

### Why it matters

**Research problem:** Large-scale scientific simulations generate massive datasets that are challenging to store and transmit efficiently. Existing lossy compression methods struggle to balance compression ratio, data quality, and adaptability to diverse and dynamic scientific data features. Deep learning approaches often rely on large offline-trained models that do not adapt well to data shifts and are computationally expensive.

**Why it matters:** Efficient compression of scientific data is critical to reduce storage costs, minimize transmission delays, and improve accessibility for analysis and visualization. As scientific simulations grow in scale and complexity, better compression methods are needed to handle diverse data distributions and maintain data fidelity within user-defined error bounds.

**Key contributions:**

- Introduces NeurLZ, a novel online neural learning method to enhance scientific lossy compression quality.
- Develops lightweight skipping DNN models trained online per data block to adapt to data shifts efficiently.
- Implements compression error mitigation by learning residual errors, improving reconstructed data quality with minimal overhead.
- Provides strict and relaxed error control modes to ensure user-defined error bounds are met or balanced for better quality.
- Leverages cross-field learning to exploit inter-field correlations in scientific data, improving compression beyond single-field methods.

## About the professor

**Jinzhen Wang** — Assistant Professor, Computer Science, UNC - Charlotte.

Research interests: Data reduction and compression, Scientific Data Management, Parallel and Distributed Systems

### Research links

- [Faculty/profile page](https://sites.google.com/charlotte.edu/hpdilab/about-pi)
- [Professor website](https://sites.google.com/charlotte.edu/hpdilab/)
- [Google Scholar](https://scholar.google.com/citations?user=otnPh2IAAAAJ)
- [GitHub](https://github.com/HPDiL)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Networks for Data Compression
**The paper assumes:** neural network architectures, online learning methods, lossy data compression techniques, residual error modeling
**Already in this field?** Skip this entirely if you already understand neural network design and training applied to lossy data compression and online adaptation methods.

To understand NeurLZ's approach of using lightweight neural networks trained online for scientific lossy compression, a solid grasp of neural networks tailored for data compression is essential. The rigorous course offers a deep dive into data compression theory and applications, including lossy compression and learned compression methods, while the fast track provides an intuitive and visual introduction to neural networks and their learning mechanisms. Choose the rigorous course for comprehensive technical depth, or the fast track for a concise conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE274 I Data Compression: Theory and Applications I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rPj4uhbgUAaEKwNNak8xgkz) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 11 (Lossy Compression Basics; Quantization), 12 (Mutual Information; Rate-Distortion Function), 13 (Gaussian RD, Water-Filling Intuition; Transform Coding), 14 (Transform Coding in real-life: image, audio, etc.), and 16 (Learnt Image Compression), about 6.5 hours total.

*Why it unblocks this paper:* Stanford EE274 Data Compression I 2023 covers foundational and advanced topics in data compression theory, including lossy compression, quantization, transform coding, and learned image compression, directly relevant to understanding NeurLZ's compression and neural learning techniques.

*If you want all of it:* All 18 lectures, approximately 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1 (But what is a neural network?), 2 (Gradient descent, how neural networks learn), 3 (Backpropagation, intuitively), and 9 (But what is cross-entropy?), about 1.5 hours total.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series offers clear, visual, and intuitive explanations of neural network fundamentals and learning algorithms, providing a strong conceptual foundation for understanding the lightweight neural models used in NeurLZ.

*If you want all of it:* All 10 episodes, approximately 3.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand NeurLZ, start with foundational concepts of online neural network training, error-bounded lossy compression, and cross-field learning to grasp the key techniques NeurLZ builds upon. Then, explore the core concept of NeurLZ itself, focusing on its novel online neural learning method for scientific lossy compression. This progression ensures a solid grasp of the underlying machine learning and compression principles before delving into the paper's specific contributions.

### Online neural network training *(prerequisite)*
Understanding online neural network training is essential to grasp how NeurLZ dynamically adapts lightweight neural models during compression. This section covers the fundamentals of neural networks and their training, focusing on concepts relevant to online and incremental learning.

*How the paper uses it:* NeurLZ trains lightweight skipping DNN models online per data block to adapt to data shifts efficiently.

▶ [Lec 01. Introduction to Deep Learning](https://www.youtube.com/watch?v=6FkRvTtUc-o) — MIT OpenCourseWare · 1:00:51

### Error-bounded lossy compression *(prerequisite)*
Error-bounded lossy compression techniques are critical to ensure that compression maintains user-defined error limits, a key feature of NeurLZ. This section introduces the principles and challenges of controlling error bounds in lossy compression of scientific data.

*How the paper uses it:* NeurLZ provides strict and relaxed error control modes to ensure user-defined error bounds are met or balanced for better quality.

▶ [TopoSZ: Preserving Topology in Error-Bounded Lossy Compression | VIS 2023](https://www.youtube.com/watch?v=LfqGC3UEkEY) — IEEE Visualization Conference · 2 yr ago

### Cross-field learning in scientific data *(prerequisite)*
Cross-field learning exploits correlations across multiple scientific data fields to improve compression efficiency. Understanding this concept helps appreciate how NeurLZ leverages inter-field dependencies beyond single-field compression approaches.

*How the paper uses it:* NeurLZ leverages cross-field learning to exploit inter-field correlations in scientific data, improving compression beyond single-field methods.

▶ [Approximate cross validation for large data and high dimensions](https://www.youtube.com/watch?v=K2-f96ciuNQ) — The Alan Turing Institute · 35:29

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand NeurLZ, a novel neural learning-based method for scientific lossy compression. We start with the basics of lossy compression and error-bounded compression to grasp the challenges and goals in compressing scientific data. Then, we cover online neural network training to understand how NeurLZ adapts models dynamically during compression, followed by cross-field learning to see how correlations across data fields improve compression. Finally, we explore the core idea of lightweight skipping deep neural networks, which NeurLZ uses for efficient residual error prediction.

### Lossy compression of scientific data *(prerequisite)*
Lossy compression reduces data size by allowing some loss of information, trading off perfect accuracy for smaller storage and faster transmission. Scientific data compression must balance compression ratio with preserving data quality within acceptable error bounds, which is critical for analysis and visualization.

*How the paper uses it:* NeurLZ improves scientific lossy compression by enhancing reconstruction quality while maintaining error bounds.

▶ [The Basics of Lossy and Lossless Compression](https://www.youtube.com/watch?v=hsJ8rAfAwls) — James Waring · 13:42

### Error-bounded lossy compression *(prerequisite)*
Error-bounded lossy compression ensures that the difference between original and decompressed data stays within user-defined limits, providing guarantees on data fidelity. This is essential in scientific contexts where data accuracy impacts downstream results.

*How the paper uses it:* NeurLZ employs strict and relaxed error control modes to meet user-defined error bounds during compression.

▶ [OL Computer (2210) | Data Representation  | Lecture 10 | Lossy Compression | Paper 1](https://www.youtube.com/watch?v=pKxArJh9ds8) — CS Tales | Sir Muazzam Ali · 9 mo ago

### Online neural network training *(prerequisite)*
Online neural network training updates model parameters dynamically as new data arrives, enabling adaptation to changing data distributions without relying on large offline-trained models. This approach is efficient for scenarios with diverse and shifting data.

*How the paper uses it:* NeurLZ trains lightweight neural networks online per data block to adaptively predict residual compression errors.

▶ [Lec 01. Introduction to Deep Learning](https://www.youtube.com/watch?v=6FkRvTtUc-o) — MIT OpenCourseWare · 1:00:51

### Lightweight skipping deep neural networks
Lightweight skipping deep neural networks use skip connections and compact architectures to efficiently learn complex patterns with fewer parameters and less computation. This design enables fast online training and effective residual error prediction.

*How the paper uses it:* NeurLZ uses lightweight skipping DNNs with about 3,000 parameters trained online to correct compression errors efficiently.

▶ [Residual Networks and Skip Connections (DL 15)](https://www.youtube.com/watch?v=Q1JCrG1bJ-A) — Professor Bryce · 3 yr ago

## Already in your library

- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [Spiking Neural Networks Explained | The Future of AI That Thinks Like the Brain](https://www.youtube.com/watch?v=ug92eUh_pYo) — also for: Pathfinder: Practical Real-Time Learning for Data Prefetching (Rajeev Balasubramonian)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of NeurLZ's approach to enhancing scientific lossy compression via online neural learning. The beginner project focuses on reproducing a core mechanism of lightweight online neural error correction. The intermediate project implements the core NeurLZ method on a smaller scientific dataset and compares it against a baseline compressor. The advanced project extends NeurLZ by addressing one of its stated limitations, such as reducing training overhead via parallelization or adapting the method to transform-based compressors.

### Beginner — Lightweight Online Neural Residual Correction
*Effort: a weekend, ~8 hours*

You build a simple Python script that simulates the core idea of NeurLZ's lightweight skipping deep neural network trained online to predict and correct residual compression errors for a single data block. The script will take a small numeric array, simulate a lossy compression and decompression step with added noise, then train a small neural network online to predict the residual error and improve reconstruction quality.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of NeurLZ: training lightweight neural models online per data block to mitigate compression errors dynamically, rather than relying on large offline models.

**Grounded in:** Develops lightweight skipping DNN models trained online per data block to adapt to data shifts efficiently.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic numeric arrays simulating a small scientific data block with added noise to mimic compression errors.

**Build it:**

1. Generate or load a small numeric array representing a data block.
2. Simulate a lossy compression and decompression step by adding noise or quantization errors.
3. Define a small lightweight neural network (e.g., a few linear layers or small CNN) in PyTorch.
4. Train the network online on the decompressed data to predict residual errors between decompressed and original data.
5. Apply the trained model to correct the decompressed data and evaluate reconstruction quality improvement (e.g., MSE, PSNR).
6. Visualize original, decompressed, and corrected data along with error metrics.

**Ships as:** A Python script and README demonstrating online training of a lightweight neural network to correct compression residuals on a synthetic data block, with plots and error metrics.

**Stretch goal:** Add a skipping mechanism or lightweight convolutional layers to mimic NeurLZ's skipping DNN architecture more closely.

### Intermediate — NeurLZ Core Method on Public Scientific Data
*Effort: 1-3 weekends*

You implement the core NeurLZ online neural learning method to enhance lossy compression on a small public scientific dataset, such as a 3D fluid simulation snapshot or climate data subset. You simulate a baseline lossy compression (e.g., uniform quantization or a simple SZ3-like method), then train lightweight neural networks online per data block to predict residual errors and improve reconstruction quality. You compare compression ratio and PSNR against the baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement NeurLZ's core contribution—online training of lightweight neural models per data block for error correction—and evaluate its effectiveness against a baseline compressor on real scientific data.

**Grounded in:** Introduces NeurLZ, a novel online neural learning method to enhance scientific lossy compression quality.

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, Matplotlib

**Data:** A publicly available small scientific dataset such as a subset of the Nyx cosmology simulation data or a climate simulation snapshot (publicly available scientific data used as a substitute for the paper's datasets).

**Build it:**

1. Select and download a small public scientific dataset suitable for lossy compression experiments.
2. Implement or simulate a baseline lossy compression method (e.g., uniform quantization or a simple SZ3-like compressor).
3. Partition the dataset into blocks and decompress them with the baseline method.
4. Implement an online training loop that initializes and trains a lightweight neural network per block to predict residual errors.
5. Apply the trained model to correct decompressed blocks and reconstruct the dataset.
6. Evaluate and compare compression ratio and reconstruction quality metrics (PSNR, MAE) between baseline and enhanced compression.
7. Document the implementation, results, and insights in a README.

**Ships as:** A Python project with scripts to compress and decompress scientific data blocks enhanced by online neural residual correction, with quantitative comparisons and visualizations.

**Stretch goal:** Incorporate cross-field learning by jointly training models on correlated fields if multiple data fields are available.

### Advanced — Parallel Online Neural Compression for HPC Environments
*Effort: a few weeks*

You extend the NeurLZ approach by designing and implementing a parallelized online training framework for the lightweight neural models to reduce training overhead during compression. This addresses the paper's limitation of additional training time overhead. You apply this to a moderately sized scientific dataset and measure training time reduction and compression quality trade-offs. Optionally, you explore adapting the method to transform-based compressors by modifying the neural model architecture.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of NeurLZ, demonstrating deep comprehension of the method and its practical challenges in HPC environments. It also shows your ability to innovate beyond the original paper by improving scalability and efficiency.

**Grounded in:** Explore parallel optimization to reduce training time overhead during compression.

**Tech stack:** Python 3.11, PyTorch, NumPy, Multiprocessing or PyTorch Distributed, Matplotlib

**Data:** A moderately sized scientific dataset subset (e.g., a larger chunk of Nyx or Miranda simulation data) or a synthetic dataset simulating HPC-scale data blocks.

**Build it:**

1. Reimplement or reuse your intermediate project codebase for online neural residual correction.
2. Design a parallel training scheme using multiprocessing or PyTorch distributed to train multiple block models concurrently.
3. Implement synchronization or batching mechanisms to manage parallel training efficiently.
4. Benchmark training time and compression quality against the sequential baseline.
5. Optionally, adapt the neural network architecture to work on transform-domain coefficients to explore compatibility with transform-based compressors.
6. Document the parallelization approach, performance gains, and any trade-offs.

**Ships as:** A Python project demonstrating parallel online training of lightweight neural models for compression error correction, with benchmarks showing reduced training overhead and maintained compression quality.

**Stretch goal:** Integrate temporal cross-field learning by leveraging correlations across time steps in scientific simulation data.
