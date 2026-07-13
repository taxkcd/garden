---
title: "002 · Measuring Catastrophic Forgetting in Neural Networks — Chris Kanan"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-chriskanan-com"
source_hash: "6732220e19a3a83ee9a6f4a987a363fa03cb239e40d57bfcc161734673c83ad8"
sequence: 2
generator: "outreach-garden: managed"
---

# 002 · Measuring Catastrophic Forgetting in Neural Networks

## At a glance

- **Professor:** Chris Kanan
- **Institution:** University of Rochester
- **Paper:** [Measuring Catastrophic Forgetting in Neural Networks](https://ojs.aaai.org/index.php/AAAI/article/download/11651/11510)
- **Authors:** Ronald Kemker, Marc McClure, Angelina Abitino, Tyler L. Hayes, Christopher Kanan
- **Year:** 2018

## Paper overview

This paper studies the problem of catastrophic forgetting in deep neural networks, where learning new tasks causes the network to forget previously learned tasks. The authors introduce new metrics and benchmarks to evaluate methods designed to mitigate this problem, comparing five different mechanisms on challenging real-world image and audio datasets. They find that no existing method fully solves catastrophic forgetting, especially on complex datasets, and suggest that combining different approaches may be necessary for effective lifelong learning.

### Why it matters

**Research problem:** Catastrophic forgetting in neural networks, where incremental learning of new tasks causes the network to forget previously learned tasks, limiting the ability of AI systems to learn continuously over time.

**Why it matters:** Incremental learning is crucial for real-world AI applications that need to adapt and learn new tasks after deployment without retraining from scratch. Overcoming catastrophic forgetting is key to developing efficient lifelong learning systems and advancing towards artificial general intelligence (AGI).

**Key contributions:**

- Introduced new metrics and large-scale benchmarks for measuring catastrophic forgetting beyond small datasets like MNIST.
- Provided a comprehensive empirical comparison of five distinct mechanisms to mitigate catastrophic forgetting.
- Demonstrated that catastrophic forgetting remains unsolved, especially on complex datasets with many classes.
- Showed that different mechanisms excel in different incremental learning paradigms and data modalities.
- Highlighted the importance of memory and computational efficiency in evaluating lifelong learning methods.

## About the professor

**Chris Kanan** — Associate Professor, Computer Science, University of Rochester.

Research interests: artificial intelligence, deep learning, continual learning, multi-modal scene understanding, visual question answering, self-supervised learning, medical computer vision, semantic segmentation, object recognition, active vision, object tracking

### Research links

- [Faculty/profile page](http://www.chriskanan.com)
- [Resolved homepage](https://chriskanan.com)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=jMxZjBoAAAAJ&view_op=list_works&sortby=pubdate)
- [LinkedIn](https://www.linkedin.com/in/chriskanan/)
- [Social profile](https://twitter.com/chriskanan)
- [See my publications page for links to specific projects, code, and datasets.](https://www.chriskanan.com/publications/)

## Learning path

To understand the paper on catastrophic forgetting in neural networks, start by learning the foundational concepts of neural networks and incremental learning, which are essential for grasping how forgetting occurs during sequential task learning. Next, study regularization techniques as they are key mechanisms evaluated in the paper to mitigate forgetting. Finally, focus on the core concept of catastrophic forgetting itself and how it is measured and benchmarked, which directly relates to the paper's main contributions.

## Recommended videos (in order)

### Neural Networks Basics *(prerequisite)*
This section covers the fundamental structure and function of neural networks, including neurons, layers, and the underlying mathematics. Understanding these basics is crucial to grasp how neural networks learn and why they might forget previously learned information when trained incrementally.

*How the paper uses it:* Understanding neural networks is essential to comprehend how catastrophic forgetting occurs in these models.

▶ [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — 3Blue1Brown · 8 years ago

### Incremental Learning in AI *(prerequisite)*
Incremental learning is a paradigm where models learn new tasks sequentially without forgetting previous tasks. This section introduces the concept and its challenges, setting the stage for understanding why catastrophic forgetting is a critical problem in AI systems that need to learn continuously.

*How the paper uses it:* Incremental learning is the learning paradigm where catastrophic forgetting is a critical problem addressed by the paper.

▶ [AI, Machine Learning, Deep Learning and Generative AI Explained](https://www.youtube.com/watch?v=qYNweeDHiyU) — IBM Technology · 1 year ago

### Regularization Techniques in Deep Learning *(prerequisite)*
Regularization techniques help prevent overfitting and can be used to preserve knowledge in neural networks during incremental learning. This section explains these methods, including Elastic Weight Consolidation (EWC), which is a key mechanism evaluated in the paper to mitigate catastrophic forgetting.

*How the paper uses it:* EWC is one of the key mechanisms evaluated in the paper to mitigate forgetting.

▶ [Neural Network Weights - Deep Learning Dictionary](https://www.youtube.com/watch?v=xoHGA8XEYVY) — deeplizard · 3:00 · 4 years ago

### Catastrophic Forgetting in Neural Networks *(prerequisite)*
This section directly addresses the core problem studied in the paper: how neural networks forget previously learned tasks when trained on new ones. It explains the phenomenon, its causes, and its implications for continual learning systems.

*How the paper uses it:* Catastrophic forgetting is the core problem studied in the paper.

▶ [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — Paul Hand · 6 years ago

### Measuring and Benchmarking Catastrophic Forgetting
Understanding how catastrophic forgetting is quantitatively measured is crucial to appreciate the paper's contributions. This section covers the metrics and benchmarks used to evaluate forgetting and the effectiveness of mitigation methods.

*How the paper uses it:* Measuring catastrophic forgetting is central to the paper's contributions in proposing new metrics and benchmarks.

▶ [Paper Review: Overcoming catastrophic forgetting in neural networks (PNAS 2017)](https://www.youtube.com/watch?v=RIbe-qW9nqY) — Deep Learning Simplified · 21:47 · 4 years ago
