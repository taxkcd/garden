---
title: "486 · End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data — Fahad Saeed"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fahad-saeed"
source_hash: "2eff1c72eb03954c00a6d33a666f0b6d6ace1c803167f53ff9721a3fc8cf7aa3"
sequence: 486
generator: "outreach-garden: managed"
---

# 486 · End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data

## At a glance

- **Professor:** Fahad Saeed
- **Institution:** Florida International University
- **Paper:** [End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data](https://www.nature.com/articles/s41598-026-43215-2.pdf)
- **Authors:** Usman Tariq, Bilal Shabbir, Fahad Saeed
- **Year:** 2026

## Paper overview

This paper presents ProteoRift, a novel deep learning model that predicts multiple peptide properties such as length, missed cleavages, and modification status directly from mass spectrometry spectra. By integrating these predictions into a multitask pipeline with the SpeCollate model, the authors achieve significant search space reduction and speedups in peptide identification while maintaining accuracy comparable to traditional mass-based filtering methods. The approach also includes novel uncertainty metrics to quantify confidence in predictions, enhancing trust in machine learning applications in proteomics.

### Why it matters

**Research problem:** Traditional mass spectrometry-based peptide identification relies heavily on precursor mass filtering, which can exclude non-abundant or modified peptides and result in long search times or missed identifications. There is a need for improved computational methods that reduce search space more effectively while maintaining or improving identification accuracy.

**Why it matters:** Improving peptide identification from mass spectrometry data is critical for studying complex biological systems, including rare diseases, neurological disorders, and cancers. Enhanced computational methods can lead to better understanding of proteomes, including understudied proteins and post-translational modifications, ultimately advancing biomedical research and clinical applications.

**Key contributions:**

- Development of ProteoRift, an attention-based multitask deep learning model predicting multiple peptide properties directly from spectra.
- Integration of ProteoRift with SpeCollate to form an end-to-end peptide identification pipeline that reduces search space and speeds up database search.
- Introduction of novel uncertainty metrics (variation, density, density consistency) to quantify confidence in spectra embeddings and peptide deductions.
- Demonstration of significant speedups (8x to 41x) in peptide identification with comparable accuracy to traditional mass-based filtering methods.
- Extensive evaluation on diverse datasets including proteomics, meta-proteomics, immunopeptidomics, and tryptic peptides, showing robustness and generalizability.

## About the professor

**Fahad Saeed** — Full Professor of Computing and Graduate Program Director, Knight Foundation School of Computing and Information Sciences, Florida International University.

Research interests: the intersection of computational biology, big data, HPC and machine-learning

### Research links

- [Faculty/profile page](https://prof-s.github.io)
- [Resolved homepage](https://pcdslab.github.io)
- [Lab website](https://pcdslab.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=IPXv-GQAAAAJ&hl=en)
- [LinkedIn](https://twitter.com/Prof_FahadSaeed)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for proteomics
**The paper assumes:** deep learning architectures, attention mechanisms, multitask learning, and spectral embedding techniques in proteomics
**Already in this field?** Skip this entirely if you already have a solid understanding of deep learning methods applied to biological sequence and mass spectrometry data.

To understand the deep attention-based multitask learning model ProteoRift for peptide property prediction from mass spectrometry data, foundational knowledge in proteomics, mass spectrometry, and deep learning applications in proteomics is essential. The rigorous course option provides a comprehensive university-level introduction to proteogenomics and mass spectrometry-based proteomics, while the fast track offers a concise, focused series on computational proteomics with emphasis on mass spectrometry and AI applications. Choose the rigorous course for deep foundational understanding and the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2019-Introduction to Proteogenomics](https://www.youtube.com/playlist?list=PLOzRYVm0a65ejXQYPTNNRNbLmeqzCzsc-) — NPTEL IIT Bombay · 81 videos · 26.7h across the first 60 episodes

**Watch only this:** Lectures 11 to 17 (Introduction to Proteomics through Introduction to MS-based Proteomics II, including hands-on sessions), about 3 hours — these cover proteomics basics, mass spectrometry fundamentals, and sample preparation relevant to the paper's data domain.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Proteogenomics covers foundational topics in genomics and proteomics, including detailed lectures on mass spectrometry-based proteomics, sample preparation, and protein quantification, which are critical to understanding the biological and technical context of ProteoRift's deep learning approach.

*If you want all of it:* About 26.7 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Proteomics](https://www.youtube.com/playlist?list=PLREa2oHepsM8qX2z4AgVZLMghRFfJctuv) — Omar Elakad · 19 videos · 16.1h across the first 18 episodes

**Watch only this:** Episodes 2 (Lecture mass spectrometry basics - Part 1 of 7), 3 (Introduction into data analysis for mass spectrometry-based proteomics), and 5 (Proteomics and Deep Learning with Melih Yilmaz), about 2.5 hours total — these cover essential mass spectrometry concepts and AI applications relevant to ProteoRift.

*Why it unblocks this paper:* This Computational Proteomics playlist by Omar Elakad provides a focused and accessible introduction to mass spectrometry basics, data analysis, and the intersection of proteomics with deep learning, directly aligning with the paper's focus on AI-driven peptide property prediction.

*If you want all of it:* About 16.1 hours across the first 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on ProteoRift, start with foundational knowledge of mass spectrometry proteomics data analysis to grasp the nature of the input data and challenges. Next, study deep learning uncertainty quantification to appreciate the novel confidence metrics introduced. Then, learn about proteogenomics database search optimization to contextualize the search space reduction and speedup goals. Finally, focus on the core concept of attention-based multitask learning, which underpins ProteoRift's architecture, and conclude with the authors' own talk or the closest available substitute presenting their novel model and pipeline.

### Mass spectrometry proteomics data analysis *(prerequisite)*
Understanding mass spectrometry-based proteomics is essential to appreciate the input data characteristics, challenges in peptide identification, and the biological context of the study. The selected video is a university seminar that provides a comprehensive and rigorous introduction to mass spectrometry in proteomics.

*How the paper uses it:* ProteoRift predicts peptide properties directly from mass spectrometry spectra, so understanding this data type is foundational.

▶ [Core Facilities Seminar Series: Mass Spectrometry](https://www.youtube.com/watch?v=6obxz31xXRU) — UMass Amherst Institute for Applied Life Sciences · 1:00:49 · 4 years ago

### Deep learning uncertainty quantification *(prerequisite)*
The paper introduces novel uncertainty metrics to quantify confidence in predictions, making a solid grasp of uncertainty quantification in deep learning critical. The chosen video is an advanced MIT lecture that rigorously covers evidential deep learning and uncertainty estimation, aligning well with the paper's approach.

*How the paper uses it:* ProteoRift's novel uncertainty metrics rely on deep learning uncertainty quantification principles.

▶ [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — Alexander Amini · 48:52 · 5 years ago

### Proteogenomics database search optimization *(prerequisite)*
Proteogenomics database search optimization provides context for the search space reduction and speedup goals of the ProteoRift pipeline. The selected video is a university lecture that offers a detailed and academic perspective on qualitative proteomics and database search strategies.

*How the paper uses it:* ProteoRift integrates with SpeCollate to reduce search space and accelerate peptide identification in proteogenomic contexts.

▶ [2.1 Oliver Kohlbacher- Qualitative proteomics - Database search, PSMs](https://www.youtube.com/watch?v=YMFl3hxkBhM) — May Institute: Computation and Statistics for MS · 37:29 · 9 years ago

### Attention-based multitask learning
Attention-based multitask learning is the core methodological innovation in ProteoRift, enabling simultaneous prediction of multiple peptide properties from spectra. The chosen video is a Stanford University lecture by Chelsea Finn that provides an advanced and comprehensive treatment of multi-task learning, suitable for understanding the paper's model architecture.

*How the paper uses it:* ProteoRift is an attention-based multitask deep neural network predicting peptide properties directly from spectra embeddings.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - Multi-Task Learning Basics I 2022 I Lecture 2](https://www.youtube.com/watch?v=vI46tzt4O7Y) — Stanford Online · 1:17:38 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of mass spectrometry proteomics data analysis to grasp the nature of the input data and challenges in peptide identification. Next, build intuition on deep learning uncertainty quantification to appreciate the novel confidence metrics introduced. Then, explore attention-based multitask learning, the core method behind ProteoRift's architecture for predicting multiple peptide properties simultaneously. Finally, dive into the ProteoRift deep learning talk to see the specific model and pipeline developed in this work.

### Mass spectrometry proteomics data analysis *(prerequisite)*
Mass spectrometry proteomics is a technique to identify and quantify proteins by analyzing peptide fragments. Understanding how spectra are generated and interpreted is essential to appreciate the challenges in peptide identification and the motivation for computational improvements.

*How the paper uses it:* The paper predicts peptide properties directly from mass spectrometry spectra, so understanding this data type is foundational.

▶ [Mass Spectrometry explained – how it works](https://www.youtube.com/watch?v=6O_85tKfZHc) — Henrik's Lab · 5:06 · 1 year ago

### Deep learning uncertainty quantification *(prerequisite)*
Uncertainty quantification methods in deep learning help measure how confident a model is in its predictions, distinguishing between reliable and uncertain outputs. This is crucial for trusting machine learning models in sensitive applications like proteomics.

*How the paper uses it:* The authors introduce novel uncertainty metrics to quantify confidence in peptide property predictions from spectra.

▶ [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — Alexander Amini · 48:52 · 5 years ago

### Attention-based multitask learning
Attention-based multitask learning allows a model to focus on different parts of input data to simultaneously predict multiple related outputs, improving efficiency and accuracy. This approach is key to ProteoRift's ability to predict peptide length, missed cleavages, and modification status together.

*How the paper uses it:* ProteoRift uses an attention-based multitask deep neural network to predict multiple peptide properties from spectra embeddings.

▶ [Multi-Task Learning | Explained in 5 Minutes](https://www.youtube.com/watch?v=ckQuvrksP4k) — Leo Isikdogan · 5:40 · 5 years ago

## Already in your library

- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Easy introduction to gaussian process regression (uncertainty models)](https://www.youtube.com/watch?v=iDzaoEwd0N0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Mini Tutorial 6:  An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — also for: Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems (Carlos Varela)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the ProteoRift model and its multitask deep learning approach for peptide property prediction from mass spectrometry data. Starting with a beginner-level project to reproduce and visualize a key prediction metric, you then move to an intermediate project that runs and extends the authors' released ProteoRift code on real data. Finally, the advanced project challenges you to address a stated limitation by fine-tuning the model on a different fragmentation method, applying transfer learning techniques.

### Beginner — Visualize ProteoRift Peptide Length Prediction Precision
*Effort: a weekend, ~6 hours*

You build a small Python notebook that loads the peptide length prediction results from the authors' released data and reproduces the precision metric (up to 92%) reported in the paper. You create clear visualizations (e.g., bar charts or confusion matrices) to show the model's performance across peptide lengths and data sets.

**Why it shows you understood the paper:** This project shows you understand the core multitask prediction task of ProteoRift and how to interpret its precision metrics, a key quantitative result in the paper.

**Grounded in:** ProteoRift predicts peptide length with up to 92% precision

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas

**Data:** Use the peptide length prediction results from the authors' released dataset at https://osf.io/tk2r6

**Build it:**

1. Download the peptide length prediction results CSV or tabular data from https://osf.io/tk2r6
2. Load the data into a Jupyter Notebook using pandas
3. Calculate precision for peptide length prediction as defined in the paper
4. Create visualizations such as bar plots or confusion matrices to illustrate precision across peptide lengths
5. Write a README explaining the metric and how your results reproduce the paper's claim

**Verified links from the paper:**

- <https://osf.io/tk2r6> — released by the paper's authors

**Ships as:** A Jupyter Notebook and README showing peptide length prediction precision visualizations matching the paper's reported results

**Stretch goal:** Add similar visualizations for missed cleavage or modification status predictions using the other released datasets

### Intermediate — Run and Evaluate ProteoRift Multitask Model on Released Data
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' ProteoRift codebase from https://github.com/pcdslab/ProteoRift on the released datasets. You reproduce the multitask prediction accuracy (77.8%) and uncertainty metric ROC-AUC scores reported in the paper. You compare ProteoRift's peptide length prediction against a simple baseline such as random guessing or precursor mass filtering.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code and data, reproduce core multitask model results, and understand the value of uncertainty quantification in peptide property prediction.

**Grounded in:** The combined prediction accuracy for all three peptide properties is 77.8%; Uncertainty metrics distinguish in-distribution from out-of-distribution data with ROC-AUC of 0.99

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn

**Data:** Use the authors' released datasets from https://osf.io/tk2r6 and https://osf.io/ke9dy for training and evaluation

**Build it:**

1. Clone the ProteoRift repository from https://github.com/pcdslab/ProteoRift
2. Download the relevant datasets from https://osf.io/tk2r6 and https://osf.io/ke9dy
3. Set up the environment and dependencies as per the repository instructions
4. Run the pretrained ProteoRift model to generate peptide property predictions on test data
5. Calculate multitask prediction accuracy and uncertainty ROC-AUC metrics
6. Implement a simple baseline predictor (e.g., random or mass-based filtering) and compare performance
7. Document your findings and include plots comparing ProteoRift and baseline results

**Verified links from the paper:**

- <https://github.com/pcdslab/ProteoRift> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://osf.io/tk2r6> — released by the paper's authors
- <https://osf.io/ke9dy> — released by the paper's authors

**Ships as:** A GitHub repo with code, notebooks, and a report reproducing ProteoRift multitask prediction accuracy and uncertainty metrics, plus baseline comparisons

**Stretch goal:** Modify the model to predict only one peptide property and analyze the effect on accuracy and uncertainty

### Advanced — Fine-tune ProteoRift on CID Fragmentation Data Using Transfer Learning
*Effort: 3-4 weeks*

You extend the ProteoRift model by fine-tuning it on a dataset with CID fragmentation spectra, which the original model struggles with due to training on mostly HCD data. You implement transfer learning techniques to adapt the pretrained model weights and evaluate performance improvements in peptide property prediction accuracy and uncertainty metrics on CID data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your grasp of transfer learning, domain adaptation, and the practical challenges in proteomics ML models.

**Grounded in:** Currently trained primarily on HCD fragmentation data and tryptic peptides, leading to degraded performance on other fragmentation methods like CID or ETD without fine-tuning; To optimize performance on out-of-distribution datasets, transfer learning might be required

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn

**Data:** Use a publicly available CID fragmentation mass spectrometry dataset as a substitute for out-of-distribution data (e.g., from ProteomeXchange), or simulate CID-like spectra if none available

**Build it:**

1. Obtain a CID fragmentation mass spectrometry dataset suitable for peptide property prediction
2. Set up the ProteoRift environment and load the pretrained model weights
3. Implement transfer learning by freezing early layers and fine-tuning later layers on the CID dataset
4. Evaluate peptide property prediction accuracy and uncertainty metrics before and after fine-tuning
5. Analyze improvements and document challenges encountered
6. Write a detailed README explaining the methodology, results, and implications for model generalizability

**Verified links from the paper:**

- <https://github.com/pcdslab/ProteoRift> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with fine-tuning code, evaluation notebooks, and a report showing improved ProteoRift performance on CID data via transfer learning

**Stretch goal:** Experiment with continual learning approaches to update the model incrementally as new fragmentation data arrives

_For the advanced project, a suitable CID fragmentation dataset must be identified or simulated, as the authors' released data primarily covers HCD fragmentation._
