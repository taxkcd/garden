---
title: "832 · Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series — Xiang Zhang"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xiang-zhang-2833d2f522"
source_hash: "14072c7d08bc25505aeecc88c5876046915e5d69e7f22bfafa0d7e7899d8d5c1"
sequence: 832
generator: "outreach-garden: managed"
---

# 832 · Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series

## At a glance

- **Professor:** Xiang Zhang
- **Institution:** UNC - Charlotte
- **Paper:** [Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series](https://arxiv.org/pdf/2310.14017)
- **Authors:** Yihe Wang, Yu Han, Haishuai Wang, Xiang Zhang
- **Year:** 2023

## Paper overview

This paper introduces COMET, a new self-supervised learning framework designed to analyze medical time series data such as EEG and ECG signals. Unlike previous methods that focus on a single data level, COMET leverages hierarchical data consistencies at four levels—observation, sample, trial, and patient—to learn robust and generalizable representations without relying heavily on labeled data. Experiments on datasets for Alzheimer's, Parkinson's, and myocardial infarction detection show that COMET outperforms existing state-of-the-art methods, especially when labeled data is scarce.

### Why it matters

**Research problem:** Medical time series data have complex hierarchical structures (patient, trial, sample, observation levels) and limited labeled data, making it challenging to learn effective representations for disease diagnosis and monitoring. Existing contrastive learning methods typically exploit only one or two data levels and are often specialized for specific data types, limiting their ability to fully utilize the rich information in medical time series.

**Why it matters:** Accurate analysis of medical time series such as EEG and ECG is critical for early detection and diagnosis of neurological and cardiac diseases like Alzheimer's, Parkinson's, and myocardial infarction. However, expert annotations are scarce and costly, so methods that can learn from unlabeled data and leverage the hierarchical structure of medical time series can significantly improve diagnostic performance and patient care.

**Key contributions:**

- Introduction of a hierarchical contrastive learning framework (COMET) that leverages all four inherent data levels in medical time series.
- Design of four contrastive blocks corresponding to observation, sample, trial, and patient levels to capture multi-level data consistency.
- Demonstration of COMET's superior performance over six state-of-the-art baselines on three diverse medical datasets (EEG for Alzheimer's and Parkinson's, ECG for myocardial infarction) in patient-independent settings.
- Extensive ablation studies showing the effectiveness of each contrastive block and hyperparameter tuning.
- Provision of source code for reproducibility and future research.

## About the professor

**Xiang Zhang** — Assistant Professor, Department of Machine Learning, UNC - Charlotte.

Research interests: Deep Learning · Foundation Models · Medical Time Series · EEG · Neurological Disease Detection

### Research links

- [Faculty/profile page](https://xiangzhang.info/index.html)
- [Lab website](https://charmlab.charlotte.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=0hCzMi4AAAAJ)
- [GitHub](https://github.com/xiangzhang1015/)
- [LinkedIn](https://www.linkedin.com/in/xiang-zhang-053a2a13a/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** contrastive learning in machine learning
**The paper assumes:** contrastive learning, self-supervised representation learning, contrastive loss functions
**Already in this field?** Skip this entirely if you already understand the fundamentals of contrastive learning and self-supervised representation learning in machine learning.

This background focuses on contrastive learning, the core method behind the COMET framework in the paper. The rigorous course option offers a deep, structured university-level introduction to contrastive learning concepts within self-supervised learning, suitable for readers seeking comprehensive understanding. The fast track provides a concise, focused explainer series on contrastive and siamese networks, ideal for quickly grasping key ideas and practical insights without a heavy time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Machine Learning for Earth Observation](https://www.youtube.com/playlist?list=PL_co7pCozSFLGBYiSCDTwmnugKHzpb873) — EO College · 26 videos · 5.6h across 26 episodes

**Watch only this:** Episodes 4 to 7 ("Self-Supervised Learning - Contrastive Representation Learning" through "Self-Supervised Learning - Supervised vs. Self-Supervised Learning"), about 50 minutes total — these cover the core principles of contrastive learning and its role in self-supervised frameworks.

*Why it unblocks this paper:* This EO College playlist includes dedicated episodes on self-supervised and contrastive representation learning, covering foundational concepts and practical pipeline details relevant to understanding COMET's hierarchical contrastive blocks.

*If you want all of it:* 5.6 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [contrastive networks and siamese networks](https://www.youtube.com/playlist?list=PLyH8drkPF8JEpY7aGKqMsfuKR8hTD7fJY) — Farshad Noravesh · 32 videos · 6.5h across 32 episodes

**Watch only this:** Parts 1 to 4 ("siamese prototypical contrastive learning" through "unsupervised learning of visual features by contrastive clustering assignments"), about 48 minutes total — these episodes introduce core contrastive learning concepts and prototypical approaches relevant to hierarchical contrastive frameworks.

*Why it unblocks this paper:* Farshad Noravesh's playlist offers a clear, visual, and intuition-driven series specifically on contrastive and siamese networks, directly addressing the types of contrastive learning methods used in COMET, with practical examples and recent advances.

*If you want all of it:* 6.5 hours across 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Contrast Everything: A Hierarchical Contrastive Framework for Medical Time-Series,' start by grounding yourself in the foundational concepts of medical time series analysis and self-supervised learning on medical data, which provide the domain and learning paradigm context. Then, explore the fundamental technique of contrastive learning for deep representations, followed by the key innovation of modeling multilevel data consistency with contrastive loss. Finally, focus on the core concept of hierarchical contrastive learning frameworks, culminating with the authors' own talk or the closest available presentation to gain the most specific insights into their method.

### medical time series analysis *(prerequisite)*
Understanding medical time series analysis is crucial as it provides the domain context for the paper's data types such as EEG and ECG signals. This foundational knowledge covers how physiological signals are structured and analyzed, which is essential before diving into advanced learning frameworks.

*How the paper uses it:* The paper applies its hierarchical contrastive learning framework specifically to medical time series data like EEG and ECG for disease detection.

▶ [6. Physiological Time-Series](https://www.youtube.com/watch?v=lLhfDSOwWtU) — MIT OpenCourseWare · 1:21:01

### self supervised learning medical data *(prerequisite)*
Self-supervised learning is the core learning paradigm enabling label-efficient representation learning in the paper. This section provides insights into how models can learn from unlabeled medical data, a key challenge addressed by COMET.

*How the paper uses it:* COMET is a self-supervised framework designed to leverage unlabeled medical time series data for robust representation learning.

▶ [MIA: Nathaniel Diamant, No such thing as unlabeled: Self-supervised learning on medical data (2021)](https://www.youtube.com/watch?v=d51YakeXUgU) — Broad Institute · 4y ago

### contrastive learning deep representations *(prerequisite)*
Contrastive learning forms the fundamental technique underlying COMET's self-supervised pretraining. This section explains how contrastive methods learn representations by contrasting positive and negative pairs, a principle extended hierarchically in the paper.

*How the paper uses it:* COMET builds on contrastive learning to capture multi-level consistencies in medical time series data.

▶ [Contrastive Learning? MIT Short Answer](https://www.youtube.com/watch?v=Sex3p1Hjiek) — Rickard Brüel Gabrielsson · 3y ago

### hierarchical contrastive learning framework
This concept is central to the paper as COMET proposes a hierarchical contrastive learning framework that leverages multiple data levels. Exploring this topic provides a direct understanding of the framework's structure and rationale.

*How the paper uses it:* COMET introduces a hierarchical contrastive learning framework capturing multi-level consistencies in medical time series.

▶ [Part 10: HiURE: hierarchical exemplar contrastive learning for unsupervised relation extraction](https://www.youtube.com/watch?v=nKR9y4VLIks) — Farshad Noravesh · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand COMET, a hierarchical contrastive learning framework for medical time series. We start with the basics of medical time series data and self-supervised learning, then cover contrastive learning fundamentals, followed by the key innovation of modeling multi-level data consistency with hierarchical contrastive loss. This progression builds intuition step-by-step, culminating in the core method used in the paper.

### medical time series analysis *(prerequisite)*
Medical time series data, such as EEG and ECG signals, record physiological measurements over time and are crucial for diagnosing diseases. Understanding their nature and challenges helps appreciate why specialized learning methods are needed.

*How the paper uses it:* COMET is designed specifically to analyze hierarchical medical time series data like EEG and ECG for disease detection.

▶ [6. Physiological Time-Series](https://www.youtube.com/watch?v=lLhfDSOwWtU) — MIT OpenCourseWare · 1:21:01

### self supervised learning medical data *(prerequisite)*
Self-supervised learning enables models to learn useful representations from unlabeled data by creating surrogate tasks, which is important in medical domains where labeled data is scarce and costly.

*How the paper uses it:* COMET uses self-supervised pretraining to learn from unlabeled medical time series before fine-tuning on limited labeled data.

▶ [Self Supervised Learning in Medical AI](https://www.youtube.com/watch?v=dVj-pH7ksQA) — gdb80 · 1y ago

### contrastive learning deep representations *(prerequisite)*
Contrastive learning trains models to distinguish between similar (positive) and dissimilar (negative) data pairs, helping learn meaningful representations without labels. It is a core technique behind COMET's framework.

*How the paper uses it:* COMET builds on contrastive learning to capture similarities at multiple hierarchical levels in medical time series.

▶ [Contrastive Learning in PyTorch - Part 1: Introduction](https://www.youtube.com/watch?v=u-X_nZRsn5M) — DeepFindr · 4y ago

### hierarchical contrastive learning framework
Hierarchical contrastive learning frameworks organize contrastive tasks across multiple data levels or granularities, enabling models to capture both fine and coarse patterns. Understanding this helps grasp COMET's overall design.

*How the paper uses it:* COMET is a hierarchical contrastive learning framework that integrates four levels of contrastive learning for medical time series.

▶ [Hierarchically Decoupled Spatial-Temporal Contrast for Self ...](https://www.youtube.com/watch?v=97wMngV-BnI) — ComputerVisionFoundation Videos · 4:54

## Already in your library

- [Contrastive Learning with SimCLR | Deep Learning Animated](https://www.youtube.com/watch?v=UqJauYELn6c) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Supervised Contrastive Learning](https://www.youtube.com/watch?v=MpdbFLXOOIw) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [MulCon: Contrastive Loss for Multi-Label Images | Paper ...](https://www.youtube.com/watch?v=ql2Q2XSHMbU) — also for: Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction (Eran Halperin)
- [Lecture 12: Time Series Analysis](https://www.youtube.com/watch?v=qlytPllimpQ) — also for: Deep clustering for large-scale interpretable time series segmentation (Huiping Cao)
- [Contrastive Loss : Data Science Basics](https://www.youtube.com/watch?v=dC3_IKaBXTk) — also for: Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis (Natalie Stanley)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the COMET hierarchical contrastive learning framework for medical time series. The beginner project focuses on reproducing a core contrastive loss block on a small scale using familiar tools. The intermediate project involves running and extending the authors' released COMET code on a public or substitute dataset, comparing performance against a baseline. The advanced project tackles one of the paper's stated limitations by designing an adaptive weighting scheme to mitigate label conflicts between patient-level and trial-level contrastive blocks.

### Beginner — Implement Observation-Level Contrastive Loss on Synthetic ECG Data
*Effort: a weekend, ~8 hours*

You build a small Python script that implements the observation-level contrastive loss block from COMET using PyTorch. You generate synthetic ECG-like time series segments to simulate observations and samples. You train a simple encoder network to learn representations that maximize agreement between augmented views of the same observation.

**Why it shows you understood the paper:** This project shows you grasp the fundamental contrastive learning mechanism at the lowest hierarchical level in COMET and how data augmentations create positive pairs for self-supervised learning.

**Grounded in:** Introduction of four contrastive blocks corresponding to observation, sample, trial, and patient levels to capture multi-level data consistency.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic ECG-like time series segments generated in code to simulate observations and samples.

**Build it:**

1. Implement data augmentation functions for time series (e.g., jittering, scaling).
2. Generate synthetic ECG-like time series segments as observations.
3. Build a simple 1D CNN encoder network in PyTorch.
4. Implement the observation-level contrastive loss using NT-Xent loss.
5. Train the encoder on augmented pairs and visualize learned embeddings with t-SNE or PCA.

**Ships as:** A GitHub repo with code implementing observation-level contrastive loss on synthetic ECG data, training logs, and embedding visualizations in the README.

**Stretch goal:** Add sample-level contrastive loss to combine multiple observations and compare performance.

### Intermediate — Run and Extend COMET on EEG Alzheimer's Dataset with Baseline Comparison
*Effort: 2-3 weekends, ~20 hours*

You clone and run the authors' COMET code from https://github.com/DL4mHealth/COMET on the publicly available EEG dataset used for Alzheimer's detection (or a substitute public EEG dataset if original is unavailable). You reproduce the reported F1 score improvements over a baseline method such as TS2Vec. You then modify the training to disable one or more contrastive blocks to perform an ablation study and report the impact on performance.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' hierarchical contrastive framework, understand its modular design, and empirically validate the contribution of different contrastive blocks on real medical time series data.

**Grounded in:** Demonstration of COMET's superior performance over six state-of-the-art baselines on three diverse medical datasets and ablation studies showing the effectiveness of each contrastive block.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** EEG dataset for Alzheimer's detection as used in the paper; if unavailable, a public EEG dataset with hierarchical metadata can be substituted.

**Build it:**

1. Clone https://github.com/DL4mHealth/COMET and install dependencies.
2. Download and preprocess the EEG Alzheimer's dataset or substitute.
3. Run COMET pretraining and fine-tuning to reproduce baseline F1 scores.
4. Run a baseline method such as TS2Vec from https://github.com/yuezhihan/ts2vec for comparison.
5. Modify COMET to disable one or more contrastive blocks and evaluate performance impact.
6. Document results and insights in a Jupyter Notebook.

**Verified links from the paper:**

- <https://github.com/DL4mHealth/COMET> — released by the paper's authors
- <https://github.com/yuezhihan/ts2vec> — released by the paper's authors

**Ships as:** A GitHub repo with instructions to run COMET and baseline, ablation study results, and a notebook summarizing performance metrics and analysis.

**Stretch goal:** Add visualization of learned embeddings at different contrastive levels to interpret representation quality.

### Advanced — Adaptive Weighting of Contrastive Blocks to Resolve Label Conflicts in COMET
*Effort: 3-4 weeks*

You extend the COMET framework to implement an adaptive weighting scheme or dynamic selection mechanism for the four contrastive loss blocks to mitigate label conflicts between patient-level and trial-level consistency. You design experiments on the Alzheimer's EEG dataset to compare fixed equal weighting versus your adaptive approach, analyzing improvements in representation quality and downstream classification.

**Why it shows you understood the paper:** This project addresses a key limitation identified by the authors, showing deep comprehension of hierarchical contrastive learning challenges and the ability to innovate on the framework to improve robustness and performance.

**Grounded in:** Label conflicts between patient-level and trial-level consistency: positive pairs at patient level may be negative at trial level due to different trial IDs within the same patient.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** EEG Alzheimer's dataset as used in the paper or a substitute with hierarchical metadata.

**Build it:**

1. Understand the existing COMET codebase and how contrastive losses are combined.
2. Design and implement an adaptive weighting scheme that adjusts contrastive block weights during training based on loss magnitudes or representation agreement.
3. Integrate the adaptive weighting into the COMET training loop.
4. Run experiments comparing fixed weighting vs adaptive weighting on the EEG dataset.
5. Analyze results for improvements in F1 score and representation robustness.
6. Document methodology, code, and findings in a detailed report.

**Verified links from the paper:**

- <https://github.com/DL4mHealth/COMET> — released by the paper's authors

**Ships as:** A GitHub repo with the extended COMET code implementing adaptive weighting, experimental results comparing approaches, and a comprehensive README/report explaining the design and outcomes.

**Stretch goal:** Explore incorporating disease-level consistency when partial labels are available to further enhance the framework.

_Confirm availability of the EEG Alzheimer's dataset or a suitable public substitute with hierarchical metadata before starting intermediate and advanced projects._
