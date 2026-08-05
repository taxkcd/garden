---
title: "022 · Regularized Latent Dynamics Prediction is a Strong Baseline for Behavioral Foundation Models — Amy Zhang"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amyzhang-github-io"
source_hash: "9f42869495f2dbc66db6e10a468a52a9b566276b5a158821c4740fe19333d915"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate understanding of the RLDP method from the paper. The beginner project focuses on implementing and visualizing the orthogonality regularization mechanism on synthetic data to grasp the core idea of preventing feature collapse. The intermediate project involves reimplementing the RLDP latent dynamics prediction method on a small continuous control environment, comparing it against a simple baseline, and reporting zero-shot RL performance metrics. The advanced project extends RLDP to handle raw image inputs, addressing a key limitation and future direction mentioned in the paper, thus showing capability to adapt the method to more complex, high-dimensional sensory data.

### Beginner — Orthogonality Regularization Visualization on Synthetic Latent Features
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the orthogonality regularization loss described in the paper on synthetic latent vectors. You visualize how the regularizer affects feature similarity over training iterations, demonstrating prevention of feature collapse. This project isolates and illustrates the key regularization mechanism without full RLDP complexity.

**Why it shows you understood the paper:** A professor would see that you understand the orthogonality regularization concept, its mathematical formulation, and its role in maintaining feature diversity, which is critical to RLDP's success.

**Grounded in:** Orthogonality regularization is critical to prevent feature collapse and improve performance.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic latent vectors generated randomly to simulate encoder outputs.

**Build it:**

1. Implement a function to generate batches of random latent vectors simulating state embeddings.
2. Implement the orthogonality regularization loss as the average dot product between different latent vectors.
3. Simulate a simple training loop that updates latent vectors to minimize this loss.
4. Plot feature similarity metrics over iterations to show the effect of the regularizer.
5. Write a README explaining the orthogonality regularization and its importance in RLDP.

**Ships as:** A Jupyter notebook demonstrating orthogonality regularization on synthetic data with plots and explanations.

**Stretch goal:** Add spherical normalization to the latent vectors and show its effect on training stability.

### Intermediate — Reimplementation of RLDP on DeepMind Control Suite Cartpole Swingup
*Effort: 2 weekends, ~20 hours*

You reimplement the core RLDP method from the paper: learning latent state representations by predicting next latent states with orthogonality regularization. You train on the Cartpole Swingup task from the DeepMind Control Suite (a publicly available continuous control environment) and compare zero-shot RL performance using RLDP representations versus random features as a baseline.

**Why it shows you understood the paper:** This project shows you can implement the full RLDP objective, apply it to a standard continuous control benchmark, and evaluate zero-shot RL performance, demonstrating comprehension of the paper's core method and empirical claims.

**Grounded in:** Proposed RLDP, a simple latent dynamics prediction objective with orthogonality regularization for learning state features suitable for zero-shot RL.

**Tech stack:** Python 3.11, PyTorch, dm_control (DeepMind Control Suite), NumPy, Matplotlib

**Data:** DeepMind Control Suite Cartpole Swingup environment, publicly available at (link removed — unverified) (used as a substitute for the paper's continuous control benchmarks).

**Build it:**

1. Set up the DeepMind Control Suite environment for Cartpole Swingup.
2. Implement an encoder network to map states to latent features.
3. Implement a latent dynamics predictor network to predict next latent state from current latent state and action.
4. Implement the orthogonality regularization loss and combine it with latent dynamics prediction loss as per RLDP.
5. Train the encoder and predictor on offline or online data collected from the environment.
6. Evaluate zero-shot RL performance by training a simple policy on the learned latent features and compare against a baseline using random features.
7. Plot and report normalized returns and feature similarity metrics.

**Ships as:** A GitHub repo with code, training scripts, evaluation scripts, and a README reporting zero-shot RL results comparing RLDP to random features on Cartpole Swingup.

**Stretch goal:** Add spherical normalization to latent predictions and ablate its effect on performance.

### Advanced — Extending RLDP to Raw Image Inputs for Zero-Shot RL in Simulated Robotics
*Effort: 3-4 weeks*

You extend the RLDP method to handle high-dimensional raw image inputs instead of low-dimensional state vectors. This involves integrating a convolutional encoder to extract latent features from images, applying the orthogonality regularization and latent dynamics prediction losses, and evaluating zero-shot RL performance on a simulated robotic control task with image observations (e.g., DeepMind Control Suite's Cheetah Run with pixel observations).

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by adapting RLDP to complex sensory inputs, demonstrating your ability to extend the method and tackle real challenges in representation learning for RL.

**Grounded in:** Given RLDP’s success in mitigating feature collapse via orthogonality regularization, how do you envision adapting this approach to handle more complex, high-dimensional sensory inputs like raw images or multi-modal data in real-world robotic settings?

**Tech stack:** Python 3.11, PyTorch, dm_control (DeepMind Control Suite), NumPy, Matplotlib

**Data:** DeepMind Control Suite simulated robotic tasks with pixel-based observations, publicly available at (link removed — unverified)

**Build it:**

1. Set up the DeepMind Control Suite environment with pixel observations (e.g., Cheetah Run).
2. Implement a convolutional encoder to map raw images to latent features.
3. Implement the latent dynamics predictor network and orthogonality regularization loss as in RLDP.
4. Train the model end-to-end on offline or online data collected from the environment.
5. Evaluate zero-shot RL performance by training a policy on the learned latent features and compare to baseline methods (e.g., random features or vanilla autoencoder).
6. Analyze the effect of orthogonality regularization and spherical normalization on training stability and performance.
7. Document challenges and potential improvements for real-world robotic applications.

**Ships as:** A comprehensive GitHub repo with code, training and evaluation scripts, and a detailed README discussing the extension of RLDP to image inputs and zero-shot RL results.

**Stretch goal:** Integrate RLDP with language or video-based prompting as suggested in the paper's future directions.
