---
title: "594 · Robustness Beyond Known Groups with Low-rank Adaptation — Collin M. Stultz"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-collin-m-stultz"
source_hash: "391ed80b98e0a81259ea90dd3d8d0a0663dad7e79e5bb69d918114117361c7d9"
sequence: 594
generator: "outreach-garden: managed"
---

# 594 · Robustness Beyond Known Groups with Low-rank Adaptation

## At a glance

- **Professor:** Collin M. Stultz
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Robustness Beyond Known Groups with Low-rank Adaptation](https://doi.org/10.48550/arXiv.2602.06924)
- **Authors:** Abinitha Gourabathina, Hyewon Jeong, Teya Bergamaschi, Marzyeh Ghassemi, Collin Stultz
- **Year:** 2026

## Paper overview

This paper addresses the challenge of ensuring machine learning models perform well across all subpopulations, including those unknown or unlabeled during training. The authors propose a method called Low-rank Error Informed Adaptation (LEIA), which identifies directions in the model's representation space where errors concentrate and adapts the classifier accordingly without needing explicit subgroup labels. LEIA improves worst-group performance efficiently and robustly across multiple real-world datasets.

### Why it matters

**Research problem:** Deep learning models often fail to generalize well to certain subpopulations, especially when subgroup labels are unknown or unavailable during training. Existing group-robust methods typically require prior knowledge of relevant subgroups, which is unrealistic in many real-world scenarios, particularly in high-stakes domains like healthcare.

**Why it matters:** Failures to perform equitably across subpopulations can perpetuate societal inequities and cause harm, especially in critical areas such as disease diagnosis and treatment. Unknown or unlabeled subgroups are common in practice, making it essential to develop robustness methods that do not rely on explicit group annotations.

**Key contributions:**

- Motivating the importance of evaluating group robustness methods under unknown subgroup settings qualitatively, theoretically, and empirically.
- Proposing LEIA, which improves robustness without explicit subgroup annotations by targeting the geometry of model error patterns.
- Empirically validating LEIA on five real-world datasets across three settings: no knowledge, partial knowledge, and full knowledge of subgroup relevance.
- Demonstrating LEIA's efficiency, parameter-efficiency, and robustness to hyperparameter choices compared to state-of-the-art baselines.
- Providing theoretical justification for LEIA’s low-rank error-informed adaptation mechanism.

## About the professor

**Collin M. Stultz** — Nina T. and Robert H. Rubin Professor; Co-Director, Harvard-MIT Program in Health Sciences and Technology (HST); Associate Director, Institute for Medical Engineering and Science (IMES), AI+D and EE, Massachusetts Inst. of Technology.

Research interests: AI for Healthcare and Life Sciences; Biological and Medical Devices and Systems

### Research links

- [Faculty/profile page](https://www.eecs.mit.edu/people/collin-stultz/)
- [Professor website](http://www.rle.mit.edu/stultz)
- [Resolved homepage](http://www.rle.mit.edu/cb/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Low-rank matrix approximation
**The paper assumes:** linear algebra, matrix factorization, singular value decomposition, low-rank approximation techniques
**Already in this field?** Skip this entirely if you already understand matrix decompositions and low-rank approximations in linear algebra.

This background covers low-rank matrix approximation, a key mathematical foundation for understanding the LEIA method's approach to error-informed adaptation in machine learning models. The rigorous course option provides a deep, structured university-level treatment of matrix methods including singular value decomposition and low-rank approximations, ideal for readers seeking thorough mastery. The fast track offers a concise, intuition-focused series on low-rank matrix problems, suitable for readers who want a quicker but still solid conceptual grasp without investing many hours.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.065 Matrix Methods in Data Analysis, Signal Processing, and Machine Learning, Spring 2018](https://www.youtube.com/playlist?list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k) — MIT OpenCourseWare · 36 videos · 28.2h across 36 episodes

**Watch only this:** Lectures 6 (Singular Value Decomposition), 7 (Eckart-Young: The Closest Rank k Matrix to A), and 17 (Rapidly Decreasing Singular Values), about 2 hours 20 minutes total — these cover the core concepts of low-rank approximation and its properties essential for understanding LEIA.

*Why it unblocks this paper:* MIT 18.065 by Professor Gilbert Strang is a rigorous university course specifically focused on matrix methods in data analysis and machine learning, covering singular value decomposition and the Eckart-Young theorem, which are fundamental to low-rank matrix approximation and directly relevant to LEIA's theoretical justification.

*If you want all of it:* 28.2 hours across 36 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Low-rank Matrix Problem](https://www.youtube.com/playlist?list=PLgpE9N-DBnt6kQ9jBC8yES44mkRCvGQ8w) — Cypress MacCarthy · 7 videos · 4.0h across 7 episodes

**Watch only this:** Episodes 1 (For Low-Rank Structures in Images and Data - Prof. Yi Ma) and 2 (Outlier Pursuit: Robust PCA and Collaborative Filtering), about 1 hour 6 minutes total — these two episodes introduce low-rank concepts and robust low-rank approximation methods relevant to LEIA.

*Why it unblocks this paper:* This Cypress MacCarthy playlist offers a concise and visually intuitive introduction to low-rank matrix problems and robust PCA, providing a practical and accessible overview of low-rank structures and approximations relevant to LEIA's approach without requiring a deep mathematical background.

*If you want all of it:* 4.0 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Robustness Beyond Known Groups with Low-rank Adaptation,' start by building foundational knowledge on empirical risk minimization and its limitations, which motivate the need for robust methods like LEIA. Then, study group robustness challenges in machine learning to grasp the fairness and robustness issues across subpopulations. Next, learn about low-rank adaptation methods, a core technical tool leveraged by LEIA for efficient parameter adaptation. Finally, focus on the paper's central contribution, the Low-rank Error Informed Adaptation (LEIA) method, through a detailed paper reading talk that explains the novel approach and its benefits.

### Empirical risk minimization and limitations *(prerequisite)*
Empirical risk minimization (ERM) is the foundational training principle for supervised learning models, where the model minimizes average loss over training data. Understanding ERM and its limitations, such as sensitivity to subgroup failures and distribution shifts, is critical to appreciate why LEIA is needed to improve robustness beyond ERM.

*How the paper uses it:* The paper starts from a base model trained with ERM and addresses its weaknesses in handling unknown subgroups.

▶ [Lecture 3 | Learning, Empirical Risk Minimization, and Optimization](https://www.youtube.com/watch?v=9kAQ8Em7SdM) — Carnegie Mellon University Deep Learning · 1:18:43 · 6 years ago

### Group robustness in machine learning *(prerequisite)*
Group robustness studies how models perform equitably across different subpopulations, especially when subgroup labels are known or unknown. This concept is essential to understand the fairness challenges and why existing methods relying on known groups may fail on latent subgroups.

*How the paper uses it:* LEIA aims to improve robustness without explicit subgroup labels, addressing the limitations of known-group robustness methods.

▶ [Artificial Intelligence and Machine Learning 5 - Group DRO | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=ZFK2XtWqUbw) — Stanford Online · 17:40 · 4 years ago

### Low-rank adaptation methods *(prerequisite)*
Low-rank adaptation (LoRA) is a parameter-efficient fine-tuning technique that adapts large pretrained models by learning low-rank updates, reducing computational and memory overhead. Understanding LoRA provides the technical background for LEIA's adaptation mechanism that restricts updates to a low-dimensional subspace.

*How the paper uses it:* LEIA builds on the idea of low-rank adaptation to efficiently adjust classifier logits in an error-informed subspace.

▶ [LoRA: Low-Rank Adaptation of Large Language Models - Explained visually + PyTorch code from scratch](https://www.youtube.com/watch?v=PXWYUTMt-AU) — Umar Jamil · 26:55 · 3 years ago

### Low-rank Error Informed Adaptation (LEIA)
This section focuses on the paper's core contribution, LEIA, which identifies a low-dimensional subspace where errors concentrate and adapts the classifier logits restricted to this subspace without subgroup labels. The chosen talk provides a detailed paper reading explaining the method, its theoretical justification, and empirical results.

*How the paper uses it:* Directly explains the novel LEIA method proposed by the authors to improve robustness beyond known groups.

▶ [LoRA: Low-Rank Adaptation of Large Language Models Paper Reading](https://www.youtube.com/watch?v=bQrdd3BI_fM) — Arize AI · 40:18 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Robustness Beyond Known Groups with Low-rank Adaptation,' start by learning the foundational concept of empirical risk minimization, which is the base training method whose limitations motivate the new approach. Next, grasp the idea of group robustness in machine learning to appreciate the challenges of model fairness across subpopulations. Then, learn about low-rank adaptation methods, a core technique for efficient model parameter adaptation, which underpins the paper's proposed method. Finally, build intuition on error representation in neural networks, key to identifying subspaces where model errors concentrate, before exploring the paper's central method, Low-rank Error Informed Adaptation (LEIA).

### Empirical risk minimization and limitations *(prerequisite)*
Empirical Risk Minimization (ERM) is the standard approach to training machine learning models by minimizing the average loss on training data. However, ERM often fails to ensure good performance across all subpopulations, especially minority or unknown groups, leading to fairness and robustness issues.

*How the paper uses it:* The paper uses ERM as the base training method and highlights its weaknesses in handling unknown subgroups, motivating the need for LEIA.

▶ [Empirical Risk Minimization Explained | The Engine Behind Modern AI](https://www.youtube.com/watch?v=8fsJCyBOizQ) — Alexander Jung · 12:27 · 5 years ago

### Group robustness in machine learning *(prerequisite)*
Group robustness focuses on ensuring machine learning models perform well across different subpopulations or groups, preventing poor outcomes for minority or disadvantaged groups. It addresses fairness and generalization challenges when subgroup labels are known or unknown.

*How the paper uses it:* Understanding group robustness is essential to appreciate why LEIA targets robustness beyond known groups without requiring explicit subgroup labels.

▶ [Artificial Intelligence and Machine Learning 5 - Group DRO | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=ZFK2XtWqUbw) — Stanford Online · 17:40 · 4 years ago

### Low-rank adaptation methods *(prerequisite)*
Low-rank adaptation (LoRA) is a parameter-efficient technique to fine-tune large models by injecting low-rank matrices into model layers, reducing the number of trainable parameters while maintaining performance. This approach enables efficient adaptation without full model retraining.

*How the paper uses it:* LEIA builds on low-rank adaptation principles to restrict adaptation to a low-dimensional error-informed subspace, improving robustness efficiently.

▶ [LoRA: Low-Rank Adaptation of Large Language Models - Explained visually + PyTorch code from scratch](https://www.youtube.com/watch?v=PXWYUTMt-AU) — Umar Jamil · 26:55 · 3 years ago

### Error representation in neural networks *(prerequisite)*
Error representation involves understanding how and where a neural network makes mistakes in its learned representation space. Identifying directions or subspaces where errors concentrate can guide targeted model improvements.

*How the paper uses it:* LEIA identifies a low-dimensional subspace in the representation space where errors concentrate, enabling focused adaptation without subgroup labels.

▶ [Error calculation - Neural Network Intuition](https://www.youtube.com/watch?v=E7Iw0BXAg0A) — AI Expert Academy · 5:20 · 3y ago

## Already in your library

- [W8_L1: Low-rank adaptation (lora)](https://www.youtube.com/watch?v=my_5FjvP1vU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Robust Learning via Robust Optimization - Stefanie Jegelka](https://www.youtube.com/watch?v=IgAPc0i0-9E) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)
- [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the LEIA method from the paper "Robustness Beyond Known Groups with Low-rank Adaptation." Starting from a small-scale reproduction of LEIA's core error subspace identification, you then implement the full LEIA adaptation on a public dataset comparing it to ERM baseline, and finally extend LEIA to a new domain or data modality addressing one of the paper's limitations or future directions.

### Beginner — Error Subspace Visualization for LEIA
*Effort: a weekend, ~8 hours*

You build a small Python notebook that trains a simple neural network classifier on a public image classification dataset (e.g., MNIST or CIFAR-10) using empirical risk minimization (ERM). Then you compute the error-weighted covariance matrix of the penultimate layer representations to identify the low-dimensional subspace where errors concentrate, and visualize this subspace with PCA or t-SNE.

**Why it shows you understood the paper:** This project demonstrates you understand the key LEIA insight of locating error-concentrated directions in representation space without subgroup labels, a fundamental step before adaptation.

**Grounded in:** LEIA identifies a low-dimensional subspace in the representation space where model errors concentrate by computing an error-weighted covariance matrix.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, scikit-learn

**Data:** Use MNIST or CIFAR-10 as a substitute for the paper's datasets to demonstrate error subspace identification.

**Build it:**

1. Train a simple CNN classifier on MNIST or CIFAR-10 using ERM.
2. Collect penultimate layer representations and prediction errors on a held-out validation set.
3. Compute the error-weighted covariance matrix of these representations.
4. Perform PCA or t-SNE on this covariance matrix to identify and visualize the error subspace.
5. Plot the top principal components and highlight error concentration directions.

**Ships as:** A Jupyter notebook showing training, error subspace computation, and visualizations with explanations.

**Stretch goal:** Add a comparison of error subspaces computed with uniform weighting vs error-weighted covariance to highlight LEIA's approach.

### Intermediate — Implementing LEIA Adaptation on CivilComments Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the LEIA method from the paper's description and apply it to a public text classification dataset with known subgroup annotations such as CivilComments (to simulate the paper's setting). You train a base model with ERM, then perform LEIA adaptation by computing the error-informed low-rank subspace and applying a low-rank additive adjustment to classifier logits. You compare worst-group accuracy (WGA) against the ERM baseline.

**Why it shows you understood the paper:** This project proves you can implement the core LEIA algorithm end-to-end, including error subspace estimation and low-rank adaptation, and evaluate its impact on robustness metrics as the paper does.

**Grounded in:** LEIA is a two-stage method: train base model with ERM, then adapt classifier logits restricted to an error-informed low-rank subspace, improving worst-group accuracy without subgroup labels.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), NumPy, scikit-learn

**Data:** Use the CivilComments dataset, publicly available and used in robustness research, as a substitute for the paper's text datasets.

**Build it:**

1. Train a base text classifier on CivilComments using ERM.
2. Identify errors on a held-out validation set and compute the error-weighted covariance matrix of the model's penultimate layer representations.
3. Extract the top-k eigenvectors to define the low-rank error subspace.
4. Implement a low-rank additive adaptation layer on the classifier logits restricted to this subspace.
5. Fine-tune only the adaptation parameters on the held-out set without subgroup labels.
6. Evaluate and compare worst-group accuracy and average accuracy against the ERM baseline.

**Ships as:** A GitHub repo with code to train, adapt, and evaluate LEIA on CivilComments, including scripts and a README with results and plots.

**Stretch goal:** Experiment with different ranks k and weighting strengths γ to analyze LEIA's hyperparameter robustness.

### Advanced — Extending LEIA to Longitudinal Clinical Risk Prediction
*Effort: 3+ weeks*

You extend the LEIA method to a longitudinal clinical dataset (e.g., MIMIC-III or a synthetic longitudinal dataset) to address the paper's limitation about applying LEIA beyond classification and static data. You adapt LEIA to handle temporal representations from recurrent or transformer-based models and evaluate robustness to unknown patient subpopulations evolving over time. You analyze challenges in multi-modal or longitudinal data adaptation.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of LEIA's mechanism and its limitations, and the ability to innovate by transferring it to a complex real-world healthcare setting aligned with the professor's research interests.

**Grounded in:** The method has been validated primarily on classification benchmarks; its effectiveness in other tasks or real-world deployment pipelines requires further study. Future direction: evaluating LEIA in clinical pipelines where subgroup relevance evolves over time.

**Tech stack:** Python 3.11, PyTorch, PyTorch Lightning, NumPy, scikit-learn, pandas

**Data:** Use MIMIC-III clinical database (publicly available) or a synthetic longitudinal clinical dataset to simulate evolving patient subpopulations.

**Build it:**

1. Preprocess longitudinal clinical data to extract temporal patient representations using an RNN or transformer model.
2. Train a base risk prediction model with ERM on the longitudinal data.
3. Extend LEIA's error-weighted covariance computation to temporal representations aggregated over time or per patient.
4. Implement low-rank adaptation on the classifier logits considering temporal dynamics.
5. Fine-tune adaptation parameters on a held-out longitudinal subset without subgroup labels.
6. Evaluate robustness improvements on worst-case patient subpopulations that evolve over time.
7. Document challenges and potential modifications needed for multi-modal or longitudinal data.

**Ships as:** A comprehensive GitHub repository with code, experiments, and a detailed report discussing LEIA extension to longitudinal clinical data and robustness results.

**Stretch goal:** Integrate automated hyperparameter tuning for LEIA adaptation parameters to improve deployment readiness.
