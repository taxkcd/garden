---
title: "144 · An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures — Chee-Hung Henry Chu"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chee-hung-henry-chu"
source_hash: "85b2bd2af11c61807c1fef5ccf1dfeb931f4a283250e9ae90c1f0414f06b45c4"
sequence: 144
generator: "outreach-garden: managed"
---

# 144 · An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures

## At a glance

- **Professor:** Chee-Hung Henry Chu
- **Institution:** Univ. of Louisiana - Lafayette
- **Paper:** [An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures](https://doi.org/10.1016/j.compbiomed.2021.104323)
- **Authors:** N. Anandanadarajah, C. H. Chu, R. Loganantharaja
- **Year:** 2021

## Paper overview

This paper presents a novel computational method that uses deep learning and dynamic programming to classify cancer-related genes into oncogenes, tumor suppressor genes, and fusion genes based on their 3D protein structures. The method processes protein data bank (PDB) files to extract features, applies a deep convolutional neural network (DCNN) to predict gene functionality, and uses dynamic programming to integrate predictions for gene primary structures. The approach achieves high accuracy and outperforms previous methods, potentially aiding drug development and cancer treatment.

### Why it matters

**Research problem:** Identifying the functional roles of genes related to cancer—specifically oncogenes (OG), tumor suppressor genes (TSG), and fusion genes—using computational methods based on 3D protein structures, which is challenging due to the complexity of cancer and the high cost of experimental annotation.

**Why it matters:** Accurate functional annotation of cancer-related genes is crucial for understanding cancer mechanisms and developing targeted therapies. Experimental methods are expensive and slow, so computational approaches can accelerate drug discovery and improve cancer diagnosis and treatment.

**Key contributions:**

- Developed a deep learning model that classifies genes into oncogenes, tumor suppressor genes, and fusion genes using 3D protein structure data.
- Introduced a data preprocessing pipeline that filters PDB files based on X-ray diffraction quality, sequence overlap, and SITE features relevant to cancer.
- Proposed a novel 'Brain inception residual' DCNN architecture optimized for processing multiple 2D projections of protein structures.
- Designed three dynamic programming-based methods to integrate isoform-level predictions into primary structure classification.
- Demonstrated superior performance compared to state-of-the-art methods, especially in distinguishing oncogenes and tumor suppressor genes.

## About the professor

**Chee-Hung Henry Chu** — Professor, School of Computing and Informatics, Univ. of Louisiana - Lafayette.

Research interests: machine learning and data science

### Research links

- [Faculty/profile page](https://people.cmix.louisiana.edu/chu/)
- [Identity evidence](https://math.emory.edu/~nagy)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Deep learning for bioinformatics
**The paper assumes:** deep learning, convolutional neural networks, bioinformatics data representation, protein structure analysis
**Already in this field?** Skip this entirely if you already understand convolutional neural networks and their application to biological sequence and structure data.

This background focuses on deep learning applications in bioinformatics, specifically understanding convolutional neural networks (CNNs) and their use in processing biological data such as protein structures. The rigorous course provides a comprehensive, project-based deep dive into bioinformatics and machine learning methods, while the fast track offers a concise introduction to machine learning in bioinformatics with Python, ideal for quickly grasping core concepts relevant to the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Bioinformatics Project](https://www.youtube.com/playlist?list=PLtqF5YXg7GLlQJUv9XJ3RWdd5VYGwBHrP) — Data Professor · 32 videos · 17.9h across 32 episodes

**Watch only this:** Episodes 1-5 (Bioinformatics Project from Scratch - Drug Discovery Parts 1 to 5), about 2.75 hours — covering data collection, preprocessing, exploratory data analysis, dataset preparation, and model building, which provide the essential foundation for understanding the paper's DCNN modeling and data pipeline.

*Why it unblocks this paper:* This Data Professor playlist covers applying data science and machine learning to bioinformatics projects, including data preprocessing, model building, and evaluation, directly relevant to the paper's deep learning approach on protein data.

*If you want all of it:* All 32 episodes, about 17.9 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [A Beginner's guide to Machine Learning in Bioinformatics with Python](https://www.youtube.com/playlist?list=PLsSUJubNtkrCESp-eEiWayFa3vQ2VN3kK) — Bioinformatics Guy · 7 videos · 0.6h across 7 episodes

**Watch only this:** Episodes 1-5, about 0.45 hours — these cover the basics of machine learning in bioinformatics, data downloading, preprocessing, feature and label selection, and training/testing models, sufficient for a quick understanding of the core ML workflow used in the paper.

*Why it unblocks this paper:* This beginner's guide series by Bioinformatics Guy offers a succinct introduction to machine learning in bioinformatics with Python, covering key concepts like data preprocessing, feature selection, and model training, providing a quick but solid overview aligned with the paper's computational approach.

*If you want all of it:* All 7 episodes, about 0.6 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper, start with foundational knowledge on Protein Data Bank and structural bioinformatics to grasp the source and nature of 3D protein structure data used. Next, study dynamic programming in bioinformatics to comprehend the key technique for integrating isoform-level predictions into gene primary structure classification. Then, explore cancer genomics and gene functional classification to contextualize the biological problem addressed. Finally, focus on the core concepts of deep convolutional neural networks for protein structure, which are central to the paper's method, and conclude with advanced lectures on dynamic programming relevant to the authors' approach.

### Protein Data Bank and structural bioinformatics *(prerequisite)*
Understanding the Protein Data Bank (PDB) and structural bioinformatics is essential as the paper relies on 3D protein structures from PDB files. This section covers the nature of protein structural data, how it is organized, and accessed, providing the biological data foundation for the computational approach.

*How the paper uses it:* The paper preprocesses and extracts features from PDB files to classify cancer-related genes based on their protein structures.

▶ [Roland Dunbrack | Structural bioinformatics and protein ...](https://www.youtube.com/watch?v=g0GvgTtyHFg) — American Society for Biochemistry and Molecular Biology (ASBMB) · 25:21

### Dynamic programming in bioinformatics *(prerequisite)*
Dynamic programming is a fundamental algorithmic technique widely used in bioinformatics for sequence alignment and related problems. Understanding its principles and applications in bioinformatics is crucial to grasp how the paper integrates isoform-level predictions into gene primary structure classification.

*How the paper uses it:* The paper proposes three dynamic programming-based methods to integrate isoform predictions for classifying gene primary structures.

▶ [6.047/6.878 Lecture 2 - Dynamic Programming (Fall 2020)](https://www.youtube.com/watch?v=AuXp5IZNq70) — Manolis Kellis · 1:22:05

### Cancer genomics and gene functional classification *(prerequisite)*
This section provides biological context on cancer genomics and the classification of genes into oncogenes, tumor suppressor genes, and fusion genes. It is important to understand the biological significance and challenges of gene functional classification in cancer research.

*How the paper uses it:* The paper addresses the computational classification of cancer-related genes into oncogenes, tumor suppressor genes, and fusion genes.

▶ [MIT CompBio Lecture 22 - Cancer Genomics (Fall 2019)](https://www.youtube.com/watch?v=E9YxwgKZWUw) — Manolis Kellis · 1:26:33

### Deep convolutional neural networks for protein structure
Deep convolutional neural networks (DCNNs) are the core computational method used in the paper to process 2D projections of 3D protein structures and classify gene functionality. This section covers advanced applications of deep learning in structural biology and protein design, providing insight into the model architecture and feature extraction.

*How the paper uses it:* The paper introduces a novel 'Brain inception residual' DCNN architecture optimized for processing multiple 2D projections of protein structures.

▶ [Deep Learning in Structural Biology and Protein Design: How ...](https://www.youtube.com/watch?v=UJGtwUFQKfs) — Simons Institute for the Theory of Computing · 1:13:16

### Paper authors talk *(the paper's own talk)*
Direct talks or lectures by the paper authors or closely related advanced lectures on dynamic programming provide the most specific insights into the methods used, especially the integration of deep learning and dynamic programming for gene classification.

*How the paper uses it:* The paper integrates deep learning and dynamic programming methods for cancer gene classification, and advanced lectures on these topics provide detailed understanding.

▶ [Deep Learning Lecture 16: Reinforcement learning and neuro-dynamic programming](https://www.youtube.com/watch?v=dV80NAlEins) — Nando de Freitas · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about the Protein Data Bank and structural bioinformatics to grasp the source and nature of 3D protein data used. Next, build intuition on dynamic programming in bioinformatics, which is key for integrating predictions across gene isoforms. Then, explore cancer genomics and gene functional classification to contextualize the biological problem. Finally, study deep convolutional neural networks for protein structure to understand the core machine learning method used for classifying gene functions from protein data.

### Protein Data Bank and structural bioinformatics *(prerequisite)*
This concept covers what the Protein Data Bank (PDB) is, how 3D protein structures are stored and represented, and the basics of structural bioinformatics. Understanding this helps you know where the protein data comes from and how it can be used computationally.

*How the paper uses it:* The paper uses PDB files as the primary data source for extracting 3D protein structure features to classify cancer-related genes.

▶ [What is a Protein? (from PDB-101)](https://www.youtube.com/watch?v=wvTv8TqWC48) — RCSBProteinDataBank · 6:58

### Dynamic programming in bioinformatics *(prerequisite)*
Dynamic programming is a method to efficiently solve complex problems by breaking them into simpler subproblems. In bioinformatics, it is often used for sequence alignment and integrating information across related sequences.

*How the paper uses it:* The paper applies dynamic programming to integrate isoform-level predictions into a final classification of gene primary structures.

▶ [Dynamic Programming](https://www.youtube.com/watch?v=PZJiHIwNblU) — Introduction to Bioinformatics by Arne Elofsson at Stockholm University · 7:43

### Cancer genomics and gene functional classification *(prerequisite)*
This concept explains the biological background of cancer genomics, focusing on how genes are classified as oncogenes, tumor suppressor genes, or fusion genes based on their role in cancer development.

*How the paper uses it:* The paper aims to computationally classify cancer-related genes into these functional categories using protein structure data.

▶ [Introduction to Cancer Genomics](https://www.youtube.com/watch?v=9mKkQOf1Qxs) — Bioinformatics DotCa · 1:30:06

### Deep convolutional neural networks for protein structure
Deep convolutional neural networks (DCNNs) are powerful models for extracting spatial features from data like images or 2D projections of 3D structures. Understanding DCNNs helps explain how the paper processes protein structure data to predict gene function.

*How the paper uses it:* The paper uses a novel DCNN architecture to classify gene functionality from multiple 2D projections of protein 3D structures.

▶ [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — Futurology — An Optimistic Future · 10:47


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate understanding of the paper's integrated deep learning and dynamic programming approach for cancer gene classification from protein structures. The beginner project focuses on data preprocessing and feature extraction from PDB files, the intermediate project implements a simplified version of the core DCNN classification method on a small protein structure dataset, and the advanced project extends the method by exploring hybrid 2D/3D feature integration to address computational limitations noted in the paper.

### Beginner — PDB Protein Structure Feature Extraction and 2D Projection Visualization
*Effort: a weekend, ~8 hours*

You build a pipeline that downloads a small set of PDB files (e.g., from the Protein Data Bank public repository), extracts biochemical properties of surface Cα atoms, and generates 24 two-dimensional spatial projection feature maps per protein as described in the paper. You also create visualizations of these 2D feature maps to demonstrate the transformation from 3D structure to 2D projections.

**Why it shows you understood the paper:** This project shows you understand the critical data preprocessing step that converts complex 3D protein structures into manageable 2D feature maps, a key innovation in the paper to reduce computational load while preserving structural information.

**Grounded in:** Introduced a data preprocessing pipeline that filters PDB files based on X-ray diffraction quality, sequence overlap, and SITE features relevant to cancer; The model uses 24 2D projections from 3D protein structures to reduce computational load.

**Tech stack:** Python 3.11, Biopython, NumPy, Matplotlib, Jupyter Notebook

**Data:** A small publicly available set of PDB files from the Protein Data Bank (PDB) representing known human proteins; substitute for COSMIC PDB data used in the paper.

**Build it:**

1. Download a small set of PDB files from the Protein Data Bank.
2. Parse each PDB file to extract surface Cα atom coordinates and biochemical properties.
3. Implement the projection method to convert 3D coordinates into 24 2D feature maps as described in the paper.
4. Visualize several 2D feature maps using Matplotlib to confirm correct transformation.
5. Document the pipeline and include example outputs in a Jupyter Notebook.

**Ships as:** A GitHub repository containing a Python notebook and scripts that preprocess PDB files into 24 2D feature maps with visualizations, demonstrating the data transformation step from the paper.

**Stretch goal:** Add filtering of PDB files based on quality metrics (e.g., X-ray diffraction resolution) and annotate SITE features relevant to cancer as in the paper's preprocessing pipeline.

### Intermediate — Simplified Deep CNN Classification of Cancer Gene Isoforms from 2D Protein Projections
*Effort: 1-3 weekends*

You implement a simplified version of the paper's deep convolutional neural network that takes the 24 2D feature maps per protein isoform as input and classifies the isoform as oncogene, tumor suppressor gene, or fusion gene. You train and evaluate this model on a small curated dataset of protein structures with known gene functional labels, comparing performance against a simple baseline such as logistic regression on flattened features.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core deep learning classification method from the paper, including handling multi-channel 2D projections and performing functional gene classification, which is central to the paper's contribution.

**Grounded in:** Developed a deep learning model that classifies genes into oncogenes, tumor suppressor genes, and fusion genes using 3D protein structure data; Approach 1 (pooled PDBs) achieved AUROC of 0.978 for oncogene vs tumor suppressor gene classification at the isoform level.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** A small curated dataset of PDB files with known oncogene, tumor suppressor gene, and fusion gene labels; if unavailable, simulate labels on a subset of public PDB files with literature-based annotations.

**Build it:**

1. Use the feature extraction pipeline from the beginner project to generate 24 2D feature maps per protein isoform.
2. Design and implement a simplified deep convolutional neural network inspired by the paper's 'Brain inception residual' architecture to classify isoforms.
3. Train the model on the curated dataset and evaluate using AUROC and accuracy metrics.
4. Implement a simple baseline classifier (e.g., logistic regression) on flattened features for comparison.
5. Document results and include analysis of model performance relative to baseline.

**Ships as:** A GitHub repository with code to preprocess data, train the DCNN classifier, evaluate performance, and compare against a baseline, demonstrating a faithful reimplementation of the paper's core method.

**Stretch goal:** Incorporate dynamic programming to aggregate isoform-level predictions into primary structure classification as described in the paper.

### Advanced — Hybrid 2D-3D Deep Learning Model for Improved Fusion Gene Classification from Protein Structures
*Effort: a few weeks*

You develop an extension of the paper's method by integrating selective 3D convolutional features with the existing 2D projection-based DCNN to improve classification of fusion genes, addressing the paper's limitation on fusion gene accuracy and computational constraints. You design a hybrid model that balances 2D and 3D spatial information, train it on an expanded dataset, and evaluate improvements in fusion gene classification accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension of the method and creativity in extending it to overcome computational and data challenges, potentially opening new research avenues.

**Grounded in:** Fusion gene classification was less accurate compared to oncogenes and tumor suppressor genes, partly due to fewer available PDB structures; 3D convolutional neural networks were not used due to computational resource constraints, which might limit capturing full 3D spatial information; Future directions include exploring 3D CNNs and integrating additional data.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook, PyMOL or other 3D visualization tools

**Data:** An expanded dataset combining public PDB files with fusion gene annotations from literature or databases; may require data augmentation or simulation to increase fusion gene samples.

**Build it:**

1. Review and replicate the 2D projection feature extraction and DCNN baseline from the intermediate project.
2. Research and implement 3D convolutional layers to extract selective 3D features from protein structures.
3. Design a hybrid model architecture that combines 2D projection inputs with 3D convolutional features.
4. Train and evaluate the hybrid model on the expanded dataset, focusing on fusion gene classification accuracy.
5. Compare results with the baseline 2D-only DCNN and analyze computational resource usage.
6. Document methodology, results, and discuss implications for future cancer gene classification research.

**Ships as:** A GitHub repository with code and documentation for a hybrid 2D-3D deep learning model that improves fusion gene classification, including training scripts, evaluation metrics, and analysis of computational trade-offs.

**Stretch goal:** Integrate additional omics data (e.g., gene expression or mutation data) to further enhance fusion gene classification performance.
