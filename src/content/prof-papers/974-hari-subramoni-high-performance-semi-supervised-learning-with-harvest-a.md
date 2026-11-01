---
title: "974 · High-Performance Semi-Supervised Learning with HARVEST: A Distributed Computer Vision Framework for Expert Labeling — Hari Subramoni"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hari-subramoni"
source_hash: "008f54227395c325c16de712964bb8894824353e50ffe20498ba99bc74413924"
sequence: 974
generator: "outreach-garden: managed"
---

# 974 · High-Performance Semi-Supervised Learning with HARVEST: A Distributed Computer Vision Framework for Expert Labeling

## At a glance

- **Professor:** Hari Subramoni
- **Institution:** Ohio State University
- **Paper:** [High-Performance Semi-Supervised Learning with HARVEST: A Distributed Computer Vision Framework for Expert Labeling](https://doi.org/10.1109/bigdata59044.2023.10386339)
- **Authors:** Nawras Alnaasan, Matthew Lieber, Aamir Shafi, Hari Subramoni, Scott Shearer, Dhabaleswar K Panda
- **Year:** 2023

## Paper overview

HARVEST is a computer vision framework designed to speed up deep learning image classification by using semi-supervised learning techniques that require only a small amount of labeled data. It distributes training across multiple GPUs to reduce training time and provides an easy-to-use web interface so domain experts without deep learning or high-performance computing knowledge can create customized solutions.

### Why it matters

**Research problem:** Deep learning training for image classification is time-consuming and requires large volumes of labeled data, which is costly and often infeasible, especially in domains like digital agriculture where data is frequently collected and domain experts may lack technical expertise.

**Why it matters:** Efficient training of deep learning models with minimal labeled data is critical to enable practical deployment in real-world applications such as digital agriculture, where rapid and accurate crop stress identification can protect crops and improve yields. Reducing training time and lowering the barrier for domain experts to use DL models can accelerate adoption.

**Key contributions:**

- Design and implementation of HARVEST, a high-performance distributed computer vision framework for semi-supervised learning.
- Integration of unsupervised learning and SSL techniques (SCAN and USB) to reduce labeling requirements.
- Development of an intuitive web interface using Open OnDemand for domain experts to create DL solutions.
- Comprehensive analysis of training DNNs with various SSL algorithms showing high accuracy close to supervised training.
- Scaling and performance evaluation demonstrating significant training time reductions using multi-GPU clusters.

## About the professor

**Hari Subramoni** — Assistant Professor, Computer Science and Engineering, Ohio State University.

Research interests: high-performance interconnects and protocols, parallel computer architecture, network-based computing, exascale computing, network topology-aware computing, QoS, power-aware LAN-WAN communication, fault tolerance, virtualization, big data, deep learning, machine learning, conversational interfaces, digital agriculture, cloud computing

### Research links

- [Faculty/profile page](https://people.engineering.osu.edu/people/subramoni.1)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Semi-Supervised Learning
**The paper assumes:** semi-supervised learning algorithms, deep learning model training, and distributed training concepts
**Already in this field?** Skip this entirely if you already understand semi-supervised learning methods and their role in deep neural network training.

This background focuses on semi-supervised learning (SSL), the core methodology behind HARVEST's ability to train accurate computer vision models with limited labeled data. The rigorous course provides a deep, structured understanding of machine learning fundamentals including SSL concepts, while the fast track offers a concise, intuition-driven introduction to SSL techniques for quicker comprehension. Choose the course for a thorough foundation or the fast track for a rapid but solid overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229 Machine Learning | Spring 2026](https://www.youtube.com/playlist?list=PLaqpC4kq8Gpw) — Stanford Online · 17 videos · 20.6h across 17 episodes

**Watch only this:** Lectures 1-6, about 4.3 hours — covering Introduction, Supervised Learning Setup, Weighted Least Squares, Exponential Family and GLMs Classification, Gaussian Discriminant Analysis, and Dataset Split with ML Advice to build a solid foundation in supervised and unsupervised learning concepts relevant to SSL.

*Why it unblocks this paper:* Stanford CS229 is a comprehensive, authoritative graduate-level machine learning course covering supervised and unsupervised learning fundamentals, including clustering and representation learning, which underpin semi-supervised learning methods like those used in HARVEST.

*If you want all of it:* 20.6 hours across 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Semi-Supervised Learning](https://www.youtube.com/playlist?list=PLEnEF0Z5z152TLv_0UczP9ZZhsE6MiHKo) — VANDANA BHATTACHARJEE · 6 videos · 0.7h across 6 episodes

**Watch only this:** All 6 episodes, about 0.7 hours — to get a concise overview of SSL methods such as self-training, wrapper methods, and democratic co-learning that are foundational to the paper's approach.

*Why it unblocks this paper:* This short playlist by VANDANA BHATTACHARJEE provides clear, focused explanations of semi-supervised learning techniques including self-training and co-training, directly addressing SSL concepts used in HARVEST with a total duration under one hour.

*If you want all of it:* 0.7 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HARVEST framework paper, start with foundational knowledge on distributed data parallelism and vision transformers, which are key technical enablers for the framework's scalability and model architecture. Next, study semi-supervised learning algorithms to grasp the core machine learning techniques HARVEST builds upon. Finally, focus on the paper's central contribution by exploring the authors' own talks or closely related advanced presentations on semi-supervised learning frameworks and distributed training.

### Distributed data parallelism *(prerequisite)*
Distributed data parallelism is the fundamental technique enabling HARVEST to scale training across multiple GPUs efficiently. Understanding how data parallelism works in distributed systems is essential to appreciate the speedups and scalability claims in the paper.

*How the paper uses it:* HARVEST leverages distributed data parallelism on multi-node GPU clusters to reduce training time significantly.

▶ [Stanford CS149 I 2023 I Lecture 9 - Distributed Data-Parallel Computing Using Spark](https://www.youtube.com/watch?v=jaMWmLq422U) — Stanford Online · 1:17:54 · 2y ago

### Vision transformers in computer vision *(prerequisite)*
Vision Transformers (ViT) represent the core model architecture used in HARVEST for image classification tasks. A detailed understanding of ViT's architecture and its advantages over traditional CNNs is crucial to grasp the model design choices in the framework.

*How the paper uses it:* HARVEST uses ViT models as part of its semi-supervised learning pipeline for image classification.

▶ [Vision Transformers - Explained!](https://www.youtube.com/watch?v=Hnsrm1ezI3g) — CodeEmporium · 22:21 · 10mo ago

### Semi-supervised learning algorithms *(prerequisite)*
Semi-supervised learning algorithms like FreeMatch and SCAN are central to HARVEST's ability to achieve high accuracy with limited labeled data. Understanding these algorithms provides insight into how the framework reduces labeling requirements while maintaining performance.

*How the paper uses it:* HARVEST integrates state-of-the-art SSL algorithms to reduce the need for extensive labeled datasets.

▶ [Lecture 14: Semi-Supervised Learning | Self-Training | ML](https://www.youtube.com/watch?v=hlCuAlEJRss) — Learnica · 49:36 · 9mo ago

### HARVEST framework talk *(paper-talk search result; attribution unverified)*
The core concept is the HARVEST framework itself, which combines distributed training and semi-supervised learning for efficient image classification. Direct talks by the authors or closely related advanced presentations provide the most precise and detailed understanding of the framework's design and contributions.

*How the paper uses it:* This section covers the paper's main contribution: the design and implementation of HARVEST for high-performance semi-supervised learning.

▶ ['Positive Unlabeled Learning by Semi-Supervised Learning' (ICIP2022)](https://www.youtube.com/watch?v=VnKMwX2yLqI) — UTS AAII · 12:11 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the HARVEST framework for distributed semi-supervised learning in computer vision. We start with core machine learning paradigms, then explain semi-supervised learning algorithms, followed by distributed data parallelism for scaling training, and finally cover Vision Transformers, the model architecture used in HARVEST. This progression builds intuition step-by-step from basic ML types to the specific methods and technologies employed in the paper.

### Semi-supervised learning algorithms *(prerequisite)*
Semi-supervised learning (SSL) is a machine learning approach that uses a small amount of labeled data together with a large amount of unlabeled data to improve learning efficiency. Understanding SSL algorithms like FreeMatch and SCAN helps grasp how HARVEST reduces labeling requirements while maintaining accuracy.

*How the paper uses it:* HARVEST leverages state-of-the-art SSL algorithms to achieve high accuracy with minimal labeled data.

▶ [Lecture 14: Semi-Supervised Learning | Self-Training | ML](https://www.youtube.com/watch?v=hlCuAlEJRss) — Learnica · 49:36 · 9mo ago

### Distributed data parallelism *(prerequisite)*
Distributed data parallelism is a technique to speed up training by splitting data across multiple GPUs or nodes, allowing simultaneous computation and faster model updates. This is key to HARVEST's ability to scale training efficiently across multi-GPU clusters.

*How the paper uses it:* HARVEST uses distributed data parallelism to achieve significant speedups in training time on multi-GPU clusters.

▶ [Stanford CS149 I 2023 I Lecture 9 - Distributed Data-Parallel Computing Using Spark](https://www.youtube.com/watch?v=jaMWmLq422U) — Stanford Online · 1:17:54 · 2y ago

### Vision transformers in computer vision *(prerequisite)*
Vision Transformers (ViT) apply the transformer architecture to image data by dividing images into patches and using self-attention to capture global context. They have become a powerful alternative to convolutional neural networks for image classification tasks.

*How the paper uses it:* HARVEST employs ViT models as the backbone architecture for image classification in its semi-supervised learning framework.

▶ [What Is a Vision Transformer? Computer Vision Explained](https://www.youtube.com/watch?v=vuqc2aD1dCg) — Engineering Visualized · 6:39 · 2mo ago

### Distributed semi-supervised learning
Distributed semi-supervised learning combines the benefits of SSL with distributed training to handle large datasets efficiently while minimizing labeling effort. It enables faster training of accurate models using limited labeled data across multiple GPUs or nodes.

*How the paper uses it:* HARVEST integrates distributed training with SSL algorithms to accelerate training and reduce labeling needs in digital agriculture datasets.

▶ [Types of Machine Learning | Supervised, Unsupervised, Reinforcement & Semi Supervised Learning 🔥](https://www.youtube.com/watch?v=97HCQqvhK0Y) — Perfect Computer Engineer · 16:39 · 3y ago

## Already in your library

- [MLSS 2012: Z. Ghahramani - Lecture 3: Graph based semi ...](https://www.youtube.com/watch?v=HZQOvm0fkLA) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Semi-Supervised Learning Explained | Understanding Semi-Supervised Learning: A Comprehensive Guide](https://www.youtube.com/watch?v=zxizTskX1cw) — also for: Learning semi‑supervised enrichment of longitudinal imaging‑genetic data for improved prediction of cognitive decline (Hua Wang)
- [Introduction to Semi-Supervised learning](https://www.youtube.com/watch?v=caelO7XRO6Q) — also for: Personalized Fall Detection By Balancing Data with Selective Feedback Using Contrastive Learning (Anne H. H. Ngu)
- [Lec-2: Supervised Learning Algorithms | Machine Learning](https://www.youtube.com/watch?v=LKlOH8OLLcw) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [Lec-23: Supervised vs Unsupervised learning with real life example](https://www.youtube.com/watch?v=fM8XdC1EweU) — also for: A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions (Julian Panetta)
- [ADL4CV:DV - Semi-Supervised Learning](https://www.youtube.com/watch?v=ihkylUbqFMI) — also for: ZeroWaste Dataset: Towards Deformable Object Segmentation in Cluttered Scenes (Sarah Adel Bargal)
- [Stanford CS231N | Spring 2025 | Lecture 11: Large Scale Distributed Training](https://www.youtube.com/watch?v=9MvD-XsowsE) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stanford CS149 I Parallel Computing I 2023 I Lecture 8 - Data-Parallel Thinking](https://www.youtube.com/watch?v=Ba3TqxSgnTk) — also for: HighP5: Programming using Partitioned Parallel Processing Spaces (Andrew S. Grimshaw)
- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 7: Parallelism 1](https://www.youtube.com/watch?v=l1RJcDjzK8M) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Concurrency Vs Parallelism!](https://www.youtube.com/watch?v=RlM9AfWf1WU) — also for: Understanding Learners’ Problem-Solving Strategies in Concurrent and Parallel Programming: A Game-Based Approach (Bruce W. Char)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Vision Transformers Explained | The ViT Paper](https://www.youtube.com/watch?v=NetSJM590Lo) — also for: DA-VPT: Semantic-Guided Visual Prompt Tuning for Vision Transformers (Kien A. Hua)
- [Introduction to Vision Transformer (ViT) | An image is worth 16x16 words | Computer Vision Series](https://www.youtube.com/watch?v=aIi5FsdURUA) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Vision Transformer (ViT) - An image is worth 16x16 words | Paper Explained](https://www.youtube.com/watch?v=j6kuz_NqkG0) — also for: WAFT: Warping-Alone Field Transforms for Optical Flow (Jia Deng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the HARVEST framework for distributed semi-supervised learning in computer vision. The beginner project focuses on reproducing a core concept of semi-supervised learning with minimal setup using familiar tools. The intermediate project involves implementing a simplified distributed semi-supervised training pipeline on a public dataset to replicate key accuracy and efficiency results. The advanced project extends the framework toward one of its stated future directions by exploring efficient model inference on resource-constrained edge devices, addressing a key limitation of the paper.

### Beginner — Semi-Supervised Image Classification with FreeMatch on CIFAR-10
*Effort: a weekend, ~8 hours*

You build a simple image classification pipeline using the FreeMatch semi-supervised learning algorithm on the CIFAR-10 dataset, training a Vision Transformer (ViT) model with only a small subset of labeled images. This reproduces the core semi-supervised learning approach used in HARVEST but on a smaller scale and without distributed training.

**Why it shows you understood the paper:** This project shows you understand the semi-supervised learning algorithm FreeMatch and how it can achieve high accuracy with limited labeled data, a central technique in HARVEST. A professor would see you grasp the balance between labeled and unlabeled data and the use of ViT models in SSL.

**Grounded in:** Integration of SSL algorithms like FreeMatch and ViT models to reduce labeling requirements and achieve high accuracy close to supervised training.

**Tech stack:** Python 3.11, PyTorch, timm (PyTorch Image Models), torchvision, Jupyter Notebook

**Data:** CIFAR-10 dataset from torchvision, used as a substitute for the paper's digital agriculture datasets.

**Build it:**

1. Set up a Python environment with PyTorch and timm installed.
2. Load CIFAR-10 dataset and create a labeled subset (e.g., 80 images per class) and an unlabeled subset.
3. Implement or adapt an existing FreeMatch SSL training loop with a ViT backbone from timm.
4. Train the model using the labeled and unlabeled data and evaluate accuracy on the test set.
5. Visualize training curves and report final accuracy compared to fully supervised baseline.

**Ships as:** A Jupyter notebook or Python script demonstrating semi-supervised training with FreeMatch on CIFAR-10, with accuracy results and training plots.

**Stretch goal:** Add a simple web interface to allow users to label images and trigger training, mimicking HARVEST’s domain expert interface.

### Intermediate — Distributed Semi-Supervised Training with Vision Transformers on a Public Dataset
*Effort: 1-3 weekends, ~20 hours*

You implement a distributed data-parallel training pipeline for semi-supervised learning using a ViT model and FreeMatch or a similar SSL algorithm on a public image dataset like CIFAR-100 or STL-10. You compare SSL accuracy and training speed against a supervised baseline on a single machine with multiple GPUs or simulated distributed setup.

**Why it shows you understood the paper:** This project demonstrates your ability to implement distributed data parallelism combined with SSL algorithms, replicating HARVEST’s core approach to reducing training time and labeling needs. A professor would see you understand both the distributed training mechanics and SSL algorithm integration.

**Grounded in:** Design and implementation of HARVEST combining SSL algorithms with distributed data parallelism on multi-GPU clusters, achieving significant speedups and high accuracy.

**Tech stack:** Python 3.11, PyTorch, torch.distributed, timm, torchvision, Docker (optional)

**Data:** Public image dataset such as CIFAR-100 or STL-10, used as a substitute for the paper's digital agriculture datasets.

**Build it:**

1. Set up a multi-GPU environment or simulate distributed training with torch.distributed.
2. Implement a ViT model training pipeline with FreeMatch or a similar SSL algorithm.
3. Partition the dataset into labeled and unlabeled subsets with limited labeled samples per class.
4. Run distributed training and measure training time and accuracy.
5. Compare results with a fully supervised baseline trained under the same distributed setup.
6. Document speedup factors and accuracy differences.

**Ships as:** A GitHub repository with scripts to run distributed SSL training on a public dataset, including README with performance and accuracy comparisons.

**Stretch goal:** Add support for a simple web-based labeling interface to simulate domain expert interaction.

### Advanced — Efficient Edge Deployment of Semi-Supervised Vision Transformer Models
*Effort: a few weeks, ~40+ hours*

You extend the HARVEST approach by implementing model compression and efficient inference techniques (e.g., pruning, quantization) on a semi-supervised trained ViT model to enable deployment on resource-constrained edge devices. You evaluate inference latency, model size, and accuracy trade-offs on a public dataset.

**Why it shows you understood the paper:** This project tackles one of HARVEST’s stated limitations and future directions: efficient inference and deployment on edge devices. A professor would see you understand the full pipeline from distributed SSL training to practical deployment challenges and solutions.

**Grounded in:** Limitation: Efficient inferencing and deployment on edge devices with memory and computational constraints remain future work; Future direction: Extend HARVEST to support efficient inferencing and deployment on edge devices.

**Tech stack:** Python 3.11, PyTorch, torchvision, timm, ONNX, ONNX Runtime, TensorRT (optional), Docker

**Data:** Public image dataset such as CIFAR-10 or STL-10, used as a substitute for the paper's digital agriculture datasets.

**Build it:**

1. Train or reuse a semi-supervised ViT model from the intermediate project.
2. Apply model compression techniques such as pruning and quantization.
3. Export the compressed model to ONNX format.
4. Set up an inference pipeline using ONNX Runtime or TensorRT to measure latency and memory usage.
5. Evaluate accuracy, inference speed, and model size trade-offs on the test set.
6. Document deployment considerations and potential bottlenecks for edge devices.

**Ships as:** A GitHub repository demonstrating compressed SSL ViT model inference optimized for edge devices, with benchmarks and deployment notes.

**Stretch goal:** Integrate a minimal web or mobile app to demonstrate real-time inference on a simulated edge device.
