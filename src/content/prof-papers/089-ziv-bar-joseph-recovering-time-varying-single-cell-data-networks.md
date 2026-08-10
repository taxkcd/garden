---
title: "089 · Recovering Time-Varying Single-Cell Data Networks — Ziv Bar-Joseph"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ziv-bar-joseph"
source_hash: "9d6b905dfd89673093f777274651421e83335827dbe94e7ff8d6ab04ffe183ab"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for graph data
**The paper assumes:** graph neural networks, self-attention mechanisms, recurrent neural networks, meta-learning in machine learning
**Already in this field?** Skip this entirely if you already understand graph neural networks and attention-based deep learning models in computational biology or machine learning.

To understand the deep learning methods used in Marlene for reconstructing dynamic gene regulatory networks, it is essential to grasp graph neural networks (GNNs) and attention mechanisms applied to graph data. The rigorous course provides a comprehensive, research-level foundation in machine learning with graphs, while the fast track offers a concise, intuition-focused introduction to graph neural networks suitable for quick background preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Why Graphs, Applications, Choice of Graph Representation), 3.1 to 3.3 (Node Embeddings, Random Walk Approaches, Embedding Entire Graphs), 6.1 to 6.3 (Introduction to Graph Neural Networks, Basics of Deep Learning, Deep Learning for Graphs), and 7.1 to 7.3 (General Perspective on GNNs, Single Layer, Stacking Layers) — about 7.5 hours total.

*Why it unblocks this paper:* This is a comprehensive Stanford course by Jure Leskovec on machine learning with graphs, covering graph representations, embeddings, and graph neural networks in depth, directly relevant to understanding Marlene's use of self-attention and GRUs on graph-structured biological data.

*If you want all of it:* 47 episodes, approximately 24.1 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLV8yxwGOxvvoNkzPfCx2i8an--Tkt7O8Z) — DeepFindr · 27 videos · 6.6h across 27 episodes

**Watch only this:** Episodes 1 to 3 (Introduction, GNNs and Variants, PyTorch Geometric and Molecule Data), 6 (Understanding Graph Attention Networks), and 18 (Friendly Introduction to Temporal Graph Neural Networks) — about 1.5 hours total.

*Why it unblocks this paper:* This short-form series by DeepFindr provides a clear, visual, and project-based introduction to graph neural networks, including attention mechanisms and temporal graph networks, which aligns well with the dynamic graph construction in Marlene.

*If you want all of it:* 27 episodes, approximately 6.6 hours total.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a skill ladder to demonstrate your understanding of the Marlene method for recovering time-varying gene regulatory networks from single-cell RNA-seq data. The beginner project focuses on implementing a core mechanism of the paper (self-attention for gene feature aggregation) on a small scale using familiar tools. The intermediate project involves reimplementing the core dynamic graph construction and meta-learning adaptation on a public single-cell dataset, comparing against a baseline. The advanced project extends Marlene by addressing a stated limitation: improving long-term temporal modeling using an alternative recurrent architecture, demonstrating deeper engagement with the paper's future directions.

### Beginner — Gene Feature Pooling with Multihead Self-Attention
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements the paper's gene featurization step using multihead self-attention pooling (PMA) on a synthetic or small real single-cell RNA-seq dataset. The goal is to produce gene feature matrices invariant to cell order, mimicking the first step of Marlene.

**Why it shows you understood the paper:** This project shows you understand the key innovation of set-based gene featurization via attention, a foundational step enabling temporal graph learning in the paper.

**Grounded in:** Adaptation of temporal graph structure learning methods to single-cell RNA-seq data using set-based gene featurization.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, matplotlib

**Data:** Use a small synthetic single-cell RNA-seq dataset simulated with random gene expression values for ~100 cells and ~50 genes to demonstrate the pooling mechanism.

**Build it:**

1. Simulate or load a small single-cell gene expression matrix (cells × genes).
2. Implement multihead self-attention pooling (PMA) to aggregate cell features into gene features invariant to cell order.
3. Visualize the resulting gene feature embeddings using dimensionality reduction (e.g., PCA or t-SNE).
4. Write a README explaining how this step relates to Marlene's gene featurization.

**Ships as:** A Jupyter notebook demonstrating PMA-based gene feature pooling with visualizations and a README linking it to the paper's method.

**Stretch goal:** Add a comparison to simple mean or max pooling to show the advantage of attention-based pooling.

### Intermediate — Reimplement Marlene's Dynamic GRN Inference on Public Single-Cell Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core Marlene model: gene featurization with PMA, dynamic graph construction with evolving self-attention weights via GRUs, and meta-learning adaptation (MAML) for cell type tasks. You apply it to a publicly available time series single-cell RNA-seq dataset (e.g., a COVID-19 vaccination dataset substitute) and compare performance against a simple static GRN inference baseline like GENIE3.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main architecture and training procedure, reproduce key metrics like intersection-over-union (IoU) between consecutive time points, and understand meta-learning for rare cell types.

**Grounded in:** Marlene uses a three-step deep learning framework including PMA, evolving self-attention with GRUs, and MAML meta-learning to reconstruct dynamic GRNs; outperforms existing methods on COVID-19 vaccination and lung datasets.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook, numpy, matplotlib

**Data:** Use a publicly available time series single-cell RNA-seq dataset with annotated cell types and multiple time points, such as a COVID-19 vaccination dataset substitute from public repositories (e.g., 10x Genomics or GEO).

**Build it:**

1. Preprocess the single-cell RNA-seq data to select a subset of genes and cells with time point and cell type annotations.
2. Implement PMA gene featurization to create gene feature matrices invariant to cell order.
3. Implement a self-attention mechanism whose weights evolve over time using GRUs to construct dynamic gene regulatory networks.
4. Implement a MAML meta-learning loop treating each cell type as a task to enable adaptation to rare cell types.
5. Train the model to predict cell type labels from TF expression and inferred networks using cross-entropy loss.
6. Compare the inferred networks' temporal smoothness using IoU metrics against a static baseline like GENIE3.
7. Document the results and relate them to the paper's reported improvements.

**Verified links from the paper:**

- <https://github.com/fdtomasi/regain> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code, a notebook demonstrating dynamic GRN inference on real data, baseline comparison, evaluation metrics, and a detailed README explaining the implementation and results.

**Stretch goal:** Add biological pathway enrichment analysis on genes added between time points to mimic the paper's biological validation.

### Advanced — Extending Marlene with S4 Modules for Long-Term Temporal Modeling
*Effort: 3+ weeks*

You extend the Marlene model by replacing the GRU-based weight evolution with S4 (Structured State Space) modules to address the vanishing gradient limitation for longer time series. You evaluate this extended model on a synthetic or extended time series single-cell dataset to test improved long-term temporal dynamics modeling.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated in the paper, demonstrating deep comprehension of the model's architecture and temporal modeling challenges, as well as ability to integrate advanced sequence models.

**Grounded in:** For longer sequences, the GRU operation may suffer from vanishing gradient problems; alternative modules like S4 may be needed.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, numpy, matplotlib, s4seq (if available)

**Data:** Use a synthetic time series single-cell RNA-seq dataset with more time points than in the original paper to test long-term modeling, or extend a public dataset by interpolation or simulation.

**Build it:**

1. Reimplement or adapt the Marlene dynamic graph construction pipeline with PMA and self-attention.
2. Replace the GRU module evolving self-attention weights with an S4 module implementation for sequence modeling.
3. Train and evaluate the extended model on a longer time series dataset, monitoring metrics like IoU and temporal smoothness.
4. Compare performance and gradient stability against the original GRU-based model.
5. Document the architectural changes, training procedure, and results in detail.

**Ships as:** A GitHub repository with code implementing the S4-extended Marlene model, evaluation notebooks, and a comprehensive README discussing improvements and limitations.

**Stretch goal:** Integrate multi-omics data (e.g., ATAC-seq) as additional input features to test the model's adaptability, addressing another future direction.
