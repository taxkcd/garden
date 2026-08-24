---
title: "438 · Contrastive Action-Image Pre-training for Visuomotor Control — Jitendra Malik"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jitendra-malik"
source_hash: "5156bba3b1fcded56a216e500fb96da6582bd197ee50fb764a775428cf5186ca"
sequence: 438
generator: "outreach-garden: managed"
---

# 438 · Contrastive Action-Image Pre-training for Visuomotor Control

## At a glance

- **Professor:** Jitendra Malik
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Contrastive Action-Image Pre-training for Visuomotor Control](https://arxiv.org/abs/2606.17256v1)
- **Authors:** Yuvan Sharma, Dantong Niu, Anirudh Pai, Zekai Wang, Zhuoyang Liu, Baifeng Shi, Stefano Saravalle, Boning Shao, Ruijie Zheng, Jing Wang, Konstantinos Kallidromitis, Yusuke Kato, Fabio Galasso, Yuke Zhu, Danfei Xu, Linxi “Jim” Fan, Jitendra Malik, Trevor Darrell, Roei Herzig
- **Year:** 2026

## Paper overview

This paper introduces CAIP, a vision encoder trained to improve robotic manipulation by learning from large-scale egocentric human videos. It uses human hand poses as proxies for robot actions to create action-centric visual representations. CAIP outperforms existing vision encoders on real-world dexterous manipulation tasks, showing better generalization and robustness.

### Why it matters

**Research problem:** Existing vision encoders for robotics lack action-centric understanding because large-scale robot datasets with paired vision and action data are scarce. Current models trained on internet-scale image-text data or egocentric human videos do not learn from paired vision-action data necessary for visuomotor control.

**Why it matters:** Robotic manipulation depends critically on visual perception aligned with physical actions. Without action-centric visual features, downstream control policies perform poorly or inconsistently across tasks. Scaling robot data collection is difficult, so alternative scalable sources of action-rich data are needed.

**Key contributions:**

- Proposed a contrastive training methodology to learn action-centric visual representations from egocentric human video using explicit action labels derived from hand poses.
- Curated and unified a large-scale egocentric video dataset totaling over 32,000 hours for pretraining.
- Developed a modular vision encoder architecture combining vision, language, and action transformers with text-conditioned image pooling.
- Demonstrated that CAIP outperforms state-of-the-art vision encoders (DINOv2, SigLIP, MVP, R3M) on real-world dexterous manipulation tasks.
- Showed that CAIP representations generalize well to out-of-distribution settings and maintain robustness under environmental perturbations.

## About the professor

**Jitendra Malik** — Arthur J. Chick Professor of EECS, Department of Electrical Engineering and Computer Sciences, Univ. of California - Berkeley.

Research interests: computer vision, robotics, machine learning

### Research links

- [Faculty/profile page](https://people.eecs.berkeley.edu/~malik)
- [Resolved homepage](https://people.eecs.berkeley.edu/~malik/malik-bio.html)
- [Google Scholar](https://scholar.google.com/citations?user=aOklxsQAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** contrastive representation learning
**The paper assumes:** contrastive learning, representation learning, and deep metric learning
**Already in this field?** Skip this entirely if you already understand the principles and mathematics of contrastive representation learning in machine learning.

This background focuses on contrastive representation learning, the core methodology behind the CAIP paper's vision encoder training. The rigorous course option offers a deep, structured university-level treatment of contrastive learning within multi-task and meta learning, ideal for thorough understanding. The fast track provides a concise, visual-intuition-driven series of short explainers on related representation learning topics, suitable for a quicker but still solid grasp of the key ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022](https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI) — Stanford Online · 17 videos

**Watch only this:** Lectures 7 and 8: 'Stanford CS330 I Unsupervised Pre-Training:Contrastive Learning' and 'Stanford CS330 I Unsupervised Pre-training for Few-shot Learning', about 2.5 hours total — these cover the core contrastive learning concepts and their application to representation learning.

*Why it unblocks this paper:* Stanford CS330 includes a dedicated lecture on unsupervised pre-training with contrastive learning (Lecture 7) and related topics, providing a rigorous, research-level foundation directly relevant to the paper's contrastive training methodology.

*If you want all of it:* All 17 lectures, about 21.5 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [WACV 2023 - Neural Architecture Search, Representation Learning, and Explainable models](https://www.youtube.com/playlist?list=PLlFl9_RXKXGOgi4x32fxzLc3drFIeazeu) — Mustafa Taha Koçyiğit · 26 videos · 1.7h across 26 episodes

**Watch only this:** Episodes 'Addressing Feature Suppression in Unsupervised Visual Representations' and 'Representation Disentanglement in Generative Models with Contrastive Learning', about 6 minutes total — these two episodes focus specifically on contrastive representation learning concepts.

*Why it unblocks this paper:* The WACV 2023 short series contains concise, well-produced explainers on representation learning and related topics including contrastive learning, providing a quick, visual introduction to the key ideas underpinning the paper's approach.

*If you want all of it:* All 26 episodes, about 1.7 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CAIP paper, start with foundational knowledge on 3D hand pose estimation and the MANO model, as these are crucial for extracting action proxies from human hand poses. Next, study vision transformers as they form the backbone architecture for visual encoding in CAIP. Then, explore egocentric video representation learning to grasp the large-scale human video data used for pretraining. Follow this with multimodal transformers with attention pooling to understand the architecture combining vision, language, and action modalities. Finally, focus on the core concept of contrastive learning for vision and action, culminating with the authors' own talk or closest related presentation to the paper.

### 3D hand pose estimation and MANO model *(prerequisite)*
This section covers advanced methods for estimating 3D hand poses from images and videos, including the MANO hand model which is central to representing human hand keypoints as action proxies in CAIP. Understanding these techniques is essential to appreciate how the paper leverages human hand poses for robot action representation.

*How the paper uses it:* Key to extracting action proxies from human hand poses for robot actions in CAIP.

▶ [[UVLL Tutorial] MANO/SMPL models and their usage 3D pose estimation](https://www.youtube.com/watch?v=mUoLx9wSJQs) — UVLL : UNIST Vision&Learning Lab · 1:19:22 · 7 months ago

### Vision transformers for robotics *(prerequisite)*
Vision transformers (ViT) are the backbone architecture used in CAIP to encode visual inputs. This section provides a rigorous university-level lecture on ViTs, explaining their design, attention mechanisms, and application in computer vision, which is foundational for understanding CAIP's vision encoder.

*How the paper uses it:* Backbone architecture used for encoding visual inputs in CAIP.

▶ [CS 198-126: Lecture 15 - Vision Transformers](https://www.youtube.com/watch?v=jzPbx9Y0vHg) — Machine Learning at Berkeley · 49:27 · 3 years ago

### Egocentric video representation learning *(prerequisite)*
This section delves into learning visual representations from large-scale egocentric (first-person) video data, which is the primary data source for CAIP pretraining. The selected seminar provides an advanced academic perspective on leveraging egocentric videos for robot learning.

*How the paper uses it:* Understanding large-scale egocentric video data usage for visual features in CAIP.

▶ [RI Seminar: Saurabh Gupta : Robot Learning by Understanding Egocentric Videos](https://www.youtube.com/watch?v=RdPftGBhN8c) — CMU Robotics Institute · 59:55 · 2 years ago

### Multimodal transformers with attention pooling *(prerequisite)*
CAIP's architecture integrates vision, language, and action modalities via multimodal transformers with attention pooling. This advanced university lecture explains the mathematical foundations and architecture of multimodal transformers, essential for grasping CAIP's model design.

*How the paper uses it:* Architecture combining vision, language, and action modalities in CAIP.

▶ [Lecture 5.1 - Multimodal Transformers - Part1 (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=90AGqQYYZc0) — LP Morency · 1:15:50 · 2 years ago

### Contrastive learning for vision and action
Contrastive learning is the core method used in CAIP to align visual and action embeddings. This detailed lecture from a reputable research group covers the principles and frameworks of contrastive learning, providing the theoretical background necessary to understand CAIP's training methodology.

*How the paper uses it:* Central method to learn aligned visual and action embeddings in CAIP.

▶ [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — Vizuara · 51:46 · 9 months ago

### CAIP paper talk *(the paper's own talk)*
Although no direct talk by the CAIP paper authors was found, this related conference talk on learning vision-based reactive policies for robotic manipulation offers insights into vision-based control policies, which complements understanding CAIP's application domain.

*How the paper uses it:* Direct access to authors' presentation for deep understanding of the paper (closest available).

▶ [CoRL 2020, Spotlight Talk 454: Learning Vision-based Reactive Policies for Obstacle Avoidance](https://www.youtube.com/watch?v=FGa7xNpSchM) — Conference on Robot Learning · 4:52 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the CAIP paper, start by building foundational knowledge on 3D hand pose estimation and the MANO model, which are crucial for extracting action proxies from human videos. Next, learn about vision transformers as the backbone architecture for encoding visual inputs in robotics. Then, explore egocentric video representation learning to grasp how large-scale first-person videos contribute to visual feature learning. After that, study multimodal transformers with attention pooling to understand how vision, language, and action modalities are combined. Finally, dive into contrastive learning methods for vision and action to comprehend the core training methodology used in CAIP.

### 3D hand pose estimation and MANO model *(prerequisite)*
3D hand pose estimation involves predicting the spatial configuration of hand joints from images or videos, which is challenging due to complex articulations and occlusions. The MANO model is a parametric hand model representing hand shape and pose with 42 keypoints, widely used to extract detailed hand poses. Understanding this helps grasp how CAIP uses human hand poses as proxies for robot actions.

*How the paper uses it:* CAIP extracts 3D human hand keypoints using the MANO skeleton as proxies for robot end-effector actions.

▶ [[UVLL Tutorial] MANO/SMPL models and their usage 3D pose estimation](https://www.youtube.com/watch?v=mUoLx9wSJQs) — UVLL : UNIST Vision&Learning Lab · 1:19:22 · 7 months ago

### Vision transformers for robotics *(prerequisite)*
Vision transformers (ViTs) process images by dividing them into patches and applying transformer architectures, enabling powerful visual feature extraction. They have become a backbone for many vision tasks, including robotics, due to their scalability and ability to model long-range dependencies. Learning about ViTs provides insight into the visual encoder architecture used in CAIP.

*How the paper uses it:* CAIP uses a vision transformer backbone (ViT-B and ViT-L) to encode visual inputs for manipulation tasks.

▶ [Introduction to Vision Transformer (ViT) | An image is worth 16x16 words | Computer Vision Series](https://www.youtube.com/watch?v=aIi5FsdURUA) — Vizuara · 1:24:50 · 1 year ago

### Egocentric video representation learning *(prerequisite)*
Egocentric video learning focuses on first-person videos capturing human actions from the actor's viewpoint, which contain rich information about object interactions and hand movements. Learning representations from such videos enables models to understand action-centric visual cues. This is essential to appreciate CAIP's use of over 32,000 hours of egocentric human video for pretraining.

*How the paper uses it:* CAIP leverages large-scale egocentric human videos to learn action-centric visual representations.

▶ [RI Seminar: Saurabh Gupta : Robot Learning by Understanding Egocentric Videos](https://www.youtube.com/watch?v=RdPftGBhN8c) — CMU Robotics Institute · 59:55 · 2 years ago

### Multimodal transformers with attention pooling *(prerequisite)*
Multimodal transformers integrate multiple data modalities (e.g., vision, language, action) using attention mechanisms to learn joint representations. Attention pooling aggregates information across tokens or modalities effectively. Understanding this architecture clarifies how CAIP combines vision, language, and action transformers before applying contrastive learning.

*How the paper uses it:* CAIP's encoder architecture combines vision, language, and action transformers with attention pooling to align embeddings.

▶ [Lecture 5.1 - Multimodal Transformers - Part1 (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=90AGqQYYZc0) — LP Morency · 1:15:50 · 2 years ago

### Contrastive learning for vision and action
Contrastive learning trains models to bring related pairs (e.g., images and corresponding actions) closer in embedding space while pushing unrelated pairs apart. This approach enables learning aligned visual and action representations without explicit supervision. Understanding contrastive learning is key to grasping CAIP's training methodology that aligns image and action embeddings.

*How the paper uses it:* CAIP uses a contrastive objective to align text-conditioned image embeddings with action embeddings derived from hand poses.

▶ [SimCLR: A Simple Framework for Contrastive Learning of Visual Representations](https://www.youtube.com/watch?v=wySLC4nszv8) — Stanford Contrastive & SS Learning Group · 36:46 · Streamed 5 years ago

## Already in your library

- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [MulCon: Contrastive Loss for Multi-Label Images | Paper ...](https://www.youtube.com/watch?v=ql2Q2XSHMbU) — also for: Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction (Eran Halperin)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Vision Transformers Explained | The ViT Paper](https://www.youtube.com/watch?v=NetSJM590Lo) — also for: DA-VPT: Semantic-Guided Visual Prompt Tuning for Vision Transformers (Kien A. Hua)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [What is Attention Mechanisms in Transformers? (Explained Visually)](https://www.youtube.com/watch?v=LudWfvu3ong) — also for: In-Context Algebra (David Bau)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the CAIP paper. The beginner project recreates a core visualization of the contrastive alignment between hand poses and images using public hand pose data. The intermediate project implements a simplified version of the CAIP contrastive training on a smaller public egocentric hand pose dataset, comparing against a baseline vision encoder. The advanced project extends CAIP by exploring a soft contrastive loss that weights negative samples by action similarity, addressing a key limitation noted in the paper.

### Beginner — Visualize Contrastive Alignment of Hand Poses and Egocentric Images
*Effort: a weekend, ~8 hours*

You build a small visualization tool that loads egocentric images and corresponding 3D hand keypoints from a public dataset, then computes and displays embeddings for both using pretrained vision and pose encoders. You visualize the alignment between image and hand pose embeddings using a contrastive similarity heatmap or t-SNE plot.

**Why it shows you understood the paper:** This project shows you understand the core idea of CAIP's contrastive alignment between visual and action (hand pose) embeddings, a foundational mechanism of the paper.

**Grounded in:** The authors propose a contrastive training methodology to learn action-centric visual representations from egocentric human video using explicit action labels derived from hand poses.

**Tech stack:** Python 3.11, PyTorch, matplotlib, scikit-learn, Open3D or equivalent for 3D visualization

**Data:** Use a publicly available egocentric hand pose dataset such as the First-Person Hand Action Benchmark (FPHA) or EgoHands dataset as a substitute for the paper's large-scale egocentric video.

**Build it:**

1. Download a public egocentric hand pose dataset with synchronized RGB images and 3D hand keypoints.
2. Load a pretrained vision encoder (e.g., a ViT model from PyTorch Hub) and a simple hand pose encoder (e.g., an MLP on keypoints).
3. Compute embeddings for images and corresponding hand poses.
4. Visualize embedding alignment using a similarity heatmap or dimensionality reduction (t-SNE/UMAP) plot.
5. Write a README explaining the contrastive alignment concept and how your visualization relates to CAIP.

**Ships as:** A GitHub repo with code to load data, compute embeddings, and generate visualizations demonstrating image-action embedding alignment, plus a README linking this to CAIP's contrastive training idea.

**Stretch goal:** Add interactive visualization to explore embedding neighborhoods and nearest neighbors between images and hand poses.

### Intermediate — Implement CAIP Contrastive Pretraining on Public Egocentric Hand Pose Data
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the CAIP contrastive training method using a public egocentric hand pose dataset. You train a vision encoder jointly with an action encoder to align image embeddings with hand pose embeddings using a contrastive loss. You compare your model's performance on zero-shot action classification against a baseline vision encoder without contrastive training.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core CAIP method from the paper's description, apply it to real data, and evaluate its advantage over a baseline, proving comprehension of the paper's main contribution.

**Grounded in:** The authors propose Contrastive Action-Image Pre-training (CAIP), which uses 3D human hand keypoints extracted from egocentric human video as proxies for robot end-effector actions, training a vision encoder with a contrastive objective aligning text-conditioned image embeddings and action embeddings.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, tqdm

**Data:** Use a public egocentric hand pose dataset such as FPHA or EgoHands as a substitute for the paper's large-scale egocentric video dataset.

**Build it:**

1. Download and preprocess the public egocentric hand pose dataset to extract synchronized RGB images and 3D hand keypoints.
2. Implement a vision encoder (e.g., a small ViT or ResNet) and an action encoder (MLP on hand keypoints).
3. Implement a contrastive loss function to align image embeddings with action embeddings.
4. Train the model on the dataset, freezing encoders as needed.
5. Evaluate zero-shot action classification accuracy using the learned embeddings compared to a baseline vision encoder without contrastive training.
6. Document your implementation, training procedure, and results in a README.

**Ships as:** A GitHub repo with code for contrastive training, evaluation scripts, and a report showing improved zero-shot action classification over baseline, demonstrating CAIP's core method.

**Stretch goal:** Incorporate text conditioning in the image encoder as in CAIP's architecture to explore multimodal alignment.

### Advanced — Soft Contrastive Loss for Action Similarity in CAIP Representations
*Effort: 3+ weeks*

You extend the CAIP contrastive training by implementing a soft contrastive loss that weights negative samples by their similarity in action space, addressing the paper's limitation that all off-diagonal pairs are treated equally as negatives. You evaluate whether this improves representation quality and downstream zero-shot action classification on a public egocentric hand pose dataset.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing you can critically analyze the method, propose an extension, and experimentally validate its impact, a hallmark of research-level understanding.

**Grounded in:** The contrastive loss treats all off-diagonal image-action pairs as negatives regardless of physical similarity, which may weaken learning by pushing apart similar actions. Future directions include exploring soft contrastive objectives that weight negative samples by their action-space similarity.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, tqdm, matplotlib

**Data:** Use a public egocentric hand pose dataset such as FPHA or EgoHands as a substitute for the paper's dataset.

**Build it:**

1. Reimplement the baseline CAIP contrastive training on the public dataset as in the intermediate project.
2. Design and implement a soft contrastive loss that incorporates a similarity weighting between negative pairs based on their action embedding distance.
3. Train the model with the soft contrastive loss and compare embedding quality and zero-shot action classification accuracy against the baseline hard contrastive loss.
4. Analyze robustness of learned representations to perturbations such as lighting or distractors if feasible.
5. Write a detailed report discussing the implementation, experiments, results, and relation to the paper's stated limitation and future directions.

**Ships as:** A GitHub repo with code for both baseline and soft contrastive training, evaluation scripts, and a comprehensive report demonstrating the impact of soft negative weighting on CAIP-like representations.

**Stretch goal:** Experiment with different weighting functions or incorporate morphological differences to explore transferability to non-anthropomorphic robot grippers.

_No code or dataset from the paper authors is publicly released; all projects rely on reimplementation and public egocentric hand pose datasets as proxies._
