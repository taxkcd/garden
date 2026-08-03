---
title: "144 · An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures — Chee-Hung Henry Chu"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chee-hung-henry-chu"
source_hash: "1c359151017bd806254f8b574aef002b511d32ac0ac71e71eddca7deb581a441"
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
