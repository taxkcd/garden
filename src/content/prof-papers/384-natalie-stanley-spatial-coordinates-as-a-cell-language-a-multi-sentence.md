---
title: "384 · Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis — Natalie Stanley"
date: 2026-08-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-natalie-stanley"
source_hash: "f77152595f740b4f4d9ba7d948263fd41355023b7f8c0384bafa264c9f5ea150"
sequence: 384
generator: "outreach-garden: managed"
---

# 384 · Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis

## At a glance

- **Professor:** Natalie Stanley
- **Institution:** University of North Carolina
- **Paper:** [Spatial Coordinates as a Cell Language: A Multi-Sentence Framework for Imaging Mass Cytometry Analysis](https://aclanthology.org/2025.findings-acl.685.pdf)
- **Authors:** Chi-Jane Chen, Yuhang Chen, Sukwon Yun, Natalie Stanley, Tianlong Chen
- **Year:** 2025

## Paper overview

This paper introduces Spatial2Sentence, a new computational method that improves the analysis of imaging mass cytometry (IMC) data by integrating both protein expression and spatial location of cells into a multi-sentence natural language framework. This approach helps large language models better understand how cells interact in tissues, leading to more accurate cell-type classification and disease status prediction.

### Why it matters

**Research problem:** Existing single-cell large language models (LLMs) struggle to incorporate spatial information and treat each cell independently, which limits their ability to capture cell-cell interactions and spatial context in imaging mass cytometry data.

**Why it matters:** Spatial context and cell-cell interactions are crucial for understanding tissue organization, immune responses, and disease mechanisms, especially in complex environments like tumors. Ignoring spatial information risks missing key biological insights.

**Key contributions:**

- Identification of limitations in current single-cell LLMs regarding spatial information integration and independent cell treatment.
- Development of Spatial2Sentence, a novel multi-sentence LLM framework that integrates spatial and expression data using contrastive prompting with positive and negative cell pairs.
- Preprocessing and transformation of two IMC datasets (diabetes and brain tumor) into cell × protein feature matrices with spatial coordinates and cell-type annotations.
- Demonstration of state-of-the-art performance improvements in cell-type classification and clinical status prediction on IMC datasets.

## About the professor

**Natalie Stanley** — Assistant Professor, Department of Computer Science and Computational Medicine Program, University of North Carolina.

Research interests: single-cell bioinformatics; computational and systems immunology; developing algorithms for representing and understanding graph-based data

### Research links

- [Faculty/profile page](https://cs.unc.edu/person/natalie-stanley)
- [Professor website](https://stanleyn.github.io/)
- [Resolved homepage](https://compcylab.squarespace.com/cart)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** graph representation learning
**The paper assumes:** graph theory, graph neural networks, and graph representation learning
**Already in this field?** Skip this entirely if you already understand graph neural networks and how graph-structured biological data are modeled computationally.

This background focuses on graph representation learning, which is essential for understanding how the Spatial2Sentence framework models cellular interactions and spatial relationships as graph-like structures. The rigorous course option provides a deep, structured university-level introduction to graph machine learning, while the fast track offers a concise, intuition-driven explainer series to quickly grasp core concepts. Choose the course if you want a thorough foundation; choose the fast track if you need a quick but solid overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online

**Watch only this:** Lectures 1 through 6, about 5 hours — covering Introduction, Graph Basics, Node Embeddings, Graph Neural Networks, and Graph Convolutional Networks, which provide the foundational knowledge needed to understand graph-based modeling in Spatial2Sentence.

*Why it unblocks this paper:* Stanford CS224W Machine Learning with Graphs by Jure Leskovec is a rigorous, university-level lecture series that covers graph representation learning comprehensively, including graph embeddings, graph neural networks, and applications relevant to modeling cell-cell interactions and spatial data integration.

*If you want all of it:* The full playlist duration is approximately 15 hours (all lectures), which covers advanced topics beyond the core concepts needed for this paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE

**Watch only this:** The first 5 episodes, about 2 hours — covering basics of graph neural networks, embeddings, and their applications, sufficient to understand the core graph concepts in Spatial2Sentence.

*Why it unblocks this paper:* The 'Graph Neural Networks (Hands-on)' series by LLMs Explained - Aggregate Intellect - AI.SCIENCE offers a concise and clear introduction to graph neural networks and embeddings, focusing on intuition and practical understanding, ideal for quickly grasping the key ideas behind graph representation learning used in the paper.

*If you want all of it:* The full series length is about 4 hours, covering more detailed hands-on examples and advanced topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Spatial2Sentence paper, start with foundational knowledge on imaging mass cytometry and single-cell spatial transcriptomics to grasp the biological data and spatial context the method operates on. Then, explore contrastive learning in biology to comprehend the key machine learning technique used for multi-sentence prompting. Finally, focus on the core concept of the paper itself, including the authors' own talks or closely related advanced research presentations on spatial transcriptomics and spatial biology to appreciate the novel integration of spatial and expression data in large language models.

### Imaging mass cytometry analysis *(prerequisite)*
Imaging mass cytometry (IMC) is the data modality Spatial2Sentence analyzes. Understanding IMC's principles, technical considerations, and biological applications provides essential context for how spatial protein expression data is generated and interpreted. This foundation is critical to appreciate the challenges and innovations in modeling spatial and expression data jointly.

*How the paper uses it:* Spatial2Sentence operates on IMC datasets, integrating spatial coordinates with protein expression for improved cell-type classification.

▶ [Critical Considerations for Optimizing Imaging Mass Cytometry](https://www.youtube.com/watch?v=1yvIQn45E-A) — Cell Signaling Technology, Inc. · 55:51

### Single-cell spatial transcriptomics *(prerequisite)*
Spatial transcriptomics provides a framework for understanding spatially resolved single-cell data, which is conceptually related to the spatial proteomics data used in the paper. Learning about spatial transcriptomics technologies and computational methods helps build intuition about spatial data integration challenges and opportunities in single-cell biology.

*How the paper uses it:* The paper extends ideas from spatial transcriptomics to imaging mass cytometry, emphasizing spatial context in single-cell analysis.

▶ [Visualising integrated single cell and spatial transcriptomic ...](https://www.youtube.com/watch?v=-SY33vgFZlo) — EMBL's European Bioinformatics Institute EMBL-EBI · 58:22

### Contrastive learning in biology *(prerequisite)*
Contrastive learning is the core machine learning technique used in Spatial2Sentence's multi-sentence contrastive prompting. Understanding how positive and negative pairs are used to train models to distinguish subtle biological differences is key to grasping the paper's methodological innovation.

*How the paper uses it:* Spatial2Sentence uses multi-sentence contrastive prompting to train LLMs to capture expression and spatial relationships between cells.

▶ [Contrastive Self-Supervised Learning and Potential ...](https://www.youtube.com/watch?v=IEiytaXnggI) — JumpTrading ELLIS UCL CSML Seminar Series · 55:12

### Spatial2Sentence paper talk
The core concept is the Spatial2Sentence framework itself, which integrates spatial and expression data into a multi-sentence language model for improved biological insight. While no direct author talk on this exact paper was found, advanced talks on spatial transcriptomics and spatial biology by reputable research groups provide relevant, in-depth context on spatial data integration and analysis.

*How the paper uses it:* This section focuses on the novel Spatial2Sentence framework and its application to IMC data for enhanced cell-type and clinical status prediction.

▶ [Introducing spatial biology](https://www.youtube.com/watch?v=ym9xHEB7Slk) — BioTechniques · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Spatial2Sentence paper, start by learning about imaging mass cytometry (IMC) to grasp the biological data type and context. Then build foundational knowledge of single-cell spatial transcriptomics, which provides the spatially resolved single-cell data framework. Next, explore contrastive learning, the key machine learning technique used in the paper's multi-sentence prompting. Finally, study the core Spatial2Sentence framework itself through related spatial transcriptomics talks, as no direct paper talk video fits the beginner-friendly criteria.

### Imaging mass cytometry analysis *(prerequisite)*
Imaging mass cytometry (IMC) is a technology that measures protein expression in tissue samples while preserving spatial information about where each cell is located. Understanding IMC helps you appreciate the type of data Spatial2Sentence analyzes and why spatial context matters.

*How the paper uses it:* Spatial2Sentence operates on IMC data integrating protein expression and spatial coordinates for better cell interaction modeling.

▶ [SABCS 2021: Single-cell spatial analysis by imaging mass ...](https://www.youtube.com/watch?v=3wOHEQnwQXY) — San Antonio Breast Cancer Symposium · 16:31

### Single-cell spatial transcriptomics *(prerequisite)*
Single-cell spatial transcriptomics combines gene expression data with spatial location information for each cell, enabling insights into how cells interact in their native tissue environment. This foundational knowledge helps understand the importance of integrating spatial and expression data as done in Spatial2Sentence.

*How the paper uses it:* Spatial2Sentence builds on the concept of spatially resolved single-cell data to improve biological interpretation using language models.

▶ [Single cell and spatial omics: A short introduction to the core ...](https://www.youtube.com/watch?v=P6w5yPVsTIk) — Lars Juhl Jensen · 6:21

### Contrastive learning in biology *(prerequisite)*
Contrastive learning is a machine learning technique that trains models to distinguish between similar (positive) and dissimilar (negative) data pairs. In biology, it helps models learn meaningful representations by comparing biological samples, which is key to Spatial2Sentence's multi-sentence contrastive prompting.

*How the paper uses it:* Spatial2Sentence uses multi-sentence contrastive prompting with positive and negative cell pairs to teach LLMs spatial and expression relationships.

▶ [Contrastive Loss : Data Science Basics](https://www.youtube.com/watch?v=dC3_IKaBXTk) — ritvikmath · 20:04

### Spatial2Sentence paper talk
While no concise beginner-friendly talk specifically on Spatial2Sentence is available, related spatial transcriptomics videos provide useful intuition about integrating spatial and expression data in biological contexts, which underpins the paper's approach.

*How the paper uses it:* This paper introduces Spatial2Sentence, a novel multi-sentence LLM framework integrating spatial and expression data for improved IMC analysis.

▶ [Introducing spatial biology](https://www.youtube.com/watch?v=ym9xHEB7Slk) — BioTechniques · 4 years ago

## Already in your library

- [Spatial Transcriptomics Intro - Part 1: What Is Spatial ...](https://www.youtube.com/watch?v=_qsHqB67O70) — also for: Mapping the topography of spatial gene expression with interpretable deep learning (Hirak Sarkar)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate understanding of the Spatial2Sentence paper. Starting with a beginner-level reproduction of spatial and expression similarity matrices from IMC data, you then move to an intermediate-level application of the Spatial2Sentence multi-sentence contrastive prompting framework using the authors' released code and datasets. Finally, the advanced project extends the method by integrating an additional omic modality, addressing a key limitation noted in the paper.

### Beginner — Compute and Visualize Spatial and Expression Similarity Matrices from IMC Data
*Effort: a weekend, ~8 hours*

You build a Python notebook that loads a small subset of imaging mass cytometry (IMC) data with cell protein expression and spatial coordinates, then computes the expression similarity matrix and spatial distance matrix between cells. You visualize these matrices as heatmaps and scatter plots to illustrate spatial proximity and expression similarity patterns.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core data preprocessing and metric construction steps that underpin the Spatial2Sentence framework, showing you understand how spatial and expression relationships are quantified before multi-sentence prompting.

**Grounded in:** Spatial2Sentence constructs expression similarity and spatial distance matrices from IMC data

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn

**Data:** Use a small subset of the diabetes IMC dataset described in the paper, simulated or extracted from the authors' GitHub repository if available; otherwise, simulate cell × protein expression and spatial coordinate data with ~100 cells.

**Build it:**

1. Load or simulate a cell × protein expression matrix and corresponding spatial coordinates for each cell.
2. Compute pairwise expression similarity between cells using cosine similarity or Pearson correlation.
3. Compute pairwise spatial distances between cells using Euclidean distance on coordinates.
4. Visualize the expression similarity matrix and spatial distance matrix as heatmaps.
5. Plot a scatter plot of cells colored by expression similarity or spatial proximity clusters.

**Ships as:** A Jupyter Notebook with code, visualizations of similarity and distance matrices, and a README explaining the relevance to Spatial2Sentence preprocessing.

**Stretch goal:** Add clustering of cells based on combined spatial and expression similarity and visualize clusters on spatial plots.

### Intermediate — Run and Extend Spatial2Sentence on Diabetes IMC Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the Spatial2Sentence code from the authors' GitHub repository on the diabetes IMC dataset to reproduce cell-type classification results. Then, you implement a simple baseline model (e.g., single-sentence prompting without spatial info) and compare classification accuracy to Spatial2Sentence. You report metrics and analyze the impact of spatial information.

**Why it shows you understood the paper:** This project shows you can operate the authors' code, understand the multi-sentence contrastive prompting mechanism, and critically evaluate the contribution of spatial data integration by comparing to a baseline.

**Grounded in:** Development of Spatial2Sentence, a novel multi-sentence LLM framework integrating spatial and expression data using contrastive prompting; improves cell-type classification by 5.98% on diabetes dataset

**Tech stack:** Python 3.11, PyTorch, Transformers, Jupyter Notebook

**Data:** Use the diabetes IMC dataset preprocessed and provided in the authors' GitHub repository: https://github.com/UNITES-Lab/Spatial2Sentence

**Build it:**

1. Clone the Spatial2Sentence repository and set up the environment with required dependencies.
2. Download and load the diabetes IMC dataset as per the repository instructions.
3. Run the Spatial2Sentence training and evaluation pipeline to reproduce reported cell-type classification accuracy.
4. Implement a baseline model that uses single-sentence prompting without spatial information.
5. Compare classification accuracy and other metrics between Spatial2Sentence and baseline.
6. Write a report summarizing results and insights on spatial information's impact.

**Verified links from the paper:**

- <https://github.com/UNITES-Lab/Spatial2Sentence> — released by the paper's authors

**Ships as:** A GitHub repo fork with code to run Spatial2Sentence and baseline, evaluation scripts, and a README with results and analysis.

**Stretch goal:** Add ablation experiments removing either spatial or expression similarity inputs to quantify their individual contributions.

### Advanced — Extend Spatial2Sentence to Integrate Transcriptomics Data for Multi-Modal Cell Analysis
*Effort: 3+ weeks, ~80 hours*

You develop an extension of the Spatial2Sentence framework that incorporates transcriptomics data alongside protein expression and spatial coordinates, addressing the paper's limitation of single-modality input. You preprocess a publicly available spatial transcriptomics dataset with protein markers if possible, adapt the multi-sentence contrastive prompting to include multi-omic features, and evaluate cell-type classification improvements.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by integrating multi-omic data into the multi-sentence LLM framework, demonstrating deep comprehension of the method and ability to innovate beyond the original work.

**Grounded in:** Future direction: Extend Spatial2Sentence to a multi-modal framework incorporating genomics, transcriptomics, and proteomics for a more comprehensive biological view

**Tech stack:** Python 3.11, PyTorch, Transformers, Scanpy, Anndata, Jupyter Notebook

**Data:** Use a publicly available spatial transcriptomics dataset with protein expression if available (e.g., 10x Genomics Visium data) as a substitute for IMC multi-omic data integration.

**Build it:**

1. Select and download a spatial transcriptomics dataset with spatial coordinates and gene expression data.
2. Preprocess the data to extract cell-level transcriptomics features and spatial coordinates; optionally integrate protein expression if available.
3. Adapt the Spatial2Sentence multi-sentence contrastive prompting code to accept multi-omic feature vectors per cell.
4. Construct positive and negative cell pairs based on combined multi-omic expression similarity and spatial proximity.
5. Train the extended model and evaluate cell-type classification accuracy compared to single-modality input.
6. Document challenges faced in multi-omic integration and discuss potential improvements.

**Verified links from the paper:**

- <https://github.com/UNITES-Lab/Spatial2Sentence> — released by the paper's authors

**Ships as:** A GitHub repository with code for multi-omic Spatial2Sentence extension, preprocessing scripts, evaluation results, and a detailed README discussing methodology and findings.

**Stretch goal:** Experiment with handling missing modalities by masking some omic features and evaluating model robustness.
