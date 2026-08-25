---
title: "498 · Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning — Garrett E. Katz"
date: 2026-08-25
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-garrett-e-katz"
source_hash: "53559b7a4add55f18993b159f7e339b8942d93d5fc27484a892a1978c8765c0d"
sequence: 498
generator: "outreach-garden: managed"
---

# 498 · Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning

## At a glance

- **Professor:** Garrett E. Katz
- **Institution:** Syracuse University
- **Paper:** [Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning](https://www.ijcai.org/proceedings/2025/0074.pdf)
- **Authors:** Rui Zuo, Simon Khan, Zifan Wang, Garrett Ethan Katz, Qinru Qiu
- **Year:** 2025

## Paper overview

This paper introduces VisionMask, a novel method to explain decisions made by deep reinforcement learning (DRL) agents. VisionMask generates visual explanations by highlighting important features in the agent's input that led to its chosen action, using a self-supervised contrastive learning approach. The method improves interpretability, faithfulness, and robustness of explanations across various RL environments, helping humans better understand and trust AI decisions.

### Why it matters

**Research problem:** Deep reinforcement learning agents are powerful but their decision-making processes are often opaque and hard to interpret. Existing explainable AI methods for RL fail to provide meaningful, faithful, and contrastive explanations that answer why an agent chose one action over another.

**Why it matters:** Lack of interpretability in RL agents limits their adoption in critical domains where understanding AI decisions is essential for trust, safety, and effective human-machine teaming.

**Key contributions:**

- Proposed VisionMask, the first self-supervised contrastive learning method to generate faithful, action-specific saliency maps for visual RL agents.
- Designed a novel training loss combining action-wise and feature-wise contrastive losses with area regularization to produce sparse and robust explanations.
- Demonstrated VisionMask’s superior performance over five baseline methods across six diverse RL environments in terms of faithfulness, robustness, and complexity.
- Provided qualitative visualizations and human studies showing that VisionMask explanations improve human understanding and trust in RL agents.
- Conducted ablation studies to validate the impact of architectural choices, loss components, and hyperparameters.

## About the professor

**Garrett E. Katz** — Associate Professor, Department of Electrical Engineering & Computer Science, Syracuse University.

Research interests: various topics in artificial intelligence, cognitive modeling, machine learning, neural computation, optimization, and robotics

### Research links

- [Faculty/profile page](http://web.ecs.syr.edu/~gkatz01)
- [Professor website](https://www.electronicmemorybank.net/)
- [Resolved homepage](https://www.electronicmemorybank.net)
- [Google Scholar](https://scholar.google.com/citations?user=bHIqHwEAAAAJ&hl=en&oi=sra)
- [Curriculum Vitae](https://web.ecs.syr.edu/~gkatz01/cv_gkatz_tenure_8_26.pdf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Contrastive Learning in Machine Learning
**The paper assumes:** contrastive learning, self-supervised representation learning, contrastive loss functions
**Already in this field?** Skip this entirely if you already understand the principles and mathematics of contrastive learning methods in machine learning.

This background focuses on contrastive learning, a core technique used in VisionMask for generating faithful, action-specific saliency maps in reinforcement learning. The rigorous course provides a deep, structured understanding of contrastive learning within the broader context of multi-task and meta learning, while the fast track offers a concise, targeted introduction to the same concepts for quicker comprehension. Choose the course for a thorough foundation or the fast track for an efficient conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022](https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI) — Stanford Online · 17 videos · 21.5h across 17 episodes

**Watch only this:** Lecture 7: Stanford CS330 I Unsupervised Pre-Training: Contrastive Learning (about 75 minutes)

*Why it unblocks this paper:* Stanford CS330 covers contrastive learning in a dedicated lecture (Lecture 7) within a comprehensive course on deep multi-task and meta learning, directly addressing self-supervised contrastive learning methods relevant to VisionMask's training approach.

*If you want all of it:* All 17 lectures, approximately 21.5 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 2 (Gradient descent, how neural networks learn), 3 (Backpropagation, intuitively), and 6 (Attention in transformers, step-by-step) for about 1 hour total

*Why it unblocks this paper:* 3Blue1Brown's 'Neural networks' playlist includes intuitive, visually rich explanations of foundational deep learning concepts, including self-supervised learning and contrastive ideas, providing a clear and accessible introduction to the principles underlying VisionMask's contrastive learning.

*If you want all of it:* All 10 episodes, approximately 3.6 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the VisionMask paper, start by building foundational knowledge on deep reinforcement learning interpretability and saliency map generation methods, which are crucial for grasping the challenges and techniques in explaining RL agents. Next, study self-supervised learning in computer vision to comprehend the training paradigm VisionMask employs. Then, explore contrastive learning in reinforcement learning to understand the core learning mechanism behind VisionMask's action-specific saliency maps. Finally, watch the authors' own talk or the closest related presentation to get direct insights into their novel method and its contributions.

### Deep reinforcement learning interpretability seminar *(prerequisite)*
This section provides foundational understanding of deep reinforcement learning (DRL) and the challenges in interpreting DRL agents. It covers key algorithms, concepts, and existing interpretability methods, setting the stage for appreciating VisionMask's contributions in generating faithful and contrastive explanations.

*How the paper uses it:* Understanding DRL interpretability challenges is essential to appreciate why VisionMask improves explanation faithfulness and robustness.

▶ [Lecture 14 | Deep Reinforcement Learning](https://www.youtube.com/watch?v=lvoHnicueoE) — Stanford University School of Engineering · 1:04:01 · 9 years ago

### Saliency map generation methods lecture *(prerequisite)*
This section introduces saliency maps, which highlight important input features influencing model decisions. It covers various saliency map techniques and their pitfalls, providing necessary background to understand how VisionMask generates action-specific visual explanations.

*How the paper uses it:* VisionMask produces saliency maps to visually explain RL agent decisions, so understanding saliency map methods is critical.

▶ [Pitfalls of Saliency Map Interpretation in Deep Neural Networks - Suraj Srinivas](https://www.youtube.com/watch?v=y4j1bikhgC0) — Vanderbilt School of Engineering · 58:56 · 4 years ago

### Self-supervised learning computer vision talk *(prerequisite)*
This section covers self-supervised learning techniques in computer vision, explaining how models can learn useful representations without labeled data. This knowledge is key to understanding VisionMask's training approach, which uses self-supervised contrastive learning without modifying the RL agent.

*How the paper uses it:* VisionMask leverages self-supervised contrastive learning to train its explainer model without requiring agent modification.

▶ [Yann LeCun @EPFL - "Self-supervised learning: could machines learn like humans?"](https://www.youtube.com/watch?v=7I0Qt7GALVk) — EPFL · 1:19:33 · 7 years ago

### Contrastive learning reinforcement learning lecture
This section dives into contrastive learning, especially its application in reinforcement learning, explaining how contrasting positive and negative samples helps learn discriminative features. This is the core learning paradigm enabling VisionMask to generate action-specific saliency maps by contrasting chosen and alternative actions.

*How the paper uses it:* VisionMask's novelty lies in its self-supervised contrastive learning approach to produce faithful, action-specific explanations.

▶ [CURL: Contrastive Unsupervised Representations for Reinforcement Learning](https://www.youtube.com/watch?v=hg2Q_O5b9w4) — Yannic Kilcher · 28:45 · 6 years ago

### VisionMask explanation learning talk *(the paper's own talk)*
This section features talks by the paper authors or closely related presentations that explain the VisionMask method directly. Watching the authors' own talk or a related research presentation provides the most precise and detailed insights into the method, experimental results, and design choices.

*How the paper uses it:* The authors' talk offers direct exposition of VisionMask's design, training, and evaluation, essential for advanced understanding.

▶ [MedAI #89: MedCLIP - Contrastive Learning from Unpaired Medical Images and Text | Zifeng Wang](https://www.youtube.com/watch?v=mTS0AvUilrM) — Stanford MedAI · 53:08 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the VisionMask paper, start by building a foundational understanding of deep reinforcement learning (DRL) and why interpretability matters. Then, learn about saliency maps as a key tool for visual explanations, followed by self-supervised learning techniques that enable training without labeled data. Finally, grasp contrastive learning principles, which are central to VisionMask's novel explanation method.

### Deep reinforcement learning interpretability seminar *(prerequisite)*
This section introduces the basics of deep reinforcement learning, including how agents learn to make decisions and the challenges of interpreting their behavior. Understanding these fundamentals is crucial to appreciate why explainability methods like VisionMask are needed.

*How the paper uses it:* VisionMask aims to explain decisions made by DRL agents, so knowing DRL basics and interpretability challenges sets the stage.

▶ [Lecture 14 | Deep Reinforcement Learning](https://www.youtube.com/watch?v=lvoHnicueoE) — Stanford University School of Engineering · 1:04:01 · 9 years ago

### Saliency map generation methods lecture *(prerequisite)*
Saliency maps highlight important input features that influence a model's decision, providing visual explanations. Learning how these maps are generated helps in understanding how VisionMask produces its visual explanations for RL agents.

*How the paper uses it:* VisionMask generates action-specific saliency maps to explain agent decisions visually.

▶ [Grad-CAM Explained | FREE XAI Course | L7 - Gradient-weighted Class Activation Mapping](https://www.youtube.com/watch?v=_QiebC9WxOc) — A Data Odyssey · 13:37 · 1 year ago

### Self-supervised learning computer vision talk *(prerequisite)*
Self-supervised learning trains models using inherent data structure without explicit labels, which is essential for VisionMask as it learns explanations without modifying the RL agent or requiring labeled explanations.

*How the paper uses it:* VisionMask uses self-supervised contrastive learning to train its explainer without agent modification.

▶ [What Is Self-Supervised Learning and Why Care?](https://www.youtube.com/watch?v=iGJ1XSkCyU0) — Boris Meinardus · 9:43 · 3 years ago

### Contrastive learning reinforcement learning lecture
Contrastive learning teaches models to distinguish between similar and dissimilar pairs, which VisionMask leverages to contrast the chosen action against alternatives, producing faithful and action-specific explanations.

*How the paper uses it:* VisionMask’s core novelty is its self-supervised contrastive learning approach to generate explanations by contrasting actions.

▶ [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — Deepia · 14:57 · 1 year ago

## Already in your library

- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Simply Explaining Deep Q-Learning/Deep Q-Network (DQN) | Python Pytorch Deep Reinforcement Learning](https://www.youtube.com/watch?v=EUrWGTCGzlA) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Yann LeCun | Self-Supervised Learning, JEPA, World Models, and the future of AI](https://www.youtube.com/watch?v=yUmDRxV0krg) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of VisionMask, the paper's novel contrastive explanation method for deep reinforcement learning agents. The beginner project reproduces a core explanation visualization on a simple RL environment. The intermediate project implements the VisionMask training method from scratch on a public RL environment and compares faithfulness metrics against a baseline. The advanced project extends VisionMask to multimodal inputs, addressing a key limitation and exploring richer explanations.

### Beginner — Visualize Action-Specific Saliency Maps in Highway-Env
*Effort: a weekend, ~8 hours*

You build a simple script that runs a pretrained RL agent in the Highway-Env environment and generates action-specific saliency maps by perturbing input pixels to highlight important regions influencing the agent's chosen action. This reproduces a basic visual explanation similar to VisionMask's output but using a perturbation baseline.

**Why it shows you understood the paper:** This project shows you understand the concept of action-specific saliency maps and the need to contrast chosen actions against alternatives to explain RL decisions visually.

**Grounded in:** VisionMask generates action-specific saliency maps using self-supervised contrastive learning.

**Tech stack:** Python 3.11, PyTorch, OpenCV, highway-env

**Data:** Use the Highway-Env environment from https://github.com/eleurent/highway-env as the RL environment and pretrained agent.

**Build it:**

1. Install highway-env and load a pretrained RL agent for the environment.
2. Run the agent on sample episodes and record input frames and chosen actions.
3. Implement a simple pixel perturbation method to generate saliency maps highlighting important input regions for the chosen action.
4. Visualize and save saliency maps overlaid on input frames for several episodes.
5. Write a README explaining the method and how it relates to VisionMask's explanations.

**Verified links from the paper:**

- <https://github.com/eleurent/highway-env> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to generate and visualize action-specific saliency maps on Highway-Env, demonstrating a baseline explanation method.

**Stretch goal:** Add a simple contrastive visualization comparing saliency maps for chosen vs alternative actions.

### Intermediate — Reimplement VisionMask Contrastive Explanation on Highway-Env
*Effort: 2 weekends, ~20 hours*

You implement the core VisionMask method from the paper: a self-supervised contrastive learning explainer that generates sparse, action-specific saliency masks for a pretrained RL agent in Highway-Env. You train the explainer on expert policy data and evaluate faithfulness metrics (accuracy, insertion, deletion) against a perturbation baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main contribution by implementing the contrastive loss, mask learning, and evaluation metrics, showing you grasp the method's mechanics and benefits.

**Grounded in:** Proposed VisionMask, the first self-supervised contrastive learning method to generate faithful, action-specific saliency maps for visual RL agents.

**Tech stack:** Python 3.11, PyTorch, NumPy, highway-env

**Data:** Use the Highway-Env environment and expert policy rollouts generated by the pretrained agent from https://github.com/eleurent/highway-env.

**Build it:**

1. Set up the Highway-Env environment and load a pretrained expert RL agent.
2. Collect expert policy data: input states and chosen action logits.
3. Implement the VisionMask explainer network architecture (e.g., DeepLabv3 or simplified CNN).
4. Implement the self-supervised contrastive loss combining action-wise and feature-wise terms with L1 area regularization.
5. Train the explainer on the expert data without modifying the agent.
6. Evaluate faithfulness metrics (accuracy, insertion, deletion) comparing VisionMask explanations to a perturbation baseline.
7. Document the implementation, training procedure, and evaluation results.

**Verified links from the paper:**

- <https://github.com/eleurent/highway-env> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a working VisionMask explainer implementation on Highway-Env, training scripts, evaluation metrics, and visualizations.

**Stretch goal:** Add ablation experiments to test the effect of L1 regularization or architecture choice on explanation quality.

### Advanced — Extend VisionMask to Multimodal RL Inputs for Richer Explanations
*Effort: 3+ weeks*

You extend the VisionMask framework to handle multimodal RL inputs by combining visual data with an additional modality such as proprioceptive or symbolic state information. You design a multimodal explainer that generates joint saliency maps or explanations highlighting important features across modalities. You evaluate the method qualitatively and quantitatively on a suitable multimodal RL environment.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing you can adapt and extend the VisionMask approach beyond pixel-level vision inputs to more complex, realistic RL agents.

**Grounded in:** Extending VisionMask to handle multimodal inputs beyond visual data.

**Tech stack:** Python 3.11, PyTorch, NumPy, highway-env or custom multimodal RL environment

**Data:** Use highway-env or a similar RL environment augmented with synthetic proprioceptive or symbolic inputs to simulate multimodal data, as the paper does not provide multimodal datasets.

**Build it:**

1. Select or create a multimodal RL environment combining visual and additional input modalities.
2. Train or load a pretrained RL agent that uses multimodal inputs.
3. Design a multimodal VisionMask explainer architecture that processes and contrasts features from both modalities.
4. Extend the contrastive loss to handle multimodal feature masks and action contrasts.
5. Train the multimodal explainer on expert policy data without modifying the agent.
6. Evaluate explanation faithfulness and robustness metrics, and provide qualitative visualizations.
7. Write a detailed report discussing challenges, design choices, and how this addresses the paper's stated limitation.

**Verified links from the paper:**

- <https://github.com/eleurent/highway-env> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for a multimodal VisionMask explainer, training and evaluation scripts, and a report demonstrating the extension and its benefits.

**Stretch goal:** Incorporate additional agent information such as predicted future rewards or goals into the explanations for richer interpretability.

_The paper's authors did not release code or datasets; you must reimplement VisionMask from the paper's description and use highway-env as a proxy environment._
