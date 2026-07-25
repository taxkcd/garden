---
title: "022 · Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models — Amy Zhang"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amyzhang-github-io"
source_hash: "b8a428198ec13d55df42faed233f4958f66a4c2724772e04e1c5d98e5799c174"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models," start with foundational concepts in reinforcement learning representation learning and orthogonality regularization to grasp the theoretical underpinnings of the method. Then, study zero-shot reinforcement learning and successor features to contextualize the application domain and downstream use of learned representations. Finally, focus on the core concept of latent dynamics prediction and the authors' own talk on RLDP to directly learn about their novel approach and empirical findings.

### Representation learning in reinforcement learning *(prerequisite)*
Representation learning is fundamental to understanding how RLDP learns effective state features that enable zero-shot RL. This section covers advanced university lectures that explain the theory and algorithms behind learning useful representations in RL, which is critical for grasping the motivation and design of RLDP.

*How the paper uses it:* RLDP proposes a simple latent dynamics prediction objective with orthogonality regularization to learn robust state representations for zero-shot RL.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 15: Hierarchical RL and IL](https://www.youtube.com/watch?v=iKWYLSVAtfM) — Stanford Online · 7 months ago

### Orthogonality regularization in neural networks *(prerequisite)*
Orthogonality regularization is a key technique used in RLDP to prevent feature collapse and maintain diversity in learned representations. This section includes university-level lectures on regularization methods specific to neural networks, providing the theoretical background necessary to understand the orthogonality regularizer introduced in the paper.

*How the paper uses it:* The paper introduces an orthogonality regularizer to maintain feature diversity and prevent collapse in latent dynamics prediction.

▶ [L10.0 Regularization Methods for Neural Networks -- Lecture Overview](https://www.youtube.com/watch?v=Va4K-wYh_p8) — Sebastian Raschka · 5 years ago

### Zero-shot reinforcement learning *(prerequisite)*
Zero-shot RL is the target application domain where RLDP enables agents to generalize to new tasks without retraining. Understanding this concept is crucial to appreciate the significance and impact of the proposed method. Although no perfect advanced talks were found, this section includes a research lab talk that is more substantive than beginner explainers.

*How the paper uses it:* RLDP is designed to learn representations that enable zero-shot RL across diverse tasks without additional training.

▶ [Zero-shot reinforcement learning policy transfer with robust control](https://www.youtube.com/watch?v=fFKJu2jeHm4) — MSC Lab at UC Berkeley · 6 years ago

### Successor features and successor measures *(prerequisite)*
Successor features and measures are used in the paper to train behavioral foundation models using the learned representations from RLDP. This section provides advanced university lectures explaining these concepts, which are essential for understanding how RLDP's representations are leveraged for policy improvement.

*How the paper uses it:* The learned RLDP representations are used to train BFMs via successor measure estimation and policy improvement.

▶ [Successor Feature Representations](https://www.youtube.com/watch?v=RYemlh2NSzQ) — Chris Reinke · 8:32 · 3 years ago

### Latent dynamics prediction
Latent dynamics prediction is the core method RLDP uses to predict future states in latent space, forming the backbone of the representation learning approach. This section includes the authors' own talk on RLDP, providing direct insights into their methodology and results.

*How the paper uses it:* RLDP learns state representations by predicting future latent states combined with orthogonality regularization.

▶ [Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models](https://www.youtube.com/watch?v=uUVOUnk7CiE) — Pranaya Jajoo · 5:49 · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand RLDP, starting with basics of reinforcement learning and representation learning, then covering zero-shot RL and successor features, followed by orthogonality regularization to prevent feature collapse, and finally focusing on latent dynamics prediction, the core method behind RLDP. Each step builds intuition with concise, clear videos that connect directly to the paper's approach and contributions.

### Representation learning in reinforcement learning *(prerequisite)*
Representation learning helps an RL agent understand and encode the environment's state in a way that makes learning and generalization easier. This video introduces how representations are learned and why they matter in RL.

*How the paper uses it:* RLDP learns effective state representations to enable zero-shot RL without complex objectives.

▶ [Introduction to Representation Learning](https://www.youtube.com/watch?v=e3GaXeqrG9I) — Jordan Boyd-Graber · 4:50 · 8 years ago

### Zero-shot reinforcement learning *(prerequisite)*
Zero-shot RL refers to an agent's ability to perform well on new, unseen tasks without additional training. Understanding this concept is key to appreciating RLDP's goal of enabling agents to generalize across tasks.

*How the paper uses it:* RLDP is designed to enable zero-shot RL by learning policy-independent representations.

▶ [What is Zero Shot Learning | How Zero-shot Classification model works | NLP | transformers   | Code](https://www.youtube.com/watch?v=PH_eb1udpew) — Pradip Nichite · 3 years ago

### Successor features and successor measures *(prerequisite)*
Successor features are a way to represent the expected future state occupancy, which helps in transfer learning and policy improvement. This video explains the concept and its role in RL.

*How the paper uses it:* The paper uses successor measure estimation with RLDP representations to train behavioral foundation models.

▶ [Successor Feature Representations](https://www.youtube.com/watch?v=RYemlh2NSzQ) — Chris Reinke · 8:32 · 3 years ago

### Orthogonality regularization in neural networks *(prerequisite)*
Orthogonality regularization encourages learned features to be diverse and uncorrelated, preventing feature collapse. This video explains the intuition and benefits of such regularization in neural networks.

*How the paper uses it:* RLDP uses orthogonality regularization to maintain diverse latent features and avoid collapse.

▶ [Orthogonality and Orthonormality](https://www.youtube.com/watch?v=6nqMegdbxik) — Professor Dave Explains · 7 years ago

### Latent dynamics prediction
Latent dynamics prediction involves predicting future states in a compressed latent space, which helps in learning meaningful representations for control. This video provides intuition on how latent spaces and dynamics prediction work.

*How the paper uses it:* RLDP's core method is predicting future latent states from current states and actions to learn representations.

▶ [Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models](https://www.youtube.com/watch?v=uUVOUnk7CiE) — Pranaya Jajoo · 5:49 · 3 months ago

## Already in your library

- [Representation Learning and Exploration in Reinforcement Learning](https://www.youtube.com/watch?v=_t3lRD6Gml8) — also for: Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models (Amy Zhang)
