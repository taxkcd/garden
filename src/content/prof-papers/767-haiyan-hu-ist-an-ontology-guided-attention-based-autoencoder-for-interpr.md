---
title: "767 · IST: an ontology-guided attention-based autoencoder for interpretable analysis of single-cell transcriptomic data — Haiyan Hu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-haiyan-hu"
source_hash: "5528e7a42917eeb6cc9a06ede035999ad3a6afc3aca842150ae509237ba6910b"
sequence: 767
generator: "outreach-garden: managed"
---

# 767 · IST: an ontology-guided attention-based autoencoder for interpretable analysis of single-cell transcriptomic data

## At a glance

- **Professor:** Haiyan Hu
- **Institution:** University of Central Florida
- **Paper:** [IST: an ontology-guided attention-based autoencoder for interpretable analysis of single-cell transcriptomic data](https://europepmc.org/articles/PMC13276392?pdf=render)
- **Authors:** Tasbiraha Athaya, Xiaoman Li, Haiyan Hu
- **Year:** 2026

## Paper overview

This paper presents IST, a novel deep learning model that integrates biological prior knowledge from gene ontology into an attention-based autoencoder architecture to analyze single-cell RNA sequencing data. IST improves interpretability by aligning learned gene activity representations with known biological functions and captures context-specific biological processes across different conditions. It outperforms existing models in both predictive accuracy and biological relevance, enabling discovery of new gene functions and better understanding of cellular mechanisms.

### Why it matters

**Research problem:** Extracting biologically interpretable insights from high-dimensional single-cell RNA sequencing data is challenging because deep learning models often produce latent representations that lack clear biological meaning and do not consistently incorporate prior biological knowledge.

**Why it matters:** Interpretable models that faithfully reflect known gene-function relationships are crucial for understanding biological mechanisms, identifying key pathways, and enabling downstream biomedical applications such as biomarker discovery and therapeutic target identification.

**Key contributions:**

- Integration of self-attention mechanisms within ontology-guided decoder layers to model hierarchical and cross-process biological relationships dynamically.
- A tailored correlation-based loss function that enforces alignment between learned gene activities and known gene-function relationships.
- A pruning strategy to filter GO terms by gene association counts to balance interpretability and model stability.
- Demonstration of IST's ability to identify condition-specific biological activities and predict novel gene functions.
- Comprehensive benchmarking against state-of-the-art ontology-based models showing superior biological interpretability and predictive performance.

## About the professor

**Haiyan Hu** — Associate Professor, School of Electrical Engineering and Computer Science, University of Central Florida.

Research interests: machine learning, neural networks, computer vision

### Research links

- [Faculty/profile page](http://www.cs.ucf.edu/~haihu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for biological data
**The paper assumes:** deep learning architectures, autoencoders, attention mechanisms, and their application to biological data
**Already in this field?** Skip this entirely if you already understand deep learning models, especially autoencoders and attention mechanisms, and their use in computational biology.

This background focuses on deep learning architectures relevant to biological data analysis, specifically attention-based autoencoders as used in the IST model for single-cell transcriptomics. The rigorous course provides a comprehensive foundation in deep learning principles and architectures, while the fast track offers an intuitive, visual introduction to neural networks and attention mechanisms. Choose the rigorous course for deep technical understanding and the fast track for a quicker conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Lectures 1-4, about 6 hours — covering introduction, supervised and self-supervised learning, full deep learning project cycle, and generative models to understand core deep learning concepts and architectures relevant to IST.

*Why it unblocks this paper:* Stanford CS230: Deep Learning I Autumn 2025 is a university-level course that covers foundational deep learning concepts including supervised and self-supervised learning, neural network architectures, and attention mechanisms. It directly supports understanding IST's deep learning model design and training strategies.

*If you want all of it:* 13.9 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1-7, about 2.5 hours — covering neural network basics, gradient descent, backpropagation, and attention in transformers, sufficient to understand the model architecture and attention mechanisms in IST.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series provides clear, visual, and intuitive explanations of neural networks, backpropagation, and attention mechanisms, which are essential to grasp the core ideas behind IST's attention-based autoencoder without deep technical detail.

*If you want all of it:* 3.6 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the IST model and its contributions, start by grounding yourself in the biological and technical prerequisites: gene ontology structure and single-cell RNA sequencing data analysis. Then, build foundational knowledge on transformer self-attention mechanisms and correlation-based loss functions in deep learning, which are key technical components of IST. Finally, focus on the core concept of the ontology-guided attention-based autoencoder and the authors' own talks or closely related academic lectures to grasp the novel integration and interpretability advances presented in the paper.

### gene ontology structure and applications *(prerequisite)*
Understanding gene ontology (GO) is critical as it provides the biological prior knowledge integrated into IST. This section covers the hierarchical structure, annotation types, and enrichment analysis methods that IST leverages to align learned representations with known biological functions.

*How the paper uses it:* IST integrates gene ontology hierarchical structure directly into its model architecture to guide interpretable analysis.

▶ [MCB 182 Lecture 5.2 - Gene ontology structure](https://www.youtube.com/watch?v=DTjE5tEXZY0) — Gerald Quon · 5 yr ago

### single-cell RNA sequencing data analysis *(prerequisite)*
Single-cell RNA sequencing (scRNA-seq) data is the input data type for IST. This section introduces the experimental and computational aspects of scRNA-seq, providing context for the challenges IST addresses in modeling high-dimensional, noisy biological data.

*How the paper uses it:* IST is designed specifically to analyze single-cell RNA sequencing data with improved interpretability and biological relevance.

▶ [Analysis Methods for Single Cell RNA-seq with Application to T-cell Function](https://www.youtube.com/watch?v=Dk1Tlb_HMNI) — Simons Institute for the Theory of Computing · 34:04 · 10 yr ago

### ontology-guided attention autoencoder
This is the core method of the paper, integrating gene ontology with an attention-based autoencoder to produce interpretable latent representations of scRNA-seq data. Understanding this architecture and its innovations is central to grasping IST's contributions.

*How the paper uses it:* IST is an ontology-guided attention-based autoencoder that models hierarchical and cross-process biological relationships dynamically.

▶ [Lecture 10.1: Autoencoder](https://www.youtube.com/watch?v=iI_IMuFf9rw) — UCF CRCV · 3 yr ago

### IST model author talk *(paper-talk search result; attribution unverified)*
The authors' own recorded talks provide direct insights into the IST model's design, motivations, and experimental results. These talks are the most authoritative source for understanding the paper's contributions and future directions.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on IST.

▶ [Lecture 28 Autoencoder](https://www.youtube.com/watch?v=jFLxia5lBZg) — Santanu Kundu · 7 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the IST paper from a beginner to advanced perspective, start by learning about single-cell RNA sequencing data analysis to grasp the biological context and data type. Next, understand gene ontology structure and its applications, as it provides the biological prior knowledge integrated into IST. Then, build foundational knowledge of transformer self-attention mechanisms and autoencoders, which are key deep learning components used in IST. Finally, explore the core concept of ontology-guided attention-based autoencoders and the correlation-based loss functions used for aligning learned representations with biological knowledge.

### single-cell RNA sequencing data analysis *(paper-talk search result; attribution unverified)*
Single-cell RNA sequencing (scRNA-seq) allows measurement of gene expression at the resolution of individual cells, enabling detailed study of cellular diversity and states. Understanding the basics of scRNA-seq data and its analysis is essential to appreciate the challenges IST addresses.

*How the paper uses it:* IST is designed to analyze high-dimensional single-cell RNA sequencing data to extract interpretable biological insights.

▶ [Single-Cell Transcriptomics Explained | scRNA-seq Basics | Molecular Biology](https://www.youtube.com/watch?v=ktpvebuwntY) — Animated biology With arpan · 9 mo ago

### gene ontology structure and applications *(prerequisite)*
Gene Ontology (GO) provides a structured vocabulary describing gene functions and biological processes, organized hierarchically. Learning about GO helps understand the biological prior knowledge that IST integrates into its model to improve interpretability.

*How the paper uses it:* IST incorporates the hierarchical structure of gene ontology to guide its attention-based autoencoder architecture.

▶ [Gene Ontology (GO) & Enrichment Analysis Tutorial | Complete Beginner’s Guide With Example](https://www.youtube.com/watch?v=6JqhaypwekY) — Biotecnika · 10 mo ago

### ontology-guided attention autoencoder
An autoencoder learns compressed representations of data, and when guided by ontology and attention mechanisms, it can produce biologically interpretable embeddings. Understanding this combined architecture is key to grasping how IST achieves interpretable analysis of scRNA-seq data.

*How the paper uses it:* IST is an ontology-guided attention-based autoencoder that integrates biological priors with deep learning for interpretable modeling.

▶ [Lecture 10.1: Autoencoder](https://www.youtube.com/watch?v=iI_IMuFf9rw) — UCF CRCV · 3 yr ago

## Already in your library

- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [What are Autoencoders?](https://www.youtube.com/watch?v=qiUEgSCyY5o) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Gene Ontology by QuickGO | Gene and Protein Functions Prediction | Lecture 41| Dr. Muhammad Naveed](https://www.youtube.com/watch?v=Fq7ZAjyQp7M) — also for: InterPro in 2022 (Cathy H. Wu)
- [Lec 15 | Introduction to Transformer: Self & Multi-Head Attention](https://www.youtube.com/watch?v=ofsTGSeakbE) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Self Attention in Transformers | Deep Learning | Simple Explanation with Code!](https://www.youtube.com/watch?v=-tCKPl_8Xb8) — also for: WNet: Discrete Wavelets Transform for Efficient Token Mixing (Abdou Youssef)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers and Self-Attention (DL 19)](https://www.youtube.com/watch?v=e9-0BxyKG10) — also for: Optimizing Resource-Constrained Non-Pharmaceutical Interventions for Multi-Cluster Outbreak Control Using Hierarchical Reinforcement Learning (Andrew Perrault)
- [Self-Attention Explained: How Transformers Actually Work (Full Visual Breakdown)](https://www.youtube.com/watch?v=vkhPtpUiLd8) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)
- [Loss Function In Neural Network & Various Types of Loss Functions](https://www.youtube.com/watch?v=Ffv7L5avJ3M) — also for: Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM (Christopher Homan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the IST model for interpretable single-cell transcriptomic analysis. The beginner project focuses on reproducing a key interpretability metric from the paper using existing tools and datasets. The intermediate project involves reimplementing the core IST architecture on a public scRNA-seq dataset and benchmarking it against a baseline. The advanced project extends IST by exploring a future direction proposed in the paper: reducing dependency on external GO enrichment rankings by incorporating self-supervised learning signals.

### Beginner — Reproduce GO Term Ranking Correlation on Mouse Muscle scRNA-seq
*Effort: a weekend, ~8 hours*

You build a pipeline that downloads the mouse regenerating muscle scRNA-seq dataset (GSE143437) and computes gene ontology (GO) term enrichment rankings using an external tool like EnrichR. Then, you compute Spearman’s correlation between these enrichment rankings and a simple gene activity score derived from the expression data aggregated by GO terms. This reproduces the paper’s key metric showing alignment between learned GO activities and enrichment analysis.

**Why it shows you understood the paper:** This project shows you understand the biological interpretability evaluation used in IST, specifically how GO term rankings from expression data relate to enrichment analysis, a core validation metric in the paper.

**Grounded in:** IST achieves high Spearman’s correlation (0.86–0.95) between inferred GO term rankings and enrichment analysis across three diverse scRNA-seq datasets.

**Tech stack:** Python 3.11, scanpy, pandas, scipy, requests

**Data:** Mouse regenerating muscle tissue scRNA-seq data from GEO accession GSE143437.

**Build it:**

1. Download and preprocess the GSE143437 scRNA-seq dataset using scanpy.
2. Use EnrichR or a similar GO enrichment tool to obtain GO term rankings from the dataset.
3. Aggregate gene expression data by GO terms to compute simple gene activity scores.
4. Calculate Spearman’s rank correlation between the computed GO term scores and enrichment rankings.
5. Visualize the correlation results and compare with reported values in the paper.

**Ships as:** A GitHub repository with a Jupyter notebook that downloads data, computes GO enrichment rankings, calculates correlation metrics, and visualizes results with clear README instructions.

**Stretch goal:** Add a comparison of correlation results across multiple timepoints or conditions in the dataset to explore context-specific biological activities.

### Intermediate — Reimplement IST Model on Human PBMC scRNA-seq Dataset
*Effort: 1-3 weekends*

You implement the core IST architecture as described in the paper: an attention-based autoencoder with an ontology-guided decoder incorporating gene ontology hierarchical structure and transformer self-attention layers. You train this model on the human PBMC scRNA-seq dataset (GSE96583) and evaluate its performance by computing Spearman’s correlation between learned GO term activities and enrichment rankings, comparing against a baseline autoencoder without ontology guidance.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper’s novel model architecture into code, apply it to real data, and reproduce key biological interpretability metrics, evidencing comprehension of both the method and evaluation.

**Grounded in:** IST integrates gene ontology hierarchical structure directly into the autoencoder decoder using transformer-based self-attention layers, enabling dynamic, context-dependent modeling of biological process interactions.

**Tech stack:** Python 3.11, PyTorch, scanpy, numpy, pandas, matplotlib

**Data:** Human peripheral blood mononuclear cells (PBMC) scRNA-seq data from GEO accession GSE96583.

**Build it:**

1. Download and preprocess the GSE96583 scRNA-seq dataset using scanpy.
2. Implement an autoencoder with an ontology-guided decoder incorporating GO hierarchy and transformer self-attention layers as described in the paper.
3. Train the model on the processed dataset, using a correlation-based loss to align learned GO term activities with enrichment rankings from EnrichR.
4. Implement a baseline autoencoder without ontology guidance for comparison.
5. Evaluate and compare the Spearman’s correlation between predicted GO term rankings and enrichment rankings for both models.
6. Document the implementation, training procedure, and evaluation results in a README.

**Verified links from the paper:**

- <https://github.com/TasbirahaAthaya/IST> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the IST model implementation, training scripts, evaluation notebooks, and a detailed README explaining the approach and results.

**Stretch goal:** Incorporate the pruning strategy to filter GO terms by gene association counts and evaluate its effect on model stability and interpretability.

### Advanced — Self-Supervised IST: Reducing Dependency on External GO Enrichment Rankings
*Effort: a few weeks*

You extend the IST model by developing a self-supervised training approach that reduces or eliminates reliance on external GO enrichment rankings for supervision. This could involve designing a loss function that leverages intrinsic data structure or gene co-expression patterns to guide the alignment of learned GO term activities with biological priors. You apply this enhanced model to one of the paper’s datasets and compare interpretability and predictive performance against the original IST.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the authors, demonstrating deep understanding of the IST framework and creativity in advancing its methodology toward greater independence and generalizability.

**Grounded in:** Developing models that do not rely on external GO enrichment rankings for supervision.

**Tech stack:** Python 3.11, PyTorch, scanpy, numpy, pandas, matplotlib

**Data:** Use one of the paper’s datasets such as mouse MEFs (GSE160764) or human PBMC (GSE96583) for training and evaluation.

**Build it:**

1. Review the IST model implementation and its correlation-based loss dependent on external GO enrichment rankings.
2. Design and implement a self-supervised or unsupervised loss function that leverages gene expression co-variation or other intrinsic signals to guide GO term activity learning.
3. Integrate this loss into the IST training pipeline, replacing or augmenting the correlation loss.
4. Train the modified IST model on a selected scRNA-seq dataset (e.g., GSE160764).
5. Evaluate the model’s biological interpretability using metrics such as GO term ranking correlation (if possible) and predictive accuracy compared to the original IST.
6. Document the methodology, experiments, and results, highlighting improvements and limitations.

**Verified links from the paper:**

- <https://github.com/TasbirahaAthaya/IST> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the extended IST model code, training and evaluation scripts, and a comprehensive README discussing the new self-supervised approach and its impact.

**Stretch goal:** Apply the self-supervised IST model to a clinical single-cell dataset to explore biomarker discovery or patient stratification as suggested in the paper’s future directions.
