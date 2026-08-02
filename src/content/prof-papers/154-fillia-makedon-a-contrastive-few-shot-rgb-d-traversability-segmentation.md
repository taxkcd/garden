---
title: "154 · A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation — Fillia Makedon"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fillia-makedon"
source_hash: "1fbbefa0482858d44ca519548fc0ac63114767a5aac7b367346f4f25356189e9"
sequence: 154
generator: "outreach-garden: managed"
---

# 154 · A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation

## At a glance

- **Professor:** Fillia Makedon
- **Institution:** University of Texas at Arlington
- **Paper:** [A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation](https://arxiv.org/pdf/2603.06927)
- **Authors:** Qiyuan An, Tuan Dang, Fillia Makedon
- **Year:** 2026

## Paper overview

This paper presents a new method for indoor robotic navigation that improves the identification of safe areas for robots to move by combining RGB images with sparse 1D laser depth data. It uses few-shot learning to adapt to new environments with limited labeled data and introduces a novel negative contrastive learning approach to better distinguish obstacles from free space, especially thin objects like chair legs that are often missed by vision-only models.

### Why it matters

**Research problem:** Indoor traversability segmentation is challenging due to complex environments, varying lighting, clutter, and thin obstacles that are hard to detect with vision-only methods. Existing models often fail to generalize well with limited labeled data and struggle to detect thin obstacles, posing safety risks for indoor robots.

**Why it matters:** Reliable identification of traversable free space is critical for safe and effective indoor robotic navigation in applications like warehouse automation, hospital robotics, and service robots. Missing thin obstacles can cause accidents and damage, while collecting large labeled datasets is costly and time-consuming.

**Key contributions:**

- Integration of RGB images and sparse 1D laser depth data for multi-modal traversability segmentation.
- Design of a two-stage attention depth module that dynamically aligns 1D depth vectors with RGB images horizontally and vertically.
- Introduction of a negative contrastive learning branch that explicitly models obstacles to refine free-space predictions and reduce overfitting.
- Collection and release of a large-scale indoor RGB-D traversability dataset with sparse 1D depth annotations to benchmark future research.

## About the professor

**Fillia Makedon** — Jenkins-Garrett Professor, Department of Computer Science and Engineering, University of Texas at Arlington.

Research interests: Human Computer Interaction (HCI), Human Robot Interaction (HRI), Pervasive Computing, Machine Learning, Computational Multimedia, Cognitive Computing

### Research links

- [Faculty/profile page](http://heracleia.uta.edu/~makedon)
- [Professor website](http://heracleia.uta.edu/~makedon/)
- [Lab website](http://heracleia.uta.edu/)
- [DBLP](http://dblp.uni-trier.de/pers/hd/m/Makedon:Fillia)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on contrastive few-shot RGB-D traversability segmentation, start with foundational concepts including multi-modal RGB-D segmentation, few-shot learning for segmentation, contrastive learning methods, and attention mechanisms in deep learning. These prerequisites build the necessary background on sensor fusion, learning with limited data, contrastive training strategies, and attention modules. Finally, focus on the core concept of the paper's novel contrastive few-shot RGB-D segmentation framework to integrate all these ideas in the context of the authors' contributions.

### Multi-modal RGB-D segmentation *(prerequisite)*
This section covers the fusion of RGB images and depth data for segmentation tasks, which is critical to understand how the paper integrates sparse 1D laser depth with RGB images. The selected talk is a university-level research presentation on robust RGB-D segmentation methods, providing an advanced and relevant perspective on multi-modal fusion.

*How the paper uses it:* The paper proposes a multi-modal segmentation framework that fuses RGB images with sparse 1D laser depth vectors for improved traversability segmentation.

▶ [Talk by M. Sodano: Robust Double-Encoder Network for RGB-D Panoptic Segmentation, (ICRA'23)](https://www.youtube.com/watch?v=r1pabV3sQYk) — Cyrill Stachniss · 3 years ago

### Few-shot learning for segmentation *(prerequisite)*
Understanding few-shot learning paradigms for segmentation is essential to grasp how the paper adapts to new environments with limited labeled data. The chosen video is an academic seminar that critically examines progress in few-shot learning, providing depth beyond introductory content.

*How the paper uses it:* The paper adopts a few-shot segmentation paradigm to enable adaptation with limited labeled data in new indoor environments.

▶ [AI Seminar Series: Ismail Ben Ayed, Few-Shot Learning: Are We Making Progress? (April 30)](https://www.youtube.com/watch?v=i2n5DN8jQu8) — Amii · 1:08:51 · 5 years ago

### Contrastive learning methods *(prerequisite)*
Contrastive learning is key to the paper's novel negative contrastive learning branch. The selected video is a detailed podcast episode featuring leading researchers discussing contrastive learning principles and applications, offering a rigorous and research-focused explanation.

*How the paper uses it:* The paper introduces a negative contrastive learning branch to explicitly model obstacles and refine free-space predictions.

▶ [Contrastive learning explained | Ishan Misra and Lex Fridman](https://www.youtube.com/watch?v=bDfqtxKEThI) — Lex Clips · 5 years ago

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms underpin the design of the paper's two-stage attention depth module. The chosen video is a well-regarded academic explanation of attention in neural networks, suitable for advanced readers seeking foundational understanding.

*How the paper uses it:* The paper designs a two-stage attention depth module that dynamically aligns 1D depth vectors with RGB images.

▶ [Attention Mechanism](https://www.youtube.com/watch?v=oMeIDqRguLY) — Matt Namvarpour · 5 years ago

### Contrastive few-shot RGB-D segmentation framework
This section focuses on the paper's core contribution: the integration of contrastive learning, few-shot adaptation, and multi-modal RGB-D segmentation. Although no direct author talk is available, the selected video is a concise research presentation on integrative few-shot learning for classification and segmentation, closely related to the paper's methodology.

*How the paper uses it:* The paper's central method combines few-shot learning, contrastive learning, and RGB-D fusion for traversability segmentation.

▶ [[CVPR'22] Integrative Few-Shot Learning for Classification and Segmentation](https://www.youtube.com/watch?v=5pf72OMCBmE) — Dahyun Kang · 4:58 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding the paper's approach to indoor robotic navigation. We start with the basics of attention mechanisms in deep learning, then cover contrastive learning methods, followed by few-shot learning for segmentation. Next, we explore multi-modal RGB-D segmentation to understand sensor fusion. Finally, we conclude with a focused explanation of the paper's core method combining contrastive few-shot learning with RGB-D data.

### Attention mechanisms in deep learning *(prerequisite)*
Attention mechanisms help neural networks focus on the most relevant parts of input data, improving performance in tasks like image segmentation. Understanding how attention works is key to grasping the paper's two-stage attention depth module that aligns depth and RGB features.

*How the paper uses it:* The paper's two-stage attention depth module dynamically aligns 1D depth vectors with RGB images using attention along vertical and horizontal dimensions.

▶ [Attention Mechanism](https://www.youtube.com/watch?v=oMeIDqRguLY) — Matt Namvarpour · 5 years ago

### Contrastive learning methods *(prerequisite)*
Contrastive learning trains models to distinguish between similar (positive) and dissimilar (negative) examples, improving feature representation. This concept is crucial to understanding the paper's novel negative contrastive learning branch that refines obstacle and free-space segmentation.

*How the paper uses it:* The paper introduces a negative contrastive learning branch that explicitly models obstacles to improve segmentation robustness and reduce overfitting.

▶ [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — Cyrill Stachniss · 3 years ago

### Few-shot learning for segmentation *(prerequisite)*
Few-shot learning enables models to adapt to new classes or environments using only a few labeled examples, which is vital when labeled data is scarce. This helps understand how the paper's method generalizes to new indoor scenes with limited annotations.

*How the paper uses it:* The paper adopts a few-shot segmentation paradigm to adapt to new environments with limited labeled data for traversability segmentation.

▶ [Few Shot Learning - EXPLAINED!](https://www.youtube.com/watch?v=VqPmrYFvKf8) — CodeEmporium · 10:01 · 5 years ago

### Multi-modal RGB-D segmentation *(prerequisite)*
Multi-modal RGB-D segmentation combines color images (RGB) with depth data to improve scene understanding, especially for detecting obstacles. This background is essential to appreciate the paper's fusion of RGB images with sparse 1D laser depth data for better traversability segmentation.

*How the paper uses it:* The paper proposes a multi-modal framework integrating RGB images and sparse 1D laser depth vectors to improve detection of thin obstacles in indoor navigation.

▶ [What Is an RGB-D Camera? (And Why It's a Game-Changer for Automation!) | Explained](https://www.youtube.com/watch?v=DHM4moDOYTM) — Goermicro Vzense Technology,Inc. · 1 year ago

### Contrastive few-shot RGB-D segmentation framework
This concept combines all previous ideas into a framework that uses contrastive learning and few-shot adaptation on multi-modal RGB-D data for robust indoor traversability segmentation. Understanding this ties together the paper's key innovations and contributions.

*How the paper uses it:* The paper's core method is a contrastive few-shot RGB-D segmentation framework that fuses RGB and sparse depth data with a novel negative contrastive learning branch.

▶ [[CVPR'22] Integrative Few-Shot Learning for Classification and Segmentation](https://www.youtube.com/watch?v=5pf72OMCBmE) — Dahyun Kang · 4:58 · 4 years ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
