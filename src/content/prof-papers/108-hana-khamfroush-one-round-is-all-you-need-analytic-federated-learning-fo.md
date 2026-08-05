---
title: "108 · One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification — Hana Khamfroush"
date: 2026-07-30
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hana-khamfroush"
source_hash: "9bd568327f0862eaad46ec57dd1cab8150251a3d389ce6696989e5809fca0a2c"
sequence: 108
generator: "outreach-garden: managed"
---

# 108 · One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification

## At a glance

- **Professor:** Hana Khamfroush
- **Institution:** University of Kentucky
- **Paper:** [One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification](https://arxiv.org/pdf/2607.20641)
- **Authors:** Afsaneh Mahanipour, Hana Khamfroush
- **Year:** 2026

## Paper overview

This paper presents a new federated learning method that allows multiple hospitals to collaboratively train a multi-label disease classifier from medical images without sharing patient data. Unlike existing methods that require many communication rounds and struggle when different hospitals label different diseases, this approach uses analytic, closed-form solutions to achieve accurate classification in just one or two communication rounds, even when each hospital labels only a subset of diseases.

### Why it matters

**Research problem:** Federated learning methods for multi-label medical image classification fail under task heterogeneity, where different clients annotate different subsets of disease categories, leading to false-negative bias and requiring many communication rounds to converge.

**Why it matters:** Medical institutions often specialize in different diseases and cannot share patient data due to privacy regulations. Effective federated learning under task heterogeneity is crucial to build accurate, privacy-preserving disease classifiers that leverage diverse clinical expertise.

**Key contributions:**

- First closed-form federated learning framework for multi-label medical image classification with partial per-client annotations.
- Per-class Absolute Aggregation law extending analytic federated learning to task-heterogeneous settings.
- Principled closed-form correction for class imbalance integrated into sufficient statistics.
- Two-round analytic procedure with zero-shot teacher classifier for pseudo-label refinement.
- Demonstrated robustness and communication efficiency across varying degrees of task heterogeneity.

## About the professor

**Hana Khamfroush** — Associate Professor, Department of Management, University of Kentucky.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://engr.uky.edu/people/hana-khamfroush)
- [Identity evidence](https://www.engr.uky.edu/directory/khamfroush-hana)
- [Identity evidence](https://hkhamfroush.wordpress.com/home/)
- [Identity evidence](https://scholar.google.com/citations?user=qNAcUB8AAAAJ&hl=en)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's novel analytic federated learning approach for task-heterogeneous multi-label medical image classification, start by building foundational knowledge on task heterogeneity challenges in federated learning and class imbalance/false negative bias correction techniques. Then, explore the critical analytic closed-form aggregation methods in distributed learning. Finally, focus on the core concept of analytic federated learning and the authors' own talk to grasp their specific contributions and innovations.

### Task Heterogeneity in Federated Learning *(prerequisite)*
This section covers the fundamental challenges posed by task heterogeneity in federated learning, where clients label different subsets of classes. Understanding these challenges is crucial as the paper directly addresses the false-negative bias and convergence issues arising from such heterogeneity.

*How the paper uses it:* The paper proposes a per-class Absolute Aggregation law to handle task heterogeneity by aggregating only over annotating clients per class.

▶ [Stanford MLSys Seminar Episode 3: Virginia Smith](https://www.youtube.com/watch?v=laCyJICLyWg) — Stanford MLSys Seminars · 1:00:55

### Class Imbalance and False Negative Bias Correction *(prerequisite)*
This section explains techniques to correct skewed label distributions and false-negative biases, which are central problems in multi-label medical image classification under federated learning. These corrections are essential to improve classifier accuracy when labels are missing or imbalanced.

*How the paper uses it:* The paper introduces a balanced label projection to simultaneously correct class imbalance and false-negative bias in the federated learning setting.

▶ [Brendan Herger | Machine Learning Techniques for Class Imbalances & Adversaries](https://www.youtube.com/watch?v=u72FD79tsxA) — PyData · 9 years ago

### Closed-form Aggregation in Distributed Learning *(prerequisite)*
Understanding closed-form aggregation methods is key to grasping how the paper replaces iterative gradient optimization with analytic, communication-efficient operations. This section covers fundamental distributed aggregation techniques that enable efficient federated learning.

*How the paper uses it:* The paper's per-class Absolute Aggregation law is a closed-form operation enabling efficient aggregation over clients without iterative communication.

▶ [Disrupting Distributed ML feat. Guanhua Wang | Stanford MLSys Seminar Episode 25](https://www.youtube.com/watch?v=gDKRrrfPgng) — Stanford MLSys Seminars · Streamed 5 years ago

### Analytic Federated Learning
This section focuses on the core analytic federated learning framework that the paper proposes, which uses closed-form solutions for federated multi-label classification. It is essential to understand this to appreciate how the method achieves high accuracy with minimal communication rounds.

*How the paper uses it:* The paper's main contribution is an analytic federated learning framework that achieves state-of-the-art performance with at most two communication rounds.

▶ [Federated Learning and Analytics at Google and Beyond](https://www.youtube.com/watch?v=Yu6SZJZuPtY) — AI Council · 26:41

### Paper Author Talk *(the paper's own talk)*
The authors' own talk provides direct insights into their novel analytic federated learning method, experimental results, and the motivation behind their approach. This is the most authoritative and detailed source for understanding the paper's contributions.

*How the paper uses it:* This talk is the direct presentation of the paper's contributions by the authors themselves.

▶ [Aymeric Dieuleveut - Federated Learning with Communication Constraints: Challenges in (...)](https://www.youtube.com/watch?v=I4kiWpRqg_Q) — Institut des Hautes Etudes Scientifiques (IHES) · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces you first to the basics of multi-label medical image classification and the challenges of task heterogeneity in federated learning. Then it covers class imbalance and false negative bias correction techniques crucial for this paper's method. Finally, it explains the core analytic federated learning approach with closed-form aggregation that enables efficient, privacy-preserving collaboration across hospitals with heterogeneous labels.

### Multi-label Medical Image Classification *(prerequisite)*
Learn how medical images can contain multiple disease labels simultaneously and why classifying them requires special techniques. This includes understanding label co-occurrence, imbalance, and the challenges in training models that predict multiple diseases at once.

*How the paper uses it:* The paper addresses multi-label classification of diseases from medical images where each hospital labels only a subset of diseases.

▶ [Deep Learning in Medical Imaging: Multi-label Classification ...](https://www.youtube.com/watch?v=YsytDf-MDN4) — LearnOpenCV · 7:21

### Task Heterogeneity in Federated Learning *(prerequisite)*
Understand the problem where different clients (e.g., hospitals) have data labeled for different subsets of classes, causing bias and convergence issues in federated learning. This heterogeneity complicates collaborative training without sharing raw data.

*How the paper uses it:* The paper's main challenge is task heterogeneity where clients annotate different disease subsets, leading to false-negative bias.

▶ [Stanford MLSys Seminar Episode 3: Virginia Smith](https://www.youtube.com/watch?v=laCyJICLyWg) — Stanford MLSys Seminars · 1:00:55

### Class Imbalance and False Negative Bias Correction *(prerequisite)*
Explore techniques to handle imbalanced datasets where some classes are rare and to correct false negatives caused by missing labels. These corrections are essential to build accurate multi-label classifiers in federated settings.

*How the paper uses it:* The paper uses balanced label projection to correct class imbalance and false-negative bias from missing annotations.

▶ [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — Emma Ding · 13:44 · 3 years ago

### Closed-form Aggregation in Distributed Learning *(prerequisite)*
Learn how distributed learning can use analytic, closed-form aggregation methods to combine client updates efficiently without iterative gradient exchanges. This reduces communication rounds and computational costs.

*How the paper uses it:* The paper introduces a per-class Absolute Aggregation law enabling closed-form federated learning under task heterogeneity.

▶ [Secure Model Aggregation in Federated Learning](https://www.youtube.com/watch?v=rwzLSNMpm8U) — Communications and Signal Processing Seminar Series · 4 years ago

### Analytic Federated Learning
Discover the novel approach of replacing iterative federated optimization with analytic, closed-form operations that achieve accurate multi-label classification in one or two communication rounds.

*How the paper uses it:* The core contribution is an analytic federated learning framework that efficiently trains multi-label classifiers with partial client annotations.

▶ [An Intro to Federated Learning with Flower with Daniel J. Beutel](https://www.youtube.com/watch?v=tdEwGT3QBjU) — Open Data Science and AI Conference · 30:53


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of the analytic federated learning method for task-heterogeneous multi-label medical image classification presented in the paper. Starting with a focused implementation of the balanced label projection mechanism, you then reimplement the core analytic federated learning approach on a public medical image dataset, and finally extend the method by exploring improved pseudo-label refinement strategies to address a key limitation noted by the authors.

### Beginner — Balanced Label Projection for False-Negative Bias Correction
*Effort: a weekend, ~8 hours*

You build a standalone Python script or Jupyter notebook that implements the balanced label projection technique described in the paper to correct false-negative bias caused by missing labels in multi-label classification. Using synthetic or publicly available multi-label data with artificially induced missing labels, you demonstrate how the balanced label vector construction normalizes positive and negative contributions to equal total mass.

**Why it shows you understood the paper:** This project shows you grasp the core problem of false-negative bias under task heterogeneity and the paper's novel closed-form correction mechanism, which is foundational to the analytic federated learning framework.

**Grounded in:** The method corrects false-negative bias caused by missing labels through balanced label projection.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use a small synthetic multi-label dataset or a subset of a public multi-label dataset (e.g., ChestXray14 substitute) with simulated missing labels to mimic task heterogeneity.

**Build it:**

1. Implement a function to simulate missing labels in a multi-label dataset to create false-negative bias.
2. Implement the balanced label projection formula to reweight label vectors so positive and negative contributions have equal total mass.
3. Visualize and compare label distributions before and after correction to demonstrate bias mitigation.
4. Write a short report or notebook markdown explaining the problem and how the correction works.

**Ships as:** A Jupyter notebook or script showing the effect of balanced label projection on label distributions with visualizations and explanations.

**Stretch goal:** Add a simple multi-label classifier trained on original vs. corrected labels to show impact on classification metrics.

### Intermediate — Reimplementation of Analytic Federated Learning on ChestXray14 Subset
*Effort: 2 weekends, ~20 hours*

You reimplement the core analytic federated learning framework from the paper, including balanced label projection and per-class absolute aggregation, to train a multi-label disease classifier on a publicly available subset of the ChestXray14 dataset. You compare your results against a simple federated baseline (e.g., FedAvg) using balanced accuracy (BACC) and AUC metrics to demonstrate communication efficiency and robustness under task heterogeneity.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's analytic closed-form federated learning method into code and evaluate its advantages over iterative gradient-based baselines, reflecting a deep understanding of the paper's core contributions.

**Grounded in:** First closed-form federated learning framework for multi-label medical image classification with partial per-client annotations; Demonstrated robustness and communication efficiency across varying degrees of task heterogeneity.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use a publicly available subset of the ChestXray14 dataset or a similar public multi-label medical image dataset, simulating task heterogeneity by partitioning labels across clients.

**Build it:**

1. Download and preprocess the ChestXray14 subset or substitute dataset for multi-label classification.
2. Simulate task heterogeneity by assigning disjoint subsets of disease labels to different clients.
3. Implement balanced label projection and per-class absolute aggregation as described in the paper.
4. Implement a simple federated baseline (FedAvg) for comparison.
5. Train and evaluate both methods, reporting BACC and AUC metrics and communication rounds required.
6. Document the implementation details, results, and insights in a README or notebook.

**Ships as:** A GitHub repository with code to run the analytic federated learning method and baseline, plus evaluation scripts and a report comparing performance and communication efficiency.

**Stretch goal:** Add the optional pseudo-label refinement round and analyze its effect on performance under severe label scarcity.

### Advanced — Improved Pseudo-Label Refinement for Analytic Federated Learning
*Effort: 3-4 weeks*

You extend the analytic federated learning framework by designing and implementing an improved pseudo-label refinement strategy to mitigate noisy pseudo-labels under severe label scarcity, addressing a key limitation noted in the paper. You evaluate your method on the ChestXray14 dataset or a similar public dataset with simulated extreme task heterogeneity and compare performance against the original two-round method.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, proposing and implementing a novel extension that could improve federated learning under challenging real-world conditions.

**Grounded in:** The optional two-round pseudo-label refinement does not improve and may degrade performance on the ChestXray14 dataset, possibly due to noisy pseudo-labels under severe label scarcity; Investigate improved pseudo-label refinement strategies to enhance performance under severe label scarcity.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use the ChestXray14 dataset or a similar public multi-label medical image dataset with simulated extreme task heterogeneity and label scarcity.

**Build it:**

1. Reimplement the original analytic federated learning method including the two-round pseudo-label refinement.
2. Research and design an improved pseudo-label refinement strategy, such as adaptive weighting or filtering of pseudo-labels to reduce noise.
3. Integrate the improved refinement into the analytic federated learning pipeline.
4. Evaluate and compare the original and improved methods on metrics like BACC and AUC under severe label scarcity.
5. Analyze results and document findings, including potential trade-offs and future improvements.

**Ships as:** A GitHub repository with the extended analytic federated learning code, evaluation scripts, and a detailed report discussing the improved pseudo-label refinement and its impact.

**Stretch goal:** Explore domain adaptation or backbone fine-tuning to further improve feature quality and classification accuracy.
