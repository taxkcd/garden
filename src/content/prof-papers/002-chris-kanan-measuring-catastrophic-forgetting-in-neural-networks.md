---
title: "002 · Measuring Catastrophic Forgetting in Neural Networks — Chris Kanan"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-chriskanan-com"
source_hash: "3df462202c4fe1a0a14f3253472f4b73fe712db28c26cee56f4cdc4293450ed7"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Measuring Catastrophic Forgetting in Neural Networks," start with foundational concepts in continual learning and key mechanisms such as regularization, rehearsal, and ensembling in deep learning. Then, focus on the core problem of catastrophic forgetting in neural networks with advanced talks and finally examine the authors' own presentations and related research talks for direct insights into their empirical comparisons and findings.

### Continual learning in AI *(prerequisite)*
Continual learning is the foundational concept underlying the paper's focus on lifelong learning and incremental task adaptation. Understanding the challenges and motivations for continual learning in AI provides context for why catastrophic forgetting is a critical problem to address.

*How the paper uses it:* The paper addresses catastrophic forgetting as a major obstacle to effective continual learning in neural networks.

▶ [Bayesian continual learning and forgetting in neural networks - Kellian COTTART](https://www.youtube.com/watch?v=MAahAo-vwzo) — IPhT-TV · 9 months ago

### Regularization methods in deep learning *(prerequisite)*
Regularization techniques like Elastic Weight Consolidation (EWC) are key mechanisms studied in the paper to mitigate forgetting. A solid grasp of regularization principles in deep learning is essential to understand how these methods constrain model updates to preserve prior knowledge.

*How the paper uses it:* EWC, a regularization method, is one of the five mechanisms empirically compared in the paper.

▶ [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — Stanford Online · 10 months ago

### Rehearsal and memory replay in neural networks *(prerequisite)*
Rehearsal methods, which involve replaying stored data or synthesized samples, are another major approach evaluated in the paper (e.g., GeppNet). Understanding memory replay mechanisms helps contextualize the trade-offs between performance and memory usage discussed by the authors.

*How the paper uses it:* The paper evaluates rehearsal-based models like GeppNet that store and replay training data to reduce forgetting.

▶ [DeepMind x UCL | Deep Learning Lectures | 8/12 |  Attention and Memory in Deep Learning](https://www.youtube.com/watch?v=AIiwuClvH6k) — Google DeepMind · 1:36:04 · 6 years ago

### Ensembling and modular networks *(prerequisite)*
Ensembling and modular network approaches, such as PathNet, are mechanisms that the paper compares for mitigating catastrophic forgetting. Learning about ensemble methods and modularity in neural networks provides insight into how these architectures can isolate task knowledge to reduce interference.

*How the paper uses it:* PathNet, an ensembling/modular method, is one of the five mechanisms compared in the paper.

▶ [Talk: Does aligning genotypic and phenotypic modularity improve the evolution of neural networks?](https://www.youtube.com/watch?v=jw3KKEA4lPw) — Evolving AI Lab · 25:16 · 9 years ago

### Catastrophic forgetting in neural networks
This is the core problem the paper addresses: how neural networks forget previously learned tasks when trained on new ones. Advanced talks on this topic provide a detailed understanding of the underlying causes and current research directions beyond introductory explanations.

*How the paper uses it:* The paper systematically measures and compares methods to mitigate catastrophic forgetting in neural networks.

▶ [Mehrdad Farajtabar: Dealing with Catastrophic Forgetting in Continual Learning of Neural Networks](https://www.youtube.com/watch?v=zCPkqWSocco) — IPM AI GROUP · 1:37:40 · 5 years ago

### Paper authors talk
Direct talks by the paper's authors or closely related presentations provide the most precise insights into their methodology, experimental design, and nuanced findings. These talks are invaluable for understanding the paper's contributions and limitations from the researchers themselves.

*How the paper uses it:* The authors' own talks offer direct insight into their empirical comparisons and conclusions on catastrophic forgetting.

▶ [Anatomy of Catastrophic Forgetting: Hidden Representations and Task Semantics](https://www.youtube.com/watch?v=3j1NOBr73es) — Vinay Ramasesh · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on catastrophic forgetting in neural networks, start by learning the foundational concept of continual learning in AI, which explains why AI systems need to learn incrementally over time. Next, grasp regularization methods in deep learning, a key technique used to mitigate forgetting. Then, explore rehearsal and memory replay approaches that help preserve learned knowledge. After that, understand ensembling and modular networks as another mitigation strategy. Finally, focus on the core problem of catastrophic forgetting itself, tying all these concepts together as addressed in the paper.

### Continual learning in AI *(prerequisite)*
Continual learning is about how AI systems can learn new tasks over time without forgetting previous knowledge. This foundational idea explains the challenges and importance of enabling AI to adapt and improve continuously after deployment.

*How the paper uses it:* The paper addresses catastrophic forgetting as a major barrier to effective continual learning in neural networks.

▶ [Why Continual Learning?](https://www.youtube.com/watch?v=4TFnWeoAK7g) — Applied Tensors · 7 months ago

### Regularization methods in deep learning *(prerequisite)*
Regularization techniques help neural networks avoid overfitting and can be adapted to preserve important knowledge when learning new tasks. Understanding these methods, such as Elastic Weight Consolidation (EWC), is key to grasping one approach to mitigate forgetting.

*How the paper uses it:* EWC is one of the five mechanisms evaluated in the paper to reduce catastrophic forgetting.

▶ [Regularization in a Neural Network | Dealing with overfitting](https://www.youtube.com/watch?v=EehRcPo1M-Q) — AssemblyAI · 4 years ago

### Rehearsal and memory replay in neural networks *(prerequisite)*
Rehearsal methods involve retraining the network on stored examples from previous tasks to prevent forgetting. Memory replay mimics how biological brains consolidate memories, making it an important strategy for lifelong learning in AI.

*How the paper uses it:* The paper evaluates GeppNet and GeppNet+STM, which use rehearsal and dual-memory models to combat forgetting.

▶ [A neural network account of memory replay and knowledge consolidation](https://www.youtube.com/watch?v=18BWVBL2A00) — Neuromatch Conference · 7:09 · 4 years ago

### Ensembling and modular networks *(prerequisite)*
Ensembling combines multiple models or subnetworks to improve learning and robustness. Modular networks isolate task-specific knowledge, which can help reduce interference and forgetting when learning incrementally.

*How the paper uses it:* PathNet, an ensembling and modular approach, is compared in the paper for its effectiveness against catastrophic forgetting.

▶ [Lec-12: Introduction to Ensemble Learning with Real Life Examples | Machine⚙️ Learning](https://www.youtube.com/watch?v=qQjOWmf8I_I) — Gate Smashers · 5:58 · 2 years ago

### Catastrophic forgetting in neural networks
Catastrophic forgetting occurs when a neural network loses previously learned information upon learning new tasks. Understanding this problem is crucial to appreciating the paper's contributions and the evaluation of different mitigation methods.

*How the paper uses it:* This is the central problem studied and measured in the paper.

▶ [Catastrophic Forgetting](https://www.youtube.com/watch?v=xOBEE1jF4zg) — Thinkstr · 4 years ago

## Already in your library

- [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [Paper Review: Overcoming catastrophic forgetting in neural networks (PNAS 2017)](https://www.youtube.com/watch?v=RIbe-qW9nqY) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [[Continual Learning Course] Lecture #2: Understanding Catastrophic Forgetting](https://www.youtube.com/watch?v=UnCAdBtvZhc) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [[Continual Learning Course] Lecture #1: Introduction and ...](https://www.youtube.com/watch?v=z9DDg2CJjeE) — also for: Introduction to open-world AI (Larry B. Holder)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
