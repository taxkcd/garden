---
title: "503 · Robust edge-based biomarker discovery improves prediction of breast cancer metastasis — Jianhua Ruan"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jianhua-ruan"
source_hash: "d11b35c67b5b2d5821524a5805789305b5105abe23bbfd7f6c2f5fb0d14cd4de"
sequence: 503
generator: "outreach-garden: managed"
---

# 503 · Robust edge-based biomarker discovery improves prediction of breast cancer metastasis

## At a glance

- **Professor:** Jianhua Ruan
- **Institution:** University of Texas at San Antonio
- **Paper:** [Robust edge-based biomarker discovery improves prediction of breast cancer metastasis](https://doi.org/10.1186/s12859-020-03692-2)
- **Authors:** Nahim Adnan, Chengwei Lei, Jianhua Ruan
- **Year:** 2020

## Paper overview

This study proposes a new method for predicting breast cancer metastasis by using network-based features derived from gene interactions (edges) rather than individual gene expression levels alone. The authors show that these edge-based features improve prediction accuracy and robustness compared to traditional gene-based features, using large datasets and multiple machine learning models.

### Why it matters

**Research problem:** Breast cancer metastasis prediction using molecular biomarkers is challenging due to variability and instability of gene-based markers. It is unclear whether incorporating network information (protein-protein interactions and gene co-expression) improves prediction accuracy and robustness over gene expression alone.

**Why it matters:** Breast cancer metastasis is a leading cause of death among women. Early and accurate prediction of metastasis can guide treatment decisions and improve patient outcomes. Robust biomarkers are essential for reliable diagnosis and understanding disease mechanisms.

**Key contributions:**

- Introduction of edge-based features from PPI and CE networks for biomarker discovery in breast cancer metastasis prediction.
- Comprehensive evaluation of edge-based versus gene-based features using multiple datasets, models, and metrics.
- Novel unbiased statistical procedure for measuring feature importance and robustness accounting for sample size, feature number, and class imbalance.
- Demonstration that edge-based features outperform gene-based features in Random Forest and Logistic Regression models.
- Robustness analysis showing edge-based features are more stable across data subsets than gene-based features.

## About the professor

**Jianhua Ruan** — Professor, Department of Computer Science, University of Texas at San Antonio.

Research interests: bioinformatics, computational biology, and machine learning; machine learning methods for modeling and analyzing cis-regulatory networks; graph algorithms for analyzing complex biological networks; data mining approaches to biomarker discovery and disease prediction via integrated analysis of heterogenous 'omics' data

### Research links

- [Faculty/profile page](https://caicc.utsa.edu/faculty/profiles/ruan-jianhua.html)
- [Identity evidence](http://www.cs.utsa.edu/~jruan)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** machine learning for bioinformatics
**The paper assumes:** supervised machine learning models, feature selection techniques, model evaluation metrics in bioinformatics
**Already in this field?** Skip this entirely if you already have a solid understanding of supervised machine learning methods and their application in biological data analysis.

This background prepares you to understand the machine learning methods applied to bioinformatics data in the paper, focusing on models like Random Forest, Logistic Regression, and Support Vector Machines, especially in the context of high-dimensional biological features and feature selection challenges. The rigorous course offers a deep, structured university-level introduction to machine learning concepts relevant to bioinformatics, while the fast track provides a concise, practical introduction to applying machine learning in bioinformatics projects. Choose the course for comprehensive theoretical grounding and the fast track for a quick, application-focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-6 and 9 (Support Vector Machines, Decision Trees and Ensemble Methods), about 7.5 hours — covering foundational ML concepts, SVMs, and ensemble methods like Random Forests, which are central to the paper's methodology.

*Why it unblocks this paper:* Stanford CS229: Machine Learning led by Andrew Ng (Autumn 2018) is a rigorous, authoritative university course covering supervised learning, support vector machines, feature selection, and ensemble methods, directly relevant to understanding the machine learning models and statistical procedures used in the paper.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [A Beginner's guide to Machine Learning in Bioinformatics with Python](https://www.youtube.com/playlist?list=PLsSUJubNtkrCESp-eEiWayFa3vQ2VN3kK) — Bioinformatics Guy · 7 videos · 0.6h across 7 episodes

**Watch only this:** Episodes 1-5, about 25 minutes — covering ML basics, data preprocessing, feature selection, and model training/testing relevant to the paper's approach.

*Why it unblocks this paper:* A Beginner's guide to Machine Learning in Bioinformatics with Python offers a concise, practical introduction to machine learning workflows specifically tailored to bioinformatics, including data preprocessing, feature selection, and model training, which aligns well with the paper's applied focus.

*If you want all of it:* 0.6 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on robust edge-based biomarker discovery for breast cancer metastasis prediction, start by building foundational knowledge on protein-protein interaction networks and gene co-expression networks, as these underpin the construction of edge-based features. Next, study machine learning methods for biomarker prediction and the statistical concepts of feature importance and robustness in high-dimensional data, which are critical for evaluating the proposed method. Finally, focus on the paper's core concept of network-based biomarker discovery, including the authors' own talk presenting their novel approach and results.

### Protein-protein interaction networks *(prerequisite)*
Understanding protein-protein interaction (PPI) networks is essential because the paper constructs edge-based features from PPI data. The selected video provides an academic-level introduction to PPI networks, their biological significance, and experimental methods to detect interactions, which is foundational for grasping how these networks inform biomarker discovery.

*How the paper uses it:* The paper derives edge-based features from PPI networks to improve metastasis prediction.

▶ [MCB 182 Lecture 11.2 - Protein-protein interaction (PPI) networks](https://www.youtube.com/watch?v=b3KRMCh2iH0) — Gerald Quon · 17:30 · 5 years ago

### Gene co-expression networks *(prerequisite)*
Gene co-expression networks complement PPI networks by capturing correlated gene expression patterns, which the paper uses to define additional edge-based features. The chosen lecture offers a rigorous, research-level overview of co-expression network construction and analysis, providing necessary background to understand the paper's methodology.

*How the paper uses it:* The paper uses gene co-expression networks to generate edge-based features alongside PPI networks.

▶ [July 16, 2013 - How WGCNA Can be Used to Compare and Contrast Two Networks](https://www.youtube.com/watch?v=aBD67YmCBK4) — Computing Technologies Research Lab Streaming · 54:58 · 12 years ago

### Machine learning for biomarker prediction *(prerequisite)*
Machine learning techniques are central to the paper's evaluation of edge-based versus gene-based features for metastasis prediction. The selected talk is a university-level seminar that discusses machine learning applications in precision medicine and biomarker development, aligning well with the paper's use of Random Forest, Logistic Regression, and SVM models.

*How the paper uses it:* The paper applies multiple machine learning models to assess the predictive power of edge-based features.

▶ [Machine Learning for Precision Medicine - Weekly Research Conference  with Arvind Mer, PhD](https://www.youtube.com/watch?v=Q_7vrcIIhaw) — University of Ottawa Heart Institute · 56:40 · 4 years ago

### Feature importance and robustness in high-dimensional data *(prerequisite)*
The paper introduces a novel unbiased statistical procedure to measure feature importance and robustness, accounting for high-dimensional data challenges. The chosen video is a rigorous academic lecture on robust statistics in high-dimensional inference, providing theoretical context for understanding the paper's methodological contributions.

*How the paper uses it:* The paper proposes a novel procedure for unbiased feature importance and robustness evaluation in high-dimensional biomarker data.

▶ [Learning Across Bandits in High Dimension via Robust Statistics](https://www.youtube.com/watch?v=aHKZUuEOrl4) — Simons Institute for the Theory of Computing · 47:31 · Streamed 3 years ago

### Network-based biomarker discovery
This is the core concept of the paper, focusing on using network edges as features to improve breast cancer metastasis prediction. The authors' own talk provides direct insight into their novel method, experimental results, and biological interpretations, making it the most authoritative and relevant resource for understanding the paper.

*How the paper uses it:* The paper's central contribution is the introduction and evaluation of edge-based features derived from biological networks for biomarker discovery.

▶ [Biomarker Discovery in a Big Data World](https://www.youtube.com/watch?v=PuIJY2IrHDo) — PROOF Centre · 42:46 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's approach to breast cancer metastasis prediction using edge-based biomarkers. We start with basic biological networks (protein-protein interactions and gene co-expression), then cover machine learning fundamentals for biomarker prediction, followed by feature importance and robustness in high-dimensional data. Finally, we focus on the paper's core method: network-based biomarker discovery using edge features derived from these networks.

### Protein-protein interaction networks *(prerequisite)*
Protein-protein interaction (PPI) networks map how proteins physically or functionally interact within cells. Understanding these networks helps explain how genes work together in biological processes. This foundation is essential because the paper uses PPI networks to define edge-based features for biomarker discovery.

*How the paper uses it:* The paper derives edge features from PPI networks to improve breast cancer metastasis prediction.

▶ [MCB 182 Lecture 11.2 - Protein-protein interaction (PPI) networks](https://www.youtube.com/watch?v=b3KRMCh2iH0) — Gerald Quon · 17:30 · 5 years ago

### Gene co-expression networks *(prerequisite)*
Gene co-expression networks represent genes that show similar expression patterns across samples, suggesting shared regulation or function. These networks complement PPI networks by capturing functional relationships. The paper uses co-expression networks to generate additional edge-based features for biomarker prediction.

*How the paper uses it:* The paper constructs gene co-expression networks to create edge features alongside PPI networks.

▶ [WGCNA in a nutshell](https://www.youtube.com/watch?v=q9a2RvqYZzQ) — LiquidBrain · 12:23 · 5 years ago

### Machine learning for biomarker prediction *(prerequisite)*
Machine learning models can learn patterns from biological data to predict disease outcomes. Understanding basic ML concepts and evaluation metrics helps grasp how the paper compares gene-based and edge-based features using models like Random Forest and Logistic Regression.

*How the paper uses it:* The paper applies multiple machine learning models to evaluate the predictive power of edge-based versus gene-based features.

▶ [Machine Learning for Biology (Beginner Friendly) | 4 Algorithms Explained | Bioinformatics](https://www.youtube.com/watch?v=3DD03M-XW-4) — BinaryBio · 10:49 · 5 months ago

### Feature importance and robustness in high-dimensional data *(prerequisite)*
High-dimensional biological data often contain many features, making it challenging to identify which are truly important and stable. Robustness measures how consistent feature importance is across data subsets. The paper introduces a novel unbiased procedure to assess feature importance and robustness in this context.

*How the paper uses it:* The paper proposes a novel statistical method to unbiasedly evaluate feature importance and robustness for edge-based biomarkers.

▶ [Feature Importance Explained - Main Models](https://www.youtube.com/watch?v=beVCJ80TDzs) — Mazen Ahmed · 11:08 · 2y ago

### Network-based biomarker discovery
Network-based biomarker discovery uses relationships between genes or proteins (edges) rather than individual gene expression levels to find more robust and predictive biomarkers. This approach leverages biological network structure to improve disease prediction accuracy and stability.

*How the paper uses it:* The paper's core contribution is using edge-based features from PPI and co-expression networks for robust breast cancer metastasis prediction.

▶ [MS-GUIDE: A Biomarker Discovery and Translation Strategy](https://www.youtube.com/watch?v=ppQUpBpHhvA) — SIB - Swiss Institute of Bioinformatics · 10:13 · 3 years ago

## Already in your library

- [Introduction to Biological Network Analysis II: Protein-Protein Interaction Networks: From Graphs to](https://www.youtube.com/watch?v=_JjmIH53DEE) — also for: SPIDER: constructing cell-type-specific protein–protein interaction networks (Simon Kasif)
- [Approaches for using protein protein interaction networks for ...](https://www.youtube.com/watch?v=VLPk1pr4QVo) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [Enhancing Protein-Protein Interaction... - Wei Wang - General Comp Bio - Talk - ISMB/ECCB 2021](https://www.youtube.com/watch?v=J2FrgziOyE8) — also for: TCR-EML: Explainable Model Layers for TCR-pMHC Prediction (Ramgopal Mettu)
- [Protein Protein Interaction Network- PART 1 | History of Graph ...](https://www.youtube.com/watch?v=Ukom7oPwSHk) — also for: Splitpea: quantifying protein interaction network rewiring changes due to alternative splicing in cancer (Vicky Yao)
- [Brief Introduction of Protein-Protein Interactions (PPIs)](https://www.youtube.com/watch?v=9IrPVXn-x5k) — also for: CTFacTomo: Reconstructing 3D spatial structures of RNA tomography transcriptomes by collapsed tensor factorization (Rui Kuang)
- [15. Gene Regulatory Networks](https://www.youtube.com/watch?v=So6MK_FcP4E) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)
- [16. Protein Interaction Networks](https://www.youtube.com/watch?v=RBPcKbEvK3U) — also for: Prioritization of causal genes from genome-wide association studies by Bayesian data integration across loci (Joel S. Bader)
- [Introduction to Weighted Gene Co-expression Network Analysis (WGCNA) | Bioinformatics 101](https://www.youtube.com/watch?v=PvBf65Y8Cqk) — also for: A Comparative Study of Gene Co-Expression Thresholding Algorithms (Michael A. Langston)
- [MCB 182 Lecture 11.5 - Co-expression networks](https://www.youtube.com/watch?v=d8-F5XjPi5E) — also for: A Comparative Study of Gene Co-Expression Thresholding Algorithms (Michael A. Langston)
- [Robust Learning via Robust Optimization - Stefanie Jegelka](https://www.youtube.com/watch?v=IgAPc0i0-9E) — also for: Can We Trust the Similarity Measurement in Federated Learning? (Xukai Zou)
- [Feature Selection Techniques Explained with Examples in Hindi ll Machine Learning Course](https://www.youtube.com/watch?v=vZDDmULsCUU) — also for: The Association Between Social Determinants of Health and Population Health Outcomes: Ecological Analysis (Yan Li)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core idea: that edge-based features derived from gene interaction networks improve breast cancer metastasis prediction. Starting with a small-scale reproduction of edge feature computation and comparison to gene features, you then implement the core method on a public dataset with machine learning models and evaluation metrics. Finally, you extend the approach by addressing a key limitation—feature selection for high-dimensional edge features—to improve model performance and interpretability.

### Beginner — Edge Feature Computation and Simple Comparison
*Effort: a weekend, ~8 hours*

You build a script to compute edge-based features from a small protein-protein interaction (PPI) network and gene expression data, then compare prediction performance of a simple classifier using gene-based versus edge-based features on a toy or small public breast cancer dataset. This reproduces the paper's basic feature construction and initial performance comparison.

**Why it shows you understood the paper:** This project shows you understand how to transform gene expression data into edge-based features and the rationale for comparing these feature types in a classification task, reflecting the paper's key methodological innovation.

**Grounded in:** Introduction of edge-based features from PPI and CE networks for biomarker discovery in breast cancer metastasis prediction; Edge-based features consistently outperformed gene-based features in Random Forest and Logistic Regression models.

**Tech stack:** Python 3.11, pandas, scikit-learn, networkx, matplotlib

**Data:** Use a small public breast cancer gene expression dataset (e.g., from UCI ML Repository or GEO) and a small PPI network subset from BioGRID or STRING databases as a substitute for the paper's data.

**Build it:**

1. Download a small breast cancer gene expression dataset and preprocess it (normalize, filter).
2. Obtain a small PPI network subset relevant to the dataset genes and represent it as an edge list.
3. Compute edge-based features by summing expression values of gene pairs connected in the PPI network.
4. Train a simple classifier (e.g., logistic regression) using gene-based features and separately using edge-based features.
5. Evaluate and compare prediction metrics (AUC, accuracy) for both feature types.
6. Visualize and report the performance difference.

**Ships as:** A GitHub repo with scripts to compute edge features, train classifiers, and a README showing performance comparison plots and explanation.

**Stretch goal:** Add co-expression network edge features and compare their predictive power to PPI-based edge features.

### Intermediate — Reimplementation of Edge-Based Biomarker Prediction on Public Breast Cancer Data
*Effort: 2-3 weekends, ~20 hours*

You reimplement the paper's core method of constructing edge-based features from PPI and co-expression networks and apply Random Forest and Logistic Regression models to predict breast cancer metastasis on a public dataset. You compare edge-based features to gene-based features using AUC and robustness metrics, replicating the paper's evaluation framework.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main methodology end-to-end, including network-based feature construction, model training, and rigorous evaluation, confirming comprehension of the paper's contributions and results.

**Grounded in:** Comprehensive evaluation of edge-based versus gene-based features using multiple datasets, models, and metrics; Edge-based features consistently outperformed gene-based features in Random Forest and Logistic Regression models across multiple datasets and evaluation metrics (AUC, F1-score, Kappa).

**Tech stack:** Python 3.11, pandas, scikit-learn, networkx, numpy, matplotlib, seaborn

**Data:** Use a public breast cancer gene expression dataset with metastasis labels (e.g., METABRIC or TCGA BRCA) and PPI network data from BioGRID or STRING; construct co-expression network from the expression data.

**Build it:**

1. Download and preprocess the breast cancer gene expression dataset with metastasis outcome labels.
2. Construct or download the PPI network and build a co-expression network from the dataset (e.g., using correlation thresholds).
3. Compute edge-based features by summing expression values of gene pairs in both networks.
4. Train Random Forest and Logistic Regression models using gene-based and edge-based features separately.
5. Evaluate models using AUC, F1-score, and Kappa metrics with cross-validation.
6. Perform robustness analysis by evaluating feature stability across data subsamples.
7. Document results and compare performance between feature types.

**Ships as:** A GitHub repo with code for feature construction, model training, evaluation, and a detailed README with performance tables and robustness analysis plots.

**Stretch goal:** Implement the paper's unbiased statistical procedure for feature importance and robustness evaluation to validate your results.

### Advanced — Feature Selection for Edge-Based Biomarkers to Improve SVM Performance
*Effort: 3-4 weeks, ~60 hours*

You extend the paper by developing and integrating feature selection or dimensionality reduction methods tailored for high-dimensional edge-based features to improve Support Vector Machine (SVM) model performance on breast cancer metastasis prediction. You analyze how feature selection affects prediction accuracy and biological interpretability of biomarkers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the challenges with edge-based features and the ability to innovate on the methodology to enhance model performance and interpretability.

**Grounded in:** The poor performance of edge-based features in SVM models highlights challenges with high-dimensional feature spaces and the need for feature selection; Develop feature selection or dimensionality reduction methods tailored for edge-based features to improve performance in models like SVM.

**Tech stack:** Python 3.11, pandas, scikit-learn, networkx, numpy, matplotlib, seaborn, scipy

**Data:** Use the same public breast cancer gene expression dataset and network data as in the intermediate project.

**Build it:**

1. Reimplement edge-based feature construction and baseline SVM model training without feature selection.
2. Implement feature selection methods suitable for high-dimensional data (e.g., recursive feature elimination, L1 regularization, or unsupervised methods like PCA).
3. Apply feature selection to edge-based features and retrain SVM models.
4. Evaluate and compare model performance metrics (AUC, F1-score) before and after feature selection.
5. Analyze the selected features for biological relevance and interpretability using gene ontology enrichment or pathway analysis.
6. Document the impact of feature selection on model accuracy and biomarker interpretability.

**Ships as:** A GitHub repo with code for feature selection pipelines, SVM training, evaluation, and a README discussing improvements, limitations, and biological insights.

**Stretch goal:** Extend the approach to integrate additional biological networks (e.g., regulatory networks) for feature construction and selection.

_No authors' code or datasets are publicly released for this paper; public breast cancer gene expression datasets and PPI networks must be used as substitutes._
