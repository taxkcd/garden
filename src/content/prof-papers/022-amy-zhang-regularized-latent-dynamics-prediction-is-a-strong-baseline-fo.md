---
title: "022 · Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models — Amy Zhang"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amyzhang-github-io"
source_hash: "490ba2b438bc76ff9405d36cafffaa5224af7b3c0c871c489d002396322989b3"
sequence: 22
generator: "outreach-garden: managed"
---

# 022 · Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models

## At a glance

- **Professor:** Amy Zhang
- **Institution:** University of Texas at Austin
- **Paper:** [Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models](https://arxiv.org/pdf/2603.15857)
- **Authors:** Pranaya Jajoo, Amy Zhang, Harshit Sikchi, Scott Niekum, Siddhant Agarwal, Martha White
- **Year:** 2026

## Paper overview

This paper introduces RLDP, a simple and effective method for learning state representations in reinforcement learning that enables agents to perform zero-shot learning on new tasks without additional training. RLDP uses latent dynamics prediction with an orthogonality regularization to maintain diverse and robust features, outperforming or matching more complex existing methods, especially in low-data scenarios.

### Why it matters

**Research problem:** How to learn effective state representations for Behavioral Foundation Models (BFMs) that enable zero-shot reinforcement learning (RL) across a wide range of tasks, without relying on complex representation learning objectives or policy-dependent Bellman backups that can cause instability and poor generalization.

**Why it matters:** Zero-shot RL has significant practical potential for creating generalist agents that can adapt to new, unseen tasks without retraining, which is crucial for applications like robotics. Existing methods rely on complex objectives and suffer from instability, feature collapse, and poor performance in low-coverage datasets, limiting their practical utility.

**Key contributions:**

- Proposed RLDP, a simple latent dynamics prediction objective with orthogonality regularization for learning state features suitable for zero-shot RL.
- Identified and mitigated feature collapse in latent dynamics prediction by introducing an orthogonality regularizer.
- Empirically demonstrated that RLDP matches or surpasses state-of-the-art complex representation learning methods across multiple continuous control benchmarks in both offline and online zero-shot RL settings.
- Showed that RLDP is robust and effective in low-coverage offline datasets where prior methods fail.
- Provided extensive ablation studies highlighting the importance of orthogonality regularization and spherical normalization in the encoder architecture.

## About the professor

**Amy Zhang** — Assistant Professor, Chandra Family Department of Electrical and Computer Engineering, University of Texas at Austin.

Research interests: theory and algorithms for sequential decision-making problems, with an emphasis on reinforcement learning, self-supervised learning, and representation learning, with a focus on improving robustness, generalization, and sample efficiency

### Research links

- [Faculty/profile page](https://amyzhang.github.io)
- [Resolved homepage](https://amyzhang.github.io/)
- [Lab website](https://midi-lab.github.io/)

## Learning path

To deeply understand the paper 'Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models,' start by building foundational knowledge on representation learning in reinforcement learning and offline RL challenges, which provide the context for the paper's contributions. Then study orthogonality regularization and successor features to grasp key techniques used in the method. Finally, focus on the core concept of latent dynamics prediction and the authors' own talk or closest relevant advanced talk to directly engage with the paper's novel approach and empirical results.

## Recommended videos (in order)

### Representation learning in reinforcement learning *(prerequisite)*
Representation learning is fundamental for extracting meaningful state features that enable generalization and zero-shot learning in RL. This section covers advanced university lectures and seminars that rigorously explain reconstruction-based and other representation learning methods in RL.

*How the paper uses it:* The paper builds on representation learning to develop effective state features for zero-shot RL without complex objectives.

▶ [Representation Learning and Exploration in Reinforcement Learning](https://www.youtube.com/watch?v=_t3lRD6Gml8) — Simons Institute for the Theory of Computing · 29:56 · Streamed 5 years ago

### Offline reinforcement learning challenges *(prerequisite)*
Understanding the challenges of offline RL, especially in low-coverage datasets, is critical to appreciate RLDP's robustness and practical advantages. Selected talks provide advanced insights into offline RL algorithms and their limitations.

*How the paper uses it:* RLDP demonstrates robustness in low-coverage offline datasets where prior methods fail.

▶ [Offline Reinforcement Learning](https://www.youtube.com/watch?v=qgZPZREor5I) — RAIL · 51:34

### Orthogonality regularization in neural networks *(prerequisite)*
Orthogonality regularization is a key technique to prevent feature collapse and maintain diverse representations. This section includes mathematically rigorous and research-level discussions on orthogonality and related regularization methods in neural networks.

*How the paper uses it:* The paper introduces orthogonality regularization to maintain feature diversity in latent dynamics prediction.

▶ [How To Learn Math for Machine Learning FAST (Even With ...](https://www.youtube.com/watch?v=KgolhE7p-KY) — Marina Wyss - AI & Machine Learning · 12:09

### Successor features and successor measures *(prerequisite)*
Successor features provide a powerful framework for generalization and policy improvement in RL. Advanced talks explain the theory and applications of successor representations relevant to behavioral foundation models.

*How the paper uses it:* RLDP uses learned representations to train BFMs via successor measure estimation and policy improvement.

▶ [Generalizing successor representations across policies](https://www.youtube.com/watch?v=Gfv26bD3Mlo) — Microsoft Research · 9:34

### Latent dynamics prediction
Latent dynamics prediction is the core method for learning state representations by predicting future latent states. This section features advanced research talks on latent world models and dynamics prediction relevant to the paper's approach.

*How the paper uses it:* RLDP centers on latent dynamics prediction combined with orthogonality regularization for representation learning.

▶ [Latent Video World Models: Present and Future [Wonjun Jo]](https://www.youtube.com/watch?v=S6iDCg9SDmo) — AMI Lab @ KAIST (PI: Prof. Tae-Hyun Oh) · 21:56
