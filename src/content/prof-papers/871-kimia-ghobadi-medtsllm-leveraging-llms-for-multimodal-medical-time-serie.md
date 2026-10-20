---
title: "871 · MedTsLLM: Leveraging LLMs for Multimodal Medical Time Series Analysis — Kimia Ghobadi"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kimia-ghobadi"
source_hash: "fb7609344735b2d3e1fafac82f712fa0a8d7c71597a1c85bf67f233e73c12a7c"
sequence: 871
generator: "outreach-garden: managed"
---

# 871 · MedTsLLM: Leveraging LLMs for Multimodal Medical Time Series Analysis

## At a glance

- **Professor:** Kimia Ghobadi
- **Institution:** Johns Hopkins University
- **Paper:** [MedTsLLM: Leveraging LLMs for Multimodal Medical Time Series Analysis](https://arxiv.org/pdf/2408.07773)
- **Authors:** Nimeesha Chan, Felix Parker, William Bennett, Tianyi Wu, Mung Yao Jia, James Fackler, Kimia Ghobadi
- **Year:** 2024

## Paper overview

This paper introduces MedTsLLM, a novel framework that uses large language models (LLMs) to analyze complex medical time series data such as ECGs and respiratory waveforms. By integrating raw physiological signals with contextual patient information encoded as natural language, MedTsLLM performs clinically relevant tasks including semantic segmentation, boundary detection, and anomaly detection. The model outperforms existing state-of-the-art methods across multiple datasets, demonstrating its potential to improve clinical decision-making and patient outcomes.

### Why it matters

**Research problem:** Analyzing heterogeneous, high-dimensional medical time series data (e.g., physiological signals) is challenging for traditional machine learning methods, especially when integrating multimodal data such as raw signals and unstructured clinical text. Existing medical LLMs focus mainly on images or EHR text, with limited work on physiological time series analysis for tasks beyond classification or report generation.

**Why it matters:** Effective analysis of physiological signals is critical for patient monitoring and clinical decision-making in healthcare. Current methods struggle to capture complex, multi-dimensional patterns and interactions in time series data, limiting the ability to detect clinically significant events such as arrhythmias or respiratory phases. Improved tools can lead to earlier diagnosis, targeted treatments, and better patient care.

**Key contributions:**

- Proposed a general multimodal LLM framework that integrates raw medical time series data with unstructured textual context for clinically relevant tasks.
- Developed novel methods to capture correlations between covariates in multivariate time series, including concatenation, averaging, interleaving, and independent processing strategies.
- Constructed detailed prompts combining dataset, task, and patient-specific information to contextualize time series inputs for the LLM.
- Introduced three novel time series tasks for LLMs in healthcare: semantic segmentation, boundary detection, and anomaly detection.
- Demonstrated superior performance over state-of-the-art baselines including transformer-based models, other LLMs, and domain-specific methods across multiple medical datasets.

## About the professor

**Kimia Ghobadi** — John C. Malone Assistant Professor of Civil and Systems Engineering, Civil and Systems Engineering, Johns Hopkins University.

Research interests: Healthcare operations, Medical decision making, Mathematical modeling, Real-time algorithms, Mixed-integer programming, Inverse optimization

### Research links

- [Faculty/profile page](https://systems.jhu.edu/kimia)
- [Professor website](https://engineering.jhu.edu/faculty/kimia-ghobadi/)
- [Resolved homepage](https://systems.jhu.edu/kimia/)
- [Google Scholar](https://scholar.google.com/citations?user=CYdYNl0AAAAJ&hl=en)
- [Social profile](https://x.com/KimiaGhobadi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multimodal machine learning
**The paper assumes:** multimodal machine learning, representation learning, embedding alignment, and prompt engineering
**Already in this field?** Skip this entirely if you already understand how machine learning models combine and represent multiple data modalities, especially text and time series.

To understand the MedTsLLM paper, which integrates heterogeneous medical time series data with unstructured clinical text using large language models, a solid grasp of multimodal machine learning is essential. The rigorous course option offers a comprehensive, university-level deep dive into multimodal machine learning concepts, while the fast track provides a concise, well-structured tutorial series that covers the core ideas efficiently. Readers should choose the lane that fits their available time and depth needs; the fast track is a focused introduction, not a watered-down version.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 3.1 - Multimodal Representation Fusion, 4.1 - Multimodal Alignment, and 4.2 - Aligned Representation; about 6 hours total — these cover the core concepts of multimodal fusion and alignment relevant to the paper.

*Why it unblocks this paper:* This is the 2023 Fall Carnegie Mellon University course on Multimodal Machine Learning taught by LP Morency, directly covering foundational and advanced topics such as multimodal alignment, fusion, and transformers, which are crucial to understanding the embedding alignment and fusion strategies in MedTsLLM.

*If you want all of it:* About 20.1 hours across the first 17 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multimodal Machine Learning | CVPR 2022 Tutorial](https://www.youtube.com/playlist?list=PLki3HkfgNEsKPcpj5Vv2P98SRAT9wxIDa) — Artificial Intelligence · 7 videos · 3.1h across 7 episodes

**Watch only this:** Episodes 1 - Introduction, 2 - Representation, and 3 - Alignment; about 1.3 hours total — these episodes succinctly cover the essential background needed for the paper.

*Why it unblocks this paper:* This CVPR 2022 tutorial series provides a concise and clear introduction to multimodal machine learning, covering representation, alignment, reasoning, and generation in just over 3 hours, making it an efficient primer for understanding the multimodal integration techniques used in MedTsLLM.

*If you want all of it:* About 3.1 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand MedTsLLM, start with foundational knowledge on medical time series analysis to grasp the challenges of physiological signal processing. Then, study patch embedding alignment techniques critical for integrating time series data with LLM embeddings. Finally, focus on the core concept by watching the authors' own presentation of MedTsLLM, which directly explains their novel multimodal framework and its clinical applications.

### Medical time series analysis *(prerequisite)*
This section covers the foundational challenges and methods for analyzing physiological signals and routine health data, providing essential context for why MedTsLLM's approach is needed. The selected talk from the Broad Institute offers a rigorous, research-level seminar on time series machine learning in healthcare.

*How the paper uses it:* Understanding medical time series analysis is crucial to appreciate the problem MedTsLLM addresses in integrating heterogeneous physiological signals.

▶ [EWSC: Time series ML for deployment in healthcare, Anna Goldenberg](https://www.youtube.com/watch?v=fMnmztf0VK0) — Broad Institute · 59:08 · 3y ago

### Patch embedding alignment techniques *(prerequisite)*
This topic explains how to convert raw data patches into embeddings compatible with large language models, a key technical step in MedTsLLM's patch reprogramming layer. The Harvard Medical AI talk on ALBEF provides a detailed, research-focused explanation of alignment before fusion in multimodal models.

*How the paper uses it:* MedTsLLM relies on patch embedding alignment to map time series patches into the LLM embedding space effectively.

▶ [Harvard Medical AI: Elaine Liu presents ALBEF – Align before Fuse Vision and Language Representation](https://www.youtube.com/watch?v=zINRYqifY30) — Harvard Medical AI | Rajpurkar Lab · 4y ago

### MedTsLLM framework talk *(paper-talk search result; attribution unverified)*
This is the authors' own presentation of MedTsLLM, offering the most direct and detailed insights into their novel multimodal LLM framework for medical time series analysis. It covers the model architecture, task design, and experimental results, making it indispensable for understanding the paper.

*How the paper uses it:* This talk directly presents the MedTsLLM framework and its clinical applications as developed by the paper's authors.

▶ [MedTsLLM Leveraging LLMs for Multimodal Medical Time Series Analysis](https://www.youtube.com/watch?v=k2jI_LG80uQ) — 성균관대학교 스마트팩토리융합학과 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand MedTsLLM, starting with the basics of medical time series analysis to grasp the nature and challenges of physiological signals. Next, it covers semantic segmentation in time series as a key clinical task, followed by patch embedding alignment techniques critical for integrating time series data with large language models. Finally, it presents the core concept of the MedTsLLM framework itself, which fuses multimodal data for improved medical time series analysis.

### Medical time series analysis *(prerequisite)*
Learn what medical time series data are, such as ECG and respiratory signals, and understand the challenges in analyzing these complex, high-dimensional, and heterogeneous signals. This foundation helps appreciate why advanced methods like MedTsLLM are needed.

*How the paper uses it:* The paper addresses challenges in analyzing physiological time series data for clinical decision-making.

▶ [EWSC: Time series ML for deployment in healthcare, Anna Goldenberg](https://www.youtube.com/watch?v=fMnmztf0VK0) — Broad Institute · 59:08 · 3y ago

### Patch embedding alignment techniques *(prerequisite)*
Explore how raw time series data patches are converted into embeddings that can be aligned with the embedding space of large language models. This alignment is essential for fusing time series data with textual context in MedTsLLM.

*How the paper uses it:* The paper uses a patch reprogramming layer to align time series patch embeddings with the pretrained LLM embedding space.

▶ [PATCH EMBEDDING | Vision Transformers explained](https://www.youtube.com/watch?v=lBicvB4iyYU) — ExplainingAI · 3y ago

### MedTsLLM framework talk *(paper-talk search result; attribution unverified)*
Dive into the MedTsLLM framework itself, which integrates raw medical time series with rich textual context using a frozen large language model to perform semantic segmentation, boundary detection, and anomaly detection. This video provides direct insights into the model's design and clinical applications.

*How the paper uses it:* This is the authors' own presentation on MedTsLLM, explaining their novel multimodal LLM framework for medical time series analysis.

▶ [MedTsLLM Leveraging LLMs for Multimodal Medical Time Series Analysis](https://www.youtube.com/watch?v=k2jI_LG80uQ) — 성균관대학교 스마트팩토리융합학과 · 1y ago

## Already in your library

- [What is Multimodal Large Language Model (LLM)?](https://www.youtube.com/watch?v=_b1OAk8PKTA) — also for: Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT (Abdeltawab M. Hendawi)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — also for: Bypassing Prompt Guards in Production with Controlled-Release Prompting (Sanjam Garg)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Lecture 12: Time Series Analysis](https://www.youtube.com/watch?v=qlytPllimpQ) — also for: Deep clustering for large-scale interpretable time series segmentation (Huiping Cao)
- [Lecture 53 Semantic Segmentation I](https://www.youtube.com/watch?v=jsoZQV8_M5E) — also for: Benchmarking automated MIC detection: the AI-ready space biology SEM dataset and advanced detection methods (Jelena Tesic)
- [CS 198-126: Lecture 8 - Semantic Segmentation](https://www.youtube.com/watch?v=kxzB2p9gzWU) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Image Segmentation, Semantic Segmentation, Instance Segmentation, and Panoptic Segmentation](https://www.youtube.com/watch?v=5QUmlXBb0MY) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Lecture 15.1 - Semantic Segmentation \[Introduction to ...](https://www.youtube.com/watch?v=wyftZgUNMbQ) — also for: Let RGB Be the Language of Vision (Cihang Xie)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the MedTsLLM framework for multimodal medical time series analysis. Starting with a basic exploration of patch embedding alignment, you then implement and evaluate the core MedTsLLM method on public physiological datasets. Finally, you extend the framework to address a key limitation by incorporating noisy or incomplete patient context data, demonstrating a genuine research contribution.

### Beginner — Patch Embedding Alignment for Medical Time Series
*Effort: a weekend, ~8 hours*

You build a minimal prototype that takes multivariate medical time series data patches and aligns their embeddings into a pretrained LLM embedding space using a simple patch reprogramming layer. This project reproduces the core embedding alignment mechanism described in MedTsLLM on a small synthetic or publicly available physiological signal dataset.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key technical innovation in MedTsLLM: the patch reprogramming layer that enables raw time series data to be integrated with LLM embeddings. A professor would see you understand how to bridge heterogeneous data modalities at the embedding level.

**Grounded in:** The patch reprogramming layer aligns time series patch embeddings with the pretrained LLM embedding space.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Use a small subset of the MIT-BIH Arrhythmia dataset or simulate simple multivariate time series patches resembling ECG signals.

**Build it:**

1. Load or simulate multivariate time series patches representing physiological signals.
2. Implement a patch embedding network to convert time series patches into vector embeddings.
3. Implement a linear or small neural reprogramming layer to align these embeddings into the LLM embedding space dimension.
4. Visualize and verify embedding alignment by comparing distributions before and after alignment.
5. Document the process and results in a Jupyter Notebook.

**Ships as:** A GitHub repo with code and notebook demonstrating patch embedding alignment and visualizations, explaining how this mechanism enables multimodal fusion in MedTsLLM.

**Stretch goal:** Add a simple textual prompt embedding and show concatenation with time series patch embeddings to simulate multimodal input.

### Intermediate — Reimplement MedTsLLM for ECG Semantic Segmentation
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' MedTsLLM codebase, then reimplement the semantic segmentation task on the LUDB ECG dataset. You compare MedTsLLM's performance against a simple transformer baseline and report metrics like F1 score and mean Intersection over Union (mIoU). You also experiment with including patient-specific textual context in prompts.

**Why it shows you understood the paper:** This project shows you can operate the full MedTsLLM pipeline, understand its multimodal prompt design, and evaluate its clinical task performance. A professor would see you can reproduce and analyze the core method and results from the paper.

**Grounded in:** Achieved highest F1 scores and mean Intersection over Union (mIoU) for semantic segmentation on ventilator and LUDB ECG datasets; ablation studies showed including patient-specific information improves accuracy.

**Tech stack:** Python 3.11, PyTorch, Transformers library, Jupyter Notebook

**Data:** Use the LUDB ECG dataset as in the paper, accessed via the authors' GitHub repository: https://github.com/flixpar/med-ts-llm

**Build it:**

1. Clone the MedTsLLM repository from https://github.com/flixpar/med-ts-llm and set up the environment.
2. Download and preprocess the LUDB ECG dataset according to the repository instructions.
3. Run the semantic segmentation task using the provided MedTsLLM code and record baseline metrics.
4. Implement a simple transformer-based baseline model for semantic segmentation on the same data.
5. Modify the prompt to include patient-specific textual context and rerun MedTsLLM to observe performance changes.
6. Document the comparison results and insights in a detailed README or notebook.

**Verified links from the paper:**

- <https://github.com/flixpar/med-ts-llm> — released by the paper's authors

**Ships as:** A GitHub repo fork with runnable MedTsLLM code on LUDB, baseline comparison, and analysis of patient context effects on segmentation performance.

**Stretch goal:** Extend the evaluation to boundary detection on the BIDMC dataset using the same framework.

### Advanced — Robust MedTsLLM with Noisy Patient Context for Real-Time Clinical Use
*Effort: 3+ weeks*

You extend MedTsLLM to handle incomplete or noisy patient-specific textual context by implementing data augmentation and robust prompt engineering strategies. You evaluate the impact on semantic segmentation or anomaly detection tasks and explore lightweight model adaptations for real-time inference feasibility.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate beyond reproduction. A professor would see you can critically engage with the framework's challenges and propose practical solutions for clinical deployment.

**Grounded in:** Limitations include reliance on patient-specific textual context quality and challenges in real-time clinical deployment; future directions suggest handling missing/noisy context and real-time integration.

**Tech stack:** Python 3.11, PyTorch, Transformers library, Jupyter Notebook, Docker

**Data:** Use the LUDB or MIT-BIH datasets with simulated noise or missingness introduced into patient context prompts; use the authors' codebase as foundation.

**Build it:**

1. Fork and set up the MedTsLLM codebase from https://github.com/flixpar/med-ts-llm.
2. Design and implement methods to simulate noisy or incomplete patient context in textual prompts.
3. Incorporate robust prompt engineering or data augmentation techniques to mitigate noise impact.
4. Evaluate model performance on semantic segmentation or anomaly detection tasks with noisy context.
5. Experiment with model pruning or quantization to reduce computational demands for real-time use.
6. Document methodology, experiments, and results with discussion on clinical deployment challenges.

**Verified links from the paper:**

- <https://github.com/flixpar/med-ts-llm> — released by the paper's authors

**Ships as:** A GitHub repo demonstrating a robust MedTsLLM variant resilient to noisy patient context, with performance evaluation and deployment considerations.

**Stretch goal:** Integrate additional modalities such as medical imaging metadata into the multimodal prompt to further improve robustness.

_Confirm access and licensing terms for the LUDB and MIT-BIH datasets before starting; if unavailable, simulate physiological time series data with realistic characteristics._
