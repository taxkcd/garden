---
title: "089 · Recovering Time-Varying Single-Cell Data Networks — Ziv Bar-Joseph"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ziv-bar-joseph"
source_hash: "e8540e16537bcc084b67169cab4706c317873d270efbd5460db2d12118392dd5"
sequence: 89
generator: "outreach-garden: managed"
---

# 089 · Recovering Time-Varying Single-Cell Data Networks

## At a glance

- **Professor:** Ziv Bar-Joseph
- **Institution:** Carnegie Mellon University
- **Paper:** [Recovering Time-Varying Single-Cell Data Networks](https://doi.org/10.1093/bioinformatics/btaf210)
- **Authors:** Euxhen Hasanaj, Barnabás Póczos, Ziv Bar-Joseph
- **Year:** 2024

## Paper overview

This paper presents Marlene, a deep neural network method to reconstruct dynamic gene regulatory networks from time series single-cell RNA sequencing data. Marlene uses self-attention and recurrent units to model how gene interactions change over time and employs meta-learning to adapt to rare cell types. The method outperforms existing approaches on datasets related to COVID-19 vaccination, lung aging, and lung fibrosis, recovering biologically meaningful regulatory interactions and temporal dynamics.

### Why it matters

**Research problem:** Reconstructing temporal gene regulatory networks (GRNs) from large-scale, time series single-cell RNA-seq data is challenging due to data scale, cell heterogeneity, and the dynamic nature of gene regulation. Existing methods either do not scale well, ignore temporal dynamics, or cannot adapt to rare cell types.

**Why it matters:** Understanding dynamic gene regulation is crucial for insights into development, disease progression, immune responses, and aging. Accurate temporal GRNs can reveal mechanisms underlying biological processes and inform treatments for diseases such as COVID-19 and fibrosis.

**Key contributions:**

- Adaptation of temporal graph structure learning methods to single-cell RNA-seq data using set-based gene featurization.
- Novel use of GRUs to evolve self-attention weights over time for dynamic graph construction.
- Application of model-agnostic meta-learning to enable accurate network inference for rare cell types.
- Demonstration of improved performance over existing static and dynamic GRN inference methods on multiple public datasets.
- Biological validation showing enrichment of inferred regulatory interactions in known TF-gene databases and relevant biological pathways.

## About the professor

**Ziv Bar-Joseph** — FORE Systems Professor of Computer Science, Machine Learning Department and Computational Biology Department, Carnegie Mellon University.

Research interests: computational Biology, Bioinformatics and Machine learning

### Research links

- [Faculty/profile page](http://www.cs.cmu.edu/~zivbj)
- [Resolved homepage](http://www.cs.cmu.edu/~zivbj/)
- [Lab website](http://www.sb.cs.cmu.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Recovering Time-Varying Single-Cell Data Networks," start by gaining a solid foundation in single-cell RNA sequencing data analysis, which underlies the input data and biological context. Next, learn about the self-attention mechanism in deep learning, a key neural network component used in the paper to model gene interactions dynamically. Then, study model-agnostic meta-learning (MAML), which enables the method to adapt to rare cell types with limited data. Finally, focus on the core concept of dynamic gene regulatory network reconstruction from single-cell data, prioritizing the authors' own presentation for the most direct and detailed insights.

### single cell RNA sequencing data analysis lecture *(prerequisite)*
Understanding single-cell RNA sequencing data analysis is essential as it provides the biological and technical background for the data type used in the paper. This knowledge helps in appreciating the challenges of heterogeneity and temporal dynamics that the paper addresses.

*How the paper uses it:* The paper reconstructs dynamic gene regulatory networks from time series single-cell RNA-seq data, making familiarity with this data type crucial.

▶ [Lecture 03 - Single Cell Analysis - MLCB24](https://www.youtube.com/watch?v=xmLoR3ynwkw) — Manolis Kellis · 1:20:05

### self attention mechanism deep learning lecture *(prerequisite)*
Self-attention is a fundamental deep learning mechanism that allows the model to dynamically focus on different parts of the input, critical for modeling gene interactions that change over time in the paper's method.

*How the paper uses it:* Marlene uses a self-attention mechanism whose weights evolve over time to construct dynamic gene regulatory networks.

▶ [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — Michigan Online · 1:11:53

### model agnostic meta learning MAML lecture *(prerequisite)*
Model-agnostic meta-learning (MAML) is a meta-learning technique that enables fast adaptation to new tasks with limited data, which is crucial for handling rare cell types in the paper's approach.

*How the paper uses it:* The paper employs MAML to treat each cell type as a task, enabling accurate network inference for rare cell types with few samples.

▶ [[Few-shot learning][2.4] MAML: Model-Agnostic Meta-Learning](https://www.youtube.com/watch?v=IkDw22a8BDE) — Max Patacchiola · 28:11

### Marlene dynamic GRN reconstruction talk *(the paper's own talk)*
This section covers the core contribution of the paper: reconstructing time-varying gene regulatory networks from single-cell data. The authors' own talk provides the most direct, detailed, and authoritative explanation of their method, results, and biological implications.

*How the paper uses it:* The authors' presentation on Marlene offers direct insights into their novel deep learning framework for dynamic GRN inference from single-cell RNA-seq data.

▶ [Recovering Time-Varying Networks From Single-Cell Data - Euxhen Hasanaj - MLCSB - ISMB/ECCB 2025](https://www.youtube.com/watch?v=0ozrdvKCN9A) — ISCB · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand Marlene, a deep learning method for reconstructing dynamic gene regulatory networks from single-cell RNA-seq data. We start with the basics of single-cell RNA sequencing data and its analysis, then cover the self-attention mechanism in deep learning, followed by model-agnostic meta-learning (MAML) for adapting to rare cell types, and finally explore temporal graph neural networks which underpin Marlene's dynamic network modeling.

### single cell RNA sequencing data analysis lecture *(prerequisite)*
Single-cell RNA sequencing (scRNA-seq) allows measurement of gene expression at the resolution of individual cells, revealing cell heterogeneity and dynamic biological processes. Understanding the data type, its challenges, and common analysis workflows is essential to grasp how Marlene reconstructs gene regulatory networks from this data.

*How the paper uses it:* Marlene reconstructs temporal gene regulatory networks from time series single-cell RNA-seq data, so understanding this data type is foundational.

▶ [Lecture 03 - Single Cell Analysis - MLCB24](https://www.youtube.com/watch?v=xmLoR3ynwkw) — Manolis Kellis · 1:20:05

### self attention mechanism deep learning lecture *(prerequisite)*
Self-attention is a neural network mechanism that dynamically weighs the importance of different input elements relative to each other, enabling models to capture complex interactions. This concept is key to how Marlene models gene interactions that change over time.

*How the paper uses it:* Marlene uses a self-attention mechanism to construct dynamic gene networks whose weights evolve over time.

▶ [Intuition Behind Self-Attention Mechanism in Transformer Networks](https://www.youtube.com/watch?v=g2BRIuln4uc) — Ark (ark) · 39:24 · 5 years ago

### model agnostic meta learning MAML lecture *(prerequisite)*
Model-Agnostic Meta-Learning (MAML) is a meta-learning technique that enables models to quickly adapt to new tasks with limited data by learning a good initialization. This is crucial for Marlene to infer networks for rare cell types with few samples.

*How the paper uses it:* Marlene employs MAML to treat each cell type as a task, enabling fast adaptation to rare cell types.

▶ [Model Agnostic Meta Learning (MAML) | Machine Learning](https://www.youtube.com/watch?v=ItPEBdD6VMk) — TwinEd Productions · 6:36

### temporal graph neural networks lecture
Temporal graph neural networks extend graph neural networks to handle graphs that evolve over time, capturing dynamic relationships. Understanding this framework helps explain how Marlene models time-varying gene regulatory networks.

*How the paper uses it:* Marlene adapts temporal graph structure learning methods to single-cell data, evolving self-attention weights over time with recurrent units.

▶ [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — DeepFindr · 14:26

### Marlene dynamic GRN reconstruction talk *(the paper's own talk)*
This talk by the paper's author provides a focused overview of Marlene, explaining its architecture, innovations, and biological applications. It ties together all prior concepts in the context of the paper's contributions.

*How the paper uses it:* Direct presentation by the authors explaining Marlene's approach to recovering time-varying gene regulatory networks from single-cell data.

▶ [Recovering Time-Varying Networks From Single-Cell Data - Euxhen Hasanaj - MLCSB - ISMB/ECCB 2025](https://www.youtube.com/watch?v=0ozrdvKCN9A) — ISCB · 6 months ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
