---
title: "282 · ORIGAMI: Orientation-Aware Graph Neural Network for Assessing Multimeric Interfaces of Protein Complex Structures — Debswapna Bhattacharya"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-debswapna-bhattacharya"
source_hash: "3461978038b9b8088487d2c0f5baa86dbb10bfe957a3e25ac8ae3907a22edb24"
sequence: 282
generator: "outreach-garden: managed"
---

# 282 · ORIGAMI: Orientation-Aware Graph Neural Network for Assessing Multimeric Interfaces of Protein Complex Structures

## At a glance

- **Professor:** Debswapna Bhattacharya
- **Institution:** Virginia Tech
- **Paper:** [ORIGAMI: Orientation-Aware Graph Neural Network for Assessing Multimeric Interfaces of Protein Complex Structures](https://doi.org/10.1021/acs.jcim.6c00988)
- **Authors:** Xinyu Wang, Debswapna Bhattacharya
- **Year:** 2024

## Paper overview

This paper presents ORIGAMI, a novel graph neural network designed to evaluate the quality of protein-protein interfaces in multimeric protein complexes. By modeling interfacial residues as nodes in a spatial graph and using orientation-aware message passing, ORIGAMI predicts how accurately protein chains interact, which is crucial for understanding biological functions and drug design.

### Why it matters

**Research problem:** Accurately assessing the structural quality of protein-protein interfaces in multimeric complexes is challenging due to the complexity of interactions and the need for methods that can handle diverse stoichiometries and geometries.

**Why it matters:** Protein-protein interactions are fundamental to many biological processes, and reliable assessment of interface quality is essential for structural biology, biomedical research, and drug discovery. Improved evaluation methods enable better prediction and design of protein complexes.

**Key contributions:**

- Development of an orientation-aware graph neural network architecture (ORIGAMI) that integrates scalar and vector residue features for interface assessment.
- Implementation of SO(3)-equivariant message passing preserving geometric relationships in protein interfaces.
- Comprehensive training and evaluation on large datasets from CASP15, CASP16, and Voro-CASP with rigorous model selection.
- Demonstration of superior performance compared to alternative equivariant architectures and existing methods in ranking and quality prediction of protein interfaces.

## About the professor

**Debswapna Bhattacharya** — Associate Professor, Department of Computer Science, Virginia Tech.

Research interests: computational biology & bioinformatics, applied machine learning, artificial intelligence (AI) for structural biology, AI-driven biomedical data science

### Research links

- [Faculty/profile page](https://people.cs.vt.edu/dbhattacharya)
- [Resolved homepage](https://people.cs.vt.edu/dbhattacharya/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ORIGAMI paper, start with foundational knowledge of equivariant graph neural networks and graph convolutional neural networks, which underpin the model's architecture and its SO(3)-equivariance property. Next, gain biological context on protein-protein interfaces and structural quality assessment to appreciate the problem domain and evaluation metrics. Finally, focus on the core concept of ORIGAMI itself, featuring the authors' own talk or the closest available advanced presentations on orientation-aware graph neural networks for protein interface assessment.

### equivariant graph neural networks lecture *(prerequisite)*
Equivariant graph neural networks are critical to understanding how ORIGAMI preserves geometric relationships in protein interfaces via SO(3)-equivariance. These lectures provide rigorous academic coverage of the mathematical foundations and implementations of equivariant GNNs, essential for grasping the model's core innovation.

*How the paper uses it:* ORIGAMI preserves SO(3)-equivariance through an equivariant message propagation scheme that maintains geometric relationships.

▶ [E(n) Equivariant Graph Neural Networks - ECS 289G Talk](https://www.youtube.com/watch?v=QC3LkKm8jL8) — PEDDI SAI VIVEK · 1:11:25 · 4 years ago

### graph convolutional neural networks lecture *(prerequisite)*
Graph convolutional neural networks form the backbone of ORIGAMI's multi-layer message passing architecture. These lectures provide a detailed understanding of graph convolutions, which is necessary to appreciate how ORIGAMI processes interfacial residue features in spatial graphs.

*How the paper uses it:* ORIGAMI uses a multi-layer graph convolutional architecture that processes scalar and vector node representations.

▶ [Graph Convolutional Networks - Oxford Geometric Deep ...](https://www.youtube.com/watch?v=CwHNUX2GWvE) — Federico Barbero · 13:56

### protein-protein interface structural biology seminar *(prerequisite)*
Understanding the biological and structural context of protein-protein interfaces is essential to appreciate the significance of ORIGAMI's interface quality assessment. These seminars provide advanced insights into protein interactions and structural biology relevant to the paper's application domain.

*How the paper uses it:* ORIGAMI evaluates the quality of protein-protein interfaces in multimeric complexes, fundamental to biological processes.

▶ [Protein-Protein Interfaces](https://www.youtube.com/watch?v=EhZqF0-VaJ8) — RosettaCommons · 7:49

### protein structure quality assessment lecture *(prerequisite)*
Protein structure quality assessment lectures explain the evaluation metrics and challenges in assessing protein models, including interface quality. This background is crucial for understanding ORIGAMI's prediction of the interface Local Distance Difference Test (iLDDT) score and its benchmarking.

*How the paper uses it:* ORIGAMI predicts interface quality using the interface Local Distance Difference Test (iLDDT) score.

▶ [Other Protein ML Tools](https://www.youtube.com/watch?v=DA0aMt_f2T0) — RosettaCommons · 25:35

### orientation-aware message passing neural networks lecture
Orientation-aware message passing is the central innovation in ORIGAMI, enabling integration of scalar and vector residue features while preserving geometric equivariance. These talks provide advanced insights into message passing neural networks tailored for atomistic and molecular systems, closely related to ORIGAMI's approach.

*How the paper uses it:* ORIGAMI employs orientation-aware message passing with scalar and vector features for interface assessment.

▶ [Mihail Bogojeski - Message passing neural networks for atomistic systems: Molecules - IPAM at UCLA](https://www.youtube.com/watch?v=ZgEMv-t1B_g) — Institute for Pure & Applied Mathematics (IPAM) · 24:28 · 4 years ago

### ORIGAMI protein interface assessment talk *(the paper's own talk)*
The authors' own talk or the closest advanced presentation on ORIGAMI or related orientation-aware graph neural networks provides the most direct and detailed insight into the model's design, training, and evaluation. This is essential for a comprehensive understanding of the paper's contributions and results.

*How the paper uses it:* Direct presentation of ORIGAMI by the authors or closely related experts offers deep insight into the novel method.

▶ [MDLW01 | Prof. Yuguang Wang | How Framelets Enhance Graph Neural Networks](https://www.youtube.com/watch?v=0ppuPA5SRP4) — INI Seminar Room 1 · 7 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand ORIGAMI, start with the biological context of protein-protein interfaces to grasp what the model evaluates. Next, learn the basics of graph convolutional neural networks, the core ML architecture ORIGAMI builds on. Then, study equivariant graph neural networks to understand how geometric relationships are preserved. Finally, explore the orientation-aware message passing concept central to ORIGAMI's innovation.

### protein-protein interface structural biology seminar *(prerequisite)*
Protein-protein interfaces are where two or more protein chains physically interact, crucial for biological functions. Understanding these interfaces' structural properties helps appreciate why assessing their quality matters. This section provides foundational biological context for what ORIGAMI evaluates.

*How the paper uses it:* ORIGAMI assesses the quality of protein-protein interfaces in multimeric complexes, so understanding these interfaces is essential.

▶ [Protein-Protein Interfaces](https://www.youtube.com/watch?v=EhZqF0-VaJ8) — RosettaCommons · 7:49

### graph convolutional neural networks lecture *(prerequisite)*
Graph convolutional neural networks (GCNNs) extend traditional neural networks to data structured as graphs, enabling learning from nodes and their connections. This concept is key to how ORIGAMI models interfacial residues and their spatial relationships. This section introduces the core ML architecture underlying ORIGAMI's message passing.

*How the paper uses it:* ORIGAMI uses a multi-layer graph convolutional neural network to process interfacial residue features represented as graph nodes.

▶ [Graph Convolutional Networks (GCNs) made simple](https://www.youtube.com/watch?v=2KRAOZIULzw) — WelcomeAIOverlords · 6 years ago

### equivariant graph neural networks lecture *(prerequisite)*
Equivariant graph neural networks preserve geometric symmetries such as rotations, ensuring that model outputs transform predictably with input changes. This is crucial for protein structures where 3D orientation matters. This section explains how ORIGAMI maintains geometric relationships through SO(3)-equivariance.

*How the paper uses it:* ORIGAMI preserves SO(3)-equivariance to maintain geometric relationships in protein interfaces during message passing.

▶ [Group Equivariant Deep Learning - Lecture 3.1: Motivation for SE(3) equivariant graph NNs](https://www.youtube.com/watch?v=kly4xvYbb8o) — Erik Bekkers · 4 years ago

### orientation-aware message passing neural networks lecture
Orientation-aware message passing integrates both scalar and vector features in graph nodes, allowing the network to capture directional information. This innovation enables ORIGAMI to model residue orientations explicitly, improving interface quality predictions. This section covers the central message passing mechanism unique to ORIGAMI.

*How the paper uses it:* ORIGAMI's core innovation is an orientation-aware message passing scheme combining scalar and vector residue features for interface assessment.

▶ [Learning Equivariant and Hybrid Message Passing on Graphs | Max Welling](https://www.youtube.com/watch?v=lzOxY1Y6URA) — Intelligent Medical Systems · 6 years ago

## Already in your library

- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and apply ORIGAMI's orientation-aware graph neural network approach for protein-protein interface quality assessment. Starting with a beginner project that visualizes and computes a simple interface quality metric on a small protein complex, you then implement a core equivariant graph neural network model for interface quality prediction on a public dataset at intermediate level. Finally, the advanced project extends ORIGAMI to address one of its stated limitations by incorporating distal interactions beyond the 24 Å cutoff, demonstrating a genuine research extension.

### Beginner — Visualizing Protein Interface Residue Graphs and Computing iLDDT Scores
*Effort: a weekend, ~8 hours*

You build a small tool that loads a single multimeric protein complex PDB file, identifies interface residues within a 24 Å cutoff, constructs a spatial k-nearest neighbor graph of these residues, and computes a simplified interface Local Distance Difference Test (iLDDT) score between a model and a reference structure. You also visualize the interface graph and residue orientations in 3D using an interactive viewer.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core concept of representing protein interfaces as spatial graphs of residues and the use of iLDDT as a quality metric, foundational to ORIGAMI's approach.

**Grounded in:** The model predicts interface quality using the interface Local Distance Difference Test (iLDDT) score.

**Tech stack:** Python 3.11, Biopython, Py3Dmol, NumPy, Matplotlib

**Data:** Use a publicly available PDB file of a known multimeric protein complex from the Protein Data Bank as a substitute for the paper's dataset.

**Build it:**

1. Load a multimeric protein complex PDB file and parse residue coordinates using Biopython.
2. Identify interface residues by selecting residues with any atom within 24 Å of residues in another chain.
3. Construct a k-nearest neighbor graph (k ~ 10) of interface residues based on spatial coordinates.
4. Implement a simplified iLDDT score calculation comparing the model structure to a reference structure.
5. Visualize the interface graph and residue orientations interactively using Py3Dmol.
6. Document the process and results in a README with screenshots and explanations.

**Ships as:** A GitHub repository with scripts to parse PDB files, build interface graphs, compute iLDDT scores, and visualize the interface, accompanied by a clear README explaining the workflow and results.

**Stretch goal:** Add scalar and vector residue features (e.g., residue type, backbone orientation vectors) to the graph nodes and visualize these features.

### Intermediate — Reimplementing ORIGAMI's Equivariant Graph Neural Network for Interface Quality Prediction
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of ORIGAMI's multi-layer SO(3)-equivariant graph convolutional neural network that processes scalar and vector features of interfacial residues to predict interface quality scores (iLDDT). You train and evaluate the model on a smaller public dataset of protein complexes, comparing performance against a baseline graph neural network without equivariance.

**Why it shows you understood the paper:** This project proves you can translate the paper's core method—orientation-aware equivariant message passing on residue graphs—into a working model and understand its impact on interface quality prediction.

**Grounded in:** Development of an orientation-aware graph neural network architecture (ORIGAMI) that integrates scalar and vector residue features for interface assessment.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn

**Data:** Use a publicly available subset of protein complex structures from the Protein Data Bank or CASP datasets if accessible; otherwise, simulate interface residue graphs from PDB files.

**Build it:**

1. Implement data preprocessing to extract interface residue graphs with scalar and vector features from PDB files.
2. Build a multi-layer SO(3)-equivariant graph convolutional neural network inspired by ORIGAMI's architecture using PyTorch Geometric.
3. Implement a baseline graph neural network without equivariant message passing for comparison.
4. Train both models to predict interface iLDDT scores on the dataset.
5. Evaluate and compare models using Pearson and Spearman correlation metrics.
6. Write a detailed report and README explaining the implementation, training, and evaluation results.

**Ships as:** A GitHub repository containing the data preprocessing scripts, model implementations, training code, evaluation scripts, and a report comparing the equivariant model to the baseline.

**Stretch goal:** Incorporate ablation studies on the number of neighbors and layers to observe their effect on model performance.

### Advanced — Extending ORIGAMI to Incorporate Distal Interactions Beyond 24 Å Cutoff
*Effort: 3+ weeks*

You extend the ORIGAMI model by modifying the graph construction and message passing to include distal residue interactions beyond the original 24 Å cutoff, aiming to capture relevant long-range effects on interface quality. You evaluate whether incorporating these distal interactions improves prediction accuracy on a protein complex dataset and analyze computational trade-offs.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper and demonstrates your ability to innovate on the original method, potentially contributing new insights into protein interface assessment.

**Grounded in:** The model primarily focuses on interface regions defined by a 24 Å cutoff, which may exclude some relevant distal interactions.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn, Docker

**Data:** Use the same dataset as the intermediate project, assembled from public PDB files or CASP datasets if accessible.

**Build it:**

1. Analyze the original ORIGAMI graph construction to understand the 24 Å cutoff and neighbor selection.
2. Modify the graph construction to include residues beyond 24 Å, possibly with a weighted edge scheme reflecting distance.
3. Adapt the equivariant message passing layers to handle larger graphs efficiently.
4. Train the extended model and compare its interface quality prediction performance to the original cutoff model.
5. Perform computational efficiency analysis regarding graph size and training time.
6. Document the methodology, results, and implications in a comprehensive README and report.

**Ships as:** A GitHub repository with the extended model code, training and evaluation scripts, efficiency analysis, and a detailed report discussing the impact of including distal interactions.

**Stretch goal:** Incorporate additional biochemical features (e.g., residue hydrophobicity, charge) into node features to further improve predictions.

_No code or datasets were released by the paper's authors; all projects rely on public PDB files or simulated data as substitutes._
