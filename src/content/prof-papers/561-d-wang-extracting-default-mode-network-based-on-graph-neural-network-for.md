---
title: "561 · Extracting default mode network based on graph neural network for resting state fMRI study — D. Wang"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-d-wang"
source_hash: "465eb801214b07822680a894cf281cb081b2b3f67d096a0fe382f6697fa69c99"
sequence: 561
generator: "outreach-garden: managed"
---

# 561 · Extracting default mode network based on graph neural network for resting state fMRI study

## At a glance

- **Professor:** D. Wang
- **Institution:** Middle Tennessee State University (Acceptance Rate: 73%)
- **Paper:** [Extracting default mode network based on graph neural network for resting state fMRI study](https://public-pages-files-2025.frontiersin.org/journals/neuroimaging/articles/10.3389/fnimg.2022.963125/pdf)
- **Authors:** Donglin Wang, Qiang Wu, Don Hong
- **Year:** 2022

## Paper overview

This study proposes using a graph neural network method called graphSAGE to analyze resting-state fMRI data and extract the brain's default mode network (DMN). Compared to traditional methods like seed-based correlation, independent component analysis, and dictionary learning, graphSAGE provides clearer, more robust, and reliable identification of brain regions involved in the DMN without relying on strict prior assumptions.

### Why it matters

**Research problem:** Identifying intrinsic connectivity networks such as the default mode network (DMN) from resting-state fMRI data is challenging due to limitations of existing methods that rely on prior assumptions, seed selection, or component number specification.

**Why it matters:** Understanding the brain's functional connectivity, especially the DMN, is crucial for insights into brain development, cognition, and various neurological and psychiatric disorders. More robust and reliable methods for extracting these networks can improve research and clinical applications.

**Key contributions:**

- Proposed the use of graphSAGE to extract the DMN from resting-state fMRI data.
- Demonstrated that graphSAGE provides clearer and more robust identification of DMN regions compared to seed-based correlation, ICA, and dictionary learning.
- Showed that graphSAGE requires fewer and more relaxed assumptions, handling single-subject and group analyses simultaneously.
- Provided detailed methodology and parameter settings for applying graphSAGE to fMRI data.

## About the professor

**D. Wang** — Department of Mathematical Sciences, Computational and Data Science Program, Middle Tennessee State University (Acceptance Rate: 73%).

Research interests: Graph Neural Networks, Autism Spectrum Disorder, Biomarker discovery

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, node embedding techniques, neighborhood aggregation methods
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to structured data.

This background is designed to equip the reader with a solid understanding of Graph Neural Networks (GNNs), specifically the concepts and techniques relevant to graphSAGE used in the paper for analyzing resting-state fMRI data. The rigorous course option provides a deep, structured university-level introduction to deep learning and neural networks, including foundational knowledge needed to grasp GNNs in context. The fast track offers a concise, focused series on GNN basics and variants, ideal for quickly gaining intuition and practical understanding without committing to a full course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Lectures 1-4, about 6 hours total — covering introduction to deep learning, supervised learning, project lifecycle, and generative models, which build the foundation for understanding graph neural networks.

*Why it unblocks this paper:* Stanford CS230: Deep Learning I Autumn 2025 is a rigorous, university-level course covering foundational deep learning concepts including neural network architectures and training techniques that underpin graph neural networks like graphSAGE. It provides the necessary depth to understand how GNNs fit into the broader deep learning landscape, which is essential for fully grasping the methodology and novelty of the paper.

*If you want all of it:* 13.9 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLSgGvve8UweGx4_6hhrF3n4wpHf_RV76_) — WelcomeAIOverlords · 11 videos · 5.9h across 11 episodes

**Watch only this:** Episodes 1-5, about 2.7 hours total — covering graph basics, graph convolutional networks, relational GCNs, graph attention networks, and message passing, which together explain the core ideas behind graphSAGE.

*Why it unblocks this paper:* The 'Graph Neural Networks' series by WelcomeAIOverlords offers a clear, concise introduction to GNN concepts including neighborhood aggregation and graph convolutional networks, directly relevant to understanding graphSAGE. Its approachable style and focused episodes make it ideal for quickly building intuition on GNNs without the time commitment of a full course.

*If you want all of it:* 5.9 hours across all 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on extracting the default mode network (DMN) using graphSAGE from resting-state fMRI data, start with foundational knowledge on graph neural networks and resting-state fMRI analysis, followed by neuroscience insights into the DMN itself. Finally, focus on the authors' own talk to grasp their specific methodology and contributions in applying graphSAGE to fMRI data.

### Graph neural networks fundamentals *(prerequisite)*
This section covers the core machine learning techniques underlying the paper's method, specifically graph neural networks (GNNs). Understanding GNN fundamentals such as node embeddings, neighborhood aggregation, and inductive learning is crucial for grasping how graphSAGE operates on brain connectivity graphs.

*How the paper uses it:* GraphSAGE, a type of GNN, is the central algorithm used to extract the DMN from fMRI data in this study.

▶ [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Graph Neural Networks](https://www.youtube.com/watch?v=ZfK4FDk9uy8) — Stanford Online · 1:16:18 · 2y ago

### Resting-state fMRI analysis *(prerequisite)*
This section provides foundational knowledge about resting-state fMRI data, including its neuronal basis, potential artifacts, and connectivity analysis methods. Such understanding is essential to appreciate the nature of the data and challenges addressed by the paper.

*How the paper uses it:* The paper analyzes resting-state fMRI data to construct brain graphs for DMN extraction using graphSAGE.

▶ [Resting state functional connectivity: Part 2 - Evidence that fluctuations are neuronal](https://www.youtube.com/watch?v=_867wiM_kLY) — Neuroimaging Research Methods · 10:22 · 5y ago

### Default mode network neuroscience *(prerequisite)*
This section delves into the neuroscience of the default mode network, its brain regions, functional roles, and significance in cognition and disorders. A solid grasp of DMN properties contextualizes the importance of accurately extracting this network from fMRI data.

*How the paper uses it:* The study aims to robustly identify the DMN regions from resting-state fMRI using graphSAGE.

▶ [21. Brain Networks](https://www.youtube.com/watch?v=SchmVoc5NzY) — MIT OpenCourseWare · 1:23:23 · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features a direct presentation by the authors or closely related academic talks that provide insights into their methodology, results, and implications. It is the most precise source for understanding the paper's novel application of graphSAGE to extract the DMN.

*How the paper uses it:* The authors' talk offers first-hand explanation of using graphSAGE for DMN extraction from resting-state fMRI data.

▶ [The Unique Cytoarchitecture and Wiring of The Default Mode Network](https://www.youtube.com/watch?v=BW9z1uCc1Xo) — BigBrain Project · 21:14 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about the brain's default mode network (DMN) and its neuroscience significance, which is the target brain network extracted in the study. Next, grasp the basics of resting-state fMRI, the imaging data used to study brain connectivity. Then, build foundational knowledge of graph neural networks (GNNs), the machine learning technique applied here. Finally, focus on the GraphSAGE method, the specific GNN algorithm used to extract the DMN from fMRI data.

### Default mode network neuroscience *(prerequisite)*
The default mode network (DMN) is a set of brain regions active when the mind is at rest and not focused on the outside world. Understanding the DMN's role in cognition and brain function provides essential context for why extracting it from fMRI data matters. This section introduces the DMN's anatomy, function, and relevance to mental health and brain research.

*How the paper uses it:* The paper targets the DMN as the intrinsic connectivity network to extract from resting-state fMRI data.

▶ [What Your Brain Is Really Doing When You're Doing 'Nothing'](https://www.youtube.com/watch?v=yESSv7OgCv0) — Quanta Magazine · 8:31 · 2y ago

### Resting-state fMRI analysis *(prerequisite)*
Resting-state fMRI measures brain activity by detecting blood flow changes when a subject is not performing any task. This section explains how resting-state fMRI data captures functional connectivity between brain regions, forming the basis for identifying networks like the DMN. It also covers preprocessing and challenges in analyzing this data.

*How the paper uses it:* The study uses resting-state fMRI data to construct brain graphs for network extraction.

▶ [Resting state functional connectivity: Part 2 - Evidence that fluctuations are neuronal](https://www.youtube.com/watch?v=_867wiM_kLY) — Neuroimaging Research Methods · 10:22 · 5y ago

### Graph neural networks fundamentals *(prerequisite)*
Graph neural networks (GNNs) are machine learning models designed to analyze data structured as graphs, where nodes and edges represent entities and their relationships. This section introduces how GNNs learn node representations by aggregating information from neighboring nodes, enabling analysis of complex relational data like brain connectivity graphs.

*How the paper uses it:* The paper applies a GNN approach to learn embeddings of brain regions based on their functional connectivity.

▶ [Deep Learning 59: Fundamentals of Graph Neural Network](https://www.youtube.com/watch?v=1miz7yggcTg) — Ahlad Kumar · 17:05 · 6y ago

### GraphSAGE method
GraphSAGE is a specific inductive graph neural network technique that generates node embeddings by sampling and aggregating features from a node’s local neighborhood. This method allows learning representations without needing the entire graph upfront, making it suitable for large or dynamic graphs like brain networks. Understanding GraphSAGE clarifies how the paper extracts the DMN robustly and with fewer assumptions.

*How the paper uses it:* GraphSAGE is the core algorithm used to extract the DMN from resting-state fMRI brain graphs in the study.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 17.2 - GraphSAGE Neighbor Sampling](https://www.youtube.com/watch?v=LLUxwHc7O4A) — Stanford Online · 16:50 · 5y ago

## Already in your library

- [Resting State Functional Connectivity: Part 1 - Introduction](https://www.youtube.com/watch?v=5yDN2q7gUaM) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Lecture: Graph Neural Networks](https://www.youtube.com/watch?v=84_R03D89iE) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Intro to graph neural networks (ML Tech Talks)](https://www.youtube.com/watch?v=8owQBFAHw7E) — also for: Understanding and Reducing Metadata-Driven Host Overheads in Sampling-Based GNN Training (Bin Ren)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [Gerard presents: Inductive Representation Learning on Large Graphs](https://www.youtube.com/watch?v=8qXSRY2EeFE) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [GraphSAGE: Inductive Representation Learning on Large Graphs (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=3AzphNf5ja8) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's use of graphSAGE for extracting the default mode network (DMN) from resting-state fMRI data. The beginner project familiarizes you with graph construction and visualization of functional connectivity. The intermediate project implements graphSAGE on a public resting-state fMRI dataset to extract the DMN and compares it with seed-based correlation. The advanced project extends the method by incorporating temporal dynamics using a temporal-adaptive graph convolution network, addressing a key limitation noted in the paper.

### Beginner — Visualize Resting-State fMRI Functional Connectivity Graph
*Effort: a weekend, ~8 hours*

You build a simple brain graph where nodes represent predefined brain regions of interest (ROIs) and edges represent functional connectivity correlations computed from resting-state fMRI time series. You visualize this graph using network visualization tools to show the connectivity structure.

**Why it shows you understood the paper:** This project shows you understand how to represent resting-state fMRI data as a graph, a foundational step in the paper's approach. A professor would see you grasp the concept of nodes as ROIs and edges as connectivity correlations, which is critical for applying graph neural networks.

**Grounded in:** The authors construct brain graphs where nodes represent regions of interest (ROIs) and edges represent functional connectivity correlations.

**Tech stack:** Python 3.11, numpy, networkx, matplotlib, nilearn

**Data:** Use a publicly available resting-state fMRI dataset such as a single subject from the 1000 Functional Connectomes Project or simulate synthetic time series data for a small number of ROIs.

**Build it:**

1. Download or simulate resting-state fMRI time series data for ~10-20 ROIs.
2. Compute pairwise Pearson correlation coefficients between ROI time series to form an adjacency matrix.
3. Construct a graph using networkx where nodes are ROIs and edges are weighted by correlation strength.
4. Visualize the graph with node labels and edge weights using matplotlib or networkx drawing utilities.
5. Write a README explaining the graph construction and visualization process.

**Ships as:** A GitHub repository containing code to build and visualize a functional connectivity graph from resting-state fMRI data, with clear documentation and example outputs.

**Stretch goal:** Add interactive visualization using Plotly or PyVis to explore connectivity strengths dynamically.

### Intermediate — Implement GraphSAGE to Extract Default Mode Network from Resting-State fMRI
*Effort: 1-3 weekends, ~20 hours*

You implement the graphSAGE algorithm to learn node embeddings from resting-state fMRI functional connectivity graphs and cluster ROIs to identify the default mode network. You compare the graphSAGE-based extraction with a seed-based correlation baseline on the same dataset.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method—applying graphSAGE to fMRI graphs—and reproduce its key result of clearer, more robust DMN identification compared to traditional methods. A professor would see you understand graph neural network embedding and evaluation in this domain.

**Grounded in:** The authors apply graphSAGE to resting-state fMRI data to extract the DMN, showing clearer and more robust identification than seed-based correlation.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric or StellarGraph, numpy, scikit-learn, matplotlib

**Data:** Use resting-state fMRI data from the 1000 Functional Connectomes Project (publicly available) as a substitute for the paper's datasets.

**Build it:**

1. Preprocess fMRI time series to compute functional connectivity matrices for ROIs.
2. Construct graphs where nodes are ROIs and edges are weighted by connectivity.
3. Implement or use an existing graphSAGE implementation (e.g., StellarGraph library) to learn node embeddings.
4. Cluster node embeddings (e.g., k-means) to identify DMN regions.
5. Implement seed-based correlation for the same data as a baseline.
6. Compare and visualize the DMN regions extracted by graphSAGE and seed-based correlation.
7. Document methodology, parameter settings, and results in README.

**Verified links from the paper:**

- <https://github.com/stellargraph/stellargraph> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to preprocess fMRI data, run graphSAGE, perform clustering, compare with seed-based correlation, and visualize DMN extraction results.

**Stretch goal:** Add quantitative metrics such as silhouette scores or stability measures to evaluate clustering robustness.

### Advanced — Extend GraphSAGE with Temporal-Adaptive Graph Convolution for Dynamic Functional Connectivity
*Effort: a few weeks, ~40+ hours*

You develop a temporal-adaptive graph convolutional network (TAGCN) model to capture dynamic changes in resting-state fMRI functional connectivity over time, extending the static graphSAGE approach. You apply this model to sliding-window fMRI data to extract temporally evolving DMN patterns.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by incorporating temporal dynamics into graph neural network analysis of fMRI data. A professor would recognize your ability to extend state-of-the-art methods and tackle open research challenges in brain network modeling.

**Grounded in:** The study focused on static functional connectivity and suggested incorporating temporal-adaptive graph convolution networks (TAGCN) to capture dynamic spatial and temporal information in rs-fMRI as future work.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric or StellarGraph, numpy, scikit-learn, matplotlib

**Data:** Use publicly available resting-state fMRI datasets with sufficient temporal resolution (e.g., 1000 Functional Connectomes Project) and preprocess into sliding-window connectivity graphs.

**Build it:**

1. Preprocess resting-state fMRI time series into overlapping sliding windows.
2. Compute functional connectivity matrices for each window to form a sequence of graphs.
3. Implement or adapt a temporal-adaptive graph convolutional network (TAGCN) model to learn spatiotemporal node embeddings.
4. Train the model to capture dynamic connectivity patterns and extract evolving DMN regions.
5. Visualize temporal changes in DMN membership and compare with static graphSAGE results.
6. Document methodology, model architecture, training details, and findings in README.

**Verified links from the paper:**

- <https://github.com/stellargraph/stellargraph> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing TAGCN for dynamic fMRI graph analysis, demonstrating temporal DMN extraction and comparison to static methods.

**Stretch goal:** Integrate multimodal imaging data (e.g., structural MRI) or apply transfer learning for clinical population analysis.
