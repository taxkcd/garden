---
title: "440 · Traditional machine learning vs. deep learning from dynamic graph representations of proteins’ 3D folds in the task of protein structure classification — Tijana Milenkovic"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tijana-milenkovic"
source_hash: "0010f9dc79247387e15cfca4fd8a6a21b889481347b236c7c1707267f4a8342c"
sequence: 440
generator: "outreach-garden: managed"
---

# 440 · Traditional machine learning vs. deep learning from dynamic graph representations of proteins’ 3D folds in the task of protein structure classification

## At a glance

- **Professor:** Tijana Milenkovic
- **Institution:** University of Notre Dame
- **Paper:** [Traditional machine learning vs. deep learning from dynamic graph representations of proteins’ 3D folds in the task of protein structure classification](https://arxiv.org/abs/2605.29228v2)
- **Authors:** Aydin Wells, Francis A. Gatsi, Aaron Striegel, Tijana Milenković
- **Year:** 2026

## Paper overview

This study compares traditional machine learning (ML) and deep learning (DL) methods for classifying protein structures based on dynamic graph representations of their 3D folds. The authors model proteins as dynamic protein structure networks (PSNs) that capture folding dynamics through multiple snapshots. They evaluate whether DL can improve classification accuracy over traditional ML approaches that use manually engineered features. The results show that DL and traditional ML perform similarly in accuracy, but DL is significantly slower. This is the first comprehensive comparison of ML and DL on dynamic PSN-based protein structure classification across a large benchmark of 72 datasets.

### Why it matters

**Research problem:** How to accurately classify protein structural classes from protein 3D fold data represented as dynamic protein structure networks, and whether deep learning can improve over traditional machine learning methods in this task.

**Why it matters:** Protein structure classification (PSC) is essential for understanding protein function, which is costly to determine experimentally. Computational PSC enables faster functional annotation. Dynamic PSNs better capture protein folding dynamics than static models, potentially improving classification. Evaluating ML vs. DL approaches on dynamic PSNs informs the best computational strategies for PSC.

**Key contributions:**

- First comprehensive evaluation of traditional ML vs. DL methods on dynamic PSN-based protein structure classification across 72 datasets.
- Introduction and systematic comparison of two DL paradigms: regular DL (CNN+LSTM) on dynamic graphlet features and graph-based DL (GCNs) on PSNs.
- Demonstration that dynamic graphlet features significantly improve GCN initialization over default features.
- Finding that static GCN (SGCN) performs comparably or better than dynamic GCN (DGCN) despite the latter modeling temporal dynamics explicitly.
- Extensive architectural analysis within DL paradigms showing no significant performance differences from varying CNN/LSTM layers or activation functions.

## About the professor

**Tijana Milenkovic** — Professor (with tenure), Department of Computer Science and Engineering (CSE), University of Notre Dame.

Research interests: network science, graph algorithms, computational biology, scientific wellness, and social networks

### Research links

- [Faculty/profile page](http://www3.nd.edu/~tmilenko)
- [Resolved homepage](https://academicweb.nd.edu/~tmilenko/index.html)
- [Lab website](https://academicweb.nd.edu/~cone/)
- [Google Scholar](https://scholar.google.com/citations?user=QrS2y5sAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** graph neural networks
**The paper assumes:** graph theory, neural networks, graph convolutional networks, dynamic graph modeling
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to dynamic graph data.

This background focuses on graph neural networks (GNNs), which are central to the paper's methods comparing traditional machine learning and deep learning on dynamic protein structure networks. The rigorous course provides a deep, structured university-level understanding of GNNs, while the fast track offers a concise, intuition-driven introduction suitable for quickly grasping core concepts. Choose the course for comprehensive mastery or the fast track for a rapid but solid overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Why Graphs, Applications, Choice of Graph Representation), Lectures 6.1 to 6.3 (Introduction to GNNs, Basics of Deep Learning, Deep Learning for Graphs), and Lectures 7.1 to 7.3 (GNN perspective, single layer, stacking layers), about 6.5 hours total — this subset covers core GNN concepts, architectures, and training relevant to the paper.

*Why it unblocks this paper:* This is a full Stanford university lecture series on machine learning with graphs, covering foundational graph representations, node embeddings, and deep learning for graphs including GNN architectures. It directly addresses graph neural networks and their training, which aligns perfectly with the paper's use of GCNs and dynamic graph models.

*If you want all of it:* 22.4 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 6 videos · 0.6h across 6 episodes

**Watch only this:** All 6 episodes, about 36 minutes total — covers introduction to graphs, graph ML tasks, simple graph convolution, graph attention networks, and embedding methods, giving a compact but comprehensive overview.

*Why it unblocks this paper:* This short-form series provides a clear, visual, and intuitive introduction to graph neural networks, including graph definitions, simple graph convolution, graph attention, and node embedding methods. It is well-suited for quickly understanding the basics of GNNs and their applications without deep technical detail.

*If you want all of it:* 0.6 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand this paper, start by building foundational knowledge in graph convolutional networks and graphlet features, which are key technical components used in the study. Next, gain biological context by exploring protein structure classification and dynamic protein structure networks, which frame the problem and data representation. Finally, focus on the paper's core concept by reviewing the authors' own talk to get direct insights into their methodology, results, and implications.

### Graph convolutional networks *(prerequisite)*
Graph convolutional networks (GCNs) are a fundamental deep learning architecture for learning on graph-structured data. Understanding GCNs is essential because the paper applies GCN-based deep learning directly on protein structure networks to classify protein folds. The selected lecture from MIT OpenCourseWare provides a rigorous, graduate-level introduction to GNNs, their theoretical foundations, and practical implications.

*How the paper uses it:* The paper evaluates graph-based deep learning using GCNs on protein structure networks, making GCN understanding critical.

▶ [Lec 05. Architectures: Graphs](https://www.youtube.com/watch?v=0niIwb37nF0) — MIT OpenCourseWare · 1:21:14 · 6 months ago

### Graphlet features in network analysis *(prerequisite)*
Graphlets are small induced subgraphs used as handcrafted features to capture local network topology. They are central to the paper's traditional machine learning approach and also improve GCN initialization. The chosen lecture provides a detailed academic treatment of graph theory applications in network analysis, suitable for advanced readers.

*How the paper uses it:* The paper uses dynamic graphlet features for both traditional ML and to initialize GCNs, highlighting their importance.

▶ [Lecture 59: Graph Theory Applied to Network Analysis - I](https://www.youtube.com/watch?v=0BQ2yyC6Lc8) — NPTEL IIT Kharagpur · 34:29 · 6 years ago

### Protein structure classification *(prerequisite)*
Protein structure classification is the biological problem motivating the computational approaches in the paper. Understanding the levels of protein structure and classification schemes like CATH and SCOPe is necessary to appreciate the task and datasets used. The MIT OpenCourseWare lecture by Prof. Ernest Fraenkel offers a comprehensive and rigorous introduction to protein structure and classification from a computational biology perspective.

*How the paper uses it:* The paper addresses protein structure classification using dynamic graph representations, so biological context is essential.

▶ [12. Introduction to Protein Structure; Structure Comparison and Classification](https://www.youtube.com/watch?v=6ROBp57G2ZI) — MIT OpenCourseWare · 1:05:51 · 11 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the biological context of protein structure classification to grasp why this problem matters. Then learn about graphlet features as foundational handcrafted network features used in the paper. Next, explore graph convolutional networks (GCNs) to understand the key deep learning architecture applied. After that, study dynamic protein structure networks to see how proteins are modeled as evolving graphs capturing folding dynamics. Finally, delve into deep learning methods for dynamic graphs to comprehend the temporal modeling approaches evaluated in the paper.

### Protein structure classification *(prerequisite)*
Protein structure classification is about categorizing proteins based on their 3D shapes, which is crucial for understanding their functions. Learning this biological background helps appreciate the motivation behind computational methods for protein analysis.

*How the paper uses it:* The paper focuses on classifying protein structural classes from dynamic graph representations of their 3D folds.

▶ [Protein Structure | Four levels of protein Organization | shape of protein](https://www.youtube.com/watch?v=9Sc_fnQd8qc) — PoWer Of KnOwledge Academy · 11:05 · 4 years ago

### Graphlet features in network analysis *(prerequisite)*
Graphlets are small, connected subgraphs used as handcrafted features to capture local network structure patterns. They provide interpretable and informative features for traditional machine learning and can also initialize deep learning models.

*How the paper uses it:* The paper uses dynamic graphlet features extracted from protein structure networks as input for both traditional ML and DL methods.

▶ [Graphlets](https://www.youtube.com/watch?v=Ec0B6pdEAM0) — Alex About Data · 25:01 · 5 years ago

### Graph convolutional networks *(prerequisite)*
Graph convolutional networks (GCNs) are deep learning models designed to operate directly on graph-structured data by aggregating information from node neighborhoods. They are powerful for learning representations of complex networks like protein structures.

*How the paper uses it:* The paper evaluates GCNs as a graph-based deep learning paradigm operating on protein structure networks.

▶ [Lec 05. Architectures: Graphs](https://www.youtube.com/watch?v=0niIwb37nF0) — MIT OpenCourseWare · 1:21:14 · 6 months ago

### Dynamic protein structure networks
Dynamic protein structure networks model proteins as sequences of graphs capturing folding intermediates over time, better reflecting the protein folding process than static graphs. This temporal aspect can improve classification accuracy.

*How the paper uses it:* The paper models proteins as dynamic PSNs to capture folding dynamics for classification tasks.

▶ [Nazim Bouatta | Machine learning for protein structure prediction, Part 1: Algorithm space](https://www.youtube.com/watch?v=yqeUH4RsJp8) — Harvard CMSA · 1:30:25 · 3 years ago

### Deep learning for dynamic graphs *(prerequisite)*
Deep learning for dynamic graphs involves architectures that can handle graph data evolving over time, such as combining convolutional and recurrent layers or temporal graph networks. These methods aim to capture temporal dependencies in dynamic networks.

*How the paper uses it:* The paper compares regular DL (CNN+LSTM) and graph-based DL (GCNs) paradigms for dynamic PSN-based protein classification.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 6.3 - Deep Learning for Graphs](https://www.youtube.com/watch?v=MH4yvtgAR-4) — Stanford Online · 35:41 · 5 years ago

## Already in your library

- [Protein Structure and Composition](https://www.youtube.com/watch?v=WToqssQUoVg) — also for: RSLpred2: An Integrated Web Server for the Annotation of Rice Proteome Subcellular Localization Using Deep Learning (Rakesh Kaundal)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [What is a Protein? (from PDB-101)](https://www.youtube.com/watch?v=wvTv8TqWC48) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [Graph Convolutional Neural Network (GCNN) | Explained with a simple numerical example](https://www.youtube.com/watch?v=wpSjM5wqFfQ) — also for: Zero-Shot Relational Learning for Multimodal Knowledge Graphs (Shichao Pei)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [GraphSAGE: Inductive Representation Learning on Large Graphs (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=3AzphNf5ja8) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Stanford CS224W: Machine Learning with Graphs | 2021 ...](https://www.youtube.com/watch?v=eliMLfJeu7A) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper comparing traditional ML and DL methods on dynamic protein structure networks (PSNs). The beginner project reproduces a core feature extraction and classification step on a small scale, the intermediate project implements and compares core ML and DL methods on a representative protein dataset, and the advanced project extends the work by addressing a stated limitation or future direction, such as improving dynamic GCN handling of variable-sized dynamic PSNs without padding.

### Beginner — Dynamic Graphlet Feature Extraction and Logistic Regression Classification
*Effort: a weekend, ~8 hours*

You build a pipeline that takes a small set of protein 3D structures (e.g., from PDB accession 1AOK), constructs simplified dynamic protein structure networks as sequences of snapshots, extracts dynamic graphlet features from these snapshots, reduces dimensionality with PCA, and trains a logistic regression classifier to predict protein structural class labels. This reproduces the traditional ML approach from the paper on a small scale.

**Why it shows you understood the paper:** This project shows you understand how dynamic PSNs are represented, how dynamic graphlet features capture folding dynamics, and how traditional ML uses these features for protein structure classification, reflecting the paper's key baseline method.

**Grounded in:** Key contribution: traditional ML using logistic regression on PCA-reduced dynamic graphlet features; Key result: traditional ML and DL achieve comparable accuracy.

**Tech stack:** Python 3.11, scikit-learn, numpy, pandas, matplotlib

**Data:** Use PDB structure 1AOK as a proxy for dynamic PSN snapshots, manually or programmatically generate simplified snapshots to simulate folding intermediates.

**Build it:**

1. Download PDB structure 1AOK and parse its 3D coordinates.
2. Construct simplified dynamic PSN snapshots by defining residue contacts at multiple distance thresholds or time points.
3. Implement or adapt a dynamic graphlet feature extraction method to compute features from these snapshots.
4. Apply PCA to reduce feature dimensionality.
5. Train a logistic regression classifier on the reduced features with synthetic or known protein class labels.
6. Evaluate classification accuracy and plot results.

**Ships as:** A GitHub repo with code to generate dynamic graphlet features from a small protein PSN, train logistic regression, and a README explaining the pipeline and results.

**Stretch goal:** Add visualization of dynamic graphlet feature changes across snapshots to illustrate folding dynamics.

### Intermediate — Reimplementation of Traditional ML and CNN+LSTM DL on Dynamic PSNs for Protein Classification
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core comparison by extracting dynamic graphlet features from a subset of the 72 benchmark datasets (or a publicly available protein structure dataset), then train and evaluate both (1) traditional ML (logistic regression on PCA-reduced features) and (2) a regular DL model combining CNN and bidirectional LSTM layers on raw dynamic graphlet matrices. You compare classification accuracy and runtime between the two.

**Why it shows you understood the paper:** This project demonstrates your ability to implement both traditional ML and DL paradigms from the paper, understand dynamic graphlet feature representation, and reproduce the key finding that DL does not significantly outperform traditional ML but is slower.

**Grounded in:** Approach: comparison of traditional ML vs. regular DL (CNN+LSTM) on dynamic graphlet features; Key results: comparable accuracy, DL slower.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy, pandas, matplotlib

**Data:** Use a publicly available protein 3D structure dataset from PDB or CATH/SCOPe as a substitute for the paper's benchmark; generate dynamic PSNs by simulating snapshots from static structures.

**Build it:**

1. Select and download a small protein structure dataset with class labels.
2. Generate dynamic PSN snapshots per protein by defining contact networks at multiple thresholds or pseudo-time points.
3. Extract dynamic graphlet features for each protein's snapshots.
4. Implement PCA for dimensionality reduction of features.
5. Train logistic regression on PCA features and evaluate accuracy with cross-validation.
6. Implement a CNN+bidirectional LSTM model to operate on raw dynamic graphlet matrices.
7. Train and evaluate the DL model on the same data.
8. Compare classification accuracy and runtime between traditional ML and DL models.
9. Document methodology, results, and insights in a README.

**Ships as:** A GitHub repo with code for feature extraction, ML and DL training pipelines, evaluation scripts, and a detailed README comparing methods and results.

**Stretch goal:** Add hyperparameter tuning for CNN/LSTM layers and activation functions to verify the paper's finding of no significant improvement.

### Advanced — Graph Neural Network for Dynamic PSNs with Variable Protein Sizes Using Temporal Graph Models
*Effort: 3+ weeks*

You develop a graph-based deep learning model that addresses the paper's limitation of node padding in dynamic GCNs by implementing a temporal graph neural network architecture (e.g., temporal graph attention networks or dynamic graph transformers) that natively handles variable-sized dynamic PSNs without padding. You evaluate this model on a subset of protein dynamic PSNs and compare performance and runtime to static and dynamic GCN baselines.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of dynamic PSN modeling challenges and advanced graph DL architectures, potentially improving temporal dynamics capture and computational efficiency.

**Grounded in:** Limitation: dynamic GCN requires node padding which may introduce noise; Future direction: investigate alternative temporal graph models that better handle variable-sized dynamic PSNs.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric or DGL, numpy, pandas, matplotlib

**Data:** Use a subset of protein dynamic PSNs constructed from PDB or CATH/SCOPe structures, simulating snapshots as in the paper; no authors' code available.

**Build it:**

1. Review temporal graph neural network architectures suitable for variable-sized dynamic graphs.
2. Implement a temporal GNN model (e.g., temporal graph attention network) that processes dynamic PSNs without node padding.
3. Prepare dynamic PSN datasets with variable node counts per snapshot from protein structures.
4. Train the temporal GNN on protein structure classification tasks.
5. Compare classification accuracy and runtime against static GCN and dynamic GCN baselines implemented from scratch.
6. Analyze whether the temporal model better captures folding dynamics and reduces noise from padding.
7. Document methodology, experiments, and findings in a comprehensive README.

**Ships as:** A GitHub repo with temporal GNN implementation, data processing scripts, training and evaluation code, and a detailed report on improvements over baseline GCNs.

**Stretch goal:** Extend the model to semi-supervised learning for protein function prediction using dynamic PSNs.

_No authors' code or datasets were released for this paper; dynamic PSNs must be approximated from static protein 3D structures such as PDB accession 1AOK or publicly available datasets._
