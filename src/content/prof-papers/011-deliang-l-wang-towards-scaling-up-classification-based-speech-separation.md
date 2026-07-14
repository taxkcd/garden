---
title: "011 · Towards Scaling Up Classification-Based Speech Separation — DeLiang L. Wang"
date: 2026-07-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dwang"
source_hash: "70d32e7c85a0ecc8b397a8b6fa3af13a1b3e47d20c6e9ba15e3e8658cd2bef29"
sequence: 11
generator: "outreach-garden: managed"
---

# 011 · Towards Scaling Up Classification-Based Speech Separation

## At a glance

- **Professor:** DeLiang L. Wang
- **Institution:** Ohio State University
- **Paper:** [Towards Scaling Up Classification-Based Speech Separation](https://pnlwang.github.io/papers/Wang-Wang.taslp13.pdf)
- **Authors:** Yuxuan Wang, DeLiang Wang
- **Year:** 2013

## Paper overview

This paper addresses the challenge of separating speech from background noise using machine learning. Traditional methods struggle to generalize well to new speakers and noisy environments, especially when trained on small datasets. The authors propose a system that learns new features from raw audio using deep neural networks, enabling the use of linear support vector machines (SVMs) that can be trained on large datasets efficiently. Their approach improves speech separation performance and generalization to unseen conditions.

### Why it matters

**Research problem:** Improving the generalization and scalability of classification-based monaural speech separation systems, which traditionally suffer from poor performance in unmatched acoustic conditions and computational challenges when scaling to large datasets.

**Why it matters:** Effective speech separation is crucial for applications such as hearing aids and robust automatic speech recognition. Poor generalization to new speakers and noises limits real-world deployment. Additionally, computational complexity restricts training on large datasets, which is necessary to improve generalization.

**Key contributions:**

- Demonstration that training on a large variety of acoustic conditions improves generalization in speech separation.
- Proposal of a DNN-SVM system that learns discriminative features enabling efficient large-scale training with linear SVMs.
- Use of RBM pre-training to improve feature learning and network training stability.
- Empirical validation showing the DNN-SVM system outperforms Gaussian-kernel SVMs and other state-of-the-art methods.
- Analysis showing learned features increase class separability compared to raw features.

## About the professor

**DeLiang L. Wang** — Distinguished Professor of Engineering, Chair, Computer Science and Engineering, Ohio State University.

### Research links

- [Faculty/profile page](https://cse.osu.edu/people/wang.77)
- [Identity evidence](http://web.cse.ohio-state.edu/~dwang)
- [Professor website](https://cse.osu.edu/people/arora.9)
- [Resolved homepage](https://web.cse.ohio-state.edu/~arora.9/)

## Learning path

To deeply understand the paper "Towards Scaling Up Classification-Based Speech Separation," start by building foundational knowledge on Restricted Boltzmann Machines (RBMs), which are crucial for the paper's feature learning and network stability. Next, review advanced concepts on deep neural networks for feature learning to grasp how discriminative features are learned from raw audio. Finally, focus on the core concept of classification-based speech separation, prioritizing the authors' own talk or closely related conference presentations to understand their specific approach and results.

## Recommended videos (in order)

### Restricted Boltzmann Machines lecture *(prerequisite)*
RBM pre-training is a key component in the paper's approach to learning discriminative features and improving training stability of the deep neural networks. Understanding RBM architecture, energy functions, and training methods like contrastive divergence will provide essential background for the feature learning method used.

*How the paper uses it:* The paper uses RBM pre-training to improve feature learning and network training stability.

▶ [Deep Learning Lecture 10.3 - Restricted Boltzmann Machines](https://www.youtube.com/watch?v=wfFf5Fj-rzE) — Frank Noe · 34:09 · 5 years ago

### Deep neural networks for feature learning seminar *(prerequisite)*
Deep neural networks are central to the paper's approach for learning more linearly separable and discriminative features from raw acoustic data. A detailed seminar on feed-forward DNNs will help understand the architecture, learning process, and how these networks extract features relevant for speech separation.

*How the paper uses it:* The paper proposes learning discriminative features from raw audio using deep neural networks.

▶ [Deep‐Learning: Investigating feed‐forward Deep Neural Networks](https://www.youtube.com/watch?v=ALu-46sI0KA) — KDD2016 video · 51:29 · 9 years ago

### Classification-based speech separation conference
This concept covers the core method of combining learned features with classification techniques for speech separation. The authors' own talk or closely related conference presentations provide the most direct and detailed insight into their approach, experimental setup, and results, making it essential for understanding the paper's contributions.

*How the paper uses it:* The paper presents a DNN-SVM system for classification-based speech separation that scales well and generalizes to unseen conditions.

▶ [May 21, 2013 - Deliang Wang, Ohio State University](https://www.youtube.com/watch?v=fAvQtLHX8l0) — UWECEmedia · 36:43
