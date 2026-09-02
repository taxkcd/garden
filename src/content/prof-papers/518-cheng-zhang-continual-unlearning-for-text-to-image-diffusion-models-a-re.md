---
title: "518 · Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective — Cheng Zhang"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cheng-zhang"
source_hash: "5c50f000a7b50bd5f4df433e7afa9dc0c9f7aeeacaa46678655551640f71ebea"
sequence: 518
generator: "outreach-garden: managed"
---

# 518 · Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective

## At a glance

- **Professor:** Cheng Zhang
- **Institution:** Texas A&M University
- **Paper:** [Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective](https://arxiv.org/pdf/2511.07970)
- **Authors:** Justin Lee, Zheda Mai, Jinsu Yoo, Cheng Zhang, Wei-Lun Chao, Chongyu Fan
- **Year:** 2026

## Paper overview

This paper studies the challenge of continually removing unwanted concepts from pre-trained text-to-image diffusion models as unlearning requests arrive sequentially. Existing unlearning methods work well when all requests arrive at once but fail in continual settings, causing the model to forget retained knowledge and degrade image quality. The authors identify cumulative parameter drift and semantic interference as key causes and propose regularization techniques, including a novel semantic-aware gradient projection method, to mitigate these issues and improve model retention of unrelated concepts.

### Why it matters

**Research problem:** How to effectively perform continual unlearning in text-to-image diffusion models, i.e., sequentially removing multiple targeted concepts without degrading the model's ability to generate unrelated concepts.

**Why it matters:** Text-to-image diffusion models trained on large datasets can generate copyrighted, harmful, or biased content. Regulations like CCPA require models to remove specific content upon request. Retraining models from scratch for each request is computationally infeasible, so efficient unlearning methods are needed. However, real-world unlearning requests arrive sequentially, and current methods fail to maintain model utility in such continual unlearning scenarios.

**Key contributions:**

- First comprehensive empirical study of continual unlearning for text-to-image diffusion models.
- Identification of cumulative parameter drift as the root cause of utility collapse in sequential unlearning.
- Development and evaluation of add-on regularizers (update norm, selective fine-tuning, model merging) to mitigate drift.
- Proposal of a semantic-aware gradient projection method to reduce interference with semantically close concepts.
- Establishment of a benchmark and metrics (unlearning accuracy, in-domain and cross-domain retention accuracy) for continual unlearning evaluation.

## About the professor

**Cheng Zhang** — Assistant Professor, Department of Computer Science and Engineering, Texas A&M University.

Research interests: machine learning and its applications to computer vision, multimodal understanding, human modeling for extended reality, and cyber-physical systems

### Research links

- [Faculty/profile page](https://czhang0528.github.io)
- [Resolved homepage](https://czhang0528.github.io/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=vb3l1ZMAAAAJ&view_op=list_works&sortby=pubdate)
- [GitHub](https://github.com/czhang0528)
- [CV](https://drive.google.com/drive/folders/1gFTIag_hj3D7MTZbRki_Q264rRbt5rtj?usp=sharing)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** continual learning in machine learning
**The paper assumes:** continual learning theory, catastrophic forgetting, parameter drift, and regularization methods in machine learning
**Already in this field?** Skip this entirely if you already understand the core concepts and challenges of continual learning and its common mitigation techniques.

To understand the continual unlearning challenges and solutions presented in the paper, a solid grasp of continual learning fundamentals is essential. The rigorous course option provides a comprehensive university-level deep dive into continual learning concepts, while the fast track offers a focused, shorter series that covers key continual learning topics efficiently. Choose the course for depth and foundational understanding, or the fast track for a quicker, targeted overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Open World Lifelong Learning Course](https://www.youtube.com/playlist?list=PLm6QXeaB-XkA5-lVBB-h7XeYzFzgSh6sk) — ContinualAI · 12 videos · 18.0h across 12 episodes

**Watch only this:** Lectures #1 to #3 (Introduction and Motivation; knowledge transfer, adaptation, continual learning; knowledge retention, optimization & forgetting), about 4.5 hours — these give a focused introduction to the key continual learning issues relevant to the paper.

*Why it unblocks this paper:* This Open World Lifelong Learning Course by ContinualAI provides a concise and clear overview of continual learning topics including knowledge retention and forgetting, which are critical for understanding the challenges of continual unlearning addressed in the paper.

*If you want all of it:* All 12 episodes, about 18 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on continual unlearning for text-to-image diffusion models, start with foundational knowledge on text-to-image diffusion models to grasp the architecture and generative process. Next, build understanding of regularization techniques and gradient projection methods as these underpin the proposed solutions to mitigate parameter drift and semantic interference. Finally, focus on the core concept of continual unlearning in diffusion models, featuring the authors' own talk if available, to directly connect theory with their novel contributions and empirical findings.

### Text-to-image diffusion models lecture *(prerequisite)*
This section covers the foundational architecture and principles behind text-to-image diffusion models, which are the generative backbone of the paper's study. Understanding how these models operate is critical before delving into continual unlearning techniques applied to them.

*How the paper uses it:* The paper focuses on continual unlearning specifically for text-to-image diffusion models, so understanding their generative mechanism is essential.

▶ [INIT AI Guild Spring 2026: Foundations of Image Generation (Diffusion Models)](https://www.youtube.com/watch?v=qHOgvKH1Gi0) — Alex Eduardo Sanchez and INIT AI Guild · 1:04:37 · 4 months ago

### Regularization techniques deep learning seminar *(prerequisite)*
Regularization methods control parameter updates and prevent overfitting or forgetting, which are key to mitigating cumulative parameter drift in continual unlearning. This seminar provides a rigorous overview of such techniques relevant to the paper's proposed add-on regularizers.

*How the paper uses it:* The paper proposes add-on regularizers like update norm penalties and selective fine-tuning to reduce parameter drift during sequential unlearning.

▶ [Lec 09 Regularization techniques in Neural Networks](https://www.youtube.com/watch?v=94KhsJW8Ck8) — NPTEL - Indian Institute of Science, Bengaluru · 38:39 · 8 months ago

### Gradient projection methods lecture *(prerequisite)*
Gradient projection techniques involve modifying gradients to avoid interference with certain subspaces, which aligns with the paper's novel semantic-aware gradient projection method. This lecture explains the mathematical intuition and implementation of gradient projection in optimization.

*How the paper uses it:* The paper introduces a semantic-aware gradient projection method to suppress interference with semantically similar concepts during unlearning.

▶ [Introduction to Projected gradient descent](https://www.youtube.com/watch?v=2mNkeTWWN6k) — NPTEL-NOC IITM · 22:30 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand continual unlearning in text-to-image diffusion models. We start with the basics of text-to-image diffusion models to grasp the architecture used, then cover regularization techniques to understand how parameter updates are controlled. Next, we explore gradient projection methods to build intuition on the novel semantic-aware gradient projection technique proposed in the paper. Finally, we discuss continual unlearning methods to understand the core challenge of sequentially removing concepts without degrading model utility.

### Text-to-image diffusion models lecture *(prerequisite)*
Learn how text-to-image diffusion models generate images from text prompts by iteratively denoising random noise. This foundational knowledge explains the architecture and process behind models like Imagen and Stable Diffusion, which the paper builds upon.

*How the paper uses it:* The paper studies continual unlearning specifically for text-to-image diffusion models, so understanding their operation is essential.

▶ [Text-to-image generation explained](https://www.youtube.com/watch?v=9YrYDqhJdPw) — Google Research · 5:49 · 3 years ago

### Regularization techniques deep learning seminar *(prerequisite)*
Understand regularization methods such as L1/L2 penalties and dropout that help control model complexity and prevent overfitting by constraining parameter updates. This knowledge is key to grasping how the paper reduces parameter drift during unlearning.

*How the paper uses it:* The paper uses add-on regularizers like update norm penalties to mitigate cumulative parameter drift in continual unlearning.

▶ [Regularization in Deep Learning | L2 Regularization in ANN | L1 Regularization | Weight Decay in ANN](https://www.youtube.com/watch?v=4xRonrhtkzc) — CampusX · 35:57 · 4 years ago

### Gradient projection methods lecture *(prerequisite)*
Gain intuition on gradient descent optimization and how projecting gradients onto certain subspaces can control parameter updates. This prepares you to understand the paper's novel semantic-aware gradient projection method that reduces interference with semantically similar concepts.

*How the paper uses it:* The paper proposes a semantic-aware gradient projection technique to suppress gradient components that interfere with related concepts during unlearning.

▶ [Introduction to Projected gradient descent](https://www.youtube.com/watch?v=2mNkeTWWN6k) — NPTEL-NOC IITM · 22:30 · 1 year ago

### Continual unlearning methods lecture
Explore the challenges of continually removing learned concepts from models without forgetting unrelated knowledge. This includes understanding catastrophic forgetting and the difficulties of sequential unlearning, which the paper addresses with new regularization techniques.

*How the paper uses it:* The paper focuses on continual unlearning for text-to-image diffusion models, identifying causes of utility collapse and proposing solutions.

▶ [Machine Unlearning](https://www.youtube.com/watch?v=eiZuQmImxEE) — RMIT Centre Cyber Security Research & Innovation · 1:20:22 · 3 years ago

## Already in your library

- [Simple Diffusion Language Models](https://www.youtube.com/watch?v=WjAUX23vgfg) — also for: Mask-Aware Policy Gradients for Diffusion Language Models (Philipp Krähenbühl)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [[Continual Learning Course] Lecture #2: Understanding Catastrophic Forgetting](https://www.youtube.com/watch?v=UnCAdBtvZhc) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [What is Machine Unlearning?](https://www.youtube.com/watch?v=0_ciCzHaM4o) — also for: Attention Smoothing Is All You Need for Unlearning (Dongxiao Zhu)
- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — also for: Few-Step Diffusion Language Models via Trajectory Self-Distillation (Vladimir Pavlovic)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of continual unlearning in text-to-image diffusion models as studied in the paper. The beginner project reproduces a key empirical observation about parameter drift causing utility collapse using simplified tools. The intermediate project implements the paper's core semantic-aware gradient projection method on a small public dataset to compare retention metrics against a baseline. The advanced project extends the method to a new modality or addresses a stated limitation, such as improving in-domain retention or exploring continual unlearning in a different architecture.

### Beginner — Visualizing Parameter Drift and Utility Collapse in Sequential Unlearning
*Effort: a weekend, ~8 hours*

You build a simplified simulation that mimics sequential unlearning on a small pretrained text-to-image diffusion model checkpoint (or a lightweight substitute). You track parameter changes (drift) and measure retention accuracy on unrelated concepts after each unlearning step, reproducing the rapid utility collapse phenomenon shown in the paper's Figure 4 and Figure 3.

**Why it shows you understood the paper:** This project shows you grasp the core problem of cumulative parameter drift causing degradation in model utility during sequential unlearning, a key empirical finding of the paper.

**Grounded in:** Sequential unlearning with existing methods leads to rapid utility collapse due to cumulative parameter drift (Figures 3 and 4).

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, matplotlib

**Data:** Use a publicly available small pretrained text-to-image diffusion model checkpoint (e.g., a distilled Stable Diffusion variant) or simulate parameter updates on a toy model; unrelated concept prompts can be synthetic or from a small public text-image dataset like COCO captions.

**Build it:**

1. Load a small pretrained text-to-image diffusion model or a toy model with parameters accessible.
2. Define a sequence of unlearning requests targeting specific concepts (e.g., style or object prompts).
3. Implement a simple unlearning update method (e.g., fine-tuning or parameter masking) applied sequentially.
4. After each unlearning step, compute parameter drift as L2 norm difference from the original model.
5. Generate images or embeddings for unrelated concepts and compute retention accuracy metrics.
6. Plot parameter drift and retention accuracy over sequential unlearning steps to visualize utility collapse.

**Ships as:** A Jupyter notebook with code, plots showing parameter drift growth and retention accuracy decline over sequential unlearning steps, and a README explaining the phenomenon.

**Stretch goal:** Add a simple L2 norm penalty regularizer to constrain parameter updates and show its effect on reducing drift and improving retention.

### Intermediate — Implementing Semantic-Aware Gradient Projection for Continual Unlearning
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core semantic-aware gradient projection method to mitigate semantic interference during sequential unlearning on a small public text-to-image dataset. You compare retention accuracy and unlearning accuracy against a baseline unlearning method without gradient projection, reporting metrics similar to those in Figures 6 and 7.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's novel method and evaluate its effectiveness in preserving unrelated concepts while unlearning targeted ones, reflecting a deep understanding of the main technical contribution.

**Grounded in:** Proposal of a semantic-aware gradient projection method that removes gradient components interfering with semantically similar concepts, improving retention accuracy (Figures 6 and 7).

**Tech stack:** Python 3.11, PyTorch, transformers, Jupyter Notebook, scikit-learn

**Data:** Use a small public text-to-image dataset such as a subset of MS COCO or LAION samples filtered for a few concepts; simulate sequential unlearning requests on selected concepts.

**Build it:**

1. Prepare a small pretrained text-to-image diffusion model and dataset with labeled concepts.
2. Implement a baseline unlearning method (e.g., fine-tuning with concept-specific data).
3. Implement semantic-aware gradient projection: identify auxiliary concepts semantically related to the target using text embeddings (e.g., from a pretrained language model).
4. Project gradients orthogonal to the subspace spanned by auxiliary concepts during unlearning updates.
5. Run sequential unlearning experiments comparing baseline and gradient projection methods.
6. Compute and report unlearning accuracy, in-domain retention accuracy, and cross-domain retention accuracy.
7. Visualize results and analyze the impact of gradient projection on retention.

**Ships as:** A GitHub repository with code implementing semantic-aware gradient projection, scripts to run experiments, metric computation, and a detailed README with results and analysis.

**Stretch goal:** Add selective fine-tuning of important parameters as an additional regularizer and evaluate combined effects.

### Advanced — Extending Continual Unlearning to Video Diffusion Models with Semantic Gradient Projection
*Effort: 3+ weeks*

You extend the semantic-aware gradient projection method to continual unlearning in video diffusion models, addressing a future direction suggested by the paper. You adapt the method to handle temporal consistency and evaluate retention and unlearning accuracy on a small public video-text dataset, comparing against a baseline continual unlearning method.

**Why it shows you understood the paper:** This project shows you can transfer the paper's core method beyond its original domain, tackling a stated limitation and future direction, and handle new challenges such as temporal coherence in video generation unlearning.

**Grounded in:** Future direction: Extending continual unlearning approaches to other modalities such as video, addressing challenges in retention and interference.

**Tech stack:** Python 3.11, PyTorch, diffusers, transformers, Jupyter Notebook, OpenCV

**Data:** Use a small public video-text dataset such as UCF101 with captions or a subset of WebVid; simulate sequential unlearning requests on selected video concepts.

**Build it:**

1. Set up a small pretrained video diffusion model or a lightweight video generation model with accessible parameters.
2. Implement a baseline continual unlearning method for video concepts (e.g., fine-tuning on video clips).
3. Adapt semantic-aware gradient projection to video by incorporating temporal embeddings or frame-wise semantic similarity.
4. Identify auxiliary semantically related video concepts using text and video embeddings.
5. Apply gradient projection during sequential unlearning updates to reduce interference.
6. Evaluate unlearning accuracy and retention metrics, including temporal consistency measures.
7. Analyze results and compare with baseline to demonstrate improved retention in video generation.

**Ships as:** A comprehensive GitHub repository with code, experiments, evaluation scripts, and a detailed report discussing challenges and results of continual unlearning in video diffusion models.

**Stretch goal:** Investigate adversarial robustness of continual unlearning steps in video models as an additional future direction.

_The paper authors released no code or datasets; all projects require reimplementation from the paper description and use publicly available or simulated data as substitutes._
