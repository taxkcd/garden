---
title: "685 · FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing — Sos S. Agaian"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sos-s-agaian"
source_hash: "46e483f7781d495cab9f4881e3f39efcd5e35627a713ef4f51cfbfe92f806e8a"
sequence: 685
generator: "outreach-garden: managed"
---

# 685 · FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing

## At a glance

- **Professor:** Sos S. Agaian
- **Institution:** CUNY
- **Paper:** [FactorizePhys: Matrix Factorization for Multidimensional Attention in Remote Physiological Sensing](https://arxiv.org/abs/2411.01542v1)
- **Authors:** Jitesh Joshi, Sos S. Agaian, Youngjun Cho
- **Year:** 2024

## Paper overview

This paper introduces FactorizePhys, a novel 3D convolutional neural network (CNN) architecture that uses a new attention mechanism called the Factorized Self-Attention Module (FSAM) based on nonnegative matrix factorization (NMF). The method improves the estimation of blood volume pulse signals from facial videos, which is important for non-contact physiological monitoring. FSAM jointly computes attention across spatial, temporal, and channel dimensions, enhancing signal extraction and generalization across datasets.

### Why it matters

**Research problem:** Existing remote photoplethysmography (rPPG) methods rely on attention mechanisms that compute attention separately across spatial, temporal, and channel dimensions, which limits their ability to capture multidimensional correlations needed for accurate and generalizable physiological signal extraction from video.

**Why it matters:** Accurate and robust non-contact physiological sensing, such as heart rate monitoring from videos, has important applications in healthcare, stress detection, driver monitoring, and social biofeedback. Improving attention mechanisms to jointly consider spatial, temporal, and channel features can enhance signal quality and generalization, enabling better real-world deployment.

**Key contributions:**

- Introduction of the Factorized Self-Attention Module (FSAM) using NMF for joint multidimensional attention in spatial, temporal, and channel dimensions.
- Development of FactorizePhys, an end-to-end 3D-CNN architecture integrating FSAM for robust rPPG signal estimation from raw facial video frames.
- Adaptation of FSAM to a 2D-CNN architecture (EfficientPhys) demonstrating its versatility across different network types.
- Comprehensive evaluation on four public datasets showing superior cross-dataset generalization and performance compared to state-of-the-art rPPG methods.
- Ablation studies confirming the effectiveness of rank-1 factorization and architectural choices for FSAM.

## About the professor

**Sos S. Agaian** — Distinguished Professor, Computer Science, CUNY.

Research interests: Big and Small Data Analytics, Computational Vision and Sensing, Machine Learning and Urban Computing, Multimodal Biometric and Digital Forensics, Information Processing and Fusion, and Fast Algorithms

### Research links

- [Faculty/profile page](https://www.csi.cuny.edu/campus-directory/sos-agaian)
- [Google Scholar](https://scholar.google.com/citations?user=FazfMZMAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Nonnegative Matrix Factorization
**The paper assumes:** matrix factorization methods, nonnegative matrix factorization theory, low-rank approximation, linear algebra for machine learning
**Already in this field?** Skip this entirely if you already understand the theory and applications of nonnegative matrix factorization in machine learning contexts.

This background focuses on Nonnegative Matrix Factorization (NMF), the core mathematical technique underlying the Factorized Self-Attention Module (FSAM) in the paper. Understanding NMF is crucial to grasp how the paper jointly computes multidimensional attention for physiological signal extraction. The course option offers a rigorous, university-level deep dive into matrix decomposition methods including NMF, while the fast track provides a concise, focused introduction to NMF and its applications, suitable for quickly gaining intuition and practical understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [matrix factorization](https://www.youtube.com/playlist?list=PLZFdXxCDZvbWphLRxd94848pY2u5Oft6-) — averroez · 10 videos · 7.6h across 10 episodes

**Watch only this:** Episodes 1: 'How does Netflix recommend movies? Matrix Factorization' (~45 min) and 2: 'Matrix Factorizations' (~45 min), about 1.5 hours total — these two episodes introduce matrix factorization and NMF concepts essential for grasping FSAM.

*Why it unblocks this paper:* This playlist by averroez includes a clear, concise introduction to matrix factorization techniques including NMF, with practical examples such as Netflix recommendations. It provides a quick, intuitive understanding of NMF relevant to the paper's attention mechanism without requiring a full deep dive.

*If you want all of it:* All 10 episodes, about 7.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FactorizePhys paper, start by building foundational knowledge on 3D convolutional neural networks and attention mechanisms in deep learning, as these are critical to grasping the architecture and the novel Factorized Self-Attention Module (FSAM). Next, explore the domain-specific context of remote photoplethysmography (rPPG) signal extraction to appreciate the application challenges and significance. Finally, focus on the core concept of the paper itself, including the authors' own talk if available, to get the most precise and detailed explanation of their novel approach using nonnegative matrix factorization for multidimensional attention.

### 3D convolutional neural networks *(prerequisite)*
3D convolutional neural networks extend traditional 2D CNNs by convolving filters over spatial and temporal dimensions, enabling the modeling of video data or volumetric inputs. Understanding 3D-CNNs is essential to grasp how FactorizePhys processes spatial-temporal-channel video data for physiological signal extraction.

*How the paper uses it:* FactorizePhys is a 3D-CNN architecture that processes raw facial video frames across spatial, temporal, and channel dimensions.

▶ [3: Deep Learning for Computer Vision – Building Convolutional Neural Networks from Scratch](https://www.youtube.com/watch?v=8QuyDcMIdRc) — MIT OpenCourseWare · 1:17:13 · 9mo ago

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms allow neural networks to dynamically focus on relevant parts of input data, improving performance on sequential and spatial tasks. A rigorous understanding of attention is crucial to appreciate how FSAM innovates by jointly computing multidimensional attention across spatial, temporal, and channel dimensions.

*How the paper uses it:* FSAM is a novel attention module that improves upon prior methods by jointly computing multidimensional attention for rPPG signal estimation.

▶ [Deep Learning 7. Attention and Memory in Deep Learning](https://www.youtube.com/watch?v=Q57rzaHHO0k) — Google DeepMind · 1:40:19 · 7y ago

### Remote photoplethysmography signal extraction *(prerequisite)*
Remote photoplethysmography (rPPG) involves extracting physiological signals such as heart rate from facial videos without contact. Understanding the signal characteristics, challenges, and existing methods in rPPG provides context for the paper's motivation and evaluation.

*How the paper uses it:* The paper targets improved rPPG signal estimation from facial videos using advanced attention mechanisms.

▶ [Algorithmic Principles of Remote-PPG](https://www.youtube.com/watch?v=GMN1A8Wfwto) — Wenjin Wang · 8:03 · 9y ago

### Nonnegative matrix factorization attention
Nonnegative matrix factorization (NMF) is a technique to decompose data into parts-based representations, useful for extracting meaningful latent factors. FSAM leverages NMF to jointly compute attention across multiple dimensions, enabling better feature correlation capture in video data.

*How the paper uses it:* FSAM uses NMF to jointly compute multidimensional attention from voxel embeddings in the FactorizePhys architecture.

▶ [Algorithms for Near-Separable Nonnegative Matrix Factorization](https://www.youtube.com/watch?v=O8YDAMjIzYs) — Microsoft Research · 1:16:01 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FactorizePhys paper, start by learning the basics of remote photoplethysmography (rPPG) signal extraction, which is the application domain of the paper. Then build foundational knowledge of 3D convolutional neural networks and attention mechanisms in deep learning, which are key to the model architecture and the novel attention module. Finally, grasp the core method of nonnegative matrix factorization (NMF) as used in the Factorized Self-Attention Module (FSAM) to jointly compute multidimensional attention.

### Remote photoplethysmography signal extraction *(prerequisite)*
Learn what rPPG is and how physiological signals like heart rate can be extracted remotely from facial videos using light reflection changes. This provides context on the problem FactorizePhys aims to solve and why accurate signal extraction is challenging.

*How the paper uses it:* The paper focuses on improving rPPG signal estimation from facial videos for non-contact physiological monitoring.

▶ [How Webcams Detect Your Heart Rate: rPPG Signal Processing Explained](https://www.youtube.com/watch?v=vi7-qoj80HA) — BioniChaos · 10:02 · 2mo ago

### 3D convolutional neural networks *(prerequisite)*
Understand how 3D CNNs extend traditional 2D convolutions to process spatial and temporal dimensions simultaneously, making them suitable for video data. This knowledge is essential to grasp how FactorizePhys processes video frames as volumetric data.

*How the paper uses it:* FactorizePhys is a novel 3D-CNN architecture designed to process spatial-temporal-channel video data for rPPG estimation.

▶ [C4W1L06 Convolutions Over Volumes](https://www.youtube.com/watch?v=KTB_OFoAQcc) — DeepLearningAI · 10:45 · 8y ago

### Attention mechanisms in deep learning *(prerequisite)*
Learn the intuition behind attention mechanisms, which allow models to focus on the most relevant parts of input data by computing weighted importance scores. This is foundational to understanding how FSAM improves over prior separate attention computations.

*How the paper uses it:* FSAM is an attention module that jointly computes multidimensional attention across spatial, temporal, and channel dimensions.

▶ [Attention Mechanism Explained](https://www.youtube.com/watch?v=gSwjW945Ivc) — SH AI Academy · 16:38 · 1y ago

### Nonnegative matrix factorization attention
Explore nonnegative matrix factorization (NMF), a technique to approximate a matrix as a product of two nonnegative matrices, which can reveal latent structures. FSAM uses NMF to jointly compute attention across multiple dimensions without squeezing any dimension.

*How the paper uses it:* FSAM applies NMF to voxel embeddings to compute joint multidimensional attention in FactorizePhys.

▶ [Non-Negative Matrix Factorization Formulation, Algorithm and Application Clearly Explained](https://www.youtube.com/watch?v=p3vI-AFDHjc) — Rafeed_BioStat · 19:18 · 1y ago

## Already in your library

- [F23 Lecture 9 Non-Negative Matrix Factorization](https://www.youtube.com/watch?v=FFNgElSwoOU) — also for: Examining the dynamics of three-dimensional genome organization with multitask matrix factorization (Sushmita Roy)
- [Matrix Factorization - Numberphile](https://www.youtube.com/watch?v=wTUSz-HSaBg) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Lecture 5 | Convolutional Neural Networks](https://www.youtube.com/watch?v=bNb2fEVKeEo) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [CS231n Winter 2016: Lecture 7: Convolutional Neural Networks](https://www.youtube.com/watch?v=LxfUGhug-iQ) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [MIT 6.S191: Convolutional Neural Networks](https://www.youtube.com/watch?v=pqIcoskUuWs) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Convolutional Neural Networks (CNNs) explained](https://www.youtube.com/watch?v=YRhxdVk_sIs) — also for: Deep Convolutional Neural Networks Detect no Morphological Differences Between Culture-Positive and Culture-Negative Infectious Keratitis Images (Xubo Song)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — also for: Grounded Video Description (Jason J. Corso)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Self-Attention Explained: How Transformers Actually Work (Full Visual Breakdown)](https://www.youtube.com/watch?v=vkhPtpUiLd8) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the FactorizePhys paper. The beginner project focuses on implementing and visualizing the core idea of the Factorized Self-Attention Module (FSAM) using nonnegative matrix factorization on synthetic or simplified video data. The intermediate project involves reimplementing the FactorizePhys 3D-CNN architecture with FSAM on a publicly available facial video dataset for remote photoplethysmography (rPPG) signal estimation, comparing performance against a baseline without FSAM. The advanced project extends FSAM to address one of the paper's limitations by adapting the attention mechanism to improve robustness against head movement and lighting changes, or explores FSAM's application in a new spatial-temporal domain such as video action recognition.

### Beginner — FSAM Visualization on Synthetic Video Data
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the Factorized Self-Attention Module (FSAM) using nonnegative matrix factorization (NMF) on voxel embeddings derived from synthetic or small-scale facial video data. You visualize how FSAM jointly computes attention across spatial, temporal, and channel dimensions and compare it to separate attention computations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core FSAM mechanism and its multidimensional attention computation, showing you can translate the mathematical concept into code and interpret its effect on attention maps.

**Grounded in:** Introduction of the Factorized Self-Attention Module (FSAM) using NMF for joint multidimensional attention in spatial, temporal, and channel dimensions.

**Tech stack:** Python 3.11, NumPy, scikit-learn (for NMF), Matplotlib or Seaborn

**Data:** Synthetic voxel embeddings generated from small facial video clips or simulated 3D tensors representing spatial-temporal-channel data.

**Build it:**

1. Generate or load a small synthetic 3D tensor representing spatial, temporal, and channel dimensions of video data.
2. Implement rank-1 nonnegative matrix factorization (NMF) on the voxel embeddings to compute joint attention weights.
3. Visualize the resulting attention maps across spatial, temporal, and channel dimensions.
4. Compare these joint attention maps with separately computed attention maps along each dimension.
5. Document the implementation and visualization results in a clear README.

**Ships as:** A GitHub repository containing the FSAM implementation on synthetic data, visualizations of joint vs separate attention maps, and a README explaining the method and findings.

**Stretch goal:** Extend the visualization to higher-rank NMF factorizations and analyze their effect on attention quality.

### Intermediate — FactorizePhys Reimplementation on Public rPPG Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the FactorizePhys 3D-CNN architecture integrating FSAM from the paper, applying it to a publicly available facial video dataset for remote photoplethysmography (rPPG) signal estimation. You train the model and compare its heart rate estimation accuracy and signal quality metrics against a baseline 3D-CNN without FSAM.

**Why it shows you understood the paper:** This project shows you can implement the paper's core architecture and attention mechanism, apply it to real data, and reproduce key performance improvements, demonstrating comprehension of both the model design and evaluation.

**Grounded in:** Development of FactorizePhys, an end-to-end 3D-CNN architecture integrating FSAM for robust rPPG signal estimation from raw facial video frames; FactorizePhys with FSAM outperforms state-of-the-art methods in heart rate estimation accuracy and signal quality metrics.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Use a publicly available rPPG facial video dataset such as PURE or UBFC-rPPG as a substitute for the paper's datasets.

**Build it:**

1. Acquire and preprocess the chosen public rPPG facial video dataset (e.g., PURE or UBFC-rPPG).
2. Implement the FactorizePhys 3D-CNN architecture with the FSAM attention module based on the paper's descriptions.
3. Implement a baseline 3D-CNN model without FSAM for comparison.
4. Train both models on the dataset and evaluate heart rate estimation accuracy and signal quality metrics (e.g., SNR, MACC).
5. Analyze and visualize the performance differences and document the results.

**Ships as:** A GitHub repository with the FactorizePhys and baseline implementations, training scripts, evaluation metrics, and a README detailing the methodology and comparative results.

**Stretch goal:** Adapt FSAM to a 2D-CNN architecture (e.g., EfficientPhys) and evaluate performance changes.

### Advanced — Robust FSAM Extension for Head Movement and Lighting Variations
*Effort: 3+ weeks*

You develop an extension of FSAM that incorporates temporal or frequency constraints inspired by the paper's future directions to improve robustness against head movement, occlusions, and lighting changes in rPPG signal extraction. Alternatively, you adapt FSAM to a new spatial-temporal domain such as video action recognition, demonstrating its versatility beyond physiological sensing.

**Why it shows you understood the paper:** This project evidences deep comprehension of FSAM's limitations and future potential by addressing a stated challenge or transferring the method to a novel domain, showcasing research-level initiative and technical skill.

**Grounded in:** Limitations include susceptibility to head movement and lighting changes; Future directions include developing NMF variants with temporal or frequency constraints and exploring FSAM's application in other spatial-temporal domains.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib, scikit-learn

**Data:** Use a public rPPG dataset with challenging conditions or a public video action recognition dataset such as UCF101 or HMDB51 for domain transfer experiments.

**Build it:**

1. Review the FSAM implementation and identify how to incorporate temporal or frequency constraints into the NMF attention mechanism.
2. Modify the FSAM module to include these constraints or design a variant tailored to robustness against motion and lighting changes.
3. Integrate the enhanced FSAM into the FactorizePhys architecture or a suitable model for the new domain.
4. Train and evaluate the model on the chosen dataset, focusing on robustness metrics or domain-specific performance.
5. Analyze improvements over the original FSAM and document the methodology, experiments, and results.

**Ships as:** A GitHub repository containing the enhanced FSAM implementation, training and evaluation code, and a detailed README discussing the extension, experiments, and findings.

**Stretch goal:** Explore multimodal sensor fusion by combining FSAM attention with additional sensor inputs (e.g., depth or thermal data) for physiological or action recognition tasks.

_The paper's authors did not release code or datasets; you will need to reimplement FSAM from the paper's descriptions and use publicly available rPPG datasets such as PURE or UBFC-rPPG as substitutes._
