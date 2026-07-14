---
title: "002 · Measuring Catastrophic Forgetting in Neural Networks — Chris Kanan"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-www-chriskanan-com"
source_hash: "fc989636c8e8610c8ee6be327abff7a171657f516cc1523f889673010e3fef6e"
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

To deeply understand the paper "Measuring Catastrophic Forgetting in Neural Networks," start with foundational concepts such as Elastic Weight Consolidation (EWC), rehearsal and dual-memory models, ensembling methods, and memory and computational efficiency in lifelong learning. These prerequisites cover the main mechanisms compared in the paper and practical considerations for continual learning systems. Finally, focus on the core concept of catastrophic forgetting itself, prioritizing the authors' own detailed lecture to gain direct insights into their methodology, findings, and implications.

## Recommended videos (in order)

### Elastic Weight Consolidation (EWC) in Neural Networks *(prerequisite)*
EWC is a key regularization technique evaluated in the paper to mitigate catastrophic forgetting by selectively constraining important weights. Understanding EWC provides insight into one of the main mechanisms compared and its effectiveness in multi-modal learning scenarios.

*How the paper uses it:* EWC is one of the five mechanisms systematically compared in the paper for mitigating catastrophic forgetting.

▶ [Continual Learning Beyond Catastrophic Forgetting in Class-Incremental Scenarios - PART I](https://www.youtube.com/watch?v=OCu2vPl4Ts8) — Conference on Lifelong Learning Agents (CoLLAs) · 49:26 · 2 years ago

### Ensembling Methods for Incremental Learning *(prerequisite)*
Ensembling methods such as PathNet represent a distinct approach to mitigating forgetting by dynamically routing information through subnetworks. Understanding this approach is critical as it performed best in data permutation experiments but has practical constraints.

*How the paper uses it:* PathNet, an ensembling method, is one of the five mechanisms compared and showed strong performance but requires session labels at test time.

▶ [Lecture 7 | Training Neural Networks II](https://www.youtube.com/watch?v=_JB0AO7QxSA) — Stanford University School of Engineering · 1:15:30 · 8 years ago

### Memory and Computational Efficiency in Lifelong Learning *(prerequisite)*
Memory and computational efficiency are critical evaluation criteria emphasized by the paper for practical continual learning systems. This foundational knowledge helps contextualize the trade-offs discussed in the paper regarding model scalability and deployment.

*How the paper uses it:* The paper highlights the importance of memory and computational efficiency when evaluating lifelong learning methods.

▶ [Stanford CS330: Multi-Task and Meta-Learning, 2019 | Lecture 9 - Lifelong Learning](https://www.youtube.com/watch?v=c6VpDHoUIjQ) — Stanford Online · 1:23:26 · 6 years ago

### Authors' talk on catastrophic forgetting Kemker
This lecture by the authors provides a comprehensive and precise presentation of catastrophic forgetting, directly related to the paper's contributions. It offers detailed insights into the problem, evaluation metrics, and comparative results of different mitigation strategies.

*How the paper uses it:* This is the authors' own recorded talk on catastrophic forgetting, directly addressing the paper's content.

▶ [[Continual Learning Course] Lecture #2: Understanding Catastrophic Forgetting](https://www.youtube.com/watch?v=UnCAdBtvZhc) — ContinualAI · 1:39:31 · 4 years ago

## Already in your library

- [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [Paper Review: Overcoming catastrophic forgetting in neural networks (PNAS 2017)](https://www.youtube.com/watch?v=RIbe-qW9nqY) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
